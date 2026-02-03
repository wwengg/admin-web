<template>
  <div class="generals">
    <el-card>
      <div slot="header" class="card-header">
        <span>武将管理</span>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAdd">新增</el-button>
      </div>

      <!-- 搜索表单 -->
      <el-form :inline="true" :model="queryForm" class="search-form">
        <el-form-item label="关键词">
          <el-input v-model="queryForm.keyword" placeholder="武将名称" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="loadData">查询</el-button>
          <el-button icon="el-icon-refresh" @click="resetQuery">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 数据表格 -->
      <el-table :data="tableData" v-loading="loading" border>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="武将名称" width="150" />
        <el-table-column label="头像" width="100" align="center">
          <template slot-scope="scope">
            <el-image v-if="scope.row.avatar" :src="scope.row.avatar" fit="cover" style="width: 60px; height: 60px; border-radius: 4px" :preview-src-list="[scope.row.avatar]" />
            <span v-else>-</span>
          </template>
        </el-table-column>
        <el-table-column prop="baseMultiplier" label="基础倍率" width="120" align="center" />
        <el-table-column prop="index" label="位置索引" width="100" align="center" />
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
      <el-form :model="formData" :rules="formRules" ref="formRef" label-width="100px">
        <el-form-item label="武将名称" prop="name">
          <el-input v-model="formData.name" placeholder="请输入武将名称" maxlength="50" />
        </el-form-item>
        <el-form-item label="头像URL" prop="avatar">
          <el-input v-model="formData.avatar" placeholder="请输入头像URL" />
          <div v-if="formData.avatar" style="margin-top: 8px">
            <el-image :src="formData.avatar" fit="cover" style="width: 80px; height: 80px; border-radius: 4px" :preview-src-list="[formData.avatar]" />
          </div>
        </el-form-item>
        <el-form-item label="基础倍率" prop="baseMultiplier">
          <el-input-number v-model="formData.baseMultiplier" :min="1" :max="999" />
        </el-form-item>
        <el-form-item label="位置索引" prop="index">
          <el-input-number v-model="formData.index" :min="0" :max="15" />
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
import { findGeneralList, createGeneral, updateGeneral, deleteGeneral } from '@/api/battleAdminService'

export default {
  name: 'Generals',
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
      dialogTitle: '新增武将',
      isEdit: false,
      formData: {
        id: null,
        name: '',
        avatar: '',
        baseMultiplier: 1,
        index: 0
      },
      formRules: {
        name: [{ required: true, message: '请输入武将名称', trigger: 'blur' }],
        baseMultiplier: [{ required: true, message: '请输入基础倍率', trigger: 'blur' }]
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
        const res = await findGeneralList(req)
        console.log(res);
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
      this.dialogTitle = '新增武将'
      this.isEdit = false
      this.formData = {
        id: null,
        name: '',
        avatar: '',
        baseMultiplier: 1,
        index: 0
      }
      this.dialogVisible = true
    },
    handleEdit(row) {
      this.dialogTitle = '编辑武将'
      this.isEdit = true
      this.formData = {
        id: row.id,
        name: row.name,
        avatar: row.avatar || '',
        baseMultiplier: row.baseMultiplier || 1,
        index: row.index || 0
      }
      this.dialogVisible = true
    },
    async handleDelete(row) {
      try {
        await this.$confirm('确定要删除该武将吗?', '提示', { type: 'warning' })
        const res = await deleteGeneral({ id: row.id })
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
        const api = this.isEdit ? updateGeneral : createGeneral
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
    }
  }
}
</script>

<style lang="scss" scoped>
.generals {
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
