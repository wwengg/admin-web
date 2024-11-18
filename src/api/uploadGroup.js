import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createUploadGroup(data) {
  var buffer = protoRoot.pbuploadGroup.UploadGroupModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadGroup/createUploadGroup',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateUploadGroup(data) {
  var buffer = protoRoot.pbuploadGroup.UploadGroupModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadGroup/updateUploadGroup',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteUploadGroup(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadGroup/deleteUploadGroup',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findUploadGroupById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadGroup/findUploadGroupById',
    method: 'post',
    buffer,
    pb: 'pbuploadGroup.FindUploadGroupReply'
  })
}

export function findUploadGroupList(data) {
  var buffer = protoRoot.pbuploadGroup.FindUploadGroupArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadGroup/findUploadGroupList',
    method: 'post',
    buffer,
    pb: 'pbuploadGroup.FindUploadGroupReply'
  })
}

