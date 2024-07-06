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
         * @property {string|null} [username] UserModel username
         * @property {string|null} [password] UserModel password
         * @property {string|null} [email] UserModel email
         * @property {number|Long|null} [phone] UserModel phone
         * @property {string|null} [nickName] UserModel nickName
         * @property {number|Long|null} [userOauthId] UserModel userOauthId
         * @property {number|Long|null} [appId] UserModel appId
         * @property {string|null} [avatar] UserModel avatar
         * @property {number|null} [gender] UserModel gender
         * @property {string|null} [birthday] UserModel birthday
         * @property {string|null} [signature] UserModel signature
         * @property {string|null} [description] UserModel description
         * @property {string|null} [location] UserModel location
         * @property {string|null} [regip] UserModel regip
         * @property {string|null} [regtm] UserModel regtm
         * @property {pbuser.UserStatus|null} [status] UserModel status
         * @property {number|null} [accountType] UserModel accountType
         * @property {number|Long|null} [role] UserModel role
         * @property {number|Long|null} [pretty] UserModel pretty
         * @property {number|null} [age] UserModel age
         * @property {number|null} [country] UserModel country
         * @property {string|null} [countryName] UserModel countryName
         * @property {string|null} [city] UserModel city
         * @property {number|null} [Zone] UserModel Zone
         * @property {string|null} [devDesc] UserModel devDesc
         * @property {string|null} [platform] UserModel platform
         * @property {string|null} [devUuid] UserModel devUuid
         * @property {string|null} [ver] UserModel ver
         * @property {number|null} [isRobt] UserModel isRobt
         * @property {string|null} [regDate] UserModel regDate
         * @property {string|null} [certName] UserModel certName
         * @property {string|null} [certNo] UserModel certNo
         * @property {boolean|null} [first] UserModel first
         * @property {boolean|null} [isYoungMod] UserModel isYoungMod
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
         * UserModel username.
         * @member {string} username
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.username = ''

    /**
         * UserModel password.
         * @member {string} password
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.password = ''

    /**
         * UserModel email.
         * @member {string} email
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.email = ''

    /**
         * UserModel phone.
         * @member {number|Long} phone
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.phone = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * UserModel nickName.
         * @member {string} nickName
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.nickName = ''

    /**
         * UserModel userOauthId.
         * @member {number|Long} userOauthId
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.userOauthId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * UserModel appId.
         * @member {number|Long} appId
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.appId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * UserModel avatar.
         * @member {string} avatar
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.avatar = ''

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
         * UserModel signature.
         * @member {string} signature
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.signature = ''

    /**
         * UserModel description.
         * @member {string} description
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.description = ''

    /**
         * UserModel location.
         * @member {string} location
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.location = ''

    /**
         * UserModel regip.
         * @member {string} regip
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.regip = ''

    /**
         * UserModel regtm.
         * @member {string} regtm
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.regtm = ''

    /**
         * UserModel status.
         * @member {pbuser.UserStatus} status
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.status = 0

    /**
         * UserModel accountType.
         * @member {number} accountType
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.accountType = 0

    /**
         * UserModel role.
         * @member {number|Long} role
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.role = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * UserModel pretty.
         * @member {number|Long} pretty
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.pretty = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * UserModel age.
         * @member {number} age
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.age = 0

    /**
         * UserModel country.
         * @member {number} country
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.country = 0

    /**
         * UserModel countryName.
         * @member {string} countryName
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.countryName = ''

    /**
         * UserModel city.
         * @member {string} city
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.city = ''

    /**
         * UserModel Zone.
         * @member {number} Zone
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.Zone = 0

    /**
         * UserModel devDesc.
         * @member {string} devDesc
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.devDesc = ''

    /**
         * UserModel platform.
         * @member {string} platform
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.platform = ''

    /**
         * UserModel devUuid.
         * @member {string} devUuid
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.devUuid = ''

    /**
         * UserModel ver.
         * @member {string} ver
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.ver = ''

    /**
         * UserModel isRobt.
         * @member {number} isRobt
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.isRobt = 0

    /**
         * UserModel regDate.
         * @member {string} regDate
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.regDate = ''

    /**
         * UserModel certName.
         * @member {string} certName
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.certName = ''

    /**
         * UserModel certNo.
         * @member {string} certNo
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.certNo = ''

    /**
         * UserModel first.
         * @member {boolean} first
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.first = false

    /**
         * UserModel isYoungMod.
         * @member {boolean} isYoungMod
         * @memberof pbuser.UserModel
         * @instance
         */
    UserModel.prototype.isYoungMod = false

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
      if (message.username != null && Object.hasOwnProperty.call(message, 'username')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.username) }
      if (message.password != null && Object.hasOwnProperty.call(message, 'password')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.password) }
      if (message.email != null && Object.hasOwnProperty.call(message, 'email')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.email) }
      if (message.phone != null && Object.hasOwnProperty.call(message, 'phone')) { writer.uint32(/* id 7, wireType 0 =*/56).int64(message.phone) }
      if (message.nickName != null && Object.hasOwnProperty.call(message, 'nickName')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.nickName) }
      if (message.userOauthId != null && Object.hasOwnProperty.call(message, 'userOauthId')) { writer.uint32(/* id 9, wireType 0 =*/72).int64(message.userOauthId) }
      if (message.appId != null && Object.hasOwnProperty.call(message, 'appId')) { writer.uint32(/* id 10, wireType 0 =*/80).int64(message.appId) }
      if (message.avatar != null && Object.hasOwnProperty.call(message, 'avatar')) { writer.uint32(/* id 11, wireType 2 =*/90).string(message.avatar) }
      if (message.gender != null && Object.hasOwnProperty.call(message, 'gender')) { writer.uint32(/* id 12, wireType 0 =*/96).int32(message.gender) }
      if (message.birthday != null && Object.hasOwnProperty.call(message, 'birthday')) { writer.uint32(/* id 13, wireType 2 =*/106).string(message.birthday) }
      if (message.signature != null && Object.hasOwnProperty.call(message, 'signature')) { writer.uint32(/* id 14, wireType 2 =*/114).string(message.signature) }
      if (message.description != null && Object.hasOwnProperty.call(message, 'description')) { writer.uint32(/* id 15, wireType 2 =*/122).string(message.description) }
      if (message.location != null && Object.hasOwnProperty.call(message, 'location')) { writer.uint32(/* id 16, wireType 2 =*/130).string(message.location) }
      if (message.regip != null && Object.hasOwnProperty.call(message, 'regip')) { writer.uint32(/* id 17, wireType 2 =*/138).string(message.regip) }
      if (message.regtm != null && Object.hasOwnProperty.call(message, 'regtm')) { writer.uint32(/* id 18, wireType 2 =*/146).string(message.regtm) }
      if (message.status != null && Object.hasOwnProperty.call(message, 'status')) { writer.uint32(/* id 19, wireType 0 =*/152).int32(message.status) }
      if (message.accountType != null && Object.hasOwnProperty.call(message, 'accountType')) { writer.uint32(/* id 20, wireType 0 =*/160).int32(message.accountType) }
      if (message.role != null && Object.hasOwnProperty.call(message, 'role')) { writer.uint32(/* id 21, wireType 0 =*/168).int64(message.role) }
      if (message.pretty != null && Object.hasOwnProperty.call(message, 'pretty')) { writer.uint32(/* id 22, wireType 0 =*/176).int64(message.pretty) }
      if (message.age != null && Object.hasOwnProperty.call(message, 'age')) { writer.uint32(/* id 23, wireType 0 =*/184).int32(message.age) }
      if (message.country != null && Object.hasOwnProperty.call(message, 'country')) { writer.uint32(/* id 24, wireType 0 =*/192).int32(message.country) }
      if (message.countryName != null && Object.hasOwnProperty.call(message, 'countryName')) { writer.uint32(/* id 25, wireType 2 =*/202).string(message.countryName) }
      if (message.city != null && Object.hasOwnProperty.call(message, 'city')) { writer.uint32(/* id 26, wireType 2 =*/210).string(message.city) }
      if (message.Zone != null && Object.hasOwnProperty.call(message, 'Zone')) { writer.uint32(/* id 27, wireType 0 =*/216).int32(message.Zone) }
      if (message.devDesc != null && Object.hasOwnProperty.call(message, 'devDesc')) { writer.uint32(/* id 28, wireType 2 =*/226).string(message.devDesc) }
      if (message.platform != null && Object.hasOwnProperty.call(message, 'platform')) { writer.uint32(/* id 29, wireType 2 =*/234).string(message.platform) }
      if (message.devUuid != null && Object.hasOwnProperty.call(message, 'devUuid')) { writer.uint32(/* id 30, wireType 2 =*/242).string(message.devUuid) }
      if (message.ver != null && Object.hasOwnProperty.call(message, 'ver')) { writer.uint32(/* id 31, wireType 2 =*/250).string(message.ver) }
      if (message.isRobt != null && Object.hasOwnProperty.call(message, 'isRobt')) { writer.uint32(/* id 32, wireType 0 =*/256).int32(message.isRobt) }
      if (message.regDate != null && Object.hasOwnProperty.call(message, 'regDate')) { writer.uint32(/* id 33, wireType 2 =*/266).string(message.regDate) }
      if (message.certName != null && Object.hasOwnProperty.call(message, 'certName')) { writer.uint32(/* id 34, wireType 2 =*/274).string(message.certName) }
      if (message.certNo != null && Object.hasOwnProperty.call(message, 'certNo')) { writer.uint32(/* id 35, wireType 2 =*/282).string(message.certNo) }
      if (message.first != null && Object.hasOwnProperty.call(message, 'first')) { writer.uint32(/* id 36, wireType 0 =*/288).bool(message.first) }
      if (message.isYoungMod != null && Object.hasOwnProperty.call(message, 'isYoungMod')) { writer.uint32(/* id 37, wireType 0 =*/296).bool(message.isYoungMod) }
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
            message.username = reader.string()
            break
          }
          case 5: {
            message.password = reader.string()
            break
          }
          case 6: {
            message.email = reader.string()
            break
          }
          case 7: {
            message.phone = reader.int64()
            break
          }
          case 8: {
            message.nickName = reader.string()
            break
          }
          case 9: {
            message.userOauthId = reader.int64()
            break
          }
          case 10: {
            message.appId = reader.int64()
            break
          }
          case 11: {
            message.avatar = reader.string()
            break
          }
          case 12: {
            message.gender = reader.int32()
            break
          }
          case 13: {
            message.birthday = reader.string()
            break
          }
          case 14: {
            message.signature = reader.string()
            break
          }
          case 15: {
            message.description = reader.string()
            break
          }
          case 16: {
            message.location = reader.string()
            break
          }
          case 17: {
            message.regip = reader.string()
            break
          }
          case 18: {
            message.regtm = reader.string()
            break
          }
          case 19: {
            message.status = reader.int32()
            break
          }
          case 20: {
            message.accountType = reader.int32()
            break
          }
          case 21: {
            message.role = reader.int64()
            break
          }
          case 22: {
            message.pretty = reader.int64()
            break
          }
          case 23: {
            message.age = reader.int32()
            break
          }
          case 24: {
            message.country = reader.int32()
            break
          }
          case 25: {
            message.countryName = reader.string()
            break
          }
          case 26: {
            message.city = reader.string()
            break
          }
          case 27: {
            message.Zone = reader.int32()
            break
          }
          case 28: {
            message.devDesc = reader.string()
            break
          }
          case 29: {
            message.platform = reader.string()
            break
          }
          case 30: {
            message.devUuid = reader.string()
            break
          }
          case 31: {
            message.ver = reader.string()
            break
          }
          case 32: {
            message.isRobt = reader.int32()
            break
          }
          case 33: {
            message.regDate = reader.string()
            break
          }
          case 34: {
            message.certName = reader.string()
            break
          }
          case 35: {
            message.certNo = reader.string()
            break
          }
          case 36: {
            message.first = reader.bool()
            break
          }
          case 37: {
            message.isYoungMod = reader.bool()
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
      if (message.username != null && message.hasOwnProperty('username')) {
        if (!$util.isString(message.username)) { return 'username: string expected' }
      }
      if (message.password != null && message.hasOwnProperty('password')) {
        if (!$util.isString(message.password)) { return 'password: string expected' }
      }
      if (message.email != null && message.hasOwnProperty('email')) {
        if (!$util.isString(message.email)) { return 'email: string expected' }
      }
      if (message.phone != null && message.hasOwnProperty('phone')) {
        if (!$util.isInteger(message.phone) && !(message.phone && $util.isInteger(message.phone.low) && $util.isInteger(message.phone.high))) { return 'phone: integer|Long expected' }
      }
      if (message.nickName != null && message.hasOwnProperty('nickName')) {
        if (!$util.isString(message.nickName)) { return 'nickName: string expected' }
      }
      if (message.userOauthId != null && message.hasOwnProperty('userOauthId')) {
        if (!$util.isInteger(message.userOauthId) && !(message.userOauthId && $util.isInteger(message.userOauthId.low) && $util.isInteger(message.userOauthId.high))) { return 'userOauthId: integer|Long expected' }
      }
      if (message.appId != null && message.hasOwnProperty('appId')) {
        if (!$util.isInteger(message.appId) && !(message.appId && $util.isInteger(message.appId.low) && $util.isInteger(message.appId.high))) { return 'appId: integer|Long expected' }
      }
      if (message.avatar != null && message.hasOwnProperty('avatar')) {
        if (!$util.isString(message.avatar)) { return 'avatar: string expected' }
      }
      if (message.gender != null && message.hasOwnProperty('gender')) {
        if (!$util.isInteger(message.gender)) { return 'gender: integer expected' }
      }
      if (message.birthday != null && message.hasOwnProperty('birthday')) {
        if (!$util.isString(message.birthday)) { return 'birthday: string expected' }
      }
      if (message.signature != null && message.hasOwnProperty('signature')) {
        if (!$util.isString(message.signature)) { return 'signature: string expected' }
      }
      if (message.description != null && message.hasOwnProperty('description')) {
        if (!$util.isString(message.description)) { return 'description: string expected' }
      }
      if (message.location != null && message.hasOwnProperty('location')) {
        if (!$util.isString(message.location)) { return 'location: string expected' }
      }
      if (message.regip != null && message.hasOwnProperty('regip')) {
        if (!$util.isString(message.regip)) { return 'regip: string expected' }
      }
      if (message.regtm != null && message.hasOwnProperty('regtm')) {
        if (!$util.isString(message.regtm)) { return 'regtm: string expected' }
      }
      if (message.status != null && message.hasOwnProperty('status')) {
        switch (message.status) {
          default:
            return 'status: enum value expected'
          case 0:
          case 1:
          case 2:
            break
        }
      }
      if (message.accountType != null && message.hasOwnProperty('accountType')) {
        if (!$util.isInteger(message.accountType)) { return 'accountType: integer expected' }
      }
      if (message.role != null && message.hasOwnProperty('role')) {
        if (!$util.isInteger(message.role) && !(message.role && $util.isInteger(message.role.low) && $util.isInteger(message.role.high))) { return 'role: integer|Long expected' }
      }
      if (message.pretty != null && message.hasOwnProperty('pretty')) {
        if (!$util.isInteger(message.pretty) && !(message.pretty && $util.isInteger(message.pretty.low) && $util.isInteger(message.pretty.high))) { return 'pretty: integer|Long expected' }
      }
      if (message.age != null && message.hasOwnProperty('age')) {
        if (!$util.isInteger(message.age)) { return 'age: integer expected' }
      }
      if (message.country != null && message.hasOwnProperty('country')) {
        if (!$util.isInteger(message.country)) { return 'country: integer expected' }
      }
      if (message.countryName != null && message.hasOwnProperty('countryName')) {
        if (!$util.isString(message.countryName)) { return 'countryName: string expected' }
      }
      if (message.city != null && message.hasOwnProperty('city')) {
        if (!$util.isString(message.city)) { return 'city: string expected' }
      }
      if (message.Zone != null && message.hasOwnProperty('Zone')) {
        if (!$util.isInteger(message.Zone)) { return 'Zone: integer expected' }
      }
      if (message.devDesc != null && message.hasOwnProperty('devDesc')) {
        if (!$util.isString(message.devDesc)) { return 'devDesc: string expected' }
      }
      if (message.platform != null && message.hasOwnProperty('platform')) {
        if (!$util.isString(message.platform)) { return 'platform: string expected' }
      }
      if (message.devUuid != null && message.hasOwnProperty('devUuid')) {
        if (!$util.isString(message.devUuid)) { return 'devUuid: string expected' }
      }
      if (message.ver != null && message.hasOwnProperty('ver')) {
        if (!$util.isString(message.ver)) { return 'ver: string expected' }
      }
      if (message.isRobt != null && message.hasOwnProperty('isRobt')) {
        if (!$util.isInteger(message.isRobt)) { return 'isRobt: integer expected' }
      }
      if (message.regDate != null && message.hasOwnProperty('regDate')) {
        if (!$util.isString(message.regDate)) { return 'regDate: string expected' }
      }
      if (message.certName != null && message.hasOwnProperty('certName')) {
        if (!$util.isString(message.certName)) { return 'certName: string expected' }
      }
      if (message.certNo != null && message.hasOwnProperty('certNo')) {
        if (!$util.isString(message.certNo)) { return 'certNo: string expected' }
      }
      if (message.first != null && message.hasOwnProperty('first')) {
        if (typeof message.first !== 'boolean') { return 'first: boolean expected' }
      }
      if (message.isYoungMod != null && message.hasOwnProperty('isYoungMod')) {
        if (typeof message.isYoungMod !== 'boolean') { return 'isYoungMod: boolean expected' }
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
      if (object.username != null) { message.username = String(object.username) }
      if (object.password != null) { message.password = String(object.password) }
      if (object.email != null) { message.email = String(object.email) }
      if (object.phone != null) {
        if ($util.Long) { (message.phone = $util.Long.fromValue(object.phone)).unsigned = false } else if (typeof object.phone === 'string') { message.phone = parseInt(object.phone, 10) } else if (typeof object.phone === 'number') { message.phone = object.phone } else if (typeof object.phone === 'object') { message.phone = new $util.LongBits(object.phone.low >>> 0, object.phone.high >>> 0).toNumber() }
      }
      if (object.nickName != null) { message.nickName = String(object.nickName) }
      if (object.userOauthId != null) {
        if ($util.Long) { (message.userOauthId = $util.Long.fromValue(object.userOauthId)).unsigned = false } else if (typeof object.userOauthId === 'string') { message.userOauthId = parseInt(object.userOauthId, 10) } else if (typeof object.userOauthId === 'number') { message.userOauthId = object.userOauthId } else if (typeof object.userOauthId === 'object') { message.userOauthId = new $util.LongBits(object.userOauthId.low >>> 0, object.userOauthId.high >>> 0).toNumber() }
      }
      if (object.appId != null) {
        if ($util.Long) { (message.appId = $util.Long.fromValue(object.appId)).unsigned = false } else if (typeof object.appId === 'string') { message.appId = parseInt(object.appId, 10) } else if (typeof object.appId === 'number') { message.appId = object.appId } else if (typeof object.appId === 'object') { message.appId = new $util.LongBits(object.appId.low >>> 0, object.appId.high >>> 0).toNumber() }
      }
      if (object.avatar != null) { message.avatar = String(object.avatar) }
      if (object.gender != null) { message.gender = object.gender | 0 }
      if (object.birthday != null) { message.birthday = String(object.birthday) }
      if (object.signature != null) { message.signature = String(object.signature) }
      if (object.description != null) { message.description = String(object.description) }
      if (object.location != null) { message.location = String(object.location) }
      if (object.regip != null) { message.regip = String(object.regip) }
      if (object.regtm != null) { message.regtm = String(object.regtm) }
      switch (object.status) {
        default:
          if (typeof object.status === 'number') {
            message.status = object.status
            break
          }
          break
        case 'UserStatusNone':
        case 0:
          message.status = 0
          break
        case 'Normal':
        case 1:
          message.status = 1
          break
        case 'Banned':
        case 2:
          message.status = 2
          break
      }
      if (object.accountType != null) { message.accountType = object.accountType | 0 }
      if (object.role != null) {
        if ($util.Long) { (message.role = $util.Long.fromValue(object.role)).unsigned = false } else if (typeof object.role === 'string') { message.role = parseInt(object.role, 10) } else if (typeof object.role === 'number') { message.role = object.role } else if (typeof object.role === 'object') { message.role = new $util.LongBits(object.role.low >>> 0, object.role.high >>> 0).toNumber() }
      }
      if (object.pretty != null) {
        if ($util.Long) { (message.pretty = $util.Long.fromValue(object.pretty)).unsigned = false } else if (typeof object.pretty === 'string') { message.pretty = parseInt(object.pretty, 10) } else if (typeof object.pretty === 'number') { message.pretty = object.pretty } else if (typeof object.pretty === 'object') { message.pretty = new $util.LongBits(object.pretty.low >>> 0, object.pretty.high >>> 0).toNumber() }
      }
      if (object.age != null) { message.age = object.age | 0 }
      if (object.country != null) { message.country = object.country | 0 }
      if (object.countryName != null) { message.countryName = String(object.countryName) }
      if (object.city != null) { message.city = String(object.city) }
      if (object.Zone != null) { message.Zone = object.Zone | 0 }
      if (object.devDesc != null) { message.devDesc = String(object.devDesc) }
      if (object.platform != null) { message.platform = String(object.platform) }
      if (object.devUuid != null) { message.devUuid = String(object.devUuid) }
      if (object.ver != null) { message.ver = String(object.ver) }
      if (object.isRobt != null) { message.isRobt = object.isRobt | 0 }
      if (object.regDate != null) { message.regDate = String(object.regDate) }
      if (object.certName != null) { message.certName = String(object.certName) }
      if (object.certNo != null) { message.certNo = String(object.certNo) }
      if (object.first != null) { message.first = Boolean(object.first) }
      if (object.isYoungMod != null) { message.isYoungMod = Boolean(object.isYoungMod) }
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
        object.username = ''
        object.password = ''
        object.email = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.phone = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.phone = options.longs === String ? '0' : 0 }
        object.nickName = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.userOauthId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.userOauthId = options.longs === String ? '0' : 0 }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.appId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.appId = options.longs === String ? '0' : 0 }
        object.avatar = ''
        object.gender = 0
        object.birthday = ''
        object.signature = ''
        object.description = ''
        object.location = ''
        object.regip = ''
        object.regtm = ''
        object.status = options.enums === String ? 'UserStatusNone' : 0
        object.accountType = 0
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.role = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.role = options.longs === String ? '0' : 0 }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.pretty = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.pretty = options.longs === String ? '0' : 0 }
        object.age = 0
        object.country = 0
        object.countryName = ''
        object.city = ''
        object.Zone = 0
        object.devDesc = ''
        object.platform = ''
        object.devUuid = ''
        object.ver = ''
        object.isRobt = 0
        object.regDate = ''
        object.certName = ''
        object.certNo = ''
        object.first = false
        object.isYoungMod = false
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.username != null && message.hasOwnProperty('username')) { object.username = message.username }
      if (message.password != null && message.hasOwnProperty('password')) { object.password = message.password }
      if (message.email != null && message.hasOwnProperty('email')) { object.email = message.email }
      if (message.phone != null && message.hasOwnProperty('phone')) {
        if (typeof message.phone === 'number') { object.phone = options.longs === String ? String(message.phone) : message.phone } else { object.phone = options.longs === String ? $util.Long.prototype.toString.call(message.phone) : options.longs === Number ? new $util.LongBits(message.phone.low >>> 0, message.phone.high >>> 0).toNumber() : message.phone }
      }
      if (message.nickName != null && message.hasOwnProperty('nickName')) { object.nickName = message.nickName }
      if (message.userOauthId != null && message.hasOwnProperty('userOauthId')) {
        if (typeof message.userOauthId === 'number') { object.userOauthId = options.longs === String ? String(message.userOauthId) : message.userOauthId } else { object.userOauthId = options.longs === String ? $util.Long.prototype.toString.call(message.userOauthId) : options.longs === Number ? new $util.LongBits(message.userOauthId.low >>> 0, message.userOauthId.high >>> 0).toNumber() : message.userOauthId }
      }
      if (message.appId != null && message.hasOwnProperty('appId')) {
        if (typeof message.appId === 'number') { object.appId = options.longs === String ? String(message.appId) : message.appId } else { object.appId = options.longs === String ? $util.Long.prototype.toString.call(message.appId) : options.longs === Number ? new $util.LongBits(message.appId.low >>> 0, message.appId.high >>> 0).toNumber() : message.appId }
      }
      if (message.avatar != null && message.hasOwnProperty('avatar')) { object.avatar = message.avatar }
      if (message.gender != null && message.hasOwnProperty('gender')) { object.gender = message.gender }
      if (message.birthday != null && message.hasOwnProperty('birthday')) { object.birthday = message.birthday }
      if (message.signature != null && message.hasOwnProperty('signature')) { object.signature = message.signature }
      if (message.description != null && message.hasOwnProperty('description')) { object.description = message.description }
      if (message.location != null && message.hasOwnProperty('location')) { object.location = message.location }
      if (message.regip != null && message.hasOwnProperty('regip')) { object.regip = message.regip }
      if (message.regtm != null && message.hasOwnProperty('regtm')) { object.regtm = message.regtm }
      if (message.status != null && message.hasOwnProperty('status')) { object.status = options.enums === String ? $root.pbuser.UserStatus[message.status] === undefined ? message.status : $root.pbuser.UserStatus[message.status] : message.status }
      if (message.accountType != null && message.hasOwnProperty('accountType')) { object.accountType = message.accountType }
      if (message.role != null && message.hasOwnProperty('role')) {
        if (typeof message.role === 'number') { object.role = options.longs === String ? String(message.role) : message.role } else { object.role = options.longs === String ? $util.Long.prototype.toString.call(message.role) : options.longs === Number ? new $util.LongBits(message.role.low >>> 0, message.role.high >>> 0).toNumber() : message.role }
      }
      if (message.pretty != null && message.hasOwnProperty('pretty')) {
        if (typeof message.pretty === 'number') { object.pretty = options.longs === String ? String(message.pretty) : message.pretty } else { object.pretty = options.longs === String ? $util.Long.prototype.toString.call(message.pretty) : options.longs === Number ? new $util.LongBits(message.pretty.low >>> 0, message.pretty.high >>> 0).toNumber() : message.pretty }
      }
      if (message.age != null && message.hasOwnProperty('age')) { object.age = message.age }
      if (message.country != null && message.hasOwnProperty('country')) { object.country = message.country }
      if (message.countryName != null && message.hasOwnProperty('countryName')) { object.countryName = message.countryName }
      if (message.city != null && message.hasOwnProperty('city')) { object.city = message.city }
      if (message.Zone != null && message.hasOwnProperty('Zone')) { object.Zone = message.Zone }
      if (message.devDesc != null && message.hasOwnProperty('devDesc')) { object.devDesc = message.devDesc }
      if (message.platform != null && message.hasOwnProperty('platform')) { object.platform = message.platform }
      if (message.devUuid != null && message.hasOwnProperty('devUuid')) { object.devUuid = message.devUuid }
      if (message.ver != null && message.hasOwnProperty('ver')) { object.ver = message.ver }
      if (message.isRobt != null && message.hasOwnProperty('isRobt')) { object.isRobt = message.isRobt }
      if (message.regDate != null && message.hasOwnProperty('regDate')) { object.regDate = message.regDate }
      if (message.certName != null && message.hasOwnProperty('certName')) { object.certName = message.certName }
      if (message.certNo != null && message.hasOwnProperty('certNo')) { object.certNo = message.certNo }
      if (message.first != null && message.hasOwnProperty('first')) { object.first = message.first }
      if (message.isYoungMod != null && message.hasOwnProperty('isYoungMod')) { object.isYoungMod = message.isYoungMod }
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

  /**
     * UserStatus enum.
     * @name pbuser.UserStatus
     * @enum {number}
     * @property {number} UserStatusNone=0 UserStatusNone value
     * @property {number} Normal=1 Normal value
     * @property {number} Banned=2 Banned value
     */
  pbuser.UserStatus = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'UserStatusNone'] = 0
    values[valuesById[1] = 'Normal'] = 1
    values[valuesById[2] = 'Banned'] = 2
    return values
  })()

  /**
     * AccountType enum.
     * @name pbuser.AccountType
     * @enum {number}
     * @property {number} AccountTypeNone=0 AccountTypeNone value
     * @property {number} Wechat=1 Wechat value
     * @property {number} Phone=2 Phone value
     * @property {number} Email=3 Email value
     * @property {number} Admin=4 Admin value
     */
  pbuser.AccountType = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'AccountTypeNone'] = 0
    values[valuesById[1] = 'Wechat'] = 1
    values[valuesById[2] = 'Phone'] = 2
    values[valuesById[3] = 'Email'] = 3
    values[valuesById[4] = 'Admin'] = 4
    return values
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

