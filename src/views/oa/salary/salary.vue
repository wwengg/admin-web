<template>
  <div class="app-container">
    <div class="filter-container">
      <el-date-picker v-model="query.date" class="filter-item" type="month" value-format="yyyy-MM-dd" placeholder="选择月" @change="handleFilter" />
      <el-input
        v-model="query.employee.realName"
        placeholder="身份证、姓名、手机号"
        style="width: 200px;"
        class="filter-item"
        @keyup.enter.native="handleFilter"
      />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        搜索
      </el-button>
      <el-button
        v-if="query.date != ''"
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-document"
        @click="handleDownload"
      >
        导出Excel
      </el-button>
      <el-switch
        v-model="query.employeeId"
        class="filter-item"
        active-text="只显示已填工资名单"
        inactive-text=""
        :active-value="1"
        :inactive-value="0"
        @change="handleFilter"
      />

      <!-- <el-input v-model="query.date" placeholder="date" style="width: 200px;" class="filter-item"
        @keyup.enter.native="handleFilter" /> -->

      <!-- <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit"
        @click="handleCreate">
        新建
      </el-button> -->

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

      <el-table-column label="工数" width="50px" align="center" prop="days" />
      <el-table-column label="单价" width="80px" align="center" prop="unitPrice" />
      <el-table-column label="总金额" width="100px" align="center" prop="totalPrice" />
      <el-table-column label="额外福利" width="80px" align="center" prop="extraPrice" />
      <!-- <el-table-column
        label="Tax"
        width="150px"
        align="center"
        prop="tax"
      />
      <el-table-column
        label="AfterTaxPrice"
        width="150px"
        align="center"
        prop="afterTaxPrice"
      /> -->
      <el-table-column label="日期" width="100px" align="center" prop="date" />
      <el-table-column label="姓名" width="70px" align="center" prop="employee.realName" />
      <el-table-column label="身份证号" width="170px" align="center" prop="employee.idNumber" />
      <el-table-column label="银行账户" width="170px" align="center" prop="employee.bankAccount" />
      <el-table-column label="开户行" width="150px" align="center" prop="employee.bankAddress" />
      <el-table-column label="手机号" width="110px" align="center" prop="employee.phone" />
      <el-table-column
        v-if="query.date != ''"
        label="操作"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            {{ row.id === 0 ? '发放' : '修改' }}
          </el-button>
          <el-popover v-model="row.visible" placement="top" width="160">
            <p>确定要删除该条数据吗</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="row.visible = false">取消</el-button>
              <el-button type="primary" size="mini" @click="handleDelete(row)">确定</el-button>
            </div>
            <el-button slot="reference" size="mini" type="danger">删除</el-button>
          </el-popover>
          <el-button v-if="row.id !== 0" type="warn" size="mini" @click="copyRow(row)">
            复制到下个月
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="150px" align="center" prop="createdAt" />
      <el-table-column label="修改时间" width="150px" align="center" prop="updatedAt" />
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
        <el-form-item label="Days" prop="days">
          <el-input v-model="temp.days" />
        </el-form-item>
        <el-form-item label="UnitPrice" prop="unitPrice">
          <el-input v-model="temp.unitPrice" />
        </el-form-item>
        <el-form-item label="ExtraPrice" prop="extraPrice">
          <el-input v-model="temp.extraPrice" />
        </el-form-item>
        <!-- <el-form-item
          label="TotalPrice"
          prop="totalPrice"
        >
          <el-input v-model="temp.totalPrice" />
        </el-form-item> -->
        <!-- <el-form-item
          label="Tax"
          prop="tax"
        >
          <el-input v-model="temp.tax" />
        </el-form-item>
        <el-form-item
          label="AfterTaxPrice"
          prop="afterTaxPrice"
        >
          <el-input v-model="temp.afterTaxPrice" />
        </el-form-item> -->
        <el-form-item label="Date" prop="date">
          <el-input v-model="temp.date" />
        </el-form-item>
        <!-- <el-form-item
          label="employeeId"
          prop="employeeId"
        >
          <el-input v-model="temp.employeeId" />
        </el-form-item> -->
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
import { createSalary, updateSalary, deleteSalary, findSalaryById, findSalaryList } from '@/api/salary'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'SalaryTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findSalaryList,
      // Excel
      downloadLoading: false,
      filename: '工资发放表',
      autoWidth: true,
      bookType: 'xlsx',

      tableKey: 0,
      query: {
        date: '',
        employee: {
          realName: ''
        },
        employeeId: 0
      },
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        days: '',
        unitPrice: 0,
        extraPrice: 0,
        totalPrice: 0,
        tax: 0,
        afterTaxPrice: 0,
        date: '',
        employeeId: 0
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
    removeLastCharacter(str) {
      return str.substring(0, str.length - 3)
    },
    handleDownload() {
      if (this.query.date === '') {
        return
      }
      const pageSize = this.pageSize
      this.downloadLoading = true
      this.query.employeeId = 1
      this.pageSize = 99999
      this.handleFilter()
      import('@/vendor/Export2Excel').then(excel => {
        setTimeout(() => {
          const tHeader = ['工数', '单价', '总金额', '福利津贴', '姓名', '身份证', '手机号', '银行账户', '开户行']
          const filterVal = ['days', 'unitPrice', 'totalPrice', 'extraPrice', 'employee.realName', 'employee.idNumber', 'employee.phone', 'employee.bankAccount', 'employee.bankAddress']
          const list = this.tableData
          const data = this.formatJson(filterVal, list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: this.removeLastCharacter(this.query.date) + this.filename,
            autoWidth: this.autoWidth,
            bookType: this.bookType
          })
          this.downloadLoading = false
          this.pageSize = pageSize
        }, 2000)
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        const list = j.split('.')
        if (list.length > 1) {
          console.log(list)
          return v[list[0]][list[1]]
        } else {
          return v[j]
        }
      }))
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
        days: '',
        unitPrice: 0,
        extraPrice: 0,
        totalPrice: 0,
        tax: 0,
        afterTaxPrice: 0,
        date: '',
        employeeId: 0
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
          const res = await createSalary(this.temp)
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
    async copyRow(row) {
      const res = await findSalaryById({ id: row.id })
      console.log(res)
      if (res.code === 'Success') {
        this.temp = res.data
        this.temp.id = 0
        const date = new Date(this.temp.date)
        date.setMonth(date.getMonth() + 1)
        const dateString = date.toLocaleString()
        let dateString2 = ''
        dateString.split(' ')[0].split('/').forEach((value) => {
          if (value.length === 4 || value.length === 2) {
            dateString2 += value + '-'
          }
          if (value.length === 1) {
            dateString2 += '0' + value + '-'
          }
        })
        dateString2 = dateString2.substring(0, dateString2.length - 1)
        this.temp.date = dateString2
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      }
    },
    async handleUpdate(row) {
      if (row.id === 0) {
        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.temp.employeeId = row.employee.id
        this.temp.date = this.query.date
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      } else {
        const res = await findSalaryById({ id: row.id })
        console.log(res)
        if (res.code === 'Success') {
          this.temp = res.data
          this.dialogStatus = 'update'
          this.dialogFormVisible = true
          this.$nextTick(() => {
            this.$refs['dataForm'].clearValidate()
          })
        }
      }
    },
    async updateData() {
      this.$refs['dataForm'].validate(async(valid) => {
        if (valid) {
          const res = await updateSalary(this.temp)
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
      await deleteSalary({ id: row.id })
      this.getTableData()
    }
  }
}
</script>
