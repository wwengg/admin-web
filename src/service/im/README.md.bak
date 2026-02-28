/**
 * IM Service 使用示例
 *
 * IM 服务已挂载到 Vue.prototype 上，可以通过 this.$im 访问
 *
 * 登录/登出时会自动连接/断开 IM 服务
 */

// ==================== 在组件中使用 ====================

export default {
  name: 'ImExample',
  data() {
    return {
      messageList: [],
      currentRoom: null
    }
  },
  mounted() {
    // 监听 IM 事件
    this.setupIMListeners()
  },
  beforeDestroy() {
    // 移除监听器（可选，根据需求决定）
    // this.$im.removeListener('message', this.handleMessage)
  },
  methods: {
    // ==================== 事件监听 ====================

    setupIMListeners() {
      // 监听连接状态变化
      this.$im.addListener('connectionStateChange', this.handleConnectionStateChange)

      // 监听收到消息
      this.$im.addListener('message', this.handleMessage)

      // 监听用户进入房间
      this.$im.addListener('userEnterRoom', this.handleUserEnterRoom)

      // 监听用户退出房间
      this.$im.addListener('userExitRoom', this.handleUserExitRoom)

      // 监听登录事件
      this.$im.addListener('login', this.handleLogin)

      // 监听登出事件
      this.$im.addListener('logout', this.handleLogout)

      // 监听新 token
      this.$im.addListener('newToken', this.handleNewToken)

      // 监听错误
      this.$im.addListener('error', this.handleError)
    },

    // ==================== 事件处理函数 ====================

    handleConnectionStateChange({ state }) {
      console.log('连接状态变化:', state)
      // ConnectionState.DISCONNECTED = 'disconnected'
      // ConnectionState.CONNECTING = 'connecting'
      // ConnectionState.CONNECTED = 'connected'
      // ConnectionState.RECONNECTING = 'reconnecting'
      // ConnectionState.ERROR = 'error'
    },

    handleMessage({ message }) {
      console.log('收到消息:', message)
      // 处理消息数据
      // message.cmd - 命令类型
      // message.metadata - 元数据
      // message.data - 数据
      this.messageList.push(message)
    },

    handleUserEnterRoom({ message }) {
      console.log('用户进入房间:', message.metadata)
      this.$message.info('新用户进入房间')
    },

    handleUserExitRoom({ message }) {
      console.log('用户退出房间:', message.metadata)
    },

    handleLogin({ success, error }) {
      if (success) {
        console.log('IM 登录成功')
        this.$message.success('IM 已连接')
      } else {
        console.error('IM 登录失败:', error)
        this.$message.error('IM 连接失败')
      }
    },

    handleLogout({ success }) {
      console.log('IM 已登出')
    },

    handleNewToken({ token }) {
      console.log('收到新 token:', token)
      // 更新本地存储的 token
    },

    handleError({ error }) {
      console.error('IM 错误:', error)
      this.$message.error('连接错误')
    },

    // ==================== 主动调用方法 ====================

    // 发送聊天消息
    async sendMessage() {
      try {
        const roomId = this.currentRoom || 123456
        await this.$im.sendChat(roomId, 'Hello World!')
        this.$message.success('消息已发送')
      } catch (error) {
        console.error('发送消息失败:', error)
        this.$message.error('发送失败')
      }
    },

    // 进入房间
    async enterRoom(roomId) {
      try {
        await this.$im.enterRoom(roomId)
        this.currentRoom = roomId
        this.$message.success('已进入房间')
      } catch (error) {
        console.error('进入房间失败:', error)
        this.$message.error('进入房间失败')
      }
    },

    // 退出房间
    async exitRoom() {
      try {
        await this.$im.exitRoom(this.currentRoom)
        this.currentRoom = null
        this.$message.success('已退出房间')
      } catch (error) {
        console.error('退出房间失败:', error)
      }
    },

    // 获取会话列表
    async loadSessions() {
      try {
        const response = await this.$im.getSessions()
        console.log('会话列表:', response)
        return response
      } catch (error) {
        console.error('获取会话失败:', error)
      }
    },

    // 获取历史消息
    async loadMessages(sessionId, prevSeq = 0) {
      try {
        const response = await this.$im.getMessages(sessionId, prevSeq, 20)
        console.log('历史消息:', response)
        return response
      } catch (error) {
        console.error('获取消息失败:', error)
      }
    },

    // 标记消息已读
    async markAsRead(sessionId, seq) {
      try {
        await this.$im.markAsRead(sessionId, seq)
        console.log('已标记已读')
      } catch (error) {
        console.error('标记已读失败:', error)
      }
    },

    // 检查连接状态
    checkConnection() {
      const isConnected = this.$im.isConnectionActive()
      const state = this.$im.getState()
      console.log('是否已连接:', isConnected)
      console.log('当前状态:', state)
      return isConnected
    }
  }
}

// ==================== 全局导入使用（非组件中） ====================

import imService from '@/service/im'

// 直接使用
async function globalExample() {
  // 手动连接（如果需要）
  await imService.connect()
  await imService.login('your-token')

  // 发送消息
  await imService.sendChat(123456, 'Hello from global!')

  // 监听事件
  imService.addListener('message', ({ message }) => {
    console.log('全局收到消息:', message)
  })
}

// ==================== 在 Vuex Action 中使用 ====================

// 在 store 的某个模块中
import imService from '@/service/im'

const actions = {
  async someAction({ state }) {
    // 发送 IM 消息
    await imService.sendChat(state.roomId, 'Hello from Vuex!')
  }
}
