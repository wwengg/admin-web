import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createMoment(data) {
  var buffer = protoRoot.pbmoment.MomentModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/moment/createMoment',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateMoment(data) {
  var buffer = protoRoot.pbmoment.MomentModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/moment/updateMoment',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteMoment(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/moment/deleteMoment',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findMomentById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/moment/findMomentById',
    method: 'post',
    buffer,
    pb: 'pbmoment.FindMomentReply'
  })
}

export function findMomentList(data) {
  var buffer = protoRoot.pbmoment.FindMomentArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/moment/findMomentList',
    method: 'post',
    buffer,
    pb: 'pbmoment.FindMomentReply'
  })
}

