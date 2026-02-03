/**
 * WebSocket Connection Handler
 * Manages WebSocket connection for IM service
 */

import {
  ConnectionState,
  DEFAULT_WS_URL,
  RECONNECT_CONFIG,
  HEARTBEAT_CONFIG
} from './constants'
import { IMMessage } from './codec'

/**
 * WebSocket Connection Class
 */
export class WebSocketConnection {
  constructor(url, options = {}) {
    this.url = url || DEFAULT_WS_URL
    this.ws = null
    this.state = ConnectionState.DISCONNECTED
    this.reconnectAttempts = 0
    this.reconnectTimer = null
    this.heartbeatTimer = null
    this.heartbeatTimeoutTimer = null
    this.messageQueue = []
    this.pendingRequests = new Map() // seq -> { resolve, reject, timeout }

    // Event callbacks
    this.onMessage = options.onMessage || null
    this.onStateChange = options.onStateChange || null
    this.onError = options.onError || null
    this.onReconnect = options.onReconnect || null

    // Auto-reconnect
    this.autoReconnect = options.autoReconnect !== false

    // Transform HTTP(S) URL to WS(S)
    this._transformUrl()
  }

  /**
   * Transform HTTP(S) URL to WS(S)
   */
  _transformUrl() {
    if (!this.url) return

    if (this.url.startsWith('https://')) {
      this.url = this.url.replace('https://', 'wss://')
    } else if (this.url.startsWith('http://')) {
      this.url = this.url.replace('http://', 'ws://')
    }

    // Add /ws suffix if not present
    if (!this.url.endsWith('/ws')) {
      this.url = this.url.endsWith('/') ? this.url + 'ws' : this.url + '/ws'
    }
  }

  /**
   * Connect to WebSocket server
   */
  connect() {
    if (this.ws && (this.ws.readyState === WebSocket.CONNECTING || this.ws.readyState === WebSocket.OPEN)) {
      console.log('[WebSocket] Already connecting or connected')
      return Promise.resolve()
    }

    this._setState(ConnectionState.CONNECTING)

    return new Promise((resolve, reject) => {
      try {
        console.log('[WebSocket] Connecting to:', this.url)
        this.ws = new WebSocket(this.url)
        this.ws.binaryType = 'arraybuffer'

        // Track if connection was established
        let connectionEstablished = false

        this.ws.onopen = () => {
          console.log('[WebSocket] Connected to', this.url)
          connectionEstablished = true
          this.reconnectAttempts = 0
          this._setState(ConnectionState.CONNECTED)
          this._startHeartbeat()
          this._flushMessageQueue()
          resolve()
        }

        this.ws.onmessage = (event) => {
          this._handleMessage(event.data)
        }

        this.ws.onerror = (errorEvent) => {
          console.error('[WebSocket] Error event - URL:', this.url, 'readyState:', this.ws?.readyState)

          // Log detailed connection info for debugging
          console.error('[WebSocket] Connection details:', {
            url: this.url,
            protocol: window.location.protocol,
            host: window.location.host,
            wsReadyState: this.ws?.readyState,
            wsReadyStateText: this._getReadyStateText(this.ws?.readyState),
            connectionEstablished
          })

          this._setState(ConnectionState.ERROR)
          if (this.onError) {
            this.onError(new Error(this._getErrorMessage(errorEvent)))
          }
        }

        this.ws.onclose = (event) => {
          console.log('[WebSocket] Connection closed - code:', event.code, 'reason:', event.reason, 'wasClean:', event.wasClean)
          this._stopHeartbeat()
          this._setState(ConnectionState.DISCONNECTED)
          this._clearPendingRequests()

          // If connection was never established, reject the promise
          if (!connectionEstablished) {
            reject(new Error(this._getCloseErrorMessage(event.code)))
          }

          if (this.autoReconnect) {
            this._scheduleReconnect()
          }
        }

        // Set up connection timeout
        setTimeout(() => {
          if (!connectionEstablished && this.ws) {
            console.error('[WebSocket] Connection timeout - URL:', this.url)
            reject(new Error('Connection timeout'))
            this.ws.close()
          }
        }, 10000) // 10 second timeout
      } catch (error) {
        console.error('[WebSocket] Connection failed:', error)
        this._setState(ConnectionState.ERROR)
        reject(error)
      }
    })
  }

