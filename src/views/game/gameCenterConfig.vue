<template>
  <div class="game-center-config">
    <!-- 配置卡片 -->
    <el-card style="margin-bottom: 16px">
      <div slot="header" class="card-header">
        <span>游戏中心可见性配置</span>
      </div>

      <el-form :model="configForm" :rules="configRules" ref="configFormRef" label-width="120px" style="max-width: 500px">
        <el-form-item label="启用等级限制" prop="isOpen">
          <el-switch v-model="configForm.isOpen" active-text="开启" inactive-text="关闭" />
          <span style="margin-left: 12px; color: #909399; font-size: 12px">
            开启后，只有等级达标的用户才能看到游戏中心
          </span>
        </el-form-item>
        <el-form-item label="最低用户等级" prop="minLevel">
          <el-input-number v-model="configForm.minLevel" :min="0" :max="999" />
          <span style="margin-left: 8px; color: #909399; font-size: 12px">
            用户等级 ≥ 此值才显示游戏中心
          </span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveConfig" :loading="configSaving">保存配置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 名单管理卡片 -->
    <el-card>
      <div slot="header" class="card-header">
        <span>用户名单管理</span>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="handleAddUser">新增</el-button>
      </div>

      <!-- 筛选 -->
      <el-form :inline="true" class="search-form">
        <el-form-item label="名单类型">
          <el-select v-model="listTypeFilter" placeholder="全部" clearable>
            <el-option label="白名单" :value="0" />
            <el-option label="黑名单" :value="1" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="loadUsers">查询</el-button>
          <el-button icon="el-icon-refresh" @click="resetUserQuery">重置</el-button>
        </el-form-item>
      </el-form>

      <!-- 表格 -->
      <el-table :data="userTableData" v-loading="userLoading" border>
        <el-table-column prop="id" label="ID" width="80" align="center" />
        <el-table-column prop="userId" label="用户ID" width="120" align="center" />
        <el-table-column prop="listType" label="名单类型" width="120" align="center">
          <template slot-scope="scope">
            <el-tag :type="scope.row.listType === 0 ? 'success' : 'danger'" size="small">
              {{ scope.row.listType === 0 ? '白名单' : '黑名单' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="reason" label="原因备注" min-width="200" />
        <el-table-column prop="createdAt" label="创建时间" width="180" />
        <el-table-column label="操作" width="100" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" size="small" class="danger-text" @click="handleDeleteUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        @size-change="handleUserSizeChange"
        @current-change="handleUserPageChange"
        :current-page="userPageInfo.currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="userPageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="userTotal"
      />
    </el-card>

    <!-- 添加用户对话框 -->
    <el-dialog
      title="添加用户到名单"
      :visible.sync="userDialogVisible"
      width="500px"
      @close="handleUserDialogClose"
    >
      <el-form :model="userFormData" :rules="userFormRules" ref="userFormRef" label-width="100px">
        <el-form-item label="用户ID" prop="userId">
          <el-input-number v-model="userFormData.userId" :min="1" :max="9999999999" style="width: 100%" />
        </el-form-item>
        <el-form-item label="名单类型" prop="listType">
          <el-radio-group v-model="userFormData.listType">
            <el-radio :label="0">
              <el-tag type="success" size="small">白名单</el-tag>
              <span style="margin-left: 4px; color: #909399; font-size: 12px">等级不够也能看到游戏中心</span>
            </el-radio>
            <el-radio :label="1">
              <el-tag type="danger" size="small">黑名单</el-tag>
              <span style="margin-left: 4px; color: #909399; font-size: 12px">等级够也不显示游戏中心</span>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="原因备注" prop="reason">
          <el-input v-model="userFormData.reason" type="textarea" :rows="2" placeholder="请输入加入原因" />
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="userDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitAddUser" :loading="userSubmitting">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  saveGameCenterConfig,
  getGameCenterConfig,
  createGameCenterUser,
  deleteGameCenterUser,
  findGameCenterUserList
} from '@/api/battleAdminService'

export default {
  name: 'GameCenterConfig',
  data() {
    return {
      // 配置
      configSaving: false,
      configForm: {
        id: 0,
        minLevel: 10,
        isOpen: false
      },
      configRules: {
        minLevel: [{ required: true, message: '请输入最低等级', trigger: 'blur' }]
      },

      // 名单
      userLoading: false,
      userSubmitting: false,
      userTableData: [],
      userTotal: 0,
      userPageInfo: {
        currentPage: 1,
        pageSize: 20
      },
      listTypeFilter: null,
      userDialogVisible: false,
      userFormData: {
        userId: null,
        listType: 0,
        reason: ''
      },
      userFormRules: {
        userId: [{ required: true, message: '请输入用户ID', trigger: 'blur' }],
        listType: [{ required: true, message: '请选择名单类型', trigger: 'change' }]
      }
    }
  },
  mounted() {
    this.loadConfig()
    this.loadUsers()
  },
  methods: {
    async loadConfig() {
      try {
        const res = await getGameCenterConfig({})
        if (res.code === 'Success' && res.data) {
          this.configForm = {
            id: res.data.id || 0,
            minLevel: res.data.minLevel || 0,
            isOpen: res.data.isOpen || false
          }
        }
      } catch (error) {
        console.error('加载配置失败:', error)
      }
    },
    async saveConfig() {
      try {
        await this.$refs.configFormRef.validate()
        this.configSaving = true
        const res = await saveGameCenterConfig(this.configForm)
        if (res.code === 'Success') {
          this.$message.success('配置已保存')
          this.loadConfig()
        } else {
          this.$message.error(res.msg || '保存失败')
        }
      } catch (error) {
        console.error('保存配置失败:', error)
        this.$message.error('保存失败')
      } finally {
        this.configSaving = false
      }
    },

    // 名单管理
    async loadUsers() {
      try {
        this.userLoading = true
        const req = {
          pageInfo: this.userPageInfo
        }
        if (this.listTypeFilter !== null && this.listTypeFilter !== '') {
          req.listTypeList = [this.listTypeFilter]
        }
        const res = await findGameCenterUserList(req)
        if (res.code === 'Success') {
          this.userTableData = res.list || []
          this.userTotal = Number(res.total) || 0
        } else {
          this.$message.error(res.msg || '加载数据失败')
        }
      } catch (error) {
        console.error('加载名单失败:', error)
        this.$message.error('加载数据失败')
      } finally {
        this.userLoading = false
      }
    },
    resetUserQuery() {
      this.listTypeFilter = null
      this.userPageInfo.currentPage = 1
      this.loadUsers()
    },
    handleAddUser() {
      this.userFormData = {
        userId: null,
        listType: 0,
        reason: ''
      }
      this.userDialogVisible = true
    },
    async handleDeleteUser(row) {
      try {
        await this.$confirm(`确定要移除用户 ${row.userId} 吗?`, '提示', { type: 'warning' })
        const res = await deleteGameCenterUser({ id: row.id })
        if (res.code === 'Success') {
          this.$message.success('已移除')
          this.loadUsers()
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
    async submitAddUser() {
      try {
        await this.$refs.userFormRef.validate()
        this.userSubmitting = true
        const res = await createGameCenterUser(this.userFormData)
        if (res.code === 'Success') {
          this.$message.success('添加成功')
          this.userDialogVisible = false
          this.loadUsers()
        } else {
          this.$message.error(res.msg || '添加失败')
        }
      } catch (error) {
        console.error('添加失败:', error)
        this.$message.error('操作失败')
      } finally {
        this.userSubmitting = false
      }
    },
    handleUserDialogClose() {
      this.$refs.userFormRef?.resetFields()
    },
    handleUserSizeChange(val) {
      this.userPageInfo.pageSize = val
      this.loadUsers()
    },
    handleUserPageChange(val) {
      this.userPageInfo.currentPage = val
      this.loadUsers()
    }
  }
}
</script>

<style lang="scss" scoped>
.game-center-config {
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
