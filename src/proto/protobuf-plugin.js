import protobuf from 'protobufjs'
// conduct
export default {
  install(app) {
    app.config.globalProperties.$protobuf = protobuf
  }
}
