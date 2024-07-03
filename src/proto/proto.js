/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict'

var $protobuf = require('protobufjs/minimal')

var Long = require('long')
$protobuf.util.Long = Long
$protobuf.configure()

// Common aliases
var $Reader = $protobuf.Reader; var $Writer = $protobuf.Writer; var $util = $protobuf.util

// Exported root namespace
var $root = $protobuf.roots['default'] || ($protobuf.roots['default'] = {})

$root.pbcommon = (function() {
  /**
     * Namespace pbcommon.
     * @exports pbcommon
     * @namespace
     */
  var pbcommon = {}

  /**
     * EnumCode enum.
     * @name pbcommon.EnumCode
     * @enum {number}
     * @property {number} None=0 None value
     * @property {number} Success=200 Success value
     * @property {number} Fail=500 Fail value
     * @property {number} Unknown=501 Unknown value
     * @property {number} Internal=502 Internal value
     * @property {number} Invalid=503 Invalid value
     * @property {number} InvalidParam=504 InvalidParam value
     * @property {number} ParamError=505 ParamError value
     * @property {number} FindError=1001 FindError value
     * @property {number} CreateError=1002 CreateError value
     * @property {number} DeleteError=1003 DeleteError value
     * @property {number} UpdateError=1004 UpdateError value
     * @property {number} InvalidToken=2002 InvalidToken value
     * @property {number} InvalidSign=2003 InvalidSign value
     * @property {number} NotLogin=2004 NotLogin value
     * @property {number} LoginTimeout=2005 LoginTimeout value
     * @property {number} LoginError=2006 LoginError value
     * @property {number} LoginForbidden=2007 LoginForbidden value
     * @property {number} LoginExpired=2008 LoginExpired value
     * @property {number} LoginInvalid=2009 LoginInvalid value
     * @property {number} LoginInvalidPassword=2010 LoginInvalidPassword value
     * @property {number} LoginInvalidUsername=2011 LoginInvalidUsername value
     * @property {number} LoginInvalidEmail=2012 LoginInvalidEmail value
     * @property {number} LoginInvalidPhone=2013 LoginInvalidPhone value
     * @property {number} LoginInvalidUsernameOrEmail=2014 LoginInvalidUsernameOrEmail value
     */
  pbcommon.EnumCode = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'None'] = 0
    values[valuesById[200] = 'Success'] = 200
    values[valuesById[500] = 'Fail'] = 500
    values[valuesById[501] = 'Unknown'] = 501
    values[valuesById[502] = 'Internal'] = 502
    values[valuesById[503] = 'Invalid'] = 503
    values[valuesById[504] = 'InvalidParam'] = 504
    values[valuesById[505] = 'ParamError'] = 505
    values[valuesById[1001] = 'FindError'] = 1001
    values[valuesById[1002] = 'CreateError'] = 1002
    values[valuesById[1003] = 'DeleteError'] = 1003
    values[valuesById[1004] = 'UpdateError'] = 1004
    values[valuesById[2002] = 'InvalidToken'] = 2002
    values[valuesById[2003] = 'InvalidSign'] = 2003
    values[valuesById[2004] = 'NotLogin'] = 2004
    values[valuesById[2005] = 'LoginTimeout'] = 2005
    values[valuesById[2006] = 'LoginError'] = 2006
    values[valuesById[2007] = 'LoginForbidden'] = 2007
    values[valuesById[2008] = 'LoginExpired'] = 2008
    values[valuesById[2009] = 'LoginInvalid'] = 2009
    values[valuesById[2010] = 'LoginInvalidPassword'] = 2010
    values[valuesById[2011] = 'LoginInvalidUsername'] = 2011
    values[valuesById[2012] = 'LoginInvalidEmail'] = 2012
    values[valuesById[2013] = 'LoginInvalidPhone'] = 2013
    values[valuesById[2014] = 'LoginInvalidUsernameOrEmail'] = 2014
    return values
  })()

  pbcommon.CommonResult = (function() {
    /**
         * Properties of a CommonResult.
         * @memberof pbcommon
         * @interface ICommonResult
         * @property {pbcommon.EnumCode|null} [code] CommonResult code
         * @property {string|null} [msg] CommonResult msg
         */

    /**
         * Constructs a new CommonResult.
         * @memberof pbcommon
         * @classdesc Represents a CommonResult.
         * @implements ICommonResult
         * @constructor
         * @param {pbcommon.ICommonResult=} [properties] Properties to set
         */
    function CommonResult(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * CommonResult code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbcommon.CommonResult
         * @instance
         */
    CommonResult.prototype.code = 0

    /**
         * CommonResult msg.
         * @member {string} msg
         * @memberof pbcommon.CommonResult
         * @instance
         */
    CommonResult.prototype.msg = ''

    /**
         * Creates a new CommonResult instance using the specified properties.
         * @function create
         * @memberof pbcommon.CommonResult
         * @static
         * @param {pbcommon.ICommonResult=} [properties] Properties to set
         * @returns {pbcommon.CommonResult} CommonResult instance
         */
    CommonResult.create = function create(properties) {
      return new CommonResult(properties)
    }

    /**
         * Encodes the specified CommonResult message. Does not implicitly {@link pbcommon.CommonResult.verify|verify} messages.
         * @function encode
         * @memberof pbcommon.CommonResult
         * @static
         * @param {pbcommon.ICommonResult} message CommonResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    CommonResult.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      return writer
    }

    /**
         * Encodes the specified CommonResult message, length delimited. Does not implicitly {@link pbcommon.CommonResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbcommon.CommonResult
         * @static
         * @param {pbcommon.ICommonResult} message CommonResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    CommonResult.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a CommonResult message from the specified reader or buffer.
         * @function decode
         * @memberof pbcommon.CommonResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbcommon.CommonResult} CommonResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    CommonResult.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbcommon.CommonResult()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.code = reader.int32()
            break
          }
          case 2: {
            message.msg = reader.string()
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
         * Decodes a CommonResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbcommon.CommonResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbcommon.CommonResult} CommonResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    CommonResult.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a CommonResult message.
         * @function verify
         * @memberof pbcommon.CommonResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    CommonResult.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
          case 505:
          case 1001:
          case 1002:
          case 1003:
          case 1004:
          case 2002:
          case 2003:
          case 2004:
          case 2005:
          case 2006:
          case 2007:
          case 2008:
          case 2009:
          case 2010:
          case 2011:
          case 2012:
          case 2013:
          case 2014:
            break
        }
      }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!$util.isString(message.msg)) { return 'msg: string expected' }
      }
      return null
    }

    /**
         * Creates a CommonResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbcommon.CommonResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbcommon.CommonResult} CommonResult
         */
    CommonResult.fromObject = function fromObject(object) {
      if (object instanceof $root.pbcommon.CommonResult) { return object }
      var message = new $root.pbcommon.CommonResult()
      switch (object.code) {
        default:
          if (typeof object.code === 'number') {
            message.code = object.code
            break
          }
          break
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Fail':
        case 500:
          message.code = 500
          break
        case 'Unknown':
        case 501:
          message.code = 501
          break
        case 'Internal':
        case 502:
          message.code = 502
          break
        case 'Invalid':
        case 503:
          message.code = 503
          break
        case 'InvalidParam':
        case 504:
          message.code = 504
          break
        case 'ParamError':
        case 505:
          message.code = 505
          break
        case 'FindError':
        case 1001:
          message.code = 1001
          break
        case 'CreateError':
        case 1002:
          message.code = 1002
          break
        case 'DeleteError':
        case 1003:
          message.code = 1003
          break
        case 'UpdateError':
        case 1004:
          message.code = 1004
          break
        case 'InvalidToken':
        case 2002:
          message.code = 2002
          break
        case 'InvalidSign':
        case 2003:
          message.code = 2003
          break
        case 'NotLogin':
        case 2004:
          message.code = 2004
          break
        case 'LoginTimeout':
        case 2005:
          message.code = 2005
          break
        case 'LoginError':
        case 2006:
          message.code = 2006
          break
        case 'LoginForbidden':
        case 2007:
          message.code = 2007
          break
        case 'LoginExpired':
        case 2008:
          message.code = 2008
          break
        case 'LoginInvalid':
        case 2009:
          message.code = 2009
          break
        case 'LoginInvalidPassword':
        case 2010:
          message.code = 2010
          break
        case 'LoginInvalidUsername':
        case 2011:
          message.code = 2011
          break
        case 'LoginInvalidEmail':
        case 2012:
          message.code = 2012
          break
        case 'LoginInvalidPhone':
        case 2013:
          message.code = 2013
          break
        case 'LoginInvalidUsernameOrEmail':
        case 2014:
          message.code = 2014
          break
      }
      if (object.msg != null) { message.msg = String(object.msg) }
      return message
    }

    /**
         * Creates a plain object from a CommonResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbcommon.CommonResult
         * @static
         * @param {pbcommon.CommonResult} message CommonResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    CommonResult.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.code = options.enums === String ? 'None' : 0
        object.msg = ''
      }
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.msg != null && message.hasOwnProperty('msg')) { object.msg = message.msg }
      return object
    }

    /**
         * Converts this CommonResult to JSON.
         * @function toJSON
         * @memberof pbcommon.CommonResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    CommonResult.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for CommonResult
         * @function getTypeUrl
         * @memberof pbcommon.CommonResult
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    CommonResult.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbcommon.CommonResult'
    }

    return CommonResult
  })()

  pbcommon.IdArgs = (function() {
    /**
         * Properties of an IdArgs.
         * @memberof pbcommon
         * @interface IIdArgs
         * @property {number|Long|null} [id] IdArgs id
         * @property {string|null} [idStr] IdArgs idStr
         * @property {Array.<number|Long>|null} [ids] IdArgs ids
         * @property {Array.<string>|null} [idStrs] IdArgs idStrs
         */

    /**
         * Constructs a new IdArgs.
         * @memberof pbcommon
         * @classdesc Represents an IdArgs.
         * @implements IIdArgs
         * @constructor
         * @param {pbcommon.IIdArgs=} [properties] Properties to set
         */
    function IdArgs(properties) {
      this.ids = []
      this.idStrs = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * IdArgs id.
         * @member {number|Long} id
         * @memberof pbcommon.IdArgs
         * @instance
         */
    IdArgs.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * IdArgs idStr.
         * @member {string} idStr
         * @memberof pbcommon.IdArgs
         * @instance
         */
    IdArgs.prototype.idStr = ''

    /**
         * IdArgs ids.
         * @member {Array.<number|Long>} ids
         * @memberof pbcommon.IdArgs
         * @instance
         */
    IdArgs.prototype.ids = $util.emptyArray

    /**
         * IdArgs idStrs.
         * @member {Array.<string>} idStrs
         * @memberof pbcommon.IdArgs
         * @instance
         */
    IdArgs.prototype.idStrs = $util.emptyArray

    /**
         * Creates a new IdArgs instance using the specified properties.
         * @function create
         * @memberof pbcommon.IdArgs
         * @static
         * @param {pbcommon.IIdArgs=} [properties] Properties to set
         * @returns {pbcommon.IdArgs} IdArgs instance
         */
    IdArgs.create = function create(properties) {
      return new IdArgs(properties)
    }

    /**
         * Encodes the specified IdArgs message. Does not implicitly {@link pbcommon.IdArgs.verify|verify} messages.
         * @function encode
         * @memberof pbcommon.IdArgs
         * @static
         * @param {pbcommon.IIdArgs} message IdArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    IdArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.idStr != null && Object.hasOwnProperty.call(message, 'idStr')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.idStr) }
      if (message.ids != null && message.ids.length) {
        writer.uint32(/* id 3, wireType 2 =*/26).fork()
        for (var i = 0; i < message.ids.length; ++i) { writer.int64(message.ids[i]) }
        writer.ldelim()
      }
      if (message.idStrs != null && message.idStrs.length) {
        for (var i = 0; i < message.idStrs.length; ++i) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.idStrs[i]) }
      }
      return writer
    }

    /**
         * Encodes the specified IdArgs message, length delimited. Does not implicitly {@link pbcommon.IdArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbcommon.IdArgs
         * @static
         * @param {pbcommon.IIdArgs} message IdArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    IdArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes an IdArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbcommon.IdArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbcommon.IdArgs} IdArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    IdArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbcommon.IdArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.id = reader.int64()
            break
          }
          case 2: {
            message.idStr = reader.string()
            break
          }
          case 3: {
            if (!(message.ids && message.ids.length)) { message.ids = [] }
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos
              while (reader.pos < end2) { message.ids.push(reader.int64()) }
            } else { message.ids.push(reader.int64()) }
            break
          }
          case 4: {
            if (!(message.idStrs && message.idStrs.length)) { message.idStrs = [] }
            message.idStrs.push(reader.string())
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
         * Decodes an IdArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbcommon.IdArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbcommon.IdArgs} IdArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    IdArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies an IdArgs message.
         * @function verify
         * @memberof pbcommon.IdArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    IdArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high))) { return 'id: integer|Long expected' }
      }
      if (message.idStr != null && message.hasOwnProperty('idStr')) {
        if (!$util.isString(message.idStr)) { return 'idStr: string expected' }
      }
      if (message.ids != null && message.hasOwnProperty('ids')) {
        if (!Array.isArray(message.ids)) { return 'ids: array expected' }
        for (var i = 0; i < message.ids.length; ++i) {
          if (!$util.isInteger(message.ids[i]) && !(message.ids[i] && $util.isInteger(message.ids[i].low) && $util.isInteger(message.ids[i].high))) { return 'ids: integer|Long[] expected' }
        }
      }
      if (message.idStrs != null && message.hasOwnProperty('idStrs')) {
        if (!Array.isArray(message.idStrs)) { return 'idStrs: array expected' }
        for (var i = 0; i < message.idStrs.length; ++i) {
          if (!$util.isString(message.idStrs[i])) { return 'idStrs: string[] expected' }
        }
      }
      return null
    }

    /**
         * Creates an IdArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbcommon.IdArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbcommon.IdArgs} IdArgs
         */
    IdArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbcommon.IdArgs) { return object }
      var message = new $root.pbcommon.IdArgs()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.idStr != null) { message.idStr = String(object.idStr) }
      if (object.ids) {
        if (!Array.isArray(object.ids)) { throw TypeError('.pbcommon.IdArgs.ids: array expected') }
        message.ids = []
        for (var i = 0; i < object.ids.length; ++i) {
          if ($util.Long) { (message.ids[i] = $util.Long.fromValue(object.ids[i])).unsigned = false } else if (typeof object.ids[i] === 'string') { message.ids[i] = parseInt(object.ids[i], 10) } else if (typeof object.ids[i] === 'number') { message.ids[i] = object.ids[i] } else if (typeof object.ids[i] === 'object') { message.ids[i] = new $util.LongBits(object.ids[i].low >>> 0, object.ids[i].high >>> 0).toNumber() }
        }
      }
      if (object.idStrs) {
        if (!Array.isArray(object.idStrs)) { throw TypeError('.pbcommon.IdArgs.idStrs: array expected') }
        message.idStrs = []
        for (var i = 0; i < object.idStrs.length; ++i) { message.idStrs[i] = String(object.idStrs[i]) }
      }
      return message
    }

    /**
         * Creates a plain object from an IdArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbcommon.IdArgs
         * @static
         * @param {pbcommon.IdArgs} message IdArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    IdArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) {
        object.ids = []
        object.idStrs = []
      }
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.idStr = ''
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.idStr != null && message.hasOwnProperty('idStr')) { object.idStr = message.idStr }
      if (message.ids && message.ids.length) {
        object.ids = []
        for (var j = 0; j < message.ids.length; ++j) {
          if (typeof message.ids[j] === 'number') { object.ids[j] = options.longs === String ? String(message.ids[j]) : message.ids[j] } else { object.ids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ids[j]) : options.longs === Number ? new $util.LongBits(message.ids[j].low >>> 0, message.ids[j].high >>> 0).toNumber() : message.ids[j] }
        }
      }
      if (message.idStrs && message.idStrs.length) {
        object.idStrs = []
        for (var j = 0; j < message.idStrs.length; ++j) { object.idStrs[j] = message.idStrs[j] }
      }
      return object
    }

    /**
         * Converts this IdArgs to JSON.
         * @function toJSON
         * @memberof pbcommon.IdArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    IdArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for IdArgs
         * @function getTypeUrl
         * @memberof pbcommon.IdArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    IdArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbcommon.IdArgs'
    }

    return IdArgs
  })()

  pbcommon.PageInfo = (function() {
    /**
         * Properties of a PageInfo.
         * @memberof pbcommon
         * @interface IPageInfo
         * @property {number|null} [page] PageInfo page
         * @property {number|null} [pageSize] PageInfo pageSize
         */

    /**
         * Constructs a new PageInfo.
         * @memberof pbcommon
         * @classdesc Represents a PageInfo.
         * @implements IPageInfo
         * @constructor
         * @param {pbcommon.IPageInfo=} [properties] Properties to set
         */
    function PageInfo(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * PageInfo page.
         * @member {number} page
         * @memberof pbcommon.PageInfo
         * @instance
         */
    PageInfo.prototype.page = 0

    /**
         * PageInfo pageSize.
         * @member {number} pageSize
         * @memberof pbcommon.PageInfo
         * @instance
         */
    PageInfo.prototype.pageSize = 0

    /**
         * Creates a new PageInfo instance using the specified properties.
         * @function create
         * @memberof pbcommon.PageInfo
         * @static
         * @param {pbcommon.IPageInfo=} [properties] Properties to set
         * @returns {pbcommon.PageInfo} PageInfo instance
         */
    PageInfo.create = function create(properties) {
      return new PageInfo(properties)
    }

    /**
         * Encodes the specified PageInfo message. Does not implicitly {@link pbcommon.PageInfo.verify|verify} messages.
         * @function encode
         * @memberof pbcommon.PageInfo
         * @static
         * @param {pbcommon.IPageInfo} message PageInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    PageInfo.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.page != null && Object.hasOwnProperty.call(message, 'page')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page) }
      if (message.pageSize != null && Object.hasOwnProperty.call(message, 'pageSize')) { writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize) }
      return writer
    }

    /**
         * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link pbcommon.PageInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbcommon.PageInfo
         * @static
         * @param {pbcommon.IPageInfo} message PageInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    PageInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a PageInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pbcommon.PageInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbcommon.PageInfo} PageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    PageInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbcommon.PageInfo()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.page = reader.int32()
            break
          }
          case 2: {
            message.pageSize = reader.int32()
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
         * Decodes a PageInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbcommon.PageInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbcommon.PageInfo} PageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    PageInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a PageInfo message.
         * @function verify
         * @memberof pbcommon.PageInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    PageInfo.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.page != null && message.hasOwnProperty('page')) {
        if (!$util.isInteger(message.page)) { return 'page: integer expected' }
      }
      if (message.pageSize != null && message.hasOwnProperty('pageSize')) {
        if (!$util.isInteger(message.pageSize)) { return 'pageSize: integer expected' }
      }
      return null
    }

    /**
         * Creates a PageInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbcommon.PageInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbcommon.PageInfo} PageInfo
         */
    PageInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.pbcommon.PageInfo) { return object }
      var message = new $root.pbcommon.PageInfo()
      if (object.page != null) { message.page = object.page | 0 }
      if (object.pageSize != null) { message.pageSize = object.pageSize | 0 }
      return message
    }

    /**
         * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbcommon.PageInfo
         * @static
         * @param {pbcommon.PageInfo} message PageInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    PageInfo.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.page = 0
        object.pageSize = 0
      }
      if (message.page != null && message.hasOwnProperty('page')) { object.page = message.page }
      if (message.pageSize != null && message.hasOwnProperty('pageSize')) { object.pageSize = message.pageSize }
      return object
    }

    /**
         * Converts this PageInfo to JSON.
         * @function toJSON
         * @memberof pbcommon.PageInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    PageInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for PageInfo
         * @function getTypeUrl
         * @memberof pbcommon.PageInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    PageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbcommon.PageInfo'
    }

    return PageInfo
  })()

  return pbcommon
})()

$root.pblogin = (function() {
  /**
     * Namespace pblogin.
     * @exports pblogin
     * @namespace
     */
  var pblogin = {}

  pblogin.AdminLoginArgs = (function() {
    /**
         * Properties of an AdminLoginArgs.
         * @memberof pblogin
         * @interface IAdminLoginArgs
         * @property {number|Long|null} [appId] AdminLoginArgs appId
         * @property {string|null} [username] AdminLoginArgs username
         * @property {string|null} [password] AdminLoginArgs password
         */

    /**
         * Constructs a new AdminLoginArgs.
         * @memberof pblogin
         * @classdesc Represents an AdminLoginArgs.
         * @implements IAdminLoginArgs
         * @constructor
         * @param {pblogin.IAdminLoginArgs=} [properties] Properties to set
         */
    function AdminLoginArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * AdminLoginArgs appId.
         * @member {number|Long} appId
         * @memberof pblogin.AdminLoginArgs
         * @instance
         */
    AdminLoginArgs.prototype.appId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * AdminLoginArgs username.
         * @member {string} username
         * @memberof pblogin.AdminLoginArgs
         * @instance
         */
    AdminLoginArgs.prototype.username = ''

    /**
         * AdminLoginArgs password.
         * @member {string} password
         * @memberof pblogin.AdminLoginArgs
         * @instance
         */
    AdminLoginArgs.prototype.password = ''

    /**
         * Creates a new AdminLoginArgs instance using the specified properties.
         * @function create
         * @memberof pblogin.AdminLoginArgs
         * @static
         * @param {pblogin.IAdminLoginArgs=} [properties] Properties to set
         * @returns {pblogin.AdminLoginArgs} AdminLoginArgs instance
         */
    AdminLoginArgs.create = function create(properties) {
      return new AdminLoginArgs(properties)
    }

    /**
         * Encodes the specified AdminLoginArgs message. Does not implicitly {@link pblogin.AdminLoginArgs.verify|verify} messages.
         * @function encode
         * @memberof pblogin.AdminLoginArgs
         * @static
         * @param {pblogin.IAdminLoginArgs} message AdminLoginArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    AdminLoginArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.appId != null && Object.hasOwnProperty.call(message, 'appId')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.appId) }
      if (message.username != null && Object.hasOwnProperty.call(message, 'username')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.username) }
      if (message.password != null && Object.hasOwnProperty.call(message, 'password')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.password) }
      return writer
    }

    /**
         * Encodes the specified AdminLoginArgs message, length delimited. Does not implicitly {@link pblogin.AdminLoginArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pblogin.AdminLoginArgs
         * @static
         * @param {pblogin.IAdminLoginArgs} message AdminLoginArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    AdminLoginArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes an AdminLoginArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pblogin.AdminLoginArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pblogin.AdminLoginArgs} AdminLoginArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    AdminLoginArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pblogin.AdminLoginArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.appId = reader.int64()
            break
          }
          case 2: {
            message.username = reader.string()
            break
          }
          case 3: {
            message.password = reader.string()
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
         * Decodes an AdminLoginArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pblogin.AdminLoginArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pblogin.AdminLoginArgs} AdminLoginArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    AdminLoginArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies an AdminLoginArgs message.
         * @function verify
         * @memberof pblogin.AdminLoginArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    AdminLoginArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.appId != null && message.hasOwnProperty('appId')) {
        if (!$util.isInteger(message.appId) && !(message.appId && $util.isInteger(message.appId.low) && $util.isInteger(message.appId.high))) { return 'appId: integer|Long expected' }
      }
      if (message.username != null && message.hasOwnProperty('username')) {
        if (!$util.isString(message.username)) { return 'username: string expected' }
      }
      if (message.password != null && message.hasOwnProperty('password')) {
        if (!$util.isString(message.password)) { return 'password: string expected' }
      }
      return null
    }

    /**
         * Creates an AdminLoginArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pblogin.AdminLoginArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pblogin.AdminLoginArgs} AdminLoginArgs
         */
    AdminLoginArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pblogin.AdminLoginArgs) { return object }
      var message = new $root.pblogin.AdminLoginArgs()
      if (object.appId != null) {
        if ($util.Long) { (message.appId = $util.Long.fromValue(object.appId)).unsigned = false } else if (typeof object.appId === 'string') { message.appId = parseInt(object.appId, 10) } else if (typeof object.appId === 'number') { message.appId = object.appId } else if (typeof object.appId === 'object') { message.appId = new $util.LongBits(object.appId.low >>> 0, object.appId.high >>> 0).toNumber() }
      }
      if (object.username != null) { message.username = String(object.username) }
      if (object.password != null) { message.password = String(object.password) }
      return message
    }

    /**
         * Creates a plain object from an AdminLoginArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pblogin.AdminLoginArgs
         * @static
         * @param {pblogin.AdminLoginArgs} message AdminLoginArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    AdminLoginArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.appId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.appId = options.longs === String ? '0' : 0 }
        object.username = ''
        object.password = ''
      }
      if (message.appId != null && message.hasOwnProperty('appId')) {
        if (typeof message.appId === 'number') { object.appId = options.longs === String ? String(message.appId) : message.appId } else { object.appId = options.longs === String ? $util.Long.prototype.toString.call(message.appId) : options.longs === Number ? new $util.LongBits(message.appId.low >>> 0, message.appId.high >>> 0).toNumber() : message.appId }
      }
      if (message.username != null && message.hasOwnProperty('username')) { object.username = message.username }
      if (message.password != null && message.hasOwnProperty('password')) { object.password = message.password }
      return object
    }

    /**
         * Converts this AdminLoginArgs to JSON.
         * @function toJSON
         * @memberof pblogin.AdminLoginArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    AdminLoginArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for AdminLoginArgs
         * @function getTypeUrl
         * @memberof pblogin.AdminLoginArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    AdminLoginArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pblogin.AdminLoginArgs'
    }

    return AdminLoginArgs
  })()

  pblogin.Login = (function() {
    /**
         * Constructs a new Login service.
         * @memberof pblogin
         * @classdesc Represents a Login
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function Login(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Login.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Login

    /**
         * Creates new Login service using the specified rpc implementation.
         * @function create
         * @memberof pblogin.Login
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Login} RPC service. Useful where requests and/or responses are streamed.
         */
    Login.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link pblogin.Login#adminLogin}.
         * @memberof pblogin.Login
         * @typedef AdminLoginCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls AdminLogin.
         * @function adminLogin
         * @memberof pblogin.Login
         * @instance
         * @param {pblogin.IAdminLoginArgs} request AdminLoginArgs message or plain object
         * @param {pblogin.Login.AdminLoginCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Login.prototype.adminLogin = function adminLogin(request, callback) {
      return this.rpcCall(adminLogin, $root.pblogin.AdminLoginArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'AdminLogin' })

    /**
         * Calls AdminLogin.
         * @function adminLogin
         * @memberof pblogin.Login
         * @instance
         * @param {pblogin.IAdminLoginArgs} request AdminLoginArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    return Login
  })()

  return pblogin
})()

$root.httpgate = (function() {
  /**
     * Namespace httpgate.
     * @exports httpgate
     * @namespace
     */
  var httpgate = {}

  httpgate.HttpRequest = (function() {
    /**
         * Properties of a HttpRequest.
         * @memberof httpgate
         * @interface IHttpRequest
         * @property {string|null} [token] HttpRequest token
         * @property {string|null} [v] HttpRequest v
         * @property {string|null} [sign] HttpRequest sign
         * @property {string|null} [signMethod] HttpRequest signMethod
         * @property {string|null} [timeStamp] HttpRequest timeStamp
         * @property {Uint8Array|null} [data] HttpRequest data
         */

    /**
         * Constructs a new HttpRequest.
         * @memberof httpgate
         * @classdesc Represents a HttpRequest.
         * @implements IHttpRequest
         * @constructor
         * @param {httpgate.IHttpRequest=} [properties] Properties to set
         */
    function HttpRequest(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * HttpRequest token.
         * @member {string} token
         * @memberof httpgate.HttpRequest
         * @instance
         */
    HttpRequest.prototype.token = ''

    /**
         * HttpRequest v.
         * @member {string} v
         * @memberof httpgate.HttpRequest
         * @instance
         */
    HttpRequest.prototype.v = ''

    /**
         * HttpRequest sign.
         * @member {string} sign
         * @memberof httpgate.HttpRequest
         * @instance
         */
    HttpRequest.prototype.sign = ''

    /**
         * HttpRequest signMethod.
         * @member {string} signMethod
         * @memberof httpgate.HttpRequest
         * @instance
         */
    HttpRequest.prototype.signMethod = ''

    /**
         * HttpRequest timeStamp.
         * @member {string} timeStamp
         * @memberof httpgate.HttpRequest
         * @instance
         */
    HttpRequest.prototype.timeStamp = ''

    /**
         * HttpRequest data.
         * @member {Uint8Array} data
         * @memberof httpgate.HttpRequest
         * @instance
         */
    HttpRequest.prototype.data = $util.newBuffer([])

    /**
         * Creates a new HttpRequest instance using the specified properties.
         * @function create
         * @memberof httpgate.HttpRequest
         * @static
         * @param {httpgate.IHttpRequest=} [properties] Properties to set
         * @returns {httpgate.HttpRequest} HttpRequest instance
         */
    HttpRequest.create = function create(properties) {
      return new HttpRequest(properties)
    }

    /**
         * Encodes the specified HttpRequest message. Does not implicitly {@link httpgate.HttpRequest.verify|verify} messages.
         * @function encode
         * @memberof httpgate.HttpRequest
         * @static
         * @param {httpgate.IHttpRequest} message HttpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    HttpRequest.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.token != null && Object.hasOwnProperty.call(message, 'token')) { writer.uint32(/* id 1, wireType 2 =*/10).string(message.token) }
      if (message.v != null && Object.hasOwnProperty.call(message, 'v')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.v) }
      if (message.sign != null && Object.hasOwnProperty.call(message, 'sign')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.sign) }
      if (message.signMethod != null && Object.hasOwnProperty.call(message, 'signMethod')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.signMethod) }
      if (message.timeStamp != null && Object.hasOwnProperty.call(message, 'timeStamp')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.timeStamp) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.data) }
      return writer
    }

    /**
         * Encodes the specified HttpRequest message, length delimited. Does not implicitly {@link httpgate.HttpRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof httpgate.HttpRequest
         * @static
         * @param {httpgate.IHttpRequest} message HttpRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    HttpRequest.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a HttpRequest message from the specified reader or buffer.
         * @function decode
         * @memberof httpgate.HttpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {httpgate.HttpRequest} HttpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    HttpRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.httpgate.HttpRequest()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.token = reader.string()
            break
          }
          case 2: {
            message.v = reader.string()
            break
          }
          case 3: {
            message.sign = reader.string()
            break
          }
          case 4: {
            message.signMethod = reader.string()
            break
          }
          case 5: {
            message.timeStamp = reader.string()
            break
          }
          case 6: {
            message.data = reader.bytes()
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
         * Decodes a HttpRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof httpgate.HttpRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {httpgate.HttpRequest} HttpRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    HttpRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a HttpRequest message.
         * @function verify
         * @memberof httpgate.HttpRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    HttpRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.token != null && message.hasOwnProperty('token')) {
        if (!$util.isString(message.token)) { return 'token: string expected' }
      }
      if (message.v != null && message.hasOwnProperty('v')) {
        if (!$util.isString(message.v)) { return 'v: string expected' }
      }
      if (message.sign != null && message.hasOwnProperty('sign')) {
        if (!$util.isString(message.sign)) { return 'sign: string expected' }
      }
      if (message.signMethod != null && message.hasOwnProperty('signMethod')) {
        if (!$util.isString(message.signMethod)) { return 'signMethod: string expected' }
      }
      if (message.timeStamp != null && message.hasOwnProperty('timeStamp')) {
        if (!$util.isString(message.timeStamp)) { return 'timeStamp: string expected' }
      }
      if (message.data != null && message.hasOwnProperty('data')) {
        if (!(message.data && typeof message.data.length === 'number' || $util.isString(message.data))) { return 'data: buffer expected' }
      }
      return null
    }

    /**
         * Creates a HttpRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof httpgate.HttpRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {httpgate.HttpRequest} HttpRequest
         */
    HttpRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.httpgate.HttpRequest) { return object }
      var message = new $root.httpgate.HttpRequest()
      if (object.token != null) { message.token = String(object.token) }
      if (object.v != null) { message.v = String(object.v) }
      if (object.sign != null) { message.sign = String(object.sign) }
      if (object.signMethod != null) { message.signMethod = String(object.signMethod) }
      if (object.timeStamp != null) { message.timeStamp = String(object.timeStamp) }
      if (object.data != null) {
        if (typeof object.data === 'string') { $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0) } else if (object.data.length >= 0) { message.data = object.data }
      }
      return message
    }

    /**
         * Creates a plain object from a HttpRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof httpgate.HttpRequest
         * @static
         * @param {httpgate.HttpRequest} message HttpRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    HttpRequest.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.token = ''
        object.v = ''
        object.sign = ''
        object.signMethod = ''
        object.timeStamp = ''
        if (options.bytes === String) { object.data = '' } else {
          object.data = []
          if (options.bytes !== Array) { object.data = $util.newBuffer(object.data) }
        }
      }
      if (message.token != null && message.hasOwnProperty('token')) { object.token = message.token }
      if (message.v != null && message.hasOwnProperty('v')) { object.v = message.v }
      if (message.sign != null && message.hasOwnProperty('sign')) { object.sign = message.sign }
      if (message.signMethod != null && message.hasOwnProperty('signMethod')) { object.signMethod = message.signMethod }
      if (message.timeStamp != null && message.hasOwnProperty('timeStamp')) { object.timeStamp = message.timeStamp }
      if (message.data != null && message.hasOwnProperty('data')) { object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data }
      return object
    }

    /**
         * Converts this HttpRequest to JSON.
         * @function toJSON
         * @memberof httpgate.HttpRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    HttpRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for HttpRequest
         * @function getTypeUrl
         * @memberof httpgate.HttpRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    HttpRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/httpgate.HttpRequest'
    }

    return HttpRequest
  })()

  httpgate.HttpResponse = (function() {
    /**
         * Properties of a HttpResponse.
         * @memberof httpgate
         * @interface IHttpResponse
         * @property {pbcommon.EnumCode|null} [code] HttpResponse code
         * @property {string|null} [msg] HttpResponse msg
         * @property {Uint8Array|null} [data] HttpResponse data
         * @property {string|null} [newToken] HttpResponse newToken
         */

    /**
         * Constructs a new HttpResponse.
         * @memberof httpgate
         * @classdesc Represents a HttpResponse.
         * @implements IHttpResponse
         * @constructor
         * @param {httpgate.IHttpResponse=} [properties] Properties to set
         */
    function HttpResponse(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * HttpResponse code.
         * @member {pbcommon.EnumCode} code
         * @memberof httpgate.HttpResponse
         * @instance
         */
    HttpResponse.prototype.code = 0

    /**
         * HttpResponse msg.
         * @member {string} msg
         * @memberof httpgate.HttpResponse
         * @instance
         */
    HttpResponse.prototype.msg = ''

    /**
         * HttpResponse data.
         * @member {Uint8Array} data
         * @memberof httpgate.HttpResponse
         * @instance
         */
    HttpResponse.prototype.data = $util.newBuffer([])

    /**
         * HttpResponse newToken.
         * @member {string} newToken
         * @memberof httpgate.HttpResponse
         * @instance
         */
    HttpResponse.prototype.newToken = ''

    /**
         * Creates a new HttpResponse instance using the specified properties.
         * @function create
         * @memberof httpgate.HttpResponse
         * @static
         * @param {httpgate.IHttpResponse=} [properties] Properties to set
         * @returns {httpgate.HttpResponse} HttpResponse instance
         */
    HttpResponse.create = function create(properties) {
      return new HttpResponse(properties)
    }

    /**
         * Encodes the specified HttpResponse message. Does not implicitly {@link httpgate.HttpResponse.verify|verify} messages.
         * @function encode
         * @memberof httpgate.HttpResponse
         * @static
         * @param {httpgate.IHttpResponse} message HttpResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    HttpResponse.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data) }
      if (message.newToken != null && Object.hasOwnProperty.call(message, 'newToken')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.newToken) }
      return writer
    }

    /**
         * Encodes the specified HttpResponse message, length delimited. Does not implicitly {@link httpgate.HttpResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof httpgate.HttpResponse
         * @static
         * @param {httpgate.IHttpResponse} message HttpResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    HttpResponse.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a HttpResponse message from the specified reader or buffer.
         * @function decode
         * @memberof httpgate.HttpResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {httpgate.HttpResponse} HttpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    HttpResponse.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.httpgate.HttpResponse()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.code = reader.int32()
            break
          }
          case 2: {
            message.msg = reader.string()
            break
          }
          case 3: {
            message.data = reader.bytes()
            break
          }
          case 4: {
            message.newToken = reader.string()
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
         * Decodes a HttpResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof httpgate.HttpResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {httpgate.HttpResponse} HttpResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    HttpResponse.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a HttpResponse message.
         * @function verify
         * @memberof httpgate.HttpResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    HttpResponse.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
          case 505:
          case 1001:
          case 1002:
          case 1003:
          case 1004:
          case 2002:
          case 2003:
          case 2004:
          case 2005:
          case 2006:
          case 2007:
          case 2008:
          case 2009:
          case 2010:
          case 2011:
          case 2012:
          case 2013:
          case 2014:
            break
        }
      }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!$util.isString(message.msg)) { return 'msg: string expected' }
      }
      if (message.data != null && message.hasOwnProperty('data')) {
        if (!(message.data && typeof message.data.length === 'number' || $util.isString(message.data))) { return 'data: buffer expected' }
      }
      if (message.newToken != null && message.hasOwnProperty('newToken')) {
        if (!$util.isString(message.newToken)) { return 'newToken: string expected' }
      }
      return null
    }

    /**
         * Creates a HttpResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof httpgate.HttpResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {httpgate.HttpResponse} HttpResponse
         */
    HttpResponse.fromObject = function fromObject(object) {
      if (object instanceof $root.httpgate.HttpResponse) { return object }
      var message = new $root.httpgate.HttpResponse()
      switch (object.code) {
        default:
          if (typeof object.code === 'number') {
            message.code = object.code
            break
          }
          break
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Fail':
        case 500:
          message.code = 500
          break
        case 'Unknown':
        case 501:
          message.code = 501
          break
        case 'Internal':
        case 502:
          message.code = 502
          break
        case 'Invalid':
        case 503:
          message.code = 503
          break
        case 'InvalidParam':
        case 504:
          message.code = 504
          break
        case 'ParamError':
        case 505:
          message.code = 505
          break
        case 'FindError':
        case 1001:
          message.code = 1001
          break
        case 'CreateError':
        case 1002:
          message.code = 1002
          break
        case 'DeleteError':
        case 1003:
          message.code = 1003
          break
        case 'UpdateError':
        case 1004:
          message.code = 1004
          break
        case 'InvalidToken':
        case 2002:
          message.code = 2002
          break
        case 'InvalidSign':
        case 2003:
          message.code = 2003
          break
        case 'NotLogin':
        case 2004:
          message.code = 2004
          break
        case 'LoginTimeout':
        case 2005:
          message.code = 2005
          break
        case 'LoginError':
        case 2006:
          message.code = 2006
          break
        case 'LoginForbidden':
        case 2007:
          message.code = 2007
          break
        case 'LoginExpired':
        case 2008:
          message.code = 2008
          break
        case 'LoginInvalid':
        case 2009:
          message.code = 2009
          break
        case 'LoginInvalidPassword':
        case 2010:
          message.code = 2010
          break
        case 'LoginInvalidUsername':
        case 2011:
          message.code = 2011
          break
        case 'LoginInvalidEmail':
        case 2012:
          message.code = 2012
          break
        case 'LoginInvalidPhone':
        case 2013:
          message.code = 2013
          break
        case 'LoginInvalidUsernameOrEmail':
        case 2014:
          message.code = 2014
          break
      }
      if (object.msg != null) { message.msg = String(object.msg) }
      if (object.data != null) {
        if (typeof object.data === 'string') { $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0) } else if (object.data.length >= 0) { message.data = object.data }
      }
      if (object.newToken != null) { message.newToken = String(object.newToken) }
      return message
    }

    /**
         * Creates a plain object from a HttpResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof httpgate.HttpResponse
         * @static
         * @param {httpgate.HttpResponse} message HttpResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    HttpResponse.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.code = options.enums === String ? 'None' : 0
        object.msg = ''
        if (options.bytes === String) { object.data = '' } else {
          object.data = []
          if (options.bytes !== Array) { object.data = $util.newBuffer(object.data) }
        }
        object.newToken = ''
      }
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.msg != null && message.hasOwnProperty('msg')) { object.msg = message.msg }
      if (message.data != null && message.hasOwnProperty('data')) { object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data }
      if (message.newToken != null && message.hasOwnProperty('newToken')) { object.newToken = message.newToken }
      return object
    }

    /**
         * Converts this HttpResponse to JSON.
         * @function toJSON
         * @memberof httpgate.HttpResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    HttpResponse.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for HttpResponse
         * @function getTypeUrl
         * @memberof httpgate.HttpResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    HttpResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/httpgate.HttpResponse'
    }

    return HttpResponse
  })()

  return httpgate
})()

$root.pbuser = (function() {
  /**
     * Namespace pbuser.
     * @exports pbuser
     * @namespace
     */
  var pbuser = {}

  pbuser.UserModel = (function() {
    /**
         * Properties of a UserModel.
         * @memberof pbuser
         * @interface IUserModel
         * @property {number|Long|null} [id] UserModel id
         * @property {string|null} [createdAt] UserModel createdAt
         * @property {string|null} [updatedAt] UserModel updatedAt
         * @property {string|null} [name] UserModel name
         * @property {string|null} [email] UserModel email
         * @property {string|null} [password] UserModel password
         * @property {string|null} [phone] UserModel phone
         * @property {number|null} [gender] UserModel gender
         * @property {string|null} [birthday] UserModel birthday
         * @property {string|null} [address] UserModel address
         * @property {string|null} [avatar] UserModel avatar
         * @property {string|null} [description] UserModel description
         * @property {number|null} [status] UserModel status
         * @property {number|null} [type] UserModel type
         * @property {string|null} [role] UserModel role
         */

    /**
         * Constructs a new UserModel.
         * @memberof pbuser
         * @classdesc Represents a UserModel.
         * @implements IUserModel
         * @constructor
         * @param {pbuser.IUserModel=} [properties] Properties to set
         */
    function UserModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * UserModel id.
         * @member {number|Long} id
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * UserModel createdAt.
         * @member {string} createdAt
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.createdAt = ''

    /**
         * UserModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.updatedAt = ''

    /**
         * UserModel name.
         * @member {string} name
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.name = ''

    /**
         * UserModel email.
         * @member {string} email
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.email = ''

    /**
         * UserModel password.
         * @member {string} password
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.password = ''

    /**
         * UserModel phone.
         * @member {string} phone
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.phone = ''

    /**
         * UserModel gender.
         * @member {number} gender
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.gender = 0

    /**
         * UserModel birthday.
         * @member {string} birthday
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.birthday = ''

    /**
         * UserModel address.
         * @member {string} address
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.address = ''

    /**
         * UserModel avatar.
         * @member {string} avatar
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.avatar = ''

    /**
         * UserModel description.
         * @member {string} description
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.description = ''

    /**
         * UserModel status.
         * @member {number} status
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.status = 0

    /**
         * UserModel type.
         * @member {number} type
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.type = 0

    /**
         * UserModel role.
         * @member {string} role
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.role = ''

    /**
         * Creates a new UserModel instance using the specified properties.
         * @function create
         * @memberof pbuser.UserModel
         * @static
         * @param {pbuser.IUserModel=} [properties] Properties to set
         * @returns {pbuser.UserModel} UserModel instance
         */
    UserModel.create = function create(properties) {
      return new UserModel(properties)
    }

    /**
         * Encodes the specified UserModel message. Does not implicitly {@link pbuser.UserModel.verify|verify} messages.
         * @function encode
         * @memberof pbuser.UserModel
         * @static
         * @param {pbuser.IUserModel} message UserModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    UserModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.name != null && Object.hasOwnProperty.call(message, 'name')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.name) }
      if (message.email != null && Object.hasOwnProperty.call(message, 'email')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.email) }
      if (message.password != null && Object.hasOwnProperty.call(message, 'password')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.password) }
      if (message.phone != null && Object.hasOwnProperty.call(message, 'phone')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.phone) }
      if (message.gender != null && Object.hasOwnProperty.call(message, 'gender')) { writer.uint32(/* id 8, wireType 0 =*/64).int32(message.gender) }
      if (message.birthday != null && Object.hasOwnProperty.call(message, 'birthday')) { writer.uint32(/* id 9, wireType 2 =*/74).string(message.birthday) }
      if (message.address != null && Object.hasOwnProperty.call(message, 'address')) { writer.uint32(/* id 10, wireType 2 =*/82).string(message.address) }
      if (message.avatar != null && Object.hasOwnProperty.call(message, 'avatar')) { writer.uint32(/* id 11, wireType 2 =*/90).string(message.avatar) }
      if (message.description != null && Object.hasOwnProperty.call(message, 'description')) { writer.uint32(/* id 12, wireType 2 =*/98).string(message.description) }
      if (message.status != null && Object.hasOwnProperty.call(message, 'status')) { writer.uint32(/* id 13, wireType 0 =*/104).int32(message.status) }
      if (message.type != null && Object.hasOwnProperty.call(message, 'type')) { writer.uint32(/* id 14, wireType 0 =*/112).int32(message.type) }
      if (message.role != null && Object.hasOwnProperty.call(message, 'role')) { writer.uint32(/* id 15, wireType 2 =*/122).string(message.role) }
      return writer
    }

    /**
         * Encodes the specified UserModel message, length delimited. Does not implicitly {@link pbuser.UserModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbuser.UserModel
         * @static
         * @param {pbuser.IUserModel} message UserModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    UserModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a UserModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbuser.UserModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbuser.UserModel} UserModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    UserModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbuser.UserModel()
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
            message.email = reader.string()
            break
          }
          case 6: {
            message.password = reader.string()
            break
          }
          case 7: {
            message.phone = reader.string()
            break
          }
          case 8: {
            message.gender = reader.int32()
            break
          }
          case 9: {
            message.birthday = reader.string()
            break
          }
          case 10: {
            message.address = reader.string()
            break
          }
          case 11: {
            message.avatar = reader.string()
            break
          }
          case 12: {
            message.description = reader.string()
            break
          }
          case 13: {
            message.status = reader.int32()
            break
          }
          case 14: {
            message.type = reader.int32()
            break
          }
          case 15: {
            message.role = reader.string()
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
         * Decodes a UserModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbuser.UserModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbuser.UserModel} UserModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    UserModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a UserModel message.
         * @function verify
         * @memberof pbuser.UserModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    UserModel.verify = function verify(message) {
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
      if (message.email != null && message.hasOwnProperty('email')) {
        if (!$util.isString(message.email)) { return 'email: string expected' }
      }
      if (message.password != null && message.hasOwnProperty('password')) {
        if (!$util.isString(message.password)) { return 'password: string expected' }
      }
      if (message.phone != null && message.hasOwnProperty('phone')) {
        if (!$util.isString(message.phone)) { return 'phone: string expected' }
      }
      if (message.gender != null && message.hasOwnProperty('gender')) {
        if (!$util.isInteger(message.gender)) { return 'gender: integer expected' }
      }
      if (message.birthday != null && message.hasOwnProperty('birthday')) {
        if (!$util.isString(message.birthday)) { return 'birthday: string expected' }
      }
      if (message.address != null && message.hasOwnProperty('address')) {
        if (!$util.isString(message.address)) { return 'address: string expected' }
      }
      if (message.avatar != null && message.hasOwnProperty('avatar')) {
        if (!$util.isString(message.avatar)) { return 'avatar: string expected' }
      }
      if (message.description != null && message.hasOwnProperty('description')) {
        if (!$util.isString(message.description)) { return 'description: string expected' }
      }
      if (message.status != null && message.hasOwnProperty('status')) {
        if (!$util.isInteger(message.status)) { return 'status: integer expected' }
      }
      if (message.type != null && message.hasOwnProperty('type')) {
        if (!$util.isInteger(message.type)) { return 'type: integer expected' }
      }
      if (message.role != null && message.hasOwnProperty('role')) {
        if (!$util.isString(message.role)) { return 'role: string expected' }
      }
      return null
    }

    /**
         * Creates a UserModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuser.UserModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuser.UserModel} UserModel
         */
    UserModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbuser.UserModel) { return object }
      var message = new $root.pbuser.UserModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.name != null) { message.name = String(object.name) }
      if (object.email != null) { message.email = String(object.email) }
      if (object.password != null) { message.password = String(object.password) }
      if (object.phone != null) { message.phone = String(object.phone) }
      if (object.gender != null) { message.gender = object.gender | 0 }
      if (object.birthday != null) { message.birthday = String(object.birthday) }
      if (object.address != null) { message.address = String(object.address) }
      if (object.avatar != null) { message.avatar = String(object.avatar) }
      if (object.description != null) { message.description = String(object.description) }
      if (object.status != null) { message.status = object.status | 0 }
      if (object.type != null) { message.type = object.type | 0 }
      if (object.role != null) { message.role = String(object.role) }
      return message
    }

    /**
         * Creates a plain object from a UserModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbuser.UserModel
         * @static
         * @param {pbuser.UserModel} message UserModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    UserModel.toObject = function toObject(message, options) {
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
        object.email = ''
        object.password = ''
        object.phone = ''
        object.gender = 0
        object.birthday = ''
        object.address = ''
        object.avatar = ''
        object.description = ''
        object.status = 0
        object.type = 0
        object.role = ''
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.name != null && message.hasOwnProperty('name')) { object.name = message.name }
      if (message.email != null && message.hasOwnProperty('email')) { object.email = message.email }
      if (message.password != null && message.hasOwnProperty('password')) { object.password = message.password }
      if (message.phone != null && message.hasOwnProperty('phone')) { object.phone = message.phone }
      if (message.gender != null && message.hasOwnProperty('gender')) { object.gender = message.gender }
      if (message.birthday != null && message.hasOwnProperty('birthday')) { object.birthday = message.birthday }
      if (message.address != null && message.hasOwnProperty('address')) { object.address = message.address }
      if (message.avatar != null && message.hasOwnProperty('avatar')) { object.avatar = message.avatar }
      if (message.description != null && message.hasOwnProperty('description')) { object.description = message.description }
      if (message.status != null && message.hasOwnProperty('status')) { object.status = message.status }
      if (message.type != null && message.hasOwnProperty('type')) { object.type = message.type }
      if (message.role != null && message.hasOwnProperty('role')) { object.role = message.role }
      return object
    }

    /**
         * Converts this UserModel to JSON.
         * @function toJSON
         * @memberof pbuser.UserModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    UserModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for UserModel
         * @function getTypeUrl
         * @memberof pbuser.UserModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    UserModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbuser.UserModel'
    }

    return UserModel
  })()

  pbuser.FindUserArgs = (function() {
    /**
         * Properties of a FindUserArgs.
         * @memberof pbuser
         * @interface IFindUserArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindUserArgs pageInfo
         * @property {pbuser.IUserModel|null} [query] FindUserArgs query
         */

    /**
         * Constructs a new FindUserArgs.
         * @memberof pbuser
         * @classdesc Represents a FindUserArgs.
         * @implements IFindUserArgs
         * @constructor
         * @param {pbuser.IFindUserArgs=} [properties] Properties to set
         */
    function FindUserArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindUserArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbuser.FindUserArgs
         * @instance
         */
    FindUserArgs.prototype.pageInfo = null

    /**
         * FindUserArgs query.
         * @member {pbuser.IUserModel|null|undefined} query
         * @memberof pbuser.FindUserArgs
         * @instance
         */
    FindUserArgs.prototype.query = null

    /**
         * Creates a new FindUserArgs instance using the specified properties.
         * @function create
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {pbuser.IFindUserArgs=} [properties] Properties to set
         * @returns {pbuser.FindUserArgs} FindUserArgs instance
         */
    FindUserArgs.create = function create(properties) {
      return new FindUserArgs(properties)
    }

    /**
         * Encodes the specified FindUserArgs message. Does not implicitly {@link pbuser.FindUserArgs.verify|verify} messages.
         * @function encode
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {pbuser.IFindUserArgs} message FindUserArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindUserArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbuser.UserModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
         * Encodes the specified FindUserArgs message, length delimited. Does not implicitly {@link pbuser.FindUserArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {pbuser.IFindUserArgs} message FindUserArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindUserArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindUserArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbuser.FindUserArgs} FindUserArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindUserArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbuser.FindUserArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          }
          case 2: {
            message.query = $root.pbuser.UserModel.decode(reader, reader.uint32())
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
         * Decodes a FindUserArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbuser.FindUserArgs} FindUserArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindUserArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindUserArgs message.
         * @function verify
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindUserArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbuser.UserModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
         * Creates a FindUserArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuser.FindUserArgs} FindUserArgs
         */
    FindUserArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbuser.FindUserArgs) { return object }
      var message = new $root.pbuser.FindUserArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbuser.FindUserArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbuser.FindUserArgs.query: object expected') }
        message.query = $root.pbuser.UserModel.fromObject(object.query)
      }
      return message
    }

    /**
         * Creates a plain object from a FindUserArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {pbuser.FindUserArgs} message FindUserArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindUserArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbuser.UserModel.toObject(message.query, options) }
      return object
    }

    /**
         * Converts this FindUserArgs to JSON.
         * @function toJSON
         * @memberof pbuser.FindUserArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindUserArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindUserArgs
         * @function getTypeUrl
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindUserArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbuser.FindUserArgs'
    }

    return FindUserArgs
  })()

  pbuser.FindUserReply = (function() {
    /**
         * Properties of a FindUserReply.
         * @memberof pbuser
         * @interface IFindUserReply
         * @property {pbcommon.EnumCode|null} [code] FindUserReply code
         * @property {string|null} [msg] FindUserReply msg
         * @property {pbuser.IUserModel|null} [data] FindUserReply data
         * @property {Array.<pbuser.IUserModel>|null} [list] FindUserReply list
         * @property {number|Long|null} [total] FindUserReply total
         */

    /**
         * Constructs a new FindUserReply.
         * @memberof pbuser
         * @classdesc Represents a FindUserReply.
         * @implements IFindUserReply
         * @constructor
         * @param {pbuser.IFindUserReply=} [properties] Properties to set
         */
    function FindUserReply(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindUserReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbuser.FindUserReply
         * @instance
         */
    FindUserReply.prototype.code = 0

    /**
         * FindUserReply msg.
         * @member {string} msg
         * @memberof pbuser.FindUserReply
         * @instance
         */
    FindUserReply.prototype.msg = ''

    /**
         * FindUserReply data.
         * @member {pbuser.IUserModel|null|undefined} data
         * @memberof pbuser.FindUserReply
         * @instance
         */
    FindUserReply.prototype.data = null

    /**
         * FindUserReply list.
         * @member {Array.<pbuser.IUserModel>} list
         * @memberof pbuser.FindUserReply
         * @instance
         */
    FindUserReply.prototype.list = $util.emptyArray

    /**
         * FindUserReply total.
         * @member {number|Long} total
         * @memberof pbuser.FindUserReply
         * @instance
         */
    FindUserReply.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * Creates a new FindUserReply instance using the specified properties.
         * @function create
         * @memberof pbuser.FindUserReply
         * @static
         * @param {pbuser.IFindUserReply=} [properties] Properties to set
         * @returns {pbuser.FindUserReply} FindUserReply instance
         */
    FindUserReply.create = function create(properties) {
      return new FindUserReply(properties)
    }

    /**
         * Encodes the specified FindUserReply message. Does not implicitly {@link pbuser.FindUserReply.verify|verify} messages.
         * @function encode
         * @memberof pbuser.FindUserReply
         * @static
         * @param {pbuser.IFindUserReply} message FindUserReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindUserReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbuser.UserModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbuser.UserModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      return writer
    }

    /**
         * Encodes the specified FindUserReply message, length delimited. Does not implicitly {@link pbuser.FindUserReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbuser.FindUserReply
         * @static
         * @param {pbuser.IFindUserReply} message FindUserReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindUserReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindUserReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbuser.FindUserReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbuser.FindUserReply} FindUserReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindUserReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbuser.FindUserReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.code = reader.int32()
            break
          }
          case 2: {
            message.msg = reader.string()
            break
          }
          case 3: {
            message.data = $root.pbuser.UserModel.decode(reader, reader.uint32())
            break
          }
          case 4: {
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbuser.UserModel.decode(reader, reader.uint32()))
            break
          }
          case 5: {
            message.total = reader.int64()
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
         * Decodes a FindUserReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbuser.FindUserReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbuser.FindUserReply} FindUserReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindUserReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindUserReply message.
         * @function verify
         * @memberof pbuser.FindUserReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindUserReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 500:
          case 501:
          case 502:
          case 503:
          case 504:
          case 505:
          case 1001:
          case 1002:
          case 1003:
          case 1004:
          case 2002:
          case 2003:
          case 2004:
          case 2005:
          case 2006:
          case 2007:
          case 2008:
          case 2009:
          case 2010:
          case 2011:
          case 2012:
          case 2013:
          case 2014:
            break
        }
      }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!$util.isString(message.msg)) { return 'msg: string expected' }
      }
      if (message.data != null && message.hasOwnProperty('data')) {
        var error = $root.pbuser.UserModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbuser.UserModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      return null
    }

    /**
         * Creates a FindUserReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuser.FindUserReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuser.FindUserReply} FindUserReply
         */
    FindUserReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbuser.FindUserReply) { return object }
      var message = new $root.pbuser.FindUserReply()
      switch (object.code) {
        default:
          if (typeof object.code === 'number') {
            message.code = object.code
            break
          }
          break
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Fail':
        case 500:
          message.code = 500
          break
        case 'Unknown':
        case 501:
          message.code = 501
          break
        case 'Internal':
        case 502:
          message.code = 502
          break
        case 'Invalid':
        case 503:
          message.code = 503
          break
        case 'InvalidParam':
        case 504:
          message.code = 504
          break
        case 'ParamError':
        case 505:
          message.code = 505
          break
        case 'FindError':
        case 1001:
          message.code = 1001
          break
        case 'CreateError':
        case 1002:
          message.code = 1002
          break
        case 'DeleteError':
        case 1003:
          message.code = 1003
          break
        case 'UpdateError':
        case 1004:
          message.code = 1004
          break
        case 'InvalidToken':
        case 2002:
          message.code = 2002
          break
        case 'InvalidSign':
        case 2003:
          message.code = 2003
          break
        case 'NotLogin':
        case 2004:
          message.code = 2004
          break
        case 'LoginTimeout':
        case 2005:
          message.code = 2005
          break
        case 'LoginError':
        case 2006:
          message.code = 2006
          break
        case 'LoginForbidden':
        case 2007:
          message.code = 2007
          break
        case 'LoginExpired':
        case 2008:
          message.code = 2008
          break
        case 'LoginInvalid':
        case 2009:
          message.code = 2009
          break
        case 'LoginInvalidPassword':
        case 2010:
          message.code = 2010
          break
        case 'LoginInvalidUsername':
        case 2011:
          message.code = 2011
          break
        case 'LoginInvalidEmail':
        case 2012:
          message.code = 2012
          break
        case 'LoginInvalidPhone':
        case 2013:
          message.code = 2013
          break
        case 'LoginInvalidUsernameOrEmail':
        case 2014:
          message.code = 2014
          break
      }
      if (object.msg != null) { message.msg = String(object.msg) }
      if (object.data != null) {
        if (typeof object.data !== 'object') { throw TypeError('.pbuser.FindUserReply.data: object expected') }
        message.data = $root.pbuser.UserModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbuser.FindUserReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbuser.FindUserReply.list: object expected') }
          message.list[i] = $root.pbuser.UserModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      return message
    }

    /**
         * Creates a plain object from a FindUserReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbuser.FindUserReply
         * @static
         * @param {pbuser.FindUserReply} message FindUserReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindUserReply.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.list = [] }
      if (options.defaults) {
        object.code = options.enums === String ? 'None' : 0
        object.msg = ''
        object.data = null
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.total = options.longs === String ? '0' : 0 }
      }
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.msg != null && message.hasOwnProperty('msg')) { object.msg = message.msg }
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbuser.UserModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbuser.UserModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      return object
    }

    /**
         * Converts this FindUserReply to JSON.
         * @function toJSON
         * @memberof pbuser.FindUserReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindUserReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindUserReply
         * @function getTypeUrl
         * @memberof pbuser.FindUserReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindUserReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbuser.FindUserReply'
    }

    return FindUserReply
  })()

  pbuser.User = (function() {
    /**
         * Constructs a new User service.
         * @memberof pbuser
         * @classdesc Represents a User
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function User(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (User.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = User

    /**
         * Creates new User service using the specified rpc implementation.
         * @function create
         * @memberof pbuser.User
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {User} RPC service. Useful where requests and/or responses are streamed.
         */
    User.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link pbuser.User#createUser}.
         * @memberof pbuser.User
         * @typedef CreateUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls CreateUser.
         * @function createUser
         * @memberof pbuser.User
         * @instance
         * @param {pbuser.IUserModel} request UserModel message or plain object
         * @param {pbuser.User.CreateUserCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(User.prototype.createUser = function createUser(request, callback) {
      return this.rpcCall(createUser, $root.pbuser.UserModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreateUser' })

    /**
         * Calls CreateUser.
         * @function createUser
         * @memberof pbuser.User
         * @instance
         * @param {pbuser.IUserModel} request UserModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbuser.User#updateUser}.
         * @memberof pbuser.User
         * @typedef UpdateUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls UpdateUser.
         * @function updateUser
         * @memberof pbuser.User
         * @instance
         * @param {pbuser.IUserModel} request UserModel message or plain object
         * @param {pbuser.User.UpdateUserCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(User.prototype.updateUser = function updateUser(request, callback) {
      return this.rpcCall(updateUser, $root.pbuser.UserModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdateUser' })

    /**
         * Calls UpdateUser.
         * @function updateUser
         * @memberof pbuser.User
         * @instance
         * @param {pbuser.IUserModel} request UserModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbuser.User#deleteUser}.
         * @memberof pbuser.User
         * @typedef DeleteUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls DeleteUser.
         * @function deleteUser
         * @memberof pbuser.User
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbuser.User.DeleteUserCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(User.prototype.deleteUser = function deleteUser(request, callback) {
      return this.rpcCall(deleteUser, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeleteUser' })

    /**
         * Calls DeleteUser.
         * @function deleteUser
         * @memberof pbuser.User
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbuser.User#findUserById}.
         * @memberof pbuser.User
         * @typedef FindUserByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbuser.FindUserReply} [response] FindUserReply
         */

    /**
         * Calls FindUserById.
         * @function findUserById
         * @memberof pbuser.User
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbuser.User.FindUserByIdCallback} callback Node-style callback called with the error, if any, and FindUserReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(User.prototype.findUserById = function findUserById(request, callback) {
      return this.rpcCall(findUserById, $root.pbcommon.IdArgs, $root.pbuser.FindUserReply, request, callback)
    }, 'name', { value: 'FindUserById' })

    /**
         * Calls FindUserById.
         * @function findUserById
         * @memberof pbuser.User
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbuser.FindUserReply>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbuser.User#findUserList}.
         * @memberof pbuser.User
         * @typedef FindUserListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbuser.FindUserReply} [response] FindUserReply
         */

    /**
         * Calls FindUserList.
         * @function findUserList
         * @memberof pbuser.User
         * @instance
         * @param {pbuser.IFindUserArgs} request FindUserArgs message or plain object
         * @param {pbuser.User.FindUserListCallback} callback Node-style callback called with the error, if any, and FindUserReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(User.prototype.findUserList = function findUserList(request, callback) {
      return this.rpcCall(findUserList, $root.pbuser.FindUserArgs, $root.pbuser.FindUserReply, request, callback)
    }, 'name', { value: 'FindUserList' })

    /**
         * Calls FindUserList.
         * @function findUserList
         * @memberof pbuser.User
         * @instance
         * @param {pbuser.IFindUserArgs} request FindUserArgs message or plain object
         * @returns {Promise<pbuser.FindUserReply>} Promise
         * @variation 2
         */

    return User
  })()

  return pbuser
})()

module.exports = $root
