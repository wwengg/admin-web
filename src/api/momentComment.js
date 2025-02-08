import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function createMomentComment(data) {
  var buffer = protoRoot.pbmomentComment.MomentCommentModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentComment/createMomentComment',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function updateMomentComment(data) {
  var buffer = protoRoot.pbmomentComment.MomentCommentModel.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentComment/updateMomentComment',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function deleteMomentComment(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentComment/deleteMomentComment',
    method: 'post',
    buffer,
    pb: 'pbcommon.CommonResult'
  })
}

export function findMomentCommentById(data) {
  var buffer = protoRoot.pbcommon.IdArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentComment/findMomentCommentById',
    method: 'post',
    buffer,
    pb: 'pbmomentComment.FindMomentCommentReply'
  })
}

export function findMomentCommentList(data) {
  var buffer = protoRoot.pbmomentComment.FindMomentCommentArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/momentComment/findMomentCommentList',
    method: 'post',
    buffer,
    pb: 'pbmomentComment.FindMomentCommentReply'
  })
}

