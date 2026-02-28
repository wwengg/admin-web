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
     * @property {number} GamePhaseNotMatch=20001 GamePhaseNotMatch value
     * @property {number} GameNotStarted=20002 GameNotStarted value
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
        values[valuesById[20001] = "GamePhaseNotMatch"] = 20001;
        values[valuesById[20002] = "GameNotStarted"] = 20002;
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
                case 20001:
                case 20002:
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
            case "GamePhaseNotMatch":
            case 20001:
                message.code = 20001;
                break;
            case "GameNotStarted":
            case 20002:
                message.code = 20002;
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
                case 20001:
                case 20002:
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
            case "GamePhaseNotMatch":
            case 20001:
                message.code = 20001;
                break;
            case "GameNotStarted":
            case 20002:
                message.code = 20002;
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
                case 20001:
                case 20002:
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
            case "GamePhaseNotMatch":
            case 20001:
                message.code = 20001;
                break;
            case "GameNotStarted":
            case 20002:
                message.code = 20002;
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

$root.pbsocket = (function() {

    /**
     * Namespace pbsocket.
     * @exports pbsocket
     * @namespace
     */
    var pbsocket = {};

    /**
     * CmdEnum enum.
     * @name pbsocket.CmdEnum
     * @enum {number}
     * @property {number} CmdNone=0 CmdNone value
     * @property {number} Ping=1 Ping value
     * @property {number} ErrorInfoS2C=2 ErrorInfoS2C value
     * @property {number} NewTokenS2C=3 NewTokenS2C value
     * @property {number} ConnLost=4 ConnLost value
     * @property {number} LoginC2S2C=5 LoginC2S2C value
     * @property {number} LoginOutC2S2C=6 LoginOutC2S2C value
     * @property {number} ChatC2S2C=1001 ChatC2S2C value
     * @property {number} EnterRoomC2S2C=1002 EnterRoomC2S2C value
     * @property {number} UserEnterRoomS2C=1003 UserEnterRoomS2C value
     * @property {number} ExitRoomC2S2C=1004 ExitRoomC2S2C value
     * @property {number} UserExistRoomS2C=1005 UserExistRoomS2C value
     * @property {number} SessionC2S2C=2001 SessionC2S2C value
     * @property {number} MsgC2S2C=2002 MsgC2S2C value
     * @property {number} ReadC2S2C=2003 ReadC2S2C value
     * @property {number} MsgC2S=2011 MsgC2S value
     * @property {number} MsgS2C=2012 MsgS2C value
     * @property {number} SessionC2S=2013 SessionC2S value
     * @property {number} SessionS2C=2014 SessionS2C value
     * @property {number} SendMsgC2S=2015 SendMsgC2S value
     * @property {number} ReadC2S=2016 ReadC2S value
     * @property {number} V3MsgC2S=2021 V3MsgC2S value
     * @property {number} V3MsgS2C=2022 V3MsgS2C value
     * @property {number} V3SessionS2C=2023 V3SessionS2C value
     * @property {number} V3StreamMsgS2C=2024 V3StreamMsgS2C value
     * @property {number} BattleEnterRoomC2S2C=3001 BattleEnterRoomC2S2C value
     * @property {number} BattleExitRoomC2S2C=3002 BattleExitRoomC2S2C value
     * @property {number} BattleAssistC2S=3003 BattleAssistC2S value
     * @property {number} BattleRepeatAssistC2S=3004 BattleRepeatAssistC2S value
     * @property {number} BattleGetStateC2S=3005 BattleGetStateC2S value
     * @property {number} BattleGetHistoryC2S=3006 BattleGetHistoryC2S value
     * @property {number} BattleCountdownS2C=3100 BattleCountdownS2C value
     * @property {number} BattleResultS2C=3101 BattleResultS2C value
     * @property {number} BattleAssistBroadcastS2C=3102 BattleAssistBroadcastS2C value
     * @property {number} BattleStateSyncS2C=3103 BattleStateSyncS2C value
     */
    pbsocket.CmdEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CmdNone"] = 0;
        values[valuesById[1] = "Ping"] = 1;
        values[valuesById[2] = "ErrorInfoS2C"] = 2;
        values[valuesById[3] = "NewTokenS2C"] = 3;
        values[valuesById[4] = "ConnLost"] = 4;
        values[valuesById[5] = "LoginC2S2C"] = 5;
        values[valuesById[6] = "LoginOutC2S2C"] = 6;
        values[valuesById[1001] = "ChatC2S2C"] = 1001;
        values[valuesById[1002] = "EnterRoomC2S2C"] = 1002;
        values[valuesById[1003] = "UserEnterRoomS2C"] = 1003;
        values[valuesById[1004] = "ExitRoomC2S2C"] = 1004;
        values[valuesById[1005] = "UserExistRoomS2C"] = 1005;
        values[valuesById[2001] = "SessionC2S2C"] = 2001;
        values[valuesById[2002] = "MsgC2S2C"] = 2002;
        values[valuesById[2003] = "ReadC2S2C"] = 2003;
        values[valuesById[2011] = "MsgC2S"] = 2011;
        values[valuesById[2012] = "MsgS2C"] = 2012;
        values[valuesById[2013] = "SessionC2S"] = 2013;
        values[valuesById[2014] = "SessionS2C"] = 2014;
        values[valuesById[2015] = "SendMsgC2S"] = 2015;
        values[valuesById[2016] = "ReadC2S"] = 2016;
        values[valuesById[2021] = "V3MsgC2S"] = 2021;
        values[valuesById[2022] = "V3MsgS2C"] = 2022;
        values[valuesById[2023] = "V3SessionS2C"] = 2023;
        values[valuesById[2024] = "V3StreamMsgS2C"] = 2024;
        values[valuesById[3001] = "BattleEnterRoomC2S2C"] = 3001;
        values[valuesById[3002] = "BattleExitRoomC2S2C"] = 3002;
        values[valuesById[3003] = "BattleAssistC2S"] = 3003;
        values[valuesById[3004] = "BattleRepeatAssistC2S"] = 3004;
        values[valuesById[3005] = "BattleGetStateC2S"] = 3005;
        values[valuesById[3006] = "BattleGetHistoryC2S"] = 3006;
        values[valuesById[3100] = "BattleCountdownS2C"] = 3100;
        values[valuesById[3101] = "BattleResultS2C"] = 3101;
        values[valuesById[3102] = "BattleAssistBroadcastS2C"] = 3102;
        values[valuesById[3103] = "BattleStateSyncS2C"] = 3103;
        return values;
    })();

    /**
     * SocketVersion enum.
     * @name pbsocket.SocketVersion
     * @enum {number}
     * @property {number} Default=0 Default value
     * @property {number} V1=1 V1 value
     */
    pbsocket.SocketVersion = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Default"] = 0;
        values[valuesById[1] = "V1"] = 1;
        return values;
    })();

    pbsocket.SocketEmpty = (function() {

        /**
         * Properties of a SocketEmpty.
         * @memberof pbsocket
         * @interface ISocketEmpty
         */

        /**
         * Constructs a new SocketEmpty.
         * @memberof pbsocket
         * @classdesc Represents a SocketEmpty.
         * @implements ISocketEmpty
         * @constructor
         * @param {pbsocket.ISocketEmpty=} [properties] Properties to set
         */
        function SocketEmpty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new SocketEmpty instance using the specified properties.
         * @function create
         * @memberof pbsocket.SocketEmpty
         * @static
         * @param {pbsocket.ISocketEmpty=} [properties] Properties to set
         * @returns {pbsocket.SocketEmpty} SocketEmpty instance
         */
        SocketEmpty.create = function create(properties) {
            return new SocketEmpty(properties);
        };

        /**
         * Encodes the specified SocketEmpty message. Does not implicitly {@link pbsocket.SocketEmpty.verify|verify} messages.
         * @function encode
         * @memberof pbsocket.SocketEmpty
         * @static
         * @param {pbsocket.ISocketEmpty} message SocketEmpty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SocketEmpty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified SocketEmpty message, length delimited. Does not implicitly {@link pbsocket.SocketEmpty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbsocket.SocketEmpty
         * @static
         * @param {pbsocket.ISocketEmpty} message SocketEmpty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SocketEmpty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SocketEmpty message from the specified reader or buffer.
         * @function decode
         * @memberof pbsocket.SocketEmpty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbsocket.SocketEmpty} SocketEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SocketEmpty.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbsocket.SocketEmpty();
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
         * Decodes a SocketEmpty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbsocket.SocketEmpty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbsocket.SocketEmpty} SocketEmpty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SocketEmpty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SocketEmpty message.
         * @function verify
         * @memberof pbsocket.SocketEmpty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SocketEmpty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a SocketEmpty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbsocket.SocketEmpty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbsocket.SocketEmpty} SocketEmpty
         */
        SocketEmpty.fromObject = function fromObject(object) {
            if (object instanceof $root.pbsocket.SocketEmpty)
                return object;
            return new $root.pbsocket.SocketEmpty();
        };

        /**
         * Creates a plain object from a SocketEmpty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbsocket.SocketEmpty
         * @static
         * @param {pbsocket.SocketEmpty} message SocketEmpty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SocketEmpty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this SocketEmpty to JSON.
         * @function toJSON
         * @memberof pbsocket.SocketEmpty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SocketEmpty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SocketEmpty
         * @function getTypeUrl
         * @memberof pbsocket.SocketEmpty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SocketEmpty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbsocket.SocketEmpty";
        };

        return SocketEmpty;
    })();

    pbsocket.Request = (function() {

        /**
         * Constructs a new Request service.
         * @memberof pbsocket
         * @classdesc Represents a Request
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Request(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Request.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Request;

        /**
         * Creates new Request service using the specified rpc implementation.
         * @function create
         * @memberof pbsocket.Request
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Request} RPC service. Useful where requests and/or responses are streamed.
         */
        Request.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbsocket.Request#enterRoom}.
         * @memberof pbsocket.Request
         * @typedef EnterRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbsocket.SocketEmpty} [response] SocketEmpty
         */

        /**
         * Calls EnterRoom.
         * @function enterRoom
         * @memberof pbsocket.Request
         * @instance
         * @param {pbsocket.IEnterRoomArgs} request EnterRoomArgs message or plain object
         * @param {pbsocket.Request.EnterRoomCallback} callback Node-style callback called with the error, if any, and SocketEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Request.prototype.enterRoom = function enterRoom(request, callback) {
            return this.rpcCall(enterRoom, $root.pbsocket.EnterRoomArgs, $root.pbsocket.SocketEmpty, request, callback);
        }, "name", { value: "EnterRoom" });

        /**
         * Calls EnterRoom.
         * @function enterRoom
         * @memberof pbsocket.Request
         * @instance
         * @param {pbsocket.IEnterRoomArgs} request EnterRoomArgs message or plain object
         * @returns {Promise<pbsocket.SocketEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbsocket.Request#chatC2S2C}.
         * @memberof pbsocket.Request
         * @typedef ChatC2S2CCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbchat.ChatModel} [response] ChatModel
         */

        /**
         * Calls ChatC2S2C.
         * @function chatC2S2C
         * @memberof pbsocket.Request
         * @instance
         * @param {pbchat.IChatModel} request ChatModel message or plain object
         * @param {pbsocket.Request.ChatC2S2CCallback} callback Node-style callback called with the error, if any, and ChatModel
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Request.prototype.chatC2S2C = function chatC2S2C(request, callback) {
            return this.rpcCall(chatC2S2C, $root.pbchat.ChatModel, $root.pbchat.ChatModel, request, callback);
        }, "name", { value: "ChatC2S2C" });

        /**
         * Calls ChatC2S2C.
         * @function chatC2S2C
         * @memberof pbsocket.Request
         * @instance
         * @param {pbchat.IChatModel} request ChatModel message or plain object
         * @returns {Promise<pbchat.ChatModel>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbsocket.Request#getOfflineChatList}.
         * @memberof pbsocket.Request
         * @typedef GetOfflineChatListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbchat.FindChatReply} [response] FindChatReply
         */

        /**
         * Calls GetOfflineChatList.
         * @function getOfflineChatList
         * @memberof pbsocket.Request
         * @instance
         * @param {pbcommon.IPageInfo} request PageInfo message or plain object
         * @param {pbsocket.Request.GetOfflineChatListCallback} callback Node-style callback called with the error, if any, and FindChatReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Request.prototype.getOfflineChatList = function getOfflineChatList(request, callback) {
            return this.rpcCall(getOfflineChatList, $root.pbcommon.PageInfo, $root.pbchat.FindChatReply, request, callback);
        }, "name", { value: "GetOfflineChatList" });

        /**
         * Calls GetOfflineChatList.
         * @function getOfflineChatList
         * @memberof pbsocket.Request
         * @instance
         * @param {pbcommon.IPageInfo} request PageInfo message or plain object
         * @returns {Promise<pbchat.FindChatReply>} Promise
         * @variation 2
         */

        return Request;
    })();

    pbsocket.Response = (function() {

        /**
         * Constructs a new Response service.
         * @memberof pbsocket
         * @classdesc Represents a Response
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Response(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Response.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Response;

        /**
         * Creates new Response service using the specified rpc implementation.
         * @function create
         * @memberof pbsocket.Response
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Response} RPC service. Useful where requests and/or responses are streamed.
         */
        Response.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbsocket.Response#errorInfo}.
         * @memberof pbsocket.Response
         * @typedef ErrorInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbsocket.SocketEmpty} [response] SocketEmpty
         */

        /**
         * Calls ErrorInfo.
         * @function errorInfo
         * @memberof pbsocket.Response
         * @instance
         * @param {pbcommon.IPrivilegeTip} request PrivilegeTip message or plain object
         * @param {pbsocket.Response.ErrorInfoCallback} callback Node-style callback called with the error, if any, and SocketEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Response.prototype.errorInfo = function errorInfo(request, callback) {
            return this.rpcCall(errorInfo, $root.pbcommon.PrivilegeTip, $root.pbsocket.SocketEmpty, request, callback);
        }, "name", { value: "ErrorInfo" });

        /**
         * Calls ErrorInfo.
         * @function errorInfo
         * @memberof pbsocket.Response
         * @instance
         * @param {pbcommon.IPrivilegeTip} request PrivilegeTip message or plain object
         * @returns {Promise<pbsocket.SocketEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbsocket.Response#newToken}.
         * @memberof pbsocket.Response
         * @typedef NewTokenCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbsocket.SocketEmpty} [response] SocketEmpty
         */

        /**
         * Calls NewToken.
         * @function newToken
         * @memberof pbsocket.Response
         * @instance
         * @param {pbsocket.ISocketEmpty} request SocketEmpty message or plain object
         * @param {pbsocket.Response.NewTokenCallback} callback Node-style callback called with the error, if any, and SocketEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Response.prototype.newToken = function newToken(request, callback) {
            return this.rpcCall(newToken, $root.pbsocket.SocketEmpty, $root.pbsocket.SocketEmpty, request, callback);
        }, "name", { value: "NewToken" });

        /**
         * Calls NewToken.
         * @function newToken
         * @memberof pbsocket.Response
         * @instance
         * @param {pbsocket.ISocketEmpty} request SocketEmpty message or plain object
         * @returns {Promise<pbsocket.SocketEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbsocket.Response#enterRoomNotify}.
         * @memberof pbsocket.Response
         * @typedef EnterRoomNotifyCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbsocket.SocketEmpty} [response] SocketEmpty
         */

        /**
         * Calls EnterRoomNotify.
         * @function enterRoomNotify
         * @memberof pbsocket.Response
         * @instance
         * @param {pbsocket.IEnterRoomAck} request EnterRoomAck message or plain object
         * @param {pbsocket.Response.EnterRoomNotifyCallback} callback Node-style callback called with the error, if any, and SocketEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Response.prototype.enterRoomNotify = function enterRoomNotify(request, callback) {
            return this.rpcCall(enterRoomNotify, $root.pbsocket.EnterRoomAck, $root.pbsocket.SocketEmpty, request, callback);
        }, "name", { value: "EnterRoomNotify" });

        /**
         * Calls EnterRoomNotify.
         * @function enterRoomNotify
         * @memberof pbsocket.Response
         * @instance
         * @param {pbsocket.IEnterRoomAck} request EnterRoomAck message or plain object
         * @returns {Promise<pbsocket.SocketEmpty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbsocket.Response#connLost_Ack}.
         * @memberof pbsocket.Response
         * @typedef ConnLost_AckCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbsocket.SocketEmpty} [response] SocketEmpty
         */

        /**
         * Calls ConnLost_Ack.
         * @function connLost_Ack
         * @memberof pbsocket.Response
         * @instance
         * @param {pbsocket.IConnLostAck} request ConnLostAck message or plain object
         * @param {pbsocket.Response.ConnLost_AckCallback} callback Node-style callback called with the error, if any, and SocketEmpty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Response.prototype.connLost_Ack = function connLost_Ack(request, callback) {
            return this.rpcCall(connLost_Ack, $root.pbsocket.ConnLostAck, $root.pbsocket.SocketEmpty, request, callback);
        }, "name", { value: "ConnLost_Ack" });

        /**
         * Calls ConnLost_Ack.
         * @function connLost_Ack
         * @memberof pbsocket.Response
         * @instance
         * @param {pbsocket.IConnLostAck} request ConnLostAck message or plain object
         * @returns {Promise<pbsocket.SocketEmpty>} Promise
         * @variation 2
         */

        return Response;
    })();

    pbsocket.ParseTokenArgs = (function() {

        /**
         * Properties of a ParseTokenArgs.
         * @memberof pbsocket
         * @interface IParseTokenArgs
         * @property {string|null} [token] ParseTokenArgs token
         */

        /**
         * Constructs a new ParseTokenArgs.
         * @memberof pbsocket
         * @classdesc Represents a ParseTokenArgs.
         * @implements IParseTokenArgs
         * @constructor
         * @param {pbsocket.IParseTokenArgs=} [properties] Properties to set
         */
        function ParseTokenArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ParseTokenArgs token.
         * @member {string} token
         * @memberof pbsocket.ParseTokenArgs
         * @instance
         */
        ParseTokenArgs.prototype.token = "";

        /**
         * Creates a new ParseTokenArgs instance using the specified properties.
         * @function create
         * @memberof pbsocket.ParseTokenArgs
         * @static
         * @param {pbsocket.IParseTokenArgs=} [properties] Properties to set
         * @returns {pbsocket.ParseTokenArgs} ParseTokenArgs instance
         */
        ParseTokenArgs.create = function create(properties) {
            return new ParseTokenArgs(properties);
        };

        /**
         * Encodes the specified ParseTokenArgs message. Does not implicitly {@link pbsocket.ParseTokenArgs.verify|verify} messages.
         * @function encode
         * @memberof pbsocket.ParseTokenArgs
         * @static
         * @param {pbsocket.IParseTokenArgs} message ParseTokenArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParseTokenArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            return writer;
        };

        /**
         * Encodes the specified ParseTokenArgs message, length delimited. Does not implicitly {@link pbsocket.ParseTokenArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbsocket.ParseTokenArgs
         * @static
         * @param {pbsocket.IParseTokenArgs} message ParseTokenArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ParseTokenArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ParseTokenArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbsocket.ParseTokenArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbsocket.ParseTokenArgs} ParseTokenArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParseTokenArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbsocket.ParseTokenArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.string();
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
         * Decodes a ParseTokenArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbsocket.ParseTokenArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbsocket.ParseTokenArgs} ParseTokenArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ParseTokenArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ParseTokenArgs message.
         * @function verify
         * @memberof pbsocket.ParseTokenArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ParseTokenArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            return null;
        };

        /**
         * Creates a ParseTokenArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbsocket.ParseTokenArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbsocket.ParseTokenArgs} ParseTokenArgs
         */
        ParseTokenArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbsocket.ParseTokenArgs)
                return object;
            var message = new $root.pbsocket.ParseTokenArgs();
            if (object.token != null)
                message.token = String(object.token);
            return message;
        };

        /**
         * Creates a plain object from a ParseTokenArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbsocket.ParseTokenArgs
         * @static
         * @param {pbsocket.ParseTokenArgs} message ParseTokenArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ParseTokenArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.token = "";
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            return object;
        };

        /**
         * Converts this ParseTokenArgs to JSON.
         * @function toJSON
         * @memberof pbsocket.ParseTokenArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ParseTokenArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ParseTokenArgs
         * @function getTypeUrl
         * @memberof pbsocket.ParseTokenArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ParseTokenArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbsocket.ParseTokenArgs";
        };

        return ParseTokenArgs;
    })();

    pbsocket.MsgC2S2CArgs = (function() {

        /**
         * Properties of a MsgC2S2CArgs.
         * @memberof pbsocket
         * @interface IMsgC2S2CArgs
         * @property {number|Long|null} [roomId] MsgC2S2CArgs roomId
         * @property {number|null} [limit] MsgC2S2CArgs limit
         * @property {number|Long|null} [prevMessageId] MsgC2S2CArgs prevMessageId
         */

        /**
         * Constructs a new MsgC2S2CArgs.
         * @memberof pbsocket
         * @classdesc Represents a MsgC2S2CArgs.
         * @implements IMsgC2S2CArgs
         * @constructor
         * @param {pbsocket.IMsgC2S2CArgs=} [properties] Properties to set
         */
        function MsgC2S2CArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgC2S2CArgs roomId.
         * @member {number|Long} roomId
         * @memberof pbsocket.MsgC2S2CArgs
         * @instance
         */
        MsgC2S2CArgs.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MsgC2S2CArgs limit.
         * @member {number} limit
         * @memberof pbsocket.MsgC2S2CArgs
         * @instance
         */
        MsgC2S2CArgs.prototype.limit = 0;

        /**
         * MsgC2S2CArgs prevMessageId.
         * @member {number|Long} prevMessageId
         * @memberof pbsocket.MsgC2S2CArgs
         * @instance
         */
        MsgC2S2CArgs.prototype.prevMessageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MsgC2S2CArgs instance using the specified properties.
         * @function create
         * @memberof pbsocket.MsgC2S2CArgs
         * @static
         * @param {pbsocket.IMsgC2S2CArgs=} [properties] Properties to set
         * @returns {pbsocket.MsgC2S2CArgs} MsgC2S2CArgs instance
         */
        MsgC2S2CArgs.create = function create(properties) {
            return new MsgC2S2CArgs(properties);
        };

        /**
         * Encodes the specified MsgC2S2CArgs message. Does not implicitly {@link pbsocket.MsgC2S2CArgs.verify|verify} messages.
         * @function encode
         * @memberof pbsocket.MsgC2S2CArgs
         * @static
         * @param {pbsocket.IMsgC2S2CArgs} message MsgC2S2CArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgC2S2CArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.limit != null && Object.hasOwnProperty.call(message, "limit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.limit);
            if (message.prevMessageId != null && Object.hasOwnProperty.call(message, "prevMessageId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.prevMessageId);
            return writer;
        };

        /**
         * Encodes the specified MsgC2S2CArgs message, length delimited. Does not implicitly {@link pbsocket.MsgC2S2CArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbsocket.MsgC2S2CArgs
         * @static
         * @param {pbsocket.IMsgC2S2CArgs} message MsgC2S2CArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgC2S2CArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgC2S2CArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbsocket.MsgC2S2CArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbsocket.MsgC2S2CArgs} MsgC2S2CArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgC2S2CArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbsocket.MsgC2S2CArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.int64();
                        break;
                    }
                case 2: {
                        message.limit = reader.int32();
                        break;
                    }
                case 3: {
                        message.prevMessageId = reader.int64();
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
         * Decodes a MsgC2S2CArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbsocket.MsgC2S2CArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbsocket.MsgC2S2CArgs} MsgC2S2CArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgC2S2CArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgC2S2CArgs message.
         * @function verify
         * @memberof pbsocket.MsgC2S2CArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgC2S2CArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            if (message.prevMessageId != null && message.hasOwnProperty("prevMessageId"))
                if (!$util.isInteger(message.prevMessageId) && !(message.prevMessageId && $util.isInteger(message.prevMessageId.low) && $util.isInteger(message.prevMessageId.high)))
                    return "prevMessageId: integer|Long expected";
            return null;
        };

        /**
         * Creates a MsgC2S2CArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbsocket.MsgC2S2CArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbsocket.MsgC2S2CArgs} MsgC2S2CArgs
         */
        MsgC2S2CArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbsocket.MsgC2S2CArgs)
                return object;
            var message = new $root.pbsocket.MsgC2S2CArgs();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.limit != null)
                message.limit = object.limit | 0;
            if (object.prevMessageId != null)
                if ($util.Long)
                    (message.prevMessageId = $util.Long.fromValue(object.prevMessageId)).unsigned = false;
                else if (typeof object.prevMessageId === "string")
                    message.prevMessageId = parseInt(object.prevMessageId, 10);
                else if (typeof object.prevMessageId === "number")
                    message.prevMessageId = object.prevMessageId;
                else if (typeof object.prevMessageId === "object")
                    message.prevMessageId = new $util.LongBits(object.prevMessageId.low >>> 0, object.prevMessageId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a MsgC2S2CArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbsocket.MsgC2S2CArgs
         * @static
         * @param {pbsocket.MsgC2S2CArgs} message MsgC2S2CArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgC2S2CArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.limit = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.prevMessageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.prevMessageId = options.longs === String ? "0" : 0;
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            if (message.prevMessageId != null && message.hasOwnProperty("prevMessageId"))
                if (typeof message.prevMessageId === "number")
                    object.prevMessageId = options.longs === String ? String(message.prevMessageId) : message.prevMessageId;
                else
                    object.prevMessageId = options.longs === String ? $util.Long.prototype.toString.call(message.prevMessageId) : options.longs === Number ? new $util.LongBits(message.prevMessageId.low >>> 0, message.prevMessageId.high >>> 0).toNumber() : message.prevMessageId;
            return object;
        };

        /**
         * Converts this MsgC2S2CArgs to JSON.
         * @function toJSON
         * @memberof pbsocket.MsgC2S2CArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgC2S2CArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MsgC2S2CArgs
         * @function getTypeUrl
         * @memberof pbsocket.MsgC2S2CArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MsgC2S2CArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbsocket.MsgC2S2CArgs";
        };

        return MsgC2S2CArgs;
    })();

    pbsocket.MsgC2S2CAck = (function() {

        /**
         * Properties of a MsgC2S2CAck.
         * @memberof pbsocket
         * @interface IMsgC2S2CAck
         * @property {Array.<pbchat.IChatModel>|null} [chatList] MsgC2S2CAck chatList
         * @property {number|Long|null} [total] MsgC2S2CAck total
         * @property {number|Long|null} [roomId] MsgC2S2CAck roomId
         */

        /**
         * Constructs a new MsgC2S2CAck.
         * @memberof pbsocket
         * @classdesc Represents a MsgC2S2CAck.
         * @implements IMsgC2S2CAck
         * @constructor
         * @param {pbsocket.IMsgC2S2CAck=} [properties] Properties to set
         */
        function MsgC2S2CAck(properties) {
            this.chatList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MsgC2S2CAck chatList.
         * @member {Array.<pbchat.IChatModel>} chatList
         * @memberof pbsocket.MsgC2S2CAck
         * @instance
         */
        MsgC2S2CAck.prototype.chatList = $util.emptyArray;

        /**
         * MsgC2S2CAck total.
         * @member {number|Long} total
         * @memberof pbsocket.MsgC2S2CAck
         * @instance
         */
        MsgC2S2CAck.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MsgC2S2CAck roomId.
         * @member {number|Long} roomId
         * @memberof pbsocket.MsgC2S2CAck
         * @instance
         */
        MsgC2S2CAck.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MsgC2S2CAck instance using the specified properties.
         * @function create
         * @memberof pbsocket.MsgC2S2CAck
         * @static
         * @param {pbsocket.IMsgC2S2CAck=} [properties] Properties to set
         * @returns {pbsocket.MsgC2S2CAck} MsgC2S2CAck instance
         */
        MsgC2S2CAck.create = function create(properties) {
            return new MsgC2S2CAck(properties);
        };

        /**
         * Encodes the specified MsgC2S2CAck message. Does not implicitly {@link pbsocket.MsgC2S2CAck.verify|verify} messages.
         * @function encode
         * @memberof pbsocket.MsgC2S2CAck
         * @static
         * @param {pbsocket.IMsgC2S2CAck} message MsgC2S2CAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgC2S2CAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chatList != null && message.chatList.length)
                for (var i = 0; i < message.chatList.length; ++i)
                    $root.pbchat.ChatModel.encode(message.chatList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.total);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified MsgC2S2CAck message, length delimited. Does not implicitly {@link pbsocket.MsgC2S2CAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbsocket.MsgC2S2CAck
         * @static
         * @param {pbsocket.IMsgC2S2CAck} message MsgC2S2CAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MsgC2S2CAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MsgC2S2CAck message from the specified reader or buffer.
         * @function decode
         * @memberof pbsocket.MsgC2S2CAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbsocket.MsgC2S2CAck} MsgC2S2CAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgC2S2CAck.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbsocket.MsgC2S2CAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.chatList && message.chatList.length))
                            message.chatList = [];
                        message.chatList.push($root.pbchat.ChatModel.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.total = reader.int64();
                        break;
                    }
                case 3: {
                        message.roomId = reader.int64();
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
         * Decodes a MsgC2S2CAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbsocket.MsgC2S2CAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbsocket.MsgC2S2CAck} MsgC2S2CAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MsgC2S2CAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MsgC2S2CAck message.
         * @function verify
         * @memberof pbsocket.MsgC2S2CAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MsgC2S2CAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chatList != null && message.hasOwnProperty("chatList")) {
                if (!Array.isArray(message.chatList))
                    return "chatList: array expected";
                for (var i = 0; i < message.chatList.length; ++i) {
                    var error = $root.pbchat.ChatModel.verify(message.chatList[i]);
                    if (error)
                        return "chatList." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            return null;
        };

        /**
         * Creates a MsgC2S2CAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbsocket.MsgC2S2CAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbsocket.MsgC2S2CAck} MsgC2S2CAck
         */
        MsgC2S2CAck.fromObject = function fromObject(object) {
            if (object instanceof $root.pbsocket.MsgC2S2CAck)
                return object;
            var message = new $root.pbsocket.MsgC2S2CAck();
            if (object.chatList) {
                if (!Array.isArray(object.chatList))
                    throw TypeError(".pbsocket.MsgC2S2CAck.chatList: array expected");
                message.chatList = [];
                for (var i = 0; i < object.chatList.length; ++i) {
                    if (typeof object.chatList[i] !== "object")
                        throw TypeError(".pbsocket.MsgC2S2CAck.chatList: object expected");
                    message.chatList[i] = $root.pbchat.ChatModel.fromObject(object.chatList[i]);
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
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a MsgC2S2CAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbsocket.MsgC2S2CAck
         * @static
         * @param {pbsocket.MsgC2S2CAck} message MsgC2S2CAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MsgC2S2CAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.chatList = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.total = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.total = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
            }
            if (message.chatList && message.chatList.length) {
                object.chatList = [];
                for (var j = 0; j < message.chatList.length; ++j)
                    object.chatList[j] = $root.pbchat.ChatModel.toObject(message.chatList[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            return object;
        };

        /**
         * Converts this MsgC2S2CAck to JSON.
         * @function toJSON
         * @memberof pbsocket.MsgC2S2CAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MsgC2S2CAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MsgC2S2CAck
         * @function getTypeUrl
         * @memberof pbsocket.MsgC2S2CAck
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MsgC2S2CAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbsocket.MsgC2S2CAck";
        };

        return MsgC2S2CAck;
    })();

    pbsocket.EnterRoomArgs = (function() {

        /**
         * Properties of an EnterRoomArgs.
         * @memberof pbsocket
         * @interface IEnterRoomArgs
         * @property {number|Long|null} [roomId] EnterRoomArgs roomId
         * @property {string|null} [roomPwd] EnterRoomArgs roomPwd
         * @property {boolean|null} [isReenter] EnterRoomArgs isReenter
         * @property {number|null} [enterType] EnterRoomArgs enterType
         * @property {string|null} [enterParam] EnterRoomArgs enterParam
         * @property {string|null} [ver] EnterRoomArgs ver
         */

        /**
         * Constructs a new EnterRoomArgs.
         * @memberof pbsocket
         * @classdesc Represents an EnterRoomArgs.
         * @implements IEnterRoomArgs
         * @constructor
         * @param {pbsocket.IEnterRoomArgs=} [properties] Properties to set
         */
        function EnterRoomArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomArgs roomId.
         * @member {number|Long} roomId
         * @memberof pbsocket.EnterRoomArgs
         * @instance
         */
        EnterRoomArgs.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EnterRoomArgs roomPwd.
         * @member {string} roomPwd
         * @memberof pbsocket.EnterRoomArgs
         * @instance
         */
        EnterRoomArgs.prototype.roomPwd = "";

        /**
         * EnterRoomArgs isReenter.
         * @member {boolean} isReenter
         * @memberof pbsocket.EnterRoomArgs
         * @instance
         */
        EnterRoomArgs.prototype.isReenter = false;

        /**
         * EnterRoomArgs enterType.
         * @member {number} enterType
         * @memberof pbsocket.EnterRoomArgs
         * @instance
         */
        EnterRoomArgs.prototype.enterType = 0;

        /**
         * EnterRoomArgs enterParam.
         * @member {string} enterParam
         * @memberof pbsocket.EnterRoomArgs
         * @instance
         */
        EnterRoomArgs.prototype.enterParam = "";

        /**
         * EnterRoomArgs ver.
         * @member {string} ver
         * @memberof pbsocket.EnterRoomArgs
         * @instance
         */
        EnterRoomArgs.prototype.ver = "";

        /**
         * Creates a new EnterRoomArgs instance using the specified properties.
         * @function create
         * @memberof pbsocket.EnterRoomArgs
         * @static
         * @param {pbsocket.IEnterRoomArgs=} [properties] Properties to set
         * @returns {pbsocket.EnterRoomArgs} EnterRoomArgs instance
         */
        EnterRoomArgs.create = function create(properties) {
            return new EnterRoomArgs(properties);
        };

        /**
         * Encodes the specified EnterRoomArgs message. Does not implicitly {@link pbsocket.EnterRoomArgs.verify|verify} messages.
         * @function encode
         * @memberof pbsocket.EnterRoomArgs
         * @static
         * @param {pbsocket.IEnterRoomArgs} message EnterRoomArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.roomPwd != null && Object.hasOwnProperty.call(message, "roomPwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomPwd);
            if (message.isReenter != null && Object.hasOwnProperty.call(message, "isReenter"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isReenter);
            if (message.enterType != null && Object.hasOwnProperty.call(message, "enterType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.enterType);
            if (message.enterParam != null && Object.hasOwnProperty.call(message, "enterParam"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.enterParam);
            if (message.ver != null && Object.hasOwnProperty.call(message, "ver"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ver);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomArgs message, length delimited. Does not implicitly {@link pbsocket.EnterRoomArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbsocket.EnterRoomArgs
         * @static
         * @param {pbsocket.IEnterRoomArgs} message EnterRoomArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbsocket.EnterRoomArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbsocket.EnterRoomArgs} EnterRoomArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbsocket.EnterRoomArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.int64();
                        break;
                    }
                case 2: {
                        message.roomPwd = reader.string();
                        break;
                    }
                case 3: {
                        message.isReenter = reader.bool();
                        break;
                    }
                case 4: {
                        message.enterType = reader.int32();
                        break;
                    }
                case 5: {
                        message.enterParam = reader.string();
                        break;
                    }
                case 6: {
                        message.ver = reader.string();
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
         * Decodes an EnterRoomArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbsocket.EnterRoomArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbsocket.EnterRoomArgs} EnterRoomArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomArgs message.
         * @function verify
         * @memberof pbsocket.EnterRoomArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.roomPwd != null && message.hasOwnProperty("roomPwd"))
                if (!$util.isString(message.roomPwd))
                    return "roomPwd: string expected";
            if (message.isReenter != null && message.hasOwnProperty("isReenter"))
                if (typeof message.isReenter !== "boolean")
                    return "isReenter: boolean expected";
            if (message.enterType != null && message.hasOwnProperty("enterType"))
                if (!$util.isInteger(message.enterType))
                    return "enterType: integer expected";
            if (message.enterParam != null && message.hasOwnProperty("enterParam"))
                if (!$util.isString(message.enterParam))
                    return "enterParam: string expected";
            if (message.ver != null && message.hasOwnProperty("ver"))
                if (!$util.isString(message.ver))
                    return "ver: string expected";
            return null;
        };

        /**
         * Creates an EnterRoomArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbsocket.EnterRoomArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbsocket.EnterRoomArgs} EnterRoomArgs
         */
        EnterRoomArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbsocket.EnterRoomArgs)
                return object;
            var message = new $root.pbsocket.EnterRoomArgs();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.roomPwd != null)
                message.roomPwd = String(object.roomPwd);
            if (object.isReenter != null)
                message.isReenter = Boolean(object.isReenter);
            if (object.enterType != null)
                message.enterType = object.enterType | 0;
            if (object.enterParam != null)
                message.enterParam = String(object.enterParam);
            if (object.ver != null)
                message.ver = String(object.ver);
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbsocket.EnterRoomArgs
         * @static
         * @param {pbsocket.EnterRoomArgs} message EnterRoomArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.roomPwd = "";
                object.isReenter = false;
                object.enterType = 0;
                object.enterParam = "";
                object.ver = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.roomPwd != null && message.hasOwnProperty("roomPwd"))
                object.roomPwd = message.roomPwd;
            if (message.isReenter != null && message.hasOwnProperty("isReenter"))
                object.isReenter = message.isReenter;
            if (message.enterType != null && message.hasOwnProperty("enterType"))
                object.enterType = message.enterType;
            if (message.enterParam != null && message.hasOwnProperty("enterParam"))
                object.enterParam = message.enterParam;
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            return object;
        };

        /**
         * Converts this EnterRoomArgs to JSON.
         * @function toJSON
         * @memberof pbsocket.EnterRoomArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnterRoomArgs
         * @function getTypeUrl
         * @memberof pbsocket.EnterRoomArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnterRoomArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbsocket.EnterRoomArgs";
        };

        return EnterRoomArgs;
    })();

    pbsocket.EnterRoomAck = (function() {

        /**
         * Properties of an EnterRoomAck.
         * @memberof pbsocket
         * @interface IEnterRoomAck
         * @property {number|null} [peopleNum] EnterRoomAck peopleNum
         * @property {number|null} [sortNum] EnterRoomAck sortNum
         * @property {string|null} [welcome] EnterRoomAck welcome
         * @property {number|null} [OPlayer] EnterRoomAck OPlayer
         * @property {string|null} [pullurl] EnterRoomAck pullurl
         * @property {number|null} [isRobot] EnterRoomAck isRobot
         * @property {number|null} [firstLogin] EnterRoomAck firstLogin
         * @property {number|Long|null} [userId] EnterRoomAck userId
         * @property {string|null} [nickname] EnterRoomAck nickname
         * @property {string|null} [head] EnterRoomAck head
         * @property {boolean|null} [inRoom] EnterRoomAck inRoom
         * @property {string|null} [location] EnterRoomAck location
         * @property {number|null} [gender] EnterRoomAck gender
         * @property {number|null} [fakePeopleCnt] EnterRoomAck fakePeopleCnt
         * @property {number|Long|null} [roomId] EnterRoomAck roomId
         */

        /**
         * Constructs a new EnterRoomAck.
         * @memberof pbsocket
         * @classdesc Represents an EnterRoomAck.
         * @implements IEnterRoomAck
         * @constructor
         * @param {pbsocket.IEnterRoomAck=} [properties] Properties to set
         */
        function EnterRoomAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomAck peopleNum.
         * @member {number} peopleNum
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.peopleNum = 0;

        /**
         * EnterRoomAck sortNum.
         * @member {number} sortNum
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.sortNum = 0;

        /**
         * EnterRoomAck welcome.
         * @member {string} welcome
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.welcome = "";

        /**
         * EnterRoomAck OPlayer.
         * @member {number} OPlayer
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.OPlayer = 0;

        /**
         * EnterRoomAck pullurl.
         * @member {string} pullurl
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.pullurl = "";

        /**
         * EnterRoomAck isRobot.
         * @member {number} isRobot
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.isRobot = 0;

        /**
         * EnterRoomAck firstLogin.
         * @member {number} firstLogin
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.firstLogin = 0;

        /**
         * EnterRoomAck userId.
         * @member {number|Long} userId
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * EnterRoomAck nickname.
         * @member {string} nickname
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.nickname = "";

        /**
         * EnterRoomAck head.
         * @member {string} head
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.head = "";

        /**
         * EnterRoomAck inRoom.
         * @member {boolean} inRoom
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.inRoom = false;

        /**
         * EnterRoomAck location.
         * @member {string} location
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.location = "";

        /**
         * EnterRoomAck gender.
         * @member {number} gender
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.gender = 0;

        /**
         * EnterRoomAck fakePeopleCnt.
         * @member {number} fakePeopleCnt
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.fakePeopleCnt = 0;

        /**
         * EnterRoomAck roomId.
         * @member {number|Long} roomId
         * @memberof pbsocket.EnterRoomAck
         * @instance
         */
        EnterRoomAck.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new EnterRoomAck instance using the specified properties.
         * @function create
         * @memberof pbsocket.EnterRoomAck
         * @static
         * @param {pbsocket.IEnterRoomAck=} [properties] Properties to set
         * @returns {pbsocket.EnterRoomAck} EnterRoomAck instance
         */
        EnterRoomAck.create = function create(properties) {
            return new EnterRoomAck(properties);
        };

        /**
         * Encodes the specified EnterRoomAck message. Does not implicitly {@link pbsocket.EnterRoomAck.verify|verify} messages.
         * @function encode
         * @memberof pbsocket.EnterRoomAck
         * @static
         * @param {pbsocket.IEnterRoomAck} message EnterRoomAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.peopleNum != null && Object.hasOwnProperty.call(message, "peopleNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.peopleNum);
            if (message.sortNum != null && Object.hasOwnProperty.call(message, "sortNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sortNum);
            if (message.welcome != null && Object.hasOwnProperty.call(message, "welcome"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.welcome);
            if (message.OPlayer != null && Object.hasOwnProperty.call(message, "OPlayer"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.OPlayer);
            if (message.pullurl != null && Object.hasOwnProperty.call(message, "pullurl"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.pullurl);
            if (message.isRobot != null && Object.hasOwnProperty.call(message, "isRobot"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.isRobot);
            if (message.firstLogin != null && Object.hasOwnProperty.call(message, "firstLogin"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.firstLogin);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.userId);
            if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.nickname);
            if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.head);
            if (message.inRoom != null && Object.hasOwnProperty.call(message, "inRoom"))
                writer.uint32(/* id 11, wireType 0 =*/88).bool(message.inRoom);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.location);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.gender);
            if (message.fakePeopleCnt != null && Object.hasOwnProperty.call(message, "fakePeopleCnt"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.fakePeopleCnt);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 15, wireType 0 =*/120).int64(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomAck message, length delimited. Does not implicitly {@link pbsocket.EnterRoomAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbsocket.EnterRoomAck
         * @static
         * @param {pbsocket.IEnterRoomAck} message EnterRoomAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomAck message from the specified reader or buffer.
         * @function decode
         * @memberof pbsocket.EnterRoomAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbsocket.EnterRoomAck} EnterRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomAck.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbsocket.EnterRoomAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.peopleNum = reader.int32();
                        break;
                    }
                case 2: {
                        message.sortNum = reader.int32();
                        break;
                    }
                case 3: {
                        message.welcome = reader.string();
                        break;
                    }
                case 4: {
                        message.OPlayer = reader.int32();
                        break;
                    }
                case 5: {
                        message.pullurl = reader.string();
                        break;
                    }
                case 6: {
                        message.isRobot = reader.int32();
                        break;
                    }
                case 7: {
                        message.firstLogin = reader.int32();
                        break;
                    }
                case 8: {
                        message.userId = reader.int64();
                        break;
                    }
                case 9: {
                        message.nickname = reader.string();
                        break;
                    }
                case 10: {
                        message.head = reader.string();
                        break;
                    }
                case 11: {
                        message.inRoom = reader.bool();
                        break;
                    }
                case 12: {
                        message.location = reader.string();
                        break;
                    }
                case 13: {
                        message.gender = reader.int32();
                        break;
                    }
                case 14: {
                        message.fakePeopleCnt = reader.int32();
                        break;
                    }
                case 15: {
                        message.roomId = reader.int64();
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
         * Decodes an EnterRoomAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbsocket.EnterRoomAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbsocket.EnterRoomAck} EnterRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomAck message.
         * @function verify
         * @memberof pbsocket.EnterRoomAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.peopleNum != null && message.hasOwnProperty("peopleNum"))
                if (!$util.isInteger(message.peopleNum))
                    return "peopleNum: integer expected";
            if (message.sortNum != null && message.hasOwnProperty("sortNum"))
                if (!$util.isInteger(message.sortNum))
                    return "sortNum: integer expected";
            if (message.welcome != null && message.hasOwnProperty("welcome"))
                if (!$util.isString(message.welcome))
                    return "welcome: string expected";
            if (message.OPlayer != null && message.hasOwnProperty("OPlayer"))
                if (!$util.isInteger(message.OPlayer))
                    return "OPlayer: integer expected";
            if (message.pullurl != null && message.hasOwnProperty("pullurl"))
                if (!$util.isString(message.pullurl))
                    return "pullurl: string expected";
            if (message.isRobot != null && message.hasOwnProperty("isRobot"))
                if (!$util.isInteger(message.isRobot))
                    return "isRobot: integer expected";
            if (message.firstLogin != null && message.hasOwnProperty("firstLogin"))
                if (!$util.isInteger(message.firstLogin))
                    return "firstLogin: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                if (!$util.isString(message.nickname))
                    return "nickname: string expected";
            if (message.head != null && message.hasOwnProperty("head"))
                if (!$util.isString(message.head))
                    return "head: string expected";
            if (message.inRoom != null && message.hasOwnProperty("inRoom"))
                if (typeof message.inRoom !== "boolean")
                    return "inRoom: boolean expected";
            if (message.location != null && message.hasOwnProperty("location"))
                if (!$util.isString(message.location))
                    return "location: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isInteger(message.gender))
                    return "gender: integer expected";
            if (message.fakePeopleCnt != null && message.hasOwnProperty("fakePeopleCnt"))
                if (!$util.isInteger(message.fakePeopleCnt))
                    return "fakePeopleCnt: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            return null;
        };

        /**
         * Creates an EnterRoomAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbsocket.EnterRoomAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbsocket.EnterRoomAck} EnterRoomAck
         */
        EnterRoomAck.fromObject = function fromObject(object) {
            if (object instanceof $root.pbsocket.EnterRoomAck)
                return object;
            var message = new $root.pbsocket.EnterRoomAck();
            if (object.peopleNum != null)
                message.peopleNum = object.peopleNum | 0;
            if (object.sortNum != null)
                message.sortNum = object.sortNum | 0;
            if (object.welcome != null)
                message.welcome = String(object.welcome);
            if (object.OPlayer != null)
                message.OPlayer = object.OPlayer | 0;
            if (object.pullurl != null)
                message.pullurl = String(object.pullurl);
            if (object.isRobot != null)
                message.isRobot = object.isRobot | 0;
            if (object.firstLogin != null)
                message.firstLogin = object.firstLogin | 0;
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.nickname != null)
                message.nickname = String(object.nickname);
            if (object.head != null)
                message.head = String(object.head);
            if (object.inRoom != null)
                message.inRoom = Boolean(object.inRoom);
            if (object.location != null)
                message.location = String(object.location);
            if (object.gender != null)
                message.gender = object.gender | 0;
            if (object.fakePeopleCnt != null)
                message.fakePeopleCnt = object.fakePeopleCnt | 0;
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbsocket.EnterRoomAck
         * @static
         * @param {pbsocket.EnterRoomAck} message EnterRoomAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.peopleNum = 0;
                object.sortNum = 0;
                object.welcome = "";
                object.OPlayer = 0;
                object.pullurl = "";
                object.isRobot = 0;
                object.firstLogin = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.nickname = "";
                object.head = "";
                object.inRoom = false;
                object.location = "";
                object.gender = 0;
                object.fakePeopleCnt = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
            }
            if (message.peopleNum != null && message.hasOwnProperty("peopleNum"))
                object.peopleNum = message.peopleNum;
            if (message.sortNum != null && message.hasOwnProperty("sortNum"))
                object.sortNum = message.sortNum;
            if (message.welcome != null && message.hasOwnProperty("welcome"))
                object.welcome = message.welcome;
            if (message.OPlayer != null && message.hasOwnProperty("OPlayer"))
                object.OPlayer = message.OPlayer;
            if (message.pullurl != null && message.hasOwnProperty("pullurl"))
                object.pullurl = message.pullurl;
            if (message.isRobot != null && message.hasOwnProperty("isRobot"))
                object.isRobot = message.isRobot;
            if (message.firstLogin != null && message.hasOwnProperty("firstLogin"))
                object.firstLogin = message.firstLogin;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.nickname != null && message.hasOwnProperty("nickname"))
                object.nickname = message.nickname;
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = message.head;
            if (message.inRoom != null && message.hasOwnProperty("inRoom"))
                object.inRoom = message.inRoom;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = message.location;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.fakePeopleCnt != null && message.hasOwnProperty("fakePeopleCnt"))
                object.fakePeopleCnt = message.fakePeopleCnt;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            return object;
        };

        /**
         * Converts this EnterRoomAck to JSON.
         * @function toJSON
         * @memberof pbsocket.EnterRoomAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EnterRoomAck
         * @function getTypeUrl
         * @memberof pbsocket.EnterRoomAck
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EnterRoomAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbsocket.EnterRoomAck";
        };

        return EnterRoomAck;
    })();

    pbsocket.ConnLostAck = (function() {

        /**
         * Properties of a ConnLostAck.
         * @memberof pbsocket
         * @interface IConnLostAck
         * @property {number|Long|null} [roomId] ConnLostAck roomId
         * @property {number|Long|null} [lostUserId] ConnLostAck lostUserId
         * @property {number|Long|null} [nickName] ConnLostAck nickName
         * @property {string|null} [head] ConnLostAck head
         */

        /**
         * Constructs a new ConnLostAck.
         * @memberof pbsocket
         * @classdesc Represents a ConnLostAck.
         * @implements IConnLostAck
         * @constructor
         * @param {pbsocket.IConnLostAck=} [properties] Properties to set
         */
        function ConnLostAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConnLostAck roomId.
         * @member {number|Long} roomId
         * @memberof pbsocket.ConnLostAck
         * @instance
         */
        ConnLostAck.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ConnLostAck lostUserId.
         * @member {number|Long} lostUserId
         * @memberof pbsocket.ConnLostAck
         * @instance
         */
        ConnLostAck.prototype.lostUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ConnLostAck nickName.
         * @member {number|Long} nickName
         * @memberof pbsocket.ConnLostAck
         * @instance
         */
        ConnLostAck.prototype.nickName = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ConnLostAck head.
         * @member {string} head
         * @memberof pbsocket.ConnLostAck
         * @instance
         */
        ConnLostAck.prototype.head = "";

        /**
         * Creates a new ConnLostAck instance using the specified properties.
         * @function create
         * @memberof pbsocket.ConnLostAck
         * @static
         * @param {pbsocket.IConnLostAck=} [properties] Properties to set
         * @returns {pbsocket.ConnLostAck} ConnLostAck instance
         */
        ConnLostAck.create = function create(properties) {
            return new ConnLostAck(properties);
        };

        /**
         * Encodes the specified ConnLostAck message. Does not implicitly {@link pbsocket.ConnLostAck.verify|verify} messages.
         * @function encode
         * @memberof pbsocket.ConnLostAck
         * @static
         * @param {pbsocket.IConnLostAck} message ConnLostAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnLostAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.roomId);
            if (message.lostUserId != null && Object.hasOwnProperty.call(message, "lostUserId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.lostUserId);
            if (message.nickName != null && Object.hasOwnProperty.call(message, "nickName"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nickName);
            if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.head);
            return writer;
        };

        /**
         * Encodes the specified ConnLostAck message, length delimited. Does not implicitly {@link pbsocket.ConnLostAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbsocket.ConnLostAck
         * @static
         * @param {pbsocket.IConnLostAck} message ConnLostAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConnLostAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConnLostAck message from the specified reader or buffer.
         * @function decode
         * @memberof pbsocket.ConnLostAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbsocket.ConnLostAck} ConnLostAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnLostAck.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbsocket.ConnLostAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.int64();
                        break;
                    }
                case 2: {
                        message.lostUserId = reader.int64();
                        break;
                    }
                case 3: {
                        message.nickName = reader.int64();
                        break;
                    }
                case 4: {
                        message.head = reader.string();
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
         * Decodes a ConnLostAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbsocket.ConnLostAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbsocket.ConnLostAck} ConnLostAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConnLostAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConnLostAck message.
         * @function verify
         * @memberof pbsocket.ConnLostAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConnLostAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.lostUserId != null && message.hasOwnProperty("lostUserId"))
                if (!$util.isInteger(message.lostUserId) && !(message.lostUserId && $util.isInteger(message.lostUserId.low) && $util.isInteger(message.lostUserId.high)))
                    return "lostUserId: integer|Long expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isInteger(message.nickName) && !(message.nickName && $util.isInteger(message.nickName.low) && $util.isInteger(message.nickName.high)))
                    return "nickName: integer|Long expected";
            if (message.head != null && message.hasOwnProperty("head"))
                if (!$util.isString(message.head))
                    return "head: string expected";
            return null;
        };

        /**
         * Creates a ConnLostAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbsocket.ConnLostAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbsocket.ConnLostAck} ConnLostAck
         */
        ConnLostAck.fromObject = function fromObject(object) {
            if (object instanceof $root.pbsocket.ConnLostAck)
                return object;
            var message = new $root.pbsocket.ConnLostAck();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.lostUserId != null)
                if ($util.Long)
                    (message.lostUserId = $util.Long.fromValue(object.lostUserId)).unsigned = false;
                else if (typeof object.lostUserId === "string")
                    message.lostUserId = parseInt(object.lostUserId, 10);
                else if (typeof object.lostUserId === "number")
                    message.lostUserId = object.lostUserId;
                else if (typeof object.lostUserId === "object")
                    message.lostUserId = new $util.LongBits(object.lostUserId.low >>> 0, object.lostUserId.high >>> 0).toNumber();
            if (object.nickName != null)
                if ($util.Long)
                    (message.nickName = $util.Long.fromValue(object.nickName)).unsigned = false;
                else if (typeof object.nickName === "string")
                    message.nickName = parseInt(object.nickName, 10);
                else if (typeof object.nickName === "number")
                    message.nickName = object.nickName;
                else if (typeof object.nickName === "object")
                    message.nickName = new $util.LongBits(object.nickName.low >>> 0, object.nickName.high >>> 0).toNumber();
            if (object.head != null)
                message.head = String(object.head);
            return message;
        };

        /**
         * Creates a plain object from a ConnLostAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbsocket.ConnLostAck
         * @static
         * @param {pbsocket.ConnLostAck} message ConnLostAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConnLostAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.lostUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.lostUserId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.nickName = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.nickName = options.longs === String ? "0" : 0;
                object.head = "";
            }
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.lostUserId != null && message.hasOwnProperty("lostUserId"))
                if (typeof message.lostUserId === "number")
                    object.lostUserId = options.longs === String ? String(message.lostUserId) : message.lostUserId;
                else
                    object.lostUserId = options.longs === String ? $util.Long.prototype.toString.call(message.lostUserId) : options.longs === Number ? new $util.LongBits(message.lostUserId.low >>> 0, message.lostUserId.high >>> 0).toNumber() : message.lostUserId;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (typeof message.nickName === "number")
                    object.nickName = options.longs === String ? String(message.nickName) : message.nickName;
                else
                    object.nickName = options.longs === String ? $util.Long.prototype.toString.call(message.nickName) : options.longs === Number ? new $util.LongBits(message.nickName.low >>> 0, message.nickName.high >>> 0).toNumber() : message.nickName;
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = message.head;
            return object;
        };

        /**
         * Converts this ConnLostAck to JSON.
         * @function toJSON
         * @memberof pbsocket.ConnLostAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConnLostAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ConnLostAck
         * @function getTypeUrl
         * @memberof pbsocket.ConnLostAck
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ConnLostAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbsocket.ConnLostAck";
        };

        return ConnLostAck;
    })();

    pbsocket.RtcMsg = (function() {

        /**
         * Properties of a RtcMsg.
         * @memberof pbsocket
         * @interface IRtcMsg
         * @property {number|Long|null} [suid] RtcMsg suid
         * @property {number|Long|null} [toUid] RtcMsg toUid
         * @property {number|null} [callType] RtcMsg callType
         * @property {number|null} [actionType] RtcMsg actionType
         * @property {number|Long|null} [duration] RtcMsg duration
         * @property {number|Long|null} [roomId] RtcMsg roomId
         * @property {number|null} [callFormType] RtcMsg callFormType
         * @property {number|null} [freeCall] RtcMsg freeCall
         * @property {number|Long|null} [gold] RtcMsg gold
         * @property {number|Long|null} [diamond] RtcMsg diamond
         * @property {number|Long|null} [agentGold] RtcMsg agentGold
         */

        /**
         * Constructs a new RtcMsg.
         * @memberof pbsocket
         * @classdesc Represents a RtcMsg.
         * @implements IRtcMsg
         * @constructor
         * @param {pbsocket.IRtcMsg=} [properties] Properties to set
         */
        function RtcMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RtcMsg suid.
         * @member {number|Long} suid
         * @memberof pbsocket.RtcMsg
         * @instance
         */
        RtcMsg.prototype.suid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RtcMsg toUid.
         * @member {number|Long} toUid
         * @memberof pbsocket.RtcMsg
         * @instance
         */
        RtcMsg.prototype.toUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RtcMsg callType.
         * @member {number} callType
         * @memberof pbsocket.RtcMsg
         * @instance
         */
        RtcMsg.prototype.callType = 0;

        /**
         * RtcMsg actionType.
         * @member {number} actionType
         * @memberof pbsocket.RtcMsg
         * @instance
         */
        RtcMsg.prototype.actionType = 0;

        /**
         * RtcMsg duration.
         * @member {number|Long} duration
         * @memberof pbsocket.RtcMsg
         * @instance
         */
        RtcMsg.prototype.duration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RtcMsg roomId.
         * @member {number|Long} roomId
         * @memberof pbsocket.RtcMsg
         * @instance
         */
        RtcMsg.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RtcMsg callFormType.
         * @member {number} callFormType
         * @memberof pbsocket.RtcMsg
         * @instance
         */
        RtcMsg.prototype.callFormType = 0;

        /**
         * RtcMsg freeCall.
         * @member {number} freeCall
         * @memberof pbsocket.RtcMsg
         * @instance
         */
        RtcMsg.prototype.freeCall = 0;

        /**
         * RtcMsg gold.
         * @member {number|Long} gold
         * @memberof pbsocket.RtcMsg
         * @instance
         */
        RtcMsg.prototype.gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RtcMsg diamond.
         * @member {number|Long} diamond
         * @memberof pbsocket.RtcMsg
         * @instance
         */
        RtcMsg.prototype.diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RtcMsg agentGold.
         * @member {number|Long} agentGold
         * @memberof pbsocket.RtcMsg
         * @instance
         */
        RtcMsg.prototype.agentGold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RtcMsg instance using the specified properties.
         * @function create
         * @memberof pbsocket.RtcMsg
         * @static
         * @param {pbsocket.IRtcMsg=} [properties] Properties to set
         * @returns {pbsocket.RtcMsg} RtcMsg instance
         */
        RtcMsg.create = function create(properties) {
            return new RtcMsg(properties);
        };

        /**
         * Encodes the specified RtcMsg message. Does not implicitly {@link pbsocket.RtcMsg.verify|verify} messages.
         * @function encode
         * @memberof pbsocket.RtcMsg
         * @static
         * @param {pbsocket.IRtcMsg} message RtcMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RtcMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.suid != null && Object.hasOwnProperty.call(message, "suid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.suid);
            if (message.toUid != null && Object.hasOwnProperty.call(message, "toUid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.toUid);
            if (message.callType != null && Object.hasOwnProperty.call(message, "callType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.callType);
            if (message.actionType != null && Object.hasOwnProperty.call(message, "actionType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.actionType);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.duration);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.roomId);
            if (message.callFormType != null && Object.hasOwnProperty.call(message, "callFormType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.callFormType);
            if (message.freeCall != null && Object.hasOwnProperty.call(message, "freeCall"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.freeCall);
            if (message.gold != null && Object.hasOwnProperty.call(message, "gold"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.gold);
            if (message.diamond != null && Object.hasOwnProperty.call(message, "diamond"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.diamond);
            if (message.agentGold != null && Object.hasOwnProperty.call(message, "agentGold"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.agentGold);
            return writer;
        };

        /**
         * Encodes the specified RtcMsg message, length delimited. Does not implicitly {@link pbsocket.RtcMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbsocket.RtcMsg
         * @static
         * @param {pbsocket.IRtcMsg} message RtcMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RtcMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RtcMsg message from the specified reader or buffer.
         * @function decode
         * @memberof pbsocket.RtcMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbsocket.RtcMsg} RtcMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RtcMsg.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbsocket.RtcMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.suid = reader.int64();
                        break;
                    }
                case 2: {
                        message.toUid = reader.int64();
                        break;
                    }
                case 3: {
                        message.callType = reader.int32();
                        break;
                    }
                case 4: {
                        message.actionType = reader.int32();
                        break;
                    }
                case 5: {
                        message.duration = reader.int64();
                        break;
                    }
                case 6: {
                        message.roomId = reader.int64();
                        break;
                    }
                case 7: {
                        message.callFormType = reader.int32();
                        break;
                    }
                case 8: {
                        message.freeCall = reader.int32();
                        break;
                    }
                case 9: {
                        message.gold = reader.int64();
                        break;
                    }
                case 10: {
                        message.diamond = reader.int64();
                        break;
                    }
                case 11: {
                        message.agentGold = reader.int64();
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
         * Decodes a RtcMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbsocket.RtcMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbsocket.RtcMsg} RtcMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RtcMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RtcMsg message.
         * @function verify
         * @memberof pbsocket.RtcMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RtcMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.suid != null && message.hasOwnProperty("suid"))
                if (!$util.isInteger(message.suid) && !(message.suid && $util.isInteger(message.suid.low) && $util.isInteger(message.suid.high)))
                    return "suid: integer|Long expected";
            if (message.toUid != null && message.hasOwnProperty("toUid"))
                if (!$util.isInteger(message.toUid) && !(message.toUid && $util.isInteger(message.toUid.low) && $util.isInteger(message.toUid.high)))
                    return "toUid: integer|Long expected";
            if (message.callType != null && message.hasOwnProperty("callType"))
                if (!$util.isInteger(message.callType))
                    return "callType: integer expected";
            if (message.actionType != null && message.hasOwnProperty("actionType"))
                if (!$util.isInteger(message.actionType))
                    return "actionType: integer expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration) && !(message.duration && $util.isInteger(message.duration.low) && $util.isInteger(message.duration.high)))
                    return "duration: integer|Long expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.callFormType != null && message.hasOwnProperty("callFormType"))
                if (!$util.isInteger(message.callFormType))
                    return "callFormType: integer expected";
            if (message.freeCall != null && message.hasOwnProperty("freeCall"))
                if (!$util.isInteger(message.freeCall))
                    return "freeCall: integer expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold) && !(message.gold && $util.isInteger(message.gold.low) && $util.isInteger(message.gold.high)))
                    return "gold: integer|Long expected";
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (!$util.isInteger(message.diamond) && !(message.diamond && $util.isInteger(message.diamond.low) && $util.isInteger(message.diamond.high)))
                    return "diamond: integer|Long expected";
            if (message.agentGold != null && message.hasOwnProperty("agentGold"))
                if (!$util.isInteger(message.agentGold) && !(message.agentGold && $util.isInteger(message.agentGold.low) && $util.isInteger(message.agentGold.high)))
                    return "agentGold: integer|Long expected";
            return null;
        };

        /**
         * Creates a RtcMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbsocket.RtcMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbsocket.RtcMsg} RtcMsg
         */
        RtcMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.pbsocket.RtcMsg)
                return object;
            var message = new $root.pbsocket.RtcMsg();
            if (object.suid != null)
                if ($util.Long)
                    (message.suid = $util.Long.fromValue(object.suid)).unsigned = false;
                else if (typeof object.suid === "string")
                    message.suid = parseInt(object.suid, 10);
                else if (typeof object.suid === "number")
                    message.suid = object.suid;
                else if (typeof object.suid === "object")
                    message.suid = new $util.LongBits(object.suid.low >>> 0, object.suid.high >>> 0).toNumber();
            if (object.toUid != null)
                if ($util.Long)
                    (message.toUid = $util.Long.fromValue(object.toUid)).unsigned = false;
                else if (typeof object.toUid === "string")
                    message.toUid = parseInt(object.toUid, 10);
                else if (typeof object.toUid === "number")
                    message.toUid = object.toUid;
                else if (typeof object.toUid === "object")
                    message.toUid = new $util.LongBits(object.toUid.low >>> 0, object.toUid.high >>> 0).toNumber();
            if (object.callType != null)
                message.callType = object.callType | 0;
            if (object.actionType != null)
                message.actionType = object.actionType | 0;
            if (object.duration != null)
                if ($util.Long)
                    (message.duration = $util.Long.fromValue(object.duration)).unsigned = false;
                else if (typeof object.duration === "string")
                    message.duration = parseInt(object.duration, 10);
                else if (typeof object.duration === "number")
                    message.duration = object.duration;
                else if (typeof object.duration === "object")
                    message.duration = new $util.LongBits(object.duration.low >>> 0, object.duration.high >>> 0).toNumber();
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.callFormType != null)
                message.callFormType = object.callFormType | 0;
            if (object.freeCall != null)
                message.freeCall = object.freeCall | 0;
            if (object.gold != null)
                if ($util.Long)
                    (message.gold = $util.Long.fromValue(object.gold)).unsigned = false;
                else if (typeof object.gold === "string")
                    message.gold = parseInt(object.gold, 10);
                else if (typeof object.gold === "number")
                    message.gold = object.gold;
                else if (typeof object.gold === "object")
                    message.gold = new $util.LongBits(object.gold.low >>> 0, object.gold.high >>> 0).toNumber();
            if (object.diamond != null)
                if ($util.Long)
                    (message.diamond = $util.Long.fromValue(object.diamond)).unsigned = false;
                else if (typeof object.diamond === "string")
                    message.diamond = parseInt(object.diamond, 10);
                else if (typeof object.diamond === "number")
                    message.diamond = object.diamond;
                else if (typeof object.diamond === "object")
                    message.diamond = new $util.LongBits(object.diamond.low >>> 0, object.diamond.high >>> 0).toNumber();
            if (object.agentGold != null)
                if ($util.Long)
                    (message.agentGold = $util.Long.fromValue(object.agentGold)).unsigned = false;
                else if (typeof object.agentGold === "string")
                    message.agentGold = parseInt(object.agentGold, 10);
                else if (typeof object.agentGold === "number")
                    message.agentGold = object.agentGold;
                else if (typeof object.agentGold === "object")
                    message.agentGold = new $util.LongBits(object.agentGold.low >>> 0, object.agentGold.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RtcMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbsocket.RtcMsg
         * @static
         * @param {pbsocket.RtcMsg} message RtcMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RtcMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.suid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.suid = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.toUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.toUid = options.longs === String ? "0" : 0;
                object.callType = 0;
                object.actionType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.duration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.duration = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.callFormType = 0;
                object.freeCall = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.gold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.gold = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.diamond = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.diamond = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.agentGold = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.agentGold = options.longs === String ? "0" : 0;
            }
            if (message.suid != null && message.hasOwnProperty("suid"))
                if (typeof message.suid === "number")
                    object.suid = options.longs === String ? String(message.suid) : message.suid;
                else
                    object.suid = options.longs === String ? $util.Long.prototype.toString.call(message.suid) : options.longs === Number ? new $util.LongBits(message.suid.low >>> 0, message.suid.high >>> 0).toNumber() : message.suid;
            if (message.toUid != null && message.hasOwnProperty("toUid"))
                if (typeof message.toUid === "number")
                    object.toUid = options.longs === String ? String(message.toUid) : message.toUid;
                else
                    object.toUid = options.longs === String ? $util.Long.prototype.toString.call(message.toUid) : options.longs === Number ? new $util.LongBits(message.toUid.low >>> 0, message.toUid.high >>> 0).toNumber() : message.toUid;
            if (message.callType != null && message.hasOwnProperty("callType"))
                object.callType = message.callType;
            if (message.actionType != null && message.hasOwnProperty("actionType"))
                object.actionType = message.actionType;
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (typeof message.duration === "number")
                    object.duration = options.longs === String ? String(message.duration) : message.duration;
                else
                    object.duration = options.longs === String ? $util.Long.prototype.toString.call(message.duration) : options.longs === Number ? new $util.LongBits(message.duration.low >>> 0, message.duration.high >>> 0).toNumber() : message.duration;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.callFormType != null && message.hasOwnProperty("callFormType"))
                object.callFormType = message.callFormType;
            if (message.freeCall != null && message.hasOwnProperty("freeCall"))
                object.freeCall = message.freeCall;
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (typeof message.gold === "number")
                    object.gold = options.longs === String ? String(message.gold) : message.gold;
                else
                    object.gold = options.longs === String ? $util.Long.prototype.toString.call(message.gold) : options.longs === Number ? new $util.LongBits(message.gold.low >>> 0, message.gold.high >>> 0).toNumber() : message.gold;
            if (message.diamond != null && message.hasOwnProperty("diamond"))
                if (typeof message.diamond === "number")
                    object.diamond = options.longs === String ? String(message.diamond) : message.diamond;
                else
                    object.diamond = options.longs === String ? $util.Long.prototype.toString.call(message.diamond) : options.longs === Number ? new $util.LongBits(message.diamond.low >>> 0, message.diamond.high >>> 0).toNumber() : message.diamond;
            if (message.agentGold != null && message.hasOwnProperty("agentGold"))
                if (typeof message.agentGold === "number")
                    object.agentGold = options.longs === String ? String(message.agentGold) : message.agentGold;
                else
                    object.agentGold = options.longs === String ? $util.Long.prototype.toString.call(message.agentGold) : options.longs === Number ? new $util.LongBits(message.agentGold.low >>> 0, message.agentGold.high >>> 0).toNumber() : message.agentGold;
            return object;
        };

        /**
         * Converts this RtcMsg to JSON.
         * @function toJSON
         * @memberof pbsocket.RtcMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RtcMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RtcMsg
         * @function getTypeUrl
         * @memberof pbsocket.RtcMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RtcMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbsocket.RtcMsg";
        };

        return RtcMsg;
    })();

    return pbsocket;
})();

$root.pbchat = (function() {

    /**
     * Namespace pbchat.
     * @exports pbchat
     * @namespace
     */
    var pbchat = {};

    pbchat.ChatModel = (function() {

        /**
         * Properties of a ChatModel.
         * @memberof pbchat
         * @interface IChatModel
         * @property {number|Long|null} [id] ChatModel id
         * @property {string|null} [createdAt] ChatModel createdAt
         * @property {string|null} [updatedAt] ChatModel updatedAt
         * @property {pbchat.ChatType|null} [chatType] ChatModel chatType
         * @property {string|null} [content] ChatModel content
         * @property {number|Long|null} [sUserID] ChatModel sUserID
         * @property {number|Long|null} [dUserID] ChatModel dUserID
         * @property {pbuser.IUserModel|null} [sUser] ChatModel sUser
         * @property {pbuser.IUserModel|null} [dUser] ChatModel dUser
         * @property {pbchat.ContentCategory|null} [contentCategory] ChatModel contentCategory
         * @property {string|null} [url] ChatModel url
         * @property {number|null} [duration] ChatModel duration
         * @property {number|Long|null} [roomId] ChatModel roomId
         * @property {boolean|null} [isNewbee] ChatModel isNewbee
         * @property {Array.<number|Long>|null} [unReadList] ChatModel unReadList
         * @property {pbchatRoom.IChatRoomModel|null} [chatRoom] ChatModel chatRoom
         * @property {string|null} [expiredAt] ChatModel expiredAt
         * @property {pbchat.ChatExpiredType|null} [expiredType] ChatModel expiredType
         * @property {Object.<string,string>|null} [rtcData] ChatModel rtcData
         */

        /**
         * Constructs a new ChatModel.
         * @memberof pbchat
         * @classdesc Represents a ChatModel.
         * @implements IChatModel
         * @constructor
         * @param {pbchat.IChatModel=} [properties] Properties to set
         */
        function ChatModel(properties) {
            this.unReadList = [];
            this.rtcData = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatModel id.
         * @member {number|Long} id
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatModel createdAt.
         * @member {string} createdAt
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.createdAt = "";

        /**
         * ChatModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.updatedAt = "";

        /**
         * ChatModel chatType.
         * @member {pbchat.ChatType} chatType
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.chatType = 0;

        /**
         * ChatModel content.
         * @member {string} content
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.content = "";

        /**
         * ChatModel sUserID.
         * @member {number|Long} sUserID
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.sUserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatModel dUserID.
         * @member {number|Long} dUserID
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.dUserID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatModel sUser.
         * @member {pbuser.IUserModel|null|undefined} sUser
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.sUser = null;

        /**
         * ChatModel dUser.
         * @member {pbuser.IUserModel|null|undefined} dUser
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.dUser = null;

        /**
         * ChatModel contentCategory.
         * @member {pbchat.ContentCategory} contentCategory
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.contentCategory = 0;

        /**
         * ChatModel url.
         * @member {string} url
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.url = "";

        /**
         * ChatModel duration.
         * @member {number} duration
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.duration = 0;

        /**
         * ChatModel roomId.
         * @member {number|Long} roomId
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.roomId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatModel isNewbee.
         * @member {boolean} isNewbee
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.isNewbee = false;

        /**
         * ChatModel unReadList.
         * @member {Array.<number|Long>} unReadList
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.unReadList = $util.emptyArray;

        /**
         * ChatModel chatRoom.
         * @member {pbchatRoom.IChatRoomModel|null|undefined} chatRoom
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.chatRoom = null;

        /**
         * ChatModel expiredAt.
         * @member {string} expiredAt
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.expiredAt = "";

        /**
         * ChatModel expiredType.
         * @member {pbchat.ChatExpiredType} expiredType
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.expiredType = 0;

        /**
         * ChatModel rtcData.
         * @member {Object.<string,string>} rtcData
         * @memberof pbchat.ChatModel
         * @instance
         */
        ChatModel.prototype.rtcData = $util.emptyObject;

        /**
         * Creates a new ChatModel instance using the specified properties.
         * @function create
         * @memberof pbchat.ChatModel
         * @static
         * @param {pbchat.IChatModel=} [properties] Properties to set
         * @returns {pbchat.ChatModel} ChatModel instance
         */
        ChatModel.create = function create(properties) {
            return new ChatModel(properties);
        };

        /**
         * Encodes the specified ChatModel message. Does not implicitly {@link pbchat.ChatModel.verify|verify} messages.
         * @function encode
         * @memberof pbchat.ChatModel
         * @static
         * @param {pbchat.IChatModel} message ChatModel message or plain object to encode
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
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.chatType);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            if (message.sUserID != null && Object.hasOwnProperty.call(message, "sUserID"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.sUserID);
            if (message.dUserID != null && Object.hasOwnProperty.call(message, "dUserID"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.dUserID);
            if (message.sUser != null && Object.hasOwnProperty.call(message, "sUser"))
                $root.pbuser.UserModel.encode(message.sUser, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.dUser != null && Object.hasOwnProperty.call(message, "dUser"))
                $root.pbuser.UserModel.encode(message.dUser, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.contentCategory != null && Object.hasOwnProperty.call(message, "contentCategory"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.contentCategory);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.url);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.duration);
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.roomId);
            if (message.isNewbee != null && Object.hasOwnProperty.call(message, "isNewbee"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.isNewbee);
            if (message.unReadList != null && message.unReadList.length) {
                writer.uint32(/* id 15, wireType 2 =*/122).fork();
                for (var i = 0; i < message.unReadList.length; ++i)
                    writer.int64(message.unReadList[i]);
                writer.ldelim();
            }
            if (message.chatRoom != null && Object.hasOwnProperty.call(message, "chatRoom"))
                $root.pbchatRoom.ChatRoomModel.encode(message.chatRoom, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.expiredAt != null && Object.hasOwnProperty.call(message, "expiredAt"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.expiredAt);
            if (message.expiredType != null && Object.hasOwnProperty.call(message, "expiredType"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.expiredType);
            if (message.rtcData != null && Object.hasOwnProperty.call(message, "rtcData"))
                for (var keys = Object.keys(message.rtcData), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 19, wireType 2 =*/154).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.rtcData[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChatModel message, length delimited. Does not implicitly {@link pbchat.ChatModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbchat.ChatModel
         * @static
         * @param {pbchat.IChatModel} message ChatModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbchat.ChatModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbchat.ChatModel} ChatModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatModel.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbchat.ChatModel(), key, value;
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
                        message.chatType = reader.int32();
                        break;
                    }
                case 5: {
                        message.content = reader.string();
                        break;
                    }
                case 6: {
                        message.sUserID = reader.int64();
                        break;
                    }
                case 7: {
                        message.dUserID = reader.int64();
                        break;
                    }
                case 8: {
                        message.sUser = $root.pbuser.UserModel.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.dUser = $root.pbuser.UserModel.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.contentCategory = reader.int32();
                        break;
                    }
                case 11: {
                        message.url = reader.string();
                        break;
                    }
                case 12: {
                        message.duration = reader.int32();
                        break;
                    }
                case 13: {
                        message.roomId = reader.int64();
                        break;
                    }
                case 14: {
                        message.isNewbee = reader.bool();
                        break;
                    }
                case 15: {
                        if (!(message.unReadList && message.unReadList.length))
                            message.unReadList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.unReadList.push(reader.int64());
                        } else
                            message.unReadList.push(reader.int64());
                        break;
                    }
                case 16: {
                        message.chatRoom = $root.pbchatRoom.ChatRoomModel.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.expiredAt = reader.string();
                        break;
                    }
                case 18: {
                        message.expiredType = reader.int32();
                        break;
                    }
                case 19: {
                        if (message.rtcData === $util.emptyObject)
                            message.rtcData = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.rtcData[key] = value;
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
         * @memberof pbchat.ChatModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbchat.ChatModel} ChatModel
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
         * @memberof pbchat.ChatModel
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
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                switch (message.chatType) {
                default:
                    return "chatType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.sUserID != null && message.hasOwnProperty("sUserID"))
                if (!$util.isInteger(message.sUserID) && !(message.sUserID && $util.isInteger(message.sUserID.low) && $util.isInteger(message.sUserID.high)))
                    return "sUserID: integer|Long expected";
            if (message.dUserID != null && message.hasOwnProperty("dUserID"))
                if (!$util.isInteger(message.dUserID) && !(message.dUserID && $util.isInteger(message.dUserID.low) && $util.isInteger(message.dUserID.high)))
                    return "dUserID: integer|Long expected";
            if (message.sUser != null && message.hasOwnProperty("sUser")) {
                var error = $root.pbuser.UserModel.verify(message.sUser);
                if (error)
                    return "sUser." + error;
            }
            if (message.dUser != null && message.hasOwnProperty("dUser")) {
                var error = $root.pbuser.UserModel.verify(message.dUser);
                if (error)
                    return "dUser." + error;
            }
            if (message.contentCategory != null && message.hasOwnProperty("contentCategory"))
                switch (message.contentCategory) {
                default:
                    return "contentCategory: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId) && !(message.roomId && $util.isInteger(message.roomId.low) && $util.isInteger(message.roomId.high)))
                    return "roomId: integer|Long expected";
            if (message.isNewbee != null && message.hasOwnProperty("isNewbee"))
                if (typeof message.isNewbee !== "boolean")
                    return "isNewbee: boolean expected";
            if (message.unReadList != null && message.hasOwnProperty("unReadList")) {
                if (!Array.isArray(message.unReadList))
                    return "unReadList: array expected";
                for (var i = 0; i < message.unReadList.length; ++i)
                    if (!$util.isInteger(message.unReadList[i]) && !(message.unReadList[i] && $util.isInteger(message.unReadList[i].low) && $util.isInteger(message.unReadList[i].high)))
                        return "unReadList: integer|Long[] expected";
            }
            if (message.chatRoom != null && message.hasOwnProperty("chatRoom")) {
                var error = $root.pbchatRoom.ChatRoomModel.verify(message.chatRoom);
                if (error)
                    return "chatRoom." + error;
            }
            if (message.expiredAt != null && message.hasOwnProperty("expiredAt"))
                if (!$util.isString(message.expiredAt))
                    return "expiredAt: string expected";
            if (message.expiredType != null && message.hasOwnProperty("expiredType"))
                switch (message.expiredType) {
                default:
                    return "expiredType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.rtcData != null && message.hasOwnProperty("rtcData")) {
                if (!$util.isObject(message.rtcData))
                    return "rtcData: object expected";
                var key = Object.keys(message.rtcData);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isString(message.rtcData[key[i]]))
                        return "rtcData: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a ChatModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbchat.ChatModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbchat.ChatModel} ChatModel
         */
        ChatModel.fromObject = function fromObject(object) {
            if (object instanceof $root.pbchat.ChatModel)
                return object;
            var message = new $root.pbchat.ChatModel();
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
            switch (object.chatType) {
            default:
                if (typeof object.chatType === "number") {
                    message.chatType = object.chatType;
                    break;
                }
                break;
            case "PublicChat":
            case 0:
                message.chatType = 0;
                break;
            case "PrivateChat":
            case 1:
                message.chatType = 1;
                break;
            case "WebRTCMonitor":
            case 2:
                message.chatType = 2;
                break;
            }
            if (object.content != null)
                message.content = String(object.content);
            if (object.sUserID != null)
                if ($util.Long)
                    (message.sUserID = $util.Long.fromValue(object.sUserID)).unsigned = false;
                else if (typeof object.sUserID === "string")
                    message.sUserID = parseInt(object.sUserID, 10);
                else if (typeof object.sUserID === "number")
                    message.sUserID = object.sUserID;
                else if (typeof object.sUserID === "object")
                    message.sUserID = new $util.LongBits(object.sUserID.low >>> 0, object.sUserID.high >>> 0).toNumber();
            if (object.dUserID != null)
                if ($util.Long)
                    (message.dUserID = $util.Long.fromValue(object.dUserID)).unsigned = false;
                else if (typeof object.dUserID === "string")
                    message.dUserID = parseInt(object.dUserID, 10);
                else if (typeof object.dUserID === "number")
                    message.dUserID = object.dUserID;
                else if (typeof object.dUserID === "object")
                    message.dUserID = new $util.LongBits(object.dUserID.low >>> 0, object.dUserID.high >>> 0).toNumber();
            if (object.sUser != null) {
                if (typeof object.sUser !== "object")
                    throw TypeError(".pbchat.ChatModel.sUser: object expected");
                message.sUser = $root.pbuser.UserModel.fromObject(object.sUser);
            }
            if (object.dUser != null) {
                if (typeof object.dUser !== "object")
                    throw TypeError(".pbchat.ChatModel.dUser: object expected");
                message.dUser = $root.pbuser.UserModel.fromObject(object.dUser);
            }
            switch (object.contentCategory) {
            default:
                if (typeof object.contentCategory === "number") {
                    message.contentCategory = object.contentCategory;
                    break;
                }
                break;
            case "Text":
            case 0:
                message.contentCategory = 0;
                break;
            case "Video":
            case 1:
                message.contentCategory = 1;
                break;
            case "Audio":
            case 2:
                message.contentCategory = 2;
                break;
            case "Photo":
            case 3:
                message.contentCategory = 3;
                break;
            case "Other":
            case 4:
                message.contentCategory = 4;
                break;
            case "WebRTCInfo":
            case 5:
                message.contentCategory = 5;
                break;
            }
            if (object.url != null)
                message.url = String(object.url);
            if (object.duration != null)
                message.duration = object.duration | 0;
            if (object.roomId != null)
                if ($util.Long)
                    (message.roomId = $util.Long.fromValue(object.roomId)).unsigned = false;
                else if (typeof object.roomId === "string")
                    message.roomId = parseInt(object.roomId, 10);
                else if (typeof object.roomId === "number")
                    message.roomId = object.roomId;
                else if (typeof object.roomId === "object")
                    message.roomId = new $util.LongBits(object.roomId.low >>> 0, object.roomId.high >>> 0).toNumber();
            if (object.isNewbee != null)
                message.isNewbee = Boolean(object.isNewbee);
            if (object.unReadList) {
                if (!Array.isArray(object.unReadList))
                    throw TypeError(".pbchat.ChatModel.unReadList: array expected");
                message.unReadList = [];
                for (var i = 0; i < object.unReadList.length; ++i)
                    if ($util.Long)
                        (message.unReadList[i] = $util.Long.fromValue(object.unReadList[i])).unsigned = false;
                    else if (typeof object.unReadList[i] === "string")
                        message.unReadList[i] = parseInt(object.unReadList[i], 10);
                    else if (typeof object.unReadList[i] === "number")
                        message.unReadList[i] = object.unReadList[i];
                    else if (typeof object.unReadList[i] === "object")
                        message.unReadList[i] = new $util.LongBits(object.unReadList[i].low >>> 0, object.unReadList[i].high >>> 0).toNumber();
            }
            if (object.chatRoom != null) {
                if (typeof object.chatRoom !== "object")
                    throw TypeError(".pbchat.ChatModel.chatRoom: object expected");
                message.chatRoom = $root.pbchatRoom.ChatRoomModel.fromObject(object.chatRoom);
            }
            if (object.expiredAt != null)
                message.expiredAt = String(object.expiredAt);
            switch (object.expiredType) {
            default:
                if (typeof object.expiredType === "number") {
                    message.expiredType = object.expiredType;
                    break;
                }
                break;
            case "ChatExpiredTypeNone":
            case 0:
                message.expiredType = 0;
                break;
            case "Revoke":
            case 1:
                message.expiredType = 1;
                break;
            case "Burn":
            case 2:
                message.expiredType = 2;
                break;
            case "WebRTC":
            case 3:
                message.expiredType = 3;
                break;
            }
            if (object.rtcData) {
                if (typeof object.rtcData !== "object")
                    throw TypeError(".pbchat.ChatModel.rtcData: object expected");
                message.rtcData = {};
                for (var keys = Object.keys(object.rtcData), i = 0; i < keys.length; ++i)
                    message.rtcData[keys[i]] = String(object.rtcData[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChatModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbchat.ChatModel
         * @static
         * @param {pbchat.ChatModel} message ChatModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatModel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.unReadList = [];
            if (options.objects || options.defaults)
                object.rtcData = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.createdAt = "";
                object.updatedAt = "";
                object.chatType = options.enums === String ? "PublicChat" : 0;
                object.content = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sUserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sUserID = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dUserID = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dUserID = options.longs === String ? "0" : 0;
                object.sUser = null;
                object.dUser = null;
                object.contentCategory = options.enums === String ? "Text" : 0;
                object.url = "";
                object.duration = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roomId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roomId = options.longs === String ? "0" : 0;
                object.isNewbee = false;
                object.chatRoom = null;
                object.expiredAt = "";
                object.expiredType = options.enums === String ? "ChatExpiredTypeNone" : 0;
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
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                object.chatType = options.enums === String ? $root.pbchat.ChatType[message.chatType] === undefined ? message.chatType : $root.pbchat.ChatType[message.chatType] : message.chatType;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.sUserID != null && message.hasOwnProperty("sUserID"))
                if (typeof message.sUserID === "number")
                    object.sUserID = options.longs === String ? String(message.sUserID) : message.sUserID;
                else
                    object.sUserID = options.longs === String ? $util.Long.prototype.toString.call(message.sUserID) : options.longs === Number ? new $util.LongBits(message.sUserID.low >>> 0, message.sUserID.high >>> 0).toNumber() : message.sUserID;
            if (message.dUserID != null && message.hasOwnProperty("dUserID"))
                if (typeof message.dUserID === "number")
                    object.dUserID = options.longs === String ? String(message.dUserID) : message.dUserID;
                else
                    object.dUserID = options.longs === String ? $util.Long.prototype.toString.call(message.dUserID) : options.longs === Number ? new $util.LongBits(message.dUserID.low >>> 0, message.dUserID.high >>> 0).toNumber() : message.dUserID;
            if (message.sUser != null && message.hasOwnProperty("sUser"))
                object.sUser = $root.pbuser.UserModel.toObject(message.sUser, options);
            if (message.dUser != null && message.hasOwnProperty("dUser"))
                object.dUser = $root.pbuser.UserModel.toObject(message.dUser, options);
            if (message.contentCategory != null && message.hasOwnProperty("contentCategory"))
                object.contentCategory = options.enums === String ? $root.pbchat.ContentCategory[message.contentCategory] === undefined ? message.contentCategory : $root.pbchat.ContentCategory[message.contentCategory] : message.contentCategory;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (typeof message.roomId === "number")
                    object.roomId = options.longs === String ? String(message.roomId) : message.roomId;
                else
                    object.roomId = options.longs === String ? $util.Long.prototype.toString.call(message.roomId) : options.longs === Number ? new $util.LongBits(message.roomId.low >>> 0, message.roomId.high >>> 0).toNumber() : message.roomId;
            if (message.isNewbee != null && message.hasOwnProperty("isNewbee"))
                object.isNewbee = message.isNewbee;
            if (message.unReadList && message.unReadList.length) {
                object.unReadList = [];
                for (var j = 0; j < message.unReadList.length; ++j)
                    if (typeof message.unReadList[j] === "number")
                        object.unReadList[j] = options.longs === String ? String(message.unReadList[j]) : message.unReadList[j];
                    else
                        object.unReadList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.unReadList[j]) : options.longs === Number ? new $util.LongBits(message.unReadList[j].low >>> 0, message.unReadList[j].high >>> 0).toNumber() : message.unReadList[j];
            }
            if (message.chatRoom != null && message.hasOwnProperty("chatRoom"))
                object.chatRoom = $root.pbchatRoom.ChatRoomModel.toObject(message.chatRoom, options);
            if (message.expiredAt != null && message.hasOwnProperty("expiredAt"))
                object.expiredAt = message.expiredAt;
            if (message.expiredType != null && message.hasOwnProperty("expiredType"))
                object.expiredType = options.enums === String ? $root.pbchat.ChatExpiredType[message.expiredType] === undefined ? message.expiredType : $root.pbchat.ChatExpiredType[message.expiredType] : message.expiredType;
            var keys2;
            if (message.rtcData && (keys2 = Object.keys(message.rtcData)).length) {
                object.rtcData = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.rtcData[keys2[j]] = message.rtcData[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this ChatModel to JSON.
         * @function toJSON
         * @memberof pbchat.ChatModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatModel
         * @function getTypeUrl
         * @memberof pbchat.ChatModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbchat.ChatModel";
        };

        return ChatModel;
    })();

    /**
     * ChatExpiredType enum.
     * @name pbchat.ChatExpiredType
     * @enum {number}
     * @property {number} ChatExpiredTypeNone=0 ChatExpiredTypeNone value
     * @property {number} Revoke=1 Revoke value
     * @property {number} Burn=2 Burn value
     * @property {number} WebRTC=3 WebRTC value
     */
    pbchat.ChatExpiredType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ChatExpiredTypeNone"] = 0;
        values[valuesById[1] = "Revoke"] = 1;
        values[valuesById[2] = "Burn"] = 2;
        values[valuesById[3] = "WebRTC"] = 3;
        return values;
    })();

    /**
     * ChatType enum.
     * @name pbchat.ChatType
     * @enum {number}
     * @property {number} PublicChat=0 PublicChat value
     * @property {number} PrivateChat=1 PrivateChat value
     * @property {number} WebRTCMonitor=2 WebRTCMonitor value
     */
    pbchat.ChatType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PublicChat"] = 0;
        values[valuesById[1] = "PrivateChat"] = 1;
        values[valuesById[2] = "WebRTCMonitor"] = 2;
        return values;
    })();

    /**
     * ContentCategory enum.
     * @name pbchat.ContentCategory
     * @enum {number}
     * @property {number} Text=0 Text value
     * @property {number} Video=1 Video value
     * @property {number} Audio=2 Audio value
     * @property {number} Photo=3 Photo value
     * @property {number} Other=4 Other value
     * @property {number} WebRTCInfo=5 WebRTCInfo value
     */
    pbchat.ContentCategory = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Text"] = 0;
        values[valuesById[1] = "Video"] = 1;
        values[valuesById[2] = "Audio"] = 2;
        values[valuesById[3] = "Photo"] = 3;
        values[valuesById[4] = "Other"] = 4;
        values[valuesById[5] = "WebRTCInfo"] = 5;
        return values;
    })();

    pbchat.FindChatArgs = (function() {

        /**
         * Properties of a FindChatArgs.
         * @memberof pbchat
         * @interface IFindChatArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindChatArgs pageInfo
         * @property {pbchat.IChatModel|null} [query] FindChatArgs query
         */

        /**
         * Constructs a new FindChatArgs.
         * @memberof pbchat
         * @classdesc Represents a FindChatArgs.
         * @implements IFindChatArgs
         * @constructor
         * @param {pbchat.IFindChatArgs=} [properties] Properties to set
         */
        function FindChatArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindChatArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbchat.FindChatArgs
         * @instance
         */
        FindChatArgs.prototype.pageInfo = null;

        /**
         * FindChatArgs query.
         * @member {pbchat.IChatModel|null|undefined} query
         * @memberof pbchat.FindChatArgs
         * @instance
         */
        FindChatArgs.prototype.query = null;

        /**
         * Creates a new FindChatArgs instance using the specified properties.
         * @function create
         * @memberof pbchat.FindChatArgs
         * @static
         * @param {pbchat.IFindChatArgs=} [properties] Properties to set
         * @returns {pbchat.FindChatArgs} FindChatArgs instance
         */
        FindChatArgs.create = function create(properties) {
            return new FindChatArgs(properties);
        };

        /**
         * Encodes the specified FindChatArgs message. Does not implicitly {@link pbchat.FindChatArgs.verify|verify} messages.
         * @function encode
         * @memberof pbchat.FindChatArgs
         * @static
         * @param {pbchat.IFindChatArgs} message FindChatArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindChatArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.pbchat.ChatModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FindChatArgs message, length delimited. Does not implicitly {@link pbchat.FindChatArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbchat.FindChatArgs
         * @static
         * @param {pbchat.IFindChatArgs} message FindChatArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindChatArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindChatArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbchat.FindChatArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbchat.FindChatArgs} FindChatArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindChatArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbchat.FindChatArgs();
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
                        message.query = $root.pbchat.ChatModel.decode(reader, reader.uint32());
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
         * Decodes a FindChatArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbchat.FindChatArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbchat.FindChatArgs} FindChatArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindChatArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindChatArgs message.
         * @function verify
         * @memberof pbchat.FindChatArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindChatArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                var error = $root.pbchat.ChatModel.verify(message.query);
                if (error)
                    return "query." + error;
            }
            return null;
        };

        /**
         * Creates a FindChatArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbchat.FindChatArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbchat.FindChatArgs} FindChatArgs
         */
        FindChatArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbchat.FindChatArgs)
                return object;
            var message = new $root.pbchat.FindChatArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbchat.FindChatArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".pbchat.FindChatArgs.query: object expected");
                message.query = $root.pbchat.ChatModel.fromObject(object.query);
            }
            return message;
        };

        /**
         * Creates a plain object from a FindChatArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbchat.FindChatArgs
         * @static
         * @param {pbchat.FindChatArgs} message FindChatArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindChatArgs.toObject = function toObject(message, options) {
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
                object.query = $root.pbchat.ChatModel.toObject(message.query, options);
            return object;
        };

        /**
         * Converts this FindChatArgs to JSON.
         * @function toJSON
         * @memberof pbchat.FindChatArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindChatArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindChatArgs
         * @function getTypeUrl
         * @memberof pbchat.FindChatArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindChatArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbchat.FindChatArgs";
        };

        return FindChatArgs;
    })();

    pbchat.ChatListItem = (function() {

        /**
         * Properties of a ChatListItem.
         * @memberof pbchat
         * @interface IChatListItem
         * @property {number|Long|null} [sId] ChatListItem sId
         * @property {number|Long|null} [myUserId] ChatListItem myUserId
         * @property {Array.<pbuser.IUserModel>|null} [member] ChatListItem member
         * @property {Array.<pbchat.IChatModel>|null} [list] ChatListItem list
         * @property {pbchat.IChatModel|null} [lastChat] ChatListItem lastChat
         * @property {number|null} [unread] ChatListItem unread
         * @property {pbchat.ChatType|null} [chatType] ChatListItem chatType
         * @property {string|null} [name] ChatListItem name
         */

        /**
         * Constructs a new ChatListItem.
         * @memberof pbchat
         * @classdesc Represents a ChatListItem.
         * @implements IChatListItem
         * @constructor
         * @param {pbchat.IChatListItem=} [properties] Properties to set
         */
        function ChatListItem(properties) {
            this.member = [];
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatListItem sId.
         * @member {number|Long} sId
         * @memberof pbchat.ChatListItem
         * @instance
         */
        ChatListItem.prototype.sId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatListItem myUserId.
         * @member {number|Long} myUserId
         * @memberof pbchat.ChatListItem
         * @instance
         */
        ChatListItem.prototype.myUserId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatListItem member.
         * @member {Array.<pbuser.IUserModel>} member
         * @memberof pbchat.ChatListItem
         * @instance
         */
        ChatListItem.prototype.member = $util.emptyArray;

        /**
         * ChatListItem list.
         * @member {Array.<pbchat.IChatModel>} list
         * @memberof pbchat.ChatListItem
         * @instance
         */
        ChatListItem.prototype.list = $util.emptyArray;

        /**
         * ChatListItem lastChat.
         * @member {pbchat.IChatModel|null|undefined} lastChat
         * @memberof pbchat.ChatListItem
         * @instance
         */
        ChatListItem.prototype.lastChat = null;

        /**
         * ChatListItem unread.
         * @member {number} unread
         * @memberof pbchat.ChatListItem
         * @instance
         */
        ChatListItem.prototype.unread = 0;

        /**
         * ChatListItem chatType.
         * @member {pbchat.ChatType} chatType
         * @memberof pbchat.ChatListItem
         * @instance
         */
        ChatListItem.prototype.chatType = 0;

        /**
         * ChatListItem name.
         * @member {string} name
         * @memberof pbchat.ChatListItem
         * @instance
         */
        ChatListItem.prototype.name = "";

        /**
         * Creates a new ChatListItem instance using the specified properties.
         * @function create
         * @memberof pbchat.ChatListItem
         * @static
         * @param {pbchat.IChatListItem=} [properties] Properties to set
         * @returns {pbchat.ChatListItem} ChatListItem instance
         */
        ChatListItem.create = function create(properties) {
            return new ChatListItem(properties);
        };

        /**
         * Encodes the specified ChatListItem message. Does not implicitly {@link pbchat.ChatListItem.verify|verify} messages.
         * @function encode
         * @memberof pbchat.ChatListItem
         * @static
         * @param {pbchat.IChatListItem} message ChatListItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatListItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sId != null && Object.hasOwnProperty.call(message, "sId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.sId);
            if (message.myUserId != null && Object.hasOwnProperty.call(message, "myUserId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.myUserId);
            if (message.member != null && message.member.length)
                for (var i = 0; i < message.member.length; ++i)
                    $root.pbuser.UserModel.encode(message.member[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbchat.ChatModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.lastChat != null && Object.hasOwnProperty.call(message, "lastChat"))
                $root.pbchat.ChatModel.encode(message.lastChat, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.unread != null && Object.hasOwnProperty.call(message, "unread"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.unread);
            if (message.chatType != null && Object.hasOwnProperty.call(message, "chatType"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.chatType);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ChatListItem message, length delimited. Does not implicitly {@link pbchat.ChatListItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbchat.ChatListItem
         * @static
         * @param {pbchat.IChatListItem} message ChatListItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatListItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatListItem message from the specified reader or buffer.
         * @function decode
         * @memberof pbchat.ChatListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbchat.ChatListItem} ChatListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatListItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbchat.ChatListItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.sId = reader.int64();
                        break;
                    }
                case 2: {
                        message.myUserId = reader.int64();
                        break;
                    }
                case 3: {
                        if (!(message.member && message.member.length))
                            message.member = [];
                        message.member.push($root.pbuser.UserModel.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbchat.ChatModel.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.lastChat = $root.pbchat.ChatModel.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.unread = reader.int32();
                        break;
                    }
                case 7: {
                        message.chatType = reader.int32();
                        break;
                    }
                case 8: {
                        message.name = reader.string();
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
         * Decodes a ChatListItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbchat.ChatListItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbchat.ChatListItem} ChatListItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatListItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatListItem message.
         * @function verify
         * @memberof pbchat.ChatListItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatListItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sId != null && message.hasOwnProperty("sId"))
                if (!$util.isInteger(message.sId) && !(message.sId && $util.isInteger(message.sId.low) && $util.isInteger(message.sId.high)))
                    return "sId: integer|Long expected";
            if (message.myUserId != null && message.hasOwnProperty("myUserId"))
                if (!$util.isInteger(message.myUserId) && !(message.myUserId && $util.isInteger(message.myUserId.low) && $util.isInteger(message.myUserId.high)))
                    return "myUserId: integer|Long expected";
            if (message.member != null && message.hasOwnProperty("member")) {
                if (!Array.isArray(message.member))
                    return "member: array expected";
                for (var i = 0; i < message.member.length; ++i) {
                    var error = $root.pbuser.UserModel.verify(message.member[i]);
                    if (error)
                        return "member." + error;
                }
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbchat.ChatModel.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.lastChat != null && message.hasOwnProperty("lastChat")) {
                var error = $root.pbchat.ChatModel.verify(message.lastChat);
                if (error)
                    return "lastChat." + error;
            }
            if (message.unread != null && message.hasOwnProperty("unread"))
                if (!$util.isInteger(message.unread))
                    return "unread: integer expected";
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                switch (message.chatType) {
                default:
                    return "chatType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a ChatListItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbchat.ChatListItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbchat.ChatListItem} ChatListItem
         */
        ChatListItem.fromObject = function fromObject(object) {
            if (object instanceof $root.pbchat.ChatListItem)
                return object;
            var message = new $root.pbchat.ChatListItem();
            if (object.sId != null)
                if ($util.Long)
                    (message.sId = $util.Long.fromValue(object.sId)).unsigned = false;
                else if (typeof object.sId === "string")
                    message.sId = parseInt(object.sId, 10);
                else if (typeof object.sId === "number")
                    message.sId = object.sId;
                else if (typeof object.sId === "object")
                    message.sId = new $util.LongBits(object.sId.low >>> 0, object.sId.high >>> 0).toNumber();
            if (object.myUserId != null)
                if ($util.Long)
                    (message.myUserId = $util.Long.fromValue(object.myUserId)).unsigned = false;
                else if (typeof object.myUserId === "string")
                    message.myUserId = parseInt(object.myUserId, 10);
                else if (typeof object.myUserId === "number")
                    message.myUserId = object.myUserId;
                else if (typeof object.myUserId === "object")
                    message.myUserId = new $util.LongBits(object.myUserId.low >>> 0, object.myUserId.high >>> 0).toNumber();
            if (object.member) {
                if (!Array.isArray(object.member))
                    throw TypeError(".pbchat.ChatListItem.member: array expected");
                message.member = [];
                for (var i = 0; i < object.member.length; ++i) {
                    if (typeof object.member[i] !== "object")
                        throw TypeError(".pbchat.ChatListItem.member: object expected");
                    message.member[i] = $root.pbuser.UserModel.fromObject(object.member[i]);
                }
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbchat.ChatListItem.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbchat.ChatListItem.list: object expected");
                    message.list[i] = $root.pbchat.ChatModel.fromObject(object.list[i]);
                }
            }
            if (object.lastChat != null) {
                if (typeof object.lastChat !== "object")
                    throw TypeError(".pbchat.ChatListItem.lastChat: object expected");
                message.lastChat = $root.pbchat.ChatModel.fromObject(object.lastChat);
            }
            if (object.unread != null)
                message.unread = object.unread | 0;
            switch (object.chatType) {
            default:
                if (typeof object.chatType === "number") {
                    message.chatType = object.chatType;
                    break;
                }
                break;
            case "PublicChat":
            case 0:
                message.chatType = 0;
                break;
            case "PrivateChat":
            case 1:
                message.chatType = 1;
                break;
            case "WebRTCMonitor":
            case 2:
                message.chatType = 2;
                break;
            }
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a ChatListItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbchat.ChatListItem
         * @static
         * @param {pbchat.ChatListItem} message ChatListItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatListItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.member = [];
                object.list = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.sId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.myUserId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.myUserId = options.longs === String ? "0" : 0;
                object.lastChat = null;
                object.unread = 0;
                object.chatType = options.enums === String ? "PublicChat" : 0;
                object.name = "";
            }
            if (message.sId != null && message.hasOwnProperty("sId"))
                if (typeof message.sId === "number")
                    object.sId = options.longs === String ? String(message.sId) : message.sId;
                else
                    object.sId = options.longs === String ? $util.Long.prototype.toString.call(message.sId) : options.longs === Number ? new $util.LongBits(message.sId.low >>> 0, message.sId.high >>> 0).toNumber() : message.sId;
            if (message.myUserId != null && message.hasOwnProperty("myUserId"))
                if (typeof message.myUserId === "number")
                    object.myUserId = options.longs === String ? String(message.myUserId) : message.myUserId;
                else
                    object.myUserId = options.longs === String ? $util.Long.prototype.toString.call(message.myUserId) : options.longs === Number ? new $util.LongBits(message.myUserId.low >>> 0, message.myUserId.high >>> 0).toNumber() : message.myUserId;
            if (message.member && message.member.length) {
                object.member = [];
                for (var j = 0; j < message.member.length; ++j)
                    object.member[j] = $root.pbuser.UserModel.toObject(message.member[j], options);
            }
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbchat.ChatModel.toObject(message.list[j], options);
            }
            if (message.lastChat != null && message.hasOwnProperty("lastChat"))
                object.lastChat = $root.pbchat.ChatModel.toObject(message.lastChat, options);
            if (message.unread != null && message.hasOwnProperty("unread"))
                object.unread = message.unread;
            if (message.chatType != null && message.hasOwnProperty("chatType"))
                object.chatType = options.enums === String ? $root.pbchat.ChatType[message.chatType] === undefined ? message.chatType : $root.pbchat.ChatType[message.chatType] : message.chatType;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ChatListItem to JSON.
         * @function toJSON
         * @memberof pbchat.ChatListItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatListItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatListItem
         * @function getTypeUrl
         * @memberof pbchat.ChatListItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatListItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbchat.ChatListItem";
        };

        return ChatListItem;
    })();

    pbchat.FindChatReply = (function() {

        /**
         * Properties of a FindChatReply.
         * @memberof pbchat
         * @interface IFindChatReply
         * @property {pbcommon.EnumCode|null} [code] FindChatReply code
         * @property {string|null} [msg] FindChatReply msg
         * @property {pbchat.IChatModel|null} [data] FindChatReply data
         * @property {Array.<pbchat.IChatModel>|null} [list] FindChatReply list
         * @property {number|Long|null} [total] FindChatReply total
         */

        /**
         * Constructs a new FindChatReply.
         * @memberof pbchat
         * @classdesc Represents a FindChatReply.
         * @implements IFindChatReply
         * @constructor
         * @param {pbchat.IFindChatReply=} [properties] Properties to set
         */
        function FindChatReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindChatReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbchat.FindChatReply
         * @instance
         */
        FindChatReply.prototype.code = 0;

        /**
         * FindChatReply msg.
         * @member {string} msg
         * @memberof pbchat.FindChatReply
         * @instance
         */
        FindChatReply.prototype.msg = "";

        /**
         * FindChatReply data.
         * @member {pbchat.IChatModel|null|undefined} data
         * @memberof pbchat.FindChatReply
         * @instance
         */
        FindChatReply.prototype.data = null;

        /**
         * FindChatReply list.
         * @member {Array.<pbchat.IChatModel>} list
         * @memberof pbchat.FindChatReply
         * @instance
         */
        FindChatReply.prototype.list = $util.emptyArray;

        /**
         * FindChatReply total.
         * @member {number|Long} total
         * @memberof pbchat.FindChatReply
         * @instance
         */
        FindChatReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindChatReply instance using the specified properties.
         * @function create
         * @memberof pbchat.FindChatReply
         * @static
         * @param {pbchat.IFindChatReply=} [properties] Properties to set
         * @returns {pbchat.FindChatReply} FindChatReply instance
         */
        FindChatReply.create = function create(properties) {
            return new FindChatReply(properties);
        };

        /**
         * Encodes the specified FindChatReply message. Does not implicitly {@link pbchat.FindChatReply.verify|verify} messages.
         * @function encode
         * @memberof pbchat.FindChatReply
         * @static
         * @param {pbchat.IFindChatReply} message FindChatReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindChatReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbchat.ChatModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbchat.ChatModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindChatReply message, length delimited. Does not implicitly {@link pbchat.FindChatReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbchat.FindChatReply
         * @static
         * @param {pbchat.IFindChatReply} message FindChatReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindChatReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindChatReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbchat.FindChatReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbchat.FindChatReply} FindChatReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindChatReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbchat.FindChatReply();
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
                        message.data = $root.pbchat.ChatModel.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbchat.ChatModel.decode(reader, reader.uint32()));
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
         * Decodes a FindChatReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbchat.FindChatReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbchat.FindChatReply} FindChatReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindChatReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindChatReply message.
         * @function verify
         * @memberof pbchat.FindChatReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindChatReply.verify = function verify(message) {
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
                case 20001:
                case 20002:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbchat.ChatModel.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbchat.ChatModel.verify(message.list[i]);
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
         * Creates a FindChatReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbchat.FindChatReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbchat.FindChatReply} FindChatReply
         */
        FindChatReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbchat.FindChatReply)
                return object;
            var message = new $root.pbchat.FindChatReply();
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
            case "GamePhaseNotMatch":
            case 20001:
                message.code = 20001;
                break;
            case "GameNotStarted":
            case 20002:
                message.code = 20002;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbchat.FindChatReply.data: object expected");
                message.data = $root.pbchat.ChatModel.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbchat.FindChatReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbchat.FindChatReply.list: object expected");
                    message.list[i] = $root.pbchat.ChatModel.fromObject(object.list[i]);
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
         * Creates a plain object from a FindChatReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbchat.FindChatReply
         * @static
         * @param {pbchat.FindChatReply} message FindChatReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindChatReply.toObject = function toObject(message, options) {
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
                object.data = $root.pbchat.ChatModel.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbchat.ChatModel.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindChatReply to JSON.
         * @function toJSON
         * @memberof pbchat.FindChatReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindChatReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindChatReply
         * @function getTypeUrl
         * @memberof pbchat.FindChatReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindChatReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbchat.FindChatReply";
        };

        return FindChatReply;
    })();

    pbchat.Chat = (function() {

        /**
         * Constructs a new Chat service.
         * @memberof pbchat
         * @classdesc Represents a Chat
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Chat(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Chat.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Chat;

        /**
         * Creates new Chat service using the specified rpc implementation.
         * @function create
         * @memberof pbchat.Chat
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Chat} RPC service. Useful where requests and/or responses are streamed.
         */
        Chat.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbchat.Chat#createChat}.
         * @memberof pbchat.Chat
         * @typedef CreateChatCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CreateChat.
         * @function createChat
         * @memberof pbchat.Chat
         * @instance
         * @param {pbchat.IChatModel} request ChatModel message or plain object
         * @param {pbchat.Chat.CreateChatCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Chat.prototype.createChat = function createChat(request, callback) {
            return this.rpcCall(createChat, $root.pbchat.ChatModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateChat" });

        /**
         * Calls CreateChat.
         * @function createChat
         * @memberof pbchat.Chat
         * @instance
         * @param {pbchat.IChatModel} request ChatModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbchat.Chat#updateChat}.
         * @memberof pbchat.Chat
         * @typedef UpdateChatCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls UpdateChat.
         * @function updateChat
         * @memberof pbchat.Chat
         * @instance
         * @param {pbchat.IChatModel} request ChatModel message or plain object
         * @param {pbchat.Chat.UpdateChatCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Chat.prototype.updateChat = function updateChat(request, callback) {
            return this.rpcCall(updateChat, $root.pbchat.ChatModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateChat" });

        /**
         * Calls UpdateChat.
         * @function updateChat
         * @memberof pbchat.Chat
         * @instance
         * @param {pbchat.IChatModel} request ChatModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbchat.Chat#deleteChat}.
         * @memberof pbchat.Chat
         * @typedef DeleteChatCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls DeleteChat.
         * @function deleteChat
         * @memberof pbchat.Chat
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbchat.Chat.DeleteChatCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Chat.prototype.deleteChat = function deleteChat(request, callback) {
            return this.rpcCall(deleteChat, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteChat" });

        /**
         * Calls DeleteChat.
         * @function deleteChat
         * @memberof pbchat.Chat
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbchat.Chat#findChatById}.
         * @memberof pbchat.Chat
         * @typedef FindChatByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbchat.FindChatReply} [response] FindChatReply
         */

        /**
         * Calls FindChatById.
         * @function findChatById
         * @memberof pbchat.Chat
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbchat.Chat.FindChatByIdCallback} callback Node-style callback called with the error, if any, and FindChatReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Chat.prototype.findChatById = function findChatById(request, callback) {
            return this.rpcCall(findChatById, $root.pbcommon.IdArgs, $root.pbchat.FindChatReply, request, callback);
        }, "name", { value: "FindChatById" });

        /**
         * Calls FindChatById.
         * @function findChatById
         * @memberof pbchat.Chat
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbchat.FindChatReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbchat.Chat#findChatList}.
         * @memberof pbchat.Chat
         * @typedef FindChatListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbchat.FindChatReply} [response] FindChatReply
         */

        /**
         * Calls FindChatList.
         * @function findChatList
         * @memberof pbchat.Chat
         * @instance
         * @param {pbchat.IFindChatArgs} request FindChatArgs message or plain object
         * @param {pbchat.Chat.FindChatListCallback} callback Node-style callback called with the error, if any, and FindChatReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Chat.prototype.findChatList = function findChatList(request, callback) {
            return this.rpcCall(findChatList, $root.pbchat.FindChatArgs, $root.pbchat.FindChatReply, request, callback);
        }, "name", { value: "FindChatList" });

        /**
         * Calls FindChatList.
         * @function findChatList
         * @memberof pbchat.Chat
         * @instance
         * @param {pbchat.IFindChatArgs} request FindChatArgs message or plain object
         * @returns {Promise<pbchat.FindChatReply>} Promise
         * @variation 2
         */

        return Chat;
    })();

    return pbchat;
})();

$root.pbuser = (function() {

    /**
     * Namespace pbuser.
     * @exports pbuser
     * @namespace
     */
    var pbuser = {};

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
         * @property {pbuserOauth.IUserOauthModel|null} [userOauth] UserModel userOauth
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
            this.roles = [];
            this.fans = [];
            this.follows = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserModel id.
         * @member {number|Long} id
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserModel createdAt.
         * @member {string} createdAt
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.createdAt = "";

        /**
         * UserModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.updatedAt = "";

        /**
         * UserModel username.
         * @member {string} username
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.username = "";

        /**
         * UserModel password.
         * @member {string} password
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.password = "";

        /**
         * UserModel email.
         * @member {string} email
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.email = "";

        /**
         * UserModel phone.
         * @member {number|Long} phone
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.phone = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserModel nickName.
         * @member {string} nickName
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.nickName = "";

        /**
         * UserModel userOauthId.
         * @member {number|Long} userOauthId
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.userOauthId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserModel appId.
         * @member {number|Long} appId
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.appId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserModel avatar.
         * @member {string} avatar
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.avatar = "";

        /**
         * UserModel gender.
         * @member {number} gender
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.gender = 0;

        /**
         * UserModel birthday.
         * @member {string} birthday
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.birthday = "";

        /**
         * UserModel signature.
         * @member {string} signature
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.signature = "";

        /**
         * UserModel description.
         * @member {string} description
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.description = "";

        /**
         * UserModel location.
         * @member {string} location
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.location = "";

        /**
         * UserModel regip.
         * @member {string} regip
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.regip = "";

        /**
         * UserModel regtm.
         * @member {string} regtm
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.regtm = "";

        /**
         * UserModel status.
         * @member {pbuser.UserStatus} status
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.status = 0;

        /**
         * UserModel accountType.
         * @member {number} accountType
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.accountType = 0;

        /**
         * UserModel role.
         * @member {number|Long} role
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.role = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserModel pretty.
         * @member {number|Long} pretty
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.pretty = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserModel age.
         * @member {number} age
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.age = 0;

        /**
         * UserModel country.
         * @member {number} country
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.country = 0;

        /**
         * UserModel countryName.
         * @member {string} countryName
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.countryName = "";

        /**
         * UserModel city.
         * @member {string} city
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.city = "";

        /**
         * UserModel Zone.
         * @member {number} Zone
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.Zone = 0;

        /**
         * UserModel devDesc.
         * @member {string} devDesc
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.devDesc = "";

        /**
         * UserModel platform.
         * @member {string} platform
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.platform = "";

        /**
         * UserModel devUuid.
         * @member {string} devUuid
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.devUuid = "";

        /**
         * UserModel ver.
         * @member {string} ver
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.ver = "";

        /**
         * UserModel isRobt.
         * @member {number} isRobt
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.isRobt = 0;

        /**
         * UserModel certName.
         * @member {string} certName
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.certName = "";

        /**
         * UserModel certNo.
         * @member {string} certNo
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.certNo = "";

        /**
         * UserModel first.
         * @member {boolean} first
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.first = false;

        /**
         * UserModel isYoungMod.
         * @member {boolean} isYoungMod
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.isYoungMod = false;

        /**
         * UserModel roleModel.
         * @member {pbrole.IRoleModel|null|undefined} roleModel
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.roleModel = null;

        /**
         * UserModel roles.
         * @member {Array.<pbrole.IRoleModel>} roles
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.roles = $util.emptyArray;

        /**
         * UserModel fans.
         * @member {Array.<pbuser.IUserModel>} fans
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.fans = $util.emptyArray;

        /**
         * UserModel follows.
         * @member {Array.<pbuser.IUserModel>} follows
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.follows = $util.emptyArray;

        /**
         * UserModel userOauth.
         * @member {pbuserOauth.IUserOauthModel|null|undefined} userOauth
         * @memberof pbuser.UserModel
         * @instance
         */
        UserModel.prototype.userOauth = null;

        /**
         * Creates a new UserModel instance using the specified properties.
         * @function create
         * @memberof pbuser.UserModel
         * @static
         * @param {pbuser.IUserModel=} [properties] Properties to set
         * @returns {pbuser.UserModel} UserModel instance
         */
        UserModel.create = function create(properties) {
            return new UserModel(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.password);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.phone);
            if (message.nickName != null && Object.hasOwnProperty.call(message, "nickName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.nickName);
            if (message.userOauthId != null && Object.hasOwnProperty.call(message, "userOauthId"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.userOauthId);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.appId);
            if (message.avatar != null && Object.hasOwnProperty.call(message, "avatar"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.avatar);
            if (message.gender != null && Object.hasOwnProperty.call(message, "gender"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.gender);
            if (message.birthday != null && Object.hasOwnProperty.call(message, "birthday"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.birthday);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.signature);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.description);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.location);
            if (message.regip != null && Object.hasOwnProperty.call(message, "regip"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.regip);
            if (message.regtm != null && Object.hasOwnProperty.call(message, "regtm"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.regtm);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.status);
            if (message.accountType != null && Object.hasOwnProperty.call(message, "accountType"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.accountType);
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 21, wireType 0 =*/168).int64(message.role);
            if (message.pretty != null && Object.hasOwnProperty.call(message, "pretty"))
                writer.uint32(/* id 22, wireType 0 =*/176).int64(message.pretty);
            if (message.age != null && Object.hasOwnProperty.call(message, "age"))
                writer.uint32(/* id 23, wireType 0 =*/184).int32(message.age);
            if (message.country != null && Object.hasOwnProperty.call(message, "country"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.country);
            if (message.countryName != null && Object.hasOwnProperty.call(message, "countryName"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.countryName);
            if (message.city != null && Object.hasOwnProperty.call(message, "city"))
                writer.uint32(/* id 26, wireType 2 =*/210).string(message.city);
            if (message.Zone != null && Object.hasOwnProperty.call(message, "Zone"))
                writer.uint32(/* id 27, wireType 0 =*/216).int32(message.Zone);
            if (message.devDesc != null && Object.hasOwnProperty.call(message, "devDesc"))
                writer.uint32(/* id 28, wireType 2 =*/226).string(message.devDesc);
            if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.platform);
            if (message.devUuid != null && Object.hasOwnProperty.call(message, "devUuid"))
                writer.uint32(/* id 30, wireType 2 =*/242).string(message.devUuid);
            if (message.ver != null && Object.hasOwnProperty.call(message, "ver"))
                writer.uint32(/* id 31, wireType 2 =*/250).string(message.ver);
            if (message.isRobt != null && Object.hasOwnProperty.call(message, "isRobt"))
                writer.uint32(/* id 32, wireType 0 =*/256).int32(message.isRobt);
            if (message.certName != null && Object.hasOwnProperty.call(message, "certName"))
                writer.uint32(/* id 34, wireType 2 =*/274).string(message.certName);
            if (message.certNo != null && Object.hasOwnProperty.call(message, "certNo"))
                writer.uint32(/* id 35, wireType 2 =*/282).string(message.certNo);
            if (message.first != null && Object.hasOwnProperty.call(message, "first"))
                writer.uint32(/* id 36, wireType 0 =*/288).bool(message.first);
            if (message.isYoungMod != null && Object.hasOwnProperty.call(message, "isYoungMod"))
                writer.uint32(/* id 37, wireType 0 =*/296).bool(message.isYoungMod);
            if (message.roleModel != null && Object.hasOwnProperty.call(message, "roleModel"))
                $root.pbrole.RoleModel.encode(message.roleModel, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
            if (message.roles != null && message.roles.length)
                for (var i = 0; i < message.roles.length; ++i)
                    $root.pbrole.RoleModel.encode(message.roles[i], writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
            if (message.fans != null && message.fans.length)
                for (var i = 0; i < message.fans.length; ++i)
                    $root.pbuser.UserModel.encode(message.fans[i], writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim();
            if (message.follows != null && message.follows.length)
                for (var i = 0; i < message.follows.length; ++i)
                    $root.pbuser.UserModel.encode(message.follows[i], writer.uint32(/* id 41, wireType 2 =*/330).fork()).ldelim();
            if (message.userOauth != null && Object.hasOwnProperty.call(message, "userOauth"))
                $root.pbuserOauth.UserOauthModel.encode(message.userOauth, writer.uint32(/* id 42, wireType 2 =*/338).fork()).ldelim();
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        UserModel.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbuser.UserModel();
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
                        message.username = reader.string();
                        break;
                    }
                case 5: {
                        message.password = reader.string();
                        break;
                    }
                case 6: {
                        message.email = reader.string();
                        break;
                    }
                case 7: {
                        message.phone = reader.int64();
                        break;
                    }
                case 8: {
                        message.nickName = reader.string();
                        break;
                    }
                case 9: {
                        message.userOauthId = reader.int64();
                        break;
                    }
                case 10: {
                        message.appId = reader.int64();
                        break;
                    }
                case 11: {
                        message.avatar = reader.string();
                        break;
                    }
                case 12: {
                        message.gender = reader.int32();
                        break;
                    }
                case 13: {
                        message.birthday = reader.string();
                        break;
                    }
                case 14: {
                        message.signature = reader.string();
                        break;
                    }
                case 15: {
                        message.description = reader.string();
                        break;
                    }
                case 16: {
                        message.location = reader.string();
                        break;
                    }
                case 17: {
                        message.regip = reader.string();
                        break;
                    }
                case 18: {
                        message.regtm = reader.string();
                        break;
                    }
                case 19: {
                        message.status = reader.int32();
                        break;
                    }
                case 20: {
                        message.accountType = reader.int32();
                        break;
                    }
                case 21: {
                        message.role = reader.int64();
                        break;
                    }
                case 22: {
                        message.pretty = reader.int64();
                        break;
                    }
                case 23: {
                        message.age = reader.int32();
                        break;
                    }
                case 24: {
                        message.country = reader.int32();
                        break;
                    }
                case 25: {
                        message.countryName = reader.string();
                        break;
                    }
                case 26: {
                        message.city = reader.string();
                        break;
                    }
                case 27: {
                        message.Zone = reader.int32();
                        break;
                    }
                case 28: {
                        message.devDesc = reader.string();
                        break;
                    }
                case 29: {
                        message.platform = reader.string();
                        break;
                    }
                case 30: {
                        message.devUuid = reader.string();
                        break;
                    }
                case 31: {
                        message.ver = reader.string();
                        break;
                    }
                case 32: {
                        message.isRobt = reader.int32();
                        break;
                    }
                case 34: {
                        message.certName = reader.string();
                        break;
                    }
                case 35: {
                        message.certNo = reader.string();
                        break;
                    }
                case 36: {
                        message.first = reader.bool();
                        break;
                    }
                case 37: {
                        message.isYoungMod = reader.bool();
                        break;
                    }
                case 38: {
                        message.roleModel = $root.pbrole.RoleModel.decode(reader, reader.uint32());
                        break;
                    }
                case 39: {
                        if (!(message.roles && message.roles.length))
                            message.roles = [];
                        message.roles.push($root.pbrole.RoleModel.decode(reader, reader.uint32()));
                        break;
                    }
                case 40: {
                        if (!(message.fans && message.fans.length))
                            message.fans = [];
                        message.fans.push($root.pbuser.UserModel.decode(reader, reader.uint32()));
                        break;
                    }
                case 41: {
                        if (!(message.follows && message.follows.length))
                            message.follows = [];
                        message.follows.push($root.pbuser.UserModel.decode(reader, reader.uint32()));
                        break;
                    }
                case 42: {
                        message.userOauth = $root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32());
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserModel message.
         * @function verify
         * @memberof pbuser.UserModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserModel.verify = function verify(message) {
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
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (!$util.isInteger(message.phone) && !(message.phone && $util.isInteger(message.phone.low) && $util.isInteger(message.phone.high)))
                    return "phone: integer|Long expected";
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                if (!$util.isString(message.nickName))
                    return "nickName: string expected";
            if (message.userOauthId != null && message.hasOwnProperty("userOauthId"))
                if (!$util.isInteger(message.userOauthId) && !(message.userOauthId && $util.isInteger(message.userOauthId.low) && $util.isInteger(message.userOauthId.high)))
                    return "userOauthId: integer|Long expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isInteger(message.appId) && !(message.appId && $util.isInteger(message.appId.low) && $util.isInteger(message.appId.high)))
                    return "appId: integer|Long expected";
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                if (!$util.isString(message.avatar))
                    return "avatar: string expected";
            if (message.gender != null && message.hasOwnProperty("gender"))
                if (!$util.isInteger(message.gender))
                    return "gender: integer expected";
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                if (!$util.isString(message.birthday))
                    return "birthday: string expected";
            if (message.signature != null && message.hasOwnProperty("signature"))
                if (!$util.isString(message.signature))
                    return "signature: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.location != null && message.hasOwnProperty("location"))
                if (!$util.isString(message.location))
                    return "location: string expected";
            if (message.regip != null && message.hasOwnProperty("regip"))
                if (!$util.isString(message.regip))
                    return "regip: string expected";
            if (message.regtm != null && message.hasOwnProperty("regtm"))
                if (!$util.isString(message.regtm))
                    return "regtm: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.accountType != null && message.hasOwnProperty("accountType"))
                if (!$util.isInteger(message.accountType))
                    return "accountType: integer expected";
            if (message.role != null && message.hasOwnProperty("role"))
                if (!$util.isInteger(message.role) && !(message.role && $util.isInteger(message.role.low) && $util.isInteger(message.role.high)))
                    return "role: integer|Long expected";
            if (message.pretty != null && message.hasOwnProperty("pretty"))
                if (!$util.isInteger(message.pretty) && !(message.pretty && $util.isInteger(message.pretty.low) && $util.isInteger(message.pretty.high)))
                    return "pretty: integer|Long expected";
            if (message.age != null && message.hasOwnProperty("age"))
                if (!$util.isInteger(message.age))
                    return "age: integer expected";
            if (message.country != null && message.hasOwnProperty("country"))
                if (!$util.isInteger(message.country))
                    return "country: integer expected";
            if (message.countryName != null && message.hasOwnProperty("countryName"))
                if (!$util.isString(message.countryName))
                    return "countryName: string expected";
            if (message.city != null && message.hasOwnProperty("city"))
                if (!$util.isString(message.city))
                    return "city: string expected";
            if (message.Zone != null && message.hasOwnProperty("Zone"))
                if (!$util.isInteger(message.Zone))
                    return "Zone: integer expected";
            if (message.devDesc != null && message.hasOwnProperty("devDesc"))
                if (!$util.isString(message.devDesc))
                    return "devDesc: string expected";
            if (message.platform != null && message.hasOwnProperty("platform"))
                if (!$util.isString(message.platform))
                    return "platform: string expected";
            if (message.devUuid != null && message.hasOwnProperty("devUuid"))
                if (!$util.isString(message.devUuid))
                    return "devUuid: string expected";
            if (message.ver != null && message.hasOwnProperty("ver"))
                if (!$util.isString(message.ver))
                    return "ver: string expected";
            if (message.isRobt != null && message.hasOwnProperty("isRobt"))
                if (!$util.isInteger(message.isRobt))
                    return "isRobt: integer expected";
            if (message.certName != null && message.hasOwnProperty("certName"))
                if (!$util.isString(message.certName))
                    return "certName: string expected";
            if (message.certNo != null && message.hasOwnProperty("certNo"))
                if (!$util.isString(message.certNo))
                    return "certNo: string expected";
            if (message.first != null && message.hasOwnProperty("first"))
                if (typeof message.first !== "boolean")
                    return "first: boolean expected";
            if (message.isYoungMod != null && message.hasOwnProperty("isYoungMod"))
                if (typeof message.isYoungMod !== "boolean")
                    return "isYoungMod: boolean expected";
            if (message.roleModel != null && message.hasOwnProperty("roleModel")) {
                var error = $root.pbrole.RoleModel.verify(message.roleModel);
                if (error)
                    return "roleModel." + error;
            }
            if (message.roles != null && message.hasOwnProperty("roles")) {
                if (!Array.isArray(message.roles))
                    return "roles: array expected";
                for (var i = 0; i < message.roles.length; ++i) {
                    var error = $root.pbrole.RoleModel.verify(message.roles[i]);
                    if (error)
                        return "roles." + error;
                }
            }
            if (message.fans != null && message.hasOwnProperty("fans")) {
                if (!Array.isArray(message.fans))
                    return "fans: array expected";
                for (var i = 0; i < message.fans.length; ++i) {
                    var error = $root.pbuser.UserModel.verify(message.fans[i]);
                    if (error)
                        return "fans." + error;
                }
            }
            if (message.follows != null && message.hasOwnProperty("follows")) {
                if (!Array.isArray(message.follows))
                    return "follows: array expected";
                for (var i = 0; i < message.follows.length; ++i) {
                    var error = $root.pbuser.UserModel.verify(message.follows[i]);
                    if (error)
                        return "follows." + error;
                }
            }
            if (message.userOauth != null && message.hasOwnProperty("userOauth")) {
                var error = $root.pbuserOauth.UserOauthModel.verify(message.userOauth);
                if (error)
                    return "userOauth." + error;
            }
            return null;
        };

        /**
         * Creates a UserModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuser.UserModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuser.UserModel} UserModel
         */
        UserModel.fromObject = function fromObject(object) {
            if (object instanceof $root.pbuser.UserModel)
                return object;
            var message = new $root.pbuser.UserModel();
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
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                if ($util.Long)
                    (message.phone = $util.Long.fromValue(object.phone)).unsigned = false;
                else if (typeof object.phone === "string")
                    message.phone = parseInt(object.phone, 10);
                else if (typeof object.phone === "number")
                    message.phone = object.phone;
                else if (typeof object.phone === "object")
                    message.phone = new $util.LongBits(object.phone.low >>> 0, object.phone.high >>> 0).toNumber();
            if (object.nickName != null)
                message.nickName = String(object.nickName);
            if (object.userOauthId != null)
                if ($util.Long)
                    (message.userOauthId = $util.Long.fromValue(object.userOauthId)).unsigned = false;
                else if (typeof object.userOauthId === "string")
                    message.userOauthId = parseInt(object.userOauthId, 10);
                else if (typeof object.userOauthId === "number")
                    message.userOauthId = object.userOauthId;
                else if (typeof object.userOauthId === "object")
                    message.userOauthId = new $util.LongBits(object.userOauthId.low >>> 0, object.userOauthId.high >>> 0).toNumber();
            if (object.appId != null)
                if ($util.Long)
                    (message.appId = $util.Long.fromValue(object.appId)).unsigned = false;
                else if (typeof object.appId === "string")
                    message.appId = parseInt(object.appId, 10);
                else if (typeof object.appId === "number")
                    message.appId = object.appId;
                else if (typeof object.appId === "object")
                    message.appId = new $util.LongBits(object.appId.low >>> 0, object.appId.high >>> 0).toNumber();
            if (object.avatar != null)
                message.avatar = String(object.avatar);
            if (object.gender != null)
                message.gender = object.gender | 0;
            if (object.birthday != null)
                message.birthday = String(object.birthday);
            if (object.signature != null)
                message.signature = String(object.signature);
            if (object.description != null)
                message.description = String(object.description);
            if (object.location != null)
                message.location = String(object.location);
            if (object.regip != null)
                message.regip = String(object.regip);
            if (object.regtm != null)
                message.regtm = String(object.regtm);
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "UserStatusNone":
            case 0:
                message.status = 0;
                break;
            case "Normal":
            case 1:
                message.status = 1;
                break;
            case "Banned":
            case 2:
                message.status = 2;
                break;
            }
            if (object.accountType != null)
                message.accountType = object.accountType | 0;
            if (object.role != null)
                if ($util.Long)
                    (message.role = $util.Long.fromValue(object.role)).unsigned = false;
                else if (typeof object.role === "string")
                    message.role = parseInt(object.role, 10);
                else if (typeof object.role === "number")
                    message.role = object.role;
                else if (typeof object.role === "object")
                    message.role = new $util.LongBits(object.role.low >>> 0, object.role.high >>> 0).toNumber();
            if (object.pretty != null)
                if ($util.Long)
                    (message.pretty = $util.Long.fromValue(object.pretty)).unsigned = false;
                else if (typeof object.pretty === "string")
                    message.pretty = parseInt(object.pretty, 10);
                else if (typeof object.pretty === "number")
                    message.pretty = object.pretty;
                else if (typeof object.pretty === "object")
                    message.pretty = new $util.LongBits(object.pretty.low >>> 0, object.pretty.high >>> 0).toNumber();
            if (object.age != null)
                message.age = object.age | 0;
            if (object.country != null)
                message.country = object.country | 0;
            if (object.countryName != null)
                message.countryName = String(object.countryName);
            if (object.city != null)
                message.city = String(object.city);
            if (object.Zone != null)
                message.Zone = object.Zone | 0;
            if (object.devDesc != null)
                message.devDesc = String(object.devDesc);
            if (object.platform != null)
                message.platform = String(object.platform);
            if (object.devUuid != null)
                message.devUuid = String(object.devUuid);
            if (object.ver != null)
                message.ver = String(object.ver);
            if (object.isRobt != null)
                message.isRobt = object.isRobt | 0;
            if (object.certName != null)
                message.certName = String(object.certName);
            if (object.certNo != null)
                message.certNo = String(object.certNo);
            if (object.first != null)
                message.first = Boolean(object.first);
            if (object.isYoungMod != null)
                message.isYoungMod = Boolean(object.isYoungMod);
            if (object.roleModel != null) {
                if (typeof object.roleModel !== "object")
                    throw TypeError(".pbuser.UserModel.roleModel: object expected");
                message.roleModel = $root.pbrole.RoleModel.fromObject(object.roleModel);
            }
            if (object.roles) {
                if (!Array.isArray(object.roles))
                    throw TypeError(".pbuser.UserModel.roles: array expected");
                message.roles = [];
                for (var i = 0; i < object.roles.length; ++i) {
                    if (typeof object.roles[i] !== "object")
                        throw TypeError(".pbuser.UserModel.roles: object expected");
                    message.roles[i] = $root.pbrole.RoleModel.fromObject(object.roles[i]);
                }
            }
            if (object.fans) {
                if (!Array.isArray(object.fans))
                    throw TypeError(".pbuser.UserModel.fans: array expected");
                message.fans = [];
                for (var i = 0; i < object.fans.length; ++i) {
                    if (typeof object.fans[i] !== "object")
                        throw TypeError(".pbuser.UserModel.fans: object expected");
                    message.fans[i] = $root.pbuser.UserModel.fromObject(object.fans[i]);
                }
            }
            if (object.follows) {
                if (!Array.isArray(object.follows))
                    throw TypeError(".pbuser.UserModel.follows: array expected");
                message.follows = [];
                for (var i = 0; i < object.follows.length; ++i) {
                    if (typeof object.follows[i] !== "object")
                        throw TypeError(".pbuser.UserModel.follows: object expected");
                    message.follows[i] = $root.pbuser.UserModel.fromObject(object.follows[i]);
                }
            }
            if (object.userOauth != null) {
                if (typeof object.userOauth !== "object")
                    throw TypeError(".pbuser.UserModel.userOauth: object expected");
                message.userOauth = $root.pbuserOauth.UserOauthModel.fromObject(object.userOauth);
            }
            return message;
        };

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
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.roles = [];
                object.fans = [];
                object.follows = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.createdAt = "";
                object.updatedAt = "";
                object.username = "";
                object.password = "";
                object.email = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.phone = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.phone = options.longs === String ? "0" : 0;
                object.nickName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userOauthId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userOauthId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.appId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.appId = options.longs === String ? "0" : 0;
                object.avatar = "";
                object.gender = 0;
                object.birthday = "";
                object.signature = "";
                object.description = "";
                object.location = "";
                object.regip = "";
                object.regtm = "";
                object.status = options.enums === String ? "UserStatusNone" : 0;
                object.accountType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.role = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.role = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.pretty = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pretty = options.longs === String ? "0" : 0;
                object.age = 0;
                object.country = 0;
                object.countryName = "";
                object.city = "";
                object.Zone = 0;
                object.devDesc = "";
                object.platform = "";
                object.devUuid = "";
                object.ver = "";
                object.isRobt = 0;
                object.certName = "";
                object.certNo = "";
                object.first = false;
                object.isYoungMod = false;
                object.roleModel = null;
                object.userOauth = null;
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
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.phone != null && message.hasOwnProperty("phone"))
                if (typeof message.phone === "number")
                    object.phone = options.longs === String ? String(message.phone) : message.phone;
                else
                    object.phone = options.longs === String ? $util.Long.prototype.toString.call(message.phone) : options.longs === Number ? new $util.LongBits(message.phone.low >>> 0, message.phone.high >>> 0).toNumber() : message.phone;
            if (message.nickName != null && message.hasOwnProperty("nickName"))
                object.nickName = message.nickName;
            if (message.userOauthId != null && message.hasOwnProperty("userOauthId"))
                if (typeof message.userOauthId === "number")
                    object.userOauthId = options.longs === String ? String(message.userOauthId) : message.userOauthId;
                else
                    object.userOauthId = options.longs === String ? $util.Long.prototype.toString.call(message.userOauthId) : options.longs === Number ? new $util.LongBits(message.userOauthId.low >>> 0, message.userOauthId.high >>> 0).toNumber() : message.userOauthId;
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (typeof message.appId === "number")
                    object.appId = options.longs === String ? String(message.appId) : message.appId;
                else
                    object.appId = options.longs === String ? $util.Long.prototype.toString.call(message.appId) : options.longs === Number ? new $util.LongBits(message.appId.low >>> 0, message.appId.high >>> 0).toNumber() : message.appId;
            if (message.avatar != null && message.hasOwnProperty("avatar"))
                object.avatar = message.avatar;
            if (message.gender != null && message.hasOwnProperty("gender"))
                object.gender = message.gender;
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                object.birthday = message.birthday;
            if (message.signature != null && message.hasOwnProperty("signature"))
                object.signature = message.signature;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = message.location;
            if (message.regip != null && message.hasOwnProperty("regip"))
                object.regip = message.regip;
            if (message.regtm != null && message.hasOwnProperty("regtm"))
                object.regtm = message.regtm;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.pbuser.UserStatus[message.status] === undefined ? message.status : $root.pbuser.UserStatus[message.status] : message.status;
            if (message.accountType != null && message.hasOwnProperty("accountType"))
                object.accountType = message.accountType;
            if (message.role != null && message.hasOwnProperty("role"))
                if (typeof message.role === "number")
                    object.role = options.longs === String ? String(message.role) : message.role;
                else
                    object.role = options.longs === String ? $util.Long.prototype.toString.call(message.role) : options.longs === Number ? new $util.LongBits(message.role.low >>> 0, message.role.high >>> 0).toNumber() : message.role;
            if (message.pretty != null && message.hasOwnProperty("pretty"))
                if (typeof message.pretty === "number")
                    object.pretty = options.longs === String ? String(message.pretty) : message.pretty;
                else
                    object.pretty = options.longs === String ? $util.Long.prototype.toString.call(message.pretty) : options.longs === Number ? new $util.LongBits(message.pretty.low >>> 0, message.pretty.high >>> 0).toNumber() : message.pretty;
            if (message.age != null && message.hasOwnProperty("age"))
                object.age = message.age;
            if (message.country != null && message.hasOwnProperty("country"))
                object.country = message.country;
            if (message.countryName != null && message.hasOwnProperty("countryName"))
                object.countryName = message.countryName;
            if (message.city != null && message.hasOwnProperty("city"))
                object.city = message.city;
            if (message.Zone != null && message.hasOwnProperty("Zone"))
                object.Zone = message.Zone;
            if (message.devDesc != null && message.hasOwnProperty("devDesc"))
                object.devDesc = message.devDesc;
            if (message.platform != null && message.hasOwnProperty("platform"))
                object.platform = message.platform;
            if (message.devUuid != null && message.hasOwnProperty("devUuid"))
                object.devUuid = message.devUuid;
            if (message.ver != null && message.hasOwnProperty("ver"))
                object.ver = message.ver;
            if (message.isRobt != null && message.hasOwnProperty("isRobt"))
                object.isRobt = message.isRobt;
            if (message.certName != null && message.hasOwnProperty("certName"))
                object.certName = message.certName;
            if (message.certNo != null && message.hasOwnProperty("certNo"))
                object.certNo = message.certNo;
            if (message.first != null && message.hasOwnProperty("first"))
                object.first = message.first;
            if (message.isYoungMod != null && message.hasOwnProperty("isYoungMod"))
                object.isYoungMod = message.isYoungMod;
            if (message.roleModel != null && message.hasOwnProperty("roleModel"))
                object.roleModel = $root.pbrole.RoleModel.toObject(message.roleModel, options);
            if (message.roles && message.roles.length) {
                object.roles = [];
                for (var j = 0; j < message.roles.length; ++j)
                    object.roles[j] = $root.pbrole.RoleModel.toObject(message.roles[j], options);
            }
            if (message.fans && message.fans.length) {
                object.fans = [];
                for (var j = 0; j < message.fans.length; ++j)
                    object.fans[j] = $root.pbuser.UserModel.toObject(message.fans[j], options);
            }
            if (message.follows && message.follows.length) {
                object.follows = [];
                for (var j = 0; j < message.follows.length; ++j)
                    object.follows[j] = $root.pbuser.UserModel.toObject(message.follows[j], options);
            }
            if (message.userOauth != null && message.hasOwnProperty("userOauth"))
                object.userOauth = $root.pbuserOauth.UserOauthModel.toObject(message.userOauth, options);
            return object;
        };

        /**
         * Converts this UserModel to JSON.
         * @function toJSON
         * @memberof pbuser.UserModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbuser.UserModel";
        };

        return UserModel;
    })();

    /**
     * UserStatus enum.
     * @name pbuser.UserStatus
     * @enum {number}
     * @property {number} UserStatusNone=0 UserStatusNone value
     * @property {number} Normal=1 Normal value
     * @property {number} Banned=2 Banned value
     */
    pbuser.UserStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UserStatusNone"] = 0;
        values[valuesById[1] = "Normal"] = 1;
        values[valuesById[2] = "Banned"] = 2;
        return values;
    })();

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
     * @property {number} Casdoor=6 Casdoor value
     * @property {number} Hala=7 Hala value
     */
    pbuser.AccountType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AccountTypeNone"] = 0;
        values[valuesById[1] = "Wechat"] = 1;
        values[valuesById[2] = "Phone"] = 2;
        values[valuesById[3] = "Email"] = 3;
        values[valuesById[4] = "Admin"] = 4;
        values[valuesById[5] = "Anonymously"] = 5;
        values[valuesById[6] = "Casdoor"] = 6;
        values[valuesById[7] = "Hala"] = 7;
        return values;
    })();

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindUserArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbuser.FindUserArgs
         * @instance
         */
        FindUserArgs.prototype.pageInfo = null;

        /**
         * FindUserArgs query.
         * @member {pbuser.IUserModel|null|undefined} query
         * @memberof pbuser.FindUserArgs
         * @instance
         */
        FindUserArgs.prototype.query = null;

        /**
         * Creates a new FindUserArgs instance using the specified properties.
         * @function create
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {pbuser.IFindUserArgs=} [properties] Properties to set
         * @returns {pbuser.FindUserArgs} FindUserArgs instance
         */
        FindUserArgs.create = function create(properties) {
            return new FindUserArgs(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.pbuser.UserModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        FindUserArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbuser.FindUserArgs();
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
                        message.query = $root.pbuser.UserModel.decode(reader, reader.uint32());
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindUserArgs message.
         * @function verify
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindUserArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                var error = $root.pbuser.UserModel.verify(message.query);
                if (error)
                    return "query." + error;
            }
            return null;
        };

        /**
         * Creates a FindUserArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuser.FindUserArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuser.FindUserArgs} FindUserArgs
         */
        FindUserArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbuser.FindUserArgs)
                return object;
            var message = new $root.pbuser.FindUserArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbuser.FindUserArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".pbuser.FindUserArgs.query: object expected");
                message.query = $root.pbuser.UserModel.fromObject(object.query);
            }
            return message;
        };

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
                object.query = $root.pbuser.UserModel.toObject(message.query, options);
            return object;
        };

        /**
         * Converts this FindUserArgs to JSON.
         * @function toJSON
         * @memberof pbuser.FindUserArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindUserArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbuser.FindUserArgs";
        };

        return FindUserArgs;
    })();

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
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindUserReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbuser.FindUserReply
         * @instance
         */
        FindUserReply.prototype.code = 0;

        /**
         * FindUserReply msg.
         * @member {string} msg
         * @memberof pbuser.FindUserReply
         * @instance
         */
        FindUserReply.prototype.msg = "";

        /**
         * FindUserReply data.
         * @member {pbuser.IUserModel|null|undefined} data
         * @memberof pbuser.FindUserReply
         * @instance
         */
        FindUserReply.prototype.data = null;

        /**
         * FindUserReply list.
         * @member {Array.<pbuser.IUserModel>} list
         * @memberof pbuser.FindUserReply
         * @instance
         */
        FindUserReply.prototype.list = $util.emptyArray;

        /**
         * FindUserReply total.
         * @member {number|Long} total
         * @memberof pbuser.FindUserReply
         * @instance
         */
        FindUserReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindUserReply instance using the specified properties.
         * @function create
         * @memberof pbuser.FindUserReply
         * @static
         * @param {pbuser.IFindUserReply=} [properties] Properties to set
         * @returns {pbuser.FindUserReply} FindUserReply instance
         */
        FindUserReply.create = function create(properties) {
            return new FindUserReply(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbuser.UserModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbuser.UserModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        FindUserReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbuser.FindUserReply();
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
                        message.data = $root.pbuser.UserModel.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbuser.UserModel.decode(reader, reader.uint32()));
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindUserReply message.
         * @function verify
         * @memberof pbuser.FindUserReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindUserReply.verify = function verify(message) {
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
                case 20001:
                case 20002:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbuser.UserModel.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbuser.UserModel.verify(message.list[i]);
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
         * Creates a FindUserReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuser.FindUserReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuser.FindUserReply} FindUserReply
         */
        FindUserReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbuser.FindUserReply)
                return object;
            var message = new $root.pbuser.FindUserReply();
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
            case "GamePhaseNotMatch":
            case 20001:
                message.code = 20001;
                break;
            case "GameNotStarted":
            case 20002:
                message.code = 20002;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbuser.FindUserReply.data: object expected");
                message.data = $root.pbuser.UserModel.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbuser.FindUserReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbuser.FindUserReply.list: object expected");
                    message.list[i] = $root.pbuser.UserModel.fromObject(object.list[i]);
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
         * Creates a plain object from a FindUserReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbuser.FindUserReply
         * @static
         * @param {pbuser.FindUserReply} message FindUserReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindUserReply.toObject = function toObject(message, options) {
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
                object.data = $root.pbuser.UserModel.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbuser.UserModel.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindUserReply to JSON.
         * @function toJSON
         * @memberof pbuser.FindUserReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindUserReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbuser.FindUserReply";
        };

        return FindUserReply;
    })();

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindUserFansAndFollowsArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbuser.FindUserFansAndFollowsArgs
         * @instance
         */
        FindUserFansAndFollowsArgs.prototype.pageInfo = null;

        /**
         * FindUserFansAndFollowsArgs userId.
         * @member {number|Long} userId
         * @memberof pbuser.FindUserFansAndFollowsArgs
         * @instance
         */
        FindUserFansAndFollowsArgs.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FindUserFansAndFollowsArgs type.
         * @member {pbuser.FindUserFansAndFollowsArgs.findType} type
         * @memberof pbuser.FindUserFansAndFollowsArgs
         * @instance
         */
        FindUserFansAndFollowsArgs.prototype.type = 0;

        /**
         * FindUserFansAndFollowsArgs query.
         * @member {string} query
         * @memberof pbuser.FindUserFansAndFollowsArgs
         * @instance
         */
        FindUserFansAndFollowsArgs.prototype.query = "";

        /**
         * Creates a new FindUserFansAndFollowsArgs instance using the specified properties.
         * @function create
         * @memberof pbuser.FindUserFansAndFollowsArgs
         * @static
         * @param {pbuser.IFindUserFansAndFollowsArgs=} [properties] Properties to set
         * @returns {pbuser.FindUserFansAndFollowsArgs} FindUserFansAndFollowsArgs instance
         */
        FindUserFansAndFollowsArgs.create = function create(properties) {
            return new FindUserFansAndFollowsArgs(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.query);
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        FindUserFansAndFollowsArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbuser.FindUserFansAndFollowsArgs();
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
                        message.userId = reader.int64();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.query = reader.string();
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindUserFansAndFollowsArgs message.
         * @function verify
         * @memberof pbuser.FindUserFansAndFollowsArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindUserFansAndFollowsArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.query != null && message.hasOwnProperty("query"))
                if (!$util.isString(message.query))
                    return "query: string expected";
            return null;
        };

        /**
         * Creates a FindUserFansAndFollowsArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuser.FindUserFansAndFollowsArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuser.FindUserFansAndFollowsArgs} FindUserFansAndFollowsArgs
         */
        FindUserFansAndFollowsArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbuser.FindUserFansAndFollowsArgs)
                return object;
            var message = new $root.pbuser.FindUserFansAndFollowsArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbuser.FindUserFansAndFollowsArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
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
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "fans":
            case 0:
                message.type = 0;
                break;
            case "follows":
            case 1:
                message.type = 1;
                break;
            }
            if (object.query != null)
                message.query = String(object.query);
            return message;
        };

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
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pageInfo = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.type = options.enums === String ? "fans" : 0;
                object.query = "";
            }
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options);
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.pbuser.FindUserFansAndFollowsArgs.findType[message.type] === undefined ? message.type : $root.pbuser.FindUserFansAndFollowsArgs.findType[message.type] : message.type;
            if (message.query != null && message.hasOwnProperty("query"))
                object.query = message.query;
            return object;
        };

        /**
         * Converts this FindUserFansAndFollowsArgs to JSON.
         * @function toJSON
         * @memberof pbuser.FindUserFansAndFollowsArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindUserFansAndFollowsArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindUserFansAndFollowsArgs
         * @function getTypeUrl
         * @memberof pbuser.FindUserFansAndFollowsArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindUserFansAndFollowsArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbuser.FindUserFansAndFollowsArgs";
        };

        /**
         * findType enum.
         * @name pbuser.FindUserFansAndFollowsArgs.findType
         * @enum {number}
         * @property {number} fans=0 fans value
         * @property {number} follows=1 follows value
         */
        FindUserFansAndFollowsArgs.findType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "fans"] = 0;
            values[valuesById[1] = "follows"] = 1;
            return values;
        })();

        return FindUserFansAndFollowsArgs;
    })();

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
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (User.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = User;

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
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

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
            return this.rpcCall(createUser, $root.pbuser.UserModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateUser" });

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
            return this.rpcCall(updateUser, $root.pbuser.UserModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateUser" });

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
            return this.rpcCall(deleteUser, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteUser" });

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
            return this.rpcCall(findUserById, $root.pbcommon.IdArgs, $root.pbuser.FindUserReply, request, callback);
        }, "name", { value: "FindUserById" });

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
            return this.rpcCall(findUser, $root.pbcommon.Empty, $root.pbuser.FindUserReply, request, callback);
        }, "name", { value: "FindUser" });

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
            return this.rpcCall(findUserList, $root.pbuser.FindUserArgs, $root.pbuser.FindUserReply, request, callback);
        }, "name", { value: "FindUserList" });

        /**
         * Calls FindUserList.
         * @function findUserList
         * @memberof pbuser.User
         * @instance
         * @param {pbuser.IFindUserArgs} request FindUserArgs message or plain object
         * @returns {Promise<pbuser.FindUserReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbuser.User#editUserInfo}.
         * @memberof pbuser.User
         * @typedef EditUserInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbuser.FindUserReply} [response] FindUserReply
         */

        /**
         * Calls EditUserInfo.
         * @function editUserInfo
         * @memberof pbuser.User
         * @instance
         * @param {pbuser.IUserModel} request UserModel message or plain object
         * @param {pbuser.User.EditUserInfoCallback} callback Node-style callback called with the error, if any, and FindUserReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(User.prototype.editUserInfo = function editUserInfo(request, callback) {
            return this.rpcCall(editUserInfo, $root.pbuser.UserModel, $root.pbuser.FindUserReply, request, callback);
        }, "name", { value: "EditUserInfo" });

        /**
         * Calls EditUserInfo.
         * @function editUserInfo
         * @memberof pbuser.User
         * @instance
         * @param {pbuser.IUserModel} request UserModel message or plain object
         * @returns {Promise<pbuser.FindUserReply>} Promise
         * @variation 2
         */

        return User;
    })();

    return pbuser;
})();

