import request from '@/utils/request'
import protoRoot from '@/proto/proto.js'

export function getConnList(data) {
  var buffer = protoRoot.pbcommon.Empty.encode(data).finish().slice().buffer
  return request({
    url: '/v2/logicAdmin/getConnList',
    method: 'post',
    buffer,
    pb: 'pblogic.GetConnListReply'
  })
}