  /**
   * Get WebSocket ready state as text
   */
  _getReadyStateText(state) {
    switch (state) {
      case 0: return 'CONNECTING'
      case 1: return 'OPEN'
      case 2: return 'CLOSING'
      case 3: return 'CLOSED'
      default: return 'UNKNOWN'
    }
  }

  /**
   * Get error message from error event
   */
  _getErrorMessage(error) {
    return `WebSocket connection error to ${this.url}. Please check: 1) Server is running, 2) Port is accessible, 3) SSL certificate is valid`
  }

  /**
   * Get close error message from close code
   */
  _getCloseErrorMessage(code) {
    const messages = {
      1000: 'Normal closure',
      1001: 'Endpoint going away',
      1002: 'Protocol error',
      1003: 'Unsupported data',
      1006: 'Connection closed abnormally (network error, server down, or SSL issue)',
      1007: 'Invalid frame payload data',
      1008: 'Policy violation',
      1009: 'Message too big',
      1010: 'Missing extension',
      1011: 'Internal error',
      1015: 'TLS handshake failure'
    }
    return messages[code] || `Connection closed with code ${code}`
  }

  /**
   * Disconnect from WebSocket server
   */
  disconnect() {
    this.autoReconnect = false
    this._clearReconnectTimer()
    this._stopHeartbeat()

    if (this.ws) {
      this.ws.close(1000, 'Client disconnect')
      this.ws = null
    }
  }

