<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="query.title" placeholder="Title" style="width: 200px;" class="filter-item"
        @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit"
        @click="handleCreate">
        新建
      </el-button>
    </div>
    <el-table :key="tableKey" v-loading="listLoading" :data="tableData" border fit highlight-current-row
      style="width: 100%;">
      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="CreatedAt" width="150px" align="center" prop="createdAt">
      </el-table-column>
      <el-table-column label="UpdatedAt" width="150px" align="center" prop="updatedAt">
      </el-table-column>
      <el-table-column label="GroupId" width="150px" align="center" prop="groupId">
      </el-table-column>
      <el-table-column label="Channel" width="150px" align="center" prop="channel">
      </el-table-column>
      <el-table-column label="Storage" width="150px" align="center" prop="storage">
      </el-table-column>
      <el-table-column label="Domain" width="150px" align="center" prop="domain">
      </el-table-column>
      <el-table-column label="Path" width="150px" align="center" prop="path">
      </el-table-column>
      <el-table-column label="FileName" width="150px" align="center" prop="fileName">
      </el-table-column>
      <el-table-column label="FileSize" width="150px" align="center" prop="fileSize">
      </el-table-column>
      <el-table-column label="FileType" width="150px" align="center" prop="fileType">
      </el-table-column>
      <el-table-column label="FileExt" width="150px" align="center" prop="fileExt">
      </el-table-column>
      <el-table-column label="Cover" width="150px" align="center" prop="cover">
      </el-table-column>
      <el-table-column label="UploaderId" width="150px" align="center" prop="uploaderId">
      </el-table-column>
      <el-table-column label="AppId" width="150px" align="center" prop="appId">
      </el-table-column>
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
      <el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="120px"
        style="width: 450px; margin-left:50px;">
        <el-form-item label="GroupId" prop="groupId">
          <el-input v-model="temp.groupId" />
        </el-form-item>
        <el-form-item label="Channel" prop="channel">
          <el-input v-model="temp.channel" />
        </el-form-item>
        <el-form-item label="Storage" prop="storage">
          <el-input v-model="temp.storage" />
        </el-form-item>
        <el-form-item label="Domain" prop="domain">
          <el-input v-model="temp.domain" />
        </el-form-item>
        <el-form-item label="Path" prop="path">
          <el-input v-model="temp.path" />
        </el-form-item>
        <el-form-item label="FileName" prop="fileName">
          <el-input v-model="temp.fileName" />
        </el-form-item>
        <el-form-item label="FileSize" prop="fileSize">
          <el-input v-model="temp.fileSize" />
        </el-form-item>
        <el-form-item label="FileType" prop="fileType">
          <el-input v-model="temp.fileType" />
        </el-form-item>
        <el-form-item label="FileExt" prop="fileExt">
          <el-input v-model="temp.fileExt" />
        </el-form-item>
        <el-form-item label="Cover" prop="cover">
          <el-input v-model="temp.cover" />
        </el-form-item>
        <el-form-item label="UploaderId" prop="uploaderId">
          <el-input v-model="temp.uploaderId" />
        </el-form-item>
        <el-form-item label="AppId" prop="appId">
          <el-input v-model="temp.appId" />
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
import { createUploadFile, updateUploadFile, deleteUploadFile, findUploadFileById, findUploadFileList } from '@/api/uploadFile'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'UploadFileTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findUploadFileList,
      tableKey: 0,
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        groupId: 0,
        channel: '',
        storage: '',
        domain: '',
        path: '',
        fileName: '',
        fileSize: 0,
        fileType: '',
        fileExt: '',
        cover: '',
        uploaderId: 0,
        appId: 0,
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
        groupId: 0,
        channel: '',
        storage: '',
        domain: '',
        path: '',
        fileName: '',
        fileSize: 0,
        fileType: '',
        fileExt: '',
        cover: '',
        uploaderId: 0,
        appId: 0,
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
      this.$refs['dataForm'].validate(async (valid) => {
        if (valid) {
          const res = await createUploadFile(this.temp)
          if (res.code === 'Success') {
            this.handleFilter();
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
      const res = await findUploadFileById(row.id)
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
      this.$refs['dataForm'].validate(async (valid) => {
        if (valid) {
          const res = await updateUploadFile(this.temp)
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
      await deleteUploadFile(row.id)
      this.getTableData()
    }
  }
}
</script>

