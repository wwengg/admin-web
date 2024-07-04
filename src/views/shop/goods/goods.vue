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
      <el-table-column label="GoodsName" width="150px" align="center" prop="goodsName" />
      <el-table-column label="GoodsNo" width="150px" align="center" prop="goodsNo" />
      <el-table-column label="VideoId" width="150px" align="center" prop="videoId" />
      <el-table-column label="VideoCoverId" width="150px" align="center" prop="videoCoverId" />
      <el-table-column label="SellingPoint" width="150px" align="center" prop="sellingPoint" />
      <el-table-column label="SpecType" width="150px" align="center" prop="specType" />
      <el-table-column label="GoodsPriceMin" width="150px" align="center" prop="goodsPriceMin" />
      <el-table-column label="GoodsPriceMax" width="150px" align="center" prop="goodsPriceMax" />
      <el-table-column label="LinePriceMin" width="150px" align="center" prop="linePriceMin" />
      <el-table-column label="LinePriceMax" width="150px" align="center" prop="linePriceMax" />
      <el-table-column label="StockTotal" width="150px" align="center" prop="stockTotal" />
      <el-table-column label="DeductStockType" width="150px" align="center" prop="deductStockType" />
      <el-table-column label="Content" width="150px" align="center" prop="content" />
      <el-table-column label="SalesInitial" width="150px" align="center" prop="salesInitial" />
      <el-table-column label="SalesActual" width="150px" align="center" prop="salesActual" />
      <el-table-column label="DeliveryId" width="150px" align="center" prop="deliveryId" />
      <el-table-column label="IsPointsGift" width="150px" align="center" prop="isPointsGift" />
      <el-table-column label="IsPointsDiscount" width="150px" align="center" prop="isPointsDiscount" />
      <el-table-column label="IsOnSiteService" width="150px" align="center" prop="isOnSiteService" />
      <el-table-column label="IsRecommend" width="150px" align="center" prop="isRecommend" />
      <el-table-column label="IsNew" width="150px" align="center" prop="isNew" />
      <el-table-column label="IsHot" width="150px" align="center" prop="isHot" />
      <el-table-column label="Status" width="150px" align="center" prop="status" />
      <el-table-column label="Sort" width="150px" align="center" prop="sort" />
      <el-table-column label="ShopId" width="150px" align="center" prop="shopId" />
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
        <el-form-item label="GoodsName" prop="goodsName">
          <el-input v-model="temp.goodsName" />
        </el-form-item>
        <el-form-item label="GoodsNo" prop="goodsNo">
          <el-input v-model="temp.goodsNo" />
        </el-form-item>
        <el-form-item label="VideoId" prop="videoId">
          <el-input v-model="temp.videoId" />
        </el-form-item>
        <el-form-item label="VideoCoverId" prop="videoCoverId">
          <el-input v-model="temp.videoCoverId" />
        </el-form-item>
        <el-form-item label="SellingPoint" prop="sellingPoint">
          <el-input v-model="temp.sellingPoint" />
        </el-form-item>
        <el-form-item label="SpecType" prop="specType">
          <el-input v-model="temp.specType" />
        </el-form-item>
        <el-form-item label="GoodsPriceMin" prop="goodsPriceMin">
          <el-input v-model="temp.goodsPriceMin" />
        </el-form-item>
        <el-form-item label="GoodsPriceMax" prop="goodsPriceMax">
          <el-input v-model="temp.goodsPriceMax" />
        </el-form-item>
        <el-form-item label="LinePriceMin" prop="linePriceMin">
          <el-input v-model="temp.linePriceMin" />
        </el-form-item>
        <el-form-item label="LinePriceMax" prop="linePriceMax">
          <el-input v-model="temp.linePriceMax" />
        </el-form-item>
        <el-form-item label="StockTotal" prop="stockTotal">
          <el-input v-model="temp.stockTotal" />
        </el-form-item>
        <el-form-item label="DeductStockType" prop="deductStockType">
          <el-input v-model="temp.deductStockType" />
        </el-form-item>
        <el-form-item label="Content" prop="content">
          <el-input v-model="temp.content" />
        </el-form-item>
        <el-form-item label="SalesInitial" prop="salesInitial">
          <el-input v-model="temp.salesInitial" />
        </el-form-item>
        <el-form-item label="SalesActual" prop="salesActual">
          <el-input v-model="temp.salesActual" />
        </el-form-item>
        <el-form-item label="DeliveryId" prop="deliveryId">
          <el-input v-model="temp.deliveryId" />
        </el-form-item>
        <el-form-item label="IsPointsGift" prop="isPointsGift">
          <el-input v-model="temp.isPointsGift" />
        </el-form-item>
        <el-form-item label="IsPointsDiscount" prop="isPointsDiscount">
          <el-input v-model="temp.isPointsDiscount" />
        </el-form-item>
        <el-form-item label="IsOnSiteService" prop="isOnSiteService">
          <el-input v-model="temp.isOnSiteService" />
        </el-form-item>
        <el-form-item label="IsRecommend" prop="isRecommend">
          <el-input v-model="temp.isRecommend" />
        </el-form-item>
        <el-form-item label="IsNew" prop="isNew">
          <el-input v-model="temp.isNew" />
        </el-form-item>
        <el-form-item label="IsHot" prop="isHot">
          <el-input v-model="temp.isHot" />
        </el-form-item>
        <el-form-item label="Status" prop="status">
          <el-input v-model="temp.status" />
        </el-form-item>
        <el-form-item label="Sort" prop="sort">
          <el-input v-model="temp.sort" />
        </el-form-item>
        <el-form-item label="ShopId" prop="shopId">
          <el-input v-model="temp.shopId" />
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
import { createGoods, updateGoods, deleteGoods, findGoodsById, findGoodsList } from '@/api/goods'
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import tableList from '@/mixins/tableList'

export default {
  name: 'GoodsTable',
  components: { Pagination },
  directives: { waves },
  mixins: [tableList],
  data() {
    return {
      listApi: findGoodsList,
      tableKey: 0,
      temp: {
        id: undefined,
        createdAt: '',
        updatedAt: '',

        goodsName: '',
        goodsNo: '',
        videoId: 0,
        videoCoverId: 0,
        sellingPoint: '',
        specType: '',
        goodsPriceMin: 0,
        goodsPriceMax: 0,
        linePriceMin: 0,
        linePriceMax: 0,
        stockTotal: 0,
        deductStockType: '',
        content: '',
        salesInitial: 0,
        salesActual: 0,
        deliveryId: 0,
        isPointsGift: 0,
        isPointsDiscount: 0,
        isOnSiteService: 0,
        isRecommend: 0,
        isNew: 0,
        isHot: 0,
        status: '',
        sort: 0,
        shopId: 0
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
        goodsName: '',
        goodsNo: '',
        videoId: 0,
        videoCoverId: 0,
        sellingPoint: '',
        specType: '',
        goodsPriceMin: 0,
        goodsPriceMax: 0,
        linePriceMin: 0,
        linePriceMax: 0,
        stockTotal: 0,
        deductStockType: '',
        content: '',
        salesInitial: 0,
        salesActual: 0,
        deliveryId: 0,
        isPointsGift: 0,
        isPointsDiscount: 0,
        isOnSiteService: 0,
        isRecommend: 0,
        isNew: 0,
        isHot: 0,
        status: '',
        sort: 0,
        shopId: 0
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
          const res = await createGoods(this.temp)
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
      const res = await findGoodsById(row.id)
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
          const res = await updateGoods(this.temp)
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
      await deleteGoods(row.id)
      this.getTableData()
    }
  }
}
</script>

