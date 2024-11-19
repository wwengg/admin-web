/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
'use strict'

var $protobuf = require('protobufjs/minimal')

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
   * @property {number} Forbidden=403 Forbidden value
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
   * @property {number} RoleIsNotExist=3001 RoleIsNotExist value
   * @property {number} UserIsExist=3002 UserIsExist value
   * @property {number} UserIsBan=3003 UserIsBan value
   * @property {number} TalkIsBan=5001 TalkIsBan value
   * @property {number} EnterRoomErr=5002 EnterRoomErr value
   */
  pbcommon.EnumCode = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'None'] = 0
    values[valuesById[200] = 'Success'] = 200
    values[valuesById[403] = 'Forbidden'] = 403
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
    values[valuesById[3001] = 'RoleIsNotExist'] = 3001
    values[valuesById[3002] = 'UserIsExist'] = 3002
    values[valuesById[3003] = 'UserIsBan'] = 3003
    values[valuesById[5001] = 'TalkIsBan'] = 5001
    values[valuesById[5002] = 'EnterRoomErr'] = 5002
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
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
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
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
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
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
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
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
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
          case 1:
            message.id = reader.int64()
            break
          case 2:
            message.idStr = reader.string()
            break
          case 3:
            if (!(message.ids && message.ids.length)) { message.ids = [] }
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos
              while (reader.pos < end2) { message.ids.push(reader.int64()) }
            } else { message.ids.push(reader.int64()) }
            break
          case 4:
            if (!(message.idStrs && message.idStrs.length)) { message.idStrs = [] }
            message.idStrs.push(reader.string())
            break
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
          case 1:
            message.page = reader.int32()
            break
          case 2:
            message.pageSize = reader.int32()
            break
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

    return PageInfo
  })()

  pbcommon.IdArgsWithPageInfo = (function() {
    /**
     * Properties of an IdArgsWithPageInfo.
     * @memberof pbcommon
     * @interface IIdArgsWithPageInfo
     * @property {pbcommon.IIdArgs|null} [idArgs] IdArgsWithPageInfo idArgs
     * @property {pbcommon.IPageInfo|null} [pageInfo] IdArgsWithPageInfo pageInfo
     */

    /**
     * Constructs a new IdArgsWithPageInfo.
     * @memberof pbcommon
     * @classdesc Represents an IdArgsWithPageInfo.
     * @implements IIdArgsWithPageInfo
     * @constructor
     * @param {pbcommon.IIdArgsWithPageInfo=} [properties] Properties to set
     */
    function IdArgsWithPageInfo(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * IdArgsWithPageInfo idArgs.
     * @member {pbcommon.IIdArgs|null|undefined} idArgs
     * @memberof pbcommon.IdArgsWithPageInfo
     * @instance
     */
    IdArgsWithPageInfo.prototype.idArgs = null

    /**
     * IdArgsWithPageInfo pageInfo.
     * @member {pbcommon.IPageInfo|null|undefined} pageInfo
     * @memberof pbcommon.IdArgsWithPageInfo
     * @instance
     */
    IdArgsWithPageInfo.prototype.pageInfo = null

    /**
     * Creates a new IdArgsWithPageInfo instance using the specified properties.
     * @function create
     * @memberof pbcommon.IdArgsWithPageInfo
     * @static
     * @param {pbcommon.IIdArgsWithPageInfo=} [properties] Properties to set
     * @returns {pbcommon.IdArgsWithPageInfo} IdArgsWithPageInfo instance
     */
    IdArgsWithPageInfo.create = function create(properties) {
      return new IdArgsWithPageInfo(properties)
    }

    /**
     * Encodes the specified IdArgsWithPageInfo message. Does not implicitly {@link pbcommon.IdArgsWithPageInfo.verify|verify} messages.
     * @function encode
     * @memberof pbcommon.IdArgsWithPageInfo
     * @static
     * @param {pbcommon.IIdArgsWithPageInfo} message IdArgsWithPageInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IdArgsWithPageInfo.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.idArgs != null && Object.hasOwnProperty.call(message, 'idArgs')) { $root.pbcommon.IdArgs.encode(message.idArgs, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
     * Encodes the specified IdArgsWithPageInfo message, length delimited. Does not implicitly {@link pbcommon.IdArgsWithPageInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbcommon.IdArgsWithPageInfo
     * @static
     * @param {pbcommon.IIdArgsWithPageInfo} message IdArgsWithPageInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    IdArgsWithPageInfo.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes an IdArgsWithPageInfo message from the specified reader or buffer.
     * @function decode
     * @memberof pbcommon.IdArgsWithPageInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbcommon.IdArgsWithPageInfo} IdArgsWithPageInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IdArgsWithPageInfo.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbcommon.IdArgsWithPageInfo()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.idArgs = $root.pbcommon.IdArgs.decode(reader, reader.uint32())
            break
          case 2:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes an IdArgsWithPageInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbcommon.IdArgsWithPageInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbcommon.IdArgsWithPageInfo} IdArgsWithPageInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    IdArgsWithPageInfo.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies an IdArgsWithPageInfo message.
     * @function verify
     * @memberof pbcommon.IdArgsWithPageInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    IdArgsWithPageInfo.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.idArgs != null && message.hasOwnProperty('idArgs')) {
        var error = $root.pbcommon.IdArgs.verify(message.idArgs)
        if (error) { return 'idArgs.' + error }
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      return null
    }

    /**
     * Creates an IdArgsWithPageInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbcommon.IdArgsWithPageInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbcommon.IdArgsWithPageInfo} IdArgsWithPageInfo
     */
    IdArgsWithPageInfo.fromObject = function fromObject(object) {
      if (object instanceof $root.pbcommon.IdArgsWithPageInfo) { return object }
      var message = new $root.pbcommon.IdArgsWithPageInfo()
      if (object.idArgs != null) {
        if (typeof object.idArgs !== 'object') { throw TypeError('.pbcommon.IdArgsWithPageInfo.idArgs: object expected') }
        message.idArgs = $root.pbcommon.IdArgs.fromObject(object.idArgs)
      }
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbcommon.IdArgsWithPageInfo.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      return message
    }

    /**
     * Creates a plain object from an IdArgsWithPageInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbcommon.IdArgsWithPageInfo
     * @static
     * @param {pbcommon.IdArgsWithPageInfo} message IdArgsWithPageInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    IdArgsWithPageInfo.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.idArgs = null
        object.pageInfo = null
      }
      if (message.idArgs != null && message.hasOwnProperty('idArgs')) { object.idArgs = $root.pbcommon.IdArgs.toObject(message.idArgs, options) }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      return object
    }

    /**
     * Converts this IdArgsWithPageInfo to JSON.
     * @function toJSON
     * @memberof pbcommon.IdArgsWithPageInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    IdArgsWithPageInfo.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return IdArgsWithPageInfo
  })()

  pbcommon.Empty = (function() {
    /**
     * Properties of an Empty.
     * @memberof pbcommon
     * @interface IEmpty
     */

    /**
     * Constructs a new Empty.
     * @memberof pbcommon
     * @classdesc Represents an Empty.
     * @implements IEmpty
     * @constructor
     * @param {pbcommon.IEmpty=} [properties] Properties to set
     */
    function Empty(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * Creates a new Empty instance using the specified properties.
     * @function create
     * @memberof pbcommon.Empty
     * @static
     * @param {pbcommon.IEmpty=} [properties] Properties to set
     * @returns {pbcommon.Empty} Empty instance
     */
    Empty.create = function create(properties) {
      return new Empty(properties)
    }

    /**
     * Encodes the specified Empty message. Does not implicitly {@link pbcommon.Empty.verify|verify} messages.
     * @function encode
     * @memberof pbcommon.Empty
     * @static
     * @param {pbcommon.IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      return writer
    }

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link pbcommon.Empty.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbcommon.Empty
     * @static
     * @param {pbcommon.IEmpty} message Empty message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Empty.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @function decode
     * @memberof pbcommon.Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbcommon.Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbcommon.Empty()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbcommon.Empty
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbcommon.Empty} Empty
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Empty.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies an Empty message.
     * @function verify
     * @memberof pbcommon.Empty
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Empty.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      return null
    }

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbcommon.Empty
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbcommon.Empty} Empty
     */
    Empty.fromObject = function fromObject(object) {
      if (object instanceof $root.pbcommon.Empty) { return object }
      return new $root.pbcommon.Empty()
    }

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbcommon.Empty
     * @static
     * @param {pbcommon.Empty} message Empty
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Empty.toObject = function toObject() {
      return {}
    }

    /**
     * Converts this Empty to JSON.
     * @function toJSON
     * @memberof pbcommon.Empty
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Empty.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return Empty
  })()

  pbcommon.PrivilegeTip = (function() {
    /**
     * Properties of a PrivilegeTip.
     * @memberof pbcommon
     * @interface IPrivilegeTip
     * @property {string|null} [title] PrivilegeTip title
     * @property {string|null} [beginTime] PrivilegeTip beginTime
     * @property {number|Long|null} [duration] PrivilegeTip duration
     * @property {string|null} [reason] PrivilegeTip reason
     * @property {string|null} [deviceUuid] PrivilegeTip deviceUuid
     * @property {string|null} [endTime] PrivilegeTip endTime
     */

    /**
     * Constructs a new PrivilegeTip.
     * @memberof pbcommon
     * @classdesc Represents a PrivilegeTip.
     * @implements IPrivilegeTip
     * @constructor
     * @param {pbcommon.IPrivilegeTip=} [properties] Properties to set
     */
    function PrivilegeTip(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * PrivilegeTip title.
     * @member {string} title
     * @memberof pbcommon.PrivilegeTip
     * @instance
     */
    PrivilegeTip.prototype.title = ''

    /**
     * PrivilegeTip beginTime.
     * @member {string} beginTime
     * @memberof pbcommon.PrivilegeTip
     * @instance
     */
    PrivilegeTip.prototype.beginTime = ''

    /**
     * PrivilegeTip duration.
     * @member {number|Long} duration
     * @memberof pbcommon.PrivilegeTip
     * @instance
     */
    PrivilegeTip.prototype.duration = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * PrivilegeTip reason.
     * @member {string} reason
     * @memberof pbcommon.PrivilegeTip
     * @instance
     */
    PrivilegeTip.prototype.reason = ''

    /**
     * PrivilegeTip deviceUuid.
     * @member {string} deviceUuid
     * @memberof pbcommon.PrivilegeTip
     * @instance
     */
    PrivilegeTip.prototype.deviceUuid = ''

    /**
     * PrivilegeTip endTime.
     * @member {string} endTime
     * @memberof pbcommon.PrivilegeTip
     * @instance
     */
    PrivilegeTip.prototype.endTime = ''

    /**
     * Creates a new PrivilegeTip instance using the specified properties.
     * @function create
     * @memberof pbcommon.PrivilegeTip
     * @static
     * @param {pbcommon.IPrivilegeTip=} [properties] Properties to set
     * @returns {pbcommon.PrivilegeTip} PrivilegeTip instance
     */
    PrivilegeTip.create = function create(properties) {
      return new PrivilegeTip(properties)
    }

    /**
     * Encodes the specified PrivilegeTip message. Does not implicitly {@link pbcommon.PrivilegeTip.verify|verify} messages.
     * @function encode
     * @memberof pbcommon.PrivilegeTip
     * @static
     * @param {pbcommon.IPrivilegeTip} message PrivilegeTip message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PrivilegeTip.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.title != null && Object.hasOwnProperty.call(message, 'title')) { writer.uint32(/* id 1, wireType 2 =*/10).string(message.title) }
      if (message.beginTime != null && Object.hasOwnProperty.call(message, 'beginTime')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.beginTime) }
      if (message.duration != null && Object.hasOwnProperty.call(message, 'duration')) { writer.uint32(/* id 3, wireType 0 =*/24).int64(message.duration) }
      if (message.reason != null && Object.hasOwnProperty.call(message, 'reason')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.reason) }
      if (message.deviceUuid != null && Object.hasOwnProperty.call(message, 'deviceUuid')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceUuid) }
      if (message.endTime != null && Object.hasOwnProperty.call(message, 'endTime')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.endTime) }
      return writer
    }

    /**
     * Encodes the specified PrivilegeTip message, length delimited. Does not implicitly {@link pbcommon.PrivilegeTip.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbcommon.PrivilegeTip
     * @static
     * @param {pbcommon.IPrivilegeTip} message PrivilegeTip message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PrivilegeTip.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a PrivilegeTip message from the specified reader or buffer.
     * @function decode
     * @memberof pbcommon.PrivilegeTip
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbcommon.PrivilegeTip} PrivilegeTip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PrivilegeTip.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbcommon.PrivilegeTip()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.title = reader.string()
            break
          case 2:
            message.beginTime = reader.string()
            break
          case 3:
            message.duration = reader.int64()
            break
          case 4:
            message.reason = reader.string()
            break
          case 5:
            message.deviceUuid = reader.string()
            break
          case 6:
            message.endTime = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a PrivilegeTip message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbcommon.PrivilegeTip
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbcommon.PrivilegeTip} PrivilegeTip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PrivilegeTip.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a PrivilegeTip message.
     * @function verify
     * @memberof pbcommon.PrivilegeTip
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PrivilegeTip.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.title != null && message.hasOwnProperty('title')) {
        if (!$util.isString(message.title)) { return 'title: string expected' }
      }
      if (message.beginTime != null && message.hasOwnProperty('beginTime')) {
        if (!$util.isString(message.beginTime)) { return 'beginTime: string expected' }
      }
      if (message.duration != null && message.hasOwnProperty('duration')) {
        if (!$util.isInteger(message.duration) && !(message.duration && $util.isInteger(message.duration.low) && $util.isInteger(message.duration.high))) { return 'duration: integer|Long expected' }
      }
      if (message.reason != null && message.hasOwnProperty('reason')) {
        if (!$util.isString(message.reason)) { return 'reason: string expected' }
      }
      if (message.deviceUuid != null && message.hasOwnProperty('deviceUuid')) {
        if (!$util.isString(message.deviceUuid)) { return 'deviceUuid: string expected' }
      }
      if (message.endTime != null && message.hasOwnProperty('endTime')) {
        if (!$util.isString(message.endTime)) { return 'endTime: string expected' }
      }
      return null
    }

    /**
     * Creates a PrivilegeTip message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbcommon.PrivilegeTip
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbcommon.PrivilegeTip} PrivilegeTip
     */
    PrivilegeTip.fromObject = function fromObject(object) {
      if (object instanceof $root.pbcommon.PrivilegeTip) { return object }
      var message = new $root.pbcommon.PrivilegeTip()
      if (object.title != null) { message.title = String(object.title) }
      if (object.beginTime != null) { message.beginTime = String(object.beginTime) }
      if (object.duration != null) {
        if ($util.Long) { (message.duration = $util.Long.fromValue(object.duration)).unsigned = false } else if (typeof object.duration === 'string') { message.duration = parseInt(object.duration, 10) } else if (typeof object.duration === 'number') { message.duration = object.duration } else if (typeof object.duration === 'object') { message.duration = new $util.LongBits(object.duration.low >>> 0, object.duration.high >>> 0).toNumber() }
      }
      if (object.reason != null) { message.reason = String(object.reason) }
      if (object.deviceUuid != null) { message.deviceUuid = String(object.deviceUuid) }
      if (object.endTime != null) { message.endTime = String(object.endTime) }
      return message
    }

    /**
     * Creates a plain object from a PrivilegeTip message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbcommon.PrivilegeTip
     * @static
     * @param {pbcommon.PrivilegeTip} message PrivilegeTip
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PrivilegeTip.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.title = ''
        object.beginTime = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.duration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.duration = options.longs === String ? '0' : 0 }
        object.reason = ''
        object.deviceUuid = ''
        object.endTime = ''
      }
      if (message.title != null && message.hasOwnProperty('title')) { object.title = message.title }
      if (message.beginTime != null && message.hasOwnProperty('beginTime')) { object.beginTime = message.beginTime }
      if (message.duration != null && message.hasOwnProperty('duration')) {
        if (typeof message.duration === 'number') { object.duration = options.longs === String ? String(message.duration) : message.duration } else { object.duration = options.longs === String ? $util.Long.prototype.toString.call(message.duration) : options.longs === Number ? new $util.LongBits(message.duration.low >>> 0, message.duration.high >>> 0).toNumber() : message.duration }
      }
      if (message.reason != null && message.hasOwnProperty('reason')) { object.reason = message.reason }
      if (message.deviceUuid != null && message.hasOwnProperty('deviceUuid')) { object.deviceUuid = message.deviceUuid }
      if (message.endTime != null && message.hasOwnProperty('endTime')) { object.endTime = message.endTime }
      return object
    }

    /**
     * Converts this PrivilegeTip to JSON.
     * @function toJSON
     * @memberof pbcommon.PrivilegeTip
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PrivilegeTip.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return PrivilegeTip
  })()

  return pbcommon
})()

$root.pbapi = (function() {
  /**
   * Namespace pbapi.
   * @exports pbapi
   * @namespace
   */
  var pbapi = {}

  pbapi.ApiModel = (function() {
    /**
     * Properties of an ApiModel.
     * @memberof pbapi
     * @interface IApiModel
     * @property {number|Long|null} [id] ApiModel id
     * @property {string|null} [createdAt] ApiModel createdAt
     * @property {string|null} [updatedAt] ApiModel updatedAt
     * @property {string|null} [type] ApiModel type
     * @property {string|null} [path] ApiModel path
     * @property {string|null} [method] ApiModel method
     * @property {string|null} [name] ApiModel name
     * @property {string|null} [group] ApiModel group
     * @property {boolean|null} [isSelected] ApiModel isSelected
     * @property {number|null} [cmd] ApiModel cmd
     * @property {number|null} [oneway] ApiModel oneway
     */

    /**
     * Constructs a new ApiModel.
     * @memberof pbapi
     * @classdesc Represents an ApiModel.
     * @implements IApiModel
     * @constructor
     * @param {pbapi.IApiModel=} [properties] Properties to set
     */
    function ApiModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * ApiModel id.
     * @member {number|Long} id
     * @memberof pbapi.ApiModel
     * @instance
     */
    ApiModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * ApiModel createdAt.
     * @member {string} createdAt
     * @memberof pbapi.ApiModel
     * @instance
     */
    ApiModel.prototype.createdAt = ''

    /**
     * ApiModel updatedAt.
     * @member {string} updatedAt
     * @memberof pbapi.ApiModel
     * @instance
     */
    ApiModel.prototype.updatedAt = ''

    /**
     * ApiModel type.
     * @member {string} type
     * @memberof pbapi.ApiModel
     * @instance
     */
    ApiModel.prototype.type = ''

    /**
     * ApiModel path.
     * @member {string} path
     * @memberof pbapi.ApiModel
     * @instance
     */
    ApiModel.prototype.path = ''

    /**
     * ApiModel method.
     * @member {string} method
     * @memberof pbapi.ApiModel
     * @instance
     */
    ApiModel.prototype.method = ''

    /**
     * ApiModel name.
     * @member {string} name
     * @memberof pbapi.ApiModel
     * @instance
     */
    ApiModel.prototype.name = ''

    /**
     * ApiModel group.
     * @member {string} group
     * @memberof pbapi.ApiModel
     * @instance
     */
    ApiModel.prototype.group = ''

    /**
     * ApiModel isSelected.
     * @member {boolean} isSelected
     * @memberof pbapi.ApiModel
     * @instance
     */
    ApiModel.prototype.isSelected = false

    /**
     * ApiModel cmd.
     * @member {number} cmd
     * @memberof pbapi.ApiModel
     * @instance
     */
    ApiModel.prototype.cmd = 0

    /**
     * ApiModel oneway.
     * @member {number} oneway
     * @memberof pbapi.ApiModel
     * @instance
     */
    ApiModel.prototype.oneway = 0

    /**
     * Creates a new ApiModel instance using the specified properties.
     * @function create
     * @memberof pbapi.ApiModel
     * @static
     * @param {pbapi.IApiModel=} [properties] Properties to set
     * @returns {pbapi.ApiModel} ApiModel instance
     */
    ApiModel.create = function create(properties) {
      return new ApiModel(properties)
    }

    /**
     * Encodes the specified ApiModel message. Does not implicitly {@link pbapi.ApiModel.verify|verify} messages.
     * @function encode
     * @memberof pbapi.ApiModel
     * @static
     * @param {pbapi.IApiModel} message ApiModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApiModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.type != null && Object.hasOwnProperty.call(message, 'type')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.type) }
      if (message.path != null && Object.hasOwnProperty.call(message, 'path')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.path) }
      if (message.method != null && Object.hasOwnProperty.call(message, 'method')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.method) }
      if (message.name != null && Object.hasOwnProperty.call(message, 'name')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.name) }
      if (message.group != null && Object.hasOwnProperty.call(message, 'group')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.group) }
      if (message.isSelected != null && Object.hasOwnProperty.call(message, 'isSelected')) { writer.uint32(/* id 9, wireType 0 =*/72).bool(message.isSelected) }
      if (message.cmd != null && Object.hasOwnProperty.call(message, 'cmd')) { writer.uint32(/* id 10, wireType 0 =*/80).int32(message.cmd) }
      if (message.oneway != null && Object.hasOwnProperty.call(message, 'oneway')) { writer.uint32(/* id 11, wireType 0 =*/88).int32(message.oneway) }
      return writer
    }

    /**
     * Encodes the specified ApiModel message, length delimited. Does not implicitly {@link pbapi.ApiModel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbapi.ApiModel
     * @static
     * @param {pbapi.IApiModel} message ApiModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ApiModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes an ApiModel message from the specified reader or buffer.
     * @function decode
     * @memberof pbapi.ApiModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbapi.ApiModel} ApiModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApiModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbapi.ApiModel()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.id = reader.int64()
            break
          case 2:
            message.createdAt = reader.string()
            break
          case 3:
            message.updatedAt = reader.string()
            break
          case 4:
            message.type = reader.string()
            break
          case 5:
            message.path = reader.string()
            break
          case 6:
            message.method = reader.string()
            break
          case 7:
            message.name = reader.string()
            break
          case 8:
            message.group = reader.string()
            break
          case 9:
            message.isSelected = reader.bool()
            break
          case 10:
            message.cmd = reader.int32()
            break
          case 11:
            message.oneway = reader.int32()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes an ApiModel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbapi.ApiModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbapi.ApiModel} ApiModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ApiModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies an ApiModel message.
     * @function verify
     * @memberof pbapi.ApiModel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ApiModel.verify = function verify(message) {
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
      if (message.type != null && message.hasOwnProperty('type')) {
        if (!$util.isString(message.type)) { return 'type: string expected' }
      }
      if (message.path != null && message.hasOwnProperty('path')) {
        if (!$util.isString(message.path)) { return 'path: string expected' }
      }
      if (message.method != null && message.hasOwnProperty('method')) {
        if (!$util.isString(message.method)) { return 'method: string expected' }
      }
      if (message.name != null && message.hasOwnProperty('name')) {
        if (!$util.isString(message.name)) { return 'name: string expected' }
      }
      if (message.group != null && message.hasOwnProperty('group')) {
        if (!$util.isString(message.group)) { return 'group: string expected' }
      }
      if (message.isSelected != null && message.hasOwnProperty('isSelected')) {
        if (typeof message.isSelected !== 'boolean') { return 'isSelected: boolean expected' }
      }
      if (message.cmd != null && message.hasOwnProperty('cmd')) {
        if (!$util.isInteger(message.cmd)) { return 'cmd: integer expected' }
      }
      if (message.oneway != null && message.hasOwnProperty('oneway')) {
        if (!$util.isInteger(message.oneway)) { return 'oneway: integer expected' }
      }
      return null
    }

    /**
     * Creates an ApiModel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbapi.ApiModel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbapi.ApiModel} ApiModel
     */
    ApiModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbapi.ApiModel) { return object }
      var message = new $root.pbapi.ApiModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.type != null) { message.type = String(object.type) }
      if (object.path != null) { message.path = String(object.path) }
      if (object.method != null) { message.method = String(object.method) }
      if (object.name != null) { message.name = String(object.name) }
      if (object.group != null) { message.group = String(object.group) }
      if (object.isSelected != null) { message.isSelected = Boolean(object.isSelected) }
      if (object.cmd != null) { message.cmd = object.cmd | 0 }
      if (object.oneway != null) { message.oneway = object.oneway | 0 }
      return message
    }

    /**
     * Creates a plain object from an ApiModel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbapi.ApiModel
     * @static
     * @param {pbapi.ApiModel} message ApiModel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ApiModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        object.type = ''
        object.path = ''
        object.method = ''
        object.name = ''
        object.group = ''
        object.isSelected = false
        object.cmd = 0
        object.oneway = 0
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.type != null && message.hasOwnProperty('type')) { object.type = message.type }
      if (message.path != null && message.hasOwnProperty('path')) { object.path = message.path }
      if (message.method != null && message.hasOwnProperty('method')) { object.method = message.method }
      if (message.name != null && message.hasOwnProperty('name')) { object.name = message.name }
      if (message.group != null && message.hasOwnProperty('group')) { object.group = message.group }
      if (message.isSelected != null && message.hasOwnProperty('isSelected')) { object.isSelected = message.isSelected }
      if (message.cmd != null && message.hasOwnProperty('cmd')) { object.cmd = message.cmd }
      if (message.oneway != null && message.hasOwnProperty('oneway')) { object.oneway = message.oneway }
      return object
    }

    /**
     * Converts this ApiModel to JSON.
     * @function toJSON
     * @memberof pbapi.ApiModel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ApiModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return ApiModel
  })()

  pbapi.FindApiArgs = (function() {
    /**
     * Properties of a FindApiArgs.
     * @memberof pbapi
     * @interface IFindApiArgs
     * @property {pbcommon.IPageInfo|null} [pageInfo] FindApiArgs pageInfo
     * @property {pbapi.IApiModel|null} [query] FindApiArgs query
     */

    /**
     * Constructs a new FindApiArgs.
     * @memberof pbapi
     * @classdesc Represents a FindApiArgs.
     * @implements IFindApiArgs
     * @constructor
     * @param {pbapi.IFindApiArgs=} [properties] Properties to set
     */
    function FindApiArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindApiArgs pageInfo.
     * @member {pbcommon.IPageInfo|null|undefined} pageInfo
     * @memberof pbapi.FindApiArgs
     * @instance
     */
    FindApiArgs.prototype.pageInfo = null

    /**
     * FindApiArgs query.
     * @member {pbapi.IApiModel|null|undefined} query
     * @memberof pbapi.FindApiArgs
     * @instance
     */
    FindApiArgs.prototype.query = null

    /**
     * Creates a new FindApiArgs instance using the specified properties.
     * @function create
     * @memberof pbapi.FindApiArgs
     * @static
     * @param {pbapi.IFindApiArgs=} [properties] Properties to set
     * @returns {pbapi.FindApiArgs} FindApiArgs instance
     */
    FindApiArgs.create = function create(properties) {
      return new FindApiArgs(properties)
    }

    /**
     * Encodes the specified FindApiArgs message. Does not implicitly {@link pbapi.FindApiArgs.verify|verify} messages.
     * @function encode
     * @memberof pbapi.FindApiArgs
     * @static
     * @param {pbapi.IFindApiArgs} message FindApiArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindApiArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbapi.ApiModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
     * Encodes the specified FindApiArgs message, length delimited. Does not implicitly {@link pbapi.FindApiArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbapi.FindApiArgs
     * @static
     * @param {pbapi.IFindApiArgs} message FindApiArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindApiArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindApiArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbapi.FindApiArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbapi.FindApiArgs} FindApiArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindApiArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbapi.FindApiArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          case 2:
            message.query = $root.pbapi.ApiModel.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindApiArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbapi.FindApiArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbapi.FindApiArgs} FindApiArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindApiArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindApiArgs message.
     * @function verify
     * @memberof pbapi.FindApiArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindApiArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbapi.ApiModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
     * Creates a FindApiArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbapi.FindApiArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbapi.FindApiArgs} FindApiArgs
     */
    FindApiArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbapi.FindApiArgs) { return object }
      var message = new $root.pbapi.FindApiArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbapi.FindApiArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbapi.FindApiArgs.query: object expected') }
        message.query = $root.pbapi.ApiModel.fromObject(object.query)
      }
      return message
    }

    /**
     * Creates a plain object from a FindApiArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbapi.FindApiArgs
     * @static
     * @param {pbapi.FindApiArgs} message FindApiArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindApiArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbapi.ApiModel.toObject(message.query, options) }
      return object
    }

    /**
     * Converts this FindApiArgs to JSON.
     * @function toJSON
     * @memberof pbapi.FindApiArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindApiArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindApiArgs
  })()

  pbapi.FindApiReply = (function() {
    /**
     * Properties of a FindApiReply.
     * @memberof pbapi
     * @interface IFindApiReply
     * @property {pbcommon.EnumCode|null} [code] FindApiReply code
     * @property {string|null} [msg] FindApiReply msg
     * @property {pbapi.IApiModel|null} [data] FindApiReply data
     * @property {Array.<pbapi.IApiModel>|null} [list] FindApiReply list
     * @property {number|Long|null} [total] FindApiReply total
     */

    /**
     * Constructs a new FindApiReply.
     * @memberof pbapi
     * @classdesc Represents a FindApiReply.
     * @implements IFindApiReply
     * @constructor
     * @param {pbapi.IFindApiReply=} [properties] Properties to set
     */
    function FindApiReply(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindApiReply code.
     * @member {pbcommon.EnumCode} code
     * @memberof pbapi.FindApiReply
     * @instance
     */
    FindApiReply.prototype.code = 0

    /**
     * FindApiReply msg.
     * @member {string} msg
     * @memberof pbapi.FindApiReply
     * @instance
     */
    FindApiReply.prototype.msg = ''

    /**
     * FindApiReply data.
     * @member {pbapi.IApiModel|null|undefined} data
     * @memberof pbapi.FindApiReply
     * @instance
     */
    FindApiReply.prototype.data = null

    /**
     * FindApiReply list.
     * @member {Array.<pbapi.IApiModel>} list
     * @memberof pbapi.FindApiReply
     * @instance
     */
    FindApiReply.prototype.list = $util.emptyArray

    /**
     * FindApiReply total.
     * @member {number|Long} total
     * @memberof pbapi.FindApiReply
     * @instance
     */
    FindApiReply.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * Creates a new FindApiReply instance using the specified properties.
     * @function create
     * @memberof pbapi.FindApiReply
     * @static
     * @param {pbapi.IFindApiReply=} [properties] Properties to set
     * @returns {pbapi.FindApiReply} FindApiReply instance
     */
    FindApiReply.create = function create(properties) {
      return new FindApiReply(properties)
    }

    /**
     * Encodes the specified FindApiReply message. Does not implicitly {@link pbapi.FindApiReply.verify|verify} messages.
     * @function encode
     * @memberof pbapi.FindApiReply
     * @static
     * @param {pbapi.IFindApiReply} message FindApiReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindApiReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbapi.ApiModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbapi.ApiModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      return writer
    }

    /**
     * Encodes the specified FindApiReply message, length delimited. Does not implicitly {@link pbapi.FindApiReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbapi.FindApiReply
     * @static
     * @param {pbapi.IFindApiReply} message FindApiReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindApiReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindApiReply message from the specified reader or buffer.
     * @function decode
     * @memberof pbapi.FindApiReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbapi.FindApiReply} FindApiReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindApiReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbapi.FindApiReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 3:
            message.data = $root.pbapi.ApiModel.decode(reader, reader.uint32())
            break
          case 4:
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbapi.ApiModel.decode(reader, reader.uint32()))
            break
          case 5:
            message.total = reader.int64()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindApiReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbapi.FindApiReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbapi.FindApiReply} FindApiReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindApiReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindApiReply message.
     * @function verify
     * @memberof pbapi.FindApiReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindApiReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
            break
        }
      }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!$util.isString(message.msg)) { return 'msg: string expected' }
      }
      if (message.data != null && message.hasOwnProperty('data')) {
        var error = $root.pbapi.ApiModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbapi.ApiModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      return null
    }

    /**
     * Creates a FindApiReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbapi.FindApiReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbapi.FindApiReply} FindApiReply
     */
    FindApiReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbapi.FindApiReply) { return object }
      var message = new $root.pbapi.FindApiReply()
      switch (object.code) {
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
          break
      }
      if (object.msg != null) { message.msg = String(object.msg) }
      if (object.data != null) {
        if (typeof object.data !== 'object') { throw TypeError('.pbapi.FindApiReply.data: object expected') }
        message.data = $root.pbapi.ApiModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbapi.FindApiReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbapi.FindApiReply.list: object expected') }
          message.list[i] = $root.pbapi.ApiModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      return message
    }

    /**
     * Creates a plain object from a FindApiReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbapi.FindApiReply
     * @static
     * @param {pbapi.FindApiReply} message FindApiReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindApiReply.toObject = function toObject(message, options) {
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
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.msg != null && message.hasOwnProperty('msg')) { object.msg = message.msg }
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbapi.ApiModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbapi.ApiModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      return object
    }

    /**
     * Converts this FindApiReply to JSON.
     * @function toJSON
     * @memberof pbapi.FindApiReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindApiReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindApiReply
  })()

  pbapi.FindApiByCasbinRoleArgs = (function() {
    /**
     * Properties of a FindApiByCasbinRoleArgs.
     * @memberof pbapi
     * @interface IFindApiByCasbinRoleArgs
     * @property {number|Long|null} [role] FindApiByCasbinRoleArgs role
     */

    /**
     * Constructs a new FindApiByCasbinRoleArgs.
     * @memberof pbapi
     * @classdesc Represents a FindApiByCasbinRoleArgs.
     * @implements IFindApiByCasbinRoleArgs
     * @constructor
     * @param {pbapi.IFindApiByCasbinRoleArgs=} [properties] Properties to set
     */
    function FindApiByCasbinRoleArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindApiByCasbinRoleArgs role.
     * @member {number|Long} role
     * @memberof pbapi.FindApiByCasbinRoleArgs
     * @instance
     */
    FindApiByCasbinRoleArgs.prototype.role = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * Creates a new FindApiByCasbinRoleArgs instance using the specified properties.
     * @function create
     * @memberof pbapi.FindApiByCasbinRoleArgs
     * @static
     * @param {pbapi.IFindApiByCasbinRoleArgs=} [properties] Properties to set
     * @returns {pbapi.FindApiByCasbinRoleArgs} FindApiByCasbinRoleArgs instance
     */
    FindApiByCasbinRoleArgs.create = function create(properties) {
      return new FindApiByCasbinRoleArgs(properties)
    }

    /**
     * Encodes the specified FindApiByCasbinRoleArgs message. Does not implicitly {@link pbapi.FindApiByCasbinRoleArgs.verify|verify} messages.
     * @function encode
     * @memberof pbapi.FindApiByCasbinRoleArgs
     * @static
     * @param {pbapi.IFindApiByCasbinRoleArgs} message FindApiByCasbinRoleArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindApiByCasbinRoleArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.role != null && Object.hasOwnProperty.call(message, 'role')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.role) }
      return writer
    }

    /**
     * Encodes the specified FindApiByCasbinRoleArgs message, length delimited. Does not implicitly {@link pbapi.FindApiByCasbinRoleArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbapi.FindApiByCasbinRoleArgs
     * @static
     * @param {pbapi.IFindApiByCasbinRoleArgs} message FindApiByCasbinRoleArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindApiByCasbinRoleArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindApiByCasbinRoleArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbapi.FindApiByCasbinRoleArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbapi.FindApiByCasbinRoleArgs} FindApiByCasbinRoleArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindApiByCasbinRoleArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbapi.FindApiByCasbinRoleArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.role = reader.int64()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindApiByCasbinRoleArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbapi.FindApiByCasbinRoleArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbapi.FindApiByCasbinRoleArgs} FindApiByCasbinRoleArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindApiByCasbinRoleArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindApiByCasbinRoleArgs message.
     * @function verify
     * @memberof pbapi.FindApiByCasbinRoleArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindApiByCasbinRoleArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.role != null && message.hasOwnProperty('role')) {
        if (!$util.isInteger(message.role) && !(message.role && $util.isInteger(message.role.low) && $util.isInteger(message.role.high))) { return 'role: integer|Long expected' }
      }
      return null
    }

    /**
     * Creates a FindApiByCasbinRoleArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbapi.FindApiByCasbinRoleArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbapi.FindApiByCasbinRoleArgs} FindApiByCasbinRoleArgs
     */
    FindApiByCasbinRoleArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbapi.FindApiByCasbinRoleArgs) { return object }
      var message = new $root.pbapi.FindApiByCasbinRoleArgs()
      if (object.role != null) {
        if ($util.Long) { (message.role = $util.Long.fromValue(object.role)).unsigned = false } else if (typeof object.role === 'string') { message.role = parseInt(object.role, 10) } else if (typeof object.role === 'number') { message.role = object.role } else if (typeof object.role === 'object') { message.role = new $util.LongBits(object.role.low >>> 0, object.role.high >>> 0).toNumber() }
      }
      return message
    }

    /**
     * Creates a plain object from a FindApiByCasbinRoleArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbapi.FindApiByCasbinRoleArgs
     * @static
     * @param {pbapi.FindApiByCasbinRoleArgs} message FindApiByCasbinRoleArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindApiByCasbinRoleArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.role = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.role = options.longs === String ? '0' : 0 }
      }
      if (message.role != null && message.hasOwnProperty('role')) {
        if (typeof message.role === 'number') { object.role = options.longs === String ? String(message.role) : message.role } else { object.role = options.longs === String ? $util.Long.prototype.toString.call(message.role) : options.longs === Number ? new $util.LongBits(message.role.low >>> 0, message.role.high >>> 0).toNumber() : message.role }
      }
      return object
    }

    /**
     * Converts this FindApiByCasbinRoleArgs to JSON.
     * @function toJSON
     * @memberof pbapi.FindApiByCasbinRoleArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindApiByCasbinRoleArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindApiByCasbinRoleArgs
  })()

  pbapi.FindApiByCasbinRoleReply = (function() {
    /**
     * Properties of a FindApiByCasbinRoleReply.
     * @memberof pbapi
     * @interface IFindApiByCasbinRoleReply
     * @property {pbcommon.EnumCode|null} [code] FindApiByCasbinRoleReply code
     * @property {string|null} [msg] FindApiByCasbinRoleReply msg
     * @property {Array.<pbapi.IApiModel>|null} [list] FindApiByCasbinRoleReply list
     */

    /**
     * Constructs a new FindApiByCasbinRoleReply.
     * @memberof pbapi
     * @classdesc Represents a FindApiByCasbinRoleReply.
     * @implements IFindApiByCasbinRoleReply
     * @constructor
     * @param {pbapi.IFindApiByCasbinRoleReply=} [properties] Properties to set
     */
    function FindApiByCasbinRoleReply(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindApiByCasbinRoleReply code.
     * @member {pbcommon.EnumCode} code
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @instance
     */
    FindApiByCasbinRoleReply.prototype.code = 0

    /**
     * FindApiByCasbinRoleReply msg.
     * @member {string} msg
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @instance
     */
    FindApiByCasbinRoleReply.prototype.msg = ''

    /**
     * FindApiByCasbinRoleReply list.
     * @member {Array.<pbapi.IApiModel>} list
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @instance
     */
    FindApiByCasbinRoleReply.prototype.list = $util.emptyArray

    /**
     * Creates a new FindApiByCasbinRoleReply instance using the specified properties.
     * @function create
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @static
     * @param {pbapi.IFindApiByCasbinRoleReply=} [properties] Properties to set
     * @returns {pbapi.FindApiByCasbinRoleReply} FindApiByCasbinRoleReply instance
     */
    FindApiByCasbinRoleReply.create = function create(properties) {
      return new FindApiByCasbinRoleReply(properties)
    }

    /**
     * Encodes the specified FindApiByCasbinRoleReply message. Does not implicitly {@link pbapi.FindApiByCasbinRoleReply.verify|verify} messages.
     * @function encode
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @static
     * @param {pbapi.IFindApiByCasbinRoleReply} message FindApiByCasbinRoleReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindApiByCasbinRoleReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbapi.ApiModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      return writer
    }

    /**
     * Encodes the specified FindApiByCasbinRoleReply message, length delimited. Does not implicitly {@link pbapi.FindApiByCasbinRoleReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @static
     * @param {pbapi.IFindApiByCasbinRoleReply} message FindApiByCasbinRoleReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindApiByCasbinRoleReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindApiByCasbinRoleReply message from the specified reader or buffer.
     * @function decode
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbapi.FindApiByCasbinRoleReply} FindApiByCasbinRoleReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindApiByCasbinRoleReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbapi.FindApiByCasbinRoleReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 4:
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbapi.ApiModel.decode(reader, reader.uint32()))
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindApiByCasbinRoleReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbapi.FindApiByCasbinRoleReply} FindApiByCasbinRoleReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindApiByCasbinRoleReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindApiByCasbinRoleReply message.
     * @function verify
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindApiByCasbinRoleReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
            break
        }
      }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!$util.isString(message.msg)) { return 'msg: string expected' }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbapi.ApiModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      return null
    }

    /**
     * Creates a FindApiByCasbinRoleReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbapi.FindApiByCasbinRoleReply} FindApiByCasbinRoleReply
     */
    FindApiByCasbinRoleReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbapi.FindApiByCasbinRoleReply) { return object }
      var message = new $root.pbapi.FindApiByCasbinRoleReply()
      switch (object.code) {
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
          break
      }
      if (object.msg != null) { message.msg = String(object.msg) }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbapi.FindApiByCasbinRoleReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbapi.FindApiByCasbinRoleReply.list: object expected') }
          message.list[i] = $root.pbapi.ApiModel.fromObject(object.list[i])
        }
      }
      return message
    }

    /**
     * Creates a plain object from a FindApiByCasbinRoleReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @static
     * @param {pbapi.FindApiByCasbinRoleReply} message FindApiByCasbinRoleReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindApiByCasbinRoleReply.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.list = [] }
      if (options.defaults) {
        object.code = options.enums === String ? 'None' : 0
        object.msg = ''
      }
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.msg != null && message.hasOwnProperty('msg')) { object.msg = message.msg }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbapi.ApiModel.toObject(message.list[j], options) }
      }
      return object
    }

    /**
     * Converts this FindApiByCasbinRoleReply to JSON.
     * @function toJSON
     * @memberof pbapi.FindApiByCasbinRoleReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindApiByCasbinRoleReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindApiByCasbinRoleReply
  })()

  pbapi.SetApiByCasbinRoleArgs = (function() {
    /**
     * Properties of a SetApiByCasbinRoleArgs.
     * @memberof pbapi
     * @interface ISetApiByCasbinRoleArgs
     * @property {Array.<pbapi.IApiModel>|null} [list] SetApiByCasbinRoleArgs list
     * @property {number|Long|null} [role] SetApiByCasbinRoleArgs role
     */

    /**
     * Constructs a new SetApiByCasbinRoleArgs.
     * @memberof pbapi
     * @classdesc Represents a SetApiByCasbinRoleArgs.
     * @implements ISetApiByCasbinRoleArgs
     * @constructor
     * @param {pbapi.ISetApiByCasbinRoleArgs=} [properties] Properties to set
     */
    function SetApiByCasbinRoleArgs(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * SetApiByCasbinRoleArgs list.
     * @member {Array.<pbapi.IApiModel>} list
     * @memberof pbapi.SetApiByCasbinRoleArgs
     * @instance
     */
    SetApiByCasbinRoleArgs.prototype.list = $util.emptyArray

    /**
     * SetApiByCasbinRoleArgs role.
     * @member {number|Long} role
     * @memberof pbapi.SetApiByCasbinRoleArgs
     * @instance
     */
    SetApiByCasbinRoleArgs.prototype.role = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * Creates a new SetApiByCasbinRoleArgs instance using the specified properties.
     * @function create
     * @memberof pbapi.SetApiByCasbinRoleArgs
     * @static
     * @param {pbapi.ISetApiByCasbinRoleArgs=} [properties] Properties to set
     * @returns {pbapi.SetApiByCasbinRoleArgs} SetApiByCasbinRoleArgs instance
     */
    SetApiByCasbinRoleArgs.create = function create(properties) {
      return new SetApiByCasbinRoleArgs(properties)
    }

    /**
     * Encodes the specified SetApiByCasbinRoleArgs message. Does not implicitly {@link pbapi.SetApiByCasbinRoleArgs.verify|verify} messages.
     * @function encode
     * @memberof pbapi.SetApiByCasbinRoleArgs
     * @static
     * @param {pbapi.ISetApiByCasbinRoleArgs} message SetApiByCasbinRoleArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetApiByCasbinRoleArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbapi.ApiModel.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      }
      if (message.role != null && Object.hasOwnProperty.call(message, 'role')) { writer.uint32(/* id 2, wireType 0 =*/16).int64(message.role) }
      return writer
    }

    /**
     * Encodes the specified SetApiByCasbinRoleArgs message, length delimited. Does not implicitly {@link pbapi.SetApiByCasbinRoleArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbapi.SetApiByCasbinRoleArgs
     * @static
     * @param {pbapi.ISetApiByCasbinRoleArgs} message SetApiByCasbinRoleArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetApiByCasbinRoleArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a SetApiByCasbinRoleArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbapi.SetApiByCasbinRoleArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbapi.SetApiByCasbinRoleArgs} SetApiByCasbinRoleArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetApiByCasbinRoleArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbapi.SetApiByCasbinRoleArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbapi.ApiModel.decode(reader, reader.uint32()))
            break
          case 2:
            message.role = reader.int64()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a SetApiByCasbinRoleArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbapi.SetApiByCasbinRoleArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbapi.SetApiByCasbinRoleArgs} SetApiByCasbinRoleArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetApiByCasbinRoleArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a SetApiByCasbinRoleArgs message.
     * @function verify
     * @memberof pbapi.SetApiByCasbinRoleArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetApiByCasbinRoleArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbapi.ApiModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.role != null && message.hasOwnProperty('role')) {
        if (!$util.isInteger(message.role) && !(message.role && $util.isInteger(message.role.low) && $util.isInteger(message.role.high))) { return 'role: integer|Long expected' }
      }
      return null
    }

    /**
     * Creates a SetApiByCasbinRoleArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbapi.SetApiByCasbinRoleArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbapi.SetApiByCasbinRoleArgs} SetApiByCasbinRoleArgs
     */
    SetApiByCasbinRoleArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbapi.SetApiByCasbinRoleArgs) { return object }
      var message = new $root.pbapi.SetApiByCasbinRoleArgs()
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbapi.SetApiByCasbinRoleArgs.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbapi.SetApiByCasbinRoleArgs.list: object expected') }
          message.list[i] = $root.pbapi.ApiModel.fromObject(object.list[i])
        }
      }
      if (object.role != null) {
        if ($util.Long) { (message.role = $util.Long.fromValue(object.role)).unsigned = false } else if (typeof object.role === 'string') { message.role = parseInt(object.role, 10) } else if (typeof object.role === 'number') { message.role = object.role } else if (typeof object.role === 'object') { message.role = new $util.LongBits(object.role.low >>> 0, object.role.high >>> 0).toNumber() }
      }
      return message
    }

    /**
     * Creates a plain object from a SetApiByCasbinRoleArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbapi.SetApiByCasbinRoleArgs
     * @static
     * @param {pbapi.SetApiByCasbinRoleArgs} message SetApiByCasbinRoleArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetApiByCasbinRoleArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.list = [] }
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.role = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.role = options.longs === String ? '0' : 0 }
      }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbapi.ApiModel.toObject(message.list[j], options) }
      }
      if (message.role != null && message.hasOwnProperty('role')) {
        if (typeof message.role === 'number') { object.role = options.longs === String ? String(message.role) : message.role } else { object.role = options.longs === String ? $util.Long.prototype.toString.call(message.role) : options.longs === Number ? new $util.LongBits(message.role.low >>> 0, message.role.high >>> 0).toNumber() : message.role }
      }
      return object
    }

    /**
     * Converts this SetApiByCasbinRoleArgs to JSON.
     * @function toJSON
     * @memberof pbapi.SetApiByCasbinRoleArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetApiByCasbinRoleArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return SetApiByCasbinRoleArgs
  })()

  pbapi.Api = (function() {
    /**
     * Constructs a new Api service.
     * @memberof pbapi
     * @classdesc Represents an Api
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Api(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Api.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Api

    /**
     * Creates new Api service using the specified rpc implementation.
     * @function create
     * @memberof pbapi.Api
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Api} RPC service. Useful where requests and/or responses are streamed.
     */
    Api.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
     * Callback as used by {@link pbapi.Api#createApi}.
     * @memberof pbapi.Api
     * @typedef CreateApiCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls CreateApi.
     * @function createApi
     * @memberof pbapi.Api
     * @instance
     * @param {pbapi.IApiModel} request ApiModel message or plain object
     * @param {pbapi.Api.CreateApiCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Api.prototype.createApi = function createApi(request, callback) {
      return this.rpcCall(createApi, $root.pbapi.ApiModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreateApi' })

    /**
     * Calls CreateApi.
     * @function createApi
     * @memberof pbapi.Api
     * @instance
     * @param {pbapi.IApiModel} request ApiModel message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbapi.Api#updateApi}.
     * @memberof pbapi.Api
     * @typedef UpdateApiCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls UpdateApi.
     * @function updateApi
     * @memberof pbapi.Api
     * @instance
     * @param {pbapi.IApiModel} request ApiModel message or plain object
     * @param {pbapi.Api.UpdateApiCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Api.prototype.updateApi = function updateApi(request, callback) {
      return this.rpcCall(updateApi, $root.pbapi.ApiModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdateApi' })

    /**
     * Calls UpdateApi.
     * @function updateApi
     * @memberof pbapi.Api
     * @instance
     * @param {pbapi.IApiModel} request ApiModel message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbapi.Api#deleteApi}.
     * @memberof pbapi.Api
     * @typedef DeleteApiCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls DeleteApi.
     * @function deleteApi
     * @memberof pbapi.Api
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @param {pbapi.Api.DeleteApiCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Api.prototype.deleteApi = function deleteApi(request, callback) {
      return this.rpcCall(deleteApi, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeleteApi' })

    /**
     * Calls DeleteApi.
     * @function deleteApi
     * @memberof pbapi.Api
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbapi.Api#findApiById}.
     * @memberof pbapi.Api
     * @typedef FindApiByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbapi.FindApiReply} [response] FindApiReply
     */

    /**
     * Calls FindApiById.
     * @function findApiById
     * @memberof pbapi.Api
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @param {pbapi.Api.FindApiByIdCallback} callback Node-style callback called with the error, if any, and FindApiReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Api.prototype.findApiById = function findApiById(request, callback) {
      return this.rpcCall(findApiById, $root.pbcommon.IdArgs, $root.pbapi.FindApiReply, request, callback)
    }, 'name', { value: 'FindApiById' })

    /**
     * Calls FindApiById.
     * @function findApiById
     * @memberof pbapi.Api
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @returns {Promise<pbapi.FindApiReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbapi.Api#findApiList}.
     * @memberof pbapi.Api
     * @typedef FindApiListCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbapi.FindApiReply} [response] FindApiReply
     */

    /**
     * Calls FindApiList.
     * @function findApiList
     * @memberof pbapi.Api
     * @instance
     * @param {pbapi.IFindApiArgs} request FindApiArgs message or plain object
     * @param {pbapi.Api.FindApiListCallback} callback Node-style callback called with the error, if any, and FindApiReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Api.prototype.findApiList = function findApiList(request, callback) {
      return this.rpcCall(findApiList, $root.pbapi.FindApiArgs, $root.pbapi.FindApiReply, request, callback)
    }, 'name', { value: 'FindApiList' })

    /**
     * Calls FindApiList.
     * @function findApiList
     * @memberof pbapi.Api
     * @instance
     * @param {pbapi.IFindApiArgs} request FindApiArgs message or plain object
     * @returns {Promise<pbapi.FindApiReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbapi.Api#findApiByCasbinRole}.
     * @memberof pbapi.Api
     * @typedef FindApiByCasbinRoleCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbapi.FindApiByCasbinRoleReply} [response] FindApiByCasbinRoleReply
     */

    /**
     * Calls FindApiByCasbinRole.
     * @function findApiByCasbinRole
     * @memberof pbapi.Api
     * @instance
     * @param {pbapi.IFindApiByCasbinRoleArgs} request FindApiByCasbinRoleArgs message or plain object
     * @param {pbapi.Api.FindApiByCasbinRoleCallback} callback Node-style callback called with the error, if any, and FindApiByCasbinRoleReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Api.prototype.findApiByCasbinRole = function findApiByCasbinRole(request, callback) {
      return this.rpcCall(findApiByCasbinRole, $root.pbapi.FindApiByCasbinRoleArgs, $root.pbapi.FindApiByCasbinRoleReply, request, callback)
    }, 'name', { value: 'FindApiByCasbinRole' })

    /**
     * Calls FindApiByCasbinRole.
     * @function findApiByCasbinRole
     * @memberof pbapi.Api
     * @instance
     * @param {pbapi.IFindApiByCasbinRoleArgs} request FindApiByCasbinRoleArgs message or plain object
     * @returns {Promise<pbapi.FindApiByCasbinRoleReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbapi.Api#setApiByCasbinRole}.
     * @memberof pbapi.Api
     * @typedef SetApiByCasbinRoleCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls SetApiByCasbinRole.
     * @function setApiByCasbinRole
     * @memberof pbapi.Api
     * @instance
     * @param {pbapi.ISetApiByCasbinRoleArgs} request SetApiByCasbinRoleArgs message or plain object
     * @param {pbapi.Api.SetApiByCasbinRoleCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Api.prototype.setApiByCasbinRole = function setApiByCasbinRole(request, callback) {
      return this.rpcCall(setApiByCasbinRole, $root.pbapi.SetApiByCasbinRoleArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'SetApiByCasbinRole' })

    /**
     * Calls SetApiByCasbinRole.
     * @function setApiByCasbinRole
     * @memberof pbapi.Api
     * @instance
     * @param {pbapi.ISetApiByCasbinRoleArgs} request SetApiByCasbinRoleArgs message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    return Api
  })()

  return pbapi
})()

$root.pbpermission = (function() {
  /**
   * Namespace pbpermission.
   * @exports pbpermission
   * @namespace
   */
  var pbpermission = {}

  pbpermission.PermissionModel = (function() {
    /**
     * Properties of a PermissionModel.
     * @memberof pbpermission
     * @interface IPermissionModel
     * @property {number|Long|null} [id] PermissionModel id
     * @property {string|null} [createdAt] PermissionModel createdAt
     * @property {string|null} [updatedAt] PermissionModel updatedAt
     * @property {number|Long|null} [parentId] PermissionModel parentId
     * @property {pbpermission.PermissionType|null} [permissionType] PermissionModel permissionType
     * @property {string|null} [path] PermissionModel path
     * @property {string|null} [name] PermissionModel name
     * @property {boolean|null} [hidden] PermissionModel hidden
     * @property {string|null} [component] PermissionModel component
     * @property {string|null} [redirect] PermissionModel redirect
     * @property {string|null} [icon] PermissionModel icon
     * @property {boolean|null} [keepalive] PermissionModel keepalive
     * @property {string|null} [title] PermissionModel title
     * @property {number|Long|null} [appId] PermissionModel appId
     * @property {Array.<pbpermission.IPermissionModel>|null} [children] PermissionModel children
     * @property {number|null} [sort] PermissionModel sort
     */

    /**
     * Constructs a new PermissionModel.
     * @memberof pbpermission
     * @classdesc Represents a PermissionModel.
     * @implements IPermissionModel
     * @constructor
     * @param {pbpermission.IPermissionModel=} [properties] Properties to set
     */
    function PermissionModel(properties) {
      this.children = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * PermissionModel id.
     * @member {number|Long} id
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * PermissionModel createdAt.
     * @member {string} createdAt
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.createdAt = ''

    /**
     * PermissionModel updatedAt.
     * @member {string} updatedAt
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.updatedAt = ''

    /**
     * PermissionModel parentId.
     * @member {number|Long} parentId
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.parentId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * PermissionModel permissionType.
     * @member {pbpermission.PermissionType} permissionType
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.permissionType = 0

    /**
     * PermissionModel path.
     * @member {string} path
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.path = ''

    /**
     * PermissionModel name.
     * @member {string} name
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.name = ''

    /**
     * PermissionModel hidden.
     * @member {boolean} hidden
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.hidden = false

    /**
     * PermissionModel component.
     * @member {string} component
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.component = ''

    /**
     * PermissionModel redirect.
     * @member {string} redirect
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.redirect = ''

    /**
     * PermissionModel icon.
     * @member {string} icon
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.icon = ''

    /**
     * PermissionModel keepalive.
     * @member {boolean} keepalive
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.keepalive = false

    /**
     * PermissionModel title.
     * @member {string} title
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.title = ''

    /**
     * PermissionModel appId.
     * @member {number|Long} appId
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.appId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * PermissionModel children.
     * @member {Array.<pbpermission.IPermissionModel>} children
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.children = $util.emptyArray

    /**
     * PermissionModel sort.
     * @member {number} sort
     * @memberof pbpermission.PermissionModel
     * @instance
     */
    PermissionModel.prototype.sort = 0

    /**
     * Creates a new PermissionModel instance using the specified properties.
     * @function create
     * @memberof pbpermission.PermissionModel
     * @static
     * @param {pbpermission.IPermissionModel=} [properties] Properties to set
     * @returns {pbpermission.PermissionModel} PermissionModel instance
     */
    PermissionModel.create = function create(properties) {
      return new PermissionModel(properties)
    }

    /**
     * Encodes the specified PermissionModel message. Does not implicitly {@link pbpermission.PermissionModel.verify|verify} messages.
     * @function encode
     * @memberof pbpermission.PermissionModel
     * @static
     * @param {pbpermission.IPermissionModel} message PermissionModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PermissionModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.parentId != null && Object.hasOwnProperty.call(message, 'parentId')) { writer.uint32(/* id 4, wireType 0 =*/32).int64(message.parentId) }
      if (message.permissionType != null && Object.hasOwnProperty.call(message, 'permissionType')) { writer.uint32(/* id 5, wireType 0 =*/40).int32(message.permissionType) }
      if (message.path != null && Object.hasOwnProperty.call(message, 'path')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.path) }
      if (message.name != null && Object.hasOwnProperty.call(message, 'name')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.name) }
      if (message.hidden != null && Object.hasOwnProperty.call(message, 'hidden')) { writer.uint32(/* id 8, wireType 0 =*/64).bool(message.hidden) }
      if (message.component != null && Object.hasOwnProperty.call(message, 'component')) { writer.uint32(/* id 9, wireType 2 =*/74).string(message.component) }
      if (message.redirect != null && Object.hasOwnProperty.call(message, 'redirect')) { writer.uint32(/* id 10, wireType 2 =*/82).string(message.redirect) }
      if (message.icon != null && Object.hasOwnProperty.call(message, 'icon')) { writer.uint32(/* id 11, wireType 2 =*/90).string(message.icon) }
      if (message.keepalive != null && Object.hasOwnProperty.call(message, 'keepalive')) { writer.uint32(/* id 12, wireType 0 =*/96).bool(message.keepalive) }
      if (message.title != null && Object.hasOwnProperty.call(message, 'title')) { writer.uint32(/* id 13, wireType 2 =*/106).string(message.title) }
      if (message.appId != null && Object.hasOwnProperty.call(message, 'appId')) { writer.uint32(/* id 14, wireType 0 =*/112).int64(message.appId) }
      if (message.children != null && message.children.length) {
        for (var i = 0; i < message.children.length; ++i) { $root.pbpermission.PermissionModel.encode(message.children[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim() }
      }
      if (message.sort != null && Object.hasOwnProperty.call(message, 'sort')) { writer.uint32(/* id 16, wireType 0 =*/128).int32(message.sort) }
      return writer
    }

    /**
     * Encodes the specified PermissionModel message, length delimited. Does not implicitly {@link pbpermission.PermissionModel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbpermission.PermissionModel
     * @static
     * @param {pbpermission.IPermissionModel} message PermissionModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PermissionModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a PermissionModel message from the specified reader or buffer.
     * @function decode
     * @memberof pbpermission.PermissionModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbpermission.PermissionModel} PermissionModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PermissionModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbpermission.PermissionModel()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.id = reader.int64()
            break
          case 2:
            message.createdAt = reader.string()
            break
          case 3:
            message.updatedAt = reader.string()
            break
          case 4:
            message.parentId = reader.int64()
            break
          case 5:
            message.permissionType = reader.int32()
            break
          case 6:
            message.path = reader.string()
            break
          case 7:
            message.name = reader.string()
            break
          case 8:
            message.hidden = reader.bool()
            break
          case 9:
            message.component = reader.string()
            break
          case 10:
            message.redirect = reader.string()
            break
          case 11:
            message.icon = reader.string()
            break
          case 12:
            message.keepalive = reader.bool()
            break
          case 13:
            message.title = reader.string()
            break
          case 14:
            message.appId = reader.int64()
            break
          case 15:
            if (!(message.children && message.children.length)) { message.children = [] }
            message.children.push($root.pbpermission.PermissionModel.decode(reader, reader.uint32()))
            break
          case 16:
            message.sort = reader.int32()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a PermissionModel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbpermission.PermissionModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbpermission.PermissionModel} PermissionModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PermissionModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a PermissionModel message.
     * @function verify
     * @memberof pbpermission.PermissionModel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PermissionModel.verify = function verify(message) {
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
      if (message.parentId != null && message.hasOwnProperty('parentId')) {
        if (!$util.isInteger(message.parentId) && !(message.parentId && $util.isInteger(message.parentId.low) && $util.isInteger(message.parentId.high))) { return 'parentId: integer|Long expected' }
      }
      if (message.permissionType != null && message.hasOwnProperty('permissionType')) {
        switch (message.permissionType) {
          default:
            return 'permissionType: enum value expected'
          case 0:
          case 1:
          case 2:
            break
        }
      }
      if (message.path != null && message.hasOwnProperty('path')) {
        if (!$util.isString(message.path)) { return 'path: string expected' }
      }
      if (message.name != null && message.hasOwnProperty('name')) {
        if (!$util.isString(message.name)) { return 'name: string expected' }
      }
      if (message.hidden != null && message.hasOwnProperty('hidden')) {
        if (typeof message.hidden !== 'boolean') { return 'hidden: boolean expected' }
      }
      if (message.component != null && message.hasOwnProperty('component')) {
        if (!$util.isString(message.component)) { return 'component: string expected' }
      }
      if (message.redirect != null && message.hasOwnProperty('redirect')) {
        if (!$util.isString(message.redirect)) { return 'redirect: string expected' }
      }
      if (message.icon != null && message.hasOwnProperty('icon')) {
        if (!$util.isString(message.icon)) { return 'icon: string expected' }
      }
      if (message.keepalive != null && message.hasOwnProperty('keepalive')) {
        if (typeof message.keepalive !== 'boolean') { return 'keepalive: boolean expected' }
      }
      if (message.title != null && message.hasOwnProperty('title')) {
        if (!$util.isString(message.title)) { return 'title: string expected' }
      }
      if (message.appId != null && message.hasOwnProperty('appId')) {
        if (!$util.isInteger(message.appId) && !(message.appId && $util.isInteger(message.appId.low) && $util.isInteger(message.appId.high))) { return 'appId: integer|Long expected' }
      }
      if (message.children != null && message.hasOwnProperty('children')) {
        if (!Array.isArray(message.children)) { return 'children: array expected' }
        for (var i = 0; i < message.children.length; ++i) {
          var error = $root.pbpermission.PermissionModel.verify(message.children[i])
          if (error) { return 'children.' + error }
        }
      }
      if (message.sort != null && message.hasOwnProperty('sort')) {
        if (!$util.isInteger(message.sort)) { return 'sort: integer expected' }
      }
      return null
    }

    /**
     * Creates a PermissionModel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbpermission.PermissionModel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbpermission.PermissionModel} PermissionModel
     */
    PermissionModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbpermission.PermissionModel) { return object }
      var message = new $root.pbpermission.PermissionModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.parentId != null) {
        if ($util.Long) { (message.parentId = $util.Long.fromValue(object.parentId)).unsigned = false } else if (typeof object.parentId === 'string') { message.parentId = parseInt(object.parentId, 10) } else if (typeof object.parentId === 'number') { message.parentId = object.parentId } else if (typeof object.parentId === 'object') { message.parentId = new $util.LongBits(object.parentId.low >>> 0, object.parentId.high >>> 0).toNumber() }
      }
      switch (object.permissionType) {
        case 'PermissionTypeNone':
        case 0:
          message.permissionType = 0
          break
        case 'MENU':
        case 1:
          message.permissionType = 1
          break
        case 'BUTTON':
        case 2:
          message.permissionType = 2
          break
      }
      if (object.path != null) { message.path = String(object.path) }
      if (object.name != null) { message.name = String(object.name) }
      if (object.hidden != null) { message.hidden = Boolean(object.hidden) }
      if (object.component != null) { message.component = String(object.component) }
      if (object.redirect != null) { message.redirect = String(object.redirect) }
      if (object.icon != null) { message.icon = String(object.icon) }
      if (object.keepalive != null) { message.keepalive = Boolean(object.keepalive) }
      if (object.title != null) { message.title = String(object.title) }
      if (object.appId != null) {
        if ($util.Long) { (message.appId = $util.Long.fromValue(object.appId)).unsigned = false } else if (typeof object.appId === 'string') { message.appId = parseInt(object.appId, 10) } else if (typeof object.appId === 'number') { message.appId = object.appId } else if (typeof object.appId === 'object') { message.appId = new $util.LongBits(object.appId.low >>> 0, object.appId.high >>> 0).toNumber() }
      }
      if (object.children) {
        if (!Array.isArray(object.children)) { throw TypeError('.pbpermission.PermissionModel.children: array expected') }
        message.children = []
        for (var i = 0; i < object.children.length; ++i) {
          if (typeof object.children[i] !== 'object') { throw TypeError('.pbpermission.PermissionModel.children: object expected') }
          message.children[i] = $root.pbpermission.PermissionModel.fromObject(object.children[i])
        }
      }
      if (object.sort != null) { message.sort = object.sort | 0 }
      return message
    }

    /**
     * Creates a plain object from a PermissionModel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbpermission.PermissionModel
     * @static
     * @param {pbpermission.PermissionModel} message PermissionModel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PermissionModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.children = [] }
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.parentId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.parentId = options.longs === String ? '0' : 0 }
        object.permissionType = options.enums === String ? 'PermissionTypeNone' : 0
        object.path = ''
        object.name = ''
        object.hidden = false
        object.component = ''
        object.redirect = ''
        object.icon = ''
        object.keepalive = false
        object.title = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.appId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.appId = options.longs === String ? '0' : 0 }
        object.sort = 0
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.parentId != null && message.hasOwnProperty('parentId')) {
        if (typeof message.parentId === 'number') { object.parentId = options.longs === String ? String(message.parentId) : message.parentId } else { object.parentId = options.longs === String ? $util.Long.prototype.toString.call(message.parentId) : options.longs === Number ? new $util.LongBits(message.parentId.low >>> 0, message.parentId.high >>> 0).toNumber() : message.parentId }
      }
      if (message.permissionType != null && message.hasOwnProperty('permissionType')) { object.permissionType = options.enums === String ? $root.pbpermission.PermissionType[message.permissionType] : message.permissionType }
      if (message.path != null && message.hasOwnProperty('path')) { object.path = message.path }
      if (message.name != null && message.hasOwnProperty('name')) { object.name = message.name }
      if (message.hidden != null && message.hasOwnProperty('hidden')) { object.hidden = message.hidden }
      if (message.component != null && message.hasOwnProperty('component')) { object.component = message.component }
      if (message.redirect != null && message.hasOwnProperty('redirect')) { object.redirect = message.redirect }
      if (message.icon != null && message.hasOwnProperty('icon')) { object.icon = message.icon }
      if (message.keepalive != null && message.hasOwnProperty('keepalive')) { object.keepalive = message.keepalive }
      if (message.title != null && message.hasOwnProperty('title')) { object.title = message.title }
      if (message.appId != null && message.hasOwnProperty('appId')) {
        if (typeof message.appId === 'number') { object.appId = options.longs === String ? String(message.appId) : message.appId } else { object.appId = options.longs === String ? $util.Long.prototype.toString.call(message.appId) : options.longs === Number ? new $util.LongBits(message.appId.low >>> 0, message.appId.high >>> 0).toNumber() : message.appId }
      }
      if (message.children && message.children.length) {
        object.children = []
        for (var j = 0; j < message.children.length; ++j) { object.children[j] = $root.pbpermission.PermissionModel.toObject(message.children[j], options) }
      }
      if (message.sort != null && message.hasOwnProperty('sort')) { object.sort = message.sort }
      return object
    }

    /**
     * Converts this PermissionModel to JSON.
     * @function toJSON
     * @memberof pbpermission.PermissionModel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PermissionModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return PermissionModel
  })()

  /**
   * PermissionType enum.
   * @name pbpermission.PermissionType
   * @enum {number}
   * @property {number} PermissionTypeNone=0 PermissionTypeNone value
   * @property {number} MENU=1 MENU value
   * @property {number} BUTTON=2 BUTTON value
   */
  pbpermission.PermissionType = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'PermissionTypeNone'] = 0
    values[valuesById[1] = 'MENU'] = 1
    values[valuesById[2] = 'BUTTON'] = 2
    return values
  })()

  pbpermission.FindPermissionArgs = (function() {
    /**
     * Properties of a FindPermissionArgs.
     * @memberof pbpermission
     * @interface IFindPermissionArgs
     * @property {pbcommon.IPageInfo|null} [pageInfo] FindPermissionArgs pageInfo
     * @property {pbpermission.IPermissionModel|null} [query] FindPermissionArgs query
     */

    /**
     * Constructs a new FindPermissionArgs.
     * @memberof pbpermission
     * @classdesc Represents a FindPermissionArgs.
     * @implements IFindPermissionArgs
     * @constructor
     * @param {pbpermission.IFindPermissionArgs=} [properties] Properties to set
     */
    function FindPermissionArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindPermissionArgs pageInfo.
     * @member {pbcommon.IPageInfo|null|undefined} pageInfo
     * @memberof pbpermission.FindPermissionArgs
     * @instance
     */
    FindPermissionArgs.prototype.pageInfo = null

    /**
     * FindPermissionArgs query.
     * @member {pbpermission.IPermissionModel|null|undefined} query
     * @memberof pbpermission.FindPermissionArgs
     * @instance
     */
    FindPermissionArgs.prototype.query = null

    /**
     * Creates a new FindPermissionArgs instance using the specified properties.
     * @function create
     * @memberof pbpermission.FindPermissionArgs
     * @static
     * @param {pbpermission.IFindPermissionArgs=} [properties] Properties to set
     * @returns {pbpermission.FindPermissionArgs} FindPermissionArgs instance
     */
    FindPermissionArgs.create = function create(properties) {
      return new FindPermissionArgs(properties)
    }

    /**
     * Encodes the specified FindPermissionArgs message. Does not implicitly {@link pbpermission.FindPermissionArgs.verify|verify} messages.
     * @function encode
     * @memberof pbpermission.FindPermissionArgs
     * @static
     * @param {pbpermission.IFindPermissionArgs} message FindPermissionArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindPermissionArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbpermission.PermissionModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
     * Encodes the specified FindPermissionArgs message, length delimited. Does not implicitly {@link pbpermission.FindPermissionArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbpermission.FindPermissionArgs
     * @static
     * @param {pbpermission.IFindPermissionArgs} message FindPermissionArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindPermissionArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindPermissionArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbpermission.FindPermissionArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbpermission.FindPermissionArgs} FindPermissionArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindPermissionArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbpermission.FindPermissionArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          case 2:
            message.query = $root.pbpermission.PermissionModel.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindPermissionArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbpermission.FindPermissionArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbpermission.FindPermissionArgs} FindPermissionArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindPermissionArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindPermissionArgs message.
     * @function verify
     * @memberof pbpermission.FindPermissionArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindPermissionArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbpermission.PermissionModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
     * Creates a FindPermissionArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbpermission.FindPermissionArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbpermission.FindPermissionArgs} FindPermissionArgs
     */
    FindPermissionArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbpermission.FindPermissionArgs) { return object }
      var message = new $root.pbpermission.FindPermissionArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbpermission.FindPermissionArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbpermission.FindPermissionArgs.query: object expected') }
        message.query = $root.pbpermission.PermissionModel.fromObject(object.query)
      }
      return message
    }

    /**
     * Creates a plain object from a FindPermissionArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbpermission.FindPermissionArgs
     * @static
     * @param {pbpermission.FindPermissionArgs} message FindPermissionArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindPermissionArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbpermission.PermissionModel.toObject(message.query, options) }
      return object
    }

    /**
     * Converts this FindPermissionArgs to JSON.
     * @function toJSON
     * @memberof pbpermission.FindPermissionArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindPermissionArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindPermissionArgs
  })()

  pbpermission.FindPermissionReply = (function() {
    /**
     * Properties of a FindPermissionReply.
     * @memberof pbpermission
     * @interface IFindPermissionReply
     * @property {pbcommon.EnumCode|null} [code] FindPermissionReply code
     * @property {string|null} [msg] FindPermissionReply msg
     * @property {pbpermission.IPermissionModel|null} [data] FindPermissionReply data
     * @property {Array.<pbpermission.IPermissionModel>|null} [list] FindPermissionReply list
     * @property {number|Long|null} [total] FindPermissionReply total
     * @property {Array.<number|Long>|null} [selectedItem] FindPermissionReply selectedItem
     */

    /**
     * Constructs a new FindPermissionReply.
     * @memberof pbpermission
     * @classdesc Represents a FindPermissionReply.
     * @implements IFindPermissionReply
     * @constructor
     * @param {pbpermission.IFindPermissionReply=} [properties] Properties to set
     */
    function FindPermissionReply(properties) {
      this.list = []
      this.selectedItem = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindPermissionReply code.
     * @member {pbcommon.EnumCode} code
     * @memberof pbpermission.FindPermissionReply
     * @instance
     */
    FindPermissionReply.prototype.code = 0

    /**
     * FindPermissionReply msg.
     * @member {string} msg
     * @memberof pbpermission.FindPermissionReply
     * @instance
     */
    FindPermissionReply.prototype.msg = ''

    /**
     * FindPermissionReply data.
     * @member {pbpermission.IPermissionModel|null|undefined} data
     * @memberof pbpermission.FindPermissionReply
     * @instance
     */
    FindPermissionReply.prototype.data = null

    /**
     * FindPermissionReply list.
     * @member {Array.<pbpermission.IPermissionModel>} list
     * @memberof pbpermission.FindPermissionReply
     * @instance
     */
    FindPermissionReply.prototype.list = $util.emptyArray

    /**
     * FindPermissionReply total.
     * @member {number|Long} total
     * @memberof pbpermission.FindPermissionReply
     * @instance
     */
    FindPermissionReply.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * FindPermissionReply selectedItem.
     * @member {Array.<number|Long>} selectedItem
     * @memberof pbpermission.FindPermissionReply
     * @instance
     */
    FindPermissionReply.prototype.selectedItem = $util.emptyArray

    /**
     * Creates a new FindPermissionReply instance using the specified properties.
     * @function create
     * @memberof pbpermission.FindPermissionReply
     * @static
     * @param {pbpermission.IFindPermissionReply=} [properties] Properties to set
     * @returns {pbpermission.FindPermissionReply} FindPermissionReply instance
     */
    FindPermissionReply.create = function create(properties) {
      return new FindPermissionReply(properties)
    }

    /**
     * Encodes the specified FindPermissionReply message. Does not implicitly {@link pbpermission.FindPermissionReply.verify|verify} messages.
     * @function encode
     * @memberof pbpermission.FindPermissionReply
     * @static
     * @param {pbpermission.IFindPermissionReply} message FindPermissionReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindPermissionReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbpermission.PermissionModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbpermission.PermissionModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      if (message.selectedItem != null && message.selectedItem.length) {
        writer.uint32(/* id 6, wireType 2 =*/50).fork()
        for (var i = 0; i < message.selectedItem.length; ++i) { writer.int64(message.selectedItem[i]) }
        writer.ldelim()
      }
      return writer
    }

    /**
     * Encodes the specified FindPermissionReply message, length delimited. Does not implicitly {@link pbpermission.FindPermissionReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbpermission.FindPermissionReply
     * @static
     * @param {pbpermission.IFindPermissionReply} message FindPermissionReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindPermissionReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindPermissionReply message from the specified reader or buffer.
     * @function decode
     * @memberof pbpermission.FindPermissionReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbpermission.FindPermissionReply} FindPermissionReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindPermissionReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbpermission.FindPermissionReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 3:
            message.data = $root.pbpermission.PermissionModel.decode(reader, reader.uint32())
            break
          case 4:
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbpermission.PermissionModel.decode(reader, reader.uint32()))
            break
          case 5:
            message.total = reader.int64()
            break
          case 6:
            if (!(message.selectedItem && message.selectedItem.length)) { message.selectedItem = [] }
            if ((tag & 7) === 2) {
              var end2 = reader.uint32() + reader.pos
              while (reader.pos < end2) { message.selectedItem.push(reader.int64()) }
            } else { message.selectedItem.push(reader.int64()) }
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindPermissionReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbpermission.FindPermissionReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbpermission.FindPermissionReply} FindPermissionReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindPermissionReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindPermissionReply message.
     * @function verify
     * @memberof pbpermission.FindPermissionReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindPermissionReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
            break
        }
      }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!$util.isString(message.msg)) { return 'msg: string expected' }
      }
      if (message.data != null && message.hasOwnProperty('data')) {
        var error = $root.pbpermission.PermissionModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbpermission.PermissionModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      if (message.selectedItem != null && message.hasOwnProperty('selectedItem')) {
        if (!Array.isArray(message.selectedItem)) { return 'selectedItem: array expected' }
        for (var i = 0; i < message.selectedItem.length; ++i) {
          if (!$util.isInteger(message.selectedItem[i]) && !(message.selectedItem[i] && $util.isInteger(message.selectedItem[i].low) && $util.isInteger(message.selectedItem[i].high))) { return 'selectedItem: integer|Long[] expected' }
        }
      }
      return null
    }

    /**
     * Creates a FindPermissionReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbpermission.FindPermissionReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbpermission.FindPermissionReply} FindPermissionReply
     */
    FindPermissionReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbpermission.FindPermissionReply) { return object }
      var message = new $root.pbpermission.FindPermissionReply()
      switch (object.code) {
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
          break
      }
      if (object.msg != null) { message.msg = String(object.msg) }
      if (object.data != null) {
        if (typeof object.data !== 'object') { throw TypeError('.pbpermission.FindPermissionReply.data: object expected') }
        message.data = $root.pbpermission.PermissionModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbpermission.FindPermissionReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbpermission.FindPermissionReply.list: object expected') }
          message.list[i] = $root.pbpermission.PermissionModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      if (object.selectedItem) {
        if (!Array.isArray(object.selectedItem)) { throw TypeError('.pbpermission.FindPermissionReply.selectedItem: array expected') }
        message.selectedItem = []
        for (var i = 0; i < object.selectedItem.length; ++i) {
          if ($util.Long) { (message.selectedItem[i] = $util.Long.fromValue(object.selectedItem[i])).unsigned = false } else if (typeof object.selectedItem[i] === 'string') { message.selectedItem[i] = parseInt(object.selectedItem[i], 10) } else if (typeof object.selectedItem[i] === 'number') { message.selectedItem[i] = object.selectedItem[i] } else if (typeof object.selectedItem[i] === 'object') { message.selectedItem[i] = new $util.LongBits(object.selectedItem[i].low >>> 0, object.selectedItem[i].high >>> 0).toNumber() }
        }
      }
      return message
    }

    /**
     * Creates a plain object from a FindPermissionReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbpermission.FindPermissionReply
     * @static
     * @param {pbpermission.FindPermissionReply} message FindPermissionReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindPermissionReply.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) {
        object.list = []
        object.selectedItem = []
      }
      if (options.defaults) {
        object.code = options.enums === String ? 'None' : 0
        object.msg = ''
        object.data = null
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.total = options.longs === String ? '0' : 0 }
      }
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.msg != null && message.hasOwnProperty('msg')) { object.msg = message.msg }
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbpermission.PermissionModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbpermission.PermissionModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      if (message.selectedItem && message.selectedItem.length) {
        object.selectedItem = []
        for (var j = 0; j < message.selectedItem.length; ++j) {
          if (typeof message.selectedItem[j] === 'number') { object.selectedItem[j] = options.longs === String ? String(message.selectedItem[j]) : message.selectedItem[j] } else { object.selectedItem[j] = options.longs === String ? $util.Long.prototype.toString.call(message.selectedItem[j]) : options.longs === Number ? new $util.LongBits(message.selectedItem[j].low >>> 0, message.selectedItem[j].high >>> 0).toNumber() : message.selectedItem[j] }
        }
      }
      return object
    }

    /**
     * Converts this FindPermissionReply to JSON.
     * @function toJSON
     * @memberof pbpermission.FindPermissionReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindPermissionReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindPermissionReply
  })()

  pbpermission.Permission = (function() {
    /**
     * Constructs a new Permission service.
     * @memberof pbpermission
     * @classdesc Represents a Permission
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Permission(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Permission.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Permission

    /**
     * Creates new Permission service using the specified rpc implementation.
     * @function create
     * @memberof pbpermission.Permission
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Permission} RPC service. Useful where requests and/or responses are streamed.
     */
    Permission.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
     * Callback as used by {@link pbpermission.Permission#createPermission}.
     * @memberof pbpermission.Permission
     * @typedef CreatePermissionCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls CreatePermission.
     * @function createPermission
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbpermission.IPermissionModel} request PermissionModel message or plain object
     * @param {pbpermission.Permission.CreatePermissionCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Permission.prototype.createPermission = function createPermission(request, callback) {
      return this.rpcCall(createPermission, $root.pbpermission.PermissionModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreatePermission' })

    /**
     * Calls CreatePermission.
     * @function createPermission
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbpermission.IPermissionModel} request PermissionModel message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbpermission.Permission#updatePermission}.
     * @memberof pbpermission.Permission
     * @typedef UpdatePermissionCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls UpdatePermission.
     * @function updatePermission
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbpermission.IPermissionModel} request PermissionModel message or plain object
     * @param {pbpermission.Permission.UpdatePermissionCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Permission.prototype.updatePermission = function updatePermission(request, callback) {
      return this.rpcCall(updatePermission, $root.pbpermission.PermissionModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdatePermission' })

    /**
     * Calls UpdatePermission.
     * @function updatePermission
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbpermission.IPermissionModel} request PermissionModel message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbpermission.Permission#deletePermission}.
     * @memberof pbpermission.Permission
     * @typedef DeletePermissionCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls DeletePermission.
     * @function deletePermission
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @param {pbpermission.Permission.DeletePermissionCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Permission.prototype.deletePermission = function deletePermission(request, callback) {
      return this.rpcCall(deletePermission, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeletePermission' })

    /**
     * Calls DeletePermission.
     * @function deletePermission
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbpermission.Permission#findPermissionById}.
     * @memberof pbpermission.Permission
     * @typedef FindPermissionByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbpermission.FindPermissionReply} [response] FindPermissionReply
     */

    /**
     * Calls FindPermissionById.
     * @function findPermissionById
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @param {pbpermission.Permission.FindPermissionByIdCallback} callback Node-style callback called with the error, if any, and FindPermissionReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Permission.prototype.findPermissionById = function findPermissionById(request, callback) {
      return this.rpcCall(findPermissionById, $root.pbcommon.IdArgs, $root.pbpermission.FindPermissionReply, request, callback)
    }, 'name', { value: 'FindPermissionById' })

    /**
     * Calls FindPermissionById.
     * @function findPermissionById
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @returns {Promise<pbpermission.FindPermissionReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbpermission.Permission#findPermissionList}.
     * @memberof pbpermission.Permission
     * @typedef FindPermissionListCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbpermission.FindPermissionReply} [response] FindPermissionReply
     */

    /**
     * Calls FindPermissionList.
     * @function findPermissionList
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbpermission.IFindPermissionArgs} request FindPermissionArgs message or plain object
     * @param {pbpermission.Permission.FindPermissionListCallback} callback Node-style callback called with the error, if any, and FindPermissionReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Permission.prototype.findPermissionList = function findPermissionList(request, callback) {
      return this.rpcCall(findPermissionList, $root.pbpermission.FindPermissionArgs, $root.pbpermission.FindPermissionReply, request, callback)
    }, 'name', { value: 'FindPermissionList' })

    /**
     * Calls FindPermissionList.
     * @function findPermissionList
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbpermission.IFindPermissionArgs} request FindPermissionArgs message or plain object
     * @returns {Promise<pbpermission.FindPermissionReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbpermission.Permission#findPermissionTree}.
     * @memberof pbpermission.Permission
     * @typedef FindPermissionTreeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbpermission.FindPermissionReply} [response] FindPermissionReply
     */

    /**
     * Calls FindPermissionTree.
     * @function findPermissionTree
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbpermission.IFindPermissionArgs} request FindPermissionArgs message or plain object
     * @param {pbpermission.Permission.FindPermissionTreeCallback} callback Node-style callback called with the error, if any, and FindPermissionReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Permission.prototype.findPermissionTree = function findPermissionTree(request, callback) {
      return this.rpcCall(findPermissionTree, $root.pbpermission.FindPermissionArgs, $root.pbpermission.FindPermissionReply, request, callback)
    }, 'name', { value: 'FindPermissionTree' })

    /**
     * Calls FindPermissionTree.
     * @function findPermissionTree
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbpermission.IFindPermissionArgs} request FindPermissionArgs message or plain object
     * @returns {Promise<pbpermission.FindPermissionReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbpermission.Permission#findPermissionTreeByRole}.
     * @memberof pbpermission.Permission
     * @typedef FindPermissionTreeByRoleCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbpermission.FindPermissionReply} [response] FindPermissionReply
     */

    /**
     * Calls FindPermissionTreeByRole.
     * @function findPermissionTreeByRole
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @param {pbpermission.Permission.FindPermissionTreeByRoleCallback} callback Node-style callback called with the error, if any, and FindPermissionReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Permission.prototype.findPermissionTreeByRole = function findPermissionTreeByRole(request, callback) {
      return this.rpcCall(findPermissionTreeByRole, $root.pbcommon.IdArgs, $root.pbpermission.FindPermissionReply, request, callback)
    }, 'name', { value: 'FindPermissionTreeByRole' })

    /**
     * Calls FindPermissionTreeByRole.
     * @function findPermissionTreeByRole
     * @memberof pbpermission.Permission
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @returns {Promise<pbpermission.FindPermissionReply>} Promise
     * @variation 2
     */

    return Permission
  })()

  return pbpermission
})()

