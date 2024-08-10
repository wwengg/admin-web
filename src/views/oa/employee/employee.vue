<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="query.realName"
        placeholder="姓名、手机、身份证号"
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
        label="真实姓名"
        width="150px"
        align="center"
        prop="realName"
      />
      <el-table-column
        label="身份证号"
        width="150px"
        align="center"
        prop="idNumber"
      />
      <el-table-column
        label="银行账户"
        width="150px"
        align="center"
        prop="bankAccount"
      />
      <el-table-column
        label="开户行"
        width="150px"
        align="center"
        prop="bankAddress"
      />
      <el-table-column
        label="手机号"
        width="150px"
        align="center"
        prop="phone"
      />
      <el-table-column
        label="首字母"
        width="150px"
        align="center"
        prop="jieba"
      />
      <el-table-column
        label="全拼"
        width="150px"
        align="center"
        prop="quanpin"
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
          label="真实姓名"
          prop="realName"
        >
          <el-input v-model="temp.realName" />
        </el-form-item>
        <el-form-item
          label="身份证号"
          prop="idNumber"
        >
          <el-input v-model="temp.idNumber" />
        </el-form-item>
        <el-form-item
          label="银行账户"
          prop="bankAccount"
        >
          <el-input v-model="temp.bankAccount" />
        </el-form-item>
        <el-form-item
          label="开户行地址"
          prop="bankAddress"
        >
          <el-input v-model="temp.bankAddress" />
        </el-form-item>
        <el-form-item
          label="手机号"
          prop="phone"
        >
          <el-input v-model="temp.phone" />
        </el-form-item>
        <el-form-item
          label="首字母"
          prop="jieba"
        >
          <el-input v-model="temp.jieba" />
        </el-form-item>
        <el-form-item
          label="全拼"
          prop="quanpin"
        >
          <el-input v-model="temp.quanpin" />
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
import { createEmployee, updateEmployee, deleteEmployee, findEmployeeById, findEmployeeList } from '@/api/employee'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'EmployeeTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findEmployeeList,
      tableKey: 0,
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        realName: '',
        idNumber: '',
        bankAccount: '',
        bankAddress: '',
        phone: 0,
        jieba: '',
        quanpin: ''
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
        realName: '',
        idNumber: '',
        bankAccount: '',
        bankAddress: '',
        phone: 0,
        jieba: '',
        quanpin: ''
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
          const res = await createEmployee(this.temp)
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
      const res = await findEmployeeById({ id: row.id })
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
          const res = await updateEmployee(this.temp)
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
      await deleteEmployee({ id: row.id })
      this.getTableData()
    }
  }
}
</script>

