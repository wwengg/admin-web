/**
 * IM Service - Main Service
 * Integrates WebSocket connection and provides high-level IM APIs
 */

import { WebSocketConnection } from './websocket'
import { IMMessage } from './codec'
import {
  ConnectionState,
  CmdEnum,
  MessageType,
  SessionType,
  IMMessageType
} from './constants'
import protoIm from '@/proto/im.js'
import protoRoot from '@/proto/proto.js'

/**
 * IM Service Class
 * Singleton pattern for managing IM connections
 */
class IMService {
  constructor() {
    this.connection = null
    this.isConnected = false
    this.isLoggedIn = false
    this.token = null
    this.userId = null
    this.user = null
    this.seqCounter = Date.now()

    // Message handlers
    this.messageHandlers = new Map() // cmd -> handler
    this.eventListeners = new Map() // event -> callbacks[]

    // Current room
    this.currentRoomId = null
  }

  /**
   * Initialize IM service
   */
  init(options = {}) {
    const url = options.url || null
    const autoReconnect = options.autoReconnect !== false

    this.connection = new WebSocketConnection(url, {
      autoReconnect,
      onMessage: this._handleMessage.bind(this),
      onStateChange: this._handleStateChange.bind(this),
      onError: this._handleError.bind(this),
      onReconnect: this._handleReconnect.bind(this)
    })

    // Register default handlers
    this._registerDefaultHandlers()

    return this
  }

  /**
   * Connect to server
   */
  async connect() {
    if (!this.connection) {
      throw new Error('IM service not initialized. Call init() first.')
    }

    await this.connection.connect()
    this.isConnected = true

    // Auto-login if token exists
    if (this.token) {
      await this.login(this.token)
    }

    return this
  }

  /**
   * Disconnect from server
   */
  disconnect() {
    if (this.isLoggedIn) {
      this.logout()
    }

    if (this.connection) {
      this.connection.disconnect()
    }

    this.isConnected = false
  }

  /**
   * Login with token
   */
  async login(token) {
    if (!this.isConnected) {
      throw new Error('Not connected to server')
    }

    this.token = token
    const seq = this._getNextSeq()
    const message = IMMessage.createLogin(token, seq, '0')

    try {
      const response = await this.connection.sendRequest(message)
      this.isLoggedIn = true
      this._emit('login', { success: true })
      return response
    } catch (error) {
      console.error('[IM] Login failed:', error)
      this._emit('login', { success: false, error })
      throw error
    }
  }

  /**
   * Logout
   */
  async logout() {
    if (!this.isLoggedIn) {
      return
    }

    const seq = this._getNextSeq()
    const message = new IMMessage({
      cmd: CmdEnum.LOGIN_OUT_C2S2C,
      messageType: MessageType.REQUEST,
      seq
    })

    try {
      await this.connection.sendRequest(message)
    } catch (error) {
      console.error('[IM] Logout failed:', error)
    } finally {
      this.isLoggedIn = false
      this.token = null
      this.userId = null
      this.user = null
      this._emit('logout', { success: true })
    }
  }

  /**
   * Enter room
   */
  async enterRoom(roomId, password = null) {
    if (!this.isLoggedIn) {
      throw new Error('Not logged in')
    }

    const seq = this._getNextSeq()
    const message = IMMessage.createEnterRoom(roomId, password, seq)

    try {
      const response = await this.connection.sendRequest(message)
      this.currentRoomId = roomId
      this._emit('enterRoom', { roomId, success: true })
      return response
    } catch (error) {
      console.error('[IM] Enter room failed:', error)
      this._emit('enterRoom', { roomId, success: false, error })
      throw error
    }
  }

  /**
   * Exit room
   */
  async exitRoom(roomId = null) {
    if (!this.isLoggedIn) {
      return
    }

    const targetRoomId = roomId || this.currentRoomId
    if (!targetRoomId) {
      return
    }

    const seq = this._getNextSeq()
    const message = IMMessage.createExitRoom(targetRoomId, seq)

    try {
      await this.connection.sendRequest(message)
      this.currentRoomId = null
      this._emit('exitRoom', { roomId: targetRoomId, success: true })
    } catch (error) {
      console.error('[IM] Exit room failed:', error)
      this._emit('exitRoom', { roomId: targetRoomId, success: false, error })
      throw error
    }
  }

