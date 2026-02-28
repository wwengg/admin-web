<template>
  <div class="prize-pool-stages">
    <el-card>
      <div slot="header" class="card-header">
        <span>奖池阶段管理</span>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd">新增</el-button>
      </div>

      <!-- 搜索表单 -->
      <el-form :inline="true" :model="queryForm" class="search-form">
        <el-form-item label="关键词">
          <el-input v-model="queryForm.keyword" placeholder="阶段名称" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="loadData">查询</el-button>
          <el-button icon="el-icon-refresh" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 数据表格 -->
      <el-table :data="tableData" v-loading="loading" border>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="stageName" label="阶段名称" width="200" />
        <el-table-column prop="poolMin" label="奖池最小值" width="150" align="right">
          <template slot-scope="scope">
            {{ formatNumber(scope.row.poolMin) }}
          </template>
        </el-table-column>
        <el-table-column prop="poolMax" label="奖池最大值" width="150" align="right">
          <template slot-scope="scope">
            {{ formatNumber(scope.row.poolMax) }}
          </template>
        </el-table-column>
        <el-table-column prop="sortOrder" label="排序" width="100" align="center" />
        <el-table-column prop="isEnabled" label="状态" width="100" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.isEnabled ? 'success' : 'info'">
              {{ scope.row.isEnabled ? '启用' : '禁用' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" class="danger-text" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageInfo.page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      />
    </el-card>

    <!-- 编辑对话框 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="500px"
      @close="handleDialogClose"
    >
      <el-form :model="formData" :rules="formRules" ref="formRef" label-width="110px">
        <el-form-item label="阶段名称" prop="stageName">
          <el-input v-model="formData.stageName" placeholder="请输入阶段名称" maxlength="50" />
        </el-form-item>
        <el-form-item label="奖池最小值" prop="poolMin">
          <el-input-number v-model="formData.poolMin" :min="0" :step="1000" />
        </el-form-item>
        <el-form-item label="奖池最大值" prop="poolMax">
          <el-input-number v-model="formData.poolMax" :min="0" :step="1000" />
        </el-form-item>
        <el-form-item label="排序" prop="sortOrder">
          <el-input-number v-model="formData.sortOrder" :min="0" />
        </el-form-item>
        <el-form-item label="状态" prop="isEnabled">
          <el-switch v-model="formData.isEnabled" active-text="启用" inactive-text="禁用" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit" :loading="submitting">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { findPrizePoolStageList, createPrizePoolStage, updatePrizePoolStage, deletePrizePoolStage } from '@/api/battleAdminService'

export default {
  name: 'PrizePoolStages',
  data() {
    return {
      loading: false,
      submitting: false,
      tableData: [],
      total: 0,
      pageInfo: {
        page: 1,
        pageSize: 20
      },
      queryForm: {
        keyword: ''
      },
      dialogVisible: false,
      dialogTitle: '新增奖池阶段',
      isEdit: false,
      formData: {
        id: null,
        stageName: '',
        poolMin: 0,
        poolMax: 0,
        sortOrder: 0,
        isEnabled: true
      },
      formRules: {
        stageName: [{ required: true, message: '请输入阶段名称', trigger: 'blur' }],
        poolMin: [{ required: true, message: '请输入奖池最小值', trigger: 'blur' }],
        poolMax: [{ required: true, message: '请输入奖池最大值', trigger: 'blur' }]
      }
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
          keyword: this.queryForm.keyword
        }
        const res = await findPrizePoolStageList(req)
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
    handleAdd() {
      this.dialogTitle = '新增奖池阶段'
      this.isEdit = false
      this.formData = {
        id: null,
        stageName: '',
        poolMin: 0,
        poolMax: 0,
        sortOrder: 0,
        isEnabled: true
      }
      this.dialogVisible = true
    },
    handleEdit(row) {
      this.dialogTitle = '编辑奖池阶段'
      this.isEdit = true
      this.formData = {
        id: row.id,
        stageName: row.stageName || '',
        poolMin: row.poolMin || 0,
        poolMax: row.poolMax || 0,
        sortOrder: row.sortOrder || 0,
        isEnabled: row.isEnabled !== undefined ? row.isEnabled : true
      }
      this.dialogVisible = true
    },
    async handleDelete(row) {
      try {
        await this.$confirm('确定要删除该奖池阶段吗?', '提示', { type: 'warning' })
        const res = await deletePrizePoolStage({ id: row.id })
        if (res.code === 'Success') {
          this.$message.success('删除成功')
          this.loadData()
        } else {
          this.$message.error(res.msg || '删除失败')
        }
      } catch (error) {
        if (error !== 'cancel') {
          console.error('删除失败:', error)
          this.$message.error('删除失败')
        }
      }
    },
    async handleSubmit() {
      try {
        await this.$refs.formRef.validate()
        this.submitting = true
        const api = this.isEdit ? updatePrizePoolStage : createPrizePoolStage
        const res = await api(this.formData)
        if (res.code === 'Success') {
          this.$message.success(this.isEdit ? '更新成功' : '创建成功')
          this.dialogVisible = false
          this.loadData()
        } else {
          this.$message.error(res.msg || '操作失败')
        }
      } catch (error) {
        console.error('提交失败:', error)
        this.$message.error('操作失败')
      } finally {
        this.submitting = false
      }
    },
    handleDialogClose() {
      this.$refs.formRef?.resetFields()
    },
    handleSizeChange(val) {
      this.pageInfo.pageSize = val
      this.loadData()
    },
    handleCurrentChange(val) {
      this.pageInfo.page = val
      this.loadData()
    },
    resetQuery() {
      this.queryForm = {
        keyword: ''
      }
      this.pageInfo.page = 1
      this.loadData()
    },
    formatNumber(value) {
      if (!value && value !== 0) return '-'
      return Number(value).toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
.prize-pool-stages {
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

  .danger-text {
    color: #f56c6c;
  }

  .el-pagination {
    margin-top: 16px;
    text-align: right;
  }
}
</style>