$root.pbrole = (function() {

    /**
     * Namespace pbrole.
     * @exports pbrole
     * @namespace
     */
    var pbrole = {};

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
            this.permissions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoleModel id.
         * @member {number|Long} id
         * @memberof pbrole.RoleModel
         * @instance
         */
        RoleModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoleModel createdAt.
         * @member {string} createdAt
         * @memberof pbrole.RoleModel
         * @instance
         */
        RoleModel.prototype.createdAt = "";

        /**
         * RoleModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbrole.RoleModel
         * @instance
         */
        RoleModel.prototype.updatedAt = "";

        /**
         * RoleModel parentId.
         * @member {number|Long} parentId
         * @memberof pbrole.RoleModel
         * @instance
         */
        RoleModel.prototype.parentId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RoleModel roleName.
         * @member {string} roleName
         * @memberof pbrole.RoleModel
         * @instance
         */
        RoleModel.prototype.roleName = "";

        /**
         * RoleModel roleCode.
         * @member {number} roleCode
         * @memberof pbrole.RoleModel
         * @instance
         */
        RoleModel.prototype.roleCode = 0;

        /**
         * RoleModel roleDesc.
         * @member {string} roleDesc
         * @memberof pbrole.RoleModel
         * @instance
         */
        RoleModel.prototype.roleDesc = "";

        /**
         * RoleModel roleType.
         * @member {pbrole.RoleType} roleType
         * @memberof pbrole.RoleModel
         * @instance
         */
        RoleModel.prototype.roleType = 0;

        /**
         * RoleModel roleStatus.
         * @member {number} roleStatus
         * @memberof pbrole.RoleModel
         * @instance
         */
        RoleModel.prototype.roleStatus = 0;

        /**
         * RoleModel permissions.
         * @member {Array.<pbpermission.IPermissionModel>} permissions
         * @memberof pbrole.RoleModel
         * @instance
         */
        RoleModel.prototype.permissions = $util.emptyArray;

        /**
         * Creates a new RoleModel instance using the specified properties.
         * @function create
         * @memberof pbrole.RoleModel
         * @static
         * @param {pbrole.IRoleModel=} [properties] Properties to set
         * @returns {pbrole.RoleModel} RoleModel instance
         */
        RoleModel.create = function create(properties) {
            return new RoleModel(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.parentId);
            if (message.roleName != null && Object.hasOwnProperty.call(message, "roleName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.roleName);
            if (message.roleCode != null && Object.hasOwnProperty.call(message, "roleCode"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.roleCode);
            if (message.roleDesc != null && Object.hasOwnProperty.call(message, "roleDesc"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.roleDesc);
            if (message.roleType != null && Object.hasOwnProperty.call(message, "roleType"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.roleType);
            if (message.roleStatus != null && Object.hasOwnProperty.call(message, "roleStatus"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.roleStatus);
            if (message.permissions != null && message.permissions.length)
                for (var i = 0; i < message.permissions.length; ++i)
                    $root.pbpermission.PermissionModel.encode(message.permissions[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        RoleModel.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbrole.RoleModel();
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
                        message.parentId = reader.int64();
                        break;
                    }
                case 5: {
                        message.roleName = reader.string();
                        break;
                    }
                case 6: {
                        message.roleCode = reader.int32();
                        break;
                    }
                case 7: {
                        message.roleDesc = reader.string();
                        break;
                    }
                case 8: {
                        message.roleType = reader.int32();
                        break;
                    }
                case 9: {
                        message.roleStatus = reader.int32();
                        break;
                    }
                case 10: {
                        if (!(message.permissions && message.permissions.length))
                            message.permissions = [];
                        message.permissions.push($root.pbpermission.PermissionModel.decode(reader, reader.uint32()));
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoleModel message.
         * @function verify
         * @memberof pbrole.RoleModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoleModel.verify = function verify(message) {
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
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isInteger(message.parentId) && !(message.parentId && $util.isInteger(message.parentId.low) && $util.isInteger(message.parentId.high)))
                    return "parentId: integer|Long expected";
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                if (!$util.isString(message.roleName))
                    return "roleName: string expected";
            if (message.roleCode != null && message.hasOwnProperty("roleCode"))
                if (!$util.isInteger(message.roleCode))
                    return "roleCode: integer expected";
            if (message.roleDesc != null && message.hasOwnProperty("roleDesc"))
                if (!$util.isString(message.roleDesc))
                    return "roleDesc: string expected";
            if (message.roleType != null && message.hasOwnProperty("roleType"))
                switch (message.roleType) {
                default:
                    return "roleType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.roleStatus != null && message.hasOwnProperty("roleStatus"))
                if (!$util.isInteger(message.roleStatus))
                    return "roleStatus: integer expected";
            if (message.permissions != null && message.hasOwnProperty("permissions")) {
                if (!Array.isArray(message.permissions))
                    return "permissions: array expected";
                for (var i = 0; i < message.permissions.length; ++i) {
                    var error = $root.pbpermission.PermissionModel.verify(message.permissions[i]);
                    if (error)
                        return "permissions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoleModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbrole.RoleModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbrole.RoleModel} RoleModel
         */
        RoleModel.fromObject = function fromObject(object) {
            if (object instanceof $root.pbrole.RoleModel)
                return object;
            var message = new $root.pbrole.RoleModel();
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
            if (object.parentId != null)
                if ($util.Long)
                    (message.parentId = $util.Long.fromValue(object.parentId)).unsigned = false;
                else if (typeof object.parentId === "string")
                    message.parentId = parseInt(object.parentId, 10);
                else if (typeof object.parentId === "number")
                    message.parentId = object.parentId;
                else if (typeof object.parentId === "object")
                    message.parentId = new $util.LongBits(object.parentId.low >>> 0, object.parentId.high >>> 0).toNumber();
            if (object.roleName != null)
                message.roleName = String(object.roleName);
            if (object.roleCode != null)
                message.roleCode = object.roleCode | 0;
            if (object.roleDesc != null)
                message.roleDesc = String(object.roleDesc);
            switch (object.roleType) {
            default:
                if (typeof object.roleType === "number") {
                    message.roleType = object.roleType;
                    break;
                }
                break;
            case "ROLE_TYPE_NONE":
            case 0:
                message.roleType = 0;
                break;
            case "ADMIN":
            case 1:
                message.roleType = 1;
                break;
            case "APP":
            case 2:
                message.roleType = 2;
                break;
            }
            if (object.roleStatus != null)
                message.roleStatus = object.roleStatus | 0;
            if (object.permissions) {
                if (!Array.isArray(object.permissions))
                    throw TypeError(".pbrole.RoleModel.permissions: array expected");
                message.permissions = [];
                for (var i = 0; i < object.permissions.length; ++i) {
                    if (typeof object.permissions[i] !== "object")
                        throw TypeError(".pbrole.RoleModel.permissions: object expected");
                    message.permissions[i] = $root.pbpermission.PermissionModel.fromObject(object.permissions[i]);
                }
            }
            return message;
        };

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
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.permissions = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.createdAt = "";
                object.updatedAt = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.parentId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.parentId = options.longs === String ? "0" : 0;
                object.roleName = "";
                object.roleCode = 0;
                object.roleDesc = "";
                object.roleType = options.enums === String ? "ROLE_TYPE_NONE" : 0;
                object.roleStatus = 0;
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
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (typeof message.parentId === "number")
                    object.parentId = options.longs === String ? String(message.parentId) : message.parentId;
                else
                    object.parentId = options.longs === String ? $util.Long.prototype.toString.call(message.parentId) : options.longs === Number ? new $util.LongBits(message.parentId.low >>> 0, message.parentId.high >>> 0).toNumber() : message.parentId;
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                object.roleName = message.roleName;
            if (message.roleCode != null && message.hasOwnProperty("roleCode"))
                object.roleCode = message.roleCode;
            if (message.roleDesc != null && message.hasOwnProperty("roleDesc"))
                object.roleDesc = message.roleDesc;
            if (message.roleType != null && message.hasOwnProperty("roleType"))
                object.roleType = options.enums === String ? $root.pbrole.RoleType[message.roleType] === undefined ? message.roleType : $root.pbrole.RoleType[message.roleType] : message.roleType;
            if (message.roleStatus != null && message.hasOwnProperty("roleStatus"))
                object.roleStatus = message.roleStatus;
            if (message.permissions && message.permissions.length) {
                object.permissions = [];
                for (var j = 0; j < message.permissions.length; ++j)
                    object.permissions[j] = $root.pbpermission.PermissionModel.toObject(message.permissions[j], options);
            }
            return object;
        };

        /**
         * Converts this RoleModel to JSON.
         * @function toJSON
         * @memberof pbrole.RoleModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoleModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoleModel
         * @function getTypeUrl
         * @memberof pbrole.RoleModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoleModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbrole.RoleModel";
        };

        return RoleModel;
    })();

    /**
     * RoleType enum.
     * @name pbrole.RoleType
     * @enum {number}
     * @property {number} ROLE_TYPE_NONE=0 ROLE_TYPE_NONE value
     * @property {number} ADMIN=1 ADMIN value
     * @property {number} APP=2 APP value
     */
    pbrole.RoleType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ROLE_TYPE_NONE"] = 0;
        values[valuesById[1] = "ADMIN"] = 1;
        values[valuesById[2] = "APP"] = 2;
        return values;
    })();

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindRoleArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbrole.FindRoleArgs
         * @instance
         */
        FindRoleArgs.prototype.pageInfo = null;

        /**
         * FindRoleArgs query.
         * @member {pbrole.IRoleModel|null|undefined} query
         * @memberof pbrole.FindRoleArgs
         * @instance
         */
        FindRoleArgs.prototype.query = null;

        /**
         * Creates a new FindRoleArgs instance using the specified properties.
         * @function create
         * @memberof pbrole.FindRoleArgs
         * @static
         * @param {pbrole.IFindRoleArgs=} [properties] Properties to set
         * @returns {pbrole.FindRoleArgs} FindRoleArgs instance
         */
        FindRoleArgs.create = function create(properties) {
            return new FindRoleArgs(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.pbrole.RoleModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        FindRoleArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbrole.FindRoleArgs();
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
                        message.query = $root.pbrole.RoleModel.decode(reader, reader.uint32());
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindRoleArgs message.
         * @function verify
         * @memberof pbrole.FindRoleArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindRoleArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                var error = $root.pbrole.RoleModel.verify(message.query);
                if (error)
                    return "query." + error;
            }
            return null;
        };

        /**
         * Creates a FindRoleArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbrole.FindRoleArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbrole.FindRoleArgs} FindRoleArgs
         */
        FindRoleArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbrole.FindRoleArgs)
                return object;
            var message = new $root.pbrole.FindRoleArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbrole.FindRoleArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".pbrole.FindRoleArgs.query: object expected");
                message.query = $root.pbrole.RoleModel.fromObject(object.query);
            }
            return message;
        };

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
                object.query = $root.pbrole.RoleModel.toObject(message.query, options);
            return object;
        };

        /**
         * Converts this FindRoleArgs to JSON.
         * @function toJSON
         * @memberof pbrole.FindRoleArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindRoleArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindRoleArgs
         * @function getTypeUrl
         * @memberof pbrole.FindRoleArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindRoleArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbrole.FindRoleArgs";
        };

        return FindRoleArgs;
    })();

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
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindRoleReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbrole.FindRoleReply
         * @instance
         */
        FindRoleReply.prototype.code = 0;

        /**
         * FindRoleReply msg.
         * @member {string} msg
         * @memberof pbrole.FindRoleReply
         * @instance
         */
        FindRoleReply.prototype.msg = "";

        /**
         * FindRoleReply data.
         * @member {pbrole.IRoleModel|null|undefined} data
         * @memberof pbrole.FindRoleReply
         * @instance
         */
        FindRoleReply.prototype.data = null;

        /**
         * FindRoleReply list.
         * @member {Array.<pbrole.IRoleModel>} list
         * @memberof pbrole.FindRoleReply
         * @instance
         */
        FindRoleReply.prototype.list = $util.emptyArray;

        /**
         * FindRoleReply total.
         * @member {number|Long} total
         * @memberof pbrole.FindRoleReply
         * @instance
         */
        FindRoleReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindRoleReply instance using the specified properties.
         * @function create
         * @memberof pbrole.FindRoleReply
         * @static
         * @param {pbrole.IFindRoleReply=} [properties] Properties to set
         * @returns {pbrole.FindRoleReply} FindRoleReply instance
         */
        FindRoleReply.create = function create(properties) {
            return new FindRoleReply(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbrole.RoleModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbrole.RoleModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        FindRoleReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbrole.FindRoleReply();
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
                        message.data = $root.pbrole.RoleModel.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbrole.RoleModel.decode(reader, reader.uint32()));
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindRoleReply message.
         * @function verify
         * @memberof pbrole.FindRoleReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindRoleReply.verify = function verify(message) {
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
                case 20001:
                case 20002:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbrole.RoleModel.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbrole.RoleModel.verify(message.list[i]);
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
         * Creates a FindRoleReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbrole.FindRoleReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbrole.FindRoleReply} FindRoleReply
         */
        FindRoleReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbrole.FindRoleReply)
                return object;
            var message = new $root.pbrole.FindRoleReply();
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
            case "GamePhaseNotMatch":
            case 20001:
                message.code = 20001;
                break;
            case "GameNotStarted":
            case 20002:
                message.code = 20002;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbrole.FindRoleReply.data: object expected");
                message.data = $root.pbrole.RoleModel.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbrole.FindRoleReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbrole.FindRoleReply.list: object expected");
                    message.list[i] = $root.pbrole.RoleModel.fromObject(object.list[i]);
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
         * Creates a plain object from a FindRoleReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbrole.FindRoleReply
         * @static
         * @param {pbrole.FindRoleReply} message FindRoleReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindRoleReply.toObject = function toObject(message, options) {
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
                object.data = $root.pbrole.RoleModel.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbrole.RoleModel.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindRoleReply to JSON.
         * @function toJSON
         * @memberof pbrole.FindRoleReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindRoleReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindRoleReply
         * @function getTypeUrl
         * @memberof pbrole.FindRoleReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindRoleReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbrole.FindRoleReply";
        };

        return FindRoleReply;
    })();

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
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Role.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Role;

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
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

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
            return this.rpcCall(createRole, $root.pbrole.RoleModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateRole" });

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
            return this.rpcCall(updateRole, $root.pbrole.RoleModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateRole" });

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
            return this.rpcCall(deleteRole, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteRole" });

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
            return this.rpcCall(findRoleById, $root.pbcommon.IdArgs, $root.pbrole.FindRoleReply, request, callback);
        }, "name", { value: "FindRoleById" });

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
            return this.rpcCall(findRoleList, $root.pbrole.FindRoleArgs, $root.pbrole.FindRoleReply, request, callback);
        }, "name", { value: "FindRoleList" });

        /**
         * Calls FindRoleList.
         * @function findRoleList
         * @memberof pbrole.Role
         * @instance
         * @param {pbrole.IFindRoleArgs} request FindRoleArgs message or plain object
         * @returns {Promise<pbrole.FindRoleReply>} Promise
         * @variation 2
         */

        return Role;
    })();

    return pbrole;
})();

