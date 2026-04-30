import request from '@/utils/request'
import protoOrg from '@/proto/organization.js'

export function createOrganization(data) {
  var buffer = protoOrg.pbOrganization.Organization.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/createOrganization',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateOrganization(data) {
  var buffer = protoOrg.pbOrganization.Organization.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/updateOrganization',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteOrganization(data) {
  var buffer = protoOrg.pbOrganization.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/deleteOrganization',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findOrganizationById(data) {
  var buffer = protoOrg.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/findOrganizationById',
    method: 'post',
    buffer,
    pb: 'pbOrganization.FindOrganizationReply'
  })
}

export function findOrganizationList(data) {
  var buffer = protoOrg.pbOrganization.FindOrganizationArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/findOrganizationList',
    method: 'post',
    buffer,
    pb: 'pbOrganization.FindOrganizationReply'
  })
}

export function getOrgTree(data) {
  var buffer = protoOrg.pbOrganization.GetOrgTreeArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/getOrgTree',
    method: 'post',
    buffer,
    pb: 'pbOrganization.GetOrgTreeReply'
  })
}

export function getOrgUsers(data) {
  var buffer = protoOrg.pbOrganization.GetOrgUsersArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/getOrgUsers',
    method: 'post',
    buffer,
    pb: 'pbOrganization.GetOrgUsersReply'
  })
}

export function getUserOrgs(data) {
  var buffer = protoOrg.pbOrganization.GetUserOrgsArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/getUserOrgs',
    method: 'post',
    buffer,
    pb: 'pbOrganization.GetOrgUsersReply'
  })
}

export function assignUserToOrg(data) {
  var buffer = protoOrg.pbOrganization.AssignUserToOrgArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/assignUserToOrg',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function batchAssignUsers(data) {
  var buffer = protoOrg.pbOrganization.BatchAssignUsersArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/batchAssignUsers',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function removeUserFromOrg(data) {
  var buffer = protoOrg.pbOrganization.RemoveUserFromOrgArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/removeUserFromOrg',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function moveOrganization(data) {
  var buffer = protoOrg.pbOrganization.MoveOrgArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/organizationService/moveOrganization',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

