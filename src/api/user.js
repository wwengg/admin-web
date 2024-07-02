import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createUser(data) {
  var buffer = protoRoot.pbuser.UserModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/user/createUser',
    method: 'post',
    buffer
  })
}

export function updateUser(data) {
  var buffer = protoRoot.pbuser.UserModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/user/updateUser',
    method: 'post',
    buffer
  })
}

export function deleteUser(id) {
  var buffer = protoRoot.pbcommon.IdArgs.encode({ id: id }).finish().slice().buffer
  return request({
    url: '/v2/user/deleteUser',
    method: 'post',
    buffer
  })
}

export function findUserById(id) {
  var buffer = protoRoot.pbcommon.IdArgs.encode({ id: id }).finish().slice().buffer
  return request({
    url: '/v2/user/findUserById',
    method: 'post',
    buffer,
    pb: 'pbuser.FindUserReplay'
  })
}

export function findUserList(data) {
  console.log(data)
  var buffer = protoRoot.pbuser.FindUserArgs.encode(data).finish().slice().buffer
  console.log(buffer)
  return request({
    url: '/v2/user/findUserList',
    method: 'post',
    buffer,
    pb: 'pbuser.FindUserReplay'
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