$root.pbrole = (function() {
  /**
   * Namespace pbrole.
   * @exports pbrole
   * @namespace
   */
  var pbrole = {}

  pbrole.RoleModel = (function() {
    /**
     * Properties of a RoleModel.
     * @memberof pbrole
     * @interface IRoleModel
     * @property {number|Long|null} [id] RoleModel id
     * @property {string|null} [createdAt] RoleModel createdAt
     * @property {string|null} [updatedAt] RoleModel updatedAt
     * @property {number|Long|null} [parentId] RoleModel parentId
     * @property {string|null} [roleName] RoleModel roleName
     * @property {number|null} [roleCode] RoleModel roleCode
     * @property {string|null} [roleDesc] RoleModel roleDesc
     * @property {pbrole.RoleType|null} [roleType] RoleModel roleType
     * @property {number|null} [roleStatus] RoleModel roleStatus
     * @property {Array.<pbpermission.IPermissionModel>|null} [permissions] RoleModel permissions
     */

    /**
     * Constructs a new RoleModel.
     * @memberof pbrole
     * @classdesc Represents a RoleModel.
     * @implements IRoleModel
     * @constructor
     * @param {pbrole.IRoleModel=} [properties] Properties to set
     */
    function RoleModel(properties) {
      this.permissions = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * RoleModel id.
     * @member {number|Long} id
     * @memberof pbrole.RoleModel
     * @instance
     */
    RoleModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * RoleModel createdAt.
     * @member {string} createdAt
     * @memberof pbrole.RoleModel
     * @instance
     */
    RoleModel.prototype.createdAt = ''

    /**
     * RoleModel updatedAt.
     * @member {string} updatedAt
     * @memberof pbrole.RoleModel
     * @instance
     */
    RoleModel.prototype.updatedAt = ''

    /**
     * RoleModel parentId.
     * @member {number|Long} parentId
     * @memberof pbrole.RoleModel
     * @instance
     */
    RoleModel.prototype.parentId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * RoleModel roleName.
     * @member {string} roleName
     * @memberof pbrole.RoleModel
     * @instance
     */
    RoleModel.prototype.roleName = ''

    /**
     * RoleModel roleCode.
     * @member {number} roleCode
     * @memberof pbrole.RoleModel
     * @instance
     */
    RoleModel.prototype.roleCode = 0

    /**
     * RoleModel roleDesc.
     * @member {string} roleDesc
     * @memberof pbrole.RoleModel
     * @instance
     */
    RoleModel.prototype.roleDesc = ''

    /**
     * RoleModel roleType.
     * @member {pbrole.RoleType} roleType
     * @memberof pbrole.RoleModel
     * @instance
     */
    RoleModel.prototype.roleType = 0

    /**
     * RoleModel roleStatus.
     * @member {number} roleStatus
     * @memberof pbrole.RoleModel
     * @instance
     */
    RoleModel.prototype.roleStatus = 0

    /**
     * RoleModel permissions.
     * @member {Array.<pbpermission.IPermissionModel>} permissions
     * @memberof pbrole.RoleModel
     * @instance
     */
    RoleModel.prototype.permissions = $util.emptyArray

    /**
     * Creates a new RoleModel instance using the specified properties.
     * @function create
     * @memberof pbrole.RoleModel
     * @static
     * @param {pbrole.IRoleModel=} [properties] Properties to set
     * @returns {pbrole.RoleModel} RoleModel instance
     */
    RoleModel.create = function create(properties) {
      return new RoleModel(properties)
    }

    /**
     * Encodes the specified RoleModel message. Does not implicitly {@link pbrole.RoleModel.verify|verify} messages.
     * @function encode
     * @memberof pbrole.RoleModel
     * @static
     * @param {pbrole.IRoleModel} message RoleModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.parentId != null && Object.hasOwnProperty.call(message, 'parentId')) { writer.uint32(/* id 4, wireType 0 =*/32).int64(message.parentId) }
      if (message.roleName != null && Object.hasOwnProperty.call(message, 'roleName')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.roleName) }
      if (message.roleCode != null && Object.hasOwnProperty.call(message, 'roleCode')) { writer.uint32(/* id 6, wireType 0 =*/48).int32(message.roleCode) }
      if (message.roleDesc != null && Object.hasOwnProperty.call(message, 'roleDesc')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.roleDesc) }
      if (message.roleType != null && Object.hasOwnProperty.call(message, 'roleType')) { writer.uint32(/* id 8, wireType 0 =*/64).int32(message.roleType) }
      if (message.roleStatus != null && Object.hasOwnProperty.call(message, 'roleStatus')) { writer.uint32(/* id 9, wireType 0 =*/72).int32(message.roleStatus) }
      if (message.permissions != null && message.permissions.length) {
        for (var i = 0; i < message.permissions.length; ++i) { $root.pbpermission.PermissionModel.encode(message.permissions[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim() }
      }
      return writer
    }

    /**
     * Encodes the specified RoleModel message, length delimited. Does not implicitly {@link pbrole.RoleModel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbrole.RoleModel
     * @static
     * @param {pbrole.IRoleModel} message RoleModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a RoleModel message from the specified reader or buffer.
     * @function decode
     * @memberof pbrole.RoleModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbrole.RoleModel} RoleModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbrole.RoleModel()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.id = reader.int64()
            break
          case 2:
            message.createdAt = reader.string()
            break
          case 3:
            message.updatedAt = reader.string()
            break
          case 4:
            message.parentId = reader.int64()
            break
          case 5:
            message.roleName = reader.string()
            break
          case 6:
            message.roleCode = reader.int32()
            break
          case 7:
            message.roleDesc = reader.string()
            break
          case 8:
            message.roleType = reader.int32()
            break
          case 9:
            message.roleStatus = reader.int32()
            break
          case 10:
            if (!(message.permissions && message.permissions.length)) { message.permissions = [] }
            message.permissions.push($root.pbpermission.PermissionModel.decode(reader, reader.uint32()))
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a RoleModel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbrole.RoleModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbrole.RoleModel} RoleModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a RoleModel message.
     * @function verify
     * @memberof pbrole.RoleModel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleModel.verify = function verify(message) {
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
      if (message.parentId != null && message.hasOwnProperty('parentId')) {
        if (!$util.isInteger(message.parentId) && !(message.parentId && $util.isInteger(message.parentId.low) && $util.isInteger(message.parentId.high))) { return 'parentId: integer|Long expected' }
      }
      if (message.roleName != null && message.hasOwnProperty('roleName')) {
        if (!$util.isString(message.roleName)) { return 'roleName: string expected' }
      }
      if (message.roleCode != null && message.hasOwnProperty('roleCode')) {
        if (!$util.isInteger(message.roleCode)) { return 'roleCode: integer expected' }
      }
      if (message.roleDesc != null && message.hasOwnProperty('roleDesc')) {
        if (!$util.isString(message.roleDesc)) { return 'roleDesc: string expected' }
      }
      if (message.roleType != null && message.hasOwnProperty('roleType')) {
        switch (message.roleType) {
          default:
            return 'roleType: enum value expected'
          case 0:
          case 1:
          case 2:
            break
        }
      }
      if (message.roleStatus != null && message.hasOwnProperty('roleStatus')) {
        if (!$util.isInteger(message.roleStatus)) { return 'roleStatus: integer expected' }
      }
      if (message.permissions != null && message.hasOwnProperty('permissions')) {
        if (!Array.isArray(message.permissions)) { return 'permissions: array expected' }
        for (var i = 0; i < message.permissions.length; ++i) {
          var error = $root.pbpermission.PermissionModel.verify(message.permissions[i])
          if (error) { return 'permissions.' + error }
        }
      }
      return null
    }

    /**
     * Creates a RoleModel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbrole.RoleModel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbrole.RoleModel} RoleModel
     */
    RoleModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbrole.RoleModel) { return object }
      var message = new $root.pbrole.RoleModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.parentId != null) {
        if ($util.Long) { (message.parentId = $util.Long.fromValue(object.parentId)).unsigned = false } else if (typeof object.parentId === 'string') { message.parentId = parseInt(object.parentId, 10) } else if (typeof object.parentId === 'number') { message.parentId = object.parentId } else if (typeof object.parentId === 'object') { message.parentId = new $util.LongBits(object.parentId.low >>> 0, object.parentId.high >>> 0).toNumber() }
      }
      if (object.roleName != null) { message.roleName = String(object.roleName) }
      if (object.roleCode != null) { message.roleCode = object.roleCode | 0 }
      if (object.roleDesc != null) { message.roleDesc = String(object.roleDesc) }
      switch (object.roleType) {
        case 'ROLE_TYPE_NONE':
        case 0:
          message.roleType = 0
          break
        case 'ADMIN':
        case 1:
          message.roleType = 1
          break
        case 'APP':
        case 2:
          message.roleType = 2
          break
      }
      if (object.roleStatus != null) { message.roleStatus = object.roleStatus | 0 }
      if (object.permissions) {
        if (!Array.isArray(object.permissions)) { throw TypeError('.pbrole.RoleModel.permissions: array expected') }
        message.permissions = []
        for (var i = 0; i < object.permissions.length; ++i) {
          if (typeof object.permissions[i] !== 'object') { throw TypeError('.pbrole.RoleModel.permissions: object expected') }
          message.permissions[i] = $root.pbpermission.PermissionModel.fromObject(object.permissions[i])
        }
      }
      return message
    }

    /**
     * Creates a plain object from a RoleModel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbrole.RoleModel
     * @static
     * @param {pbrole.RoleModel} message RoleModel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoleModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.arrays || options.defaults) { object.permissions = [] }
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.parentId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.parentId = options.longs === String ? '0' : 0 }
        object.roleName = ''
        object.roleCode = 0
        object.roleDesc = ''
        object.roleType = options.enums === String ? 'ROLE_TYPE_NONE' : 0
        object.roleStatus = 0
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.parentId != null && message.hasOwnProperty('parentId')) {
        if (typeof message.parentId === 'number') { object.parentId = options.longs === String ? String(message.parentId) : message.parentId } else { object.parentId = options.longs === String ? $util.Long.prototype.toString.call(message.parentId) : options.longs === Number ? new $util.LongBits(message.parentId.low >>> 0, message.parentId.high >>> 0).toNumber() : message.parentId }
      }
      if (message.roleName != null && message.hasOwnProperty('roleName')) { object.roleName = message.roleName }
      if (message.roleCode != null && message.hasOwnProperty('roleCode')) { object.roleCode = message.roleCode }
      if (message.roleDesc != null && message.hasOwnProperty('roleDesc')) { object.roleDesc = message.roleDesc }
      if (message.roleType != null && message.hasOwnProperty('roleType')) { object.roleType = options.enums === String ? $root.pbrole.RoleType[message.roleType] : message.roleType }
      if (message.roleStatus != null && message.hasOwnProperty('roleStatus')) { object.roleStatus = message.roleStatus }
      if (message.permissions && message.permissions.length) {
        object.permissions = []
        for (var j = 0; j < message.permissions.length; ++j) { object.permissions[j] = $root.pbpermission.PermissionModel.toObject(message.permissions[j], options) }
      }
      return object
    }

    /**
     * Converts this RoleModel to JSON.
     * @function toJSON
     * @memberof pbrole.RoleModel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoleModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return RoleModel
  })()

  /**
   * RoleType enum.
   * @name pbrole.RoleType
   * @enum {number}
   * @property {number} ROLE_TYPE_NONE=0 ROLE_TYPE_NONE value
   * @property {number} ADMIN=1 ADMIN value
   * @property {number} APP=2 APP value
   */
  pbrole.RoleType = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'ROLE_TYPE_NONE'] = 0
    values[valuesById[1] = 'ADMIN'] = 1
    values[valuesById[2] = 'APP'] = 2
    return values
  })()

  pbrole.FindRoleArgs = (function() {
    /**
     * Properties of a FindRoleArgs.
     * @memberof pbrole
     * @interface IFindRoleArgs
     * @property {pbcommon.IPageInfo|null} [pageInfo] FindRoleArgs pageInfo
     * @property {pbrole.IRoleModel|null} [query] FindRoleArgs query
     */

    /**
     * Constructs a new FindRoleArgs.
     * @memberof pbrole
     * @classdesc Represents a FindRoleArgs.
     * @implements IFindRoleArgs
     * @constructor
     * @param {pbrole.IFindRoleArgs=} [properties] Properties to set
     */
    function FindRoleArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindRoleArgs pageInfo.
     * @member {pbcommon.IPageInfo|null|undefined} pageInfo
     * @memberof pbrole.FindRoleArgs
     * @instance
     */
    FindRoleArgs.prototype.pageInfo = null

    /**
     * FindRoleArgs query.
     * @member {pbrole.IRoleModel|null|undefined} query
     * @memberof pbrole.FindRoleArgs
     * @instance
     */
    FindRoleArgs.prototype.query = null

    /**
     * Creates a new FindRoleArgs instance using the specified properties.
     * @function create
     * @memberof pbrole.FindRoleArgs
     * @static
     * @param {pbrole.IFindRoleArgs=} [properties] Properties to set
     * @returns {pbrole.FindRoleArgs} FindRoleArgs instance
     */
    FindRoleArgs.create = function create(properties) {
      return new FindRoleArgs(properties)
    }

    /**
     * Encodes the specified FindRoleArgs message. Does not implicitly {@link pbrole.FindRoleArgs.verify|verify} messages.
     * @function encode
     * @memberof pbrole.FindRoleArgs
     * @static
     * @param {pbrole.IFindRoleArgs} message FindRoleArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindRoleArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbrole.RoleModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
     * Encodes the specified FindRoleArgs message, length delimited. Does not implicitly {@link pbrole.FindRoleArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbrole.FindRoleArgs
     * @static
     * @param {pbrole.IFindRoleArgs} message FindRoleArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindRoleArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindRoleArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbrole.FindRoleArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbrole.FindRoleArgs} FindRoleArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindRoleArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbrole.FindRoleArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          case 2:
            message.query = $root.pbrole.RoleModel.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindRoleArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbrole.FindRoleArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbrole.FindRoleArgs} FindRoleArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindRoleArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindRoleArgs message.
     * @function verify
     * @memberof pbrole.FindRoleArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindRoleArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbrole.RoleModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
     * Creates a FindRoleArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbrole.FindRoleArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbrole.FindRoleArgs} FindRoleArgs
     */
    FindRoleArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbrole.FindRoleArgs) { return object }
      var message = new $root.pbrole.FindRoleArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbrole.FindRoleArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbrole.FindRoleArgs.query: object expected') }
        message.query = $root.pbrole.RoleModel.fromObject(object.query)
      }
      return message
    }

    /**
     * Creates a plain object from a FindRoleArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbrole.FindRoleArgs
     * @static
     * @param {pbrole.FindRoleArgs} message FindRoleArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindRoleArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbrole.RoleModel.toObject(message.query, options) }
      return object
    }

    /**
     * Converts this FindRoleArgs to JSON.
     * @function toJSON
     * @memberof pbrole.FindRoleArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindRoleArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindRoleArgs
  })()

  pbrole.FindRoleReply = (function() {
    /**
     * Properties of a FindRoleReply.
     * @memberof pbrole
     * @interface IFindRoleReply
     * @property {pbcommon.EnumCode|null} [code] FindRoleReply code
     * @property {string|null} [msg] FindRoleReply msg
     * @property {pbrole.IRoleModel|null} [data] FindRoleReply data
     * @property {Array.<pbrole.IRoleModel>|null} [list] FindRoleReply list
     * @property {number|Long|null} [total] FindRoleReply total
     */

    /**
     * Constructs a new FindRoleReply.
     * @memberof pbrole
     * @classdesc Represents a FindRoleReply.
     * @implements IFindRoleReply
     * @constructor
     * @param {pbrole.IFindRoleReply=} [properties] Properties to set
     */
    function FindRoleReply(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindRoleReply code.
     * @member {pbcommon.EnumCode} code
     * @memberof pbrole.FindRoleReply
     * @instance
     */
    FindRoleReply.prototype.code = 0

    /**
     * FindRoleReply msg.
     * @member {string} msg
     * @memberof pbrole.FindRoleReply
     * @instance
     */
    FindRoleReply.prototype.msg = ''

    /**
     * FindRoleReply data.
     * @member {pbrole.IRoleModel|null|undefined} data
     * @memberof pbrole.FindRoleReply
     * @instance
     */
    FindRoleReply.prototype.data = null

    /**
     * FindRoleReply list.
     * @member {Array.<pbrole.IRoleModel>} list
     * @memberof pbrole.FindRoleReply
     * @instance
     */
    FindRoleReply.prototype.list = $util.emptyArray

    /**
     * FindRoleReply total.
     * @member {number|Long} total
     * @memberof pbrole.FindRoleReply
     * @instance
     */
    FindRoleReply.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * Creates a new FindRoleReply instance using the specified properties.
     * @function create
     * @memberof pbrole.FindRoleReply
     * @static
     * @param {pbrole.IFindRoleReply=} [properties] Properties to set
     * @returns {pbrole.FindRoleReply} FindRoleReply instance
     */
    FindRoleReply.create = function create(properties) {
      return new FindRoleReply(properties)
    }

    /**
     * Encodes the specified FindRoleReply message. Does not implicitly {@link pbrole.FindRoleReply.verify|verify} messages.
     * @function encode
     * @memberof pbrole.FindRoleReply
     * @static
     * @param {pbrole.IFindRoleReply} message FindRoleReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindRoleReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbrole.RoleModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbrole.RoleModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      return writer
    }

    /**
     * Encodes the specified FindRoleReply message, length delimited. Does not implicitly {@link pbrole.FindRoleReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbrole.FindRoleReply
     * @static
     * @param {pbrole.IFindRoleReply} message FindRoleReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindRoleReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindRoleReply message from the specified reader or buffer.
     * @function decode
     * @memberof pbrole.FindRoleReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbrole.FindRoleReply} FindRoleReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindRoleReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbrole.FindRoleReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 3:
            message.data = $root.pbrole.RoleModel.decode(reader, reader.uint32())
            break
          case 4:
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbrole.RoleModel.decode(reader, reader.uint32()))
            break
          case 5:
            message.total = reader.int64()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindRoleReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbrole.FindRoleReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbrole.FindRoleReply} FindRoleReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindRoleReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindRoleReply message.
     * @function verify
     * @memberof pbrole.FindRoleReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindRoleReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
            break
        }
      }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!$util.isString(message.msg)) { return 'msg: string expected' }
      }
      if (message.data != null && message.hasOwnProperty('data')) {
        var error = $root.pbrole.RoleModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbrole.RoleModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      return null
    }

    /**
     * Creates a FindRoleReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbrole.FindRoleReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbrole.FindRoleReply} FindRoleReply
     */
    FindRoleReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbrole.FindRoleReply) { return object }
      var message = new $root.pbrole.FindRoleReply()
      switch (object.code) {
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
          break
      }
      if (object.msg != null) { message.msg = String(object.msg) }
      if (object.data != null) {
        if (typeof object.data !== 'object') { throw TypeError('.pbrole.FindRoleReply.data: object expected') }
        message.data = $root.pbrole.RoleModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbrole.FindRoleReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbrole.FindRoleReply.list: object expected') }
          message.list[i] = $root.pbrole.RoleModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      return message
    }

    /**
     * Creates a plain object from a FindRoleReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbrole.FindRoleReply
     * @static
     * @param {pbrole.FindRoleReply} message FindRoleReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindRoleReply.toObject = function toObject(message, options) {
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
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.msg != null && message.hasOwnProperty('msg')) { object.msg = message.msg }
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbrole.RoleModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbrole.RoleModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      return object
    }

    /**
     * Converts this FindRoleReply to JSON.
     * @function toJSON
     * @memberof pbrole.FindRoleReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindRoleReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindRoleReply
  })()

  pbrole.Role = (function() {
    /**
     * Constructs a new Role service.
     * @memberof pbrole
     * @classdesc Represents a Role
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Role(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Role.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Role

    /**
     * Creates new Role service using the specified rpc implementation.
     * @function create
     * @memberof pbrole.Role
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Role} RPC service. Useful where requests and/or responses are streamed.
     */
    Role.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
     * Callback as used by {@link pbrole.Role#createRole}.
     * @memberof pbrole.Role
     * @typedef CreateRoleCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls CreateRole.
     * @function createRole
     * @memberof pbrole.Role
     * @instance
     * @param {pbrole.IRoleModel} request RoleModel message or plain object
     * @param {pbrole.Role.CreateRoleCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Role.prototype.createRole = function createRole(request, callback) {
      return this.rpcCall(createRole, $root.pbrole.RoleModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreateRole' })

    /**
     * Calls CreateRole.
     * @function createRole
     * @memberof pbrole.Role
     * @instance
     * @param {pbrole.IRoleModel} request RoleModel message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbrole.Role#updateRole}.
     * @memberof pbrole.Role
     * @typedef UpdateRoleCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls UpdateRole.
     * @function updateRole
     * @memberof pbrole.Role
     * @instance
     * @param {pbrole.IRoleModel} request RoleModel message or plain object
     * @param {pbrole.Role.UpdateRoleCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Role.prototype.updateRole = function updateRole(request, callback) {
      return this.rpcCall(updateRole, $root.pbrole.RoleModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdateRole' })

    /**
     * Calls UpdateRole.
     * @function updateRole
     * @memberof pbrole.Role
     * @instance
     * @param {pbrole.IRoleModel} request RoleModel message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbrole.Role#deleteRole}.
     * @memberof pbrole.Role
     * @typedef DeleteRoleCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls DeleteRole.
     * @function deleteRole
     * @memberof pbrole.Role
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @param {pbrole.Role.DeleteRoleCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Role.prototype.deleteRole = function deleteRole(request, callback) {
      return this.rpcCall(deleteRole, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeleteRole' })

    /**
     * Calls DeleteRole.
     * @function deleteRole
     * @memberof pbrole.Role
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbrole.Role#findRoleById}.
     * @memberof pbrole.Role
     * @typedef FindRoleByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbrole.FindRoleReply} [response] FindRoleReply
     */

    /**
     * Calls FindRoleById.
     * @function findRoleById
     * @memberof pbrole.Role
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @param {pbrole.Role.FindRoleByIdCallback} callback Node-style callback called with the error, if any, and FindRoleReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Role.prototype.findRoleById = function findRoleById(request, callback) {
      return this.rpcCall(findRoleById, $root.pbcommon.IdArgs, $root.pbrole.FindRoleReply, request, callback)
    }, 'name', { value: 'FindRoleById' })

    /**
     * Calls FindRoleById.
     * @function findRoleById
     * @memberof pbrole.Role
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @returns {Promise<pbrole.FindRoleReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbrole.Role#findRoleList}.
     * @memberof pbrole.Role
     * @typedef FindRoleListCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbrole.FindRoleReply} [response] FindRoleReply
     */

    /**
     * Calls FindRoleList.
     * @function findRoleList
     * @memberof pbrole.Role
     * @instance
     * @param {pbrole.IFindRoleArgs} request FindRoleArgs message or plain object
     * @param {pbrole.Role.FindRoleListCallback} callback Node-style callback called with the error, if any, and FindRoleReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Role.prototype.findRoleList = function findRoleList(request, callback) {
      return this.rpcCall(findRoleList, $root.pbrole.FindRoleArgs, $root.pbrole.FindRoleReply, request, callback)
    }, 'name', { value: 'FindRoleList' })

    /**
     * Calls FindRoleList.
     * @function findRoleList
     * @memberof pbrole.Role
     * @instance
     * @param {pbrole.IFindRoleArgs} request FindRoleArgs message or plain object
     * @returns {Promise<pbrole.FindRoleReply>} Promise
     * @variation 2
     */

    return Role
  })()

  return pbrole
})()

