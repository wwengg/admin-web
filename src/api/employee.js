import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createEmployee(data) {
  var buffer = protoRoot.pbemployee.EmployeeModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/employee/createEmployee',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateEmployee(data) {
  var buffer = protoRoot.pbemployee.EmployeeModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/employee/updateEmployee',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteEmployee(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/employee/deleteEmployee',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findEmployeeById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/employee/findEmployeeById',
    method: 'post',
    buffer,
    pb: 'pbemployee.FindEmployeeReply'
  })
}

export function findEmployeeList(data) {
  var buffer = protoRoot.pbemployee.FindEmployeeArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/employee/findEmployeeList',
    method: 'post',
    buffer,
    pb: 'pbemployee.FindEmployeeReply'
  })
}

