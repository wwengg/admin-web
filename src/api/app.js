import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createApp(data) {
  var buffer = protoRoot.pbapp.AppModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/app/createApp',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateApp(data) {
  var buffer = protoRoot.pbapp.AppModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/app/updateApp',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteApp(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/app/deleteApp',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findAppById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/app/findAppById',
    method: 'post',
    buffer,
    pb: 'pbapp.FindAppReply'
  })
}

export function findAppList(data) {
  var buffer = protoRoot.pbapp.FindAppArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/app/findAppList',
    method: 'post',
    buffer,
    pb: 'pbapp.FindAppReply'
  })
}