$root.pbauth = (function() {
  /**
   * Namespace pbauth.
   * @exports pbauth
   * @namespace
   */
  var pbauth = {}

  pbauth.AuthLoginReply = (function() {
    /**
     * Properties of an AuthLoginReply.
     * @memberof pbauth
     * @interface IAuthLoginReply
     * @property {pbcommon.EnumCode|null} [code] AuthLoginReply code
     * @property {string|null} [token] AuthLoginReply token
     * @property {pbuser.IUserModel|null} [user] AuthLoginReply user
     */

    /**
     * Constructs a new AuthLoginReply.
     * @memberof pbauth
     * @classdesc Represents an AuthLoginReply.
     * @implements IAuthLoginReply
     * @constructor
     * @param {pbauth.IAuthLoginReply=} [properties] Properties to set
     */
    function AuthLoginReply(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * AuthLoginReply code.
     * @member {pbcommon.EnumCode} code
     * @memberof pbauth.AuthLoginReply
     * @instance
     */
    AuthLoginReply.prototype.code = 0

    /**
     * AuthLoginReply token.
     * @member {string} token
     * @memberof pbauth.AuthLoginReply
     * @instance
     */
    AuthLoginReply.prototype.token = ''

    /**
     * AuthLoginReply user.
     * @member {pbuser.IUserModel|null|undefined} user
     * @memberof pbauth.AuthLoginReply
     * @instance
     */
    AuthLoginReply.prototype.user = null

    /**
     * Creates a new AuthLoginReply instance using the specified properties.
     * @function create
     * @memberof pbauth.AuthLoginReply
     * @static
     * @param {pbauth.IAuthLoginReply=} [properties] Properties to set
     * @returns {pbauth.AuthLoginReply} AuthLoginReply instance
     */
    AuthLoginReply.create = function create(properties) {
      return new AuthLoginReply(properties)
    }

    /**
     * Encodes the specified AuthLoginReply message. Does not implicitly {@link pbauth.AuthLoginReply.verify|verify} messages.
     * @function encode
     * @memberof pbauth.AuthLoginReply
     * @static
     * @param {pbauth.IAuthLoginReply} message AuthLoginReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthLoginReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.token != null && Object.hasOwnProperty.call(message, 'token')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.token) }
      if (message.user != null && Object.hasOwnProperty.call(message, 'user')) { $root.pbuser.UserModel.encode(message.user, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      return writer
    }

    /**
     * Encodes the specified AuthLoginReply message, length delimited. Does not implicitly {@link pbauth.AuthLoginReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbauth.AuthLoginReply
     * @static
     * @param {pbauth.IAuthLoginReply} message AuthLoginReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AuthLoginReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes an AuthLoginReply message from the specified reader or buffer.
     * @function decode
     * @memberof pbauth.AuthLoginReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbauth.AuthLoginReply} AuthLoginReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthLoginReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbauth.AuthLoginReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.token = reader.string()
            break
          case 3:
            message.user = $root.pbuser.UserModel.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes an AuthLoginReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbauth.AuthLoginReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbauth.AuthLoginReply} AuthLoginReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AuthLoginReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies an AuthLoginReply message.
     * @function verify
     * @memberof pbauth.AuthLoginReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AuthLoginReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
            break
        }
      }
      if (message.token != null && message.hasOwnProperty('token')) {
        if (!$util.isString(message.token)) { return 'token: string expected' }
      }
      if (message.user != null && message.hasOwnProperty('user')) {
        var error = $root.pbuser.UserModel.verify(message.user)
        if (error) { return 'user.' + error }
      }
      return null
    }

    /**
     * Creates an AuthLoginReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbauth.AuthLoginReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbauth.AuthLoginReply} AuthLoginReply
     */
    AuthLoginReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbauth.AuthLoginReply) { return object }
      var message = new $root.pbauth.AuthLoginReply()
      switch (object.code) {
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
          break
      }
      if (object.token != null) { message.token = String(object.token) }
      if (object.user != null) {
        if (typeof object.user !== 'object') { throw TypeError('.pbauth.AuthLoginReply.user: object expected') }
        message.user = $root.pbuser.UserModel.fromObject(object.user)
      }
      return message
    }

    /**
     * Creates a plain object from an AuthLoginReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbauth.AuthLoginReply
     * @static
     * @param {pbauth.AuthLoginReply} message AuthLoginReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AuthLoginReply.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.code = options.enums === String ? 'None' : 0
        object.token = ''
        object.user = null
      }
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.token != null && message.hasOwnProperty('token')) { object.token = message.token }
      if (message.user != null && message.hasOwnProperty('user')) { object.user = $root.pbuser.UserModel.toObject(message.user, options) }
      return object
    }

    /**
     * Converts this AuthLoginReply to JSON.
     * @function toJSON
     * @memberof pbauth.AuthLoginReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AuthLoginReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return AuthLoginReply
  })()

  pbauth.UploadCodeReply = (function() {
    /**
     * Properties of an UploadCodeReply.
     * @memberof pbauth
     * @interface IUploadCodeReply
     * @property {pbcommon.EnumCode|null} [code] UploadCodeReply code
     * @property {string|null} [uploadCode] UploadCodeReply uploadCode
     */

    /**
     * Constructs a new UploadCodeReply.
     * @memberof pbauth
     * @classdesc Represents an UploadCodeReply.
     * @implements IUploadCodeReply
     * @constructor
     * @param {pbauth.IUploadCodeReply=} [properties] Properties to set
     */
    function UploadCodeReply(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * UploadCodeReply code.
     * @member {pbcommon.EnumCode} code
     * @memberof pbauth.UploadCodeReply
     * @instance
     */
    UploadCodeReply.prototype.code = 0

    /**
     * UploadCodeReply uploadCode.
     * @member {string} uploadCode
     * @memberof pbauth.UploadCodeReply
     * @instance
     */
    UploadCodeReply.prototype.uploadCode = ''

    /**
     * Creates a new UploadCodeReply instance using the specified properties.
     * @function create
     * @memberof pbauth.UploadCodeReply
     * @static
     * @param {pbauth.IUploadCodeReply=} [properties] Properties to set
     * @returns {pbauth.UploadCodeReply} UploadCodeReply instance
     */
    UploadCodeReply.create = function create(properties) {
      return new UploadCodeReply(properties)
    }

    /**
     * Encodes the specified UploadCodeReply message. Does not implicitly {@link pbauth.UploadCodeReply.verify|verify} messages.
     * @function encode
     * @memberof pbauth.UploadCodeReply
     * @static
     * @param {pbauth.IUploadCodeReply} message UploadCodeReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UploadCodeReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.uploadCode != null && Object.hasOwnProperty.call(message, 'uploadCode')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.uploadCode) }
      return writer
    }

    /**
     * Encodes the specified UploadCodeReply message, length delimited. Does not implicitly {@link pbauth.UploadCodeReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbauth.UploadCodeReply
     * @static
     * @param {pbauth.IUploadCodeReply} message UploadCodeReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UploadCodeReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes an UploadCodeReply message from the specified reader or buffer.
     * @function decode
     * @memberof pbauth.UploadCodeReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbauth.UploadCodeReply} UploadCodeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UploadCodeReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbauth.UploadCodeReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.uploadCode = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes an UploadCodeReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbauth.UploadCodeReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbauth.UploadCodeReply} UploadCodeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UploadCodeReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies an UploadCodeReply message.
     * @function verify
     * @memberof pbauth.UploadCodeReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UploadCodeReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
            break
        }
      }
      if (message.uploadCode != null && message.hasOwnProperty('uploadCode')) {
        if (!$util.isString(message.uploadCode)) { return 'uploadCode: string expected' }
      }
      return null
    }

    /**
     * Creates an UploadCodeReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbauth.UploadCodeReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbauth.UploadCodeReply} UploadCodeReply
     */
    UploadCodeReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbauth.UploadCodeReply) { return object }
      var message = new $root.pbauth.UploadCodeReply()
      switch (object.code) {
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
          break
      }
      if (object.uploadCode != null) { message.uploadCode = String(object.uploadCode) }
      return message
    }

    /**
     * Creates a plain object from an UploadCodeReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbauth.UploadCodeReply
     * @static
     * @param {pbauth.UploadCodeReply} message UploadCodeReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UploadCodeReply.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.code = options.enums === String ? 'None' : 0
        object.uploadCode = ''
      }
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.uploadCode != null && message.hasOwnProperty('uploadCode')) { object.uploadCode = message.uploadCode }
      return object
    }

    /**
     * Converts this UploadCodeReply to JSON.
     * @function toJSON
     * @memberof pbauth.UploadCodeReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UploadCodeReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return UploadCodeReply
  })()

  pbauth.AdminLoginArgs = (function() {
    /**
     * Properties of an AdminLoginArgs.
     * @memberof pbauth
     * @interface IAdminLoginArgs
     * @property {string|null} [username] AdminLoginArgs username
     * @property {string|null} [password] AdminLoginArgs password
     * @property {string|null} [captchaId] AdminLoginArgs captchaId
     * @property {string|null} [captchaCode] AdminLoginArgs captchaCode
     */

    /**
     * Constructs a new AdminLoginArgs.
     * @memberof pbauth
     * @classdesc Represents an AdminLoginArgs.
     * @implements IAdminLoginArgs
     * @constructor
     * @param {pbauth.IAdminLoginArgs=} [properties] Properties to set
     */
    function AdminLoginArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * AdminLoginArgs username.
     * @member {string} username
     * @memberof pbauth.AdminLoginArgs
     * @instance
     */
    AdminLoginArgs.prototype.username = ''

    /**
     * AdminLoginArgs password.
     * @member {string} password
     * @memberof pbauth.AdminLoginArgs
     * @instance
     */
    AdminLoginArgs.prototype.password = ''

    /**
     * AdminLoginArgs captchaId.
     * @member {string} captchaId
     * @memberof pbauth.AdminLoginArgs
     * @instance
     */
    AdminLoginArgs.prototype.captchaId = ''

    /**
     * AdminLoginArgs captchaCode.
     * @member {string} captchaCode
     * @memberof pbauth.AdminLoginArgs
     * @instance
     */
    AdminLoginArgs.prototype.captchaCode = ''

    /**
     * Creates a new AdminLoginArgs instance using the specified properties.
     * @function create
     * @memberof pbauth.AdminLoginArgs
     * @static
     * @param {pbauth.IAdminLoginArgs=} [properties] Properties to set
     * @returns {pbauth.AdminLoginArgs} AdminLoginArgs instance
     */
    AdminLoginArgs.create = function create(properties) {
      return new AdminLoginArgs(properties)
    }

    /**
     * Encodes the specified AdminLoginArgs message. Does not implicitly {@link pbauth.AdminLoginArgs.verify|verify} messages.
     * @function encode
     * @memberof pbauth.AdminLoginArgs
     * @static
     * @param {pbauth.IAdminLoginArgs} message AdminLoginArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdminLoginArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.username != null && Object.hasOwnProperty.call(message, 'username')) { writer.uint32(/* id 1, wireType 2 =*/10).string(message.username) }
      if (message.password != null && Object.hasOwnProperty.call(message, 'password')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.password) }
      if (message.captchaId != null && Object.hasOwnProperty.call(message, 'captchaId')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.captchaId) }
      if (message.captchaCode != null && Object.hasOwnProperty.call(message, 'captchaCode')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.captchaCode) }
      return writer
    }

    /**
     * Encodes the specified AdminLoginArgs message, length delimited. Does not implicitly {@link pbauth.AdminLoginArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbauth.AdminLoginArgs
     * @static
     * @param {pbauth.IAdminLoginArgs} message AdminLoginArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    AdminLoginArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes an AdminLoginArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbauth.AdminLoginArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbauth.AdminLoginArgs} AdminLoginArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    AdminLoginArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbauth.AdminLoginArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.username = reader.string()
            break
          case 2:
            message.password = reader.string()
            break
          case 3:
            message.captchaId = reader.string()
            break
          case 4:
            message.captchaCode = reader.string()
            break
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
     * @memberof pbauth.AdminLoginArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbauth.AdminLoginArgs} AdminLoginArgs
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
     * @memberof pbauth.AdminLoginArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    AdminLoginArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.username != null && message.hasOwnProperty('username')) {
        if (!$util.isString(message.username)) { return 'username: string expected' }
      }
      if (message.password != null && message.hasOwnProperty('password')) {
        if (!$util.isString(message.password)) { return 'password: string expected' }
      }
      if (message.captchaId != null && message.hasOwnProperty('captchaId')) {
        if (!$util.isString(message.captchaId)) { return 'captchaId: string expected' }
      }
      if (message.captchaCode != null && message.hasOwnProperty('captchaCode')) {
        if (!$util.isString(message.captchaCode)) { return 'captchaCode: string expected' }
      }
      return null
    }

    /**
     * Creates an AdminLoginArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbauth.AdminLoginArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbauth.AdminLoginArgs} AdminLoginArgs
     */
    AdminLoginArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbauth.AdminLoginArgs) { return object }
      var message = new $root.pbauth.AdminLoginArgs()
      if (object.username != null) { message.username = String(object.username) }
      if (object.password != null) { message.password = String(object.password) }
      if (object.captchaId != null) { message.captchaId = String(object.captchaId) }
      if (object.captchaCode != null) { message.captchaCode = String(object.captchaCode) }
      return message
    }

    /**
     * Creates a plain object from an AdminLoginArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbauth.AdminLoginArgs
     * @static
     * @param {pbauth.AdminLoginArgs} message AdminLoginArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    AdminLoginArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.username = ''
        object.password = ''
        object.captchaId = ''
        object.captchaCode = ''
      }
      if (message.username != null && message.hasOwnProperty('username')) { object.username = message.username }
      if (message.password != null && message.hasOwnProperty('password')) { object.password = message.password }
      if (message.captchaId != null && message.hasOwnProperty('captchaId')) { object.captchaId = message.captchaId }
      if (message.captchaCode != null && message.hasOwnProperty('captchaCode')) { object.captchaCode = message.captchaCode }
      return object
    }

    /**
     * Converts this AdminLoginArgs to JSON.
     * @function toJSON
     * @memberof pbauth.AdminLoginArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    AdminLoginArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return AdminLoginArgs
  })()

  pbauth.PhoneLoginArgs = (function() {
    /**
     * Properties of a PhoneLoginArgs.
     * @memberof pbauth
     * @interface IPhoneLoginArgs
     * @property {string|null} [phone] PhoneLoginArgs phone
     * @property {string|null} [password] PhoneLoginArgs password
     */

    /**
     * Constructs a new PhoneLoginArgs.
     * @memberof pbauth
     * @classdesc Represents a PhoneLoginArgs.
     * @implements IPhoneLoginArgs
     * @constructor
     * @param {pbauth.IPhoneLoginArgs=} [properties] Properties to set
     */
    function PhoneLoginArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * PhoneLoginArgs phone.
     * @member {string} phone
     * @memberof pbauth.PhoneLoginArgs
     * @instance
     */
    PhoneLoginArgs.prototype.phone = ''

    /**
     * PhoneLoginArgs password.
     * @member {string} password
     * @memberof pbauth.PhoneLoginArgs
     * @instance
     */
    PhoneLoginArgs.prototype.password = ''

    /**
     * Creates a new PhoneLoginArgs instance using the specified properties.
     * @function create
     * @memberof pbauth.PhoneLoginArgs
     * @static
     * @param {pbauth.IPhoneLoginArgs=} [properties] Properties to set
     * @returns {pbauth.PhoneLoginArgs} PhoneLoginArgs instance
     */
    PhoneLoginArgs.create = function create(properties) {
      return new PhoneLoginArgs(properties)
    }

    /**
     * Encodes the specified PhoneLoginArgs message. Does not implicitly {@link pbauth.PhoneLoginArgs.verify|verify} messages.
     * @function encode
     * @memberof pbauth.PhoneLoginArgs
     * @static
     * @param {pbauth.IPhoneLoginArgs} message PhoneLoginArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PhoneLoginArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.phone != null && Object.hasOwnProperty.call(message, 'phone')) { writer.uint32(/* id 1, wireType 2 =*/10).string(message.phone) }
      if (message.password != null && Object.hasOwnProperty.call(message, 'password')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.password) }
      return writer
    }

    /**
     * Encodes the specified PhoneLoginArgs message, length delimited. Does not implicitly {@link pbauth.PhoneLoginArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbauth.PhoneLoginArgs
     * @static
     * @param {pbauth.IPhoneLoginArgs} message PhoneLoginArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PhoneLoginArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a PhoneLoginArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbauth.PhoneLoginArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbauth.PhoneLoginArgs} PhoneLoginArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PhoneLoginArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbauth.PhoneLoginArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.phone = reader.string()
            break
          case 2:
            message.password = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a PhoneLoginArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbauth.PhoneLoginArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbauth.PhoneLoginArgs} PhoneLoginArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PhoneLoginArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a PhoneLoginArgs message.
     * @function verify
     * @memberof pbauth.PhoneLoginArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PhoneLoginArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.phone != null && message.hasOwnProperty('phone')) {
        if (!$util.isString(message.phone)) { return 'phone: string expected' }
      }
      if (message.password != null && message.hasOwnProperty('password')) {
        if (!$util.isString(message.password)) { return 'password: string expected' }
      }
      return null
    }

    /**
     * Creates a PhoneLoginArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbauth.PhoneLoginArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbauth.PhoneLoginArgs} PhoneLoginArgs
     */
    PhoneLoginArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbauth.PhoneLoginArgs) { return object }
      var message = new $root.pbauth.PhoneLoginArgs()
      if (object.phone != null) { message.phone = String(object.phone) }
      if (object.password != null) { message.password = String(object.password) }
      return message
    }

    /**
     * Creates a plain object from a PhoneLoginArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbauth.PhoneLoginArgs
     * @static
     * @param {pbauth.PhoneLoginArgs} message PhoneLoginArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PhoneLoginArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.phone = ''
        object.password = ''
      }
      if (message.phone != null && message.hasOwnProperty('phone')) { object.phone = message.phone }
      if (message.password != null && message.hasOwnProperty('password')) { object.password = message.password }
      return object
    }

    /**
     * Converts this PhoneLoginArgs to JSON.
     * @function toJSON
     * @memberof pbauth.PhoneLoginArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PhoneLoginArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return PhoneLoginArgs
  })()

  pbauth.WxLoginArgs = (function() {
    /**
     * Properties of a WxLoginArgs.
     * @memberof pbauth
     * @interface IWxLoginArgs
     * @property {string|null} [code] WxLoginArgs code
     */

    /**
     * Constructs a new WxLoginArgs.
     * @memberof pbauth
     * @classdesc Represents a WxLoginArgs.
     * @implements IWxLoginArgs
     * @constructor
     * @param {pbauth.IWxLoginArgs=} [properties] Properties to set
     */
    function WxLoginArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * WxLoginArgs code.
     * @member {string} code
     * @memberof pbauth.WxLoginArgs
     * @instance
     */
    WxLoginArgs.prototype.code = ''

    /**
     * Creates a new WxLoginArgs instance using the specified properties.
     * @function create
     * @memberof pbauth.WxLoginArgs
     * @static
     * @param {pbauth.IWxLoginArgs=} [properties] Properties to set
     * @returns {pbauth.WxLoginArgs} WxLoginArgs instance
     */
    WxLoginArgs.create = function create(properties) {
      return new WxLoginArgs(properties)
    }

    /**
     * Encodes the specified WxLoginArgs message. Does not implicitly {@link pbauth.WxLoginArgs.verify|verify} messages.
     * @function encode
     * @memberof pbauth.WxLoginArgs
     * @static
     * @param {pbauth.IWxLoginArgs} message WxLoginArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WxLoginArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 2 =*/10).string(message.code) }
      return writer
    }

    /**
     * Encodes the specified WxLoginArgs message, length delimited. Does not implicitly {@link pbauth.WxLoginArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbauth.WxLoginArgs
     * @static
     * @param {pbauth.IWxLoginArgs} message WxLoginArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WxLoginArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a WxLoginArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbauth.WxLoginArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbauth.WxLoginArgs} WxLoginArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WxLoginArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbauth.WxLoginArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.code = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a WxLoginArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbauth.WxLoginArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbauth.WxLoginArgs} WxLoginArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WxLoginArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a WxLoginArgs message.
     * @function verify
     * @memberof pbauth.WxLoginArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WxLoginArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        if (!$util.isString(message.code)) { return 'code: string expected' }
      }
      return null
    }

    /**
     * Creates a WxLoginArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbauth.WxLoginArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbauth.WxLoginArgs} WxLoginArgs
     */
    WxLoginArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbauth.WxLoginArgs) { return object }
      var message = new $root.pbauth.WxLoginArgs()
      if (object.code != null) { message.code = String(object.code) }
      return message
    }

    /**
     * Creates a plain object from a WxLoginArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbauth.WxLoginArgs
     * @static
     * @param {pbauth.WxLoginArgs} message WxLoginArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WxLoginArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) { object.code = '' }
      if (message.code != null && message.hasOwnProperty('code')) { object.code = message.code }
      return object
    }

    /**
     * Converts this WxLoginArgs to JSON.
     * @function toJSON
     * @memberof pbauth.WxLoginArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WxLoginArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return WxLoginArgs
  })()

  pbauth.Auth = (function() {
    /**
     * Constructs a new Auth service.
     * @memberof pbauth
     * @classdesc Represents an Auth
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Auth(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Auth.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Auth

    /**
     * Creates new Auth service using the specified rpc implementation.
     * @function create
     * @memberof pbauth.Auth
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Auth} RPC service. Useful where requests and/or responses are streamed.
     */
    Auth.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
     * Callback as used by {@link pbauth.Auth#adminLogin}.
     * @memberof pbauth.Auth
     * @typedef AdminLoginCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbauth.AuthLoginReply} [response] AuthLoginReply
     */

    /**
     * Calls AdminLogin.
     * @function adminLogin
     * @memberof pbauth.Auth
     * @instance
     * @param {pbauth.IAdminLoginArgs} request AdminLoginArgs message or plain object
     * @param {pbauth.Auth.AdminLoginCallback} callback Node-style callback called with the error, if any, and AuthLoginReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Auth.prototype.adminLogin = function adminLogin(request, callback) {
      return this.rpcCall(adminLogin, $root.pbauth.AdminLoginArgs, $root.pbauth.AuthLoginReply, request, callback)
    }, 'name', { value: 'AdminLogin' })

    /**
     * Calls AdminLogin.
     * @function adminLogin
     * @memberof pbauth.Auth
     * @instance
     * @param {pbauth.IAdminLoginArgs} request AdminLoginArgs message or plain object
     * @returns {Promise<pbauth.AuthLoginReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbauth.Auth#phoneLogin}.
     * @memberof pbauth.Auth
     * @typedef PhoneLoginCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbauth.AuthLoginReply} [response] AuthLoginReply
     */

    /**
     * Calls PhoneLogin.
     * @function phoneLogin
     * @memberof pbauth.Auth
     * @instance
     * @param {pbauth.IPhoneLoginArgs} request PhoneLoginArgs message or plain object
     * @param {pbauth.Auth.PhoneLoginCallback} callback Node-style callback called with the error, if any, and AuthLoginReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Auth.prototype.phoneLogin = function phoneLogin(request, callback) {
      return this.rpcCall(phoneLogin, $root.pbauth.PhoneLoginArgs, $root.pbauth.AuthLoginReply, request, callback)
    }, 'name', { value: 'PhoneLogin' })

    /**
     * Calls PhoneLogin.
     * @function phoneLogin
     * @memberof pbauth.Auth
     * @instance
     * @param {pbauth.IPhoneLoginArgs} request PhoneLoginArgs message or plain object
     * @returns {Promise<pbauth.AuthLoginReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbauth.Auth#wxLogin}.
     * @memberof pbauth.Auth
     * @typedef WxLoginCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbauth.AuthLoginReply} [response] AuthLoginReply
     */

    /**
     * Calls WxLogin.
     * @function wxLogin
     * @memberof pbauth.Auth
     * @instance
     * @param {pbauth.IWxLoginArgs} request WxLoginArgs message or plain object
     * @param {pbauth.Auth.WxLoginCallback} callback Node-style callback called with the error, if any, and AuthLoginReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Auth.prototype.wxLogin = function wxLogin(request, callback) {
      return this.rpcCall(wxLogin, $root.pbauth.WxLoginArgs, $root.pbauth.AuthLoginReply, request, callback)
    }, 'name', { value: 'WxLogin' })

    /**
     * Calls WxLogin.
     * @function wxLogin
     * @memberof pbauth.Auth
     * @instance
     * @param {pbauth.IWxLoginArgs} request WxLoginArgs message or plain object
     * @returns {Promise<pbauth.AuthLoginReply>} Promise
     * @variation 2
     */

    return Auth
  })()

  return pbauth
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
     * @property {string|null} [certName] UserModel certName
     * @property {string|null} [certNo] UserModel certNo
     * @property {boolean|null} [first] UserModel first
     * @property {boolean|null} [isYoungMod] UserModel isYoungMod
     * @property {pbrole.IRoleModel|null} [roleModel] UserModel roleModel
     * @property {Array.<pbrole.IRoleModel>|null} [roles] UserModel roles
     * @property {Array.<pbuser.IUserModel>|null} [fans] UserModel fans
     * @property {Array.<pbuser.IUserModel>|null} [follows] UserModel follows
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
      this.roles = []
      this.fans = []
      this.follows = []
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
     * UserModel roleModel.
     * @member {pbrole.IRoleModel|null|undefined} roleModel
     * @memberof pbuser.UserModel
     * @instance
     */
    UserModel.prototype.roleModel = null

    /**
     * UserModel roles.
     * @member {Array.<pbrole.IRoleModel>} roles
     * @memberof pbuser.UserModel
     * @instance
     */
    UserModel.prototype.roles = $util.emptyArray

    /**
     * UserModel fans.
     * @member {Array.<pbuser.IUserModel>} fans
     * @memberof pbuser.UserModel
     * @instance
     */
    UserModel.prototype.fans = $util.emptyArray

    /**
     * UserModel follows.
     * @member {Array.<pbuser.IUserModel>} follows
     * @memberof pbuser.UserModel
     * @instance
     */
    UserModel.prototype.follows = $util.emptyArray

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
      if (message.certName != null && Object.hasOwnProperty.call(message, 'certName')) { writer.uint32(/* id 34, wireType 2 =*/274).string(message.certName) }
      if (message.certNo != null && Object.hasOwnProperty.call(message, 'certNo')) { writer.uint32(/* id 35, wireType 2 =*/282).string(message.certNo) }
      if (message.first != null && Object.hasOwnProperty.call(message, 'first')) { writer.uint32(/* id 36, wireType 0 =*/288).bool(message.first) }
      if (message.isYoungMod != null && Object.hasOwnProperty.call(message, 'isYoungMod')) { writer.uint32(/* id 37, wireType 0 =*/296).bool(message.isYoungMod) }
      if (message.roleModel != null && Object.hasOwnProperty.call(message, 'roleModel')) { $root.pbrole.RoleModel.encode(message.roleModel, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim() }
      if (message.roles != null && message.roles.length) {
        for (var i = 0; i < message.roles.length; ++i) { $root.pbrole.RoleModel.encode(message.roles[i], writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim() }
      }
      if (message.fans != null && message.fans.length) {
        for (var i = 0; i < message.fans.length; ++i) { $root.pbuser.UserModel.encode(message.fans[i], writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim() }
      }
      if (message.follows != null && message.follows.length) {
        for (var i = 0; i < message.follows.length; ++i) { $root.pbuser.UserModel.encode(message.follows[i], writer.uint32(/* id 41, wireType 2 =*/330).fork()).ldelim() }
      }
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
          case 1:
            message.id = reader.int64()
            break
          case 2:
            message.createdAt = reader.string()
            break
          case 3:
            message.updatedAt = reader.string()
            break
          case 4:
            message.username = reader.string()
            break
          case 5:
            message.password = reader.string()
            break
          case 6:
            message.email = reader.string()
            break
          case 7:
            message.phone = reader.int64()
            break
          case 8:
            message.nickName = reader.string()
            break
          case 9:
            message.userOauthId = reader.int64()
            break
          case 10:
            message.appId = reader.int64()
            break
          case 11:
            message.avatar = reader.string()
            break
          case 12:
            message.gender = reader.int32()
            break
          case 13:
            message.birthday = reader.string()
            break
          case 14:
            message.signature = reader.string()
            break
          case 15:
            message.description = reader.string()
            break
          case 16:
            message.location = reader.string()
            break
          case 17:
            message.regip = reader.string()
            break
          case 18:
            message.regtm = reader.string()
            break
          case 19:
            message.status = reader.int32()
            break
          case 20:
            message.accountType = reader.int32()
            break
          case 21:
            message.role = reader.int64()
            break
          case 22:
            message.pretty = reader.int64()
            break
          case 23:
            message.age = reader.int32()
            break
          case 24:
            message.country = reader.int32()
            break
          case 25:
            message.countryName = reader.string()
            break
          case 26:
            message.city = reader.string()
            break
          case 27:
            message.Zone = reader.int32()
            break
          case 28:
            message.devDesc = reader.string()
            break
          case 29:
            message.platform = reader.string()
            break
          case 30:
            message.devUuid = reader.string()
            break
          case 31:
            message.ver = reader.string()
            break
          case 32:
            message.isRobt = reader.int32()
            break
          case 34:
            message.certName = reader.string()
            break
          case 35:
            message.certNo = reader.string()
            break
          case 36:
            message.first = reader.bool()
            break
          case 37:
            message.isYoungMod = reader.bool()
            break
          case 38:
            message.roleModel = $root.pbrole.RoleModel.decode(reader, reader.uint32())
            break
          case 39:
            if (!(message.roles && message.roles.length)) { message.roles = [] }
            message.roles.push($root.pbrole.RoleModel.decode(reader, reader.uint32()))
            break
          case 40:
            if (!(message.fans && message.fans.length)) { message.fans = [] }
            message.fans.push($root.pbuser.UserModel.decode(reader, reader.uint32()))
            break
          case 41:
            if (!(message.follows && message.follows.length)) { message.follows = [] }
            message.follows.push($root.pbuser.UserModel.decode(reader, reader.uint32()))
            break
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
      if (message.roleModel != null && message.hasOwnProperty('roleModel')) {
        var error = $root.pbrole.RoleModel.verify(message.roleModel)
        if (error) { return 'roleModel.' + error }
      }
      if (message.roles != null && message.hasOwnProperty('roles')) {
        if (!Array.isArray(message.roles)) { return 'roles: array expected' }
        for (var i = 0; i < message.roles.length; ++i) {
          var error = $root.pbrole.RoleModel.verify(message.roles[i])
          if (error) { return 'roles.' + error }
        }
      }
      if (message.fans != null && message.hasOwnProperty('fans')) {
        if (!Array.isArray(message.fans)) { return 'fans: array expected' }
        for (var i = 0; i < message.fans.length; ++i) {
          var error = $root.pbuser.UserModel.verify(message.fans[i])
          if (error) { return 'fans.' + error }
        }
      }
      if (message.follows != null && message.hasOwnProperty('follows')) {
        if (!Array.isArray(message.follows)) { return 'follows: array expected' }
        for (var i = 0; i < message.follows.length; ++i) {
          var error = $root.pbuser.UserModel.verify(message.follows[i])
          if (error) { return 'follows.' + error }
        }
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
      if (object.certName != null) { message.certName = String(object.certName) }
      if (object.certNo != null) { message.certNo = String(object.certNo) }
      if (object.first != null) { message.first = Boolean(object.first) }
      if (object.isYoungMod != null) { message.isYoungMod = Boolean(object.isYoungMod) }
      if (object.roleModel != null) {
        if (typeof object.roleModel !== 'object') { throw TypeError('.pbuser.UserModel.roleModel: object expected') }
        message.roleModel = $root.pbrole.RoleModel.fromObject(object.roleModel)
      }
      if (object.roles) {
        if (!Array.isArray(object.roles)) { throw TypeError('.pbuser.UserModel.roles: array expected') }
        message.roles = []
        for (var i = 0; i < object.roles.length; ++i) {
          if (typeof object.roles[i] !== 'object') { throw TypeError('.pbuser.UserModel.roles: object expected') }
          message.roles[i] = $root.pbrole.RoleModel.fromObject(object.roles[i])
        }
      }
      if (object.fans) {
        if (!Array.isArray(object.fans)) { throw TypeError('.pbuser.UserModel.fans: array expected') }
        message.fans = []
        for (var i = 0; i < object.fans.length; ++i) {
          if (typeof object.fans[i] !== 'object') { throw TypeError('.pbuser.UserModel.fans: object expected') }
          message.fans[i] = $root.pbuser.UserModel.fromObject(object.fans[i])
        }
      }
      if (object.follows) {
        if (!Array.isArray(object.follows)) { throw TypeError('.pbuser.UserModel.follows: array expected') }
        message.follows = []
        for (var i = 0; i < object.follows.length; ++i) {
          if (typeof object.follows[i] !== 'object') { throw TypeError('.pbuser.UserModel.follows: object expected') }
          message.follows[i] = $root.pbuser.UserModel.fromObject(object.follows[i])
        }
      }
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
      if (options.arrays || options.defaults) {
        object.roles = []
        object.fans = []
        object.follows = []
      }
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
        object.certName = ''
        object.certNo = ''
        object.first = false
        object.isYoungMod = false
        object.roleModel = null
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
      if (message.status != null && message.hasOwnProperty('status')) { object.status = options.enums === String ? $root.pbuser.UserStatus[message.status] : message.status }
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
      if (message.certName != null && message.hasOwnProperty('certName')) { object.certName = message.certName }
      if (message.certNo != null && message.hasOwnProperty('certNo')) { object.certNo = message.certNo }
      if (message.first != null && message.hasOwnProperty('first')) { object.first = message.first }
      if (message.isYoungMod != null && message.hasOwnProperty('isYoungMod')) { object.isYoungMod = message.isYoungMod }
      if (message.roleModel != null && message.hasOwnProperty('roleModel')) { object.roleModel = $root.pbrole.RoleModel.toObject(message.roleModel, options) }
      if (message.roles && message.roles.length) {
        object.roles = []
        for (var j = 0; j < message.roles.length; ++j) { object.roles[j] = $root.pbrole.RoleModel.toObject(message.roles[j], options) }
      }
      if (message.fans && message.fans.length) {
        object.fans = []
        for (var j = 0; j < message.fans.length; ++j) { object.fans[j] = $root.pbuser.UserModel.toObject(message.fans[j], options) }
      }
      if (message.follows && message.follows.length) {
        object.follows = []
        for (var j = 0; j < message.follows.length; ++j) { object.follows[j] = $root.pbuser.UserModel.toObject(message.follows[j], options) }
      }
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
   * @property {number} Anonymously=5 Anonymously value
   */
  pbuser.AccountType = (function() {
    var valuesById = {}; var values = Object.create(valuesById)
    values[valuesById[0] = 'AccountTypeNone'] = 0
    values[valuesById[1] = 'Wechat'] = 1
    values[valuesById[2] = 'Phone'] = 2
    values[valuesById[3] = 'Email'] = 3
    values[valuesById[4] = 'Admin'] = 4
    values[valuesById[5] = 'Anonymously'] = 5
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
          case 1:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          case 2:
            message.query = $root.pbuser.UserModel.decode(reader, reader.uint32())
            break
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
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 3:
            message.data = $root.pbuser.UserModel.decode(reader, reader.uint32())
            break
          case 4:
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbuser.UserModel.decode(reader, reader.uint32()))
            break
          case 5:
            message.total = reader.int64()
            break
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
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
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
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
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
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
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

    return FindUserReply
  })()

  pbuser.FindUserFansAndFollowsArgs = (function() {
    /**
     * Properties of a FindUserFansAndFollowsArgs.
     * @memberof pbuser
     * @interface IFindUserFansAndFollowsArgs
     * @property {pbcommon.IPageInfo|null} [pageInfo] FindUserFansAndFollowsArgs pageInfo
     * @property {number|Long|null} [userId] FindUserFansAndFollowsArgs userId
     * @property {pbuser.FindUserFansAndFollowsArgs.findType|null} [type] FindUserFansAndFollowsArgs type
     * @property {string|null} [query] FindUserFansAndFollowsArgs query
     */

    /**
     * Constructs a new FindUserFansAndFollowsArgs.
     * @memberof pbuser
     * @classdesc Represents a FindUserFansAndFollowsArgs.
     * @implements IFindUserFansAndFollowsArgs
     * @constructor
     * @param {pbuser.IFindUserFansAndFollowsArgs=} [properties] Properties to set
     */
    function FindUserFansAndFollowsArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindUserFansAndFollowsArgs pageInfo.
     * @member {pbcommon.IPageInfo|null|undefined} pageInfo
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @instance
     */
    FindUserFansAndFollowsArgs.prototype.pageInfo = null

    /**
     * FindUserFansAndFollowsArgs userId.
     * @member {number|Long} userId
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @instance
     */
    FindUserFansAndFollowsArgs.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * FindUserFansAndFollowsArgs type.
     * @member {pbuser.FindUserFansAndFollowsArgs.findType} type
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @instance
     */
    FindUserFansAndFollowsArgs.prototype.type = 0

    /**
     * FindUserFansAndFollowsArgs query.
     * @member {string} query
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @instance
     */
    FindUserFansAndFollowsArgs.prototype.query = ''

    /**
     * Creates a new FindUserFansAndFollowsArgs instance using the specified properties.
     * @function create
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @static
     * @param {pbuser.IFindUserFansAndFollowsArgs=} [properties] Properties to set
     * @returns {pbuser.FindUserFansAndFollowsArgs} FindUserFansAndFollowsArgs instance
     */
    FindUserFansAndFollowsArgs.create = function create(properties) {
      return new FindUserFansAndFollowsArgs(properties)
    }

    /**
     * Encodes the specified FindUserFansAndFollowsArgs message. Does not implicitly {@link pbuser.FindUserFansAndFollowsArgs.verify|verify} messages.
     * @function encode
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @static
     * @param {pbuser.IFindUserFansAndFollowsArgs} message FindUserFansAndFollowsArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindUserFansAndFollowsArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.userId != null && Object.hasOwnProperty.call(message, 'userId')) { writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId) }
      if (message.type != null && Object.hasOwnProperty.call(message, 'type')) { writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type) }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.query) }
      return writer
    }

    /**
     * Encodes the specified FindUserFansAndFollowsArgs message, length delimited. Does not implicitly {@link pbuser.FindUserFansAndFollowsArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @static
     * @param {pbuser.IFindUserFansAndFollowsArgs} message FindUserFansAndFollowsArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindUserFansAndFollowsArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindUserFansAndFollowsArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbuser.FindUserFansAndFollowsArgs} FindUserFansAndFollowsArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindUserFansAndFollowsArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbuser.FindUserFansAndFollowsArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          case 2:
            message.userId = reader.int64()
            break
          case 3:
            message.type = reader.int32()
            break
          case 4:
            message.query = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindUserFansAndFollowsArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbuser.FindUserFansAndFollowsArgs} FindUserFansAndFollowsArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindUserFansAndFollowsArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindUserFansAndFollowsArgs message.
     * @function verify
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindUserFansAndFollowsArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.userId != null && message.hasOwnProperty('userId')) {
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high))) { return 'userId: integer|Long expected' }
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
      if (message.query != null && message.hasOwnProperty('query')) {
        if (!$util.isString(message.query)) { return 'query: string expected' }
      }
      return null
    }

    /**
     * Creates a FindUserFansAndFollowsArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbuser.FindUserFansAndFollowsArgs} FindUserFansAndFollowsArgs
     */
    FindUserFansAndFollowsArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbuser.FindUserFansAndFollowsArgs) { return object }
      var message = new $root.pbuser.FindUserFansAndFollowsArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbuser.FindUserFansAndFollowsArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.userId != null) {
        if ($util.Long) { (message.userId = $util.Long.fromValue(object.userId)).unsigned = false } else if (typeof object.userId === 'string') { message.userId = parseInt(object.userId, 10) } else if (typeof object.userId === 'number') { message.userId = object.userId } else if (typeof object.userId === 'object') { message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber() }
      }
      switch (object.type) {
        case 'fans':
        case 0:
          message.type = 0
          break
        case 'follows':
        case 1:
          message.type = 1
          break
      }
      if (object.query != null) { message.query = String(object.query) }
      return message
    }

    /**
     * Creates a plain object from a FindUserFansAndFollowsArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @static
     * @param {pbuser.FindUserFansAndFollowsArgs} message FindUserFansAndFollowsArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindUserFansAndFollowsArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.userId = options.longs === String ? '0' : 0 }
        object.type = options.enums === String ? 'fans' : 0
        object.query = ''
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.userId != null && message.hasOwnProperty('userId')) {
        if (typeof message.userId === 'number') { object.userId = options.longs === String ? String(message.userId) : message.userId } else { object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId }
      }
      if (message.type != null && message.hasOwnProperty('type')) { object.type = options.enums === String ? $root.pbuser.FindUserFansAndFollowsArgs.findType[message.type] : message.type }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = message.query }
      return object
    }

    /**
     * Converts this FindUserFansAndFollowsArgs to JSON.
     * @function toJSON
     * @memberof pbuser.FindUserFansAndFollowsArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindUserFansAndFollowsArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    /**
     * findType enum.
     * @name pbuser.FindUserFansAndFollowsArgs.findType
     * @enum {number}
     * @property {number} fans=0 fans value
     * @property {number} follows=1 follows value
     */
    FindUserFansAndFollowsArgs.findType = (function() {
      var valuesById = {}; var values = Object.create(valuesById)
      values[valuesById[0] = 'fans'] = 0
      values[valuesById[1] = 'follows'] = 1
      return values
    })()

    return FindUserFansAndFollowsArgs
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
     * Callback as used by {@link pbuser.User#findUser}.
     * @memberof pbuser.User
     * @typedef FindUserCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbuser.FindUserReply} [response] FindUserReply
     */

    /**
     * Calls FindUser.
     * @function findUser
     * @memberof pbuser.User
     * @instance
     * @param {pbcommon.IEmpty} request Empty message or plain object
     * @param {pbuser.User.FindUserCallback} callback Node-style callback called with the error, if any, and FindUserReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(User.prototype.findUser = function findUser(request, callback) {
      return this.rpcCall(findUser, $root.pbcommon.Empty, $root.pbuser.FindUserReply, request, callback)
    }, 'name', { value: 'FindUser' })

    /**
     * Calls FindUser.
     * @function findUser
     * @memberof pbuser.User
     * @instance
     * @param {pbcommon.IEmpty} request Empty message or plain object
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
     * @property {string|null} [appId] HttpRequest appId
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
     * HttpRequest appId.
     * @member {string} appId
     * @memberof httpgate.HttpRequest
     * @instance
     */
    HttpRequest.prototype.appId = ''

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
      if (message.appId != null && Object.hasOwnProperty.call(message, 'appId')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.appId) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.data) }
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
          case 1:
            message.token = reader.string()
            break
          case 2:
            message.v = reader.string()
            break
          case 3:
            message.sign = reader.string()
            break
          case 4:
            message.signMethod = reader.string()
            break
          case 5:
            message.timeStamp = reader.string()
            break
          case 6:
            message.appId = reader.string()
            break
          case 7:
            message.data = reader.bytes()
            break
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
      if (message.appId != null && message.hasOwnProperty('appId')) {
        if (!$util.isString(message.appId)) { return 'appId: string expected' }
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
      if (object.appId != null) { message.appId = String(object.appId) }
      if (object.data != null) {
        if (typeof object.data === 'string') { $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0) } else if (object.data.length) { message.data = object.data }
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
        object.appId = ''
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
      if (message.appId != null && message.hasOwnProperty('appId')) { object.appId = message.appId }
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
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 3:
            message.data = reader.bytes()
            break
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
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
            break
        }
      }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!$util.isString(message.msg)) { return 'msg: string expected' }
      }
      if (message.data != null && message.hasOwnProperty('data')) {
        if (!(message.data && typeof message.data.length === 'number' || $util.isString(message.data))) { return 'data: buffer expected' }
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
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
          break
      }
      if (object.msg != null) { message.msg = String(object.msg) }
      if (object.data != null) {
        if (typeof object.data === 'string') { $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0) } else if (object.data.length) { message.data = object.data }
      }
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
      }
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.msg != null && message.hasOwnProperty('msg')) { object.msg = message.msg }
      if (message.data != null && message.hasOwnProperty('data')) { object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data }
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

    return HttpResponse
  })()

  return httpgate
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
     * @property {number|Long|null} [userId] UserOauthModel userId
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
     * UserOauthModel userId.
     * @member {number|Long} userId
     * @memberof pbuserOauth.UserOauthModel
     * @instance
     */
    UserOauthModel.prototype.userId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

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
      if (message.userId != null && Object.hasOwnProperty.call(message, 'userId')) { writer.uint32(/* id 8, wireType 0 =*/64).int64(message.userId) }
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
          case 1:
            message.id = reader.int64()
            break
          case 2:
            message.createdAt = reader.string()
            break
          case 3:
            message.updatedAt = reader.string()
            break
          case 4:
            message.oauthType = reader.int32()
            break
          case 5:
            message.openId = reader.string()
            break
          case 6:
            message.unionId = reader.string()
            break
          case 7:
            message.appId = reader.int64()
            break
          case 8:
            message.userId = reader.int64()
            break
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
      if (message.userId != null && message.hasOwnProperty('userId')) {
        if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high))) { return 'userId: integer|Long expected' }
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
      if (object.userId != null) {
        if ($util.Long) { (message.userId = $util.Long.fromValue(object.userId)).unsigned = false } else if (typeof object.userId === 'string') { message.userId = parseInt(object.userId, 10) } else if (typeof object.userId === 'number') { message.userId = object.userId } else if (typeof object.userId === 'object') { message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber() }
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
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.userId = options.longs === String ? '0' : 0 }
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.oauthType != null && message.hasOwnProperty('oauthType')) { object.oauthType = options.enums === String ? $root.pbuserOauth.OauthType[message.oauthType] : message.oauthType }
      if (message.openId != null && message.hasOwnProperty('openId')) { object.openId = message.openId }
      if (message.unionId != null && message.hasOwnProperty('unionId')) { object.unionId = message.unionId }
      if (message.appId != null && message.hasOwnProperty('appId')) {
        if (typeof message.appId === 'number') { object.appId = options.longs === String ? String(message.appId) : message.appId } else { object.appId = options.longs === String ? $util.Long.prototype.toString.call(message.appId) : options.longs === Number ? new $util.LongBits(message.appId.low >>> 0, message.appId.high >>> 0).toNumber() : message.appId }
      }
      if (message.userId != null && message.hasOwnProperty('userId')) {
        if (typeof message.userId === 'number') { object.userId = options.longs === String ? String(message.userId) : message.userId } else { object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId }
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
          case 1:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          case 2:
            message.query = $root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32())
            break
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
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 3:
            message.data = $root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32())
            break
          case 4:
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32()))
            break
          case 5:
            message.total = reader.int64()
            break
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
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
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
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
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
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
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

    return FindUserOauthReply
  })()

  pbuserOauth.FirstOrCreateUserOauthReply = (function() {
    /**
     * Properties of a FirstOrCreateUserOauthReply.
     * @memberof pbuserOauth
     * @interface IFirstOrCreateUserOauthReply
     * @property {pbcommon.EnumCode|null} [code] FirstOrCreateUserOauthReply code
     * @property {pbuserOauth.IUserOauthModel|null} [userOauth] FirstOrCreateUserOauthReply userOauth
     */

    /**
     * Constructs a new FirstOrCreateUserOauthReply.
     * @memberof pbuserOauth
     * @classdesc Represents a FirstOrCreateUserOauthReply.
     * @implements IFirstOrCreateUserOauthReply
     * @constructor
     * @param {pbuserOauth.IFirstOrCreateUserOauthReply=} [properties] Properties to set
     */
    function FirstOrCreateUserOauthReply(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FirstOrCreateUserOauthReply code.
     * @member {pbcommon.EnumCode} code
     * @memberof pbuserOauth.FirstOrCreateUserOauthReply
     * @instance
     */
    FirstOrCreateUserOauthReply.prototype.code = 0

    /**
     * FirstOrCreateUserOauthReply userOauth.
     * @member {pbuserOauth.IUserOauthModel|null|undefined} userOauth
     * @memberof pbuserOauth.FirstOrCreateUserOauthReply
     * @instance
     */
    FirstOrCreateUserOauthReply.prototype.userOauth = null

    /**
     * Creates a new FirstOrCreateUserOauthReply instance using the specified properties.
     * @function create
     * @memberof pbuserOauth.FirstOrCreateUserOauthReply
     * @static
     * @param {pbuserOauth.IFirstOrCreateUserOauthReply=} [properties] Properties to set
     * @returns {pbuserOauth.FirstOrCreateUserOauthReply} FirstOrCreateUserOauthReply instance
     */
    FirstOrCreateUserOauthReply.create = function create(properties) {
      return new FirstOrCreateUserOauthReply(properties)
    }

    /**
     * Encodes the specified FirstOrCreateUserOauthReply message. Does not implicitly {@link pbuserOauth.FirstOrCreateUserOauthReply.verify|verify} messages.
     * @function encode
     * @memberof pbuserOauth.FirstOrCreateUserOauthReply
     * @static
     * @param {pbuserOauth.IFirstOrCreateUserOauthReply} message FirstOrCreateUserOauthReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FirstOrCreateUserOauthReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.userOauth != null && Object.hasOwnProperty.call(message, 'userOauth')) { $root.pbuserOauth.UserOauthModel.encode(message.userOauth, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
     * Encodes the specified FirstOrCreateUserOauthReply message, length delimited. Does not implicitly {@link pbuserOauth.FirstOrCreateUserOauthReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbuserOauth.FirstOrCreateUserOauthReply
     * @static
     * @param {pbuserOauth.IFirstOrCreateUserOauthReply} message FirstOrCreateUserOauthReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FirstOrCreateUserOauthReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FirstOrCreateUserOauthReply message from the specified reader or buffer.
     * @function decode
     * @memberof pbuserOauth.FirstOrCreateUserOauthReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbuserOauth.FirstOrCreateUserOauthReply} FirstOrCreateUserOauthReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FirstOrCreateUserOauthReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbuserOauth.FirstOrCreateUserOauthReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.userOauth = $root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FirstOrCreateUserOauthReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbuserOauth.FirstOrCreateUserOauthReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbuserOauth.FirstOrCreateUserOauthReply} FirstOrCreateUserOauthReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FirstOrCreateUserOauthReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FirstOrCreateUserOauthReply message.
     * @function verify
     * @memberof pbuserOauth.FirstOrCreateUserOauthReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FirstOrCreateUserOauthReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
            break
        }
      }
      if (message.userOauth != null && message.hasOwnProperty('userOauth')) {
        var error = $root.pbuserOauth.UserOauthModel.verify(message.userOauth)
        if (error) { return 'userOauth.' + error }
      }
      return null
    }

    /**
     * Creates a FirstOrCreateUserOauthReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbuserOauth.FirstOrCreateUserOauthReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbuserOauth.FirstOrCreateUserOauthReply} FirstOrCreateUserOauthReply
     */
    FirstOrCreateUserOauthReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbuserOauth.FirstOrCreateUserOauthReply) { return object }
      var message = new $root.pbuserOauth.FirstOrCreateUserOauthReply()
      switch (object.code) {
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
          break
      }
      if (object.userOauth != null) {
        if (typeof object.userOauth !== 'object') { throw TypeError('.pbuserOauth.FirstOrCreateUserOauthReply.userOauth: object expected') }
        message.userOauth = $root.pbuserOauth.UserOauthModel.fromObject(object.userOauth)
      }
      return message
    }

    /**
     * Creates a plain object from a FirstOrCreateUserOauthReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbuserOauth.FirstOrCreateUserOauthReply
     * @static
     * @param {pbuserOauth.FirstOrCreateUserOauthReply} message FirstOrCreateUserOauthReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FirstOrCreateUserOauthReply.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.code = options.enums === String ? 'None' : 0
        object.userOauth = null
      }
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.userOauth != null && message.hasOwnProperty('userOauth')) { object.userOauth = $root.pbuserOauth.UserOauthModel.toObject(message.userOauth, options) }
      return object
    }

    /**
     * Converts this FirstOrCreateUserOauthReply to JSON.
     * @function toJSON
     * @memberof pbuserOauth.FirstOrCreateUserOauthReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FirstOrCreateUserOauthReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FirstOrCreateUserOauthReply
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
     * @property {string|null} [miniProgramAppId] AppModel miniProgramAppId
     * @property {string|null} [miniProgramAppSecret] AppModel miniProgramAppSecret
     * @property {string|null} [miniProgramToken] AppModel miniProgramToken
     * @property {string|null} [miniProgramencodingAESKey] AppModel miniProgramencodingAESKey
     * @property {string|null} [officalAppId] AppModel officalAppId
     * @property {string|null} [officalAppSecret] AppModel officalAppSecret
     * @property {string|null} [ifficalToken] AppModel ifficalToken
     * @property {string|null} [officalEncodingAESKey] AppModel officalEncodingAESKey
     * @property {string|null} [openAppId] AppModel openAppId
     * @property {string|null} [openAppSecret] AppModel openAppSecret
     * @property {string|null} [openToken] AppModel openToken
     * @property {string|null} [openEncodingAESKey] AppModel openEncodingAESKey
     * @property {string|null} [icon] AppModel icon
     * @property {string|null} [logo] AppModel logo
     * @property {string|null} [description] AppModel description
     * @property {string|null} [version] AppModel version
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
     * AppModel miniProgramAppId.
     * @member {string} miniProgramAppId
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.miniProgramAppId = ''

    /**
     * AppModel miniProgramAppSecret.
     * @member {string} miniProgramAppSecret
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.miniProgramAppSecret = ''

    /**
     * AppModel miniProgramToken.
     * @member {string} miniProgramToken
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.miniProgramToken = ''

    /**
     * AppModel miniProgramencodingAESKey.
     * @member {string} miniProgramencodingAESKey
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.miniProgramencodingAESKey = ''

    /**
     * AppModel officalAppId.
     * @member {string} officalAppId
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.officalAppId = ''

    /**
     * AppModel officalAppSecret.
     * @member {string} officalAppSecret
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.officalAppSecret = ''

    /**
     * AppModel ifficalToken.
     * @member {string} ifficalToken
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.ifficalToken = ''

    /**
     * AppModel officalEncodingAESKey.
     * @member {string} officalEncodingAESKey
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.officalEncodingAESKey = ''

    /**
     * AppModel openAppId.
     * @member {string} openAppId
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.openAppId = ''

    /**
     * AppModel openAppSecret.
     * @member {string} openAppSecret
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.openAppSecret = ''

    /**
     * AppModel openToken.
     * @member {string} openToken
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.openToken = ''

    /**
     * AppModel openEncodingAESKey.
     * @member {string} openEncodingAESKey
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.openEncodingAESKey = ''

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
     * AppModel description.
     * @member {string} description
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.description = ''

    /**
     * AppModel version.
     * @member {string} version
     * @memberof pbapp.AppModel
     * @instance
     */
    AppModel.prototype.version = ''

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
      if (message.miniProgramAppId != null && Object.hasOwnProperty.call(message, 'miniProgramAppId')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.miniProgramAppId) }
      if (message.miniProgramAppSecret != null && Object.hasOwnProperty.call(message, 'miniProgramAppSecret')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.miniProgramAppSecret) }
      if (message.miniProgramToken != null && Object.hasOwnProperty.call(message, 'miniProgramToken')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.miniProgramToken) }
      if (message.miniProgramencodingAESKey != null && Object.hasOwnProperty.call(message, 'miniProgramencodingAESKey')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.miniProgramencodingAESKey) }
      if (message.officalAppId != null && Object.hasOwnProperty.call(message, 'officalAppId')) { writer.uint32(/* id 9, wireType 2 =*/74).string(message.officalAppId) }
      if (message.officalAppSecret != null && Object.hasOwnProperty.call(message, 'officalAppSecret')) { writer.uint32(/* id 10, wireType 2 =*/82).string(message.officalAppSecret) }
      if (message.ifficalToken != null && Object.hasOwnProperty.call(message, 'ifficalToken')) { writer.uint32(/* id 11, wireType 2 =*/90).string(message.ifficalToken) }
      if (message.officalEncodingAESKey != null && Object.hasOwnProperty.call(message, 'officalEncodingAESKey')) { writer.uint32(/* id 12, wireType 2 =*/98).string(message.officalEncodingAESKey) }
      if (message.openAppId != null && Object.hasOwnProperty.call(message, 'openAppId')) { writer.uint32(/* id 13, wireType 2 =*/106).string(message.openAppId) }
      if (message.openAppSecret != null && Object.hasOwnProperty.call(message, 'openAppSecret')) { writer.uint32(/* id 14, wireType 2 =*/114).string(message.openAppSecret) }
      if (message.openToken != null && Object.hasOwnProperty.call(message, 'openToken')) { writer.uint32(/* id 15, wireType 2 =*/122).string(message.openToken) }
      if (message.openEncodingAESKey != null && Object.hasOwnProperty.call(message, 'openEncodingAESKey')) { writer.uint32(/* id 16, wireType 2 =*/130).string(message.openEncodingAESKey) }
      if (message.icon != null && Object.hasOwnProperty.call(message, 'icon')) { writer.uint32(/* id 17, wireType 2 =*/138).string(message.icon) }
      if (message.logo != null && Object.hasOwnProperty.call(message, 'logo')) { writer.uint32(/* id 18, wireType 2 =*/146).string(message.logo) }
      if (message.description != null && Object.hasOwnProperty.call(message, 'description')) { writer.uint32(/* id 19, wireType 2 =*/154).string(message.description) }
      if (message.version != null && Object.hasOwnProperty.call(message, 'version')) { writer.uint32(/* id 21, wireType 2 =*/170).string(message.version) }
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
          case 1:
            message.id = reader.int64()
            break
          case 2:
            message.createdAt = reader.string()
            break
          case 3:
            message.updatedAt = reader.string()
            break
          case 4:
            message.name = reader.string()
            break
          case 5:
            message.miniProgramAppId = reader.string()
            break
          case 6:
            message.miniProgramAppSecret = reader.string()
            break
          case 7:
            message.miniProgramToken = reader.string()
            break
          case 8:
            message.miniProgramencodingAESKey = reader.string()
            break
          case 9:
            message.officalAppId = reader.string()
            break
          case 10:
            message.officalAppSecret = reader.string()
            break
          case 11:
            message.ifficalToken = reader.string()
            break
          case 12:
            message.officalEncodingAESKey = reader.string()
            break
          case 13:
            message.openAppId = reader.string()
            break
          case 14:
            message.openAppSecret = reader.string()
            break
          case 15:
            message.openToken = reader.string()
            break
          case 16:
            message.openEncodingAESKey = reader.string()
            break
          case 17:
            message.icon = reader.string()
            break
          case 18:
            message.logo = reader.string()
            break
          case 19:
            message.description = reader.string()
            break
          case 21:
            message.version = reader.string()
            break
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
      if (message.miniProgramAppId != null && message.hasOwnProperty('miniProgramAppId')) {
        if (!$util.isString(message.miniProgramAppId)) { return 'miniProgramAppId: string expected' }
      }
      if (message.miniProgramAppSecret != null && message.hasOwnProperty('miniProgramAppSecret')) {
        if (!$util.isString(message.miniProgramAppSecret)) { return 'miniProgramAppSecret: string expected' }
      }
      if (message.miniProgramToken != null && message.hasOwnProperty('miniProgramToken')) {
        if (!$util.isString(message.miniProgramToken)) { return 'miniProgramToken: string expected' }
      }
      if (message.miniProgramencodingAESKey != null && message.hasOwnProperty('miniProgramencodingAESKey')) {
        if (!$util.isString(message.miniProgramencodingAESKey)) { return 'miniProgramencodingAESKey: string expected' }
      }
      if (message.officalAppId != null && message.hasOwnProperty('officalAppId')) {
        if (!$util.isString(message.officalAppId)) { return 'officalAppId: string expected' }
      }
      if (message.officalAppSecret != null && message.hasOwnProperty('officalAppSecret')) {
        if (!$util.isString(message.officalAppSecret)) { return 'officalAppSecret: string expected' }
      }
      if (message.ifficalToken != null && message.hasOwnProperty('ifficalToken')) {
        if (!$util.isString(message.ifficalToken)) { return 'ifficalToken: string expected' }
      }
      if (message.officalEncodingAESKey != null && message.hasOwnProperty('officalEncodingAESKey')) {
        if (!$util.isString(message.officalEncodingAESKey)) { return 'officalEncodingAESKey: string expected' }
      }
      if (message.openAppId != null && message.hasOwnProperty('openAppId')) {
        if (!$util.isString(message.openAppId)) { return 'openAppId: string expected' }
      }
      if (message.openAppSecret != null && message.hasOwnProperty('openAppSecret')) {
        if (!$util.isString(message.openAppSecret)) { return 'openAppSecret: string expected' }
      }
      if (message.openToken != null && message.hasOwnProperty('openToken')) {
        if (!$util.isString(message.openToken)) { return 'openToken: string expected' }
      }
      if (message.openEncodingAESKey != null && message.hasOwnProperty('openEncodingAESKey')) {
        if (!$util.isString(message.openEncodingAESKey)) { return 'openEncodingAESKey: string expected' }
      }
      if (message.icon != null && message.hasOwnProperty('icon')) {
        if (!$util.isString(message.icon)) { return 'icon: string expected' }
      }
      if (message.logo != null && message.hasOwnProperty('logo')) {
        if (!$util.isString(message.logo)) { return 'logo: string expected' }
      }
      if (message.description != null && message.hasOwnProperty('description')) {
        if (!$util.isString(message.description)) { return 'description: string expected' }
      }
      if (message.version != null && message.hasOwnProperty('version')) {
        if (!$util.isString(message.version)) { return 'version: string expected' }
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
      if (object.miniProgramAppId != null) { message.miniProgramAppId = String(object.miniProgramAppId) }
      if (object.miniProgramAppSecret != null) { message.miniProgramAppSecret = String(object.miniProgramAppSecret) }
      if (object.miniProgramToken != null) { message.miniProgramToken = String(object.miniProgramToken) }
      if (object.miniProgramencodingAESKey != null) { message.miniProgramencodingAESKey = String(object.miniProgramencodingAESKey) }
      if (object.officalAppId != null) { message.officalAppId = String(object.officalAppId) }
      if (object.officalAppSecret != null) { message.officalAppSecret = String(object.officalAppSecret) }
      if (object.ifficalToken != null) { message.ifficalToken = String(object.ifficalToken) }
      if (object.officalEncodingAESKey != null) { message.officalEncodingAESKey = String(object.officalEncodingAESKey) }
      if (object.openAppId != null) { message.openAppId = String(object.openAppId) }
      if (object.openAppSecret != null) { message.openAppSecret = String(object.openAppSecret) }
      if (object.openToken != null) { message.openToken = String(object.openToken) }
      if (object.openEncodingAESKey != null) { message.openEncodingAESKey = String(object.openEncodingAESKey) }
      if (object.icon != null) { message.icon = String(object.icon) }
      if (object.logo != null) { message.logo = String(object.logo) }
      if (object.description != null) { message.description = String(object.description) }
      if (object.version != null) { message.version = String(object.version) }
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
        object.miniProgramAppId = ''
        object.miniProgramAppSecret = ''
        object.miniProgramToken = ''
        object.miniProgramencodingAESKey = ''
        object.officalAppId = ''
        object.officalAppSecret = ''
        object.ifficalToken = ''
        object.officalEncodingAESKey = ''
        object.openAppId = ''
        object.openAppSecret = ''
        object.openToken = ''
        object.openEncodingAESKey = ''
        object.icon = ''
        object.logo = ''
        object.description = ''
        object.version = ''
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.name != null && message.hasOwnProperty('name')) { object.name = message.name }
      if (message.miniProgramAppId != null && message.hasOwnProperty('miniProgramAppId')) { object.miniProgramAppId = message.miniProgramAppId }
      if (message.miniProgramAppSecret != null && message.hasOwnProperty('miniProgramAppSecret')) { object.miniProgramAppSecret = message.miniProgramAppSecret }
      if (message.miniProgramToken != null && message.hasOwnProperty('miniProgramToken')) { object.miniProgramToken = message.miniProgramToken }
      if (message.miniProgramencodingAESKey != null && message.hasOwnProperty('miniProgramencodingAESKey')) { object.miniProgramencodingAESKey = message.miniProgramencodingAESKey }
      if (message.officalAppId != null && message.hasOwnProperty('officalAppId')) { object.officalAppId = message.officalAppId }
      if (message.officalAppSecret != null && message.hasOwnProperty('officalAppSecret')) { object.officalAppSecret = message.officalAppSecret }
      if (message.ifficalToken != null && message.hasOwnProperty('ifficalToken')) { object.ifficalToken = message.ifficalToken }
      if (message.officalEncodingAESKey != null && message.hasOwnProperty('officalEncodingAESKey')) { object.officalEncodingAESKey = message.officalEncodingAESKey }
      if (message.openAppId != null && message.hasOwnProperty('openAppId')) { object.openAppId = message.openAppId }
      if (message.openAppSecret != null && message.hasOwnProperty('openAppSecret')) { object.openAppSecret = message.openAppSecret }
      if (message.openToken != null && message.hasOwnProperty('openToken')) { object.openToken = message.openToken }
      if (message.openEncodingAESKey != null && message.hasOwnProperty('openEncodingAESKey')) { object.openEncodingAESKey = message.openEncodingAESKey }
      if (message.icon != null && message.hasOwnProperty('icon')) { object.icon = message.icon }
      if (message.logo != null && message.hasOwnProperty('logo')) { object.logo = message.logo }
      if (message.description != null && message.hasOwnProperty('description')) { object.description = message.description }
      if (message.version != null && message.hasOwnProperty('version')) { object.version = message.version }
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
          case 1:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          case 2:
            message.query = $root.pbapp.AppModel.decode(reader, reader.uint32())
            break
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
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 3:
            message.data = $root.pbapp.AppModel.decode(reader, reader.uint32())
            break
          case 4:
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbapp.AppModel.decode(reader, reader.uint32()))
            break
          case 5:
            message.total = reader.int64()
            break
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
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
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
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
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
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
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
          case 1:
            message.id = reader.int64()
            break
          case 2:
            message.createdAt = reader.string()
            break
          case 3:
            message.updatedAt = reader.string()
            break
          case 4:
            message.rptNo = reader.int32()
            break
          case 5:
            message.imei = reader.string()
            break
          case 6:
            message.firmwareEdition = reader.string()
            break
          case 7:
            message.reportTime = reader.string()
            break
          case 8:
            message.devModel = reader.string()
            break
          case 9:
            message.reportType = reader.string()
            break
          case 10:
            message.csq = reader.int32()
            break
          case 11:
            message.dumpEnergy = reader.int32()
            break
          case 12:
            message.stepNum = reader.int32()
            break
          case 13:
            message.charging = reader.int32()
            break
          case 14:
            message.status = reader.int32()
            break
          case 15:
            message.macs = reader.string()
            break
          case 16:
            message.latitude = reader.string()
            break
          case 17:
            message.longitude = reader.string()
            break
          case 18:
            message.flag = reader.int32()
            break
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
          case 1:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          case 2:
            message.query = $root.pbdeviceReport.DeviceReportModel.decode(reader, reader.uint32())
            break
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
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 3:
            message.data = $root.pbdeviceReport.DeviceReportModel.decode(reader, reader.uint32())
            break
          case 4:
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbdeviceReport.DeviceReportModel.decode(reader, reader.uint32()))
            break
          case 5:
            message.total = reader.int64()
            break
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
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
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
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
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
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
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
          case 1:
            message.upPacketSN = reader.int32()
            break
          case 2:
            message.upDataSN = reader.int32()
            break
          case 3:
            message.topic = reader.string()
            break
          case 4:
            message.timestamp = reader.int64()
            break
          case 5:
            message.tenantId = reader.string()
            break
          case 6:
            message.serviceId = reader.string()
            break
          case 7:
            message.protocol = reader.string()
            break
          case 8:
            message.productId = reader.string()
            break
          case 9:
            message.payload = $root.pbdeviceReport.AepReportArgs.Payload.decode(reader, reader.uint32())
            break
          case 10:
            message.messageType = reader.string()
            break
          case 11:
            message.deviceType = reader.string()
            break
          case 12:
            message.deviceId = reader.string()
            break
          case 13:
            message.assocAssetId = reader.string()
            break
          case 14:
            message.IMSI = reader.string()
            break
          case 15:
            message.IMEI = reader.string()
            break
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
            case 1:
              message.APPdata = reader.string()
              break
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

      return Payload
    })()

    return AepReportArgs
  })()

  pbdeviceReport.CommandRequest = (function() {
    /**
     * Properties of a CommandRequest.
     * @memberof pbdeviceReport
     * @interface ICommandRequest
     * @property {number|Long|null} [timestamp] CommandRequest timestamp
     * @property {string|null} [tenantId] CommandRequest tenantId
     * @property {number|null} [taskId] CommandRequest taskId
     * @property {pbdeviceReport.CommandRequest.IResult|null} [result] CommandRequest result
     * @property {string|null} [protocol] CommandRequest protocol
     * @property {string|null} [productId] CommandRequest productId
     * @property {string|null} [messageType] CommandRequest messageType
     * @property {string|null} [deviceId] CommandRequest deviceId
     * @property {string|null} [imei] CommandRequest imei
     */

    /**
     * Constructs a new CommandRequest.
     * @memberof pbdeviceReport
     * @classdesc Represents a CommandRequest.
     * @implements ICommandRequest
     * @constructor
     * @param {pbdeviceReport.ICommandRequest=} [properties] Properties to set
     */
    function CommandRequest(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * CommandRequest timestamp.
     * @member {number|Long} timestamp
     * @memberof pbdeviceReport.CommandRequest
     * @instance
     */
    CommandRequest.prototype.timestamp = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * CommandRequest tenantId.
     * @member {string} tenantId
     * @memberof pbdeviceReport.CommandRequest
     * @instance
     */
    CommandRequest.prototype.tenantId = ''

    /**
     * CommandRequest taskId.
     * @member {number} taskId
     * @memberof pbdeviceReport.CommandRequest
     * @instance
     */
    CommandRequest.prototype.taskId = 0

    /**
     * CommandRequest result.
     * @member {pbdeviceReport.CommandRequest.IResult|null|undefined} result
     * @memberof pbdeviceReport.CommandRequest
     * @instance
     */
    CommandRequest.prototype.result = null

    /**
     * CommandRequest protocol.
     * @member {string} protocol
     * @memberof pbdeviceReport.CommandRequest
     * @instance
     */
    CommandRequest.prototype.protocol = ''

    /**
     * CommandRequest productId.
     * @member {string} productId
     * @memberof pbdeviceReport.CommandRequest
     * @instance
     */
    CommandRequest.prototype.productId = ''

    /**
     * CommandRequest messageType.
     * @member {string} messageType
     * @memberof pbdeviceReport.CommandRequest
     * @instance
     */
    CommandRequest.prototype.messageType = ''

    /**
     * CommandRequest deviceId.
     * @member {string} deviceId
     * @memberof pbdeviceReport.CommandRequest
     * @instance
     */
    CommandRequest.prototype.deviceId = ''

    /**
     * CommandRequest imei.
     * @member {string} imei
     * @memberof pbdeviceReport.CommandRequest
     * @instance
     */
    CommandRequest.prototype.imei = ''

    /**
     * Creates a new CommandRequest instance using the specified properties.
     * @function create
     * @memberof pbdeviceReport.CommandRequest
     * @static
     * @param {pbdeviceReport.ICommandRequest=} [properties] Properties to set
     * @returns {pbdeviceReport.CommandRequest} CommandRequest instance
     */
    CommandRequest.create = function create(properties) {
      return new CommandRequest(properties)
    }

    /**
     * Encodes the specified CommandRequest message. Does not implicitly {@link pbdeviceReport.CommandRequest.verify|verify} messages.
     * @function encode
     * @memberof pbdeviceReport.CommandRequest
     * @static
     * @param {pbdeviceReport.ICommandRequest} message CommandRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommandRequest.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.timestamp != null && Object.hasOwnProperty.call(message, 'timestamp')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp) }
      if (message.tenantId != null && Object.hasOwnProperty.call(message, 'tenantId')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.tenantId) }
      if (message.taskId != null && Object.hasOwnProperty.call(message, 'taskId')) { writer.uint32(/* id 3, wireType 0 =*/24).int32(message.taskId) }
      if (message.result != null && Object.hasOwnProperty.call(message, 'result')) { $root.pbdeviceReport.CommandRequest.Result.encode(message.result, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      if (message.protocol != null && Object.hasOwnProperty.call(message, 'protocol')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.protocol) }
      if (message.productId != null && Object.hasOwnProperty.call(message, 'productId')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.productId) }
      if (message.messageType != null && Object.hasOwnProperty.call(message, 'messageType')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.messageType) }
      if (message.deviceId != null && Object.hasOwnProperty.call(message, 'deviceId')) { writer.uint32(/* id 8, wireType 2 =*/66).string(message.deviceId) }
      if (message.imei != null && Object.hasOwnProperty.call(message, 'imei')) { writer.uint32(/* id 9, wireType 2 =*/74).string(message.imei) }
      return writer
    }

    /**
     * Encodes the specified CommandRequest message, length delimited. Does not implicitly {@link pbdeviceReport.CommandRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbdeviceReport.CommandRequest
     * @static
     * @param {pbdeviceReport.ICommandRequest} message CommandRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CommandRequest.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a CommandRequest message from the specified reader or buffer.
     * @function decode
     * @memberof pbdeviceReport.CommandRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbdeviceReport.CommandRequest} CommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommandRequest.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbdeviceReport.CommandRequest()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.timestamp = reader.int64()
            break
          case 2:
            message.tenantId = reader.string()
            break
          case 3:
            message.taskId = reader.int32()
            break
          case 4:
            message.result = $root.pbdeviceReport.CommandRequest.Result.decode(reader, reader.uint32())
            break
          case 5:
            message.protocol = reader.string()
            break
          case 6:
            message.productId = reader.string()
            break
          case 7:
            message.messageType = reader.string()
            break
          case 8:
            message.deviceId = reader.string()
            break
          case 9:
            message.imei = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a CommandRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbdeviceReport.CommandRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbdeviceReport.CommandRequest} CommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CommandRequest.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a CommandRequest message.
     * @function verify
     * @memberof pbdeviceReport.CommandRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CommandRequest.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.timestamp != null && message.hasOwnProperty('timestamp')) {
        if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high))) { return 'timestamp: integer|Long expected' }
      }
      if (message.tenantId != null && message.hasOwnProperty('tenantId')) {
        if (!$util.isString(message.tenantId)) { return 'tenantId: string expected' }
      }
      if (message.taskId != null && message.hasOwnProperty('taskId')) {
        if (!$util.isInteger(message.taskId)) { return 'taskId: integer expected' }
      }
      if (message.result != null && message.hasOwnProperty('result')) {
        var error = $root.pbdeviceReport.CommandRequest.Result.verify(message.result)
        if (error) { return 'result.' + error }
      }
      if (message.protocol != null && message.hasOwnProperty('protocol')) {
        if (!$util.isString(message.protocol)) { return 'protocol: string expected' }
      }
      if (message.productId != null && message.hasOwnProperty('productId')) {
        if (!$util.isString(message.productId)) { return 'productId: string expected' }
      }
      if (message.messageType != null && message.hasOwnProperty('messageType')) {
        if (!$util.isString(message.messageType)) { return 'messageType: string expected' }
      }
      if (message.deviceId != null && message.hasOwnProperty('deviceId')) {
        if (!$util.isString(message.deviceId)) { return 'deviceId: string expected' }
      }
      if (message.imei != null && message.hasOwnProperty('imei')) {
        if (!$util.isString(message.imei)) { return 'imei: string expected' }
      }
      return null
    }

    /**
     * Creates a CommandRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbdeviceReport.CommandRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbdeviceReport.CommandRequest} CommandRequest
     */
    CommandRequest.fromObject = function fromObject(object) {
      if (object instanceof $root.pbdeviceReport.CommandRequest) { return object }
      var message = new $root.pbdeviceReport.CommandRequest()
      if (object.timestamp != null) {
        if ($util.Long) { (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false } else if (typeof object.timestamp === 'string') { message.timestamp = parseInt(object.timestamp, 10) } else if (typeof object.timestamp === 'number') { message.timestamp = object.timestamp } else if (typeof object.timestamp === 'object') { message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber() }
      }
      if (object.tenantId != null) { message.tenantId = String(object.tenantId) }
      if (object.taskId != null) { message.taskId = object.taskId | 0 }
      if (object.result != null) {
        if (typeof object.result !== 'object') { throw TypeError('.pbdeviceReport.CommandRequest.result: object expected') }
        message.result = $root.pbdeviceReport.CommandRequest.Result.fromObject(object.result)
      }
      if (object.protocol != null) { message.protocol = String(object.protocol) }
      if (object.productId != null) { message.productId = String(object.productId) }
      if (object.messageType != null) { message.messageType = String(object.messageType) }
      if (object.deviceId != null) { message.deviceId = String(object.deviceId) }
      if (object.imei != null) { message.imei = String(object.imei) }
      return message
    }

    /**
     * Creates a plain object from a CommandRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbdeviceReport.CommandRequest
     * @static
     * @param {pbdeviceReport.CommandRequest} message CommandRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CommandRequest.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.timestamp = options.longs === String ? '0' : 0 }
        object.tenantId = ''
        object.taskId = 0
        object.result = null
        object.protocol = ''
        object.productId = ''
        object.messageType = ''
        object.deviceId = ''
        object.imei = ''
      }
      if (message.timestamp != null && message.hasOwnProperty('timestamp')) {
        if (typeof message.timestamp === 'number') { object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp } else { object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp }
      }
      if (message.tenantId != null && message.hasOwnProperty('tenantId')) { object.tenantId = message.tenantId }
      if (message.taskId != null && message.hasOwnProperty('taskId')) { object.taskId = message.taskId }
      if (message.result != null && message.hasOwnProperty('result')) { object.result = $root.pbdeviceReport.CommandRequest.Result.toObject(message.result, options) }
      if (message.protocol != null && message.hasOwnProperty('protocol')) { object.protocol = message.protocol }
      if (message.productId != null && message.hasOwnProperty('productId')) { object.productId = message.productId }
      if (message.messageType != null && message.hasOwnProperty('messageType')) { object.messageType = message.messageType }
      if (message.deviceId != null && message.hasOwnProperty('deviceId')) { object.deviceId = message.deviceId }
      if (message.imei != null && message.hasOwnProperty('imei')) { object.imei = message.imei }
      return object
    }

    /**
     * Converts this CommandRequest to JSON.
     * @function toJSON
     * @memberof pbdeviceReport.CommandRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CommandRequest.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    CommandRequest.Result = (function() {
      /**
       * Properties of a Result.
       * @memberof pbdeviceReport.CommandRequest
       * @interface IResult
       * @property {string|null} [resultDetail] Result resultDetail
       * @property {string|null} [resultCode] Result resultCode
       */

      /**
       * Constructs a new Result.
       * @memberof pbdeviceReport.CommandRequest
       * @classdesc Represents a Result.
       * @implements IResult
       * @constructor
       * @param {pbdeviceReport.CommandRequest.IResult=} [properties] Properties to set
       */
      function Result(properties) {
        if (properties) {
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
            if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
          }
        }
      }

      /**
       * Result resultDetail.
       * @member {string} resultDetail
       * @memberof pbdeviceReport.CommandRequest.Result
       * @instance
       */
      Result.prototype.resultDetail = ''

      /**
       * Result resultCode.
       * @member {string} resultCode
       * @memberof pbdeviceReport.CommandRequest.Result
       * @instance
       */
      Result.prototype.resultCode = ''

      /**
       * Creates a new Result instance using the specified properties.
       * @function create
       * @memberof pbdeviceReport.CommandRequest.Result
       * @static
       * @param {pbdeviceReport.CommandRequest.IResult=} [properties] Properties to set
       * @returns {pbdeviceReport.CommandRequest.Result} Result instance
       */
      Result.create = function create(properties) {
        return new Result(properties)
      }

      /**
       * Encodes the specified Result message. Does not implicitly {@link pbdeviceReport.CommandRequest.Result.verify|verify} messages.
       * @function encode
       * @memberof pbdeviceReport.CommandRequest.Result
       * @static
       * @param {pbdeviceReport.CommandRequest.IResult} message Result message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Result.encode = function encode(message, writer) {
        if (!writer) { writer = $Writer.create() }
        if (message.resultDetail != null && Object.hasOwnProperty.call(message, 'resultDetail')) { writer.uint32(/* id 1, wireType 2 =*/10).string(message.resultDetail) }
        if (message.resultCode != null && Object.hasOwnProperty.call(message, 'resultCode')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.resultCode) }
        return writer
      }

      /**
       * Encodes the specified Result message, length delimited. Does not implicitly {@link pbdeviceReport.CommandRequest.Result.verify|verify} messages.
       * @function encodeDelimited
       * @memberof pbdeviceReport.CommandRequest.Result
       * @static
       * @param {pbdeviceReport.CommandRequest.IResult} message Result message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Result.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim()
      }

      /**
       * Decodes a Result message from the specified reader or buffer.
       * @function decode
       * @memberof pbdeviceReport.CommandRequest.Result
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {pbdeviceReport.CommandRequest.Result} Result
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Result.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
        var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbdeviceReport.CommandRequest.Result()
        while (reader.pos < end) {
          var tag = reader.uint32()
          switch (tag >>> 3) {
            case 1:
              message.resultDetail = reader.string()
              break
            case 2:
              message.resultCode = reader.string()
              break
            default:
              reader.skipType(tag & 7)
              break
          }
        }
        return message
      }

      /**
       * Decodes a Result message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof pbdeviceReport.CommandRequest.Result
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {pbdeviceReport.CommandRequest.Result} Result
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Result.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Result message.
       * @function verify
       * @memberof pbdeviceReport.CommandRequest.Result
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Result.verify = function verify(message) {
        if (typeof message !== 'object' || message === null) { return 'object expected' }
        if (message.resultDetail != null && message.hasOwnProperty('resultDetail')) {
          if (!$util.isString(message.resultDetail)) { return 'resultDetail: string expected' }
        }
        if (message.resultCode != null && message.hasOwnProperty('resultCode')) {
          if (!$util.isString(message.resultCode)) { return 'resultCode: string expected' }
        }
        return null
      }

      /**
       * Creates a Result message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof pbdeviceReport.CommandRequest.Result
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {pbdeviceReport.CommandRequest.Result} Result
       */
      Result.fromObject = function fromObject(object) {
        if (object instanceof $root.pbdeviceReport.CommandRequest.Result) { return object }
        var message = new $root.pbdeviceReport.CommandRequest.Result()
        if (object.resultDetail != null) { message.resultDetail = String(object.resultDetail) }
        if (object.resultCode != null) { message.resultCode = String(object.resultCode) }
        return message
      }

      /**
       * Creates a plain object from a Result message. Also converts values to other types if specified.
       * @function toObject
       * @memberof pbdeviceReport.CommandRequest.Result
       * @static
       * @param {pbdeviceReport.CommandRequest.Result} message Result
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Result.toObject = function toObject(message, options) {
        if (!options) { options = {} }
        var object = {}
        if (options.defaults) {
          object.resultDetail = ''
          object.resultCode = ''
        }
        if (message.resultDetail != null && message.hasOwnProperty('resultDetail')) { object.resultDetail = message.resultDetail }
        if (message.resultCode != null && message.hasOwnProperty('resultCode')) { object.resultCode = message.resultCode }
        return object
      }

      /**
       * Converts this Result to JSON.
       * @function toJSON
       * @memberof pbdeviceReport.CommandRequest.Result
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Result.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
      }

      return Result
    })()

    return CommandRequest
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

    /**
     * Callback as used by {@link pbdeviceReport.DeviceReport#aepCmdResp}.
     * @memberof pbdeviceReport.DeviceReport
     * @typedef AepCmdRespCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls AepCmdResp.
     * @function aepCmdResp
     * @memberof pbdeviceReport.DeviceReport
     * @instance
     * @param {pbdeviceReport.ICommandRequest} request CommandRequest message or plain object
     * @param {pbdeviceReport.DeviceReport.AepCmdRespCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceReport.prototype.aepCmdResp = function aepCmdResp(request, callback) {
      return this.rpcCall(aepCmdResp, $root.pbdeviceReport.CommandRequest, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'AepCmdResp' })

    /**
     * Calls AepCmdResp.
     * @function aepCmdResp
     * @memberof pbdeviceReport.DeviceReport
     * @instance
     * @param {pbdeviceReport.ICommandRequest} request CommandRequest message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    return DeviceReport
  })()

  return pbdeviceReport
})()

$root.pbemployee = (function() {
  /**
   * Namespace pbemployee.
   * @exports pbemployee
   * @namespace
   */
  var pbemployee = {}

  pbemployee.EmployeeModel = (function() {
    /**
     * Properties of an EmployeeModel.
     * @memberof pbemployee
     * @interface IEmployeeModel
     * @property {number|Long|null} [id] EmployeeModel id
     * @property {string|null} [createdAt] EmployeeModel createdAt
     * @property {string|null} [updatedAt] EmployeeModel updatedAt
     * @property {string|null} [realName] EmployeeModel realName
     * @property {string|null} [idNumber] EmployeeModel idNumber
     * @property {string|null} [bankAccount] EmployeeModel bankAccount
     * @property {string|null} [bankAddress] EmployeeModel bankAddress
     * @property {number|Long|null} [phone] EmployeeModel phone
     * @property {string|null} [jieba] EmployeeModel jieba
     * @property {string|null} [quanpin] EmployeeModel quanpin
     */

    /**
     * Constructs a new EmployeeModel.
     * @memberof pbemployee
     * @classdesc Represents an EmployeeModel.
     * @implements IEmployeeModel
     * @constructor
     * @param {pbemployee.IEmployeeModel=} [properties] Properties to set
     */
    function EmployeeModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * EmployeeModel id.
     * @member {number|Long} id
     * @memberof pbemployee.EmployeeModel
     * @instance
     */
    EmployeeModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * EmployeeModel createdAt.
     * @member {string} createdAt
     * @memberof pbemployee.EmployeeModel
     * @instance
     */
    EmployeeModel.prototype.createdAt = ''

    /**
     * EmployeeModel updatedAt.
     * @member {string} updatedAt
     * @memberof pbemployee.EmployeeModel
     * @instance
     */
    EmployeeModel.prototype.updatedAt = ''

    /**
     * EmployeeModel realName.
     * @member {string} realName
     * @memberof pbemployee.EmployeeModel
     * @instance
     */
    EmployeeModel.prototype.realName = ''

    /**
     * EmployeeModel idNumber.
     * @member {string} idNumber
     * @memberof pbemployee.EmployeeModel
     * @instance
     */
    EmployeeModel.prototype.idNumber = ''

    /**
     * EmployeeModel bankAccount.
     * @member {string} bankAccount
     * @memberof pbemployee.EmployeeModel
     * @instance
     */
    EmployeeModel.prototype.bankAccount = ''

    /**
     * EmployeeModel bankAddress.
     * @member {string} bankAddress
     * @memberof pbemployee.EmployeeModel
     * @instance
     */
    EmployeeModel.prototype.bankAddress = ''

    /**
     * EmployeeModel phone.
     * @member {number|Long} phone
     * @memberof pbemployee.EmployeeModel
     * @instance
     */
    EmployeeModel.prototype.phone = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * EmployeeModel jieba.
     * @member {string} jieba
     * @memberof pbemployee.EmployeeModel
     * @instance
     */
    EmployeeModel.prototype.jieba = ''

    /**
     * EmployeeModel quanpin.
     * @member {string} quanpin
     * @memberof pbemployee.EmployeeModel
     * @instance
     */
    EmployeeModel.prototype.quanpin = ''

    /**
     * Creates a new EmployeeModel instance using the specified properties.
     * @function create
     * @memberof pbemployee.EmployeeModel
     * @static
     * @param {pbemployee.IEmployeeModel=} [properties] Properties to set
     * @returns {pbemployee.EmployeeModel} EmployeeModel instance
     */
    EmployeeModel.create = function create(properties) {
      return new EmployeeModel(properties)
    }

    /**
     * Encodes the specified EmployeeModel message. Does not implicitly {@link pbemployee.EmployeeModel.verify|verify} messages.
     * @function encode
     * @memberof pbemployee.EmployeeModel
     * @static
     * @param {pbemployee.IEmployeeModel} message EmployeeModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmployeeModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.realName != null && Object.hasOwnProperty.call(message, 'realName')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.realName) }
      if (message.idNumber != null && Object.hasOwnProperty.call(message, 'idNumber')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.idNumber) }
      if (message.bankAccount != null && Object.hasOwnProperty.call(message, 'bankAccount')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.bankAccount) }
      if (message.bankAddress != null && Object.hasOwnProperty.call(message, 'bankAddress')) { writer.uint32(/* id 7, wireType 2 =*/58).string(message.bankAddress) }
      if (message.phone != null && Object.hasOwnProperty.call(message, 'phone')) { writer.uint32(/* id 8, wireType 0 =*/64).int64(message.phone) }
      if (message.jieba != null && Object.hasOwnProperty.call(message, 'jieba')) { writer.uint32(/* id 9, wireType 2 =*/74).string(message.jieba) }
      if (message.quanpin != null && Object.hasOwnProperty.call(message, 'quanpin')) { writer.uint32(/* id 10, wireType 2 =*/82).string(message.quanpin) }
      return writer
    }

    /**
     * Encodes the specified EmployeeModel message, length delimited. Does not implicitly {@link pbemployee.EmployeeModel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbemployee.EmployeeModel
     * @static
     * @param {pbemployee.IEmployeeModel} message EmployeeModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EmployeeModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes an EmployeeModel message from the specified reader or buffer.
     * @function decode
     * @memberof pbemployee.EmployeeModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbemployee.EmployeeModel} EmployeeModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmployeeModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbemployee.EmployeeModel()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.id = reader.int64()
            break
          case 2:
            message.createdAt = reader.string()
            break
          case 3:
            message.updatedAt = reader.string()
            break
          case 4:
            message.realName = reader.string()
            break
          case 5:
            message.idNumber = reader.string()
            break
          case 6:
            message.bankAccount = reader.string()
            break
          case 7:
            message.bankAddress = reader.string()
            break
          case 8:
            message.phone = reader.int64()
            break
          case 9:
            message.jieba = reader.string()
            break
          case 10:
            message.quanpin = reader.string()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes an EmployeeModel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbemployee.EmployeeModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbemployee.EmployeeModel} EmployeeModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EmployeeModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies an EmployeeModel message.
     * @function verify
     * @memberof pbemployee.EmployeeModel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EmployeeModel.verify = function verify(message) {
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
      if (message.realName != null && message.hasOwnProperty('realName')) {
        if (!$util.isString(message.realName)) { return 'realName: string expected' }
      }
      if (message.idNumber != null && message.hasOwnProperty('idNumber')) {
        if (!$util.isString(message.idNumber)) { return 'idNumber: string expected' }
      }
      if (message.bankAccount != null && message.hasOwnProperty('bankAccount')) {
        if (!$util.isString(message.bankAccount)) { return 'bankAccount: string expected' }
      }
      if (message.bankAddress != null && message.hasOwnProperty('bankAddress')) {
        if (!$util.isString(message.bankAddress)) { return 'bankAddress: string expected' }
      }
      if (message.phone != null && message.hasOwnProperty('phone')) {
        if (!$util.isInteger(message.phone) && !(message.phone && $util.isInteger(message.phone.low) && $util.isInteger(message.phone.high))) { return 'phone: integer|Long expected' }
      }
      if (message.jieba != null && message.hasOwnProperty('jieba')) {
        if (!$util.isString(message.jieba)) { return 'jieba: string expected' }
      }
      if (message.quanpin != null && message.hasOwnProperty('quanpin')) {
        if (!$util.isString(message.quanpin)) { return 'quanpin: string expected' }
      }
      return null
    }

    /**
     * Creates an EmployeeModel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbemployee.EmployeeModel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbemployee.EmployeeModel} EmployeeModel
     */
    EmployeeModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbemployee.EmployeeModel) { return object }
      var message = new $root.pbemployee.EmployeeModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.realName != null) { message.realName = String(object.realName) }
      if (object.idNumber != null) { message.idNumber = String(object.idNumber) }
      if (object.bankAccount != null) { message.bankAccount = String(object.bankAccount) }
      if (object.bankAddress != null) { message.bankAddress = String(object.bankAddress) }
      if (object.phone != null) {
        if ($util.Long) { (message.phone = $util.Long.fromValue(object.phone)).unsigned = false } else if (typeof object.phone === 'string') { message.phone = parseInt(object.phone, 10) } else if (typeof object.phone === 'number') { message.phone = object.phone } else if (typeof object.phone === 'object') { message.phone = new $util.LongBits(object.phone.low >>> 0, object.phone.high >>> 0).toNumber() }
      }
      if (object.jieba != null) { message.jieba = String(object.jieba) }
      if (object.quanpin != null) { message.quanpin = String(object.quanpin) }
      return message
    }

    /**
     * Creates a plain object from an EmployeeModel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbemployee.EmployeeModel
     * @static
     * @param {pbemployee.EmployeeModel} message EmployeeModel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EmployeeModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        object.realName = ''
        object.idNumber = ''
        object.bankAccount = ''
        object.bankAddress = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.phone = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.phone = options.longs === String ? '0' : 0 }
        object.jieba = ''
        object.quanpin = ''
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.realName != null && message.hasOwnProperty('realName')) { object.realName = message.realName }
      if (message.idNumber != null && message.hasOwnProperty('idNumber')) { object.idNumber = message.idNumber }
      if (message.bankAccount != null && message.hasOwnProperty('bankAccount')) { object.bankAccount = message.bankAccount }
      if (message.bankAddress != null && message.hasOwnProperty('bankAddress')) { object.bankAddress = message.bankAddress }
      if (message.phone != null && message.hasOwnProperty('phone')) {
        if (typeof message.phone === 'number') { object.phone = options.longs === String ? String(message.phone) : message.phone } else { object.phone = options.longs === String ? $util.Long.prototype.toString.call(message.phone) : options.longs === Number ? new $util.LongBits(message.phone.low >>> 0, message.phone.high >>> 0).toNumber() : message.phone }
      }
      if (message.jieba != null && message.hasOwnProperty('jieba')) { object.jieba = message.jieba }
      if (message.quanpin != null && message.hasOwnProperty('quanpin')) { object.quanpin = message.quanpin }
      return object
    }

    /**
     * Converts this EmployeeModel to JSON.
     * @function toJSON
     * @memberof pbemployee.EmployeeModel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EmployeeModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return EmployeeModel
  })()

  pbemployee.FindEmployeeArgs = (function() {
    /**
     * Properties of a FindEmployeeArgs.
     * @memberof pbemployee
     * @interface IFindEmployeeArgs
     * @property {pbcommon.IPageInfo|null} [pageInfo] FindEmployeeArgs pageInfo
     * @property {pbemployee.IEmployeeModel|null} [query] FindEmployeeArgs query
     */

    /**
     * Constructs a new FindEmployeeArgs.
     * @memberof pbemployee
     * @classdesc Represents a FindEmployeeArgs.
     * @implements IFindEmployeeArgs
     * @constructor
     * @param {pbemployee.IFindEmployeeArgs=} [properties] Properties to set
     */
    function FindEmployeeArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindEmployeeArgs pageInfo.
     * @member {pbcommon.IPageInfo|null|undefined} pageInfo
     * @memberof pbemployee.FindEmployeeArgs
     * @instance
     */
    FindEmployeeArgs.prototype.pageInfo = null

    /**
     * FindEmployeeArgs query.
     * @member {pbemployee.IEmployeeModel|null|undefined} query
     * @memberof pbemployee.FindEmployeeArgs
     * @instance
     */
    FindEmployeeArgs.prototype.query = null

    /**
     * Creates a new FindEmployeeArgs instance using the specified properties.
     * @function create
     * @memberof pbemployee.FindEmployeeArgs
     * @static
     * @param {pbemployee.IFindEmployeeArgs=} [properties] Properties to set
     * @returns {pbemployee.FindEmployeeArgs} FindEmployeeArgs instance
     */
    FindEmployeeArgs.create = function create(properties) {
      return new FindEmployeeArgs(properties)
    }

    /**
     * Encodes the specified FindEmployeeArgs message. Does not implicitly {@link pbemployee.FindEmployeeArgs.verify|verify} messages.
     * @function encode
     * @memberof pbemployee.FindEmployeeArgs
     * @static
     * @param {pbemployee.IFindEmployeeArgs} message FindEmployeeArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindEmployeeArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbemployee.EmployeeModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
     * Encodes the specified FindEmployeeArgs message, length delimited. Does not implicitly {@link pbemployee.FindEmployeeArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbemployee.FindEmployeeArgs
     * @static
     * @param {pbemployee.IFindEmployeeArgs} message FindEmployeeArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindEmployeeArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindEmployeeArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbemployee.FindEmployeeArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbemployee.FindEmployeeArgs} FindEmployeeArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindEmployeeArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbemployee.FindEmployeeArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          case 2:
            message.query = $root.pbemployee.EmployeeModel.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindEmployeeArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbemployee.FindEmployeeArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbemployee.FindEmployeeArgs} FindEmployeeArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindEmployeeArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindEmployeeArgs message.
     * @function verify
     * @memberof pbemployee.FindEmployeeArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindEmployeeArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbemployee.EmployeeModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
     * Creates a FindEmployeeArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbemployee.FindEmployeeArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbemployee.FindEmployeeArgs} FindEmployeeArgs
     */
    FindEmployeeArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbemployee.FindEmployeeArgs) { return object }
      var message = new $root.pbemployee.FindEmployeeArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbemployee.FindEmployeeArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbemployee.FindEmployeeArgs.query: object expected') }
        message.query = $root.pbemployee.EmployeeModel.fromObject(object.query)
      }
      return message
    }

    /**
     * Creates a plain object from a FindEmployeeArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbemployee.FindEmployeeArgs
     * @static
     * @param {pbemployee.FindEmployeeArgs} message FindEmployeeArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindEmployeeArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbemployee.EmployeeModel.toObject(message.query, options) }
      return object
    }

    /**
     * Converts this FindEmployeeArgs to JSON.
     * @function toJSON
     * @memberof pbemployee.FindEmployeeArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindEmployeeArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindEmployeeArgs
  })()

  pbemployee.FindEmployeeReply = (function() {
    /**
     * Properties of a FindEmployeeReply.
     * @memberof pbemployee
     * @interface IFindEmployeeReply
     * @property {pbcommon.EnumCode|null} [code] FindEmployeeReply code
     * @property {string|null} [msg] FindEmployeeReply msg
     * @property {pbemployee.IEmployeeModel|null} [data] FindEmployeeReply data
     * @property {Array.<pbemployee.IEmployeeModel>|null} [list] FindEmployeeReply list
     * @property {number|Long|null} [total] FindEmployeeReply total
     */

    /**
     * Constructs a new FindEmployeeReply.
     * @memberof pbemployee
     * @classdesc Represents a FindEmployeeReply.
     * @implements IFindEmployeeReply
     * @constructor
     * @param {pbemployee.IFindEmployeeReply=} [properties] Properties to set
     */
    function FindEmployeeReply(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindEmployeeReply code.
     * @member {pbcommon.EnumCode} code
     * @memberof pbemployee.FindEmployeeReply
     * @instance
     */
    FindEmployeeReply.prototype.code = 0

    /**
     * FindEmployeeReply msg.
     * @member {string} msg
     * @memberof pbemployee.FindEmployeeReply
     * @instance
     */
    FindEmployeeReply.prototype.msg = ''

    /**
     * FindEmployeeReply data.
     * @member {pbemployee.IEmployeeModel|null|undefined} data
     * @memberof pbemployee.FindEmployeeReply
     * @instance
     */
    FindEmployeeReply.prototype.data = null

    /**
     * FindEmployeeReply list.
     * @member {Array.<pbemployee.IEmployeeModel>} list
     * @memberof pbemployee.FindEmployeeReply
     * @instance
     */
    FindEmployeeReply.prototype.list = $util.emptyArray

    /**
     * FindEmployeeReply total.
     * @member {number|Long} total
     * @memberof pbemployee.FindEmployeeReply
     * @instance
     */
    FindEmployeeReply.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * Creates a new FindEmployeeReply instance using the specified properties.
     * @function create
     * @memberof pbemployee.FindEmployeeReply
     * @static
     * @param {pbemployee.IFindEmployeeReply=} [properties] Properties to set
     * @returns {pbemployee.FindEmployeeReply} FindEmployeeReply instance
     */
    FindEmployeeReply.create = function create(properties) {
      return new FindEmployeeReply(properties)
    }

    /**
     * Encodes the specified FindEmployeeReply message. Does not implicitly {@link pbemployee.FindEmployeeReply.verify|verify} messages.
     * @function encode
     * @memberof pbemployee.FindEmployeeReply
     * @static
     * @param {pbemployee.IFindEmployeeReply} message FindEmployeeReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindEmployeeReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbemployee.EmployeeModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbemployee.EmployeeModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      return writer
    }

    /**
     * Encodes the specified FindEmployeeReply message, length delimited. Does not implicitly {@link pbemployee.FindEmployeeReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbemployee.FindEmployeeReply
     * @static
     * @param {pbemployee.IFindEmployeeReply} message FindEmployeeReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindEmployeeReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindEmployeeReply message from the specified reader or buffer.
     * @function decode
     * @memberof pbemployee.FindEmployeeReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbemployee.FindEmployeeReply} FindEmployeeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindEmployeeReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbemployee.FindEmployeeReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 3:
            message.data = $root.pbemployee.EmployeeModel.decode(reader, reader.uint32())
            break
          case 4:
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbemployee.EmployeeModel.decode(reader, reader.uint32()))
            break
          case 5:
            message.total = reader.int64()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindEmployeeReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbemployee.FindEmployeeReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbemployee.FindEmployeeReply} FindEmployeeReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindEmployeeReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindEmployeeReply message.
     * @function verify
     * @memberof pbemployee.FindEmployeeReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindEmployeeReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
            break
        }
      }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!$util.isString(message.msg)) { return 'msg: string expected' }
      }
      if (message.data != null && message.hasOwnProperty('data')) {
        var error = $root.pbemployee.EmployeeModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbemployee.EmployeeModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      return null
    }

    /**
     * Creates a FindEmployeeReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbemployee.FindEmployeeReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbemployee.FindEmployeeReply} FindEmployeeReply
     */
    FindEmployeeReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbemployee.FindEmployeeReply) { return object }
      var message = new $root.pbemployee.FindEmployeeReply()
      switch (object.code) {
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
          break
      }
      if (object.msg != null) { message.msg = String(object.msg) }
      if (object.data != null) {
        if (typeof object.data !== 'object') { throw TypeError('.pbemployee.FindEmployeeReply.data: object expected') }
        message.data = $root.pbemployee.EmployeeModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbemployee.FindEmployeeReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbemployee.FindEmployeeReply.list: object expected') }
          message.list[i] = $root.pbemployee.EmployeeModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      return message
    }

    /**
     * Creates a plain object from a FindEmployeeReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbemployee.FindEmployeeReply
     * @static
     * @param {pbemployee.FindEmployeeReply} message FindEmployeeReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindEmployeeReply.toObject = function toObject(message, options) {
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
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.msg != null && message.hasOwnProperty('msg')) { object.msg = message.msg }
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbemployee.EmployeeModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbemployee.EmployeeModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      return object
    }

    /**
     * Converts this FindEmployeeReply to JSON.
     * @function toJSON
     * @memberof pbemployee.FindEmployeeReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindEmployeeReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindEmployeeReply
  })()

  pbemployee.Employee = (function() {
    /**
     * Constructs a new Employee service.
     * @memberof pbemployee
     * @classdesc Represents an Employee
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Employee(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Employee.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Employee

    /**
     * Creates new Employee service using the specified rpc implementation.
     * @function create
     * @memberof pbemployee.Employee
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Employee} RPC service. Useful where requests and/or responses are streamed.
     */
    Employee.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
     * Callback as used by {@link pbemployee.Employee#createEmployee}.
     * @memberof pbemployee.Employee
     * @typedef CreateEmployeeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls CreateEmployee.
     * @function createEmployee
     * @memberof pbemployee.Employee
     * @instance
     * @param {pbemployee.IEmployeeModel} request EmployeeModel message or plain object
     * @param {pbemployee.Employee.CreateEmployeeCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Employee.prototype.createEmployee = function createEmployee(request, callback) {
      return this.rpcCall(createEmployee, $root.pbemployee.EmployeeModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreateEmployee' })

    /**
     * Calls CreateEmployee.
     * @function createEmployee
     * @memberof pbemployee.Employee
     * @instance
     * @param {pbemployee.IEmployeeModel} request EmployeeModel message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbemployee.Employee#updateEmployee}.
     * @memberof pbemployee.Employee
     * @typedef UpdateEmployeeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls UpdateEmployee.
     * @function updateEmployee
     * @memberof pbemployee.Employee
     * @instance
     * @param {pbemployee.IEmployeeModel} request EmployeeModel message or plain object
     * @param {pbemployee.Employee.UpdateEmployeeCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Employee.prototype.updateEmployee = function updateEmployee(request, callback) {
      return this.rpcCall(updateEmployee, $root.pbemployee.EmployeeModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdateEmployee' })

    /**
     * Calls UpdateEmployee.
     * @function updateEmployee
     * @memberof pbemployee.Employee
     * @instance
     * @param {pbemployee.IEmployeeModel} request EmployeeModel message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbemployee.Employee#deleteEmployee}.
     * @memberof pbemployee.Employee
     * @typedef DeleteEmployeeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls DeleteEmployee.
     * @function deleteEmployee
     * @memberof pbemployee.Employee
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @param {pbemployee.Employee.DeleteEmployeeCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Employee.prototype.deleteEmployee = function deleteEmployee(request, callback) {
      return this.rpcCall(deleteEmployee, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeleteEmployee' })

    /**
     * Calls DeleteEmployee.
     * @function deleteEmployee
     * @memberof pbemployee.Employee
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbemployee.Employee#findEmployeeById}.
     * @memberof pbemployee.Employee
     * @typedef FindEmployeeByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbemployee.FindEmployeeReply} [response] FindEmployeeReply
     */

    /**
     * Calls FindEmployeeById.
     * @function findEmployeeById
     * @memberof pbemployee.Employee
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @param {pbemployee.Employee.FindEmployeeByIdCallback} callback Node-style callback called with the error, if any, and FindEmployeeReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Employee.prototype.findEmployeeById = function findEmployeeById(request, callback) {
      return this.rpcCall(findEmployeeById, $root.pbcommon.IdArgs, $root.pbemployee.FindEmployeeReply, request, callback)
    }, 'name', { value: 'FindEmployeeById' })

    /**
     * Calls FindEmployeeById.
     * @function findEmployeeById
     * @memberof pbemployee.Employee
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @returns {Promise<pbemployee.FindEmployeeReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbemployee.Employee#findEmployeeList}.
     * @memberof pbemployee.Employee
     * @typedef FindEmployeeListCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbemployee.FindEmployeeReply} [response] FindEmployeeReply
     */

    /**
     * Calls FindEmployeeList.
     * @function findEmployeeList
     * @memberof pbemployee.Employee
     * @instance
     * @param {pbemployee.IFindEmployeeArgs} request FindEmployeeArgs message or plain object
     * @param {pbemployee.Employee.FindEmployeeListCallback} callback Node-style callback called with the error, if any, and FindEmployeeReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Employee.prototype.findEmployeeList = function findEmployeeList(request, callback) {
      return this.rpcCall(findEmployeeList, $root.pbemployee.FindEmployeeArgs, $root.pbemployee.FindEmployeeReply, request, callback)
    }, 'name', { value: 'FindEmployeeList' })

    /**
     * Calls FindEmployeeList.
     * @function findEmployeeList
     * @memberof pbemployee.Employee
     * @instance
     * @param {pbemployee.IFindEmployeeArgs} request FindEmployeeArgs message or plain object
     * @returns {Promise<pbemployee.FindEmployeeReply>} Promise
     * @variation 2
     */

    return Employee
  })()

  return pbemployee
})()

