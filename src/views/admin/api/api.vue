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
        label="Type"
        width="150px"
        align="center"
        prop="type"
      />
      <el-table-column
        label="Path"
        width="150px"
        align="center"
        prop="path"
      />
      <el-table-column
        label="Method"
        width="150px"
        align="center"
        prop="method"
      />
      <el-table-column
        label="Name"
        width="150px"
        align="center"
        prop="name"
      />
      <el-table-column
        label="Group"
        width="150px"
        align="center"
        prop="group"
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
          label="Type"
          prop="type"
        >
          <el-select
            v-model="temp.type"
            placeholder="请选择"
            @change="typeChangeHandle"
          >
            <el-option
              v-for="item in typeOptions"
              :key="item.label"
              :label="item.label"
              :value="item.label"
            />
          </el-select>
        </el-form-item>

        <el-form-item
          label="Path"
          prop="path"
        >
          <el-input v-model="temp.path" />
        </el-form-item>
        <el-form-item
          label="Method"
          prop="method"
        >
          <el-input v-model="temp.method" />
        </el-form-item>
        <el-form-item
          label="Name"
          prop="name"
        >
          <el-input v-model="temp.name" />
        </el-form-item>
        <el-form-item
          label="Group"
          prop="group"
        >
          <el-input v-model="temp.group" />
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="autoFillForm(0)">
          填充创建
        </el-button>
        <el-button @click="autoFillForm(1)">
          填充更新
        </el-button>
        <el-button @click="autoFillForm(2)">
          填充删除
        </el-button>
        <el-button @click="autoFillForm(3)">
          填充查询
        </el-button>
        <el-button @click="autoFillForm(4)">
          填充查询列表
        </el-button>
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
import { createApi, updateApi, deleteApi, findApiById, findApiList } from '@/api/api'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'
import capitalizeFirstLetter from '@/utils/string'

export default {
  name: 'ApiTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findApiList,
      tableKey: 0,
      typeOptions: [{ label: 'HTTP' }, { label: 'CMD' }],
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        type: 'HTTP',
        path: '',
        method: 'POST',
        name: '',
        group: ''
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
    typeChangeHandle(v) {
      if (v === 'HTTP') {
        this.temp.method = 'POST'
      } else {
        this.temp.method = ''
      }
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
        type: 'HTTP',
        path: '',
        method: 'POST',
        name: '',
        group: ''
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
          const res = await createApi(this.temp)
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
      const res = await findApiById({ id: row.id })
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
          const res = await updateApi(this.temp)
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
      await deleteApi({ id: row.id })
      this.getTableData()
    },
    autoFillForm(type) {
      if (this.temp.group === '') {
        return
      }
      const upperName = capitalizeFirstLetter(this.temp.group)
      switch (type) {
        case 0:
          this.temp.name = `创建${upperName}`
          this.temp.path = `/v2/${this.temp.group}/create${upperName}`
          break
        case 1:
          this.temp.name = `更新${upperName}`
          this.temp.path = `/v2/${this.temp.group}/update${upperName}`
          break
        case 2:
          this.temp.name = `删除${upperName}`
          this.temp.path = `/v2/${this.temp.group}/delete${upperName}`
          break
        case 3:
          this.temp.name = `查询${upperName}`
          this.temp.path = `/v2/${this.temp.group}/find${upperName}ById`
          break
        case 4:
          this.temp.name = `查询${upperName}列表`
          this.temp.path = `/v2/${this.temp.group}/find${upperName}List`
          break

        default:
          break
      }
    }
  }
}
</script>
