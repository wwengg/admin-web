import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createApi(data) {
  var buffer = protoRoot.pbapi.ApiModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/createApi',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateApi(data) {
  var buffer = protoRoot.pbapi.ApiModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/updateApi',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteApi(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/deleteApi',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findApiById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/findApiById',
    method: 'post',
    buffer,
    pb: 'pbapi.FindApiReply'
  })
}

export function findApiList(data) {
  var buffer = protoRoot.pbapi.FindApiArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/findApiList',
    method: 'post',
    buffer,
    pb: 'pbapi.FindApiReply'
  })
}

