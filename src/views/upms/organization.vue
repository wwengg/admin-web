<template>
  <div class="organization-container">
    <!-- 页面标题和操作栏 -->
    <div class="page-header">
      <div class="page-title">
        <h1>组织管理</h1>
        <p>管理公司组织架构、部门与人员分配</p>
      </div>
      <el-button type="primary" icon="el-icon-plus" @click="handleCreate">新增组织</el-button>
    </div>

    <el-row :gutter="20">
      <!-- 左侧组织树 -->
      <el-col :span="8">
        <el-card class="tree-card">
          <div slot="header" class="card-header">
            <span>组织架构</span>
            <el-button type="text" icon="el-icon-refresh" @click="loadOrgTree">刷新</el-button>
          </div>
          <el-input
            v-model="filterText"
            placeholder="输入关键字过滤"
            prefix-icon="el-icon-search"
            clearable
            style="margin-bottom: 15px;"
          />
          <el-tree
            ref="orgTree"
            v-loading="treeLoading"
            :data="orgTree"
            :props="treeProps"
            :filter-node-method="filterNode"
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            draggable
            @node-click="handleNodeClick"
            @node-drop="handleNodeDrop"
          >
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span class="node-label">
                <i :class="getOrgTypeIcon(data.org.orgType)" />
                {{ data.org.orgName }}
              </span>
              <span class="node-actions">
                <el-button
                  type="text"
                  size="mini"
                  icon="el-icon-plus"
                  @click.stop="handleAddChild(data.org)"
                >
                  添加子节点
                </el-button>
                <el-button
                  type="text"
                  size="mini"
                  icon="el-icon-edit"
                  @click.stop="handleEdit(data.org)"
                >
                  编辑
                </el-button>
                <el-button
                  type="text"
                  size="mini"
                  icon="el-icon-delete"
                  style="color: #F56C6C;"
                  @click.stop="handleDelete(data.org)"
                >
                  删除
                </el-button>
              </span>
            </span>
          </el-tree>
        </el-card>
      </el-col>

      <!-- 右侧详情/用户列表 -->
      <el-col :span="16">
        <el-card v-if="!currentOrg" class="empty-card">
          <div class="empty-state">
            <i class="el-icon-s-grid" style="font-size: 48px; color: #C0C4CC;"></i>
            <p>请从左侧选择一个组织查看详情</p>
          </div>
        </el-card>

        <el-card v-else class="detail-card">
          <div slot="header" class="card-header">
            <span>{{ currentOrg.orgName }} - 详情</span>
            <div class="header-actions">
              <el-tag :type="getOrgTypeTag(currentOrg.orgType)" size="small">
                {{ getOrgTypeName(currentOrg.orgType) }}
              </el-tag>
              <el-tag v-if="currentOrg.status === 1" type="success" size="small">启用</el-tag>
              <el-tag v-else type="info" size="small">禁用</el-tag>
            </div>
          </div>

          <!-- 组织基本信息 -->
          <div class="org-info">
            <el-descriptions :column="2" border size="small">
              <el-descriptions-item label="组织编码">{{ currentOrg.orgCode }}</el-descriptions-item>
              <el-descriptions-item label="组织名称">{{ currentOrg.orgName }}</el-descriptions-item>
              <el-descriptions-item label="组织类型">{{ getOrgTypeName(currentOrg.orgType) }}</el-descriptions-item>
              <el-descriptions-item label="排序">{{ currentOrg.sort }}</el-descriptions-item>
              <el-descriptions-item label="负责人" :span="2">
                {{ currentOrg.leaderName || '未设置' }}
              </el-descriptions-item>
              <el-descriptions-item label="备注" :span="2">
                {{ currentOrg.remark || '-' }}
              </el-descriptions-item>
            </el-descriptions>
          </div>

          <!-- 操作按钮 -->
          <div class="detail-actions">
            <el-button size="small" icon="el-icon-edit" @click="handleEdit(currentOrg)">编辑</el-button>
            <el-button size="small" type="danger" icon="el-icon-delete" @click="handleDelete(currentOrg)">删除</el-button>
          </div>

          <!-- 成员列表 -->
          <div class="members-section">
            <div class="section-header">
              <span>组织成员 ({{ orgUsers.length }}人)</span>
              <el-button type="text" size="small" icon="el-icon-plus" @click="handleAssignUser">分配成员</el-button>
            </div>
            <el-table :data="orgUsers" v-loading="usersLoading" size="small" max-height="300">
              <el-table-column prop="userName" label="用户名" />
              <el-table-column prop="userNickName" label="昵称" show-overflow-tooltip />
              <el-table-column prop="position" label="职位" width="120">
                <template slot-scope="scope">
                  {{ scope.row.position || '-' }}
                </template>
              </el-table-column>
              <el-table-column label="是否负责人" width="100">
                <template slot-scope="scope">
                  <el-tag v-if="scope.row.isLeader" type="success" size="mini">负责人</el-tag>
                  <span v-else>-</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                  <el-button type="text" size="mini" @click="handleRemoveUser(scope.row)">移除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 新增/编辑组织对话框 -->
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="600px"
      @close="resetForm"
    >
      <el-form
        ref="orgForm"
        :model="orgForm"
        :rules="orgRules"
        label-width="100px"
      >
        <el-form-item label="上级组织" prop="parentId">
          <el-cascader
            v-model="orgForm.parentId"
            :options="orgOptions"
            :props="{ checkStrictly: true, value: 'id', label: 'orgName' }"
            placeholder="选择上级组织（不选则为根节点）"
            clearable
            style="width: 100%;"
          />
        </el-form-item>
        <el-form-item label="组织名称" prop="orgName">
          <el-input v-model="orgForm.orgName" placeholder="请输入组织名称" maxlength="50" />
        </el-form-item>
        <el-form-item label="组织编码" prop="orgCode">
          <el-input v-model="orgForm.orgCode" placeholder="请输入组织编码" maxlength="20" />
        </el-form-item>
        <el-form-item label="组织类型" prop="orgType">
          <el-radio-group v-model="orgForm.orgType">
            <el-radio :label="1">公司</el-radio>
            <el-radio :label="2">部门</el-radio>
            <el-radio :label="3">小组</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="负责人" prop="leaderId">
          <el-select
            v-model="orgForm.leaderId"
            filterable
            placeholder="选择负责人"
            clearable
            style="width: 100%;"
          >
            <el-option
              v-for="user in userOptions"
              :key="user.id"
              :label="user.nickName || user.username"
              :value="user.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="orgForm.sort" :min="0" controls-position="right" style="width: 100%;" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="orgForm.status">
            <el-radio :label="1">启用</el-radio>
            <el-radio :label="0">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            v-model="orgForm.remark"
            type="textarea"
            :rows="3"
            placeholder="请输入备注"
            maxlength="200"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm" :loading="submitting">确定</el-button>
      </div>
    </el-dialog>

    <!-- 分配成员对话框 -->
    <el-dialog
      title="分配成员"
      :visible.sync="assignDialogVisible"
      :close-on-click-modal="false"
      width="500px"
    >
      <el-form
        ref="assignForm"
        :model="assignForm"
        label-width="80px"
      >
        <el-form-item label="选择用户">
          <el-select
            v-model="assignForm.userIds"
            multiple
            filterable
            placeholder="请选择用户"
            style="width: 100%;"
          >
            <el-option
              v-for="user in availableUsers"
              :key="user.id"
              :label="user.nickName || user.username"
              :value="user.id"
            >
              <span>{{ user.nickName || user.username }}</span>
              <span style="color: #8492a6; font-size: 12px;">({{ user.username }})</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位">
          <el-input v-model="assignForm.position" placeholder="请输入职位" />
        </el-form-item>
        <el-form-item label="设为负责人">
          <el-switch v-model="assignForm.isLeader" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="assignDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitAssign" :loading="assigning">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import protoRoot from '@/proto/proto.js'
