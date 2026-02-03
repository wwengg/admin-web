<template>
  <div class="terminal-container">
    <!-- 终端窗口 -->
    <div class="terminal-window">
      <!-- 终端标题栏 -->
      <div class="terminal-header">
        <div class="terminal-buttons">
          <span class="terminal-btn close"></span>
          <span class="terminal-btn minimize"></span>
          <span class="terminal-btn maximize"></span>
        </div>
        <div class="terminal-title">System Log — {{ query.type || 'all' }} — {{ query.date || todayDate }}</div>
        <div class="terminal-spacer"></div>
      </div>

      <!-- 工具栏 -->
      <div class="terminal-toolbar">
        <div class="toolbar-group">
          <label class="terminal-label">日志类型:</label>
          <el-select
            v-model="query.type"
            size="small"
            class="terminal-select"
            popper-class="terminal-select-dropdown"
          >
            <el-option label="全部" value="all" />
            <el-option label="调试" value="debug" />
            <el-option label="信息" value="info" />
            <el-option label="警告" value="warn" />
            <el-option label="错误" value="error" />
          </el-select>
        </div>
        <div class="toolbar-group">
          <label class="terminal-label">日期:</label>
          <el-date-picker
            v-model="query.date"
            type="date"
            size="small"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
            class="terminal-date-picker"
            popper-class="terminal-date-picker-dropdown"
          />
        </div>
        <div class="toolbar-group">
          <el-input
            v-model="query.text"
            size="small"
            placeholder="搜索日志内容..."
            prefix-icon="el-icon-search"
            class="terminal-search"
            @keyup.enter.native="handleFilter"
          />
        </div>
        <div class="toolbar-group">
          <el-button size="small" class="terminal-btn-primary" @click="handleFilter">
            <i class="el-icon-search"></i> 搜索
          </el-button>
          <el-button size="small" class="terminal-btn-default" @click="resetFilter">
            <i class="el-icon-refresh"></i> 重置
          </el-button>
        </div>
      </div>

      <!-- 终端内容区域 -->
      <div class="terminal-content" ref="terminalContent">
        <div v-if="listLoading" class="terminal-loading">
          <i class="el-icon-loading"></i>
          <span>Loading logs...</span>
        </div>
        <div v-else-if="tableData.length === 0" class="terminal-empty">
          <span>$ No logs found...</span>
        </div>
        <div v-else class="terminal-logs">
          <div
            v-for="(log, index) in tableData"
            :key="log.id"
            :class="['terminal-log-line', 'log-' + log.type]"
            @click="handleView(log)"
          >
            <span class="log-text" v-html="parseAnsiColors(log.text)"></span>
          </div>
        </div>

        <!-- 分页 -->
        <div v-if="total > 0" class="terminal-pagination">
          <el-button size="mini" class="terminal-btn-default" @click="fetchLatestLogs">
            <i class="el-icon-d-arrow-right"></i> 最新
          </el-button>
          <el-pagination
            :current-page="page"
            :page-size="pageSize"
            :total="total"
            layout="prev, pager, next"
            small
            background
            @current-change="handlePageChange"
          />
        </div>
      </div>

      <!-- 终端状态栏 -->
      <div class="terminal-footer">
        <span class="footer-item">Total: {{ total }} logs</span>
        <span class="footer-item">Page: {{ page }}/{{ Math.ceil(total / pageSize) }}</span>
        <span class="footer-item prompt">$</span>
      </div>
    </div>

    <!-- 日志详情对话框 -->
    <el-dialog
      :visible.sync="dialogVisible"
      width="80%"
      top="5vh"
      class="log-detail-dialog"
      :show-close="false"
      :modal="false"
      append-to-body
    >
      <div slot="title" class="dialog-header">
        <div class="dialog-buttons">
          <span class="terminal-btn close"></span>
          <span class="terminal-btn minimize"></span>
          <span class="terminal-btn maximize"></span>
        </div>
        <span>Log Details #{{ currentLog.id }}</span>
      </div>
      <div class="dialog-body">
        <div class="detail-meta">
          <div class="meta-row">
            <span class="meta-label">ID:</span>
            <span class="meta-value">{{ currentLog.id }}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Type:</span>
            <span class="meta-value" :class="'type-' + currentLog.type">
              [{{ currentLog.type ? currentLog.type.toUpperCase() : '' }}]
            </span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Date:</span>
            <span class="meta-value">{{ currentLog.date }}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Created:</span>
            <span class="meta-value">{{ currentLog.createdAt }}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Updated:</span>
            <span class="meta-value">{{ currentLog.updatedAt }}</span>
          </div>
        </div>
        <div class="detail-content">
          <pre class="log-detail-text">{{ currentLog.text }}</pre>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button class="terminal-btn-default" @click="dialogVisible = false">
          <i class="el-icon-close"></i> Close
        </el-button>
        <el-button class="terminal-btn-primary" @click="handleCopy">
          <i class="el-icon-document-copy"></i> Copy
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { findSystemlog } from '@/api/systemlog'

