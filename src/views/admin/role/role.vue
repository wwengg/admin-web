<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="query.title"
        placeholder="Title"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        搜索
      </el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        新建
      </el-button>
    </div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column
        label="ID"
        prop="id"
        sortable="custom"
        align="center"
        width="80"
      >
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="CreatedAt"
        width="150px"
        align="center"
        prop="createdAt"
      />
      <el-table-column
        label="UpdatedAt"
        width="150px"
        align="center"
        prop="updatedAt"
      />
      <el-table-column
        label="ParentId"
        width="150px"
        align="center"
        prop="parentId"
      />
      <el-table-column
        label="RoleName"
        width="150px"
        align="center"
        prop="roleName"
      />
      <el-table-column
        label="RoleCode"
        width="150px"
        align="center"
        prop="roleCode"
      />
      <el-table-column
        label="RoleDesc"
        width="150px"
        align="center"
        prop="roleDesc"
      />
      <el-table-column
        label="RoleType"
        width="150px"
        align="center"
        prop="roleType"
      />
      <el-table-column
        label="RoleStatus"
        width="150px"
        align="center"
        prop="roleStatus"
      />
      <el-table-column
        label="Permissions"
        width="150px"
        align="center"
        prop="permissions"
      />
      <el-table-column
        label="操作"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row}">
          <el-button
            type="primary"
            size="mini"
            @click="handlePermission(row.id)"
          >
            设置权限
          </el-button>
          <el-button
            type="primary"
            size="mini"
            @click="handleApis(row.id)"
          >
            设置api
          </el-button>
          <el-button
            type="primary"
            size="mini"
            @click="handleUpdate(row)"
          >
            编辑
          </el-button>
          <el-popover
            v-model="row.visible"
            placement="top"
            width="160"
          >
            <p>确定要删除此用户吗</p>
            <div style="text-align: right; margin: 0">
              <el-button
                size="mini"
                type="text"
                @click="row.visible = false"
              >取消</el-button>
              <el-button
                type="primary"
                size="mini"
                @click="handleDelete(row)"
              >确定</el-button>
            </div>
            <el-button
              slot="reference"
              size="mini"
              type="danger"
            >删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="page"
      :limit.sync="pageSize"
      @pagination="getTableData"
    />
    <el-dialog
      title="设置api权限"
      :visible.sync="dialogFormVisible2"
    >
      <div style="margin-top: 20px">
        <!-- <el-form-item label="Apis"> -->
        <el-tree
          ref="tree"
          :check-strictly="checkStrictly"
          :data="apisTreeData"
          :default-expand-all="true"
          :props="defaultProps"
          :default-checked-keys="defaultCheckedKeys"
          show-checkbox
          node-key="id"
          class="permission-tree"
        />
        <!-- </el-form-item> -->
      </div>

      <div style="margin-top: 20px">
        <el-button @click="dialogFormVisible2 = false">
          取消
        </el-button>
        <el-button
          type="primary"
          @click="updateApisData()"
        >
          完成
        </el-button>
      </div>

    </el-dialog>

    <el-dialog
      title="设置权限"
      :visible.sync="dialogFormVisible3"
    >
      <div style="margin-top: 20px">
        <!-- <el-form-item label="Apis"> -->
        <el-tree
          ref="tree2"
          :check-strictly="checkStrictly"
          :data="permissionsTreeData"
          :default-expand-all="true"
          :props="{
            children: 'children',
            label: 'title'
          }"
          :default-checked-keys="permissionsCheckedKeys"
          show-checkbox
          node-key="id"
          class="permission-tree"
        />
        <!-- </el-form-item> -->
      </div>

      <div style="margin-top: 20px">
        <el-button @click="dialogFormVisible3 = false">
          取消
        </el-button>
        <el-button
          type="primary"
          @click="updatePermissionsData()"
        >
          完成
        </el-button>
      </div>

    </el-dialog>
    <el-dialog
      :title="textMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="120px"
        style="width: 450px; margin-left:50px;"
      >
        <el-form-item
          label="ParentId"
          prop="parentId"
        >
          <el-input v-model="temp.parentId" />
        </el-form-item>
        <el-form-item
          label="RoleName"
          prop="roleName"
        >
          <el-input v-model="temp.roleName" />
        </el-form-item>
        <el-form-item
          label="RoleCode"
          prop="roleCode"
        >
          <el-input v-model="temp.roleCode" />
        </el-form-item>
        <el-form-item
          label="RoleDesc"
          prop="roleDesc"
        >
          <el-input v-model="temp.roleDesc" />
        </el-form-item>
        <el-form-item
          label="RoleType"
          prop="roleType"
        >
          <el-input v-model="temp.roleType" />
        </el-form-item>
        <el-form-item
          label="RoleStatus"
          prop="roleStatus"
        >
          <el-input v-model="temp.roleStatus" />
        </el-form-item>
        <el-form-item
          label="Permissions"
          prop="permissions"
        >
          <el-input v-model="temp.permissions" />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button
          type="primary"
          @click="dialogStatus === 'create' ? createData() : updateData()"
        >
          完成
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createRole, updateRole2, deleteRole2, findRoleById, findRoleList } from '@/api/role'
import { findPermissionTree, findPermissionTreeByRole, setPermissionTreeByRole } from '@/api/permission'
import { findApiByCasbinRole, setApiByCasbinRole } from '@/api/api'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'RoleTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findRoleList,
      tableKey: 0,
      apisData: [],
      apisTreeData: [{ children: [], title: 'HTTP' }, { children: [], title: 'CMD' }],
      defaultCheckedKeys: [],
      permissionsTreeData: [],
      permissionsCheckedKeys: [],
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      checkStrictly: false,
      role: '',
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        parentId: 0,
        roleName: '',
        roleCode: 0,
        roleDesc: '',
        roleType: '',
        roleStatus: 0,
        permissions: ''
      },
      dialogFormVisible: false,
      dialogFormVisible2: false,
      dialogFormVisible3: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      rules: {
        //   type: [{ required: true, message: 'type is required', trigger: 'change' }],
        //   timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        //   title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      }
    }
  },
  created() {
    this.getTableData()
  },
  methods: {
    async handleApis(id) {
      this.apisData = []
      this.role = id
      this.defaultCheckedKeys = []
      this.apisTreeData = [{ children: [], title: 'HTTP' }, { children: [], title: 'CMD' }]
      const res = await findApiByCasbinRole({ role: id })
      if (res.code === 'Success') {
        this.apisData = res.list
        await this.setApisTreeData(res.list)
        this.dialogFormVisible2 = true
      }
    },

    async handlePermission(id) {
      this.role = id
      this.permissionsCheckedKeys = []
      this.permissionsTreeData = []
      const res = await findPermissionTree({ query: { parentId: 0 }})
      if (res.code === 'Success') {
        this.permissionsTreeData = res.list
        const res2 = await findPermissionTreeByRole({ id: id })
        if (res2.code === 'Success') {
          const menus = await this.handlePermissionsCheckedKeys(res2.list)
          const arr = []
          if (menus) {
            const menus2 = res2.list.concat(menus)
            // 防止直接选中父级造成全选
            menus2.forEach(item => {
              if (!menus2.some(same => same.parentId === item.id)) {
                arr.push(item.id)
              }
            })
          }
          this.permissionsCheckedKeys = arr
          this.dialogFormVisible3 = true
        }
      }
    },
    async handlePermissionsCheckedKeys(treeData) {
      if (treeData.length === 0) return
      let list = []
      treeData.forEach(item => {
        if (item.children.length > 0) {
          list = list.concat(item.children)
        }
      })
      const childList = await this.handlePermissionsCheckedKeys(list)
      if (childList) {
        return list.concat(childList)
      } else return list
    },
    async setApisTreeData(list) {
      const treeData = [{ children: [], title: 'HTTP' }, { children: [], title: 'CMD' }]
      const httpGroupMap = {}
      let httpGroupIndex = 0
      const cmdGroupMap = {}
      let cmdGroupIndex = 0
      list.forEach(api => {
        if (api.isSelected) {
          this.defaultCheckedKeys.push(api.id)
        }
        if (api.type === 'HTTP') {
          if (!(httpGroupMap[api.group] >= 0)) {
            treeData[0].children.push({ children: [], title: api.group })
            httpGroupMap[api.group] = httpGroupIndex
            httpGroupIndex++
          }
          treeData[0].children[httpGroupMap[api.group]].children.push({
            id: api.id,
            title: api.name
          })
        } else if (api.type === 'CMD') {
          console.log(cmdGroupMap[api.group])
          if (!(cmdGroupMap[api.group] >= 0)) {
            treeData[1].children.push({ children: [], title: api.group })
            cmdGroupMap[api.group] = cmdGroupIndex
            cmdGroupIndex++
          }
          treeData[1].children[cmdGroupMap[api.group]].children.push({
            id: api.id,
            title: api.method + '-' + api.name
          })
        }
      })
      this.apisTreeData = treeData
    },
    async updatePermissionsData() {
      let keys = this.$refs.tree2.getHalfCheckedKeys()
      keys = keys.concat(this.$refs.tree2.getCheckedKeys())
      //
      console.log(keys)
      const res = await setPermissionTreeByRole({ id: this.role, ids: keys })
      if (res.code === 'Success') {
        this.dialogFormVisible3 = false
        this.$notify({
          title: 'Success',
          message: '设置成功',
          type: 'success',
          duration: 2000
        })
        this.role = ''
        this.permissionsCheckedKeys = []
      }
    },
    async updateApisData() {
      this.defaultCheckedKeys = this.$refs.tree.getCheckedKeys()
      console.log(this.defaultCheckedKeys)
      await this.updateApisDataByChecked()
      console.log(this.apisData)
      const res = await setApiByCasbinRole({ role: this.role, list: this.apisData })
      if (res.code === 'Success') {
        this.dialogFormVisible2 = false
        this.$notify({
          title: 'Success',
          message: '设置成功',
          type: 'success',
          duration: 2000
        })
      }
      this.apisData = []
      this.role = ''
      this.defaultCheckedKeys = []
      this.apisTreeData = [{ children: [], title: 'HTTP' }, { children: [], title: 'CMD' }]
    },
    async updateApisDataByChecked() {
      this.apisData.map(v => {
        if (this.defaultCheckedKeys.indexOf(v.id) >= 0) {
          v.isSelected = true
        } else {
          v.isSelected = false
        }
        return v
      })
    },
    handleFilter() {
      this.page = 1
      this.getTableData()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        createdAt: '',
        updatedAt: '',
        parentId: 0,
        roleName: '',
        roleCode: 0,
        roleDesc: '',
        roleType: '',
        roleStatus: 0,
        permissions: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    async createData() {
      this.$refs['dataForm'].validate(async(valid) => {
        if (valid) {
          const res = await createRole(this.temp)
          if (res.code === 'Success') {
            this.handleFilter()
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          }
        }
      })
    },
    async handleUpdate(row) {
      const res = await findRoleById({ id: row.id })
      console.log(res)
      if (res.code === 'Success') {
        this.temp = res.data
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      }
    },
    async updateData() {
      this.$refs['dataForm'].validate(async(valid) => {
        if (valid) {
          const res = await updateRole2(this.temp)
          if (res.code === 'Success') {
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: '更新成功',
              type: 'success',
              duration: 2000
            })
            this.getTableData()
          }
        }
      })
    },
    async handleDelete(row) {
      await deleteRole2({ id: row.id })
      this.getTableData()
    }
  }
}
</script>
