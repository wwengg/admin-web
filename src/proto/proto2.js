/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict'

var $protobuf = require('protobufjs/minimal')

// Common aliases
var $Reader = $protobuf.Reader; var $Writer = $protobuf.Writer; var $util = $protobuf.util

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

$root.pbbase = (function() {
  /**
     * Namespace pbbase.
     * @exports pbbase
     * @namespace
     */
  var pbbase = {}

  pbbase.OyeBaseReq = (function() {
    /**
         * Properties of an OyeBaseReq.
         * @memberof pbbase
         * @interface IOyeBaseReq
         * @property {string|null} [key] OyeBaseReq key
         * @property {number|Long|null} [timestamp] OyeBaseReq timestamp
         * @property {number|Long|null} [nonce] OyeBaseReq nonce
         * @property {string|null} [token] OyeBaseReq token
         * @property {number|Long|null} [myUid] OyeBaseReq myUid
         * @property {string|null} [devDesc] OyeBaseReq devDesc
         * @property {string|null} [devUuid] OyeBaseReq devUuid
         * @property {string|null} [flavors] OyeBaseReq flavors
         * @property {string|null} [ver] OyeBaseReq ver
         * @property {string|null} [language] OyeBaseReq language
         * @property {string|null} [platform] OyeBaseReq platform
         * @property {string|null} [bundleId] OyeBaseReq bundleId
         * @property {string|null} [appId] OyeBaseReq appId
         * @property {pbbase.OyeBaseReq.PackageType|null} [pkgType] OyeBaseReq pkgType
         * @property {string|null} [shumeiDeviceId] OyeBaseReq shumeiDeviceId
         */

    /**
         * Constructs a new OyeBaseReq.
         * @memberof pbbase
         * @classdesc Represents an OyeBaseReq.
         * @implements IOyeBaseReq
         * @constructor
         * @param {pbbase.IOyeBaseReq=} [properties] Properties to set
         */
    function OyeBaseReq(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * OyeBaseReq key.
         * @member {string} key
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.key = ''

    /**
         * OyeBaseReq timestamp.
         * @member {number|Long} timestamp
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * OyeBaseReq nonce.
         * @member {number|Long} nonce
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.nonce = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * OyeBaseReq token.
         * @member {string} token
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.token = ''

    /**
         * OyeBaseReq myUid.
         * @member {number|Long} myUid
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.myUid = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * OyeBaseReq devDesc.
         * @member {string} devDesc
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.devDesc = ''

    /**
         * OyeBaseReq devUuid.
         * @member {string} devUuid
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.devUuid = ''

    /**
         * OyeBaseReq flavors.
         * @member {string} flavors
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.flavors = ''

    /**
         * OyeBaseReq ver.
         * @member {string} ver
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.ver = ''

    /**
         * OyeBaseReq language.
         * @member {string} language
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.language = ''

    /**
         * OyeBaseReq platform.
         * @member {string} platform
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.platform = ''

    /**
         * OyeBaseReq bundleId.
         * @member {string} bundleId
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.bundleId = ''

    /**
         * OyeBaseReq appId.
         * @member {string} appId
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.appId = ''

    /**
         * OyeBaseReq pkgType.
         * @member {pbbase.OyeBaseReq.PackageType} pkgType
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.pkgType = 0

    /**
         * OyeBaseReq shumeiDeviceId.
         * @member {string} shumeiDeviceId
         * @memberof pbbase.OyeBaseReq
         * @instance
         */
    OyeBaseReq.prototype.shumeiDeviceId = ''

    /**
         * Creates a new OyeBaseReq instance using the specified properties.
         * @function create
         * @memberof pbbase.OyeBaseReq
         * @static
         * @param {pbbase.IOyeBaseReq=} [properties] Properties to set
         * @returns {pbbase.OyeBaseReq} OyeBaseReq instance
         */
    OyeBaseReq.create = function create(properties) {
      return new OyeBaseReq(properties)
    }

    /**
         * Encodes the specified OyeBaseReq message. Does not implicitly {@link pbbase.OyeBaseReq.verify|verify} messages.
         * @function encode
         * @memberof pbbase.OyeBaseReq
         * @static
         * @param {pbbase.IOyeBaseReq} message OyeBaseReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    OyeBaseReq.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.key != null && Object.hasOwnProperty.call(message, 'key')) { writer.uint32(/* id 1, wireType 2 =*/10).string(message.key) }
      if (message.timestamp != null && Object.hasOwnProperty.call(message, 'timestamp')) { writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp) }
      if (message.nonce != null && Object.hasOwnProperty.call(message, 'nonce')) { writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nonce) }
      if (message.token != null && Object.hasOwnProperty.call(message, 'token')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.token) }
      if (message.myUid != null && Object.hasOwnProperty.call(message, 'myUid')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.myUid) }
      if (message.devDesc != null && Object.hasOwnProperty.call(message, 'devDesc')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.devDesc) }
      if (message.devUuid != null && Object.hasOwnProperty.call(message, 'devUuid')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.devUuid) }
      if (message.flavors != null && Object.hasOwnProperty.call(message, 'flavors')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.flavors) }
      if (message.ver != null && Object.hasOwnProperty.call(message, 'ver')) { writer.uint32(/* id 9, wireType 2 =*/74).string(message.ver) }
      if (message.language != null && Object.hasOwnProperty.call(message, 'language')) { writer.uint32(/* id 10, wireType 2 =*/82).string(message.language) }
      if (message.platform != null && Object.hasOwnProperty.call(message, 'platform')) { writer.uint32(/* id 11, wireType 2 =*/90).string(message.platform) }
      if (message.bundleId != null && Object.hasOwnProperty.call(message, 'bundleId')) { writer.uint32(/* id 12, wireType 2 =*/98).string(message.bundleId) }
      if (message.appId != null && Object.hasOwnProperty.call(message, 'appId')) { writer.uint32(/* id 13, wireType 2 =*/106).string(message.appId) }
      if (message.pkgType != null && Object.hasOwnProperty.call(message, 'pkgType')) { writer.uint32(/* id 14, wireType 0 =*/112).int32(message.pkgType) }
      if (message.shumeiDeviceId != null && Object.hasOwnProperty.call(message, 'shumeiDeviceId')) { writer.uint32(/* id 15, wireType 2 =*/122).string(message.shumeiDeviceId) }
      return writer
    }

    /**
         * Encodes the specified OyeBaseReq message, length delimited. Does not implicitly {@link pbbase.OyeBaseReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbbase.OyeBaseReq
         * @static
         * @param {pbbase.IOyeBaseReq} message OyeBaseReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    OyeBaseReq.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes an OyeBaseReq message from the specified reader or buffer.
         * @function decode
         * @memberof pbbase.OyeBaseReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbbase.OyeBaseReq} OyeBaseReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    OyeBaseReq.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbbase.OyeBaseReq()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.key = reader.string()
            break
          }
          case 2: {
            message.timestamp = reader.int64()
            break
          }
          case 3: {
            message.nonce = reader.int64()
            break
          }
          case 4: {
            message.token = reader.string()
            break
          }
          case 5: {
            message.myUid = reader.int64()
            break
          }
          case 6: {
            message.devDesc = reader.string()
            break
          }
          case 7: {
            message.devUuid = reader.string()
            break
          }
          case 8: {
            message.flavors = reader.string()
            break
          }
          case 9: {
            message.ver = reader.string()
            break
          }
          case 10: {
            message.language = reader.string()
            break
          }
          case 11: {
            message.platform = reader.string()
            break
          }
          case 12: {
            message.bundleId = reader.string()
            break
          }
          case 13: {
            message.appId = reader.string()
            break
          }
          case 14: {
            message.pkgType = reader.int32()
            break
          }
          case 15: {
            message.shumeiDeviceId = reader.string()
            break
          }
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes an OyeBaseReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbbase.OyeBaseReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbbase.OyeBaseReq} OyeBaseReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    OyeBaseReq.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies an OyeBaseReq message.
         * @function verify
         * @memberof pbbase.OyeBaseReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    OyeBaseReq.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.key != null && message.hasOwnProperty('key')) {
        if (!$util.isString(message.key)) { return 'key: string expected' }
      }
      if (message.timestamp != null && message.hasOwnProperty('timestamp')) {
        if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high))) { return 'timestamp: integer|Long expected' }
      }
      if (message.nonce != null && message.hasOwnProperty('nonce')) {
        if (!$util.isInteger(message.nonce) && !(message.nonce && $util.isInteger(message.nonce.low) && $util.isInteger(message.nonce.high))) { return 'nonce: integer|Long expected' }
      }
      if (message.token != null && message.hasOwnProperty('token')) {
        if (!$util.isString(message.token)) { return 'token: string expected' }
      }
      if (message.myUid != null && message.hasOwnProperty('myUid')) {
        if (!$util.isInteger(message.myUid) && !(message.myUid && $util.isInteger(message.myUid.low) && $util.isInteger(message.myUid.high))) { return 'myUid: integer|Long expected' }
      }
      if (message.devDesc != null && message.hasOwnProperty('devDesc')) {
        if (!$util.isString(message.devDesc)) { return 'devDesc: string expected' }
      }
      if (message.devUuid != null && message.hasOwnProperty('devUuid')) {
        if (!$util.isString(message.devUuid)) { return 'devUuid: string expected' }
      }
      if (message.flavors != null && message.hasOwnProperty('flavors')) {
        if (!$util.isString(message.flavors)) { return 'flavors: string expected' }
      }
      if (message.ver != null && message.hasOwnProperty('ver')) {
        if (!$util.isString(message.ver)) { return 'ver: string expected' }
      }
      if (message.language != null && message.hasOwnProperty('language')) {
        if (!$util.isString(message.language)) { return 'language: string expected' }
      }
      if (message.platform != null && message.hasOwnProperty('platform')) {
        if (!$util.isString(message.platform)) { return 'platform: string expected' }
      }
      if (message.bundleId != null && message.hasOwnProperty('bundleId')) {
        if (!$util.isString(message.bundleId)) { return 'bundleId: string expected' }
      }
      if (message.appId != null && message.hasOwnProperty('appId')) {
        if (!$util.isString(message.appId)) { return 'appId: string expected' }
      }
      if (message.pkgType != null && message.hasOwnProperty('pkgType')) {
        switch (message.pkgType) {
          default:
            return 'pkgType: enum value expected'
          case 0:
          case 1:
            break
        }
      }
      if (message.shumeiDeviceId != null && message.hasOwnProperty('shumeiDeviceId')) {
        if (!$util.isString(message.shumeiDeviceId)) { return 'shumeiDeviceId: string expected' }
      }
      return null
    }

    /**
         * Creates an OyeBaseReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbbase.OyeBaseReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbbase.OyeBaseReq} OyeBaseReq
         */
    OyeBaseReq.fromObject = function fromObject(object) {
      if (object instanceof $root.pbbase.OyeBaseReq) { return object }
      var message = new $root.pbbase.OyeBaseReq()
      if (object.key != null) { message.key = String(object.key) }
      if (object.timestamp != null) {
        if ($util.Long) { (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false } else if (typeof object.timestamp === 'string') { message.timestamp = parseInt(object.timestamp, 10) } else if (typeof object.timestamp === 'number') { message.timestamp = object.timestamp } else if (typeof object.timestamp === 'object') { message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber() }
      }
      if (object.nonce != null) {
        if ($util.Long) { (message.nonce = $util.Long.fromValue(object.nonce)).unsigned = false } else if (typeof object.nonce === 'string') { message.nonce = parseInt(object.nonce, 10) } else if (typeof object.nonce === 'number') { message.nonce = object.nonce } else if (typeof object.nonce === 'object') { message.nonce = new $util.LongBits(object.nonce.low >>> 0, object.nonce.high >>> 0).toNumber() }
      }
      if (object.token != null) { message.token = String(object.token) }
      if (object.myUid != null) {
        if ($util.Long) { (message.myUid = $util.Long.fromValue(object.myUid)).unsigned = false } else if (typeof object.myUid === 'string') { message.myUid = parseInt(object.myUid, 10) } else if (typeof object.myUid === 'number') { message.myUid = object.myUid } else if (typeof object.myUid === 'object') { message.myUid = new $util.LongBits(object.myUid.low >>> 0, object.myUid.high >>> 0).toNumber() }
      }
      if (object.devDesc != null) { message.devDesc = String(object.devDesc) }
      if (object.devUuid != null) { message.devUuid = String(object.devUuid) }
      if (object.flavors != null) { message.flavors = String(object.flavors) }
      if (object.ver != null) { message.ver = String(object.ver) }
      if (object.language != null) { message.language = String(object.language) }
      if (object.platform != null) { message.platform = String(object.platform) }
      if (object.bundleId != null) { message.bundleId = String(object.bundleId) }
      if (object.appId != null) { message.appId = String(object.appId) }
      switch (object.pkgType) {
        default:
          if (typeof object.pkgType === 'number') {
            message.pkgType = object.pkgType
            break
          }
          break
        case 'UnKnow':
        case 0:
          message.pkgType = 0
          break
        case 'CN':
        case 1:
          message.pkgType = 1
          break
      }
      if (object.shumeiDeviceId != null) { message.shumeiDeviceId = String(object.shumeiDeviceId) }
      return message
    }

    /**
         * Creates a plain object from an OyeBaseReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbbase.OyeBaseReq
         * @static
         * @param {pbbase.OyeBaseReq} message OyeBaseReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    OyeBaseReq.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.key = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.timestamp = options.longs === String ? '0' : 0 }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.nonce = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.nonce = options.longs === String ? '0' : 0 }
        object.token = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.myUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.myUid = options.longs === String ? '0' : 0 }
        object.devDesc = ''
        object.devUuid = ''
        object.flavors = ''
        object.ver = ''
        object.language = ''
        object.platform = ''
        object.bundleId = ''
        object.appId = ''
        object.pkgType = options.enums === String ? 'UnKnow' : 0
        object.shumeiDeviceId = ''
      }
      if (message.key != null && message.hasOwnProperty('key')) { object.key = message.key }
      if (message.timestamp != null && message.hasOwnProperty('timestamp')) {
        if (typeof message.timestamp === 'number') { object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp } else { object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp }
      }
      if (message.nonce != null && message.hasOwnProperty('nonce')) {
        if (typeof message.nonce === 'number') { object.nonce = options.longs === String ? String(message.nonce) : message.nonce } else { object.nonce = options.longs === String ? $util.Long.prototype.toString.call(message.nonce) : options.longs === Number ? new $util.LongBits(message.nonce.low >>> 0, message.nonce.high >>> 0).toNumber() : message.nonce }
      }
      if (message.token != null && message.hasOwnProperty('token')) { object.token = message.token }
      if (message.myUid != null && message.hasOwnProperty('myUid')) {
        if (typeof message.myUid === 'number') { object.myUid = options.longs === String ? String(message.myUid) : message.myUid } else { object.myUid = options.longs === String ? $util.Long.prototype.toString.call(message.myUid) : options.longs === Number ? new $util.LongBits(message.myUid.low >>> 0, message.myUid.high >>> 0).toNumber() : message.myUid }
      }
      if (message.devDesc != null && message.hasOwnProperty('devDesc')) { object.devDesc = message.devDesc }
      if (message.devUuid != null && message.hasOwnProperty('devUuid')) { object.devUuid = message.devUuid }
      if (message.flavors != null && message.hasOwnProperty('flavors')) { object.flavors = message.flavors }
      if (message.ver != null && message.hasOwnProperty('ver')) { object.ver = message.ver }
      if (message.language != null && message.hasOwnProperty('language')) { object.language = message.language }
      if (message.platform != null && message.hasOwnProperty('platform')) { object.platform = message.platform }
      if (message.bundleId != null && message.hasOwnProperty('bundleId')) { object.bundleId = message.bundleId }
      if (message.appId != null && message.hasOwnProperty('appId')) { object.appId = message.appId }
      if (message.pkgType != null && message.hasOwnProperty('pkgType')) { object.pkgType = options.enums === String ? $root.pbbase.OyeBaseReq.PackageType[message.pkgType] === undefined ? message.pkgType : $root.pbbase.OyeBaseReq.PackageType[message.pkgType] : message.pkgType }
      if (message.shumeiDeviceId != null && message.hasOwnProperty('shumeiDeviceId')) { object.shumeiDeviceId = message.shumeiDeviceId }
      return object
    }

    /**
         * Converts this OyeBaseReq to JSON.
         * @function toJSON
         * @memberof pbbase.OyeBaseReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    OyeBaseReq.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for OyeBaseReq
         * @function getTypeUrl
         * @memberof pbbase.OyeBaseReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    OyeBaseReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbbase.OyeBaseReq'
    }

    /**
         * PackageType enum.
         * @name pbbase.OyeBaseReq.PackageType
         * @enum {number}
         * @property {number} UnKnow=0 UnKnow value
         * @property {number} CN=1 CN value
         */
    OyeBaseReq.PackageType = (function() {
      var valuesById = {}; var values = Object.create(valuesById)
      values[valuesById[0] = 'UnKnow'] = 0
      values[valuesById[1] = 'CN'] = 1
      return values
    })()

    return OyeBaseReq
  })()

  pbbase.OyeBaseRsp = (function() {
    /**
         * Properties of an OyeBaseRsp.
         * @memberof pbbase
         * @interface IOyeBaseRsp
         * @property {number|null} [errCode] OyeBaseRsp errCode
         * @property {string|null} [errMsg] OyeBaseRsp errMsg
         */

    /**
         * Constructs a new OyeBaseRsp.
         * @memberof pbbase
         * @classdesc Represents an OyeBaseRsp.
         * @implements IOyeBaseRsp
         * @constructor
         * @param {pbbase.IOyeBaseRsp=} [properties] Properties to set
         */
    function OyeBaseRsp(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * OyeBaseRsp errCode.
         * @member {number} errCode
         * @memberof pbbase.OyeBaseRsp
         * @instance
         */
    OyeBaseRsp.prototype.errCode = 0

    /**
         * OyeBaseRsp errMsg.
         * @member {string} errMsg
         * @memberof pbbase.OyeBaseRsp
         * @instance
         */
    OyeBaseRsp.prototype.errMsg = ''

    /**
         * Creates a new OyeBaseRsp instance using the specified properties.
         * @function create
         * @memberof pbbase.OyeBaseRsp
         * @static
         * @param {pbbase.IOyeBaseRsp=} [properties] Properties to set
         * @returns {pbbase.OyeBaseRsp} OyeBaseRsp instance
         */
    OyeBaseRsp.create = function create(properties) {
      return new OyeBaseRsp(properties)
    }

    /**
         * Encodes the specified OyeBaseRsp message. Does not implicitly {@link pbbase.OyeBaseRsp.verify|verify} messages.
         * @function encode
         * @memberof pbbase.OyeBaseRsp
         * @static
         * @param {pbbase.IOyeBaseRsp} message OyeBaseRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    OyeBaseRsp.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.errCode != null && Object.hasOwnProperty.call(message, 'errCode')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.errCode) }
      if (message.errMsg != null && Object.hasOwnProperty.call(message, 'errMsg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.errMsg) }
      return writer
    }

    /**
         * Encodes the specified OyeBaseRsp message, length delimited. Does not implicitly {@link pbbase.OyeBaseRsp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbbase.OyeBaseRsp
         * @static
         * @param {pbbase.IOyeBaseRsp} message OyeBaseRsp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    OyeBaseRsp.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes an OyeBaseRsp message from the specified reader or buffer.
         * @function decode
         * @memberof pbbase.OyeBaseRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbbase.OyeBaseRsp} OyeBaseRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    OyeBaseRsp.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbbase.OyeBaseRsp()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.errCode = reader.int32()
            break
          }
          case 2: {
            message.errMsg = reader.string()
            break
          }
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes an OyeBaseRsp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbbase.OyeBaseRsp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbbase.OyeBaseRsp} OyeBaseRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    OyeBaseRsp.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies an OyeBaseRsp message.
         * @function verify
         * @memberof pbbase.OyeBaseRsp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    OyeBaseRsp.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.errCode != null && message.hasOwnProperty('errCode')) {
        if (!$util.isInteger(message.errCode)) { return 'errCode: integer expected' }
      }
      if (message.errMsg != null && message.hasOwnProperty('errMsg')) {
        if (!$util.isString(message.errMsg)) { return 'errMsg: string expected' }
      }
      return null
    }

    /**
         * Creates an OyeBaseRsp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbbase.OyeBaseRsp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbbase.OyeBaseRsp} OyeBaseRsp
         */
    OyeBaseRsp.fromObject = function fromObject(object) {
      if (object instanceof $root.pbbase.OyeBaseRsp) { return object }
      var message = new $root.pbbase.OyeBaseRsp()
      if (object.errCode != null) { message.errCode = object.errCode | 0 }
      if (object.errMsg != null) { message.errMsg = String(object.errMsg) }
      return message
    }

    /**
         * Creates a plain object from an OyeBaseRsp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbbase.OyeBaseRsp
         * @static
         * @param {pbbase.OyeBaseRsp} message OyeBaseRsp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    OyeBaseRsp.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.errCode = 0
        object.errMsg = ''
      }
      if (message.errCode != null && message.hasOwnProperty('errCode')) { object.errCode = message.errCode }
      if (message.errMsg != null && message.hasOwnProperty('errMsg')) { object.errMsg = message.errMsg }
      return object
    }

    /**
         * Converts this OyeBaseRsp to JSON.
         * @function toJSON
         * @memberof pbbase.OyeBaseRsp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    OyeBaseRsp.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for OyeBaseRsp
         * @function getTypeUrl
         * @memberof pbbase.OyeBaseRsp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    OyeBaseRsp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbbase.OyeBaseRsp'
    }

    return OyeBaseRsp
  })()

  pbbase.commonResult = (function() {
    /**
         * Properties of a commonResult.
         * @memberof pbbase
         * @interface IcommonResult
         * @property {pbbase.IOyeBaseRsp|null} [base] commonResult base
         */

    /**
         * Constructs a new commonResult.
         * @memberof pbbase
         * @classdesc Represents a commonResult.
         * @implements IcommonResult
         * @constructor
         * @param {pbbase.IcommonResult=} [properties] Properties to set
         */
    function commonResult(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * commonResult base.
         * @member {pbbase.IOyeBaseRsp|null|undefined} base
         * @memberof pbbase.commonResult
         * @instance
         */
    commonResult.prototype.base = null

    /**
         * Creates a new commonResult instance using the specified properties.
         * @function create
         * @memberof pbbase.commonResult
         * @static
         * @param {pbbase.IcommonResult=} [properties] Properties to set
         * @returns {pbbase.commonResult} commonResult instance
         */
    commonResult.create = function create(properties) {
      return new commonResult(properties)
    }

    /**
         * Encodes the specified commonResult message. Does not implicitly {@link pbbase.commonResult.verify|verify} messages.
         * @function encode
         * @memberof pbbase.commonResult
         * @static
         * @param {pbbase.IcommonResult} message commonResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    commonResult.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.base != null && Object.hasOwnProperty.call(message, 'base')) { $root.pbbase.OyeBaseRsp.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      return writer
    }

    /**
         * Encodes the specified commonResult message, length delimited. Does not implicitly {@link pbbase.commonResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbbase.commonResult
         * @static
         * @param {pbbase.IcommonResult} message commonResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    commonResult.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a commonResult message from the specified reader or buffer.
         * @function decode
         * @memberof pbbase.commonResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbbase.commonResult} commonResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    commonResult.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbbase.commonResult()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.base = $root.pbbase.OyeBaseRsp.decode(reader, reader.uint32())
            break
          }
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a commonResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbbase.commonResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbbase.commonResult} commonResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    commonResult.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a commonResult message.
         * @function verify
         * @memberof pbbase.commonResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    commonResult.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.base != null && message.hasOwnProperty('base')) {
        var error = $root.pbbase.OyeBaseRsp.verify(message.base)
        if (error) { return 'base.' + error }
      }
      return null
    }

    /**
         * Creates a commonResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbbase.commonResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbbase.commonResult} commonResult
         */
    commonResult.fromObject = function fromObject(object) {
      if (object instanceof $root.pbbase.commonResult) { return object }
      var message = new $root.pbbase.commonResult()
      if (object.base != null) {
        if (typeof object.base !== 'object') { throw TypeError('.pbbase.commonResult.base: object expected') }
        message.base = $root.pbbase.OyeBaseRsp.fromObject(object.base)
      }
      return message
    }

    /**
         * Creates a plain object from a commonResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbbase.commonResult
         * @static
         * @param {pbbase.commonResult} message commonResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    commonResult.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) { object.base = null }
      if (message.base != null && message.hasOwnProperty('base')) { object.base = $root.pbbase.OyeBaseRsp.toObject(message.base, options) }
      return object
    }

    /**
         * Converts this commonResult to JSON.
         * @function toJSON
         * @memberof pbbase.commonResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    commonResult.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for commonResult
         * @function getTypeUrl
         * @memberof pbbase.commonResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    commonResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbbase.commonResult'
    }

    return commonResult
  })()

  return pbbase
})()

$root.pbactivity = (function() {
  /**
     * Namespace pbactivity.
     * @exports pbactivity
     * @namespace
     */
  var pbactivity = {}

  /**
     * ActivityType enum.
     * @name pbactivity.ActivityType
     * @enum {number}
     * @property {number} ActivityType_None=0 ActivityType_None value
     * @property {number} ActivityType_NewAward=1 ActivityType_NewAward value
     */
  pbactivity.ActivityType = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'ActivityType_None'] = 0
    values[valuesById[1] = 'ActivityType_NewAward'] = 1
    return values
  })()

  /**
     * ActivityTaskRewardType enum.
     * @name pbactivity.ActivityTaskRewardType
     * @enum {number}
     * @property {number} ActivityRewardType_None=0 ActivityRewardType_None value
     * @property {number} ActivityRewardType_Diamonds=1 ActivityRewardType_Diamonds value
     */
  pbactivity.ActivityTaskRewardType = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'ActivityRewardType_None'] = 0
    values[valuesById[1] = 'ActivityRewardType_Diamonds'] = 1
    return values
  })()

  /**
     * ActivityRewardStatus enum.
     * @name pbactivity.ActivityRewardStatus
     * @enum {number}
     * @property {number} ActivityRewardStatus_None=0 ActivityRewardStatus_None value
     * @property {number} ActivityRewardStatus_Completed=1 ActivityRewardStatus_Completed value
     */
  pbactivity.ActivityRewardStatus = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'ActivityRewardStatus_None'] = 0
    values[valuesById[1] = 'ActivityRewardStatus_Completed'] = 1
    return values
  })()

  pbactivity.ActivityModel = (function() {
    /**
         * Properties of an ActivityModel.
         * @memberof pbactivity
         * @interface IActivityModel
         * @property {number|Long|null} [id] ActivityModel id
         * @property {string|null} [createdAt] ActivityModel createdAt
         * @property {string|null} [updatedAt] ActivityModel updatedAt
         * @property {string|null} [name] ActivityModel name
         * @property {string|null} [startAt] ActivityModel startAt
         * @property {string|null} [endAt] ActivityModel endAt
         * @property {pbactivity.ActivityType|null} [type] ActivityModel type
         */

    /**
         * Constructs a new ActivityModel.
         * @memberof pbactivity
         * @classdesc Represents an ActivityModel.
         * @implements IActivityModel
         * @constructor
         * @param {pbactivity.IActivityModel=} [properties] Properties to set
         */
    function ActivityModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * ActivityModel id.
         * @member {number|Long} id
         * @memberof pbactivity.ActivityModel
         * @instance
         */
    ActivityModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * ActivityModel createdAt.
         * @member {string} createdAt
         * @memberof pbactivity.ActivityModel
         * @instance
         */
    ActivityModel.prototype.createdAt = ''

    /**
         * ActivityModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbactivity.ActivityModel
         * @instance
         */
    ActivityModel.prototype.updatedAt = ''

    /**
         * ActivityModel name.
         * @member {string} name
         * @memberof pbactivity.ActivityModel
         * @instance
         */
    ActivityModel.prototype.name = ''

    /**
         * ActivityModel startAt.
         * @member {string} startAt
         * @memberof pbactivity.ActivityModel
         * @instance
         */
    ActivityModel.prototype.startAt = ''

    /**
         * ActivityModel endAt.
         * @member {string} endAt
         * @memberof pbactivity.ActivityModel
         * @instance
         */
    ActivityModel.prototype.endAt = ''

    /**
         * ActivityModel type.
         * @member {pbactivity.ActivityType} type
         * @memberof pbactivity.ActivityModel
         * @instance
         */
    ActivityModel.prototype.type = 0

    /**
         * Creates a new ActivityModel instance using the specified properties.
         * @function create
         * @memberof pbactivity.ActivityModel
         * @static
         * @param {pbactivity.IActivityModel=} [properties] Properties to set
         * @returns {pbactivity.ActivityModel} ActivityModel instance
         */
    ActivityModel.create = function create(properties) {
      return new ActivityModel(properties)
    }

    /**
         * Encodes the specified ActivityModel message. Does not implicitly {@link pbactivity.ActivityModel.verify|verify} messages.
         * @function encode
         * @memberof pbactivity.ActivityModel
         * @static
         * @param {pbactivity.IActivityModel} message ActivityModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    ActivityModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.name != null && Object.hasOwnProperty.call(message, 'name')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.name) }
      if (message.startAt != null && Object.hasOwnProperty.call(message, 'startAt')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.startAt) }
      if (message.endAt != null && Object.hasOwnProperty.call(message, 'endAt')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.endAt) }
      if (message.type != null && Object.hasOwnProperty.call(message, 'type')) { writer.uint32(/* id 7, wireType 0 =*/56).int32(message.type) }
      return writer
    }

    /**
         * Encodes the specified ActivityModel message, length delimited. Does not implicitly {@link pbactivity.ActivityModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbactivity.ActivityModel
         * @static
         * @param {pbactivity.IActivityModel} message ActivityModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    ActivityModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes an ActivityModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbactivity.ActivityModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbactivity.ActivityModel} ActivityModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    ActivityModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbactivity.ActivityModel()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.id = reader.int64()
            break
          }
          case 2: {
            message.createdAt = reader.string()
            break
          }
          case 3: {
            message.updatedAt = reader.string()
            break
          }
          case 4: {
            message.name = reader.string()
            break
          }
          case 5: {
            message.startAt = reader.string()
            break
          }
          case 6: {
            message.endAt = reader.string()
            break
          }
          case 7: {
            message.type = reader.int32()
            break
          }
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes an ActivityModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbactivity.ActivityModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbactivity.ActivityModel} ActivityModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    ActivityModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies an ActivityModel message.
         * @function verify
         * @memberof pbactivity.ActivityModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    ActivityModel.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high))) { return 'id: integer|Long expected' }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) {
        if (!$util.isString(message.createdAt)) { return 'createdAt: string expected' }
      }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) {
        if (!$util.isString(message.updatedAt)) { return 'updatedAt: string expected' }
      }
      if (message.name != null && message.hasOwnProperty('name')) {
        if (!$util.isString(message.name)) { return 'name: string expected' }
      }
      if (message.startAt != null && message.hasOwnProperty('startAt')) {
        if (!$util.isString(message.startAt)) { return 'startAt: string expected' }
      }
      if (message.endAt != null && message.hasOwnProperty('endAt')) {
        if (!$util.isString(message.endAt)) { return 'endAt: string expected' }
      }
      if (message.type != null && message.hasOwnProperty('type')) {
        switch (message.type) {
          default:
            return 'type: enum value expected'
          case 0:
          case 1:
            break
        }
      }
      return null
    }

    /**
         * Creates an ActivityModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbactivity.ActivityModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbactivity.ActivityModel} ActivityModel
         */
    ActivityModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbactivity.ActivityModel) { return object }
      var message = new $root.pbactivity.ActivityModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.name != null) { message.name = String(object.name) }
      if (object.startAt != null) { message.startAt = String(object.startAt) }
      if (object.endAt != null) { message.endAt = String(object.endAt) }
      switch (object.type) {
        default:
          if (typeof object.type === 'number') {
            message.type = object.type
            break
          }
          break
        case 'ActivityType_None':
        case 0:
          message.type = 0
          break
        case 'ActivityType_NewAward':
        case 1:
          message.type = 1
          break
      }
      return message
    }

    /**
         * Creates a plain object from an ActivityModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbactivity.ActivityModel
         * @static
         * @param {pbactivity.ActivityModel} message ActivityModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    ActivityModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        object.name = ''
        object.startAt = ''
        object.endAt = ''
        object.type = options.enums === String ? 'ActivityType_None' : 0
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.name != null && message.hasOwnProperty('name')) { object.name = message.name }
      if (message.startAt != null && message.hasOwnProperty('startAt')) { object.startAt = message.startAt }
      if (message.endAt != null && message.hasOwnProperty('endAt')) { object.endAt = message.endAt }
      if (message.type != null && message.hasOwnProperty('type')) { object.type = options.enums === String ? $root.pbactivity.ActivityType[message.type] === undefined ? message.type : $root.pbactivity.ActivityType[message.type] : message.type }
      return object
    }

    /**
         * Converts this ActivityModel to JSON.
         * @function toJSON
         * @memberof pbactivity.ActivityModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    ActivityModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for ActivityModel
         * @function getTypeUrl
         * @memberof pbactivity.ActivityModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    ActivityModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbactivity.ActivityModel'
    }

    return ActivityModel
  })()

  pbactivity.ActivityTaskModel = (function() {
    /**
         * Properties of an ActivityTaskModel.
         * @memberof pbactivity
         * @interface IActivityTaskModel
         * @property {number|Long|null} [id] ActivityTaskModel id
         * @property {string|null} [createdAt] ActivityTaskModel createdAt
         * @property {string|null} [updatedAt] ActivityTaskModel updatedAt
         * @property {number|Long|null} [activityId] ActivityTaskModel activityId
         * @property {number|Long|null} [target] ActivityTaskModel target
         * @property {number|Long|null} [reward] ActivityTaskModel reward
         * @property {pbactivity.ActivityTaskRewardType|null} [type] ActivityTaskModel type
         * @property {string|null} [RewardReason] ActivityTaskModel RewardReason
         * @property {string|null} [CreatedBy] ActivityTaskModel CreatedBy
         */

    /**
         * Constructs a new ActivityTaskModel.
         * @memberof pbactivity
         * @classdesc Represents an ActivityTaskModel.
         * @implements IActivityTaskModel
         * @constructor
         * @param {pbactivity.IActivityTaskModel=} [properties] Properties to set
         */
    function ActivityTaskModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * ActivityTaskModel id.
         * @member {number|Long} id
         * @memberof pbactivity.ActivityTaskModel
         * @instance
         */
    ActivityTaskModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * ActivityTaskModel createdAt.
         * @member {string} createdAt
         * @memberof pbactivity.ActivityTaskModel
         * @instance
         */
    ActivityTaskModel.prototype.createdAt = ''

    /**
         * ActivityTaskModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbactivity.ActivityTaskModel
         * @instance
         */
    ActivityTaskModel.prototype.updatedAt = ''

    /**
         * ActivityTaskModel activityId.
         * @member {number|Long} activityId
         * @memberof pbactivity.ActivityTaskModel
         * @instance
         */
    ActivityTaskModel.prototype.activityId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * ActivityTaskModel target.
         * @member {number|Long} target
         * @memberof pbactivity.ActivityTaskModel
         * @instance
         */
    ActivityTaskModel.prototype.target = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * ActivityTaskModel reward.
         * @member {number|Long} reward
         * @memberof pbactivity.ActivityTaskModel
         * @instance
         */
    ActivityTaskModel.prototype.reward = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * ActivityTaskModel type.
         * @member {pbactivity.ActivityTaskRewardType} type
         * @memberof pbactivity.ActivityTaskModel
         * @instance
         */
    ActivityTaskModel.prototype.type = 0

    /**
         * ActivityTaskModel RewardReason.
         * @member {string} RewardReason
         * @memberof pbactivity.ActivityTaskModel
         * @instance
         */
    ActivityTaskModel.prototype.RewardReason = ''

    /**
         * ActivityTaskModel CreatedBy.
         * @member {string} CreatedBy
         * @memberof pbactivity.ActivityTaskModel
         * @instance
         */
    ActivityTaskModel.prototype.CreatedBy = ''

    /**
         * Creates a new ActivityTaskModel instance using the specified properties.
         * @function create
         * @memberof pbactivity.ActivityTaskModel
         * @static
         * @param {pbactivity.IActivityTaskModel=} [properties] Properties to set
         * @returns {pbactivity.ActivityTaskModel} ActivityTaskModel instance
         */
    ActivityTaskModel.create = function create(properties) {
      return new ActivityTaskModel(properties)
    }

    /**
         * Encodes the specified ActivityTaskModel message. Does not implicitly {@link pbactivity.ActivityTaskModel.verify|verify} messages.
         * @function encode
         * @memberof pbactivity.ActivityTaskModel
         * @static
         * @param {pbactivity.IActivityTaskModel} message ActivityTaskModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    ActivityTaskModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.activityId != null && Object.hasOwnProperty.call(message, 'activityId')) { writer.uint32(/* id 4, wireType 0 =*/32).int64(message.activityId) }
      if (message.target != null && Object.hasOwnProperty.call(message, 'target')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.target) }
      if (message.reward != null && Object.hasOwnProperty.call(message, 'reward')) { writer.uint32(/* id 6, wireType 0 =*/48).int64(message.reward) }
      if (message.type != null && Object.hasOwnProperty.call(message, 'type')) { writer.uint32(/* id 7, wireType 0 =*/56).int32(message.type) }
      if (message.RewardReason != null && Object.hasOwnProperty.call(message, 'RewardReason')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.RewardReason) }
      if (message.CreatedBy != null && Object.hasOwnProperty.call(message, 'CreatedBy')) { writer.uint32(/* id 9, wireType 2 =*/74).string(message.CreatedBy) }
      return writer
    }

    /**
         * Encodes the specified ActivityTaskModel message, length delimited. Does not implicitly {@link pbactivity.ActivityTaskModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbactivity.ActivityTaskModel
         * @static
         * @param {pbactivity.IActivityTaskModel} message ActivityTaskModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    ActivityTaskModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes an ActivityTaskModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbactivity.ActivityTaskModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbactivity.ActivityTaskModel} ActivityTaskModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    ActivityTaskModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbactivity.ActivityTaskModel()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.id = reader.int64()
            break
          }
          case 2: {
            message.createdAt = reader.string()
            break
          }
          case 3: {
            message.updatedAt = reader.string()
            break
          }
          case 4: {
            message.activityId = reader.int64()
            break
          }
          case 5: {
            message.target = reader.int64()
            break
          }
          case 6: {
            message.reward = reader.int64()
            break
          }
          case 7: {
            message.type = reader.int32()
            break
          }
          case 8: {
            message.RewardReason = reader.string()
            break
          }
          case 9: {
            message.CreatedBy = reader.string()
            break
          }
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes an ActivityTaskModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbactivity.ActivityTaskModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbactivity.ActivityTaskModel} ActivityTaskModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    ActivityTaskModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies an ActivityTaskModel message.
         * @function verify
         * @memberof pbactivity.ActivityTaskModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    ActivityTaskModel.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high))) { return 'id: integer|Long expected' }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) {
        if (!$util.isString(message.createdAt)) { return 'createdAt: string expected' }
      }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) {
        if (!$util.isString(message.updatedAt)) { return 'updatedAt: string expected' }
      }
      if (message.activityId != null && message.hasOwnProperty('activityId')) {
        if (!$util.isInteger(message.activityId) && !(message.activityId && $util.isInteger(message.activityId.low) && $util.isInteger(message.activityId.high))) { return 'activityId: integer|Long expected' }
      }
      if (message.target != null && message.hasOwnProperty('target')) {
        if (!$util.isInteger(message.target) && !(message.target && $util.isInteger(message.target.low) && $util.isInteger(message.target.high))) { return 'target: integer|Long expected' }
      }
      if (message.reward != null && message.hasOwnProperty('reward')) {
        if (!$util.isInteger(message.reward) && !(message.reward && $util.isInteger(message.reward.low) && $util.isInteger(message.reward.high))) { return 'reward: integer|Long expected' }
      }
      if (message.type != null && message.hasOwnProperty('type')) {
        switch (message.type) {
          default:
            return 'type: enum value expected'
          case 0:
          case 1:
            break
        }
      }
      if (message.RewardReason != null && message.hasOwnProperty('RewardReason')) {
        if (!$util.isString(message.RewardReason)) { return 'RewardReason: string expected' }
      }
      if (message.CreatedBy != null && message.hasOwnProperty('CreatedBy')) {
        if (!$util.isString(message.CreatedBy)) { return 'CreatedBy: string expected' }
      }
      return null
    }

    /**
         * Creates an ActivityTaskModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbactivity.ActivityTaskModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbactivity.ActivityTaskModel} ActivityTaskModel
         */
    ActivityTaskModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbactivity.ActivityTaskModel) { return object }
      var message = new $root.pbactivity.ActivityTaskModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.activityId != null) {
        if ($util.Long) { (message.activityId = $util.Long.fromValue(object.activityId)).unsigned = false } else if (typeof object.activityId === 'string') { message.activityId = parseInt(object.activityId, 10) } else if (typeof object.activityId === 'number') { message.activityId = object.activityId } else if (typeof object.activityId === 'object') { message.activityId = new $util.LongBits(object.activityId.low >>> 0, object.activityId.high >>> 0).toNumber() }
      }
      if (object.target != null) {
        if ($util.Long) { (message.target = $util.Long.fromValue(object.target)).unsigned = false } else if (typeof object.target === 'string') { message.target = parseInt(object.target, 10) } else if (typeof object.target === 'number') { message.target = object.target } else if (typeof object.target === 'object') { message.target = new $util.LongBits(object.target.low >>> 0, object.target.high >>> 0).toNumber() }
      }
      if (object.reward != null) {
        if ($util.Long) { (message.reward = $util.Long.fromValue(object.reward)).unsigned = false } else if (typeof object.reward === 'string') { message.reward = parseInt(object.reward, 10) } else if (typeof object.reward === 'number') { message.reward = object.reward } else if (typeof object.reward === 'object') { message.reward = new $util.LongBits(object.reward.low >>> 0, object.reward.high >>> 0).toNumber() }
      }
      switch (object.type) {
        default:
          if (typeof object.type === 'number') {
            message.type = object.type
            break
          }
          break
        case 'ActivityRewardType_None':
        case 0:
          message.type = 0
          break
        case 'ActivityRewardType_Diamonds':
        case 1:
          message.type = 1
          break
      }
      if (object.RewardReason != null) { message.RewardReason = String(object.RewardReason) }
      if (object.CreatedBy != null) { message.CreatedBy = String(object.CreatedBy) }
      return message
    }

    /**
         * Creates a plain object from an ActivityTaskModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbactivity.ActivityTaskModel
         * @static
         * @param {pbactivity.ActivityTaskModel} message ActivityTaskModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    ActivityTaskModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.activityId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.activityId = options.longs === String ? '0' : 0 }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.target = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.target = options.longs === String ? '0' : 0 }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.reward = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.reward = options.longs === String ? '0' : 0 }
        object.type = options.enums === String ? 'ActivityRewardType_None' : 0
        object.RewardReason = ''
        object.CreatedBy = ''
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.activityId != null && message.hasOwnProperty('activityId')) {
        if (typeof message.activityId === 'number') { object.activityId = options.longs === String ? String(message.activityId) : message.activityId } else { object.activityId = options.longs === String ? $util.Long.prototype.toString.call(message.activityId) : options.longs === Number ? new $util.LongBits(message.activityId.low >>> 0, message.activityId.high >>> 0).toNumber() : message.activityId }
      }
      if (message.target != null && message.hasOwnProperty('target')) {
        if (typeof message.target === 'number') { object.target = options.longs === String ? String(message.target) : message.target } else { object.target = options.longs === String ? $util.Long.prototype.toString.call(message.target) : options.longs === Number ? new $util.LongBits(message.target.low >>> 0, message.target.high >>> 0).toNumber() : message.target }
      }
      if (message.reward != null && message.hasOwnProperty('reward')) {
        if (typeof message.reward === 'number') { object.reward = options.longs === String ? String(message.reward) : message.reward } else { object.reward = options.longs === String ? $util.Long.prototype.toString.call(message.reward) : options.longs === Number ? new $util.LongBits(message.reward.low >>> 0, message.reward.high >>> 0).toNumber() : message.reward }
      }
      if (message.type != null && message.hasOwnProperty('type')) { object.type = options.enums === String ? $root.pbactivity.ActivityTaskRewardType[message.type] === undefined ? message.type : $root.pbactivity.ActivityTaskRewardType[message.type] : message.type }
      if (message.RewardReason != null && message.hasOwnProperty('RewardReason')) { object.RewardReason = message.RewardReason }
      if (message.CreatedBy != null && message.hasOwnProperty('CreatedBy')) { object.CreatedBy = message.CreatedBy }
      return object
    }

    /**
         * Converts this ActivityTaskModel to JSON.
         * @function toJSON
         * @memberof pbactivity.ActivityTaskModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    ActivityTaskModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for ActivityTaskModel
         * @function getTypeUrl
         * @memberof pbactivity.ActivityTaskModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    ActivityTaskModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbactivity.ActivityTaskModel'
    }

    return ActivityTaskModel
  })()

  pbactivity.ActivityRewardModel = (function() {
    /**
         * Properties of an ActivityRewardModel.
         * @memberof pbactivity
         * @interface IActivityRewardModel
         * @property {number|Long|null} [id] ActivityRewardModel id
         * @property {string|null} [createdAt] ActivityRewardModel createdAt
         * @property {string|null} [updatedAt] ActivityRewardModel updatedAt
         * @property {number|Long|null} [activityId] ActivityRewardModel activityId
         * @property {number|Long|null} [activityTaskId] ActivityRewardModel activityTaskId
         * @property {pbactivity.ActivityRewardStatus|null} [status] ActivityRewardModel status
         */

    /**
         * Constructs a new ActivityRewardModel.
         * @memberof pbactivity
         * @classdesc Represents an ActivityRewardModel.
         * @implements IActivityRewardModel
         * @constructor
         * @param {pbactivity.IActivityRewardModel=} [properties] Properties to set
         */
    function ActivityRewardModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * ActivityRewardModel id.
         * @member {number|Long} id
         * @memberof pbactivity.ActivityRewardModel
         * @instance
         */
    ActivityRewardModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * ActivityRewardModel createdAt.
         * @member {string} createdAt
         * @memberof pbactivity.ActivityRewardModel
         * @instance
         */
    ActivityRewardModel.prototype.createdAt = ''

    /**
         * ActivityRewardModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbactivity.ActivityRewardModel
         * @instance
         */
    ActivityRewardModel.prototype.updatedAt = ''

    /**
         * ActivityRewardModel activityId.
         * @member {number|Long} activityId
         * @memberof pbactivity.ActivityRewardModel
         * @instance
         */
    ActivityRewardModel.prototype.activityId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * ActivityRewardModel activityTaskId.
         * @member {number|Long} activityTaskId
         * @memberof pbactivity.ActivityRewardModel
         * @instance
         */
    ActivityRewardModel.prototype.activityTaskId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * ActivityRewardModel status.
         * @member {pbactivity.ActivityRewardStatus} status
         * @memberof pbactivity.ActivityRewardModel
         * @instance
         */
    ActivityRewardModel.prototype.status = 0

    /**
         * Creates a new ActivityRewardModel instance using the specified properties.
         * @function create
         * @memberof pbactivity.ActivityRewardModel
         * @static
         * @param {pbactivity.IActivityRewardModel=} [properties] Properties to set
         * @returns {pbactivity.ActivityRewardModel} ActivityRewardModel instance
         */
    ActivityRewardModel.create = function create(properties) {
      return new ActivityRewardModel(properties)
    }

    /**
         * Encodes the specified ActivityRewardModel message. Does not implicitly {@link pbactivity.ActivityRewardModel.verify|verify} messages.
         * @function encode
         * @memberof pbactivity.ActivityRewardModel
         * @static
         * @param {pbactivity.IActivityRewardModel} message ActivityRewardModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    ActivityRewardModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.activityId != null && Object.hasOwnProperty.call(message, 'activityId')) { writer.uint32(/* id 4, wireType 0 =*/32).int64(message.activityId) }
      if (message.activityTaskId != null && Object.hasOwnProperty.call(message, 'activityTaskId')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.activityTaskId) }
      if (message.status != null && Object.hasOwnProperty.call(message, 'status')) { writer.uint32(/* id 6, wireType 0 =*/48).int32(message.status) }
      return writer
    }

    /**
         * Encodes the specified ActivityRewardModel message, length delimited. Does not implicitly {@link pbactivity.ActivityRewardModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbactivity.ActivityRewardModel
         * @static
         * @param {pbactivity.IActivityRewardModel} message ActivityRewardModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    ActivityRewardModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes an ActivityRewardModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbactivity.ActivityRewardModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbactivity.ActivityRewardModel} ActivityRewardModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    ActivityRewardModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbactivity.ActivityRewardModel()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.id = reader.int64()
            break
          }
          case 2: {
            message.createdAt = reader.string()
            break
          }
          case 3: {
            message.updatedAt = reader.string()
            break
          }
          case 4: {
            message.activityId = reader.int64()
            break
          }
          case 5: {
            message.activityTaskId = reader.int64()
            break
          }
          case 6: {
            message.status = reader.int32()
            break
          }
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes an ActivityRewardModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbactivity.ActivityRewardModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbactivity.ActivityRewardModel} ActivityRewardModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    ActivityRewardModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies an ActivityRewardModel message.
         * @function verify
         * @memberof pbactivity.ActivityRewardModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    ActivityRewardModel.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high))) { return 'id: integer|Long expected' }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) {
        if (!$util.isString(message.createdAt)) { return 'createdAt: string expected' }
      }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) {
        if (!$util.isString(message.updatedAt)) { return 'updatedAt: string expected' }
      }
      if (message.activityId != null && message.hasOwnProperty('activityId')) {
        if (!$util.isInteger(message.activityId) && !(message.activityId && $util.isInteger(message.activityId.low) && $util.isInteger(message.activityId.high))) { return 'activityId: integer|Long expected' }
      }
      if (message.activityTaskId != null && message.hasOwnProperty('activityTaskId')) {
        if (!$util.isInteger(message.activityTaskId) && !(message.activityTaskId && $util.isInteger(message.activityTaskId.low) && $util.isInteger(message.activityTaskId.high))) { return 'activityTaskId: integer|Long expected' }
      }
      if (message.status != null && message.hasOwnProperty('status')) {
        switch (message.status) {
          default:
            return 'status: enum value expected'
          case 0:
          case 1:
            break
        }
      }
      return null
    }

    /**
         * Creates an ActivityRewardModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbactivity.ActivityRewardModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbactivity.ActivityRewardModel} ActivityRewardModel
         */
    ActivityRewardModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbactivity.ActivityRewardModel) { return object }
      var message = new $root.pbactivity.ActivityRewardModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.activityId != null) {
        if ($util.Long) { (message.activityId = $util.Long.fromValue(object.activityId)).unsigned = false } else if (typeof object.activityId === 'string') { message.activityId = parseInt(object.activityId, 10) } else if (typeof object.activityId === 'number') { message.activityId = object.activityId } else if (typeof object.activityId === 'object') { message.activityId = new $util.LongBits(object.activityId.low >>> 0, object.activityId.high >>> 0).toNumber() }
      }
      if (object.activityTaskId != null) {
        if ($util.Long) { (message.activityTaskId = $util.Long.fromValue(object.activityTaskId)).unsigned = false } else if (typeof object.activityTaskId === 'string') { message.activityTaskId = parseInt(object.activityTaskId, 10) } else if (typeof object.activityTaskId === 'number') { message.activityTaskId = object.activityTaskId } else if (typeof object.activityTaskId === 'object') { message.activityTaskId = new $util.LongBits(object.activityTaskId.low >>> 0, object.activityTaskId.high >>> 0).toNumber() }
      }
      switch (object.status) {
        default:
          if (typeof object.status === 'number') {
            message.status = object.status
            break
          }
          break
        case 'ActivityRewardStatus_None':
        case 0:
          message.status = 0
          break
        case 'ActivityRewardStatus_Completed':
        case 1:
          message.status = 1
          break
      }
      return message
    }

    /**
         * Creates a plain object from an ActivityRewardModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbactivity.ActivityRewardModel
         * @static
         * @param {pbactivity.ActivityRewardModel} message ActivityRewardModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    ActivityRewardModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.activityId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.activityId = options.longs === String ? '0' : 0 }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.activityTaskId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.activityTaskId = options.longs === String ? '0' : 0 }
        object.status = options.enums === String ? 'ActivityRewardStatus_None' : 0
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.activityId != null && message.hasOwnProperty('activityId')) {
        if (typeof message.activityId === 'number') { object.activityId = options.longs === String ? String(message.activityId) : message.activityId } else { object.activityId = options.longs === String ? $util.Long.prototype.toString.call(message.activityId) : options.longs === Number ? new $util.LongBits(message.activityId.low >>> 0, message.activityId.high >>> 0).toNumber() : message.activityId }
      }
      if (message.activityTaskId != null && message.hasOwnProperty('activityTaskId')) {
        if (typeof message.activityTaskId === 'number') { object.activityTaskId = options.longs === String ? String(message.activityTaskId) : message.activityTaskId } else { object.activityTaskId = options.longs === String ? $util.Long.prototype.toString.call(message.activityTaskId) : options.longs === Number ? new $util.LongBits(message.activityTaskId.low >>> 0, message.activityTaskId.high >>> 0).toNumber() : message.activityTaskId }
      }
      if (message.status != null && message.hasOwnProperty('status')) { object.status = options.enums === String ? $root.pbactivity.ActivityRewardStatus[message.status] === undefined ? message.status : $root.pbactivity.ActivityRewardStatus[message.status] : message.status }
      return object
    }

    /**
         * Converts this ActivityRewardModel to JSON.
         * @function toJSON
         * @memberof pbactivity.ActivityRewardModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    ActivityRewardModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for ActivityRewardModel
         * @function getTypeUrl
         * @memberof pbactivity.ActivityRewardModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    ActivityRewardModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbactivity.ActivityRewardModel'
    }

    return ActivityRewardModel
  })()

  pbactivity.FindActivityDetailMyselfArgs = (function() {
    /**
         * Properties of a FindActivityDetailMyselfArgs.
         * @memberof pbactivity
         * @interface IFindActivityDetailMyselfArgs
         * @property {pbbase.IOyeBaseReq|null} [base] FindActivityDetailMyselfArgs base
         * @property {number|Long|null} [activityId] FindActivityDetailMyselfArgs activityId
         */

    /**
         * Constructs a new FindActivityDetailMyselfArgs.
         * @memberof pbactivity
         * @classdesc Represents a FindActivityDetailMyselfArgs.
         * @implements IFindActivityDetailMyselfArgs
         * @constructor
         * @param {pbactivity.IFindActivityDetailMyselfArgs=} [properties] Properties to set
         */
    function FindActivityDetailMyselfArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindActivityDetailMyselfArgs base.
         * @member {pbbase.IOyeBaseReq|null|undefined} base
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @instance
         */
    FindActivityDetailMyselfArgs.prototype.base = null

    /**
         * FindActivityDetailMyselfArgs activityId.
         * @member {number|Long} activityId
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @instance
         */
    FindActivityDetailMyselfArgs.prototype.activityId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * Creates a new FindActivityDetailMyselfArgs instance using the specified properties.
         * @function create
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @static
         * @param {pbactivity.IFindActivityDetailMyselfArgs=} [properties] Properties to set
         * @returns {pbactivity.FindActivityDetailMyselfArgs} FindActivityDetailMyselfArgs instance
         */
    FindActivityDetailMyselfArgs.create = function create(properties) {
      return new FindActivityDetailMyselfArgs(properties)
    }

    /**
         * Encodes the specified FindActivityDetailMyselfArgs message. Does not implicitly {@link pbactivity.FindActivityDetailMyselfArgs.verify|verify} messages.
         * @function encode
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @static
         * @param {pbactivity.IFindActivityDetailMyselfArgs} message FindActivityDetailMyselfArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindActivityDetailMyselfArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.base != null && Object.hasOwnProperty.call(message, 'base')) { $root.pbbase.OyeBaseReq.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.activityId != null && Object.hasOwnProperty.call(message, 'activityId')) { writer.uint32(/* id 2, wireType 0 =*/16).int64(message.activityId) }
      return writer
    }

    /**
         * Encodes the specified FindActivityDetailMyselfArgs message, length delimited. Does not implicitly {@link pbactivity.FindActivityDetailMyselfArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @static
         * @param {pbactivity.IFindActivityDetailMyselfArgs} message FindActivityDetailMyselfArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindActivityDetailMyselfArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindActivityDetailMyselfArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbactivity.FindActivityDetailMyselfArgs} FindActivityDetailMyselfArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindActivityDetailMyselfArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbactivity.FindActivityDetailMyselfArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.base = $root.pbbase.OyeBaseReq.decode(reader, reader.uint32())
            break
          }
          case 2: {
            message.activityId = reader.int64()
            break
          }
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a FindActivityDetailMyselfArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbactivity.FindActivityDetailMyselfArgs} FindActivityDetailMyselfArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindActivityDetailMyselfArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindActivityDetailMyselfArgs message.
         * @function verify
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindActivityDetailMyselfArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.base != null && message.hasOwnProperty('base')) {
        var error = $root.pbbase.OyeBaseReq.verify(message.base)
        if (error) { return 'base.' + error }
      }
      if (message.activityId != null && message.hasOwnProperty('activityId')) {
        if (!$util.isInteger(message.activityId) && !(message.activityId && $util.isInteger(message.activityId.low) && $util.isInteger(message.activityId.high))) { return 'activityId: integer|Long expected' }
      }
      return null
    }

    /**
         * Creates a FindActivityDetailMyselfArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbactivity.FindActivityDetailMyselfArgs} FindActivityDetailMyselfArgs
         */
    FindActivityDetailMyselfArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbactivity.FindActivityDetailMyselfArgs) { return object }
      var message = new $root.pbactivity.FindActivityDetailMyselfArgs()
      if (object.base != null) {
        if (typeof object.base !== 'object') { throw TypeError('.pbactivity.FindActivityDetailMyselfArgs.base: object expected') }
        message.base = $root.pbbase.OyeBaseReq.fromObject(object.base)
      }
      if (object.activityId != null) {
        if ($util.Long) { (message.activityId = $util.Long.fromValue(object.activityId)).unsigned = false } else if (typeof object.activityId === 'string') { message.activityId = parseInt(object.activityId, 10) } else if (typeof object.activityId === 'number') { message.activityId = object.activityId } else if (typeof object.activityId === 'object') { message.activityId = new $util.LongBits(object.activityId.low >>> 0, object.activityId.high >>> 0).toNumber() }
      }
      return message
    }

    /**
         * Creates a plain object from a FindActivityDetailMyselfArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @static
         * @param {pbactivity.FindActivityDetailMyselfArgs} message FindActivityDetailMyselfArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindActivityDetailMyselfArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.base = null
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.activityId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.activityId = options.longs === String ? '0' : 0 }
      }
      if (message.base != null && message.hasOwnProperty('base')) { object.base = $root.pbbase.OyeBaseReq.toObject(message.base, options) }
      if (message.activityId != null && message.hasOwnProperty('activityId')) {
        if (typeof message.activityId === 'number') { object.activityId = options.longs === String ? String(message.activityId) : message.activityId } else { object.activityId = options.longs === String ? $util.Long.prototype.toString.call(message.activityId) : options.longs === Number ? new $util.LongBits(message.activityId.low >>> 0, message.activityId.high >>> 0).toNumber() : message.activityId }
      }
      return object
    }

    /**
         * Converts this FindActivityDetailMyselfArgs to JSON.
         * @function toJSON
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindActivityDetailMyselfArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindActivityDetailMyselfArgs
         * @function getTypeUrl
         * @memberof pbactivity.FindActivityDetailMyselfArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindActivityDetailMyselfArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbactivity.FindActivityDetailMyselfArgs'
    }

    return FindActivityDetailMyselfArgs
  })()

  pbactivity.FindActivityDetailMyselfReply = (function() {
    /**
         * Properties of a FindActivityDetailMyselfReply.
         * @memberof pbactivity
         * @interface IFindActivityDetailMyselfReply
         * @property {pbbase.IOyeBaseRsp|null} [base] FindActivityDetailMyselfReply base
         * @property {pbactivity.IActivityModel|null} [activity] FindActivityDetailMyselfReply activity
         * @property {Array.<pbactivity.FindActivityDetailMyselfReply.IActivityTaskReply>|null} [taskList] FindActivityDetailMyselfReply taskList
         */

    /**
         * Constructs a new FindActivityDetailMyselfReply.
         * @memberof pbactivity
         * @classdesc Represents a FindActivityDetailMyselfReply.
         * @implements IFindActivityDetailMyselfReply
         * @constructor
         * @param {pbactivity.IFindActivityDetailMyselfReply=} [properties] Properties to set
         */
    function FindActivityDetailMyselfReply(properties) {
      this.taskList = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindActivityDetailMyselfReply base.
         * @member {pbbase.IOyeBaseRsp|null|undefined} base
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @instance
         */
    FindActivityDetailMyselfReply.prototype.base = null

    /**
         * FindActivityDetailMyselfReply activity.
         * @member {pbactivity.IActivityModel|null|undefined} activity
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @instance
         */
    FindActivityDetailMyselfReply.prototype.activity = null

    /**
         * FindActivityDetailMyselfReply taskList.
         * @member {Array.<pbactivity.FindActivityDetailMyselfReply.IActivityTaskReply>} taskList
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @instance
         */
    FindActivityDetailMyselfReply.prototype.taskList = $util.emptyArray

    /**
         * Creates a new FindActivityDetailMyselfReply instance using the specified properties.
         * @function create
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @static
         * @param {pbactivity.IFindActivityDetailMyselfReply=} [properties] Properties to set
         * @returns {pbactivity.FindActivityDetailMyselfReply} FindActivityDetailMyselfReply instance
         */
    FindActivityDetailMyselfReply.create = function create(properties) {
      return new FindActivityDetailMyselfReply(properties)
    }

    /**
         * Encodes the specified FindActivityDetailMyselfReply message. Does not implicitly {@link pbactivity.FindActivityDetailMyselfReply.verify|verify} messages.
         * @function encode
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @static
         * @param {pbactivity.IFindActivityDetailMyselfReply} message FindActivityDetailMyselfReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindActivityDetailMyselfReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.base != null && Object.hasOwnProperty.call(message, 'base')) { $root.pbbase.OyeBaseRsp.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.activity != null && Object.hasOwnProperty.call(message, 'activity')) { $root.pbactivity.ActivityModel.encode(message.activity, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      if (message.taskList != null && message.taskList.length) {
        for (var i = 0; i < message.taskList.length; ++i) { $root.pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply.encode(message.taskList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      }
      return writer
    }

    /**
         * Encodes the specified FindActivityDetailMyselfReply message, length delimited. Does not implicitly {@link pbactivity.FindActivityDetailMyselfReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @static
         * @param {pbactivity.IFindActivityDetailMyselfReply} message FindActivityDetailMyselfReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindActivityDetailMyselfReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindActivityDetailMyselfReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbactivity.FindActivityDetailMyselfReply} FindActivityDetailMyselfReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindActivityDetailMyselfReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbactivity.FindActivityDetailMyselfReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.base = $root.pbbase.OyeBaseRsp.decode(reader, reader.uint32())
            break
          }
          case 2: {
            message.activity = $root.pbactivity.ActivityModel.decode(reader, reader.uint32())
            break
          }
          case 3: {
            if (!(message.taskList && message.taskList.length)) { message.taskList = [] }
            message.taskList.push($root.pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply.decode(reader, reader.uint32()))
            break
          }
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a FindActivityDetailMyselfReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbactivity.FindActivityDetailMyselfReply} FindActivityDetailMyselfReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindActivityDetailMyselfReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindActivityDetailMyselfReply message.
         * @function verify
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindActivityDetailMyselfReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.base != null && message.hasOwnProperty('base')) {
        var error = $root.pbbase.OyeBaseRsp.verify(message.base)
        if (error) { return 'base.' + error }
      }
      if (message.activity != null && message.hasOwnProperty('activity')) {
        var error = $root.pbactivity.ActivityModel.verify(message.activity)
        if (error) { return 'activity.' + error }
      }
      if (message.taskList != null && message.hasOwnProperty('taskList')) {
        if (!Array.isArray(message.taskList)) { return 'taskList: array expected' }
        for (var i = 0; i < message.taskList.length; ++i) {
          var error = $root.pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply.verify(message.taskList[i])
          if (error) { return 'taskList.' + error }
        }
      }
      return null
    }

    /**
         * Creates a FindActivityDetailMyselfReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbactivity.FindActivityDetailMyselfReply} FindActivityDetailMyselfReply
         */
    FindActivityDetailMyselfReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbactivity.FindActivityDetailMyselfReply) { return object }
      var message = new $root.pbactivity.FindActivityDetailMyselfReply()
      if (object.base != null) {
        if (typeof object.base !== 'object') { throw TypeError('.pbactivity.FindActivityDetailMyselfReply.base: object expected') }
        message.base = $root.pbbase.OyeBaseRsp.fromObject(object.base)
      }
      if (object.activity != null) {
        if (typeof object.activity !== 'object') { throw TypeError('.pbactivity.FindActivityDetailMyselfReply.activity: object expected') }
        message.activity = $root.pbactivity.ActivityModel.fromObject(object.activity)
      }
      if (object.taskList) {
        if (!Array.isArray(object.taskList)) { throw TypeError('.pbactivity.FindActivityDetailMyselfReply.taskList: array expected') }
        message.taskList = []
        for (var i = 0; i < object.taskList.length; ++i) {
          if (typeof object.taskList[i] !== 'object') { throw TypeError('.pbactivity.FindActivityDetailMyselfReply.taskList: object expected') }
          message.taskList[i] = $root.pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply.fromObject(object.taskList[i])
        }
      }
      return message
    }

    /**
         * Creates a plain object from a FindActivityDetailMyselfReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @static
         * @param {pbactivity.FindActivityDetailMyselfReply} message FindActivityDetailMyselfReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindActivityDetailMyselfReply.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.taskList = [] }
      if (options.defaults) {
        object.base = null
        object.activity = null
      }
      if (message.base != null && message.hasOwnProperty('base')) { object.base = $root.pbbase.OyeBaseRsp.toObject(message.base, options) }
      if (message.activity != null && message.hasOwnProperty('activity')) { object.activity = $root.pbactivity.ActivityModel.toObject(message.activity, options) }
      if (message.taskList && message.taskList.length) {
        object.taskList = []
        for (var j = 0; j < message.taskList.length; ++j) { object.taskList[j] = $root.pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply.toObject(message.taskList[j], options) }
      }
      return object
    }

    /**
         * Converts this FindActivityDetailMyselfReply to JSON.
         * @function toJSON
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindActivityDetailMyselfReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindActivityDetailMyselfReply
         * @function getTypeUrl
         * @memberof pbactivity.FindActivityDetailMyselfReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindActivityDetailMyselfReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbactivity.FindActivityDetailMyselfReply'
    }

    FindActivityDetailMyselfReply.ActivityTaskReply = (function() {
      /**
             * Properties of an ActivityTaskReply.
             * @memberof pbactivity.FindActivityDetailMyselfReply
             * @interface IActivityTaskReply
             * @property {pbactivity.IActivityTaskModel|null} [task] ActivityTaskReply task
             * @property {number|Long|null} [nowValue] ActivityTaskReply nowValue
             * @property {pbactivity.IActivityRewardModel|null} [activityReward] ActivityTaskReply activityReward
             */

      /**
             * Constructs a new ActivityTaskReply.
             * @memberof pbactivity.FindActivityDetailMyselfReply
             * @classdesc Represents an ActivityTaskReply.
             * @implements IActivityTaskReply
             * @constructor
             * @param {pbactivity.FindActivityDetailMyselfReply.IActivityTaskReply=} [properties] Properties to set
             */
      function ActivityTaskReply(properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
          }
        }
      }

      /**
             * ActivityTaskReply task.
             * @member {pbactivity.IActivityTaskModel|null|undefined} task
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @instance
             */
      ActivityTaskReply.prototype.task = null

      /**
             * ActivityTaskReply nowValue.
             * @member {number|Long} nowValue
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @instance
             */
      ActivityTaskReply.prototype.nowValue = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

      /**
             * ActivityTaskReply activityReward.
             * @member {pbactivity.IActivityRewardModel|null|undefined} activityReward
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @instance
             */
      ActivityTaskReply.prototype.activityReward = null

      /**
             * Creates a new ActivityTaskReply instance using the specified properties.
             * @function create
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @static
             * @param {pbactivity.FindActivityDetailMyselfReply.IActivityTaskReply=} [properties] Properties to set
             * @returns {pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply} ActivityTaskReply instance
             */
      ActivityTaskReply.create = function create(properties) {
        return new ActivityTaskReply(properties)
      }

      /**
             * Encodes the specified ActivityTaskReply message. Does not implicitly {@link pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply.verify|verify} messages.
             * @function encode
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @static
             * @param {pbactivity.FindActivityDetailMyselfReply.IActivityTaskReply} message ActivityTaskReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
      ActivityTaskReply.encode = function encode(message, writer) {
        if (!writer) { writer = $Writer.create() }
        if (message.task != null && Object.hasOwnProperty.call(message, 'task')) { $root.pbactivity.ActivityTaskModel.encode(message.task, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
        if (message.nowValue != null && Object.hasOwnProperty.call(message, 'nowValue')) { writer.uint32(/* id 2, wireType 0 =*/16).int64(message.nowValue) }
        if (message.activityReward != null && Object.hasOwnProperty.call(message, 'activityReward')) { $root.pbactivity.ActivityRewardModel.encode(message.activityReward, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
        return writer
      }

      /**
             * Encodes the specified ActivityTaskReply message, length delimited. Does not implicitly {@link pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @static
             * @param {pbactivity.FindActivityDetailMyselfReply.IActivityTaskReply} message ActivityTaskReply message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
      ActivityTaskReply.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
             * Decodes an ActivityTaskReply message from the specified reader or buffer.
             * @function decode
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply} ActivityTaskReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
      ActivityTaskReply.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
        var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1: {
              message.task = $root.pbactivity.ActivityTaskModel.decode(reader, reader.uint32())
              break
            }
            case 2: {
              message.nowValue = reader.int64()
              break
            }
            case 3: {
              message.activityReward = $root.pbactivity.ActivityRewardModel.decode(reader, reader.uint32())
              break
            }
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
             * Decodes an ActivityTaskReply message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply} ActivityTaskReply
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
      ActivityTaskReply.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
        return this.decode(reader, reader.uint32())
      }

      /**
             * Verifies an ActivityTaskReply message.
             * @function verify
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
      ActivityTaskReply.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) { return 'object expected' }
        if (message.task != null && message.hasOwnProperty('task')) {
          var error = $root.pbactivity.ActivityTaskModel.verify(message.task)
          if (error) { return 'task.' + error }
        }
        if (message.nowValue != null && message.hasOwnProperty('nowValue')) {
          if (!$util.isInteger(message.nowValue) && !(message.nowValue && $util.isInteger(message.nowValue.low) && $util.isInteger(message.nowValue.high))) { return 'nowValue: integer|Long expected' }
        }
        if (message.activityReward != null && message.hasOwnProperty('activityReward')) {
          var error = $root.pbactivity.ActivityRewardModel.verify(message.activityReward)
          if (error) { return 'activityReward.' + error }
        }
        return null
      }

      /**
             * Creates an ActivityTaskReply message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply} ActivityTaskReply
             */
      ActivityTaskReply.fromObject = function fromObject(object) {
        if (object instanceof $root.pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply) { return object }
        var message = new $root.pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply()
        if (object.task != null) {
          if (typeof object.task !== 'object') { throw TypeError('.pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply.task: object expected') }
          message.task = $root.pbactivity.ActivityTaskModel.fromObject(object.task)
        }
        if (object.nowValue != null) {
          if ($util.Long) { (message.nowValue = $util.Long.fromValue(object.nowValue)).unsigned = false } else if (typeof object.nowValue === 'string') { message.nowValue = parseInt(object.nowValue, 10) } else if (typeof object.nowValue === 'number') { message.nowValue = object.nowValue } else if (typeof object.nowValue === 'object') { message.nowValue = new $util.LongBits(object.nowValue.low >>> 0, object.nowValue.high >>> 0).toNumber() }
        }
        if (object.activityReward != null) {
          if (typeof object.activityReward !== 'object') { throw TypeError('.pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply.activityReward: object expected') }
          message.activityReward = $root.pbactivity.ActivityRewardModel.fromObject(object.activityReward)
        }
        return message
      }

      /**
             * Creates a plain object from an ActivityTaskReply message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @static
             * @param {pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply} message ActivityTaskReply
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
      ActivityTaskReply.toObject = function toObject(message, options) {
        if (!options) { options = {} }
        var object = {}
        if (options.defaults) {
          object.task = null
          if ($util.Long) {
            var long = new $util.Long(0, 0, false)
            object.nowValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
          } else { object.nowValue = options.longs === String ? '0' : 0 }
          object.activityReward = null
        }
        if (message.task != null && message.hasOwnProperty('task')) { object.task = $root.pbactivity.ActivityTaskModel.toObject(message.task, options) }
        if (message.nowValue != null && message.hasOwnProperty('nowValue')) {
          if (typeof message.nowValue === 'number') { object.nowValue = options.longs === String ? String(message.nowValue) : message.nowValue } else { object.nowValue = options.longs === String ? $util.Long.prototype.toString.call(message.nowValue) : options.longs === Number ? new $util.LongBits(message.nowValue.low >>> 0, message.nowValue.high >>> 0).toNumber() : message.nowValue }
        }
        if (message.activityReward != null && message.hasOwnProperty('activityReward')) { object.activityReward = $root.pbactivity.ActivityRewardModel.toObject(message.activityReward, options) }
        return object
      }

      /**
             * Converts this ActivityTaskReply to JSON.
             * @function toJSON
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
      ActivityTaskReply.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
             * Gets the default type url for ActivityTaskReply
             * @function getTypeUrl
             * @memberof pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
      ActivityTaskReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com'
        }
        return typeUrlPrefix + '/pbactivity.FindActivityDetailMyselfReply.ActivityTaskReply'
      }

      return ActivityTaskReply
    })()

    return FindActivityDetailMyselfReply
  })()

  pbactivity.GetRewardArgs = (function() {
    /**
         * Properties of a GetRewardArgs.
         * @memberof pbactivity
         * @interface IGetRewardArgs
         * @property {pbbase.IOyeBaseReq|null} [base] GetRewardArgs base
         * @property {number|Long|null} [id] GetRewardArgs id
         */

    /**
         * Constructs a new GetRewardArgs.
         * @memberof pbactivity
         * @classdesc Represents a GetRewardArgs.
         * @implements IGetRewardArgs
         * @constructor
         * @param {pbactivity.IGetRewardArgs=} [properties] Properties to set
         */
    function GetRewardArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * GetRewardArgs base.
         * @member {pbbase.IOyeBaseReq|null|undefined} base
         * @memberof pbactivity.GetRewardArgs
         * @instance
         */
    GetRewardArgs.prototype.base = null

    /**
         * GetRewardArgs id.
         * @member {number|Long} id
         * @memberof pbactivity.GetRewardArgs
         * @instance
         */
    GetRewardArgs.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * Creates a new GetRewardArgs instance using the specified properties.
         * @function create
         * @memberof pbactivity.GetRewardArgs
         * @static
         * @param {pbactivity.IGetRewardArgs=} [properties] Properties to set
         * @returns {pbactivity.GetRewardArgs} GetRewardArgs instance
         */
    GetRewardArgs.create = function create(properties) {
      return new GetRewardArgs(properties)
    }

    /**
         * Encodes the specified GetRewardArgs message. Does not implicitly {@link pbactivity.GetRewardArgs.verify|verify} messages.
         * @function encode
         * @memberof pbactivity.GetRewardArgs
         * @static
         * @param {pbactivity.IGetRewardArgs} message GetRewardArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    GetRewardArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.base != null && Object.hasOwnProperty.call(message, 'base')) { $root.pbbase.OyeBaseReq.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 2, wireType 0 =*/16).int64(message.id) }
      return writer
    }

    /**
         * Encodes the specified GetRewardArgs message, length delimited. Does not implicitly {@link pbactivity.GetRewardArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbactivity.GetRewardArgs
         * @static
         * @param {pbactivity.IGetRewardArgs} message GetRewardArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    GetRewardArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a GetRewardArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbactivity.GetRewardArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbactivity.GetRewardArgs} GetRewardArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    GetRewardArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbactivity.GetRewardArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.base = $root.pbbase.OyeBaseReq.decode(reader, reader.uint32())
            break
          }
          case 2: {
            message.id = reader.int64()
            break
          }
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a GetRewardArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbactivity.GetRewardArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbactivity.GetRewardArgs} GetRewardArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    GetRewardArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a GetRewardArgs message.
         * @function verify
         * @memberof pbactivity.GetRewardArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    GetRewardArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.base != null && message.hasOwnProperty('base')) {
        var error = $root.pbbase.OyeBaseReq.verify(message.base)
        if (error) { return 'base.' + error }
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high))) { return 'id: integer|Long expected' }
      }
      return null
    }

    /**
         * Creates a GetRewardArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbactivity.GetRewardArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbactivity.GetRewardArgs} GetRewardArgs
         */
    GetRewardArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbactivity.GetRewardArgs) { return object }
      var message = new $root.pbactivity.GetRewardArgs()
      if (object.base != null) {
        if (typeof object.base !== 'object') { throw TypeError('.pbactivity.GetRewardArgs.base: object expected') }
        message.base = $root.pbbase.OyeBaseReq.fromObject(object.base)
      }
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      return message
    }

    /**
         * Creates a plain object from a GetRewardArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbactivity.GetRewardArgs
         * @static
         * @param {pbactivity.GetRewardArgs} message GetRewardArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    GetRewardArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.base = null
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
      }
      if (message.base != null && message.hasOwnProperty('base')) { object.base = $root.pbbase.OyeBaseReq.toObject(message.base, options) }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      return object
    }

    /**
         * Converts this GetRewardArgs to JSON.
         * @function toJSON
         * @memberof pbactivity.GetRewardArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    GetRewardArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for GetRewardArgs
         * @function getTypeUrl
         * @memberof pbactivity.GetRewardArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    GetRewardArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbactivity.GetRewardArgs'
    }

    return GetRewardArgs
  })()

  pbactivity.GetRewardReply = (function() {
    /**
         * Properties of a GetRewardReply.
         * @memberof pbactivity
         * @interface IGetRewardReply
         * @property {pbbase.IOyeBaseRsp|null} [base] GetRewardReply base
         */

    /**
         * Constructs a new GetRewardReply.
         * @memberof pbactivity
         * @classdesc Represents a GetRewardReply.
         * @implements IGetRewardReply
         * @constructor
         * @param {pbactivity.IGetRewardReply=} [properties] Properties to set
         */
    function GetRewardReply(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * GetRewardReply base.
         * @member {pbbase.IOyeBaseRsp|null|undefined} base
         * @memberof pbactivity.GetRewardReply
         * @instance
         */
    GetRewardReply.prototype.base = null

    /**
         * Creates a new GetRewardReply instance using the specified properties.
         * @function create
         * @memberof pbactivity.GetRewardReply
         * @static
         * @param {pbactivity.IGetRewardReply=} [properties] Properties to set
         * @returns {pbactivity.GetRewardReply} GetRewardReply instance
         */
    GetRewardReply.create = function create(properties) {
      return new GetRewardReply(properties)
    }

    /**
         * Encodes the specified GetRewardReply message. Does not implicitly {@link pbactivity.GetRewardReply.verify|verify} messages.
         * @function encode
         * @memberof pbactivity.GetRewardReply
         * @static
         * @param {pbactivity.IGetRewardReply} message GetRewardReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    GetRewardReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.base != null && Object.hasOwnProperty.call(message, 'base')) { $root.pbbase.OyeBaseRsp.encode(message.base, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      return writer
    }

    /**
         * Encodes the specified GetRewardReply message, length delimited. Does not implicitly {@link pbactivity.GetRewardReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbactivity.GetRewardReply
         * @static
         * @param {pbactivity.IGetRewardReply} message GetRewardReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    GetRewardReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a GetRewardReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbactivity.GetRewardReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbactivity.GetRewardReply} GetRewardReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    GetRewardReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbactivity.GetRewardReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.base = $root.pbbase.OyeBaseRsp.decode(reader, reader.uint32())
            break
          }
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
         * Decodes a GetRewardReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbactivity.GetRewardReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbactivity.GetRewardReply} GetRewardReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    GetRewardReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a GetRewardReply message.
         * @function verify
         * @memberof pbactivity.GetRewardReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    GetRewardReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.base != null && message.hasOwnProperty('base')) {
        var error = $root.pbbase.OyeBaseRsp.verify(message.base)
        if (error) { return 'base.' + error }
      }
      return null
    }

    /**
         * Creates a GetRewardReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbactivity.GetRewardReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbactivity.GetRewardReply} GetRewardReply
         */
    GetRewardReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbactivity.GetRewardReply) { return object }
      var message = new $root.pbactivity.GetRewardReply()
      if (object.base != null) {
        if (typeof object.base !== 'object') { throw TypeError('.pbactivity.GetRewardReply.base: object expected') }
        message.base = $root.pbbase.OyeBaseRsp.fromObject(object.base)
      }
      return message
    }

    /**
         * Creates a plain object from a GetRewardReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbactivity.GetRewardReply
         * @static
         * @param {pbactivity.GetRewardReply} message GetRewardReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    GetRewardReply.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) { object.base = null }
      if (message.base != null && message.hasOwnProperty('base')) { object.base = $root.pbbase.OyeBaseRsp.toObject(message.base, options) }
      return object
    }

    /**
         * Converts this GetRewardReply to JSON.
         * @function toJSON
         * @memberof pbactivity.GetRewardReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    GetRewardReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for GetRewardReply
         * @function getTypeUrl
         * @memberof pbactivity.GetRewardReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    GetRewardReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbactivity.GetRewardReply'
    }

    return GetRewardReply
  })()

  pbactivity.Activity = (function() {
    /**
         * Constructs a new Activity service.
         * @memberof pbactivity
         * @classdesc Represents an Activity
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function Activity(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Activity.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Activity

    /**
         * Creates new Activity service using the specified rpc implementation.
         * @function create
         * @memberof pbactivity.Activity
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Activity} RPC service. Useful where requests and/or responses are streamed.
         */
    Activity.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link pbactivity.Activity#findActivityDetailMyself}.
         * @memberof pbactivity.Activity
         * @typedef FindActivityDetailMyselfCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbactivity.FindActivityDetailMyselfReply} [response] FindActivityDetailMyselfReply
         */

    /**
         * Calls FindActivityDetailMyself.
         * @function findActivityDetailMyself
         * @memberof pbactivity.Activity
         * @instance
         * @param {pbactivity.IFindActivityDetailMyselfArgs} request FindActivityDetailMyselfArgs message or plain object
         * @param {pbactivity.Activity.FindActivityDetailMyselfCallback} callback Node-style callback called with the error, if any, and FindActivityDetailMyselfReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Activity.prototype.findActivityDetailMyself = function findActivityDetailMyself(request, callback) {
      return this.rpcCall(findActivityDetailMyself, $root.pbactivity.FindActivityDetailMyselfArgs, $root.pbactivity.FindActivityDetailMyselfReply, request, callback)
    }, 'name', { value: 'FindActivityDetailMyself' })

    /**
         * Calls FindActivityDetailMyself.
         * @function findActivityDetailMyself
         * @memberof pbactivity.Activity
         * @instance
         * @param {pbactivity.IFindActivityDetailMyselfArgs} request FindActivityDetailMyselfArgs message or plain object
         * @returns {Promise<pbactivity.FindActivityDetailMyselfReply>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbactivity.Activity#getReward}.
         * @memberof pbactivity.Activity
         * @typedef GetRewardCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbactivity.GetRewardReply} [response] GetRewardReply
         */

    /**
         * Calls GetReward.
         * @function getReward
         * @memberof pbactivity.Activity
         * @instance
         * @param {pbactivity.IGetRewardArgs} request GetRewardArgs message or plain object
         * @param {pbactivity.Activity.GetRewardCallback} callback Node-style callback called with the error, if any, and GetRewardReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Activity.prototype.getReward = function getReward(request, callback) {
      return this.rpcCall(getReward, $root.pbactivity.GetRewardArgs, $root.pbactivity.GetRewardReply, request, callback)
    }, 'name', { value: 'GetReward' })

    /**
         * Calls GetReward.
         * @function getReward
         * @memberof pbactivity.Activity
         * @instance
         * @param {pbactivity.IGetRewardArgs} request GetRewardArgs message or plain object
         * @returns {Promise<pbactivity.GetRewardReply>} Promise
         * @variation 2
         */

    return Activity
  })()

  return pbactivity
})()

module.exports = $root
