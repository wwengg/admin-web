<!-- 设备报修流程组件 -->
<template>
  <div class="device-repair-flow">
    <!-- 步骤条显示当前进度 -->
    <el-steps :active="currentStep" finish-status="success" align-center>
      <el-step title="用户报修"></el-step>
      <el-step title="客服联系"></el-step>
      <el-step title="送修/寄送"></el-step>
      <el-step title="服务点检查"></el-step>
      <el-step title="确认价格"></el-step>
      <el-step title="付款"></el-step>
      <el-step title="维修中"></el-step>
      <el-step title="维修完成"></el-step>
      <el-step title="取走"></el-step>
    </el-steps>

    <!-- 报修表单 -->
    <el-card v-if="!instanceId" class="mt-20">
      <div slot="header">
        <span>提交报修申请</span>
      </div>
      <el-form :model="form" :rules="rules" ref="formRef" label-width="120px">
        <el-form-item label="设备名称" prop="deviceName">
          <el-input v-model="form.deviceName" placeholder="请输入设备名称"></el-input>
        </el-form-item>
        <el-form-item label="设备型号" prop="deviceModel">
          <el-input v-model="form.deviceModel" placeholder="请输入设备型号"></el-input>
        </el-form-item>
        <el-form-item label="IMEI" prop="imei">
          <el-input v-model="form.imei" placeholder="请输入IMEI"></el-input>
        </el-form-item>
        <el-form-item label="故障描述" prop="faultDesc">
          <el-input type="textarea" v-model="form.faultDesc" :rows="4" placeholder="请详细描述故障情况"></el-input>
        </el-form-item>
        <el-form-item label="紧急程度" prop="urgent">
          <el-radio-group v-model="form.urgent">
            <el-radio label="一般">一般</el-radio>
            <el-radio label="紧急">紧急</el-radio>
            <el-radio label="非常紧急">非常紧急</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="联系电话" prop="userPhone">
          <el-input v-model="form.userPhone" placeholder="请输入联系电话"></el-input>
        </el-form-item>
        <el-form-item label="送修方式" prop="repairType">
          <el-radio-group v-model="form.repairType">
            <el-radio label="寄送">快递寄送</el-radio>
            <el-radio label="送修">上门送修</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitRepair" :loading="submitting">提交报修</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <!-- 流程详情和操作 -->
    <el-card v-if="instanceId" class="mt-20">
      <div slot="header">
        <span>报修进度</span>
        <el-tag :type="getStatusTag(instance.status)">{{ getStatusName(instance.status) }}</el-tag>
      </div>

      <!-- 当前任务处理 -->
      <div v-if="currentTask" class="task-section">
        <h4>当前待处理</h4>
        <el-descriptions :column="2" border>
          <el-descriptions-item label="当前节点">{{ currentTask.nodeName }}</el-descriptions-item>
          <el-descriptions-item label="分配给">{{ currentTask.assigneeName }}</el-descriptions-item>
          <el-descriptions-item label="创建时间">{{ formatTime(currentTask.createdAt) }}</el-descriptions-item>
        </el-descriptions>

        <!-- 根据不同节点显示不同操作 -->
        <div class="task-actions mt-20">
          <!-- 客服节点 -->
          <div v-if="currentTask.nodeId === 'cs_contact'">
            <el-form :model="csForm" label-width="100px">
              <el-form-item label="联系记录">
                <el-input v-model="csForm.csRecord" type="textarea" :rows="3" placeholder="请记录联系情况"></el-input>
              </el-form-item>
              <el-form-item label="能否解决">
                <el-radio-group v-model="csForm.csCanResolve">
                  <el-radio label="yes">可以解决</el-radio>
                  <el-radio label="no">无法解决</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item v-if="csForm.csCanResolve === 'yes'" label="解决方案">
                <el-input v-model="csForm.csSolution" placeholder="请描述解决方案"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleCsContact">提交处理</el-button>
              </el-form-item>
            </el-form>
          </div>

          <!-- 服务点检查反馈价格 -->
          <div v-if="currentTask.nodeId === 'check_feedback'">
            <el-form :model="repairForm" label-width="100px">
              <el-form-item label="检查结果">
                <el-input v-model="repairForm.checkResult" type="textarea" :rows="3" placeholder="请描述检查结果"></el-input>
              </el-form-item>
              <el-form-item label="维修费用">
                <el-input-number v-model="repairForm.repairPrice" :min="0" :precision="2" placeholder="请输入维修费用"></el-input-number>
              </el-form-item>
              <el-form-item label="更换配件">
                <el-input v-model="repairForm.repairParts" type="textarea" :rows="2" placeholder="请列出更换的配件"></el-input>
              </el-form-item>
              <el-form-item label="预计完成时间">
                <el-date-picker v-model="repairForm.repairEstimate" type="date" placeholder="预计完成时间"></el-date-picker>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleCheckFeedback">提交报价</el-button>
              </el-form-item>
            </el-form>
          </div>

          <!-- 用户确认价格 -->
          <div v-if="currentTask.nodeId === 'user_confirm_price'">
            <div class="price-info">
              <h4>维修报价</h4>
              <p><strong>维修费用：</strong>¥{{ repairInfo.repairPrice }}</p>
              <p><strong>更换配件：</strong>{{ repairInfo.repairParts }}</p>
              <p><strong>预计完成：</strong>{{ repairInfo.repairEstimate }}</p>
              <p><strong>维修说明：</strong>{{ repairInfo.repairDesc }}</p>
            </div>
            <el-button-group class="mt-20">
              <el-button type="success" @click="handlePriceConfirm(true)">确认维修</el-button>
              <el-button type="danger" @click="handlePriceConfirm(false)">拒绝维修</el-button>
            </el-button-group>
          </div>

          <!-- 付款 -->
          <div v-if="currentTask.nodeId === 'payment'">
            <div class="payment-info">
              <h4>待支付金额</h4>
              <p class="amount">¥{{ paymentInfo.paymentAmount }}</p>
            </div>
            <el-form :model="paymentForm" label-width="100px" class="mt-20">
              <el-form-item label="支付方式">
                <el-radio-group v-model="paymentForm.paymentMethod">
                  <el-radio label="wechat">微信支付</el-radio>
                  <el-radio label="alipay">支付宝</el-radio>
                  <el-radio label="cash">现金</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handlePayment">确认支付</el-button>
              </el-form-item>
            </el-form>
          </div>

          <!-- 维修完成 -->
          <div v-if="currentTask.nodeId === 'user_pickup'">
            <div class="complete-info">
              <h4>维修已完成</h4>
              <p><strong>完成时间：</strong>{{ completeInfo.completeTime }}</p>
              <p><strong>维修说明：</strong>{{ completeInfo.completeDesc }}</p>
              <p><strong>保修期：</strong>{{ completeInfo.warrantyPeriod }}</p>
            </div>
            <el-button type="primary" class="mt-20" @click="handlePickup">确认取走</el-button>
          </div>
        </div>
      </div>

      <!-- 流转历史 -->
      <div class="history-section mt-20">
        <h4>流转历史</h4>
        <el-timeline>
          <el-timeline-item v-for="item in history" :key="item.id" :timestamp="formatTime(item.createdAt)">
            <p><strong>{{ item.actorName }}</strong> {{ getActionName(item.action) }}</p>
            <p v-if="item.comment">意见：{{ item.comment }}</p>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-card>
  </div>