$root.pbpermission = (function() {

    /**
     * Namespace pbpermission.
     * @exports pbpermission
     * @namespace
     */
    var pbpermission = {};

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
            this.children = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PermissionModel id.
         * @member {number|Long} id
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PermissionModel createdAt.
         * @member {string} createdAt
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.createdAt = "";

        /**
         * PermissionModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.updatedAt = "";

        /**
         * PermissionModel parentId.
         * @member {number|Long} parentId
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.parentId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PermissionModel permissionType.
         * @member {pbpermission.PermissionType} permissionType
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.permissionType = 0;

        /**
         * PermissionModel path.
         * @member {string} path
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.path = "";

        /**
         * PermissionModel name.
         * @member {string} name
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.name = "";

        /**
         * PermissionModel hidden.
         * @member {boolean} hidden
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.hidden = false;

        /**
         * PermissionModel component.
         * @member {string} component
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.component = "";

        /**
         * PermissionModel redirect.
         * @member {string} redirect
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.redirect = "";

        /**
         * PermissionModel icon.
         * @member {string} icon
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.icon = "";

        /**
         * PermissionModel keepalive.
         * @member {boolean} keepalive
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.keepalive = false;

        /**
         * PermissionModel title.
         * @member {string} title
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.title = "";

        /**
         * PermissionModel appId.
         * @member {number|Long} appId
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.appId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PermissionModel children.
         * @member {Array.<pbpermission.IPermissionModel>} children
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.children = $util.emptyArray;

        /**
         * PermissionModel sort.
         * @member {number} sort
         * @memberof pbpermission.PermissionModel
         * @instance
         */
        PermissionModel.prototype.sort = 0;

        /**
         * Creates a new PermissionModel instance using the specified properties.
         * @function create
         * @memberof pbpermission.PermissionModel
         * @static
         * @param {pbpermission.IPermissionModel=} [properties] Properties to set
         * @returns {pbpermission.PermissionModel} PermissionModel instance
         */
        PermissionModel.create = function create(properties) {
            return new PermissionModel(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.parentId);
            if (message.permissionType != null && Object.hasOwnProperty.call(message, "permissionType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.permissionType);
            if (message.path != null && Object.hasOwnProperty.call(message, "path"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.path);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.name);
            if (message.hidden != null && Object.hasOwnProperty.call(message, "hidden"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.hidden);
            if (message.component != null && Object.hasOwnProperty.call(message, "component"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.component);
            if (message.redirect != null && Object.hasOwnProperty.call(message, "redirect"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.redirect);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.icon);
            if (message.keepalive != null && Object.hasOwnProperty.call(message, "keepalive"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.keepalive);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.title);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.appId);
            if (message.children != null && message.children.length)
                for (var i = 0; i < message.children.length; ++i)
                    $root.pbpermission.PermissionModel.encode(message.children[i], writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.sort != null && Object.hasOwnProperty.call(message, "sort"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.sort);
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        PermissionModel.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbpermission.PermissionModel();
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
                        message.parentId = reader.int64();
                        break;
                    }
                case 5: {
                        message.permissionType = reader.int32();
                        break;
                    }
                case 6: {
                        message.path = reader.string();
                        break;
                    }
                case 7: {
                        message.name = reader.string();
                        break;
                    }
                case 8: {
                        message.hidden = reader.bool();
                        break;
                    }
                case 9: {
                        message.component = reader.string();
                        break;
                    }
                case 10: {
                        message.redirect = reader.string();
                        break;
                    }
                case 11: {
                        message.icon = reader.string();
                        break;
                    }
                case 12: {
                        message.keepalive = reader.bool();
                        break;
                    }
                case 13: {
                        message.title = reader.string();
                        break;
                    }
                case 14: {
                        message.appId = reader.int64();
                        break;
                    }
                case 15: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.pbpermission.PermissionModel.decode(reader, reader.uint32()));
                        break;
                    }
                case 16: {
                        message.sort = reader.int32();
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PermissionModel message.
         * @function verify
         * @memberof pbpermission.PermissionModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PermissionModel.verify = function verify(message) {
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
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isInteger(message.parentId) && !(message.parentId && $util.isInteger(message.parentId.low) && $util.isInteger(message.parentId.high)))
                    return "parentId: integer|Long expected";
            if (message.permissionType != null && message.hasOwnProperty("permissionType"))
                switch (message.permissionType) {
                default:
                    return "permissionType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.path != null && message.hasOwnProperty("path"))
                if (!$util.isString(message.path))
                    return "path: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                if (typeof message.hidden !== "boolean")
                    return "hidden: boolean expected";
            if (message.component != null && message.hasOwnProperty("component"))
                if (!$util.isString(message.component))
                    return "component: string expected";
            if (message.redirect != null && message.hasOwnProperty("redirect"))
                if (!$util.isString(message.redirect))
                    return "redirect: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.keepalive != null && message.hasOwnProperty("keepalive"))
                if (typeof message.keepalive !== "boolean")
                    return "keepalive: boolean expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isInteger(message.appId) && !(message.appId && $util.isInteger(message.appId.low) && $util.isInteger(message.appId.high)))
                    return "appId: integer|Long expected";
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (var i = 0; i < message.children.length; ++i) {
                    var error = $root.pbpermission.PermissionModel.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            if (message.sort != null && message.hasOwnProperty("sort"))
                if (!$util.isInteger(message.sort))
                    return "sort: integer expected";
            return null;
        };

        /**
         * Creates a PermissionModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbpermission.PermissionModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbpermission.PermissionModel} PermissionModel
         */
        PermissionModel.fromObject = function fromObject(object) {
            if (object instanceof $root.pbpermission.PermissionModel)
                return object;
            var message = new $root.pbpermission.PermissionModel();
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
            if (object.parentId != null)
                if ($util.Long)
                    (message.parentId = $util.Long.fromValue(object.parentId)).unsigned = false;
                else if (typeof object.parentId === "string")
                    message.parentId = parseInt(object.parentId, 10);
                else if (typeof object.parentId === "number")
                    message.parentId = object.parentId;
                else if (typeof object.parentId === "object")
                    message.parentId = new $util.LongBits(object.parentId.low >>> 0, object.parentId.high >>> 0).toNumber();
            switch (object.permissionType) {
            default:
                if (typeof object.permissionType === "number") {
                    message.permissionType = object.permissionType;
                    break;
                }
                break;
            case "PermissionTypeNone":
            case 0:
                message.permissionType = 0;
                break;
            case "MENU":
            case 1:
                message.permissionType = 1;
                break;
            case "BUTTON":
            case 2:
                message.permissionType = 2;
                break;
            }
            if (object.path != null)
                message.path = String(object.path);
            if (object.name != null)
                message.name = String(object.name);
            if (object.hidden != null)
                message.hidden = Boolean(object.hidden);
            if (object.component != null)
                message.component = String(object.component);
            if (object.redirect != null)
                message.redirect = String(object.redirect);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.keepalive != null)
                message.keepalive = Boolean(object.keepalive);
            if (object.title != null)
                message.title = String(object.title);
            if (object.appId != null)
                if ($util.Long)
                    (message.appId = $util.Long.fromValue(object.appId)).unsigned = false;
                else if (typeof object.appId === "string")
                    message.appId = parseInt(object.appId, 10);
                else if (typeof object.appId === "number")
                    message.appId = object.appId;
                else if (typeof object.appId === "object")
                    message.appId = new $util.LongBits(object.appId.low >>> 0, object.appId.high >>> 0).toNumber();
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".pbpermission.PermissionModel.children: array expected");
                message.children = [];
                for (var i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".pbpermission.PermissionModel.children: object expected");
                    message.children[i] = $root.pbpermission.PermissionModel.fromObject(object.children[i]);
                }
            }
            if (object.sort != null)
                message.sort = object.sort | 0;
            return message;
        };

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
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.children = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.createdAt = "";
                object.updatedAt = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.parentId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.parentId = options.longs === String ? "0" : 0;
                object.permissionType = options.enums === String ? "PermissionTypeNone" : 0;
                object.path = "";
                object.name = "";
                object.hidden = false;
                object.component = "";
                object.redirect = "";
                object.icon = "";
                object.keepalive = false;
                object.title = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.appId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.appId = options.longs === String ? "0" : 0;
                object.sort = 0;
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
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (typeof message.parentId === "number")
                    object.parentId = options.longs === String ? String(message.parentId) : message.parentId;
                else
                    object.parentId = options.longs === String ? $util.Long.prototype.toString.call(message.parentId) : options.longs === Number ? new $util.LongBits(message.parentId.low >>> 0, message.parentId.high >>> 0).toNumber() : message.parentId;
            if (message.permissionType != null && message.hasOwnProperty("permissionType"))
                object.permissionType = options.enums === String ? $root.pbpermission.PermissionType[message.permissionType] === undefined ? message.permissionType : $root.pbpermission.PermissionType[message.permissionType] : message.permissionType;
            if (message.path != null && message.hasOwnProperty("path"))
                object.path = message.path;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.hidden != null && message.hasOwnProperty("hidden"))
                object.hidden = message.hidden;
            if (message.component != null && message.hasOwnProperty("component"))
                object.component = message.component;
            if (message.redirect != null && message.hasOwnProperty("redirect"))
                object.redirect = message.redirect;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.keepalive != null && message.hasOwnProperty("keepalive"))
                object.keepalive = message.keepalive;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (typeof message.appId === "number")
                    object.appId = options.longs === String ? String(message.appId) : message.appId;
                else
                    object.appId = options.longs === String ? $util.Long.prototype.toString.call(message.appId) : options.longs === Number ? new $util.LongBits(message.appId.low >>> 0, message.appId.high >>> 0).toNumber() : message.appId;
            if (message.children && message.children.length) {
                object.children = [];
                for (var j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.pbpermission.PermissionModel.toObject(message.children[j], options);
            }
            if (message.sort != null && message.hasOwnProperty("sort"))
                object.sort = message.sort;
            return object;
        };

        /**
         * Converts this PermissionModel to JSON.
         * @function toJSON
         * @memberof pbpermission.PermissionModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PermissionModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PermissionModel
         * @function getTypeUrl
         * @memberof pbpermission.PermissionModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PermissionModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbpermission.PermissionModel";
        };

        return PermissionModel;
    })();

    /**
     * PermissionType enum.
     * @name pbpermission.PermissionType
     * @enum {number}
     * @property {number} PermissionTypeNone=0 PermissionTypeNone value
     * @property {number} MENU=1 MENU value
     * @property {number} BUTTON=2 BUTTON value
     */
    pbpermission.PermissionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PermissionTypeNone"] = 0;
        values[valuesById[1] = "MENU"] = 1;
        values[valuesById[2] = "BUTTON"] = 2;
        return values;
    })();

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindPermissionArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbpermission.FindPermissionArgs
         * @instance
         */
        FindPermissionArgs.prototype.pageInfo = null;

        /**
         * FindPermissionArgs query.
         * @member {pbpermission.IPermissionModel|null|undefined} query
         * @memberof pbpermission.FindPermissionArgs
         * @instance
         */
        FindPermissionArgs.prototype.query = null;

        /**
         * Creates a new FindPermissionArgs instance using the specified properties.
         * @function create
         * @memberof pbpermission.FindPermissionArgs
         * @static
         * @param {pbpermission.IFindPermissionArgs=} [properties] Properties to set
         * @returns {pbpermission.FindPermissionArgs} FindPermissionArgs instance
         */
        FindPermissionArgs.create = function create(properties) {
            return new FindPermissionArgs(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.pbpermission.PermissionModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        FindPermissionArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbpermission.FindPermissionArgs();
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
                        message.query = $root.pbpermission.PermissionModel.decode(reader, reader.uint32());
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindPermissionArgs message.
         * @function verify
         * @memberof pbpermission.FindPermissionArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindPermissionArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                var error = $root.pbpermission.PermissionModel.verify(message.query);
                if (error)
                    return "query." + error;
            }
            return null;
        };

        /**
         * Creates a FindPermissionArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbpermission.FindPermissionArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbpermission.FindPermissionArgs} FindPermissionArgs
         */
        FindPermissionArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbpermission.FindPermissionArgs)
                return object;
            var message = new $root.pbpermission.FindPermissionArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbpermission.FindPermissionArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".pbpermission.FindPermissionArgs.query: object expected");
                message.query = $root.pbpermission.PermissionModel.fromObject(object.query);
            }
            return message;
        };

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
                object.query = $root.pbpermission.PermissionModel.toObject(message.query, options);
            return object;
        };

        /**
         * Converts this FindPermissionArgs to JSON.
         * @function toJSON
         * @memberof pbpermission.FindPermissionArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindPermissionArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindPermissionArgs
         * @function getTypeUrl
         * @memberof pbpermission.FindPermissionArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindPermissionArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbpermission.FindPermissionArgs";
        };

        return FindPermissionArgs;
    })();

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
            this.list = [];
            this.selectedItem = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindPermissionReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbpermission.FindPermissionReply
         * @instance
         */
        FindPermissionReply.prototype.code = 0;

        /**
         * FindPermissionReply msg.
         * @member {string} msg
         * @memberof pbpermission.FindPermissionReply
         * @instance
         */
        FindPermissionReply.prototype.msg = "";

        /**
         * FindPermissionReply data.
         * @member {pbpermission.IPermissionModel|null|undefined} data
         * @memberof pbpermission.FindPermissionReply
         * @instance
         */
        FindPermissionReply.prototype.data = null;

        /**
         * FindPermissionReply list.
         * @member {Array.<pbpermission.IPermissionModel>} list
         * @memberof pbpermission.FindPermissionReply
         * @instance
         */
        FindPermissionReply.prototype.list = $util.emptyArray;

        /**
         * FindPermissionReply total.
         * @member {number|Long} total
         * @memberof pbpermission.FindPermissionReply
         * @instance
         */
        FindPermissionReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FindPermissionReply selectedItem.
         * @member {Array.<number|Long>} selectedItem
         * @memberof pbpermission.FindPermissionReply
         * @instance
         */
        FindPermissionReply.prototype.selectedItem = $util.emptyArray;

        /**
         * Creates a new FindPermissionReply instance using the specified properties.
         * @function create
         * @memberof pbpermission.FindPermissionReply
         * @static
         * @param {pbpermission.IFindPermissionReply=} [properties] Properties to set
         * @returns {pbpermission.FindPermissionReply} FindPermissionReply instance
         */
        FindPermissionReply.create = function create(properties) {
            return new FindPermissionReply(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbpermission.PermissionModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbpermission.PermissionModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            if (message.selectedItem != null && message.selectedItem.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.selectedItem.length; ++i)
                    writer.int64(message.selectedItem[i]);
                writer.ldelim();
            }
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        FindPermissionReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbpermission.FindPermissionReply();
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
                        message.data = $root.pbpermission.PermissionModel.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbpermission.PermissionModel.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.total = reader.int64();
                        break;
                    }
                case 6: {
                        if (!(message.selectedItem && message.selectedItem.length))
                            message.selectedItem = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.selectedItem.push(reader.int64());
                        } else
                            message.selectedItem.push(reader.int64());
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindPermissionReply message.
         * @function verify
         * @memberof pbpermission.FindPermissionReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindPermissionReply.verify = function verify(message) {
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
                case 20001:
                case 20002:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbpermission.PermissionModel.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbpermission.PermissionModel.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total) && !(message.total && $util.isInteger(message.total.low) && $util.isInteger(message.total.high)))
                    return "total: integer|Long expected";
            if (message.selectedItem != null && message.hasOwnProperty("selectedItem")) {
                if (!Array.isArray(message.selectedItem))
                    return "selectedItem: array expected";
                for (var i = 0; i < message.selectedItem.length; ++i)
                    if (!$util.isInteger(message.selectedItem[i]) && !(message.selectedItem[i] && $util.isInteger(message.selectedItem[i].low) && $util.isInteger(message.selectedItem[i].high)))
                        return "selectedItem: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a FindPermissionReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbpermission.FindPermissionReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbpermission.FindPermissionReply} FindPermissionReply
         */
        FindPermissionReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbpermission.FindPermissionReply)
                return object;
            var message = new $root.pbpermission.FindPermissionReply();
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
            case "GamePhaseNotMatch":
            case 20001:
                message.code = 20001;
                break;
            case "GameNotStarted":
            case 20002:
                message.code = 20002;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbpermission.FindPermissionReply.data: object expected");
                message.data = $root.pbpermission.PermissionModel.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbpermission.FindPermissionReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbpermission.FindPermissionReply.list: object expected");
                    message.list[i] = $root.pbpermission.PermissionModel.fromObject(object.list[i]);
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
            if (object.selectedItem) {
                if (!Array.isArray(object.selectedItem))
                    throw TypeError(".pbpermission.FindPermissionReply.selectedItem: array expected");
                message.selectedItem = [];
                for (var i = 0; i < object.selectedItem.length; ++i)
                    if ($util.Long)
                        (message.selectedItem[i] = $util.Long.fromValue(object.selectedItem[i])).unsigned = false;
                    else if (typeof object.selectedItem[i] === "string")
                        message.selectedItem[i] = parseInt(object.selectedItem[i], 10);
                    else if (typeof object.selectedItem[i] === "number")
                        message.selectedItem[i] = object.selectedItem[i];
                    else if (typeof object.selectedItem[i] === "object")
                        message.selectedItem[i] = new $util.LongBits(object.selectedItem[i].low >>> 0, object.selectedItem[i].high >>> 0).toNumber();
            }
            return message;
        };

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
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.list = [];
                object.selectedItem = [];
            }
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
                object.data = $root.pbpermission.PermissionModel.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbpermission.PermissionModel.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            if (message.selectedItem && message.selectedItem.length) {
                object.selectedItem = [];
                for (var j = 0; j < message.selectedItem.length; ++j)
                    if (typeof message.selectedItem[j] === "number")
                        object.selectedItem[j] = options.longs === String ? String(message.selectedItem[j]) : message.selectedItem[j];
                    else
                        object.selectedItem[j] = options.longs === String ? $util.Long.prototype.toString.call(message.selectedItem[j]) : options.longs === Number ? new $util.LongBits(message.selectedItem[j].low >>> 0, message.selectedItem[j].high >>> 0).toNumber() : message.selectedItem[j];
            }
            return object;
        };

        /**
         * Converts this FindPermissionReply to JSON.
         * @function toJSON
         * @memberof pbpermission.FindPermissionReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindPermissionReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindPermissionReply
         * @function getTypeUrl
         * @memberof pbpermission.FindPermissionReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindPermissionReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbpermission.FindPermissionReply";
        };

        return FindPermissionReply;
    })();

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
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Permission.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Permission;

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
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

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
            return this.rpcCall(createPermission, $root.pbpermission.PermissionModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreatePermission" });

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
            return this.rpcCall(updatePermission, $root.pbpermission.PermissionModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdatePermission" });

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
            return this.rpcCall(deletePermission, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeletePermission" });

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
            return this.rpcCall(findPermissionById, $root.pbcommon.IdArgs, $root.pbpermission.FindPermissionReply, request, callback);
        }, "name", { value: "FindPermissionById" });

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
            return this.rpcCall(findPermissionList, $root.pbpermission.FindPermissionArgs, $root.pbpermission.FindPermissionReply, request, callback);
        }, "name", { value: "FindPermissionList" });

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
            return this.rpcCall(findPermissionTree, $root.pbpermission.FindPermissionArgs, $root.pbpermission.FindPermissionReply, request, callback);
        }, "name", { value: "FindPermissionTree" });

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
            return this.rpcCall(findPermissionTreeByRole, $root.pbcommon.IdArgs, $root.pbpermission.FindPermissionReply, request, callback);
        }, "name", { value: "FindPermissionTreeByRole" });

        /**
         * Calls FindPermissionTreeByRole.
         * @function findPermissionTreeByRole
         * @memberof pbpermission.Permission
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbpermission.FindPermissionReply>} Promise
         * @variation 2
         */

        return Permission;
    })();

    return pbpermission;
})();

