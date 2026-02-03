/**
 * WebTransport Connection Handler
 * Alternative to WebSocket using WebTransport API
 * Note: WebTransport is still experimental and may not be supported in all browsers
 * Check browser support: https://developer.mozilla.org/en-US/docs/Web/API/WebTransport
 */

import {
  ConnectionState,
  DEFAULT_WS_URL,
  RECONNECT_CONFIG,
  HEARTBEAT_CONFIG
} from './constants'
import { IMMessage } from './codec'

/**
 * Check if WebTransport is supported
 */
export function isWebTransportSupported() {
  return 'WebTransport' in window
}

/**
 * WebTransport Connection Class
 * Falls back to WebSocket if WebTransport is not supported
 */
export class WebTransportConnection {
  constructor(url, options = {}) {
    this.url = url || DEFAULT_WS_URL
    this.transport = null
    this.state = ConnectionState.DISCONNECTED
    this.reconnectAttempts = 0
    this.reconnectTimer = null
    this.heartbeatTimer = null
    this.heartbeatTimeoutTimer = null
    this.messageQueue = []
    this.pendingRequests = new Map()
    this.unidirectionalStreams = []
    this.incomingStreams = []

    // Event callbacks
    this.onMessage = options.onMessage || null
    this.onStateChange = options.onStateChange || null
    this.onError = options.onError || null
    this.onReconnect = options.onReconnect || null

    // Auto-reconnect
    this.autoReconnect = options.autoReconnect !== false

    // Transform URL to HTTPS (WebTransport requires HTTPS)
    this._transformUrl()
  }

  /**
   * Transform URL to HTTPS for WebTransport
   */
  _transformUrl() {
    if (!this.url) return

    // WebTransport requires HTTPS (like HTTP/3)
    // Convert wss:// to https://
    if (this.url.startsWith('wss://')) {
      this.url = this.url.replace('wss://', 'https://')
    } else if (this.url.startsWith('ws://')) {
      // For development, ws:// becomes http://
      this.url = this.url.replace('ws://', 'http://')
    }

    // Remove /ws suffix if present (WebTransport doesn't use it)
    this.url = this.url.replace(/\/ws$/, '')
  }

  /**
   * Check if WebTransport is supported
   */
  isSupported() {
    return isWebTransportSupported()
  }

  /**
   * Connect to server using WebTransport
   */
  async connect() {
    if (!this.isSupported()) {
      throw new Error('WebTransport is not supported in this browser')
    }

    if (this.transport && this.state === ConnectionState.CONNECTED) {
      console.log('[WebTransport] Already connected')
      return
    }

    this._setState(ConnectionState.CONNECTING)

    try {
      // Create WebTransport instance
      this.transport = new WebTransport(this.url)

      // Wait for connection to be ready
      await this.transport.ready
      console.log('[WebTransport] Connected to', this.url)

      this.reconnectAttempts = 0
      this._setState(ConnectionState.CONNECTED)
      this._startHeartbeat()
      this._flushMessageQueue()

      // Start receiving datagrams
      this._startReceivingDatagrams()

      // Start receiving streams
      this._startReceivingStreams()

      // Handle close
      this.transport.closed.then(() => {
        console.log('[WebTransport] Connection closed normally')
        this._handleClose()
      }).catch((error) => {
        console.error('[WebTransport] Connection closed with error:', error)
        this._handleClose()
      })

    } catch (error) {
      console.error('[WebTransport] Connection failed:', error)
      this._setState(ConnectionState.ERROR)
      throw error
    }
  }

  /**
   * Disconnect from server
   */
  async disconnect() {
    this.autoReconnect = false
    this._clearReconnectTimer()
    this._stopHeartbeat()

    // Close all streams
    for (const stream of this.unidirectionalStreams) {
      try {
        await stream.getWriter().close()
      } catch (e) {
        // Ignore
      }
    }
    this.unidirectionalStreams = []

    // Close incoming streams
    this.incomingStreams = []

    // Close transport
    if (this.transport) {
      try {
        await this.transport.close()
      } catch (e) {
        // Ignore
      }
      this.transport = null
    }
  }

  /**
   * Send message using datagrams
   */
  async send(message) {
    if (!this.transport || this.state !== ConnectionState.CONNECTED) {
      // Queue message for later
      this.messageQueue.push({ message })
      console.log('[WebTransport] Message queued, waiting for connection')
      return
    }

    try {
      const data = message instanceof IMMessage ? message.encode() : message

      // Try to send as datagram first (unreliable but fast)
      if (this.transport.datagrams) {
        const writer = this.transport.datagrams.writable.getWriter()
        try {
          await writer.write(data)
          return
        } catch (error) {
          console.warn('[WebTransport] Datagram send failed, trying stream:', error)
        } finally {
          writer.releaseLock()
        }
      }

      // Fall back to unidirectional stream
      await this._sendViaStream(data)

    } catch (error) {
      console.error('[WebTransport] Send failed:', error)
      throw error
    }
  }

