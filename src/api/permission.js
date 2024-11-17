import request from '@/utils/request'

export function createPermission(data) {
  var buffer = this.$protoRoot.pbpermission.PermissionModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/permission/createPermission',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updatePermission(data) {
  var buffer = this.$protoRoot.pbpermission.PermissionModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/permission/updatePermission',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deletePermission(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/permission/deletePermission',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findPermissionById(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/permission/findPermissionById',
    method: 'post',
    buffer,
    pb: 'pbpermission.FindPermissionReply'
  })
}

export function findPermissionList(data) {
  var buffer = this.$protoRoot.pbpermission.FindPermissionArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/permission/findPermissionList',
    method: 'post',
    buffer,
    pb: 'pbpermission.FindPermissionReply'
  })
}

