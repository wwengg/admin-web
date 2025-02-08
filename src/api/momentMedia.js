import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createMomentMedia(data) {
  var buffer = protoRoot.pbmomentMedia.MomentMediaModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentMedia/createMomentMedia',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateMomentMedia(data) {
  var buffer = protoRoot.pbmomentMedia.MomentMediaModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentMedia/updateMomentMedia',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteMomentMedia(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentMedia/deleteMomentMedia',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findMomentMediaById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentMedia/findMomentMediaById',
    method: 'post',
    buffer,
    pb: 'pbmomentMedia.FindMomentMediaReply'
  })
}

export function findMomentMediaList(data) {
  var buffer = protoRoot.pbmomentMedia.FindMomentMediaArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentMedia/findMomentMediaList',
    method: 'post',
    buffer,
    pb: 'pbmomentMedia.FindMomentMediaReply'
  })
}

