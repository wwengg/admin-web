import protobuf from 'protobufjs'
// import elements_pb from '../proto/galaxis/map/elements_pb.js';
// conduct
export default {
  install(app) {
    app.config.globalProperties.$protobuf = protobuf
    // app.config.globalProperties.$elements = elements_pb;
  }
}
