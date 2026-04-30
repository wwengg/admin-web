import request from '@/utils/request'
import protoCsms from '@/proto/csms.js'

// ==================== 报修单管理 ====================

export function createRepairOrder(data) {
  var buffer = protoCsms.pbCsms.CreateRepairOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/createRepairOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateRepairOrder(data) {
  var buffer = protoCsms.pbCsms.RepairOrder.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/updateRepairOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteRepairOrder(data) {
  var buffer = protoCsms.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/deleteRepairOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findRepairOrderById(data) {
  var buffer = protoCsms.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/findRepairOrderById',
    method: 'post',
    buffer,
    pb: 'pbCsms.FindRepairOrderReply'
  })
}

export function findRepairOrderList(data) {
  var buffer = protoCsms.pbCsms.FindRepairOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/findRepairOrderList',
    method: 'post',
    buffer,
    pb: 'pbCsms.FindRepairOrderReply'
  })
}

// ==================== 报修操作 ====================

export function acceptRepairOrder(data) {
  var buffer = protoCsms.pbCsms.AcceptRepairOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/acceptRepairOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function assignRepairOrder(data) {
  var buffer = protoCsms.pbCsms.AssignRepairOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/assignRepairOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function startRepair(data) {
  var buffer = protoCsms.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/startRepair',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function completeRepair(data) {
  var buffer = protoCsms.pbCsms.CompleteRepairOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/completeRepair',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function cancelRepairOrder(data) {
  var buffer = protoCsms.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/cancelRepairOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

// ==================== 维修记录 ====================

export function findRepairRecordList(data) {
  var buffer = protoCsms.pbCsms.FindRepairRecordArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/findRepairRecordList',
    method: 'post',
    buffer,
    pb: 'pbCsms.FindRepairRecordReply'
  })
}

// ==================== 备件管理 ====================

export function useSparePart(data) {
  var buffer = protoCsms.pbCsms.UseSparePartArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/useSparePart',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findSparePartUsageList(data) {
  var buffer = protoCsms.pbCsms.FindSparePartUsageArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/csms/findSparePartUsageList',
    method: 'post',
    buffer,
    pb: 'pbCsms.FindSparePartUsageReply'
  })
}
