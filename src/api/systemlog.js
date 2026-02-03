import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function findSystemlog(data) {
  var buffer = protoRoot.pbsystemlog.FindSystemlogArgs.encode(data).finish().slice().buffer
  return request({
    url: '/v2/systemlog/findSystemlog',
    method: 'post',
    buffer,
    pb: 'pbsystemlog.FindSystemlogReply'
  })
}