  /**
   * Send message through WebSocket
   */
  send(message) {
    return new Promise((resolve, reject) => {
      if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
        // Queue message for later
        this.messageQueue.push({ message, resolve, reject })
        console.log('[WebSocket] Message queued, waiting for connection')
        return
      }

      try {
        const data = message instanceof IMMessage ? message.encode() : message
        this.ws.send(data)
        resolve()
      } catch (error) {
        console.error('[WebSocket] Send failed:', error)
        reject(error)
      }
    })
  }

  /**
   * Send request and wait for response
   */
  sendRequest(message, timeout = 30000) {
    return new Promise((resolve, reject) => {
      const seq = message.seq

      // Set up timeout
      const timer = setTimeout(() => {
        this.pendingRequests.delete(seq)
        reject(new Error(`Request timeout for seq: ${seq}`))
      }, timeout)

      // Store pending request
      this.pendingRequests.set(seq, {
        resolve: (data) => {
          clearTimeout(timer)
          resolve(data)
        },
        reject: (error) => {
          clearTimeout(timer)
          reject(error)
        }
      })

      // Send message
      this.send(message).catch((error) => {
        clearTimeout(timer)
        this.pendingRequests.delete(seq)
        reject(error)
      })
    })
  }

  /**
   * Handle incoming message
   */
  _handleMessage(data) {
    try {
      const message = IMMessage.decode(data)

      // Reset heartbeat timeout on any message
      this._resetHeartbeatTimeout()

      // Handle response messages
      if (message.messageType === 1) { // RESPONSE
        const pending = this.pendingRequests.get(message.seq)
        if (pending) {
          this.pendingRequests.delete(message.seq)
          if (message.ret === 200) { // Success
            pending.resolve(message)
          } else {
            pending.reject(new Error(`Request failed with ret: ${message.ret}`))
          }
        }
      }

      // Handle notify messages (messageType === 2)
      // Handle request messages (messageType === 0) - server can send requests too

      // Call user callback
      if (this.onMessage) {
        this.onMessage(message)
      }
    } catch (error) {
      console.error('[WebSocket] Failed to decode message:', error)
    }
  }

  /**
   * Start heartbeat
   */
  _startHeartbeat() {
    this._stopHeartbeat()

    this.heartbeatTimer = setInterval(() => {
      this._sendHeartbeat()
    }, HEARTBEAT_CONFIG.INTERVAL)

    this._resetHeartbeatTimeout()
  }

  /**
   * Stop heartbeat
   */
  _stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer)
      this.heartbeatTimer = null
    }
    if (this.heartbeatTimeoutTimer) {
      clearTimeout(this.heartbeatTimeoutTimer)
      this.heartbeatTimeoutTimer = null
    }
  }

  /**
   * Reset heartbeat timeout
   */
  _resetHeartbeatTimeout() {
    if (this.heartbeatTimeoutTimer) {
      clearTimeout(this.heartbeatTimeoutTimer)
    }

    this.heartbeatTimeoutTimer = setTimeout(() => {
      console.warn('[WebSocket] Heartbeat timeout, reconnecting...')
      if (this.ws) {
        this.ws.close()
      }
    }, HEARTBEAT_CONFIG.TIMEOUT)
  }

  /**
   * Send heartbeat ping
   */
  _sendHeartbeat() {
    const ping = IMMessage.createPing(Date.now())
    this.send(ping).catch((error) => {
      console.error('[WebSocket] Heartbeat failed:', error)
    })
  }

  /**
   * Schedule reconnection
   */
  _scheduleReconnect() {
    this._clearReconnectTimer()

    if (this.reconnectAttempts >= RECONNECT_CONFIG.MAX_ATTEMPTS) {
      console.error('[WebSocket] Max reconnection attempts reached')
      if (this.onError) {
        this.onError(new Error('Max reconnection attempts reached'))
      }
      return
    }

    // Calculate delay with exponential backoff
    const delay = Math.min(
      RECONNECT_CONFIG.INITIAL_DELAY * Math.pow(RECONNECT_CONFIG.DELAY_MULTIPLIER, this.reconnectAttempts),
      RECONNECT_CONFIG.MAX_DELAY
    )

    console.log(`[WebSocket] Scheduling reconnection in ${delay}ms (attempt ${this.reconnectAttempts + 1})`)

    this.reconnectTimer = setTimeout(() => {
      this.reconnectAttempts++
      this._setState(ConnectionState.RECONNECTING)
      this.connect().then(() => {
        if (this.onReconnect) {
          this.onReconnect(this.reconnectAttempts)
        }
      }).catch((error) => {
        console.error('[WebSocket] Reconnection failed:', error)
        this._scheduleReconnect()
      })
    }, delay)
  }

  /**
   * Clear reconnection timer
   */
  _clearReconnectTimer() {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer)
      this.reconnectTimer = null
    }
  }

  /**
   * Flush queued messages
   */
  _flushMessageQueue() {
    if (this.messageQueue.length === 0) return

    console.log(`[WebSocket] Flushing ${this.messageQueue.length} queued messages`)

    const queue = [...this.messageQueue]
    this.messageQueue = []

    for (const { message, resolve, reject } of queue) {
      this.send(message).then(resolve).catch(reject)
    }
  }

  /**
   * Clear pending requests
   */
  _clearPendingRequests() {
    for (const [seq, pending] of this.pendingRequests) {
      pending.reject(new Error('Connection closed'))
    }
    this.pendingRequests.clear()
  }

  /**
   * Set connection state
   */
  _setState(state) {
    if (this.state !== state) {
      console.log('[WebSocket] State change:', this.state, '->', state)
      this.state = state
      if (this.onStateChange) {
        this.onStateChange(state)
      }
    }
  }

  /**
   * Get current connection state
   */
  getState() {
    return this.state
  }

  /**
   * Check if connected
   */
  isConnected() {
    return this.state === ConnectionState.CONNECTED && this.ws && this.ws.readyState === WebSocket.OPEN
  }
}

export default WebSocketConnection

/**
 * Test WebSocket connectivity
 * Useful for diagnosing connection issues
 */
export function testWebSocketConnectivity(url) {
  console.log('[WebSocket Test] Testing connectivity to:', url)

  const testWs = new WebSocket(url)
  let result = null

  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      testWs.close()
      resolve({
        success: false,
        error: 'Connection timeout',
        url
      })
    }, 10000)

    testWs.onopen = () => {
      clearTimeout(timeout)
      testWs.close()
      resolve({
        success: true,
        message: 'Connection successful',
        url
      })
    }

    testWs.onerror = () => {
      clearTimeout(timeout)
      resolve({
        success: false,
        error: 'Connection error',
        url,
        details: 'Check if server is running, port is accessible, and SSL certificate is valid'
      })
    }

    testWs.onclose = (event) => {
      clearTimeout(timeout)
      if (!result) {
        resolve({
          success: false,
          error: `Connection closed with code ${event.code}`,
          url,
          reason: event.reason
        })
      }
    }
  })
}
