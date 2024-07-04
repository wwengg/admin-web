import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createUploadFile(data) {
  var buffer = protoRoot.pbuploadFile.UploadFileModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadFile/createUploadFile',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateUploadFile(data) {
  var buffer = protoRoot.pbuploadFile.UploadFileModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadFile/updateUploadFile',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteUploadFile(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadFile/deleteUploadFile',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findUploadFileById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadFile/findUploadFileById',
    method: 'post',
    buffer,
    pb: 'pbuploadFile.FindUploadFileReply'
  })
}

export function findUploadFileList(data) {
  var buffer = protoRoot.pbuploadFile.FindUploadFileArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadFile/findUploadFileList',
    method: 'post',
    buffer,
    pb: 'pbuploadFile.FindUploadFileReply'
  })
}