$root.pbsalary = (function() {
  /**
   * Namespace pbsalary.
   * @exports pbsalary
   * @namespace
   */
  var pbsalary = {}

  pbsalary.SalaryModel = (function() {
    /**
     * Properties of a SalaryModel.
     * @memberof pbsalary
     * @interface ISalaryModel
     * @property {number|Long|null} [id] SalaryModel id
     * @property {string|null} [createdAt] SalaryModel createdAt
     * @property {string|null} [updatedAt] SalaryModel updatedAt
     * @property {number|null} [days] SalaryModel days
     * @property {number|null} [unitPrice] SalaryModel unitPrice
     * @property {number|null} [extraPrice] SalaryModel extraPrice
     * @property {number|null} [totalPrice] SalaryModel totalPrice
     * @property {number|null} [tax] SalaryModel tax
     * @property {number|null} [afterTaxPrice] SalaryModel afterTaxPrice
     * @property {string|null} [date] SalaryModel date
     * @property {number|Long|null} [employeeId] SalaryModel employeeId
     * @property {pbemployee.IEmployeeModel|null} [employee] SalaryModel employee
     */

    /**
     * Constructs a new SalaryModel.
     * @memberof pbsalary
     * @classdesc Represents a SalaryModel.
     * @implements ISalaryModel
     * @constructor
     * @param {pbsalary.ISalaryModel=} [properties] Properties to set
     */
    function SalaryModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * SalaryModel id.
     * @member {number|Long} id
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * SalaryModel createdAt.
     * @member {string} createdAt
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.createdAt = ''

    /**
     * SalaryModel updatedAt.
     * @member {string} updatedAt
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.updatedAt = ''

    /**
     * SalaryModel days.
     * @member {number} days
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.days = 0

    /**
     * SalaryModel unitPrice.
     * @member {number} unitPrice
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.unitPrice = 0

    /**
     * SalaryModel extraPrice.
     * @member {number} extraPrice
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.extraPrice = 0

    /**
     * SalaryModel totalPrice.
     * @member {number} totalPrice
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.totalPrice = 0

    /**
     * SalaryModel tax.
     * @member {number} tax
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.tax = 0

    /**
     * SalaryModel afterTaxPrice.
     * @member {number} afterTaxPrice
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.afterTaxPrice = 0

    /**
     * SalaryModel date.
     * @member {string} date
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.date = ''

    /**
     * SalaryModel employeeId.
     * @member {number|Long} employeeId
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.employeeId = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * SalaryModel employee.
     * @member {pbemployee.IEmployeeModel|null|undefined} employee
     * @memberof pbsalary.SalaryModel
     * @instance
     */
    SalaryModel.prototype.employee = null

    /**
     * Creates a new SalaryModel instance using the specified properties.
     * @function create
     * @memberof pbsalary.SalaryModel
     * @static
     * @param {pbsalary.ISalaryModel=} [properties] Properties to set
     * @returns {pbsalary.SalaryModel} SalaryModel instance
     */
    SalaryModel.create = function create(properties) {
      return new SalaryModel(properties)
    }

    /**
     * Encodes the specified SalaryModel message. Does not implicitly {@link pbsalary.SalaryModel.verify|verify} messages.
     * @function encode
     * @memberof pbsalary.SalaryModel
     * @static
     * @param {pbsalary.ISalaryModel} message SalaryModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SalaryModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.days != null && Object.hasOwnProperty.call(message, 'days')) { writer.uint32(/* id 4, wireType 1 =*/33).double(message.days) }
      if (message.unitPrice != null && Object.hasOwnProperty.call(message, 'unitPrice')) { writer.uint32(/* id 5, wireType 0 =*/40).int32(message.unitPrice) }
      if (message.extraPrice != null && Object.hasOwnProperty.call(message, 'extraPrice')) { writer.uint32(/* id 6, wireType 0 =*/48).int32(message.extraPrice) }
      if (message.totalPrice != null && Object.hasOwnProperty.call(message, 'totalPrice')) { writer.uint32(/* id 7, wireType 1 =*/57).double(message.totalPrice) }
      if (message.tax != null && Object.hasOwnProperty.call(message, 'tax')) { writer.uint32(/* id 8, wireType 0 =*/64).int32(message.tax) }
      if (message.afterTaxPrice != null && Object.hasOwnProperty.call(message, 'afterTaxPrice')) { writer.uint32(/* id 9, wireType 0 =*/72).int32(message.afterTaxPrice) }
      if (message.date != null && Object.hasOwnProperty.call(message, 'date')) { writer.uint32(/* id 10, wireType 2 =*/82).string(message.date) }
      if (message.employeeId != null && Object.hasOwnProperty.call(message, 'employeeId')) { writer.uint32(/* id 11, wireType 0 =*/88).int64(message.employeeId) }
      if (message.employee != null && Object.hasOwnProperty.call(message, 'employee')) { $root.pbemployee.EmployeeModel.encode(message.employee, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim() }
      return writer
    }

    /**
     * Encodes the specified SalaryModel message, length delimited. Does not implicitly {@link pbsalary.SalaryModel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbsalary.SalaryModel
     * @static
     * @param {pbsalary.ISalaryModel} message SalaryModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SalaryModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a SalaryModel message from the specified reader or buffer.
     * @function decode
     * @memberof pbsalary.SalaryModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbsalary.SalaryModel} SalaryModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SalaryModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbsalary.SalaryModel()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.id = reader.int64()
            break
          case 2:
            message.createdAt = reader.string()
            break
          case 3:
            message.updatedAt = reader.string()
            break
          case 4:
            message.days = reader.double()
            break
          case 5:
            message.unitPrice = reader.int32()
            break
          case 6:
            message.extraPrice = reader.int32()
            break
          case 7:
            message.totalPrice = reader.double()
            break
          case 8:
            message.tax = reader.int32()
            break
          case 9:
            message.afterTaxPrice = reader.int32()
            break
          case 10:
            message.date = reader.string()
            break
          case 11:
            message.employeeId = reader.int64()
            break
          case 12:
            message.employee = $root.pbemployee.EmployeeModel.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a SalaryModel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbsalary.SalaryModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbsalary.SalaryModel} SalaryModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SalaryModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a SalaryModel message.
     * @function verify
     * @memberof pbsalary.SalaryModel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SalaryModel.verify = function verify(message) {
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
      if (message.days != null && message.hasOwnProperty('days')) {
        if (typeof message.days !== 'number') { return 'days: number expected' }
      }
      if (message.unitPrice != null && message.hasOwnProperty('unitPrice')) {
        if (!$util.isInteger(message.unitPrice)) { return 'unitPrice: integer expected' }
      }
      if (message.extraPrice != null && message.hasOwnProperty('extraPrice')) {
        if (!$util.isInteger(message.extraPrice)) { return 'extraPrice: integer expected' }
      }
      if (message.totalPrice != null && message.hasOwnProperty('totalPrice')) {
        if (typeof message.totalPrice !== 'number') { return 'totalPrice: number expected' }
      }
      if (message.tax != null && message.hasOwnProperty('tax')) {
        if (!$util.isInteger(message.tax)) { return 'tax: integer expected' }
      }
      if (message.afterTaxPrice != null && message.hasOwnProperty('afterTaxPrice')) {
        if (!$util.isInteger(message.afterTaxPrice)) { return 'afterTaxPrice: integer expected' }
      }
      if (message.date != null && message.hasOwnProperty('date')) {
        if (!$util.isString(message.date)) { return 'date: string expected' }
      }
      if (message.employeeId != null && message.hasOwnProperty('employeeId')) {
        if (!$util.isInteger(message.employeeId) && !(message.employeeId && $util.isInteger(message.employeeId.low) && $util.isInteger(message.employeeId.high))) { return 'employeeId: integer|Long expected' }
      }
      if (message.employee != null && message.hasOwnProperty('employee')) {
        var error = $root.pbemployee.EmployeeModel.verify(message.employee)
        if (error) { return 'employee.' + error }
      }
      return null
    }

    /**
     * Creates a SalaryModel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbsalary.SalaryModel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbsalary.SalaryModel} SalaryModel
     */
    SalaryModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbsalary.SalaryModel) { return object }
      var message = new $root.pbsalary.SalaryModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.days != null) { message.days = Number(object.days) }
      if (object.unitPrice != null) { message.unitPrice = object.unitPrice | 0 }
      if (object.extraPrice != null) { message.extraPrice = object.extraPrice | 0 }
      if (object.totalPrice != null) { message.totalPrice = Number(object.totalPrice) }
      if (object.tax != null) { message.tax = object.tax | 0 }
      if (object.afterTaxPrice != null) { message.afterTaxPrice = object.afterTaxPrice | 0 }
      if (object.date != null) { message.date = String(object.date) }
      if (object.employeeId != null) {
        if ($util.Long) { (message.employeeId = $util.Long.fromValue(object.employeeId)).unsigned = false } else if (typeof object.employeeId === 'string') { message.employeeId = parseInt(object.employeeId, 10) } else if (typeof object.employeeId === 'number') { message.employeeId = object.employeeId } else if (typeof object.employeeId === 'object') { message.employeeId = new $util.LongBits(object.employeeId.low >>> 0, object.employeeId.high >>> 0).toNumber() }
      }
      if (object.employee != null) {
        if (typeof object.employee !== 'object') { throw TypeError('.pbsalary.SalaryModel.employee: object expected') }
        message.employee = $root.pbemployee.EmployeeModel.fromObject(object.employee)
      }
      return message
    }

    /**
     * Creates a plain object from a SalaryModel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbsalary.SalaryModel
     * @static
     * @param {pbsalary.SalaryModel} message SalaryModel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SalaryModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        object.days = 0
        object.unitPrice = 0
        object.extraPrice = 0
        object.totalPrice = 0
        object.tax = 0
        object.afterTaxPrice = 0
        object.date = ''
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.employeeId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.employeeId = options.longs === String ? '0' : 0 }
        object.employee = null
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.days != null && message.hasOwnProperty('days')) { object.days = options.json && !isFinite(message.days) ? String(message.days) : message.days }
      if (message.unitPrice != null && message.hasOwnProperty('unitPrice')) { object.unitPrice = message.unitPrice }
      if (message.extraPrice != null && message.hasOwnProperty('extraPrice')) { object.extraPrice = message.extraPrice }
      if (message.totalPrice != null && message.hasOwnProperty('totalPrice')) { object.totalPrice = options.json && !isFinite(message.totalPrice) ? String(message.totalPrice) : message.totalPrice }
      if (message.tax != null && message.hasOwnProperty('tax')) { object.tax = message.tax }
      if (message.afterTaxPrice != null && message.hasOwnProperty('afterTaxPrice')) { object.afterTaxPrice = message.afterTaxPrice }
      if (message.date != null && message.hasOwnProperty('date')) { object.date = message.date }
      if (message.employeeId != null && message.hasOwnProperty('employeeId')) {
        if (typeof message.employeeId === 'number') { object.employeeId = options.longs === String ? String(message.employeeId) : message.employeeId } else { object.employeeId = options.longs === String ? $util.Long.prototype.toString.call(message.employeeId) : options.longs === Number ? new $util.LongBits(message.employeeId.low >>> 0, message.employeeId.high >>> 0).toNumber() : message.employeeId }
      }
      if (message.employee != null && message.hasOwnProperty('employee')) { object.employee = $root.pbemployee.EmployeeModel.toObject(message.employee, options) }
      return object
    }

    /**
     * Converts this SalaryModel to JSON.
     * @function toJSON
     * @memberof pbsalary.SalaryModel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SalaryModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return SalaryModel
  })()

  pbsalary.FindSalaryArgs = (function() {
    /**
     * Properties of a FindSalaryArgs.
     * @memberof pbsalary
     * @interface IFindSalaryArgs
     * @property {pbcommon.IPageInfo|null} [pageInfo] FindSalaryArgs pageInfo
     * @property {pbsalary.ISalaryModel|null} [query] FindSalaryArgs query
     */

    /**
     * Constructs a new FindSalaryArgs.
     * @memberof pbsalary
     * @classdesc Represents a FindSalaryArgs.
     * @implements IFindSalaryArgs
     * @constructor
     * @param {pbsalary.IFindSalaryArgs=} [properties] Properties to set
     */
    function FindSalaryArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindSalaryArgs pageInfo.
     * @member {pbcommon.IPageInfo|null|undefined} pageInfo
     * @memberof pbsalary.FindSalaryArgs
     * @instance
     */
    FindSalaryArgs.prototype.pageInfo = null

    /**
     * FindSalaryArgs query.
     * @member {pbsalary.ISalaryModel|null|undefined} query
     * @memberof pbsalary.FindSalaryArgs
     * @instance
     */
    FindSalaryArgs.prototype.query = null

    /**
     * Creates a new FindSalaryArgs instance using the specified properties.
     * @function create
     * @memberof pbsalary.FindSalaryArgs
     * @static
     * @param {pbsalary.IFindSalaryArgs=} [properties] Properties to set
     * @returns {pbsalary.FindSalaryArgs} FindSalaryArgs instance
     */
    FindSalaryArgs.create = function create(properties) {
      return new FindSalaryArgs(properties)
    }

    /**
     * Encodes the specified FindSalaryArgs message. Does not implicitly {@link pbsalary.FindSalaryArgs.verify|verify} messages.
     * @function encode
     * @memberof pbsalary.FindSalaryArgs
     * @static
     * @param {pbsalary.IFindSalaryArgs} message FindSalaryArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindSalaryArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbsalary.SalaryModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
     * Encodes the specified FindSalaryArgs message, length delimited. Does not implicitly {@link pbsalary.FindSalaryArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbsalary.FindSalaryArgs
     * @static
     * @param {pbsalary.IFindSalaryArgs} message FindSalaryArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindSalaryArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindSalaryArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbsalary.FindSalaryArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbsalary.FindSalaryArgs} FindSalaryArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindSalaryArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbsalary.FindSalaryArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          case 2:
            message.query = $root.pbsalary.SalaryModel.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindSalaryArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbsalary.FindSalaryArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbsalary.FindSalaryArgs} FindSalaryArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindSalaryArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindSalaryArgs message.
     * @function verify
     * @memberof pbsalary.FindSalaryArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindSalaryArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbsalary.SalaryModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
     * Creates a FindSalaryArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbsalary.FindSalaryArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbsalary.FindSalaryArgs} FindSalaryArgs
     */
    FindSalaryArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbsalary.FindSalaryArgs) { return object }
      var message = new $root.pbsalary.FindSalaryArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbsalary.FindSalaryArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbsalary.FindSalaryArgs.query: object expected') }
        message.query = $root.pbsalary.SalaryModel.fromObject(object.query)
      }
      return message
    }

    /**
     * Creates a plain object from a FindSalaryArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbsalary.FindSalaryArgs
     * @static
     * @param {pbsalary.FindSalaryArgs} message FindSalaryArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindSalaryArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbsalary.SalaryModel.toObject(message.query, options) }
      return object
    }

    /**
     * Converts this FindSalaryArgs to JSON.
     * @function toJSON
     * @memberof pbsalary.FindSalaryArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindSalaryArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindSalaryArgs
  })()

  pbsalary.FindSalaryReply = (function() {
    /**
     * Properties of a FindSalaryReply.
     * @memberof pbsalary
     * @interface IFindSalaryReply
     * @property {pbcommon.EnumCode|null} [code] FindSalaryReply code
     * @property {string|null} [msg] FindSalaryReply msg
     * @property {pbsalary.ISalaryModel|null} [data] FindSalaryReply data
     * @property {Array.<pbsalary.ISalaryModel>|null} [list] FindSalaryReply list
     * @property {number|Long|null} [total] FindSalaryReply total
     */

    /**
     * Constructs a new FindSalaryReply.
     * @memberof pbsalary
     * @classdesc Represents a FindSalaryReply.
     * @implements IFindSalaryReply
     * @constructor
     * @param {pbsalary.IFindSalaryReply=} [properties] Properties to set
     */
    function FindSalaryReply(properties) {
      this.list = []
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindSalaryReply code.
     * @member {pbcommon.EnumCode} code
     * @memberof pbsalary.FindSalaryReply
     * @instance
     */
    FindSalaryReply.prototype.code = 0

    /**
     * FindSalaryReply msg.
     * @member {string} msg
     * @memberof pbsalary.FindSalaryReply
     * @instance
     */
    FindSalaryReply.prototype.msg = ''

    /**
     * FindSalaryReply data.
     * @member {pbsalary.ISalaryModel|null|undefined} data
     * @memberof pbsalary.FindSalaryReply
     * @instance
     */
    FindSalaryReply.prototype.data = null

    /**
     * FindSalaryReply list.
     * @member {Array.<pbsalary.ISalaryModel>} list
     * @memberof pbsalary.FindSalaryReply
     * @instance
     */
    FindSalaryReply.prototype.list = $util.emptyArray

    /**
     * FindSalaryReply total.
     * @member {number|Long} total
     * @memberof pbsalary.FindSalaryReply
     * @instance
     */
    FindSalaryReply.prototype.total = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * Creates a new FindSalaryReply instance using the specified properties.
     * @function create
     * @memberof pbsalary.FindSalaryReply
     * @static
     * @param {pbsalary.IFindSalaryReply=} [properties] Properties to set
     * @returns {pbsalary.FindSalaryReply} FindSalaryReply instance
     */
    FindSalaryReply.create = function create(properties) {
      return new FindSalaryReply(properties)
    }

    /**
     * Encodes the specified FindSalaryReply message. Does not implicitly {@link pbsalary.FindSalaryReply.verify|verify} messages.
     * @function encode
     * @memberof pbsalary.FindSalaryReply
     * @static
     * @param {pbsalary.IFindSalaryReply} message FindSalaryReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindSalaryReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbsalary.SalaryModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      if (message.list != null && message.list.length) {
        for (var i = 0; i < message.list.length; ++i) { $root.pbsalary.SalaryModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim() }
      }
      if (message.total != null && Object.hasOwnProperty.call(message, 'total')) { writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total) }
      return writer
    }

    /**
     * Encodes the specified FindSalaryReply message, length delimited. Does not implicitly {@link pbsalary.FindSalaryReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbsalary.FindSalaryReply
     * @static
     * @param {pbsalary.IFindSalaryReply} message FindSalaryReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindSalaryReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindSalaryReply message from the specified reader or buffer.
     * @function decode
     * @memberof pbsalary.FindSalaryReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbsalary.FindSalaryReply} FindSalaryReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindSalaryReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbsalary.FindSalaryReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 3:
            message.data = $root.pbsalary.SalaryModel.decode(reader, reader.uint32())
            break
          case 4:
            if (!(message.list && message.list.length)) { message.list = [] }
            message.list.push($root.pbsalary.SalaryModel.decode(reader, reader.uint32()))
            break
          case 5:
            message.total = reader.int64()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindSalaryReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbsalary.FindSalaryReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbsalary.FindSalaryReply} FindSalaryReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindSalaryReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindSalaryReply message.
     * @function verify
     * @memberof pbsalary.FindSalaryReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindSalaryReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
            break
        }
      }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!$util.isString(message.msg)) { return 'msg: string expected' }
      }
      if (message.data != null && message.hasOwnProperty('data')) {
        var error = $root.pbsalary.SalaryModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      if (message.list != null && message.hasOwnProperty('list')) {
        if (!Array.isArray(message.list)) { return 'list: array expected' }
        for (var i = 0; i < message.list.length; ++i) {
          var error = $root.pbsalary.SalaryModel.verify(message.list[i])
          if (error) { return 'list.' + error }
        }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high))) { return 'total: integer|Long expected' }
      }
      return null
    }

    /**
     * Creates a FindSalaryReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbsalary.FindSalaryReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbsalary.FindSalaryReply} FindSalaryReply
     */
    FindSalaryReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbsalary.FindSalaryReply) { return object }
      var message = new $root.pbsalary.FindSalaryReply()
      switch (object.code) {
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
          break
      }
      if (object.msg != null) { message.msg = String(object.msg) }
      if (object.data != null) {
        if (typeof object.data !== 'object') { throw TypeError('.pbsalary.FindSalaryReply.data: object expected') }
        message.data = $root.pbsalary.SalaryModel.fromObject(object.data)
      }
      if (object.list) {
        if (!Array.isArray(object.list)) { throw TypeError('.pbsalary.FindSalaryReply.list: array expected') }
        message.list = []
        for (var i = 0; i < object.list.length; ++i) {
          if (typeof object.list[i] !== 'object') { throw TypeError('.pbsalary.FindSalaryReply.list: object expected') }
          message.list[i] = $root.pbsalary.SalaryModel.fromObject(object.list[i])
        }
      }
      if (object.total != null) {
        if ($util.Long) { (message.total = $util.Long.fromValue(object.total)).unsigned = false } else if (typeof object.total === 'string') { message.total = parseInt(object.total, 10) } else if (typeof object.total === 'number') { message.total = object.total } else if (typeof object.total === 'object') { message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber() }
      }
      return message
    }

    /**
     * Creates a plain object from a FindSalaryReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbsalary.FindSalaryReply
     * @static
     * @param {pbsalary.FindSalaryReply} message FindSalaryReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindSalaryReply.toObject = function toObject(message, options) {
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
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.msg != null && message.hasOwnProperty('msg')) { object.msg = message.msg }
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbsalary.SalaryModel.toObject(message.data, options) }
      if (message.list && message.list.length) {
        object.list = []
        for (var j = 0; j < message.list.length; ++j) { object.list[j] = $root.pbsalary.SalaryModel.toObject(message.list[j], options) }
      }
      if (message.total != null && message.hasOwnProperty('total')) {
        if (typeof message.total === 'number') { object.total = options.longs === String ? String(message.total) : message.total } else { object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total }
      }
      return object
    }

    /**
     * Converts this FindSalaryReply to JSON.
     * @function toJSON
     * @memberof pbsalary.FindSalaryReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindSalaryReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindSalaryReply
  })()

  pbsalary.Salary = (function() {
    /**
     * Constructs a new Salary service.
     * @memberof pbsalary
     * @classdesc Represents a Salary
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Salary(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Salary.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Salary

    /**
     * Creates new Salary service using the specified rpc implementation.
     * @function create
     * @memberof pbsalary.Salary
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Salary} RPC service. Useful where requests and/or responses are streamed.
     */
    Salary.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
     * Callback as used by {@link pbsalary.Salary#createSalary}.
     * @memberof pbsalary.Salary
     * @typedef CreateSalaryCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls CreateSalary.
     * @function createSalary
     * @memberof pbsalary.Salary
     * @instance
     * @param {pbsalary.ISalaryModel} request SalaryModel message or plain object
     * @param {pbsalary.Salary.CreateSalaryCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Salary.prototype.createSalary = function createSalary(request, callback) {
      return this.rpcCall(createSalary, $root.pbsalary.SalaryModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'CreateSalary' })

    /**
     * Calls CreateSalary.
     * @function createSalary
     * @memberof pbsalary.Salary
     * @instance
     * @param {pbsalary.ISalaryModel} request SalaryModel message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbsalary.Salary#updateSalary}.
     * @memberof pbsalary.Salary
     * @typedef UpdateSalaryCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls UpdateSalary.
     * @function updateSalary
     * @memberof pbsalary.Salary
     * @instance
     * @param {pbsalary.ISalaryModel} request SalaryModel message or plain object
     * @param {pbsalary.Salary.UpdateSalaryCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Salary.prototype.updateSalary = function updateSalary(request, callback) {
      return this.rpcCall(updateSalary, $root.pbsalary.SalaryModel, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'UpdateSalary' })

    /**
     * Calls UpdateSalary.
     * @function updateSalary
     * @memberof pbsalary.Salary
     * @instance
     * @param {pbsalary.ISalaryModel} request SalaryModel message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbsalary.Salary#deleteSalary}.
     * @memberof pbsalary.Salary
     * @typedef DeleteSalaryCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbcommon.CommonResult} [response] CommonResult
     */

    /**
     * Calls DeleteSalary.
     * @function deleteSalary
     * @memberof pbsalary.Salary
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @param {pbsalary.Salary.DeleteSalaryCallback} callback Node-style callback called with the error, if any, and CommonResult
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Salary.prototype.deleteSalary = function deleteSalary(request, callback) {
      return this.rpcCall(deleteSalary, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback)
    }, 'name', { value: 'DeleteSalary' })

    /**
     * Calls DeleteSalary.
     * @function deleteSalary
     * @memberof pbsalary.Salary
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @returns {Promise<pbcommon.CommonResult>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbsalary.Salary#findSalaryById}.
     * @memberof pbsalary.Salary
     * @typedef FindSalaryByIdCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbsalary.FindSalaryReply} [response] FindSalaryReply
     */

    /**
     * Calls FindSalaryById.
     * @function findSalaryById
     * @memberof pbsalary.Salary
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @param {pbsalary.Salary.FindSalaryByIdCallback} callback Node-style callback called with the error, if any, and FindSalaryReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Salary.prototype.findSalaryById = function findSalaryById(request, callback) {
      return this.rpcCall(findSalaryById, $root.pbcommon.IdArgs, $root.pbsalary.FindSalaryReply, request, callback)
    }, 'name', { value: 'FindSalaryById' })

    /**
     * Calls FindSalaryById.
     * @function findSalaryById
     * @memberof pbsalary.Salary
     * @instance
     * @param {pbcommon.IIdArgs} request IdArgs message or plain object
     * @returns {Promise<pbsalary.FindSalaryReply>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link pbsalary.Salary#findSalaryList}.
     * @memberof pbsalary.Salary
     * @typedef FindSalaryListCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbsalary.FindSalaryReply} [response] FindSalaryReply
     */

    /**
     * Calls FindSalaryList.
     * @function findSalaryList
     * @memberof pbsalary.Salary
     * @instance
     * @param {pbsalary.IFindSalaryArgs} request FindSalaryArgs message or plain object
     * @param {pbsalary.Salary.FindSalaryListCallback} callback Node-style callback called with the error, if any, and FindSalaryReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Salary.prototype.findSalaryList = function findSalaryList(request, callback) {
      return this.rpcCall(findSalaryList, $root.pbsalary.FindSalaryArgs, $root.pbsalary.FindSalaryReply, request, callback)
    }, 'name', { value: 'FindSalaryList' })

    /**
     * Calls FindSalaryList.
     * @function findSalaryList
     * @memberof pbsalary.Salary
     * @instance
     * @param {pbsalary.IFindSalaryArgs} request FindSalaryArgs message or plain object
     * @returns {Promise<pbsalary.FindSalaryReply>} Promise
     * @variation 2
     */

    return Salary
  })()

  return pbsalary
})()

