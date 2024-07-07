import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createCasbinRule(data) {
  var buffer = protoRoot.pbcasbinRule.CasbinRuleModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/casbinRule/createCasbinRule',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateCasbinRule(data) {
  var buffer = protoRoot.pbcasbinRule.CasbinRuleModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/casbinRule/updateCasbinRule',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteCasbinRule(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/casbinRule/deleteCasbinRule',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findCasbinRuleById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/casbinRule/findCasbinRuleById',
    method: 'post',
    buffer,
    pb: 'pbcasbinRule.FindCasbinRuleReply'
  })
}

export function findCasbinRuleList(data) {
  var buffer = protoRoot.pbcasbinRule.FindCasbinRuleArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/casbinRule/findCasbinRuleList',
    method: 'post',
    buffer,
    pb: 'pbcasbinRule.FindCasbinRuleReply'
  })
}