$root.pbuserOauth = (function() {

    /**
     * Namespace pbuserOauth.
     * @exports pbuserOauth
     * @namespace
     */
    var pbuserOauth = {};

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserOauthModel id.
         * @member {number|Long} id
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
        UserOauthModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserOauthModel createdAt.
         * @member {string} createdAt
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
        UserOauthModel.prototype.createdAt = "";

        /**
         * UserOauthModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
        UserOauthModel.prototype.updatedAt = "";

        /**
         * UserOauthModel oauthType.
         * @member {pbuserOauth.OauthType} oauthType
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
        UserOauthModel.prototype.oauthType = 0;

        /**
         * UserOauthModel openId.
         * @member {string} openId
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
        UserOauthModel.prototype.openId = "";

        /**
         * UserOauthModel unionId.
         * @member {string} unionId
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
        UserOauthModel.prototype.unionId = "";

        /**
         * UserOauthModel appId.
         * @member {number|Long} appId
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
        UserOauthModel.prototype.appId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserOauthModel userId.
         * @member {number|Long} userId
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         */
        UserOauthModel.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UserOauthModel instance using the specified properties.
         * @function create
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {pbuserOauth.IUserOauthModel=} [properties] Properties to set
         * @returns {pbuserOauth.UserOauthModel} UserOauthModel instance
         */
        UserOauthModel.create = function create(properties) {
            return new UserOauthModel(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.oauthType != null && Object.hasOwnProperty.call(message, "oauthType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.oauthType);
            if (message.openId != null && Object.hasOwnProperty.call(message, "openId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.openId);
            if (message.unionId != null && Object.hasOwnProperty.call(message, "unionId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.unionId);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.appId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.userId);
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        UserOauthModel.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbuserOauth.UserOauthModel();
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
                        message.oauthType = reader.int32();
                        break;
                    }
                case 5: {
                        message.openId = reader.string();
                        break;
                    }
                case 6: {
                        message.unionId = reader.string();
                        break;
                    }
                case 7: {
                        message.appId = reader.int64();
                        break;
                    }
                case 8: {
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserOauthModel message.
         * @function verify
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserOauthModel.verify = function verify(message) {
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
            if (message.oauthType != null && message.hasOwnProperty("oauthType"))
                switch (message.oauthType) {
                default:
                    return "oauthType: enum value expected";
                case 0:
                case 1:
                case 6:
                case 7:
                    break;
                }
            if (message.openId != null && message.hasOwnProperty("openId"))
                if (!$util.isString(message.openId))
                    return "openId: string expected";
            if (message.unionId != null && message.hasOwnProperty("unionId"))
                if (!$util.isString(message.unionId))
                    return "unionId: string expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isInteger(message.appId) && !(message.appId && $util.isInteger(message.appId.low) && $util.isInteger(message.appId.high)))
                    return "appId: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a UserOauthModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuserOauth.UserOauthModel} UserOauthModel
         */
        UserOauthModel.fromObject = function fromObject(object) {
            if (object instanceof $root.pbuserOauth.UserOauthModel)
                return object;
            var message = new $root.pbuserOauth.UserOauthModel();
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
            switch (object.oauthType) {
            default:
                if (typeof object.oauthType === "number") {
                    message.oauthType = object.oauthType;
                    break;
                }
                break;
            case "OAUTH_TYPE_NONE":
            case 0:
                message.oauthType = 0;
                break;
            case "OAUTH_TYPE_WECHAT":
            case 1:
                message.oauthType = 1;
                break;
            case "OAUTH_TYPE_CASDOOR":
            case 6:
                message.oauthType = 6;
                break;
            case "OAUTH_TYPE_Hala":
            case 7:
                message.oauthType = 7;
                break;
            }
            if (object.openId != null)
                message.openId = String(object.openId);
            if (object.unionId != null)
                message.unionId = String(object.unionId);
            if (object.appId != null)
                if ($util.Long)
                    (message.appId = $util.Long.fromValue(object.appId)).unsigned = false;
                else if (typeof object.appId === "string")
                    message.appId = parseInt(object.appId, 10);
                else if (typeof object.appId === "number")
                    message.appId = object.appId;
                else if (typeof object.appId === "object")
                    message.appId = new $util.LongBits(object.appId.low >>> 0, object.appId.high >>> 0).toNumber();
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
         * Creates a plain object from a UserOauthModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbuserOauth.UserOauthModel
         * @static
         * @param {pbuserOauth.UserOauthModel} message UserOauthModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserOauthModel.toObject = function toObject(message, options) {
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
                object.oauthType = options.enums === String ? "OAUTH_TYPE_NONE" : 0;
                object.openId = "";
                object.unionId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.appId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.appId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
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
            if (message.oauthType != null && message.hasOwnProperty("oauthType"))
                object.oauthType = options.enums === String ? $root.pbuserOauth.OauthType[message.oauthType] === undefined ? message.oauthType : $root.pbuserOauth.OauthType[message.oauthType] : message.oauthType;
            if (message.openId != null && message.hasOwnProperty("openId"))
                object.openId = message.openId;
            if (message.unionId != null && message.hasOwnProperty("unionId"))
                object.unionId = message.unionId;
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (typeof message.appId === "number")
                    object.appId = options.longs === String ? String(message.appId) : message.appId;
                else
                    object.appId = options.longs === String ? $util.Long.prototype.toString.call(message.appId) : options.longs === Number ? new $util.LongBits(message.appId.low >>> 0, message.appId.high >>> 0).toNumber() : message.appId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            return object;
        };

        /**
         * Converts this UserOauthModel to JSON.
         * @function toJSON
         * @memberof pbuserOauth.UserOauthModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserOauthModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbuserOauth.UserOauthModel";
        };

        return UserOauthModel;
    })();

    /**
     * OauthType enum.
     * @name pbuserOauth.OauthType
     * @enum {number}
     * @property {number} OAUTH_TYPE_NONE=0 OAUTH_TYPE_NONE value
     * @property {number} OAUTH_TYPE_WECHAT=1 OAUTH_TYPE_WECHAT value
     * @property {number} OAUTH_TYPE_CASDOOR=6 OAUTH_TYPE_CASDOOR value
     * @property {number} OAUTH_TYPE_Hala=7 OAUTH_TYPE_Hala value
     */
    pbuserOauth.OauthType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OAUTH_TYPE_NONE"] = 0;
        values[valuesById[1] = "OAUTH_TYPE_WECHAT"] = 1;
        values[valuesById[6] = "OAUTH_TYPE_CASDOOR"] = 6;
        values[valuesById[7] = "OAUTH_TYPE_Hala"] = 7;
        return values;
    })();

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindUserOauthArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbuserOauth.FindUserOauthArgs
         * @instance
         */
        FindUserOauthArgs.prototype.pageInfo = null;

        /**
         * FindUserOauthArgs query.
         * @member {pbuserOauth.IUserOauthModel|null|undefined} query
         * @memberof pbuserOauth.FindUserOauthArgs
         * @instance
         */
        FindUserOauthArgs.prototype.query = null;

        /**
         * Creates a new FindUserOauthArgs instance using the specified properties.
         * @function create
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {pbuserOauth.IFindUserOauthArgs=} [properties] Properties to set
         * @returns {pbuserOauth.FindUserOauthArgs} FindUserOauthArgs instance
         */
        FindUserOauthArgs.create = function create(properties) {
            return new FindUserOauthArgs(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.pbuserOauth.UserOauthModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        FindUserOauthArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbuserOauth.FindUserOauthArgs();
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
                        message.query = $root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32());
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindUserOauthArgs message.
         * @function verify
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindUserOauthArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                var error = $root.pbuserOauth.UserOauthModel.verify(message.query);
                if (error)
                    return "query." + error;
            }
            return null;
        };

        /**
         * Creates a FindUserOauthArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuserOauth.FindUserOauthArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuserOauth.FindUserOauthArgs} FindUserOauthArgs
         */
        FindUserOauthArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbuserOauth.FindUserOauthArgs)
                return object;
            var message = new $root.pbuserOauth.FindUserOauthArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbuserOauth.FindUserOauthArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".pbuserOauth.FindUserOauthArgs.query: object expected");
                message.query = $root.pbuserOauth.UserOauthModel.fromObject(object.query);
            }
            return message;
        };

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
                object.query = $root.pbuserOauth.UserOauthModel.toObject(message.query, options);
            return object;
        };

        /**
         * Converts this FindUserOauthArgs to JSON.
         * @function toJSON
         * @memberof pbuserOauth.FindUserOauthArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindUserOauthArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbuserOauth.FindUserOauthArgs";
        };

        return FindUserOauthArgs;
    })();

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
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindUserOauthReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         */
        FindUserOauthReply.prototype.code = 0;

        /**
         * FindUserOauthReply msg.
         * @member {string} msg
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         */
        FindUserOauthReply.prototype.msg = "";

        /**
         * FindUserOauthReply data.
         * @member {pbuserOauth.IUserOauthModel|null|undefined} data
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         */
        FindUserOauthReply.prototype.data = null;

        /**
         * FindUserOauthReply list.
         * @member {Array.<pbuserOauth.IUserOauthModel>} list
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         */
        FindUserOauthReply.prototype.list = $util.emptyArray;

        /**
         * FindUserOauthReply total.
         * @member {number|Long} total
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         */
        FindUserOauthReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindUserOauthReply instance using the specified properties.
         * @function create
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {pbuserOauth.IFindUserOauthReply=} [properties] Properties to set
         * @returns {pbuserOauth.FindUserOauthReply} FindUserOauthReply instance
         */
        FindUserOauthReply.create = function create(properties) {
            return new FindUserOauthReply(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbuserOauth.UserOauthModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbuserOauth.UserOauthModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        FindUserOauthReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbuserOauth.FindUserOauthReply();
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
                        message.data = $root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32()));
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindUserOauthReply message.
         * @function verify
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindUserOauthReply.verify = function verify(message) {
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
                case 20001:
                case 20002:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbuserOauth.UserOauthModel.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbuserOauth.UserOauthModel.verify(message.list[i]);
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
         * Creates a FindUserOauthReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuserOauth.FindUserOauthReply} FindUserOauthReply
         */
        FindUserOauthReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbuserOauth.FindUserOauthReply)
                return object;
            var message = new $root.pbuserOauth.FindUserOauthReply();
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
            case "GamePhaseNotMatch":
            case 20001:
                message.code = 20001;
                break;
            case "GameNotStarted":
            case 20002:
                message.code = 20002;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbuserOauth.FindUserOauthReply.data: object expected");
                message.data = $root.pbuserOauth.UserOauthModel.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbuserOauth.FindUserOauthReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbuserOauth.FindUserOauthReply.list: object expected");
                    message.list[i] = $root.pbuserOauth.UserOauthModel.fromObject(object.list[i]);
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
         * Creates a plain object from a FindUserOauthReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbuserOauth.FindUserOauthReply
         * @static
         * @param {pbuserOauth.FindUserOauthReply} message FindUserOauthReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindUserOauthReply.toObject = function toObject(message, options) {
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
                object.data = $root.pbuserOauth.UserOauthModel.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbuserOauth.UserOauthModel.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindUserOauthReply to JSON.
         * @function toJSON
         * @memberof pbuserOauth.FindUserOauthReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindUserOauthReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

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
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbuserOauth.FindUserOauthReply";
        };

        return FindUserOauthReply;
    })();

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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FirstOrCreateUserOauthReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbuserOauth.FirstOrCreateUserOauthReply
         * @instance
         */
        FirstOrCreateUserOauthReply.prototype.code = 0;

        /**
         * FirstOrCreateUserOauthReply userOauth.
         * @member {pbuserOauth.IUserOauthModel|null|undefined} userOauth
         * @memberof pbuserOauth.FirstOrCreateUserOauthReply
         * @instance
         */
        FirstOrCreateUserOauthReply.prototype.userOauth = null;

        /**
         * Creates a new FirstOrCreateUserOauthReply instance using the specified properties.
         * @function create
         * @memberof pbuserOauth.FirstOrCreateUserOauthReply
         * @static
         * @param {pbuserOauth.IFirstOrCreateUserOauthReply=} [properties] Properties to set
         * @returns {pbuserOauth.FirstOrCreateUserOauthReply} FirstOrCreateUserOauthReply instance
         */
        FirstOrCreateUserOauthReply.create = function create(properties) {
            return new FirstOrCreateUserOauthReply(properties);
        };

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
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.userOauth != null && Object.hasOwnProperty.call(message, "userOauth"))
                $root.pbuserOauth.UserOauthModel.encode(message.userOauth, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

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
            return this.encode(message, writer).ldelim();
        };

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
        FirstOrCreateUserOauthReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbuserOauth.FirstOrCreateUserOauthReply();
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
                        message.userOauth = $root.pbuserOauth.UserOauthModel.decode(reader, reader.uint32());
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
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FirstOrCreateUserOauthReply message.
         * @function verify
         * @memberof pbuserOauth.FirstOrCreateUserOauthReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FirstOrCreateUserOauthReply.verify = function verify(message) {
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
                case 20001:
                case 20002:
                    break;
                }
            if (message.userOauth != null && message.hasOwnProperty("userOauth")) {
                var error = $root.pbuserOauth.UserOauthModel.verify(message.userOauth);
                if (error)
                    return "userOauth." + error;
            }
            return null;
        };

        /**
         * Creates a FirstOrCreateUserOauthReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbuserOauth.FirstOrCreateUserOauthReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbuserOauth.FirstOrCreateUserOauthReply} FirstOrCreateUserOauthReply
         */
        FirstOrCreateUserOauthReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbuserOauth.FirstOrCreateUserOauthReply)
                return object;
            var message = new $root.pbuserOauth.FirstOrCreateUserOauthReply();
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
            case "GamePhaseNotMatch":
            case 20001:
                message.code = 20001;
                break;
            case "GameNotStarted":
            case 20002:
                message.code = 20002;
                break;
            }
            if (object.userOauth != null) {
                if (typeof object.userOauth !== "object")
                    throw TypeError(".pbuserOauth.FirstOrCreateUserOauthReply.userOauth: object expected");
                message.userOauth = $root.pbuserOauth.UserOauthModel.fromObject(object.userOauth);
            }
            return message;
        };

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
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.userOauth = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code;
            if (message.userOauth != null && message.hasOwnProperty("userOauth"))
                object.userOauth = $root.pbuserOauth.UserOauthModel.toObject(message.userOauth, options);
            return object;
        };

        /**
         * Converts this FirstOrCreateUserOauthReply to JSON.
         * @function toJSON
         * @memberof pbuserOauth.FirstOrCreateUserOauthReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FirstOrCreateUserOauthReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FirstOrCreateUserOauthReply
         * @function getTypeUrl
         * @memberof pbuserOauth.FirstOrCreateUserOauthReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FirstOrCreateUserOauthReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbuserOauth.FirstOrCreateUserOauthReply";
        };

        return FirstOrCreateUserOauthReply;
    })();

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
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (UserOauth.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserOauth;

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
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

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
            return this.rpcCall(createUserOauth, $root.pbuserOauth.UserOauthModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateUserOauth" });

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
            return this.rpcCall(updateUserOauth, $root.pbuserOauth.UserOauthModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateUserOauth" });

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
            return this.rpcCall(deleteUserOauth, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteUserOauth" });

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
            return this.rpcCall(findUserOauthById, $root.pbcommon.IdArgs, $root.pbuserOauth.FindUserOauthReply, request, callback);
        }, "name", { value: "FindUserOauthById" });

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
            return this.rpcCall(findUserOauthList, $root.pbuserOauth.FindUserOauthArgs, $root.pbuserOauth.FindUserOauthReply, request, callback);
        }, "name", { value: "FindUserOauthList" });

        /**
         * Calls FindUserOauthList.
         * @function findUserOauthList
         * @memberof pbuserOauth.UserOauth
         * @instance
         * @param {pbuserOauth.IFindUserOauthArgs} request FindUserOauthArgs message or plain object
         * @returns {Promise<pbuserOauth.FindUserOauthReply>} Promise
         * @variation 2
         */

        return UserOauth;
    })();

    return pbuserOauth;
})();

