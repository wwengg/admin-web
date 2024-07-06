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
      <el-table-column label="Username" width="150px" align="center" prop="username" />
      <el-table-column label="Password" width="150px" align="center" prop="password" />
      <el-table-column label="Email" width="150px" align="center" prop="email" />
      <el-table-column label="Phone" width="150px" align="center" prop="phone" />
      <el-table-column label="NickName" width="150px" align="center" prop="nickName" />
      <el-table-column label="UserOauthId" width="150px" align="center" prop="userOauthId" />
      <el-table-column label="AppId" width="150px" align="center" prop="appId" />
      <el-table-column label="Avatar" width="150px" align="center" prop="avatar" />
      <el-table-column label="Gender" width="150px" align="center" prop="gender" />
      <el-table-column label="Birthday" width="150px" align="center" prop="birthday" />
      <el-table-column label="Signature" width="150px" align="center" prop="signature" />
      <el-table-column label="Description" width="150px" align="center" prop="description" />
      <el-table-column label="Location" width="150px" align="center" prop="location" />
      <el-table-column label="Regip" width="150px" align="center" prop="regip" />
      <el-table-column label="Regtm" width="150px" align="center" prop="regtm" />
      <el-table-column label="Status" width="150px" align="center" prop="status" />
      <el-table-column label="AccountType" width="150px" align="center" prop="accountType" />
      <el-table-column label="Role" width="150px" align="center" prop="role" />
      <el-table-column label="Pretty" width="150px" align="center" prop="pretty" />
      <el-table-column label="Age" width="150px" align="center" prop="age" />
      <el-table-column label="Country" width="150px" align="center" prop="country" />
      <el-table-column label="CountryName" width="150px" align="center" prop="countryName" />
      <el-table-column label="City" width="150px" align="center" prop="city" />
      <el-table-column label="Zone" width="150px" align="center" prop="Zone" />
      <el-table-column label="DevDesc" width="150px" align="center" prop="devDesc" />
      <el-table-column label="Platform" width="150px" align="center" prop="platform" />
      <el-table-column label="DevUuid" width="150px" align="center" prop="devUuid" />
      <el-table-column label="Ver" width="150px" align="center" prop="ver" />
      <el-table-column label="IsRobt" width="150px" align="center" prop="isRobt" />
      <el-table-column label="RegDate" width="150px" align="center" prop="regDate" />
      <el-table-column label="CertName" width="150px" align="center" prop="certName" />
      <el-table-column label="CertNo" width="150px" align="center" prop="certNo" />
      <el-table-column label="First" width="150px" align="center" prop="first" />
      <el-table-column label="IsYoungMod" width="150px" align="center" prop="isYoungMod" />
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
        <el-form-item label="Username" prop="username">
          <el-input v-model="temp.username" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input v-model="temp.password" />
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model="temp.email" />
        </el-form-item>
        <el-form-item label="Phone" prop="phone">
          <el-input v-model="temp.phone" />
        </el-form-item>
        <el-form-item label="NickName" prop="nickName">
          <el-input v-model="temp.nickName" />
        </el-form-item>
        <el-form-item label="UserOauthId" prop="userOauthId">
          <el-input v-model="temp.userOauthId" />
        </el-form-item>
        <el-form-item label="AppId" prop="appId">
          <el-input v-model="temp.appId" />
        </el-form-item>
        <el-form-item label="Avatar" prop="avatar">
          <el-input v-model="temp.avatar" />
        </el-form-item>
        <el-form-item label="Gender" prop="gender">
          <el-input v-model="temp.gender" />
        </el-form-item>
        <el-form-item label="Birthday" prop="birthday">
          <el-input v-model="temp.birthday" />
        </el-form-item>
        <el-form-item label="Signature" prop="signature">
          <el-input v-model="temp.signature" />
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input v-model="temp.description" />
        </el-form-item>
        <el-form-item label="Location" prop="location">
          <el-input v-model="temp.location" />
        </el-form-item>
        <el-form-item label="Regip" prop="regip">
          <el-input v-model="temp.regip" />
        </el-form-item>
        <el-form-item label="Regtm" prop="regtm">
          <el-input v-model="temp.regtm" />
        </el-form-item>
        <el-form-item label="Status" prop="status">
          <el-input v-model="temp.status" />
        </el-form-item>
        <el-form-item label="AccountType" prop="accountType">
          <el-input v-model="temp.accountType" />
        </el-form-item>
        <el-form-item label="Role" prop="role">
          <el-input v-model="temp.role" />
        </el-form-item>
        <el-form-item label="Pretty" prop="pretty">
          <el-input v-model="temp.pretty" />
        </el-form-item>
        <el-form-item label="Age" prop="age">
          <el-input v-model="temp.age" />
        </el-form-item>
        <el-form-item label="Country" prop="country">
          <el-input v-model="temp.country" />
        </el-form-item>
        <el-form-item label="CountryName" prop="countryName">
          <el-input v-model="temp.countryName" />
        </el-form-item>
        <el-form-item label="City" prop="city">
          <el-input v-model="temp.city" />
        </el-form-item>
        <el-form-item label="Zone" prop="Zone">
          <el-input v-model="temp.Zone" />
        </el-form-item>
        <el-form-item label="DevDesc" prop="devDesc">
          <el-input v-model="temp.devDesc" />
        </el-form-item>
        <el-form-item label="Platform" prop="platform">
          <el-input v-model="temp.platform" />
        </el-form-item>
        <el-form-item label="DevUuid" prop="devUuid">
          <el-input v-model="temp.devUuid" />
        </el-form-item>
        <el-form-item label="Ver" prop="ver">
          <el-input v-model="temp.ver" />
        </el-form-item>
        <el-form-item label="IsRobt" prop="isRobt">
          <el-input v-model="temp.isRobt" />
        </el-form-item>
        <el-form-item label="RegDate" prop="regDate">
          <el-input v-model="temp.regDate" />
        </el-form-item>
        <el-form-item label="CertName" prop="certName">
          <el-input v-model="temp.certName" />
        </el-form-item>
        <el-form-item label="CertNo" prop="certNo">
          <el-input v-model="temp.certNo" />
        </el-form-item>
        <el-form-item label="First" prop="first">
          <el-input v-model="temp.first" />
        </el-form-item>
        <el-form-item label="IsYoungMod" prop="isYoungMod">
          <el-input v-model="temp.isYoungMod" />
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
import { createUser, updateUser, deleteUser, findUserById, findUserList } from '@/api/user'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'UserTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findUserList,
      tableKey: 0,
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        username: '',
        password: '',
        email: '',
        phone: 0,
        nickName: '',
        userOauthId: 0,
        appId: 0,
        avatar: '',
        gender: 0,
        birthday: '',
        signature: '',
        description: '',
        location: '',
        regip: '',
        regtm: '',
        status: '',
        accountType: 0,
        role: 0,
        pretty: 0,
        age: 0,
        country: 0,
        countryName: '',
        city: '',
        Zone: 0,
        devDesc: '',
        platform: '',
        devUuid: '',
        ver: '',
        isRobt: 0,
        regDate: '',
        certName: '',
        certNo: '',
        first: '',
        isYoungMod: ''
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
        username: '',
        password: '',
        email: '',
        phone: 0,
        nickName: '',
        userOauthId: 0,
        appId: 0,
        avatar: '',
        gender: 0,
        birthday: '',
        signature: '',
        description: '',
        location: '',
        regip: '',
        regtm: '',
        status: '',
        accountType: 0,
        role: 0,
        pretty: 0,
        age: 0,
        country: 0,
        countryName: '',
        city: '',
        Zone: 0,
        devDesc: '',
        platform: '',
        devUuid: '',
        ver: '',
        isRobt: 0,
        regDate: '',
        certName: '',
        certNo: '',
        first: '',
        isYoungMod: ''
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
          const res = await createUser(this.temp)
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
      const res = await findUserById(row.id)
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
          const res = await updateUser(this.temp)
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
      await deleteUser(row.id)
      this.getTableData()
    }
  }
}
</script>

