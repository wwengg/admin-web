<template>
  <div class="assist-options">
    <el-card>
      <div slot="header" class="card-header">
        <span>助战选项管理</span>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd">新增</el-button>
      </div>

      <!-- 搜索表单 -->
      <el-form :inline="true" :model="queryForm" class="search-form">
        <el-form-item label="关键词">
          <el-input v-model="queryForm.keyword" placeholder="选项代码/备注" clearable />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="queryForm.isEnabled" placeholder="全部" clearable>
            <el-option label="启用" :value="true" />
            <el-option label="禁用" :value="false" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="loadData">查询</el-button>
          <el-button icon="el-icon-refresh" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 数据表格 -->
      <el-table :data="tableData" v-loading="loading" border>
        <el-table-column prop="optionCode" label="选项代码" width="120" />
        <el-table-column prop="optionValue" label="助战值" width="80" align="right" />
        <el-table-column prop="costGold" label="消耗金币" width="100" align="right">
          <template slot-scope="scope">
            <span class="gold-text">🪙 {{ scope.row.costGold }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="poolRate" label="奖池比例" width="100" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.poolRate }}%</span>
          </template>
        </el-table-column>
        <el-table-column prop="sortOrder" label="排序" width="80" align="center" />
        <el-table-column prop="isEnabled" label="状态" width="80" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.isEnabled ? 'success' : 'info'" size="small">
              {{ scope.row.isEnabled ? '启用' : '禁用' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="创建时间" width="180" />
        <el-table-column label="操作" width="180" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="handleToggleStatus(scope.row)">
              {{ scope.row.isEnabled ? '禁用' : '启用' }}
            </el-button>
            <el-button type="text" size="small" class="danger-text" @click="handleDelete(scope.row)">删除</el-button>
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

    <!-- 编辑对话框 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="500px"
      @close="handleDialogClose"
    >
      <el-form :model="formData" :rules="formRules" ref="formRef" label-width="100px">
        <el-form-item label="选项代码" prop="optionCode">
          <el-select v-model="formData.optionCode" placeholder="请选择" :disabled="isEdit">
            <el-option label="+1" value="PLUS_1" />
            <el-option label="+3" value="PLUS_3" />
            <el-option label="+5" value="PLUS_5" />
            <el-option label="+10" value="PLUS_10" />
            <el-option label="+25" value="PLUS_25"/>
            <el-option label="+50" value="PLUS_50"/>
          </el-select>
        </el-form-item>
        <el-form-item label="助战值" prop="optionValue">
          <el-input-number v-model="formData.optionValue" :min="1" :max="100" />
        </el-form-item>
        <el-form-item label="消耗金币" prop="costGold">
          <el-input-number v-model="formData.costGold" :min="0" :max="100000" />
        </el-form-item>
        <el-form-item label="奖池比例" prop="poolRate">
          <el-input-number v-model="formData.poolRate" :min="0" :max="100" />
          <span style="margin-left: 8px; color: #909399; font-size: 12px">%</span>
        </el-form-item>
        <el-form-item label="排序" prop="sortOrder">
          <el-input-number v-model="formData.sortOrder" :min="0" :max="999" />
        </el-form-item>
        <el-form-item label="状态" prop="isEnabled">
          <el-switch v-model="formData.isEnabled" />
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
import { findAssistOptionList, createAssistOption, updateAssistOption, deleteAssistOption } from '@/api/battleAdminService'

export default {
  name: 'AssistOptions',
  data() {
    return {
      loading: false,
      submitting: false,
      tableData: [],
      total: 0,
      pageInfo: {
        currentPage: 1,
        pageSize: 20
      },
      queryForm: {
        keyword: '',
        isEnabled: null
      },
      dialogVisible: false,
      dialogTitle: '新增助战选项',
      isEdit: false,
      formData: {
        id: null,
        optionCode: '',
        optionValue: 1,
        costGold: 0,
        poolRate: 100,
        sortOrder: 0,
        isEnabled: true
      },
      formRules: {
        optionCode: [{ required: true, message: '请选择选项代码', trigger: 'change' }],
        optionValue: [{ required: true, message: '请输入助战值', trigger: 'blur' }],
        costGold: [{ required: true, message: '请输入消耗金币', trigger: 'blur' }],
        poolRate: [{ required: true, message: '请输入奖池比例', trigger: 'blur' }],
        sortOrder: [{ required: true, message: '请输入排序', trigger: 'blur' }]
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
          keyword: this.queryForm.keyword,
          isEnabledList: this.queryForm.isEnabled !== null ? [this.queryForm.isEnabled] : []
        }
        const res = await findAssistOptionList(req)
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
      this.dialogTitle = '新增助战选项'
      this.isEdit = false
      this.formData = {
        id: null,
        optionCode: '',
        optionValue: 1,
        costGold: 0,
        poolRate: 100,
        sortOrder: 0,
        isEnabled: true
      }
      this.dialogVisible = true
    },
    handleEdit(row) {
      this.dialogTitle = '编辑助战选项'
      this.isEdit = true
      this.formData = {
        id: row.id,
        optionCode: row.optionCode,
        optionValue: row.optionValue,
        costGold: row.costGold,
        poolRate: row.poolRate,
        sortOrder: row.sortOrder,
        isEnabled: row.isEnabled
      }
      this.dialogVisible = true
    },
    async handleToggleStatus(row) {
      const action = row.isEnabled ? '禁用' : '启用'
      try {
        await this.$confirm(`确定要${action}该选项吗?`, '提示', { type: 'warning' })
        const data = { ...row, isEnabled: !row.isEnabled }
        const res = await updateAssistOption(data)
        if (res.code === 'Success') {
          this.$message.success(`${action}成功`)
          this.loadData()
        } else {
          this.$message.error(res.msg || `${action}失败`)
        }
      } catch (error) {
        if (error !== 'cancel') {
          console.error(`${action}失败:`, error)
          this.$message.error(`${action}失败`)
        }
      }
    },
    async handleDelete(row) {
      try {
        await this.$confirm('确定要删除该选项吗?', '提示', { type: 'warning' })
        const res = await deleteAssistOption({ id: row.id })
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
        const api = this.isEdit ? updateAssistOption : createAssistOption
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
      this.pageInfo.currentPage = val
      this.loadData()
    },
    resetQuery() {
      this.queryForm = {
        keyword: '',
        isEnabled: null
      }
      this.pageInfo.currentPage = 1
      this.loadData()
    }
  }
}
</script>

<style lang="scss" scoped>
.assist-options {
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

  .gold-text {
    color: #e6a23c;
    font-weight: 500;
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