</template>

<script>
import { startProcess, getProcessProgress, completeTask } from '@/api/workflowService'
import { createDeviceReport } from '@/api/deviceReport'

export default {
  name: 'DeviceRepairFlow',
  data() {
    return {
      currentStep: 0,
      instanceId: null,
      submitting: false,

      // 报修表单
      form: {
        deviceName: '',
        deviceModel: '',
        imei: '',
        faultDesc: '',
        urgent: '一般',
        userPhone: '',
        repairType: '寄送'
      },
      rules: {
        deviceName: [{ required: true, message: '请输入设备名称', trigger: 'blur' }],
        deviceModel: [{ required: true, message: '请输入设备型号', trigger: 'blur' }],
        imei: [{ required: true, message: '请输入IMEI', trigger: 'blur' }],
        faultDesc: [{ required: true, message: '请描述故障情况', trigger: 'blur' }]
      },

      // 流程实例和任务
      instance: null,
      currentTask: null,
      history: [],

      // 客服处理表单
      csForm: {
        csRecord: '',
        csCanResolve: '',
        csSolution: ''
      },

      // 维修表单
      repairForm: {
        checkResult: '',
        repairPrice: 0,
        repairParts: '',
        repairEstimate: '',
        repairDesc: ''
      },

      // 维修信息
      repairInfo: {},

      // 支付信息
      paymentInfo: {},
      paymentForm: {
        paymentMethod: 'wechat'
      },

      // 完成信息
      completeInfo: {},

      workflowDefId: 1 // 设备报修流程定义ID
    }
  },
  mounted() {
    // 如果有instanceId则加载流程进度
    if (this.$route.query.instanceId) {
      this.loadProgress(this.$route.query.instanceId)
    }
  },
  methods: {
    // 提交报修申请
    async submitRepair() {
      this.$refs.formRef.validate(async (valid) => {
        if (!valid) return

        this.submitting = true
        try {
          // 1. 创建设备报修记录
          const reportRes = await createDeviceReport({
            deviceName: this.form.deviceName,
            deviceModel: this.form.deviceModel,
            imei: this.form.imei,
            faultDesc: this.form.faultDesc,
            reportType: 'repair',
            urgent: this.form.urgent === '一般' ? 1 : this.form.urgent === '紧急' ? 2 : 3
          })

          // 2. 发起审批流程
          const workflowRes = await startProcess({
            workflowDefId: this.workflowDefId,
            bizType: 'device_report',
            bizId: String(reportRes.data.id),
            bizNo: `BX${Date.now()}`,
            context: JSON.stringify({
              ...this.form,
              faultImages: [] // 可以在上传图片后添加
            }),
            starterId: this.$store.getters.userId,
            starterName: this.$store.getters.userName
          })

          if (workflowRes.code === 'Success') {
            this.$message.success('报修申请已提交，请等待客服联系')
            this.instanceId = workflowRes.data.instanceId
            this.loadProgress(this.instanceId)
          }
        } catch (error) {
          this.$message.error('提交失败：' + error.message)
        } finally {
          this.submitting = false
        }
      })
    },

    // 加载流程进度
    async loadProgress(instanceId) {
      try {
        const res = await getProcessProgress({ id: instanceId })
        if (res.code === 'Success') {
          this.instance = res.data
          this.currentTask = this.getCurrentTask(res.data)
          this.history = res.data.history || []
          this.updateCurrentStep()
        }
      } catch (error) {
        this.$message.error('加载流程失败')
      }
    },

    // 获取当前待处理任务
    getCurrentTask(instance) {
      // 根据currentNode找到对应任务
      // 这里简化处理，实际需要从tasks表查询
      return null
    },

    // 客服处理
    async handleCsContact() {
      const action = this.csForm.csCanResolve === 'yes' ? 'approve' : 'reject'
      await completeTask({
        taskId: this.currentTask.id,
        action: action,
        comment: this.csForm.csRecord + (this.csForm.csSolution ? ` 解决方案：${this.csForm.csSolution}` : ''),
        actorId: this.$store.getters.userId,
        actorName: this.$store.getters.userName
      })
      this.$message.success('处理成功')
      this.loadProgress(this.instanceId)
    },

    // 服务点检查反馈价格
    async handleCheckFeedback() {
      // 更新上下文数据（维修价格等信息）
      await completeTask({
        taskId: this.currentTask.id,
        action: 'approve',
        comment: `检查结果：${this.repairForm.checkResult}，维修费：${this.repairForm.repairPrice}`,
        actorId: this.$store.getters.userId,
        actorName: this.$store.getters.userName
      })
      this.$message.success('报价已提交')
      this.loadProgress(this.instanceId)
    },

    // 用户确认/拒绝价格
    async handlePriceConfirm(accept) {
      await completeTask({
        taskId: this.currentTask.id,
        action: accept ? 'approve' : 'reject',
        comment: accept ? '用户确认维修' : '用户拒绝维修',
        actorId: this.$store.getters.userId,
        actorName: this.$store.getters.userName
      })
      this.$message.success(accept ? '已确认，请付款' : '已拒绝维修')
      this.loadProgress(this.instanceId)
    },

    // 付款
    async handlePayment() {
      await completeTask({
        taskId: this.currentTask.id,
        action: 'approve',
        comment: `已支付，支付方式：${this.paymentForm.paymentMethod}`,
        actorId: this.$store.getters.userId,
        actorName: this.$store.getters.userName
      })
      this.$message.success('支付成功')
      this.loadProgress(this.instanceId)
    },

    // 确认取走
    async handlePickup() {
      await completeTask({
        taskId: this.currentTask.id,
        action: 'approve',
        comment: '用户已取走设备',
        actorId: this.$store.getters.userId,
        actorName: this.$store.getters.userName
      })
      this.$message.success('流程完成')
      this.loadProgress(this.instanceId)
    },

    // 更新步骤条
    updateCurrentStep() {
      const stepMap = {
        'start': 0,
        'cs_contact': 1,
        'send_repair': 2,
        'service_receive': 3,
        'check_feedback': 4,
        'user_confirm_price': 5,
        'payment': 6,
        'repairing': 7,
        'repair_complete': 8,
        'user_pickup': 9,
        'end': 10
      }
      this.currentStep = stepMap[this.instance?.currentNode] || 0
    },

    // 辅助方法
    getStatusName(status) {
      const names = ['运行中', '已完成', '已拒绝', '已撤回']
      return names[status - 1] || '未知'
    },
    getStatusTag(status) {
      const tags = ['info', 'success', 'danger', 'warning']
      return tags[status - 1] || 'info'
    },
    formatTime(time) {
      return this.$dayjs(time).format('YYYY-MM-DD HH:mm')
    },
    getActionName(action) {
      const names = {
        'submit': '提交',
        'approve': '同意',
        'reject': '拒绝',
        'delegate': '转交',
        'withdraw': '撤回'
      }
      return names[action] || action
    }
  }
}
</script>

<style scoped lang="scss">
.device-repair-flow {
  padding: 20px;

  .task-section {
    background: #f5f7fa;
    padding: 20px;
    border-radius: 4px;
  }

  .price-info, .payment-info, .complete-info {
    background: #e6f7ff;
    padding: 15px;
    border-radius: 4px;

    h4 {
      margin-top: 0;
      color: #1890ff;
    }

    .amount {
      font-size: 24px;
      color: #ff4d4f;
      font-weight: bold;
    }
  }

  .history-section {
    padding: 20px 0;
  }
}
</style>
