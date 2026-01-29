import request from '@/utils/request'
import protoErp from '@/proto/erp.js'

export function createPurchaseOrder(data) {
  var buffer = protoErp.pbErpPurchase.PurchaseOrderModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/createPurchaseOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updatePurchaseOrder(data) {
  var buffer = protoErp.pbErpPurchase.PurchaseOrderModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/updatePurchaseOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deletePurchaseOrder(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/deletePurchaseOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findPurchaseOrderById(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/findPurchaseOrderById',
    method: 'post',
    buffer,
    pb: 'pbErpPurchase.FindPurchaseOrderReply'
  })
}

export function findPurchaseOrderList(data) {
  var buffer = protoErp.pbErpPurchase.FindPurchaseOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/findPurchaseOrderList',
    method: 'post',
    buffer,
    pb: 'pbErpPurchase.FindPurchaseOrderReply'
  })
}

export function approvePurchaseOrder(data) {
  var buffer = protoErp.pbErpPurchase.ApprovePurchaseOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/approvePurchaseOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function receiveGoods(data) {
  var buffer = protoErp.pbErpPurchase.ReceiveGoodsArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/receiveGoods',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findPurchaseOrderItems(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/findPurchaseOrderItems',
    method: 'post',
    buffer,
    pb: 'pbErpPurchase.FindPurchaseOrderItemReply'
  })
}

export function createSupplier(data) {
  var buffer = protoErp.pbErpPurchase.SupplierModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/createSupplier',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateSupplier(data) {
  var buffer = protoErp.pbErpPurchase.SupplierModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/updateSupplier',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteSupplier(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/deleteSupplier',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findSupplierById(data) {
  var buffer = protoErp.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/findSupplierById',
    method: 'post',
    buffer,
    pb: 'pbErpPurchase.FindSupplierReply'
  })
}

export function findSupplierList(data) {
  var buffer = protoErp.pbErpPurchase.FindSupplierArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/purchaseService/findSupplierList',
    method: 'post',
    buffer,
    pb: 'pbErpPurchase.FindSupplierReply'
  })
}

