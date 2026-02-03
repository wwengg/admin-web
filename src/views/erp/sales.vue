<template>
  <div class="erp-sales">
    <!-- 页面标题和操作栏 -->
    <div class="page-header">
      <div class="page-title">
        <h1>销售管理</h1>
        <p>管理销售订单和客户信息</p>
      </div>
      <el-button type="primary" icon="el-icon-plus" @click="handleCreate">新建销售订单</el-button>
    </div>

    <!-- 统计卡片 -->
    <el-row :gutter="16" class="stats-row">
      <el-col :xs="12" :sm="12" :md="6" :lg="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-title">本月销售额</div>
          <div class="stat-value">{{ statistics.monthlySales }}</div>
          <div class="stat-change text-success">实时统计</div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-title">本月订单数</div>
          <div class="stat-value">{{ statistics.monthlyOrderCount }}</div>
          <div class="stat-change text-success">实时统计</div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-title">待处理订单</div>
          <div class="stat-value">{{ statistics.pendingOrders }}</div>
          <div class="stat-change text-danger">需及时处理</div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-title">活跃客户数</div>
          <div class="stat-value">{{ statistics.activeCustomers }}</div>
          <div class="stat-change">本月有订单</div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 标签页 -->
    <el-card class="tab-card">
      <el-tabs v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane label="销售订单" name="orders">
          <div class="tab-toolbar">
            <el-input
              v-model="searchText"
              placeholder="搜索订单..."
              prefix-icon="el-icon-search"
              style="width: 300px;"
              @change="loadSalesOrders"
            />
            <el-button icon="el-icon-filter">筛选</el-button>
            <el-button icon="el-icon-download">导出</el-button>
          </div>
          <el-table :data="salesOrders" v-loading="loading" style="width: 100%">
            <el-table-column prop="id" label="订单编号" width="140">
              <template slot-scope="scope">
                <span class="link-text">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="customer" label="客户名称" show-overflow-tooltip />
            <el-table-column prop="contact" label="联系人" width="90" class-name="hidden-md-and-down" />
            <el-table-column prop="amount" label="金额" width="100" />
            <el-table-column prop="status" label="状态" width="90">
              <template slot-scope="scope">
                <el-tag :type="getSalesStatusType(scope.row.status)" size="small">
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
            <el-table-column label="商品名称" width="180">
              <template slot-scope="scope">
                <div class="product-name">
                  <span>{{ scope.row.name }}</span>
                  <el-tag v-if="scope.row.status === 'hot'" type="danger" size="mini">热销</el-tag>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="category" label="分类" width="100" class-name="hidden-md-and-down">
              <template slot-scope="scope">
                <el-tag type="success" size="mini">{{ scope.row.category }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="spec" label="规格" width="180" class-name="hidden-lg-and-down" />
            <el-table-column label="售价" width="120">
              <template slot-scope="scope">
                <div>
                  <div class="sale-price">{{ scope.row.salePrice }}/{{ scope.row.unit }}</div>
                  <div class="cost-price">成本: {{ scope.row.costPrice }}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="库存" width="90">
              <template slot-scope="scope">
                <span class="stock-text">{{ scope.row.stock }}</span>
                <span style="color: #909399; margin-left: 4px;">{{ scope.row.unit }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="monthSales" label="月销量" width="90" class-name="hidden-xl-and-down">
              <template slot-scope="scope">
                {{ scope.row.monthSales }} {{ scope.row.unit }}
              </template>
            </el-table-column>
            <el-table-column label="操作" width="80">
              <template slot-scope="scope">
                <el-button type="text" size="small">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="客户管理" name="customers">
          <div class="tab-toolbar">
            <el-input
              v-model="searchText"
              placeholder="搜索客户..."
              prefix-icon="el-icon-search"
              style="width: 300px;"
            />
            <el-button icon="el-icon-filter">筛选</el-button>
            <el-button icon="el-icon-download">导出</el-button>
            <el-button type="primary" icon="el-icon-plus" @click="handleCreateCustomer">新增客户</el-button>
          </div>
          <el-table :data="customers" style="width: 100%">
            <el-table-column prop="name" label="客户名称" show-overflow-tooltip />
            <el-table-column prop="contact" label="联系人" width="90" />
            <el-table-column prop="phone" label="电话" width="130" class-name="hidden-md-and-down" />
            <el-table-column prop="level" label="级别" width="90" class-name="hidden-lg-and-down">
              <template slot-scope="scope">
                <el-tag :type="getCustomerLevelType(scope.row.level)" size="small">
                  {{ scope.row.level }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="totalOrders" label="订单总数" width="100" class-name="hidden-xl-and-down" />
            <el-table-column prop="totalAmount" label="累计金额" width="110" />
            <el-table-column label="操作" width="150">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="handleEditCustomer(scope.row)">编辑</el-button>
                <el-button type="text" size="small" style="color: #F56C6C;" @click="handleDeleteCustomer(scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>

    <!-- 销售订单编辑对话框 -->
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
        <el-form-item label="客户名称" prop="customerName">
          <el-select
            v-model="orderForm.customerId"
            filterable
            placeholder="请选择客户"
            style="width: 100%;"
            @change="handleCustomerChange"
          >
            <el-option
              v-for="customer in customerOptions"
              :key="customer.id"
              :label="customer.name"
              :value="customer.id"
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

    <!-- 客户编辑对话框 -->
    <el-dialog
      :title="customerDialogTitle"
      :visible.sync="customerDialogVisible"
      :close-on-click-modal="false"
      width="600px"
      @close="resetCustomerForm"
    >
      <el-form
        ref="customerForm"
        :model="customerForm"
        :rules="customerRules"
        label-width="100px"
      >
        <el-form-item label="客户名称" prop="name">
          <el-input v-model="customerForm.name" placeholder="请输入客户名称" />
        </el-form-item>
        <el-form-item label="联系人" prop="contactName">
          <el-input v-model="customerForm.contactName" placeholder="请输入联系人" />
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="customerForm.phone" placeholder="请输入联系电话" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="customerForm.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="级别" prop="level">
          <el-radio-group v-model="customerForm.level">
            <el-radio :label="1">VIP</el-radio>
            <el-radio :label="2">重要</el-radio>
            <el-radio :label="3">普通</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="地址">
          <el-input
            v-model="customerForm.address"
            type="textarea"
            :rows="3"
            placeholder="请输入地址"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="customerDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitCustomerForm" :loading="submitting">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  findSalesOrderList,
  findCustomerList,
  getStatistics,
  createSalesOrder,
  updateSalesOrder,
  deleteSalesOrder,
  approveSalesOrder,
  shipment,
  findSalesOrderItems,
  createCustomer,
  updateCustomer,
  deleteCustomer
} from '@/api/erp/salesService'
import { findProductList } from '@/api/erp/productService'

export default {
  name: 'ERPSales',
  data() {
    return {
      activeTab: 'orders',
      searchText: '',
      loading: false,
      salesOrders: [],
      customers: [],
      products: [],
      statistics: {
        monthlySales: '¥0',
        monthlyOrderCount: 0,
        pendingOrders: 0,
        activeCustomers: 0
      },
      pagination: {
        page: 1,
        pageSize: 20,
        total: 0
      },
      // 销售订单编辑对话框
      orderDialogVisible: false,
      orderDialogTitle: '新建销售订单',
      orderForm: {
        id: '',
        customerId: '',
        customerName: '',
        contactName: '',
        phone: '',
        deliveryDate: null,
        remark: '',
        items: []
      },
      orderRules: {
        customerId: [{ required: true, message: '请选择客户', trigger: 'change' }],
        contactName: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }]
      },
      // 客户编辑对话框
      customerDialogVisible: false,
      customerDialogTitle: '新增客户',
      customerForm: {
        id: '',
        name: '',
        contactName: '',
        phone: '',
        email: '',
        level: 3,
        address: ''
      },
      customerRules: {
        name: [{ required: true, message: '请输入客户名称', trigger: 'blur' }],
        contactName: [{ required: true, message: '请输入联系人', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }]
      },
      // 选项数据
      customerOptions: [],
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
        await Promise.all([
          this.loadSalesOrders(),
          this.loadStatistics()
        ])
      } catch (error) {
        console.error('加载数据失败:', error)
      } finally {
        this.loading = false
      }
    },
    async loadSalesOrders() {
      try {
        const res = await findSalesOrderList({
          page: this.pagination.page,
          pageSize: this.pagination.pageSize,
          keyword: this.searchText
        })
        if (res?.items) {
          this.salesOrders = res.items.map(item => ({
            id: item.orderNo || '',
            customer: item.customerName || '',
            contact: item.contactName || '',
            amount: `¥${(item.totalAmount || 0).toLocaleString()}`,
            items: item.itemCount || 0,
            status: this.getSalesOrderStatus(item.status),
            date: this.formatDate(item.createdAt),
            deliveryDate: this.formatDate(item.deliveryDate)
          }))
          this.pagination.total = res.total || 0
        }
      } catch (error) {
        console.error('加载销售订单失败:', error)
        this.$message.error('加载销售订单失败')
      }
    },
    async loadCustomers() {
      if (this.customers.length > 0) return
      try {
        const res = await findCustomerList({
          page: 1,
          pageSize: 100
        })
        if (res?.items) {
          this.customers = res.items.map(item => ({
            id: item.id,
            name: item.name || '',
            contact: item.contactName || '',
            phone: item.phone || '',
            email: item.email || '',
            level: this.getCustomerLevel(item.level),
            totalOrders: item.orderCount || 0,
            totalAmount: `¥${(item.totalAmount || 0).toLocaleString()}`
          }))
        }
      } catch (error) {
        console.error('加载客户列表失败:', error)
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
            salePrice: `¥${(item.salePrice || 0).toFixed(2)}`,
            stock: item.stock || 0,
            monthSales: item.monthlySales || 0,
            status: item.monthlySales > 500 ? 'hot' : 'normal'
          }))
        }
      } catch (error) {
        console.error('加载商品列表失败:', error)
      }
    },
    async loadStatistics() {
      try {
        const res = await getStatistics({})
        if (res) {
          this.statistics = {
            monthlySales: `¥${(res.monthlySales || 0).toLocaleString()}`,
            monthlyOrderCount: res.monthlyOrderCount || 0,
            pendingOrders: res.pendingOrders || 0,
            activeCustomers: res.activeCustomers || 0
          }
        }
      } catch (error) {
        console.error('加载统计数据失败:', error)
      }
    },
    handleTabClick(tab) {
      if (tab.name === 'customers') {
        this.loadCustomers()
      } else if (tab.name === 'products') {
        this.loadProducts()
      }
    },
    getSalesOrderStatus(status) {
      const statusMap = {
        1: '待审核',
        2: '已审核',
        3: '生产中',
        4: '待发货',
        5: '已发货',
        6: '已完成',
        7: '已取消'
      }
      return statusMap[status] || '未知'
    },
    getCustomerLevel(level) {
      const levelMap = {
        1: 'VIP',
        2: '重要',
        3: '普通'
      }
      return levelMap[level] || '普通'
    },
    formatDate(timestamp) {
      if (!timestamp) return ''
      const date = new Date(timestamp * 1000)
      return date.toLocaleDateString('zh-CN')
    },
    handleCreate() {
      this.orderDialogTitle = '新建销售订单'
      this.orderDialogVisible = true
      this.loadCustomerOptions()
      this.loadProductOptions()
    },
    handleEditOrder(row) {
      this.orderDialogTitle = '编辑销售订单'
      this.orderDialogVisible = true
      this.loadCustomerOptions()
      this.loadProductOptions()
      // TODO: 加载订单详情数据
    },
    async handleDeleteOrder(row) {
      try {
        await this.$confirm('确认删除该销售订单吗？此操作不可恢复。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await deleteSalesOrder({ id: row.id })
        this.$message.success('删除成功')
        this.loadSalesOrders()
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
          const apiCall = this.orderForm.id ? updateSalesOrder : createSalesOrder
          await apiCall({
            id: this.orderForm.id || undefined,
            customerId: this.orderForm.customerId,
            customerName: this.orderForm.customerName,
            contactName: this.orderForm.contactName,
            phone: this.orderForm.phone,
            deliveryDate: this.orderForm.deliveryDate ? Math.floor(this.orderForm.deliveryDate / 1000) : undefined,
            remark: this.orderForm.remark,
            items: this.orderForm.items
          })
          this.$message.success(this.orderForm.id ? '更新成功' : '创建成功')
          this.orderDialogVisible = false
          this.loadSalesOrders()
          this.loadStatistics()
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
        customerId: '',
        customerName: '',
        contactName: '',
        phone: '',
        deliveryDate: null,
        remark: '',
        items: []
      }
    },
    async loadCustomerOptions() {
      try {
        const res = await findCustomerList({ page: 1, pageSize: 1000 })
        if (res?.items) {
          this.customerOptions = res.items
        }
      } catch (error) {
        console.error('加载客户选项失败:', error)
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
    handleCustomerChange(customerId) {
      const customer = this.customerOptions.find(c => c.id === customerId)
      if (customer) {
        this.orderForm.customerName = customer.name
        this.orderForm.contactName = customer.contactName || ''
        this.orderForm.phone = customer.phone || ''
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
        this.orderForm.items[index].price = product.salePrice || 0
      }
    },
    removeOrderItem(index) {
      this.orderForm.items.splice(index, 1)
    },
    // 客户 CRUD
    handleCreateCustomer() {
      this.customerDialogTitle = '新增客户'
      this.customerDialogVisible = true
    },
    handleEditCustomer(row) {
      this.customerDialogTitle = '编辑客户'
      this.customerDialogVisible = true
      this.customerForm = {
        id: row.id,
        name: row.name,
        contactName: row.contact,
        phone: row.phone,
        email: row.email || '',
        level: row.level === 'VIP' ? 1 : row.level === '重要' ? 2 : 3,
        address: row.address || ''
      }
    },
    async handleDeleteCustomer(row) {
      try {
        await this.$confirm('确认删除该客户吗？此操作不可恢复。', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await deleteCustomer({ id: row.id })
        this.$message.success('删除成功')
        this.loadCustomers()
      } catch (error) {
        if (error !== 'cancel') {
          console.error('删除失败:', error)
          this.$message.error('删除失败')
        }
      }
    },
    async submitCustomerForm() {
      this.$refs.customerForm.validate(async (valid) => {
        if (!valid) return
        try {
          this.submitting = true
          const apiCall = this.customerForm.id ? updateCustomer : createCustomer
          await apiCall(this.customerForm)
          this.$message.success(this.customerForm.id ? '更新成功' : '创建成功')
          this.customerDialogVisible = false
          this.loadCustomers()
        } catch (error) {
          console.error('提交失败:', error)
          this.$message.error('操作失败')
        } finally {
          this.submitting = false
        }
      })
    },
    resetCustomerForm() {
      this.customerForm = {
        id: '',
        name: '',
        contactName: '',
        phone: '',
        email: '',
        level: 3,
        address: ''
      }
    },
    getSalesStatusType(status) {
      const map = {
        '已完成': 'success',
        '已审核': 'primary',
        '生产中': 'primary',
        '待发货': 'info',
        '待审核': 'warning'
      }
      return map[status] || 'info'
    },
    getCustomerLevelType(level) {
      const map = {
        'VIP': 'danger',
        '重要': 'primary',
        '普通': 'info'
      }
      return map[level] || 'info'
    }
  }
}
</script>

<style lang="scss" scoped>
.erp-sales {
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

  .stats-row {
    margin-bottom: 20px;

    .stat-card {
      margin-bottom: 16px;

      .stat-title {
        font-size: 14px;
        color: #606266;
        margin-bottom: 8px;
      }

      .stat-value {
        font-size: 24px;
        font-weight: bold;
        color: #303133;
        margin-bottom: 8px;
      }

      .stat-change {
        font-size: 12px;

        &.text-success {
          color: #67C23A;
        }

        &.text-danger {
          color: #F56C6C;
        }
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

    .product-name {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .sale-price {
      font-weight: 500;
      color: #303133;
    }

    .cost-price {
      font-size: 12px;
      color: #909399;
    }

    .stock-text {
      font-weight: 500;
      color: #303133;
    }
  }
}

.text-success {
  color: #67C23A;
}

.text-danger {
  color: #F56C6C;
}

@media (max-width: 768px) {
  .erp-sales {
    padding: 12px;

    .page-header {
      flex-direction: column;

      .page-title {
        h1 {
          font-size: 20px;
        }
      }
    }

    .stats-row {
      .stat-card {
        .stat-value {
          font-size: 20px !important;
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
