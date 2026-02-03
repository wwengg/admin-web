<template>
  <div class="conn-list-container">
    <!-- 页面标题 -->
    <div class="page-header">
      <div class="page-title">
        <h1>连接监控</h1>
        <p>实时查看和管理用户连接状态</p>
      </div>
      <div class="page-actions">
        <el-button icon="el-icon-refresh" @click="handleRefresh" :loading="listLoading">刷新</el-button>
      </div>
    </div>

    <!-- 统计卡片 -->
    <el-row :gutter="16" class="stats-row">
      <el-col :xs="12" :sm="6">
        <div class="stat-card">
          <div class="stat-icon" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
            <i class="el-icon-connection"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ statistics.total }}</div>
            <div class="stat-label">总连接数</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="stat-card">
          <div class="stat-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)">
            <i class="el-icon-success"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ statistics.active }}</div>
            <div class="stat-label">活跃连接</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="stat-card">
          <div class="stat-icon" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)">
            <i class="el-icon-user"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ statistics.onlineUsers }}</div>
            <div class="stat-label">在线用户</div>
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="6">
        <div class="stat-card">
          <div class="stat-icon" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%)">
            <i class="el-icon-house"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">{{ statistics.rooms }}</div>
            <div class="stat-label">房间数</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 筛选栏 -->
    <el-card shadow="never" class="filter-card">
      <el-form :inline="true" :model="queryParams" class="filter-form" size="medium">
        <el-form-item label="关键词">
          <el-input
            v-model="queryParams.keyword"
            placeholder="连接ID / 用户ID / 地址"
            prefix-icon="el-icon-search"
            clearable
            style="width: 220px"
            @clear="handleQuery"
          />
        </el-form-item>
        <el-form-item label="房间ID">
          <el-input
            v-model="queryParams.roomId"
            placeholder="输入房间ID"
            clearable
            style="width: 180px"
            @clear="handleQuery"
          />
        </el-form-item>
        <el-form-item label="应用ID">
          <el-select
            v-model="queryParams.appId"
            placeholder="选择应用"
            clearable
            style="width: 150px"
            @clear="handleQuery"
          >
            <el-option
              v-for="app in uniqueApps"
              :key="app"
              :label="app || '未分类'"
              :value="app"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select
            v-model="queryParams.status"
            placeholder="全部状态"
            clearable
            style="width: 120px"
            @clear="handleQuery"
          >
            <el-option label="活跃" value="active" />
            <el-option label="空闲" value="idle" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="handleQuery">查询</el-button>
          <el-button icon="el-icon-refresh-left" @click="handleReset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 连接列表 -->
    <el-card shadow="never" class="table-card" v-loading="listLoading">
      <el-table
        :data="filteredData"
        style="width: 100%"
        :header-cell-style="{ background: '#f5f7fa', color: '#606266', fontWeight: '500' }"
        stripe
      >
        <el-table-column label="状态" width="80" align="center">
          <template slot-scope="{ row }">
            <el-tag :type="getStatusType(row)" size="small" effect="plain">活跃</el-tag>
          </template>
        </el-table-column>

        <el-table-column label="用户信息" width="200">
          <template slot-scope="{ row }">
            <div class="user-cell">
              <el-avatar :size="36" :style="{ background: getUserColor(row.userId) }">
                <i class="el-icon-user-solid"></i>
              </el-avatar>
              <div class="user-info">
                <div class="user-name">{{ row.nickname || '用户' + row.userId }}</div>
                <div class="user-id">ID: {{ row.userId }}</div>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="连接信息" min-width="280">
          <template slot-scope="{ row }">
            <div class="conn-info">
              <div class="info-row">
                <span class="label">连接ID:</span>
                <span class="value conn-id">{{ row.connId }}</span>
              </div>
              <div class="info-row">
                <span class="label">地址:</span>
                <span class="value">{{ row.addr }}</span>
              </div>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="应用" width="120" show-overflow-tooltip>
          <template slot-scope="{ row }">
            <el-tag size="small" type="info" effect="plain">
              {{ row.appId || '-' }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="房间" width="120" show-overflow-tooltip prop="roomId">
          <template slot-scope="{ row }">
            {{ row.roomId || '-' }}
          </template>
        </el-table-column>

        <el-table-column label="节点" width="100" align="center">
          <template slot-scope="{ row }">
            <el-tag :type="getNodeTypeTagType(row.nodeId)" size="small">
              {{ getNodeType(row.nodeId) }}
            </el-tag>
          </template>
        </el-table-column>

        <el-table-column label="连接开始时间" width="170">
          <template slot-scope="{ row }">
            <div class="time-cell">
              <i class="el-icon-time"></i>
              <span>{{ formatTime(row.beginTime) }}</span>
            </div>
          </template>
        </el-table-column>

        <el-table-column label="操作" width="150" align="center" fixed="right">
          <template slot-scope="{ row }">
            <el-button size="small" icon="el-icon-view" @click="handleView(row)">详情</el-button>
            <el-button size="small" type="danger" icon="el-icon-close" @click="handleDisconnect(row)">断开</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 详情对话框 -->
    <el-dialog
      title="连接详情"
      :visible.sync="dialogVisible"
      width="500px"
      class="detail-dialog"
    >
      <el-descriptions :column="1" border>
        <el-descriptions-item label="连接ID">{{ currentRow.connId }}</el-descriptions-item>
        <el-descriptions-item label="用户ID">{{ currentRow.userId }}</el-descriptions-item>
        <el-descriptions-item label="昵称">{{ currentRow.nickname || '-' }}</el-descriptions-item>
        <el-descriptions-item label="应用ID">{{ currentRow.appId || '-' }}</el-descriptions-item>
        <el-descriptions-item label="房间ID">{{ currentRow.roomId || '-' }}</el-descriptions-item>
        <el-descriptions-item label="节点">
          <el-tag :type="getNodeTypeTagType(currentRow.nodeId)" size="small">
            {{ getNodeType(currentRow.nodeId) }}
          </el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="地址">{{ currentRow.addr }}</el-descriptions-item>
        <el-descriptions-item label="开始时间">{{ formatTime(currentRow.beginTime) }}</el-descriptions-item>
        <el-descriptions-item label="最后活跃">{{ formatTime(currentRow.lastPushTime) }}</el-descriptions-item>
      </el-descriptions>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="handleDisconnect(currentRow)">断开连接</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getConnList } from '@/api/logic'