export default {
  name: 'SystemLog',
  data() {
    return {
      tableKey: 0,
      tableData: [],
      total: 0,
      listLoading: false,
      page: 1,
      pageSize: 50,
      query: {
        type: 'all',
        date: '',
        text: ''
      },
      dialogVisible: false,
      currentLog: {}
    }
  },
  computed: {
    logPrompt() {
      return '➜'
    },
    todayDate() {
      return new Date().toLocaleDateString()
    }
  },
  created() {
    // 默认查询今天的日志
    this.query.date = this.getTodayDate()
    this.fetchLatestLogs()
  },
  methods: {
    async fetchLatestLogs() {
      // 先获取数据以计算总页数
      await this.getTableData()
      // 跳到最后一页（最新的日志）
      if (this.total > this.pageSize) {
        this.page = Math.ceil(this.total / this.pageSize)
        await this.getTableData()
      }
      // 滚动到底部
      this.$nextTick(() => {
        this.scrollToBottom()
      })
    },
    async getTableData() {
      this.listLoading = true
      try {
        const res = await findSystemlog({
          pageInfo: {
            page: this.page,
            pageSize: this.pageSize
          },
          query: {
            type: this.query.type === 'all' ? undefined : this.query.type,
            date: this.query.date || undefined,
            text: this.query.text || undefined
          }
        })
        console.log('API Response:', res)
        if (res?.code === 'Success') {
          // 检查返回数据结构
          if (res.data) {
            console.log('Data structure:', res.data)
            // 如果 data 是单个对象且有 text 字段，将其转换为数组
            if (res.data.text) {
              // 假设 text 包含多行日志，每行一条
              const lines = res.data.text.split('\n').filter(line => line.trim())
              this.tableData = lines.map((line, index) => ({
                id: res.data.id || index,
                text: line,
                type: res.data.type || this.query.type,
                date: res.data.date || this.query.date,
                createdAt: res.data.createdAt,
                updatedAt: res.data.updatedAt,
                lines: res.data.lines
              }))
              this.total = res.data.lines || lines.length
            } else if (Array.isArray(res.data)) {
              this.tableData = res.data
              this.total = res.data.length
            } else if (res.data.items) {
              this.tableData = res.data.items
              this.total = res.data.total || 0
            } else {
              // 单条日志
              this.tableData = [res.data]
              this.total = 1
            }
          } else {
            this.tableData = []
            this.total = 0
          }
        }
      } catch (error) {
        console.error('获取系统日志失败:', error)
        this.$message.error('获取系统日志失败')
      } finally {
        this.listLoading = false
      }
    },
    handleFilter() {
      this.page = 1
      this.getTableData()
      this.$nextTick(() => {
        this.$refs.terminalContent.scrollTop = 0
      })
    },
    resetFilter() {
      this.query = {
        type: 'all',
        date: this.getTodayDate(),
        text: ''
      }
      this.page = 1
      this.fetchLatestLogs() // 使用 fetchLatestLogs 来滚动到底部
    },
    getTodayDate() {
      return new Date().toISOString().split('T')[0]
    },
    handlePageChange(page) {
      this.page = page
      this.getTableData()
      this.$nextTick(() => {
        // 如果是最后一页，滚动到底部
        if (page === Math.ceil(this.total / this.pageSize)) {
          this.scrollToBottom()
        } else {
          this.$refs.terminalContent.scrollTop = 0
        }
      })
    },
    scrollToBottom() {
      const container = this.$refs.terminalContent
      if (container) {
        container.scrollTop = container.scrollHeight
      }
    },
    handleView(row) {
      this.currentLog = row
      this.dialogVisible = true
    },
    formatTime(timestamp) {
      if (!timestamp) return ''
      const date = new Date(timestamp)
      return date.toLocaleTimeString('en-US', { hour12: false })
    },
    handleCopy() {
      const text = this.currentLog.text || ''
      navigator.clipboard.writeText(text).then(() => {
        this.$message.success('复制成功')
      }).catch(() => {
        this.$message.error('复制失败')
      })
    },
    // ANSI颜色码解析
    parseAnsiColors(text) {
      if (!text) return ''
      // ANSI颜色映射
      const colorMap = {
        '30': '#000000', // 黑色
        '31': '#f48771', // 红色
        '32': '#4ec9b0', // 绿色
        '33': '#ffa300', // 黄色
        '34': '#75beff', // 蓝色
        '35': '#c586c0', // 紫色
        '36': '#4fc1ff', // 青色
        '37': '#cccccc', // 白色
        '90': '#858585', // 亮黑(灰色)
        '91': '#f48771', // 亮红
        '92': '#89d185', // 亮绿
        '93': '#dcdcaa', // 亮黄
        '94': '#75beff', // 亮蓝
        '95': '#c586c0', // 亮紫
        '96': '#4fc1ff', // 亮青
        '97': '#ffffff'  // 亮白
      }

      const bgMap = {
        '40': 'background-color: #000000',
        '41': 'background-color: #f48771',
        '42': 'background-color: #4ec9b0',
        '43': 'background-color: #ffa300',
        '44': 'background-color: #75beff',
        '45': 'background-color: #c586c0',
        '46': 'background-color: #4fc1ff',
        '47': 'background-color: #cccccc'
      }

      // 解析ANSI转义序列
      const ansiRegex = /\x1b\[(\d+)(;\d+)*m/g

      let result = ''
      let lastIndex = 0
      let currentStyle = ''

      text.replace(ansiRegex, (match, _code, _groups, offset) => {
        // 添加之前的文本
        result += text.slice(lastIndex, offset)
        lastIndex = offset + match.length

        // 处理颜色码
        const codes = match.match(/\d+/g) || []
        let tempStyle = currentStyle

        codes.forEach(c => {
          if (c === '0') {
            // 重置所有样式
            tempStyle = ''
          } else if (c === '1') {
            // 粗体
            tempStyle += 'font-weight: bold;'
          } else if (c === '4') {
            // 下划线
            tempStyle += 'text-decoration: underline;'
          } else if (colorMap[c]) {
            // 前景色
            tempStyle += `color: ${colorMap[c]};`
          } else if (bgMap[c]) {
            // 背景色
            tempStyle += `${bgMap[c]};`
          }
        })

        // 如果有样式，闭合之前的span并开启新的
        if (tempStyle && !currentStyle) {
          result += `<span style="${tempStyle}">`
        } else if (!tempStyle && currentStyle) {
          result += '</span>'
        } else if (tempStyle && currentStyle && tempStyle !== currentStyle) {
          result += '</span><span style="' + tempStyle + '">'
        }

        currentStyle = tempStyle
        return match
      })

      // 添加剩余文本
      result += text.slice(lastIndex)

      // 闭合未闭合的span
      if (currentStyle) {
        result += '</span>'
      }

      return result
    }
  }
}
</script>

<style lang="scss" scoped>
.terminal-container {
  height: calc(100vh - 84px);
  padding: 0;
  background-color: #1e1e1e;
}

.terminal-window {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.terminal-header {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(180deg, #3d3d3d 0%, #2d2d2d 100%);
  border-bottom: 1px solid #1a1a1a;
  user-select: none;
}

.terminal-buttons {
  display: flex;
  gap: 8px;
}

.terminal-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;

  &.close {
    background: #ff5f56;
    border: 1px solid #e0443e;
  }

  &.minimize {
    background: #ffbd2e;
    border: 1px solid #dea123;
  }

  &.maximize {
    background: #27c93f;
    border: 1px solid #1aab29;
  }
}

.terminal-title {
  flex: 1;
  text-align: center;
  color: #999;
  font-size: 13px;
  font-weight: 500;
}

.terminal-spacer {
  width: 50px;
}

.terminal-toolbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: #252526;
  border-bottom: 1px solid #1a1a1a;
  flex-wrap: wrap;
}

.toolbar-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.terminal-label {
  color: #858585;
  font-size: 12px;
  white-space: nowrap;
}

.terminal-select,
.terminal-search {
  width: 150px;

  ::v-deep .el-input__inner {
    background-color: #3c3c3c;
    border-color: #555;
    color: #cccccc;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 12px;

    &:focus {
      border-color: #007acc;
      background-color: #3c3c3c;
    }

    &::placeholder {
      color: #858585;
    }
  }
}

.terminal-search {
  width: 200px;

  ::v-deep .el-input__prefix {
    color: #858585;
  }
}

.terminal-date-picker {
  width: 140px;

  ::v-deep .el-input__inner {
    background-color: #3c3c3c;
    border-color: #555;
    color: #cccccc;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 12px;
  }

  ::v-deep .el-input__prefix {
    color: #858585;
  }
}

.terminal-btn-primary,
.terminal-btn-default {
  border: none;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  font-size: 12px;
  padding: 7px 14px;

  i {
    margin-right: 4px;
  }
}

.terminal-btn-primary {
  background-color: #007acc;
  color: #ffffff;

  &:hover {
    background-color: #1f8ad2;
  }
}

.terminal-btn-default {
  background-color: #3c3c3c;
  color: #cccccc;
  border: 1px solid #555;

  &:hover {
    background-color: #4a4a4a;
  }
}

.terminal-content {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  background-color: #0d0d0d;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.6;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
  }

  &::-webkit-scrollbar-thumb {
    background: #424242;
    border-radius: 5px;

    &:hover {
      background: #4f4f4f;
    }
  }
}