$root.pbuserOauth = (function() {
  /**
     * Namespace pbuserOauth.
     * @exports pbuserOauth
     * @namespace
     */
  var pbuserOauth = {}

  pbuserOauth.UserOauthModel = (function() {
    /**
         * Properties of a UserOauthModel.
         * @memberof pbuserOauth
         * @interface IUserOauthModel
         * @property {number|Long|null} [id] UserOauthModel id
         * @property {string|null} [createdAt] UserOauthModel createdAt
         * @property {string|null} [updatedAt] UserOauthModel updatedAt
         * @property {pbuserOauth.OauthType|null} [oauthType] UserOauthModel oauthType
         * @property {string|null} [openId] UserOauthModel openId
         * @property {string|null} [unionId] UserOauthModel unionId
         * @property {number|Long|null} [appId] UserOauthModel appId
         */

    /**
         * Constructs a new UserOauthModel.
         * @memberof pbuserOauth
         * @classdesc Represents a UserOauthModel.
         * @implements IUserOauthModel
         * @constructor
         * @param {pbuserOauth.IUserOauthModel=} [properties] Properties to set
         */
    function UserOauthModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * UserOauthModel id.
         * @member {number|Long} id
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
    UserOauthModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * UserOauthModel createdAt.
         * @member {string} createdAt
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
    UserOauthModel.prototype.createdAt = ''

    /**
         * UserOauthModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
    UserOauthModel.prototype.updatedAt = ''

    /**
         * UserOauthModel oauthType.
         * @member {pbuserOauth.OauthType} oauthType
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
    UserOauthModel.prototype.oauthType = 0

    /**
         * UserOauthModel openId.
         * @member {string} openId
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
    UserOauthModel.prototype.openId = ''

    /**
         * UserOauthModel unionId.
         * @member {string} unionId
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
    UserOauthModel.prototype.unionId = ''

    /**
         * UserOauthModel appId.
         * @member {number|Long} appId
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
    UserOauthModel.prototype.appId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * Creates a new UserOauthModel instance using the specified properties.
         * @function create
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {pbuserOauth.IUserOauthModel=} [properties] Properties to set
         * @returns {pbuserOauth.UserOauthModel} UserOauthModel instance
         */
    UserOauthModel.create = function create(properties) {
      return new UserOauthModel(properties)
    }

    /**
         * Encodes the specified UserOauthModel message. Does not implicitly {@link pbuserOauth.UserOauthModel.verify|verify} messages.
         * @function encode
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {pbuserOauth.IUserOauthModel} message UserOauthModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    UserOauthModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.oauthType != null && Object.hasOwnProperty.call(message, 'oauthType')) { writer.uint32(/* id 4, wireType 0 =*/32).int32(message.oauthType) }
      if (message.openId != null && Object.hasOwnProperty.call(message, 'openId')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.openId) }
      if (message.unionId != null && Object.hasOwnProperty.call(message, 'unionId')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.unionId) }
      if (message.appId != null && Object.hasOwnProperty.call(message, 'appId')) { writer.uint32(/* id 7, wireType 0 =*/56).int64(message.appId) }
      return writer
    }

    /**
         * Encodes the specified UserOauthModel message, length delimited. Does not implicitly {@link pbuserOauth.UserOauthModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {pbuserOauth.IUserOauthModel} message UserOauthModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    UserOauthModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a UserOauthModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbuserOauth.UserOauthModel} UserOauthModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    UserOauthModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbuserOauth.UserOauthModel()
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
            message.oauthType = reader.int32()
            break
          }
          case 5: {
            message.openId = reader.string()
            break
          }
          case 6: {
            message.unionId = reader.string()
            break
          }
          case 7: {
            message.appId = reader.int64()
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
         * Decodes a UserOauthModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbuserOauth.UserOauthModel} UserOauthModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    UserOauthModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a UserOauthModel message.
         * @function verify
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    UserOauthModel.verify = function verify(message) {
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
      if (message.oauthType != null && message.hasOwnProperty('oauthType')) {
        switch (message.oauthType) {
          default:
            return 'oauthType: enum value expected'
          case 0:
          case 1:
          case 2:
            break
        }
      }
      if (message.openId != null && message.hasOwnProperty('openId')) {
        if (!$util.isString(message.openId)) { return 'openId: string expected' }
      }
      if (message.unionId != null && message.hasOwnProperty('unionId')) {
        if (!$util.isString(message.unionId)) { return 'unionId: string expected' }
      }
      if (message.appId != null && message.hasOwnProperty('appId')) {
        if (!$util.isInteger(message.appId) && !(message.appId && $util.isInteger(message.appId.low) && $util.isInteger(message.appId.high))) { return 'appId: integer|Long expected' }
      }
      return null
    }

    /**
         * Creates a UserOauthModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuserOauth.UserOauthModel} UserOauthModel
         */
    UserOauthModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbuserOauth.UserOauthModel) { return object }
      var message = new $root.pbuserOauth.UserOauthModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      switch (object.oauthType) {
        default:
          if (typeof object.oauthType === 'number') {
            message.oauthType = object.oauthType
            break
          }
          break
        case 'OAUTH_TYPE_NONE':
        case 0:
          message.oauthType = 0
          break
        case 'OAUTH_TYPE_WECHAT':
        case 1:
          message.oauthType = 1
          break
        case 'OAUTH_TYPE_QQ':
        case 2:
          message.oauthType = 2
          break
      }
      if (object.openId != null) { message.openId = String(object.openId) }
      if (object.unionId != null) { message.unionId = String(object.unionId) }
      if (object.appId != null) {
        if ($util.Long) { (message.appId = $util.Long.fromValue(object.appId)).unsigned = false } else if (typeof object.appId === 'string') { message.appId = parseInt(object.appId, 10) } else if (typeof object.appId === 'number') { message.appId = object.appId } else if (typeof object.appId === 'object') { message.appId = new $util.LongBits(object.appId.low >>> 0, object.appId.high >>> 0).toNumber() }
      }
      return message
    }

    /**
         * Creates a plain object from a UserOauthModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {pbuserOauth.UserOauthModel} message UserOauthModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    UserOauthModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        object.oauthType = options.enums === String ? 'OAUTH_TYPE_NONE' : 0
        object.openId = ''
        object.unionId = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.appId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.appId = options.longs === String ? '0' : 0 }
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.oauthType != null && message.hasOwnProperty('oauthType')) { object.oauthType = options.enums === String ? $root.pbuserOauth.OauthType[message.oauthType] === undefined ? message.oauthType : $root.pbuserOauth.OauthType[message.oauthType] : message.oauthType }
      if (message.openId != null && message.hasOwnProperty('openId')) { object.openId = message.openId }
      if (message.unionId != null && message.hasOwnProperty('unionId')) { object.unionId = message.unionId }
      if (message.appId != null && message.hasOwnProperty('appId')) {
        if (typeof message.appId === 'number') { object.appId = options.longs === String ? String(message.appId) : message.appId } else { object.appId = options.longs === String ? $util.Long.prototype.toString.call(message.appId) : options.longs === Number ? new $util.LongBits(message.appId.low >>> 0, message.appId.high >>> 0).toNumber() : message.appId }
      }
      return object
    }

    /**
         * Converts this UserOauthModel to JSON.
         * @function toJSON
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    UserOauthModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for UserOauthModel
         * @function getTypeUrl
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    UserOauthModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbuserOauth.UserOauthModel'
    }

    return UserOauthModel
  })()

  /**
     * OauthType enum.
     * @name pbuserOauth.OauthType
     * @enum {number}
     * @property {number} OAUTH_TYPE_NONE=0 OAUTH_TYPE_NONE value
     * @property {number} OAUTH_TYPE_WECHAT=1 OAUTH_TYPE_WECHAT value
     * @property {number} OAUTH_TYPE_QQ=2 OAUTH_TYPE_QQ value
     */
  pbuserOauth.OauthType = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'OAUTH_TYPE_NONE'] = 0
    values[valuesById[1] = 'OAUTH_TYPE_WECHAT'] = 1
    values[valuesById[2] = 'OAUTH_TYPE_QQ'] = 2
    return values
  })()

  pbuserOauth.FindUserOauthArgs = (function() {
    /**
         * Properties of a FindUserOauthArgs.
         * @memberof pbuserOauth
         * @interface IFindUserOauthArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindUserOauthArgs pageInfo
         * @property {pbuserOauth.IUserOauthModel|null} [query] FindUserOauthArgs query
         */

    /**
         * Constructs a new FindUserOauthArgs.
         * @memberof pbuserOauth
         * @classdesc Represents a FindUserOauthArgs.
         * @implements IFindUserOauthArgs
         * @constructor
         * @param {pbuserOauth.IFindUserOauthArgs=} [properties] Properties to set
         */
    function FindUserOauthArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindUserOauthArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbuserOauth.FindUserOauthArgs
         * @instance
         */
    FindUserOauthArgs.prototype.pageInfo = null

    /**
         * FindUserOauthArgs query.
         * @member {pbuserOauth.IUserOauthModel|null|undefined} query
         * @memberof pbuserOauth.FindUserOauthArgs
         * @instance
         */
    FindUserOauthArgs.prototype.query = null

    /**
         * Creates a new FindUserOauthArgs instance using the specified properties.
         * @function create
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {pbuserOauth.IFindUserOauthArgs=} [properties] Properties to set
         * @returns {pbuserOauth.FindUserOauthArgs} FindUserOauthArgs instance
         */
    FindUserOauthArgs.create = function create(properties) {
      return new FindUserOauthArgs(properties)
    }

    /**
         * Encodes the specified FindUserOauthArgs message. Does not implicitly {@link pbuserOauth.FindUserOauthArgs.verify|verify} messages.
         * @function encode
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {pbuserOauth.IFindUserOauthArgs} message FindUserOauthArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindUserOauthArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbuserOauth.UserOauthModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
         * Encodes the specified FindUserOauthArgs message, length delimited. Does not implicitly {@link pbuserOauth.FindUserOauthArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {pbuserOauth.IFindUserOauthArgs} message FindUserOauthArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindUserOauthArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindUserOauthArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbuserOauth.FindUserOauthArgs} FindUserOauthArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindUserOauthArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbuserOauth.FindUserOauthArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          }
          case 2: {
            message.query = $root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32())
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
         * Decodes a FindUserOauthArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbuserOauth.FindUserOauthArgs} FindUserOauthArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindUserOauthArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindUserOauthArgs message.
         * @function verify
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindUserOauthArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbuserOauth.UserOauthModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
         * Creates a FindUserOauthArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuserOauth.FindUserOauthArgs} FindUserOauthArgs
         */
    FindUserOauthArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbuserOauth.FindUserOauthArgs) { return object }
      var message = new $root.pbuserOauth.FindUserOauthArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbuserOauth.FindUserOauthArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbuserOauth.FindUserOauthArgs.query: object expected') }
        message.query = $root.pbuserOauth.UserOauthModel.fromObject(object.query)
      }
      return message
    }

    /**
         * Creates a plain object from a FindUserOauthArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {pbuserOauth.FindUserOauthArgs} message FindUserOauthArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindUserOauthArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbuserOauth.UserOauthModel.toObject(message.query, options) }
      return object
    }

    /**
         * Converts this FindUserOauthArgs to JSON.
         * @function toJSON
         * @memberof pbuserOauth.FindUserOauthArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindUserOauthArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindUserOauthArgs
         * @function getTypeUrl
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindUserOauthArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbuserOauth.FindUserOauthArgs'
    }

    return FindUserOauthArgs
  })()

  pbuserOauth.FindUserOauthReply = (function() {
    /**
         * Properties of a FindUserOauthReply.
         * @memberof pbuserOauth
         * @interface IFindUserOauthReply
         * @property {pbcommon.EnumCode|null} [code] FindUserOauthReply code
         * @property {string|null} [msg] FindUserOauthReply msg
         * @property {pbuserOauth.IUserOauthModel|null} [data] FindUserOauthReply data
         * @property {Array.<pbuserOauth.IUserOauthModel>|null} [list] FindUserOauthReply list
         * @property {number|Long|null} [total] FindUserOauthReply total
         */

    /**
         * Constructs a new FindUserOauthReply.
         * @memberof pbuserOauth
         * @classdesc Represents a FindUserOauthReply.
         * @implements IFindUserOauthReply
         * @constructor
         * @param {pbuserOauth.IFindUserOauthReply=} [properties] Properties to set
         */
    function FindUserOauthReply(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindUserOauthReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         */
    FindUserOauthReply.prototype.code = 0

    /**
         * FindUserOauthReply msg.
         * @member {string} msg
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         */
    FindUserOauthReply.prototype.msg = ''

    /**
         * FindUserOauthReply data.
         * @member {pbuserOauth.IUserOauthModel|null|undefined} data
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         */
    FindUserOauthReply.prototype.data = null

    /**
         * FindUserOauthReply list.
         * @member {Array.<pbuserOauth.IUserOauthModel>} list
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         */
    FindUserOauthReply.prototype.list = $util.emptyArray

    /**
         * FindUserOauthReply total.
         * @member {number|Long} total
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         */
    FindUserOauthReply.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * Creates a new FindUserOauthReply instance using the specified properties.
         * @function create
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {pbuserOauth.IFindUserOauthReply=} [properties] Properties to set
         * @returns {pbuserOauth.FindUserOauthReply} FindUserOauthReply instance
         */
    FindUserOauthReply.create = function create(properties) {
      return new FindUserOauthReply(properties)
    }

    /**
         * Encodes the specified FindUserOauthReply message. Does not implicitly {@link pbuserOauth.FindUserOauthReply.verify|verify} messages.
         * @function encode
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {pbuserOauth.IFindUserOauthReply} message FindUserOauthReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindUserOauthReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbuserOauth.UserOauthModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbuserOauth.UserOauthModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      return writer
    }

    /**
         * Encodes the specified FindUserOauthReply message, length delimited. Does not implicitly {@link pbuserOauth.FindUserOauthReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {pbuserOauth.IFindUserOauthReply} message FindUserOauthReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindUserOauthReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindUserOauthReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbuserOauth.FindUserOauthReply} FindUserOauthReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindUserOauthReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbuserOauth.FindUserOauthReply()
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
            message.data = $root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32())
            break
          }
          case 4: {
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32()))
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
         * Decodes a FindUserOauthReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbuserOauth.FindUserOauthReply} FindUserOauthReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindUserOauthReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindUserOauthReply message.
         * @function verify
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindUserOauthReply.verify = function verify(message) {
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
        var error = $root.pbuserOauth.UserOauthModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbuserOauth.UserOauthModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      return null
    }

    /**
         * Creates a FindUserOauthReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuserOauth.FindUserOauthReply} FindUserOauthReply
         */
    FindUserOauthReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbuserOauth.FindUserOauthReply) { return object }
      var message = new $root.pbuserOauth.FindUserOauthReply()
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
        if (typeof object.data !== 'object') { throw TypeError('.pbuserOauth.FindUserOauthReply.data: object expected') }
        message.data = $root.pbuserOauth.UserOauthModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbuserOauth.FindUserOauthReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbuserOauth.FindUserOauthReply.list: object expected') }
          message.list[i] = $root.pbuserOauth.UserOauthModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      return message
    }

    /**
         * Creates a plain object from a FindUserOauthReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {pbuserOauth.FindUserOauthReply} message FindUserOauthReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindUserOauthReply.toObject = function toObject(message, options) {
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
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbuserOauth.UserOauthModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbuserOauth.UserOauthModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      return object
    }

    /**
         * Converts this FindUserOauthReply to JSON.
         * @function toJSON
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindUserOauthReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindUserOauthReply
         * @function getTypeUrl
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindUserOauthReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbuserOauth.FindUserOauthReply'
    }

    return FindUserOauthReply
  })()

  pbuserOauth.UserOauth = (function() {
    /**
         * Constructs a new UserOauth service.
         * @memberof pbuserOauth
         * @classdesc Represents a UserOauth
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function UserOauth(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (UserOauth.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserOauth

    /**
         * Creates new UserOauth service using the specified rpc implementation.
         * @function create
         * @memberof pbuserOauth.UserOauth
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {UserOauth} RPC service. Useful where requests and/or responses are streamed.
         */
    UserOauth.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link pbuserOauth.UserOauth#createUserOauth}.
         * @memberof pbuserOauth.UserOauth
         * @typedef CreateUserOauthCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls CreateUserOauth.
         * @function createUserOauth
         * @memberof pbuserOauth.UserOauth
         * @instance
         * @param {pbuserOauth.IUserOauthModel} request UserOauthModel message or plain object
         * @param {pbuserOauth.UserOauth.CreateUserOauthCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(UserOauth.prototype.createUserOauth = function createUserOauth(request, callback) {
      return this.rpcCall(createUserOauth, $root.pbuserOauth.UserOauthModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreateUserOauth' })

    /**
         * Calls CreateUserOauth.
         * @function createUserOauth
         * @memberof pbuserOauth.UserOauth
         * @instance
         * @param {pbuserOauth.IUserOauthModel} request UserOauthModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbuserOauth.UserOauth#updateUserOauth}.
         * @memberof pbuserOauth.UserOauth
         * @typedef UpdateUserOauthCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls UpdateUserOauth.
         * @function updateUserOauth
         * @memberof pbuserOauth.UserOauth
         * @instance
         * @param {pbuserOauth.IUserOauthModel} request UserOauthModel message or plain object
         * @param {pbuserOauth.UserOauth.UpdateUserOauthCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(UserOauth.prototype.updateUserOauth = function updateUserOauth(request, callback) {
      return this.rpcCall(updateUserOauth, $root.pbuserOauth.UserOauthModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdateUserOauth' })

    /**
         * Calls UpdateUserOauth.
         * @function updateUserOauth
         * @memberof pbuserOauth.UserOauth
         * @instance
         * @param {pbuserOauth.IUserOauthModel} request UserOauthModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbuserOauth.UserOauth#deleteUserOauth}.
         * @memberof pbuserOauth.UserOauth
         * @typedef DeleteUserOauthCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls DeleteUserOauth.
         * @function deleteUserOauth
         * @memberof pbuserOauth.UserOauth
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbuserOauth.UserOauth.DeleteUserOauthCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(UserOauth.prototype.deleteUserOauth = function deleteUserOauth(request, callback) {
      return this.rpcCall(deleteUserOauth, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeleteUserOauth' })

    /**
         * Calls DeleteUserOauth.
         * @function deleteUserOauth
         * @memberof pbuserOauth.UserOauth
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbuserOauth.UserOauth#findUserOauthById}.
         * @memberof pbuserOauth.UserOauth
         * @typedef FindUserOauthByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbuserOauth.FindUserOauthReply} [response] FindUserOauthReply
         */

    /**
         * Calls FindUserOauthById.
         * @function findUserOauthById
         * @memberof pbuserOauth.UserOauth
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbuserOauth.UserOauth.FindUserOauthByIdCallback} callback Node-style callback called with the error, if any, and FindUserOauthReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(UserOauth.prototype.findUserOauthById = function findUserOauthById(request, callback) {
      return this.rpcCall(findUserOauthById, $root.pbcommon.IdArgs, $root.pbuserOauth.FindUserOauthReply, request, callback)
    }, 'name', { value: 'FindUserOauthById' })

    /**
         * Calls FindUserOauthById.
         * @function findUserOauthById
         * @memberof pbuserOauth.UserOauth
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbuserOauth.FindUserOauthReply>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbuserOauth.UserOauth#findUserOauthList}.
         * @memberof pbuserOauth.UserOauth
         * @typedef FindUserOauthListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbuserOauth.FindUserOauthReply} [response] FindUserOauthReply
         */

    /**
         * Calls FindUserOauthList.
         * @function findUserOauthList
         * @memberof pbuserOauth.UserOauth
         * @instance
         * @param {pbuserOauth.IFindUserOauthArgs} request FindUserOauthArgs message or plain object
         * @param {pbuserOauth.UserOauth.FindUserOauthListCallback} callback Node-style callback called with the error, if any, and FindUserOauthReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(UserOauth.prototype.findUserOauthList = function findUserOauthList(request, callback) {
      return this.rpcCall(findUserOauthList, $root.pbuserOauth.FindUserOauthArgs, $root.pbuserOauth.FindUserOauthReply, request, callback)
    }, 'name', { value: 'FindUserOauthList' })

    /**
         * Calls FindUserOauthList.
         * @function findUserOauthList
         * @memberof pbuserOauth.UserOauth
         * @instance
         * @param {pbuserOauth.IFindUserOauthArgs} request FindUserOauthArgs message or plain object
         * @returns {Promise<pbuserOauth.FindUserOauthReply>} Promise
         * @variation 2
         */

    return UserOauth
  })()

  return pbuserOauth
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

$root.pbshop = (function() {
  /**
     * Namespace pbshop.
     * @exports pbshop
     * @namespace
     */
  var pbshop = {}

  pbshop.ShopModel = (function() {
    /**
         * Properties of a ShopModel.
         * @memberof pbshop
         * @interface IShopModel
         * @property {number|Long|null} [id] ShopModel id
         * @property {string|null} [createdAt] ShopModel createdAt
         * @property {string|null} [updatedAt] ShopModel updatedAt
         * @property {string|null} [name] ShopModel name
         * @property {string|null} [address] ShopModel address
         * @property {string|null} [phone] ShopModel phone
         * @property {string|null} [businessLicenceUrl] ShopModel businessLicenceUrl
         * @property {string|null} [idcard1] ShopModel idcard1
         * @property {string|null} [idcard2] ShopModel idcard2
         * @property {pbshop.ShopStatusEnum|null} [status] ShopModel status
         * @property {string|null} [remark] ShopModel remark
         * @property {string|null} [creator] ShopModel creator
         * @property {string|null} [updater] ShopModel updater
         */

    /**
         * Constructs a new ShopModel.
         * @memberof pbshop
         * @classdesc Represents a ShopModel.
         * @implements IShopModel
         * @constructor
         * @param {pbshop.IShopModel=} [properties] Properties to set
         */
    function ShopModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * ShopModel id.
         * @member {number|Long} id
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * ShopModel createdAt.
         * @member {string} createdAt
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.createdAt = ''

    /**
         * ShopModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.updatedAt = ''

    /**
         * ShopModel name.
         * @member {string} name
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.name = ''

    /**
         * ShopModel address.
         * @member {string} address
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.address = ''

    /**
         * ShopModel phone.
         * @member {string} phone
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.phone = ''

    /**
         * ShopModel businessLicenceUrl.
         * @member {string} businessLicenceUrl
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.businessLicenceUrl = ''

    /**
         * ShopModel idcard1.
         * @member {string} idcard1
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.idcard1 = ''

    /**
         * ShopModel idcard2.
         * @member {string} idcard2
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.idcard2 = ''

    /**
         * ShopModel status.
         * @member {pbshop.ShopStatusEnum} status
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.status = 0

    /**
         * ShopModel remark.
         * @member {string} remark
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.remark = ''

    /**
         * ShopModel creator.
         * @member {string} creator
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.creator = ''

    /**
         * ShopModel updater.
         * @member {string} updater
         * @memberof pbshop.ShopModel
         * @instance
         */
    ShopModel.prototype.updater = ''

    /**
         * Creates a new ShopModel instance using the specified properties.
         * @function create
         * @memberof pbshop.ShopModel
         * @static
         * @param {pbshop.IShopModel=} [properties] Properties to set
         * @returns {pbshop.ShopModel} ShopModel instance
         */
    ShopModel.create = function create(properties) {
      return new ShopModel(properties)
    }

    /**
         * Encodes the specified ShopModel message. Does not implicitly {@link pbshop.ShopModel.verify|verify} messages.
         * @function encode
         * @memberof pbshop.ShopModel
         * @static
         * @param {pbshop.IShopModel} message ShopModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    ShopModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.name != null && Object.hasOwnProperty.call(message, 'name')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.name) }
      if (message.address != null && Object.hasOwnProperty.call(message, 'address')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.address) }
      if (message.phone != null && Object.hasOwnProperty.call(message, 'phone')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.phone) }
      if (message.businessLicenceUrl != null && Object.hasOwnProperty.call(message, 'businessLicenceUrl')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.businessLicenceUrl) }
      if (message.idcard1 != null && Object.hasOwnProperty.call(message, 'idcard1')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.idcard1) }
      if (message.idcard2 != null && Object.hasOwnProperty.call(message, 'idcard2')) { writer.uint32(/* id 9, wireType 2 =*/74).string(message.idcard2) }
      if (message.status != null && Object.hasOwnProperty.call(message, 'status')) { writer.uint32(/* id 10, wireType 0 =*/80).int32(message.status) }
      if (message.remark != null && Object.hasOwnProperty.call(message, 'remark')) { writer.uint32(/* id 11, wireType 2 =*/90).string(message.remark) }
      if (message.creator != null && Object.hasOwnProperty.call(message, 'creator')) { writer.uint32(/* id 12, wireType 2 =*/98).string(message.creator) }
      if (message.updater != null && Object.hasOwnProperty.call(message, 'updater')) { writer.uint32(/* id 13, wireType 2 =*/106).string(message.updater) }
      return writer
    }

    /**
         * Encodes the specified ShopModel message, length delimited. Does not implicitly {@link pbshop.ShopModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbshop.ShopModel
         * @static
         * @param {pbshop.IShopModel} message ShopModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    ShopModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a ShopModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbshop.ShopModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbshop.ShopModel} ShopModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    ShopModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbshop.ShopModel()
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
            message.address = reader.string()
            break
          }
          case 6: {
            message.phone = reader.string()
            break
          }
          case 7: {
            message.businessLicenceUrl = reader.string()
            break
          }
          case 8: {
            message.idcard1 = reader.string()
            break
          }
          case 9: {
            message.idcard2 = reader.string()
            break
          }
          case 10: {
            message.status = reader.int32()
            break
          }
          case 11: {
            message.remark = reader.string()
            break
          }
          case 12: {
            message.creator = reader.string()
            break
          }
          case 13: {
            message.updater = reader.string()
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
         * Decodes a ShopModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbshop.ShopModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbshop.ShopModel} ShopModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    ShopModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a ShopModel message.
         * @function verify
         * @memberof pbshop.ShopModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    ShopModel.verify = function verify(message) {
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
      if (message.address != null && message.hasOwnProperty('address')) {
        if (!$util.isString(message.address)) { return 'address: string expected' }
      }
      if (message.phone != null && message.hasOwnProperty('phone')) {
        if (!$util.isString(message.phone)) { return 'phone: string expected' }
      }
      if (message.businessLicenceUrl != null && message.hasOwnProperty('businessLicenceUrl')) {
        if (!$util.isString(message.businessLicenceUrl)) { return 'businessLicenceUrl: string expected' }
      }
      if (message.idcard1 != null && message.hasOwnProperty('idcard1')) {
        if (!$util.isString(message.idcard1)) { return 'idcard1: string expected' }
      }
      if (message.idcard2 != null && message.hasOwnProperty('idcard2')) {
        if (!$util.isString(message.idcard2)) { return 'idcard2: string expected' }
      }
      if (message.status != null && message.hasOwnProperty('status')) {
        switch (message.status) {
          default:
            return 'status: enum value expected'
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
            break
        }
      }
      if (message.remark != null && message.hasOwnProperty('remark')) {
        if (!$util.isString(message.remark)) { return 'remark: string expected' }
      }
      if (message.creator != null && message.hasOwnProperty('creator')) {
        if (!$util.isString(message.creator)) { return 'creator: string expected' }
      }
      if (message.updater != null && message.hasOwnProperty('updater')) {
        if (!$util.isString(message.updater)) { return 'updater: string expected' }
      }
      return null
    }

    /**
         * Creates a ShopModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbshop.ShopModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbshop.ShopModel} ShopModel
         */
    ShopModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbshop.ShopModel) { return object }
      var message = new $root.pbshop.ShopModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.name != null) { message.name = String(object.name) }
      if (object.address != null) { message.address = String(object.address) }
      if (object.phone != null) { message.phone = String(object.phone) }
      if (object.businessLicenceUrl != null) { message.businessLicenceUrl = String(object.businessLicenceUrl) }
      if (object.idcard1 != null) { message.idcard1 = String(object.idcard1) }
      if (object.idcard2 != null) { message.idcard2 = String(object.idcard2) }
      switch (object.status) {
        default:
          if (typeof object.status === 'number') {
            message.status = object.status
            break
          }
          break
        case 'UnKnown':
        case 0:
          message.status = 0
          break
        case 'Unchecked':
        case 1:
          message.status = 1
          break
        case 'Checked':
        case 2:
          message.status = 2
          break
        case 'Deleted':
        case 3:
          message.status = 3
          break
        case 'UnUsed':
        case 4:
          message.status = 4
          break
      }
      if (object.remark != null) { message.remark = String(object.remark) }
      if (object.creator != null) { message.creator = String(object.creator) }
      if (object.updater != null) { message.updater = String(object.updater) }
      return message
    }

    /**
         * Creates a plain object from a ShopModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbshop.ShopModel
         * @static
         * @param {pbshop.ShopModel} message ShopModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    ShopModel.toObject = function toObject(message, options) {
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
        object.address = ''
        object.phone = ''
        object.businessLicenceUrl = ''
        object.idcard1 = ''
        object.idcard2 = ''
        object.status = options.enums === String ? 'UnKnown' : 0
        object.remark = ''
        object.creator = ''
        object.updater = ''
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.name != null && message.hasOwnProperty('name')) { object.name = message.name }
      if (message.address != null && message.hasOwnProperty('address')) { object.address = message.address }
      if (message.phone != null && message.hasOwnProperty('phone')) { object.phone = message.phone }
      if (message.businessLicenceUrl != null && message.hasOwnProperty('businessLicenceUrl')) { object.businessLicenceUrl = message.businessLicenceUrl }
      if (message.idcard1 != null && message.hasOwnProperty('idcard1')) { object.idcard1 = message.idcard1 }
      if (message.idcard2 != null && message.hasOwnProperty('idcard2')) { object.idcard2 = message.idcard2 }
      if (message.status != null && message.hasOwnProperty('status')) { object.status = options.enums === String ? $root.pbshop.ShopStatusEnum[message.status] === undefined ? message.status : $root.pbshop.ShopStatusEnum[message.status] : message.status }
      if (message.remark != null && message.hasOwnProperty('remark')) { object.remark = message.remark }
      if (message.creator != null && message.hasOwnProperty('creator')) { object.creator = message.creator }
      if (message.updater != null && message.hasOwnProperty('updater')) { object.updater = message.updater }
      return object
    }

    /**
         * Converts this ShopModel to JSON.
         * @function toJSON
         * @memberof pbshop.ShopModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    ShopModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for ShopModel
         * @function getTypeUrl
         * @memberof pbshop.ShopModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    ShopModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbshop.ShopModel'
    }

    return ShopModel
  })()

  /**
     * ShopStatusEnum enum.
     * @name pbshop.ShopStatusEnum
     * @enum {number}
     * @property {number} UnKnown=0 UnKnown value
     * @property {number} Unchecked=1 Unchecked value
     * @property {number} Checked=2 Checked value
     * @property {number} Deleted=3 Deleted value
     * @property {number} UnUsed=4 UnUsed value
     */
  pbshop.ShopStatusEnum = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'UnKnown'] = 0
    values[valuesById[1] = 'Unchecked'] = 1
    values[valuesById[2] = 'Checked'] = 2
    values[valuesById[3] = 'Deleted'] = 3
    values[valuesById[4] = 'UnUsed'] = 4
    return values
  })()

  pbshop.FindShopArgs = (function() {
    /**
         * Properties of a FindShopArgs.
         * @memberof pbshop
         * @interface IFindShopArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindShopArgs pageInfo
         * @property {pbshop.IShopModel|null} [query] FindShopArgs query
         */

    /**
         * Constructs a new FindShopArgs.
         * @memberof pbshop
         * @classdesc Represents a FindShopArgs.
         * @implements IFindShopArgs
         * @constructor
         * @param {pbshop.IFindShopArgs=} [properties] Properties to set
         */
    function FindShopArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindShopArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbshop.FindShopArgs
         * @instance
         */
    FindShopArgs.prototype.pageInfo = null

    /**
         * FindShopArgs query.
         * @member {pbshop.IShopModel|null|undefined} query
         * @memberof pbshop.FindShopArgs
         * @instance
         */
    FindShopArgs.prototype.query = null

    /**
         * Creates a new FindShopArgs instance using the specified properties.
         * @function create
         * @memberof pbshop.FindShopArgs
         * @static
         * @param {pbshop.IFindShopArgs=} [properties] Properties to set
         * @returns {pbshop.FindShopArgs} FindShopArgs instance
         */
    FindShopArgs.create = function create(properties) {
      return new FindShopArgs(properties)
    }

    /**
         * Encodes the specified FindShopArgs message. Does not implicitly {@link pbshop.FindShopArgs.verify|verify} messages.
         * @function encode
         * @memberof pbshop.FindShopArgs
         * @static
         * @param {pbshop.IFindShopArgs} message FindShopArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindShopArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbshop.ShopModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
         * Encodes the specified FindShopArgs message, length delimited. Does not implicitly {@link pbshop.FindShopArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbshop.FindShopArgs
         * @static
         * @param {pbshop.IFindShopArgs} message FindShopArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindShopArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindShopArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbshop.FindShopArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbshop.FindShopArgs} FindShopArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindShopArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbshop.FindShopArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          }
          case 2: {
            message.query = $root.pbshop.ShopModel.decode(reader, reader.uint32())
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
         * Decodes a FindShopArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbshop.FindShopArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbshop.FindShopArgs} FindShopArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindShopArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindShopArgs message.
         * @function verify
         * @memberof pbshop.FindShopArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindShopArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbshop.ShopModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
         * Creates a FindShopArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbshop.FindShopArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbshop.FindShopArgs} FindShopArgs
         */
    FindShopArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbshop.FindShopArgs) { return object }
      var message = new $root.pbshop.FindShopArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbshop.FindShopArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbshop.FindShopArgs.query: object expected') }
        message.query = $root.pbshop.ShopModel.fromObject(object.query)
      }
      return message
    }

    /**
         * Creates a plain object from a FindShopArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbshop.FindShopArgs
         * @static
         * @param {pbshop.FindShopArgs} message FindShopArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindShopArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbshop.ShopModel.toObject(message.query, options) }
      return object
    }

    /**
         * Converts this FindShopArgs to JSON.
         * @function toJSON
         * @memberof pbshop.FindShopArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindShopArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindShopArgs
         * @function getTypeUrl
         * @memberof pbshop.FindShopArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindShopArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbshop.FindShopArgs'
    }

    return FindShopArgs
  })()

  pbshop.FindShopReply = (function() {
    /**
         * Properties of a FindShopReply.
         * @memberof pbshop
         * @interface IFindShopReply
         * @property {pbcommon.EnumCode|null} [code] FindShopReply code
         * @property {string|null} [msg] FindShopReply msg
         * @property {pbshop.IShopModel|null} [data] FindShopReply data
         * @property {Array.<pbshop.IShopModel>|null} [list] FindShopReply list
         * @property {number|Long|null} [total] FindShopReply total
         */

    /**
         * Constructs a new FindShopReply.
         * @memberof pbshop
         * @classdesc Represents a FindShopReply.
         * @implements IFindShopReply
         * @constructor
         * @param {pbshop.IFindShopReply=} [properties] Properties to set
         */
    function FindShopReply(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindShopReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbshop.FindShopReply
         * @instance
         */
    FindShopReply.prototype.code = 0

    /**
         * FindShopReply msg.
         * @member {string} msg
         * @memberof pbshop.FindShopReply
         * @instance
         */
    FindShopReply.prototype.msg = ''

    /**
         * FindShopReply data.
         * @member {pbshop.IShopModel|null|undefined} data
         * @memberof pbshop.FindShopReply
         * @instance
         */
    FindShopReply.prototype.data = null

    /**
         * FindShopReply list.
         * @member {Array.<pbshop.IShopModel>} list
         * @memberof pbshop.FindShopReply
         * @instance
         */
    FindShopReply.prototype.list = $util.emptyArray

    /**
         * FindShopReply total.
         * @member {number|Long} total
         * @memberof pbshop.FindShopReply
         * @instance
         */
    FindShopReply.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * Creates a new FindShopReply instance using the specified properties.
         * @function create
         * @memberof pbshop.FindShopReply
         * @static
         * @param {pbshop.IFindShopReply=} [properties] Properties to set
         * @returns {pbshop.FindShopReply} FindShopReply instance
         */
    FindShopReply.create = function create(properties) {
      return new FindShopReply(properties)
    }

    /**
         * Encodes the specified FindShopReply message. Does not implicitly {@link pbshop.FindShopReply.verify|verify} messages.
         * @function encode
         * @memberof pbshop.FindShopReply
         * @static
         * @param {pbshop.IFindShopReply} message FindShopReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindShopReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbshop.ShopModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbshop.ShopModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      return writer
    }

    /**
         * Encodes the specified FindShopReply message, length delimited. Does not implicitly {@link pbshop.FindShopReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbshop.FindShopReply
         * @static
         * @param {pbshop.IFindShopReply} message FindShopReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindShopReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindShopReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbshop.FindShopReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbshop.FindShopReply} FindShopReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindShopReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbshop.FindShopReply()
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
            message.data = $root.pbshop.ShopModel.decode(reader, reader.uint32())
            break
          }
          case 4: {
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbshop.ShopModel.decode(reader, reader.uint32()))
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
         * Decodes a FindShopReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbshop.FindShopReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbshop.FindShopReply} FindShopReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindShopReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindShopReply message.
         * @function verify
         * @memberof pbshop.FindShopReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindShopReply.verify = function verify(message) {
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
        var error = $root.pbshop.ShopModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbshop.ShopModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      return null
    }

    /**
         * Creates a FindShopReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbshop.FindShopReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbshop.FindShopReply} FindShopReply
         */
    FindShopReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbshop.FindShopReply) { return object }
      var message = new $root.pbshop.FindShopReply()
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
        if (typeof object.data !== 'object') { throw TypeError('.pbshop.FindShopReply.data: object expected') }
        message.data = $root.pbshop.ShopModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbshop.FindShopReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbshop.FindShopReply.list: object expected') }
          message.list[i] = $root.pbshop.ShopModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      return message
    }

    /**
         * Creates a plain object from a FindShopReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbshop.FindShopReply
         * @static
         * @param {pbshop.FindShopReply} message FindShopReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindShopReply.toObject = function toObject(message, options) {
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
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbshop.ShopModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbshop.ShopModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      return object
    }

    /**
         * Converts this FindShopReply to JSON.
         * @function toJSON
         * @memberof pbshop.FindShopReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindShopReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindShopReply
         * @function getTypeUrl
         * @memberof pbshop.FindShopReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindShopReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbshop.FindShopReply'
    }

    return FindShopReply
  })()

  pbshop.Shop = (function() {
    /**
         * Constructs a new Shop service.
         * @memberof pbshop
         * @classdesc Represents a Shop
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function Shop(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Shop.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Shop

    /**
         * Creates new Shop service using the specified rpc implementation.
         * @function create
         * @memberof pbshop.Shop
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Shop} RPC service. Useful where requests and/or responses are streamed.
         */
    Shop.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link pbshop.Shop#createShop}.
         * @memberof pbshop.Shop
         * @typedef CreateShopCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls CreateShop.
         * @function createShop
         * @memberof pbshop.Shop
         * @instance
         * @param {pbshop.IShopModel} request ShopModel message or plain object
         * @param {pbshop.Shop.CreateShopCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Shop.prototype.createShop = function createShop(request, callback) {
      return this.rpcCall(createShop, $root.pbshop.ShopModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreateShop' })

    /**
         * Calls CreateShop.
         * @function createShop
         * @memberof pbshop.Shop
         * @instance
         * @param {pbshop.IShopModel} request ShopModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbshop.Shop#updateShop}.
         * @memberof pbshop.Shop
         * @typedef UpdateShopCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls UpdateShop.
         * @function updateShop
         * @memberof pbshop.Shop
         * @instance
         * @param {pbshop.IShopModel} request ShopModel message or plain object
         * @param {pbshop.Shop.UpdateShopCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Shop.prototype.updateShop = function updateShop(request, callback) {
      return this.rpcCall(updateShop, $root.pbshop.ShopModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdateShop' })

    /**
         * Calls UpdateShop.
         * @function updateShop
         * @memberof pbshop.Shop
         * @instance
         * @param {pbshop.IShopModel} request ShopModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbshop.Shop#deleteShop}.
         * @memberof pbshop.Shop
         * @typedef DeleteShopCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls DeleteShop.
         * @function deleteShop
         * @memberof pbshop.Shop
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbshop.Shop.DeleteShopCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Shop.prototype.deleteShop = function deleteShop(request, callback) {
      return this.rpcCall(deleteShop, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeleteShop' })

    /**
         * Calls DeleteShop.
         * @function deleteShop
         * @memberof pbshop.Shop
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbshop.Shop#findShopById}.
         * @memberof pbshop.Shop
         * @typedef FindShopByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbshop.FindShopReply} [response] FindShopReply
         */

    /**
         * Calls FindShopById.
         * @function findShopById
         * @memberof pbshop.Shop
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbshop.Shop.FindShopByIdCallback} callback Node-style callback called with the error, if any, and FindShopReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Shop.prototype.findShopById = function findShopById(request, callback) {
      return this.rpcCall(findShopById, $root.pbcommon.IdArgs, $root.pbshop.FindShopReply, request, callback)
    }, 'name', { value: 'FindShopById' })

    /**
         * Calls FindShopById.
         * @function findShopById
         * @memberof pbshop.Shop
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbshop.FindShopReply>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbshop.Shop#findShopList}.
         * @memberof pbshop.Shop
         * @typedef FindShopListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbshop.FindShopReply} [response] FindShopReply
         */

    /**
         * Calls FindShopList.
         * @function findShopList
         * @memberof pbshop.Shop
         * @instance
         * @param {pbshop.IFindShopArgs} request FindShopArgs message or plain object
         * @param {pbshop.Shop.FindShopListCallback} callback Node-style callback called with the error, if any, and FindShopReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Shop.prototype.findShopList = function findShopList(request, callback) {
      return this.rpcCall(findShopList, $root.pbshop.FindShopArgs, $root.pbshop.FindShopReply, request, callback)
    }, 'name', { value: 'FindShopList' })

    /**
         * Calls FindShopList.
         * @function findShopList
         * @memberof pbshop.Shop
         * @instance
         * @param {pbshop.IFindShopArgs} request FindShopArgs message or plain object
         * @returns {Promise<pbshop.FindShopReply>} Promise
         * @variation 2
         */

    return Shop
  })()

  return pbshop
})()

