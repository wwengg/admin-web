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

$root.pbapp = (function() {
  /**
     * Namespace pbapp.
     * @exports pbapp
     * @namespace
     */
  var pbapp = {}

  pbapp.AppModel = (function() {
    /**
         * Properties of an AppModel.
         * @memberof pbapp
         * @interface IAppModel
         * @property {number|Long|null} [id] AppModel id
         * @property {string|null} [createdAt] AppModel createdAt
         * @property {string|null} [updatedAt] AppModel updatedAt
         * @property {string|null} [name] AppModel name
         * @property {string|null} [description] AppModel description
         * @property {string|null} [icon] AppModel icon
         * @property {string|null} [logo] AppModel logo
         * @property {string|null} [url] AppModel url
         * @property {string|null} [version] AppModel version
         * @property {number|null} [type] AppModel type
         * @property {number|null} [status] AppModel status
         * @property {number|Long|null} [ownerId] AppModel ownerId
         * @property {string|null} [ownerName] AppModel ownerName
         * @property {string|null} [ownerEmail] AppModel ownerEmail
         * @property {string|null} [ownerPhone] AppModel ownerPhone
         * @property {string|null} [ownerMobile] AppModel ownerMobile
         * @property {string|null} [ownerAddress] AppModel ownerAddress
         * @property {string|null} [ownerZipCode] AppModel ownerZipCode
         * @property {string|null} [ownerCountry] AppModel ownerCountry
         * @property {string|null} [officalUrl] AppModel officalUrl
         */

    /**
         * Constructs a new AppModel.
         * @memberof pbapp
         * @classdesc Represents an AppModel.
         * @implements IAppModel
         * @constructor
         * @param {pbapp.IAppModel=} [properties] Properties to set
         */
    function AppModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * AppModel id.
         * @member {number|Long} id
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * AppModel createdAt.
         * @member {string} createdAt
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.createdAt = ''

    /**
         * AppModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.updatedAt = ''

    /**
         * AppModel name.
         * @member {string} name
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.name = ''

    /**
         * AppModel description.
         * @member {string} description
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.description = ''

    /**
         * AppModel icon.
         * @member {string} icon
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.icon = ''

    /**
         * AppModel logo.
         * @member {string} logo
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.logo = ''

    /**
         * AppModel url.
         * @member {string} url
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.url = ''

    /**
         * AppModel version.
         * @member {string} version
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.version = ''

    /**
         * AppModel type.
         * @member {number} type
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.type = 0

    /**
         * AppModel status.
         * @member {number} status
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.status = 0

    /**
         * AppModel ownerId.
         * @member {number|Long} ownerId
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.ownerId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * AppModel ownerName.
         * @member {string} ownerName
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.ownerName = ''

    /**
         * AppModel ownerEmail.
         * @member {string} ownerEmail
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.ownerEmail = ''

    /**
         * AppModel ownerPhone.
         * @member {string} ownerPhone
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.ownerPhone = ''

    /**
         * AppModel ownerMobile.
         * @member {string} ownerMobile
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.ownerMobile = ''

    /**
         * AppModel ownerAddress.
         * @member {string} ownerAddress
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.ownerAddress = ''

    /**
         * AppModel ownerZipCode.
         * @member {string} ownerZipCode
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.ownerZipCode = ''

    /**
         * AppModel ownerCountry.
         * @member {string} ownerCountry
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.ownerCountry = ''

    /**
         * AppModel officalUrl.
         * @member {string} officalUrl
         * @memberof pbapp.AppModel
         * @instance
         */
    AppModel.prototype.officalUrl = ''

    /**
         * Creates a new AppModel instance using the specified properties.
         * @function create
         * @memberof pbapp.AppModel
         * @static
         * @param {pbapp.IAppModel=} [properties] Properties to set
         * @returns {pbapp.AppModel} AppModel instance
         */
    AppModel.create = function create(properties) {
      return new AppModel(properties)
    }

    /**
         * Encodes the specified AppModel message. Does not implicitly {@link pbapp.AppModel.verify|verify} messages.
         * @function encode
         * @memberof pbapp.AppModel
         * @static
         * @param {pbapp.IAppModel} message AppModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    AppModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.name != null && Object.hasOwnProperty.call(message, 'name')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.name) }
      if (message.description != null && Object.hasOwnProperty.call(message, 'description')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.description) }
      if (message.icon != null && Object.hasOwnProperty.call(message, 'icon')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.icon) }
      if (message.logo != null && Object.hasOwnProperty.call(message, 'logo')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.logo) }
      if (message.url != null && Object.hasOwnProperty.call(message, 'url')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.url) }
      if (message.version != null && Object.hasOwnProperty.call(message, 'version')) { writer.uint32(/* id 9, wireType 2 =*/74).string(message.version) }
      if (message.type != null && Object.hasOwnProperty.call(message, 'type')) { writer.uint32(/* id 10, wireType 0 =*/80).int32(message.type) }
      if (message.status != null && Object.hasOwnProperty.call(message, 'status')) { writer.uint32(/* id 11, wireType 0 =*/88).int32(message.status) }
      if (message.ownerId != null && Object.hasOwnProperty.call(message, 'ownerId')) { writer.uint32(/* id 12, wireType 0 =*/96).int64(message.ownerId) }
      if (message.ownerName != null && Object.hasOwnProperty.call(message, 'ownerName')) { writer.uint32(/* id 13, wireType 2 =*/106).string(message.ownerName) }
      if (message.ownerEmail != null && Object.hasOwnProperty.call(message, 'ownerEmail')) { writer.uint32(/* id 14, wireType 2 =*/114).string(message.ownerEmail) }
      if (message.ownerPhone != null && Object.hasOwnProperty.call(message, 'ownerPhone')) { writer.uint32(/* id 15, wireType 2 =*/122).string(message.ownerPhone) }
      if (message.ownerMobile != null && Object.hasOwnProperty.call(message, 'ownerMobile')) { writer.uint32(/* id 16, wireType 2 =*/130).string(message.ownerMobile) }
      if (message.ownerAddress != null && Object.hasOwnProperty.call(message, 'ownerAddress')) { writer.uint32(/* id 17, wireType 2 =*/138).string(message.ownerAddress) }
      if (message.ownerZipCode != null && Object.hasOwnProperty.call(message, 'ownerZipCode')) { writer.uint32(/* id 18, wireType 2 =*/146).string(message.ownerZipCode) }
      if (message.ownerCountry != null && Object.hasOwnProperty.call(message, 'ownerCountry')) { writer.uint32(/* id 19, wireType 2 =*/154).string(message.ownerCountry) }
      if (message.officalUrl != null && Object.hasOwnProperty.call(message, 'officalUrl')) { writer.uint32(/* id 20, wireType 2 =*/162).string(message.officalUrl) }
      return writer
    }

    /**
         * Encodes the specified AppModel message, length delimited. Does not implicitly {@link pbapp.AppModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbapp.AppModel
         * @static
         * @param {pbapp.IAppModel} message AppModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    AppModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes an AppModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbapp.AppModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbapp.AppModel} AppModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    AppModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbapp.AppModel()
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
            message.description = reader.string()
            break
          }
          case 6: {
            message.icon = reader.string()
            break
          }
          case 7: {
            message.logo = reader.string()
            break
          }
          case 8: {
            message.url = reader.string()
            break
          }
          case 9: {
            message.version = reader.string()
            break
          }
          case 10: {
            message.type = reader.int32()
            break
          }
          case 11: {
            message.status = reader.int32()
            break
          }
          case 12: {
            message.ownerId = reader.int64()
            break
          }
          case 13: {
            message.ownerName = reader.string()
            break
          }
          case 14: {
            message.ownerEmail = reader.string()
            break
          }
          case 15: {
            message.ownerPhone = reader.string()
            break
          }
          case 16: {
            message.ownerMobile = reader.string()
            break
          }
          case 17: {
            message.ownerAddress = reader.string()
            break
          }
          case 18: {
            message.ownerZipCode = reader.string()
            break
          }
          case 19: {
            message.ownerCountry = reader.string()
            break
          }
          case 20: {
            message.officalUrl = reader.string()
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
         * Decodes an AppModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbapp.AppModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbapp.AppModel} AppModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    AppModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies an AppModel message.
         * @function verify
         * @memberof pbapp.AppModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    AppModel.verify = function verify(message) {
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
      if (message.description != null && message.hasOwnProperty('description')) {
        if (!$util.isString(message.description)) { return 'description: string expected' }
      }
      if (message.icon != null && message.hasOwnProperty('icon')) {
        if (!$util.isString(message.icon)) { return 'icon: string expected' }
      }
      if (message.logo != null && message.hasOwnProperty('logo')) {
        if (!$util.isString(message.logo)) { return 'logo: string expected' }
      }
      if (message.url != null && message.hasOwnProperty('url')) {
        if (!$util.isString(message.url)) { return 'url: string expected' }
      }
      if (message.version != null && message.hasOwnProperty('version')) {
        if (!$util.isString(message.version)) { return 'version: string expected' }
      }
      if (message.type != null && message.hasOwnProperty('type')) {
        if (!$util.isInteger(message.type)) { return 'type: integer expected' }
      }
      if (message.status != null && message.hasOwnProperty('status')) {
        if (!$util.isInteger(message.status)) { return 'status: integer expected' }
      }
      if (message.ownerId != null && message.hasOwnProperty('ownerId')) {
        if (!$util.isInteger(message.ownerId) && !(message.ownerId && $util.isInteger(message.ownerId.low) && $util.isInteger(message.ownerId.high))) { return 'ownerId: integer|Long expected' }
      }
      if (message.ownerName != null && message.hasOwnProperty('ownerName')) {
        if (!$util.isString(message.ownerName)) { return 'ownerName: string expected' }
      }
      if (message.ownerEmail != null && message.hasOwnProperty('ownerEmail')) {
        if (!$util.isString(message.ownerEmail)) { return 'ownerEmail: string expected' }
      }
      if (message.ownerPhone != null && message.hasOwnProperty('ownerPhone')) {
        if (!$util.isString(message.ownerPhone)) { return 'ownerPhone: string expected' }
      }
      if (message.ownerMobile != null && message.hasOwnProperty('ownerMobile')) {
        if (!$util.isString(message.ownerMobile)) { return 'ownerMobile: string expected' }
      }
      if (message.ownerAddress != null && message.hasOwnProperty('ownerAddress')) {
        if (!$util.isString(message.ownerAddress)) { return 'ownerAddress: string expected' }
      }
      if (message.ownerZipCode != null && message.hasOwnProperty('ownerZipCode')) {
        if (!$util.isString(message.ownerZipCode)) { return 'ownerZipCode: string expected' }
      }
      if (message.ownerCountry != null && message.hasOwnProperty('ownerCountry')) {
        if (!$util.isString(message.ownerCountry)) { return 'ownerCountry: string expected' }
      }
      if (message.officalUrl != null && message.hasOwnProperty('officalUrl')) {
        if (!$util.isString(message.officalUrl)) { return 'officalUrl: string expected' }
      }
      return null
    }

    /**
         * Creates an AppModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbapp.AppModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbapp.AppModel} AppModel
         */
    AppModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbapp.AppModel) { return object }
      var message = new $root.pbapp.AppModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.name != null) { message.name = String(object.name) }
      if (object.description != null) { message.description = String(object.description) }
      if (object.icon != null) { message.icon = String(object.icon) }
      if (object.logo != null) { message.logo = String(object.logo) }
      if (object.url != null) { message.url = String(object.url) }
      if (object.version != null) { message.version = String(object.version) }
      if (object.type != null) { message.type = object.type | 0 }
      if (object.status != null) { message.status = object.status | 0 }
      if (object.ownerId != null) {
        if ($util.Long) { (message.ownerId = $util.Long.fromValue(object.ownerId)).unsigned = false } else if (typeof object.ownerId === 'string') { message.ownerId = parseInt(object.ownerId, 10) } else if (typeof object.ownerId === 'number') { message.ownerId = object.ownerId } else if (typeof object.ownerId === 'object') { message.ownerId = new $util.LongBits(object.ownerId.low >>> 0, object.ownerId.high >>> 0).toNumber() }
      }
      if (object.ownerName != null) { message.ownerName = String(object.ownerName) }
      if (object.ownerEmail != null) { message.ownerEmail = String(object.ownerEmail) }
      if (object.ownerPhone != null) { message.ownerPhone = String(object.ownerPhone) }
      if (object.ownerMobile != null) { message.ownerMobile = String(object.ownerMobile) }
      if (object.ownerAddress != null) { message.ownerAddress = String(object.ownerAddress) }
      if (object.ownerZipCode != null) { message.ownerZipCode = String(object.ownerZipCode) }
      if (object.ownerCountry != null) { message.ownerCountry = String(object.ownerCountry) }
      if (object.officalUrl != null) { message.officalUrl = String(object.officalUrl) }
      return message
    }

    /**
         * Creates a plain object from an AppModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbapp.AppModel
         * @static
         * @param {pbapp.AppModel} message AppModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    AppModel.toObject = function toObject(message, options) {
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
        object.description = ''
        object.icon = ''
        object.logo = ''
        object.url = ''
        object.version = ''
        object.type = 0
        object.status = 0
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.ownerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.ownerId = options.longs === String ? '0' : 0 }
        object.ownerName = ''
        object.ownerEmail = ''
        object.ownerPhone = ''
        object.ownerMobile = ''
        object.ownerAddress = ''
        object.ownerZipCode = ''
        object.ownerCountry = ''
        object.officalUrl = ''
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.name != null && message.hasOwnProperty('name')) { object.name = message.name }
      if (message.description != null && message.hasOwnProperty('description')) { object.description = message.description }
      if (message.icon != null && message.hasOwnProperty('icon')) { object.icon = message.icon }
      if (message.logo != null && message.hasOwnProperty('logo')) { object.logo = message.logo }
      if (message.url != null && message.hasOwnProperty('url')) { object.url = message.url }
      if (message.version != null && message.hasOwnProperty('version')) { object.version = message.version }
      if (message.type != null && message.hasOwnProperty('type')) { object.type = message.type }
      if (message.status != null && message.hasOwnProperty('status')) { object.status = message.status }
      if (message.ownerId != null && message.hasOwnProperty('ownerId')) {
        if (typeof message.ownerId === 'number') { object.ownerId = options.longs === String ? String(message.ownerId) : message.ownerId } else { object.ownerId = options.longs === String ? $util.Long.prototype.toString.call(message.ownerId) : options.longs === Number ? new $util.LongBits(message.ownerId.low >>> 0, message.ownerId.high >>> 0).toNumber() : message.ownerId }
      }
      if (message.ownerName != null && message.hasOwnProperty('ownerName')) { object.ownerName = message.ownerName }
      if (message.ownerEmail != null && message.hasOwnProperty('ownerEmail')) { object.ownerEmail = message.ownerEmail }
      if (message.ownerPhone != null && message.hasOwnProperty('ownerPhone')) { object.ownerPhone = message.ownerPhone }
      if (message.ownerMobile != null && message.hasOwnProperty('ownerMobile')) { object.ownerMobile = message.ownerMobile }
      if (message.ownerAddress != null && message.hasOwnProperty('ownerAddress')) { object.ownerAddress = message.ownerAddress }
      if (message.ownerZipCode != null && message.hasOwnProperty('ownerZipCode')) { object.ownerZipCode = message.ownerZipCode }
      if (message.ownerCountry != null && message.hasOwnProperty('ownerCountry')) { object.ownerCountry = message.ownerCountry }
      if (message.officalUrl != null && message.hasOwnProperty('officalUrl')) { object.officalUrl = message.officalUrl }
      return object
    }

    /**
         * Converts this AppModel to JSON.
         * @function toJSON
         * @memberof pbapp.AppModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    AppModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for AppModel
         * @function getTypeUrl
         * @memberof pbapp.AppModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    AppModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbapp.AppModel'
    }

    return AppModel
  })()

  pbapp.FindAppArgs = (function() {
    /**
         * Properties of a FindAppArgs.
         * @memberof pbapp
         * @interface IFindAppArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindAppArgs pageInfo
         * @property {pbapp.IAppModel|null} [query] FindAppArgs query
         */

    /**
         * Constructs a new FindAppArgs.
         * @memberof pbapp
         * @classdesc Represents a FindAppArgs.
         * @implements IFindAppArgs
         * @constructor
         * @param {pbapp.IFindAppArgs=} [properties] Properties to set
         */
    function FindAppArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindAppArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbapp.FindAppArgs
         * @instance
         */
    FindAppArgs.prototype.pageInfo = null

    /**
         * FindAppArgs query.
         * @member {pbapp.IAppModel|null|undefined} query
         * @memberof pbapp.FindAppArgs
         * @instance
         */
    FindAppArgs.prototype.query = null

    /**
         * Creates a new FindAppArgs instance using the specified properties.
         * @function create
         * @memberof pbapp.FindAppArgs
         * @static
         * @param {pbapp.IFindAppArgs=} [properties] Properties to set
         * @returns {pbapp.FindAppArgs} FindAppArgs instance
         */
    FindAppArgs.create = function create(properties) {
      return new FindAppArgs(properties)
    }

    /**
         * Encodes the specified FindAppArgs message. Does not implicitly {@link pbapp.FindAppArgs.verify|verify} messages.
         * @function encode
         * @memberof pbapp.FindAppArgs
         * @static
         * @param {pbapp.IFindAppArgs} message FindAppArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindAppArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbapp.AppModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
         * Encodes the specified FindAppArgs message, length delimited. Does not implicitly {@link pbapp.FindAppArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbapp.FindAppArgs
         * @static
         * @param {pbapp.IFindAppArgs} message FindAppArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindAppArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindAppArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbapp.FindAppArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbapp.FindAppArgs} FindAppArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindAppArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbapp.FindAppArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          }
          case 2: {
            message.query = $root.pbapp.AppModel.decode(reader, reader.uint32())
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
         * Decodes a FindAppArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbapp.FindAppArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbapp.FindAppArgs} FindAppArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindAppArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindAppArgs message.
         * @function verify
         * @memberof pbapp.FindAppArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindAppArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbapp.AppModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
         * Creates a FindAppArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbapp.FindAppArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbapp.FindAppArgs} FindAppArgs
         */
    FindAppArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbapp.FindAppArgs) { return object }
      var message = new $root.pbapp.FindAppArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbapp.FindAppArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbapp.FindAppArgs.query: object expected') }
        message.query = $root.pbapp.AppModel.fromObject(object.query)
      }
      return message
    }

    /**
         * Creates a plain object from a FindAppArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbapp.FindAppArgs
         * @static
         * @param {pbapp.FindAppArgs} message FindAppArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindAppArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbapp.AppModel.toObject(message.query, options) }
      return object
    }

    /**
         * Converts this FindAppArgs to JSON.
         * @function toJSON
         * @memberof pbapp.FindAppArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindAppArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindAppArgs
         * @function getTypeUrl
         * @memberof pbapp.FindAppArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindAppArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbapp.FindAppArgs'
    }

    return FindAppArgs
  })()

  pbapp.FindAppReply = (function() {
    /**
         * Properties of a FindAppReply.
         * @memberof pbapp
         * @interface IFindAppReply
         * @property {pbcommon.EnumCode|null} [code] FindAppReply code
         * @property {string|null} [msg] FindAppReply msg
         * @property {pbapp.IAppModel|null} [data] FindAppReply data
         * @property {Array.<pbapp.IAppModel>|null} [list] FindAppReply list
         * @property {number|Long|null} [total] FindAppReply total
         */

    /**
         * Constructs a new FindAppReply.
         * @memberof pbapp
         * @classdesc Represents a FindAppReply.
         * @implements IFindAppReply
         * @constructor
         * @param {pbapp.IFindAppReply=} [properties] Properties to set
         */
    function FindAppReply(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindAppReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbapp.FindAppReply
         * @instance
         */
    FindAppReply.prototype.code = 0

    /**
         * FindAppReply msg.
         * @member {string} msg
         * @memberof pbapp.FindAppReply
         * @instance
         */
    FindAppReply.prototype.msg = ''

    /**
         * FindAppReply data.
         * @member {pbapp.IAppModel|null|undefined} data
         * @memberof pbapp.FindAppReply
         * @instance
         */
    FindAppReply.prototype.data = null

    /**
         * FindAppReply list.
         * @member {Array.<pbapp.IAppModel>} list
         * @memberof pbapp.FindAppReply
         * @instance
         */
    FindAppReply.prototype.list = $util.emptyArray

    /**
         * FindAppReply total.
         * @member {number|Long} total
         * @memberof pbapp.FindAppReply
         * @instance
         */
    FindAppReply.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * Creates a new FindAppReply instance using the specified properties.
         * @function create
         * @memberof pbapp.FindAppReply
         * @static
         * @param {pbapp.IFindAppReply=} [properties] Properties to set
         * @returns {pbapp.FindAppReply} FindAppReply instance
         */
    FindAppReply.create = function create(properties) {
      return new FindAppReply(properties)
    }

    /**
         * Encodes the specified FindAppReply message. Does not implicitly {@link pbapp.FindAppReply.verify|verify} messages.
         * @function encode
         * @memberof pbapp.FindAppReply
         * @static
         * @param {pbapp.IFindAppReply} message FindAppReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindAppReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbapp.AppModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbapp.AppModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      return writer
    }

    /**
         * Encodes the specified FindAppReply message, length delimited. Does not implicitly {@link pbapp.FindAppReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbapp.FindAppReply
         * @static
         * @param {pbapp.IFindAppReply} message FindAppReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindAppReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindAppReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbapp.FindAppReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbapp.FindAppReply} FindAppReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindAppReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbapp.FindAppReply()
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
            message.data = $root.pbapp.AppModel.decode(reader, reader.uint32())
            break
          }
          case 4: {
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbapp.AppModel.decode(reader, reader.uint32()))
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
         * Decodes a FindAppReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbapp.FindAppReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbapp.FindAppReply} FindAppReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindAppReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindAppReply message.
         * @function verify
         * @memberof pbapp.FindAppReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindAppReply.verify = function verify(message) {
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
        var error = $root.pbapp.AppModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbapp.AppModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      return null
    }

    /**
         * Creates a FindAppReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbapp.FindAppReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbapp.FindAppReply} FindAppReply
         */
    FindAppReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbapp.FindAppReply) { return object }
      var message = new $root.pbapp.FindAppReply()
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
        if (typeof object.data !== 'object') { throw TypeError('.pbapp.FindAppReply.data: object expected') }
        message.data = $root.pbapp.AppModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbapp.FindAppReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbapp.FindAppReply.list: object expected') }
          message.list[i] = $root.pbapp.AppModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      return message
    }

    /**
         * Creates a plain object from a FindAppReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbapp.FindAppReply
         * @static
         * @param {pbapp.FindAppReply} message FindAppReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindAppReply.toObject = function toObject(message, options) {
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
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbapp.AppModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbapp.AppModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      return object
    }

    /**
         * Converts this FindAppReply to JSON.
         * @function toJSON
         * @memberof pbapp.FindAppReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindAppReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindAppReply
         * @function getTypeUrl
         * @memberof pbapp.FindAppReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindAppReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbapp.FindAppReply'
    }

    return FindAppReply
  })()

  pbapp.App = (function() {
    /**
         * Constructs a new App service.
         * @memberof pbapp
         * @classdesc Represents an App
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function App(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (App.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = App

    /**
         * Creates new App service using the specified rpc implementation.
         * @function create
         * @memberof pbapp.App
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {App} RPC service. Useful where requests and/or responses are streamed.
         */
    App.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link pbapp.App#createApp}.
         * @memberof pbapp.App
         * @typedef CreateAppCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls CreateApp.
         * @function createApp
         * @memberof pbapp.App
         * @instance
         * @param {pbapp.IAppModel} request AppModel message or plain object
         * @param {pbapp.App.CreateAppCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(App.prototype.createApp = function createApp(request, callback) {
      return this.rpcCall(createApp, $root.pbapp.AppModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreateApp' })

    /**
         * Calls CreateApp.
         * @function createApp
         * @memberof pbapp.App
         * @instance
         * @param {pbapp.IAppModel} request AppModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbapp.App#updateApp}.
         * @memberof pbapp.App
         * @typedef UpdateAppCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls UpdateApp.
         * @function updateApp
         * @memberof pbapp.App
         * @instance
         * @param {pbapp.IAppModel} request AppModel message or plain object
         * @param {pbapp.App.UpdateAppCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(App.prototype.updateApp = function updateApp(request, callback) {
      return this.rpcCall(updateApp, $root.pbapp.AppModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdateApp' })

    /**
         * Calls UpdateApp.
         * @function updateApp
         * @memberof pbapp.App
         * @instance
         * @param {pbapp.IAppModel} request AppModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbapp.App#deleteApp}.
         * @memberof pbapp.App
         * @typedef DeleteAppCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls DeleteApp.
         * @function deleteApp
         * @memberof pbapp.App
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbapp.App.DeleteAppCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(App.prototype.deleteApp = function deleteApp(request, callback) {
      return this.rpcCall(deleteApp, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeleteApp' })

    /**
         * Calls DeleteApp.
         * @function deleteApp
         * @memberof pbapp.App
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbapp.App#findAppById}.
         * @memberof pbapp.App
         * @typedef FindAppByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbapp.FindAppReply} [response] FindAppReply
         */

    /**
         * Calls FindAppById.
         * @function findAppById
         * @memberof pbapp.App
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbapp.App.FindAppByIdCallback} callback Node-style callback called with the error, if any, and FindAppReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(App.prototype.findAppById = function findAppById(request, callback) {
      return this.rpcCall(findAppById, $root.pbcommon.IdArgs, $root.pbapp.FindAppReply, request, callback)
    }, 'name', { value: 'FindAppById' })

    /**
         * Calls FindAppById.
         * @function findAppById
         * @memberof pbapp.App
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbapp.FindAppReply>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbapp.App#findAppList}.
         * @memberof pbapp.App
         * @typedef FindAppListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbapp.FindAppReply} [response] FindAppReply
         */

    /**
         * Calls FindAppList.
         * @function findAppList
         * @memberof pbapp.App
         * @instance
         * @param {pbapp.IFindAppArgs} request FindAppArgs message or plain object
         * @param {pbapp.App.FindAppListCallback} callback Node-style callback called with the error, if any, and FindAppReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(App.prototype.findAppList = function findAppList(request, callback) {
      return this.rpcCall(findAppList, $root.pbapp.FindAppArgs, $root.pbapp.FindAppReply, request, callback)
    }, 'name', { value: 'FindAppList' })

    /**
         * Calls FindAppList.
         * @function findAppList
         * @memberof pbapp.App
         * @instance
         * @param {pbapp.IFindAppArgs} request FindAppArgs message or plain object
         * @returns {Promise<pbapp.FindAppReply>} Promise
         * @variation 2
         */

    return App
  })()

  return pbapp
})()

