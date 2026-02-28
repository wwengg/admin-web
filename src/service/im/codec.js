/**
 * IM Protocol Codec
 * Encodes and decodes messages according to the socket protocol specification
 *
 * Protocol Format:
 * +------------+-------+---------+-------+-------+--------------+--------------+-------------+-----+---------+----------+---------+-------+------+
 * | MagicNumer |  len  | Version |  CMD  |  Ret  | SerializeType | CompressType | messageType | seq | metaLen | metaData | dataLen | data | crc  |
 * |    1字节    | 4字节  |  1字节  | 2字节  |  2字节 |    4bit      |     2bit     |      2bit   | 8字节|   4字节  |   n字节  |  4 字节  | n 字节| 4字节 |
 * +------------+-------+---------+-------+-------+--------------+--------------+-------------+-----+---------+----------+---------+-------+------+
 */

import {
  PROTOCOL,
  SerializeType,
  CompressType,
  MessageType
} from './constants'
import protoIm from '@/proto/im.js'

/**
 * IM Message class
 */
export class IMMessage {
  constructor(options = {}) {
    this.version = options.version !== undefined ? options.version : PROTOCOL.VERSION
    this.cmd = options.cmd || 0
    this.ret = options.ret || 0
    this.serializeType = options.serializeType || SerializeType.PROTOBUF
    this.compressType = options.compressType || CompressType.NONE
    this.messageType = options.messageType || MessageType.REQUEST
    this.seq = options.seq || 0
    this.metadata = options.metadata || null
    this.data = options.data || null // Uint8Array for protobuf
  }

  /**
   * Convert message to binary
   * @param {boolean} useFrameDecoder - Whether to use frame decoder mode (includes magic number + length prefix)
   */
  encode(useFrameDecoder = false) {
    // Calculate metadata length
    const metadataBytes = this.metadata ? this._encodeMetadata(this.metadata) : null
    const metaLen = metadataBytes ? metadataBytes.length : 0

    // Calculate data length
    const dataLen = this.data ? this.data.length : 0

    // Calculate total length (excluding magic number and len field itself)
    // = version(1) + cmd(2) + ret(2) + flag(1) + seq(8) + metaLen(4) + metadata + dataLen(4) + data + crc(4)
    // But if metaLen=0, we don't write metaLen field
    // Same for dataLen
    const hasMeta = metaLen > 0
    const hasData = dataLen > 0

    let len = 1 + 2 + 2 + 1 + 8 // version + cmd + ret + flag + seq
    if (hasMeta) len += 4 + metaLen
    if (hasData) len += 4 + dataLen
    len += 4 // crc

    // Create buffer (add space for magic + len if using frame decoder)
    const headerSize = useFrameDecoder ? 1 + 4 : 0
    const buffer = new ArrayBuffer(headerSize + len)
    const view = new DataView(buffer)
    let offset = 0

    // Write Magic Number (1 byte) and Length (4 bytes) if using frame decoder
    if (useFrameDecoder) {
      view.setUint8(offset, PROTOCOL.MAGIC_NUMBER)
      offset += 1
      view.setUint32(offset, len, false)
      offset += 4
    }

    // Write Version (1 byte)
    view.setUint8(offset, this.version)
    offset += 1

    // Write CMD (2 bytes, big endian)
    view.setUint16(offset, this.cmd, false)
    offset += 2

    // Write Ret (2 bytes, big endian)
    view.setUint16(offset, this.ret, false)
    offset += 2

    // Write Flag (1 byte): SerializeType(4bit) | CompressType(2bit) | MessageType(2bit)
    const flag = (this.serializeType & 0x0F) << 4 |
                 (this.compressType & 0x03) << 2 |
                 (this.messageType & 0x03)
    view.setUint8(offset, flag)
    offset += 1

    // Write Seq (8 bytes, big endian)
    const low = this.seq & 0xFFFFFFFF
    const high = (this.seq / 0x100000000) & 0xFFFFFFFF
    view.setUint32(offset, high, false)
    offset += 4
    view.setUint32(offset, low, false)
    offset += 4

    // Write MetaLen and Metadata (if present)
    if (hasMeta) {
      view.setUint32(offset, metaLen, false)
      offset += 4
      const uint8Array = new Uint8Array(buffer)
      uint8Array.set(metadataBytes, offset)
      offset += metaLen
    }

    // Write DataLen and Data (if present)
    if (hasData) {
      view.setUint32(offset, dataLen, false)
      offset += 4
      const uint8Array = new Uint8Array(buffer)
      uint8Array.set(this.data, offset)
      offset += dataLen
    }

    // Write CRC (4 bytes, placeholder for now - could be implemented properly)
    view.setUint32(offset, 0, false)

    return new Uint8Array(buffer)
  }