$root.pbactiveShop = (function() {
  /**
     * Namespace pbactiveShop.
     * @exports pbactiveShop
     * @namespace
     */
  var pbactiveShop = {}

  pbactiveShop.ActiveShopModel = (function() {
    /**
         * Properties of an ActiveShopModel.
         * @memberof pbactiveShop
         * @interface IActiveShopModel
         * @property {number|Long|null} [id] ActiveShopModel id
         * @property {string|null} [createdAt] ActiveShopModel createdAt
         * @property {string|null} [updatedAt] ActiveShopModel updatedAt
         * @property {number|Long|null} [shopId] ActiveShopModel shopId
         * @property {string|null} [shopName] ActiveShopModel shopName
         * @property {string|null} [shopLogo] ActiveShopModel shopLogo
         * @property {string|null} [videoUrl] ActiveShopModel videoUrl
         * @property {string|null} [description] ActiveShopModel description
         * @property {string|null} [address] ActiveShopModel address
         * @property {string|null} [phone] ActiveShopModel phone
         * @property {string|null} [tags] ActiveShopModel tags
         * @property {string|null} [openTime] ActiveShopModel openTime
         * @property {string|null} [closeTime] ActiveShopModel closeTime
         * @property {number|null} [status] ActiveShopModel status
         * @property {number|null} [sort] ActiveShopModel sort
         * @property {string|null} [lat] ActiveShopModel lat
         * @property {string|null} [lng] ActiveShopModel lng
         */

    /**
         * Constructs a new ActiveShopModel.
         * @memberof pbactiveShop
         * @classdesc Represents an ActiveShopModel.
         * @implements IActiveShopModel
         * @constructor
         * @param {pbactiveShop.IActiveShopModel=} [properties] Properties to set
         */
    function ActiveShopModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * ActiveShopModel id.
         * @member {number|Long} id
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * ActiveShopModel createdAt.
         * @member {string} createdAt
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.createdAt = ''

    /**
         * ActiveShopModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.updatedAt = ''

    /**
         * ActiveShopModel shopId.
         * @member {number|Long} shopId
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.shopId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * ActiveShopModel shopName.
         * @member {string} shopName
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.shopName = ''

    /**
         * ActiveShopModel shopLogo.
         * @member {string} shopLogo
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.shopLogo = ''

    /**
         * ActiveShopModel videoUrl.
         * @member {string} videoUrl
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.videoUrl = ''

    /**
         * ActiveShopModel description.
         * @member {string} description
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.description = ''

    /**
         * ActiveShopModel address.
         * @member {string} address
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.address = ''

    /**
         * ActiveShopModel phone.
         * @member {string} phone
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.phone = ''

    /**
         * ActiveShopModel tags.
         * @member {string} tags
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.tags = ''

    /**
         * ActiveShopModel openTime.
         * @member {string} openTime
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.openTime = ''

    /**
         * ActiveShopModel closeTime.
         * @member {string} closeTime
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.closeTime = ''

    /**
         * ActiveShopModel status.
         * @member {number} status
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.status = 0

    /**
         * ActiveShopModel sort.
         * @member {number} sort
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.sort = 0

    /**
         * ActiveShopModel lat.
         * @member {string} lat
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.lat = ''

    /**
         * ActiveShopModel lng.
         * @member {string} lng
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         */
    ActiveShopModel.prototype.lng = ''

    /**
         * Creates a new ActiveShopModel instance using the specified properties.
         * @function create
         * @memberof pbactiveShop.ActiveShopModel
         * @static
         * @param {pbactiveShop.IActiveShopModel=} [properties] Properties to set
         * @returns {pbactiveShop.ActiveShopModel} ActiveShopModel instance
         */
    ActiveShopModel.create = function create(properties) {
      return new ActiveShopModel(properties)
    }

    /**
         * Encodes the specified ActiveShopModel message. Does not implicitly {@link pbactiveShop.ActiveShopModel.verify|verify} messages.
         * @function encode
         * @memberof pbactiveShop.ActiveShopModel
         * @static
         * @param {pbactiveShop.IActiveShopModel} message ActiveShopModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    ActiveShopModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.shopId != null && Object.hasOwnProperty.call(message, 'shopId')) { writer.uint32(/* id 4, wireType 0 =*/32).int64(message.shopId) }
      if (message.shopName != null && Object.hasOwnProperty.call(message, 'shopName')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.shopName) }
      if (message.shopLogo != null && Object.hasOwnProperty.call(message, 'shopLogo')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.shopLogo) }
      if (message.videoUrl != null && Object.hasOwnProperty.call(message, 'videoUrl')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.videoUrl) }
      if (message.description != null && Object.hasOwnProperty.call(message, 'description')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.description) }
      if (message.address != null && Object.hasOwnProperty.call(message, 'address')) { writer.uint32(/* id 9, wireType 2 =*/74).string(message.address) }
      if (message.phone != null && Object.hasOwnProperty.call(message, 'phone')) { writer.uint32(/* id 10, wireType 2 =*/82).string(message.phone) }
      if (message.tags != null && Object.hasOwnProperty.call(message, 'tags')) { writer.uint32(/* id 11, wireType 2 =*/90).string(message.tags) }
      if (message.openTime != null && Object.hasOwnProperty.call(message, 'openTime')) { writer.uint32(/* id 12, wireType 2 =*/98).string(message.openTime) }
      if (message.closeTime != null && Object.hasOwnProperty.call(message, 'closeTime')) { writer.uint32(/* id 13, wireType 2 =*/106).string(message.closeTime) }
      if (message.status != null && Object.hasOwnProperty.call(message, 'status')) { writer.uint32(/* id 14, wireType 0 =*/112).int32(message.status) }
      if (message.sort != null && Object.hasOwnProperty.call(message, 'sort')) { writer.uint32(/* id 15, wireType 0 =*/120).int32(message.sort) }
      if (message.lat != null && Object.hasOwnProperty.call(message, 'lat')) { writer.uint32(/* id 16, wireType 2 =*/130).string(message.lat) }
      if (message.lng != null && Object.hasOwnProperty.call(message, 'lng')) { writer.uint32(/* id 17, wireType 2 =*/138).string(message.lng) }
      return writer
    }

    /**
         * Encodes the specified ActiveShopModel message, length delimited. Does not implicitly {@link pbactiveShop.ActiveShopModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbactiveShop.ActiveShopModel
         * @static
         * @param {pbactiveShop.IActiveShopModel} message ActiveShopModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    ActiveShopModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes an ActiveShopModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbactiveShop.ActiveShopModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbactiveShop.ActiveShopModel} ActiveShopModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    ActiveShopModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbactiveShop.ActiveShopModel()
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
            message.shopId = reader.int64()
            break
          }
          case 5: {
            message.shopName = reader.string()
            break
          }
          case 6: {
            message.shopLogo = reader.string()
            break
          }
          case 7: {
            message.videoUrl = reader.string()
            break
          }
          case 8: {
            message.description = reader.string()
            break
          }
          case 9: {
            message.address = reader.string()
            break
          }
          case 10: {
            message.phone = reader.string()
            break
          }
          case 11: {
            message.tags = reader.string()
            break
          }
          case 12: {
            message.openTime = reader.string()
            break
          }
          case 13: {
            message.closeTime = reader.string()
            break
          }
          case 14: {
            message.status = reader.int32()
            break
          }
          case 15: {
            message.sort = reader.int32()
            break
          }
          case 16: {
            message.lat = reader.string()
            break
          }
          case 17: {
            message.lng = reader.string()
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
         * Decodes an ActiveShopModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbactiveShop.ActiveShopModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbactiveShop.ActiveShopModel} ActiveShopModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    ActiveShopModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies an ActiveShopModel message.
         * @function verify
         * @memberof pbactiveShop.ActiveShopModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    ActiveShopModel.verify = function verify(message) {
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
      if (message.shopId != null && message.hasOwnProperty('shopId')) {
        if (!$util.isInteger(message.shopId) && !(message.shopId && $util.isInteger(message.shopId.low) && $util.isInteger(message.shopId.high))) { return 'shopId: integer|Long expected' }
      }
      if (message.shopName != null && message.hasOwnProperty('shopName')) {
        if (!$util.isString(message.shopName)) { return 'shopName: string expected' }
      }
      if (message.shopLogo != null && message.hasOwnProperty('shopLogo')) {
        if (!$util.isString(message.shopLogo)) { return 'shopLogo: string expected' }
      }
      if (message.videoUrl != null && message.hasOwnProperty('videoUrl')) {
        if (!$util.isString(message.videoUrl)) { return 'videoUrl: string expected' }
      }
      if (message.description != null && message.hasOwnProperty('description')) {
        if (!$util.isString(message.description)) { return 'description: string expected' }
      }
      if (message.address != null && message.hasOwnProperty('address')) {
        if (!$util.isString(message.address)) { return 'address: string expected' }
      }
      if (message.phone != null && message.hasOwnProperty('phone')) {
        if (!$util.isString(message.phone)) { return 'phone: string expected' }
      }
      if (message.tags != null && message.hasOwnProperty('tags')) {
        if (!$util.isString(message.tags)) { return 'tags: string expected' }
      }
      if (message.openTime != null && message.hasOwnProperty('openTime')) {
        if (!$util.isString(message.openTime)) { return 'openTime: string expected' }
      }
      if (message.closeTime != null && message.hasOwnProperty('closeTime')) {
        if (!$util.isString(message.closeTime)) { return 'closeTime: string expected' }
      }
      if (message.status != null && message.hasOwnProperty('status')) {
        if (!$util.isInteger(message.status)) { return 'status: integer expected' }
      }
      if (message.sort != null && message.hasOwnProperty('sort')) {
        if (!$util.isInteger(message.sort)) { return 'sort: integer expected' }
      }
      if (message.lat != null && message.hasOwnProperty('lat')) {
        if (!$util.isString(message.lat)) { return 'lat: string expected' }
      }
      if (message.lng != null && message.hasOwnProperty('lng')) {
        if (!$util.isString(message.lng)) { return 'lng: string expected' }
      }
      return null
    }

    /**
         * Creates an ActiveShopModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbactiveShop.ActiveShopModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbactiveShop.ActiveShopModel} ActiveShopModel
         */
    ActiveShopModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbactiveShop.ActiveShopModel) { return object }
      var message = new $root.pbactiveShop.ActiveShopModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.shopId != null) {
        if ($util.Long) { (message.shopId = $util.Long.fromValue(object.shopId)).unsigned = false } else if (typeof object.shopId === 'string') { message.shopId = parseInt(object.shopId, 10) } else if (typeof object.shopId === 'number') { message.shopId = object.shopId } else if (typeof object.shopId === 'object') { message.shopId = new $util.LongBits(object.shopId.low >>> 0, object.shopId.high >>> 0).toNumber() }
      }
      if (object.shopName != null) { message.shopName = String(object.shopName) }
      if (object.shopLogo != null) { message.shopLogo = String(object.shopLogo) }
      if (object.videoUrl != null) { message.videoUrl = String(object.videoUrl) }
      if (object.description != null) { message.description = String(object.description) }
      if (object.address != null) { message.address = String(object.address) }
      if (object.phone != null) { message.phone = String(object.phone) }
      if (object.tags != null) { message.tags = String(object.tags) }
      if (object.openTime != null) { message.openTime = String(object.openTime) }
      if (object.closeTime != null) { message.closeTime = String(object.closeTime) }
      if (object.status != null) { message.status = object.status | 0 }
      if (object.sort != null) { message.sort = object.sort | 0 }
      if (object.lat != null) { message.lat = String(object.lat) }
      if (object.lng != null) { message.lng = String(object.lng) }
      return message
    }

    /**
         * Creates a plain object from an ActiveShopModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbactiveShop.ActiveShopModel
         * @static
         * @param {pbactiveShop.ActiveShopModel} message ActiveShopModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    ActiveShopModel.toObject = function toObject(message, options) {
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
          object.shopId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.shopId = options.longs === String ? '0' : 0 }
        object.shopName = ''
        object.shopLogo = ''
        object.videoUrl = ''
        object.description = ''
        object.address = ''
        object.phone = ''
        object.tags = ''
        object.openTime = ''
        object.closeTime = ''
        object.status = 0
        object.sort = 0
        object.lat = ''
        object.lng = ''
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.shopId != null && message.hasOwnProperty('shopId')) {
        if (typeof message.shopId === 'number') { object.shopId = options.longs === String ? String(message.shopId) : message.shopId } else { object.shopId = options.longs === String ? $util.Long.prototype.toString.call(message.shopId) : options.longs === Number ? new $util.LongBits(message.shopId.low >>> 0, message.shopId.high >>> 0).toNumber() : message.shopId }
      }
      if (message.shopName != null && message.hasOwnProperty('shopName')) { object.shopName = message.shopName }
      if (message.shopLogo != null && message.hasOwnProperty('shopLogo')) { object.shopLogo = message.shopLogo }
      if (message.videoUrl != null && message.hasOwnProperty('videoUrl')) { object.videoUrl = message.videoUrl }
      if (message.description != null && message.hasOwnProperty('description')) { object.description = message.description }
      if (message.address != null && message.hasOwnProperty('address')) { object.address = message.address }
      if (message.phone != null && message.hasOwnProperty('phone')) { object.phone = message.phone }
      if (message.tags != null && message.hasOwnProperty('tags')) { object.tags = message.tags }
      if (message.openTime != null && message.hasOwnProperty('openTime')) { object.openTime = message.openTime }
      if (message.closeTime != null && message.hasOwnProperty('closeTime')) { object.closeTime = message.closeTime }
      if (message.status != null && message.hasOwnProperty('status')) { object.status = message.status }
      if (message.sort != null && message.hasOwnProperty('sort')) { object.sort = message.sort }
      if (message.lat != null && message.hasOwnProperty('lat')) { object.lat = message.lat }
      if (message.lng != null && message.hasOwnProperty('lng')) { object.lng = message.lng }
      return object
    }

    /**
         * Converts this ActiveShopModel to JSON.
         * @function toJSON
         * @memberof pbactiveShop.ActiveShopModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    ActiveShopModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for ActiveShopModel
         * @function getTypeUrl
         * @memberof pbactiveShop.ActiveShopModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    ActiveShopModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbactiveShop.ActiveShopModel'
    }

    return ActiveShopModel
  })()

  pbactiveShop.FindActiveShopArgs = (function() {
    /**
         * Properties of a FindActiveShopArgs.
         * @memberof pbactiveShop
         * @interface IFindActiveShopArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindActiveShopArgs pageInfo
         * @property {pbactiveShop.IActiveShopModel|null} [query] FindActiveShopArgs query
         */

    /**
         * Constructs a new FindActiveShopArgs.
         * @memberof pbactiveShop
         * @classdesc Represents a FindActiveShopArgs.
         * @implements IFindActiveShopArgs
         * @constructor
         * @param {pbactiveShop.IFindActiveShopArgs=} [properties] Properties to set
         */
    function FindActiveShopArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindActiveShopArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbactiveShop.FindActiveShopArgs
         * @instance
         */
    FindActiveShopArgs.prototype.pageInfo = null

    /**
         * FindActiveShopArgs query.
         * @member {pbactiveShop.IActiveShopModel|null|undefined} query
         * @memberof pbactiveShop.FindActiveShopArgs
         * @instance
         */
    FindActiveShopArgs.prototype.query = null

    /**
         * Creates a new FindActiveShopArgs instance using the specified properties.
         * @function create
         * @memberof pbactiveShop.FindActiveShopArgs
         * @static
         * @param {pbactiveShop.IFindActiveShopArgs=} [properties] Properties to set
         * @returns {pbactiveShop.FindActiveShopArgs} FindActiveShopArgs instance
         */
    FindActiveShopArgs.create = function create(properties) {
      return new FindActiveShopArgs(properties)
    }

    /**
         * Encodes the specified FindActiveShopArgs message. Does not implicitly {@link pbactiveShop.FindActiveShopArgs.verify|verify} messages.
         * @function encode
         * @memberof pbactiveShop.FindActiveShopArgs
         * @static
         * @param {pbactiveShop.IFindActiveShopArgs} message FindActiveShopArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindActiveShopArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbactiveShop.ActiveShopModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
         * Encodes the specified FindActiveShopArgs message, length delimited. Does not implicitly {@link pbactiveShop.FindActiveShopArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbactiveShop.FindActiveShopArgs
         * @static
         * @param {pbactiveShop.IFindActiveShopArgs} message FindActiveShopArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindActiveShopArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindActiveShopArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbactiveShop.FindActiveShopArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbactiveShop.FindActiveShopArgs} FindActiveShopArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindActiveShopArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbactiveShop.FindActiveShopArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          }
          case 2: {
            message.query = $root.pbactiveShop.ActiveShopModel.decode(reader, reader.uint32())
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
         * Decodes a FindActiveShopArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbactiveShop.FindActiveShopArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbactiveShop.FindActiveShopArgs} FindActiveShopArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindActiveShopArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindActiveShopArgs message.
         * @function verify
         * @memberof pbactiveShop.FindActiveShopArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindActiveShopArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbactiveShop.ActiveShopModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
         * Creates a FindActiveShopArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbactiveShop.FindActiveShopArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbactiveShop.FindActiveShopArgs} FindActiveShopArgs
         */
    FindActiveShopArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbactiveShop.FindActiveShopArgs) { return object }
      var message = new $root.pbactiveShop.FindActiveShopArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbactiveShop.FindActiveShopArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbactiveShop.FindActiveShopArgs.query: object expected') }
        message.query = $root.pbactiveShop.ActiveShopModel.fromObject(object.query)
      }
      return message
    }

    /**
         * Creates a plain object from a FindActiveShopArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbactiveShop.FindActiveShopArgs
         * @static
         * @param {pbactiveShop.FindActiveShopArgs} message FindActiveShopArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindActiveShopArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbactiveShop.ActiveShopModel.toObject(message.query, options) }
      return object
    }

    /**
         * Converts this FindActiveShopArgs to JSON.
         * @function toJSON
         * @memberof pbactiveShop.FindActiveShopArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindActiveShopArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindActiveShopArgs
         * @function getTypeUrl
         * @memberof pbactiveShop.FindActiveShopArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindActiveShopArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbactiveShop.FindActiveShopArgs'
    }

    return FindActiveShopArgs
  })()

  pbactiveShop.FindActiveShopReply = (function() {
    /**
         * Properties of a FindActiveShopReply.
         * @memberof pbactiveShop
         * @interface IFindActiveShopReply
         * @property {pbcommon.EnumCode|null} [code] FindActiveShopReply code
         * @property {string|null} [msg] FindActiveShopReply msg
         * @property {pbactiveShop.IActiveShopModel|null} [data] FindActiveShopReply data
         * @property {Array.<pbactiveShop.IActiveShopModel>|null} [list] FindActiveShopReply list
         * @property {number|Long|null} [total] FindActiveShopReply total
         */

    /**
         * Constructs a new FindActiveShopReply.
         * @memberof pbactiveShop
         * @classdesc Represents a FindActiveShopReply.
         * @implements IFindActiveShopReply
         * @constructor
         * @param {pbactiveShop.IFindActiveShopReply=} [properties] Properties to set
         */
    function FindActiveShopReply(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindActiveShopReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbactiveShop.FindActiveShopReply
         * @instance
         */
    FindActiveShopReply.prototype.code = 0

    /**
         * FindActiveShopReply msg.
         * @member {string} msg
         * @memberof pbactiveShop.FindActiveShopReply
         * @instance
         */
    FindActiveShopReply.prototype.msg = ''

    /**
         * FindActiveShopReply data.
         * @member {pbactiveShop.IActiveShopModel|null|undefined} data
         * @memberof pbactiveShop.FindActiveShopReply
         * @instance
         */
    FindActiveShopReply.prototype.data = null

    /**
         * FindActiveShopReply list.
         * @member {Array.<pbactiveShop.IActiveShopModel>} list
         * @memberof pbactiveShop.FindActiveShopReply
         * @instance
         */
    FindActiveShopReply.prototype.list = $util.emptyArray

    /**
         * FindActiveShopReply total.
         * @member {number|Long} total
         * @memberof pbactiveShop.FindActiveShopReply
         * @instance
         */
    FindActiveShopReply.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * Creates a new FindActiveShopReply instance using the specified properties.
         * @function create
         * @memberof pbactiveShop.FindActiveShopReply
         * @static
         * @param {pbactiveShop.IFindActiveShopReply=} [properties] Properties to set
         * @returns {pbactiveShop.FindActiveShopReply} FindActiveShopReply instance
         */
    FindActiveShopReply.create = function create(properties) {
      return new FindActiveShopReply(properties)
    }

    /**
         * Encodes the specified FindActiveShopReply message. Does not implicitly {@link pbactiveShop.FindActiveShopReply.verify|verify} messages.
         * @function encode
         * @memberof pbactiveShop.FindActiveShopReply
         * @static
         * @param {pbactiveShop.IFindActiveShopReply} message FindActiveShopReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindActiveShopReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbactiveShop.ActiveShopModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbactiveShop.ActiveShopModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      return writer
    }

    /**
         * Encodes the specified FindActiveShopReply message, length delimited. Does not implicitly {@link pbactiveShop.FindActiveShopReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbactiveShop.FindActiveShopReply
         * @static
         * @param {pbactiveShop.IFindActiveShopReply} message FindActiveShopReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindActiveShopReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindActiveShopReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbactiveShop.FindActiveShopReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbactiveShop.FindActiveShopReply} FindActiveShopReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindActiveShopReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbactiveShop.FindActiveShopReply()
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
            message.data = $root.pbactiveShop.ActiveShopModel.decode(reader, reader.uint32())
            break
          }
          case 4: {
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbactiveShop.ActiveShopModel.decode(reader, reader.uint32()))
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
         * Decodes a FindActiveShopReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbactiveShop.FindActiveShopReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbactiveShop.FindActiveShopReply} FindActiveShopReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindActiveShopReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindActiveShopReply message.
         * @function verify
         * @memberof pbactiveShop.FindActiveShopReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindActiveShopReply.verify = function verify(message) {
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
        var error = $root.pbactiveShop.ActiveShopModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbactiveShop.ActiveShopModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      return null
    }

    /**
         * Creates a FindActiveShopReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbactiveShop.FindActiveShopReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbactiveShop.FindActiveShopReply} FindActiveShopReply
         */
    FindActiveShopReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbactiveShop.FindActiveShopReply) { return object }
      var message = new $root.pbactiveShop.FindActiveShopReply()
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
        if (typeof object.data !== 'object') { throw TypeError('.pbactiveShop.FindActiveShopReply.data: object expected') }
        message.data = $root.pbactiveShop.ActiveShopModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbactiveShop.FindActiveShopReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbactiveShop.FindActiveShopReply.list: object expected') }
          message.list[i] = $root.pbactiveShop.ActiveShopModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      return message
    }

    /**
         * Creates a plain object from a FindActiveShopReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbactiveShop.FindActiveShopReply
         * @static
         * @param {pbactiveShop.FindActiveShopReply} message FindActiveShopReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindActiveShopReply.toObject = function toObject(message, options) {
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
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbactiveShop.ActiveShopModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbactiveShop.ActiveShopModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      return object
    }

    /**
         * Converts this FindActiveShopReply to JSON.
         * @function toJSON
         * @memberof pbactiveShop.FindActiveShopReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindActiveShopReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindActiveShopReply
         * @function getTypeUrl
         * @memberof pbactiveShop.FindActiveShopReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindActiveShopReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbactiveShop.FindActiveShopReply'
    }

    return FindActiveShopReply
  })()

  pbactiveShop.ActiveShop = (function() {
    /**
         * Constructs a new ActiveShop service.
         * @memberof pbactiveShop
         * @classdesc Represents an ActiveShop
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function ActiveShop(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (ActiveShop.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ActiveShop

    /**
         * Creates new ActiveShop service using the specified rpc implementation.
         * @function create
         * @memberof pbactiveShop.ActiveShop
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ActiveShop} RPC service. Useful where requests and/or responses are streamed.
         */
    ActiveShop.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link pbactiveShop.ActiveShop#createActiveShop}.
         * @memberof pbactiveShop.ActiveShop
         * @typedef CreateActiveShopCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls CreateActiveShop.
         * @function createActiveShop
         * @memberof pbactiveShop.ActiveShop
         * @instance
         * @param {pbactiveShop.IActiveShopModel} request ActiveShopModel message or plain object
         * @param {pbactiveShop.ActiveShop.CreateActiveShopCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(ActiveShop.prototype.createActiveShop = function createActiveShop(request, callback) {
      return this.rpcCall(createActiveShop, $root.pbactiveShop.ActiveShopModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreateActiveShop' })

    /**
         * Calls CreateActiveShop.
         * @function createActiveShop
         * @memberof pbactiveShop.ActiveShop
         * @instance
         * @param {pbactiveShop.IActiveShopModel} request ActiveShopModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbactiveShop.ActiveShop#updateActiveShop}.
         * @memberof pbactiveShop.ActiveShop
         * @typedef UpdateActiveShopCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls UpdateActiveShop.
         * @function updateActiveShop
         * @memberof pbactiveShop.ActiveShop
         * @instance
         * @param {pbactiveShop.IActiveShopModel} request ActiveShopModel message or plain object
         * @param {pbactiveShop.ActiveShop.UpdateActiveShopCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(ActiveShop.prototype.updateActiveShop = function updateActiveShop(request, callback) {
      return this.rpcCall(updateActiveShop, $root.pbactiveShop.ActiveShopModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdateActiveShop' })

    /**
         * Calls UpdateActiveShop.
         * @function updateActiveShop
         * @memberof pbactiveShop.ActiveShop
         * @instance
         * @param {pbactiveShop.IActiveShopModel} request ActiveShopModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbactiveShop.ActiveShop#deleteActiveShop}.
         * @memberof pbactiveShop.ActiveShop
         * @typedef DeleteActiveShopCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls DeleteActiveShop.
         * @function deleteActiveShop
         * @memberof pbactiveShop.ActiveShop
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbactiveShop.ActiveShop.DeleteActiveShopCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(ActiveShop.prototype.deleteActiveShop = function deleteActiveShop(request, callback) {
      return this.rpcCall(deleteActiveShop, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeleteActiveShop' })

    /**
         * Calls DeleteActiveShop.
         * @function deleteActiveShop
         * @memberof pbactiveShop.ActiveShop
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbactiveShop.ActiveShop#findActiveShopById}.
         * @memberof pbactiveShop.ActiveShop
         * @typedef FindActiveShopByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbactiveShop.FindActiveShopReply} [response] FindActiveShopReply
         */

    /**
         * Calls FindActiveShopById.
         * @function findActiveShopById
         * @memberof pbactiveShop.ActiveShop
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbactiveShop.ActiveShop.FindActiveShopByIdCallback} callback Node-style callback called with the error, if any, and FindActiveShopReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(ActiveShop.prototype.findActiveShopById = function findActiveShopById(request, callback) {
      return this.rpcCall(findActiveShopById, $root.pbcommon.IdArgs, $root.pbactiveShop.FindActiveShopReply, request, callback)
    }, 'name', { value: 'FindActiveShopById' })

    /**
         * Calls FindActiveShopById.
         * @function findActiveShopById
         * @memberof pbactiveShop.ActiveShop
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbactiveShop.FindActiveShopReply>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbactiveShop.ActiveShop#findActiveShopList}.
         * @memberof pbactiveShop.ActiveShop
         * @typedef FindActiveShopListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbactiveShop.FindActiveShopReply} [response] FindActiveShopReply
         */

    /**
         * Calls FindActiveShopList.
         * @function findActiveShopList
         * @memberof pbactiveShop.ActiveShop
         * @instance
         * @param {pbactiveShop.IFindActiveShopArgs} request FindActiveShopArgs message or plain object
         * @param {pbactiveShop.ActiveShop.FindActiveShopListCallback} callback Node-style callback called with the error, if any, and FindActiveShopReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(ActiveShop.prototype.findActiveShopList = function findActiveShopList(request, callback) {
      return this.rpcCall(findActiveShopList, $root.pbactiveShop.FindActiveShopArgs, $root.pbactiveShop.FindActiveShopReply, request, callback)
    }, 'name', { value: 'FindActiveShopList' })

    /**
         * Calls FindActiveShopList.
         * @function findActiveShopList
         * @memberof pbactiveShop.ActiveShop
         * @instance
         * @param {pbactiveShop.IFindActiveShopArgs} request FindActiveShopArgs message or plain object
         * @returns {Promise<pbactiveShop.FindActiveShopReply>} Promise
         * @variation 2
         */

    return ActiveShop
  })()

  return pbactiveShop
})()

