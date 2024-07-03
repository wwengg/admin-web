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
      <el-table-column label="RptNo" width="150px" align="center" prop="rptNo" />
      <el-table-column label="Imei" width="150px" align="center" prop="imei" />
      <el-table-column label="FirmwareEdition" width="150px" align="center" prop="firmwareEdition" />
      <el-table-column label="ReportTime" width="150px" align="center" prop="reportTime" />
      <el-table-column label="DevModel" width="150px" align="center" prop="devModel" />
      <el-table-column label="ReportType" width="150px" align="center" prop="reportType" />
      <el-table-column label="Csq" width="150px" align="center" prop="csq" />
      <el-table-column label="DumpEnergy" width="150px" align="center" prop="dumpEnergy" />
      <el-table-column label="StepNum" width="150px" align="center" prop="stepNum" />
      <el-table-column label="Charging" width="150px" align="center" prop="charging" />
      <el-table-column label="Status" width="150px" align="center" prop="status" />
      <el-table-column label="Macs" width="150px" align="center" prop="macs" />
      <el-table-column label="Latitude" width="150px" align="center" prop="latitude" />
      <el-table-column label="Longitude" width="150px" align="center" prop="longitude" />
      <el-table-column label="Flag" width="150px" align="center" prop="flag" />
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
        <el-form-item label="RptNo" prop="rptNo">
          <el-input v-model="temp.rptNo" />
        </el-form-item>
        <el-form-item label="Imei" prop="imei">
          <el-input v-model="temp.imei" />
        </el-form-item>
        <el-form-item label="FirmwareEdition" prop="firmwareEdition">
          <el-input v-model="temp.firmwareEdition" />
        </el-form-item>
        <el-form-item label="ReportTime" prop="reportTime">
          <el-input v-model="temp.reportTime" />
        </el-form-item>
        <el-form-item label="DevModel" prop="devModel">
          <el-input v-model="temp.devModel" />
        </el-form-item>
        <el-form-item label="ReportType" prop="reportType">
          <el-input v-model="temp.reportType" />
        </el-form-item>
        <el-form-item label="Csq" prop="csq">
          <el-input v-model="temp.csq" />
        </el-form-item>
        <el-form-item label="DumpEnergy" prop="dumpEnergy">
          <el-input v-model="temp.dumpEnergy" />
        </el-form-item>
        <el-form-item label="StepNum" prop="stepNum">
          <el-input v-model="temp.stepNum" />
        </el-form-item>
        <el-form-item label="Charging" prop="charging">
          <el-input v-model="temp.charging" />
        </el-form-item>
        <el-form-item label="Status" prop="status">
          <el-input v-model="temp.status" />
        </el-form-item>
        <el-form-item label="Macs" prop="macs">
          <el-input v-model="temp.macs" />
        </el-form-item>
        <el-form-item label="Latitude" prop="latitude">
          <el-input v-model="temp.latitude" />
        </el-form-item>
        <el-form-item label="Longitude" prop="longitude">
          <el-input v-model="temp.longitude" />
        </el-form-item>
        <el-form-item label="Flag" prop="flag">
          <el-input v-model="temp.flag" />
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
import { createDeviceReport, updateDeviceReport, deleteDeviceReport, findDeviceReportById, findDeviceReportList } from '@/api/deviceReport'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'DeviceReportTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findDeviceReportList,
      tableKey: 0,
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        rptNo: 0,
        imei: '',
        firmwareEdition: '',
        reportTime: '',
        devModel: '',
        reportType: '',
        csq: 0,
        dumpEnergy: 0,
        stepNum: 0,
        charging: 0,
        status: 0,
        macs: '',
        latitude: '',
        longitude: '',
        flag: 0
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
        rptNo: 0,
        imei: '',
        firmwareEdition: '',
        reportTime: '',
        devModel: '',
        reportType: '',
        csq: 0,
        dumpEnergy: 0,
        stepNum: 0,
        charging: 0,
        status: 0,
        macs: '',
        latitude: '',
        longitude: '',
        flag: 0
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
          const res = await createDeviceReport(this.temp)
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
      const res = await findDeviceReportById(row.id)
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
          const res = await updateDeviceReport(this.temp)
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
      await deleteDeviceReport(row.id)
      this.getTableData()
    }
  }
}
</script>

