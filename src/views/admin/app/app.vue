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
      <el-table-column label="MiniProgramAppId" width="150px" align="center" prop="miniProgramAppId" />
      <el-table-column label="MiniProgramAppSecret" width="150px" align="center" prop="miniProgramAppSecret" />
      <el-table-column label="MiniProgramToken" width="150px" align="center" prop="miniProgramToken" />
      <el-table-column label="MiniProgramencodingAESKey" width="150px" align="center" prop="miniProgramencodingAESKey" />
      <el-table-column label="OfficalAppId" width="150px" align="center" prop="officalAppId" />
      <el-table-column label="OfficalAppSecret" width="150px" align="center" prop="officalAppSecret" />
      <el-table-column label="IfficalToken" width="150px" align="center" prop="ifficalToken" />
      <el-table-column label="OfficalEncodingAESKey" width="150px" align="center" prop="officalEncodingAESKey" />
      <el-table-column label="OpenAppId" width="150px" align="center" prop="openAppId" />
      <el-table-column label="OpenAppSecret" width="150px" align="center" prop="openAppSecret" />
      <el-table-column label="OpenToken" width="150px" align="center" prop="openToken" />
      <el-table-column label="OpenEncodingAESKey" width="150px" align="center" prop="openEncodingAESKey" />
      <el-table-column label="Icon" width="150px" align="center" prop="icon" />
      <el-table-column label="Logo" width="150px" align="center" prop="logo" />
      <el-table-column label="Description" width="150px" align="center" prop="description" />
      <el-table-column label="Version" width="150px" align="center" prop="version" />
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
        <el-form-item label="MiniProgramAppId" prop="miniProgramAppId">
          <el-input v-model="temp.miniProgramAppId" />
        </el-form-item>
        <el-form-item label="MiniProgramAppSecret" prop="miniProgramAppSecret">
          <el-input v-model="temp.miniProgramAppSecret" />
        </el-form-item>
        <el-form-item label="MiniProgramToken" prop="miniProgramToken">
          <el-input v-model="temp.miniProgramToken" />
        </el-form-item>
        <el-form-item label="MiniProgramencodingAESKey" prop="miniProgramencodingAESKey">
          <el-input v-model="temp.miniProgramencodingAESKey" />
        </el-form-item>
        <el-form-item label="OfficalAppId" prop="officalAppId">
          <el-input v-model="temp.officalAppId" />
        </el-form-item>
        <el-form-item label="OfficalAppSecret" prop="officalAppSecret">
          <el-input v-model="temp.officalAppSecret" />
        </el-form-item>
        <el-form-item label="IfficalToken" prop="ifficalToken">
          <el-input v-model="temp.ifficalToken" />
        </el-form-item>
        <el-form-item label="OfficalEncodingAESKey" prop="officalEncodingAESKey">
          <el-input v-model="temp.officalEncodingAESKey" />
        </el-form-item>
        <el-form-item label="OpenAppId" prop="openAppId">
          <el-input v-model="temp.openAppId" />
        </el-form-item>
        <el-form-item label="OpenAppSecret" prop="openAppSecret">
          <el-input v-model="temp.openAppSecret" />
        </el-form-item>
        <el-form-item label="OpenToken" prop="openToken">
          <el-input v-model="temp.openToken" />
        </el-form-item>
        <el-form-item label="OpenEncodingAESKey" prop="openEncodingAESKey">
          <el-input v-model="temp.openEncodingAESKey" />
        </el-form-item>
        <el-form-item label="Icon" prop="icon">
          <el-input v-model="temp.icon" />
        </el-form-item>
        <el-form-item label="Logo" prop="logo">
          <el-input v-model="temp.logo" />
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input v-model="temp.description" />
        </el-form-item>
        <el-form-item label="Version" prop="version">
          <el-input v-model="temp.version" />
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
        miniProgramAppId: '',
        miniProgramAppSecret: '',
        miniProgramToken: '',
        miniProgramencodingAESKey: '',
        officalAppId: '',
        officalAppSecret: '',
        ifficalToken: '',
        officalEncodingAESKey: '',
        openAppId: '',
        openAppSecret: '',
        openToken: '',
        openEncodingAESKey: '',
        icon: '',
        logo: '',
        description: '',
        version: ''
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
        miniProgramAppId: '',
        miniProgramAppSecret: '',
        miniProgramToken: '',
        miniProgramencodingAESKey: '',
        officalAppId: '',
        officalAppSecret: '',
        ifficalToken: '',
        officalEncodingAESKey: '',
        openAppId: '',
        openAppSecret: '',
        openToken: '',
        openEncodingAESKey: '',
        icon: '',
        logo: '',
        description: '',
        version: ''
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
      const res = await findAppById({ id: row.id })
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
      await deleteApp({ id: row.id })
      this.getTableData()
    }
  }
}
</script>