$root.pbgoods = (function() {
  /**
     * Namespace pbgoods.
     * @exports pbgoods
     * @namespace
     */
  var pbgoods = {}

  pbgoods.GoodsModel = (function() {
    /**
         * Properties of a GoodsModel.
         * @memberof pbgoods
         * @interface IGoodsModel
         * @property {number|Long|null} [id] GoodsModel id
         * @property {string|null} [createdAt] GoodsModel createdAt
         * @property {string|null} [updatedAt] GoodsModel updatedAt
         * @property {string|null} [goodsName] GoodsModel goodsName
         * @property {string|null} [goodsNo] GoodsModel goodsNo
         * @property {number|Long|null} [videoId] GoodsModel videoId
         * @property {number|Long|null} [videoCoverId] GoodsModel videoCoverId
         * @property {string|null} [sellingPoint] GoodsModel sellingPoint
         * @property {pbgoods.SpecType|null} [specType] GoodsModel specType
         * @property {number|null} [goodsPriceMin] GoodsModel goodsPriceMin
         * @property {number|null} [goodsPriceMax] GoodsModel goodsPriceMax
         * @property {number|null} [linePriceMin] GoodsModel linePriceMin
         * @property {number|null} [linePriceMax] GoodsModel linePriceMax
         * @property {number|null} [stockTotal] GoodsModel stockTotal
         * @property {pbgoods.DeductStockType|null} [deductStockType] GoodsModel deductStockType
         * @property {string|null} [content] GoodsModel content
         * @property {number|Long|null} [salesInitial] GoodsModel salesInitial
         * @property {number|Long|null} [salesActual] GoodsModel salesActual
         * @property {number|Long|null} [deliveryId] GoodsModel deliveryId
         * @property {number|null} [isPointsGift] GoodsModel isPointsGift
         * @property {number|null} [isPointsDiscount] GoodsModel isPointsDiscount
         * @property {number|null} [isOnSiteService] GoodsModel isOnSiteService
         * @property {number|null} [isRecommend] GoodsModel isRecommend
         * @property {number|null} [isNew] GoodsModel isNew
         * @property {number|null} [isHot] GoodsModel isHot
         * @property {pbgoods.GoodsStatusType|null} [status] GoodsModel status
         * @property {number|null} [sort] GoodsModel sort
         * @property {number|Long|null} [shopId] GoodsModel shopId
         */

    /**
         * Constructs a new GoodsModel.
         * @memberof pbgoods
         * @classdesc Represents a GoodsModel.
         * @implements IGoodsModel
         * @constructor
         * @param {pbgoods.IGoodsModel=} [properties] Properties to set
         */
    function GoodsModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * GoodsModel id.
         * @member {number|Long} id
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * GoodsModel createdAt.
         * @member {string} createdAt
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.createdAt = ''

    /**
         * GoodsModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.updatedAt = ''

    /**
         * GoodsModel goodsName.
         * @member {string} goodsName
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.goodsName = ''

    /**
         * GoodsModel goodsNo.
         * @member {string} goodsNo
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.goodsNo = ''

    /**
         * GoodsModel videoId.
         * @member {number|Long} videoId
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.videoId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * GoodsModel videoCoverId.
         * @member {number|Long} videoCoverId
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.videoCoverId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * GoodsModel sellingPoint.
         * @member {string} sellingPoint
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.sellingPoint = ''

    /**
         * GoodsModel specType.
         * @member {pbgoods.SpecType} specType
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.specType = 0

    /**
         * GoodsModel goodsPriceMin.
         * @member {number} goodsPriceMin
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.goodsPriceMin = 0

    /**
         * GoodsModel goodsPriceMax.
         * @member {number} goodsPriceMax
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.goodsPriceMax = 0

    /**
         * GoodsModel linePriceMin.
         * @member {number} linePriceMin
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.linePriceMin = 0

    /**
         * GoodsModel linePriceMax.
         * @member {number} linePriceMax
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.linePriceMax = 0

    /**
         * GoodsModel stockTotal.
         * @member {number} stockTotal
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.stockTotal = 0

    /**
         * GoodsModel deductStockType.
         * @member {pbgoods.DeductStockType} deductStockType
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.deductStockType = 0

    /**
         * GoodsModel content.
         * @member {string} content
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.content = ''

    /**
         * GoodsModel salesInitial.
         * @member {number|Long} salesInitial
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.salesInitial = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * GoodsModel salesActual.
         * @member {number|Long} salesActual
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.salesActual = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * GoodsModel deliveryId.
         * @member {number|Long} deliveryId
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.deliveryId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * GoodsModel isPointsGift.
         * @member {number} isPointsGift
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.isPointsGift = 0

    /**
         * GoodsModel isPointsDiscount.
         * @member {number} isPointsDiscount
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.isPointsDiscount = 0

    /**
         * GoodsModel isOnSiteService.
         * @member {number} isOnSiteService
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.isOnSiteService = 0

    /**
         * GoodsModel isRecommend.
         * @member {number} isRecommend
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.isRecommend = 0

    /**
         * GoodsModel isNew.
         * @member {number} isNew
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.isNew = 0

    /**
         * GoodsModel isHot.
         * @member {number} isHot
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.isHot = 0

    /**
         * GoodsModel status.
         * @member {pbgoods.GoodsStatusType} status
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.status = 0

    /**
         * GoodsModel sort.
         * @member {number} sort
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.sort = 0

    /**
         * GoodsModel shopId.
         * @member {number|Long} shopId
         * @memberof pbgoods.GoodsModel
         * @instance
         */
    GoodsModel.prototype.shopId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * Creates a new GoodsModel instance using the specified properties.
         * @function create
         * @memberof pbgoods.GoodsModel
         * @static
         * @param {pbgoods.IGoodsModel=} [properties] Properties to set
         * @returns {pbgoods.GoodsModel} GoodsModel instance
         */
    GoodsModel.create = function create(properties) {
      return new GoodsModel(properties)
    }

    /**
         * Encodes the specified GoodsModel message. Does not implicitly {@link pbgoods.GoodsModel.verify|verify} messages.
         * @function encode
         * @memberof pbgoods.GoodsModel
         * @static
         * @param {pbgoods.IGoodsModel} message GoodsModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    GoodsModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.goodsName != null && Object.hasOwnProperty.call(message, 'goodsName')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.goodsName) }
      if (message.goodsNo != null && Object.hasOwnProperty.call(message, 'goodsNo')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.goodsNo) }
      if (message.videoId != null && Object.hasOwnProperty.call(message, 'videoId')) { writer.uint32(/* id 6, wireType 0 =*/48).int64(message.videoId) }
      if (message.videoCoverId != null && Object.hasOwnProperty.call(message, 'videoCoverId')) { writer.uint32(/* id 7, wireType 0 =*/56).int64(message.videoCoverId) }
      if (message.sellingPoint != null && Object.hasOwnProperty.call(message, 'sellingPoint')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.sellingPoint) }
      if (message.specType != null && Object.hasOwnProperty.call(message, 'specType')) { writer.uint32(/* id 9, wireType 0 =*/72).int32(message.specType) }
      if (message.goodsPriceMin != null && Object.hasOwnProperty.call(message, 'goodsPriceMin')) { writer.uint32(/* id 10, wireType 0 =*/80).int32(message.goodsPriceMin) }
      if (message.goodsPriceMax != null && Object.hasOwnProperty.call(message, 'goodsPriceMax')) { writer.uint32(/* id 11, wireType 0 =*/88).int32(message.goodsPriceMax) }
      if (message.linePriceMin != null && Object.hasOwnProperty.call(message, 'linePriceMin')) { writer.uint32(/* id 12, wireType 0 =*/96).int32(message.linePriceMin) }
      if (message.linePriceMax != null && Object.hasOwnProperty.call(message, 'linePriceMax')) { writer.uint32(/* id 13, wireType 0 =*/104).int32(message.linePriceMax) }
      if (message.stockTotal != null && Object.hasOwnProperty.call(message, 'stockTotal')) { writer.uint32(/* id 14, wireType 0 =*/112).int32(message.stockTotal) }
      if (message.deductStockType != null && Object.hasOwnProperty.call(message, 'deductStockType')) { writer.uint32(/* id 15, wireType 0 =*/120).int32(message.deductStockType) }
      if (message.content != null && Object.hasOwnProperty.call(message, 'content')) { writer.uint32(/* id 16, wireType 2 =*/130).string(message.content) }
      if (message.salesInitial != null && Object.hasOwnProperty.call(message, 'salesInitial')) { writer.uint32(/* id 17, wireType 0 =*/136).int64(message.salesInitial) }
      if (message.salesActual != null && Object.hasOwnProperty.call(message, 'salesActual')) { writer.uint32(/* id 18, wireType 0 =*/144).int64(message.salesActual) }
      if (message.deliveryId != null && Object.hasOwnProperty.call(message, 'deliveryId')) { writer.uint32(/* id 19, wireType 0 =*/152).int64(message.deliveryId) }
      if (message.isPointsGift != null && Object.hasOwnProperty.call(message, 'isPointsGift')) { writer.uint32(/* id 20, wireType 0 =*/160).int32(message.isPointsGift) }
      if (message.isPointsDiscount != null && Object.hasOwnProperty.call(message, 'isPointsDiscount')) { writer.uint32(/* id 21, wireType 0 =*/168).int32(message.isPointsDiscount) }
      if (message.isOnSiteService != null && Object.hasOwnProperty.call(message, 'isOnSiteService')) { writer.uint32(/* id 22, wireType 0 =*/176).int32(message.isOnSiteService) }
      if (message.isRecommend != null && Object.hasOwnProperty.call(message, 'isRecommend')) { writer.uint32(/* id 23, wireType 0 =*/184).int32(message.isRecommend) }
      if (message.isNew != null && Object.hasOwnProperty.call(message, 'isNew')) { writer.uint32(/* id 24, wireType 0 =*/192).int32(message.isNew) }
      if (message.isHot != null && Object.hasOwnProperty.call(message, 'isHot')) { writer.uint32(/* id 25, wireType 0 =*/200).int32(message.isHot) }
      if (message.status != null && Object.hasOwnProperty.call(message, 'status')) { writer.uint32(/* id 26, wireType 0 =*/208).int32(message.status) }
      if (message.sort != null && Object.hasOwnProperty.call(message, 'sort')) { writer.uint32(/* id 27, wireType 0 =*/216).int32(message.sort) }
      if (message.shopId != null && Object.hasOwnProperty.call(message, 'shopId')) { writer.uint32(/* id 28, wireType 0 =*/224).int64(message.shopId) }
      return writer
    }

    /**
         * Encodes the specified GoodsModel message, length delimited. Does not implicitly {@link pbgoods.GoodsModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbgoods.GoodsModel
         * @static
         * @param {pbgoods.IGoodsModel} message GoodsModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    GoodsModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a GoodsModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbgoods.GoodsModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbgoods.GoodsModel} GoodsModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    GoodsModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbgoods.GoodsModel()
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
            message.goodsName = reader.string()
            break
          }
          case 5: {
            message.goodsNo = reader.string()
            break
          }
          case 6: {
            message.videoId = reader.int64()
            break
          }
          case 7: {
            message.videoCoverId = reader.int64()
            break
          }
          case 8: {
            message.sellingPoint = reader.string()
            break
          }
          case 9: {
            message.specType = reader.int32()
            break
          }
          case 10: {
            message.goodsPriceMin = reader.int32()
            break
          }
          case 11: {
            message.goodsPriceMax = reader.int32()
            break
          }
          case 12: {
            message.linePriceMin = reader.int32()
            break
          }
          case 13: {
            message.linePriceMax = reader.int32()
            break
          }
          case 14: {
            message.stockTotal = reader.int32()
            break
          }
          case 15: {
            message.deductStockType = reader.int32()
            break
          }
          case 16: {
            message.content = reader.string()
            break
          }
          case 17: {
            message.salesInitial = reader.int64()
            break
          }
          case 18: {
            message.salesActual = reader.int64()
            break
          }
          case 19: {
            message.deliveryId = reader.int64()
            break
          }
          case 20: {
            message.isPointsGift = reader.int32()
            break
          }
          case 21: {
            message.isPointsDiscount = reader.int32()
            break
          }
          case 22: {
            message.isOnSiteService = reader.int32()
            break
          }
          case 23: {
            message.isRecommend = reader.int32()
            break
          }
          case 24: {
            message.isNew = reader.int32()
            break
          }
          case 25: {
            message.isHot = reader.int32()
            break
          }
          case 26: {
            message.status = reader.int32()
            break
          }
          case 27: {
            message.sort = reader.int32()
            break
          }
          case 28: {
            message.shopId = reader.int64()
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
         * Decodes a GoodsModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbgoods.GoodsModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbgoods.GoodsModel} GoodsModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    GoodsModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a GoodsModel message.
         * @function verify
         * @memberof pbgoods.GoodsModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    GoodsModel.verify = function verify(message) {
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
      if (message.goodsName != null && message.hasOwnProperty('goodsName')) {
        if (!$util.isString(message.goodsName)) { return 'goodsName: string expected' }
      }
      if (message.goodsNo != null && message.hasOwnProperty('goodsNo')) {
        if (!$util.isString(message.goodsNo)) { return 'goodsNo: string expected' }
      }
      if (message.videoId != null && message.hasOwnProperty('videoId')) {
        if (!$util.isInteger(message.videoId) && !(message.videoId && $util.isInteger(message.videoId.low) && $util.isInteger(message.videoId.high))) { return 'videoId: integer|Long expected' }
      }
      if (message.videoCoverId != null && message.hasOwnProperty('videoCoverId')) {
        if (!$util.isInteger(message.videoCoverId) && !(message.videoCoverId && $util.isInteger(message.videoCoverId.low) && $util.isInteger(message.videoCoverId.high))) { return 'videoCoverId: integer|Long expected' }
      }
      if (message.sellingPoint != null && message.hasOwnProperty('sellingPoint')) {
        if (!$util.isString(message.sellingPoint)) { return 'sellingPoint: string expected' }
      }
      if (message.specType != null && message.hasOwnProperty('specType')) {
        switch (message.specType) {
          default:
            return 'specType: enum value expected'
          case 0:
          case 1:
          case 2:
            break
        }
      }
      if (message.goodsPriceMin != null && message.hasOwnProperty('goodsPriceMin')) {
        if (!$util.isInteger(message.goodsPriceMin)) { return 'goodsPriceMin: integer expected' }
      }
      if (message.goodsPriceMax != null && message.hasOwnProperty('goodsPriceMax')) {
        if (!$util.isInteger(message.goodsPriceMax)) { return 'goodsPriceMax: integer expected' }
      }
      if (message.linePriceMin != null && message.hasOwnProperty('linePriceMin')) {
        if (!$util.isInteger(message.linePriceMin)) { return 'linePriceMin: integer expected' }
      }
      if (message.linePriceMax != null && message.hasOwnProperty('linePriceMax')) {
        if (!$util.isInteger(message.linePriceMax)) { return 'linePriceMax: integer expected' }
      }
      if (message.stockTotal != null && message.hasOwnProperty('stockTotal')) {
        if (!$util.isInteger(message.stockTotal)) { return 'stockTotal: integer expected' }
      }
      if (message.deductStockType != null && message.hasOwnProperty('deductStockType')) {
        switch (message.deductStockType) {
          default:
            return 'deductStockType: enum value expected'
          case 0:
          case 1:
          case 2:
            break
        }
      }
      if (message.content != null && message.hasOwnProperty('content')) {
        if (!$util.isString(message.content)) { return 'content: string expected' }
      }
      if (message.salesInitial != null && message.hasOwnProperty('salesInitial')) {
        if (!$util.isInteger(message.salesInitial) && !(message.salesInitial && $util.isInteger(message.salesInitial.low) && $util.isInteger(message.salesInitial.high))) { return 'salesInitial: integer|Long expected' }
      }
      if (message.salesActual != null && message.hasOwnProperty('salesActual')) {
        if (!$util.isInteger(message.salesActual) && !(message.salesActual && $util.isInteger(message.salesActual.low) && $util.isInteger(message.salesActual.high))) { return 'salesActual: integer|Long expected' }
      }
      if (message.deliveryId != null && message.hasOwnProperty('deliveryId')) {
        if (!$util.isInteger(message.deliveryId) && !(message.deliveryId && $util.isInteger(message.deliveryId.low) && $util.isInteger(message.deliveryId.high))) { return 'deliveryId: integer|Long expected' }
      }
      if (message.isPointsGift != null && message.hasOwnProperty('isPointsGift')) {
        if (!$util.isInteger(message.isPointsGift)) { return 'isPointsGift: integer expected' }
      }
      if (message.isPointsDiscount != null && message.hasOwnProperty('isPointsDiscount')) {
        if (!$util.isInteger(message.isPointsDiscount)) { return 'isPointsDiscount: integer expected' }
      }
      if (message.isOnSiteService != null && message.hasOwnProperty('isOnSiteService')) {
        if (!$util.isInteger(message.isOnSiteService)) { return 'isOnSiteService: integer expected' }
      }
      if (message.isRecommend != null && message.hasOwnProperty('isRecommend')) {
        if (!$util.isInteger(message.isRecommend)) { return 'isRecommend: integer expected' }
      }
      if (message.isNew != null && message.hasOwnProperty('isNew')) {
        if (!$util.isInteger(message.isNew)) { return 'isNew: integer expected' }
      }
      if (message.isHot != null && message.hasOwnProperty('isHot')) {
        if (!$util.isInteger(message.isHot)) { return 'isHot: integer expected' }
      }
      if (message.status != null && message.hasOwnProperty('status')) {
        switch (message.status) {
          default:
            return 'status: enum value expected'
          case 0:
          case 1:
          case 2:
            break
        }
      }
      if (message.sort != null && message.hasOwnProperty('sort')) {
        if (!$util.isInteger(message.sort)) { return 'sort: integer expected' }
      }
      if (message.shopId != null && message.hasOwnProperty('shopId')) {
        if (!$util.isInteger(message.shopId) && !(message.shopId && $util.isInteger(message.shopId.low) && $util.isInteger(message.shopId.high))) { return 'shopId: integer|Long expected' }
      }
      return null
    }

    /**
         * Creates a GoodsModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbgoods.GoodsModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbgoods.GoodsModel} GoodsModel
         */
    GoodsModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbgoods.GoodsModel) { return object }
      var message = new $root.pbgoods.GoodsModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.goodsName != null) { message.goodsName = String(object.goodsName) }
      if (object.goodsNo != null) { message.goodsNo = String(object.goodsNo) }
      if (object.videoId != null) {
        if ($util.Long) { (message.videoId = $util.Long.fromValue(object.videoId)).unsigned = false } else if (typeof object.videoId === 'string') { message.videoId = parseInt(object.videoId, 10) } else if (typeof object.videoId === 'number') { message.videoId = object.videoId } else if (typeof object.videoId === 'object') { message.videoId = new $util.LongBits(object.videoId.low >>> 0, object.videoId.high >>> 0).toNumber() }
      }
      if (object.videoCoverId != null) {
        if ($util.Long) { (message.videoCoverId = $util.Long.fromValue(object.videoCoverId)).unsigned = false } else if (typeof object.videoCoverId === 'string') { message.videoCoverId = parseInt(object.videoCoverId, 10) } else if (typeof object.videoCoverId === 'number') { message.videoCoverId = object.videoCoverId } else if (typeof object.videoCoverId === 'object') { message.videoCoverId = new $util.LongBits(object.videoCoverId.low >>> 0, object.videoCoverId.high >>> 0).toNumber() }
      }
      if (object.sellingPoint != null) { message.sellingPoint = String(object.sellingPoint) }
      switch (object.specType) {
        default:
          if (typeof object.specType === 'number') {
            message.specType = object.specType
            break
          }
          break
        case 'SpecTypeUnknown':
        case 0:
          message.specType = 0
          break
        case 'Singleton':
        case 1:
          message.specType = 1
          break
        case 'Multiple':
        case 2:
          message.specType = 2
          break
      }
      if (object.goodsPriceMin != null) { message.goodsPriceMin = object.goodsPriceMin | 0 }
      if (object.goodsPriceMax != null) { message.goodsPriceMax = object.goodsPriceMax | 0 }
      if (object.linePriceMin != null) { message.linePriceMin = object.linePriceMin | 0 }
      if (object.linePriceMax != null) { message.linePriceMax = object.linePriceMax | 0 }
      if (object.stockTotal != null) { message.stockTotal = object.stockTotal | 0 }
      switch (object.deductStockType) {
        default:
          if (typeof object.deductStockType === 'number') {
            message.deductStockType = object.deductStockType
            break
          }
          break
        case 'DeductStockTypeUnknown':
        case 0:
          message.deductStockType = 0
          break
        case 'OrderDeductStock':
        case 1:
          message.deductStockType = 1
          break
        case 'PayDeductStock':
        case 2:
          message.deductStockType = 2
          break
      }
      if (object.content != null) { message.content = String(object.content) }
      if (object.salesInitial != null) {
        if ($util.Long) { (message.salesInitial = $util.Long.fromValue(object.salesInitial)).unsigned = false } else if (typeof object.salesInitial === 'string') { message.salesInitial = parseInt(object.salesInitial, 10) } else if (typeof object.salesInitial === 'number') { message.salesInitial = object.salesInitial } else if (typeof object.salesInitial === 'object') { message.salesInitial = new $util.LongBits(object.salesInitial.low >>> 0, object.salesInitial.high >>> 0).toNumber() }
      }
      if (object.salesActual != null) {
        if ($util.Long) { (message.salesActual = $util.Long.fromValue(object.salesActual)).unsigned = false } else if (typeof object.salesActual === 'string') { message.salesActual = parseInt(object.salesActual, 10) } else if (typeof object.salesActual === 'number') { message.salesActual = object.salesActual } else if (typeof object.salesActual === 'object') { message.salesActual = new $util.LongBits(object.salesActual.low >>> 0, object.salesActual.high >>> 0).toNumber() }
      }
      if (object.deliveryId != null) {
        if ($util.Long) { (message.deliveryId = $util.Long.fromValue(object.deliveryId)).unsigned = false } else if (typeof object.deliveryId === 'string') { message.deliveryId = parseInt(object.deliveryId, 10) } else if (typeof object.deliveryId === 'number') { message.deliveryId = object.deliveryId } else if (typeof object.deliveryId === 'object') { message.deliveryId = new $util.LongBits(object.deliveryId.low >>> 0, object.deliveryId.high >>> 0).toNumber() }
      }
      if (object.isPointsGift != null) { message.isPointsGift = object.isPointsGift | 0 }
      if (object.isPointsDiscount != null) { message.isPointsDiscount = object.isPointsDiscount | 0 }
      if (object.isOnSiteService != null) { message.isOnSiteService = object.isOnSiteService | 0 }
      if (object.isRecommend != null) { message.isRecommend = object.isRecommend | 0 }
      if (object.isNew != null) { message.isNew = object.isNew | 0 }
      if (object.isHot != null) { message.isHot = object.isHot | 0 }
      switch (object.status) {
        default:
          if (typeof object.status === 'number') {
            message.status = object.status
            break
          }
          break
        case 'GoodsStatusTypeUnknown':
        case 0:
          message.status = 0
          break
        case 'GoodsStatusNormal':
        case 1:
          message.status = 1
          break
        case 'GoodsStatusOff':
        case 2:
          message.status = 2
          break
      }
      if (object.sort != null) { message.sort = object.sort | 0 }
      if (object.shopId != null) {
        if ($util.Long) { (message.shopId = $util.Long.fromValue(object.shopId)).unsigned = false } else if (typeof object.shopId === 'string') { message.shopId = parseInt(object.shopId, 10) } else if (typeof object.shopId === 'number') { message.shopId = object.shopId } else if (typeof object.shopId === 'object') { message.shopId = new $util.LongBits(object.shopId.low >>> 0, object.shopId.high >>> 0).toNumber() }
      }
      return message
    }

    /**
         * Creates a plain object from a GoodsModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbgoods.GoodsModel
         * @static
         * @param {pbgoods.GoodsModel} message GoodsModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    GoodsModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        object.goodsName = ''
        object.goodsNo = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.videoId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.videoId = options.longs === String ? '0' : 0 }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.videoCoverId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.videoCoverId = options.longs === String ? '0' : 0 }
        object.sellingPoint = ''
        object.specType = options.enums === String ? 'SpecTypeUnknown' : 0
        object.goodsPriceMin = 0
        object.goodsPriceMax = 0
        object.linePriceMin = 0
        object.linePriceMax = 0
        object.stockTotal = 0
        object.deductStockType = options.enums === String ? 'DeductStockTypeUnknown' : 0
        object.content = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.salesInitial = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.salesInitial = options.longs === String ? '0' : 0 }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.salesActual = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.salesActual = options.longs === String ? '0' : 0 }
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.deliveryId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.deliveryId = options.longs === String ? '0' : 0 }
        object.isPointsGift = 0
        object.isPointsDiscount = 0
        object.isOnSiteService = 0
        object.isRecommend = 0
        object.isNew = 0
        object.isHot = 0
        object.status = options.enums === String ? 'GoodsStatusTypeUnknown' : 0
        object.sort = 0
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.shopId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.shopId = options.longs === String ? '0' : 0 }
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.goodsName != null && message.hasOwnProperty('goodsName')) { object.goodsName = message.goodsName }
      if (message.goodsNo != null && message.hasOwnProperty('goodsNo')) { object.goodsNo = message.goodsNo }
      if (message.videoId != null && message.hasOwnProperty('videoId')) {
        if (typeof message.videoId === 'number') { object.videoId = options.longs === String ? String(message.videoId) : message.videoId } else { object.videoId = options.longs === String ? $util.Long.prototype.toString.call(message.videoId) : options.longs === Number ? new $util.LongBits(message.videoId.low >>> 0, message.videoId.high >>> 0).toNumber() : message.videoId }
      }
      if (message.videoCoverId != null && message.hasOwnProperty('videoCoverId')) {
        if (typeof message.videoCoverId === 'number') { object.videoCoverId = options.longs === String ? String(message.videoCoverId) : message.videoCoverId } else { object.videoCoverId = options.longs === String ? $util.Long.prototype.toString.call(message.videoCoverId) : options.longs === Number ? new $util.LongBits(message.videoCoverId.low >>> 0, message.videoCoverId.high >>> 0).toNumber() : message.videoCoverId }
      }
      if (message.sellingPoint != null && message.hasOwnProperty('sellingPoint')) { object.sellingPoint = message.sellingPoint }
      if (message.specType != null && message.hasOwnProperty('specType')) { object.specType = options.enums === String ? $root.pbgoods.SpecType[message.specType] === undefined ? message.specType : $root.pbgoods.SpecType[message.specType] : message.specType }
      if (message.goodsPriceMin != null && message.hasOwnProperty('goodsPriceMin')) { object.goodsPriceMin = message.goodsPriceMin }
      if (message.goodsPriceMax != null && message.hasOwnProperty('goodsPriceMax')) { object.goodsPriceMax = message.goodsPriceMax }
      if (message.linePriceMin != null && message.hasOwnProperty('linePriceMin')) { object.linePriceMin = message.linePriceMin }
      if (message.linePriceMax != null && message.hasOwnProperty('linePriceMax')) { object.linePriceMax = message.linePriceMax }
      if (message.stockTotal != null && message.hasOwnProperty('stockTotal')) { object.stockTotal = message.stockTotal }
      if (message.deductStockType != null && message.hasOwnProperty('deductStockType')) { object.deductStockType = options.enums === String ? $root.pbgoods.DeductStockType[message.deductStockType] === undefined ? message.deductStockType : $root.pbgoods.DeductStockType[message.deductStockType] : message.deductStockType }
      if (message.content != null && message.hasOwnProperty('content')) { object.content = message.content }
      if (message.salesInitial != null && message.hasOwnProperty('salesInitial')) {
        if (typeof message.salesInitial === 'number') { object.salesInitial = options.longs === String ? String(message.salesInitial) : message.salesInitial } else { object.salesInitial = options.longs === String ? $util.Long.prototype.toString.call(message.salesInitial) : options.longs === Number ? new $util.LongBits(message.salesInitial.low >>> 0, message.salesInitial.high >>> 0).toNumber() : message.salesInitial }
      }
      if (message.salesActual != null && message.hasOwnProperty('salesActual')) {
        if (typeof message.salesActual === 'number') { object.salesActual = options.longs === String ? String(message.salesActual) : message.salesActual } else { object.salesActual = options.longs === String ? $util.Long.prototype.toString.call(message.salesActual) : options.longs === Number ? new $util.LongBits(message.salesActual.low >>> 0, message.salesActual.high >>> 0).toNumber() : message.salesActual }
      }
      if (message.deliveryId != null && message.hasOwnProperty('deliveryId')) {
        if (typeof message.deliveryId === 'number') { object.deliveryId = options.longs === String ? String(message.deliveryId) : message.deliveryId } else { object.deliveryId = options.longs === String ? $util.Long.prototype.toString.call(message.deliveryId) : options.longs === Number ? new $util.LongBits(message.deliveryId.low >>> 0, message.deliveryId.high >>> 0).toNumber() : message.deliveryId }
      }
      if (message.isPointsGift != null && message.hasOwnProperty('isPointsGift')) { object.isPointsGift = message.isPointsGift }
      if (message.isPointsDiscount != null && message.hasOwnProperty('isPointsDiscount')) { object.isPointsDiscount = message.isPointsDiscount }
      if (message.isOnSiteService != null && message.hasOwnProperty('isOnSiteService')) { object.isOnSiteService = message.isOnSiteService }
      if (message.isRecommend != null && message.hasOwnProperty('isRecommend')) { object.isRecommend = message.isRecommend }
      if (message.isNew != null && message.hasOwnProperty('isNew')) { object.isNew = message.isNew }
      if (message.isHot != null && message.hasOwnProperty('isHot')) { object.isHot = message.isHot }
      if (message.status != null && message.hasOwnProperty('status')) { object.status = options.enums === String ? $root.pbgoods.GoodsStatusType[message.status] === undefined ? message.status : $root.pbgoods.GoodsStatusType[message.status] : message.status }
      if (message.sort != null && message.hasOwnProperty('sort')) { object.sort = message.sort }
      if (message.shopId != null && message.hasOwnProperty('shopId')) {
        if (typeof message.shopId === 'number') { object.shopId = options.longs === String ? String(message.shopId) : message.shopId } else { object.shopId = options.longs === String ? $util.Long.prototype.toString.call(message.shopId) : options.longs === Number ? new $util.LongBits(message.shopId.low >>> 0, message.shopId.high >>> 0).toNumber() : message.shopId }
      }
      return object
    }

    /**
         * Converts this GoodsModel to JSON.
         * @function toJSON
         * @memberof pbgoods.GoodsModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    GoodsModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for GoodsModel
         * @function getTypeUrl
         * @memberof pbgoods.GoodsModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    GoodsModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbgoods.GoodsModel'
    }

    return GoodsModel
  })()

  /**
     * SpecType enum.
     * @name pbgoods.SpecType
     * @enum {number}
     * @property {number} SpecTypeUnknown=0 SpecTypeUnknown value
     * @property {number} Singleton=1 Singleton value
     * @property {number} Multiple=2 Multiple value
     */
  pbgoods.SpecType = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'SpecTypeUnknown'] = 0
    values[valuesById[1] = 'Singleton'] = 1
    values[valuesById[2] = 'Multiple'] = 2
    return values
  })()

  /**
     * DeductStockType enum.
     * @name pbgoods.DeductStockType
     * @enum {number}
     * @property {number} DeductStockTypeUnknown=0 DeductStockTypeUnknown value
     * @property {number} OrderDeductStock=1 OrderDeductStock value
     * @property {number} PayDeductStock=2 PayDeductStock value
     */
  pbgoods.DeductStockType = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'DeductStockTypeUnknown'] = 0
    values[valuesById[1] = 'OrderDeductStock'] = 1
    values[valuesById[2] = 'PayDeductStock'] = 2
    return values
  })()

  /**
     * GoodsStatusType enum.
     * @name pbgoods.GoodsStatusType
     * @enum {number}
     * @property {number} GoodsStatusTypeUnknown=0 GoodsStatusTypeUnknown value
     * @property {number} GoodsStatusNormal=1 GoodsStatusNormal value
     * @property {number} GoodsStatusOff=2 GoodsStatusOff value
     */
  pbgoods.GoodsStatusType = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'GoodsStatusTypeUnknown'] = 0
    values[valuesById[1] = 'GoodsStatusNormal'] = 1
    values[valuesById[2] = 'GoodsStatusOff'] = 2
    return values
  })()

  pbgoods.FindGoodsArgs = (function() {
    /**
         * Properties of a FindGoodsArgs.
         * @memberof pbgoods
         * @interface IFindGoodsArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindGoodsArgs pageInfo
         * @property {pbgoods.IGoodsModel|null} [query] FindGoodsArgs query
         */

    /**
         * Constructs a new FindGoodsArgs.
         * @memberof pbgoods
         * @classdesc Represents a FindGoodsArgs.
         * @implements IFindGoodsArgs
         * @constructor
         * @param {pbgoods.IFindGoodsArgs=} [properties] Properties to set
         */
    function FindGoodsArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindGoodsArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbgoods.FindGoodsArgs
         * @instance
         */
    FindGoodsArgs.prototype.pageInfo = null

    /**
         * FindGoodsArgs query.
         * @member {pbgoods.IGoodsModel|null|undefined} query
         * @memberof pbgoods.FindGoodsArgs
         * @instance
         */
    FindGoodsArgs.prototype.query = null

    /**
         * Creates a new FindGoodsArgs instance using the specified properties.
         * @function create
         * @memberof pbgoods.FindGoodsArgs
         * @static
         * @param {pbgoods.IFindGoodsArgs=} [properties] Properties to set
         * @returns {pbgoods.FindGoodsArgs} FindGoodsArgs instance
         */
    FindGoodsArgs.create = function create(properties) {
      return new FindGoodsArgs(properties)
    }

    /**
         * Encodes the specified FindGoodsArgs message. Does not implicitly {@link pbgoods.FindGoodsArgs.verify|verify} messages.
         * @function encode
         * @memberof pbgoods.FindGoodsArgs
         * @static
         * @param {pbgoods.IFindGoodsArgs} message FindGoodsArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindGoodsArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbgoods.GoodsModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
         * Encodes the specified FindGoodsArgs message, length delimited. Does not implicitly {@link pbgoods.FindGoodsArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbgoods.FindGoodsArgs
         * @static
         * @param {pbgoods.IFindGoodsArgs} message FindGoodsArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindGoodsArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindGoodsArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbgoods.FindGoodsArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbgoods.FindGoodsArgs} FindGoodsArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindGoodsArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbgoods.FindGoodsArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1: {
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          }
          case 2: {
            message.query = $root.pbgoods.GoodsModel.decode(reader, reader.uint32())
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
         * Decodes a FindGoodsArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbgoods.FindGoodsArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbgoods.FindGoodsArgs} FindGoodsArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindGoodsArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindGoodsArgs message.
         * @function verify
         * @memberof pbgoods.FindGoodsArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindGoodsArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbgoods.GoodsModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
         * Creates a FindGoodsArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbgoods.FindGoodsArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbgoods.FindGoodsArgs} FindGoodsArgs
         */
    FindGoodsArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbgoods.FindGoodsArgs) { return object }
      var message = new $root.pbgoods.FindGoodsArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbgoods.FindGoodsArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbgoods.FindGoodsArgs.query: object expected') }
        message.query = $root.pbgoods.GoodsModel.fromObject(object.query)
      }
      return message
    }

    /**
         * Creates a plain object from a FindGoodsArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbgoods.FindGoodsArgs
         * @static
         * @param {pbgoods.FindGoodsArgs} message FindGoodsArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindGoodsArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbgoods.GoodsModel.toObject(message.query, options) }
      return object
    }

    /**
         * Converts this FindGoodsArgs to JSON.
         * @function toJSON
         * @memberof pbgoods.FindGoodsArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindGoodsArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindGoodsArgs
         * @function getTypeUrl
         * @memberof pbgoods.FindGoodsArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindGoodsArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbgoods.FindGoodsArgs'
    }

    return FindGoodsArgs
  })()

  pbgoods.FindGoodsReply = (function() {
    /**
         * Properties of a FindGoodsReply.
         * @memberof pbgoods
         * @interface IFindGoodsReply
         * @property {pbcommon.EnumCode|null} [code] FindGoodsReply code
         * @property {string|null} [msg] FindGoodsReply msg
         * @property {pbgoods.IGoodsModel|null} [data] FindGoodsReply data
         * @property {Array.<pbgoods.IGoodsModel>|null} [list] FindGoodsReply list
         * @property {number|Long|null} [total] FindGoodsReply total
         */

    /**
         * Constructs a new FindGoodsReply.
         * @memberof pbgoods
         * @classdesc Represents a FindGoodsReply.
         * @implements IFindGoodsReply
         * @constructor
         * @param {pbgoods.IFindGoodsReply=} [properties] Properties to set
         */
    function FindGoodsReply(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
         * FindGoodsReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbgoods.FindGoodsReply
         * @instance
         */
    FindGoodsReply.prototype.code = 0

    /**
         * FindGoodsReply msg.
         * @member {string} msg
         * @memberof pbgoods.FindGoodsReply
         * @instance
         */
    FindGoodsReply.prototype.msg = ''

    /**
         * FindGoodsReply data.
         * @member {pbgoods.IGoodsModel|null|undefined} data
         * @memberof pbgoods.FindGoodsReply
         * @instance
         */
    FindGoodsReply.prototype.data = null

    /**
         * FindGoodsReply list.
         * @member {Array.<pbgoods.IGoodsModel>} list
         * @memberof pbgoods.FindGoodsReply
         * @instance
         */
    FindGoodsReply.prototype.list = $util.emptyArray

    /**
         * FindGoodsReply total.
         * @member {number|Long} total
         * @memberof pbgoods.FindGoodsReply
         * @instance
         */
    FindGoodsReply.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
         * Creates a new FindGoodsReply instance using the specified properties.
         * @function create
         * @memberof pbgoods.FindGoodsReply
         * @static
         * @param {pbgoods.IFindGoodsReply=} [properties] Properties to set
         * @returns {pbgoods.FindGoodsReply} FindGoodsReply instance
         */
    FindGoodsReply.create = function create(properties) {
      return new FindGoodsReply(properties)
    }

    /**
         * Encodes the specified FindGoodsReply message. Does not implicitly {@link pbgoods.FindGoodsReply.verify|verify} messages.
         * @function encode
         * @memberof pbgoods.FindGoodsReply
         * @static
         * @param {pbgoods.IFindGoodsReply} message FindGoodsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindGoodsReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbgoods.GoodsModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbgoods.GoodsModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      return writer
    }

    /**
         * Encodes the specified FindGoodsReply message, length delimited. Does not implicitly {@link pbgoods.FindGoodsReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbgoods.FindGoodsReply
         * @static
         * @param {pbgoods.IFindGoodsReply} message FindGoodsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
    FindGoodsReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
         * Decodes a FindGoodsReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbgoods.FindGoodsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbgoods.FindGoodsReply} FindGoodsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindGoodsReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbgoods.FindGoodsReply()
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
            message.data = $root.pbgoods.GoodsModel.decode(reader, reader.uint32())
            break
          }
          case 4: {
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbgoods.GoodsModel.decode(reader, reader.uint32()))
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
         * Decodes a FindGoodsReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbgoods.FindGoodsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbgoods.FindGoodsReply} FindGoodsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
    FindGoodsReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
         * Verifies a FindGoodsReply message.
         * @function verify
         * @memberof pbgoods.FindGoodsReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
    FindGoodsReply.verify = function verify(message) {
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
        var error = $root.pbgoods.GoodsModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbgoods.GoodsModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      return null
    }

    /**
         * Creates a FindGoodsReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbgoods.FindGoodsReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbgoods.FindGoodsReply} FindGoodsReply
         */
    FindGoodsReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbgoods.FindGoodsReply) { return object }
      var message = new $root.pbgoods.FindGoodsReply()
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
        if (typeof object.data !== 'object') { throw TypeError('.pbgoods.FindGoodsReply.data: object expected') }
        message.data = $root.pbgoods.GoodsModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbgoods.FindGoodsReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbgoods.FindGoodsReply.list: object expected') }
          message.list[i] = $root.pbgoods.GoodsModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      return message
    }

    /**
         * Creates a plain object from a FindGoodsReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbgoods.FindGoodsReply
         * @static
         * @param {pbgoods.FindGoodsReply} message FindGoodsReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
    FindGoodsReply.toObject = function toObject(message, options) {
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
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbgoods.GoodsModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbgoods.GoodsModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      return object
    }

    /**
         * Converts this FindGoodsReply to JSON.
         * @function toJSON
         * @memberof pbgoods.FindGoodsReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
    FindGoodsReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
         * Gets the default type url for FindGoodsReply
         * @function getTypeUrl
         * @memberof pbgoods.FindGoodsReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
    FindGoodsReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com'
      }
      return typeUrlPrefix + '/pbgoods.FindGoodsReply'
    }

    return FindGoodsReply
  })()

  pbgoods.Goods = (function() {
    /**
         * Constructs a new Goods service.
         * @memberof pbgoods
         * @classdesc Represents a Goods
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
    function Goods(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Goods.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Goods

    /**
         * Creates new Goods service using the specified rpc implementation.
         * @function create
         * @memberof pbgoods.Goods
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Goods} RPC service. Useful where requests and/or responses are streamed.
         */
    Goods.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
         * Callback as used by {@link pbgoods.Goods#createGoods}.
         * @memberof pbgoods.Goods
         * @typedef CreateGoodsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls CreateGoods.
         * @function createGoods
         * @memberof pbgoods.Goods
         * @instance
         * @param {pbgoods.IGoodsModel} request GoodsModel message or plain object
         * @param {pbgoods.Goods.CreateGoodsCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Goods.prototype.createGoods = function createGoods(request, callback) {
      return this.rpcCall(createGoods, $root.pbgoods.GoodsModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreateGoods' })

    /**
         * Calls CreateGoods.
         * @function createGoods
         * @memberof pbgoods.Goods
         * @instance
         * @param {pbgoods.IGoodsModel} request GoodsModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbgoods.Goods#updateGoods}.
         * @memberof pbgoods.Goods
         * @typedef UpdateGoodsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls UpdateGoods.
         * @function updateGoods
         * @memberof pbgoods.Goods
         * @instance
         * @param {pbgoods.IGoodsModel} request GoodsModel message or plain object
         * @param {pbgoods.Goods.UpdateGoodsCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Goods.prototype.updateGoods = function updateGoods(request, callback) {
      return this.rpcCall(updateGoods, $root.pbgoods.GoodsModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdateGoods' })

    /**
         * Calls UpdateGoods.
         * @function updateGoods
         * @memberof pbgoods.Goods
         * @instance
         * @param {pbgoods.IGoodsModel} request GoodsModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbgoods.Goods#deleteGoods}.
         * @memberof pbgoods.Goods
         * @typedef DeleteGoodsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

    /**
         * Calls DeleteGoods.
         * @function deleteGoods
         * @memberof pbgoods.Goods
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbgoods.Goods.DeleteGoodsCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Goods.prototype.deleteGoods = function deleteGoods(request, callback) {
      return this.rpcCall(deleteGoods, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeleteGoods' })

    /**
         * Calls DeleteGoods.
         * @function deleteGoods
         * @memberof pbgoods.Goods
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbgoods.Goods#findGoodsById}.
         * @memberof pbgoods.Goods
         * @typedef FindGoodsByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbgoods.FindGoodsReply} [response] FindGoodsReply
         */

    /**
         * Calls FindGoodsById.
         * @function findGoodsById
         * @memberof pbgoods.Goods
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbgoods.Goods.FindGoodsByIdCallback} callback Node-style callback called with the error, if any, and FindGoodsReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Goods.prototype.findGoodsById = function findGoodsById(request, callback) {
      return this.rpcCall(findGoodsById, $root.pbcommon.IdArgs, $root.pbgoods.FindGoodsReply, request, callback)
    }, 'name', { value: 'FindGoodsById' })

    /**
         * Calls FindGoodsById.
         * @function findGoodsById
         * @memberof pbgoods.Goods
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbgoods.FindGoodsReply>} Promise
         * @variation 2
         */

    /**
         * Callback as used by {@link pbgoods.Goods#findGoodsList}.
         * @memberof pbgoods.Goods
         * @typedef FindGoodsListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbgoods.FindGoodsReply} [response] FindGoodsReply
         */

    /**
         * Calls FindGoodsList.
         * @function findGoodsList
         * @memberof pbgoods.Goods
         * @instance
         * @param {pbgoods.IFindGoodsArgs} request FindGoodsArgs message or plain object
         * @param {pbgoods.Goods.FindGoodsListCallback} callback Node-style callback called with the error, if any, and FindGoodsReply
         * @returns {undefined}
         * @variation 1
         */
    Object.defineProperty(Goods.prototype.findGoodsList = function findGoodsList(request, callback) {
      return this.rpcCall(findGoodsList, $root.pbgoods.FindGoodsArgs, $root.pbgoods.FindGoodsReply, request, callback)
    }, 'name', { value: 'FindGoodsList' })

    /**
         * Calls FindGoodsList.
         * @function findGoodsList
         * @memberof pbgoods.Goods
         * @instance
         * @param {pbgoods.IFindGoodsArgs} request FindGoodsArgs message or plain object
         * @returns {Promise<pbgoods.FindGoodsReply>} Promise
         * @variation 2
         */

    return Goods
  })()

  return pbgoods
})()

module.exports = $root