$root.pbdeviceReport = (function() {
  /**
     * Namespace pbdeviceReport.
     * @exports pbdeviceReport
     * @namespace
     */
  var pbdeviceReport = {}

  pbdeviceReport.DeviceReportModel = (function() {
    /**
         * Properties of a DeviceReportModel.
         * @memberof pbdeviceReport
         * @interface IDeviceReportModel
         * @property {number|Long|null} [id] DeviceReportModel id
         * @property {string|null} [createdAt] DeviceReportModel createdAt
         * @property {string|null} [updatedAt] DeviceReportModel updatedAt
         * @property {number|null} [rptNo] DeviceReportModel rptNo
         * @property {string|null} [imei] DeviceReportModel imei
         * @property {string|null} [firmwareEdition] DeviceReportModel firmwareEdition
         * @property {string|null} [reportTime] DeviceReportModel reportTime
         * @property {string|null} [devModel] DeviceReportModel devModel
         * @property {string|null} [reportType] DeviceReportModel reportType
         * @property {number|null} [csq] DeviceReportModel csq
         * @property {number|null} [dumpEnergy] DeviceReportModel dumpEnergy
         * @property {number|null} [stepNum] DeviceReportModel stepNum
         * @property {number|null} [charging] DeviceReportModel charging
         * @property {number|null} [status] DeviceReportModel status
         * @property {string|null} [macs] DeviceReportModel macs
         * @property {string|null} [latitude] DeviceReportModel latitude
         * @property {string|null} [longitude] DeviceReportModel longitude
         * @property {number|null} [flag] DeviceReportModel flag
         */

    /**
         * Constructs a new DeviceReportModel.
         * @memberof pbdeviceReport
         * @classdesc Represents a DeviceReportModel.
         * @implements IDeviceReportModel
         * @constructor
         * @param {pbdeviceReport.IDeviceReportModel=} [properties] Properties to set
         */
    function DeviceReportModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * DeviceReportModel id.
         * @member {number|Long} id
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * DeviceReportModel createdAt.
         * @member {string} createdAt
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.createdAt = ''

    /**
         * DeviceReportModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.updatedAt = ''

    /**
         * DeviceReportModel rptNo.
         * @member {number} rptNo
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.rptNo = 0

    /**
         * DeviceReportModel imei.
         * @member {string} imei
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.imei = ''

    /**
         * DeviceReportModel firmwareEdition.
         * @member {string} firmwareEdition
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.firmwareEdition = ''

    /**
         * DeviceReportModel reportTime.
         * @member {string} reportTime
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.reportTime = ''

    /**
         * DeviceReportModel devModel.
         * @member {string} devModel
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.devModel = ''

    /**
         * DeviceReportModel reportType.
         * @member {string} reportType
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.reportType = ''

    /**
         * DeviceReportModel csq.
         * @member {number} csq
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.csq = 0

    /**
         * DeviceReportModel dumpEnergy.
         * @member {number} dumpEnergy
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.dumpEnergy = 0

    /**
         * DeviceReportModel stepNum.
         * @member {number} stepNum
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.stepNum = 0

    /**
         * DeviceReportModel charging.
         * @member {number} charging
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.charging = 0

    /**
         * DeviceReportModel status.
         * @member {number} status
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.status = 0

    /**
         * DeviceReportModel macs.
         * @member {string} macs
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.macs = ''

    /**
         * DeviceReportModel latitude.
         * @member {string} latitude
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.latitude = ''

    /**
         * DeviceReportModel longitude.
         * @member {string} longitude
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.longitude = ''

    /**
         * DeviceReportModel flag.
         * @member {number} flag
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         */
    DeviceReportModel.prototype.flag = 0

    /**
         * Creates a new DeviceReportModel instance using the specified properties.
         * @function create
         * @memberof pbdeviceReport.DeviceReportModel
         * @static
         * @param {pbdeviceReport.IDeviceReportModel=} [properties] Properties to set
         * @returns {pbdeviceReport.DeviceReportModel} DeviceReportModel instance
         */
    DeviceReportModel.create = function create(properties) {
      return new DeviceReportModel(properties)
    }

    /**
         * Encodes the specified DeviceReportModel message. Does not implicitly {@link pbdeviceReport.DeviceReportModel.verify|verify} messages.
         * @function encode
         * @memberof pbdeviceReport.DeviceReportModel
         * @static
         * @param {pbdeviceReport.IDeviceReportModel} message DeviceReportModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    DeviceReportModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.rptNo != null && Object.hasOwnProperty.call(message, 'rptNo')) { writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rptNo) }
      if (message.imei != null && Object.hasOwnProperty.call(message, 'imei')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.imei) }
      if (message.firmwareEdition != null && Object.hasOwnProperty.call(message, 'firmwareEdition')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.firmwareEdition) }
      if (message.reportTime != null && Object.hasOwnProperty.call(message, 'reportTime')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.reportTime) }
      if (message.devModel != null && Object.hasOwnProperty.call(message, 'devModel')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.devModel) }
      if (message.reportType != null && Object.hasOwnProperty.call(message, 'reportType')) { writer.uint32(/* id 9, wireType 2 =*/74).string(message.reportType) }
      if (message.csq != null && Object.hasOwnProperty.call(message, 'csq')) { writer.uint32(/* id 10, wireType 0 =*/80).int32(message.csq) }
      if (message.dumpEnergy != null && Object.hasOwnProperty.call(message, 'dumpEnergy')) { writer.uint32(/* id 11, wireType 0 =*/88).int32(message.dumpEnergy) }
      if (message.stepNum != null && Object.hasOwnProperty.call(message, 'stepNum')) { writer.uint32(/* id 12, wireType 0 =*/96).int32(message.stepNum) }
      if (message.charging != null && Object.hasOwnProperty.call(message, 'charging')) { writer.uint32(/* id 13, wireType 0 =*/104).int32(message.charging) }
      if (message.status != null && Object.hasOwnProperty.call(message, 'status')) { writer.uint32(/* id 14, wireType 0 =*/112).int32(message.status) }
      if (message.macs != null && Object.hasOwnProperty.call(message, 'macs')) { writer.uint32(/* id 15, wireType 2 =*/122).string(message.macs) }
      if (message.latitude != null && Object.hasOwnProperty.call(message, 'latitude')) { writer.uint32(/* id 16, wireType 2 =*/130).string(message.latitude) }
      if (message.longitude != null && Object.hasOwnProperty.call(message, 'longitude')) { writer.uint32(/* id 17, wireType 2 =*/138).string(message.longitude) }
      if (message.flag != null && Object.hasOwnProperty.call(message, 'flag')) { writer.uint32(/* id 18, wireType 0 =*/144).int32(message.flag) }
      return writer
    }

    /**
         * Encodes the specified DeviceReportModel message, length delimited. Does not implicitly {@link pbdeviceReport.DeviceReportModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbdeviceReport.DeviceReportModel
         * @static
         * @param {pbdeviceReport.IDeviceReportModel} message DeviceReportModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    DeviceReportModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a DeviceReportModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbdeviceReport.DeviceReportModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbdeviceReport.DeviceReportModel} DeviceReportModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    DeviceReportModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbdeviceReport.DeviceReportModel()
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
            message.rptNo = reader.int32()
            break
          }
          case 5: {
            message.imei = reader.string()
            break
          }
          case 6: {
            message.firmwareEdition = reader.string()
            break
          }
          case 7: {
            message.reportTime = reader.string()
            break
          }
          case 8: {
            message.devModel = reader.string()
            break
          }
          case 9: {
            message.reportType = reader.string()
            break
          }
          case 10: {
            message.csq = reader.int32()
            break
          }
          case 11: {
            message.dumpEnergy = reader.int32()
            break
          }
          case 12: {
            message.stepNum = reader.int32()
            break
          }
          case 13: {
            message.charging = reader.int32()
            break
          }
          case 14: {
            message.status = reader.int32()
            break
          }
          case 15: {
            message.macs = reader.string()
            break
          }
          case 16: {
            message.latitude = reader.string()
            break
          }
          case 17: {
            message.longitude = reader.string()
            break
          }
          case 18: {
            message.flag = reader.int32()
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
         * Decodes a DeviceReportModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbdeviceReport.DeviceReportModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbdeviceReport.DeviceReportModel} DeviceReportModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    DeviceReportModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a DeviceReportModel message.
         * @function verify
         * @memberof pbdeviceReport.DeviceReportModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    DeviceReportModel.verify = function verify(message) {
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
      if (message.rptNo != null && message.hasOwnProperty('rptNo')) {
        if (!$util.isInteger(message.rptNo)) { return 'rptNo: integer expected' }
      }
      if (message.imei != null && message.hasOwnProperty('imei')) {
        if (!$util.isString(message.imei)) { return 'imei: string expected' }
      }
      if (message.firmwareEdition != null && message.hasOwnProperty('firmwareEdition')) {
        if (!$util.isString(message.firmwareEdition)) { return 'firmwareEdition: string expected' }
      }
      if (message.reportTime != null && message.hasOwnProperty('reportTime')) {
        if (!$util.isString(message.reportTime)) { return 'reportTime: string expected' }
      }
      if (message.devModel != null && message.hasOwnProperty('devModel')) {
        if (!$util.isString(message.devModel)) { return 'devModel: string expected' }
      }
      if (message.reportType != null && message.hasOwnProperty('reportType')) {
        if (!$util.isString(message.reportType)) { return 'reportType: string expected' }
      }
      if (message.csq != null && message.hasOwnProperty('csq')) {
        if (!$util.isInteger(message.csq)) { return 'csq: integer expected' }
      }
      if (message.dumpEnergy != null && message.hasOwnProperty('dumpEnergy')) {
        if (!$util.isInteger(message.dumpEnergy)) { return 'dumpEnergy: integer expected' }
      }
      if (message.stepNum != null && message.hasOwnProperty('stepNum')) {
        if (!$util.isInteger(message.stepNum)) { return 'stepNum: integer expected' }
      }
      if (message.charging != null && message.hasOwnProperty('charging')) {
        if (!$util.isInteger(message.charging)) { return 'charging: integer expected' }
      }
      if (message.status != null && message.hasOwnProperty('status')) {
        if (!$util.isInteger(message.status)) { return 'status: integer expected' }
      }
      if (message.macs != null && message.hasOwnProperty('macs')) {
        if (!$util.isString(message.macs)) { return 'macs: string expected' }
      }
      if (message.latitude != null && message.hasOwnProperty('latitude')) {
        if (!$util.isString(message.latitude)) { return 'latitude: string expected' }
      }
      if (message.longitude != null && message.hasOwnProperty('longitude')) {
        if (!$util.isString(message.longitude)) { return 'longitude: string expected' }
      }
      if (message.flag != null && message.hasOwnProperty('flag')) {
        if (!$util.isInteger(message.flag)) { return 'flag: integer expected' }
      }
      return null
    }

    /**
         * Creates a DeviceReportModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbdeviceReport.DeviceReportModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbdeviceReport.DeviceReportModel} DeviceReportModel
         */
    DeviceReportModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbdeviceReport.DeviceReportModel) { return object }
      var message = new $root.pbdeviceReport.DeviceReportModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.rptNo != null) { message.rptNo = object.rptNo | 0 }
      if (object.imei != null) { message.imei = String(object.imei) }
      if (object.firmwareEdition != null) { message.firmwareEdition = String(object.firmwareEdition) }
      if (object.reportTime != null) { message.reportTime = String(object.reportTime) }
      if (object.devModel != null) { message.devModel = String(object.devModel) }
      if (object.reportType != null) { message.reportType = String(object.reportType) }
      if (object.csq != null) { message.csq = object.csq | 0 }
      if (object.dumpEnergy != null) { message.dumpEnergy = object.dumpEnergy | 0 }
      if (object.stepNum != null) { message.stepNum = object.stepNum | 0 }
      if (object.charging != null) { message.charging = object.charging | 0 }
      if (object.status != null) { message.status = object.status | 0 }
      if (object.macs != null) { message.macs = String(object.macs) }
      if (object.latitude != null) { message.latitude = String(object.latitude) }
      if (object.longitude != null) { message.longitude = String(object.longitude) }
      if (object.flag != null) { message.flag = object.flag | 0 }
      return message
    }

    /**
         * Creates a plain object from a DeviceReportModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbdeviceReport.DeviceReportModel
         * @static
         * @param {pbdeviceReport.DeviceReportModel} message DeviceReportModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    DeviceReportModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        object.rptNo = 0
        object.imei = ''
        object.firmwareEdition = ''
        object.reportTime = ''
        object.devModel = ''
        object.reportType = ''
        object.csq = 0
        object.dumpEnergy = 0
        object.stepNum = 0
        object.charging = 0
        object.status = 0
        object.macs = ''
        object.latitude = ''
        object.longitude = ''
        object.flag = 0
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.rptNo != null && message.hasOwnProperty('rptNo')) { object.rptNo = message.rptNo }
      if (message.imei != null && message.hasOwnProperty('imei')) { object.imei = message.imei }
      if (message.firmwareEdition != null && message.hasOwnProperty('firmwareEdition')) { object.firmwareEdition = message.firmwareEdition }
      if (message.reportTime != null && message.hasOwnProperty('reportTime')) { object.reportTime = message.reportTime }
      if (message.devModel != null && message.hasOwnProperty('devModel')) { object.devModel = message.devModel }
      if (message.reportType != null && message.hasOwnProperty('reportType')) { object.reportType = message.reportType }
      if (message.csq != null && message.hasOwnProperty('csq')) { object.csq = message.csq }
      if (message.dumpEnergy != null && message.hasOwnProperty('dumpEnergy')) { object.dumpEnergy = message.dumpEnergy }
      if (message.stepNum != null && message.hasOwnProperty('stepNum')) { object.stepNum = message.stepNum }
      if (message.charging != null && message.hasOwnProperty('charging')) { object.charging = message.charging }
      if (message.status != null && message.hasOwnProperty('status')) { object.status = message.status }
      if (message.macs != null && message.hasOwnProperty('macs')) { object.macs = message.macs }
      if (message.latitude != null && message.hasOwnProperty('latitude')) { object.latitude = message.latitude }
      if (message.longitude != null && message.hasOwnProperty('longitude')) { object.longitude = message.longitude }
      if (message.flag != null && message.hasOwnProperty('flag')) { object.flag = message.flag }
      return object
    }

    /**
         * Converts this DeviceReportModel to JSON.
         * @function toJSON
         * @memberof pbdeviceReport.DeviceReportModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    DeviceReportModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for DeviceReportModel
         * @function getTypeUrl
         * @memberof pbdeviceReport.DeviceReportModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    DeviceReportModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbdeviceReport.DeviceReportModel'
    }

    return DeviceReportModel
  })()

  pbdeviceReport.FindDeviceReportArgs = (function() {
    /**
         * Properties of a FindDeviceReportArgs.
         * @memberof pbdeviceReport
         * @interface IFindDeviceReportArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindDeviceReportArgs pageInfo
         * @property {pbdeviceReport.IDeviceReportModel|null} [query] FindDeviceReportArgs query
         */

    /**
         * Constructs a new FindDeviceReportArgs.
         * @memberof pbdeviceReport
         * @classdesc Represents a FindDeviceReportArgs.
         * @implements IFindDeviceReportArgs
         * @constructor
         * @param {pbdeviceReport.IFindDeviceReportArgs=} [properties] Properties to set
         */
    function FindDeviceReportArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindDeviceReportArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @instance
         */
    FindDeviceReportArgs.prototype.pageInfo = null

    /**
         * FindDeviceReportArgs query.
         * @member {pbdeviceReport.IDeviceReportModel|null|undefined} query
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @instance
         */
    FindDeviceReportArgs.prototype.query = null

    /**
         * Creates a new FindDeviceReportArgs instance using the specified properties.
         * @function create
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @static
         * @param {pbdeviceReport.IFindDeviceReportArgs=} [properties] Properties to set
         * @returns {pbdeviceReport.FindDeviceReportArgs} FindDeviceReportArgs instance
         */
    FindDeviceReportArgs.create = function create(properties) {
      return new FindDeviceReportArgs(properties)
    }

    /**
         * Encodes the specified FindDeviceReportArgs message. Does not implicitly {@link pbdeviceReport.FindDeviceReportArgs.verify|verify} messages.
         * @function encode
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @static
         * @param {pbdeviceReport.IFindDeviceReportArgs} message FindDeviceReportArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindDeviceReportArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbdeviceReport.DeviceReportModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
         * Encodes the specified FindDeviceReportArgs message, length delimited. Does not implicitly {@link pbdeviceReport.FindDeviceReportArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @static
         * @param {pbdeviceReport.IFindDeviceReportArgs} message FindDeviceReportArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindDeviceReportArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindDeviceReportArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbdeviceReport.FindDeviceReportArgs} FindDeviceReportArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindDeviceReportArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbdeviceReport.FindDeviceReportArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          }
          case 2: {
            message.query = $root.pbdeviceReport.DeviceReportModel.decode(reader, reader.uint32())
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
         * Decodes a FindDeviceReportArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbdeviceReport.FindDeviceReportArgs} FindDeviceReportArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindDeviceReportArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindDeviceReportArgs message.
         * @function verify
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindDeviceReportArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbdeviceReport.DeviceReportModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
         * Creates a FindDeviceReportArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbdeviceReport.FindDeviceReportArgs} FindDeviceReportArgs
         */
    FindDeviceReportArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbdeviceReport.FindDeviceReportArgs) { return object }
      var message = new $root.pbdeviceReport.FindDeviceReportArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbdeviceReport.FindDeviceReportArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbdeviceReport.FindDeviceReportArgs.query: object expected') }
        message.query = $root.pbdeviceReport.DeviceReportModel.fromObject(object.query)
      }
      return message
    }

    /**
         * Creates a plain object from a FindDeviceReportArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @static
         * @param {pbdeviceReport.FindDeviceReportArgs} message FindDeviceReportArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindDeviceReportArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbdeviceReport.DeviceReportModel.toObject(message.query, options) }
      return object
    }

    /**
         * Converts this FindDeviceReportArgs to JSON.
         * @function toJSON
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindDeviceReportArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindDeviceReportArgs
         * @function getTypeUrl
         * @memberof pbdeviceReport.FindDeviceReportArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindDeviceReportArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbdeviceReport.FindDeviceReportArgs'
    }

    return FindDeviceReportArgs
  })()

  pbdeviceReport.FindDeviceReportReplay = (function() {
    /**
         * Properties of a FindDeviceReportReplay.
         * @memberof pbdeviceReport
         * @interface IFindDeviceReportReplay
         * @property {pbcommon.EnumCode|null} [code] FindDeviceReportReplay code
         * @property {string|null} [msg] FindDeviceReportReplay msg
         * @property {pbdeviceReport.IDeviceReportModel|null} [data] FindDeviceReportReplay data
         * @property {Array.<pbdeviceReport.IDeviceReportModel>|null} [list] FindDeviceReportReplay list
         * @property {number|Long|null} [total] FindDeviceReportReplay total
         */

    /**
         * Constructs a new FindDeviceReportReplay.
         * @memberof pbdeviceReport
         * @classdesc Represents a FindDeviceReportReplay.
         * @implements IFindDeviceReportReplay
         * @constructor
         * @param {pbdeviceReport.IFindDeviceReportReplay=} [properties] Properties to set
         */
    function FindDeviceReportReplay(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindDeviceReportReplay code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @instance
         */
    FindDeviceReportReplay.prototype.code = 0

    /**
         * FindDeviceReportReplay msg.
         * @member {string} msg
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @instance
         */
    FindDeviceReportReplay.prototype.msg = ''

    /**
         * FindDeviceReportReplay data.
         * @member {pbdeviceReport.IDeviceReportModel|null|undefined} data
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @instance
         */
    FindDeviceReportReplay.prototype.data = null

    /**
         * FindDeviceReportReplay list.
         * @member {Array.<pbdeviceReport.IDeviceReportModel>} list
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @instance
         */
    FindDeviceReportReplay.prototype.list = $util.emptyArray

    /**
         * FindDeviceReportReplay total.
         * @member {number|Long} total
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @instance
         */
    FindDeviceReportReplay.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * Creates a new FindDeviceReportReplay instance using the specified properties.
         * @function create
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @static
         * @param {pbdeviceReport.IFindDeviceReportReplay=} [properties] Properties to set
         * @returns {pbdeviceReport.FindDeviceReportReplay} FindDeviceReportReplay instance
         */
    FindDeviceReportReplay.create = function create(properties) {
      return new FindDeviceReportReplay(properties)
    }

    /**
         * Encodes the specified FindDeviceReportReplay message. Does not implicitly {@link pbdeviceReport.FindDeviceReportReplay.verify|verify} messages.
         * @function encode
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @static
         * @param {pbdeviceReport.IFindDeviceReportReplay} message FindDeviceReportReplay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindDeviceReportReplay.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbdeviceReport.DeviceReportModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbdeviceReport.DeviceReportModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      return writer
    }

    /**
         * Encodes the specified FindDeviceReportReplay message, length delimited. Does not implicitly {@link pbdeviceReport.FindDeviceReportReplay.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @static
         * @param {pbdeviceReport.IFindDeviceReportReplay} message FindDeviceReportReplay message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindDeviceReportReplay.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindDeviceReportReplay message from the specified reader or buffer.
         * @function decode
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbdeviceReport.FindDeviceReportReplay} FindDeviceReportReplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindDeviceReportReplay.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbdeviceReport.FindDeviceReportReplay()
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
            message.data = $root.pbdeviceReport.DeviceReportModel.decode(reader, reader.uint32())
            break
          }
          case 4: {
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbdeviceReport.DeviceReportModel.decode(reader, reader.uint32()))
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
         * Decodes a FindDeviceReportReplay message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbdeviceReport.FindDeviceReportReplay} FindDeviceReportReplay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindDeviceReportReplay.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindDeviceReportReplay message.
         * @function verify
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindDeviceReportReplay.verify = function verify(message) {
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
        var error = $root.pbdeviceReport.DeviceReportModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbdeviceReport.DeviceReportModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      return null
    }

    /**
         * Creates a FindDeviceReportReplay message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbdeviceReport.FindDeviceReportReplay} FindDeviceReportReplay
         */
    FindDeviceReportReplay.fromObject = function fromObject(object) {
      if (object instanceof $root.pbdeviceReport.FindDeviceReportReplay) { return object }
      var message = new $root.pbdeviceReport.FindDeviceReportReplay()
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
        if (typeof object.data !== 'object') { throw TypeError('.pbdeviceReport.FindDeviceReportReplay.data: object expected') }
        message.data = $root.pbdeviceReport.DeviceReportModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbdeviceReport.FindDeviceReportReplay.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbdeviceReport.FindDeviceReportReplay.list: object expected') }
          message.list[i] = $root.pbdeviceReport.DeviceReportModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      return message
    }

    /**
         * Creates a plain object from a FindDeviceReportReplay message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @static
         * @param {pbdeviceReport.FindDeviceReportReplay} message FindDeviceReportReplay
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindDeviceReportReplay.toObject = function toObject(message, options) {
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
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbdeviceReport.DeviceReportModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbdeviceReport.DeviceReportModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      return object
    }

    /**
         * Converts this FindDeviceReportReplay to JSON.
         * @function toJSON
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindDeviceReportReplay.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindDeviceReportReplay
         * @function getTypeUrl
         * @memberof pbdeviceReport.FindDeviceReportReplay
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindDeviceReportReplay.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbdeviceReport.FindDeviceReportReplay'
    }

    return FindDeviceReportReplay
  })()

  pbdeviceReport.AepReportArgs = (function() {
    /**
         * Properties of an AepReportArgs.
         * @memberof pbdeviceReport
         * @interface IAepReportArgs
         * @property {number|null} [upPacketSN] AepReportArgs upPacketSN
         * @property {number|null} [upDataSN] AepReportArgs upDataSN
         * @property {string|null} [topic] AepReportArgs topic
         * @property {number|Long|null} [timestamp] AepReportArgs timestamp
         * @property {string|null} [tenantId] AepReportArgs tenantId
         * @property {string|null} [serviceId] AepReportArgs serviceId
         * @property {string|null} [protocol] AepReportArgs protocol
         * @property {string|null} [productId] AepReportArgs productId
         * @property {pbdeviceReport.AepReportArgs.IPayload|null} [payload] AepReportArgs payload
         * @property {string|null} [messageType] AepReportArgs messageType
         * @property {string|null} [deviceType] AepReportArgs deviceType
         * @property {string|null} [deviceId] AepReportArgs deviceId
         * @property {string|null} [assocAssetId] AepReportArgs assocAssetId
         * @property {string|null} [IMSI] AepReportArgs IMSI
         * @property {string|null} [IMEI] AepReportArgs IMEI
         */

    /**
         * Constructs a new AepReportArgs.
         * @memberof pbdeviceReport
         * @classdesc Represents an AepReportArgs.
         * @implements IAepReportArgs
         * @constructor
         * @param {pbdeviceReport.IAepReportArgs=} [properties] Properties to set
         */
    function AepReportArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * AepReportArgs upPacketSN.
         * @member {number} upPacketSN
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.upPacketSN = 0

    /**
         * AepReportArgs upDataSN.
         * @member {number} upDataSN
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.upDataSN = 0

    /**
         * AepReportArgs topic.
         * @member {string} topic
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.topic = ''

    /**
         * AepReportArgs timestamp.
         * @member {number|Long} timestamp
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * AepReportArgs tenantId.
         * @member {string} tenantId
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.tenantId = ''

    /**
         * AepReportArgs serviceId.
         * @member {string} serviceId
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.serviceId = ''

    /**
         * AepReportArgs protocol.
         * @member {string} protocol
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.protocol = ''

    /**
         * AepReportArgs productId.
         * @member {string} productId
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.productId = ''

    /**
         * AepReportArgs payload.
         * @member {pbdeviceReport.AepReportArgs.IPayload|null|undefined} payload
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.payload = null

    /**
         * AepReportArgs messageType.
         * @member {string} messageType
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.messageType = ''

    /**
         * AepReportArgs deviceType.
         * @member {string} deviceType
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.deviceType = ''

    /**
         * AepReportArgs deviceId.
         * @member {string} deviceId
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.deviceId = ''

    /**
         * AepReportArgs assocAssetId.
         * @member {string} assocAssetId
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.assocAssetId = ''

    /**
         * AepReportArgs IMSI.
         * @member {string} IMSI
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.IMSI = ''

    /**
         * AepReportArgs IMEI.
         * @member {string} IMEI
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         */
    AepReportArgs.prototype.IMEI = ''

    /**
         * Creates a new AepReportArgs instance using the specified properties.
         * @function create
         * @memberof pbdeviceReport.AepReportArgs
         * @static
         * @param {pbdeviceReport.IAepReportArgs=} [properties] Properties to set
         * @returns {pbdeviceReport.AepReportArgs} AepReportArgs instance
         */
    AepReportArgs.create = function create(properties) {
      return new AepReportArgs(properties)
    }

    /**
         * Encodes the specified AepReportArgs message. Does not implicitly {@link pbdeviceReport.AepReportArgs.verify|verify} messages.
         * @function encode
         * @memberof pbdeviceReport.AepReportArgs
         * @static
         * @param {pbdeviceReport.IAepReportArgs} message AepReportArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    AepReportArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.upPacketSN != null && Object.hasOwnProperty.call(message, 'upPacketSN')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.upPacketSN) }
      if (message.upDataSN != null && Object.hasOwnProperty.call(message, 'upDataSN')) { writer.uint32(/* id 2, wireType 0 =*/16).int32(message.upDataSN) }
      if (message.topic != null && Object.hasOwnProperty.call(message, 'topic')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.topic) }
      if (message.timestamp != null && Object.hasOwnProperty.call(message, 'timestamp')) { writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp) }
      if (message.tenantId != null && Object.hasOwnProperty.call(message, 'tenantId')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.tenantId) }
      if (message.serviceId != null && Object.hasOwnProperty.call(message, 'serviceId')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.serviceId) }
      if (message.protocol != null && Object.hasOwnProperty.call(message, 'protocol')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.protocol) }
      if (message.productId != null && Object.hasOwnProperty.call(message, 'productId')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.productId) }
      if (message.payload != null && Object.hasOwnProperty.call(message, 'payload')) { $root.pbdeviceReport.AepReportArgs.Payload.encode(message.payload, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim() }
      if (message.messageType != null && Object.hasOwnProperty.call(message, 'messageType')) { writer.uint32(/* id 10, wireType 2 =*/82).string(message.messageType) }
      if (message.deviceType != null && Object.hasOwnProperty.call(message, 'deviceType')) { writer.uint32(/* id 11, wireType 2 =*/90).string(message.deviceType) }
      if (message.deviceId != null && Object.hasOwnProperty.call(message, 'deviceId')) { writer.uint32(/* id 12, wireType 2 =*/98).string(message.deviceId) }
      if (message.assocAssetId != null && Object.hasOwnProperty.call(message, 'assocAssetId')) { writer.uint32(/* id 13, wireType 2 =*/106).string(message.assocAssetId) }
      if (message.IMSI != null && Object.hasOwnProperty.call(message, 'IMSI')) { writer.uint32(/* id 14, wireType 2 =*/114).string(message.IMSI) }
      if (message.IMEI != null && Object.hasOwnProperty.call(message, 'IMEI')) { writer.uint32(/* id 15, wireType 2 =*/122).string(message.IMEI) }
      return writer
    }

    /**
         * Encodes the specified AepReportArgs message, length delimited. Does not implicitly {@link pbdeviceReport.AepReportArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbdeviceReport.AepReportArgs
         * @static
         * @param {pbdeviceReport.IAepReportArgs} message AepReportArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    AepReportArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes an AepReportArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbdeviceReport.AepReportArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbdeviceReport.AepReportArgs} AepReportArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    AepReportArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbdeviceReport.AepReportArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.upPacketSN = reader.int32()
            break
          }
          case 2: {
            message.upDataSN = reader.int32()
            break
          }
          case 3: {
            message.topic = reader.string()
            break
          }
          case 4: {
            message.timestamp = reader.int64()
            break
          }
          case 5: {
            message.tenantId = reader.string()
            break
          }
          case 6: {
            message.serviceId = reader.string()
            break
          }
          case 7: {
            message.protocol = reader.string()
            break
          }
          case 8: {
            message.productId = reader.string()
            break
          }
          case 9: {
            message.payload = $root.pbdeviceReport.AepReportArgs.Payload.decode(reader, reader.uint32())
            break
          }
          case 10: {
            message.messageType = reader.string()
            break
          }
          case 11: {
            message.deviceType = reader.string()
            break
          }
          case 12: {
            message.deviceId = reader.string()
            break
          }
          case 13: {
            message.assocAssetId = reader.string()
            break
          }
          case 14: {
            message.IMSI = reader.string()
            break
          }
          case 15: {
            message.IMEI = reader.string()
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
         * Decodes an AepReportArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbdeviceReport.AepReportArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbdeviceReport.AepReportArgs} AepReportArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    AepReportArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies an AepReportArgs message.
         * @function verify
         * @memberof pbdeviceReport.AepReportArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    AepReportArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.upPacketSN != null && message.hasOwnProperty('upPacketSN')) {
        if (!$util.isInteger(message.upPacketSN)) { return 'upPacketSN: integer expected' }
      }
      if (message.upDataSN != null && message.hasOwnProperty('upDataSN')) {
        if (!$util.isInteger(message.upDataSN)) { return 'upDataSN: integer expected' }
      }
      if (message.topic != null && message.hasOwnProperty('topic')) {
        if (!$util.isString(message.topic)) { return 'topic: string expected' }
      }
      if (message.timestamp != null && message.hasOwnProperty('timestamp')) {
        if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high))) { return 'timestamp: integer|Long expected' }
      }
      if (message.tenantId != null && message.hasOwnProperty('tenantId')) {
        if (!$util.isString(message.tenantId)) { return 'tenantId: string expected' }
      }
      if (message.serviceId != null && message.hasOwnProperty('serviceId')) {
        if (!$util.isString(message.serviceId)) { return 'serviceId: string expected' }
      }
      if (message.protocol != null && message.hasOwnProperty('protocol')) {
        if (!$util.isString(message.protocol)) { return 'protocol: string expected' }
      }
      if (message.productId != null && message.hasOwnProperty('productId')) {
        if (!$util.isString(message.productId)) { return 'productId: string expected' }
      }
      if (message.payload != null && message.hasOwnProperty('payload')) {
        var error = $root.pbdeviceReport.AepReportArgs.Payload.verify(message.payload)
        if (error) { return 'payload.' + error }
      }
      if (message.messageType != null && message.hasOwnProperty('messageType')) {
        if (!$util.isString(message.messageType)) { return 'messageType: string expected' }
      }
      if (message.deviceType != null && message.hasOwnProperty('deviceType')) {
        if (!$util.isString(message.deviceType)) { return 'deviceType: string expected' }
      }
      if (message.deviceId != null && message.hasOwnProperty('deviceId')) {
        if (!$util.isString(message.deviceId)) { return 'deviceId: string expected' }
      }
      if (message.assocAssetId != null && message.hasOwnProperty('assocAssetId')) {
        if (!$util.isString(message.assocAssetId)) { return 'assocAssetId: string expected' }
      }
      if (message.IMSI != null && message.hasOwnProperty('IMSI')) {
        if (!$util.isString(message.IMSI)) { return 'IMSI: string expected' }
      }
      if (message.IMEI != null && message.hasOwnProperty('IMEI')) {
        if (!$util.isString(message.IMEI)) { return 'IMEI: string expected' }
      }
      return null
    }

    /**
         * Creates an AepReportArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbdeviceReport.AepReportArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbdeviceReport.AepReportArgs} AepReportArgs
         */
    AepReportArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbdeviceReport.AepReportArgs) { return object }
      var message = new $root.pbdeviceReport.AepReportArgs()
      if (object.upPacketSN != null) { message.upPacketSN = object.upPacketSN | 0 }
      if (object.upDataSN != null) { message.upDataSN = object.upDataSN | 0 }
      if (object.topic != null) { message.topic = String(object.topic) }
      if (object.timestamp != null) {
        if ($util.Long) { (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false } else if (typeof object.timestamp === 'string') { message.timestamp = parseInt(object.timestamp, 10) } else if (typeof object.timestamp === 'number') { message.timestamp = object.timestamp } else if (typeof object.timestamp === 'object') { message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber() }
      }
      if (object.tenantId != null) { message.tenantId = String(object.tenantId) }
      if (object.serviceId != null) { message.serviceId = String(object.serviceId) }
      if (object.protocol != null) { message.protocol = String(object.protocol) }
      if (object.productId != null) { message.productId = String(object.productId) }
      if (object.payload != null) {
        if (typeof object.payload !== 'object') { throw TypeError('.pbdeviceReport.AepReportArgs.payload: object expected') }
        message.payload = $root.pbdeviceReport.AepReportArgs.Payload.fromObject(object.payload)
      }
      if (object.messageType != null) { message.messageType = String(object.messageType) }
      if (object.deviceType != null) { message.deviceType = String(object.deviceType) }
      if (object.deviceId != null) { message.deviceId = String(object.deviceId) }
      if (object.assocAssetId != null) { message.assocAssetId = String(object.assocAssetId) }
      if (object.IMSI != null) { message.IMSI = String(object.IMSI) }
      if (object.IMEI != null) { message.IMEI = String(object.IMEI) }
      return message
    }

    /**
         * Creates a plain object from an AepReportArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbdeviceReport.AepReportArgs
         * @static
         * @param {pbdeviceReport.AepReportArgs} message AepReportArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    AepReportArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.upPacketSN = 0
        object.upDataSN = 0
        object.topic = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.timestamp = options.longs === String ? '0' : 0 }
        object.tenantId = ''
        object.serviceId = ''
        object.protocol = ''
        object.productId = ''
        object.payload = null
        object.messageType = ''
        object.deviceType = ''
        object.deviceId = ''
        object.assocAssetId = ''
        object.IMSI = ''
        object.IMEI = ''
      }
      if (message.upPacketSN != null && message.hasOwnProperty('upPacketSN')) { object.upPacketSN = message.upPacketSN }
      if (message.upDataSN != null && message.hasOwnProperty('upDataSN')) { object.upDataSN = message.upDataSN }
      if (message.topic != null && message.hasOwnProperty('topic')) { object.topic = message.topic }
      if (message.timestamp != null && message.hasOwnProperty('timestamp')) {
        if (typeof message.timestamp === 'number') { object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp } else { object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp }
      }
      if (message.tenantId != null && message.hasOwnProperty('tenantId')) { object.tenantId = message.tenantId }
      if (message.serviceId != null && message.hasOwnProperty('serviceId')) { object.serviceId = message.serviceId }
      if (message.protocol != null && message.hasOwnProperty('protocol')) { object.protocol = message.protocol }
      if (message.productId != null && message.hasOwnProperty('productId')) { object.productId = message.productId }
      if (message.payload != null && message.hasOwnProperty('payload')) { object.payload = $root.pbdeviceReport.AepReportArgs.Payload.toObject(message.payload, options) }
      if (message.messageType != null && message.hasOwnProperty('messageType')) { object.messageType = message.messageType }
      if (message.deviceType != null && message.hasOwnProperty('deviceType')) { object.deviceType = message.deviceType }
      if (message.deviceId != null && message.hasOwnProperty('deviceId')) { object.deviceId = message.deviceId }
      if (message.assocAssetId != null && message.hasOwnProperty('assocAssetId')) { object.assocAssetId = message.assocAssetId }
      if (message.IMSI != null && message.hasOwnProperty('IMSI')) { object.IMSI = message.IMSI }
      if (message.IMEI != null && message.hasOwnProperty('IMEI')) { object.IMEI = message.IMEI }
      return object
    }

    /**
         * Converts this AepReportArgs to JSON.
         * @function toJSON
         * @memberof pbdeviceReport.AepReportArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    AepReportArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for AepReportArgs
         * @function getTypeUrl
         * @memberof pbdeviceReport.AepReportArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    AepReportArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbdeviceReport.AepReportArgs'
    }

    AepReportArgs.Payload = (function() {
      /**
             * Properties of a Payload.
             * @memberof pbdeviceReport.AepReportArgs
             * @interface IPayload
             * @property {string|null} [APPdata] Payload APPdata
             */

      /**
             * Constructs a new Payload.
             * @memberof pbdeviceReport.AepReportArgs
             * @classdesc Represents a Payload.
             * @implements IPayload
             * @constructor
             * @param {pbdeviceReport.AepReportArgs.IPayload=} [properties] Properties to set
             */
      function Payload(properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
          }
        }
      }

      /**
             * Payload APPdata.
             * @member {string} APPdata
             * @memberof pbdeviceReport.AepReportArgs.Payload
             * @instance
             */
      Payload.prototype.APPdata = ''

      /**
             * Creates a new Payload instance using the specified properties.
             * @function create
             * @memberof pbdeviceReport.AepReportArgs.Payload
             * @static
             * @param {pbdeviceReport.AepReportArgs.IPayload=} [properties] Properties to set
             * @returns {pbdeviceReport.AepReportArgs.Payload} Payload instance
             */
      Payload.create = function create(properties) {
        return new Payload(properties)
      }

      /**
             * Encodes the specified Payload message. Does not implicitly {@link pbdeviceReport.AepReportArgs.Payload.verify|verify} messages.
             * @function encode
             * @memberof pbdeviceReport.AepReportArgs.Payload
             * @static
             * @param {pbdeviceReport.AepReportArgs.IPayload} message Payload message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
      Payload.encode = function encode(message, writer) {
        if (!writer) { writer = $Writer.create() }
        if (message.APPdata != null && Object.hasOwnProperty.call(message, 'APPdata')) { writer.uint32(/* id 1, wireType 2 =*/10).string(message.APPdata) }
        return writer
      }

      /**
             * Encodes the specified Payload message, length delimited. Does not implicitly {@link pbdeviceReport.AepReportArgs.Payload.verify|verify} messages.
             * @function encodeDelimited
             * @memberof pbdeviceReport.AepReportArgs.Payload
             * @static
             * @param {pbdeviceReport.AepReportArgs.IPayload} message Payload message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
      Payload.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
             * Decodes a Payload message from the specified reader or buffer.
             * @function decode
             * @memberof pbdeviceReport.AepReportArgs.Payload
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {pbdeviceReport.AepReportArgs.Payload} Payload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
      Payload.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
        var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbdeviceReport.AepReportArgs.Payload()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1: {
              message.APPdata = reader.string()
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
             * Decodes a Payload message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof pbdeviceReport.AepReportArgs.Payload
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {pbdeviceReport.AepReportArgs.Payload} Payload
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
      Payload.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
        return this.decode(reader, reader.uint32())
      }

      /**
             * Verifies a Payload message.
             * @function verify
             * @memberof pbdeviceReport.AepReportArgs.Payload
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
      Payload.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) { return 'object expected' }
        if (message.APPdata != null && message.hasOwnProperty('APPdata')) {
          if (!$util.isString(message.APPdata)) { return 'APPdata: string expected' }
        }
        return null
      }

      /**
             * Creates a Payload message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof pbdeviceReport.AepReportArgs.Payload
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {pbdeviceReport.AepReportArgs.Payload} Payload
             */
      Payload.fromObject = function fromObject(object) {
        if (object instanceof $root.pbdeviceReport.AepReportArgs.Payload) { return object }
        var message = new $root.pbdeviceReport.AepReportArgs.Payload()
        if (object.APPdata != null) { message.APPdata = String(object.APPdata) }
        return message
      }

      /**
             * Creates a plain object from a Payload message. Also converts values to other types if specified.
             * @function toObject
             * @memberof pbdeviceReport.AepReportArgs.Payload
             * @static
             * @param {pbdeviceReport.AepReportArgs.Payload} message Payload
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
      Payload.toObject = function toObject(message, options) {
        if (!options) { options = {} }
        var object = {}
        if (options.defaults) { object.APPdata = '' }
        if (message.APPdata != null && message.hasOwnProperty('APPdata')) { object.APPdata = message.APPdata }
        return object
      }

      /**
             * Converts this Payload to JSON.
             * @function toJSON
             * @memberof pbdeviceReport.AepReportArgs.Payload
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
      Payload.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
             * Gets the default type url for Payload
             * @function getTypeUrl
             * @memberof pbdeviceReport.AepReportArgs.Payload
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
      Payload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com'
        }
        return typeUrlPrefix + '/pbdeviceReport.AepReportArgs.Payload'
      }

      return Payload
    })()

    return AepReportArgs
  })()

  pbdeviceReport.DeviceReport = (function() {
    /**
         * Constructs a new DeviceReport service.
         * @memberof pbdeviceReport
         * @classdesc Represents a DeviceReport
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function DeviceReport(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (DeviceReport.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DeviceReport

    /**
         * Creates new DeviceReport service using the specified rpc implementation.
         * @function create
         * @memberof pbdeviceReport.DeviceReport
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {DeviceReport} RPC service. Useful where requests and/or responses are streamed.
         */
    DeviceReport.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link pbdeviceReport.DeviceReport#createDeviceReport}.
         * @memberof pbdeviceReport.DeviceReport
         * @typedef CreateDeviceReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls CreateDeviceReport.
         * @function createDeviceReport
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbdeviceReport.IDeviceReportModel} request DeviceReportModel message or plain object
         * @param {pbdeviceReport.DeviceReport.CreateDeviceReportCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(DeviceReport.prototype.createDeviceReport = function createDeviceReport(request, callback) {
      return this.rpcCall(createDeviceReport, $root.pbdeviceReport.DeviceReportModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreateDeviceReport' })

    /**
         * Calls CreateDeviceReport.
         * @function createDeviceReport
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbdeviceReport.IDeviceReportModel} request DeviceReportModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbdeviceReport.DeviceReport#updateDeviceReport}.
         * @memberof pbdeviceReport.DeviceReport
         * @typedef UpdateDeviceReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls UpdateDeviceReport.
         * @function updateDeviceReport
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbdeviceReport.IDeviceReportModel} request DeviceReportModel message or plain object
         * @param {pbdeviceReport.DeviceReport.UpdateDeviceReportCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(DeviceReport.prototype.updateDeviceReport = function updateDeviceReport(request, callback) {
      return this.rpcCall(updateDeviceReport, $root.pbdeviceReport.DeviceReportModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdateDeviceReport' })

    /**
         * Calls UpdateDeviceReport.
         * @function updateDeviceReport
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbdeviceReport.IDeviceReportModel} request DeviceReportModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbdeviceReport.DeviceReport#deleteDeviceReport}.
         * @memberof pbdeviceReport.DeviceReport
         * @typedef DeleteDeviceReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls DeleteDeviceReport.
         * @function deleteDeviceReport
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbdeviceReport.DeviceReport.DeleteDeviceReportCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(DeviceReport.prototype.deleteDeviceReport = function deleteDeviceReport(request, callback) {
      return this.rpcCall(deleteDeviceReport, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeleteDeviceReport' })

    /**
         * Calls DeleteDeviceReport.
         * @function deleteDeviceReport
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbdeviceReport.DeviceReport#findDeviceReportById}.
         * @memberof pbdeviceReport.DeviceReport
         * @typedef FindDeviceReportByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbdeviceReport.FindDeviceReportReplay} [response] FindDeviceReportReplay
         */

    /**
         * Calls FindDeviceReportById.
         * @function findDeviceReportById
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbdeviceReport.DeviceReport.FindDeviceReportByIdCallback} callback Node-style callback called with the error, if any, and FindDeviceReportReplay
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(DeviceReport.prototype.findDeviceReportById = function findDeviceReportById(request, callback) {
      return this.rpcCall(findDeviceReportById, $root.pbcommon.IdArgs, $root.pbdeviceReport.FindDeviceReportReplay, request, callback)
    }, 'name', { value: 'FindDeviceReportById' })

    /**
         * Calls FindDeviceReportById.
         * @function findDeviceReportById
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbdeviceReport.FindDeviceReportReplay>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbdeviceReport.DeviceReport#findDeviceReportList}.
         * @memberof pbdeviceReport.DeviceReport
         * @typedef FindDeviceReportListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbdeviceReport.FindDeviceReportReplay} [response] FindDeviceReportReplay
         */

    /**
         * Calls FindDeviceReportList.
         * @function findDeviceReportList
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbdeviceReport.IFindDeviceReportArgs} request FindDeviceReportArgs message or plain object
         * @param {pbdeviceReport.DeviceReport.FindDeviceReportListCallback} callback Node-style callback called with the error, if any, and FindDeviceReportReplay
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(DeviceReport.prototype.findDeviceReportList = function findDeviceReportList(request, callback) {
      return this.rpcCall(findDeviceReportList, $root.pbdeviceReport.FindDeviceReportArgs, $root.pbdeviceReport.FindDeviceReportReplay, request, callback)
    }, 'name', { value: 'FindDeviceReportList' })

    /**
         * Calls FindDeviceReportList.
         * @function findDeviceReportList
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbdeviceReport.IFindDeviceReportArgs} request FindDeviceReportArgs message or plain object
         * @returns {Promise<pbdeviceReport.FindDeviceReportReplay>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbdeviceReport.DeviceReport#aepReport}.
         * @memberof pbdeviceReport.DeviceReport
         * @typedef AepReportCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls AepReport.
         * @function aepReport
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbdeviceReport.IAepReportArgs} request AepReportArgs message or plain object
         * @param {pbdeviceReport.DeviceReport.AepReportCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(DeviceReport.prototype.aepReport = function aepReport(request, callback) {
      return this.rpcCall(aepReport, $root.pbdeviceReport.AepReportArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'AepReport' })

    /**
         * Calls AepReport.
         * @function aepReport
         * @memberof pbdeviceReport.DeviceReport
         * @instance
         * @param {pbdeviceReport.IAepReportArgs} request AepReportArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    return DeviceReport
  })()

  return pbdeviceReport
})()

module.exports = $root
