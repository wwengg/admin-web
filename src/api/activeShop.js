import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createActiveShop(data) {
  var buffer = protoRoot.pbactiveShop.ActiveShopModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/activeShop/createActiveShop',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateActiveShop(data) {
  var buffer = protoRoot.pbactiveShop.ActiveShopModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/activeShop/updateActiveShop',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteActiveShop(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/activeShop/deleteActiveShop',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findActiveShopById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/activeShop/findActiveShopById',
    method: 'post',
    buffer,
    pb: 'pbactiveShop.FindActiveShopReply'
  })
}

export function findActiveShopList(data) {
  var buffer = protoRoot.pbactiveShop.FindActiveShopArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/activeShop/findActiveShopList',
    method: 'post',
    buffer,
    pb: 'pbactiveShop.FindActiveShopReply'
  })
}

