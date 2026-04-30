<template>
  <div class="lucky-rounds">
    <el-card>
      <div slot="header" class="card-header">
        <span>回合管理</span>
        <div>
          <el-button type="primary" size="small" @click="handleReset('JUNIOR')">重置初级场</el-button>
          <el-button type="primary" size="small" @click="handleReset('SENIOR')">重置高级场</el-button>
        </div>
      </div>

      <!-- 搜索表单 -->
      <el-form :inline="true" :model="queryForm" size="small">
        <el-form-item label="场次类型">
          <el-select v-model="queryForm.fieldType" placeholder="全部" clearable>
            <el-option label="初级场" value="JUNIOR" />
            <el-option label="高级场" value="SENIOR" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="queryForm.status" placeholder="全部" clearable>
            <el-option label="进行中" value="ACTIVE" />
            <el-option label="已完成" value="COMPLETED" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loadData">查询</el-button>
          <el-button @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 统计卡片 -->
      <el-row :gutter="20" class="mb-4">
        <el-col :span="6">
          <el-card shadow="hover">
            <div class="stat-item">
              <div class="stat-label">当前回合剩余</div>
              <div class="stat-value">{{ stats.remainingCount }}</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <div class="stat-item">
              <div class="stat-label">总抽奖次数</div>
              <div class="stat-value">{{ stats.totalDraws }}</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <div class="stat-item">
              <div class="stat-label">总派奖金额</div>
              <div class="stat-value">{{ stats.totalPayout }}</div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card shadow="hover">
            <div class="stat-item">
              <div class="stat-label">已完成回合</div>
              <div class="stat-value">{{ stats.completedRounds }}</div>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- 数据表格 -->
      <el-table :data="tableData" v-loading="loading" border stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="roundId" label="回合ID" width="150" />
        <el-table-column prop="fieldType" label="场次类型" width="100">
          <template slot-scope="{ row }">
            <el-tag :type="row.fieldType === 'JUNIOR' ? '' : 'warning'" size="small">
              {{ row.fieldType === 'JUNIOR' ? '初级场' : '高级场' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="100">
          <template slot-scope="{ row }">
            <el-tag :type="row.status === 'ACTIVE' ? 'success' : 'info'" size="small">
              {{ row.status === 'ACTIVE' ? '进行中' : '已完成' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="totalPrizes" label="总奖品数" width="100" />
        <el-table-column prop="remainingCount" label="剩余数量" width="100" />
        <el-table-column prop="drawCount" label="抽奖次数" width="100" />
        <el-table-column prop="drawOnce" label="单抽次数" width="100" />
        <el-table-column prop="drawTen" label="十连抽次数" width="100" />
        <el-table-column prop="totalPayout" label="总派奖" width="120" />
        <el-table-column prop="startedAt" label="开始时间" width="180" />
        <el-table-column prop="completedAt" label="完成时间" width="180" />
        <el-table-column label="操作" width="120" fixed="right">
          <template slot-scope="{ row }">
            <el-button v-if="row.status === 'ACTIVE'" type="text" size="small" @click="handleComplete(row)">完成回合</el-button>
            <el-button type="text" size="small" @click="handleViewDetail(row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        class="mt-4"
        :current-page="pagination.page"
        :page-size="pagination.pageSize"
        :total="pagination.total"
        @current-change="handlePageChange"
        layout="total, prev, pager, next, jumper"
      />
    </el-card>
  </div>
</template>

<script>
import { findLuckyRoundList, completeLuckyRound, resetLuckyPrizePool, getLuckyStatistics } from '@/api/luckyAdminService'

export default {
  name: 'LuckyRounds',
  data() {
    return {
      queryForm: {
        fieldType: '',
        status: ''
      },
      tableData: [],
      loading: false,
      pagination: {
        page: 1,
        pageSize: 20,
        total: 0
      },
      stats: {
        remainingCount: 0,
        totalDraws: 0,
        totalPayout: 0,
        completedRounds: 0
      }
    }
  },
  mounted() {
    this.loadData()
    this.loadStats()
  },
  methods: {
    async loadData() {
      this.loading = true
      try {
        const response = await findLuckyRoundList({
          fieldType: this.queryForm.fieldType,
          status: this.queryForm.status,
          page: this.pagination.page,
          pageSize: this.pagination.pageSize
        })
        if (response.code === "Success") {
          this.tableData = response.list || []
          this.pagination.total = response.total || 0
        } else {
          this.$message.error(response.msg || '加载数据失败')
        }
      } catch (error) {
        this.$message.error('加载数据失败')
      } finally {
        this.loading = false
      }
    },
    async loadStats() {
      try {
        const response = await getLuckyStatistics({})
        if (response.code === "Success") {
          const data = response.data || {}
          this.stats = {
            remainingCount: data.current_round?.remaining_count || 0,
            totalDraws: data.total_draws || 0,
            totalPayout: data.current_round?.total_payout || 0,
            completedRounds: 0 // TODO: 从后端获取
          }
        }
      } catch (error) {
        console.error('加载统计数据失败', error)
      }
    },
    handlePageChange(page) {
      this.pagination.page = page
      this.loadData()
    },
    resetQuery() {
      this.queryForm = {
        fieldType: '',
        status: ''
      }
      this.pagination.page = 1
      this.loadData()
    },
    async handleComplete(row) {
      await this.$confirm('确定要完成当前回合吗？这将开启新回合。', '提示', { type: 'warning' })
      try {
        const response = await completeLuckyRound({ id: row.id })
        if (response.code === "Success") {
          this.$message.success('回合已完成')
          this.loadData()
          this.loadStats()
        } else {
          this.$message.error(response.msg || '操作失败')
        }
      } catch (error) {
        if (error !== 'cancel') {
          this.$message.error('操作失败')
        }
      }
    },
    async handleReset(fieldType) {
      const typeName = fieldType === 'JUNIOR' ? '初级场' : '高级场'
      await this.$confirm(`确定要重置${typeName}奖池吗？当前回合将被完成。`, '提示', { type: 'warning' })
      try {
        const response = await resetLuckyPrizePool({ fieldType })
        if (response.code === "Success") {
          this.$message.success('奖池已重置')
          this.loadData()
          this.loadStats()
        } else {
          this.$message.error(response.msg || '操作失败')
        }
      } catch (error) {
        if (error !== 'cancel') {
          this.$message.error('操作失败')
        }
      }
    },
    handleViewDetail(row) {
      // TODO: 跳转到详情页或显示详情对话框
      this.$message.info('详情功能待实现')
    }
  }
}
</script>

<style scoped>
.lucky-rounds {
  padding: 20px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.stat-item {
  text-align: center;
}
.stat-label {
  font-size: 14px;
  color: #909399;
  margin-bottom: 8px;
}
.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
}
.mb-4 {
  margin-bottom: 16px;
}
.mt-4 {
  margin-top: 16px;
}
</style>
