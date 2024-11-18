import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createPermission(data) {
  var buffer = protoRoot.pbpermission.PermissionModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/permission/createPermission',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updatePermission(data) {
  var buffer = protoRoot.pbpermission.PermissionModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/permission/updatePermission',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deletePermission(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/permission/deletePermission',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findPermissionById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/permission/findPermissionById',
    method: 'post',
    buffer,
    pb: 'pbpermission.FindPermissionReply'
  })
}

export function findPermissionList(data) {
  var buffer = protoRoot.pbpermission.FindPermissionArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/permission/findPermissionList',
    method: 'post',
    buffer,
    pb: 'pbpermission.FindPermissionReply'
  })
}

export function findPermissionTree(data) {
  var buffer = protoRoot.pbpermission.FindPermissionArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/permission/findPermissionTree',
    method: 'post',
    buffer,
    pb: 'pbpermission.FindPermissionReply'
  })
}
