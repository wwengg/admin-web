import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import protoRoot from '@/proto/proto'
// import data from '@/views/pdf/content'
var protobuf = require('protobufjs')

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.mock === true) {
      config.baseURL = process.env.VUE_APP_BASE_MOCK
    } else {
      config.headers['Accept'] = 'application/x-protobuf'
      config.responseType = 'arraybuffer'
    }
    // do something before request is sent
    var messageData = {}
    config.headers['Content-Type'] = 'application/x-protobuf'
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()

      messageData['token'] = '123123'
    }
    messageData['v'] = '1'
    if (config.pb) {
      messageData['data'] = new Uint8Array(config.buffer)
      console.log(messageData)
      config.data = protoRoot.httpgate.HttpRequest.encode(messageData).finish().slice().buffer
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const data = response.data
    var res
    if (!response.config.pb) {
      res = data
    } else {
      try {
        // bufferData = Buffer.from(data, 'binary')
        // console.log(bufferData)
        var uintArray = new Uint8Array(response.data)
        const pbList = response.config.pb.split('.')
        console.log(pbList)
        const responseMessage = protoRoot[pbList[0]][pbList[1]]
        res = responseMessage.decode(uintArray)
        console.log(res)
      } catch (e) {
        Message({
          message: 'protobuf decode error:' + e.message,
          type: 'error',
          duration: 5 * 1000
        })
        console.log(e)
        if (e instanceof protobuf.util.ProtocolError) {
          // e.instance holds the so far decoded message with missing required fields
        } else {
          // wire format is invalid
        }
      }
    }
    // if the custom code is not 200, it is judged as an error.
    if (res.code !== protoRoot.pbcommon.EnumCode['Success']) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      if (res.msg === '') {
        res.msg = 'Error'
      }
      console.log(res.msg)
      return res.msg
    } else {
      if (response.config.pb) {
        const pbList = response.config.pb.split('.')
        const responseMessage = protoRoot[pbList[0]][pbList[1]]
        res = responseMessage.toObject(res, {
          enums: String,
          longs: String,
          defaults: true
        })
      }
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
