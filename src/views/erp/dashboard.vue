<template>
  <div class="erp-dashboard" v-loading="loading">
    <!-- 统计卡片 -->
    <el-row :gutter="16" class="stats-row">
      <el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="(stat, index) in stats" :key="index">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-content">
            <div class="stat-info">
              <div class="stat-title">{{ stat.title }}</div>
              <div class="stat-value">{{ stat.value }}</div>
              <div class="stat-change" :class="stat.trend === 'up' ? 'text-success' : 'text-danger'">
                <i :class="stat.trend === 'up' ? 'el-icon-top' : 'el-icon-bottom'"></i>
                {{ stat.change }}
              </div>
            </div>
            <div class="stat-icon" :class="stat.color">
              <i :class="stat.iconClass"></i>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="16" class="content-row">
      <!-- 最近订单 -->
      <el-col :xs="24" :sm="24" :md="16" :lg="16">
        <el-card class="content-card">
          <div slot="header" class="card-header">
            <span>最近订单</span>
          </div>
          <el-table :data="recentOrders" style="width: 100%">
            <el-table-column prop="id" label="订单编号" width="140">
              <template slot-scope="scope">
                <span class="link-text">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="customer" label="客户名称" show-overflow-tooltip />
            <el-table-column prop="amount" label="金额" width="100" />
            <el-table-column prop="status" label="状态" width="80">
              <template slot-scope="scope">
                <el-tag :type="getStatusType(scope.row.status)" size="small">
                  {{ scope.row.status }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="date" label="日期" width="110" class-name="hidden-md-and-down" />
          </el-table>
        </el-card>
      </el-col>

      <!-- 库存预警 -->
      <el-col :xs="24" :sm="24" :md="8" :lg="8">
        <el-card class="content-card">
          <div slot="header" class="card-header">
            <span>库存预警</span>
          </div>
          <div class="inventory-alerts">
            <div v-for="(item, index) in inventoryAlerts" :key="index" class="alert-item">
              <div class="alert-header">
                <span class="alert-name">{{ item.product }}</span>
                <el-tag :type="item.status === 'critical' ? 'danger' : item.status === 'low' ? 'warning' : 'success'" size="mini">
                  {{ item.status === 'critical' ? '紧急' : item.status === 'low' ? '偏低' : '正常' }}
                </el-tag>
              </div>
              <div class="alert-stock">
                <span>当前: {{ item.stock }}</span>
                <span>最小: {{ item.minStock }}</span>
              </div>
              <el-progress
                :percentage="Math.min((item.stock / item.minStock) * 100, 100)"
                :color="item.status === 'critical' ? '#F56C6C' : item.status === 'low' ? '#E6A23C' : '#67C23A'"
                :show-text="false"
              />
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getStatistics as getSalesStatistics, findSalesOrderList } from '@/api/erp/salesService'
import { getStatistics as getInventoryStatistics, getAlerts } from '@/api/erp/inventoryService'
import { findProductionOrderList } from '@/api/erp/productionService'
import { findPurchaseOrderList } from '@/api/erp/purchaseService'

