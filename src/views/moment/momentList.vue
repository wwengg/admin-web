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
      <el-table-column label="UserId" width="150px" align="center" prop="userId" />
      <el-table-column label="MomentType" width="150px" align="center" prop="momentType" />
      <el-table-column label="MomentMediaType" width="150px" align="center" prop="momentMediaType" />
      <el-table-column label="MomentVisibility" width="150px" align="center" prop="momentVisibility" />
      <el-table-column label="Content" width="150px" align="center" prop="content" />
      <el-table-column label="Medias" width="150px" align="center" prop="medias" />
      <el-table-column label="Address" width="150px" align="center" prop="address" />
      <el-table-column label="Lat" width="150px" align="center" prop="lat" />
      <el-table-column label="Lng" width="150px" align="center" prop="lng" />
      <el-table-column label="Ip" width="150px" align="center" prop="ip" />
      <el-table-column label="IsApproved" width="150px" align="center" prop="isApproved" />
      <el-table-column label="Reason" width="150px" align="center" prop="reason" />
      <el-table-column label="IsUpdated" width="150px" align="center" prop="isUpdated" />
      <el-table-column label="XunyouJsonStr" width="150px" align="center" prop="xunyouJsonStr" />
      <el-table-column label="User" width="150px" align="center" prop="user" />
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
        <el-form-item label="UserId" prop="userId">
          <el-input v-model="temp.userId" />
        </el-form-item>
        <el-form-item label="MomentType" prop="momentType">
          <el-input v-model="temp.momentType" />
        </el-form-item>
        <el-form-item label="MomentMediaType" prop="momentMediaType">
          <el-input v-model="temp.momentMediaType" />
        </el-form-item>
        <el-form-item label="MomentVisibility" prop="momentVisibility">
          <el-input v-model="temp.momentVisibility" />
        </el-form-item>
        <el-form-item label="Content" prop="content">
          <el-input v-model="temp.content" />
        </el-form-item>
        <el-form-item label="Medias" prop="medias">
          <el-input v-model="temp.medias" />
        </el-form-item>
        <el-form-item label="Address" prop="address">
          <el-input v-model="temp.address" />
        </el-form-item>
        <el-form-item label="Lat" prop="lat">
          <el-input v-model="temp.lat" />
        </el-form-item>
        <el-form-item label="Lng" prop="lng">
          <el-input v-model="temp.lng" />
        </el-form-item>
        <el-form-item label="Ip" prop="ip">
          <el-input v-model="temp.ip" />
        </el-form-item>
        <el-form-item label="IsApproved" prop="isApproved">
          <el-input v-model="temp.isApproved" />
        </el-form-item>
        <el-form-item label="Reason" prop="reason">
          <el-input v-model="temp.reason" />
        </el-form-item>
        <el-form-item label="IsUpdated" prop="isUpdated">
          <el-input v-model="temp.isUpdated" />
        </el-form-item>
        <el-form-item label="XunyouJsonStr" prop="xunyouJsonStr">
          <el-input v-model="temp.xunyouJsonStr" />
        </el-form-item>
        <el-form-item label="User" prop="user">
          <el-input v-model="temp.user" />
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
import { createMoment, updateMoment, deleteMoment, findMomentById, findMomentList } from '@/api/moment'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'MomentTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findMomentList,
      tableKey: 0,
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        userId: 0,
        momentType: '',
        momentMediaType: '',
        momentVisibility: '',
        content: '',
        medias: '',
        address: '',
        lat: '',
        lng: '',
        ip: '',
        isApproved: '',
        reason: '',
        isUpdated: '',
        xunyouJsonStr: '',
        user: ''
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
        userId: 0,
        momentType: '',
        momentMediaType: '',
        momentVisibility: '',
        content: '',
        medias: '',
        address: '',
        lat: '',
        lng: '',
        ip: '',
        isApproved: '',
        reason: '',
        isUpdated: '',
        xunyouJsonStr: '',
        user: ''
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
          const res = await createMoment(this.temp)
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
      const res = await findMomentById({ id: row.id })
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
          const res = await updateMoment(this.temp)
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
      await deleteMoment({ id: row.id })
      this.getTableData()
    }
  }
}
</script>