$root.pbchatRoom = (function() {

    /**
     * Namespace pbchatRoom.
     * @exports pbchatRoom
     * @namespace
     */
    var pbchatRoom = {};

    pbchatRoom.ChatRoomModel = (function() {

        /**
         * Properties of a ChatRoomModel.
         * @memberof pbchatRoom
         * @interface IChatRoomModel
         * @property {number|Long|null} [id] ChatRoomModel id
         * @property {string|null} [createdAt] ChatRoomModel createdAt
         * @property {string|null} [updatedAt] ChatRoomModel updatedAt
         * @property {string|null} [name] ChatRoomModel name
         * @property {string|null} [password] ChatRoomModel password
         * @property {string|null} [head] ChatRoomModel head
         * @property {string|null} [publicNotice] ChatRoomModel publicNotice
         * @property {number|Long|null} [adminId] ChatRoomModel adminId
         * @property {pbuser.IUserModel|null} [Admin] ChatRoomModel Admin
         * @property {Array.<pbuser.IUserModel>|null} [members] ChatRoomModel members
         * @property {pbchatRoom.RoomType|null} [roomType] ChatRoomModel roomType
         * @property {string|null} [latestMessageCreatedAt] ChatRoomModel latestMessageCreatedAt
         * @property {number|null} [code] ChatRoomModel code
         * @property {number|Long|null} [latestMessageId] ChatRoomModel latestMessageId
         * @property {number|null} [status] ChatRoomModel status
         */

        /**
         * Constructs a new ChatRoomModel.
         * @memberof pbchatRoom
         * @classdesc Represents a ChatRoomModel.
         * @implements IChatRoomModel
         * @constructor
         * @param {pbchatRoom.IChatRoomModel=} [properties] Properties to set
         */
        function ChatRoomModel(properties) {
            this.members = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatRoomModel id.
         * @member {number|Long} id
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatRoomModel createdAt.
         * @member {string} createdAt
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.createdAt = "";

        /**
         * ChatRoomModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.updatedAt = "";

        /**
         * ChatRoomModel name.
         * @member {string} name
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.name = "";

        /**
         * ChatRoomModel password.
         * @member {string} password
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.password = "";

        /**
         * ChatRoomModel head.
         * @member {string} head
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.head = "";

        /**
         * ChatRoomModel publicNotice.
         * @member {string} publicNotice
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.publicNotice = "";

        /**
         * ChatRoomModel adminId.
         * @member {number|Long} adminId
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.adminId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatRoomModel Admin.
         * @member {pbuser.IUserModel|null|undefined} Admin
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.Admin = null;

        /**
         * ChatRoomModel members.
         * @member {Array.<pbuser.IUserModel>} members
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.members = $util.emptyArray;

        /**
         * ChatRoomModel roomType.
         * @member {pbchatRoom.RoomType} roomType
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.roomType = 0;

        /**
         * ChatRoomModel latestMessageCreatedAt.
         * @member {string} latestMessageCreatedAt
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.latestMessageCreatedAt = "";

        /**
         * ChatRoomModel code.
         * @member {number} code
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.code = 0;

        /**
         * ChatRoomModel latestMessageId.
         * @member {number|Long} latestMessageId
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.latestMessageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ChatRoomModel status.
         * @member {number} status
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         */
        ChatRoomModel.prototype.status = 0;

        /**
         * Creates a new ChatRoomModel instance using the specified properties.
         * @function create
         * @memberof pbchatRoom.ChatRoomModel
         * @static
         * @param {pbchatRoom.IChatRoomModel=} [properties] Properties to set
         * @returns {pbchatRoom.ChatRoomModel} ChatRoomModel instance
         */
        ChatRoomModel.create = function create(properties) {
            return new ChatRoomModel(properties);
        };

        /**
         * Encodes the specified ChatRoomModel message. Does not implicitly {@link pbchatRoom.ChatRoomModel.verify|verify} messages.
         * @function encode
         * @memberof pbchatRoom.ChatRoomModel
         * @static
         * @param {pbchatRoom.IChatRoomModel} message ChatRoomModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatRoomModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.name);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.password);
            if (message.head != null && Object.hasOwnProperty.call(message, "head"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.head);
            if (message.publicNotice != null && Object.hasOwnProperty.call(message, "publicNotice"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.publicNotice);
            if (message.adminId != null && Object.hasOwnProperty.call(message, "adminId"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.adminId);
            if (message.Admin != null && Object.hasOwnProperty.call(message, "Admin"))
                $root.pbuser.UserModel.encode(message.Admin, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.members != null && message.members.length)
                for (var i = 0; i < message.members.length; ++i)
                    $root.pbuser.UserModel.encode(message.members[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.roomType != null && Object.hasOwnProperty.call(message, "roomType"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.roomType);
            if (message.latestMessageCreatedAt != null && Object.hasOwnProperty.call(message, "latestMessageCreatedAt"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.latestMessageCreatedAt);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.code);
            if (message.latestMessageId != null && Object.hasOwnProperty.call(message, "latestMessageId"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.latestMessageId);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified ChatRoomModel message, length delimited. Does not implicitly {@link pbchatRoom.ChatRoomModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbchatRoom.ChatRoomModel
         * @static
         * @param {pbchatRoom.IChatRoomModel} message ChatRoomModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatRoomModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatRoomModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbchatRoom.ChatRoomModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbchatRoom.ChatRoomModel} ChatRoomModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatRoomModel.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbchatRoom.ChatRoomModel();
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
                        message.name = reader.string();
                        break;
                    }
                case 5: {
                        message.password = reader.string();
                        break;
                    }
                case 6: {
                        message.head = reader.string();
                        break;
                    }
                case 7: {
                        message.publicNotice = reader.string();
                        break;
                    }
                case 8: {
                        message.adminId = reader.int64();
                        break;
                    }
                case 9: {
                        message.Admin = $root.pbuser.UserModel.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        if (!(message.members && message.members.length))
                            message.members = [];
                        message.members.push($root.pbuser.UserModel.decode(reader, reader.uint32()));
                        break;
                    }
                case 11: {
                        message.roomType = reader.int32();
                        break;
                    }
                case 12: {
                        message.latestMessageCreatedAt = reader.string();
                        break;
                    }
                case 13: {
                        message.code = reader.int32();
                        break;
                    }
                case 14: {
                        message.latestMessageId = reader.int64();
                        break;
                    }
                case 15: {
                        message.status = reader.int32();
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
         * Decodes a ChatRoomModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbchatRoom.ChatRoomModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbchatRoom.ChatRoomModel} ChatRoomModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatRoomModel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatRoomModel message.
         * @function verify
         * @memberof pbchatRoom.ChatRoomModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatRoomModel.verify = function verify(message) {
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
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.head != null && message.hasOwnProperty("head"))
                if (!$util.isString(message.head))
                    return "head: string expected";
            if (message.publicNotice != null && message.hasOwnProperty("publicNotice"))
                if (!$util.isString(message.publicNotice))
                    return "publicNotice: string expected";
            if (message.adminId != null && message.hasOwnProperty("adminId"))
                if (!$util.isInteger(message.adminId) && !(message.adminId && $util.isInteger(message.adminId.low) && $util.isInteger(message.adminId.high)))
                    return "adminId: integer|Long expected";
            if (message.Admin != null && message.hasOwnProperty("Admin")) {
                var error = $root.pbuser.UserModel.verify(message.Admin);
                if (error)
                    return "Admin." + error;
            }
            if (message.members != null && message.hasOwnProperty("members")) {
                if (!Array.isArray(message.members))
                    return "members: array expected";
                for (var i = 0; i < message.members.length; ++i) {
                    var error = $root.pbuser.UserModel.verify(message.members[i]);
                    if (error)
                        return "members." + error;
                }
            }
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                switch (message.roomType) {
                default:
                    return "roomType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.latestMessageCreatedAt != null && message.hasOwnProperty("latestMessageCreatedAt"))
                if (!$util.isString(message.latestMessageCreatedAt))
                    return "latestMessageCreatedAt: string expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.latestMessageId != null && message.hasOwnProperty("latestMessageId"))
                if (!$util.isInteger(message.latestMessageId) && !(message.latestMessageId && $util.isInteger(message.latestMessageId.low) && $util.isInteger(message.latestMessageId.high)))
                    return "latestMessageId: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a ChatRoomModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbchatRoom.ChatRoomModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbchatRoom.ChatRoomModel} ChatRoomModel
         */
        ChatRoomModel.fromObject = function fromObject(object) {
            if (object instanceof $root.pbchatRoom.ChatRoomModel)
                return object;
            var message = new $root.pbchatRoom.ChatRoomModel();
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
            if (object.name != null)
                message.name = String(object.name);
            if (object.password != null)
                message.password = String(object.password);
            if (object.head != null)
                message.head = String(object.head);
            if (object.publicNotice != null)
                message.publicNotice = String(object.publicNotice);
            if (object.adminId != null)
                if ($util.Long)
                    (message.adminId = $util.Long.fromValue(object.adminId)).unsigned = false;
                else if (typeof object.adminId === "string")
                    message.adminId = parseInt(object.adminId, 10);
                else if (typeof object.adminId === "number")
                    message.adminId = object.adminId;
                else if (typeof object.adminId === "object")
                    message.adminId = new $util.LongBits(object.adminId.low >>> 0, object.adminId.high >>> 0).toNumber();
            if (object.Admin != null) {
                if (typeof object.Admin !== "object")
                    throw TypeError(".pbchatRoom.ChatRoomModel.Admin: object expected");
                message.Admin = $root.pbuser.UserModel.fromObject(object.Admin);
            }
            if (object.members) {
                if (!Array.isArray(object.members))
                    throw TypeError(".pbchatRoom.ChatRoomModel.members: array expected");
                message.members = [];
                for (var i = 0; i < object.members.length; ++i) {
                    if (typeof object.members[i] !== "object")
                        throw TypeError(".pbchatRoom.ChatRoomModel.members: object expected");
                    message.members[i] = $root.pbuser.UserModel.fromObject(object.members[i]);
                }
            }
            switch (object.roomType) {
            default:
                if (typeof object.roomType === "number") {
                    message.roomType = object.roomType;
                    break;
                }
                break;
            case "Private":
            case 0:
                message.roomType = 0;
                break;
            case "Public":
            case 1:
                message.roomType = 1;
                break;
            case "Monitor":
            case 2:
                message.roomType = 2;
                break;
            case "ARGlasses":
            case 3:
                message.roomType = 3;
                break;
            }
            if (object.latestMessageCreatedAt != null)
                message.latestMessageCreatedAt = String(object.latestMessageCreatedAt);
            if (object.code != null)
                message.code = object.code | 0;
            if (object.latestMessageId != null)
                if ($util.Long)
                    (message.latestMessageId = $util.Long.fromValue(object.latestMessageId)).unsigned = false;
                else if (typeof object.latestMessageId === "string")
                    message.latestMessageId = parseInt(object.latestMessageId, 10);
                else if (typeof object.latestMessageId === "number")
                    message.latestMessageId = object.latestMessageId;
                else if (typeof object.latestMessageId === "object")
                    message.latestMessageId = new $util.LongBits(object.latestMessageId.low >>> 0, object.latestMessageId.high >>> 0).toNumber();
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChatRoomModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbchatRoom.ChatRoomModel
         * @static
         * @param {pbchatRoom.ChatRoomModel} message ChatRoomModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatRoomModel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.members = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.createdAt = "";
                object.updatedAt = "";
                object.name = "";
                object.password = "";
                object.head = "";
                object.publicNotice = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.adminId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.adminId = options.longs === String ? "0" : 0;
                object.Admin = null;
                object.roomType = options.enums === String ? "Private" : 0;
                object.latestMessageCreatedAt = "";
                object.code = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.latestMessageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.latestMessageId = options.longs === String ? "0" : 0;
                object.status = 0;
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
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.head != null && message.hasOwnProperty("head"))
                object.head = message.head;
            if (message.publicNotice != null && message.hasOwnProperty("publicNotice"))
                object.publicNotice = message.publicNotice;
            if (message.adminId != null && message.hasOwnProperty("adminId"))
                if (typeof message.adminId === "number")
                    object.adminId = options.longs === String ? String(message.adminId) : message.adminId;
                else
                    object.adminId = options.longs === String ? $util.Long.prototype.toString.call(message.adminId) : options.longs === Number ? new $util.LongBits(message.adminId.low >>> 0, message.adminId.high >>> 0).toNumber() : message.adminId;
            if (message.Admin != null && message.hasOwnProperty("Admin"))
                object.Admin = $root.pbuser.UserModel.toObject(message.Admin, options);
            if (message.members && message.members.length) {
                object.members = [];
                for (var j = 0; j < message.members.length; ++j)
                    object.members[j] = $root.pbuser.UserModel.toObject(message.members[j], options);
            }
            if (message.roomType != null && message.hasOwnProperty("roomType"))
                object.roomType = options.enums === String ? $root.pbchatRoom.RoomType[message.roomType] === undefined ? message.roomType : $root.pbchatRoom.RoomType[message.roomType] : message.roomType;
            if (message.latestMessageCreatedAt != null && message.hasOwnProperty("latestMessageCreatedAt"))
                object.latestMessageCreatedAt = message.latestMessageCreatedAt;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.latestMessageId != null && message.hasOwnProperty("latestMessageId"))
                if (typeof message.latestMessageId === "number")
                    object.latestMessageId = options.longs === String ? String(message.latestMessageId) : message.latestMessageId;
                else
                    object.latestMessageId = options.longs === String ? $util.Long.prototype.toString.call(message.latestMessageId) : options.longs === Number ? new $util.LongBits(message.latestMessageId.low >>> 0, message.latestMessageId.high >>> 0).toNumber() : message.latestMessageId;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this ChatRoomModel to JSON.
         * @function toJSON
         * @memberof pbchatRoom.ChatRoomModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatRoomModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatRoomModel
         * @function getTypeUrl
         * @memberof pbchatRoom.ChatRoomModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatRoomModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbchatRoom.ChatRoomModel";
        };

        return ChatRoomModel;
    })();

    /**
     * RoomType enum.
     * @name pbchatRoom.RoomType
     * @enum {number}
     * @property {number} Private=0 Private value
     * @property {number} Public=1 Public value
     * @property {number} Monitor=2 Monitor value
     * @property {number} ARGlasses=3 ARGlasses value
     */
    pbchatRoom.RoomType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Private"] = 0;
        values[valuesById[1] = "Public"] = 1;
        values[valuesById[2] = "Monitor"] = 2;
        values[valuesById[3] = "ARGlasses"] = 3;
        return values;
    })();

    /**
     * ChatRoomUserRole enum.
     * @name pbchatRoom.ChatRoomUserRole
     * @enum {number}
     * @property {number} ChatRoomUserRole_None=0 ChatRoomUserRole_None value
     * @property {number} ChatRoomUserRole_Super=1 ChatRoomUserRole_Super value
     * @property {number} ChatRoomUserRole_Admin=2 ChatRoomUserRole_Admin value
     */
    pbchatRoom.ChatRoomUserRole = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ChatRoomUserRole_None"] = 0;
        values[valuesById[1] = "ChatRoomUserRole_Super"] = 1;
        values[valuesById[2] = "ChatRoomUserRole_Admin"] = 2;
        return values;
    })();

    pbchatRoom.FindChatRoomArgs = (function() {

        /**
         * Properties of a FindChatRoomArgs.
         * @memberof pbchatRoom
         * @interface IFindChatRoomArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindChatRoomArgs pageInfo
         * @property {pbchatRoom.IChatRoomModel|null} [query] FindChatRoomArgs query
         */

        /**
         * Constructs a new FindChatRoomArgs.
         * @memberof pbchatRoom
         * @classdesc Represents a FindChatRoomArgs.
         * @implements IFindChatRoomArgs
         * @constructor
         * @param {pbchatRoom.IFindChatRoomArgs=} [properties] Properties to set
         */
        function FindChatRoomArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindChatRoomArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbchatRoom.FindChatRoomArgs
         * @instance
         */
        FindChatRoomArgs.prototype.pageInfo = null;

        /**
         * FindChatRoomArgs query.
         * @member {pbchatRoom.IChatRoomModel|null|undefined} query
         * @memberof pbchatRoom.FindChatRoomArgs
         * @instance
         */
        FindChatRoomArgs.prototype.query = null;

        /**
         * Creates a new FindChatRoomArgs instance using the specified properties.
         * @function create
         * @memberof pbchatRoom.FindChatRoomArgs
         * @static
         * @param {pbchatRoom.IFindChatRoomArgs=} [properties] Properties to set
         * @returns {pbchatRoom.FindChatRoomArgs} FindChatRoomArgs instance
         */
        FindChatRoomArgs.create = function create(properties) {
            return new FindChatRoomArgs(properties);
        };

        /**
         * Encodes the specified FindChatRoomArgs message. Does not implicitly {@link pbchatRoom.FindChatRoomArgs.verify|verify} messages.
         * @function encode
         * @memberof pbchatRoom.FindChatRoomArgs
         * @static
         * @param {pbchatRoom.IFindChatRoomArgs} message FindChatRoomArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindChatRoomArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.pbchatRoom.ChatRoomModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified FindChatRoomArgs message, length delimited. Does not implicitly {@link pbchatRoom.FindChatRoomArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbchatRoom.FindChatRoomArgs
         * @static
         * @param {pbchatRoom.IFindChatRoomArgs} message FindChatRoomArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindChatRoomArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindChatRoomArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbchatRoom.FindChatRoomArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbchatRoom.FindChatRoomArgs} FindChatRoomArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindChatRoomArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbchatRoom.FindChatRoomArgs();
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
                        message.query = $root.pbchatRoom.ChatRoomModel.decode(reader, reader.uint32());
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
         * Decodes a FindChatRoomArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbchatRoom.FindChatRoomArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbchatRoom.FindChatRoomArgs} FindChatRoomArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindChatRoomArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindChatRoomArgs message.
         * @function verify
         * @memberof pbchatRoom.FindChatRoomArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindChatRoomArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                var error = $root.pbchatRoom.ChatRoomModel.verify(message.query);
                if (error)
                    return "query." + error;
            }
            return null;
        };

        /**
         * Creates a FindChatRoomArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbchatRoom.FindChatRoomArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbchatRoom.FindChatRoomArgs} FindChatRoomArgs
         */
        FindChatRoomArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbchatRoom.FindChatRoomArgs)
                return object;
            var message = new $root.pbchatRoom.FindChatRoomArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbchatRoom.FindChatRoomArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".pbchatRoom.FindChatRoomArgs.query: object expected");
                message.query = $root.pbchatRoom.ChatRoomModel.fromObject(object.query);
            }
            return message;
        };

        /**
         * Creates a plain object from a FindChatRoomArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbchatRoom.FindChatRoomArgs
         * @static
         * @param {pbchatRoom.FindChatRoomArgs} message FindChatRoomArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindChatRoomArgs.toObject = function toObject(message, options) {
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
                object.query = $root.pbchatRoom.ChatRoomModel.toObject(message.query, options);
            return object;
        };

        /**
         * Converts this FindChatRoomArgs to JSON.
         * @function toJSON
         * @memberof pbchatRoom.FindChatRoomArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindChatRoomArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindChatRoomArgs
         * @function getTypeUrl
         * @memberof pbchatRoom.FindChatRoomArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindChatRoomArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbchatRoom.FindChatRoomArgs";
        };

        return FindChatRoomArgs;
    })();

    pbchatRoom.FindChatRoomReply = (function() {

        /**
         * Properties of a FindChatRoomReply.
         * @memberof pbchatRoom
         * @interface IFindChatRoomReply
         * @property {pbcommon.EnumCode|null} [code] FindChatRoomReply code
         * @property {string|null} [msg] FindChatRoomReply msg
         * @property {pbchatRoom.IChatRoomModel|null} [data] FindChatRoomReply data
         * @property {Array.<pbchatRoom.IChatRoomModel>|null} [list] FindChatRoomReply list
         * @property {number|Long|null} [total] FindChatRoomReply total
         */

        /**
         * Constructs a new FindChatRoomReply.
         * @memberof pbchatRoom
         * @classdesc Represents a FindChatRoomReply.
         * @implements IFindChatRoomReply
         * @constructor
         * @param {pbchatRoom.IFindChatRoomReply=} [properties] Properties to set
         */
        function FindChatRoomReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindChatRoomReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbchatRoom.FindChatRoomReply
         * @instance
         */
        FindChatRoomReply.prototype.code = 0;

        /**
         * FindChatRoomReply msg.
         * @member {string} msg
         * @memberof pbchatRoom.FindChatRoomReply
         * @instance
         */
        FindChatRoomReply.prototype.msg = "";

        /**
         * FindChatRoomReply data.
         * @member {pbchatRoom.IChatRoomModel|null|undefined} data
         * @memberof pbchatRoom.FindChatRoomReply
         * @instance
         */
        FindChatRoomReply.prototype.data = null;

        /**
         * FindChatRoomReply list.
         * @member {Array.<pbchatRoom.IChatRoomModel>} list
         * @memberof pbchatRoom.FindChatRoomReply
         * @instance
         */
        FindChatRoomReply.prototype.list = $util.emptyArray;

        /**
         * FindChatRoomReply total.
         * @member {number|Long} total
         * @memberof pbchatRoom.FindChatRoomReply
         * @instance
         */
        FindChatRoomReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindChatRoomReply instance using the specified properties.
         * @function create
         * @memberof pbchatRoom.FindChatRoomReply
         * @static
         * @param {pbchatRoom.IFindChatRoomReply=} [properties] Properties to set
         * @returns {pbchatRoom.FindChatRoomReply} FindChatRoomReply instance
         */
        FindChatRoomReply.create = function create(properties) {
            return new FindChatRoomReply(properties);
        };

        /**
         * Encodes the specified FindChatRoomReply message. Does not implicitly {@link pbchatRoom.FindChatRoomReply.verify|verify} messages.
         * @function encode
         * @memberof pbchatRoom.FindChatRoomReply
         * @static
         * @param {pbchatRoom.IFindChatRoomReply} message FindChatRoomReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindChatRoomReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbchatRoom.ChatRoomModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbchatRoom.ChatRoomModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindChatRoomReply message, length delimited. Does not implicitly {@link pbchatRoom.FindChatRoomReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbchatRoom.FindChatRoomReply
         * @static
         * @param {pbchatRoom.IFindChatRoomReply} message FindChatRoomReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindChatRoomReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindChatRoomReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbchatRoom.FindChatRoomReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbchatRoom.FindChatRoomReply} FindChatRoomReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindChatRoomReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbchatRoom.FindChatRoomReply();
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
                        message.data = $root.pbchatRoom.ChatRoomModel.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbchatRoom.ChatRoomModel.decode(reader, reader.uint32()));
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
         * Decodes a FindChatRoomReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbchatRoom.FindChatRoomReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbchatRoom.FindChatRoomReply} FindChatRoomReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindChatRoomReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindChatRoomReply message.
         * @function verify
         * @memberof pbchatRoom.FindChatRoomReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindChatRoomReply.verify = function verify(message) {
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
                case 20001:
                case 20002:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbchatRoom.ChatRoomModel.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbchatRoom.ChatRoomModel.verify(message.list[i]);
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
         * Creates a FindChatRoomReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbchatRoom.FindChatRoomReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbchatRoom.FindChatRoomReply} FindChatRoomReply
         */
        FindChatRoomReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbchatRoom.FindChatRoomReply)
                return object;
            var message = new $root.pbchatRoom.FindChatRoomReply();
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
            case "GamePhaseNotMatch":
            case 20001:
                message.code = 20001;
                break;
            case "GameNotStarted":
            case 20002:
                message.code = 20002;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbchatRoom.FindChatRoomReply.data: object expected");
                message.data = $root.pbchatRoom.ChatRoomModel.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbchatRoom.FindChatRoomReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbchatRoom.FindChatRoomReply.list: object expected");
                    message.list[i] = $root.pbchatRoom.ChatRoomModel.fromObject(object.list[i]);
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
         * Creates a plain object from a FindChatRoomReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbchatRoom.FindChatRoomReply
         * @static
         * @param {pbchatRoom.FindChatRoomReply} message FindChatRoomReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindChatRoomReply.toObject = function toObject(message, options) {
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
                object.data = $root.pbchatRoom.ChatRoomModel.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbchatRoom.ChatRoomModel.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindChatRoomReply to JSON.
         * @function toJSON
         * @memberof pbchatRoom.FindChatRoomReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindChatRoomReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindChatRoomReply
         * @function getTypeUrl
         * @memberof pbchatRoom.FindChatRoomReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindChatRoomReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbchatRoom.FindChatRoomReply";
        };

        return FindChatRoomReply;
    })();

    pbchatRoom.ChatRoom = (function() {

        /**
         * Constructs a new ChatRoom service.
         * @memberof pbchatRoom
         * @classdesc Represents a ChatRoom
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ChatRoom(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ChatRoom.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ChatRoom;

        /**
         * Creates new ChatRoom service using the specified rpc implementation.
         * @function create
         * @memberof pbchatRoom.ChatRoom
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ChatRoom} RPC service. Useful where requests and/or responses are streamed.
         */
        ChatRoom.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbchatRoom.ChatRoom#createChatRoom}.
         * @memberof pbchatRoom.ChatRoom
         * @typedef CreateChatRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CreateChatRoom.
         * @function createChatRoom
         * @memberof pbchatRoom.ChatRoom
         * @instance
         * @param {pbchatRoom.IChatRoomModel} request ChatRoomModel message or plain object
         * @param {pbchatRoom.ChatRoom.CreateChatRoomCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ChatRoom.prototype.createChatRoom = function createChatRoom(request, callback) {
            return this.rpcCall(createChatRoom, $root.pbchatRoom.ChatRoomModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateChatRoom" });

        /**
         * Calls CreateChatRoom.
         * @function createChatRoom
         * @memberof pbchatRoom.ChatRoom
         * @instance
         * @param {pbchatRoom.IChatRoomModel} request ChatRoomModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbchatRoom.ChatRoom#updateChatRoom}.
         * @memberof pbchatRoom.ChatRoom
         * @typedef UpdateChatRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls UpdateChatRoom.
         * @function updateChatRoom
         * @memberof pbchatRoom.ChatRoom
         * @instance
         * @param {pbchatRoom.IChatRoomModel} request ChatRoomModel message or plain object
         * @param {pbchatRoom.ChatRoom.UpdateChatRoomCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ChatRoom.prototype.updateChatRoom = function updateChatRoom(request, callback) {
            return this.rpcCall(updateChatRoom, $root.pbchatRoom.ChatRoomModel, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateChatRoom" });

        /**
         * Calls UpdateChatRoom.
         * @function updateChatRoom
         * @memberof pbchatRoom.ChatRoom
         * @instance
         * @param {pbchatRoom.IChatRoomModel} request ChatRoomModel message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbchatRoom.ChatRoom#deleteChatRoom}.
         * @memberof pbchatRoom.ChatRoom
         * @typedef DeleteChatRoomCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls DeleteChatRoom.
         * @function deleteChatRoom
         * @memberof pbchatRoom.ChatRoom
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbchatRoom.ChatRoom.DeleteChatRoomCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ChatRoom.prototype.deleteChatRoom = function deleteChatRoom(request, callback) {
            return this.rpcCall(deleteChatRoom, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteChatRoom" });

        /**
         * Calls DeleteChatRoom.
         * @function deleteChatRoom
         * @memberof pbchatRoom.ChatRoom
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbchatRoom.ChatRoom#findChatRoomById}.
         * @memberof pbchatRoom.ChatRoom
         * @typedef FindChatRoomByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbchatRoom.FindChatRoomReply} [response] FindChatRoomReply
         */

        /**
         * Calls FindChatRoomById.
         * @function findChatRoomById
         * @memberof pbchatRoom.ChatRoom
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbchatRoom.ChatRoom.FindChatRoomByIdCallback} callback Node-style callback called with the error, if any, and FindChatRoomReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ChatRoom.prototype.findChatRoomById = function findChatRoomById(request, callback) {
            return this.rpcCall(findChatRoomById, $root.pbcommon.IdArgs, $root.pbchatRoom.FindChatRoomReply, request, callback);
        }, "name", { value: "FindChatRoomById" });

        /**
         * Calls FindChatRoomById.
         * @function findChatRoomById
         * @memberof pbchatRoom.ChatRoom
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbchatRoom.FindChatRoomReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbchatRoom.ChatRoom#findChatRoomList}.
         * @memberof pbchatRoom.ChatRoom
         * @typedef FindChatRoomListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbchatRoom.FindChatRoomReply} [response] FindChatRoomReply
         */

        /**
         * Calls FindChatRoomList.
         * @function findChatRoomList
         * @memberof pbchatRoom.ChatRoom
         * @instance
         * @param {pbchatRoom.IFindChatRoomArgs} request FindChatRoomArgs message or plain object
         * @param {pbchatRoom.ChatRoom.FindChatRoomListCallback} callback Node-style callback called with the error, if any, and FindChatRoomReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ChatRoom.prototype.findChatRoomList = function findChatRoomList(request, callback) {
            return this.rpcCall(findChatRoomList, $root.pbchatRoom.FindChatRoomArgs, $root.pbchatRoom.FindChatRoomReply, request, callback);
        }, "name", { value: "FindChatRoomList" });

        /**
         * Calls FindChatRoomList.
         * @function findChatRoomList
         * @memberof pbchatRoom.ChatRoom
         * @instance
         * @param {pbchatRoom.IFindChatRoomArgs} request FindChatRoomArgs message or plain object
         * @returns {Promise<pbchatRoom.FindChatRoomReply>} Promise
         * @variation 2
         */

        return ChatRoom;
    })();

    return pbchatRoom;
})();

module.exports = $root;
