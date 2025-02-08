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
      <el-table-column label="MomentId" width="150px" align="center" prop="momentId" />
      <el-table-column label="Ip" width="150px" align="center" prop="ip" />
      <el-table-column label="Content" width="150px" align="center" prop="content" />
      <el-table-column label="ReplyToCid" width="150px" align="center" prop="replyToCid" />
      <el-table-column label="IsApproved" width="150px" align="center" prop="isApproved" />
      <el-table-column label="Reason" width="150px" align="center" prop="reason" />
      <el-table-column label="Moment" width="150px" align="center" prop="moment" />
      <el-table-column label="ReplyToComment" width="150px" align="center" prop="replyToComment" />
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
        <el-form-item label="MomentId" prop="momentId">
          <el-input v-model="temp.momentId" />
        </el-form-item>
        <el-form-item label="Ip" prop="ip">
          <el-input v-model="temp.ip" />
        </el-form-item>
        <el-form-item label="Content" prop="content">
          <el-input v-model="temp.content" />
        </el-form-item>
        <el-form-item label="ReplyToCid" prop="replyToCid">
          <el-input v-model="temp.replyToCid" />
        </el-form-item>
        <el-form-item label="IsApproved" prop="isApproved">
          <el-input v-model="temp.isApproved" />
        </el-form-item>
        <el-form-item label="Reason" prop="reason">
          <el-input v-model="temp.reason" />
        </el-form-item>
        <el-form-item label="Moment" prop="moment">
          <el-input v-model="temp.moment" />
        </el-form-item>
        <el-form-item label="ReplyToComment" prop="replyToComment">
          <el-input v-model="temp.replyToComment" />
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
import { createMomentComment, updateMomentComment, deleteMomentComment, findMomentCommentById, findMomentCommentList } from '@/api/momentComment'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'MomentCommentTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findMomentCommentList,
      tableKey: 0,
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        userId: 0,
        momentId: 0,
        ip: '',
        content: '',
        replyToCid: 0,
        isApproved: '',
        reason: '',
        moment: '',
        replyToComment: '',
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
        momentId: 0,
        ip: '',
        content: '',
        replyToCid: 0,
        isApproved: '',
        reason: '',
        moment: '',
        replyToComment: '',
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
          const res = await createMomentComment(this.temp)
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
      const res = await findMomentCommentById({ id: row.id })
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
          const res = await updateMomentComment(this.temp)
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
      await deleteMomentComment({ id: row.id })
      this.getTableData()
    }
  }
}
</script>

