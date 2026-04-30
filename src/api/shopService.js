import request from '@/utils/request'
import protoShop from '@/proto/shop.js'

// ==================== 商品管理 ====================

export function createShopProduct(data) {
  var buffer = protoShop.pbShop.ShopProduct.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/createShopProduct',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateShopProduct(data) {
  var buffer = protoShop.pbShop.ShopProduct.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/updateShopProduct',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteShopProduct(data) {
  var buffer = protoShop.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/deleteShopProduct',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findShopProductById(data) {
  var buffer = protoShop.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/findShopProductById',
    method: 'post',
    buffer,
    pb: 'pbShop.FindShopProductReply'
  })
}

export function findShopProductList(data) {
  var buffer = protoShop.pbShop.FindShopProductArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/findShopProductList',
    method: 'post',
    buffer,
    pb: 'pbShop.FindShopProductReply'
  })
}

// ==================== 积分账户 ====================

export function getPointsAccount(data) {
  var buffer = protoShop.pbShop.GetPointsAccountArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/getPointsAccount',
    method: 'post',
    buffer,
    pb: 'pbShop.GetPointsAccountReply'
  })
}

export function addPoints(data) {
  var buffer = protoShop.pbShop.AddPointsArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/addPoints',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findPointsTransactionList(data) {
  var buffer = protoShop.pbShop.FindPointsTransactionArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/findPointsTransactionList',
    method: 'post',
    buffer,
    pb: 'pbShop.FindPointsTransactionReply'
  })
}

// ==================== 兑换订单 ====================

export function createRedemptionOrder(data) {
  var buffer = protoShop.pbShop.CreateRedemptionOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/createRedemptionOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findRedemptionOrderById(data) {
  var buffer = protoShop.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/findRedemptionOrderById',
    method: 'post',
    buffer,
    pb: 'pbShop.FindRedemptionOrderReply'
  })
}

export function findRedemptionOrderList(data) {
  var buffer = protoShop.pbShop.FindRedemptionOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/findRedemptionOrderList',
    method: 'post',
    buffer,
    pb: 'pbShop.FindRedemptionOrderReply'
  })
}

export function shipRedemptionOrder(data) {
  var buffer = protoShop.pbShop.ShipRedemptionOrderArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/shipRedemptionOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function completeRedemptionOrder(data) {
  var buffer = protoShop.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/completeRedemptionOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function cancelRedemptionOrder(data) {
  var buffer = protoShop.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/cancelRedemptionOrder',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}
