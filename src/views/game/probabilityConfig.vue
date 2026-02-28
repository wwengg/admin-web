<template>
  <div class="probability-config">
    <el-card>
      <div slot="header" class="card-header">
        <div class="header-left">
          <span>概率配置管理</span>
          <span v-if="currentStageTotal !== null" class="total-prob" :class="{ 'warning': isTotalOver100 }">
            当前阶段总概率: <strong>{{ currentStageTotal.toFixed(2) }}%</strong>
          </span>
        </div>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd">新增</el-button>
      </div>

      <!-- 搜索表单 -->
      <el-form :inline="true" :model="queryForm" class="search-form">
        <el-form-item label="奖池阶段">
          <el-select v-model="queryForm.stageId" placeholder="全部" clearable>
            <el-option v-for="stage in stages" :key="stage.id" :label="`${stage.stageName} (${stage.poolMin}-${stage.poolMax})`" :value="stage.id" />
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
        <el-table-column label="奖池阶段" width="200">
          <template slot-scope="scope">
            {{ getStageName(scope.row.stageId) }}
          </template>
        </el-table-column>
        <el-table-column label="武将组合" width="280">
          <template slot-scope="scope">
            <span v-if="!scope.row.general2Id || scope.row.general2Id === '0'">
              {{ getGeneralName(scope.row.general1Id) }}
            </span>
            <span v-else>
              {{ getGeneralName(scope.row.general1Id) }} + {{ getGeneralName(scope.row.general2Id) }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="probability" label="概率(%)" width="100" align="right">
          <template slot-scope="scope">
            <span class="prob-text">{{ scope.row.probability.toFixed(3) }}%</span>
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
        :current-page="pageInfo.page"
        :page-sizes="[100]"
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
        <el-form-item label="奖池阶段" prop="stageId">
          <el-select v-model="formData.stageId" placeholder="请选择">
            <el-option v-for="stage in stages" :key="stage.id" :label="`${stage.stageName} (${formatNumber(stage.poolMin)}-${formatNumber(stage.poolMax)})`" :value="stage.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="武将1" prop="general1Id">
          <el-select v-model="formData.general1Id" placeholder="请选择">
            <el-option v-for="g in generals" :key="g.id" :label="`${g.baseMultiplier}倍 - ${g.name}`" :value="g.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="武将2" prop="general2Id">
          <el-select v-model="formData.general2Id" placeholder="请选择（可选）" clearable>
            <el-option v-for="g in generals" :key="g.id" :label="`${g.baseMultiplier}倍 - ${g.name}`" :value="g.id" />
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
import { findPrizePoolStageList } from '@/api/battleAdminService'
import { findGeneralList } from '@/api/battleAdminService'

export default {
  name: 'ProbabilityConfig',
  data() {
    return {
      loading: false,
      submitting: false,
      tableData: [],
      total: 0,
      pageInfo: {
        page: 1,
        pageSize: 100
      },
      queryForm: {
        stageId: null,
        isEnabled: null
      },
      dialogVisible: false,
      dialogTitle: '新增概率配置',
      isEdit: false,
      formData: {
        id: null,
        stageId: null,
        general1Id: 0,
        general2Id: 0,
        probability: 0,
        sortOrder: 0,
        isEnabled: true
      },
      formRules: {
        stageId: [{ required: true, message: '请选择奖池阶段', trigger: 'change' }],
        general1Id: [{ required: true, message: '请选择武将1', trigger: 'change' }],
        probability: [{ required: true, message: '请输入概率', trigger: 'blur' }],
        sortOrder: [{ required: true, message: '请输入排序', trigger: 'blur' }]
      },
      stages: [],
      generals: []
    }
  },
  computed: {
    currentStageTotal() {
      if (!this.tableData || this.tableData.length === 0) {
        return null
      }
      // Only show total when a specific stage is selected
      if (!this.queryForm.stageId) {
        return null
      }
      // Calculate total for enabled configs only
      const total = this.tableData
        .filter(row => row.isEnabled)
        .reduce((sum, row) => sum + (row.probability || 0), 0)
      return total
    },
    isTotalOver100() {
      return this.currentStageTotal !== null && this.currentStageTotal > 100
    }
  },
  mounted() {
    this.loadStages()
    this.loadGenerals()
    this.loadData()
  },
  methods: {
    async loadStages() {
      try {
        const req = {
          pageInfo: { page: 1, pageSize: 100 },
          query: {}
        }
        const res = await findPrizePoolStageList(req)
        if (res.code === 'Success') {
          this.stages = res.list || []
        }
      } catch (error) {
        console.error('加载奖池阶段失败:', error)
      }
    },
    async loadGenerals() {
      try {
        const req = {
          pageInfo: { page: 1, pageSize: 100 },
          query: {}
        }
        const res = await findGeneralList(req)
        if (res.code === 'Success') {
          this.generals = res.list || []
        }
      } catch (error) {
        console.error('加载武将列表失败:', error)
      }
    },
    async loadData() {
      try {
        this.loading = true
        const req = {
          pageInfo: this.pageInfo,
          query: {},
          stageIdList: this.queryForm.stageId ? [this.queryForm.stageId] : [],
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
        stageId: null,
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
        stageId: row.stageId,
        general1Id: row.general1Id || 0,
        general2Id: row.general2Id || 0,
        probability: row.probability,
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
      this.pageInfo.page = val
      this.loadData()
    },
    resetQuery() {
      this.queryForm = {
        stageId: null,
        isEnabled: null
      }
      this.pageInfo.page = 1
      this.loadData()
    },
    getStageName(stageId) {
      const stage = this.stages.find(s => s.id === stageId)
      if (stage) {
        return `${stage.stageName} (${this.formatNumber(stage.poolMin)}-${this.formatNumber(stage.poolMax)})`
      }
      return `阶段${stageId}`
    },
    getGeneralName(index) {
      const general = this.generals.find(g => g.id == index)
      return general ? `${general.baseMultiplier}倍 - ${general.name}` : `位置${index}`
    },
    formatNumber(value) {
      if (!value && value !== 0) return '-'
      return Number(value).toLocaleString()
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

    .header-left {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .total-prob {
      font-size: 14px;
      color: #606266;
      font-weight: normal;

      strong {
        color: #409eff;
        font-size: 16px;
      }

      &.warning strong {
        color: #f56c6c;
      }
    }
  }

  .search-form {
    margin-bottom: 16px;
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
