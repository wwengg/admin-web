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
      <el-table-column label="Platform" width="150px" align="center" prop="platform">
      </el-table-column>
      <el-table-column label="Ver" width="150px" align="center" prop="ver">
      </el-table-column>
      <el-table-column label="VerNum" width="150px" align="center" prop="verNum">
      </el-table-column>
      <el-table-column label="产品名" width="150px" align="center" prop="prodName">
      </el-table-column>
      <el-table-column label="强制更新" width="150px" align="center" prop="isForce">
      <template slot-scope="{row}">
          <span>{{ row.isForce?"强制":"不强制" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="针对的版本号" width="150px" align="center" prop="verList">
      </el-table-column>
      <el-table-column label="是否热更新" width="150px" align="center" prop="isHot">
      <template slot-scope="{row}">
          <span>{{ row.isHot?"是":"否" }}</span>
        </template>
      </el-table-column>
      <el-table-column label="UpdateFrom" width="150px" align="center" prop="updateFrom">
      <template slot-scope="{row}">
          <span>{{ formatUpdateFrom(row.updateFrom) }}</span>
        </template>
      </el-table-column>
      </el-table-column>
      <el-table-column label="Detail" width="150px" align="center" prop="detail">
      </el-table-column>
      <el-table-column label="Url" width="150px" align="center" prop="url">
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
        <el-form-item label="Platform" prop="platform">
          <el-input v-model="temp.platform" />
        </el-form-item>
        <el-form-item label="Ver" prop="ver">
          <el-input v-model="temp.ver" />
        </el-form-item>
        <el-form-item label="VerNum" prop="verNum">
          <el-input v-model="temp.verNum" />
        </el-form-item>
        <el-form-item label="ProdName" prop="prodName">
          <el-input v-model="temp.prodName" />
        </el-form-item>
        <el-form-item label="IsForce" prop="isForce">
          <el-select
            v-model="temp.isForce"
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
        <el-form-item label="VerList" prop="verList">
          <el-input v-model="temp.verList" />
        </el-form-item>
        <el-form-item label="IsHot" prop="isHot">
          <el-select
            v-model="temp.isHot"
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
        <el-form-item label="UpdateFrom" prop="updateFrom">
          <el-select
            v-model="temp.updateFrom"
            placeholder="请选择"
          >
            <el-option
              v-for="item in UpdateFromOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="Detail" prop="detail">
          <el-input v-model="temp.detail" />
        </el-form-item>
        <el-form-item label="Url" prop="url">
          <el-input v-model="temp.url" />
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
import { createAppVersion, updateAppVersion, deleteAppVersion, findAppVersionById, findAppVersionList } from '@/api/appVersion'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'AppVersionTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findAppVersionList,
      tableKey: 0,
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        platform: '',
        ver: '',
        verNum: 0,
        prodName: '',
        isForce: '',
        verList: '',
        isHot: '',
        updateFrom: 0,
        detail: '',
        appId: 0,
        url: '',
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '创建'
      },
      boolOptions: [{ value: true, label: '是' }, { value: false, label: '否' }],
      UpdateFromOptions: [{ value: 0, label: 'WEB' }, { value: 1, label: 'APPSTORE' },{ value: 2, label: 'HOTURL' },{ value: 3, label: 'DOWNLOAD' }],
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
    formatUpdateFrom(value) {
      const option = this.UpdateFromOptions.find(item => item.value === value)
      return option ? option.label : '-'
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
        platform: '',
        ver: '',
        verNum: 0,
        prodName: '',
        isForce: '',
        verList: '',
        isHot: '',
        updateFrom: 0,
        detail: '',
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
          const res = await createAppVersion(this.temp)
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
      const res = await findAppVersionById({ id: row.id })
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
          const res = await updateAppVersion(this.temp)
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
      await deleteAppVersion({id:row.id})
      this.getTableData()
    }
  }
}
</script>

