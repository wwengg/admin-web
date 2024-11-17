import request from '@/utils/request'

export function createUploadFile(data) {
  var buffer = this.$protoRoot.pbuploadFile.UploadFileModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadFile/createUploadFile',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateUploadFile(data) {
  var buffer = this.$protoRoot.pbuploadFile.UploadFileModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadFile/updateUploadFile',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteUploadFile(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadFile/deleteUploadFile',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findUploadFileById(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadFile/findUploadFileById',
    method: 'post',
    buffer,
    pb: 'pbuploadFile.FindUploadFileReply'
  })
}

export function findUploadFileList(data) {
  var buffer = this.$protoRoot.pbuploadFile.FindUploadFileArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/uploadFile/findUploadFileList',
    method: 'post',
    buffer,
    pb: 'pbuploadFile.FindUploadFileReply'
  })
}