.terminal-loading,
.terminal-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #858585;
  font-size: 14px;

  i {
    margin-right: 8px;
    font-size: 18px;
  }
}

.terminal-logs {
  .terminal-log-line {
    display: flex;
    padding: 4px 0;
    color: #cccccc;
    cursor: pointer;
    transition: background-color 0.1s;
    border-radius: 3px;

    &:hover {
      background-color: #1a1a1a;
    }

    &.log-error {
      .log-type {
        color: #f48771;
      }
    }

    &.log-warn {
      .log-type {
        color: #cca700;
      }
    }

    &.log-info {
      .log-type {
        color: #75beff;
      }
    }

    &.log-debug {
      .log-type {
        color: #858585;
      }
    }
  }

  .log-prompt {
    color: #4ec9b0;
    font-weight: bold;
    flex-shrink: 0;
  }

  .log-timestamp {
    color: #858585;
    margin-right: 8px;
    flex-shrink: 0;
  }

  .log-type {
    margin-right: 8px;
    flex-shrink: 0;
    font-weight: bold;
  }

  .log-text {
    color: #cccccc;
    word-break: break-all;
    white-space: pre-wrap;
  }
}

.terminal-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 0 0 0;
  border-top: 1px solid #1a1a1a;
  margin-top: 16px;

  ::v-deep .el-pagination {
    .el-pager li {
      background-color: #3c3c3c;
      color: #cccccc;
      border: 1px solid #555;

      &.active {
        background-color: #007acc;
        border-color: #007acc;
      }

      &:hover {
        color: #ffffff;
      }
    }

    .btn-prev,
    .btn-next {
      background-color: #3c3c3c;
      color: #cccccc;
      border: 1px solid #555;

      &:hover {
        color: #ffffff;
      }
    }
  }
}

