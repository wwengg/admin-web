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
     * @property {number} TooManyRequests=511 TooManyRequests value
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
     * @property {number} InsufficientBalance=20003 InsufficientBalance value
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
        values[valuesById[511] = "TooManyRequests"] = 511;
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
        values[valuesById[20003] = "InsufficientBalance"] = 20003;
        return values;
    })();

    pbcommon.CommonResult = (function() {

        /**
         * Properties of a CommonResult.
         * @memberof pbcommon
         * @interface ICommonResult
         * @property {pbcommon.EnumCode|null} [code] CommonResult code
         * @property {string|null} [msg] CommonResult msg
         * @property {number|null} [subCode] CommonResult subCode
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
         * CommonResult subCode.
         * @member {number} subCode
         * @memberof pbcommon.CommonResult
         * @instance
         */
        CommonResult.prototype.subCode = 0;

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
            if (message.subCode != null && Object.hasOwnProperty.call(message, "subCode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.subCode);
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
                case 3: {
                        message.subCode = reader.int32();
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
                case 511:
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
                case 20003:
                    break;
                }
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.subCode != null && message.hasOwnProperty("subCode"))
                if (!$util.isInteger(message.subCode))
                    return "subCode: integer expected";
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
            case "TooManyRequests":
            case 511:
                message.code = 511;
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
            case "InsufficientBalance":
            case 20003:
                message.code = 20003;
                break;
            }
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.subCode != null)
                message.subCode = object.subCode | 0;
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
                object.subCode = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.subCode != null && message.hasOwnProperty("subCode"))
                object.subCode = message.subCode;
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

