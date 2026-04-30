import request from '@/utils/request'
import protoWorkflow from '@/proto/workflow.js'

// ==================== 流程定义管理 ====================

export function createWorkflowDef(data) {
  var buffer = protoWorkflow.pbWorkflow.WorkflowDef.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/createWorkflowDef',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateWorkflowDef(data) {
  var buffer = protoWorkflow.pbWorkflow.WorkflowDef.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/updateWorkflowDef',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteWorkflowDef(data) {
  var buffer = protoWorkflow.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/deleteWorkflowDef',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findWorkflowDefById(data) {
  var buffer = protoWorkflow.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/findWorkflowDefById',
    method: 'post',
    buffer,
    pb: 'pbWorkflow.FindWorkflowDefReply'
  })
}

export function findWorkflowDefList(data) {
  var buffer = protoWorkflow.pbWorkflow.FindWorkflowDefArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/findWorkflowDefList',
    method: 'post',
    buffer,
    pb: 'pbWorkflow.FindWorkflowDefReply'
  })
}

// ==================== 流程实例管理 ====================

export function startProcess(data) {
  var buffer = protoWorkflow.pbWorkflow.StartProcessArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/startProcess',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findWorkflowInstanceById(data) {
  var buffer = protoWorkflow.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/findWorkflowInstanceById',
    method: 'post',
    buffer,
    pb: 'pbWorkflow.FindWorkflowInstanceReply'
  })
}

export function findWorkflowInstanceList(data) {
  var buffer = protoWorkflow.pbWorkflow.FindWorkflowInstanceArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/findWorkflowInstanceList',
    method: 'post',
    buffer,
    pb: 'pbWorkflow.FindWorkflowInstanceReply'
  })
}

export function getProcessProgress(data) {
  var buffer = protoWorkflow.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/getProcessProgress',
    method: 'post',
    buffer,
    pb: 'pbWorkflow.FindWorkflowInstanceReply'
  })
}

// ==================== 任务管理 ====================

export function findMyTodoTasks(data) {
  var buffer = protoWorkflow.pbWorkflow.FindWorkflowTaskArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/findMyTodoTasks',
    method: 'post',
    buffer,
    pb: 'pbWorkflow.FindWorkflowTaskReply'
  })
}

export function findMyDoneTasks(data) {
  var buffer = protoWorkflow.pbWorkflow.FindWorkflowTaskArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/findMyDoneTasks',
    method: 'post',
    buffer,
    pb: 'pbWorkflow.FindWorkflowTaskReply'
  })
}

export function completeTask(data) {
  var buffer = protoWorkflow.pbWorkflow.CompleteTaskArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/completeTask',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function withdrawProcess(data) {
  var buffer = protoWorkflow.pbWorkflow.WithdrawProcessArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/withdrawProcess',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

// ==================== 历史记录 ====================

export function findTransitionHistory(data) {
  var buffer = protoWorkflow.pbWorkflow.FindWorkflowTransitionArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/workflow/findTransitionHistory',
    method: 'post',
    buffer,
    pb: 'pbWorkflow.FindWorkflowTransitionReply'
  })
}
