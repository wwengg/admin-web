import request from '@/utils/request'

export function createEmployee(data) {
  var buffer = this.$protoRoot.pbemployee.EmployeeModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/employee/createEmployee',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateEmployee(data) {
  var buffer = this.$protoRoot.pbemployee.EmployeeModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/employee/updateEmployee',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteEmployee(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/employee/deleteEmployee',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findEmployeeById(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/employee/findEmployeeById',
    method: 'post',
    buffer,
    pb: 'pbemployee.FindEmployeeReply'
  })
}

export function findEmployeeList(data) {
  var buffer = this.$protoRoot.pbemployee.FindEmployeeArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/employee/findEmployeeList',
    method: 'post',
    buffer,
    pb: 'pbemployee.FindEmployeeReply'
  })
}

