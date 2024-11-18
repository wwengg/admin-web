import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createGoods(data) {
  var buffer = protoRoot.pbgoods.GoodsModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/goods/createGoods',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateGoods(data) {
  var buffer = protoRoot.pbgoods.GoodsModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/goods/updateGoods',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteGoods(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/goods/deleteGoods',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findGoodsById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/goods/findGoodsById',
    method: 'post',
    buffer,
    pb: 'pbgoods.FindGoodsReply'
  })
}

export function findGoodsList(data) {
  var buffer = protoRoot.pbgoods.FindGoodsArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/goods/findGoodsList',
    method: 'post',
    buffer,
    pb: 'pbgoods.FindGoodsReply'
  })
}