$root.pbShop = (function() {

    /**
     * Namespace pbShop.
     * @exports pbShop
     * @namespace
     */
    var pbShop = {};

    pbShop.ShopProduct = (function() {

        /**
         * Properties of a ShopProduct.
         * @memberof pbShop
         * @interface IShopProduct
         * @property {number|Long|null} [id] ShopProduct id
         * @property {string|null} [createdAt] ShopProduct createdAt
         * @property {string|null} [updatedAt] ShopProduct updatedAt
         * @property {string|null} [skuId] ShopProduct skuId
         * @property {string|null} [name] ShopProduct name
         * @property {string|null} [coverImage] ShopProduct coverImage
         * @property {string|null} [images] ShopProduct images
         * @property {string|null} [description] ShopProduct description
         * @property {number|null} [pointsPrice] ShopProduct pointsPrice
         * @property {number|null} [stock] ShopProduct stock
         * @property {number|null} [status] ShopProduct status
         * @property {number|null} [sortOrder] ShopProduct sortOrder
         * @property {string|null} [category] ShopProduct category
         * @property {string|null} [remark] ShopProduct remark
         */

        /**
         * Constructs a new ShopProduct.
         * @memberof pbShop
         * @classdesc Represents a ShopProduct.
         * @implements IShopProduct
         * @constructor
         * @param {pbShop.IShopProduct=} [properties] Properties to set
         */
        function ShopProduct(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShopProduct id.
         * @member {number|Long} id
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ShopProduct createdAt.
         * @member {string} createdAt
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.createdAt = "";

        /**
         * ShopProduct updatedAt.
         * @member {string} updatedAt
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.updatedAt = "";

        /**
         * ShopProduct skuId.
         * @member {string} skuId
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.skuId = "";

        /**
         * ShopProduct name.
         * @member {string} name
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.name = "";

        /**
         * ShopProduct coverImage.
         * @member {string} coverImage
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.coverImage = "";

        /**
         * ShopProduct images.
         * @member {string} images
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.images = "";

        /**
         * ShopProduct description.
         * @member {string} description
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.description = "";

        /**
         * ShopProduct pointsPrice.
         * @member {number} pointsPrice
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.pointsPrice = 0;

        /**
         * ShopProduct stock.
         * @member {number} stock
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.stock = 0;

        /**
         * ShopProduct status.
         * @member {number} status
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.status = 0;

        /**
         * ShopProduct sortOrder.
         * @member {number} sortOrder
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.sortOrder = 0;

        /**
         * ShopProduct category.
         * @member {string} category
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.category = "";

        /**
         * ShopProduct remark.
         * @member {string} remark
         * @memberof pbShop.ShopProduct
         * @instance
         */
        ShopProduct.prototype.remark = "";

        /**
         * Creates a new ShopProduct instance using the specified properties.
         * @function create
         * @memberof pbShop.ShopProduct
         * @static
         * @param {pbShop.IShopProduct=} [properties] Properties to set
         * @returns {pbShop.ShopProduct} ShopProduct instance
         */
        ShopProduct.create = function create(properties) {
            return new ShopProduct(properties);
        };

        /**
         * Encodes the specified ShopProduct message. Does not implicitly {@link pbShop.ShopProduct.verify|verify} messages.
         * @function encode
         * @memberof pbShop.ShopProduct
         * @static
         * @param {pbShop.IShopProduct} message ShopProduct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopProduct.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.skuId != null && Object.hasOwnProperty.call(message, "skuId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.skuId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.name);
            if (message.coverImage != null && Object.hasOwnProperty.call(message, "coverImage"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.coverImage);
            if (message.images != null && Object.hasOwnProperty.call(message, "images"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.images);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.description);
            if (message.pointsPrice != null && Object.hasOwnProperty.call(message, "pointsPrice"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.pointsPrice);
            if (message.stock != null && Object.hasOwnProperty.call(message, "stock"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.stock);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.status);
            if (message.sortOrder != null && Object.hasOwnProperty.call(message, "sortOrder"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.sortOrder);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.category);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified ShopProduct message, length delimited. Does not implicitly {@link pbShop.ShopProduct.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.ShopProduct
         * @static
         * @param {pbShop.IShopProduct} message ShopProduct message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopProduct.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShopProduct message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.ShopProduct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.ShopProduct} ShopProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopProduct.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.ShopProduct();
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
                case 10: {
                        message.skuId = reader.string();
                        break;
                    }
                case 11: {
                        message.name = reader.string();
                        break;
                    }
                case 12: {
                        message.coverImage = reader.string();
                        break;
                    }
                case 13: {
                        message.images = reader.string();
                        break;
                    }
                case 14: {
                        message.description = reader.string();
                        break;
                    }
                case 15: {
                        message.pointsPrice = reader.int32();
                        break;
                    }
                case 16: {
                        message.stock = reader.int32();
                        break;
                    }
                case 17: {
                        message.status = reader.int32();
                        break;
                    }
                case 18: {
                        message.sortOrder = reader.int32();
                        break;
                    }
                case 19: {
                        message.category = reader.string();
                        break;
                    }
                case 20: {
                        message.remark = reader.string();
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
         * Decodes a ShopProduct message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.ShopProduct
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.ShopProduct} ShopProduct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopProduct.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShopProduct message.
         * @function verify
         * @memberof pbShop.ShopProduct
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShopProduct.verify = function verify(message) {
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
            if (message.skuId != null && message.hasOwnProperty("skuId"))
                if (!$util.isString(message.skuId))
                    return "skuId: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.coverImage != null && message.hasOwnProperty("coverImage"))
                if (!$util.isString(message.coverImage))
                    return "coverImage: string expected";
            if (message.images != null && message.hasOwnProperty("images"))
                if (!$util.isString(message.images))
                    return "images: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.pointsPrice != null && message.hasOwnProperty("pointsPrice"))
                if (!$util.isInteger(message.pointsPrice))
                    return "pointsPrice: integer expected";
            if (message.stock != null && message.hasOwnProperty("stock"))
                if (!$util.isInteger(message.stock))
                    return "stock: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.sortOrder != null && message.hasOwnProperty("sortOrder"))
                if (!$util.isInteger(message.sortOrder))
                    return "sortOrder: integer expected";
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isString(message.category))
                    return "category: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a ShopProduct message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.ShopProduct
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.ShopProduct} ShopProduct
         */
        ShopProduct.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.ShopProduct)
                return object;
            var message = new $root.pbShop.ShopProduct();
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
            if (object.skuId != null)
                message.skuId = String(object.skuId);
            if (object.name != null)
                message.name = String(object.name);
            if (object.coverImage != null)
                message.coverImage = String(object.coverImage);
            if (object.images != null)
                message.images = String(object.images);
            if (object.description != null)
                message.description = String(object.description);
            if (object.pointsPrice != null)
                message.pointsPrice = object.pointsPrice | 0;
            if (object.stock != null)
                message.stock = object.stock | 0;
            if (object.status != null)
                message.status = object.status | 0;
            if (object.sortOrder != null)
                message.sortOrder = object.sortOrder | 0;
            if (object.category != null)
                message.category = String(object.category);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a ShopProduct message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.ShopProduct
         * @static
         * @param {pbShop.ShopProduct} message ShopProduct
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShopProduct.toObject = function toObject(message, options) {
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
                object.skuId = "";
                object.name = "";
                object.coverImage = "";
                object.images = "";
                object.description = "";
                object.pointsPrice = 0;
                object.stock = 0;
                object.status = 0;
                object.sortOrder = 0;
                object.category = "";
                object.remark = "";
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
            if (message.skuId != null && message.hasOwnProperty("skuId"))
                object.skuId = message.skuId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.coverImage != null && message.hasOwnProperty("coverImage"))
                object.coverImage = message.coverImage;
            if (message.images != null && message.hasOwnProperty("images"))
                object.images = message.images;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.pointsPrice != null && message.hasOwnProperty("pointsPrice"))
                object.pointsPrice = message.pointsPrice;
            if (message.stock != null && message.hasOwnProperty("stock"))
                object.stock = message.stock;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.sortOrder != null && message.hasOwnProperty("sortOrder"))
                object.sortOrder = message.sortOrder;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this ShopProduct to JSON.
         * @function toJSON
         * @memberof pbShop.ShopProduct
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShopProduct.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ShopProduct
         * @function getTypeUrl
         * @memberof pbShop.ShopProduct
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ShopProduct.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.ShopProduct";
        };

        return ShopProduct;
    })();

    pbShop.PointsAccount = (function() {

        /**
         * Properties of a PointsAccount.
         * @memberof pbShop
         * @interface IPointsAccount
         * @property {number|Long|null} [id] PointsAccount id
         * @property {string|null} [createdAt] PointsAccount createdAt
         * @property {string|null} [updatedAt] PointsAccount updatedAt
         * @property {string|null} [userId] PointsAccount userId
         * @property {string|null} [userName] PointsAccount userName
         * @property {number|null} [balance] PointsAccount balance
         * @property {number|null} [totalEarned] PointsAccount totalEarned
         * @property {number|null} [totalSpent] PointsAccount totalSpent
         * @property {number|null} [status] PointsAccount status
         */

        /**
         * Constructs a new PointsAccount.
         * @memberof pbShop
         * @classdesc Represents a PointsAccount.
         * @implements IPointsAccount
         * @constructor
         * @param {pbShop.IPointsAccount=} [properties] Properties to set
         */
        function PointsAccount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PointsAccount id.
         * @member {number|Long} id
         * @memberof pbShop.PointsAccount
         * @instance
         */
        PointsAccount.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PointsAccount createdAt.
         * @member {string} createdAt
         * @memberof pbShop.PointsAccount
         * @instance
         */
        PointsAccount.prototype.createdAt = "";

        /**
         * PointsAccount updatedAt.
         * @member {string} updatedAt
         * @memberof pbShop.PointsAccount
         * @instance
         */
        PointsAccount.prototype.updatedAt = "";

        /**
         * PointsAccount userId.
         * @member {string} userId
         * @memberof pbShop.PointsAccount
         * @instance
         */
        PointsAccount.prototype.userId = "";

        /**
         * PointsAccount userName.
         * @member {string} userName
         * @memberof pbShop.PointsAccount
         * @instance
         */
        PointsAccount.prototype.userName = "";

        /**
         * PointsAccount balance.
         * @member {number} balance
         * @memberof pbShop.PointsAccount
         * @instance
         */
        PointsAccount.prototype.balance = 0;

        /**
         * PointsAccount totalEarned.
         * @member {number} totalEarned
         * @memberof pbShop.PointsAccount
         * @instance
         */
        PointsAccount.prototype.totalEarned = 0;

        /**
         * PointsAccount totalSpent.
         * @member {number} totalSpent
         * @memberof pbShop.PointsAccount
         * @instance
         */
        PointsAccount.prototype.totalSpent = 0;

        /**
         * PointsAccount status.
         * @member {number} status
         * @memberof pbShop.PointsAccount
         * @instance
         */
        PointsAccount.prototype.status = 0;

        /**
         * Creates a new PointsAccount instance using the specified properties.
         * @function create
         * @memberof pbShop.PointsAccount
         * @static
         * @param {pbShop.IPointsAccount=} [properties] Properties to set
         * @returns {pbShop.PointsAccount} PointsAccount instance
         */
        PointsAccount.create = function create(properties) {
            return new PointsAccount(properties);
        };

        /**
         * Encodes the specified PointsAccount message. Does not implicitly {@link pbShop.PointsAccount.verify|verify} messages.
         * @function encode
         * @memberof pbShop.PointsAccount
         * @static
         * @param {pbShop.IPointsAccount} message PointsAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointsAccount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userId);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.userName);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.balance);
            if (message.totalEarned != null && Object.hasOwnProperty.call(message, "totalEarned"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.totalEarned);
            if (message.totalSpent != null && Object.hasOwnProperty.call(message, "totalSpent"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.totalSpent);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified PointsAccount message, length delimited. Does not implicitly {@link pbShop.PointsAccount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.PointsAccount
         * @static
         * @param {pbShop.IPointsAccount} message PointsAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointsAccount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PointsAccount message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.PointsAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.PointsAccount} PointsAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointsAccount.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.PointsAccount();
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
                case 10: {
                        message.userId = reader.string();
                        break;
                    }
                case 11: {
                        message.userName = reader.string();
                        break;
                    }
                case 12: {
                        message.balance = reader.int32();
                        break;
                    }
                case 13: {
                        message.totalEarned = reader.int32();
                        break;
                    }
                case 14: {
                        message.totalSpent = reader.int32();
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
         * Decodes a PointsAccount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.PointsAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.PointsAccount} PointsAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointsAccount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PointsAccount message.
         * @function verify
         * @memberof pbShop.PointsAccount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PointsAccount.verify = function verify(message) {
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
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance))
                    return "balance: integer expected";
            if (message.totalEarned != null && message.hasOwnProperty("totalEarned"))
                if (!$util.isInteger(message.totalEarned))
                    return "totalEarned: integer expected";
            if (message.totalSpent != null && message.hasOwnProperty("totalSpent"))
                if (!$util.isInteger(message.totalSpent))
                    return "totalSpent: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            return null;
        };

        /**
         * Creates a PointsAccount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.PointsAccount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.PointsAccount} PointsAccount
         */
        PointsAccount.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.PointsAccount)
                return object;
            var message = new $root.pbShop.PointsAccount();
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
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.balance != null)
                message.balance = object.balance | 0;
            if (object.totalEarned != null)
                message.totalEarned = object.totalEarned | 0;
            if (object.totalSpent != null)
                message.totalSpent = object.totalSpent | 0;
            if (object.status != null)
                message.status = object.status | 0;
            return message;
        };

        /**
         * Creates a plain object from a PointsAccount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.PointsAccount
         * @static
         * @param {pbShop.PointsAccount} message PointsAccount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PointsAccount.toObject = function toObject(message, options) {
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
                object.userId = "";
                object.userName = "";
                object.balance = 0;
                object.totalEarned = 0;
                object.totalSpent = 0;
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
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = message.balance;
            if (message.totalEarned != null && message.hasOwnProperty("totalEarned"))
                object.totalEarned = message.totalEarned;
            if (message.totalSpent != null && message.hasOwnProperty("totalSpent"))
                object.totalSpent = message.totalSpent;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            return object;
        };

        /**
         * Converts this PointsAccount to JSON.
         * @function toJSON
         * @memberof pbShop.PointsAccount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PointsAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PointsAccount
         * @function getTypeUrl
         * @memberof pbShop.PointsAccount
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PointsAccount.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.PointsAccount";
        };

        return PointsAccount;
    })();

    pbShop.PointsTransaction = (function() {

        /**
         * Properties of a PointsTransaction.
         * @memberof pbShop
         * @interface IPointsTransaction
         * @property {number|Long|null} [id] PointsTransaction id
         * @property {string|null} [createdAt] PointsTransaction createdAt
         * @property {string|null} [userId] PointsTransaction userId
         * @property {string|null} [userName] PointsTransaction userName
         * @property {number|null} [amount] PointsTransaction amount
         * @property {number|null} [balanceAfter] PointsTransaction balanceAfter
         * @property {number|null} [type] PointsTransaction type
         * @property {string|null} [bizType] PointsTransaction bizType
         * @property {string|null} [bizId] PointsTransaction bizId
         * @property {string|null} [description] PointsTransaction description
         */

        /**
         * Constructs a new PointsTransaction.
         * @memberof pbShop
         * @classdesc Represents a PointsTransaction.
         * @implements IPointsTransaction
         * @constructor
         * @param {pbShop.IPointsTransaction=} [properties] Properties to set
         */
        function PointsTransaction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PointsTransaction id.
         * @member {number|Long} id
         * @memberof pbShop.PointsTransaction
         * @instance
         */
        PointsTransaction.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PointsTransaction createdAt.
         * @member {string} createdAt
         * @memberof pbShop.PointsTransaction
         * @instance
         */
        PointsTransaction.prototype.createdAt = "";

        /**
         * PointsTransaction userId.
         * @member {string} userId
         * @memberof pbShop.PointsTransaction
         * @instance
         */
        PointsTransaction.prototype.userId = "";

        /**
         * PointsTransaction userName.
         * @member {string} userName
         * @memberof pbShop.PointsTransaction
         * @instance
         */
        PointsTransaction.prototype.userName = "";

        /**
         * PointsTransaction amount.
         * @member {number} amount
         * @memberof pbShop.PointsTransaction
         * @instance
         */
        PointsTransaction.prototype.amount = 0;

        /**
         * PointsTransaction balanceAfter.
         * @member {number} balanceAfter
         * @memberof pbShop.PointsTransaction
         * @instance
         */
        PointsTransaction.prototype.balanceAfter = 0;

        /**
         * PointsTransaction type.
         * @member {number} type
         * @memberof pbShop.PointsTransaction
         * @instance
         */
        PointsTransaction.prototype.type = 0;

        /**
         * PointsTransaction bizType.
         * @member {string} bizType
         * @memberof pbShop.PointsTransaction
         * @instance
         */
        PointsTransaction.prototype.bizType = "";

        /**
         * PointsTransaction bizId.
         * @member {string} bizId
         * @memberof pbShop.PointsTransaction
         * @instance
         */
        PointsTransaction.prototype.bizId = "";

        /**
         * PointsTransaction description.
         * @member {string} description
         * @memberof pbShop.PointsTransaction
         * @instance
         */
        PointsTransaction.prototype.description = "";

        /**
         * Creates a new PointsTransaction instance using the specified properties.
         * @function create
         * @memberof pbShop.PointsTransaction
         * @static
         * @param {pbShop.IPointsTransaction=} [properties] Properties to set
         * @returns {pbShop.PointsTransaction} PointsTransaction instance
         */
        PointsTransaction.create = function create(properties) {
            return new PointsTransaction(properties);
        };

        /**
         * Encodes the specified PointsTransaction message. Does not implicitly {@link pbShop.PointsTransaction.verify|verify} messages.
         * @function encode
         * @memberof pbShop.PointsTransaction
         * @static
         * @param {pbShop.IPointsTransaction} message PointsTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointsTransaction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.userId);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.userName);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.amount);
            if (message.balanceAfter != null && Object.hasOwnProperty.call(message, "balanceAfter"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.balanceAfter);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.type);
            if (message.bizType != null && Object.hasOwnProperty.call(message, "bizType"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.bizType);
            if (message.bizId != null && Object.hasOwnProperty.call(message, "bizId"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.bizId);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified PointsTransaction message, length delimited. Does not implicitly {@link pbShop.PointsTransaction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.PointsTransaction
         * @static
         * @param {pbShop.IPointsTransaction} message PointsTransaction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PointsTransaction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PointsTransaction message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.PointsTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.PointsTransaction} PointsTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointsTransaction.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.PointsTransaction();
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
                case 10: {
                        message.userId = reader.string();
                        break;
                    }
                case 11: {
                        message.userName = reader.string();
                        break;
                    }
                case 12: {
                        message.amount = reader.int32();
                        break;
                    }
                case 13: {
                        message.balanceAfter = reader.int32();
                        break;
                    }
                case 14: {
                        message.type = reader.int32();
                        break;
                    }
                case 15: {
                        message.bizType = reader.string();
                        break;
                    }
                case 16: {
                        message.bizId = reader.string();
                        break;
                    }
                case 17: {
                        message.description = reader.string();
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
         * Decodes a PointsTransaction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.PointsTransaction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.PointsTransaction} PointsTransaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PointsTransaction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PointsTransaction message.
         * @function verify
         * @memberof pbShop.PointsTransaction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PointsTransaction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount))
                    return "amount: integer expected";
            if (message.balanceAfter != null && message.hasOwnProperty("balanceAfter"))
                if (!$util.isInteger(message.balanceAfter))
                    return "balanceAfter: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                if (!$util.isString(message.bizType))
                    return "bizType: string expected";
            if (message.bizId != null && message.hasOwnProperty("bizId"))
                if (!$util.isString(message.bizId))
                    return "bizId: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a PointsTransaction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.PointsTransaction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.PointsTransaction} PointsTransaction
         */
        PointsTransaction.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.PointsTransaction)
                return object;
            var message = new $root.pbShop.PointsTransaction();
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
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.amount != null)
                message.amount = object.amount | 0;
            if (object.balanceAfter != null)
                message.balanceAfter = object.balanceAfter | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.bizType != null)
                message.bizType = String(object.bizType);
            if (object.bizId != null)
                message.bizId = String(object.bizId);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a PointsTransaction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.PointsTransaction
         * @static
         * @param {pbShop.PointsTransaction} message PointsTransaction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PointsTransaction.toObject = function toObject(message, options) {
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
                object.userId = "";
                object.userName = "";
                object.amount = 0;
                object.balanceAfter = 0;
                object.type = 0;
                object.bizType = "";
                object.bizId = "";
                object.description = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            if (message.balanceAfter != null && message.hasOwnProperty("balanceAfter"))
                object.balanceAfter = message.balanceAfter;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                object.bizType = message.bizType;
            if (message.bizId != null && message.hasOwnProperty("bizId"))
                object.bizId = message.bizId;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this PointsTransaction to JSON.
         * @function toJSON
         * @memberof pbShop.PointsTransaction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PointsTransaction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PointsTransaction
         * @function getTypeUrl
         * @memberof pbShop.PointsTransaction
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PointsTransaction.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.PointsTransaction";
        };

        return PointsTransaction;
    })();

    pbShop.RedemptionOrder = (function() {

        /**
         * Properties of a RedemptionOrder.
         * @memberof pbShop
         * @interface IRedemptionOrder
         * @property {number|Long|null} [id] RedemptionOrder id
         * @property {string|null} [createdAt] RedemptionOrder createdAt
         * @property {string|null} [updatedAt] RedemptionOrder updatedAt
         * @property {string|null} [orderNo] RedemptionOrder orderNo
         * @property {string|null} [userId] RedemptionOrder userId
         * @property {string|null} [userName] RedemptionOrder userName
         * @property {number|Long|null} [productId] RedemptionOrder productId
         * @property {string|null} [productName] RedemptionOrder productName
         * @property {string|null} [coverImage] RedemptionOrder coverImage
         * @property {number|null} [quantity] RedemptionOrder quantity
         * @property {number|null} [pointsPrice] RedemptionOrder pointsPrice
         * @property {number|null} [totalPoints] RedemptionOrder totalPoints
         * @property {number|null} [status] RedemptionOrder status
         * @property {string|null} [receiverName] RedemptionOrder receiverName
         * @property {string|null} [receiverPhone] RedemptionOrder receiverPhone
         * @property {string|null} [receiverAddress] RedemptionOrder receiverAddress
         * @property {string|null} [remark] RedemptionOrder remark
         * @property {string|null} [shippedAt] RedemptionOrder shippedAt
         * @property {string|null} [completedAt] RedemptionOrder completedAt
         */

        /**
         * Constructs a new RedemptionOrder.
         * @memberof pbShop
         * @classdesc Represents a RedemptionOrder.
         * @implements IRedemptionOrder
         * @constructor
         * @param {pbShop.IRedemptionOrder=} [properties] Properties to set
         */
        function RedemptionOrder(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RedemptionOrder id.
         * @member {number|Long} id
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RedemptionOrder createdAt.
         * @member {string} createdAt
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.createdAt = "";

        /**
         * RedemptionOrder updatedAt.
         * @member {string} updatedAt
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.updatedAt = "";

        /**
         * RedemptionOrder orderNo.
         * @member {string} orderNo
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.orderNo = "";

        /**
         * RedemptionOrder userId.
         * @member {string} userId
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.userId = "";

        /**
         * RedemptionOrder userName.
         * @member {string} userName
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.userName = "";

        /**
         * RedemptionOrder productId.
         * @member {number|Long} productId
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.productId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RedemptionOrder productName.
         * @member {string} productName
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.productName = "";

        /**
         * RedemptionOrder coverImage.
         * @member {string} coverImage
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.coverImage = "";

        /**
         * RedemptionOrder quantity.
         * @member {number} quantity
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.quantity = 0;

        /**
         * RedemptionOrder pointsPrice.
         * @member {number} pointsPrice
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.pointsPrice = 0;

        /**
         * RedemptionOrder totalPoints.
         * @member {number} totalPoints
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.totalPoints = 0;

        /**
         * RedemptionOrder status.
         * @member {number} status
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.status = 0;

        /**
         * RedemptionOrder receiverName.
         * @member {string} receiverName
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.receiverName = "";

        /**
         * RedemptionOrder receiverPhone.
         * @member {string} receiverPhone
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.receiverPhone = "";

        /**
         * RedemptionOrder receiverAddress.
         * @member {string} receiverAddress
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.receiverAddress = "";

        /**
         * RedemptionOrder remark.
         * @member {string} remark
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.remark = "";

        /**
         * RedemptionOrder shippedAt.
         * @member {string} shippedAt
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.shippedAt = "";

        /**
         * RedemptionOrder completedAt.
         * @member {string} completedAt
         * @memberof pbShop.RedemptionOrder
         * @instance
         */
        RedemptionOrder.prototype.completedAt = "";

        /**
         * Creates a new RedemptionOrder instance using the specified properties.
         * @function create
         * @memberof pbShop.RedemptionOrder
         * @static
         * @param {pbShop.IRedemptionOrder=} [properties] Properties to set
         * @returns {pbShop.RedemptionOrder} RedemptionOrder instance
         */
        RedemptionOrder.create = function create(properties) {
            return new RedemptionOrder(properties);
        };

        /**
         * Encodes the specified RedemptionOrder message. Does not implicitly {@link pbShop.RedemptionOrder.verify|verify} messages.
         * @function encode
         * @memberof pbShop.RedemptionOrder
         * @static
         * @param {pbShop.IRedemptionOrder} message RedemptionOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedemptionOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.orderNo != null && Object.hasOwnProperty.call(message, "orderNo"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.orderNo);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.userId);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.userName);
            if (message.productId != null && Object.hasOwnProperty.call(message, "productId"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.productId);
            if (message.productName != null && Object.hasOwnProperty.call(message, "productName"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.productName);
            if (message.coverImage != null && Object.hasOwnProperty.call(message, "coverImage"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.coverImage);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.quantity);
            if (message.pointsPrice != null && Object.hasOwnProperty.call(message, "pointsPrice"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.pointsPrice);
            if (message.totalPoints != null && Object.hasOwnProperty.call(message, "totalPoints"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.totalPoints);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.status);
            if (message.receiverName != null && Object.hasOwnProperty.call(message, "receiverName"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.receiverName);
            if (message.receiverPhone != null && Object.hasOwnProperty.call(message, "receiverPhone"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.receiverPhone);
            if (message.receiverAddress != null && Object.hasOwnProperty.call(message, "receiverAddress"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.receiverAddress);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.remark);
            if (message.shippedAt != null && Object.hasOwnProperty.call(message, "shippedAt"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.shippedAt);
            if (message.completedAt != null && Object.hasOwnProperty.call(message, "completedAt"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.completedAt);
            return writer;
        };

        /**
         * Encodes the specified RedemptionOrder message, length delimited. Does not implicitly {@link pbShop.RedemptionOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.RedemptionOrder
         * @static
         * @param {pbShop.IRedemptionOrder} message RedemptionOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RedemptionOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RedemptionOrder message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.RedemptionOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.RedemptionOrder} RedemptionOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedemptionOrder.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.RedemptionOrder();
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
                case 10: {
                        message.orderNo = reader.string();
                        break;
                    }
                case 11: {
                        message.userId = reader.string();
                        break;
                    }
                case 12: {
                        message.userName = reader.string();
                        break;
                    }
                case 13: {
                        message.productId = reader.int64();
                        break;
                    }
                case 14: {
                        message.productName = reader.string();
                        break;
                    }
                case 15: {
                        message.coverImage = reader.string();
                        break;
                    }
                case 16: {
                        message.quantity = reader.int32();
                        break;
                    }
                case 17: {
                        message.pointsPrice = reader.int32();
                        break;
                    }
                case 18: {
                        message.totalPoints = reader.int32();
                        break;
                    }
                case 19: {
                        message.status = reader.int32();
                        break;
                    }
                case 20: {
                        message.receiverName = reader.string();
                        break;
                    }
                case 21: {
                        message.receiverPhone = reader.string();
                        break;
                    }
                case 22: {
                        message.receiverAddress = reader.string();
                        break;
                    }
                case 23: {
                        message.remark = reader.string();
                        break;
                    }
                case 24: {
                        message.shippedAt = reader.string();
                        break;
                    }
                case 25: {
                        message.completedAt = reader.string();
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
         * Decodes a RedemptionOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.RedemptionOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.RedemptionOrder} RedemptionOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RedemptionOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RedemptionOrder message.
         * @function verify
         * @memberof pbShop.RedemptionOrder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RedemptionOrder.verify = function verify(message) {
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
            if (message.orderNo != null && message.hasOwnProperty("orderNo"))
                if (!$util.isString(message.orderNo))
                    return "orderNo: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.productId != null && message.hasOwnProperty("productId"))
                if (!$util.isInteger(message.productId) && !(message.productId && $util.isInteger(message.productId.low) && $util.isInteger(message.productId.high)))
                    return "productId: integer|Long expected";
            if (message.productName != null && message.hasOwnProperty("productName"))
                if (!$util.isString(message.productName))
                    return "productName: string expected";
            if (message.coverImage != null && message.hasOwnProperty("coverImage"))
                if (!$util.isString(message.coverImage))
                    return "coverImage: string expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            if (message.pointsPrice != null && message.hasOwnProperty("pointsPrice"))
                if (!$util.isInteger(message.pointsPrice))
                    return "pointsPrice: integer expected";
            if (message.totalPoints != null && message.hasOwnProperty("totalPoints"))
                if (!$util.isInteger(message.totalPoints))
                    return "totalPoints: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.receiverName != null && message.hasOwnProperty("receiverName"))
                if (!$util.isString(message.receiverName))
                    return "receiverName: string expected";
            if (message.receiverPhone != null && message.hasOwnProperty("receiverPhone"))
                if (!$util.isString(message.receiverPhone))
                    return "receiverPhone: string expected";
            if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
                if (!$util.isString(message.receiverAddress))
                    return "receiverAddress: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            if (message.shippedAt != null && message.hasOwnProperty("shippedAt"))
                if (!$util.isString(message.shippedAt))
                    return "shippedAt: string expected";
            if (message.completedAt != null && message.hasOwnProperty("completedAt"))
                if (!$util.isString(message.completedAt))
                    return "completedAt: string expected";
            return null;
        };

        /**
         * Creates a RedemptionOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.RedemptionOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.RedemptionOrder} RedemptionOrder
         */
        RedemptionOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.RedemptionOrder)
                return object;
            var message = new $root.pbShop.RedemptionOrder();
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
            if (object.orderNo != null)
                message.orderNo = String(object.orderNo);
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.productId != null)
                if ($util.Long)
                    (message.productId = $util.Long.fromValue(object.productId)).unsigned = false;
                else if (typeof object.productId === "string")
                    message.productId = parseInt(object.productId, 10);
                else if (typeof object.productId === "number")
                    message.productId = object.productId;
                else if (typeof object.productId === "object")
                    message.productId = new $util.LongBits(object.productId.low >>> 0, object.productId.high >>> 0).toNumber();
            if (object.productName != null)
                message.productName = String(object.productName);
            if (object.coverImage != null)
                message.coverImage = String(object.coverImage);
            if (object.quantity != null)
                message.quantity = object.quantity | 0;
            if (object.pointsPrice != null)
                message.pointsPrice = object.pointsPrice | 0;
            if (object.totalPoints != null)
                message.totalPoints = object.totalPoints | 0;
            if (object.status != null)
                message.status = object.status | 0;
            if (object.receiverName != null)
                message.receiverName = String(object.receiverName);
            if (object.receiverPhone != null)
                message.receiverPhone = String(object.receiverPhone);
            if (object.receiverAddress != null)
                message.receiverAddress = String(object.receiverAddress);
            if (object.remark != null)
                message.remark = String(object.remark);
            if (object.shippedAt != null)
                message.shippedAt = String(object.shippedAt);
            if (object.completedAt != null)
                message.completedAt = String(object.completedAt);
            return message;
        };

        /**
         * Creates a plain object from a RedemptionOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.RedemptionOrder
         * @static
         * @param {pbShop.RedemptionOrder} message RedemptionOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RedemptionOrder.toObject = function toObject(message, options) {
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
                object.orderNo = "";
                object.userId = "";
                object.userName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.productId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.productId = options.longs === String ? "0" : 0;
                object.productName = "";
                object.coverImage = "";
                object.quantity = 0;
                object.pointsPrice = 0;
                object.totalPoints = 0;
                object.status = 0;
                object.receiverName = "";
                object.receiverPhone = "";
                object.receiverAddress = "";
                object.remark = "";
                object.shippedAt = "";
                object.completedAt = "";
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
            if (message.orderNo != null && message.hasOwnProperty("orderNo"))
                object.orderNo = message.orderNo;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.productId != null && message.hasOwnProperty("productId"))
                if (typeof message.productId === "number")
                    object.productId = options.longs === String ? String(message.productId) : message.productId;
                else
                    object.productId = options.longs === String ? $util.Long.prototype.toString.call(message.productId) : options.longs === Number ? new $util.LongBits(message.productId.low >>> 0, message.productId.high >>> 0).toNumber() : message.productId;
            if (message.productName != null && message.hasOwnProperty("productName"))
                object.productName = message.productName;
            if (message.coverImage != null && message.hasOwnProperty("coverImage"))
                object.coverImage = message.coverImage;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            if (message.pointsPrice != null && message.hasOwnProperty("pointsPrice"))
                object.pointsPrice = message.pointsPrice;
            if (message.totalPoints != null && message.hasOwnProperty("totalPoints"))
                object.totalPoints = message.totalPoints;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.receiverName != null && message.hasOwnProperty("receiverName"))
                object.receiverName = message.receiverName;
            if (message.receiverPhone != null && message.hasOwnProperty("receiverPhone"))
                object.receiverPhone = message.receiverPhone;
            if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
                object.receiverAddress = message.receiverAddress;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            if (message.shippedAt != null && message.hasOwnProperty("shippedAt"))
                object.shippedAt = message.shippedAt;
            if (message.completedAt != null && message.hasOwnProperty("completedAt"))
                object.completedAt = message.completedAt;
            return object;
        };

        /**
         * Converts this RedemptionOrder to JSON.
         * @function toJSON
         * @memberof pbShop.RedemptionOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RedemptionOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RedemptionOrder
         * @function getTypeUrl
         * @memberof pbShop.RedemptionOrder
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RedemptionOrder.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.RedemptionOrder";
        };

        return RedemptionOrder;
    })();

    pbShop.ShopService = (function() {

        /**
         * Constructs a new ShopService service.
         * @memberof pbShop
         * @classdesc Represents a ShopService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function ShopService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (ShopService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = ShopService;

        /**
         * Creates new ShopService service using the specified rpc implementation.
         * @function create
         * @memberof pbShop.ShopService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {ShopService} RPC service. Useful where requests and/or responses are streamed.
         */
        ShopService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbShop.ShopService#createShopProduct}.
         * @memberof pbShop.ShopService
         * @typedef CreateShopProductCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CreateShopProduct.
         * @function createShopProduct
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IShopProduct} request ShopProduct message or plain object
         * @param {pbShop.ShopService.CreateShopProductCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.createShopProduct = function createShopProduct(request, callback) {
            return this.rpcCall(createShopProduct, $root.pbShop.ShopProduct, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateShopProduct" });

        /**
         * Calls CreateShopProduct.
         * @function createShopProduct
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IShopProduct} request ShopProduct message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#updateShopProduct}.
         * @memberof pbShop.ShopService
         * @typedef UpdateShopProductCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls UpdateShopProduct.
         * @function updateShopProduct
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IShopProduct} request ShopProduct message or plain object
         * @param {pbShop.ShopService.UpdateShopProductCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.updateShopProduct = function updateShopProduct(request, callback) {
            return this.rpcCall(updateShopProduct, $root.pbShop.ShopProduct, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateShopProduct" });

        /**
         * Calls UpdateShopProduct.
         * @function updateShopProduct
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IShopProduct} request ShopProduct message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#deleteShopProduct}.
         * @memberof pbShop.ShopService
         * @typedef DeleteShopProductCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls DeleteShopProduct.
         * @function deleteShopProduct
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbShop.ShopService.DeleteShopProductCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.deleteShopProduct = function deleteShopProduct(request, callback) {
            return this.rpcCall(deleteShopProduct, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteShopProduct" });

        /**
         * Calls DeleteShopProduct.
         * @function deleteShopProduct
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#findShopProductById}.
         * @memberof pbShop.ShopService
         * @typedef FindShopProductByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbShop.FindShopProductReply} [response] FindShopProductReply
         */

        /**
         * Calls FindShopProductById.
         * @function findShopProductById
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbShop.ShopService.FindShopProductByIdCallback} callback Node-style callback called with the error, if any, and FindShopProductReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.findShopProductById = function findShopProductById(request, callback) {
            return this.rpcCall(findShopProductById, $root.pbcommon.IdArgs, $root.pbShop.FindShopProductReply, request, callback);
        }, "name", { value: "FindShopProductById" });

        /**
         * Calls FindShopProductById.
         * @function findShopProductById
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbShop.FindShopProductReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#findShopProductList}.
         * @memberof pbShop.ShopService
         * @typedef FindShopProductListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbShop.FindShopProductReply} [response] FindShopProductReply
         */

        /**
         * Calls FindShopProductList.
         * @function findShopProductList
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IFindShopProductArgs} request FindShopProductArgs message or plain object
         * @param {pbShop.ShopService.FindShopProductListCallback} callback Node-style callback called with the error, if any, and FindShopProductReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.findShopProductList = function findShopProductList(request, callback) {
            return this.rpcCall(findShopProductList, $root.pbShop.FindShopProductArgs, $root.pbShop.FindShopProductReply, request, callback);
        }, "name", { value: "FindShopProductList" });

        /**
         * Calls FindShopProductList.
         * @function findShopProductList
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IFindShopProductArgs} request FindShopProductArgs message or plain object
         * @returns {Promise<pbShop.FindShopProductReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#getPointsAccount}.
         * @memberof pbShop.ShopService
         * @typedef GetPointsAccountCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbShop.GetPointsAccountReply} [response] GetPointsAccountReply
         */

        /**
         * Calls GetPointsAccount.
         * @function getPointsAccount
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IGetPointsAccountArgs} request GetPointsAccountArgs message or plain object
         * @param {pbShop.ShopService.GetPointsAccountCallback} callback Node-style callback called with the error, if any, and GetPointsAccountReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.getPointsAccount = function getPointsAccount(request, callback) {
            return this.rpcCall(getPointsAccount, $root.pbShop.GetPointsAccountArgs, $root.pbShop.GetPointsAccountReply, request, callback);
        }, "name", { value: "GetPointsAccount" });

        /**
         * Calls GetPointsAccount.
         * @function getPointsAccount
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IGetPointsAccountArgs} request GetPointsAccountArgs message or plain object
         * @returns {Promise<pbShop.GetPointsAccountReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#addPoints}.
         * @memberof pbShop.ShopService
         * @typedef AddPointsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls AddPoints.
         * @function addPoints
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IAddPointsArgs} request AddPointsArgs message or plain object
         * @param {pbShop.ShopService.AddPointsCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.addPoints = function addPoints(request, callback) {
            return this.rpcCall(addPoints, $root.pbShop.AddPointsArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "AddPoints" });

        /**
         * Calls AddPoints.
         * @function addPoints
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IAddPointsArgs} request AddPointsArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#findPointsTransactionList}.
         * @memberof pbShop.ShopService
         * @typedef FindPointsTransactionListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbShop.FindPointsTransactionReply} [response] FindPointsTransactionReply
         */

        /**
         * Calls FindPointsTransactionList.
         * @function findPointsTransactionList
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IFindPointsTransactionArgs} request FindPointsTransactionArgs message or plain object
         * @param {pbShop.ShopService.FindPointsTransactionListCallback} callback Node-style callback called with the error, if any, and FindPointsTransactionReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.findPointsTransactionList = function findPointsTransactionList(request, callback) {
            return this.rpcCall(findPointsTransactionList, $root.pbShop.FindPointsTransactionArgs, $root.pbShop.FindPointsTransactionReply, request, callback);
        }, "name", { value: "FindPointsTransactionList" });

        /**
         * Calls FindPointsTransactionList.
         * @function findPointsTransactionList
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IFindPointsTransactionArgs} request FindPointsTransactionArgs message or plain object
         * @returns {Promise<pbShop.FindPointsTransactionReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#createRedemptionOrder}.
         * @memberof pbShop.ShopService
         * @typedef CreateRedemptionOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CreateRedemptionOrder.
         * @function createRedemptionOrder
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.ICreateRedemptionOrderArgs} request CreateRedemptionOrderArgs message or plain object
         * @param {pbShop.ShopService.CreateRedemptionOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.createRedemptionOrder = function createRedemptionOrder(request, callback) {
            return this.rpcCall(createRedemptionOrder, $root.pbShop.CreateRedemptionOrderArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateRedemptionOrder" });

        /**
         * Calls CreateRedemptionOrder.
         * @function createRedemptionOrder
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.ICreateRedemptionOrderArgs} request CreateRedemptionOrderArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#findRedemptionOrderById}.
         * @memberof pbShop.ShopService
         * @typedef FindRedemptionOrderByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbShop.FindRedemptionOrderReply} [response] FindRedemptionOrderReply
         */

        /**
         * Calls FindRedemptionOrderById.
         * @function findRedemptionOrderById
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbShop.ShopService.FindRedemptionOrderByIdCallback} callback Node-style callback called with the error, if any, and FindRedemptionOrderReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.findRedemptionOrderById = function findRedemptionOrderById(request, callback) {
            return this.rpcCall(findRedemptionOrderById, $root.pbcommon.IdArgs, $root.pbShop.FindRedemptionOrderReply, request, callback);
        }, "name", { value: "FindRedemptionOrderById" });

        /**
         * Calls FindRedemptionOrderById.
         * @function findRedemptionOrderById
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbShop.FindRedemptionOrderReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#findRedemptionOrderList}.
         * @memberof pbShop.ShopService
         * @typedef FindRedemptionOrderListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbShop.FindRedemptionOrderReply} [response] FindRedemptionOrderReply
         */

        /**
         * Calls FindRedemptionOrderList.
         * @function findRedemptionOrderList
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IFindRedemptionOrderArgs} request FindRedemptionOrderArgs message or plain object
         * @param {pbShop.ShopService.FindRedemptionOrderListCallback} callback Node-style callback called with the error, if any, and FindRedemptionOrderReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.findRedemptionOrderList = function findRedemptionOrderList(request, callback) {
            return this.rpcCall(findRedemptionOrderList, $root.pbShop.FindRedemptionOrderArgs, $root.pbShop.FindRedemptionOrderReply, request, callback);
        }, "name", { value: "FindRedemptionOrderList" });

        /**
         * Calls FindRedemptionOrderList.
         * @function findRedemptionOrderList
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IFindRedemptionOrderArgs} request FindRedemptionOrderArgs message or plain object
         * @returns {Promise<pbShop.FindRedemptionOrderReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#shipRedemptionOrder}.
         * @memberof pbShop.ShopService
         * @typedef ShipRedemptionOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls ShipRedemptionOrder.
         * @function shipRedemptionOrder
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IShipRedemptionOrderArgs} request ShipRedemptionOrderArgs message or plain object
         * @param {pbShop.ShopService.ShipRedemptionOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.shipRedemptionOrder = function shipRedemptionOrder(request, callback) {
            return this.rpcCall(shipRedemptionOrder, $root.pbShop.ShipRedemptionOrderArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "ShipRedemptionOrder" });

        /**
         * Calls ShipRedemptionOrder.
         * @function shipRedemptionOrder
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbShop.IShipRedemptionOrderArgs} request ShipRedemptionOrderArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#completeRedemptionOrder}.
         * @memberof pbShop.ShopService
         * @typedef CompleteRedemptionOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CompleteRedemptionOrder.
         * @function completeRedemptionOrder
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbShop.ShopService.CompleteRedemptionOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.completeRedemptionOrder = function completeRedemptionOrder(request, callback) {
            return this.rpcCall(completeRedemptionOrder, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CompleteRedemptionOrder" });

        /**
         * Calls CompleteRedemptionOrder.
         * @function completeRedemptionOrder
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbShop.ShopService#cancelRedemptionOrder}.
         * @memberof pbShop.ShopService
         * @typedef CancelRedemptionOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CancelRedemptionOrder.
         * @function cancelRedemptionOrder
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbShop.ShopService.CancelRedemptionOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(ShopService.prototype.cancelRedemptionOrder = function cancelRedemptionOrder(request, callback) {
            return this.rpcCall(cancelRedemptionOrder, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CancelRedemptionOrder" });

        /**
         * Calls CancelRedemptionOrder.
         * @function cancelRedemptionOrder
         * @memberof pbShop.ShopService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        return ShopService;
    })();

    pbShop.FindShopProductArgs = (function() {

        /**
         * Properties of a FindShopProductArgs.
         * @memberof pbShop
         * @interface IFindShopProductArgs
         * @property {number|null} [page] FindShopProductArgs page
         * @property {number|null} [pageSize] FindShopProductArgs pageSize
         * @property {string|null} [category] FindShopProductArgs category
         * @property {number|null} [status] FindShopProductArgs status
         * @property {string|null} [keyword] FindShopProductArgs keyword
         */

        /**
         * Constructs a new FindShopProductArgs.
         * @memberof pbShop
         * @classdesc Represents a FindShopProductArgs.
         * @implements IFindShopProductArgs
         * @constructor
         * @param {pbShop.IFindShopProductArgs=} [properties] Properties to set
         */
        function FindShopProductArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindShopProductArgs page.
         * @member {number} page
         * @memberof pbShop.FindShopProductArgs
         * @instance
         */
        FindShopProductArgs.prototype.page = 0;

        /**
         * FindShopProductArgs pageSize.
         * @member {number} pageSize
         * @memberof pbShop.FindShopProductArgs
         * @instance
         */
        FindShopProductArgs.prototype.pageSize = 0;

        /**
         * FindShopProductArgs category.
         * @member {string} category
         * @memberof pbShop.FindShopProductArgs
         * @instance
         */
        FindShopProductArgs.prototype.category = "";

        /**
         * FindShopProductArgs status.
         * @member {number} status
         * @memberof pbShop.FindShopProductArgs
         * @instance
         */
        FindShopProductArgs.prototype.status = 0;

        /**
         * FindShopProductArgs keyword.
         * @member {string} keyword
         * @memberof pbShop.FindShopProductArgs
         * @instance
         */
        FindShopProductArgs.prototype.keyword = "";

        /**
         * Creates a new FindShopProductArgs instance using the specified properties.
         * @function create
         * @memberof pbShop.FindShopProductArgs
         * @static
         * @param {pbShop.IFindShopProductArgs=} [properties] Properties to set
         * @returns {pbShop.FindShopProductArgs} FindShopProductArgs instance
         */
        FindShopProductArgs.create = function create(properties) {
            return new FindShopProductArgs(properties);
        };

        /**
         * Encodes the specified FindShopProductArgs message. Does not implicitly {@link pbShop.FindShopProductArgs.verify|verify} messages.
         * @function encode
         * @memberof pbShop.FindShopProductArgs
         * @static
         * @param {pbShop.IFindShopProductArgs} message FindShopProductArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindShopProductArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.category);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            if (message.keyword != null && Object.hasOwnProperty.call(message, "keyword"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.keyword);
            return writer;
        };

        /**
         * Encodes the specified FindShopProductArgs message, length delimited. Does not implicitly {@link pbShop.FindShopProductArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.FindShopProductArgs
         * @static
         * @param {pbShop.IFindShopProductArgs} message FindShopProductArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindShopProductArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindShopProductArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.FindShopProductArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.FindShopProductArgs} FindShopProductArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindShopProductArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.FindShopProductArgs();
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
                case 3: {
                        message.category = reader.string();
                        break;
                    }
                case 4: {
                        message.status = reader.int32();
                        break;
                    }
                case 5: {
                        message.keyword = reader.string();
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
         * Decodes a FindShopProductArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.FindShopProductArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.FindShopProductArgs} FindShopProductArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindShopProductArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindShopProductArgs message.
         * @function verify
         * @memberof pbShop.FindShopProductArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindShopProductArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isString(message.category))
                    return "category: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                if (!$util.isString(message.keyword))
                    return "keyword: string expected";
            return null;
        };

        /**
         * Creates a FindShopProductArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.FindShopProductArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.FindShopProductArgs} FindShopProductArgs
         */
        FindShopProductArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.FindShopProductArgs)
                return object;
            var message = new $root.pbShop.FindShopProductArgs();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            if (object.category != null)
                message.category = String(object.category);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.keyword != null)
                message.keyword = String(object.keyword);
            return message;
        };

        /**
         * Creates a plain object from a FindShopProductArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.FindShopProductArgs
         * @static
         * @param {pbShop.FindShopProductArgs} message FindShopProductArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindShopProductArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.page = 0;
                object.pageSize = 0;
                object.category = "";
                object.status = 0;
                object.keyword = "";
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                object.keyword = message.keyword;
            return object;
        };

        /**
         * Converts this FindShopProductArgs to JSON.
         * @function toJSON
         * @memberof pbShop.FindShopProductArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindShopProductArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindShopProductArgs
         * @function getTypeUrl
         * @memberof pbShop.FindShopProductArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindShopProductArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.FindShopProductArgs";
        };

        return FindShopProductArgs;
    })();

    pbShop.FindShopProductReply = (function() {

        /**
         * Properties of a FindShopProductReply.
         * @memberof pbShop
         * @interface IFindShopProductReply
         * @property {number|null} [code] FindShopProductReply code
         * @property {string|null} [msg] FindShopProductReply msg
         * @property {Array.<pbShop.IShopProduct>|null} [data] FindShopProductReply data
         * @property {number|null} [total] FindShopProductReply total
         */

        /**
         * Constructs a new FindShopProductReply.
         * @memberof pbShop
         * @classdesc Represents a FindShopProductReply.
         * @implements IFindShopProductReply
         * @constructor
         * @param {pbShop.IFindShopProductReply=} [properties] Properties to set
         */
        function FindShopProductReply(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindShopProductReply code.
         * @member {number} code
         * @memberof pbShop.FindShopProductReply
         * @instance
         */
        FindShopProductReply.prototype.code = 0;

        /**
         * FindShopProductReply msg.
         * @member {string} msg
         * @memberof pbShop.FindShopProductReply
         * @instance
         */
        FindShopProductReply.prototype.msg = "";

        /**
         * FindShopProductReply data.
         * @member {Array.<pbShop.IShopProduct>} data
         * @memberof pbShop.FindShopProductReply
         * @instance
         */
        FindShopProductReply.prototype.data = $util.emptyArray;

        /**
         * FindShopProductReply total.
         * @member {number} total
         * @memberof pbShop.FindShopProductReply
         * @instance
         */
        FindShopProductReply.prototype.total = 0;

        /**
         * Creates a new FindShopProductReply instance using the specified properties.
         * @function create
         * @memberof pbShop.FindShopProductReply
         * @static
         * @param {pbShop.IFindShopProductReply=} [properties] Properties to set
         * @returns {pbShop.FindShopProductReply} FindShopProductReply instance
         */
        FindShopProductReply.create = function create(properties) {
            return new FindShopProductReply(properties);
        };

        /**
         * Encodes the specified FindShopProductReply message. Does not implicitly {@link pbShop.FindShopProductReply.verify|verify} messages.
         * @function encode
         * @memberof pbShop.FindShopProductReply
         * @static
         * @param {pbShop.IFindShopProductReply} message FindShopProductReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindShopProductReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.pbShop.ShopProduct.encode(message.data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindShopProductReply message, length delimited. Does not implicitly {@link pbShop.FindShopProductReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.FindShopProductReply
         * @static
         * @param {pbShop.IFindShopProductReply} message FindShopProductReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindShopProductReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindShopProductReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.FindShopProductReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.FindShopProductReply} FindShopProductReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindShopProductReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.FindShopProductReply();
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
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push($root.pbShop.ShopProduct.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.total = reader.int32();
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
         * Decodes a FindShopProductReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.FindShopProductReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.FindShopProductReply} FindShopProductReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindShopProductReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindShopProductReply message.
         * @function verify
         * @memberof pbShop.FindShopProductReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindShopProductReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.pbShop.ShopProduct.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            return null;
        };

        /**
         * Creates a FindShopProductReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.FindShopProductReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.FindShopProductReply} FindShopProductReply
         */
        FindShopProductReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.FindShopProductReply)
                return object;
            var message = new $root.pbShop.FindShopProductReply();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".pbShop.FindShopProductReply.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".pbShop.FindShopProductReply.data: object expected");
                    message.data[i] = $root.pbShop.ShopProduct.fromObject(object.data[i]);
                }
            }
            if (object.total != null)
                message.total = object.total | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindShopProductReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.FindShopProductReply
         * @static
         * @param {pbShop.FindShopProductReply} message FindShopProductReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindShopProductReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.total = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.pbShop.ShopProduct.toObject(message.data[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            return object;
        };

        /**
         * Converts this FindShopProductReply to JSON.
         * @function toJSON
         * @memberof pbShop.FindShopProductReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindShopProductReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindShopProductReply
         * @function getTypeUrl
         * @memberof pbShop.FindShopProductReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindShopProductReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.FindShopProductReply";
        };

        return FindShopProductReply;
    })();

    pbShop.GetPointsAccountArgs = (function() {

        /**
         * Properties of a GetPointsAccountArgs.
         * @memberof pbShop
         * @interface IGetPointsAccountArgs
         * @property {string|null} [userId] GetPointsAccountArgs userId
         */

        /**
         * Constructs a new GetPointsAccountArgs.
         * @memberof pbShop
         * @classdesc Represents a GetPointsAccountArgs.
         * @implements IGetPointsAccountArgs
         * @constructor
         * @param {pbShop.IGetPointsAccountArgs=} [properties] Properties to set
         */
        function GetPointsAccountArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPointsAccountArgs userId.
         * @member {string} userId
         * @memberof pbShop.GetPointsAccountArgs
         * @instance
         */
        GetPointsAccountArgs.prototype.userId = "";

        /**
         * Creates a new GetPointsAccountArgs instance using the specified properties.
         * @function create
         * @memberof pbShop.GetPointsAccountArgs
         * @static
         * @param {pbShop.IGetPointsAccountArgs=} [properties] Properties to set
         * @returns {pbShop.GetPointsAccountArgs} GetPointsAccountArgs instance
         */
        GetPointsAccountArgs.create = function create(properties) {
            return new GetPointsAccountArgs(properties);
        };

        /**
         * Encodes the specified GetPointsAccountArgs message. Does not implicitly {@link pbShop.GetPointsAccountArgs.verify|verify} messages.
         * @function encode
         * @memberof pbShop.GetPointsAccountArgs
         * @static
         * @param {pbShop.IGetPointsAccountArgs} message GetPointsAccountArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPointsAccountArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            return writer;
        };

        /**
         * Encodes the specified GetPointsAccountArgs message, length delimited. Does not implicitly {@link pbShop.GetPointsAccountArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.GetPointsAccountArgs
         * @static
         * @param {pbShop.IGetPointsAccountArgs} message GetPointsAccountArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPointsAccountArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPointsAccountArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.GetPointsAccountArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.GetPointsAccountArgs} GetPointsAccountArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPointsAccountArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.GetPointsAccountArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
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
         * Decodes a GetPointsAccountArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.GetPointsAccountArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.GetPointsAccountArgs} GetPointsAccountArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPointsAccountArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPointsAccountArgs message.
         * @function verify
         * @memberof pbShop.GetPointsAccountArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPointsAccountArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates a GetPointsAccountArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.GetPointsAccountArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.GetPointsAccountArgs} GetPointsAccountArgs
         */
        GetPointsAccountArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.GetPointsAccountArgs)
                return object;
            var message = new $root.pbShop.GetPointsAccountArgs();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from a GetPointsAccountArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.GetPointsAccountArgs
         * @static
         * @param {pbShop.GetPointsAccountArgs} message GetPointsAccountArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPointsAccountArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this GetPointsAccountArgs to JSON.
         * @function toJSON
         * @memberof pbShop.GetPointsAccountArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPointsAccountArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetPointsAccountArgs
         * @function getTypeUrl
         * @memberof pbShop.GetPointsAccountArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetPointsAccountArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.GetPointsAccountArgs";
        };

        return GetPointsAccountArgs;
    })();

    pbShop.GetPointsAccountReply = (function() {

        /**
         * Properties of a GetPointsAccountReply.
         * @memberof pbShop
         * @interface IGetPointsAccountReply
         * @property {number|null} [code] GetPointsAccountReply code
         * @property {string|null} [msg] GetPointsAccountReply msg
         * @property {pbShop.IPointsAccount|null} [data] GetPointsAccountReply data
         */

        /**
         * Constructs a new GetPointsAccountReply.
         * @memberof pbShop
         * @classdesc Represents a GetPointsAccountReply.
         * @implements IGetPointsAccountReply
         * @constructor
         * @param {pbShop.IGetPointsAccountReply=} [properties] Properties to set
         */
        function GetPointsAccountReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPointsAccountReply code.
         * @member {number} code
         * @memberof pbShop.GetPointsAccountReply
         * @instance
         */
        GetPointsAccountReply.prototype.code = 0;

        /**
         * GetPointsAccountReply msg.
         * @member {string} msg
         * @memberof pbShop.GetPointsAccountReply
         * @instance
         */
        GetPointsAccountReply.prototype.msg = "";

        /**
         * GetPointsAccountReply data.
         * @member {pbShop.IPointsAccount|null|undefined} data
         * @memberof pbShop.GetPointsAccountReply
         * @instance
         */
        GetPointsAccountReply.prototype.data = null;

        /**
         * Creates a new GetPointsAccountReply instance using the specified properties.
         * @function create
         * @memberof pbShop.GetPointsAccountReply
         * @static
         * @param {pbShop.IGetPointsAccountReply=} [properties] Properties to set
         * @returns {pbShop.GetPointsAccountReply} GetPointsAccountReply instance
         */
        GetPointsAccountReply.create = function create(properties) {
            return new GetPointsAccountReply(properties);
        };

        /**
         * Encodes the specified GetPointsAccountReply message. Does not implicitly {@link pbShop.GetPointsAccountReply.verify|verify} messages.
         * @function encode
         * @memberof pbShop.GetPointsAccountReply
         * @static
         * @param {pbShop.IGetPointsAccountReply} message GetPointsAccountReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPointsAccountReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbShop.PointsAccount.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetPointsAccountReply message, length delimited. Does not implicitly {@link pbShop.GetPointsAccountReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.GetPointsAccountReply
         * @static
         * @param {pbShop.IGetPointsAccountReply} message GetPointsAccountReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPointsAccountReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPointsAccountReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.GetPointsAccountReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.GetPointsAccountReply} GetPointsAccountReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPointsAccountReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.GetPointsAccountReply();
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
                        message.data = $root.pbShop.PointsAccount.decode(reader, reader.uint32());
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
         * Decodes a GetPointsAccountReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.GetPointsAccountReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.GetPointsAccountReply} GetPointsAccountReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPointsAccountReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPointsAccountReply message.
         * @function verify
         * @memberof pbShop.GetPointsAccountReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPointsAccountReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbShop.PointsAccount.verify(message.data);
                if (error)
                    return "data." + error;
            }
            return null;
        };

        /**
         * Creates a GetPointsAccountReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.GetPointsAccountReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.GetPointsAccountReply} GetPointsAccountReply
         */
        GetPointsAccountReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.GetPointsAccountReply)
                return object;
            var message = new $root.pbShop.GetPointsAccountReply();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbShop.GetPointsAccountReply.data: object expected");
                message.data = $root.pbShop.PointsAccount.fromObject(object.data);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetPointsAccountReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.GetPointsAccountReply
         * @static
         * @param {pbShop.GetPointsAccountReply} message GetPointsAccountReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPointsAccountReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.data = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.pbShop.PointsAccount.toObject(message.data, options);
            return object;
        };

        /**
         * Converts this GetPointsAccountReply to JSON.
         * @function toJSON
         * @memberof pbShop.GetPointsAccountReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPointsAccountReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetPointsAccountReply
         * @function getTypeUrl
         * @memberof pbShop.GetPointsAccountReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetPointsAccountReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.GetPointsAccountReply";
        };

        return GetPointsAccountReply;
    })();

    pbShop.AddPointsArgs = (function() {

        /**
         * Properties of an AddPointsArgs.
         * @memberof pbShop
         * @interface IAddPointsArgs
         * @property {string|null} [userId] AddPointsArgs userId
         * @property {number|null} [amount] AddPointsArgs amount
         * @property {number|null} [type] AddPointsArgs type
         * @property {string|null} [bizType] AddPointsArgs bizType
         * @property {string|null} [bizId] AddPointsArgs bizId
         * @property {string|null} [description] AddPointsArgs description
         */

        /**
         * Constructs a new AddPointsArgs.
         * @memberof pbShop
         * @classdesc Represents an AddPointsArgs.
         * @implements IAddPointsArgs
         * @constructor
         * @param {pbShop.IAddPointsArgs=} [properties] Properties to set
         */
        function AddPointsArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddPointsArgs userId.
         * @member {string} userId
         * @memberof pbShop.AddPointsArgs
         * @instance
         */
        AddPointsArgs.prototype.userId = "";

        /**
         * AddPointsArgs amount.
         * @member {number} amount
         * @memberof pbShop.AddPointsArgs
         * @instance
         */
        AddPointsArgs.prototype.amount = 0;

        /**
         * AddPointsArgs type.
         * @member {number} type
         * @memberof pbShop.AddPointsArgs
         * @instance
         */
        AddPointsArgs.prototype.type = 0;

        /**
         * AddPointsArgs bizType.
         * @member {string} bizType
         * @memberof pbShop.AddPointsArgs
         * @instance
         */
        AddPointsArgs.prototype.bizType = "";

        /**
         * AddPointsArgs bizId.
         * @member {string} bizId
         * @memberof pbShop.AddPointsArgs
         * @instance
         */
        AddPointsArgs.prototype.bizId = "";

        /**
         * AddPointsArgs description.
         * @member {string} description
         * @memberof pbShop.AddPointsArgs
         * @instance
         */
        AddPointsArgs.prototype.description = "";

        /**
         * Creates a new AddPointsArgs instance using the specified properties.
         * @function create
         * @memberof pbShop.AddPointsArgs
         * @static
         * @param {pbShop.IAddPointsArgs=} [properties] Properties to set
         * @returns {pbShop.AddPointsArgs} AddPointsArgs instance
         */
        AddPointsArgs.create = function create(properties) {
            return new AddPointsArgs(properties);
        };

        /**
         * Encodes the specified AddPointsArgs message. Does not implicitly {@link pbShop.AddPointsArgs.verify|verify} messages.
         * @function encode
         * @memberof pbShop.AddPointsArgs
         * @static
         * @param {pbShop.IAddPointsArgs} message AddPointsArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddPointsArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.amount);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.type);
            if (message.bizType != null && Object.hasOwnProperty.call(message, "bizType"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.bizType);
            if (message.bizId != null && Object.hasOwnProperty.call(message, "bizId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.bizId);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified AddPointsArgs message, length delimited. Does not implicitly {@link pbShop.AddPointsArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.AddPointsArgs
         * @static
         * @param {pbShop.IAddPointsArgs} message AddPointsArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddPointsArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddPointsArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.AddPointsArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.AddPointsArgs} AddPointsArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddPointsArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.AddPointsArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                case 2: {
                        message.amount = reader.int32();
                        break;
                    }
                case 3: {
                        message.type = reader.int32();
                        break;
                    }
                case 4: {
                        message.bizType = reader.string();
                        break;
                    }
                case 5: {
                        message.bizId = reader.string();
                        break;
                    }
                case 6: {
                        message.description = reader.string();
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
         * Decodes an AddPointsArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.AddPointsArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.AddPointsArgs} AddPointsArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddPointsArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddPointsArgs message.
         * @function verify
         * @memberof pbShop.AddPointsArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddPointsArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount))
                    return "amount: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                if (!$util.isString(message.bizType))
                    return "bizType: string expected";
            if (message.bizId != null && message.hasOwnProperty("bizId"))
                if (!$util.isString(message.bizId))
                    return "bizId: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates an AddPointsArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.AddPointsArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.AddPointsArgs} AddPointsArgs
         */
        AddPointsArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.AddPointsArgs)
                return object;
            var message = new $root.pbShop.AddPointsArgs();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.amount != null)
                message.amount = object.amount | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.bizType != null)
                message.bizType = String(object.bizType);
            if (object.bizId != null)
                message.bizId = String(object.bizId);
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from an AddPointsArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.AddPointsArgs
         * @static
         * @param {pbShop.AddPointsArgs} message AddPointsArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddPointsArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.amount = 0;
                object.type = 0;
                object.bizType = "";
                object.bizId = "";
                object.description = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = message.amount;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                object.bizType = message.bizType;
            if (message.bizId != null && message.hasOwnProperty("bizId"))
                object.bizId = message.bizId;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this AddPointsArgs to JSON.
         * @function toJSON
         * @memberof pbShop.AddPointsArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddPointsArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddPointsArgs
         * @function getTypeUrl
         * @memberof pbShop.AddPointsArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddPointsArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.AddPointsArgs";
        };

        return AddPointsArgs;
    })();

    pbShop.FindPointsTransactionArgs = (function() {

        /**
         * Properties of a FindPointsTransactionArgs.
         * @memberof pbShop
         * @interface IFindPointsTransactionArgs
         * @property {string|null} [userId] FindPointsTransactionArgs userId
         * @property {number|null} [page] FindPointsTransactionArgs page
         * @property {number|null} [pageSize] FindPointsTransactionArgs pageSize
         * @property {number|null} [type] FindPointsTransactionArgs type
         */

        /**
         * Constructs a new FindPointsTransactionArgs.
         * @memberof pbShop
         * @classdesc Represents a FindPointsTransactionArgs.
         * @implements IFindPointsTransactionArgs
         * @constructor
         * @param {pbShop.IFindPointsTransactionArgs=} [properties] Properties to set
         */
        function FindPointsTransactionArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindPointsTransactionArgs userId.
         * @member {string} userId
         * @memberof pbShop.FindPointsTransactionArgs
         * @instance
         */
        FindPointsTransactionArgs.prototype.userId = "";

        /**
         * FindPointsTransactionArgs page.
         * @member {number} page
         * @memberof pbShop.FindPointsTransactionArgs
         * @instance
         */
        FindPointsTransactionArgs.prototype.page = 0;

        /**
         * FindPointsTransactionArgs pageSize.
         * @member {number} pageSize
         * @memberof pbShop.FindPointsTransactionArgs
         * @instance
         */
        FindPointsTransactionArgs.prototype.pageSize = 0;

        /**
         * FindPointsTransactionArgs type.
         * @member {number} type
         * @memberof pbShop.FindPointsTransactionArgs
         * @instance
         */
        FindPointsTransactionArgs.prototype.type = 0;

        /**
         * Creates a new FindPointsTransactionArgs instance using the specified properties.
         * @function create
         * @memberof pbShop.FindPointsTransactionArgs
         * @static
         * @param {pbShop.IFindPointsTransactionArgs=} [properties] Properties to set
         * @returns {pbShop.FindPointsTransactionArgs} FindPointsTransactionArgs instance
         */
        FindPointsTransactionArgs.create = function create(properties) {
            return new FindPointsTransactionArgs(properties);
        };

        /**
         * Encodes the specified FindPointsTransactionArgs message. Does not implicitly {@link pbShop.FindPointsTransactionArgs.verify|verify} messages.
         * @function encode
         * @memberof pbShop.FindPointsTransactionArgs
         * @static
         * @param {pbShop.IFindPointsTransactionArgs} message FindPointsTransactionArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindPointsTransactionArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageSize);
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified FindPointsTransactionArgs message, length delimited. Does not implicitly {@link pbShop.FindPointsTransactionArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.FindPointsTransactionArgs
         * @static
         * @param {pbShop.IFindPointsTransactionArgs} message FindPointsTransactionArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindPointsTransactionArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindPointsTransactionArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.FindPointsTransactionArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.FindPointsTransactionArgs} FindPointsTransactionArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindPointsTransactionArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.FindPointsTransactionArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                case 2: {
                        message.page = reader.int32();
                        break;
                    }
                case 3: {
                        message.pageSize = reader.int32();
                        break;
                    }
                case 4: {
                        message.type = reader.int32();
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
         * Decodes a FindPointsTransactionArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.FindPointsTransactionArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.FindPointsTransactionArgs} FindPointsTransactionArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindPointsTransactionArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindPointsTransactionArgs message.
         * @function verify
         * @memberof pbShop.FindPointsTransactionArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindPointsTransactionArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
            return null;
        };

        /**
         * Creates a FindPointsTransactionArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.FindPointsTransactionArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.FindPointsTransactionArgs} FindPointsTransactionArgs
         */
        FindPointsTransactionArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.FindPointsTransactionArgs)
                return object;
            var message = new $root.pbShop.FindPointsTransactionArgs();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            if (object.type != null)
                message.type = object.type | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindPointsTransactionArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.FindPointsTransactionArgs
         * @static
         * @param {pbShop.FindPointsTransactionArgs} message FindPointsTransactionArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindPointsTransactionArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.page = 0;
                object.pageSize = 0;
                object.type = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            return object;
        };

        /**
         * Converts this FindPointsTransactionArgs to JSON.
         * @function toJSON
         * @memberof pbShop.FindPointsTransactionArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindPointsTransactionArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindPointsTransactionArgs
         * @function getTypeUrl
         * @memberof pbShop.FindPointsTransactionArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindPointsTransactionArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.FindPointsTransactionArgs";
        };

        return FindPointsTransactionArgs;
    })();

    pbShop.FindPointsTransactionReply = (function() {

        /**
         * Properties of a FindPointsTransactionReply.
         * @memberof pbShop
         * @interface IFindPointsTransactionReply
         * @property {number|null} [code] FindPointsTransactionReply code
         * @property {string|null} [msg] FindPointsTransactionReply msg
         * @property {Array.<pbShop.IPointsTransaction>|null} [data] FindPointsTransactionReply data
         * @property {number|null} [total] FindPointsTransactionReply total
         */

        /**
         * Constructs a new FindPointsTransactionReply.
         * @memberof pbShop
         * @classdesc Represents a FindPointsTransactionReply.
         * @implements IFindPointsTransactionReply
         * @constructor
         * @param {pbShop.IFindPointsTransactionReply=} [properties] Properties to set
         */
        function FindPointsTransactionReply(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindPointsTransactionReply code.
         * @member {number} code
         * @memberof pbShop.FindPointsTransactionReply
         * @instance
         */
        FindPointsTransactionReply.prototype.code = 0;

        /**
         * FindPointsTransactionReply msg.
         * @member {string} msg
         * @memberof pbShop.FindPointsTransactionReply
         * @instance
         */
        FindPointsTransactionReply.prototype.msg = "";

        /**
         * FindPointsTransactionReply data.
         * @member {Array.<pbShop.IPointsTransaction>} data
         * @memberof pbShop.FindPointsTransactionReply
         * @instance
         */
        FindPointsTransactionReply.prototype.data = $util.emptyArray;

        /**
         * FindPointsTransactionReply total.
         * @member {number} total
         * @memberof pbShop.FindPointsTransactionReply
         * @instance
         */
        FindPointsTransactionReply.prototype.total = 0;

        /**
         * Creates a new FindPointsTransactionReply instance using the specified properties.
         * @function create
         * @memberof pbShop.FindPointsTransactionReply
         * @static
         * @param {pbShop.IFindPointsTransactionReply=} [properties] Properties to set
         * @returns {pbShop.FindPointsTransactionReply} FindPointsTransactionReply instance
         */
        FindPointsTransactionReply.create = function create(properties) {
            return new FindPointsTransactionReply(properties);
        };

        /**
         * Encodes the specified FindPointsTransactionReply message. Does not implicitly {@link pbShop.FindPointsTransactionReply.verify|verify} messages.
         * @function encode
         * @memberof pbShop.FindPointsTransactionReply
         * @static
         * @param {pbShop.IFindPointsTransactionReply} message FindPointsTransactionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindPointsTransactionReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.pbShop.PointsTransaction.encode(message.data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindPointsTransactionReply message, length delimited. Does not implicitly {@link pbShop.FindPointsTransactionReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.FindPointsTransactionReply
         * @static
         * @param {pbShop.IFindPointsTransactionReply} message FindPointsTransactionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindPointsTransactionReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindPointsTransactionReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.FindPointsTransactionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.FindPointsTransactionReply} FindPointsTransactionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindPointsTransactionReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.FindPointsTransactionReply();
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
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push($root.pbShop.PointsTransaction.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.total = reader.int32();
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
         * Decodes a FindPointsTransactionReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.FindPointsTransactionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.FindPointsTransactionReply} FindPointsTransactionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindPointsTransactionReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindPointsTransactionReply message.
         * @function verify
         * @memberof pbShop.FindPointsTransactionReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindPointsTransactionReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.pbShop.PointsTransaction.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            return null;
        };

        /**
         * Creates a FindPointsTransactionReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.FindPointsTransactionReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.FindPointsTransactionReply} FindPointsTransactionReply
         */
        FindPointsTransactionReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.FindPointsTransactionReply)
                return object;
            var message = new $root.pbShop.FindPointsTransactionReply();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".pbShop.FindPointsTransactionReply.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".pbShop.FindPointsTransactionReply.data: object expected");
                    message.data[i] = $root.pbShop.PointsTransaction.fromObject(object.data[i]);
                }
            }
            if (object.total != null)
                message.total = object.total | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindPointsTransactionReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.FindPointsTransactionReply
         * @static
         * @param {pbShop.FindPointsTransactionReply} message FindPointsTransactionReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindPointsTransactionReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.total = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.pbShop.PointsTransaction.toObject(message.data[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            return object;
        };

        /**
         * Converts this FindPointsTransactionReply to JSON.
         * @function toJSON
         * @memberof pbShop.FindPointsTransactionReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindPointsTransactionReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindPointsTransactionReply
         * @function getTypeUrl
         * @memberof pbShop.FindPointsTransactionReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindPointsTransactionReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.FindPointsTransactionReply";
        };

        return FindPointsTransactionReply;
    })();

    pbShop.CreateRedemptionOrderArgs = (function() {

        /**
         * Properties of a CreateRedemptionOrderArgs.
         * @memberof pbShop
         * @interface ICreateRedemptionOrderArgs
         * @property {string|null} [userId] CreateRedemptionOrderArgs userId
         * @property {number|Long|null} [productId] CreateRedemptionOrderArgs productId
         * @property {number|null} [quantity] CreateRedemptionOrderArgs quantity
         * @property {string|null} [receiverName] CreateRedemptionOrderArgs receiverName
         * @property {string|null} [receiverPhone] CreateRedemptionOrderArgs receiverPhone
         * @property {string|null} [receiverAddress] CreateRedemptionOrderArgs receiverAddress
         * @property {string|null} [remark] CreateRedemptionOrderArgs remark
         */

        /**
         * Constructs a new CreateRedemptionOrderArgs.
         * @memberof pbShop
         * @classdesc Represents a CreateRedemptionOrderArgs.
         * @implements ICreateRedemptionOrderArgs
         * @constructor
         * @param {pbShop.ICreateRedemptionOrderArgs=} [properties] Properties to set
         */
        function CreateRedemptionOrderArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRedemptionOrderArgs userId.
         * @member {string} userId
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @instance
         */
        CreateRedemptionOrderArgs.prototype.userId = "";

        /**
         * CreateRedemptionOrderArgs productId.
         * @member {number|Long} productId
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @instance
         */
        CreateRedemptionOrderArgs.prototype.productId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CreateRedemptionOrderArgs quantity.
         * @member {number} quantity
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @instance
         */
        CreateRedemptionOrderArgs.prototype.quantity = 0;

        /**
         * CreateRedemptionOrderArgs receiverName.
         * @member {string} receiverName
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @instance
         */
        CreateRedemptionOrderArgs.prototype.receiverName = "";

        /**
         * CreateRedemptionOrderArgs receiverPhone.
         * @member {string} receiverPhone
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @instance
         */
        CreateRedemptionOrderArgs.prototype.receiverPhone = "";

        /**
         * CreateRedemptionOrderArgs receiverAddress.
         * @member {string} receiverAddress
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @instance
         */
        CreateRedemptionOrderArgs.prototype.receiverAddress = "";

        /**
         * CreateRedemptionOrderArgs remark.
         * @member {string} remark
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @instance
         */
        CreateRedemptionOrderArgs.prototype.remark = "";

        /**
         * Creates a new CreateRedemptionOrderArgs instance using the specified properties.
         * @function create
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @static
         * @param {pbShop.ICreateRedemptionOrderArgs=} [properties] Properties to set
         * @returns {pbShop.CreateRedemptionOrderArgs} CreateRedemptionOrderArgs instance
         */
        CreateRedemptionOrderArgs.create = function create(properties) {
            return new CreateRedemptionOrderArgs(properties);
        };

        /**
         * Encodes the specified CreateRedemptionOrderArgs message. Does not implicitly {@link pbShop.CreateRedemptionOrderArgs.verify|verify} messages.
         * @function encode
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @static
         * @param {pbShop.ICreateRedemptionOrderArgs} message CreateRedemptionOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRedemptionOrderArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.productId != null && Object.hasOwnProperty.call(message, "productId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.productId);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.quantity);
            if (message.receiverName != null && Object.hasOwnProperty.call(message, "receiverName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.receiverName);
            if (message.receiverPhone != null && Object.hasOwnProperty.call(message, "receiverPhone"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.receiverPhone);
            if (message.receiverAddress != null && Object.hasOwnProperty.call(message, "receiverAddress"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.receiverAddress);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified CreateRedemptionOrderArgs message, length delimited. Does not implicitly {@link pbShop.CreateRedemptionOrderArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @static
         * @param {pbShop.ICreateRedemptionOrderArgs} message CreateRedemptionOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRedemptionOrderArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRedemptionOrderArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.CreateRedemptionOrderArgs} CreateRedemptionOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRedemptionOrderArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.CreateRedemptionOrderArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                case 2: {
                        message.productId = reader.int64();
                        break;
                    }
                case 3: {
                        message.quantity = reader.int32();
                        break;
                    }
                case 4: {
                        message.receiverName = reader.string();
                        break;
                    }
                case 5: {
                        message.receiverPhone = reader.string();
                        break;
                    }
                case 6: {
                        message.receiverAddress = reader.string();
                        break;
                    }
                case 7: {
                        message.remark = reader.string();
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
         * Decodes a CreateRedemptionOrderArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.CreateRedemptionOrderArgs} CreateRedemptionOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRedemptionOrderArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRedemptionOrderArgs message.
         * @function verify
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRedemptionOrderArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.productId != null && message.hasOwnProperty("productId"))
                if (!$util.isInteger(message.productId) && !(message.productId && $util.isInteger(message.productId.low) && $util.isInteger(message.productId.high)))
                    return "productId: integer|Long expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            if (message.receiverName != null && message.hasOwnProperty("receiverName"))
                if (!$util.isString(message.receiverName))
                    return "receiverName: string expected";
            if (message.receiverPhone != null && message.hasOwnProperty("receiverPhone"))
                if (!$util.isString(message.receiverPhone))
                    return "receiverPhone: string expected";
            if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
                if (!$util.isString(message.receiverAddress))
                    return "receiverAddress: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a CreateRedemptionOrderArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.CreateRedemptionOrderArgs} CreateRedemptionOrderArgs
         */
        CreateRedemptionOrderArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.CreateRedemptionOrderArgs)
                return object;
            var message = new $root.pbShop.CreateRedemptionOrderArgs();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.productId != null)
                if ($util.Long)
                    (message.productId = $util.Long.fromValue(object.productId)).unsigned = false;
                else if (typeof object.productId === "string")
                    message.productId = parseInt(object.productId, 10);
                else if (typeof object.productId === "number")
                    message.productId = object.productId;
                else if (typeof object.productId === "object")
                    message.productId = new $util.LongBits(object.productId.low >>> 0, object.productId.high >>> 0).toNumber();
            if (object.quantity != null)
                message.quantity = object.quantity | 0;
            if (object.receiverName != null)
                message.receiverName = String(object.receiverName);
            if (object.receiverPhone != null)
                message.receiverPhone = String(object.receiverPhone);
            if (object.receiverAddress != null)
                message.receiverAddress = String(object.receiverAddress);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a CreateRedemptionOrderArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @static
         * @param {pbShop.CreateRedemptionOrderArgs} message CreateRedemptionOrderArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRedemptionOrderArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.productId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.productId = options.longs === String ? "0" : 0;
                object.quantity = 0;
                object.receiverName = "";
                object.receiverPhone = "";
                object.receiverAddress = "";
                object.remark = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.productId != null && message.hasOwnProperty("productId"))
                if (typeof message.productId === "number")
                    object.productId = options.longs === String ? String(message.productId) : message.productId;
                else
                    object.productId = options.longs === String ? $util.Long.prototype.toString.call(message.productId) : options.longs === Number ? new $util.LongBits(message.productId.low >>> 0, message.productId.high >>> 0).toNumber() : message.productId;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            if (message.receiverName != null && message.hasOwnProperty("receiverName"))
                object.receiverName = message.receiverName;
            if (message.receiverPhone != null && message.hasOwnProperty("receiverPhone"))
                object.receiverPhone = message.receiverPhone;
            if (message.receiverAddress != null && message.hasOwnProperty("receiverAddress"))
                object.receiverAddress = message.receiverAddress;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this CreateRedemptionOrderArgs to JSON.
         * @function toJSON
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRedemptionOrderArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateRedemptionOrderArgs
         * @function getTypeUrl
         * @memberof pbShop.CreateRedemptionOrderArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateRedemptionOrderArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.CreateRedemptionOrderArgs";
        };

        return CreateRedemptionOrderArgs;
    })();

    pbShop.FindRedemptionOrderArgs = (function() {

        /**
         * Properties of a FindRedemptionOrderArgs.
         * @memberof pbShop
         * @interface IFindRedemptionOrderArgs
         * @property {number|null} [page] FindRedemptionOrderArgs page
         * @property {number|null} [pageSize] FindRedemptionOrderArgs pageSize
         * @property {string|null} [userId] FindRedemptionOrderArgs userId
         * @property {number|null} [status] FindRedemptionOrderArgs status
         * @property {string|null} [keyword] FindRedemptionOrderArgs keyword
         */

        /**
         * Constructs a new FindRedemptionOrderArgs.
         * @memberof pbShop
         * @classdesc Represents a FindRedemptionOrderArgs.
         * @implements IFindRedemptionOrderArgs
         * @constructor
         * @param {pbShop.IFindRedemptionOrderArgs=} [properties] Properties to set
         */
        function FindRedemptionOrderArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindRedemptionOrderArgs page.
         * @member {number} page
         * @memberof pbShop.FindRedemptionOrderArgs
         * @instance
         */
        FindRedemptionOrderArgs.prototype.page = 0;

        /**
         * FindRedemptionOrderArgs pageSize.
         * @member {number} pageSize
         * @memberof pbShop.FindRedemptionOrderArgs
         * @instance
         */
        FindRedemptionOrderArgs.prototype.pageSize = 0;

        /**
         * FindRedemptionOrderArgs userId.
         * @member {string} userId
         * @memberof pbShop.FindRedemptionOrderArgs
         * @instance
         */
        FindRedemptionOrderArgs.prototype.userId = "";

        /**
         * FindRedemptionOrderArgs status.
         * @member {number} status
         * @memberof pbShop.FindRedemptionOrderArgs
         * @instance
         */
        FindRedemptionOrderArgs.prototype.status = 0;

        /**
         * FindRedemptionOrderArgs keyword.
         * @member {string} keyword
         * @memberof pbShop.FindRedemptionOrderArgs
         * @instance
         */
        FindRedemptionOrderArgs.prototype.keyword = "";

        /**
         * Creates a new FindRedemptionOrderArgs instance using the specified properties.
         * @function create
         * @memberof pbShop.FindRedemptionOrderArgs
         * @static
         * @param {pbShop.IFindRedemptionOrderArgs=} [properties] Properties to set
         * @returns {pbShop.FindRedemptionOrderArgs} FindRedemptionOrderArgs instance
         */
        FindRedemptionOrderArgs.create = function create(properties) {
            return new FindRedemptionOrderArgs(properties);
        };

        /**
         * Encodes the specified FindRedemptionOrderArgs message. Does not implicitly {@link pbShop.FindRedemptionOrderArgs.verify|verify} messages.
         * @function encode
         * @memberof pbShop.FindRedemptionOrderArgs
         * @static
         * @param {pbShop.IFindRedemptionOrderArgs} message FindRedemptionOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRedemptionOrderArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            if (message.keyword != null && Object.hasOwnProperty.call(message, "keyword"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.keyword);
            return writer;
        };

        /**
         * Encodes the specified FindRedemptionOrderArgs message, length delimited. Does not implicitly {@link pbShop.FindRedemptionOrderArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.FindRedemptionOrderArgs
         * @static
         * @param {pbShop.IFindRedemptionOrderArgs} message FindRedemptionOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRedemptionOrderArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindRedemptionOrderArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.FindRedemptionOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.FindRedemptionOrderArgs} FindRedemptionOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRedemptionOrderArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.FindRedemptionOrderArgs();
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
                case 3: {
                        message.userId = reader.string();
                        break;
                    }
                case 4: {
                        message.status = reader.int32();
                        break;
                    }
                case 5: {
                        message.keyword = reader.string();
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
         * Decodes a FindRedemptionOrderArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.FindRedemptionOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.FindRedemptionOrderArgs} FindRedemptionOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRedemptionOrderArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindRedemptionOrderArgs message.
         * @function verify
         * @memberof pbShop.FindRedemptionOrderArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindRedemptionOrderArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                if (!$util.isString(message.keyword))
                    return "keyword: string expected";
            return null;
        };

        /**
         * Creates a FindRedemptionOrderArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.FindRedemptionOrderArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.FindRedemptionOrderArgs} FindRedemptionOrderArgs
         */
        FindRedemptionOrderArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.FindRedemptionOrderArgs)
                return object;
            var message = new $root.pbShop.FindRedemptionOrderArgs();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.keyword != null)
                message.keyword = String(object.keyword);
            return message;
        };

        /**
         * Creates a plain object from a FindRedemptionOrderArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.FindRedemptionOrderArgs
         * @static
         * @param {pbShop.FindRedemptionOrderArgs} message FindRedemptionOrderArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindRedemptionOrderArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.page = 0;
                object.pageSize = 0;
                object.userId = "";
                object.status = 0;
                object.keyword = "";
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                object.keyword = message.keyword;
            return object;
        };

        /**
         * Converts this FindRedemptionOrderArgs to JSON.
         * @function toJSON
         * @memberof pbShop.FindRedemptionOrderArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindRedemptionOrderArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindRedemptionOrderArgs
         * @function getTypeUrl
         * @memberof pbShop.FindRedemptionOrderArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindRedemptionOrderArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.FindRedemptionOrderArgs";
        };

        return FindRedemptionOrderArgs;
    })();

    pbShop.FindRedemptionOrderReply = (function() {

        /**
         * Properties of a FindRedemptionOrderReply.
         * @memberof pbShop
         * @interface IFindRedemptionOrderReply
         * @property {number|null} [code] FindRedemptionOrderReply code
         * @property {string|null} [msg] FindRedemptionOrderReply msg
         * @property {Array.<pbShop.IRedemptionOrder>|null} [data] FindRedemptionOrderReply data
         * @property {number|null} [total] FindRedemptionOrderReply total
         */

        /**
         * Constructs a new FindRedemptionOrderReply.
         * @memberof pbShop
         * @classdesc Represents a FindRedemptionOrderReply.
         * @implements IFindRedemptionOrderReply
         * @constructor
         * @param {pbShop.IFindRedemptionOrderReply=} [properties] Properties to set
         */
        function FindRedemptionOrderReply(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindRedemptionOrderReply code.
         * @member {number} code
         * @memberof pbShop.FindRedemptionOrderReply
         * @instance
         */
        FindRedemptionOrderReply.prototype.code = 0;

        /**
         * FindRedemptionOrderReply msg.
         * @member {string} msg
         * @memberof pbShop.FindRedemptionOrderReply
         * @instance
         */
        FindRedemptionOrderReply.prototype.msg = "";

        /**
         * FindRedemptionOrderReply data.
         * @member {Array.<pbShop.IRedemptionOrder>} data
         * @memberof pbShop.FindRedemptionOrderReply
         * @instance
         */
        FindRedemptionOrderReply.prototype.data = $util.emptyArray;

        /**
         * FindRedemptionOrderReply total.
         * @member {number} total
         * @memberof pbShop.FindRedemptionOrderReply
         * @instance
         */
        FindRedemptionOrderReply.prototype.total = 0;

        /**
         * Creates a new FindRedemptionOrderReply instance using the specified properties.
         * @function create
         * @memberof pbShop.FindRedemptionOrderReply
         * @static
         * @param {pbShop.IFindRedemptionOrderReply=} [properties] Properties to set
         * @returns {pbShop.FindRedemptionOrderReply} FindRedemptionOrderReply instance
         */
        FindRedemptionOrderReply.create = function create(properties) {
            return new FindRedemptionOrderReply(properties);
        };

        /**
         * Encodes the specified FindRedemptionOrderReply message. Does not implicitly {@link pbShop.FindRedemptionOrderReply.verify|verify} messages.
         * @function encode
         * @memberof pbShop.FindRedemptionOrderReply
         * @static
         * @param {pbShop.IFindRedemptionOrderReply} message FindRedemptionOrderReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRedemptionOrderReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.pbShop.RedemptionOrder.encode(message.data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindRedemptionOrderReply message, length delimited. Does not implicitly {@link pbShop.FindRedemptionOrderReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.FindRedemptionOrderReply
         * @static
         * @param {pbShop.IFindRedemptionOrderReply} message FindRedemptionOrderReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRedemptionOrderReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindRedemptionOrderReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.FindRedemptionOrderReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.FindRedemptionOrderReply} FindRedemptionOrderReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRedemptionOrderReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.FindRedemptionOrderReply();
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
                        if (!(message.data && message.data.length))
                            message.data = [];
                        message.data.push($root.pbShop.RedemptionOrder.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.total = reader.int32();
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
         * Decodes a FindRedemptionOrderReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.FindRedemptionOrderReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.FindRedemptionOrderReply} FindRedemptionOrderReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRedemptionOrderReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindRedemptionOrderReply message.
         * @function verify
         * @memberof pbShop.FindRedemptionOrderReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindRedemptionOrderReply.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.pbShop.RedemptionOrder.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (!$util.isInteger(message.total))
                    return "total: integer expected";
            return null;
        };

        /**
         * Creates a FindRedemptionOrderReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.FindRedemptionOrderReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.FindRedemptionOrderReply} FindRedemptionOrderReply
         */
        FindRedemptionOrderReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.FindRedemptionOrderReply)
                return object;
            var message = new $root.pbShop.FindRedemptionOrderReply();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".pbShop.FindRedemptionOrderReply.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".pbShop.FindRedemptionOrderReply.data: object expected");
                    message.data[i] = $root.pbShop.RedemptionOrder.fromObject(object.data[i]);
                }
            }
            if (object.total != null)
                message.total = object.total | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindRedemptionOrderReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.FindRedemptionOrderReply
         * @static
         * @param {pbShop.FindRedemptionOrderReply} message FindRedemptionOrderReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindRedemptionOrderReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
                object.total = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.pbShop.RedemptionOrder.toObject(message.data[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            return object;
        };

        /**
         * Converts this FindRedemptionOrderReply to JSON.
         * @function toJSON
         * @memberof pbShop.FindRedemptionOrderReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindRedemptionOrderReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindRedemptionOrderReply
         * @function getTypeUrl
         * @memberof pbShop.FindRedemptionOrderReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindRedemptionOrderReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.FindRedemptionOrderReply";
        };

        return FindRedemptionOrderReply;
    })();

    pbShop.ShipRedemptionOrderArgs = (function() {

        /**
         * Properties of a ShipRedemptionOrderArgs.
         * @memberof pbShop
         * @interface IShipRedemptionOrderArgs
         * @property {number|Long|null} [id] ShipRedemptionOrderArgs id
         * @property {string|null} [trackingNo] ShipRedemptionOrderArgs trackingNo
         * @property {string|null} [carrier] ShipRedemptionOrderArgs carrier
         * @property {string|null} [remark] ShipRedemptionOrderArgs remark
         */

        /**
         * Constructs a new ShipRedemptionOrderArgs.
         * @memberof pbShop
         * @classdesc Represents a ShipRedemptionOrderArgs.
         * @implements IShipRedemptionOrderArgs
         * @constructor
         * @param {pbShop.IShipRedemptionOrderArgs=} [properties] Properties to set
         */
        function ShipRedemptionOrderArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShipRedemptionOrderArgs id.
         * @member {number|Long} id
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @instance
         */
        ShipRedemptionOrderArgs.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ShipRedemptionOrderArgs trackingNo.
         * @member {string} trackingNo
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @instance
         */
        ShipRedemptionOrderArgs.prototype.trackingNo = "";

        /**
         * ShipRedemptionOrderArgs carrier.
         * @member {string} carrier
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @instance
         */
        ShipRedemptionOrderArgs.prototype.carrier = "";

        /**
         * ShipRedemptionOrderArgs remark.
         * @member {string} remark
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @instance
         */
        ShipRedemptionOrderArgs.prototype.remark = "";

        /**
         * Creates a new ShipRedemptionOrderArgs instance using the specified properties.
         * @function create
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @static
         * @param {pbShop.IShipRedemptionOrderArgs=} [properties] Properties to set
         * @returns {pbShop.ShipRedemptionOrderArgs} ShipRedemptionOrderArgs instance
         */
        ShipRedemptionOrderArgs.create = function create(properties) {
            return new ShipRedemptionOrderArgs(properties);
        };

        /**
         * Encodes the specified ShipRedemptionOrderArgs message. Does not implicitly {@link pbShop.ShipRedemptionOrderArgs.verify|verify} messages.
         * @function encode
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @static
         * @param {pbShop.IShipRedemptionOrderArgs} message ShipRedemptionOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShipRedemptionOrderArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.trackingNo != null && Object.hasOwnProperty.call(message, "trackingNo"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.trackingNo);
            if (message.carrier != null && Object.hasOwnProperty.call(message, "carrier"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.carrier);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified ShipRedemptionOrderArgs message, length delimited. Does not implicitly {@link pbShop.ShipRedemptionOrderArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @static
         * @param {pbShop.IShipRedemptionOrderArgs} message ShipRedemptionOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShipRedemptionOrderArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShipRedemptionOrderArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbShop.ShipRedemptionOrderArgs} ShipRedemptionOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShipRedemptionOrderArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbShop.ShipRedemptionOrderArgs();
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
                        message.trackingNo = reader.string();
                        break;
                    }
                case 3: {
                        message.carrier = reader.string();
                        break;
                    }
                case 4: {
                        message.remark = reader.string();
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
         * Decodes a ShipRedemptionOrderArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbShop.ShipRedemptionOrderArgs} ShipRedemptionOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShipRedemptionOrderArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShipRedemptionOrderArgs message.
         * @function verify
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShipRedemptionOrderArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.trackingNo != null && message.hasOwnProperty("trackingNo"))
                if (!$util.isString(message.trackingNo))
                    return "trackingNo: string expected";
            if (message.carrier != null && message.hasOwnProperty("carrier"))
                if (!$util.isString(message.carrier))
                    return "carrier: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a ShipRedemptionOrderArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbShop.ShipRedemptionOrderArgs} ShipRedemptionOrderArgs
         */
        ShipRedemptionOrderArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbShop.ShipRedemptionOrderArgs)
                return object;
            var message = new $root.pbShop.ShipRedemptionOrderArgs();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.trackingNo != null)
                message.trackingNo = String(object.trackingNo);
            if (object.carrier != null)
                message.carrier = String(object.carrier);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a ShipRedemptionOrderArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @static
         * @param {pbShop.ShipRedemptionOrderArgs} message ShipRedemptionOrderArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShipRedemptionOrderArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.trackingNo = "";
                object.carrier = "";
                object.remark = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.trackingNo != null && message.hasOwnProperty("trackingNo"))
                object.trackingNo = message.trackingNo;
            if (message.carrier != null && message.hasOwnProperty("carrier"))
                object.carrier = message.carrier;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this ShipRedemptionOrderArgs to JSON.
         * @function toJSON
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShipRedemptionOrderArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ShipRedemptionOrderArgs
         * @function getTypeUrl
         * @memberof pbShop.ShipRedemptionOrderArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ShipRedemptionOrderArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbShop.ShipRedemptionOrderArgs";
        };

        return ShipRedemptionOrderArgs;
    })();

    return pbShop;
})();

module.exports = $root;
