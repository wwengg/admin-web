<template>
  <div class="prize-pool-logs">
    <el-card>
      <div slot="header" class="card-header">
        <span>奖池流水查询</span>
      </div>

      <!-- 搜索表单 -->
      <el-form :inline="true" :model="queryForm" class="search-form">
        <el-form-item label="流水类型">
          <el-select v-model="queryForm.logType" placeholder="全部" clearable>
            <el-option label="流入(助战)" value="ASSIST_IN" />
            <el-option label="流出(派奖)" value="PAYOUT_OUT" />
          </el-select>
        </el-form-item>
        <el-form-item label="日期范围">
          <el-date-picker
            v-model="dateRange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            @change="handleDateChange"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="loadData">查询</el-button>
          <el-button icon="el-icon-refresh" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 数据表格 -->
      <el-table :data="tableData" v-loading="loading" border>
        <el-table-column prop="id" label="流水ID" width="100" />
        <el-table-column prop="roundId" label="回合ID" width="100" />
        <el-table-column prop="logType" label="类型" width="120" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.logType === 'ASSIST_IN' ? 'success' : 'danger'" size="small">
              {{ scope.row.logType === 'ASSIST_IN' ? '流入' : '流出' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="amount" label="变动金额" width="120" align="right">
          <template slot-scope="scope">
            <span :class="scope.row.amount > 0 ? 'text-success' : 'text-danger'">
              {{ scope.row.amount > 0 ? '+' : '' }}{{ scope.row.amount.toLocaleString() }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="balanceAfter" label="变动后余额" width="120" align="right">
          <template slot-scope="scope">
            <span class="number-text">{{ scope.row.balanceAfter.toLocaleString() }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="relatedUserId" label="关联用户" width="100" />
        <el-table-column prop="relatedGeneralId" label="关联武将" width="100">
          <template slot-scope="scope">
            {{ scope.row.relatedGeneralId ? getGeneralName(scope.row.relatedGeneralId) : '-' }}
          </template>
        </el-table-column>
        <el-table-column prop="description" label="描述" min-width="200" show-overflow-tooltip />
        <el-table-column prop="createdAt" label="时间" width="180" />
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageInfo.currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      />
    </el-card>
  </div>
</template>

<script>
import { findPrizePoolLogList } from '@/api/battleAdminService'

export default {
  name: 'PrizePoolLogs',
  data() {
    return {
      loading: false,
      tableData: [],
      total: 0,
      pageInfo: {
        currentPage: 1,
        pageSize: 20
      },
      queryForm: {
        logType: '',
        startDate: '',
        endDate: ''
      },
      dateRange: [],
      generals: [
        { id: 1, name: '地狱犬' },
        { id: 2, name: '九尾狐' },
        { id: 3, name: '夔牛' },
        { id: 4, name: '麒麟' },
        { id: 5, name: '朱雀' },
        { id: 6, name: '玄武' },
        { id: 7, name: '白虎' },
        { id: 8, name: '青龙' }
      ]
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        this.loading = true
        const req = {
          pageInfo: this.pageInfo,
          query: {},
          logTypeList: this.queryForm.logType ? [this.queryForm.logType] : [],
          startDate: this.queryForm.startDate,
          endDate: this.queryForm.endDate
        }
        const res = await findPrizePoolLogList(req)
        if (res.code === 'Success') {
          this.tableData = res.list || []
          this.total = res.total || 0
        } else {
          this.$message.error(res.msg || '加载数据失败')
        }
      } catch (error) {
        console.error('加载数据失败:', error)
        this.$message.error('加载数据失败')
      } finally {
        this.loading = false
      }
    },
    handleDateChange(val) {
      if (val && val.length === 2) {
        this.queryForm.startDate = val[0]
        this.queryForm.endDate = val[1]
      } else {
        this.queryForm.startDate = ''
        this.queryForm.endDate = ''
      }
    },
    handleSizeChange(val) {
      this.pageInfo.pageSize = val
      this.loadData()
    },
    handleCurrentChange(val) {
      this.pageInfo.currentPage = val
      this.loadData()
    },
    resetQuery() {
      this.queryForm = {
        logType: '',
        startDate: '',
        endDate: ''
      }
      this.dateRange = []
      this.pageInfo.currentPage = 1
      this.loadData()
    },
    getGeneralName(id) {
      const general = this.generals.find(g => g.id === id)
      return general ? general.name : `武将${id}`
    }
  }
}
</script>

<style lang="scss" scoped>
.prize-pool-logs {
  padding: 16px;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }

  .search-form {
    margin-bottom: 16px;
  }

  .number-text {
    font-family: 'Courier New', monospace;
    font-weight: 500;
  }

  .text-success { color: #67c23a; }
  .text-danger { color: #f56c6c; }

  .el-pagination {
    margin-top: 16px;
    text-align: right;
  }
}
</style>
