<template>
  <div class="battle-rounds">
    <el-card>
      <div slot="header" class="card-header">
        <span>游戏回合查询</span>
      </div>

      <!-- 搜索表单 -->
      <el-form :inline="true" :model="queryForm" class="search-form">
        <el-form-item label="状态">
          <el-select v-model="queryForm.status" placeholder="全部" clearable>
            <el-option label="助战中" value="ASSIST" />
            <el-option label="对战中" value="BATTLE" />
            <el-option label="已完成" value="FINISHED" />
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
        <el-table-column prop="roundId" label="回合ID" width="100" />
        <el-table-column prop="status" label="状态" width="100" align="center">
          <template slot-scope="scope">
            <el-tag :type="getStatusType(scope.row.status)" size="small">
              {{ getStatusText(scope.row.status) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="创建时间" width="180" />
        <el-table-column label="助战时间" width="180">
          <template slot-scope="scope">
            <span v-text="scope.row.assistStartTime || '-'" /> ~ <span v-text="scope.row.assistEndTime || '-'" />
          </template>
        </el-table-column>
        <el-table-column prop="totalAssistCount" label="助战次数" width="100" align="right" />
        <el-table-column prop="totalAssistGold" label="助战金币" width="120" align="right">
          <template slot-scope="scope">
            <span class="number-text">{{ (scope.row.totalAssistGold || 0).toLocaleString() }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="totalRealAssistGold" label="真实金币" width="120" align="right">
          <template slot-scope="scope">
            <span class="gold-text">{{ (scope.row.totalRealAssistGold || 0).toLocaleString() }}</span>
          </template>
        </el-table-column>
        <el-table-column label="对战结果" width="180">
          <template slot-scope="scope">
            <span v-if="scope.row.status === 'FINISHED'">
              魁首: {{ getGeneralName(scope.row.resultGeneral1Id) }}
              <br v-if="scope.row.resultMode === 'DUAL'">
              翘楚: {{ getGeneralName(scope.row.resultGeneral2Id) }}
              </span>
            </span>
            <span v-else>-</span>
          </template>
        </el-table-column>
        <el-table-column prop="prizePoolBefore" label="奖池变化" width="150" align="right">
          <template slot-scope="scope">
            <span v-if="scope.row.status === 'FINISHED'">
              {{ (scope.row.prizePoolBefore || 0).toLocaleString() }} → {{ (scope.row.prizePoolAfter || 0).toLocaleString() }}
            </span>
            <span v-else>-</span>
          </template>
        </el-table-column>
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
import { findBattleRoundList } from '@/api/battleAdminService'

export default {
  name: 'BattleRounds',
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
        status: '',
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
          statusList: this.queryForm.status ? [this.queryForm.status] : [],
          startDate: this.queryForm.startDate,
          endDate: this.queryForm.endDate
        }
        const res = await findBattleRoundList(req)
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
        status: '',
        startDate: '',
        endDate: ''
      }
      this.dateRange = []
      this.pageInfo.currentPage = 1
      this.loadData()
    },
    getStatusType(status) {
      const map = { ASSIST: 'warning', BATTLE: 'danger', FINISHED: 'success' }
      return map[status] || 'info'
    },
    getStatusText(status) {
      const map = { ASSIST: '助战中', BATTLE: '对战中', FINISHED: '已完成' }
      return map[status] || status
    },
    getGeneralName(id) {
      if (!id) return '-'
      const general = this.generals.find(g => g.id === id)
      return general ? general.name : '武将' + id
    }
  }
}
</script>

<style lang="scss" scoped>
.battle-rounds {
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

  .gold-text {
    color: #e6a23c;
    font-weight: 500;
  }

  .el-pagination {
    margin-top: 16px;
    text-align: right;
  }
}
</style>