  /**
   * Send data via unidirectional stream
   */
  async _sendViaStream(data) {
    const stream = await this.transport.createUnidirectionalStream()
    this.unidirectionalStreams.push(stream)

    const writer = stream.writable.getWriter()
    try {
      await writer.write(data)
      await writer.close()
    } finally {
      writer.releaseLock()
    }
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
   * Start receiving datagrams
   */
  async _startReceivingDatagrams() {
    if (!this.transport.datagrams) return

    try {
      const reader = this.transport.datagrams.readable.getReader()

      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        this._handleMessage(value)
      }

      reader.releaseLock()
    } catch (error) {
      console.error('[WebTransport] Datagram receive error:', error)
    }
  }

  /**
   * Start receiving streams
   */
  async _startReceivingStreams() {
    try {
      const reader = this.transport.incomingUnidirectionalStreams.getReader()

      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        // Handle incoming stream
        this._handleIncomingStream(value)
      }

      reader.releaseLock()
    } catch (error) {
      console.error('[WebTransport] Stream receive error:', error)
    }
  }

  /**
   * Handle incoming stream
   */
  async _handleIncomingStream(stream) {
    this.incomingStreams.push(stream)

    try {
      const reader = stream.readable.getReader()
      const chunks = []

      while (true) {
        const { value, done } = await reader.read()
        if (done) break
        chunks.push(value)
      }

      // Combine chunks
      const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0)
      const combined = new Uint8Array(totalLength)
      let offset = 0
      for (const chunk of chunks) {
        combined.set(chunk, offset)
        offset += chunk.length
      }

      this._handleMessage(combined)

      reader.releaseLock()
    } catch (error) {
      console.error('[WebTransport] Stream read error:', error)
    }
  }

  /**
   * Handle incoming message
   */
  _handleMessage(data) {
    try {
      const message = IMMessage.decode(data)

      // Reset heartbeat timeout
      this._resetHeartbeatTimeout()

      // Handle response messages
      if (message.messageType === 1) { // RESPONSE
        const pending = this.pendingRequests.get(message.seq)
        if (pending) {
          this.pendingRequests.delete(message.seq)
          if (message.ret === 200) {
            pending.resolve(message)
          } else {
            pending.reject(new Error(`Request failed with ret: ${message.ret}`))
          }
        }
      }

      // Call user callback
      if (this.onMessage) {
        this.onMessage(message)
      }
    } catch (error) {
      console.error('[WebTransport] Failed to decode message:', error)
    }
  }

  /**
   * Handle connection close
   */
  _handleClose() {
    this._stopHeartbeat()
    this._setState(ConnectionState.DISCONNECTED)
    this._clearPendingRequests()

    if (this.autoReconnect) {
      this._scheduleReconnect()
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
      console.warn('[WebTransport] Heartbeat timeout, reconnecting...')
      this._handleClose()
    }, HEARTBEAT_CONFIG.TIMEOUT)
  }

  /**
   * Send heartbeat ping
   */
  _sendHeartbeat() {
    const ping = IMMessage.createPing(Date.now())
    this.send(ping).catch((error) => {
      console.error('[WebTransport] Heartbeat failed:', error)
    })
  }

  /**
   * Schedule reconnection
   */
  _scheduleReconnect() {
    this._clearReconnectTimer()

    if (this.reconnectAttempts >= RECONNECT_CONFIG.MAX_ATTEMPTS) {
      console.error('[WebTransport] Max reconnection attempts reached')
      if (this.onError) {
        this.onError(new Error('Max reconnection attempts reached'))
      }
      return
    }

    const delay = Math.min(
      RECONNECT_CONFIG.INITIAL_DELAY * Math.pow(RECONNECT_CONFIG.DELAY_MULTIPLIER, this.reconnectAttempts),
      RECONNECT_CONFIG.MAX_DELAY
    )

    console.log(`[WebTransport] Scheduling reconnection in ${delay}ms (attempt ${this.reconnectAttempts + 1})`)

    this.reconnectTimer = setTimeout(() => {
      this.reconnectAttempts++
      this._setState(ConnectionState.RECONNECTING)
      this.connect().then(() => {
        if (this.onReconnect) {
          this.onReconnect(this.reconnectAttempts)
        }
      }).catch((error) => {
        console.error('[WebTransport] Reconnection failed:', error)
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

    console.log(`[WebTransport] Flushing ${this.messageQueue.length} queued messages`)

    const queue = [...this.messageQueue]
    this.messageQueue = []

    for (const { message } of queue) {
      this.send(message).catch((error) => {
        console.error('[WebTransport] Failed to send queued message:', error)
      })
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
      console.log('[WebTransport] State change:', this.state, '->', state)
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
    return this.state === ConnectionState.CONNECTED &&
           this.transport &&
           this.transport.ready
  }
}

export default WebTransportConnection
