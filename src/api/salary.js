import request from '@/utils/request'

export function createSalary(data) {
  var buffer = this.$protoRoot.pbsalary.SalaryModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salary/createSalary',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateSalary(data) {
  var buffer = this.$protoRoot.pbsalary.SalaryModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salary/updateSalary',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteSalary(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salary/deleteSalary',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findSalaryById(data) {
  var buffer = this.$protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salary/findSalaryById',
    method: 'post',
    buffer,
    pb: 'pbsalary.FindSalaryReply'
  })
}

export function findSalaryList(data) {
  var buffer = this.$protoRoot.pbsalary.FindSalaryArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/salary/findSalaryList',
    method: 'post',
    buffer,
    pb: 'pbsalary.FindSalaryReply'
  })
}

