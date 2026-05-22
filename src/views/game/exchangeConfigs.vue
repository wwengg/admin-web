<template>
  <div class="exchange-configs">
    <el-card>
      <div slot="header" class="card-header">
        <span>兑换配置管理</span>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd">新增</el-button>
      </div>

      <!-- 数据表格 -->
      <el-table :data="tableData" v-loading="loading" border>
        <el-table-column prop="id" label="ID" width="80" align="center" />
        <el-table-column prop="diamondAmount" label="消耗钻石" width="140" align="right">
          <template slot-scope="scope">
            <span class="diamond-text">{{ scope.row.diamondAmount }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="coinAmount" label="获得游戏币" width="140" align="right">
          <template slot-scope="scope">
            <span class="gold-text">{{ scope.row.coinAmount }}</span>
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
        <el-form-item label="消耗钻石" prop="diamondAmount">
          <el-input-number v-model="formData.diamondAmount" :min="1" :max="1000000" />
        </el-form-item>
        <el-form-item label="获得游戏币" prop="coinAmount">
          <el-input-number v-model="formData.coinAmount" :min="1" :max="1000000" />
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
import { findExchangeConfigList, createExchangeConfig, updateExchangeConfig, deleteExchangeConfig } from '@/api/battleAdminService'

export default {
  name: 'ExchangeConfigs',
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
      dialogVisible: false,
      dialogTitle: '新增兑换配置',
      isEdit: false,
      formData: {
        id: null,
        diamondAmount: 100,
        coinAmount: 1000,
        sortOrder: 0,
        isEnabled: true
      },
      formRules: {
        diamondAmount: [{ required: true, message: '请输入消耗钻石数', trigger: 'blur' }],
        coinAmount: [{ required: true, message: '请输入获得游戏币数', trigger: 'blur' }],
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
          pageInfo: this.pageInfo
        }
        const res = await findExchangeConfigList(req)
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
      this.dialogTitle = '新增兑换配置'
      this.isEdit = false
      this.formData = {
        id: null,
        diamondAmount: 100,
        coinAmount: 1000,
        sortOrder: 0,
        isEnabled: true
      }
      this.dialogVisible = true
    },
    handleEdit(row) {
      this.dialogTitle = '编辑兑换配置'
      this.isEdit = true
      this.formData = {
        id: row.id,
        diamondAmount: row.diamondAmount,
        coinAmount: row.coinAmount,
        sortOrder: row.sortOrder,
        isEnabled: row.isEnabled
      }
      this.dialogVisible = true
    },
    async handleToggleStatus(row) {
      const action = row.isEnabled ? '禁用' : '启用'
      try {
        await this.$confirm(`确定要${action}该配置吗?`, '提示', { type: 'warning' })
        const data = { ...row, isEnabled: !row.isEnabled }
        const res = await updateExchangeConfig(data)
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
        await this.$confirm('确定要删除该配置吗?', '提示', { type: 'warning' })
        const res = await deleteExchangeConfig({ id: row.id })
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
        const api = this.isEdit ? updateExchangeConfig : createExchangeConfig
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
    }
  }
}
</script>

<style lang="scss" scoped>
.exchange-configs {
  padding: 16px;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }

  .gold-text {
    color: #e6a23c;
    font-weight: 500;
  }

  .diamond-text {
    color: #409eff;
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
