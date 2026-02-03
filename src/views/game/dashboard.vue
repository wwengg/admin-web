<template>
  <div class="game-dashboard" v-loading="loading">
    <!-- 统计卡片 -->
    <el-row :gutter="16" class="stats-row">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(stat, index) in stats" :key="index">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-content">
            <div class="stat-info">
              <div class="stat-title">{{ stat.title }}</div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-change" v-if="stat.change">
                <span>{{ stat.change }}</span>
              </div>
            </div>
            <div class="stat-icon" :class="stat.color">
              <i :class="stat.iconClass"></i>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 图表和表格区域 -->
    <el-row :gutter="16" class="content-row">
      <!-- 武将统计 -->
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-card class="content-card">
          <div slot="header" class="card-header">
            <span>武将统计</span>
            <el-button type="primary" size="small" icon="el-icon-refresh" @click="loadData">刷新</el-button>
          </div>
          <el-table :data="generalStats" style="width: 100%">
            <el-table-column prop="generalId" label="武将ID" width="80" />
            <el-table-column prop="generalName" label="武将名称" width="120" />
            <el-table-column prop="totalAssistCount" label="助战次数" width="100" align="right">
              <template slot-scope="scope">
                <span class="number-text">{{ scope.row.totalAssistCount.toLocaleString() }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="totalAssistGold" label="助战金币" width="120" align="right">
              <template slot-scope="scope">
                <span class="number-text">{{ scope.row.totalAssistGold.toLocaleString() }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="winCount" label="获胜次数" width="100" align="right">
              <template slot-scope="scope">
                <span class="number-text">{{ scope.row.winCount.toLocaleString() }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="winRate" label="获胜率" width="100" align="right">
              <template slot-scope="scope">
                <span :class="getWinRateClass(scope.row.winRate)">
                  {{ scope.row.winRate.toFixed(2) }}%
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="totalPayout" label="总派奖" width="120" align="right">
              <template slot-scope="scope">
                <span class="number-text">{{ scope.row.totalPayout.toLocaleString() }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getGameStatistics, getGeneralStatistics } from '@/api/battleAdminService'

export default {
  name: 'GameDashboard',
  data() {
    return {
      loading: false,
      stats: [
        {
          title: '总回合数',
          value: '0',
          change: null,
          iconClass: 'el-icon-trophy',
          color: 'bg-blue'
        },
        {
          title: '今日回合',
          value: '0',
          change: null,
          iconClass: 'el-icon-date',
          color: 'bg-green'
        },
        {
          title: '当前奖池',
          value: '0',
          change: null,
          iconClass: 'el-icon-coin',
          color: 'bg-yellow'
        },
        {
          title: '总派奖金额',
          value: '0',
          change: null,
          iconClass: 'el-icon-wallet',
          color: 'bg-purple'
        },
        {
          title: '今日助战次数',
          value: '0',
          change: null,
          iconClass: 'el-icon-data-line',
          color: 'bg-cyan'
        },
        {
          title: '今日助战金币',
          value: '0',
          change: null,
          iconClass: 'el-icon-coin',
          color: 'bg-orange'
        },
        {
          title: '今日派奖',
          value: '0',
          change: null,
          iconClass: 'el-icon-medal',
          color: 'bg-red'
        },
        {
          title: '总助战金币',
          value: '0',
          change: null,
          iconClass: 'el-icon-star-off',
          color: 'bg-indigo'
        }
      ],
      generalStats: []
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        this.loading = true
        await Promise.all([
          this.loadGameStats(),
          this.loadGeneralStats()
        ])
      } catch (error) {
        console.error('加载数据失败:', error)
        this.$message.error('加载数据失败')
      } finally {
        this.loading = false
      }
    },
    async loadGameStats() {
      const req = {
        pageInfo: { currentPage: 1, pageSize: 1 }
      }
      const res = await getGameStatistics(req)
      if (res.code === 'Success' && res.data) {
        const data = res.data
        this.stats[0].value = data.totalRounds?.toLocaleString() || '0'
        this.stats[1].value = data.todayRounds?.toLocaleString() || '0'
        this.stats[2].value = '¥' + (data.currentPrizePool?.toLocaleString() || '0')
        this.stats[3].value = '¥' + (data.totalPayout?.toLocaleString() || '0')
        this.stats[4].value = data.todayAssistCount?.toLocaleString() || '0'
        this.stats[5].value = data.todayAssistGold?.toLocaleString() || '0'
        this.stats[6].value = '¥' + (data.todayPayout?.toLocaleString() || '0')
        this.stats[7].value = data.totalAssistGold?.toLocaleString() || '0'
      }
    },
    async loadGeneralStats() {
      const req = {
        pageInfo: { currentPage: 1, pageSize: 100 }
      }
      const res = await getGeneralStatistics(req)
      if (res.code === 'Success' && res.list) {
        this.generalStats = res.list
      }
    },
    getWinRateClass(rate) {
      if (rate >= 20) return 'text-success'
      if (rate >= 10) return 'text-warning'
      return 'text-danger'
    }
  }
}
</script>

<style lang="scss" scoped>
.game-dashboard {
  padding: 16px;

  .stats-row {
    margin-bottom: 16px;
  }

  .stat-card {
    margin-bottom: 16px;

    ::v-deep .el-card__body {
      padding: 20px;
    }
  }

  .stat-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat-info {
    flex: 1;
  }

  .stat-title {
    font-size: 14px;
    color: #909399;
    margin-bottom: 8px;
  }

  .stat-value {
    font-size: 24px;
    font-weight: bold;
    color: #303133;
    margin-bottom: 4px;
  }

  .stat-change {
    font-size: 12px;
    color: #909399;
  }

  .stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #fff;

    &.bg-blue { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    &.bg-green { background: linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%); }
    &.bg-yellow { background: linear-gradient(135deg, #fccb90 0%, #d57eeb 100%); }
    &.bg-purple { background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%); }
    &.bg-cyan { background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); }
    &.bg-orange { background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); }
    &.bg-red { background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); }
    &.bg-indigo { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
  }

  .content-row {
    .content-card {
      margin-bottom: 16px;
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
    }
  }

  .number-text {
    font-family: 'Courier New', monospace;
    font-weight: 500;
  }

  .text-success { color: #67c23a; }
  .text-warning { color: #e6a23c; }
  .text-danger { color: #f56c6c; }
}
</style>
