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
        label="PermissionType"
        width="150px"
        align="center"
        prop="PermissionType"
      />
      <el-table-column
        label="Path"
        width="150px"
        align="center"
        prop="path"
      />
      <el-table-column
        label="Name"
        width="150px"
        align="center"
        prop="name"
      />
      <el-table-column
        label="Hidden"
        width="150px"
        align="center"
        prop="hidden"
      />
      <el-table-column
        label="Component"
        width="150px"
        align="center"
        prop="component"
      />
      <el-table-column
        label="Redirect"
        width="150px"
        align="center"
        prop="redirect"
      />
      <el-table-column
        label="Icon"
        width="150px"
        align="center"
        prop="icon"
      />
      <el-table-column
        label="Keepalive"
        width="150px"
        align="center"
        prop="keepalive"
      />
      <el-table-column
        label="Title"
        width="150px"
        align="center"
        prop="title"
      />
      <el-table-column
        label="AppId"
        width="150px"
        align="center"
        prop="appId"
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
          label="PermissionType"
          prop="PermissionType"
        >
          <el-input v-model="temp.PermissionType" />
        </el-form-item>
        <el-form-item
          label="Path"
          prop="path"
        >
          <el-input v-model="temp.path" />
        </el-form-item>
        <el-form-item
          label="Name"
          prop="name"
        >
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item
          label="Hidden"
          prop="hidden"
        >
          <el-select
            v-model="temp.hidden"
            placeholder="请选择"
          >
            <el-option
              v-for="item in boolOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <!-- <el-input v-model="temp.hidden" /> -->
        </el-form-item>
        <el-form-item
          label="Component"
          prop="component"
        >
          <el-input v-model="temp.component" />
        </el-form-item>
        <el-form-item
          label="Redirect"
          prop="redirect"
        >
          <el-input v-model="temp.redirect" />
        </el-form-item>
        <el-form-item
          label="Icon"
          prop="icon"
        >
          <el-input v-model="temp.icon" />
        </el-form-item>
        <el-form-item
          label="Keepalive"
          prop="keepalive"
        >
          <el-select
            v-model="temp.keepalive"
            placeholder="请选择"
          >
            <el-option
              v-for="item in boolOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          label="Title"
          prop="title"
        >
          <el-input v-model="temp.title" />
        </el-form-item>
        <el-form-item
          label="AppId"
          prop="appId"
        >
          <el-input v-model="temp.appId" />
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
import { createPermission, updatePermission, deletePermission, findPermissionById, findPermissionList } from '@/api/permission'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'PermissionTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findPermissionList,
      tableKey: 0,
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        parentId: 0,
        PermissionType: '',
        path: '',
        name: '',
        hidden: '',
        component: '',
        redirect: '',
        icon: '',
        keepalive: '',
        title: '',
        appId: 0
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      boolOptions: [{ value: true, label: '是' }, { value: false, label: '否' }],
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
        PermissionType: '',
        path: '',
        name: '',
        hidden: '',
        component: '',
        redirect: '',
        icon: '',
        keepalive: '',
        title: '',
        appId: 0
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
          const res = await createPermission(this.temp)
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
      console.log(row)
      const res = await findPermissionById({ id: row.id })
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
          const res = await updatePermission(this.temp)
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
      await deletePermission({ id: row.id })
      this.getTableData()
    }
  }
}
</script>