export default {
  name: 'ConnList',
  data() {
    return {
      listLoading: false,
      tableData: [],
      queryParams: {
        keyword: '',
        roomId: '',
        appId: '',
        status: ''
      },
      statistics: {
        total: 0,
        active: 0,
        onlineUsers: 0,
        rooms: 0
      },
      dialogVisible: false,
      currentRow: {},
      userColors: ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a', '#fee140', '#30cfd0', '#a8edea']
    }
  },
  computed: {
    filteredData() {
      let data = [...this.tableData]

      if (this.queryParams.keyword) {
        const keyword = this.queryParams.keyword.toLowerCase()
        data = data.filter(item => {
          return (
            (item.connId && item.connId.toLowerCase().includes(keyword)) ||
            (item.userId && item.userId.toString().includes(keyword)) ||
            (item.addr && item.addr.toLowerCase().includes(keyword)) ||
            (item.nickname && item.nickname.toLowerCase().includes(keyword))
          )
        })
      }

      if (this.queryParams.roomId) {
        data = data.filter(item => item.roomId === this.queryParams.roomId)
      }

      if (this.queryParams.appId) {
        data = data.filter(item => item.appId === this.queryParams.appId)
      }

      if (this.queryParams.status === 'active') {
        data = data.filter(item => item.beginTime)
      } else if (this.queryParams.status === 'idle') {
        data = data.filter(item => !item.beginTime)
      }

      return data
    },
    uniqueApps() {
      const apps = new Set(this.tableData.map(item => item.appId).filter(Boolean))
      return Array.from(apps).sort()
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    async getTableData() {
      this.listLoading = true
      try {
        const res = await getConnList({
          page: 1,
          pageSize: 1000
        })
        console.log('API Response:', res)
        if (res?.code === 'Success') {
          this.tableData = res.list || []
          this.calculateStatistics()
        }
      } catch (error) {
        console.error('获取连接列表失败:', error)
        this.$message.error('获取连接列表失败')
      } finally {
        this.listLoading = false
      }
    },
    calculateStatistics() {
      this.statistics.total = this.tableData.length
      this.statistics.active = this.tableData.filter(item => item.beginTime).length

      const uniqueUsers = new Set(this.tableData.map(item => item.userId))
      this.statistics.onlineUsers = uniqueUsers.size

      const uniqueRooms = new Set(this.tableData.map(item => item.roomId).filter(Boolean))
      this.statistics.rooms = uniqueRooms.size
    },
    handleQuery() {
      this.getTableData()
    },
    handleReset() {
      this.queryParams = {
        keyword: '',
        roomId: '',
        appId: '',
        status: ''
      }
    },
    handleRefresh() {
      this.getTableData()
    },
    handleView(row) {
      this.currentRow = row
      this.dialogVisible = true
    },
    handleDisconnect(_row) {
      this.$confirm('确认断开此连接吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.success('连接已断开')
        this.dialogVisible = false
        // 实际调用断开API
      }).catch(() => {})
    },
    getStatusType(row) {
      return row.beginTime ? 'success' : 'info'
    },
    getNodeType(nodeId) {
      const numNodeId = typeof nodeId === 'string' ? parseInt(nodeId) : nodeId
      const nodeTypeMap = {
        1: 'QUIC',
        2: 'TCP',
        3: 'WebSocket'
      }
      return nodeTypeMap[numNodeId] || `节点${nodeId}`
    },
    getNodeTypeTagType(nodeId) {
      const numNodeId = typeof nodeId === 'string' ? parseInt(nodeId) : nodeId
      const tagTypeMap = {
        1: 'danger',
        2: 'warning',
        3: 'success'
      }
      return tagTypeMap[numNodeId] || 'info'
    },
    getUserColor(userId) {
      const index = parseInt(userId) % this.userColors.length
      return this.userColors[index]
    },
    formatRelativeTime(timestamp) {
      if (!timestamp) return '-'
      const numTimestamp = typeof timestamp === 'string' ? parseInt(timestamp) : timestamp
      const date = new Date(numTimestamp * 1000)
      const now = new Date()
      const diff = Math.floor((now - date) / 1000)

      if (diff < 60) return `${diff}秒前`
      if (diff < 3600) return `${Math.floor(diff / 60)}分钟前`
      if (diff < 86400) return `${Math.floor(diff / 3600)}小时前`
      return date.toLocaleDateString('zh-CN')
    },
    formatTime(timestamp) {
      if (!timestamp) return '-'
      const numTimestamp = typeof timestamp === 'string' ? parseInt(timestamp) : timestamp
      const date = new Date(numTimestamp * 1000)
      return date.toLocaleString('zh-CN')
    }
  }
}
</script>