$root.pbsystemlog = (function() {
  /**
   * Namespace pbsystemlog.
   * @exports pbsystemlog
   * @namespace
   */
  var pbsystemlog = {}

  pbsystemlog.SystemlogModel = (function() {
    /**
     * Properties of a SystemlogModel.
     * @memberof pbsystemlog
     * @interface ISystemlogModel
     * @property {number|Long|null} [id] SystemlogModel id
     * @property {string|null} [createdAt] SystemlogModel createdAt
     * @property {string|null} [updatedAt] SystemlogModel updatedAt
     * @property {string|null} [text] SystemlogModel text
     * @property {string|null} [type] SystemlogModel type
     * @property {string|null} [date] SystemlogModel date
     * @property {number|null} [lines] SystemlogModel lines
     */

    /**
     * Constructs a new SystemlogModel.
     * @memberof pbsystemlog
     * @classdesc Represents a SystemlogModel.
     * @implements ISystemlogModel
     * @constructor
     * @param {pbsystemlog.ISystemlogModel=} [properties] Properties to set
     */
    function SystemlogModel(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * SystemlogModel id.
     * @member {number|Long} id
     * @memberof pbsystemlog.SystemlogModel
     * @instance
     */
    SystemlogModel.prototype.id = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

    /**
     * SystemlogModel createdAt.
     * @member {string} createdAt
     * @memberof pbsystemlog.SystemlogModel
     * @instance
     */
    SystemlogModel.prototype.createdAt = ''

    /**
     * SystemlogModel updatedAt.
     * @member {string} updatedAt
     * @memberof pbsystemlog.SystemlogModel
     * @instance
     */
    SystemlogModel.prototype.updatedAt = ''

    /**
     * SystemlogModel text.
     * @member {string} text
     * @memberof pbsystemlog.SystemlogModel
     * @instance
     */
    SystemlogModel.prototype.text = ''

    /**
     * SystemlogModel type.
     * @member {string} type
     * @memberof pbsystemlog.SystemlogModel
     * @instance
     */
    SystemlogModel.prototype.type = ''

    /**
     * SystemlogModel date.
     * @member {string} date
     * @memberof pbsystemlog.SystemlogModel
     * @instance
     */
    SystemlogModel.prototype.date = ''

    /**
     * SystemlogModel lines.
     * @member {number} lines
     * @memberof pbsystemlog.SystemlogModel
     * @instance
     */
    SystemlogModel.prototype.lines = 0

    /**
     * Creates a new SystemlogModel instance using the specified properties.
     * @function create
     * @memberof pbsystemlog.SystemlogModel
     * @static
     * @param {pbsystemlog.ISystemlogModel=} [properties] Properties to set
     * @returns {pbsystemlog.SystemlogModel} SystemlogModel instance
     */
    SystemlogModel.create = function create(properties) {
      return new SystemlogModel(properties)
    }

    /**
     * Encodes the specified SystemlogModel message. Does not implicitly {@link pbsystemlog.SystemlogModel.verify|verify} messages.
     * @function encode
     * @memberof pbsystemlog.SystemlogModel
     * @static
     * @param {pbsystemlog.ISystemlogModel} message SystemlogModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SystemlogModel.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.id != null && Object.hasOwnProperty.call(message, 'id')) { writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id) }
      if (message.createdAt != null && Object.hasOwnProperty.call(message, 'createdAt')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt) }
      if (message.updatedAt != null && Object.hasOwnProperty.call(message, 'updatedAt')) { writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt) }
      if (message.text != null && Object.hasOwnProperty.call(message, 'text')) { writer.uint32(/* id 4, wireType 2 =*/34).string(message.text) }
      if (message.type != null && Object.hasOwnProperty.call(message, 'type')) { writer.uint32(/* id 5, wireType 2 =*/42).string(message.type) }
      if (message.date != null && Object.hasOwnProperty.call(message, 'date')) { writer.uint32(/* id 6, wireType 2 =*/50).string(message.date) }
      if (message.lines != null && Object.hasOwnProperty.call(message, 'lines')) { writer.uint32(/* id 7, wireType 0 =*/56).int32(message.lines) }
      return writer
    }

    /**
     * Encodes the specified SystemlogModel message, length delimited. Does not implicitly {@link pbsystemlog.SystemlogModel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbsystemlog.SystemlogModel
     * @static
     * @param {pbsystemlog.ISystemlogModel} message SystemlogModel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SystemlogModel.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a SystemlogModel message from the specified reader or buffer.
     * @function decode
     * @memberof pbsystemlog.SystemlogModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbsystemlog.SystemlogModel} SystemlogModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SystemlogModel.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbsystemlog.SystemlogModel()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.id = reader.int64()
            break
          case 2:
            message.createdAt = reader.string()
            break
          case 3:
            message.updatedAt = reader.string()
            break
          case 4:
            message.text = reader.string()
            break
          case 5:
            message.type = reader.string()
            break
          case 6:
            message.date = reader.string()
            break
          case 7:
            message.lines = reader.int32()
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a SystemlogModel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbsystemlog.SystemlogModel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbsystemlog.SystemlogModel} SystemlogModel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SystemlogModel.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a SystemlogModel message.
     * @function verify
     * @memberof pbsystemlog.SystemlogModel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SystemlogModel.verify = function verify(message) {
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
      if (message.text != null && message.hasOwnProperty('text')) {
        if (!$util.isString(message.text)) { return 'text: string expected' }
      }
      if (message.type != null && message.hasOwnProperty('type')) {
        if (!$util.isString(message.type)) { return 'type: string expected' }
      }
      if (message.date != null && message.hasOwnProperty('date')) {
        if (!$util.isString(message.date)) { return 'date: string expected' }
      }
      if (message.lines != null && message.hasOwnProperty('lines')) {
        if (!$util.isInteger(message.lines)) { return 'lines: integer expected' }
      }
      return null
    }

    /**
     * Creates a SystemlogModel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbsystemlog.SystemlogModel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbsystemlog.SystemlogModel} SystemlogModel
     */
    SystemlogModel.fromObject = function fromObject(object) {
      if (object instanceof $root.pbsystemlog.SystemlogModel) { return object }
      var message = new $root.pbsystemlog.SystemlogModel()
      if (object.id != null) {
        if ($util.Long) { (message.id = $util.Long.fromValue(object.id)).unsigned = false } else if (typeof object.id === 'string') { message.id = parseInt(object.id, 10) } else if (typeof object.id === 'number') { message.id = object.id } else if (typeof object.id === 'object') { message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber() }
      }
      if (object.createdAt != null) { message.createdAt = String(object.createdAt) }
      if (object.updatedAt != null) { message.updatedAt = String(object.updatedAt) }
      if (object.text != null) { message.text = String(object.text) }
      if (object.type != null) { message.type = String(object.type) }
      if (object.date != null) { message.date = String(object.date) }
      if (object.lines != null) { message.lines = object.lines | 0 }
      return message
    }

    /**
     * Creates a plain object from a SystemlogModel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbsystemlog.SystemlogModel
     * @static
     * @param {pbsystemlog.SystemlogModel} message SystemlogModel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SystemlogModel.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        if ($util.Long) {
          var long = new $util.Long(0, 0, false)
          object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long
        } else { object.id = options.longs === String ? '0' : 0 }
        object.createdAt = ''
        object.updatedAt = ''
        object.text = ''
        object.type = ''
        object.date = ''
        object.lines = 0
      }
      if (message.id != null && message.hasOwnProperty('id')) {
        if (typeof message.id === 'number') { object.id = options.longs === String ? String(message.id) : message.id } else { object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id }
      }
      if (message.createdAt != null && message.hasOwnProperty('createdAt')) { object.createdAt = message.createdAt }
      if (message.updatedAt != null && message.hasOwnProperty('updatedAt')) { object.updatedAt = message.updatedAt }
      if (message.text != null && message.hasOwnProperty('text')) { object.text = message.text }
      if (message.type != null && message.hasOwnProperty('type')) { object.type = message.type }
      if (message.date != null && message.hasOwnProperty('date')) { object.date = message.date }
      if (message.lines != null && message.hasOwnProperty('lines')) { object.lines = message.lines }
      return object
    }

    /**
     * Converts this SystemlogModel to JSON.
     * @function toJSON
     * @memberof pbsystemlog.SystemlogModel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SystemlogModel.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return SystemlogModel
  })()

  pbsystemlog.FindSystemlogArgs = (function() {
    /**
     * Properties of a FindSystemlogArgs.
     * @memberof pbsystemlog
     * @interface IFindSystemlogArgs
     * @property {pbcommon.IPageInfo|null} [pageInfo] FindSystemlogArgs pageInfo
     * @property {pbsystemlog.ISystemlogModel|null} [query] FindSystemlogArgs query
     */

    /**
     * Constructs a new FindSystemlogArgs.
     * @memberof pbsystemlog
     * @classdesc Represents a FindSystemlogArgs.
     * @implements IFindSystemlogArgs
     * @constructor
     * @param {pbsystemlog.IFindSystemlogArgs=} [properties] Properties to set
     */
    function FindSystemlogArgs(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindSystemlogArgs pageInfo.
     * @member {pbcommon.IPageInfo|null|undefined} pageInfo
     * @memberof pbsystemlog.FindSystemlogArgs
     * @instance
     */
    FindSystemlogArgs.prototype.pageInfo = null

    /**
     * FindSystemlogArgs query.
     * @member {pbsystemlog.ISystemlogModel|null|undefined} query
     * @memberof pbsystemlog.FindSystemlogArgs
     * @instance
     */
    FindSystemlogArgs.prototype.query = null

    /**
     * Creates a new FindSystemlogArgs instance using the specified properties.
     * @function create
     * @memberof pbsystemlog.FindSystemlogArgs
     * @static
     * @param {pbsystemlog.IFindSystemlogArgs=} [properties] Properties to set
     * @returns {pbsystemlog.FindSystemlogArgs} FindSystemlogArgs instance
     */
    FindSystemlogArgs.create = function create(properties) {
      return new FindSystemlogArgs(properties)
    }

    /**
     * Encodes the specified FindSystemlogArgs message. Does not implicitly {@link pbsystemlog.FindSystemlogArgs.verify|verify} messages.
     * @function encode
     * @memberof pbsystemlog.FindSystemlogArgs
     * @static
     * @param {pbsystemlog.IFindSystemlogArgs} message FindSystemlogArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindSystemlogArgs.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.pageInfo != null && Object.hasOwnProperty.call(message, 'pageInfo')) { $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim() }
      if (message.query != null && Object.hasOwnProperty.call(message, 'query')) { $root.pbsystemlog.SystemlogModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim() }
      return writer
    }

    /**
     * Encodes the specified FindSystemlogArgs message, length delimited. Does not implicitly {@link pbsystemlog.FindSystemlogArgs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbsystemlog.FindSystemlogArgs
     * @static
     * @param {pbsystemlog.IFindSystemlogArgs} message FindSystemlogArgs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindSystemlogArgs.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindSystemlogArgs message from the specified reader or buffer.
     * @function decode
     * @memberof pbsystemlog.FindSystemlogArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbsystemlog.FindSystemlogArgs} FindSystemlogArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindSystemlogArgs.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbsystemlog.FindSystemlogArgs()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32())
            break
          case 2:
            message.query = $root.pbsystemlog.SystemlogModel.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindSystemlogArgs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbsystemlog.FindSystemlogArgs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbsystemlog.FindSystemlogArgs} FindSystemlogArgs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindSystemlogArgs.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindSystemlogArgs message.
     * @function verify
     * @memberof pbsystemlog.FindSystemlogArgs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindSystemlogArgs.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) {
        var error = $root.pbcommon.PageInfo.verify(message.pageInfo)
        if (error) { return 'pageInfo.' + error }
      }
      if (message.query != null && message.hasOwnProperty('query')) {
        var error = $root.pbsystemlog.SystemlogModel.verify(message.query)
        if (error) { return 'query.' + error }
      }
      return null
    }

    /**
     * Creates a FindSystemlogArgs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbsystemlog.FindSystemlogArgs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbsystemlog.FindSystemlogArgs} FindSystemlogArgs
     */
    FindSystemlogArgs.fromObject = function fromObject(object) {
      if (object instanceof $root.pbsystemlog.FindSystemlogArgs) { return object }
      var message = new $root.pbsystemlog.FindSystemlogArgs()
      if (object.pageInfo != null) {
        if (typeof object.pageInfo !== 'object') { throw TypeError('.pbsystemlog.FindSystemlogArgs.pageInfo: object expected') }
        message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo)
      }
      if (object.query != null) {
        if (typeof object.query !== 'object') { throw TypeError('.pbsystemlog.FindSystemlogArgs.query: object expected') }
        message.query = $root.pbsystemlog.SystemlogModel.fromObject(object.query)
      }
      return message
    }

    /**
     * Creates a plain object from a FindSystemlogArgs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbsystemlog.FindSystemlogArgs
     * @static
     * @param {pbsystemlog.FindSystemlogArgs} message FindSystemlogArgs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindSystemlogArgs.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.pageInfo = null
        object.query = null
      }
      if (message.pageInfo != null && message.hasOwnProperty('pageInfo')) { object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options) }
      if (message.query != null && message.hasOwnProperty('query')) { object.query = $root.pbsystemlog.SystemlogModel.toObject(message.query, options) }
      return object
    }

    /**
     * Converts this FindSystemlogArgs to JSON.
     * @function toJSON
     * @memberof pbsystemlog.FindSystemlogArgs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindSystemlogArgs.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindSystemlogArgs
  })()

  pbsystemlog.FindSystemlogReply = (function() {
    /**
     * Properties of a FindSystemlogReply.
     * @memberof pbsystemlog
     * @interface IFindSystemlogReply
     * @property {pbcommon.EnumCode|null} [code] FindSystemlogReply code
     * @property {string|null} [msg] FindSystemlogReply msg
     * @property {pbsystemlog.ISystemlogModel|null} [data] FindSystemlogReply data
     */

    /**
     * Constructs a new FindSystemlogReply.
     * @memberof pbsystemlog
     * @classdesc Represents a FindSystemlogReply.
     * @implements IFindSystemlogReply
     * @constructor
     * @param {pbsystemlog.IFindSystemlogReply=} [properties] Properties to set
     */
    function FindSystemlogReply(properties) {
      if (properties) {
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          if (properties[keys[i]] != null) { this[keys[i]] = properties[keys[i]] }
        }
      }
    }

    /**
     * FindSystemlogReply code.
     * @member {pbcommon.EnumCode} code
     * @memberof pbsystemlog.FindSystemlogReply
     * @instance
     */
    FindSystemlogReply.prototype.code = 0

    /**
     * FindSystemlogReply msg.
     * @member {string} msg
     * @memberof pbsystemlog.FindSystemlogReply
     * @instance
     */
    FindSystemlogReply.prototype.msg = ''

    /**
     * FindSystemlogReply data.
     * @member {pbsystemlog.ISystemlogModel|null|undefined} data
     * @memberof pbsystemlog.FindSystemlogReply
     * @instance
     */
    FindSystemlogReply.prototype.data = null

    /**
     * Creates a new FindSystemlogReply instance using the specified properties.
     * @function create
     * @memberof pbsystemlog.FindSystemlogReply
     * @static
     * @param {pbsystemlog.IFindSystemlogReply=} [properties] Properties to set
     * @returns {pbsystemlog.FindSystemlogReply} FindSystemlogReply instance
     */
    FindSystemlogReply.create = function create(properties) {
      return new FindSystemlogReply(properties)
    }

    /**
     * Encodes the specified FindSystemlogReply message. Does not implicitly {@link pbsystemlog.FindSystemlogReply.verify|verify} messages.
     * @function encode
     * @memberof pbsystemlog.FindSystemlogReply
     * @static
     * @param {pbsystemlog.IFindSystemlogReply} message FindSystemlogReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindSystemlogReply.encode = function encode(message, writer) {
      if (!writer) { writer = $Writer.create() }
      if (message.code != null && Object.hasOwnProperty.call(message, 'code')) { writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code) }
      if (message.msg != null && Object.hasOwnProperty.call(message, 'msg')) { writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg) }
      if (message.data != null && Object.hasOwnProperty.call(message, 'data')) { $root.pbsystemlog.SystemlogModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim() }
      return writer
    }

    /**
     * Encodes the specified FindSystemlogReply message, length delimited. Does not implicitly {@link pbsystemlog.FindSystemlogReply.verify|verify} messages.
     * @function encodeDelimited
     * @memberof pbsystemlog.FindSystemlogReply
     * @static
     * @param {pbsystemlog.IFindSystemlogReply} message FindSystemlogReply message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FindSystemlogReply.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim()
    }

    /**
     * Decodes a FindSystemlogReply message from the specified reader or buffer.
     * @function decode
     * @memberof pbsystemlog.FindSystemlogReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {pbsystemlog.FindSystemlogReply} FindSystemlogReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindSystemlogReply.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) { reader = $Reader.create(reader) }
      var end = length === undefined ? reader.len : reader.pos + length; var message = new $root.pbsystemlog.FindSystemlogReply()
      while (reader.pos < end) {
        var tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            message.code = reader.int32()
            break
          case 2:
            message.msg = reader.string()
            break
          case 3:
            message.data = $root.pbsystemlog.SystemlogModel.decode(reader, reader.uint32())
            break
          default:
            reader.skipType(tag & 7)
            break
        }
      }
      return message
    }

    /**
     * Decodes a FindSystemlogReply message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof pbsystemlog.FindSystemlogReply
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {pbsystemlog.FindSystemlogReply} FindSystemlogReply
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FindSystemlogReply.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) { reader = new $Reader(reader) }
      return this.decode(reader, reader.uint32())
    }

    /**
     * Verifies a FindSystemlogReply message.
     * @function verify
     * @memberof pbsystemlog.FindSystemlogReply
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FindSystemlogReply.verify = function verify(message) {
      if (typeof message !== 'object' || message === null) { return 'object expected' }
      if (message.code != null && message.hasOwnProperty('code')) {
        switch (message.code) {
          default:
            return 'code: enum value expected'
          case 0:
          case 200:
          case 403:
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
          case 3001:
          case 3002:
          case 3003:
          case 5001:
          case 5002:
            break
        }
      }
      if (message.msg != null && message.hasOwnProperty('msg')) {
        if (!$util.isString(message.msg)) { return 'msg: string expected' }
      }
      if (message.data != null && message.hasOwnProperty('data')) {
        var error = $root.pbsystemlog.SystemlogModel.verify(message.data)
        if (error) { return 'data.' + error }
      }
      return null
    }

    /**
     * Creates a FindSystemlogReply message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof pbsystemlog.FindSystemlogReply
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {pbsystemlog.FindSystemlogReply} FindSystemlogReply
     */
    FindSystemlogReply.fromObject = function fromObject(object) {
      if (object instanceof $root.pbsystemlog.FindSystemlogReply) { return object }
      var message = new $root.pbsystemlog.FindSystemlogReply()
      switch (object.code) {
        case 'None':
        case 0:
          message.code = 0
          break
        case 'Success':
        case 200:
          message.code = 200
          break
        case 'Forbidden':
        case 403:
          message.code = 403
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
        case 'RoleIsNotExist':
        case 3001:
          message.code = 3001
          break
        case 'UserIsExist':
        case 3002:
          message.code = 3002
          break
        case 'UserIsBan':
        case 3003:
          message.code = 3003
          break
        case 'TalkIsBan':
        case 5001:
          message.code = 5001
          break
        case 'EnterRoomErr':
        case 5002:
          message.code = 5002
          break
      }
      if (object.msg != null) { message.msg = String(object.msg) }
      if (object.data != null) {
        if (typeof object.data !== 'object') { throw TypeError('.pbsystemlog.FindSystemlogReply.data: object expected') }
        message.data = $root.pbsystemlog.SystemlogModel.fromObject(object.data)
      }
      return message
    }

    /**
     * Creates a plain object from a FindSystemlogReply message. Also converts values to other types if specified.
     * @function toObject
     * @memberof pbsystemlog.FindSystemlogReply
     * @static
     * @param {pbsystemlog.FindSystemlogReply} message FindSystemlogReply
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FindSystemlogReply.toObject = function toObject(message, options) {
      if (!options) { options = {} }
      var object = {}
      if (options.defaults) {
        object.code = options.enums === String ? 'None' : 0
        object.msg = ''
        object.data = null
      }
      if (message.code != null && message.hasOwnProperty('code')) { object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] : message.code }
      if (message.msg != null && message.hasOwnProperty('msg')) { object.msg = message.msg }
      if (message.data != null && message.hasOwnProperty('data')) { object.data = $root.pbsystemlog.SystemlogModel.toObject(message.data, options) }
      return object
    }

    /**
     * Converts this FindSystemlogReply to JSON.
     * @function toJSON
     * @memberof pbsystemlog.FindSystemlogReply
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FindSystemlogReply.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions)
    }

    return FindSystemlogReply
  })()

  pbsystemlog.Systemlog = (function() {
    /**
     * Constructs a new Systemlog service.
     * @memberof pbsystemlog
     * @classdesc Represents a Systemlog
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Systemlog(rpcImpl, requestDelimited, responseDelimited) {
      $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited)
    }

    (Systemlog.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Systemlog

    /**
     * Creates new Systemlog service using the specified rpc implementation.
     * @function create
     * @memberof pbsystemlog.Systemlog
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Systemlog} RPC service. Useful where requests and/or responses are streamed.
     */
    Systemlog.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      return new this(rpcImpl, requestDelimited, responseDelimited)
    }

    /**
     * Callback as used by {@link pbsystemlog.Systemlog#findSystemlog}.
     * @memberof pbsystemlog.Systemlog
     * @typedef FindSystemlogCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {pbsystemlog.FindSystemlogReply} [response] FindSystemlogReply
     */

    /**
     * Calls FindSystemlog.
     * @function findSystemlog
     * @memberof pbsystemlog.Systemlog
     * @instance
     * @param {pbsystemlog.IFindSystemlogArgs} request FindSystemlogArgs message or plain object
     * @param {pbsystemlog.Systemlog.FindSystemlogCallback} callback Node-style callback called with the error, if any, and FindSystemlogReply
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Systemlog.prototype.findSystemlog = function findSystemlog(request, callback) {
      return this.rpcCall(findSystemlog, $root.pbsystemlog.FindSystemlogArgs, $root.pbsystemlog.FindSystemlogReply, request, callback)
    }, 'name', { value: 'FindSystemlog' })

    /**
     * Calls FindSystemlog.
     * @function findSystemlog
     * @memberof pbsystemlog.Systemlog
     * @instance
     * @param {pbsystemlog.IFindSystemlogArgs} request FindSystemlogArgs message or plain object
     * @returns {Promise<pbsystemlog.FindSystemlogReply>} Promise
     * @variation 2
     */

    return Systemlog
  })()

  return pbsystemlog
})()

module.exports = $root