  /**
   * Parse message from binary
   * @param {Uint8Array|ArrayBuffer} buffer - The binary data to decode
   * @param {boolean} hasFrameDecoder - Whether the data was encoded with frame decoder (has magic number + length prefix)
   */
  static decode(buffer, hasFrameDecoder = false) {
    if (!(buffer instanceof Uint8Array)) {
      buffer = new Uint8Array(buffer)
    }

    const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength)
    let offset = 0

    // Skip Magic Number (1 byte) and Length (4 bytes) if using frame decoder
    if (hasFrameDecoder) {
      if (buffer.length < 5) {
        throw new Error('Invalid message: too short (frame decoder mode)')
      }
      // Optionally verify magic number (Flutter doesn't verify, but we can for safety)
      const magicNumber = view.getUint8(offset)
      // Only throw if magic number is explicitly wrong, not 0 (server may not use frame decoder)
      if (magicNumber !== 0 && magicNumber !== PROTOCOL.MAGIC_NUMBER) {
        throw new Error(`Invalid magic number: ${magicNumber}`)
      }
      offset += 5 // Magic Number (1) + Length (4)
    }

    // Read Version
    const version = view.getUint8(offset)
    offset += 1

    // Read CMD (2 bytes, big endian)
    const cmd = view.getUint16(offset, false)
    offset += 2

    // Read Ret (2 bytes, big endian)
    const ret = view.getUint16(offset, false)
    offset += 2

    // Read Flag
    const flag = view.getUint8(offset)
    offset += 1
    const serializeType = (flag >> 4) & 0x0F
    const compressType = (flag >> 2) & 0x03
    const messageType = flag & 0x03

    // Read Seq (64-bit, big endian)
    const seqHigh = view.getUint32(offset, false)
    offset += 4
    const seqLow = view.getUint32(offset, false)
    offset += 4
    const seq = seqLow + (seqHigh * 0x100000000)

    // Read Metadata and Data (only if present, i.e., if there's more data than just CRC)
    let metadata = null
    let data = null

    // Check if there's additional data beyond the fixed header and CRC
    // Fixed header size = version(1) + cmd(2) + ret(2) + flag(1) + seq(8) = 14 bytes
    // CRC = 4 bytes
    // So if buffer length > 18, we have metadata and/or data
    const remainingBytes = buffer.length - offset
    const hasBodyData = remainingBytes > 4 // More than just CRC (4 bytes)

    if (hasBodyData) {
      // Read MetaLen (4 bytes)
      const metaLen = view.getUint32(offset, false)
      offset += 4
      if (metaLen > 0) {
        const metadataBytes = buffer.slice(offset, offset + metaLen)
        metadata = IMMessage._decodeMetadata(metadataBytes)
        offset += metaLen
      }

      // Read DataLen (4 bytes)
      if (offset + 4 <= buffer.length - 4) { // Ensure space for dataLen + CRC
        const dataLen = view.getUint32(offset, false)
        offset += 4
        if (dataLen > 0) {
          data = buffer.slice(offset, offset + dataLen)
          offset += dataLen
        }
      }
    }

    // CRC is at the end, can be validated if needed
    // const crc = view.getUint32(offset, false)