  /**
   * Send chat message
   */
  async sendChat(roomId, content, chatType = 0) {
    if (!this.isLoggedIn) {
      throw new Error('Not logged in')
    }

    const seq = this._getNextSeq()

    // For protobuf, we need to encode the content properly
    // For now, send as metadata (simple approach)
    const message = new IMMessage({
      cmd: CmdEnum.CHAT_C2S2C,
      messageType: MessageType.REQUEST,
      seq,
      metadata: {
        roomId: roomId.toString(),
        chatType: chatType.toString(),
        content: content
      }
    })

    try {
      const response = await this.connection.sendRequest(message)
      this._emit('sendMessage', { roomId, content, success: true })
      return response
    } catch (error) {
      console.error('[IM] Send chat failed:', error)
      this._emit('sendMessage', { roomId, content, success: false, error })
      throw error
    }
  }

  /**
   * Get session list
   */
  async getSessions(userId = null) {
    if (!this.isLoggedIn) {
      throw new Error('Not logged in')
    }

    const seq = this._getNextSeq()

    // Encode request using protobuf
    const sessionC2S = protoIm.pbim.SessionC2S.create({
      uid: userId || parseInt(this.userId) || 0
    })
    const requestData = protoIm.pbim.SessionC2S.encode(sessionC2S).finish()

    const message = new IMMessage({
      cmd: CmdEnum.SESSION_C2S,
      messageType: MessageType.REQUEST,
      seq,
      data: new Uint8Array(requestData)
    })

    try {
      const response = await this.connection.sendRequest(message)

      // Decode response data if available
      if (response.data && response.data.length > 0) {
        try {
          const sessionS2C = protoIm.pbim.SessionS2C.decode(response.data)
          return {
            ...response,
            parsedData: sessionS2C
          }
        } catch (decodeError) {
          console.warn('[IM] Failed to decode session data:', decodeError)
        }
      }

      return response
    } catch (error) {
      console.error('[IM] Get sessions failed:', error)
      throw error
    }
  }

  /**
   * Get messages
   */
  async getMessages(sessionId, prevSeq = 0, limit = 20) {
    if (!this.isLoggedIn) {
      throw new Error('Not logged in')
    }

    const seq = this._getNextSeq()

    // Encode request using protobuf
    const msgC2S = protoIm.pbim.MsgC2S.create({
      userId: parseInt(this.userId) || 0,
      sessionId: sessionId || '',
      pageSize: limit,
      pageIndex: 1,
      prevSeq: prevSeq,
      sessionIdI64: this._parseSessionId(sessionId)
    })
    const requestData = protoIm.pbim.MsgC2S.encode(msgC2S).finish()

    const message = new IMMessage({
      cmd: CmdEnum.MSG_C2S,
      messageType: MessageType.REQUEST,
      seq,
      data: new Uint8Array(requestData)
    })

    try {
      const response = await this.connection.sendRequest(message)

      // Decode response data if available
      if (response.data && response.data.length > 0) {
        try {
          const msgS2C = protoIm.pbim.MsgS2C.decode(response.data)
          return {
            ...response,
            parsedData: msgS2C
          }
        } catch (decodeError) {
          console.warn('[IM] Failed to decode message data:', decodeError)
        }
      }

      return response
    } catch (error) {
      console.error('[IM] Get messages failed:', error)
      throw error
    }
  }

