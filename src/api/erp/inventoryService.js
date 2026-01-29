import request from '@/utils/request'
import protoErp from '@/proto/erp.js'

export function findInventoryById(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/findInventoryById',
    method: 'post',
    buffer,
    pb: 'pbErpInventory.FindInventoryReply'
  })
}

export function findInventoryList(data) {
  var buffer = protoErp.pbErpInventory.FindInventoryArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/findInventoryList',
    method: 'post',
    buffer,
    pb: 'pbErpInventory.FindInventoryReply'
  })
}

export function getAlerts(data) {
  var buffer = protoErp.pbcommon.Empty.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/getAlerts',
    method: 'post',
    buffer,
    pb: 'pbErpInventory.GetAlertsReply'
  })
}

export function getStatistics(data) {
  var buffer = protoErp.pbcommon.Empty.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/getStatistics',
    method: 'post',
    buffer,
    pb: 'pbErpInventory.GetStatisticsReply'
  })
}

export function inbound(data) {
  var buffer = protoErp.pbErpInventory.InboundArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/inbound',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function outbound(data) {
  var buffer = protoErp.pbErpInventory.OutboundArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/outbound',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findStockMovementList(data) {
  var buffer = protoErp.pbErpInventory.FindStockMovementArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/findStockMovementList',
    method: 'post',
    buffer,
    pb: 'pbErpInventory.FindStockMovementReply'
  })
}

export function createLocation(data) {
  var buffer = protoErp.pbErpInventory.LocationModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/createLocation',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateLocation(data) {
  var buffer = protoErp.pbErpInventory.LocationModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/updateLocation',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteLocation(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/deleteLocation',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findLocationById(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/findLocationById',
    method: 'post',
    buffer,
    pb: 'pbErpInventory.FindLocationReply'
  })
}

export function findLocationList(data) {
  var buffer = protoErp.pbErpInventory.FindLocationArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/findLocationList',
    method: 'post',
    buffer,
    pb: 'pbErpInventory.FindLocationReply'
  })
}

export function stocktake(data) {
  var buffer = protoErp.pbErpInventory.StocktakeArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/inventoryService/stocktake',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

