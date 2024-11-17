import request from '@/utils/request'

export function createApi(data) {
  var buffer = this.$protoRoot.pbapi.ApiModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/createApi',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateApi(data) {
  var buffer = this.$protoRoot.pbapi.ApiModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/updateApi',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteApi(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/deleteApi',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findApiById(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/findApiById',
    method: 'post',
    buffer,
    pb: 'pbapi.FindApiReply'
  })
}

export function findApiList(data) {
  var buffer = this.$protoRoot.pbapi.FindApiArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/findApiList',
    method: 'post',
    buffer,
    pb: 'pbapi.FindApiReply'
  })
}

export function findApiByCasbinRole(data) {
  var buffer = this.$protoRoot.pbapi.FindApiByCasbinRoleArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/findApiByCasbinRole',
    method: 'post',
    buffer,
    pb: 'pbapi.FindApiByCasbinRoleReply'
  })
}

export function setApiByCasbinRole(data) {
  var buffer = this.$protoRoot.pbapi.SetApiByCasbinRoleArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/api/setApiByCasbinRole',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}
