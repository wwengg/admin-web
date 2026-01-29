import request from '@/utils/request'
import protoErp from '@/proto/erp.js'

export function createSalesOrder(data) {
  var buffer = protoErp.pbErpSales.SalesOrderModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/createSalesOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateSalesOrder(data) {
  var buffer = protoErp.pbErpSales.SalesOrderModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/updateSalesOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteSalesOrder(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/deleteSalesOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findSalesOrderById(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/findSalesOrderById',
    method: 'post',
    buffer,
    pb: 'pbErpSales.FindSalesOrderReply'
  })
}

export function findSalesOrderList(data) {
  var buffer = protoErp.pbErpSales.FindSalesOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/findSalesOrderList',
    method: 'post',
    buffer,
    pb: 'pbErpSales.FindSalesOrderReply'
  })
}

export function approveSalesOrder(data) {
  var buffer = protoErp.pbErpSales.ApproveSalesOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/approveSalesOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function shipment(data) {
  var buffer = protoErp.pbErpSales.ShipmentArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/shipment',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findSalesOrderItems(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/findSalesOrderItems',
    method: 'post',
    buffer,
    pb: 'pbErpSales.FindSalesOrderItemReply'
  })
}

export function createCustomer(data) {
  var buffer = protoErp.pbErpSales.CustomerModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/createCustomer',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateCustomer(data) {
  var buffer = protoErp.pbErpSales.CustomerModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/updateCustomer',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteCustomer(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/deleteCustomer',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findCustomerById(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/findCustomerById',
    method: 'post',
    buffer,
    pb: 'pbErpSales.FindCustomerReply'
  })
}

export function findCustomerList(data) {
  var buffer = protoErp.pbErpSales.FindCustomerArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/findCustomerList',
    method: 'post',
    buffer,
    pb: 'pbErpSales.FindCustomerReply'
  })
}

export function getStatistics(data) {
  var buffer = protoErp.pbcommon.Empty.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salesService/getStatistics',
    method: 'post',
    buffer,
    pb: 'pbErpSales.GetStatisticsReply'
  })
}