  /**
   * Mark messages as read
   */
  async markAsRead(sessionId, seq) {
    if (!this.isLoggedIn) {
      throw new Error('Not logged in')
    }

    // Encode request using protobuf
    const readSeqModel = protoIm.pbim.ReadSeqModel.create({
      sessionId: sessionId,
      uid: parseInt(this.userId) || 0,
      seq: seq
    })
    const requestData = new Uint8Array(protoIm.pbim.ReadSeqModel.encode(readSeqModel).finish())

    const message = new IMMessage({
      cmd: CmdEnum.READ_C2S,
      messageType: MessageType.REQUEST,
      seq: this._getNextSeq(),
      data: requestData
    })

    try {
      const response = await this.connection.sendRequest(message)
      this._emit('markAsRead', { sessionId, seq, success: true })
      return response
    } catch (error) {
      console.error('[IM] Mark as read failed:', error)
      this._emit('markAsRead', { sessionId, seq, success: false, error })
      throw error
    }
  }

  /**
   * Parse session ID to int64 format
   * For 1v1 chat: (src_uid << 32) | dest_uid
   * For group chat: group_id
   */
  _parseSessionId(sessionId) {
    if (!sessionId) return 0

    // Check if it's a numeric string (group chat)
    if (/^\d+$/.test(sessionId)) {
      return parseInt(sessionId)
    }

    // For format like "userId1-userId2" (1v1 chat)
    const parts = sessionId.split('-')
    if (parts.length === 2) {
      const uid1 = parseInt(parts[0])
      const uid2 = parseInt(parts[1])
      if (!isNaN(uid1) && !isNaN(uid2)) {
        return (uid1 << 32) | uid2
      }
    }

    return 0
  }

  /**
   * Register message handler for specific command
   */
  on(cmd, handler) {
    if (typeof handler === 'function') {
      this.messageHandlers.set(cmd, handler)
    }
  }

  /**
   * Unregister message handler
   */
  off(cmd) {
    this.messageHandlers.delete(cmd)
  }

