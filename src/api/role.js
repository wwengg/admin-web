import request from '@/utils/request'

export function createRole(data) {
  var buffer = this.$protoRoot.pbrole.RoleModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/role/createRole',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateRole2(data) {
  var buffer = this.$protoRoot.pbrole.RoleModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/role/updateRole',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteRole2(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/role/deleteRole',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findRoleById(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/role/findRoleById',
    method: 'post',
    buffer,
    pb: 'pbrole.FindRoleReply'
  })
}

export function findRoleList(data) {
  var buffer = this.$protoRoot.pbrole.FindRoleArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/role/findRoleList',
    method: 'post',
    buffer,
    pb: 'pbrole.FindRoleReply'
  })
}

export function getRoutes() {
  return request({
    url: '/vue-element-admin/routes',
    method: 'get',
    mock: true
  })
}

export function getRoles() {
  return request({
    url: '/vue-element-admin/roles',
    method: 'get',
    mock: true
  })
}

export function addRole(data) {
  return request({
    url: '/vue-element-admin/role',
    method: 'post',
    data,
    mock: true
  })
}

export function updateRole(id, data) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data,
    mock: true
  })
}

export function deleteRole(id) {
  return request({
    url: `/vue-element-admin/role/${id}`,
    method: 'delete',
    mock: true
  })
}
