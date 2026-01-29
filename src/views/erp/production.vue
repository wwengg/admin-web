<template>
  <div class="erp-production">
    <!-- 页面标题和操作栏 -->
    <div class="page-header">
      <div class="page-title">
        <h1>生产管理</h1>
        <p>管理生产订单、工单和生产计划</p>
      </div>
      <el-button type="primary" icon="el-icon-plus" @click="handleCreate">新建生产订单</el-button>
    </div>

    <!-- 标签页 -->
    <el-card class="tab-card">
      <el-tabs v-model="activeTab" @tab-click="handleTabClick">
        <el-tab-pane label="生产订单" name="orders">
          <div class="tab-toolbar">
            <el-input
              v-model="searchText"
              placeholder="搜索..."
              prefix-icon="el-icon-search"
              style="width: 300px;"
              @change="loadProductionOrders"
            />
            <el-button icon="el-icon-filter">筛选</el-button>
            <el-button icon="el-icon-download">导出</el-button>
          </div>
          <el-table :data="productionOrders" v-loading="loading" style="width: 100%">
            <el-table-column prop="id" label="订单编号" width="140">
              <template slot-scope="scope">
                <span class="link-text">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="product" label="产品名称" show-overflow-tooltip />
            <el-table-column prop="quantity" label="数量" width="120" class-name="hidden-md-and-down">
              <template slot-scope="scope">
                {{ scope.row.completed }}/{{ scope.row.quantity }}
              </template>
            </el-table-column>
            <el-table-column label="进度" width="180">
              <template slot-scope="scope">
                <div class="progress-wrapper">
                  <el-progress
                    :percentage="getProgress(scope.row)"
                    :show-text="false"
                  />
                  <span class="progress-text">{{ getProgress(scope.row) }}%</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="priority" label="优先级" width="90" class-name="hidden-lg-and-down">
              <template slot-scope="scope">
                <el-tag :type="getPriorityType(scope.row.priority)" size="small">
                  {{ scope.row.priority }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" width="90">
              <template slot-scope="scope">
                <el-tag :type="getProductionStatusType(scope.row.status)" size="small">
                  {{ scope.row.status }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="deadline" label="截止日期" width="110" class-name="hidden-xl-and-down" />
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="工单管理" name="workOrders">
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
          <el-table :data="workOrders" style="width: 100%">
            <el-table-column prop="id" label="工单编号" width="140">
              <template slot-scope="scope">
                <span class="link-text">{{ scope.row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="moId" label="生产订单" width="140" class-name="hidden-md-and-down" />
            <el-table-column prop="workstation" label="工作站" show-overflow-tooltip />
            <el-table-column prop="operator" label="操作员" width="100" class-name="hidden-lg-and-down" />
            <el-table-column label="进度" width="180">
              <template slot-scope="scope">
                <div class="progress-wrapper">
                  <el-progress :percentage="scope.row.progress" color="#67C23A" :show-text="false" />
                  <span class="progress-text">{{ scope.row.progress }}%</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态" width="90">
              <template slot-scope="scope">
                <el-tag :type="getWorkOrderStatusType(scope.row.status)" size="small">
                  {{ scope.row.status }}
                </el-tag>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="物料管理" name="materials">
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
          <el-table :data="materials" style="width: 100%">
            <el-table-column prop="code" label="物料编码" width="120">
              <template slot-scope="scope">
                <span class="link-text">{{ scope.row.code }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="物料名称" show-overflow-tooltip />
            <el-table-column prop="category" label="分类" width="100" class-name="hidden-md-and-down">
              <template slot-scope="scope">
                <el-tag type="primary" size="mini">{{ scope.row.category }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="spec" label="规格" width="180" class-name="hidden-lg-and-down" />
            <el-table-column label="单价" width="120">
              <template slot-scope="scope">
                {{ scope.row.unitPrice }}/{{ scope.row.unit }}
              </template>
            </el-table-column>
            <el-table-column label="库存" width="100">
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

        <el-tab-pane label="设备工具" name="equipment">
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
          <el-table :data="equipmentTools" style="width: 100%">
            <el-table-column prop="code" label="设备编码" width="110">
              <template slot-scope="scope">
                <span class="link-text">{{ scope.row.code }}</span>
              </template>
            </el-table-column>
            <el-table-column label="名称规格" width="180">
              <template slot-scope="scope">
                <div>
                  <div style="font-weight: 500;">{{ scope.row.name }}</div>
                  <div style="font-size: 12px; color: #909399;">{{ scope.row.spec }}</div>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="location" label="所在位置" width="120" class-name="hidden-md-and-down" />
            <el-table-column prop="status" label="状态" width="90">
              <template slot-scope="scope">
                <el-tag :type="getEquipmentStatusType(scope.row.status)" size="small">
                  {{ scope.row.status }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="使用次数" width="140" class-name="hidden-lg-and-down">
              <template slot-scope="scope">
                <div class="usage-wrapper">
                  <div class="usage-text">
                    <span :class="{ 'text-danger': scope.row.useCount >= scope.row.maxUseCount }">
                      {{ scope.row.useCount.toLocaleString() }}
                    </span>
                    <span>/</span>
                    <span>{{ scope.row.maxUseCount.toLocaleString() }}</span>
                  </div>
                  <el-progress
                    :percentage="Math.min((scope.row.useCount / scope.row.maxUseCount) * 100, 100)"
                    :color="getUsageColor(scope.row)"
                    :show-text="false"
                    :stroke-width="6"
                  />
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="lastMaintenance" label="上次保养" width="100" class-name="hidden-xl-and-down" />
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  v-if="scope.row.status === '使用中'"
                  type="text"
                  size="small"
                  icon="el-icon-warning"
                  @click="handleRepair(scope.row)"
                >
                  报修
                </el-button>
                <el-button
                  v-else-if="scope.row.status === '空闲'"
                  type="text"
                  size="small"
                  @click="handleDetail(scope.row)"
                >
                  详情
                </el-button>
                <el-button
                  v-else-if="scope.row.status === '报修中' || scope.row.status === '维修中'"
                  type="text"
                  size="small"
                  icon="el-icon-check"
                  @click="handleCompleteRepair(scope.row)"
                >
                  完成
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="生产计划" name="plan">
          <div class="empty-state">
            <i class="el-icon-setting" style="font-size: 48px; color: #C0C4CC;"></i>
            <p>生产计划功能开发中...</p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import {
  findProductionOrderList,
  findWorkOrderList,
  findMaterialList,
  findEquipmentList,
  createProductionOrder,
  updateProductionOrder,
  deleteProductionOrder,
  createWorkOrder,
  updateWorkOrder,
  deleteWorkOrder,
  updateWorkOrderProgress,
  createMaterial,
  updateMaterial,
  deleteMaterial,
  createEquipment,
  updateEquipment,
  deleteEquipment,
  reportRepair,
  completeRepair
} from '@/api/erp/productionService'

export default {
  name: 'ERPProduction',
  data() {
    return {
      activeTab: 'orders',
      searchText: '',
      loading: false,
      productionOrders: [],
      workOrders: [],
      materials: [],
      equipmentTools: [],
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
        await this.loadProductionOrders()
      } catch (error) {
        console.error('加载数据失败:', error)
      } finally {
        this.loading = false
      }
    },
    async loadProductionOrders() {
      try {
        const res = await findProductionOrderList({
          page: this.pagination.page,
          pageSize: this.pagination.pageSize,
          keyword: this.searchText
        })
        if (res?.items) {
          this.productionOrders = res.items.map(item => ({
            id: item.moNo || '',
            product: item.productName || '',
            quantity: item.quantity || 0,
            completed: item.completedQuantity || 0,
            status: this.getProductionOrderStatus(item.status),
            startDate: this.formatDate(item.planStartDate),
            deadline: this.formatDate(item.planEndDate),
            priority: this.getPriority(item.priority)
          }))
          this.pagination.total = res.total || 0
        }
      } catch (error) {
        console.error('加载生产订单失败:', error)
        this.$message.error('加载生产订单失败')
      }
    },
    async loadWorkOrders() {
      if (this.workOrders.length > 0) return
      try {
        const res = await findWorkOrderList({
          page: 1,
          pageSize: 100
        })
        if (res?.items) {
          this.workOrders = res.items.map(item => ({
            id: item.woNo || '',
            moId: item.moNo || '',
            workstation: item.workstationName || '',
            operator: item.operatorName || '',
            process: item.processName || '',
            status: this.getWorkOrderStatus(item.status),
            progress: item.progress || 0
          }))
        }
      } catch (error) {
        console.error('加载工单列表失败:', error)
      }
    },
    async loadMaterials() {
      if (this.materials.length > 0) return
      try {
        const res = await findMaterialList({
          page: 1,
          pageSize: 100
        })
        if (res?.items) {
          this.materials = res.items.map(item => ({
            id: item.id,
            code: item.code || '',
            name: item.name || '',
            category: item.categoryName || '',
            spec: item.spec || '',
            unit: item.unit || '',
            unitPrice: `¥${(item.unitPrice || 0).toFixed(2)}`,
            stock: item.stock || 0,
            minStock: item.minStock || 0,
            supplier: item.supplierName || '',
            status: this.getStockStatus(item.stock, item.minStock)
          }))
        }
      } catch (error) {
        console.error('加载物料列表失败:', error)
      }
    },
    async loadEquipment() {
      if (this.equipmentTools.length > 0) return
      try {
        const res = await findEquipmentList({
          page: 1,
          pageSize: 100
        })
        if (res?.items) {
          this.equipmentTools = res.items.map(item => ({
            id: item.id,
            code: item.code || '',
            name: item.name || '',
            spec: item.spec || '',
            category: item.categoryName || '',
            location: item.locationName || '',
            status: this.getEquipmentStatus(item.status),
            useCount: item.useCount || 0,
            maxUseCount: item.maxUseCount || 0,
            purchaseDate: this.formatDate(item.purchaseDate),
            lastMaintenance: this.formatDate(item.lastMaintenanceDate) || '-'
          }))
        }
      } catch (error) {
        console.error('加载设备列表失败:', error)
      }
    },
    handleTabClick(tab) {
      if (tab.name === 'workOrders') {
        this.loadWorkOrders()
      } else if (tab.name === 'materials') {
        this.loadMaterials()
      } else if (tab.name === 'equipment') {
        this.loadEquipment()
      } else {
        this.searchText = ''
      }
    },
    getProductionOrderStatus(status) {
      const statusMap = {
        1: '待开始',
        2: '生产中',
        3: '已完成',
        4: '已暂停',
        5: '已取消'
      }
      return statusMap[status] || '未知'
    },
    getWorkOrderStatus(status) {
      const statusMap = {
        1: '等待中',
        2: '进行中',
        3: '已完成',
        4: '已暂停'
      }
      return statusMap[status] || '未知'
    },
    getEquipmentStatus(status) {
      const statusMap = {
        1: '空闲',
        2: '使用中',
        3: '报修中',
        4: '维修中'
      }
      return statusMap[status] || '未知'
    },
    getPriority(priority) {
      const priorityMap = {
        1: '高',
        2: '中',
        3: '低'
      }
      return priorityMap[priority] || '中'
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
      this.$message.info('新建生产订单功能开发中')
    },
    async handleRepair(row) {
      try {
        await reportRepair({ id: row.id })
        this.$message.success('报修成功')
        this.loadEquipment()
      } catch (error) {
        console.error('报修失败:', error)
        this.$message.error('报修失败')
      }
    },
    handleDetail(row) {
      this.$message.info(`查看设备详情: ${row.code}`)
    },
    async handleCompleteRepair(row) {
      try {
        await completeRepair({ id: row.id })
        this.$message.success('维修完成')
        this.loadEquipment()
      } catch (error) {
        console.error('维修完成失败:', error)
        this.$message.error('操作失败')
      }
    },
    getProgress(row) {
      if (!row.quantity) return 0
      return Math.round((row.completed / row.quantity) * 100)
    },
    getPriorityType(priority) {
      const map = {
        '高': 'danger',
        '中': 'warning',
        '低': 'info'
      }
      return map[priority] || 'info'
    },
    getProductionStatusType(status) {
      const map = {
        '已完成': 'success',
        '生产中': 'primary',
        '待开始': 'info',
        '已暂停': 'warning',
        '已取消': 'info'
      }
      return map[status] || 'info'
    },
    getWorkOrderStatusType(status) {
      const map = {
        '进行中': 'primary',
        '已完成': 'success',
        '等待中': 'info',
        '已暂停': 'warning'
      }
      return map[status] || 'info'
    },
    getEquipmentStatusType(status) {
      const map = {
        '使用中': 'success',
        '空闲': 'info',
        '报修中': 'warning',
        '维修中': 'danger'
      }
      return map[status] || 'info'
    },
    getStockClass(row) {
      if (row.status === 'critical') return 'text-danger'
      if (row.status === 'low') return 'text-warning'
      return ''
    },
    getUsageColor(row) {
      if (!row.maxUseCount) return '#67C23A'
      const percent = (row.useCount / row.maxUseCount) * 100
      if (percent >= 100) return '#F56C6C'
      if (percent >= 90) return '#E6A23C'
      return '#67C23A'
    }
  }
}
</script>

<style lang="scss" scoped>
.erp-production {
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

    .progress-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;

      .progress-text {
        font-size: 12px;
        color: #606266;
        white-space: nowrap;
      }
    }

    .usage-wrapper {
      .usage-text {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #606266;
        margin-bottom: 4px;

        .text-danger {
          color: #F56C6C;
          font-weight: 500;
        }
      }
    }

    .empty-state {
      text-align: center;
      padding: 60px 20px;
      color: #909399;

      p {
        margin: 16px 0 0 0;
        font-size: 14px;
      }
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
  .erp-production {
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