  /**
   * Add event listener
   */
  addListener(event, callback) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, [])
    }
    this.eventListeners.get(event).push(callback)
  }

  /**
   * Remove event listener
   */
  removeListener(event, callback) {
    if (this.eventListeners.has(event)) {
      const callbacks = this.eventListeners.get(event).filter(cb => cb !== callback)
      if (callbacks.length === 0) {
        this.eventListeners.delete(event)
      } else {
        this.eventListeners.set(event, callbacks)
      }
    }
  }

  /**
   * Handle incoming message
   */
  _handleMessage(message) {
    console.log('[IM] Received message:', message.cmd, message.messageType)

    // Try to decode protobuf data for known commands
    let parsedData = null
    if (message.data && message.data.length > 0) {
      parsedData = this._tryDecodeMessageData(message.cmd, message.data)
      message.parsedData = parsedData
    }

    // Call registered handler for this command
    const handler = this.messageHandlers.get(message.cmd)
    if (handler) {
      handler(message)
    }

    // Handle special server-to-client commands
    switch (message.cmd) {
      case CmdEnum.NEW_TOKEN_S2C:
        this._handleNewToken(message)
        break
      case CmdEnum.USER_ENTER_ROOM_S2C:
        this._handleUserEnterRoom(message)
        break
      case CmdEnum.USER_EXIST_ROOM_S2C:
        this._handleUserExitRoom(message)
        break
      case CmdEnum.V3_MSG_S2C:
        this._handleV3Message(message)
        break
      case CmdEnum.V3_SESSION_S2C:
        this._handleV3Session(message)
        break
      case CmdEnum.V3_STREAM_MSG_S2C:
        this._handleV3StreamMessage(message)
        break
      case CmdEnum.MSG_S2C:
        this._handleMessageS2C(message)
        break
      case CmdEnum.SESSION_S2C:
        this._handleSessionS2C(message)
        break
    }
  }

  /**
   * Try to decode message data based on command type
   */
  _tryDecodeMessageData(cmd, data) {
    try {
      switch (cmd) {
        case CmdEnum.SESSION_S2C:
          return protoIm.pbim.SessionS2C.decode(data)
        case CmdEnum.MSG_S2C:
          return protoIm.pbim.MsgS2C.decode(data)
        case CmdEnum.V3_MSG_S2C:
          // V3 message might need special handling
          return data // Return raw data for V3 messages
        case CmdEnum.V3_SESSION_S2C:
          return data // Return raw data for V3 sessions
        default:
          return null
      }
    } catch (e) {
      console.warn('[IM] Failed to decode protobuf data for cmd', cmd, ':', e)
      return null
    }
  }

  /**
   * Handle connection state change
   */
  _handleStateChange(state) {
    console.log('[IM] Connection state changed:', state)

    if (state === ConnectionState.CONNECTED) {
      this.isConnected = true
    } else if (state === ConnectionState.DISCONNECTED) {
      this.isConnected = false
      this.isLoggedIn = false
    }

    this._emit('connectionStateChange', { state })
  }

  /**
   * Handle connection error
   */
  _handleError(error) {
    console.error('[IM] Connection error:', error)
    this._emit('error', { error })
  }

  /**
   * Handle reconnection
   */
  _handleReconnect(attempts) {
    console.log('[IM] Reconnected after', attempts, 'attempts')
    this._emit('reconnect', { attempts })

    // Re-login if we have a token
    if (this.token) {
      this.login(this.token).catch((error) => {
        console.error('[IM] Auto-login after reconnect failed:', error)
      })
    }
  }

  /**
   * Handle new token from server
   */
  _handleNewToken(message) {
    if (message.metadata && message.metadata['new-token']) {
      this.token = message.metadata['new-token']
      console.log('[IM] Received new token')
      this._emit('newToken', { token: this.token })
    }
  }

  /**
   * Handle user enter room notification
   */
  _handleUserEnterRoom(message) {
    this._emit('userEnterRoom', { message })
  }

  /**
   * Handle user exit room notification
   */
  _handleUserExitRoom(message) {
    this._emit('userExitRoom', { message })
  }

  /**
   * Handle V3 message
   */
  _handleV3Message(message) {
    this._emit('v3Message', { message })
  }

  /**
   * Handle V3 session
   */
  _handleV3Session(message) {
    this._emit('v3Session', { message })
  }

  /**
   * Handle V3 stream message
   */
  _handleV3StreamMessage(message) {
    this._emit('v3StreamMessage', { message })
  }

  /**
   * Handle message S2C
   */
  _handleMessageS2C(message) {
    let parsedData = null
    if (message.data && message.data.length > 0) {
      try {
        parsedData = protoIm.pbim.MsgS2C.decode(message.data)
      } catch (e) {
        console.warn('[IM] Failed to decode MsgS2C:', e)
      }
    }
    this._emit('message', { message, parsedData })
  }

  /**
   * Handle session S2C
   */
  _handleSessionS2C(message) {
    let parsedData = null
    if (message.data && message.data.length > 0) {
      try {
        parsedData = protoIm.pbim.SessionS2C.decode(message.data)
      } catch (e) {
        console.warn('[IM] Failed to decode SessionS2C:', e)
      }
    }
    this._emit('session', { message, parsedData })
  }

  /**
   * Register default handlers
   */
  _registerDefaultHandlers() {
    // PING response - no special handling needed
  }

  /**
   * Emit event to listeners
   */
  _emit(event, data) {
    const callbacks = this.eventListeners.get(event)
    if (callbacks) {
      callbacks.forEach(callback => {
        try {
          callback(data)
        } catch (error) {
          console.error(`[IM] Error in ${event} listener:`, error)
        }
      })
    }
  }

  /**
   * Get next sequence number
   */
  _getNextSeq() {
    return ++this.seqCounter
  }

  /**
   * Get current connection state
   */
  getState() {
    return this.connection ? this.connection.getState() : ConnectionState.DISCONNECTED
  }

  /**
   * Check if connected
   */
  isConnectionActive() {
    return this.connection ? this.connection.isConnected() : false
  }
}

// Create singleton instance
const imService = new IMService()

export default imService
export { IMService, ConnectionState, CmdEnum, SessionType, IMMessageType }
export { testWebSocketConnectivity } from './websocket'
