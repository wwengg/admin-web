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
      <el-table-column label="ShopId" width="150px" align="center" prop="shopId" />
      <el-table-column label="ShopName" width="150px" align="center" prop="shopName" />
      <el-table-column label="ShopLogo" width="150px" align="center" prop="shopLogo" />
      <el-table-column label="VideoUrl" width="150px" align="center" prop="videoUrl" />
      <el-table-column label="Description" width="150px" align="center" prop="description" />
      <el-table-column label="Address" width="150px" align="center" prop="address" />
      <el-table-column label="Phone" width="150px" align="center" prop="phone" />
      <el-table-column label="Tags" width="150px" align="center" prop="tags" />
      <el-table-column label="OpenTime" width="150px" align="center" prop="openTime" />
      <el-table-column label="CloseTime" width="150px" align="center" prop="closeTime" />
      <el-table-column label="Status" width="150px" align="center" prop="status" />
      <el-table-column label="Sort" width="150px" align="center" prop="sort" />
      <el-table-column label="Lat" width="150px" align="center" prop="lat" />
      <el-table-column label="Lng" width="150px" align="center" prop="lng" />
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
        <el-form-item label="ShopId" prop="shopId">
          <el-input v-model="temp.shopId" />
        </el-form-item>
        <el-form-item label="ShopName" prop="shopName">
          <el-input v-model="temp.shopName" />
        </el-form-item>
        <el-form-item label="ShopLogo" prop="shopLogo">
          <el-input v-model="temp.shopLogo" />
        </el-form-item>
        <el-form-item label="VideoUrl" prop="videoUrl">
          <el-input v-model="temp.videoUrl" />
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input v-model="temp.description" />
        </el-form-item>
        <el-form-item label="Address" prop="address">
          <el-input v-model="temp.address" />
        </el-form-item>
        <el-form-item label="Phone" prop="phone">
          <el-input v-model="temp.phone" />
        </el-form-item>
        <el-form-item label="Tags" prop="tags">
          <el-input v-model="temp.tags" />
        </el-form-item>
        <el-form-item label="OpenTime" prop="openTime">
          <el-input v-model="temp.openTime" />
        </el-form-item>
        <el-form-item label="CloseTime" prop="closeTime">
          <el-input v-model="temp.closeTime" />
        </el-form-item>
        <el-form-item label="Status" prop="status">
          <el-input v-model="temp.status" />
        </el-form-item>
        <el-form-item label="Sort" prop="sort">
          <el-input v-model="temp.sort" />
        </el-form-item>
        <el-form-item label="Lat" prop="lat">
          <el-input v-model="temp.lat" />
        </el-form-item>
        <el-form-item label="Lng" prop="lng">
          <el-input v-model="temp.lng" />
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
import { createActiveShop, updateActiveShop, deleteActiveShop, findActiveShopById, findActiveShopList } from '@/api/activeShop'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'ActiveShopTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findActiveShopList,
      tableKey: 0,
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        shopId: 0,
        shopName: '',
        shopLogo: '',
        videoUrl: '',
        description: '',
        address: '',
        phone: '',
        tags: '',
        openTime: '',
        closeTime: '',
        status: 0,
        sort: 0,
        lat: '',
        lng: ''
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
        shopId: 0,
        shopName: '',
        shopLogo: '',
        videoUrl: '',
        description: '',
        address: '',
        phone: '',
        tags: '',
        openTime: '',
        closeTime: '',
        status: 0,
        sort: 0,
        lat: '',
        lng: ''
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
          const res = await createActiveShop(this.temp)
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
      const res = await findActiveShopById(row.id)
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
          const res = await updateActiveShop(this.temp)
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
      await deleteActiveShop(row.id)
      this.getTableData()
    }
  }
}
</script>