export default {
  name: 'ERPDashboard',
  data() {
    return {
      loading: false,
      stats: [
        {
          title: '今日销售额',
          value: '¥0',
          change: '实时统计',
          trend: 'up',
          iconClass: 'el-icon-coin',
          color: 'bg-green'
        },
        {
          title: '待处理订单',
          value: '0',
          change: '需及时处理',
          trend: 'down',
          iconClass: 'el-icon-shopping-cart-2',
          color: 'bg-blue'
        },
        {
          title: '库存总值',
          value: '¥0',
          change: '实时统计',
          trend: 'up',
          iconClass: 'el-icon-box',
          color: 'bg-purple'
        },
        {
          title: '生产中工单',
          value: '0',
          change: '进行中',
          trend: 'up',
          iconClass: 'el-icon-setting',
          color: 'bg-orange'
        }
      ],
      recentOrders: [],
      inventoryAlerts: []
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
          this.loadSalesStats(),
          this.loadInventoryStats(),
          this.loadRecentOrders(),
          this.loadInventoryAlerts()
        ])
      } catch (error) {
        console.error('加载数据失败:', error)
      } finally {
        this.loading = false
      }
    },
    async loadSalesStats() {
      try {
        const res = await getSalesStatistics({})
        if (res) {
          this.stats[0].value = `¥${(res.todaySales || 0).toLocaleString()}`
          this.stats[1].value = `${res.pendingOrders || 0}`
        }
      } catch (error) {
        console.error('加载销售统计失败:', error)
      }
    },
    async loadInventoryStats() {
      try {
        const res = await getInventoryStatistics({})
        if (res) {
          this.stats[2].value = `¥${(res.totalValue || 0).toLocaleString()}`
        }
      } catch (error) {
        console.error('加载库存统计失败:', error)
      }
    },
    async loadProductionStats() {
      try {
        const res = await findProductionOrderList({
          page: 1,
          pageSize: 1,
          status: 2 // 生产中
        })
        if (res?.total !== undefined) {
          this.stats[3].value = `${res.total}`
        }
      } catch (error) {
        console.error('加载生产统计失败:', error)
      }
    },
    async loadRecentOrders() {
      try {
        const res = await findSalesOrderList({
          page: 1,
          pageSize: 5
        })
        if (res?.items) {
          this.recentOrders = res.items.map(item => ({
            id: item.orderNo || '',
            customer: item.customerName || '',
            amount: `¥${(item.totalAmount || 0).toLocaleString()}`,
            status: this.getSalesOrderStatus(item.status),
            date: this.formatDate(item.createdAt)
          }))
        }
      } catch (error) {
        console.error('加载最近订单失败:', error)
      }
    },
    async loadInventoryAlerts() {
      try {
        const res = await getAlerts({})
        if (res?.items) {
          this.inventoryAlerts = res.items.slice(0, 5).map(item => ({
            product: `${item.productCode} ${item.productName}`,
            stock: item.currentStock || 0,
            minStock: item.minStock || 0,
            status: this.getAlertStatus(item.currentStock, item.minStock)
          }))
        }
      } catch (error) {
        console.error('加载库存预警失败:', error)
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
    getAlertStatus(stock, minStock) {
      if (!stock || !minStock) return 'normal'
      const ratio = stock / minStock
      if (ratio < 0.2) return 'critical'
      if (ratio < 0.5) return 'low'
      return 'normal'
    },
    formatDate(timestamp) {
      if (!timestamp) return ''
      const date = new Date(timestamp * 1000)
      return date.toLocaleDateString('zh-CN')
    },
    getStatusType(status) {
      const statusMap = {
        '已完成': 'success',
        '待审核': 'warning',
        '生产中': 'primary',
        '待发货': 'info'
      }
      return statusMap[status] || 'info'
    }
  }
}
</script>

<style lang="scss" scoped>
.erp-dashboard {
  padding: 20px;

  .stats-row {
    margin-bottom: 20px;
  }

  .content-row {
    margin-top: 0;
  }

  .stat-card {
    margin-bottom: 16px;

    .stat-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .stat-info {
      flex: 1;

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
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 4px;

        &.text-success {
          color: #67C23A;
        }

        &.text-danger {
          color: #F56C6C;
        }
      }
    }

    .stat-icon {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 20px;

      &.bg-green {
        background-color: #67C23A;
      }

      &.bg-blue {
        background-color: #409EFF;
      }

      &.bg-purple {
        background-color: #9C27B0;
      }

      &.bg-orange {
        background-color: #E6A23C;
      }
    }
  }

  .content-card {
    margin-bottom: 20px;

    .card-header {
      font-weight: 600;
      color: #303133;
    }

    .link-text {
      color: #409EFF;
      cursor: pointer;
    }
  }

  .inventory-alerts {
    .alert-item {
      border: 1px solid #EBEEF5;
      border-radius: 4px;
      padding: 12px;
      margin-bottom: 12px;

      &:last-child {
        margin-bottom: 0;
      }

      .alert-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        .alert-name {
          font-size: 14px;
          font-weight: 500;
          color: #303133;
        }
      }

      .alert-stock {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #909399;
        margin-bottom: 8px;
      }
    }
  }
}

@media (max-width: 768px) {
  .erp-dashboard {
    padding: 12px;

    .stat-card {
      .stat-value {
        font-size: 20px !important;
      }
    }
  }
}
</style>
