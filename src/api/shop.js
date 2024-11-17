import request from '@/utils/request'

export function createShop(data) {
  var buffer = this.$protoRoot.pbshop.ShopModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/createShop',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateShop(data) {
  var buffer = this.$protoRoot.pbshop.ShopModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/updateShop',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteShop(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/deleteShop',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findShopById(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/findShopById',
    method: 'post',
    buffer,
    pb: 'pbshop.FindShopReply'
  })
}

export function findShopList(data) {
  var buffer = this.$protoRoot.pbshop.FindShopArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/shop/findShopList',
    method: 'post',
    buffer,
    pb: 'pbshop.FindShopReply'
  })
}

