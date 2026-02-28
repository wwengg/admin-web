/**
 * IM Service Constants
 * Based on Flutter version threego_flutter
 */

// Protocol Constants
export const PROTOCOL = {
  MAGIC_NUMBER: 0x13, // 19
  VERSION: 1, // SocketVersion.v1 - must match Flutter version
  HEADER_SIZE: 1 + 4 + 1 + 2 + 2 + 1 + 8 // magic + len + version + cmd + ret + flag + seq
}

// Serialize Type
export const SerializeType = {
  NONE: 0,
  JSON: 1,
  PROTOBUF: 2
}

// Compress Type
export const CompressType = {
  NONE: 0,
  GZIP: 1,
  BROTLI: 2
}

// Message Type
export const MessageType = {
  REQUEST: 0,
  RESPONSE: 1,
  NOTIFY: 2
}

// Command Enum (from pbsocket.proto)
export const CmdEnum = {
  CMD_NONE: 0,
  PING: 1, // 心跳包
  ERROR_INFO_S2C: 2, // 权限不足提醒
  NEW_TOKEN_S2C: 3, // 新token推送
  CONN_LOST: 4, // 断开连接通知
  LOGIN_C2S2C: 5, // 登录
  LOGIN_OUT_C2S2C: 6, // 登出
  CHAT_C2S2C: 1001, // 发送消息
  ENTER_ROOM_C2S2C: 1002, // 进入房间
  USER_ENTER_ROOM_S2C: 1003, // 用户进入房间通知
  EXIT_ROOM_C2S2C: 1004, // 退出房间
  USER_EXIST_ROOM_S2C: 1005, // 用户退出房间通知
  SESSION_C2S2C: 2001, // 获取会话列表
  MSG_C2S2C: 2002, // 获取消息
  READ_C2S2C: 2003, // 设置消息已读
  MSG_C2S: 2011,
  MSG_S2C: 2012,
  SESSION_C2S: 2013,
  SESSION_S2C: 2014,
  SEND_MSG_C2S: 2015,
  READ_C2S: 2016,
  V3_MSG_C2S: 2021,
  V3_MSG_S2C: 2022,
  V3_SESSION_S2C: 2023,
  V3_STREAM_MSG_S2C: 2024, // 流式消息推送
  V3_STREAM_MSG_C2S: 2025 // 流式消息发送（客户端发送）
}

// Connection State
export const ConnectionState = {
  DISCONNECTED: 'disconnected',
  CONNECTING: 'connecting',
  CONNECTED: 'connected',
  RECONNECTING: 'reconnecting',
  ERROR: 'error'
}

// Socket Version
export const SocketVersion = {
  DEFAULT: 0,
  V1: 1
}

// Chat Type (from pbchat.proto)
export const ChatType = {
  PUBLIC_CHAT: 0, // 公聊
  PRIVATE_CHAT: 1, // 私聊
  WEBRTC_MONITOR: 2 // WebRTC监控
}

// Content Category
export const ContentCategory = {
  TEXT: 0,
  VIDEO: 1,
  AUDIO: 2,
  PHOTO: 3,
  OTHER: 4,
  WEBRTC_INFO: 5
}

// Session Type (from pbim.proto)
export const SessionType = {
  NONE: 0,
  OFFICIAL: 1, // 后台推送消息
  ACTIVITY: 3, // 活动消息
  NEW_FRIENDS: 4, // 新朋友
  FRIENDS: 5 // 好友
}

// Message Type (from pbim.proto)
export const IMMessageType = {
  NONE: 0,
  NOTICE: 1, // 后台推送消息
  TIP: 2, // 商品过期提示
  CHAT_PRIVATE: 3, // 私聊
  CHAT_PUBLIC: 4, // 公聊
  CHAT_AT: 5, // @消息
  GIFT_PRIVATE: 6, // 单个礼物
  GIFT_PUBLIC: 7, // 多人礼物
  ACTIVITY: 8, // 活动信息
  GUARD_EXPIRED: 9, // 守护过期
  INVITE_REGISTER: 10, // 邀请注册
  INVITE_RECHARGE: 11, // 邀请充值
  INVITE_EXPIRED: 12, // 邀请的好友长时间未登录
  INVITE_VALID_DAYS: 13, // 邀请的好友完成有效天数
  PROP_EXPIRED: 14, // 道具过期
  INVITE_RECHARGE_NEW: 15,
  INVITE_VALID_DAYS_NEW: 16
}

// Read State
export const ReadState = {
  UNREAD: 0,
  READ: 1,
  DELETED: 2
}

// Reconnection Config
export const RECONNECT_CONFIG = {
  MAX_ATTEMPTS: 10,
  INITIAL_DELAY: 1000, // 1 second
  MAX_DELAY: 30000, // 30 seconds
  DELAY_MULTIPLIER: 1.5
}

// Heartbeat Config
export const HEARTBEAT_CONFIG = {
  INTERVAL: 30000, // 30 seconds
  TIMEOUT: 10000 // 10 seconds
}

// Default WebSocket URL (can be overridden by config)
export const DEFAULT_WS_URL = 'wss://api.wwengg.cn:21997'

// Error Codes (from pbcommon.proto)
export const ErrorCode = {
  SUCCESS: 200,
  FAIL: 500,
  UNKNOWN: 501,
  INTERNAL: 502,
  INVALID: 503,
  INVALID_PARAM: 504,
  PARAM_ERROR: 505,
  FIND_ERROR: 1001,
  CREATE_ERROR: 1002,
  DELETE_ERROR: 1003,
  UPDATE_ERROR: 1004,
  INVALID_TOKEN: 2002,
  INVALID_SIGN: 2003,
  NOT_LOGIN: 2004,
  LOGIN_TIMEOUT: 2005,
  LOGIN_ERROR: 2006,
  LOGIN_FORBIDDEN: 2007,
  LOGIN_EXPIRED: 2008,
  LOGIN_INVALID: 2009,
  LOGIN_SOCKET_REPEAT: 2015
}
