import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createUser(data) {
  var buffer = protoRoot.pbuser.UserModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/user/createUser',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateUser(data) {
  var buffer = protoRoot.pbuser.UserModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/user/updateUser',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteUser(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/user/deleteUser',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findUserById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/user/findUserById',
    method: 'post',
    buffer,
    pb: 'pbuser.FindUserReply'
  })
}

export function findUserList(data) {
  var buffer = protoRoot.pbuser.FindUserArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/user/findUserList',
    method: 'post',
    buffer,
    pb: 'pbuser.FindUserReply'
  })
}

export function login2(data) {
  var buffer = protoRoot.pbauth.AdminLoginArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/auth/adminLogin',
    method: 'post',
    buffer,
    pb: 'pbauth.AuthLoginReply'
  })
}

export function login(data) {
  return request({
    url: '/vue-element-admin/user/login',
    method: 'post',
    data,
    mock: true
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token },
    mock: true
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post',
    mock: true
  })
}
