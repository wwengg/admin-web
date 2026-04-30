<template>
  <div class="wallet-manage">
    <el-row :gutter="20">
      <!-- 统计卡片 -->
      <el-col :span="6" v-for="stat in statistics" :key="stat.label">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" :style="{ background: stat.color }">
              <i :class="stat.icon"></i>
            </div>
            <div class="stat-info">
              <div class="stat-label">{{ stat.label }}</div>
              <div class="stat-value">{{ formatNumber(stat.value) }}</div>
              <div class="stat-sub" v-if="stat.subLabel">{{ stat.subLabel }}: {{ formatNumber(stat.subValue) }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 钱包查询 -->
    <el-card class="mt-20">
      <div slot="header" class="card-header">
        <span>钱包查询</span>
      </div>

      <el-form :inline="true" :model="walletQuery" size="small">
        <el-form-item label="用户ID">
          <el-input v-model="walletQuery.userId" placeholder="请输入用户ID" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQueryWallet">查询</el-button>
          <el-button @click="handleAddBalance">加币</el-button>
          <el-button type="danger" @click="handleDeductBalance">扣币</el-button>
          <el-button @click="loadStatistics">刷新统计</el-button>
        </el-form-item>
      </el-form>

      <!-- 钱包信息 -->
      <el-divider v-if="walletInfo">钱包信息</el-divider>
      <el-descriptions v-if="walletInfo" :column="3" border>
        <el-descriptions-item label="用户ID">{{ walletInfo.userId }}</el-descriptions-item>
        <el-descriptions-item label="当前余额">{{ formatNumber(walletInfo.balance) }}</el-descriptions-item>
        <el-descriptions-item label="总充值">{{ formatNumber(walletInfo.totalRecharge) }}</el-descriptions-item>
        <el-descriptions-item label="总中奖">{{ formatNumber(walletInfo.totalWin) }}</el-descriptions-item>
        <el-descriptions-item label="总消耗">{{ formatNumber(walletInfo.totalCost) }}</el-descriptions-item>
      </el-descriptions>
    </el-card>

    <!-- 钱包流水 -->
    <el-card class="mt-20">
      <div slot="header" class="card-header">
        <span>钱包流水</span>
      </div>

      <!-- 筛选 -->
      <el-form :inline="true" :model="logQuery" size="small">
        <el-form-item label="用户ID">
          <el-input v-model="logQuery.userId" placeholder="请输入用户ID" clearable style="width: 150px" />
        </el-form-item>
        <el-form-item label="业务类型">
          <el-select v-model="logQuery.bizType" clearable placeholder="请选择" style="width: 150px">
            <el-option label="全部" value="" />
            <el-option label="充值" value="RECHARGE" />
            <el-option label="消耗" value="COST" />
            <el-option label="中奖" value="WIN" />
            <el-option label="退款" value="REFUND" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleQueryLogs">查询</el-button>
        </el-form-item>
      </el-form>

      <!-- 流水表格 -->
      <el-table :data="logList" v-loading="logLoading" border stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="userId" label="用户ID" width="100" />
        <el-table-column label="变动金额" width="120">
          <template slot-scope="{ row }">
            <span :style="{ color: row.amount > 0 ? '#67C23A' : '#F56C6C' }">
              {{ row.amount > 0 ? '+' : '' }}{{ formatNumber(row.amount) }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="balanceAfter" label="变动后余额" width="130">
          <template slot-scope="{ row }">
            {{ formatNumber(row.balanceAfter) }}
          </template>
        </el-table-column>
        <el-table-column prop="bizType" label="业务类型" width="100">
          <template slot-scope="{ row }">
            <el-tag :type="getBizTypeTag(row.bizType)" size="small">
              {{ getBizTypeLabel(row.bizType) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="bizId" label="关联业务ID" width="100" />
        <el-table-column prop="description" label="描述" min-width="200" />
        <el-table-column prop="createdAt" label="创建时间" width="180">
          <template slot-scope="{ row }">
            {{ parseTime(row.createdAt) }}
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        class="mt-20"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="logTotal"
        :page-size.sync="logQuery.pageSize"
        :current-page.sync="logQuery.page"
        :page-sizes="[10, 20, 50, 100]"
        @size-change="handleQueryLogs"
        @current-change="handleQueryLogs"
      />
    </el-card>

    <!-- 加币对话框 -->
    <el-dialog title="加币" :visible.sync="addBalanceVisible" width="500px">
      <el-form :model="addBalanceForm" :rules="addBalanceRules" ref="addBalanceForm" label-width="100px">
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="addBalanceForm.userId" placeholder="请输入用户ID" />
        </el-form-item>
        <el-form-item label="加币数量" prop="amount">
          <el-input-number v-model="addBalanceForm.amount" :min="1" :max="999999999" />
        </el-form-item>
        <el-form-item label="备注" prop="description">
          <el-input v-model="addBalanceForm.description" type="textarea" :rows="3" placeholder="请输入备注信息" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="addBalanceVisible = false">取消</el-button>
        <el-button type="primary" @click="handleAddBalanceSubmit" :loading="addBalanceSubmitting">确定</el-button>
      </div>
    </el-dialog>

    <!-- 扣币对话框 -->
    <el-dialog title="扣币" :visible.sync="deductBalanceVisible" width="500px">
      <el-form :model="deductBalanceForm" :rules="deductBalanceRules" ref="deductBalanceForm" label-width="100px">
        <el-form-item label="用户ID" prop="userId">
          <el-input v-model="deductBalanceForm.userId" placeholder="请输入用户ID" />
        </el-form-item>
        <el-form-item label="扣币数量" prop="amount">
          <el-input-number v-model="deductBalanceForm.amount" :min="1" :max="999999999" />
        </el-form-item>
        <el-form-item label="备注" prop="description">
          <el-input v-model="deductBalanceForm.description" type="textarea" :rows="3" placeholder="请输入备注信息" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="deductBalanceVisible = false">取消</el-button>
        <el-button type="danger" @click="handleDeductBalanceSubmit" :loading="deductBalanceSubmitting">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getWalletInfo, findWalletList, getWalletStatistics, addBalance, deductBalance } from '@/api/walletAdminService'

export default {
  name: 'WalletManage',
  data() {
    return {
      // 统计数据
      statistics: [],
      // 钱包查询
      walletQuery: {
        userId: ''
      },
      walletInfo: null,
      walletLoading: false,
      // 流水查询
      logQuery: {
        userId: '',
        bizType: '',
        page: 1,
        pageSize: 20
      },
      logList: [],
      logTotal: 0,
      logLoading: false,
      // 加币
      addBalanceVisible: false,
      addBalanceSubmitting: false,
      addBalanceForm: {
        userId: '',
        amount: 100,
        description: ''
      },
      addBalanceRules: {
        userId: [{ required: true, message: '请输入用户ID', trigger: 'blur' }],
        amount: [{ required: true, message: '请输入加币数量', trigger: 'blur' }]
      },
      // 扣币
      deductBalanceVisible: false,
      deductBalanceSubmitting: false,
      deductBalanceForm: {
        userId: '',
        amount: 100,
        description: ''
      },
      deductBalanceRules: {
        userId: [{ required: true, message: '请输入用户ID', trigger: 'blur' }],
        amount: [{ required: true, message: '请输入扣币数量', trigger: 'blur' }]
      }
    }
  },
  mounted() {
    this.loadStatistics()
  },
  methods: {
    formatNumber(num) {
      if (num === null || num === undefined) return '0'
      return Number(num).toLocaleString()
    },
    async loadStatistics() {
      try {
        const response = await getWalletStatistics({})
        if (response.code === 'Success') {
          const stats = response.statistics
          this.statistics = [
            {
              label: '总钱包数',
              value: stats.totalWallets,
              icon: 'el-icon-wallet',
              color: '#409EFF'
            },
            {
              label: '总余额',
              value: stats.totalBalance,
              subLabel: '今日流水',
              subValue: stats.todayLogs,
              icon: 'el-icon-coin',
              color: '#67C23A'
            },
            {
              label: '今日充值',
              value: stats.todayRecharge,
              icon: 'el-icon-sold-out',
              color: '#E6A23C'
            },
            {
              label: '今日消耗',
              value: stats.todayCost,
              subLabel: '今日中奖',
              subValue: stats.todayWin,
              icon: 'el-icon-goods',
              color: '#F56C6C'
            }
          ]
          this.$message.success('统计数据加载成功')
        } else {
          this.$message.error(response.msg || '加载失败')
        }
      } catch (error) {
        console.error('Failed to load statistics', error)
        this.$message.error('加载失败')
      }
    },
    async handleQueryWallet() {
      if (!this.walletQuery.userId) {
        this.$message.warning('请输入用户ID')
        return
      }
      this.walletLoading = true
      try {
        const response = await getWalletInfo({ userId: Number(this.walletQuery.userId) })
        if (response.code === 'Success') {
          this.walletInfo = response.wallet
          this.$message.success('查询成功')
        } else {
          this.$message.error(response.msg || '查询失败')
        }
      } catch (error) {
        this.$message.error('查询失败')
      } finally {
        this.walletLoading = false
      }
    },
    async handleQueryLogs() {
      this.logLoading = true
      try {
        const params = {
          pageInfo: {
            page: this.logQuery.page,
            pageSize: this.logQuery.pageSize
          }
        }
        if (this.logQuery.userId) {
          params.userId = Number(this.logQuery.userId)
        }
        if (this.logQuery.bizType) {
          params.bizType = this.logQuery.bizType
        }

        const response = await findWalletList(params)
        if (response.code === 'Success') {
          this.logList = response.list || []
          this.logTotal = response.total || 0
          this.$message.success(`查询成功，共 ${response.total} 条记录`)
        } else {
          this.$message.error(response.msg || '查询失败')
        }
      } catch (error) {
        this.$message.error('查询失败')
      } finally {
        this.logLoading = false
      }
    },
    handleAddBalance() {
      if (this.walletQuery.userId) {
        this.addBalanceForm.userId = Number(this.walletQuery.userId)
      }
      this.addBalanceVisible = true
    },
    async handleAddBalanceSubmit() {
      this.$refs.addBalanceForm.validate(async (valid) => {
        if (!valid) return
        this.addBalanceSubmitting = true
        try {
          const response = await addBalance({
            userId: Number(this.addBalanceForm.userId),
            amount: Number(this.addBalanceForm.amount),
            description: this.addBalanceForm.description || '管理员加币'
          })
          if (response.code === 'Success') {
            this.$message.success('加币成功')
            this.addBalanceVisible = false
            this.addBalanceForm = {
              userId: '',
              amount: 100,
              description: ''
            }
            // 刷新钱包信息
            if (this.walletInfo && this.walletInfo.userId === Number(this.addBalanceForm.userId)) {
              await this.handleQueryWallet()
            }
            // 刷新统计
            await this.loadStatistics()
          } else {
            this.$message.error(response.msg || '操作失败')
          }
        } catch (error) {
          this.$message.error('操作失败')
        } finally {
          this.addBalanceSubmitting = false
        }
      })
    },
    handleDeductBalance() {
      if (this.walletQuery.userId) {
        this.deductBalanceForm.userId = Number(this.walletQuery.userId)
      }
      this.deductBalanceVisible = true
    },
    async handleDeductBalanceSubmit() {
      this.$refs.deductBalanceForm.validate(async (valid) => {
        if (!valid) return
        this.deductBalanceSubmitting = true
        try {
          const response = await deductBalance({
            userId: Number(this.deductBalanceForm.userId),
            amount: Number(this.deductBalanceForm.amount),
            description: this.deductBalanceForm.description || '管理员扣币'
          })
          if (response.code === 'Success') {
            this.$message.success('扣币成功')
            this.deductBalanceVisible = false
            this.deductBalanceForm = {
              userId: '',
              amount: 100,
              description: ''
            }
            // 刷新钱包信息
            if (this.walletInfo && this.walletInfo.userId === Number(this.deductBalanceForm.userId)) {
              await this.handleQueryWallet()
            }
            // 刷新统计
            await this.loadStatistics()
          } else {
            this.$message.error(response.msg || '操作失败')
          }
        } catch (error) {
          this.$message.error('操作失败')
        } finally {
          this.deductBalanceSubmitting = false
        }
      })
    },
    getBizTypeLabel(bizType) {
      const typeMap = {
        RECHARGE: '充值',
        COST: '消耗',
        WIN: '中奖',
        REFUND: '退款'
      }
      return typeMap[bizType] || bizType
    },
    getBizTypeTag(bizType) {
      const typeMap = {
        RECHARGE: 'success',
        COST: 'danger',
        WIN: 'warning',
        REFUND: 'info'
      }
      return typeMap[bizType] || ''
    },
    parseTime(time) {
      if (!time) return ''
      const date = new Date(time)
      const y = date.getFullYear()
      const m = String(date.getMonth() + 1).padStart(2, '0')
      const d = String(date.getDate()).padStart(2, '0')
      const h = String(date.getHours()).padStart(2, '0')
      const min = String(date.getMinutes()).padStart(2, '0')
      const s = String(date.getSeconds()).padStart(2, '0')
      return y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s
    }
  }
}
</script>

<style scoped>
.wallet-manage {
  padding: 20px;
}

.stat-card {
  margin-bottom: 20px;
}

.stat-content {
  display: flex;
  align-items: center;
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
}

.stat-icon i {
  font-size: 28px;
  color: white;
}

.stat-info {
  flex: 1;
}

.stat-label {
  font-size: 14px;
  color: #909399;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
}

.stat-sub {
  font-size: 12px;
  color: #67C23A;
  margin-top: 5px;
}

.mt-20 {
  margin-top: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
