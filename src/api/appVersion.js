import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createAppVersion(data) {
  var buffer = protoRoot.pbappVersion.AppVersionModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/appVersion/createAppVersion',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateAppVersion(data) {
  var buffer = protoRoot.pbappVersion.AppVersionModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/appVersion/updateAppVersion',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteAppVersion(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/appVersion/deleteAppVersion',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findAppVersionById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/appVersion/findAppVersionById',
    method: 'post',
    buffer,
    pb: 'pbappVersion.FindAppVersionReply'
  })
}

export function findAppVersionList(data) {
  var buffer = protoRoot.pbappVersion.FindAppVersionArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/appVersion/findAppVersionList',
    method: 'post',
    buffer,
    pb: 'pbappVersion.FindAppVersionReply'
  })
}

