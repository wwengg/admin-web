import request from '@/utils/request'

export function createUserOauth(data) {
  var buffer = this.$protoRoot.pbuserOauth.UserOauthModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/userOauth/createUserOauth',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateUserOauth(data) {
  var buffer = this.$protoRoot.pbuserOauth.UserOauthModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/userOauth/updateUserOauth',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteUserOauth(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/userOauth/deleteUserOauth',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findUserOauthById(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/userOauth/findUserOauthById',
    method: 'post',
    buffer,
    pb: 'pbuserOauth.FindUserOauthReply'
  })
}

export function findUserOauthList(data) {
  var buffer = this.$protoRoot.pbuserOauth.FindUserOauthArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/userOauth/findUserOauthList',
    method: 'post',
    buffer,
    pb: 'pbuserOauth.FindUserOauthReply'
  })
}