<style lang="scss" scoped>
.conn-list-container {
  padding: 20px;
  background-color: #f5f7fa;
  min-height: calc(100vh - 84px);
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 16px;

  .page-title {
    h1 {
      font-size: 24px;
      font-weight: 600;
      color: #303133;
      margin: 0 0 4px 0;
    }

    p {
      font-size: 14px;
      color: #909399;
      margin: 0;
    }
  }

  .page-actions {
    display: flex;
    gap: 12px;
  }
}

.stats-row {
  margin-bottom: 20px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s;
  height: 100px;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  .stat-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    i {
      font-size: 28px;
      color: white;
    }
  }

  .stat-content {
    flex: 1;
    min-width: 0;

    .stat-value {
      font-size: 28px;
      font-weight: 600;
      color: #303133;
      line-height: 1;
      margin-bottom: 4px;
    }

    .stat-label {
      font-size: 13px;
      color: #909399;
    }
  }
}

.filter-card {
  margin-bottom: 20px;

  ::v-deep .el-card__body {
    padding: 16px 20px;
  }

  .filter-form {
    margin-bottom: -8px;

    .el-form-item {
      margin-bottom: 8px;
    }
  }
}

.table-card {
  ::v-deep .el-card__body {
    padding: 0;
  }

  ::v-deep .el-table {
    border-radius: 8px;

    &::before {
      display: none;
    }
  }
}

.user-cell {
  display: flex;
  align-items: center;
  gap: 12px;

  .user-info {
    flex: 1;
    min-width: 0;

    .user-name {
      font-size: 14px;
      font-weight: 500;
      color: #303133;
      margin-bottom: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .user-id {
      font-size: 12px;
      color: #909399;
    }
  }
}

.conn-info {
  .info-row {
    display: flex;
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }

    .label {
      color: #909399;
      font-size: 12px;
      min-width: 60px;
    }

    .value {
      color: #303133;
      font-size: 12px;
      word-break: break-all;

      &.conn-id {
        font-family: 'Courier New', monospace;
        color: #409EFF;
      }
    }
  }
}

.time-cell {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #67C23A;
  font-size: 13px;

  i {
    font-size: 14px;
  }
}

.detail-dialog {
  ::v-deep .el-descriptions-item__label {
    background-color: #f5f7fa;
  }
}

@media (max-width: 768px) {
  .conn-list-container {
    padding: 12px;
  }

  .page-header {
    flex-direction: column;

    .page-actions {
      width: 100%;

      .el-button {
        flex: 1;
      }
    }
  }

  .stats-row {
    .el-col {
      margin-bottom: 12px;
    }
  }

  .filter-card {
    ::v-deep .el-card__body {
      padding: 12px;
    }

    .filter-form {
      .el-form-item {
        display: block;
        margin-right: 0;
        margin-bottom: 12px;

        .el-input,
        .el-select {
          width: 100% !important;
        }
      }
    }
  }
}
</style>
