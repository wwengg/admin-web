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
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
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
      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="CreatedAt" width="150px" align="center" prop="createdAt" />
      <el-table-column label="UpdatedAt" width="150px" align="center" prop="updatedAt" />
      <el-table-column label="Name" width="150px" align="center" prop="name" />
      <el-table-column label="Description" width="150px" align="center" prop="description" />
      <el-table-column label="Icon" width="150px" align="center" prop="icon" />
      <el-table-column label="Logo" width="150px" align="center" prop="logo" />
      <el-table-column label="Url" width="150px" align="center" prop="url" />
      <el-table-column label="Version" width="150px" align="center" prop="version" />
      <el-table-column label="Type" width="150px" align="center" prop="type" />
      <el-table-column label="Status" width="150px" align="center" prop="status" />
      <el-table-column label="OwnerId" width="150px" align="center" prop="ownerId" />
      <el-table-column label="OwnerName" width="150px" align="center" prop="ownerName" />
      <el-table-column label="OwnerEmail" width="150px" align="center" prop="ownerEmail" />
      <el-table-column label="OwnerPhone" width="150px" align="center" prop="ownerPhone" />
      <el-table-column label="OwnerMobile" width="150px" align="center" prop="ownerMobile" />
      <el-table-column label="OwnerAddress" width="150px" align="center" prop="ownerAddress" />
      <el-table-column label="OwnerZipCode" width="150px" align="center" prop="ownerZipCode" />
      <el-table-column label="OwnerCountry" width="150px" align="center" prop="ownerCountry" />
      <el-table-column label="OfficalUrl" width="150px" align="center" prop="officalUrl" />
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            编辑
          </el-button>
          <el-popover v-model="row.visible" placement="top" width="160">
            <p>确定要删除此用户吗</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="row.visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="handleDelete(row)">确定</el-button>
            </div>
            <el-button slot="reference" size="mini" type="danger">删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <pagination v-show="total > 0" :total="total" :page.sync="page" :limit.sync="pageSize" @pagination="getTableData" />
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="left"
        label-width="120px"
        style="width: 450px; margin-left:50px;"
      >
        <el-form-item label="Name" prop="name">
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input v-model="temp.description" />
        </el-form-item>
        <el-form-item label="Icon" prop="icon">
          <el-input v-model="temp.icon" />
        </el-form-item>
        <el-form-item label="Logo" prop="logo">
          <el-input v-model="temp.logo" />
        </el-form-item>
        <el-form-item label="Url" prop="url">
          <el-input v-model="temp.url" />
        </el-form-item>
        <el-form-item label="Version" prop="version">
          <el-input v-model="temp.version" />
        </el-form-item>
        <el-form-item label="Type" prop="type">
          <el-input v-model="temp.type" />
        </el-form-item>
        <el-form-item label="Status" prop="status">
          <el-input v-model="temp.status" />
        </el-form-item>
        <el-form-item label="OwnerId" prop="ownerId">
          <el-input v-model="temp.ownerId" />
        </el-form-item>
        <el-form-item label="OwnerName" prop="ownerName">
          <el-input v-model="temp.ownerName" />
        </el-form-item>
        <el-form-item label="OwnerEmail" prop="ownerEmail">
          <el-input v-model="temp.ownerEmail" />
        </el-form-item>
        <el-form-item label="OwnerPhone" prop="ownerPhone">
          <el-input v-model="temp.ownerPhone" />
        </el-form-item>
        <el-form-item label="OwnerMobile" prop="ownerMobile">
          <el-input v-model="temp.ownerMobile" />
        </el-form-item>
        <el-form-item label="OwnerAddress" prop="ownerAddress">
          <el-input v-model="temp.ownerAddress" />
        </el-form-item>
        <el-form-item label="OwnerZipCode" prop="ownerZipCode">
          <el-input v-model="temp.ownerZipCode" />
        </el-form-item>
        <el-form-item label="OwnerCountry" prop="ownerCountry">
          <el-input v-model="temp.ownerCountry" />
        </el-form-item>
        <el-form-item label="OfficalUrl" prop="officalUrl">
          <el-input v-model="temp.officalUrl" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
        <el-button type="primary" @click="dialogStatus === 'create' ? createData() : updateData()">
          完成
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { createApp, updateApp, deleteApp, findAppById, findAppList } from '@/api/app'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'AppTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findAppList,
      tableKey: 0,
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        name: '',
        description: '',
        icon: '',
        logo: '',
        url: '',
        version: '',
        type: 0,
        status: 0,
        ownerId: 0,
        ownerName: '',
        ownerEmail: '',
        ownerPhone: '',
        ownerMobile: '',
        ownerAddress: '',
        ownerZipCode: '',
        ownerCountry: '',
        officalUrl: ''
      },
      dialogFormVisible: false,
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
        name: '',
        description: '',
        icon: '',
        logo: '',
        url: '',
        version: '',
        type: 0,
        status: 0,
        ownerId: 0,
        ownerName: '',
        ownerEmail: '',
        ownerPhone: '',
        ownerMobile: '',
        ownerAddress: '',
        ownerZipCode: '',
        ownerCountry: '',
        officalUrl: ''
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
          const res = await createApp(this.temp)
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
      const res = await findAppById(row.id)
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
          const res = await updateApp(this.temp)
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
      await deleteApp(row.id)
      this.getTableData()
    }
  }
}
</script>

