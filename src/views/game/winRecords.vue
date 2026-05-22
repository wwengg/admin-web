<template>
  <div class="win-records">
    <el-card>
      <div slot="header" class="card-header">
        <span>中奖记录查询</span>
      </div>

      <!-- 搜索表单 -->
      <el-form :inline="true" :model="queryForm" class="search-form">
        <el-form-item label="武将">
          <el-select v-model="queryForm.generalId" placeholder="全部" clearable>
            <el-option v-for="g in generals" :key="g.id" :label="g.name" :value="g.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="用户类型">
          <el-select v-model="queryForm.isSystemUser" placeholder="全部" clearable>
            <el-option label="真实玩家" :value="false" />
            <el-option label="系统号" :value="true" />
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
        <el-table-column prop="id" label="记录ID" width="100" />
        <el-table-column prop="roundId" label="回合ID" width="100" />
        <el-table-column prop="userId" label="用户ID" width="100" />
        <el-table-column prop="generalId" label="武将" width="100">
          <template slot-scope="scope">
            {{ getGeneralName(scope.row.generalId) }}
          </template>
        </el-table-column>
        <el-table-column prop="assistTotal" label="助战总值" width="100" align="right" />
        <el-table-column prop="winMultiplier" label="中奖倍率" width="100" align="right">
          <template slot-scope="scope">
            <span class="multiplier-text">{{ scope.row.winMultiplier }}x</span>
          </template>
        </el-table-column>
        <el-table-column prop="winAmount" label="中奖金额" width="120" align="right">
          <template slot-scope="scope">
            <span :class="scope.row.isSystemUser ? '' : 'win-text'">
              ¥{{ scope.row.winAmount.toLocaleString() }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="isSystemUser" label="用户类型" width="100" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.isSystemUser ? 'warning' : 'success'" size="small">
              {{ scope.row.isSystemUser ? '系统号' : '真实玩家' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="中奖时间" width="180" />
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
import { findWinRecordList, findGeneralList } from '@/api/battleAdminService'

export default {
  name: 'WinRecords',
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
        generalId: null,
        isSystemUser: null,
        startDate: '',
        endDate: ''
      },
      dateRange: [],
      generals: []
    }
  },
  mounted() {
    this.loadGenerals()
    this.loadData()
  },
  methods: {
    async loadGenerals() {
      try {
        const res = await findGeneralList({ pageInfo: { page: 1, pageSize: 100 } })
        if (res.code === 'Success') {
          this.generals = (res.list || []).map(g => ({ id: g.id, name: g.name }))
        }
      } catch (e) {
        console.error('加载武将列表失败:', e)
      }
    },
    async loadData() {
      try {
        this.loading = true
        const req = {
          pageInfo: this.pageInfo,
          query: {},
          generalIdList: this.queryForm.generalId ? [this.queryForm.generalId] : [],
          isSystemUserList: this.queryForm.isSystemUser !== null ? [this.queryForm.isSystemUser] : [],
          startDate: this.queryForm.startDate,
          endDate: this.queryForm.endDate
        }
        const res = await findWinRecordList(req)
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
        generalId: null,
        isSystemUser: null,
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
.win-records {
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

  .multiplier-text {
    color: #409eff;
    font-weight: 500;
  }

  .win-text {
    color: #e6a23c;
    font-weight: bold;
  }

  .el-pagination {
    margin-top: 16px;
    text-align: right;
  }
}
</style>