    return new IMMessage({
      version,
      cmd,
      ret,
      serializeType,
      compressType,
      messageType,
      seq,
      metadata,
      data
    })
  }

  /**
   * Encode metadata object to bytes
   * Format: keyLen(4) + key(n) + valueLen(4) + value(n) + ...
   */
  _encodeMetadata(metadata) {
    const parts = []
    for (const [key, value] of Object.entries(metadata)) {
      const keyBytes = new TextEncoder().encode(key)
      const valueBytes = new TextEncoder().encode(value)

      const part = new ArrayBuffer(4 + keyBytes.length + 4 + valueBytes.length)
      const partView = new DataView(part)
      let partOffset = 0

      // keyLen
      partView.setUint32(partOffset, keyBytes.length, false)
      partOffset += 4

      // key
      new Uint8Array(part).set(keyBytes, partOffset)
      partOffset += keyBytes.length

      // valueLen
      partView.setUint32(partOffset, valueBytes.length, false)
      partOffset += 4

      // value
      new Uint8Array(part).set(valueBytes, partOffset)

      parts.push(new Uint8Array(part))
    }

    // Concatenate all parts
    const totalLength = parts.reduce((sum, part) => sum + part.length, 0)
    const result = new Uint8Array(totalLength)
    let offset = 0
    for (const part of parts) {
      result.set(part, offset)
      offset += part.length
    }
    return result
  }

  /**
   * Decode metadata bytes to object
   */
  static _decodeMetadata(bytes) {
    const metadata = {}
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
    let offset = 0

    while (offset < bytes.length) {
      // Read keyLen (4 bytes, big endian)
      const keyLen = view.getUint32(offset, false)
      offset += 4

      // Read key
      const keyBytes = bytes.slice(offset, offset + keyLen)
      const key = new TextDecoder().decode(keyBytes)
      offset += keyLen

      // Read valueLen (4 bytes, big endian)
      const valueLen = view.getUint32(offset, false)
      offset += 4

      // Read value
      const valueBytes = bytes.slice(offset, offset + valueLen)
      const value = new TextDecoder().decode(valueBytes)
      offset += valueLen

      metadata[key] = value
    }

    return metadata
  }

  /**
   * Create a ping message (heartbeat)
   * Uses version 0 and cmd 0 to match Flutter behavior
   */
  static createPing(seq) {
    return new IMMessage({
      version: PROTOCOL.VERSION, // ProtocolCodec.defaultVersion (not SocketVersion.v1)
      cmd: 1, // CMD_NONE (not PING=1) - matches Flutter
      messageType: MessageType.REQUEST,
      seq: seq || Date.now(),
      metadata: { ping: 'heartbeat' } // Match Flutter
    })
  }

  /**
   * Create a login message
   * Matches Flutter behavior: includes both metadata and ParseTokenArgs in data
   */
  static createLogin(token, seq, appId = null) {
    // Create ParseTokenArgs and encode to protobuf (matches Flutter)
    const parseTokenArgs = protoIm.pbsocket.ParseTokenArgs.create({
      token: token
    })
    const requestData = protoIm.pbsocket.ParseTokenArgs.encode(parseTokenArgs).finish()

    // Build metadata (matches Flutter)
    const metadata = { token }
    if (appId) {
      metadata.appId = appId
    }

    return new IMMessage({
      version: PROTOCOL.VERSION, // SocketVersion.v1 = 1
      cmd: 5, // LOGIN_C2S2C
      messageType: MessageType.REQUEST,
      seq: seq || Date.now(),
      metadata: metadata,
      data: new Uint8Array(requestData) // ← This was missing!
    })
  }

  /**
   * Create a chat message
   */
  static createChat(roomId, content, seq) {
    return new IMMessage({
      cmd: 1001, // CHAT_C2S2C
      messageType: MessageType.REQUEST,
      seq: seq || Date.now(),
      data: content // Should be protobuf encoded data
    })
  }

  /**
   * Create an enter room message
   */
  static createEnterRoom(roomId, password, seq) {
    const metadata = { roomId: roomId.toString() }
    if (password) {
      metadata.roomPwd = password
    }
    return new IMMessage({
      cmd: 1002, // ENTER_ROOM_C2S2C
      messageType: MessageType.REQUEST,
      seq: seq || Date.now(),
      metadata
    })
  }

  /**
   * Create an exit room message
   */
  static createExitRoom(roomId, seq) {
    return new IMMessage({
      cmd: 1004, // EXIT_ROOM_C2S2C
      messageType: MessageType.REQUEST,
      seq: seq || Date.now(),
      metadata: { roomId: roomId.toString() }
    })
  }
}

export default IMMessage
