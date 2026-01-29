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
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-card>
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
      }
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
      this.$message.info('新建采购订单功能开发中')
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