.terminal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: #007acc;
  color: #ffffff;
  font-size: 11px;
  font-family: 'Menlo', 'Monaco', 'Courier New', monospace;

  .footer-item {
    &:not(:last-child)::after {
      content: ' | ';
      margin: 0 8px;
      opacity: 0.5;
    }
  }

  .prompt {
    font-weight: bold;
  }
}

// 对话框样式
::v-deep .log-detail-dialog {
  background: #1e1e1e;
  border-radius: 10px;

  .el-dialog {
    background: linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%);
    border: 1px solid #3c3c3c;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
  }

  .el-dialog__header {
    padding: 0;
    background: linear-gradient(180deg, #3d3d3d 0%, #2d2d2d 100%);
    border-bottom: 1px solid #1a1a1a;
  }

  .el-dialog__body {
    padding: 20px;
    background-color: #0d0d0d;
  }

  .el-dialog__footer {
    padding: 12px 20px;
    background-color: #1a1a1a;
    border-top: 1px solid #3c3c3c;
  }
}

.dialog-header {
  display: flex;
  align-items: center;
  padding: 12px 16px;

  .dialog-buttons {
    display: flex;
    gap: 8px;
  }

  span:not(.terminal-btn) {
    flex: 1;
    text-align: center;
    color: #999;
    font-size: 13px;
  }
}

