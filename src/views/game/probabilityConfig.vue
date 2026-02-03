<template>
  <div class="probability-config">
    <el-card>
      <div slot="header" class="card-header">
        <span>概率配置管理</span>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd">新增</el-button>
      </div>

      <!-- 搜索表单 -->
      <el-form :inline="true" :model="queryForm" class="search-form">
        <el-form-item label="配置类型">
          <el-select v-model="queryForm.configType" placeholder="全部" clearable>
            <el-option label="单开" value="SINGLE" />
            <el-option label="双开" value="DUAL" />
          </el-select>
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
        <el-table-column prop="poolMin" label="奖池最小值" width="120" align="right">
          <template slot-scope="scope">
            <span class="number-text">{{ scope.row.poolMin.toLocaleString() }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="poolMax" label="奖池最大值" width="120" align="right">
          <template slot-scope="scope">
            <span class="number-text">{{ scope.row.poolMax.toLocaleString() }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="configType" label="配置类型" width="80" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.configType === 'DUAL' ? 'warning' : 'success'" size="small">
              {{ scope.row.configType === 'DUAL' ? '双开' : '单开' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="武将组合" width="180">
          <template slot-scope="scope">
            <span v-if="scope.row.configType === 'SINGLE'">{{ getGeneralName(scope.row.general1Id) }}</span>
            <span v-else>{{ getGeneralName(scope.row.general1Id) }} + {{ getGeneralName(scope.row.general2Id) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="probability" label="概率(%)" width="100" align="right">
          <template slot-scope="scope">
            <span class="prob-text">{{ scope.row.probability.toFixed(2) }}%</span>
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
      width="600px"
      @close="handleDialogClose"
    >
      <el-form :model="formData" :rules="formRules" ref="formRef" label-width="100px">
        <el-form-item label="奖池最小值" prop="poolMin">
          <el-input-number v-model="formData.poolMin" :min="0" :max="999999999" />
        </el-form-item>
        <el-form-item label="奖池最大值" prop="poolMax">
          <el-input-number v-model="formData.poolMax" :min="0" :max="999999999" />
        </el-form-item>
        <el-form-item label="配置类型" prop="configType">
          <el-select v-model="formData.configType" placeholder="请选择" @change="handleConfigTypeChange">
            <el-option label="单开" value="SINGLE" />
            <el-option label="双开" value="DUAL" />
          </el-select>
        </el-form-item>
        <el-form-item label="武将1" prop="general1Id">
          <el-select v-model="formData.general1Id" placeholder="请选择">
            <el-option v-for="g in generals" :key="g.id" :label="g.name" :value="g.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="武将2" prop="general2Id" v-if="formData.configType === 'DUAL'">
          <el-select v-model="formData.general2Id" placeholder="请选择">
            <el-option v-for="g in generals" :key="g.id" :label="g.name" :value="g.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="概率(%)" prop="probability">
          <el-input-number v-model="formData.probability" :min="0" :max="100" :precision="4" :step="0.01" />
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
import { findProbabilityConfigList, createProbabilityConfig, updateProbabilityConfig, deleteProbabilityConfig } from '@/api/battleAdminService'

export default {
  name: 'ProbabilityConfig',
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
        configType: '',
        isEnabled: null
      },
      dialogVisible: false,
      dialogTitle: '新增概率配置',
      isEdit: false,
      formData: {
        id: null,
        poolMin: 0,
        poolMax: 0,
        configType: 'SINGLE',
        general1Id: 0,
        general2Id: 0,
        probability: 0,
        sortOrder: 0,
        isEnabled: true
      },
      formRules: {
        poolMin: [{ required: true, message: '请输入奖池最小值', trigger: 'blur' }],
        poolMax: [{ required: true, message: '请输入奖池最大值', trigger: 'blur' }],
        configType: [{ required: true, message: '请选择配置类型', trigger: 'change' }],
        general1Id: [{ required: true, message: '请选择武将1', trigger: 'change' }],
        probability: [{ required: true, message: '请输入概率', trigger: 'blur' }],
        sortOrder: [{ required: true, message: '请输入排序', trigger: 'blur' }]
      },
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
          configTypeList: this.queryForm.configType ? [this.queryForm.configType] : [],
          isEnabledList: this.queryForm.isEnabled !== null ? [this.queryForm.isEnabled] : []
        }
        const res = await findProbabilityConfigList(req)
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
      this.dialogTitle = '新增概率配置'
      this.isEdit = false
      this.formData = {
        id: null,
        poolMin: 0,
        poolMax: 0,
        configType: 'SINGLE',
        general1Id: 0,
        general2Id: 0,
        probability: 0,
        sortOrder: 0,
        isEnabled: true
      }
      this.dialogVisible = true
    },
    handleEdit(row) {
      this.dialogTitle = '编辑概率配置'
      this.isEdit = true
      this.formData = {
        id: row.id,
        poolMin: row.poolMin,
        poolMax: row.poolMax,
        configType: row.configType,
        general1Id: row.general1Id,
        general2Id: row.general2Id,
        probability: row.probability,
        sortOrder: row.sortOrder,
        isEnabled: row.isEnabled
      }
      this.dialogVisible = true
    },
    handleConfigTypeChange(val) {
      if (val === 'SINGLE') {
        this.formData.general2Id = 0
      }
    },
    async handleToggleStatus(row) {
      const action = row.isEnabled ? '禁用' : '启用'
      try {
        await this.$confirm(`确定要${action}该配置吗?`, '提示', { type: 'warning' })
        const data = { ...row, isEnabled: !row.isEnabled }
        const res = await updateProbabilityConfig(data)
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
        const res = await deleteProbabilityConfig({ id: row.id })
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
        const api = this.isEdit ? updateProbabilityConfig : createProbabilityConfig
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
        configType: '',
        isEnabled: null
      }
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
.probability-config {
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

  .prob-text {
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
