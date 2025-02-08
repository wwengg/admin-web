import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createMomentLike(data) {
  var buffer = protoRoot.pbmomentLike.MomentLikeModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentLike/createMomentLike',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateMomentLike(data) {
  var buffer = protoRoot.pbmomentLike.MomentLikeModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentLike/updateMomentLike',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteMomentLike(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentLike/deleteMomentLike',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findMomentLikeById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentLike/findMomentLikeById',
    method: 'post',
    buffer,
    pb: 'pbmomentLike.FindMomentLikeReply'
  })
}

export function findMomentLikeList(data) {
  var buffer = protoRoot.pbmomentLike.FindMomentLikeArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentLike/findMomentLikeList',
    method: 'post',
    buffer,
    pb: 'pbmomentLike.FindMomentLikeReply'
  })
}