.dialog-body {
  .detail-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #3c3c3c;
    margin-bottom: 16px;
  }

  .meta-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .meta-label {
    color: #858585;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 12px;
  }

  .meta-value {
    color: #cccccc;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 12px;

    &.type-error {
      color: #f48771;
    }

    &.type-warn {
      color: #cca700;
    }

    &.type-info {
      color: #75beff;
    }

    &.type-debug {
      color: #858585;
    }
  }

  .detail-content {
    background-color: #1a1a1a;
    border-radius: 6px;
    padding: 16px;
    max-height: 500px;
    overflow-y: auto;
  }

  .log-detail-text {
    margin: 0;
    color: #cccccc;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.6;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
}

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

// 全局样式覆盖
::v-deep .terminal-select-dropdown,
::v-deep .terminal-date-picker-dropdown {
  background-color: #252526;
  border-color: #3c3c3c;

  .el-select-dropdown__item,
  .el-picker-panel {
    color: #cccccc;
    font-family: 'Menlo', 'Monaco', 'Courier New', monospace;
    font-size: 12px;

    &.hover,
    &:hover {
      background-color: #2a2d2e;
    }

    &.selected {
      background-color: #094771;
      color: #ffffff;
    }
  }

  .el-date-picker__header-label {
    color: #cccccc;
  }

  .el-date-table td {
    color: #cccccc;

    &.today .el-date-table-cell__text {
      color: #007acc;
    }

    &.available:hover .el-date-table-cell__text {
      background-color: #2a2d2e;
    }

    &.in-range .el-date-table-cell__text {
      background-color: #094771;
    }

    &.current:not(.disabled) .el-date-table-cell__text {
      background-color: #007acc;
      color: #ffffff;
    }
  }

  .el-picker-panel__icon-btn {
    color: #cccccc;

    &:hover {
      color: #ffffff;
    }
  }

  .popper__arrow {
    border-bottom-color: #252526 !important;

    &::after {
      border-bottom-color: #252526 !important;
    }
  }
}
</style>
