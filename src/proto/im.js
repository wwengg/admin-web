/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pbcommon = (function() {

    /**
     * Namespace pbcommon.
     * @exports pbcommon
     * @namespace
     */
    var pbcommon = {};

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
     * @property {number} LoginSocketRepeat=2015 LoginSocketRepeat value
     * @property {number} RoleIsNotExist=3001 RoleIsNotExist value
     * @property {number} UserIsExist=3002 UserIsExist value
     * @property {number} UserIsBan=3003 UserIsBan value
     * @property {number} TalkIsBan=5001 TalkIsBan value
     * @property {number} EnterRoomErr=5002 EnterRoomErr value
     * @property {number} HalaChatNeedBuy=10001 HalaChatNeedBuy value
     * @property {number} HalaPriceOutRange=10002 HalaPriceOutRange value
     */
    pbcommon.EnumCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "None"] = 0;
        values[valuesById[200] = "Success"] = 200;
        values[valuesById[403] = "Forbidden"] = 403;
        values[valuesById[500] = "Fail"] = 500;
        values[valuesById[501] = "Unknown"] = 501;
        values[valuesById[502] = "Internal"] = 502;
        values[valuesById[503] = "Invalid"] = 503;
        values[valuesById[504] = "InvalidParam"] = 504;
        values[valuesById[505] = "ParamError"] = 505;
        values[valuesById[1001] = "FindError"] = 1001;
        values[valuesById[1002] = "CreateError"] = 1002;
        values[valuesById[1003] = "DeleteError"] = 1003;
        values[valuesById[1004] = "UpdateError"] = 1004;
        values[valuesById[2002] = "InvalidToken"] = 2002;
        values[valuesById[2003] = "InvalidSign"] = 2003;
        values[valuesById[2004] = "NotLogin"] = 2004;
        values[valuesById[2005] = "LoginTimeout"] = 2005;
        values[valuesById[2006] = "LoginError"] = 2006;
        values[valuesById[2007] = "LoginForbidden"] = 2007;
        values[valuesById[2008] = "LoginExpired"] = 2008;
        values[valuesById[2009] = "LoginInvalid"] = 2009;
        values[valuesById[2010] = "LoginInvalidPassword"] = 2010;
        values[valuesById[2011] = "LoginInvalidUsername"] = 2011;
        values[valuesById[2012] = "LoginInvalidEmail"] = 2012;
        values[valuesById[2013] = "LoginInvalidPhone"] = 2013;
        values[valuesById[2014] = "LoginInvalidUsernameOrEmail"] = 2014;
        values[valuesById[2015] = "LoginSocketRepeat"] = 2015;
        values[valuesById[3001] = "RoleIsNotExist"] = 3001;
        values[valuesById[3002] = "UserIsExist"] = 3002;
        values[valuesById[3003] = "UserIsBan"] = 3003;
        values[valuesById[5001] = "TalkIsBan"] = 5001;
        values[valuesById[5002] = "EnterRoomErr"] = 5002;
        values[valuesById[10001] = "HalaChatNeedBuy"] = 10001;
        values[valuesById[10002] = "HalaPriceOutRange"] = 10002;
        return values;
    })();

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CommonResult code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbcommon.CommonResult
         * @instance
         */
        CommonResult.prototype.code = 0;

        /**
         * CommonResult msg.
         * @member {string} msg
         * @memberof pbcommon.CommonResult
         * @instance
         */
        CommonResult.prototype.msg = "";

        /**
         * Creates a new CommonResult instance using the specified properties.
         * @function create
         * @memberof pbcommon.CommonResult
         * @static
         * @param {pbcommon.ICommonResult=} [properties] Properties to set
         * @returns {pbcommon.CommonResult} CommonResult instance
         */
        CommonResult.create = function create(properties) {
            return new CommonResult(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        CommonResult.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbcommon.CommonResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CommonResult message.
         * @function verify
         * @memberof pbcommon.CommonResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CommonResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
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
                case 2015:
                case 3001:
                case 3002:
                case 3003:
                case 5001:
                case 5002:
                case 10001:
                case 10002:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates a CommonResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbcommon.CommonResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbcommon.CommonResult} CommonResult
         */
        CommonResult.fromObject = function fromObject(object) {
            if (object instanceof $root.pbcommon.CommonResult)
                return object;
            var message = new $root.pbcommon.CommonResult();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "None":
            case 0:
                message.code = 0;
                break;
            case "Success":
            case 200:
                message.code = 200;
                break;
            case "Forbidden":
            case 403:
                message.code = 403;
                break;
            case "Fail":
            case 500:
                message.code = 500;
                break;
            case "Unknown":
            case 501:
                message.code = 501;
                break;
            case "Internal":
            case 502:
                message.code = 502;
                break;
            case "Invalid":
            case 503:
                message.code = 503;
                break;
            case "InvalidParam":
            case 504:
                message.code = 504;
                break;
            case "ParamError":
            case 505:
                message.code = 505;
                break;
            case "FindError":
            case 1001:
                message.code = 1001;
                break;
            case "CreateError":
            case 1002:
                message.code = 1002;
                break;
            case "DeleteError":
            case 1003:
                message.code = 1003;
                break;
            case "UpdateError":
            case 1004:
                message.code = 1004;
                break;
            case "InvalidToken":
            case 2002:
                message.code = 2002;
                break;
            case "InvalidSign":
            case 2003:
                message.code = 2003;
                break;
            case "NotLogin":
            case 2004:
                message.code = 2004;
                break;
            case "LoginTimeout":
            case 2005:
                message.code = 2005;
                break;
            case "LoginError":
            case 2006:
                message.code = 2006;
                break;
            case "LoginForbidden":
            case 2007:
                message.code = 2007;
                break;
            case "LoginExpired":
            case 2008:
                message.code = 2008;
                break;
            case "LoginInvalid":
            case 2009:
                message.code = 2009;
                break;
            case "LoginInvalidPassword":
            case 2010:
                message.code = 2010;
                break;
            case "LoginInvalidUsername":
            case 2011:
                message.code = 2011;
                break;
            case "LoginInvalidEmail":
            case 2012:
                message.code = 2012;
                break;
            case "LoginInvalidPhone":
            case 2013:
                message.code = 2013;
                break;
            case "LoginInvalidUsernameOrEmail":
            case 2014:
                message.code = 2014;
                break;
            case "LoginSocketRepeat":
            case 2015:
                message.code = 2015;
                break;
            case "RoleIsNotExist":
            case 3001:
                message.code = 3001;
                break;
            case "UserIsExist":
            case 3002:
                message.code = 3002;
                break;
            case "UserIsBan":
            case 3003:
                message.code = 3003;
                break;
            case "TalkIsBan":
            case 5001:
                message.code = 5001;
                break;
            case "EnterRoomErr":
            case 5002:
                message.code = 5002;
                break;
            case "HalaChatNeedBuy":
            case 10001:
                message.code = 10001;
                break;
            case "HalaPriceOutRange":
            case 10002:
                message.code = 10002;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

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
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this CommonResult to JSON.
         * @function toJSON
         * @memberof pbcommon.CommonResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CommonResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbcommon.CommonResult";
        };

        return CommonResult;
    })();

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
            this.ids = [];
            this.idStrs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IdArgs id.
         * @member {number|Long} id
         * @memberof pbcommon.IdArgs
         * @instance
         */
        IdArgs.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * IdArgs idStr.
         * @member {string} idStr
         * @memberof pbcommon.IdArgs
         * @instance
         */
        IdArgs.prototype.idStr = "";

        /**
         * IdArgs ids.
         * @member {Array.<number|Long>} ids
         * @memberof pbcommon.IdArgs
         * @instance
         */
        IdArgs.prototype.ids = $util.emptyArray;

        /**
         * IdArgs idStrs.
         * @member {Array.<string>} idStrs
         * @memberof pbcommon.IdArgs
         * @instance
         */
        IdArgs.prototype.idStrs = $util.emptyArray;

        /**
         * Creates a new IdArgs instance using the specified properties.
         * @function create
         * @memberof pbcommon.IdArgs
         * @static
         * @param {pbcommon.IIdArgs=} [properties] Properties to set
         * @returns {pbcommon.IdArgs} IdArgs instance
         */
        IdArgs.create = function create(properties) {
            return new IdArgs(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.idStr != null && Object.hasOwnProperty.call(message, "idStr"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.idStr);
            if (message.ids != null && message.ids.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.ids.length; ++i)
                    writer.int64(message.ids[i]);
                writer.ldelim();
            }
            if (message.idStrs != null && message.idStrs.length)
                for (var i = 0; i < message.idStrs.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.idStrs[i]);
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        IdArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbcommon.IdArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.idStr = reader.string();
                        break;
                    }
                case 3: {
                        if (!(message.ids && message.ids.length))
                            message.ids = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.ids.push(reader.int64());
                        } else
                            message.ids.push(reader.int64());
                        break;
                    }
                case 4: {
                        if (!(message.idStrs && message.idStrs.length))
                            message.idStrs = [];
                        message.idStrs.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IdArgs message.
         * @function verify
         * @memberof pbcommon.IdArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IdArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.idStr != null && message.hasOwnProperty("idStr"))
                if (!$util.isString(message.idStr))
                    return "idStr: string expected";
            if (message.ids != null && message.hasOwnProperty("ids")) {
                if (!Array.isArray(message.ids))
                    return "ids: array expected";
                for (var i = 0; i < message.ids.length; ++i)
                    if (!$util.isInteger(message.ids[i]) && !(message.ids[i] && $util.isInteger(message.ids[i].low) && $util.isInteger(message.ids[i].high)))
                        return "ids: integer|Long[] expected";
            }
            if (message.idStrs != null && message.hasOwnProperty("idStrs")) {
                if (!Array.isArray(message.idStrs))
                    return "idStrs: array expected";
                for (var i = 0; i < message.idStrs.length; ++i)
                    if (!$util.isString(message.idStrs[i]))
                        return "idStrs: string[] expected";
            }
            return null;
        };

        /**
         * Creates an IdArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbcommon.IdArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbcommon.IdArgs} IdArgs
         */
        IdArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbcommon.IdArgs)
                return object;
            var message = new $root.pbcommon.IdArgs();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.idStr != null)
                message.idStr = String(object.idStr);
            if (object.ids) {
                if (!Array.isArray(object.ids))
                    throw TypeError(".pbcommon.IdArgs.ids: array expected");
                message.ids = [];
                for (var i = 0; i < object.ids.length; ++i)
                    if ($util.Long)
                        (message.ids[i] = $util.Long.fromValue(object.ids[i])).unsigned = false;
                    else if (typeof object.ids[i] === "string")
                        message.ids[i] = parseInt(object.ids[i], 10);
                    else if (typeof object.ids[i] === "number")
                        message.ids[i] = object.ids[i];
                    else if (typeof object.ids[i] === "object")
                        message.ids[i] = new $util.LongBits(object.ids[i].low >>> 0, object.ids[i].high >>> 0).toNumber();
            }
            if (object.idStrs) {
                if (!Array.isArray(object.idStrs))
                    throw TypeError(".pbcommon.IdArgs.idStrs: array expected");
                message.idStrs = [];
                for (var i = 0; i < object.idStrs.length; ++i)
                    message.idStrs[i] = String(object.idStrs[i]);
            }
            return message;
        };

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
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.ids = [];
                object.idStrs = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.idStr = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.idStr != null && message.hasOwnProperty("idStr"))
                object.idStr = message.idStr;
            if (message.ids && message.ids.length) {
                object.ids = [];
                for (var j = 0; j < message.ids.length; ++j)
                    if (typeof message.ids[j] === "number")
                        object.ids[j] = options.longs === String ? String(message.ids[j]) : message.ids[j];
                    else
                        object.ids[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ids[j]) : options.longs === Number ? new $util.LongBits(message.ids[j].low >>> 0, message.ids[j].high >>> 0).toNumber() : message.ids[j];
            }
            if (message.idStrs && message.idStrs.length) {
                object.idStrs = [];
                for (var j = 0; j < message.idStrs.length; ++j)
                    object.idStrs[j] = message.idStrs[j];
            }
            return object;
        };

        /**
         * Converts this IdArgs to JSON.
         * @function toJSON
         * @memberof pbcommon.IdArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbcommon.IdArgs";
        };

        return IdArgs;
    })();

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PageInfo page.
         * @member {number} page
         * @memberof pbcommon.PageInfo
         * @instance
         */
        PageInfo.prototype.page = 0;

        /**
         * PageInfo pageSize.
         * @member {number} pageSize
         * @memberof pbcommon.PageInfo
         * @instance
         */
        PageInfo.prototype.pageSize = 0;

        /**
         * Creates a new PageInfo instance using the specified properties.
         * @function create
         * @memberof pbcommon.PageInfo
         * @static
         * @param {pbcommon.IPageInfo=} [properties] Properties to set
         * @returns {pbcommon.PageInfo} PageInfo instance
         */
        PageInfo.create = function create(properties) {
            return new PageInfo(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        PageInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbcommon.PageInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.int32();
                        break;
                    }
                case 2: {
                        message.pageSize = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PageInfo message.
         * @function verify
         * @memberof pbcommon.PageInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PageInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            return null;
        };

        /**
         * Creates a PageInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbcommon.PageInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbcommon.PageInfo} PageInfo
         */
        PageInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pbcommon.PageInfo)
                return object;
            var message = new $root.pbcommon.PageInfo();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            return message;
        };

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
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.page = 0;
                object.pageSize = 0;
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            return object;
        };

        /**
         * Converts this PageInfo to JSON.
         * @function toJSON
         * @memberof pbcommon.PageInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PageInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbcommon.PageInfo";
        };

        return PageInfo;
    })();

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IdArgsWithPageInfo idArgs.
         * @member {pbcommon.IIdArgs|null|undefined} idArgs
         * @memberof pbcommon.IdArgsWithPageInfo
         * @instance
         */
        IdArgsWithPageInfo.prototype.idArgs = null;

        /**
         * IdArgsWithPageInfo pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbcommon.IdArgsWithPageInfo
         * @instance
         */
        IdArgsWithPageInfo.prototype.pageInfo = null;

        /**
         * Creates a new IdArgsWithPageInfo instance using the specified properties.
         * @function create
         * @memberof pbcommon.IdArgsWithPageInfo
         * @static
         * @param {pbcommon.IIdArgsWithPageInfo=} [properties] Properties to set
         * @returns {pbcommon.IdArgsWithPageInfo} IdArgsWithPageInfo instance
         */
        IdArgsWithPageInfo.create = function create(properties) {
            return new IdArgsWithPageInfo(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.idArgs != null && Object.hasOwnProperty.call(message, "idArgs"))
                $root.pbcommon.IdArgs.encode(message.idArgs, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        IdArgsWithPageInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbcommon.IdArgsWithPageInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.idArgs = $root.pbcommon.IdArgs.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IdArgsWithPageInfo message.
         * @function verify
         * @memberof pbcommon.IdArgsWithPageInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IdArgsWithPageInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.idArgs != null && message.hasOwnProperty("idArgs")) {
                var error = $root.pbcommon.IdArgs.verify(message.idArgs);
                if (error)
                    return "idArgs." + error;
            }
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            return null;
        };

        /**
         * Creates an IdArgsWithPageInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbcommon.IdArgsWithPageInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbcommon.IdArgsWithPageInfo} IdArgsWithPageInfo
         */
        IdArgsWithPageInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pbcommon.IdArgsWithPageInfo)
                return object;
            var message = new $root.pbcommon.IdArgsWithPageInfo();
            if (object.idArgs != null) {
                if (typeof object.idArgs !== "object")
                    throw TypeError(".pbcommon.IdArgsWithPageInfo.idArgs: object expected");
                message.idArgs = $root.pbcommon.IdArgs.fromObject(object.idArgs);
            }
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbcommon.IdArgsWithPageInfo.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            return message;
        };

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
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.idArgs = null;
                object.pageInfo = null;
            }
            if (message.idArgs != null && message.hasOwnProperty("idArgs"))
                object.idArgs = $root.pbcommon.IdArgs.toObject(message.idArgs, options);
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options);
            return object;
        };

        /**
         * Converts this IdArgsWithPageInfo to JSON.
         * @function toJSON
         * @memberof pbcommon.IdArgsWithPageInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdArgsWithPageInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for IdArgsWithPageInfo
         * @function getTypeUrl
         * @memberof pbcommon.IdArgsWithPageInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        IdArgsWithPageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbcommon.IdArgsWithPageInfo";
        };

        return IdArgsWithPageInfo;
    })();

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
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
            return new Empty(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        Empty.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbcommon.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof pbcommon.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbcommon.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbcommon.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.pbcommon.Empty)
                return object;
            return new $root.pbcommon.Empty();
        };

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
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof pbcommon.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Empty
         * @function getTypeUrl
         * @memberof pbcommon.Empty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbcommon.Empty";
        };

        return Empty;
    })();

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivilegeTip title.
         * @member {string} title
         * @memberof pbcommon.PrivilegeTip
         * @instance
         */
        PrivilegeTip.prototype.title = "";

        /**
         * PrivilegeTip beginTime.
         * @member {string} beginTime
         * @memberof pbcommon.PrivilegeTip
         * @instance
         */
        PrivilegeTip.prototype.beginTime = "";

        /**
         * PrivilegeTip duration.
         * @member {number|Long} duration
         * @memberof pbcommon.PrivilegeTip
         * @instance
         */
        PrivilegeTip.prototype.duration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PrivilegeTip reason.
         * @member {string} reason
         * @memberof pbcommon.PrivilegeTip
         * @instance
         */
        PrivilegeTip.prototype.reason = "";

        /**
         * PrivilegeTip deviceUuid.
         * @member {string} deviceUuid
         * @memberof pbcommon.PrivilegeTip
         * @instance
         */
        PrivilegeTip.prototype.deviceUuid = "";

        /**
         * PrivilegeTip endTime.
         * @member {string} endTime
         * @memberof pbcommon.PrivilegeTip
         * @instance
         */
        PrivilegeTip.prototype.endTime = "";

        /**
         * Creates a new PrivilegeTip instance using the specified properties.
         * @function create
         * @memberof pbcommon.PrivilegeTip
         * @static
         * @param {pbcommon.IPrivilegeTip=} [properties] Properties to set
         * @returns {pbcommon.PrivilegeTip} PrivilegeTip instance
         */
        PrivilegeTip.create = function create(properties) {
            return new PrivilegeTip(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.beginTime != null && Object.hasOwnProperty.call(message, "beginTime"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.beginTime);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.duration);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.reason);
            if (message.deviceUuid != null && Object.hasOwnProperty.call(message, "deviceUuid"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceUuid);
            if (message.endTime != null && Object.hasOwnProperty.call(message, "endTime"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.endTime);
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        PrivilegeTip.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbcommon.PrivilegeTip();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.title = reader.string();
                        break;
                    }
                case 2: {
                        message.beginTime = reader.string();
                        break;
                    }
                case 3: {
                        message.duration = reader.int64();
                        break;
                    }
                case 4: {
                        message.reason = reader.string();
                        break;
                    }
                case 5: {
                        message.deviceUuid = reader.string();
                        break;
                    }
                case 6: {
                        message.endTime = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrivilegeTip message.
         * @function verify
         * @memberof pbcommon.PrivilegeTip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrivilegeTip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.beginTime != null && message.hasOwnProperty("beginTime"))
                if (!$util.isString(message.beginTime))
                    return "beginTime: string expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration) && !(message.duration && $util.isInteger(message.duration.low) && $util.isInteger(message.duration.high)))
                    return "duration: integer|Long expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            if (message.deviceUuid != null && message.hasOwnProperty("deviceUuid"))
                if (!$util.isString(message.deviceUuid))
                    return "deviceUuid: string expected";
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                if (!$util.isString(message.endTime))
                    return "endTime: string expected";
            return null;
        };

        /**
         * Creates a PrivilegeTip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbcommon.PrivilegeTip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbcommon.PrivilegeTip} PrivilegeTip
         */
        PrivilegeTip.fromObject = function fromObject(object) {
            if (object instanceof $root.pbcommon.PrivilegeTip)
                return object;
            var message = new $root.pbcommon.PrivilegeTip();
            if (object.title != null)
                message.title = String(object.title);
            if (object.beginTime != null)
                message.beginTime = String(object.beginTime);
            if (object.duration != null)
                if ($util.Long)
                    (message.duration = $util.Long.fromValue(object.duration)).unsigned = false;
                else if (typeof object.duration === "string")
                    message.duration = parseInt(object.duration, 10);
                else if (typeof object.duration === "number")
                    message.duration = object.duration;
                else if (typeof object.duration === "object")
                    message.duration = new $util.LongBits(object.duration.low >>> 0, object.duration.high >>> 0).toNumber();
            if (object.reason != null)
                message.reason = String(object.reason);
            if (object.deviceUuid != null)
                message.deviceUuid = String(object.deviceUuid);
            if (object.endTime != null)
                message.endTime = String(object.endTime);
            return message;
        };

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
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.title = "";
                object.beginTime = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.duration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.duration = options.longs === String ? "0" : 0;
                object.reason = "";
                object.deviceUuid = "";
                object.endTime = "";
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.beginTime != null && message.hasOwnProperty("beginTime"))
                object.beginTime = message.beginTime;
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (typeof message.duration === "number")
                    object.duration = options.longs === String ? String(message.duration) : message.duration;
                else
                    object.duration = options.longs === String ? $util.Long.prototype.toString.call(message.duration) : options.longs === Number ? new $util.LongBits(message.duration.low >>> 0, message.duration.high >>> 0).toNumber() : message.duration;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            if (message.deviceUuid != null && message.hasOwnProperty("deviceUuid"))
                object.deviceUuid = message.deviceUuid;
            if (message.endTime != null && message.hasOwnProperty("endTime"))
                object.endTime = message.endTime;
            return object;
        };

        /**
         * Converts this PrivilegeTip to JSON.
         * @function toJSON
         * @memberof pbcommon.PrivilegeTip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrivilegeTip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PrivilegeTip
         * @function getTypeUrl
         * @memberof pbcommon.PrivilegeTip
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PrivilegeTip.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbcommon.PrivilegeTip";
        };

        return PrivilegeTip;
    })();

    return pbcommon;
})();

$root.pbim = (function() {

    /**
     * Namespace pbim.
     * @exports pbim
     * @namespace
     */
    var pbim = {};

    pbim.SessionC2S = (function() {

        /**
         * Properties of a SessionC2S.
         * @memberof pbim
         * @interface ISessionC2S
         * @property {number|Long|null} [uid] SessionC2S uid
         */

        /**
         * Constructs a new SessionC2S.
         * @memberof pbim
         * @classdesc Represents a SessionC2S.
         * @implements ISessionC2S
         * @constructor
         * @param {pbim.ISessionC2S=} [properties] Properties to set
         */
        function SessionC2S(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionC2S uid.
         * @member {number|Long} uid
         * @memberof pbim.SessionC2S
         * @instance
         */
        SessionC2S.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SessionC2S instance using the specified properties.
         * @function create
         * @memberof pbim.SessionC2S
         * @static
         * @param {pbim.ISessionC2S=} [properties] Properties to set
         * @returns {pbim.SessionC2S} SessionC2S instance
         */
        SessionC2S.create = function create(properties) {
            return new SessionC2S(properties);
        };

        /**
         * Encodes the specified SessionC2S message. Does not implicitly {@link pbim.SessionC2S.verify|verify} messages.
         * @function encode
         * @memberof pbim.SessionC2S
         * @static
         * @param {pbim.ISessionC2S} message SessionC2S message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionC2S.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.uid);
            return writer;
        };

        /**
         * Encodes the specified SessionC2S message, length delimited. Does not implicitly {@link pbim.SessionC2S.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.SessionC2S
         * @static
         * @param {pbim.ISessionC2S} message SessionC2S message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionC2S.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionC2S message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.SessionC2S
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.SessionC2S} SessionC2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionC2S.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.SessionC2S();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.uid = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionC2S message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.SessionC2S
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.SessionC2S} SessionC2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionC2S.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionC2S message.
         * @function verify
         * @memberof pbim.SessionC2S
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionC2S.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            return null;
        };

        /**
         * Creates a SessionC2S message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.SessionC2S
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.SessionC2S} SessionC2S
         */
        SessionC2S.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.SessionC2S)
                return object;
            var message = new $root.pbim.SessionC2S();
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SessionC2S message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.SessionC2S
         * @static
         * @param {pbim.SessionC2S} message SessionC2S
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionC2S.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            return object;
        };

        /**
         * Converts this SessionC2S to JSON.
         * @function toJSON
         * @memberof pbim.SessionC2S
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionC2S.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SessionC2S
         * @function getTypeUrl
         * @memberof pbim.SessionC2S
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SessionC2S.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.SessionC2S";
        };

        return SessionC2S;
    })();

    pbim.SessionS2C = (function() {

        /**
         * Properties of a SessionS2C.
         * @memberof pbim
         * @interface ISessionS2C
         * @property {number|Long|null} [userId] SessionS2C userId
         * @property {Array.<pbim.ISession>|null} [sessionList] SessionS2C sessionList
         */

        /**
         * Constructs a new SessionS2C.
         * @memberof pbim
         * @classdesc Represents a SessionS2C.
         * @implements ISessionS2C
         * @constructor
         * @param {pbim.ISessionS2C=} [properties] Properties to set
         */
        function SessionS2C(properties) {
            this.sessionList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SessionS2C userId.
         * @member {number|Long} userId
         * @memberof pbim.SessionS2C
         * @instance
         */
        SessionS2C.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SessionS2C sessionList.
         * @member {Array.<pbim.ISession>} sessionList
         * @memberof pbim.SessionS2C
         * @instance
         */
        SessionS2C.prototype.sessionList = $util.emptyArray;

        /**
         * Creates a new SessionS2C instance using the specified properties.
         * @function create
         * @memberof pbim.SessionS2C
         * @static
         * @param {pbim.ISessionS2C=} [properties] Properties to set
         * @returns {pbim.SessionS2C} SessionS2C instance
         */
        SessionS2C.create = function create(properties) {
            return new SessionS2C(properties);
        };

        /**
         * Encodes the specified SessionS2C message. Does not implicitly {@link pbim.SessionS2C.verify|verify} messages.
         * @function encode
         * @memberof pbim.SessionS2C
         * @static
         * @param {pbim.ISessionS2C} message SessionS2C message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionS2C.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.sessionList != null && message.sessionList.length)
                for (var i = 0; i < message.sessionList.length; ++i)
                    $root.pbim.Session.encode(message.sessionList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SessionS2C message, length delimited. Does not implicitly {@link pbim.SessionS2C.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.SessionS2C
         * @static
         * @param {pbim.ISessionS2C} message SessionS2C message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionS2C.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SessionS2C message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.SessionS2C
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.SessionS2C} SessionS2C
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionS2C.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.SessionS2C();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        if (!(message.sessionList && message.sessionList.length))
                            message.sessionList = [];
                        message.sessionList.push($root.pbim.Session.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SessionS2C message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.SessionS2C
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.SessionS2C} SessionS2C
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionS2C.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionS2C message.
         * @function verify
         * @memberof pbim.SessionS2C
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionS2C.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.sessionList != null && message.hasOwnProperty("sessionList")) {
                if (!Array.isArray(message.sessionList))
                    return "sessionList: array expected";
                for (var i = 0; i < message.sessionList.length; ++i) {
                    var error = $root.pbim.Session.verify(message.sessionList[i]);
                    if (error)
                        return "sessionList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SessionS2C message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.SessionS2C
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.SessionS2C} SessionS2C
         */
        SessionS2C.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.SessionS2C)
                return object;
            var message = new $root.pbim.SessionS2C();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.sessionList) {
                if (!Array.isArray(object.sessionList))
                    throw TypeError(".pbim.SessionS2C.sessionList: array expected");
                message.sessionList = [];
                for (var i = 0; i < object.sessionList.length; ++i) {
                    if (typeof object.sessionList[i] !== "object")
                        throw TypeError(".pbim.SessionS2C.sessionList: object expected");
                    message.sessionList[i] = $root.pbim.Session.fromObject(object.sessionList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SessionS2C message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.SessionS2C
         * @static
         * @param {pbim.SessionS2C} message SessionS2C
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionS2C.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.sessionList = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.sessionList && message.sessionList.length) {
                object.sessionList = [];
                for (var j = 0; j < message.sessionList.length; ++j)
                    object.sessionList[j] = $root.pbim.Session.toObject(message.sessionList[j], options);
            }
            return object;
        };

        /**
         * Converts this SessionS2C to JSON.
         * @function toJSON
         * @memberof pbim.SessionS2C
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionS2C.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SessionS2C
         * @function getTypeUrl
         * @memberof pbim.SessionS2C
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SessionS2C.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.SessionS2C";
        };

        return SessionS2C;
    })();

    pbim.Session = (function() {

        /**
         * Properties of a Session.
         * @memberof pbim
         * @interface ISession
         * @property {string|null} [sessionId] Session sessionId
         * @property {pbim.Session.SessionType|null} [type] Session type
         * @property {number|Long|null} [unread] Session unread
         * @property {string|null} [title] Session title
         * @property {string|null} [icon] Session icon
         * @property {pbim.IMsg|null} [lastMsg] Session lastMsg
         * @property {number|Long|null} [sessionIdI64] Session sessionIdI64
         */

        /**
         * Constructs a new Session.
         * @memberof pbim
         * @classdesc Represents a Session.
         * @implements ISession
         * @constructor
         * @param {pbim.ISession=} [properties] Properties to set
         */
        function Session(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Session sessionId.
         * @member {string} sessionId
         * @memberof pbim.Session
         * @instance
         */
        Session.prototype.sessionId = "";

        /**
         * Session type.
         * @member {pbim.Session.SessionType} type
         * @memberof pbim.Session
         * @instance
         */
        Session.prototype.type = 0;

        /**
         * Session unread.
         * @member {number|Long} unread
         * @memberof pbim.Session
         * @instance
         */
        Session.prototype.unread = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Session title.
         * @member {string} title
         * @memberof pbim.Session
         * @instance
         */
        Session.prototype.title = "";

        /**
         * Session icon.
         * @member {string} icon
         * @memberof pbim.Session
         * @instance
         */
        Session.prototype.icon = "";

        /**
         * Session lastMsg.
         * @member {pbim.IMsg|null|undefined} lastMsg
         * @memberof pbim.Session
         * @instance
         */
        Session.prototype.lastMsg = null;

        /**
         * Session sessionIdI64.
         * @member {number|Long} sessionIdI64
         * @memberof pbim.Session
         * @instance
         */
        Session.prototype.sessionIdI64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Session instance using the specified properties.
         * @function create
         * @memberof pbim.Session
         * @static
         * @param {pbim.ISession=} [properties] Properties to set
         * @returns {pbim.Session} Session instance
         */
        Session.create = function create(properties) {
            return new Session(properties);
        };

        /**
         * Encodes the specified Session message. Does not implicitly {@link pbim.Session.verify|verify} messages.
         * @function encode
         * @memberof pbim.Session
         * @static
         * @param {pbim.ISession} message Session message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            if (message.unread != null && Object.hasOwnProperty.call(message, "unread"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.unread);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.title);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.icon);
            if (message.lastMsg != null && Object.hasOwnProperty.call(message, "lastMsg"))
                $root.pbim.Msg.encode(message.lastMsg, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.sessionIdI64 != null && Object.hasOwnProperty.call(message, "sessionIdI64"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.sessionIdI64);
            return writer;
        };

        /**
         * Encodes the specified Session message, length delimited. Does not implicitly {@link pbim.Session.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.Session
         * @static
         * @param {pbim.ISession} message Session message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Session.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Session message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.Session
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.Session} Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.Session();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 2: {
                        message.type = reader.int32();
                        break;
                    }
                case 3: {
                        message.unread = reader.int64();
                        break;
                    }
                case 4: {
                        message.title = reader.string();
                        break;
                    }
                case 5: {
                        message.icon = reader.string();
                        break;
                    }
                case 6: {
                        message.lastMsg = $root.pbim.Msg.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.sessionIdI64 = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Session message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.Session
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.Session} Session
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Session.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Session message.
         * @function verify
         * @memberof pbim.Session
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Session.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.unread != null && message.hasOwnProperty("unread"))
                if (!$util.isInteger(message.unread) && !(message.unread && $util.isInteger(message.unread.low) && $util.isInteger(message.unread.high)))
                    return "unread: integer|Long expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.lastMsg != null && message.hasOwnProperty("lastMsg")) {
                var error = $root.pbim.Msg.verify(message.lastMsg);
                if (error)
                    return "lastMsg." + error;
            }
            if (message.sessionIdI64 != null && message.hasOwnProperty("sessionIdI64"))
                if (!$util.isInteger(message.sessionIdI64) && !(message.sessionIdI64 && $util.isInteger(message.sessionIdI64.low) && $util.isInteger(message.sessionIdI64.high)))
                    return "sessionIdI64: integer|Long expected";
            return null;
        };

        /**
         * Creates a Session message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.Session
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.Session} Session
         */
        Session.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.Session)
                return object;
            var message = new $root.pbim.Session();
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "None":
            case 0:
                message.type = 0;
                break;
            case "Official":
            case 1:
                message.type = 1;
                break;
            case "Activity":
            case 3:
                message.type = 3;
                break;
            case "NewFriends":
            case 4:
                message.type = 4;
                break;
            case "Friends":
            case 5:
                message.type = 5;
                break;
            }
            if (object.unread != null)
                if ($util.Long)
                    (message.unread = $util.Long.fromValue(object.unread)).unsigned = false;
                else if (typeof object.unread === "string")
                    message.unread = parseInt(object.unread, 10);
                else if (typeof object.unread === "number")
                    message.unread = object.unread;
                else if (typeof object.unread === "object")
                    message.unread = new $util.LongBits(object.unread.low >>> 0, object.unread.high >>> 0).toNumber();
            if (object.title != null)
                message.title = String(object.title);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.lastMsg != null) {
                if (typeof object.lastMsg !== "object")
                    throw TypeError(".pbim.Session.lastMsg: object expected");
                message.lastMsg = $root.pbim.Msg.fromObject(object.lastMsg);
            }
            if (object.sessionIdI64 != null)
                if ($util.Long)
                    (message.sessionIdI64 = $util.Long.fromValue(object.sessionIdI64)).unsigned = false;
                else if (typeof object.sessionIdI64 === "string")
                    message.sessionIdI64 = parseInt(object.sessionIdI64, 10);
                else if (typeof object.sessionIdI64 === "number")
                    message.sessionIdI64 = object.sessionIdI64;
                else if (typeof object.sessionIdI64 === "object")
                    message.sessionIdI64 = new $util.LongBits(object.sessionIdI64.low >>> 0, object.sessionIdI64.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Session message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.Session
         * @static
         * @param {pbim.Session} message Session
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Session.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sessionId = "";
                object.type = options.enums === String ? "None" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.unread = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.unread = options.longs === String ? "0" : 0;
                object.title = "";
                object.icon = "";
                object.lastMsg = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sessionIdI64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionIdI64 = options.longs === String ? "0" : 0;
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.pbim.Session.SessionType[message.type] === undefined ? message.type : $root.pbim.Session.SessionType[message.type] : message.type;
            if (message.unread != null && message.hasOwnProperty("unread"))
                if (typeof message.unread === "number")
                    object.unread = options.longs === String ? String(message.unread) : message.unread;
                else
                    object.unread = options.longs === String ? $util.Long.prototype.toString.call(message.unread) : options.longs === Number ? new $util.LongBits(message.unread.low >>> 0, message.unread.high >>> 0).toNumber() : message.unread;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.lastMsg != null && message.hasOwnProperty("lastMsg"))
                object.lastMsg = $root.pbim.Msg.toObject(message.lastMsg, options);
            if (message.sessionIdI64 != null && message.hasOwnProperty("sessionIdI64"))
                if (typeof message.sessionIdI64 === "number")
                    object.sessionIdI64 = options.longs === String ? String(message.sessionIdI64) : message.sessionIdI64;
                else
                    object.sessionIdI64 = options.longs === String ? $util.Long.prototype.toString.call(message.sessionIdI64) : options.longs === Number ? new $util.LongBits(message.sessionIdI64.low >>> 0, message.sessionIdI64.high >>> 0).toNumber() : message.sessionIdI64;
            return object;
        };

        /**
         * Converts this Session to JSON.
         * @function toJSON
         * @memberof pbim.Session
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Session.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Session
         * @function getTypeUrl
         * @memberof pbim.Session
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Session.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.Session";
        };

        /**
         * SessionType enum.
         * @name pbim.Session.SessionType
         * @enum {number}
         * @property {number} None=0 None value
         * @property {number} Official=1 Official value
         * @property {number} Activity=3 Activity value
         * @property {number} NewFriends=4 NewFriends value
         * @property {number} Friends=5 Friends value
         */
        Session.SessionType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "None"] = 0;
            values[valuesById[1] = "Official"] = 1;
            values[valuesById[3] = "Activity"] = 3;
            values[valuesById[4] = "NewFriends"] = 4;
            values[valuesById[5] = "Friends"] = 5;
            return values;
        })();

        return Session;
    })();

    pbim.Msg = (function() {

        /**
         * Properties of a Msg.
         * @memberof pbim
         * @interface IMsg
         * @property {string|null} [sessionId] Msg sessionId
         * @property {number|Long|null} [seq] Msg seq
         * @property {pbim.Msg.MsgType|null} [type] Msg type
         * @property {number|Long|null} [timeUnixUtc] Msg timeUnixUtc
         * @property {pbim.Msg.ReadState|null} [state] Msg state
         * @property {Uint8Array|null} [body] Msg body
         * @property {number|Long|null} [sessionIdI64] Msg sessionIdI64
         */

        /**
         * Constructs a new Msg.
         * @memberof pbim
         * @classdesc Represents a Msg.
         * @implements IMsg
         * @constructor
         * @param {pbim.IMsg=} [properties] Properties to set
         */
        function Msg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Msg sessionId.
         * @member {string} sessionId
         * @memberof pbim.Msg
         * @instance
         */
        Msg.prototype.sessionId = "";

        /**
         * Msg seq.
         * @member {number|Long} seq
         * @memberof pbim.Msg
         * @instance
         */
        Msg.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Msg type.
         * @member {pbim.Msg.MsgType} type
         * @memberof pbim.Msg
         * @instance
         */
        Msg.prototype.type = 0;

        /**
         * Msg timeUnixUtc.
         * @member {number|Long} timeUnixUtc
         * @memberof pbim.Msg
         * @instance
         */
        Msg.prototype.timeUnixUtc = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Msg state.
         * @member {pbim.Msg.ReadState} state
         * @memberof pbim.Msg
         * @instance
         */
        Msg.prototype.state = 0;

        /**
         * Msg body.
         * @member {Uint8Array} body
         * @memberof pbim.Msg
         * @instance
         */
        Msg.prototype.body = $util.newBuffer([]);

        /**
         * Msg sessionIdI64.
         * @member {number|Long} sessionIdI64
         * @memberof pbim.Msg
         * @instance
         */
        Msg.prototype.sessionIdI64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Msg instance using the specified properties.
         * @function create
         * @memberof pbim.Msg
         * @static
         * @param {pbim.IMsg=} [properties] Properties to set
         * @returns {pbim.Msg} Msg instance
         */
        Msg.create = function create(properties) {
            return new Msg(properties);
        };

        /**
         * Encodes the specified Msg message. Does not implicitly {@link pbim.Msg.verify|verify} messages.
         * @function encode
         * @memberof pbim.Msg
         * @static
         * @param {pbim.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.seq);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.timeUnixUtc != null && Object.hasOwnProperty.call(message, "timeUnixUtc"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timeUnixUtc);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.body);
            if (message.sessionIdI64 != null && Object.hasOwnProperty.call(message, "sessionIdI64"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.sessionIdI64);
            return writer;
        };

        /**
         * Encodes the specified Msg message, length delimited. Does not implicitly {@link pbim.Msg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.Msg
         * @static
         * @param {pbim.IMsg} message Msg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Msg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Msg message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.Msg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 2: {
                        message.seq = reader.int64();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.timeUnixUtc = reader.int64();
                        break;
                    }
                case 5: {
                        message.state = reader.int32();
                        break;
                    }
                case 6: {
                        message.body = reader.bytes();
                        break;
                    }
                case 7: {
                        message.sessionIdI64 = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Msg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.Msg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.Msg} Msg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Msg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Msg message.
         * @function verify
         * @memberof pbim.Msg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Msg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                    break;
                }
            if (message.timeUnixUtc != null && message.hasOwnProperty("timeUnixUtc"))
                if (!$util.isInteger(message.timeUnixUtc) && !(message.timeUnixUtc && $util.isInteger(message.timeUnixUtc.low) && $util.isInteger(message.timeUnixUtc.high)))
                    return "timeUnixUtc: integer|Long expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            if (message.sessionIdI64 != null && message.hasOwnProperty("sessionIdI64"))
                if (!$util.isInteger(message.sessionIdI64) && !(message.sessionIdI64 && $util.isInteger(message.sessionIdI64.low) && $util.isInteger(message.sessionIdI64.high)))
                    return "sessionIdI64: integer|Long expected";
            return null;
        };

        /**
         * Creates a Msg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.Msg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.Msg} Msg
         */
        Msg.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.Msg)
                return object;
            var message = new $root.pbim.Msg();
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "None":
            case 0:
                message.type = 0;
                break;
            case "Notice":
            case 1:
                message.type = 1;
                break;
            case "Tip":
            case 2:
                message.type = 2;
                break;
            case "ChatPrivate":
            case 3:
                message.type = 3;
                break;
            case "ChatPublic":
            case 4:
                message.type = 4;
                break;
            case "ChatAt":
            case 5:
                message.type = 5;
                break;
            case "GiftPrivate":
            case 6:
                message.type = 6;
                break;
            case "GiftPublic":
            case 7:
                message.type = 7;
                break;
            case "Activity":
            case 8:
                message.type = 8;
                break;
            case "GuardExpired":
            case 9:
                message.type = 9;
                break;
            case "InviteRegister":
            case 10:
                message.type = 10;
                break;
            case "InviteRecharge":
            case 11:
                message.type = 11;
                break;
            case "InviteExpired":
            case 12:
                message.type = 12;
                break;
            case "InviteValidDays":
            case 13:
                message.type = 13;
                break;
            case "PropExpired":
            case 14:
                message.type = 14;
                break;
            case "InviteRechargeNew":
            case 15:
                message.type = 15;
                break;
            case "InviteValidDaysNew":
            case 16:
                message.type = 16;
                break;
            }
            if (object.timeUnixUtc != null)
                if ($util.Long)
                    (message.timeUnixUtc = $util.Long.fromValue(object.timeUnixUtc)).unsigned = false;
                else if (typeof object.timeUnixUtc === "string")
                    message.timeUnixUtc = parseInt(object.timeUnixUtc, 10);
                else if (typeof object.timeUnixUtc === "number")
                    message.timeUnixUtc = object.timeUnixUtc;
                else if (typeof object.timeUnixUtc === "object")
                    message.timeUnixUtc = new $util.LongBits(object.timeUnixUtc.low >>> 0, object.timeUnixUtc.high >>> 0).toNumber();
            switch (object.state) {
            default:
                if (typeof object.state === "number") {
                    message.state = object.state;
                    break;
                }
                break;
            case "Unread":
            case 0:
                message.state = 0;
                break;
            case "Read":
            case 1:
                message.state = 1;
                break;
            case "Deleted":
            case 2:
                message.state = 2;
                break;
            }
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length >= 0)
                    message.body = object.body;
            if (object.sessionIdI64 != null)
                if ($util.Long)
                    (message.sessionIdI64 = $util.Long.fromValue(object.sessionIdI64)).unsigned = false;
                else if (typeof object.sessionIdI64 === "string")
                    message.sessionIdI64 = parseInt(object.sessionIdI64, 10);
                else if (typeof object.sessionIdI64 === "number")
                    message.sessionIdI64 = object.sessionIdI64;
                else if (typeof object.sessionIdI64 === "object")
                    message.sessionIdI64 = new $util.LongBits(object.sessionIdI64.low >>> 0, object.sessionIdI64.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Msg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.Msg
         * @static
         * @param {pbim.Msg} message Msg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Msg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sessionId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
                object.type = options.enums === String ? "None" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timeUnixUtc = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timeUnixUtc = options.longs === String ? "0" : 0;
                object.state = options.enums === String ? "Unread" : 0;
                if (options.bytes === String)
                    object.body = "";
                else {
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sessionIdI64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionIdI64 = options.longs === String ? "0" : 0;
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.pbim.Msg.MsgType[message.type] === undefined ? message.type : $root.pbim.Msg.MsgType[message.type] : message.type;
            if (message.timeUnixUtc != null && message.hasOwnProperty("timeUnixUtc"))
                if (typeof message.timeUnixUtc === "number")
                    object.timeUnixUtc = options.longs === String ? String(message.timeUnixUtc) : message.timeUnixUtc;
                else
                    object.timeUnixUtc = options.longs === String ? $util.Long.prototype.toString.call(message.timeUnixUtc) : options.longs === Number ? new $util.LongBits(message.timeUnixUtc.low >>> 0, message.timeUnixUtc.high >>> 0).toNumber() : message.timeUnixUtc;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.pbim.Msg.ReadState[message.state] === undefined ? message.state : $root.pbim.Msg.ReadState[message.state] : message.state;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            if (message.sessionIdI64 != null && message.hasOwnProperty("sessionIdI64"))
                if (typeof message.sessionIdI64 === "number")
                    object.sessionIdI64 = options.longs === String ? String(message.sessionIdI64) : message.sessionIdI64;
                else
                    object.sessionIdI64 = options.longs === String ? $util.Long.prototype.toString.call(message.sessionIdI64) : options.longs === Number ? new $util.LongBits(message.sessionIdI64.low >>> 0, message.sessionIdI64.high >>> 0).toNumber() : message.sessionIdI64;
            return object;
        };

        /**
         * Converts this Msg to JSON.
         * @function toJSON
         * @memberof pbim.Msg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Msg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Msg
         * @function getTypeUrl
         * @memberof pbim.Msg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Msg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.Msg";
        };

        /**
         * MsgType enum.
         * @name pbim.Msg.MsgType
         * @enum {number}
         * @property {number} None=0 None value
         * @property {number} Notice=1 Notice value
         * @property {number} Tip=2 Tip value
         * @property {number} ChatPrivate=3 ChatPrivate value
         * @property {number} ChatPublic=4 ChatPublic value
         * @property {number} ChatAt=5 ChatAt value
         * @property {number} GiftPrivate=6 GiftPrivate value
         * @property {number} GiftPublic=7 GiftPublic value
         * @property {number} Activity=8 Activity value
         * @property {number} GuardExpired=9 GuardExpired value
         * @property {number} InviteRegister=10 InviteRegister value
         * @property {number} InviteRecharge=11 InviteRecharge value
         * @property {number} InviteExpired=12 InviteExpired value
         * @property {number} InviteValidDays=13 InviteValidDays value
         * @property {number} PropExpired=14 PropExpired value
         * @property {number} InviteRechargeNew=15 InviteRechargeNew value
         * @property {number} InviteValidDaysNew=16 InviteValidDaysNew value
         */
        Msg.MsgType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "None"] = 0;
            values[valuesById[1] = "Notice"] = 1;
            values[valuesById[2] = "Tip"] = 2;
            values[valuesById[3] = "ChatPrivate"] = 3;
            values[valuesById[4] = "ChatPublic"] = 4;
            values[valuesById[5] = "ChatAt"] = 5;
            values[valuesById[6] = "GiftPrivate"] = 6;
            values[valuesById[7] = "GiftPublic"] = 7;
            values[valuesById[8] = "Activity"] = 8;
            values[valuesById[9] = "GuardExpired"] = 9;
            values[valuesById[10] = "InviteRegister"] = 10;
            values[valuesById[11] = "InviteRecharge"] = 11;
            values[valuesById[12] = "InviteExpired"] = 12;
            values[valuesById[13] = "InviteValidDays"] = 13;
            values[valuesById[14] = "PropExpired"] = 14;
            values[valuesById[15] = "InviteRechargeNew"] = 15;
            values[valuesById[16] = "InviteValidDaysNew"] = 16;
            return values;
        })();

        /**
         * ReadState enum.
         * @name pbim.Msg.ReadState
         * @enum {number}
         * @property {number} Unread=0 Unread value
         * @property {number} Read=1 Read value
         * @property {number} Deleted=2 Deleted value
         */
        Msg.ReadState = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Unread"] = 0;
            values[valuesById[1] = "Read"] = 1;
            values[valuesById[2] = "Deleted"] = 2;
            return values;
        })();

        return Msg;
    })();

    pbim.MsgBodyTip = (function() {

        /**
         * Properties of a MsgBodyTip.
         * @memberof pbim
         * @interface IMsgBodyTip
         * @property {string|null} [icon] MsgBodyTip icon
         * @property {string|null} [content] MsgBodyTip content
         * @property {number|null} [prodTypeId] MsgBodyTip prodTypeId
         * @property {number|null} [prodId] MsgBodyTip prodId
         */

        /**
         * Constructs a new MsgBodyTip.
         * @memberof pbim
         * @classdesc Represents a MsgBodyTip.
         * @implements IMsgBodyTip
         * @constructor
         * @param {pbim.IMsgBodyTip=} [properties] Properties to set
         */
        function MsgBodyTip(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgBodyTip icon.
         * @member {string} icon
         * @memberof pbim.MsgBodyTip
         * @instance
         */
        MsgBodyTip.prototype.icon = "";

        /**
         * MsgBodyTip content.
         * @member {string} content
         * @memberof pbim.MsgBodyTip
         * @instance
         */
        MsgBodyTip.prototype.content = "";

        /**
         * MsgBodyTip prodTypeId.
         * @member {number} prodTypeId
         * @memberof pbim.MsgBodyTip
         * @instance
         */
        MsgBodyTip.prototype.prodTypeId = 0;

        /**
         * MsgBodyTip prodId.
         * @member {number} prodId
         * @memberof pbim.MsgBodyTip
         * @instance
         */
        MsgBodyTip.prototype.prodId = 0;

        /**
         * Creates a new MsgBodyTip instance using the specified properties.
         * @function create
         * @memberof pbim.MsgBodyTip
         * @static
         * @param {pbim.IMsgBodyTip=} [properties] Properties to set
         * @returns {pbim.MsgBodyTip} MsgBodyTip instance
         */
        MsgBodyTip.create = function create(properties) {
            return new MsgBodyTip(properties);
        };

        /**
         * Encodes the specified MsgBodyTip message. Does not implicitly {@link pbim.MsgBodyTip.verify|verify} messages.
         * @function encode
         * @memberof pbim.MsgBodyTip
         * @static
         * @param {pbim.IMsgBodyTip} message MsgBodyTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBodyTip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.icon);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            if (message.prodTypeId != null && Object.hasOwnProperty.call(message, "prodTypeId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.prodTypeId);
            if (message.prodId != null && Object.hasOwnProperty.call(message, "prodId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.prodId);
            return writer;
        };

        /**
         * Encodes the specified MsgBodyTip message, length delimited. Does not implicitly {@link pbim.MsgBodyTip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.MsgBodyTip
         * @static
         * @param {pbim.IMsgBodyTip} message MsgBodyTip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBodyTip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgBodyTip message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.MsgBodyTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.MsgBodyTip} MsgBodyTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBodyTip.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.MsgBodyTip();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.icon = reader.string();
                        break;
                    }
                case 2: {
                        message.content = reader.string();
                        break;
                    }
                case 3: {
                        message.prodTypeId = reader.int32();
                        break;
                    }
                case 4: {
                        message.prodId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgBodyTip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.MsgBodyTip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.MsgBodyTip} MsgBodyTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBodyTip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgBodyTip message.
         * @function verify
         * @memberof pbim.MsgBodyTip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgBodyTip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.prodTypeId != null && message.hasOwnProperty("prodTypeId"))
                if (!$util.isInteger(message.prodTypeId))
                    return "prodTypeId: integer expected";
            if (message.prodId != null && message.hasOwnProperty("prodId"))
                if (!$util.isInteger(message.prodId))
                    return "prodId: integer expected";
            return null;
        };

        /**
         * Creates a MsgBodyTip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.MsgBodyTip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.MsgBodyTip} MsgBodyTip
         */
        MsgBodyTip.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.MsgBodyTip)
                return object;
            var message = new $root.pbim.MsgBodyTip();
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.content != null)
                message.content = String(object.content);
            if (object.prodTypeId != null)
                message.prodTypeId = object.prodTypeId | 0;
            if (object.prodId != null)
                message.prodId = object.prodId | 0;
            return message;
        };

        /**
         * Creates a plain object from a MsgBodyTip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.MsgBodyTip
         * @static
         * @param {pbim.MsgBodyTip} message MsgBodyTip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgBodyTip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.icon = "";
                object.content = "";
                object.prodTypeId = 0;
                object.prodId = 0;
            }
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.prodTypeId != null && message.hasOwnProperty("prodTypeId"))
                object.prodTypeId = message.prodTypeId;
            if (message.prodId != null && message.hasOwnProperty("prodId"))
                object.prodId = message.prodId;
            return object;
        };

        /**
         * Converts this MsgBodyTip to JSON.
         * @function toJSON
         * @memberof pbim.MsgBodyTip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgBodyTip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MsgBodyTip
         * @function getTypeUrl
         * @memberof pbim.MsgBodyTip
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MsgBodyTip.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.MsgBodyTip";
        };

        return MsgBodyTip;
    })();

    pbim.MsgBodyChat = (function() {

        /**
         * Properties of a MsgBodyChat.
         * @memberof pbim
         * @interface IMsgBodyChat
         * @property {number|Long|null} [senderUid] MsgBodyChat senderUid
         * @property {string|null} [senderNick] MsgBodyChat senderNick
         * @property {string|null} [senderHead] MsgBodyChat senderHead
         * @property {number|Long|null} [receiverUid] MsgBodyChat receiverUid
         * @property {string|null} [receiverNick] MsgBodyChat receiverNick
         * @property {number|Long|null} [atUid] MsgBodyChat atUid
         * @property {string|null} [content] MsgBodyChat content
         */

        /**
         * Constructs a new MsgBodyChat.
         * @memberof pbim
         * @classdesc Represents a MsgBodyChat.
         * @implements IMsgBodyChat
         * @constructor
         * @param {pbim.IMsgBodyChat=} [properties] Properties to set
         */
        function MsgBodyChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgBodyChat senderUid.
         * @member {number|Long} senderUid
         * @memberof pbim.MsgBodyChat
         * @instance
         */
        MsgBodyChat.prototype.senderUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MsgBodyChat senderNick.
         * @member {string} senderNick
         * @memberof pbim.MsgBodyChat
         * @instance
         */
        MsgBodyChat.prototype.senderNick = "";

        /**
         * MsgBodyChat senderHead.
         * @member {string} senderHead
         * @memberof pbim.MsgBodyChat
         * @instance
         */
        MsgBodyChat.prototype.senderHead = "";

        /**
         * MsgBodyChat receiverUid.
         * @member {number|Long} receiverUid
         * @memberof pbim.MsgBodyChat
         * @instance
         */
        MsgBodyChat.prototype.receiverUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MsgBodyChat receiverNick.
         * @member {string} receiverNick
         * @memberof pbim.MsgBodyChat
         * @instance
         */
        MsgBodyChat.prototype.receiverNick = "";

        /**
         * MsgBodyChat atUid.
         * @member {number|Long} atUid
         * @memberof pbim.MsgBodyChat
         * @instance
         */
        MsgBodyChat.prototype.atUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MsgBodyChat content.
         * @member {string} content
         * @memberof pbim.MsgBodyChat
         * @instance
         */
        MsgBodyChat.prototype.content = "";

        /**
         * Creates a new MsgBodyChat instance using the specified properties.
         * @function create
         * @memberof pbim.MsgBodyChat
         * @static
         * @param {pbim.IMsgBodyChat=} [properties] Properties to set
         * @returns {pbim.MsgBodyChat} MsgBodyChat instance
         */
        MsgBodyChat.create = function create(properties) {
            return new MsgBodyChat(properties);
        };

        /**
         * Encodes the specified MsgBodyChat message. Does not implicitly {@link pbim.MsgBodyChat.verify|verify} messages.
         * @function encode
         * @memberof pbim.MsgBodyChat
         * @static
         * @param {pbim.IMsgBodyChat} message MsgBodyChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBodyChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderUid != null && Object.hasOwnProperty.call(message, "senderUid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.senderUid);
            if (message.senderNick != null && Object.hasOwnProperty.call(message, "senderNick"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.senderNick);
            if (message.senderHead != null && Object.hasOwnProperty.call(message, "senderHead"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.senderHead);
            if (message.receiverUid != null && Object.hasOwnProperty.call(message, "receiverUid"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.receiverUid);
            if (message.receiverNick != null && Object.hasOwnProperty.call(message, "receiverNick"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.receiverNick);
            if (message.atUid != null && Object.hasOwnProperty.call(message, "atUid"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.atUid);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified MsgBodyChat message, length delimited. Does not implicitly {@link pbim.MsgBodyChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.MsgBodyChat
         * @static
         * @param {pbim.IMsgBodyChat} message MsgBodyChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgBodyChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgBodyChat message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.MsgBodyChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.MsgBodyChat} MsgBodyChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBodyChat.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.MsgBodyChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.senderUid = reader.int64();
                        break;
                    }
                case 2: {
                        message.senderNick = reader.string();
                        break;
                    }
                case 3: {
                        message.senderHead = reader.string();
                        break;
                    }
                case 4: {
                        message.receiverUid = reader.int64();
                        break;
                    }
                case 5: {
                        message.receiverNick = reader.string();
                        break;
                    }
                case 6: {
                        message.atUid = reader.int64();
                        break;
                    }
                case 7: {
                        message.content = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgBodyChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.MsgBodyChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.MsgBodyChat} MsgBodyChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgBodyChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgBodyChat message.
         * @function verify
         * @memberof pbim.MsgBodyChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgBodyChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.senderUid != null && message.hasOwnProperty("senderUid"))
                if (!$util.isInteger(message.senderUid) && !(message.senderUid && $util.isInteger(message.senderUid.low) && $util.isInteger(message.senderUid.high)))
                    return "senderUid: integer|Long expected";
            if (message.senderNick != null && message.hasOwnProperty("senderNick"))
                if (!$util.isString(message.senderNick))
                    return "senderNick: string expected";
            if (message.senderHead != null && message.hasOwnProperty("senderHead"))
                if (!$util.isString(message.senderHead))
                    return "senderHead: string expected";
            if (message.receiverUid != null && message.hasOwnProperty("receiverUid"))
                if (!$util.isInteger(message.receiverUid) && !(message.receiverUid && $util.isInteger(message.receiverUid.low) && $util.isInteger(message.receiverUid.high)))
                    return "receiverUid: integer|Long expected";
            if (message.receiverNick != null && message.hasOwnProperty("receiverNick"))
                if (!$util.isString(message.receiverNick))
                    return "receiverNick: string expected";
            if (message.atUid != null && message.hasOwnProperty("atUid"))
                if (!$util.isInteger(message.atUid) && !(message.atUid && $util.isInteger(message.atUid.low) && $util.isInteger(message.atUid.high)))
                    return "atUid: integer|Long expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a MsgBodyChat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.MsgBodyChat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.MsgBodyChat} MsgBodyChat
         */
        MsgBodyChat.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.MsgBodyChat)
                return object;
            var message = new $root.pbim.MsgBodyChat();
            if (object.senderUid != null)
                if ($util.Long)
                    (message.senderUid = $util.Long.fromValue(object.senderUid)).unsigned = false;
                else if (typeof object.senderUid === "string")
                    message.senderUid = parseInt(object.senderUid, 10);
                else if (typeof object.senderUid === "number")
                    message.senderUid = object.senderUid;
                else if (typeof object.senderUid === "object")
                    message.senderUid = new $util.LongBits(object.senderUid.low >>> 0, object.senderUid.high >>> 0).toNumber();
            if (object.senderNick != null)
                message.senderNick = String(object.senderNick);
            if (object.senderHead != null)
                message.senderHead = String(object.senderHead);
            if (object.receiverUid != null)
                if ($util.Long)
                    (message.receiverUid = $util.Long.fromValue(object.receiverUid)).unsigned = false;
                else if (typeof object.receiverUid === "string")
                    message.receiverUid = parseInt(object.receiverUid, 10);
                else if (typeof object.receiverUid === "number")
                    message.receiverUid = object.receiverUid;
                else if (typeof object.receiverUid === "object")
                    message.receiverUid = new $util.LongBits(object.receiverUid.low >>> 0, object.receiverUid.high >>> 0).toNumber();
            if (object.receiverNick != null)
                message.receiverNick = String(object.receiverNick);
            if (object.atUid != null)
                if ($util.Long)
                    (message.atUid = $util.Long.fromValue(object.atUid)).unsigned = false;
                else if (typeof object.atUid === "string")
                    message.atUid = parseInt(object.atUid, 10);
                else if (typeof object.atUid === "number")
                    message.atUid = object.atUid;
                else if (typeof object.atUid === "object")
                    message.atUid = new $util.LongBits(object.atUid.low >>> 0, object.atUid.high >>> 0).toNumber();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a MsgBodyChat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.MsgBodyChat
         * @static
         * @param {pbim.MsgBodyChat} message MsgBodyChat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgBodyChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.senderUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.senderUid = options.longs === String ? "0" : 0;
                object.senderNick = "";
                object.senderHead = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.receiverUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiverUid = options.longs === String ? "0" : 0;
                object.receiverNick = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.atUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.atUid = options.longs === String ? "0" : 0;
                object.content = "";
            }
            if (message.senderUid != null && message.hasOwnProperty("senderUid"))
                if (typeof message.senderUid === "number")
                    object.senderUid = options.longs === String ? String(message.senderUid) : message.senderUid;
                else
                    object.senderUid = options.longs === String ? $util.Long.prototype.toString.call(message.senderUid) : options.longs === Number ? new $util.LongBits(message.senderUid.low >>> 0, message.senderUid.high >>> 0).toNumber() : message.senderUid;
            if (message.senderNick != null && message.hasOwnProperty("senderNick"))
                object.senderNick = message.senderNick;
            if (message.senderHead != null && message.hasOwnProperty("senderHead"))
                object.senderHead = message.senderHead;
            if (message.receiverUid != null && message.hasOwnProperty("receiverUid"))
                if (typeof message.receiverUid === "number")
                    object.receiverUid = options.longs === String ? String(message.receiverUid) : message.receiverUid;
                else
                    object.receiverUid = options.longs === String ? $util.Long.prototype.toString.call(message.receiverUid) : options.longs === Number ? new $util.LongBits(message.receiverUid.low >>> 0, message.receiverUid.high >>> 0).toNumber() : message.receiverUid;
            if (message.receiverNick != null && message.hasOwnProperty("receiverNick"))
                object.receiverNick = message.receiverNick;
            if (message.atUid != null && message.hasOwnProperty("atUid"))
                if (typeof message.atUid === "number")
                    object.atUid = options.longs === String ? String(message.atUid) : message.atUid;
                else
                    object.atUid = options.longs === String ? $util.Long.prototype.toString.call(message.atUid) : options.longs === Number ? new $util.LongBits(message.atUid.low >>> 0, message.atUid.high >>> 0).toNumber() : message.atUid;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this MsgBodyChat to JSON.
         * @function toJSON
         * @memberof pbim.MsgBodyChat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgBodyChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MsgBodyChat
         * @function getTypeUrl
         * @memberof pbim.MsgBodyChat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MsgBodyChat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.MsgBodyChat";
        };

        return MsgBodyChat;
    })();

    pbim.ChatModel = (function() {

        /**
         * Properties of a ChatModel.
         * @memberof pbim
         * @interface IChatModel
         * @property {number|Long|null} [id] ChatModel id
         * @property {string|null} [createdAt] ChatModel createdAt
         * @property {string|null} [updatedAt] ChatModel updatedAt
         * @property {string|null} [sessionId] ChatModel sessionId
         * @property {number|Long|null} [seq] ChatModel seq
         * @property {number|Long|null} [senderId] ChatModel senderId
         * @property {string|null} [senderNick] ChatModel senderNick
         * @property {string|null} [senderHead] ChatModel senderHead
         * @property {number|Long|null} [receiverId] ChatModel receiverId
         * @property {string|null} [receiverNick] ChatModel receiverNick
         * @property {number|Long|null} [atId] ChatModel atId
         * @property {number|null} [chatType] ChatModel chatType
         * @property {string|null} [content] ChatModel content
         * @property {string|null} [tm] ChatModel tm
         */

        /**
         * Constructs a new ChatModel.
         * @memberof pbim
         * @classdesc Represents a ChatModel.
         * @implements IChatModel
         * @constructor
         * @param {pbim.IChatModel=} [properties] Properties to set
         */
        function ChatModel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatModel id.
         * @member {number|Long} id
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatModel createdAt.
         * @member {string} createdAt
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.createdAt = "";

        /**
         * ChatModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.updatedAt = "";

        /**
         * ChatModel sessionId.
         * @member {string} sessionId
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.sessionId = "";

        /**
         * ChatModel seq.
         * @member {number|Long} seq
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatModel senderId.
         * @member {number|Long} senderId
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.senderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatModel senderNick.
         * @member {string} senderNick
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.senderNick = "";

        /**
         * ChatModel senderHead.
         * @member {string} senderHead
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.senderHead = "";

        /**
         * ChatModel receiverId.
         * @member {number|Long} receiverId
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.receiverId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatModel receiverNick.
         * @member {string} receiverNick
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.receiverNick = "";

        /**
         * ChatModel atId.
         * @member {number|Long} atId
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.atId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatModel chatType.
         * @member {number} chatType
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.chatType = 0;

        /**
         * ChatModel content.
         * @member {string} content
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.content = "";

        /**
         * ChatModel tm.
         * @member {string} tm
         * @memberof pbim.ChatModel
         * @instance
         */
        ChatModel.prototype.tm = "";

        /**
         * Creates a new ChatModel instance using the specified properties.
         * @function create
         * @memberof pbim.ChatModel
         * @static
         * @param {pbim.IChatModel=} [properties] Properties to set
         * @returns {pbim.ChatModel} ChatModel instance
         */
        ChatModel.create = function create(properties) {
            return new ChatModel(properties);
        };

        /**
         * Encodes the specified ChatModel message. Does not implicitly {@link pbim.ChatModel.verify|verify} messages.
         * @function encode
         * @memberof pbim.ChatModel
         * @static
         * @param {pbim.IChatModel} message ChatModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sessionId);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.seq);
            if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.senderId);
            if (message.senderNick != null && Object.hasOwnProperty.call(message, "senderNick"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.senderNick);
            if (message.senderHead != null && Object.hasOwnProperty.call(message, "senderHead"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.senderHead);
            if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.receiverId);
            if (message.receiverNick != null && Object.hasOwnProperty.call(message, "receiverNick"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.receiverNick);
            if (message.atId != null && Object.hasOwnProperty.call(message, "atId"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.atId);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.chatType);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.content);
            if (message.tm != null && Object.hasOwnProperty.call(message, "tm"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.tm);
            return writer;
        };

        /**
         * Encodes the specified ChatModel message, length delimited. Does not implicitly {@link pbim.ChatModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.ChatModel
         * @static
         * @param {pbim.IChatModel} message ChatModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.ChatModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.ChatModel} ChatModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatModel.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.ChatModel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int64();
                        break;
                    }
                case 2: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 3: {
                        message.updatedAt = reader.string();
                        break;
                    }
                case 4: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 5: {
                        message.seq = reader.int64();
                        break;
                    }
                case 6: {
                        message.senderId = reader.int64();
                        break;
                    }
                case 7: {
                        message.senderNick = reader.string();
                        break;
                    }
                case 8: {
                        message.senderHead = reader.string();
                        break;
                    }
                case 9: {
                        message.receiverId = reader.int64();
                        break;
                    }
                case 10: {
                        message.receiverNick = reader.string();
                        break;
                    }
                case 11: {
                        message.atId = reader.int64();
                        break;
                    }
                case 12: {
                        message.chatType = reader.int32();
                        break;
                    }
                case 13: {
                        message.content = reader.string();
                        break;
                    }
                case 14: {
                        message.tm = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChatModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.ChatModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.ChatModel} ChatModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatModel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatModel message.
         * @function verify
         * @memberof pbim.ChatModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatModel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                if (!$util.isInteger(message.senderId) && !(message.senderId && $util.isInteger(message.senderId.low) && $util.isInteger(message.senderId.high)))
                    return "senderId: integer|Long expected";
            if (message.senderNick != null && message.hasOwnProperty("senderNick"))
                if (!$util.isString(message.senderNick))
                    return "senderNick: string expected";
            if (message.senderHead != null && message.hasOwnProperty("senderHead"))
                if (!$util.isString(message.senderHead))
                    return "senderHead: string expected";
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                if (!$util.isInteger(message.receiverId) && !(message.receiverId && $util.isInteger(message.receiverId.low) && $util.isInteger(message.receiverId.high)))
                    return "receiverId: integer|Long expected";
            if (message.receiverNick != null && message.hasOwnProperty("receiverNick"))
                if (!$util.isString(message.receiverNick))
                    return "receiverNick: string expected";
            if (message.atId != null && message.hasOwnProperty("atId"))
                if (!$util.isInteger(message.atId) && !(message.atId && $util.isInteger(message.atId.low) && $util.isInteger(message.atId.high)))
                    return "atId: integer|Long expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                if (!$util.isInteger(message.chatType))
                    return "chatType: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.tm != null && message.hasOwnProperty("tm"))
                if (!$util.isString(message.tm))
                    return "tm: string expected";
            return null;
        };

        /**
         * Creates a ChatModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.ChatModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.ChatModel} ChatModel
         */
        ChatModel.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.ChatModel)
                return object;
            var message = new $root.pbim.ChatModel();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            if (object.senderId != null)
                if ($util.Long)
                    (message.senderId = $util.Long.fromValue(object.senderId)).unsigned = false;
                else if (typeof object.senderId === "string")
                    message.senderId = parseInt(object.senderId, 10);
                else if (typeof object.senderId === "number")
                    message.senderId = object.senderId;
                else if (typeof object.senderId === "object")
                    message.senderId = new $util.LongBits(object.senderId.low >>> 0, object.senderId.high >>> 0).toNumber();
            if (object.senderNick != null)
                message.senderNick = String(object.senderNick);
            if (object.senderHead != null)
                message.senderHead = String(object.senderHead);
            if (object.receiverId != null)
                if ($util.Long)
                    (message.receiverId = $util.Long.fromValue(object.receiverId)).unsigned = false;
                else if (typeof object.receiverId === "string")
                    message.receiverId = parseInt(object.receiverId, 10);
                else if (typeof object.receiverId === "number")
                    message.receiverId = object.receiverId;
                else if (typeof object.receiverId === "object")
                    message.receiverId = new $util.LongBits(object.receiverId.low >>> 0, object.receiverId.high >>> 0).toNumber();
            if (object.receiverNick != null)
                message.receiverNick = String(object.receiverNick);
            if (object.atId != null)
                if ($util.Long)
                    (message.atId = $util.Long.fromValue(object.atId)).unsigned = false;
                else if (typeof object.atId === "string")
                    message.atId = parseInt(object.atId, 10);
                else if (typeof object.atId === "number")
                    message.atId = object.atId;
                else if (typeof object.atId === "object")
                    message.atId = new $util.LongBits(object.atId.low >>> 0, object.atId.high >>> 0).toNumber();
            if (object.chatType != null)
                message.chatType = object.chatType | 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.tm != null)
                message.tm = String(object.tm);
            return message;
        };

        /**
         * Creates a plain object from a ChatModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.ChatModel
         * @static
         * @param {pbim.ChatModel} message ChatModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatModel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.createdAt = "";
                object.updatedAt = "";
                object.sessionId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.senderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.senderId = options.longs === String ? "0" : 0;
                object.senderNick = "";
                object.senderHead = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.receiverId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiverId = options.longs === String ? "0" : 0;
                object.receiverNick = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.atId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.atId = options.longs === String ? "0" : 0;
                object.chatType = 0;
                object.content = "";
                object.tm = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                if (typeof message.senderId === "number")
                    object.senderId = options.longs === String ? String(message.senderId) : message.senderId;
                else
                    object.senderId = options.longs === String ? $util.Long.prototype.toString.call(message.senderId) : options.longs === Number ? new $util.LongBits(message.senderId.low >>> 0, message.senderId.high >>> 0).toNumber() : message.senderId;
            if (message.senderNick != null && message.hasOwnProperty("senderNick"))
                object.senderNick = message.senderNick;
            if (message.senderHead != null && message.hasOwnProperty("senderHead"))
                object.senderHead = message.senderHead;
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                if (typeof message.receiverId === "number")
                    object.receiverId = options.longs === String ? String(message.receiverId) : message.receiverId;
                else
                    object.receiverId = options.longs === String ? $util.Long.prototype.toString.call(message.receiverId) : options.longs === Number ? new $util.LongBits(message.receiverId.low >>> 0, message.receiverId.high >>> 0).toNumber() : message.receiverId;
            if (message.receiverNick != null && message.hasOwnProperty("receiverNick"))
                object.receiverNick = message.receiverNick;
            if (message.atId != null && message.hasOwnProperty("atId"))
                if (typeof message.atId === "number")
                    object.atId = options.longs === String ? String(message.atId) : message.atId;
                else
                    object.atId = options.longs === String ? $util.Long.prototype.toString.call(message.atId) : options.longs === Number ? new $util.LongBits(message.atId.low >>> 0, message.atId.high >>> 0).toNumber() : message.atId;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                object.chatType = message.chatType;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.tm != null && message.hasOwnProperty("tm"))
                object.tm = message.tm;
            return object;
        };

        /**
         * Converts this ChatModel to JSON.
         * @function toJSON
         * @memberof pbim.ChatModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatModel
         * @function getTypeUrl
         * @memberof pbim.ChatModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.ChatModel";
        };

        return ChatModel;
    })();

    pbim.ReadSeqModel = (function() {

        /**
         * Properties of a ReadSeqModel.
         * @memberof pbim
         * @interface IReadSeqModel
         * @property {string|null} [sessionId] ReadSeqModel sessionId
         * @property {number|Long|null} [uid] ReadSeqModel uid
         * @property {number|Long|null} [seq] ReadSeqModel seq
         */

        /**
         * Constructs a new ReadSeqModel.
         * @memberof pbim
         * @classdesc Represents a ReadSeqModel.
         * @implements IReadSeqModel
         * @constructor
         * @param {pbim.IReadSeqModel=} [properties] Properties to set
         */
        function ReadSeqModel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReadSeqModel sessionId.
         * @member {string} sessionId
         * @memberof pbim.ReadSeqModel
         * @instance
         */
        ReadSeqModel.prototype.sessionId = "";

        /**
         * ReadSeqModel uid.
         * @member {number|Long} uid
         * @memberof pbim.ReadSeqModel
         * @instance
         */
        ReadSeqModel.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ReadSeqModel seq.
         * @member {number|Long} seq
         * @memberof pbim.ReadSeqModel
         * @instance
         */
        ReadSeqModel.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ReadSeqModel instance using the specified properties.
         * @function create
         * @memberof pbim.ReadSeqModel
         * @static
         * @param {pbim.IReadSeqModel=} [properties] Properties to set
         * @returns {pbim.ReadSeqModel} ReadSeqModel instance
         */
        ReadSeqModel.create = function create(properties) {
            return new ReadSeqModel(properties);
        };

        /**
         * Encodes the specified ReadSeqModel message. Does not implicitly {@link pbim.ReadSeqModel.verify|verify} messages.
         * @function encode
         * @memberof pbim.ReadSeqModel
         * @static
         * @param {pbim.IReadSeqModel} message ReadSeqModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadSeqModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sessionId);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.seq);
            return writer;
        };

        /**
         * Encodes the specified ReadSeqModel message, length delimited. Does not implicitly {@link pbim.ReadSeqModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.ReadSeqModel
         * @static
         * @param {pbim.IReadSeqModel} message ReadSeqModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReadSeqModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReadSeqModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.ReadSeqModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.ReadSeqModel} ReadSeqModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadSeqModel.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.ReadSeqModel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 2: {
                        message.uid = reader.int64();
                        break;
                    }
                case 3: {
                        message.seq = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReadSeqModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.ReadSeqModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.ReadSeqModel} ReadSeqModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReadSeqModel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReadSeqModel message.
         * @function verify
         * @memberof pbim.ReadSeqModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReadSeqModel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };

        /**
         * Creates a ReadSeqModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.ReadSeqModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.ReadSeqModel} ReadSeqModel
         */
        ReadSeqModel.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.ReadSeqModel)
                return object;
            var message = new $root.pbim.ReadSeqModel();
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.uid != null)
                if ($util.Long)
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ReadSeqModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.ReadSeqModel
         * @static
         * @param {pbim.ReadSeqModel} message ReadSeqModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReadSeqModel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.sessionId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (typeof message.uid === "number")
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            return object;
        };

        /**
         * Converts this ReadSeqModel to JSON.
         * @function toJSON
         * @memberof pbim.ReadSeqModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReadSeqModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ReadSeqModel
         * @function getTypeUrl
         * @memberof pbim.ReadSeqModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ReadSeqModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.ReadSeqModel";
        };

        return ReadSeqModel;
    })();

    pbim.MsgC2S = (function() {

        /**
         * Properties of a MsgC2S.
         * @memberof pbim
         * @interface IMsgC2S
         * @property {number|Long|null} [userId] MsgC2S userId
         * @property {string|null} [sessionId] MsgC2S sessionId
         * @property {number|null} [pageSize] MsgC2S pageSize
         * @property {number|null} [pageIndex] MsgC2S pageIndex
         * @property {number|Long|null} [sessionIdI64] MsgC2S sessionIdI64
         */

        /**
         * Constructs a new MsgC2S.
         * @memberof pbim
         * @classdesc Represents a MsgC2S.
         * @implements IMsgC2S
         * @constructor
         * @param {pbim.IMsgC2S=} [properties] Properties to set
         */
        function MsgC2S(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgC2S userId.
         * @member {number|Long} userId
         * @memberof pbim.MsgC2S
         * @instance
         */
        MsgC2S.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MsgC2S sessionId.
         * @member {string} sessionId
         * @memberof pbim.MsgC2S
         * @instance
         */
        MsgC2S.prototype.sessionId = "";

        /**
         * MsgC2S pageSize.
         * @member {number} pageSize
         * @memberof pbim.MsgC2S
         * @instance
         */
        MsgC2S.prototype.pageSize = 0;

        /**
         * MsgC2S pageIndex.
         * @member {number} pageIndex
         * @memberof pbim.MsgC2S
         * @instance
         */
        MsgC2S.prototype.pageIndex = 0;

        /**
         * MsgC2S sessionIdI64.
         * @member {number|Long} sessionIdI64
         * @memberof pbim.MsgC2S
         * @instance
         */
        MsgC2S.prototype.sessionIdI64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MsgC2S instance using the specified properties.
         * @function create
         * @memberof pbim.MsgC2S
         * @static
         * @param {pbim.IMsgC2S=} [properties] Properties to set
         * @returns {pbim.MsgC2S} MsgC2S instance
         */
        MsgC2S.create = function create(properties) {
            return new MsgC2S(properties);
        };

        /**
         * Encodes the specified MsgC2S message. Does not implicitly {@link pbim.MsgC2S.verify|verify} messages.
         * @function encode
         * @memberof pbim.MsgC2S
         * @static
         * @param {pbim.IMsgC2S} message MsgC2S message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgC2S.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionId);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageSize);
            if (message.pageIndex != null && Object.hasOwnProperty.call(message, "pageIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pageIndex);
            if (message.sessionIdI64 != null && Object.hasOwnProperty.call(message, "sessionIdI64"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.sessionIdI64);
            return writer;
        };

        /**
         * Encodes the specified MsgC2S message, length delimited. Does not implicitly {@link pbim.MsgC2S.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.MsgC2S
         * @static
         * @param {pbim.IMsgC2S} message MsgC2S message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgC2S.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgC2S message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.MsgC2S
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.MsgC2S} MsgC2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgC2S.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.MsgC2S();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 3: {
                        message.pageSize = reader.int32();
                        break;
                    }
                case 4: {
                        message.pageIndex = reader.int32();
                        break;
                    }
                case 5: {
                        message.sessionIdI64 = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgC2S message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.MsgC2S
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.MsgC2S} MsgC2S
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgC2S.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgC2S message.
         * @function verify
         * @memberof pbim.MsgC2S
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgC2S.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                if (!$util.isInteger(message.pageIndex))
                    return "pageIndex: integer expected";
            if (message.sessionIdI64 != null && message.hasOwnProperty("sessionIdI64"))
                if (!$util.isInteger(message.sessionIdI64) && !(message.sessionIdI64 && $util.isInteger(message.sessionIdI64.low) && $util.isInteger(message.sessionIdI64.high)))
                    return "sessionIdI64: integer|Long expected";
            return null;
        };

        /**
         * Creates a MsgC2S message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.MsgC2S
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.MsgC2S} MsgC2S
         */
        MsgC2S.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.MsgC2S)
                return object;
            var message = new $root.pbim.MsgC2S();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            if (object.pageIndex != null)
                message.pageIndex = object.pageIndex | 0;
            if (object.sessionIdI64 != null)
                if ($util.Long)
                    (message.sessionIdI64 = $util.Long.fromValue(object.sessionIdI64)).unsigned = false;
                else if (typeof object.sessionIdI64 === "string")
                    message.sessionIdI64 = parseInt(object.sessionIdI64, 10);
                else if (typeof object.sessionIdI64 === "number")
                    message.sessionIdI64 = object.sessionIdI64;
                else if (typeof object.sessionIdI64 === "object")
                    message.sessionIdI64 = new $util.LongBits(object.sessionIdI64.low >>> 0, object.sessionIdI64.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a MsgC2S message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.MsgC2S
         * @static
         * @param {pbim.MsgC2S} message MsgC2S
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgC2S.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.sessionId = "";
                object.pageSize = 0;
                object.pageIndex = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sessionIdI64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionIdI64 = options.longs === String ? "0" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.pageIndex != null && message.hasOwnProperty("pageIndex"))
                object.pageIndex = message.pageIndex;
            if (message.sessionIdI64 != null && message.hasOwnProperty("sessionIdI64"))
                if (typeof message.sessionIdI64 === "number")
                    object.sessionIdI64 = options.longs === String ? String(message.sessionIdI64) : message.sessionIdI64;
                else
                    object.sessionIdI64 = options.longs === String ? $util.Long.prototype.toString.call(message.sessionIdI64) : options.longs === Number ? new $util.LongBits(message.sessionIdI64.low >>> 0, message.sessionIdI64.high >>> 0).toNumber() : message.sessionIdI64;
            return object;
        };

        /**
         * Converts this MsgC2S to JSON.
         * @function toJSON
         * @memberof pbim.MsgC2S
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgC2S.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MsgC2S
         * @function getTypeUrl
         * @memberof pbim.MsgC2S
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MsgC2S.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.MsgC2S";
        };

        return MsgC2S;
    })();

    pbim.MsgS2C = (function() {

        /**
         * Properties of a MsgS2C.
         * @memberof pbim
         * @interface IMsgS2C
         * @property {Array.<pbim.IMsg>|null} [msgList] MsgS2C msgList
         * @property {number|Long|null} [userId] MsgS2C userId
         */

        /**
         * Constructs a new MsgS2C.
         * @memberof pbim
         * @classdesc Represents a MsgS2C.
         * @implements IMsgS2C
         * @constructor
         * @param {pbim.IMsgS2C=} [properties] Properties to set
         */
        function MsgS2C(properties) {
            this.msgList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgS2C msgList.
         * @member {Array.<pbim.IMsg>} msgList
         * @memberof pbim.MsgS2C
         * @instance
         */
        MsgS2C.prototype.msgList = $util.emptyArray;

        /**
         * MsgS2C userId.
         * @member {number|Long} userId
         * @memberof pbim.MsgS2C
         * @instance
         */
        MsgS2C.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MsgS2C instance using the specified properties.
         * @function create
         * @memberof pbim.MsgS2C
         * @static
         * @param {pbim.IMsgS2C=} [properties] Properties to set
         * @returns {pbim.MsgS2C} MsgS2C instance
         */
        MsgS2C.create = function create(properties) {
            return new MsgS2C(properties);
        };

        /**
         * Encodes the specified MsgS2C message. Does not implicitly {@link pbim.MsgS2C.verify|verify} messages.
         * @function encode
         * @memberof pbim.MsgS2C
         * @static
         * @param {pbim.IMsgS2C} message MsgS2C message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgS2C.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msgList != null && message.msgList.length)
                for (var i = 0; i < message.msgList.length; ++i)
                    $root.pbim.Msg.encode(message.msgList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified MsgS2C message, length delimited. Does not implicitly {@link pbim.MsgS2C.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.MsgS2C
         * @static
         * @param {pbim.IMsgS2C} message MsgS2C message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgS2C.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgS2C message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.MsgS2C
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.MsgS2C} MsgS2C
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgS2C.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.MsgS2C();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.msgList && message.msgList.length))
                            message.msgList = [];
                        message.msgList.push($root.pbim.Msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.userId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MsgS2C message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.MsgS2C
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.MsgS2C} MsgS2C
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgS2C.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgS2C message.
         * @function verify
         * @memberof pbim.MsgS2C
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgS2C.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msgList != null && message.hasOwnProperty("msgList")) {
                if (!Array.isArray(message.msgList))
                    return "msgList: array expected";
                for (var i = 0; i < message.msgList.length; ++i) {
                    var error = $root.pbim.Msg.verify(message.msgList[i]);
                    if (error)
                        return "msgList." + error;
                }
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a MsgS2C message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.MsgS2C
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.MsgS2C} MsgS2C
         */
        MsgS2C.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.MsgS2C)
                return object;
            var message = new $root.pbim.MsgS2C();
            if (object.msgList) {
                if (!Array.isArray(object.msgList))
                    throw TypeError(".pbim.MsgS2C.msgList: array expected");
                message.msgList = [];
                for (var i = 0; i < object.msgList.length; ++i) {
                    if (typeof object.msgList[i] !== "object")
                        throw TypeError(".pbim.MsgS2C.msgList: object expected");
                    message.msgList[i] = $root.pbim.Msg.fromObject(object.msgList[i]);
                }
            }
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a MsgS2C message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.MsgS2C
         * @static
         * @param {pbim.MsgS2C} message MsgS2C
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgS2C.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.msgList = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
            if (message.msgList && message.msgList.length) {
                object.msgList = [];
                for (var j = 0; j < message.msgList.length; ++j)
                    object.msgList[j] = $root.pbim.Msg.toObject(message.msgList[j], options);
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            return object;
        };

        /**
         * Converts this MsgS2C to JSON.
         * @function toJSON
         * @memberof pbim.MsgS2C
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgS2C.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MsgS2C
         * @function getTypeUrl
         * @memberof pbim.MsgS2C
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MsgS2C.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.MsgS2C";
        };

        return MsgS2C;
    })();

    pbim.FindImArgs = (function() {

        /**
         * Properties of a FindImArgs.
         * @memberof pbim
         * @interface IFindImArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindImArgs pageInfo
         * @property {pbim.IChatModel|null} [query] FindImArgs query
         */

        /**
         * Constructs a new FindImArgs.
         * @memberof pbim
         * @classdesc Represents a FindImArgs.
         * @implements IFindImArgs
         * @constructor
         * @param {pbim.IFindImArgs=} [properties] Properties to set
         */
        function FindImArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindImArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbim.FindImArgs
         * @instance
         */
        FindImArgs.prototype.pageInfo = null;

        /**
         * FindImArgs query.
         * @member {pbim.IChatModel|null|undefined} query
         * @memberof pbim.FindImArgs
         * @instance
         */
        FindImArgs.prototype.query = null;

        /**
         * Creates a new FindImArgs instance using the specified properties.
         * @function create
         * @memberof pbim.FindImArgs
         * @static
         * @param {pbim.IFindImArgs=} [properties] Properties to set
         * @returns {pbim.FindImArgs} FindImArgs instance
         */
        FindImArgs.create = function create(properties) {
            return new FindImArgs(properties);
        };

        /**
         * Encodes the specified FindImArgs message. Does not implicitly {@link pbim.FindImArgs.verify|verify} messages.
         * @function encode
         * @memberof pbim.FindImArgs
         * @static
         * @param {pbim.IFindImArgs} message FindImArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindImArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.pbim.ChatModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FindImArgs message, length delimited. Does not implicitly {@link pbim.FindImArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.FindImArgs
         * @static
         * @param {pbim.IFindImArgs} message FindImArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindImArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindImArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.FindImArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.FindImArgs} FindImArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindImArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.FindImArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.pageInfo = $root.pbcommon.PageInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.query = $root.pbim.ChatModel.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FindImArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.FindImArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.FindImArgs} FindImArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindImArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindImArgs message.
         * @function verify
         * @memberof pbim.FindImArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindImArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                var error = $root.pbim.ChatModel.verify(message.query);
                if (error)
                    return "query." + error;
            }
            return null;
        };

        /**
         * Creates a FindImArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.FindImArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.FindImArgs} FindImArgs
         */
        FindImArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.FindImArgs)
                return object;
            var message = new $root.pbim.FindImArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbim.FindImArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".pbim.FindImArgs.query: object expected");
                message.query = $root.pbim.ChatModel.fromObject(object.query);
            }
            return message;
        };

        /**
         * Creates a plain object from a FindImArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.FindImArgs
         * @static
         * @param {pbim.FindImArgs} message FindImArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindImArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pageInfo = null;
                object.query = null;
            }
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options);
            if (message.query != null && message.hasOwnProperty("query"))
                object.query = $root.pbim.ChatModel.toObject(message.query, options);
            return object;
        };

        /**
         * Converts this FindImArgs to JSON.
         * @function toJSON
         * @memberof pbim.FindImArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindImArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindImArgs
         * @function getTypeUrl
         * @memberof pbim.FindImArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindImArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.FindImArgs";
        };

        return FindImArgs;
    })();

    pbim.FindImReply = (function() {

        /**
         * Properties of a FindImReply.
         * @memberof pbim
         * @interface IFindImReply
         * @property {pbcommon.EnumCode|null} [code] FindImReply code
         * @property {string|null} [msg] FindImReply msg
         * @property {pbim.IChatModel|null} [data] FindImReply data
         * @property {Array.<pbim.IMsg>|null} [list] FindImReply list
         * @property {number|Long|null} [total] FindImReply total
         */

        /**
         * Constructs a new FindImReply.
         * @memberof pbim
         * @classdesc Represents a FindImReply.
         * @implements IFindImReply
         * @constructor
         * @param {pbim.IFindImReply=} [properties] Properties to set
         */
        function FindImReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindImReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbim.FindImReply
         * @instance
         */
        FindImReply.prototype.code = 0;

        /**
         * FindImReply msg.
         * @member {string} msg
         * @memberof pbim.FindImReply
         * @instance
         */
        FindImReply.prototype.msg = "";

        /**
         * FindImReply data.
         * @member {pbim.IChatModel|null|undefined} data
         * @memberof pbim.FindImReply
         * @instance
         */
        FindImReply.prototype.data = null;

        /**
         * FindImReply list.
         * @member {Array.<pbim.IMsg>} list
         * @memberof pbim.FindImReply
         * @instance
         */
        FindImReply.prototype.list = $util.emptyArray;

        /**
         * FindImReply total.
         * @member {number|Long} total
         * @memberof pbim.FindImReply
         * @instance
         */
        FindImReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindImReply instance using the specified properties.
         * @function create
         * @memberof pbim.FindImReply
         * @static
         * @param {pbim.IFindImReply=} [properties] Properties to set
         * @returns {pbim.FindImReply} FindImReply instance
         */
        FindImReply.create = function create(properties) {
            return new FindImReply(properties);
        };

        /**
         * Encodes the specified FindImReply message. Does not implicitly {@link pbim.FindImReply.verify|verify} messages.
         * @function encode
         * @memberof pbim.FindImReply
         * @static
         * @param {pbim.IFindImReply} message FindImReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindImReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbim.ChatModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbim.Msg.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindImReply message, length delimited. Does not implicitly {@link pbim.FindImReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.FindImReply
         * @static
         * @param {pbim.IFindImReply} message FindImReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindImReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindImReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.FindImReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.FindImReply} FindImReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindImReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.FindImReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.data = $root.pbim.ChatModel.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbim.Msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.total = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FindImReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.FindImReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.FindImReply} FindImReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindImReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindImReply message.
         * @function verify
         * @memberof pbim.FindImReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindImReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
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
                case 2015:
                case 3001:
                case 3002:
                case 3003:
                case 5001:
                case 5002:
                case 10001:
                case 10002:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbim.ChatModel.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbim.Msg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a FindImReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.FindImReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.FindImReply} FindImReply
         */
        FindImReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.FindImReply)
                return object;
            var message = new $root.pbim.FindImReply();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "None":
            case 0:
                message.code = 0;
                break;
            case "Success":
            case 200:
                message.code = 200;
                break;
            case "Forbidden":
            case 403:
                message.code = 403;
                break;
            case "Fail":
            case 500:
                message.code = 500;
                break;
            case "Unknown":
            case 501:
                message.code = 501;
                break;
            case "Internal":
            case 502:
                message.code = 502;
                break;
            case "Invalid":
            case 503:
                message.code = 503;
                break;
            case "InvalidParam":
            case 504:
                message.code = 504;
                break;
            case "ParamError":
            case 505:
                message.code = 505;
                break;
            case "FindError":
            case 1001:
                message.code = 1001;
                break;
            case "CreateError":
            case 1002:
                message.code = 1002;
                break;
            case "DeleteError":
            case 1003:
                message.code = 1003;
                break;
            case "UpdateError":
            case 1004:
                message.code = 1004;
                break;
            case "InvalidToken":
            case 2002:
                message.code = 2002;
                break;
            case "InvalidSign":
            case 2003:
                message.code = 2003;
                break;
            case "NotLogin":
            case 2004:
                message.code = 2004;
                break;
            case "LoginTimeout":
            case 2005:
                message.code = 2005;
                break;
            case "LoginError":
            case 2006:
                message.code = 2006;
                break;
            case "LoginForbidden":
            case 2007:
                message.code = 2007;
                break;
            case "LoginExpired":
            case 2008:
                message.code = 2008;
                break;
            case "LoginInvalid":
            case 2009:
                message.code = 2009;
                break;
            case "LoginInvalidPassword":
            case 2010:
                message.code = 2010;
                break;
            case "LoginInvalidUsername":
            case 2011:
                message.code = 2011;
                break;
            case "LoginInvalidEmail":
            case 2012:
                message.code = 2012;
                break;
            case "LoginInvalidPhone":
            case 2013:
                message.code = 2013;
                break;
            case "LoginInvalidUsernameOrEmail":
            case 2014:
                message.code = 2014;
                break;
            case "LoginSocketRepeat":
            case 2015:
                message.code = 2015;
                break;
            case "RoleIsNotExist":
            case 3001:
                message.code = 3001;
                break;
            case "UserIsExist":
            case 3002:
                message.code = 3002;
                break;
            case "UserIsBan":
            case 3003:
                message.code = 3003;
                break;
            case "TalkIsBan":
            case 5001:
                message.code = 5001;
                break;
            case "EnterRoomErr":
            case 5002:
                message.code = 5002;
                break;
            case "HalaChatNeedBuy":
            case 10001:
                message.code = 10001;
                break;
            case "HalaPriceOutRange":
            case 10002:
                message.code = 10002;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbim.FindImReply.data: object expected");
                message.data = $root.pbim.ChatModel.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbim.FindImReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbim.FindImReply.list: object expected");
                    message.list[i] = $root.pbim.Msg.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FindImReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.FindImReply
         * @static
         * @param {pbim.FindImReply} message FindImReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindImReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.msg = "";
                object.data = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.pbim.ChatModel.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbim.Msg.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindImReply to JSON.
         * @function toJSON
         * @memberof pbim.FindImReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindImReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindImReply
         * @function getTypeUrl
         * @memberof pbim.FindImReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindImReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.FindImReply";
        };

        return FindImReply;
    })();

    pbim.FindMsgArgs = (function() {

        /**
         * Properties of a FindMsgArgs.
         * @memberof pbim
         * @interface IFindMsgArgs
         * @property {number|Long|null} [userId] FindMsgArgs userId
         * @property {string|null} [sessionId] FindMsgArgs sessionId
         * @property {number|null} [prevSeq] FindMsgArgs prevSeq
         * @property {number|null} [limit] FindMsgArgs limit
         * @property {number|Long|null} [sessionIdI64] FindMsgArgs sessionIdI64
         */

        /**
         * Constructs a new FindMsgArgs.
         * @memberof pbim
         * @classdesc Represents a FindMsgArgs.
         * @implements IFindMsgArgs
         * @constructor
         * @param {pbim.IFindMsgArgs=} [properties] Properties to set
         */
        function FindMsgArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindMsgArgs userId.
         * @member {number|Long} userId
         * @memberof pbim.FindMsgArgs
         * @instance
         */
        FindMsgArgs.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FindMsgArgs sessionId.
         * @member {string} sessionId
         * @memberof pbim.FindMsgArgs
         * @instance
         */
        FindMsgArgs.prototype.sessionId = "";

        /**
         * FindMsgArgs prevSeq.
         * @member {number} prevSeq
         * @memberof pbim.FindMsgArgs
         * @instance
         */
        FindMsgArgs.prototype.prevSeq = 0;

        /**
         * FindMsgArgs limit.
         * @member {number} limit
         * @memberof pbim.FindMsgArgs
         * @instance
         */
        FindMsgArgs.prototype.limit = 0;

        /**
         * FindMsgArgs sessionIdI64.
         * @member {number|Long} sessionIdI64
         * @memberof pbim.FindMsgArgs
         * @instance
         */
        FindMsgArgs.prototype.sessionIdI64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindMsgArgs instance using the specified properties.
         * @function create
         * @memberof pbim.FindMsgArgs
         * @static
         * @param {pbim.IFindMsgArgs=} [properties] Properties to set
         * @returns {pbim.FindMsgArgs} FindMsgArgs instance
         */
        FindMsgArgs.create = function create(properties) {
            return new FindMsgArgs(properties);
        };

        /**
         * Encodes the specified FindMsgArgs message. Does not implicitly {@link pbim.FindMsgArgs.verify|verify} messages.
         * @function encode
         * @memberof pbim.FindMsgArgs
         * @static
         * @param {pbim.IFindMsgArgs} message FindMsgArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindMsgArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sessionId);
            if (message.prevSeq != null && Object.hasOwnProperty.call(message, "prevSeq"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.prevSeq);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.limit);
            if (message.sessionIdI64 != null && Object.hasOwnProperty.call(message, "sessionIdI64"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.sessionIdI64);
            return writer;
        };

        /**
         * Encodes the specified FindMsgArgs message, length delimited. Does not implicitly {@link pbim.FindMsgArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.FindMsgArgs
         * @static
         * @param {pbim.IFindMsgArgs} message FindMsgArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindMsgArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindMsgArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.FindMsgArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.FindMsgArgs} FindMsgArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindMsgArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.FindMsgArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.int64();
                        break;
                    }
                case 2: {
                        message.sessionId = reader.string();
                        break;
                    }
                case 3: {
                        message.prevSeq = reader.int32();
                        break;
                    }
                case 4: {
                        message.limit = reader.int32();
                        break;
                    }
                case 5: {
                        message.sessionIdI64 = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FindMsgArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.FindMsgArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.FindMsgArgs} FindMsgArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindMsgArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindMsgArgs message.
         * @function verify
         * @memberof pbim.FindMsgArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindMsgArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                if (!$util.isString(message.sessionId))
                    return "sessionId: string expected";
            if (message.prevSeq != null && message.hasOwnProperty("prevSeq"))
                if (!$util.isInteger(message.prevSeq))
                    return "prevSeq: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            if (message.sessionIdI64 != null && message.hasOwnProperty("sessionIdI64"))
                if (!$util.isInteger(message.sessionIdI64) && !(message.sessionIdI64 && $util.isInteger(message.sessionIdI64.low) && $util.isInteger(message.sessionIdI64.high)))
                    return "sessionIdI64: integer|Long expected";
            return null;
        };

        /**
         * Creates a FindMsgArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.FindMsgArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.FindMsgArgs} FindMsgArgs
         */
        FindMsgArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.FindMsgArgs)
                return object;
            var message = new $root.pbim.FindMsgArgs();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.sessionId != null)
                message.sessionId = String(object.sessionId);
            if (object.prevSeq != null)
                message.prevSeq = object.prevSeq | 0;
            if (object.limit != null)
                message.limit = object.limit | 0;
            if (object.sessionIdI64 != null)
                if ($util.Long)
                    (message.sessionIdI64 = $util.Long.fromValue(object.sessionIdI64)).unsigned = false;
                else if (typeof object.sessionIdI64 === "string")
                    message.sessionIdI64 = parseInt(object.sessionIdI64, 10);
                else if (typeof object.sessionIdI64 === "number")
                    message.sessionIdI64 = object.sessionIdI64;
                else if (typeof object.sessionIdI64 === "object")
                    message.sessionIdI64 = new $util.LongBits(object.sessionIdI64.low >>> 0, object.sessionIdI64.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FindMsgArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.FindMsgArgs
         * @static
         * @param {pbim.FindMsgArgs} message FindMsgArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindMsgArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.sessionId = "";
                object.prevSeq = 0;
                object.limit = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sessionIdI64 = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sessionIdI64 = options.longs === String ? "0" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.sessionId != null && message.hasOwnProperty("sessionId"))
                object.sessionId = message.sessionId;
            if (message.prevSeq != null && message.hasOwnProperty("prevSeq"))
                object.prevSeq = message.prevSeq;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            if (message.sessionIdI64 != null && message.hasOwnProperty("sessionIdI64"))
                if (typeof message.sessionIdI64 === "number")
                    object.sessionIdI64 = options.longs === String ? String(message.sessionIdI64) : message.sessionIdI64;
                else
                    object.sessionIdI64 = options.longs === String ? $util.Long.prototype.toString.call(message.sessionIdI64) : options.longs === Number ? new $util.LongBits(message.sessionIdI64.low >>> 0, message.sessionIdI64.high >>> 0).toNumber() : message.sessionIdI64;
            return object;
        };

        /**
         * Converts this FindMsgArgs to JSON.
         * @function toJSON
         * @memberof pbim.FindMsgArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindMsgArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindMsgArgs
         * @function getTypeUrl
         * @memberof pbim.FindMsgArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindMsgArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.FindMsgArgs";
        };

        return FindMsgArgs;
    })();

    pbim.FindMsgReply = (function() {

        /**
         * Properties of a FindMsgReply.
         * @memberof pbim
         * @interface IFindMsgReply
         * @property {pbcommon.EnumCode|null} [code] FindMsgReply code
         * @property {string|null} [msg] FindMsgReply msg
         * @property {pbim.IMsg|null} [data] FindMsgReply data
         * @property {Array.<pbim.IMsg>|null} [list] FindMsgReply list
         * @property {number|Long|null} [total] FindMsgReply total
         */

        /**
         * Constructs a new FindMsgReply.
         * @memberof pbim
         * @classdesc Represents a FindMsgReply.
         * @implements IFindMsgReply
         * @constructor
         * @param {pbim.IFindMsgReply=} [properties] Properties to set
         */
        function FindMsgReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindMsgReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbim.FindMsgReply
         * @instance
         */
        FindMsgReply.prototype.code = 0;

        /**
         * FindMsgReply msg.
         * @member {string} msg
         * @memberof pbim.FindMsgReply
         * @instance
         */
        FindMsgReply.prototype.msg = "";

        /**
         * FindMsgReply data.
         * @member {pbim.IMsg|null|undefined} data
         * @memberof pbim.FindMsgReply
         * @instance
         */
        FindMsgReply.prototype.data = null;

        /**
         * FindMsgReply list.
         * @member {Array.<pbim.IMsg>} list
         * @memberof pbim.FindMsgReply
         * @instance
         */
        FindMsgReply.prototype.list = $util.emptyArray;

        /**
         * FindMsgReply total.
         * @member {number|Long} total
         * @memberof pbim.FindMsgReply
         * @instance
         */
        FindMsgReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindMsgReply instance using the specified properties.
         * @function create
         * @memberof pbim.FindMsgReply
         * @static
         * @param {pbim.IFindMsgReply=} [properties] Properties to set
         * @returns {pbim.FindMsgReply} FindMsgReply instance
         */
        FindMsgReply.create = function create(properties) {
            return new FindMsgReply(properties);
        };

        /**
         * Encodes the specified FindMsgReply message. Does not implicitly {@link pbim.FindMsgReply.verify|verify} messages.
         * @function encode
         * @memberof pbim.FindMsgReply
         * @static
         * @param {pbim.IFindMsgReply} message FindMsgReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindMsgReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbim.Msg.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbim.Msg.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindMsgReply message, length delimited. Does not implicitly {@link pbim.FindMsgReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbim.FindMsgReply
         * @static
         * @param {pbim.IFindMsgReply} message FindMsgReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindMsgReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindMsgReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbim.FindMsgReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbim.FindMsgReply} FindMsgReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindMsgReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbim.FindMsgReply();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.int32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                case 3: {
                        message.data = $root.pbim.Msg.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbim.Msg.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.total = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FindMsgReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbim.FindMsgReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbim.FindMsgReply} FindMsgReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindMsgReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindMsgReply message.
         * @function verify
         * @memberof pbim.FindMsgReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindMsgReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
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
                case 2015:
                case 3001:
                case 3002:
                case 3003:
                case 5001:
                case 5002:
                case 10001:
                case 10002:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbim.Msg.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbim.Msg.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            return null;
        };

        /**
         * Creates a FindMsgReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbim.FindMsgReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbim.FindMsgReply} FindMsgReply
         */
        FindMsgReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbim.FindMsgReply)
                return object;
            var message = new $root.pbim.FindMsgReply();
            switch (object.code) {
            default:
                if (typeof object.code === "number") {
                    message.code = object.code;
                    break;
                }
                break;
            case "None":
            case 0:
                message.code = 0;
                break;
            case "Success":
            case 200:
                message.code = 200;
                break;
            case "Forbidden":
            case 403:
                message.code = 403;
                break;
            case "Fail":
            case 500:
                message.code = 500;
                break;
            case "Unknown":
            case 501:
                message.code = 501;
                break;
            case "Internal":
            case 502:
                message.code = 502;
                break;
            case "Invalid":
            case 503:
                message.code = 503;
                break;
            case "InvalidParam":
            case 504:
                message.code = 504;
                break;
            case "ParamError":
            case 505:
                message.code = 505;
                break;
            case "FindError":
            case 1001:
                message.code = 1001;
                break;
            case "CreateError":
            case 1002:
                message.code = 1002;
                break;
            case "DeleteError":
            case 1003:
                message.code = 1003;
                break;
            case "UpdateError":
            case 1004:
                message.code = 1004;
                break;
            case "InvalidToken":
            case 2002:
                message.code = 2002;
                break;
            case "InvalidSign":
            case 2003:
                message.code = 2003;
                break;
            case "NotLogin":
            case 2004:
                message.code = 2004;
                break;
            case "LoginTimeout":
            case 2005:
                message.code = 2005;
                break;
            case "LoginError":
            case 2006:
                message.code = 2006;
                break;
            case "LoginForbidden":
            case 2007:
                message.code = 2007;
                break;
            case "LoginExpired":
            case 2008:
                message.code = 2008;
                break;
            case "LoginInvalid":
            case 2009:
                message.code = 2009;
                break;
            case "LoginInvalidPassword":
            case 2010:
                message.code = 2010;
                break;
            case "LoginInvalidUsername":
            case 2011:
                message.code = 2011;
                break;
            case "LoginInvalidEmail":
            case 2012:
                message.code = 2012;
                break;
            case "LoginInvalidPhone":
            case 2013:
                message.code = 2013;
                break;
            case "LoginInvalidUsernameOrEmail":
            case 2014:
                message.code = 2014;
                break;
            case "LoginSocketRepeat":
            case 2015:
                message.code = 2015;
                break;
            case "RoleIsNotExist":
            case 3001:
                message.code = 3001;
                break;
            case "UserIsExist":
            case 3002:
                message.code = 3002;
                break;
            case "UserIsBan":
            case 3003:
                message.code = 3003;
                break;
            case "TalkIsBan":
            case 5001:
                message.code = 5001;
                break;
            case "EnterRoomErr":
            case 5002:
                message.code = 5002;
                break;
            case "HalaChatNeedBuy":
            case 10001:
                message.code = 10001;
                break;
            case "HalaPriceOutRange":
            case 10002:
                message.code = 10002;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbim.FindMsgReply.data: object expected");
                message.data = $root.pbim.Msg.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbim.FindMsgReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbim.FindMsgReply.list: object expected");
                    message.list[i] = $root.pbim.Msg.fromObject(object.list[i]);
                }
            }
            if (object.total != null)
                if ($util.Long)
                    (message.total = $util.Long.fromValue(object.total)).unsigned = false;
                else if (typeof object.total === "string")
                    message.total = parseInt(object.total, 10);
                else if (typeof object.total === "number")
                    message.total = object.total;
                else if (typeof object.total === "object")
                    message.total = new $util.LongBits(object.total.low >>> 0, object.total.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FindMsgReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbim.FindMsgReply
         * @static
         * @param {pbim.FindMsgReply} message FindMsgReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindMsgReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.msg = "";
                object.data = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.pbim.Msg.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbim.Msg.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindMsgReply to JSON.
         * @function toJSON
         * @memberof pbim.FindMsgReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindMsgReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindMsgReply
         * @function getTypeUrl
         * @memberof pbim.FindMsgReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindMsgReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbim.FindMsgReply";
        };

        return FindMsgReply;
    })();

    pbim.Im = (function() {

        /**
         * Constructs a new Im service.
         * @memberof pbim
         * @classdesc Represents an Im
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Im(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Im.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Im;

        /**
         * Creates new Im service using the specified rpc implementation.
         * @function create
         * @memberof pbim.Im
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Im} RPC service. Useful where requests and/or responses are streamed.
         */
        Im.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbim.Im#createIm}.
         * @memberof pbim.Im
         * @typedef CreateImCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CreateIm.
         * @function createIm
         * @memberof pbim.Im
         * @instance
         * @param {pbim.IChatModel} request ChatModel message or plain object
         * @param {pbim.Im.CreateImCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Im.prototype.createIm = function createIm(request, callback) {
            return this.rpcCall(createIm, $root.pbim.ChatModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateIm" });

        /**
         * Calls CreateIm.
         * @function createIm
         * @memberof pbim.Im
         * @instance
         * @param {pbim.IChatModel} request ChatModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbim.Im#updateIm}.
         * @memberof pbim.Im
         * @typedef UpdateImCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls UpdateIm.
         * @function updateIm
         * @memberof pbim.Im
         * @instance
         * @param {pbim.IChatModel} request ChatModel message or plain object
         * @param {pbim.Im.UpdateImCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Im.prototype.updateIm = function updateIm(request, callback) {
            return this.rpcCall(updateIm, $root.pbim.ChatModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateIm" });

        /**
         * Calls UpdateIm.
         * @function updateIm
         * @memberof pbim.Im
         * @instance
         * @param {pbim.IChatModel} request ChatModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbim.Im#deleteIm}.
         * @memberof pbim.Im
         * @typedef DeleteImCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls DeleteIm.
         * @function deleteIm
         * @memberof pbim.Im
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbim.Im.DeleteImCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Im.prototype.deleteIm = function deleteIm(request, callback) {
            return this.rpcCall(deleteIm, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteIm" });

        /**
         * Calls DeleteIm.
         * @function deleteIm
         * @memberof pbim.Im
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbim.Im#findImById}.
         * @memberof pbim.Im
         * @typedef FindImByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbim.FindImReply} [response] FindImReply
         */

        /**
         * Calls FindImById.
         * @function findImById
         * @memberof pbim.Im
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbim.Im.FindImByIdCallback} callback Node-style callback called with the error, if any, and FindImReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Im.prototype.findImById = function findImById(request, callback) {
            return this.rpcCall(findImById, $root.pbcommon.IdArgs, $root.pbim.FindImReply, request, callback);
        }, "name", { value: "FindImById" });

        /**
         * Calls FindImById.
         * @function findImById
         * @memberof pbim.Im
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbim.FindImReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbim.Im#findImList}.
         * @memberof pbim.Im
         * @typedef FindImListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbim.FindImReply} [response] FindImReply
         */

        /**
         * Calls FindImList.
         * @function findImList
         * @memberof pbim.Im
         * @instance
         * @param {pbim.IFindImArgs} request FindImArgs message or plain object
         * @param {pbim.Im.FindImListCallback} callback Node-style callback called with the error, if any, and FindImReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Im.prototype.findImList = function findImList(request, callback) {
            return this.rpcCall(findImList, $root.pbim.FindImArgs, $root.pbim.FindImReply, request, callback);
        }, "name", { value: "FindImList" });

        /**
         * Calls FindImList.
         * @function findImList
         * @memberof pbim.Im
         * @instance
         * @param {pbim.IFindImArgs} request FindImArgs message or plain object
         * @returns {Promise<pbim.FindImReply>} Promise
         * @variation 2
         */

        return Im;
    })();

    return pbim;
})();

module.exports = $root;
