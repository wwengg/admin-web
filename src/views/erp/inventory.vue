<template>
  <div class="erp-inventory">
    <!-- 页面标题和操作栏 -->
    <div class="page-header">
      <div class="page-title">
        <h1>库存管理</h1>
        <p>管理库存物料和出入库记录</p>
      </div>
      <div class="page-actions">
        <el-button icon="el-icon-download" @click="handleStocktake">库存盘点</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="handleCreate">新增物料</el-button>
      </div>
    </div>

    <!-- 统计卡片 -->
    <el-row :gutter="16" class="stats-row">
      <el-col :xs="12" :sm="12" :md="6" :lg="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-title">库存总价值</div>
          <div class="stat-value">{{ statistics.totalValue }}</div>
          <div class="stat-change text-success">
            <i class="el-icon-top"></i>
            <span>实时统计</span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-title">物料种类</div>
          <div class="stat-value">{{ statistics.itemTypes }}</div>
          <div class="stat-change">活跃: {{ statistics.activeTypes }}</div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-title">
            <i class="el-icon-warning" style="color: #E6A23C;"></i>
            <span>库存预警</span>
          </div>
          <div class="stat-value text-warning">{{ statistics.alertCount }}</div>
          <div class="stat-change text-danger">需关注</div>
        </el-card>
      </el-col>
      <el-col :xs="12" :sm="12" :md="6" :lg="6">
        <el-card shadow="hover" class="stat-card">
          <div class="stat-title">本月周转</div>
          <div class="stat-value">{{ statistics.monthlyMovements }}</div>
          <div class="stat-change">出入库次数</div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 标签页 -->
    <el-card class="tab-card">
      <el-tabs v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane label="库存列表" name="inventory">
          <div class="tab-toolbar">
            <el-input
              v-model="searchText"
              placeholder="搜索..."
              prefix-icon="el-icon-search"
              style="width: 300px;"
              @change="loadInventoryList"
            />
            <el-button icon="el-icon-filter">筛选</el-button>
            <el-button icon="el-icon-download">导出</el-button>
          </div>
          <el-table :data="inventoryItems" v-loading="loading" style="width: 100%">
            <el-table-column prop="code" label="物料编码" width="110">
              <template slot-scope="scope">
                <span class="link-text">{{ scope.row.code }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="物料名称" show-overflow-tooltip />
            <el-table-column prop="category" label="分类" width="90" class-name="hidden-md-and-down">
              <template slot-scope="scope">
                <el-tag type="primary" size="mini">{{ scope.row.category }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="库存" width="90">
              <template slot-scope="scope">
                <span class="stock-text">{{ scope.row.stock }}</span>
                <span style="color: #909399; margin-left: 4px;">{{ scope.row.unit }}</span>
              </template>
            </el-table-column>
            <el-table-column label="状态" width="90" class-name="hidden-lg-and-down">
              <template slot-scope="scope">
                <span v-if="scope.row.status === 'critical'" class="text-danger">
                  <i class="el-icon-warning"></i>
                  <span class="status-text">紧急</span>
                </span>
                <span v-else-if="scope.row.status === 'low'" class="text-warning">
                  <i class="el-icon-bottom"></i>
                  <span class="status-text">偏低</span>
                </span>
                <span v-else class="text-success">
                  <i class="el-icon-top"></i>
                  <span class="status-text">正常</span>
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="totalValue" label="总价值" width="100" class-name="hidden-xl-and-down" />
            <el-table-column prop="location" label="库位" width="120" class-name="hidden-sm-and-down" />
            <el-table-column label="操作" width="80">
              <template slot-scope="scope">
                <el-button type="text" size="small">详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="出入库记录" name="movements">
          <div class="tab-toolbar">
            <el-input
              v-model="searchText"
              placeholder="搜索..."
              prefix-icon="el-icon-search"
              style="width: 300px;"
            />
            <el-button icon="el-icon-filter">筛选</el-button>
            <el-button icon="el-icon-download">导出</el-button>
          </div>
          <el-table :data="stockMovements" style="width: 100%">
            <el-table-column prop="date" label="时间" width="160" />
            <el-table-column label="物料" width="120">
              <template slot-scope="scope">
                <div>
                  <div class="link-text">{{ scope.row.code }}</div>
                  <div class="mobile-name">{{ scope.row.name }}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="type" label="类型" width="80">
              <template slot-scope="scope">
                <el-tag :type="scope.row.type === '入库' ? 'success' : 'warning'" size="small">
                  {{ scope.row.type }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="数量" width="90">
              <template slot-scope="scope">
                <span :class="scope.row.type === '入库' ? 'text-success' : 'text-danger'">
                  {{ scope.row.type === '入库' ? '+' : '-' }}{{ scope.row.quantity }}
                </span>
              </template>
            </el-table-column>
            <el-table-column prop="refNo" label="关联单号" width="120" class-name="hidden-md-and-down">
              <template slot-scope="scope">
                <span class="link-text">{{ scope.row.refNo }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="operator" label="操作员" width="90" class-name="hidden-lg-and-down" />
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="库位管理" name="locations">
          <div class="locations-header">
            <div class="location-type-toggle">
              <el-button-group>
                <el-button
                  :type="locationType === 'factory' ? 'primary' : ''"
                  @click="locationType = 'factory'"
                >
                  <i class="el-icon-office-building"></i>
                  工厂库位
                </el-button>
                <el-button
                  :type="locationType === 'store' ? 'primary' : ''"
                  @click="locationType = 'store'"
                >
                  <i class="el-icon-goods"></i>
                  门店库位
                </el-button>
              </el-button-group>
            </div>
            <el-button type="primary" icon="el-icon-plus" @click="handleCreateLocation">
              新增{{ locationType === 'factory' ? '工厂' : '门店' }}库位
            </el-button>
          </div>

          <el-row :gutter="16" class="location-cards">
            <el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="(location, index) in currentLocations" :key="index">
              <el-card
                :class="['location-card', 'status-' + location.status]"
                shadow="hover"
              >
                <div class="location-header">
                  <div class="location-info">
                    <div class="location-icon" :class="'bg-' + location.status">
                      <i :class="location.type === 'factory' ? 'el-icon-office-building' : 'el-icon-goods'"></i>
                    </div>
                    <div>
                      <h3>{{ location.zone }}</h3>
                      <p>{{ location.name }}</p>
                    </div>
                  </div>
                  <el-tag :type="getUsageTagType(location)" size="small">
                    {{ getUsagePercent(location) }}%
                  </el-tag>
                </div>

                <div class="location-address">
                  <i class="el-icon-location"></i>
                  <span>{{ location.address }}</span>
                </div>

                <div class="location-capacity">
                  <div class="capacity-label">容量使用</div>
                  <div class="capacity-value">{{ location.used }} / {{ location.capacity }}</div>
                  <el-progress
                    :percentage="getUsagePercent(location)"
                    :color="getUsageColor(location)"
                    :show-text="false"
                  />
                </div>

                <el-row :gutter="16" class="location-stats">
                  <el-col :span="12">
                    <div class="stat-item">
                      <i class="el-icon-box"></i>
                      <div>
                        <div class="stat-label">货架数</div>
                        <div class="stat-value">{{ location.shelves }}</div>
                      </div>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <div class="stat-item">
                      <i class="el-icon-goods"></i>
                      <div>
                        <div class="stat-label">物料种类</div>
                        <div class="stat-value">{{ location.itemTypes }}</div>
                      </div>
                    </div>
                  </el-col>
                </el-row>

                <div class="location-actions">
                  <el-button type="text" size="small">查看详情</el-button>
                  <el-button type="text" size="small">编辑</el-button>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-tab-pane>

        <el-tab-pane name="alerts">
          <template slot="label">
            <span>库存预警</span>
            <span class="alert-badge"></span>
          </template>
          <div class="alerts-list">
            <div
              v-for="item in alertItems"
              :key="item.code"
              :class="['alert-item', 'alert-' + item.status]"
            >
              <div class="alert-content">
                <div class="alert-header">
                  <i class="el-icon-warning" :class="'text-' + item.status"></i>
                  <h3>{{ item.code }} - {{ item.name }}</h3>
                  <el-tag :type="item.status === 'critical' ? 'danger' : 'warning'" size="small">
                    {{ item.status === 'critical' ? '紧急' : '偏低' }}
                  </el-tag>
                </div>
                <el-row :gutter="16" class="alert-details">
                  <el-col :xs="12" :sm="6" :md="6">
                    <span class="detail-label">当前: </span>
                    <span class="detail-value">{{ item.stock }} {{ item.unit }}</span>
                  </el-col>
                  <el-col :xs="12" :sm="6" :md="6">
                    <span class="detail-label">最小: </span>
                    <span class="detail-value">{{ item.minStock }} {{ item.unit }}</span>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" class="hidden-xs-only">
                    <span class="detail-label">库位: </span>
                    <span class="detail-value">{{ item.location }}</span>
                  </el-col>
                  <el-col :xs="24" :sm="12" :md="12" class="hidden-xs-only">
                    <span class="detail-label">分类: </span>
                    <span class="detail-value">{{ item.category }}</span>
                  </el-col>
                </el-row>
                <el-progress
                  :percentage="Math.min((item.stock / item.minStock) * 100, 100)"
                  :color="item.status === 'critical' ? '#F56C6C' : '#E6A23C'"
                  :show-text="false"
                />
              </div>
              <el-button type="primary" size="small" @click="handleCreatePurchase(item)">
                创建采购单
              </el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import {
  findInventoryList,
  findStockMovementList,
  findLocationList,
  getStatistics,
  getAlerts,
  stocktake,
  inbound,
  outbound,
  createLocation,
  updateLocation,
  deleteLocation
} from '@/api/erp/inventoryService'

export default {
  name: 'ERPInventory',
  data() {
    return {
      activeTab: 'inventory',
      searchText: '',
      locationType: 'factory',
      loading: false,
      inventoryItems: [],
      stockMovements: [],
      factoryLocations: [],
      storeLocations: [],
      statistics: {
        totalValue: '¥0',
        itemTypes: 0,
        activeTypes: 0,
        alertCount: 0,
        monthlyMovements: 0
      },
      pagination: {
        page: 1,
        pageSize: 20,
        total: 0
      },
      movementPagination: {
        page: 1,
        pageSize: 20,
        total: 0
      }
    }
  },
  computed: {
    currentLocations() {
      return this.locationType === 'factory' ? this.factoryLocations : this.storeLocations
    },
    alertItems() {
      return this.inventoryItems.filter(item => item.status !== 'normal')
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
          this.loadInventoryList(),
          this.loadStatistics(),
          this.loadAlerts(),
          this.loadLocationList()
        ])
      } catch (error) {
        console.error('加载数据失败:', error)
      } finally {
        this.loading = false
      }
    },
    handleTabClick(tab) {
      if (tab.name === 'movements' && this.stockMovements.length === 0) {
        this.loadStockMovements()
      }
    },
    async loadInventoryList() {
      try {
        const res = await findInventoryList({
          page: this.pagination.page,
          pageSize: this.pagination.pageSize,
          keyword: this.searchText
        })
        if (res?.items) {
          this.inventoryItems = res.items.map(item => ({
            id: item.id,
            code: item.code || '',
            name: item.name || '',
            category: item.categoryName || '',
            stock: item.quantity || 0,
            unit: item.unit || '',
            minStock: item.minStock || 0,
            maxStock: item.maxStock || 0,
            avgCost: `¥${(item.avgCost || 0).toFixed(2)}`,
            totalValue: `¥${((item.quantity || 0) * (item.avgCost || 0)).toLocaleString()}`,
            location: item.locationName || '',
            status: this.getStockStatus(item.quantity, item.minStock)
          }))
          this.pagination.total = res.total || 0
        }
      } catch (error) {
        console.error('加载库存列表失败:', error)
        this.$message.error('加载库存列表失败')
      }
    },
    async loadStockMovements() {
      try {
        const res = await findStockMovementList({
          page: this.movementPagination.page,
          pageSize: this.movementPagination.pageSize
        })
        if (res?.items) {
          this.stockMovements = res.items.map(item => ({
            id: item.id,
            date: this.formatDateTime(item.createdAt),
            code: item.productCode || '',
            name: item.productName || '',
            type: item.type === 1 ? '入库' : '出库',
            quantity: item.quantity || 0,
            refNo: item.refNo || '',
            operator: item.operatorName || ''
          }))
          this.movementPagination.total = res.total || 0
        }
      } catch (error) {
        console.error('加载出入库记录失败:', error)
      }
    },
    async loadStatistics() {
      try {
        const res = await getStatistics({})
        if (res) {
          this.statistics = {
            totalValue: `¥${(res.totalValue || 0).toLocaleString()}`,
            itemTypes: res.itemTypes || 0,
            activeTypes: res.activeTypes || 0,
            alertCount: res.alertCount || 0,
            monthlyMovements: res.monthlyMovements || 0
          }
        }
      } catch (error) {
        console.error('加载统计数据失败:', error)
      }
    },
    async loadAlerts() {
      try {
        const res = await getAlerts({})
        if (res?.items) {
          // 预警数据会在 inventoryItems 中通过 status 字段显示
        }
      } catch (error) {
        console.error('加载预警数据失败:', error)
      }
    },
    async loadLocationList() {
      try {
        const res = await findLocationList({
          type: this.locationType === 'factory' ? 1 : 2
        })
        if (res?.items) {
          const locations = res.items.map(item => ({
            id: item.id,
            zone: item.zone || '',
            name: item.name || '',
            address: item.address || '',
            capacity: item.capacity || 0,
            used: item.used || 0,
            shelves: item.shelves || 0,
            itemTypes: item.itemTypes || 0,
            status: this.getLocationStatus(item.used, item.capacity),
            type: this.locationType
          }))
          if (this.locationType === 'factory') {
            this.factoryLocations = locations
          } else {
            this.storeLocations = locations
          }
        }
      } catch (error) {
        console.error('加载库位列表失败:', error)
      }
    },
    getStockStatus(quantity, minStock) {
      if (!quantity || !minStock) return 'normal'
      const ratio = quantity / minStock
      if (ratio < 0.2) return 'critical'
      if (ratio < 0.5) return 'low'
      return 'normal'
    },
    getLocationStatus(used, capacity) {
      if (!capacity) return 'normal'
      const percent = (used / capacity) * 100
      if (percent >= 95) return 'critical'
      if (percent >= 80) return 'high'
      if (percent < 30) return 'low'
      return 'normal'
    },
    formatDateTime(timestamp) {
      if (!timestamp) return ''
      const date = new Date(timestamp * 1000)
      return date.toLocaleString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    },
    handleCreate() {
      this.$message.info('新增物料功能开发中')
    },
    async handleStocktake() {
      try {
        await this.$confirm('确认开始库存盘点吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await stocktake({})
        this.$message.success('库存盘点任务已创建')
        this.loadData()
      } catch (error) {
        if (error !== 'cancel') {
          console.error('库存盘点失败:', error)
          this.$message.error('库存盘点失败')
        }
      }
    },
    handleCreateLocation() {
      this.$message.info('新增库位功能开发中')
    },
    handleCreatePurchase(item) {
      this.$message.info(`为 ${item.code} 创建采购单`)
    },
    getUsagePercent(location) {
      if (!location.capacity) return 0
      return Math.min(Math.round((location.used / location.capacity) * 100), 100)
    },
    getUsageTagType(location) {
      if (location.status === 'critical') return 'danger'
      if (location.status === 'high') return 'warning'
      if (location.status === 'low') return 'success'
      return 'info'
    },
    getUsageColor(location) {
      if (location.status === 'critical') return '#F56C6C'
      if (location.status === 'high') return '#E6A23C'
      if (location.status === 'low') return '#67C23A'
      return '#409EFF'
    }
  }
}
</script>

<style lang="scss" scoped>
.erp-inventory {
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

    .page-actions {
      display: flex;
      gap: 12px;
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
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .stat-value {
        font-size: 24px;
        font-weight: bold;
        color: #303133;
        margin-bottom: 8px;
      }

      .stat-change {
        font-size: 12px;
        display: flex;
        align-items: center;
        gap: 4px;
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

    .stock-text {
      font-weight: 500;
      color: #303133;
    }

    .status-text {
      font-size: 12px;
      margin-left: 4px;
    }

    .mobile-name {
      font-size: 12px;
      color: #303133;
    }

    .locations-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      flex-wrap: wrap;
      gap: 16px;
    }

    .location-cards {
      .location-card {
        margin-bottom: 16px;

        &.status-critical {
          border-color: #F56C6C;
          background-color: #FEF0F0;
        }

        &.status-high {
          border-color: #E6A23C;
          background-color: #FDF6EC;
        }

        .location-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;

          .location-info {
            display: flex;
            gap: 12px;

            .location-icon {
              width: 40px;
              height: 40px;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 18px;

              &.bg-critical {
                background-color: #F56C6C;
              }

              &.bg-high {
                background-color: #E6A23C;
              }

              &.bg-normal {
                background-color: #409EFF;
              }

              &.bg-low {
                background-color: #67C23A;
              }
            }

            h3 {
              font-size: 14px;
              font-weight: bold;
              color: #303133;
              margin: 0 0 4px 0;
            }

            p {
              font-size: 12px;
              color: #909399;
              margin: 0;
            }
          }
        }

        .location-address {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #909399;
          margin-bottom: 12px;
        }

        .location-capacity {
          margin-bottom: 12px;

          .capacity-label {
            font-size: 12px;
            color: #909399;
          }

          .capacity-value {
            font-size: 14px;
            font-weight: 500;
            color: #303133;
            margin-bottom: 4px;
          }
        }

        .location-stats {
          margin-bottom: 12px;

          .stat-item {
            display: flex;
            align-items: center;
            gap: 8px;

            i {
              font-size: 16px;
              color: #909399;
            }

            .stat-label {
              font-size: 12px;
              color: #909399;
            }

            .stat-value {
              font-size: 16px;
              font-weight: 500;
              color: #303133;
            }
          }
        }

        .location-actions {
          display: flex;
          gap: 16px;
          padding-top: 12px;
          border-top: 1px solid #EBEEF5;
        }
      }
    }

    .alerts-list {
      .alert-item {
        display: flex;
        flex-direction: column;
        gap: 12px;
        border: 1px solid #EBEEF5;
        border-radius: 4px;
        padding: 16px;
        margin-bottom: 16px;

        @media (min-width: 768px) {
          flex-direction: row;
          align-items: flex-start;
        }

        &.alert-critical {
          border-color: #F56C6C;
          background-color: #FEF0F0;
        }

        &.alert-low {
          border-color: #E6A23C;
          background-color: #FDF6EC;
        }

        .alert-content {
          flex: 1;

          .alert-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 12px;

            h3 {
              font-size: 14px;
              font-weight: 500;
              color: #303133;
              margin: 0;
            }
          }

          .alert-details {
            margin-bottom: 12px;

            .detail-label {
              font-size: 12px;
              color: #909399;
            }

            .detail-value {
              font-size: 14px;
              font-weight: 500;
              color: #303133;
            }
          }
        }
      }
    }
  }
}

.alert-badge {
  position: absolute;
  top: 6px;
  right: -4px;
  width: 8px;
  height: 8px;
  background-color: #F56C6C;
  border-radius: 50%;
}

.text-success {
  color: #67C23A;
}

.text-warning {
  color: #E6A23C;
}

.text-danger {
  color: #F56C6C;
}

@media (max-width: 768px) {
  .erp-inventory {
    padding: 12px;

    .page-header {
      flex-direction: column;

      .page-title {
        h1 {
          font-size: 20px;
        }
      }

      .page-actions {
        width: 100%;

        .el-button {
          flex: 1;
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

      .locations-header {
        flex-direction: column;
        align-items: stretch;
      }
    }
  }
}
</style>
