import request from '@/utils/request'
import protoMes from '@/proto/mes.js'

// ==================== 生产工单管理 ====================

export function createProductionOrder(data) {
  var buffer = protoMes.pbMes.ProductionOrder.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/createProductionOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateProductionOrder(data) {
  var buffer = protoMes.pbMes.ProductionOrder.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/updateProductionOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteProductionOrder(data) {
  var buffer = protoMes.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/deleteProductionOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findProductionOrderById(data) {
  var buffer = protoMes.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/findProductionOrderById',
    method: 'post',
    buffer,
    pb: 'pbMes.FindProductionOrderReply'
  })
}

export function findProductionOrderList(data) {
  var buffer = protoMes.pbMes.FindProductionOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/findProductionOrderList',
    method: 'post',
    buffer,
    pb: 'pbMes.FindProductionOrderReply'
  })
}

// ==================== 生产操作 ====================

export function startProduction(data) {
  var buffer = protoMes.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/startProduction',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function recordMaterialConsumption(data) {
  var buffer = protoMes.pbMes.RecordMaterialArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/recordMaterialConsumption',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function completeProduction(data) {
  var buffer = protoMes.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/completeProduction',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

// ==================== BOM配方管理 ====================

export function createBomFormula(data) {
  var buffer = protoMes.pbMes.BomFormula.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/createBomFormula',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateBomFormula(data) {
  var buffer = protoMes.pbMes.BomFormula.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/updateBomFormula',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteBomFormula(data) {
  var buffer = protoMes.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/deleteBomFormula',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findBomFormulaById(data) {
  var buffer = protoMes.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/findBomFormulaById',
    method: 'post',
    buffer,
    pb: 'pbMes.FindBomFormulaReply'
  })
}

export function findBomFormulaList(data) {
  var buffer = protoMes.pbMes.FindBomFormulaArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/mes/findBomFormulaList',
    method: 'post',
    buffer,
    pb: 'pbMes.FindBomFormulaReply'
  })
}
