<template>
  <div class="lucky-prize-configs">
    <el-card>
      <div slot="header" class="card-header">
        <span>奖品配置</span>
        <el-button type="primary" size="small" @click="handleAdd">新增配置</el-button>
      </div>

      <!-- 场次切换 -->
      <el-radio-group v-model="fieldType" size="small" @change="loadData">
        <el-radio-button label="JUNIOR">初级场</el-radio-button>
        <el-radio-button label="SENIOR">高级场</el-radio-button>
      </el-radio-group>

      <!-- 消耗金币配置 -->
      <el-card shadow="never" style="margin: 16px 0" v-loading="costLoading">
        <div slot="header"><span>消耗金币配置</span></div>
        <el-form :inline="true" size="small">
          <el-form-item label="初级场单抽">
            <el-input-number v-model="costConfigs.JUNIOR.costOnce" :min="0" :step="10" />
          </el-form-item>
          <el-form-item label="初级场十连抽">
            <el-input-number v-model="costConfigs.JUNIOR.costTen" :min="0" :step="10" />
          </el-form-item>
          <el-form-item label="高级场单抽">
            <el-input-number v-model="costConfigs.SENIOR.costOnce" :min="0" :step="10" />
          </el-form-item>
          <el-form-item label="高级场十连抽">
            <el-input-number v-model="costConfigs.SENIOR.costTen" :min="0" :step="10" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSaveCostConfigs">保存消耗配置</el-button>
          </el-form-item>
        </el-form>
      </el-card>

      <!-- 数据表格 -->
      <el-table :data="tableData" v-loading="loading" border stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="prizeType" label="奖品类型" width="120" />
        <el-table-column prop="prizeName" label="奖品名称" width="150" />
        <el-table-column prop="prizeValue" label="奖品价值" width="100" />
        <el-table-column prop="weight" label="权重(每1000次)" width="130" />
        <el-table-column prop="sortOrder" label="排序" width="80" />
        <el-table-column prop="isEnabled" label="状态" width="80">
          <template slot-scope="{ row }">
            <el-tag :type="row.isEnabled ? 'success' : 'info'" size="small">
              {{ row.isEnabled ? '启用' : '禁用' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="imageUrl" label="图片" width="100">
          <template slot-scope="{ row }">
            <el-image v-if="row.imageUrl" :src="row.imageUrl" style="width: 50px; height: 50px" fit="cover" />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" fixed="right">
          <template slot-scope="{ row }">
            <el-button type="text" size="small" @click="handleEdit(row)">编辑</el-button>
            <el-button type="text" size="small" @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 编辑对话框 -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="600px">
      <el-form :model="formData" :rules="rules" ref="form" label-width="120px">
        <el-form-item label="场次类型" prop="fieldType">
          <el-select v-model="formData.fieldType" :disabled="isEdit" style="width: 100%">
            <el-option label="初级场" value="JUNIOR" />
            <el-option label="高级场" value="SENIOR" />
          </el-select>
        </el-form-item>
        <el-form-item label="奖品类型" prop="prizeType">
          <el-select v-model="formData.prizeType" placeholder="请选择奖品类型" style="width: 100%">
            <el-option label="金币(开发中)" value="COIN" disabled />
            <el-option label="道具" value="PROP" />
          </el-select>
        </el-form-item>
        <el-form-item label="奖品名称" prop="prizeName">
          <el-input v-model="formData.prizeName" placeholder="如：金币x10" />
        </el-form-item>
        <el-form-item label="奖品价值" prop="prizeValue">
          <el-input-number v-model="formData.prizeValue" :min="0" />
        </el-form-item>
        <el-form-item label="权重" prop="weight">
          <el-input-number v-model="formData.weight" :min="0" :max="1000" />
          <span class="ml-2 text-gray-500">每1000次抽奖中该奖品出现的次数</span>
        </el-form-item>
        <el-form-item label="排序" prop="sortOrder">
          <el-input-number v-model="formData.sortOrder" :min="0" />
        </el-form-item>
        <el-form-item label="是否启用" prop="isEnabled">
          <el-switch v-model="formData.isEnabled" />
        </el-form-item>
        <el-form-item label="图片" prop="imageUrl">
          <ImageUpload
            v-model="formData.imageUrl"
            accept="image/*"
            :max-size="5"
            tip="支持 jpg、png 格式，文件大小不超过 5MB"
          />
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
import { findLuckyPrizeConfigList, createLuckyPrizeConfig, updateLuckyPrizeConfig, deleteLuckyPrizeConfig, getLuckyCostConfigs, updateLuckyCostConfig } from '@/api/luckyAdminService'
import ImageUpload from '@/components/ImageUpload/index.vue'

export default {
  name: 'LuckyPrizeConfigs',
  components: {
    ImageUpload
  },
  data() {
    return {
      fieldType: 'JUNIOR',
      tableData: [],
      loading: false,
      dialogVisible: false,
      dialogTitle: '新增配置',
      isEdit: false,
      submitting: false,
      formData: {
        id: null,
        fieldType: 'JUNIOR',
        prizeType: '',
        prizeName: '',
        prizeValue: 0,
        weight: 0,
        sortOrder: 0,
        isEnabled: true,
        imageUrl: ''
      },
      rules: {
        fieldType: [{ required: true, message: '请选择场次类型', trigger: 'change' }],
        prizeType: [{ required: true, message: '请输入奖品类型', trigger: 'blur' }],
        prizeName: [{ required: true, message: '请输入奖品名称', trigger: 'blur' }],
        prizeValue: [{ required: true, message: '请输入奖品价值', trigger: 'blur' }],
        weight: [{ required: true, message: '请输入权重', trigger: 'blur' }]
      },
      // 消耗配置
      costConfigs: {
        JUNIOR: { costOnce: 10, costTen: 100 },
        SENIOR: { costOnce: 100, costTen: 1000 }
      },
      costLoading: false
    }
  },
  mounted() {
    this.loadData()
    this.loadCostConfigs()
  },
  methods: {
    async loadData() {
      this.loading = true
      try {
        const response = await findLuckyPrizeConfigList({ query: { fieldType: this.fieldType } })
        if (response.code === "Success") {
          this.tableData = response.list || []
        } else {
          this.$message.error(response.msg || '加载数据失败')
        }
      } catch (error) {
        this.$message.error('加载数据失败')
      } finally {
        this.loading = false
      }
    },
    handleAdd() {
      this.dialogTitle = '新增配置'
      this.isEdit = false
      this.resetForm()
      this.formData.fieldType = this.fieldType
      this.dialogVisible = true
    },
    handleEdit(row) {
      this.dialogTitle = '编辑配置'
      this.isEdit = true
      this.formData = { ...row }
      this.dialogVisible = true
    },
    async handleDelete(row) {
      await this.$confirm('确定要删除该配置吗？', '提示', { type: 'warning' })
      try {
        const response = await deleteLuckyPrizeConfig({ id: row.id })
        if (response.code === "Success") {
          this.$message.success('删除成功')
          this.loadData()
        } else {
          this.$message.error(response.msg || '删除失败')
        }
      } catch (error) {
        if (error !== 'cancel') {
          this.$message.error('删除失败')
        }
      }
    },
    async handleSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (!valid) return
        this.submitting = true
        try {
          const apiFunc = this.isEdit ? updateLuckyPrizeConfig : createLuckyPrizeConfig
          const response = await apiFunc(this.formData)
          if (response.code === "Success") {
            this.$message.success(this.isEdit ? '更新成功' : '创建成功')
            this.dialogVisible = false
            this.loadData()
          } else {
            this.$message.error(response.msg || '操作失败')
          }
        } catch (error) {
          this.$message.error('操作失败')
        } finally {
          this.submitting = false
        }
      })
    },
    resetForm() {
      this.formData = {
        id: null,
        fieldType: this.fieldType,
        prizeType: '',
        prizeName: '',
        prizeValue: 0,
        weight: 0,
        sortOrder: 0,
        isEnabled: true,
        imageUrl: ''
      }
      this.$refs.form?.clearValidate()
    },
    async loadCostConfigs() {
      this.costLoading = true
      try {
        const response = await getLuckyCostConfigs()
        if (response.code === "Success" && response.list) {
          for (const cfg of response.list) {
            if (this.costConfigs[cfg.fieldType]) {
              this.costConfigs[cfg.fieldType].costOnce = cfg.costOnce
              this.costConfigs[cfg.fieldType].costTen = cfg.costTen
            }
          }
        }
      } catch (error) {
        console.error('加载消耗配置失败:', error)
      } finally {
        this.costLoading = false
      }
    },
    async handleSaveCostConfigs() {
      try {
        for (const [fieldType, config] of Object.entries(this.costConfigs)) {
          await updateLuckyCostConfig({
            fieldType: fieldType,
            costOnce: config.costOnce,
            costTen: config.costTen
          })
        }
        this.$message.success('保存消耗配置成功')
      } catch (error) {
        this.$message.error('保存消耗配置失败')
      }
    }
  }
}
</script>

<style scoped>
.lucky-prize-configs {
  padding: 20px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
