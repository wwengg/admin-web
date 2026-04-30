<template>
  <div class="lucky-draws">
    <el-card>
      <div slot="header" class="card-header">
        <span>抽奖记录</span>
      </div>

      <!-- 搜索表单 -->
      <el-form :inline="true" :model="queryForm" size="small">
        <el-form-item label="回合ID">
          <el-input v-model="queryForm.roundId" placeholder="回合ID" clearable />
        </el-form-item>
        <el-form-item label="用户ID">
          <el-input v-model="queryForm.userId" placeholder="用户ID" clearable />
        </el-form-item>
        <el-form-item label="场次类型">
          <el-select v-model="queryForm.fieldType" placeholder="全部" clearable>
            <el-option label="初级场" value="JUNIOR" />
            <el-option label="高级场" value="SENIOR" />
          </el-select>
        </el-form-item>
        <el-form-item label="抽奖类型">
          <el-select v-model="queryForm.drawType" placeholder="全部" clearable>
            <el-option label="单抽" value="ONCE" />
            <el-option label="十连抽" value="TEN" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loadData">查询</el-button>
          <el-button @click="resetQuery">重置</el-button>
          <el-button type="success" @click="handleExport">导出</el-button>
        </el-form-item>
      </el-form>

      <!-- 数据表格 -->
      <el-table :data="tableData" v-loading="loading" border stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="roundId" label="回合ID" width="150" />
        <el-table-column prop="userId" label="用户ID" width="120" />
        <el-table-column prop="fieldType" label="场次类型" width="100">
          <template slot-scope="{ row }">
            <el-tag :type="row.fieldType === 'JUNIOR' ? '' : 'warning'" size="small">
              {{ row.fieldType === 'JUNIOR' ? '初级场' : '高级场' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="drawType" label="抽奖类型" width="100">
          <template slot-scope="{ row }">
            <el-tag :type="row.drawType === 'ONCE' ? 'primary' : 'success'" size="small">
              {{ row.drawType === 'ONCE' ? '单抽' : '十连抽' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="drawCount" label="抽取数量" width="100" />
        <el-table-column prop="costGold" label="消耗金币" width="120" />
        <el-table-column prop="prizeName" label="奖品名称" width="150" />
        <el-table-column prop="prizeValue" label="奖品价值" width="120" />
        <el-table-column prop="createdAt" label="抽奖时间" width="180" />
        <el-table-column label="操作" width="100" fixed="right">
          <template slot-scope="{ row }">
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
        @size-change="handleSizeChange"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[20, 50, 100, 200]"
      />
    </el-card>

    <!-- 详情对话框 -->
    <el-dialog title="抽奖详情" :visible.sync="detailVisible" width="600px">
      <el-descriptions :column="2" border v-if="currentRow">
        <el-descriptions-item label="记录ID">{{ currentRow.id }}</el-descriptions-item>
        <el-descriptions-item label="回合ID">{{ currentRow.roundId }}</el-descriptions-item>
        <el-descriptions-item label="用户ID">{{ currentRow.userId }}</el-descriptions-item>
        <el-descriptions-item label="场次类型">
          {{ currentRow.fieldType === 'JUNIOR' ? '初级场' : '高级场' }}
        </el-descriptions-item>
        <el-descriptions-item label="抽奖类型">
          {{ currentRow.drawType === 'ONCE' ? '单抽' : '十连抽' }}
        </el-descriptions-item>
        <el-descriptions-item label="抽取数量">{{ currentRow.drawCount }}</el-descriptions-item>
        <el-descriptions-item label="消耗金币">{{ currentRow.costGold }}</el-descriptions-item>
        <el-descriptions-item label="奖品名称">{{ currentRow.prizeName }}</el-descriptions-item>
        <el-descriptions-item label="奖品价值">{{ currentRow.prizeValue }}</el-descriptions-item>
        <el-descriptions-item label="抽奖时间" :span="2">{{ currentRow.createdAt }}</el-descriptions-item>
      </el-descriptions>

      <!-- 十连抽的奖品列表 -->
      <div v-if="currentRow && currentRow.drawType === 'TEN' && prizesList.length > 0" class="mt-4">
        <h4>中奖列表</h4>
        <el-table :data="prizesList" size="small" border>
          <el-table-column prop="prizeName" label="奖品名称" />
          <el-table-column prop="prizeValue" label="奖品价值" width="120" />
        </el-table>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { findLuckyDrawList } from '@/api/luckyAdminService'

export default {
  name: 'LuckyDraws',
  data() {
    return {
      queryForm: {
        roundId: '',
        userId: '',
        fieldType: '',
        drawType: ''
      },
      tableData: [],
      loading: false,
      pagination: {
        page: 1,
        pageSize: 20,
        total: 0
      },
      detailVisible: false,
      currentRow: null,
      prizesList: []
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      this.loading = true
      try {
        const response = await findLuckyDrawList({
          roundId: this.queryForm.roundId ? parseInt(this.queryForm.roundId) : 0,
          userId: this.queryForm.userId ? parseInt(this.queryForm.userId) : 0,
          fieldType: this.queryForm.fieldType,
          drawType: this.queryForm.drawType,
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
    handlePageChange(page) {
      this.pagination.page = page
      this.loadData()
    },
    handleSizeChange(size) {
      this.pagination.pageSize = size
      this.pagination.page = 1
      this.loadData()
    },
    resetQuery() {
      this.queryForm = {
        roundId: '',
        userId: '',
        fieldType: '',
        drawType: ''
      }
      this.pagination.page = 1
      this.loadData()
    },
    handleViewDetail(row) {
      this.currentRow = row
      // 解析奖品列表
      if (row.drawType === 'TEN' && row.prizeDetail) {
        try {
          this.prizesList = JSON.parse(row.prizeDetail)
        } catch (e) {
          this.prizesList = []
        }
      } else {
        this.prizesList = []
      }
      this.detailVisible = true
    },
    async handleExport() {
      this.$message.info('导出功能待实现')
      // TODO: 实现导出功能
    }
  }
}
</script>

<style scoped>
.lucky-draws {
  padding: 20px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mt-4 {
  margin-top: 16px;
}
</style>
