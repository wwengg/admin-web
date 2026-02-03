<template>
  <div class="erp-purchase">
    <!-- 页面标题和操作栏 -->
    <div class="page-header">
      <div class="page-title">
        <h1>采购管理</h1>
        <p>管理采购订单和供应商信息</p>
      </div>
      <el-button type="primary" icon="el-icon-plus" @click="handleCreate">新建采购订单</el-button>
    </div>

    <!-- 标签页 -->
    <el-card class="tab-card">
      <el-tabs v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane label="采购订单" name="orders">
          <div class="tab-toolbar">
            <el-input
              v-model="searchText"
              placeholder="搜索订单..."
              prefix-icon="el-icon-search"
              style="width: 300px;"
              @change="loadPurchaseOrders"
            />
            <el-button icon="el-icon-filter">筛选</el-button>
            <el-button icon="el-icon-download">导出</el-button>
          </div>
          <el-table :data="purchaseOrders" v-loading="loading" style="width: 100%">
            <el-table-column prop="id" label="订单编号" width="140">
              <template slot-scope="scope">
                <span class="link-text">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="supplier" label="供应商" show-overflow-tooltip />
            <el-table-column prop="amount" label="金额" width="100" />
            <el-table-column prop="items" label="物料数" width="90" class-name="hidden-md-and-down">
              <template slot-scope="scope">
                {{ scope.row.items }} 项
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" width="90">
              <template slot-scope="scope">
                <el-tag :type="getPurchaseStatusType(scope.row.status)" size="small">
                  {{ scope.row.status }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="deliveryDate" label="交货日期" width="110" class-name="hidden-lg-and-down" />
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleEditOrder(scope.row)">编辑</el-button>
                <el-button type="text" size="small" style="color: #F56C6C;" @click="handleDeleteOrder(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="商品管理" name="products">
          <div class="tab-toolbar">
            <el-input
              v-model="searchText"
              placeholder="搜索商品..."
              prefix-icon="el-icon-search"
              style="width: 300px;"
            />
            <el-button icon="el-icon-filter">筛选</el-button>
            <el-button icon="el-icon-download">导出</el-button>
          </div>
          <el-table :data="products" style="width: 100%">
            <el-table-column prop="code" label="商品编码" width="120">
              <template slot-scope="scope">
                <span class="link-text">{{ scope.row.code }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="商品名称" show-overflow-tooltip />
            <el-table-column prop="category" label="分类" width="100" class-name="hidden-md-and-down">
              <template slot-scope="scope">
                <el-tag type="warning" size="mini">{{ scope.row.category }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="spec" label="规格" width="200" class-name="hidden-lg-and-down" />
            <el-table-column label="成本价" width="120">
              <template slot-scope="scope">
                {{ scope.row.costPrice }}/{{ scope.row.unit }}
              </template>
            </el-table-column>
            <el-table-column label="库存" width="90">
              <template slot-scope="scope">
                <span :class="getStockClass(scope.row)">
                  {{ scope.row.stock }}
                </span>
                <span style="color: #909399; margin-left: 4px;">{{ scope.row.unit }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="supplier" label="供应商" width="140" class-name="hidden-xl-and-down" show-overflow-tooltip />
            <el-table-column label="操作" width="80">
              <template slot-scope="scope">
                <el-button type="text" size="small">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="供应商管理" name="suppliers">
          <div class="tab-toolbar">
            <el-input
              v-model="searchText"
              placeholder="搜索供应商..."
              prefix-icon="el-icon-search"
              style="width: 300px;"
            />
            <el-button icon="el-icon-filter">筛选</el-button>
            <el-button icon="el-icon-download">导出</el-button>
            <el-button type="primary" icon="el-icon-plus" @click="handleCreateSupplier">新增供应商</el-button>
          </div>
          <el-table :data="suppliers" style="width: 100%">
            <el-table-column prop="name" label="供应商名称" show-overflow-tooltip />
            <el-table-column prop="contact" label="联系人" width="100" />
            <el-table-column prop="phone" label="电话" width="130" class-name="hidden-md-and-down" />
            <el-table-column prop="category" label="类别" width="110" class-name="hidden-lg-and-down">
              <template slot-scope="scope">
                <el-tag type="primary" size="mini">{{ scope.row.category }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="rating" label="评分" width="120">
              <template slot-scope="scope">
                <el-rate v-model="scope.row.rating" disabled show-score text-color="#ff9900" score-template="{value}" />
              </template>
            </el-table-column>
            <el-table-column prop="orders" label="采购次数" width="100" class-name="hidden-xl-and-down" />
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleEditSupplier(scope.row)">编辑</el-button>
                <el-button type="text" size="small" style="color: #F56C6C;" @click="handleDeleteSupplier(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <!-- 采购订单编辑对话框 -->
    <el-dialog
      :title="orderDialogTitle"
      :visible.sync="orderDialogVisible"
      :close-on-click-modal="false"
      width="700px"
      @close="resetOrderForm"
    >
      <el-form
        ref="orderForm"
        :model="orderForm"
        :rules="orderRules"
        label-width="100px"
      >
        <el-form-item label="供应商" prop="supplierId">
          <el-select
            v-model="orderForm.supplierId"
            filterable
            placeholder="请选择供应商"
            style="width: 100%;"
            @change="handleSupplierChange"
          >
            <el-option
              v-for="supplier in supplierOptions"
              :key="supplier.id"
              :label="supplier.name"
              :value="supplier.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="联系人" prop="contactName">
          <el-input v-model="orderForm.contactName" placeholder="请输入联系人" />
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="orderForm.phone" placeholder="请输入联系电话" />
        </el-form-item>
        <el-form-item label="交货日期" prop="deliveryDate">
          <el-date-picker
            v-model="orderForm.deliveryDate"
            type="date"
            placeholder="选择交货日期"
            style="width: 100%;"
            value-format="timestamp"
          />
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            v-model="orderForm.remark"
            type="textarea"
            :rows="3"
            placeholder="请输入备注"
          />
        </el-form-item>
        <el-divider content-position="left">订单明细</el-divider>
        <el-button type="primary" size="small" icon="el-icon-plus" @click="addOrderItem" style="margin-bottom: 12px;">
          添加明细
        </el-button>
        <el-table :data="orderForm.items" style="width: 100%;">
          <el-table-column label="商品" width="180">
            <template slot-scope="scope">
              <el-select
                v-model="scope.row.productId"
                filterable
                placeholder="选择商品"
                size="small"
                @change="handleProductChange(scope.$index)"
              >
                <el-option
                  v-for="product in productOptions"
                  :key="product.id"
                  :label="product.name"
                  :value="product.id"
                />
              </el-select>
            </template>
          </el-table-column>
          <el-table-column label="数量" width="120">
            <template slot-scope="scope">
              <el-input-number
                v-model="scope.row.quantity"
                :min="1"
                size="small"
                controls-position="right"
                style="width: 100%;"
              />
            </template>
          </el-table-column>
          <el-table-column label="单价" width="120">
            <template slot-scope="scope">
              <el-input-number
                v-model="scope.row.price"
                :min="0"
                :precision="2"
                size="small"
                controls-position="right"
                style="width: 100%;"
              />
            </template>
          </el-table-column>
          <el-table-column label="小计" width="100">
            <template slot-scope="scope">
              {{ (scope.row.quantity * scope.row.price).toFixed(2) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="60">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                style="color: #F56C6C;"
                @click="removeOrderItem(scope.$index)"
              >
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: right; margin-top: 12px; font-weight: bold;">
          合计: ¥{{ orderTotalAmount.toFixed(2) }}
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="orderDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitOrderForm" :loading="submitting">确定</el-button>
      </div>
    </el-dialog>

    <!-- 供应商编辑对话框 -->
    <el-dialog
      :title="supplierDialogTitle"
      :visible.sync="supplierDialogVisible"
      :close-on-click-modal="false"
      width="600px"
      @close="resetSupplierForm"
    >
      <el-form
        ref="supplierForm"
        :model="supplierForm"
        :rules="supplierRules"
        label-width="100px"
      >
        <el-form-item label="供应商名称" prop="name">
          <el-input v-model="supplierForm.name" placeholder="请输入供应商名称" />
        </el-form-item>
        <el-form-item label="联系人" prop="contactName">
          <el-input v-model="supplierForm.contactName" placeholder="请输入联系人" />
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="supplierForm.phone" placeholder="请输入联系电话" />
        </el-form-item>
        <el-form-item label="类别" prop="categoryName">
          <el-input v-model="supplierForm.categoryName" placeholder="如：原材料、设备等" />
        </el-form-item>
        <el-form-item label="地址">
          <el-input
            v-model="supplierForm.address"
            type="textarea"
            :rows="3"
            placeholder="请输入地址"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="supplierDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitSupplierForm" :loading="submitting">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  findPurchaseOrderList,
  findSupplierList,
  createPurchaseOrder,
  updatePurchaseOrder,
  deletePurchaseOrder,
  approvePurchaseOrder,
  receiveGoods,
  findPurchaseOrderItems,
  createSupplier,
  updateSupplier,
  deleteSupplier
} from '@/api/erp/purchaseService'
import { findProductList } from '@/api/erp/productService'

export default {
  name: 'ERPPurchase',
  data() {
    return {
      activeTab: 'orders',
      searchText: '',
      loading: false,
      purchaseOrders: [],
      suppliers: [],
      products: [],
      pagination: {
        page: 1,
        pageSize: 20,
        total: 0
      },
      // 采购订单编辑对话框
      orderDialogVisible: false,
      orderDialogTitle: '新建采购订单',
      orderForm: {
        id: '',
        supplierId: '',
        supplierName: '',
        contactName: '',
        phone: '',
        deliveryDate: null,
        remark: '',
        items: []
      },
      orderRules: {
        supplierId: [{ required: true, message: '请选择供应商', trigger: 'change' }],
        contactName: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }]
      },
      // 供应商编辑对话框
      supplierDialogVisible: false,
      supplierDialogTitle: '新增供应商',
      supplierForm: {
        id: '',
        name: '',
        contactName: '',
        phone: '',
        categoryName: '',
        address: ''
      },
      supplierRules: {
        name: [{ required: true, message: '请输入供应商名称', trigger: 'blur' }],
        contactName: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }]
      },
      // 选项数据
      supplierOptions: [],
      productOptions: [],
      submitting: false
    }
  },
  computed: {
    orderTotalAmount() {
      return this.orderForm.items.reduce((sum, item) => {
        return sum + (item.quantity || 0) * (item.price || 0)
      }, 0)
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      try {
        this.loading = true
        await this.loadPurchaseOrders()
      } catch (error) {
        console.error('加载数据失败:', error)
      } finally {
        this.loading = false
      }
    },
    async loadPurchaseOrders() {
      try {
        const res = await findPurchaseOrderList({
          page: this.pagination.page,
          pageSize: this.pagination.pageSize,
          keyword: this.searchText
        })
        if (res?.items) {
          this.purchaseOrders = res.items.map(item => ({
            id: item.orderNo || '',
            supplier: item.supplierName || '',
            amount: `¥${(item.totalAmount || 0).toLocaleString()}`,
            items: item.itemCount || 0,
            status: this.getPurchaseOrderStatus(item.status),
            date: this.formatDate(item.createdAt),
            deliveryDate: this.formatDate(item.deliveryDate)
          }))
          this.pagination.total = res.total || 0
        }
      } catch (error) {
        console.error('加载采购订单失败:', error)
        this.$message.error('加载采购订单失败')
      }
    },
    async loadSuppliers() {
      if (this.suppliers.length > 0) return
      try {
        const res = await findSupplierList({
          page: 1,
          pageSize: 100
        })
        if (res?.items) {
          this.suppliers = res.items.map(item => ({
            id: item.id,
            name: item.name || '',
            contact: item.contactName || '',
            phone: item.phone || '',
            category: item.categoryName || '',
            rating: item.rating || 5,
            orders: item.orderCount || 0
          }))
        }
      } catch (error) {
        console.error('加载供应商列表失败:', error)
      }
    },
    async loadProducts() {
      if (this.products.length > 0) return
      try {
        const res = await findProductList({
          page: 1,
          pageSize: 100
        })
        if (res?.items) {
          this.products = res.items.map(item => ({
            id: item.id,
            code: item.code || '',
            name: item.name || '',
            category: item.categoryName || '',
            spec: item.spec || '',
            unit: item.unit || '',
            costPrice: `¥${(item.costPrice || 0).toFixed(2)}`,
            stock: item.stock || 0,
            minStock: item.minStock || 0,
            supplier: item.supplierName || '',
            status: this.getStockStatus(item.stock, item.minStock)
          }))
        }
      } catch (error) {
        console.error('加载商品列表失败:', error)
      }
    },
    handleTabClick(tab) {
      if (tab.name === 'suppliers') {
        this.loadSuppliers()
      } else if (tab.name === 'products') {
        this.loadProducts()
      }
    },
    getPurchaseOrderStatus(status) {
      const statusMap = {
        1: '待审核',
        2: '已审核',
        3: '已收货',
        4: '已取消'
      }
      return statusMap[status] || '未知'
    },
    getStockStatus(quantity, minStock) {
      if (!quantity || !minStock) return 'normal'
      const ratio = quantity / minStock
      if (ratio < 0.2) return 'critical'
      if (ratio < 0.5) return 'low'
      return 'normal'
    },
    formatDate(timestamp) {
      if (!timestamp) return ''
      const date = new Date(timestamp * 1000)
      return date.toLocaleDateString('zh-CN')
    },
    handleCreate() {
      this.orderDialogTitle = '新建采购订单'
      this.orderDialogVisible = true
      this.loadSupplierOptions()
      this.loadProductOptions()
    },
    handleEditOrder(row) {
      this.orderDialogTitle = '编辑采购订单'
      this.orderDialogVisible = true
      this.loadSupplierOptions()
      this.loadProductOptions()
      // TODO: 加载订单详情数据
    },
    async handleDeleteOrder(row) {
      try {
        await this.$confirm('确认删除该采购订单吗？此操作不可恢复。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await deletePurchaseOrder({ id: row.id })
        this.$message.success('删除成功')
        this.loadPurchaseOrders()
      } catch (error) {
        if (error !== 'cancel') {
          console.error('删除失败:', error)
          this.$message.error('删除失败')
        }
      }
    },
    async submitOrderForm() {
      this.$refs.orderForm.validate(async (valid) => {
        if (!valid) return
        if (this.orderForm.items.length === 0) {
          this.$message.warning('请至少添加一条订单明细')
          return
        }
        try {
          this.submitting = true
          const apiCall = this.orderForm.id ? updatePurchaseOrder : createPurchaseOrder
          await apiCall({
            id: this.orderForm.id || undefined,
            supplierId: this.orderForm.supplierId,
            supplierName: this.orderForm.supplierName,
            contactName: this.orderForm.contactName,
            phone: this.orderForm.phone,
            deliveryDate: this.orderForm.deliveryDate ? Math.floor(this.orderForm.deliveryDate / 1000) : undefined,
            remark: this.orderForm.remark,
            items: this.orderForm.items
          })
          this.$message.success(this.orderForm.id ? '更新成功' : '创建成功')
          this.orderDialogVisible = false
          this.loadPurchaseOrders()
        } catch (error) {
          console.error('提交失败:', error)
          this.$message.error('操作失败')
        } finally {
          this.submitting = false
        }
      })
    },
    resetOrderForm() {
      this.orderForm = {
        id: '',
        supplierId: '',
        supplierName: '',
        contactName: '',
        phone: '',
        deliveryDate: null,
        remark: '',
        items: []
      }
    },
    async loadSupplierOptions() {
      try {
        const res = await findSupplierList({ page: 1, pageSize: 1000 })
        if (res?.items) {
          this.supplierOptions = res.items
        }
      } catch (error) {
        console.error('加载供应商选项失败:', error)
      }
    },
    async loadProductOptions() {
      try {
        const res = await findProductList({ page: 1, pageSize: 1000 })
        if (res?.items) {
          this.productOptions = res.items
        }
      } catch (error) {
        console.error('加载商品选项失败:', error)
      }
    },
    handleSupplierChange(supplierId) {
      const supplier = this.supplierOptions.find(s => s.id === supplierId)
      if (supplier) {
        this.orderForm.supplierName = supplier.name
        this.orderForm.contactName = supplier.contactName || ''
        this.orderForm.phone = supplier.phone || ''
      }
    },
    addOrderItem() {
      this.orderForm.items.push({
        productId: '',
        productName: '',
        quantity: 1,
        price: 0
      })
    },
    handleProductChange(index) {
      const product = this.productOptions.find(p => p.id === this.orderForm.items[index].productId)
      if (product) {
        this.orderForm.items[index].productName = product.name
        this.orderForm.items[index].price = product.costPrice || 0
      }
    },
    removeOrderItem(index) {
      this.orderForm.items.splice(index, 1)
    },
    // 供应商 CRUD
    handleCreateSupplier() {
      this.supplierDialogTitle = '新增供应商'
      this.supplierDialogVisible = true
    },
    handleEditSupplier(row) {
      this.supplierDialogTitle = '编辑供应商'
      this.supplierDialogVisible = true
      this.supplierForm = {
        id: row.id,
        name: row.name,
        contactName: row.contact,
        phone: row.phone,
        categoryName: row.category,
        address: row.address || ''
      }
    },
    async handleDeleteSupplier(row) {
      try {
        await this.$confirm('确认删除该供应商吗？此操作不可恢复。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await deleteSupplier({ id: row.id })
        this.$message.success('删除成功')
        this.loadSuppliers()
      } catch (error) {
        if (error !== 'cancel') {
          console.error('删除失败:', error)
          this.$message.error('删除失败')
        }
      }
    },
    async submitSupplierForm() {
      this.$refs.supplierForm.validate(async (valid) => {
        if (!valid) return
        try {
          this.submitting = true
          const apiCall = this.supplierForm.id ? updateSupplier : createSupplier
          await apiCall(this.supplierForm)
          this.$message.success(this.supplierForm.id ? '更新成功' : '创建成功')
          this.supplierDialogVisible = false
          this.loadSuppliers()
        } catch (error) {
          console.error('提交失败:', error)
          this.$message.error('操作失败')
        } finally {
          this.submitting = false
        }
      })
    },
    resetSupplierForm() {
      this.supplierForm = {
        id: '',
        name: '',
        contactName: '',
        phone: '',
        categoryName: '',
        address: ''
      }
    },
    getPurchaseStatusType(status) {
      const map = {
        '已收货': 'success',
        '已审核': 'primary',
        '待收货': 'warning',
        '待审核': 'info'
      }
      return map[status] || 'info'
    },
    getStockClass(row) {
      if (row.status === 'critical') return 'text-danger'
      if (row.status === 'low') return 'text-warning'
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.erp-purchase {
  padding: 20px;

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 16px;

    .page-title {
      h1 {
        font-size: 24px;
        font-weight: bold;
        color: #303133;
        margin: 0 0 4px 0;
      }

      p {
        font-size: 14px;
        color: #909399;
        margin: 0;
      }
    }
  }

  .tab-card {
    .tab-toolbar {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }

    .link-text {
      color: #409EFF;
      cursor: pointer;
    }
  }
}

.text-danger {
  color: #F56C6C;
}

.text-warning {
  color: #E6A23C;
}

@media (max-width: 768px) {
  .erp-purchase {
    padding: 12px;

    .page-header {
      flex-direction: column;

      .page-title {
        h1 {
          font-size: 20px;
        }
      }
    }

    .tab-card {
      .tab-toolbar {
        flex-direction: column;

        .el-input {
          width: 100% !important;
        }
      }
    }
  }
}
</style>
