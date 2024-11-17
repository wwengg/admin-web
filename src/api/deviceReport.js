import request from '@/utils/request'

export function createDeviceReport(data) {
  var buffer = this.$protoRoot.pbdeviceReport.DeviceReportModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/deviceReport/createDeviceReport',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateDeviceReport(data) {
  var buffer = this.$protoRoot.pbdeviceReport.DeviceReportModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/deviceReport/updateDeviceReport',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteDeviceReport(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/deviceReport/deleteDeviceReport',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findDeviceReportById(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/deviceReport/findDeviceReportById',
    method: 'post',
    buffer,
    pb: 'pbdeviceReport.FindDeviceReportReplay'
  })
}

export function findDeviceReportList(data) {
  var buffer = this.$protoRoot.pbdeviceReport.FindDeviceReportArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/deviceReport/findDeviceReportList',
    method: 'post',
    buffer,
    pb: 'pbdeviceReport.FindDeviceReportReplay'
  })
}

export function aepReport(data) {
  var buffer = this.$protoRoot.pbdeviceReport.AepReportArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/deviceReport/aepReport',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