import {
  getOrgTree,
  createOrganization,
  updateOrganization,
  deleteOrganization,
  getOrgUsers,
  assignUserToOrg,
  removeUserFromOrg,
  moveOrganization
} from '@/api/organizationService'
import { findUserList } from '@/api/user.js'

export default {
  name: 'Organization',
  data() {
    return {
      filterText: '',
      treeLoading: false,
      orgTree: [],
      treeProps: {
        children: 'children',
        label: 'orgName'
      },
      currentOrg: null,
      orgUsers: [],
      usersLoading: false,

      // 对话框
      dialogVisible: false,
      dialogTitle: '新增组织',
      submitting: false,
      orgForm: {
        id: null,
        parentId: null,
        orgName: '',
        orgCode: '',
        orgType: 2,
        leaderId: null,
        sort: 0,
        status: 1,
        remark: ''
      },
      orgRules: {
        orgName: [{ required: true, message: '请输入组织名称', trigger: 'blur' }],
        orgCode: [{ required: true, message: '请输入组织编码', trigger: 'blur' }]
      },
      orgOptions: [],

      // 用户选项
      userOptions: [],
      availableUsers: [],

      // 分配成员
      assignDialogVisible: false,
      assigning: false,
      assignForm: {
        userIds: [],
        position: '',
        isLeader: false
      }
    }
  },
  mounted() {
    this.loadOrgTree()
    this.loadUserOptions()
  },
  watch: {
    filterText(val) {
      this.$refs.orgTree.filter(val)
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.orgName.indexOf(value) !== -1
    },

    getOrgTypeIcon(type) {
      const icons = {
        1: 'el-icon-office-building',
        2: 'el-icon-folder',
        3: 'el-icon-files'
      }
      return icons[type] || 'el-icon-folder'
    },

    getOrgTypeTag(type) {
      const tags = {
        1: '',
        2: 'success',
        3: 'info'
      }
      return tags[type] || ''
    },

    getOrgTypeName(type) {
      const names = { 1: '公司', 2: '部门', 3: '小组' }
      return names[type] || '-'
    },

    async loadOrgTree() {
      this.treeLoading = true
      try {
        const response = await getOrgTree({})
        if (response.code === 'Success') {
          this.orgTree = response.trees || []
        } else {
          console.log(response.code)
          this.$message.error(response.msg || '加载组织树失败')
        }
      } catch (error) {
        console.error('加载组织树失败:', error)
        this.$message.error('加载组织树失败')
      } finally {
        this.treeLoading = false
      }
    },

    handleNodeClick(data) {
      this.currentOrg = data.org
      this.loadOrgUsers(data.org.id)
    },

    async loadOrgUsers(orgId) {
      this.usersLoading = true
      try {
        const response = await getOrgUsers({ orgId })
        if (response.code === 'Success') {
          this.orgUsers = response.list || []
        }
      } catch (error) {
        console.error('加载成员失败:', error)
      } finally {
        this.usersLoading = false
      }
    },

    handleCreate() {
      this.dialogTitle = '新增组织'
      this.dialogVisible = true
      this.buildOrgOptions()
    },

    handleAddChild(data) {
      this.dialogTitle = '新增子组织'
      this.orgForm.parentId = data.id
      this.dialogVisible = true
      this.buildOrgOptions()
    },

    handleEdit(data) {
      this.dialogTitle = '编辑组织'
      this.orgForm = { ...data }
      this.dialogVisible = true
      this.buildOrgOptions()
    },

    async handleDelete(data) {
      this.$confirm('确定要删除该组织吗？删除后将无法恢复。', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        try {
          const response = await deleteOrganization({ id: data.id })
          if (response.code === 'Success') {
            this.$message.success('删除成功')
            this.loadOrgTree()
            if (this.currentOrg && this.currentOrg.id === data.id) {
              this.currentOrg = null
            }
          } else {
            this.$message.error(response.msg || '删除失败')
          }
        } catch (error) {
          this.$message.error('删除失败')
        }
      }).catch(() => {})
    },

    buildOrgOptions() {
      // 将树形结构转换为级联选择器选项
      const buildOptions = (nodes, level = 0) => {
        let options = []
        for (const node of nodes) {
          const option = {
            id: node.org.id,
            orgName: node.org.orgName,
            children: node.children ? buildOptions(node.children, level + 1) : []
          }
          options.push(option)
        }
        return options
      }

      // 添加根节点选项
      this.orgOptions = [
        { id: 0, orgName: '作为根节点', children: buildOptions(this.orgTree) }
      ]
    },

    async loadUserOptions() {
      try {
        const response = await findUserList({
          pageInfo: { page: 1, pageSize: 1000 },
          query: { status: 1 }
        })
        if (response.code === 'Success') {
          this.userOptions = response.list || []
          this.availableUsers = response.list || []
        }
      } catch (error) {
        console.error('加载用户列表失败:', error)
      }
    },

    async submitForm() {
      this.$refs.orgForm.validate(async (valid) => {
        if (!valid) return

        this.submitting = true
        try {
          const data = { ...this.orgForm }
          let response

          if (data.id) {
            response = await updateOrganization(data)
          } else {
            delete data.id
            response = await createOrganization(data)
          }

          if (response.code === 'Success') {
            this.$message.success(data.id ? '更新成功' : '创建成功')
            this.dialogVisible = false
            this.loadOrgTree()
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
      this.orgForm = {
        id: null,
        parentId: null,
        orgName: '',
        orgCode: '',
        orgType: 2,
        leaderId: null,
        sort: 0,
        status: 1,
        remark: ''
      }
      if (this.$refs.orgForm) {
        this.$refs.orgForm.clearValidate()
      }
    },

    async handleNodeDrop(draggingNode, dropNode, dropType) {
      // dropType: 'before' | 'after' | 'inner'
      let newParentId = 0
      if (dropType === 'inner') {
        // 移动到目标节点内部，作为其子节点
        newParentId = dropNode.data.id
      } else {
        // 移动到目标节点之前或之后，使用目标节点的父ID
        newParentId = dropNode.data.parentId || 0
      }

      try {
        const response = await moveOrganization({
          orgId: draggingNode.data.id,
          newParentId: newParentId
        })
        if (response.code === 'Success') {
          this.$message.success('组织移动成功')
          this.loadOrgTree()
        } else {
          this.$message.error(response.msg || '移动失败')
          this.loadOrgTree() // 刷新以恢复原状
        }
      } catch (error) {
        console.error('移动组织失败:', error)
        this.$message.error('移动失败')
        this.loadOrgTree() // 刷新以恢复原状
      }
    },

    handleAssignUser() {
      this.assignForm = {
        userIds: [],
        position: '',
        isLeader: false
      }
      this.assignDialogVisible = true
    },

    async submitAssign() {
      if (!this.assignForm.userIds.length) {
        this.$message.warning('请选择用户')
        return
      }

      this.assigning = true
      try {
        // 批量分配用户
        for (const userId of this.assignForm.userIds) {
          await assignUserToOrg({
            userId,
            orgId: this.currentOrg.id,
            isLeader: this.assignForm.isLeader,
            position: this.assignForm.position
          })
        }
        this.$message.success('分配成功')
        this.assignDialogVisible = false
        this.loadOrgUsers(this.currentOrg.id)
      } catch (error) {
        this.$message.error('分配失败')
      } finally {
        this.assigning = false
      }
    },

    async handleRemoveUser(row) {
      this.$confirm('确定要将该用户移出组织吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        try {
          const response = await removeUserFromOrg({
            userId: row.userId,
            orgId: row.orgId
          })
          if (response.code === 'Success') {
            this.$message.success('移除成功')
            this.loadOrgUsers(this.currentOrg.id)
          } else {
            this.$message.error(response.msg || '移除失败')
          }
        } catch (error) {
          this.$message.error('移除失败')
        }
      }).catch(() => {})
    }
  }
}
</script>

<style scoped lang="scss">
.organization-container {
  padding: 20px;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .page-title {
    h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 500;
      color: #303133;
    }

    p {
      margin: 5px 0 0 0;
      font-size: 14px;
      color: #909399;
    }
  }
}

.tree-card {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;

    .node-label {
      display: flex;
      align-items: center;

      i {
        margin-right: 5px;
        color: #909399;
      }
    }

    .node-actions {
      display: none;

      .el-button {
        margin-left: 5px;
      }
    }
  }

  .el-tree-node__content:hover .node-actions {
    display: block;
  }
}

.detail-card {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-actions {
      display: flex;
      gap: 8px;
    }
  }

  .org-info {
    margin-bottom: 20px;
  }

  .detail-actions {
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #EBEEF5;
  }

  .members-section {
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      font-weight: 500;
    }
  }
}

.empty-card {
  min-height: 400px;

  .empty-state {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 300px;
    color: #909399;
  }
}

.dialog-footer {
  text-align: right;
}
</style>
