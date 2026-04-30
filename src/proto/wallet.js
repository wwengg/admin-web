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

$root.pbwallet = (function() {

    /**
     * Namespace pbwallet.
     * @exports pbwallet
     * @namespace
     */
    var pbwallet = {};

    pbwallet.WalletModel = (function() {

        /**
         * Properties of a WalletModel.
         * @memberof pbwallet
         * @interface IWalletModel
         * @property {number|Long|null} [id] WalletModel id
         * @property {string|null} [createdAt] WalletModel createdAt
         * @property {string|null} [updatedAt] WalletModel updatedAt
         * @property {number|Long|null} [userId] WalletModel userId
         * @property {number|Long|null} [balance] WalletModel balance
         * @property {number|Long|null} [totalRecharge] WalletModel totalRecharge
         * @property {number|Long|null} [totalWin] WalletModel totalWin
         * @property {number|Long|null} [totalCost] WalletModel totalCost
         */

        /**
         * Constructs a new WalletModel.
         * @memberof pbwallet
         * @classdesc Represents a WalletModel.
         * @implements IWalletModel
         * @constructor
         * @param {pbwallet.IWalletModel=} [properties] Properties to set
         */
        function WalletModel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WalletModel id.
         * @member {number|Long} id
         * @memberof pbwallet.WalletModel
         * @instance
         */
        WalletModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletModel createdAt.
         * @member {string} createdAt
         * @memberof pbwallet.WalletModel
         * @instance
         */
        WalletModel.prototype.createdAt = "";

        /**
         * WalletModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbwallet.WalletModel
         * @instance
         */
        WalletModel.prototype.updatedAt = "";

        /**
         * WalletModel userId.
         * @member {number|Long} userId
         * @memberof pbwallet.WalletModel
         * @instance
         */
        WalletModel.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletModel balance.
         * @member {number|Long} balance
         * @memberof pbwallet.WalletModel
         * @instance
         */
        WalletModel.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletModel totalRecharge.
         * @member {number|Long} totalRecharge
         * @memberof pbwallet.WalletModel
         * @instance
         */
        WalletModel.prototype.totalRecharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletModel totalWin.
         * @member {number|Long} totalWin
         * @memberof pbwallet.WalletModel
         * @instance
         */
        WalletModel.prototype.totalWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletModel totalCost.
         * @member {number|Long} totalCost
         * @memberof pbwallet.WalletModel
         * @instance
         */
        WalletModel.prototype.totalCost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new WalletModel instance using the specified properties.
         * @function create
         * @memberof pbwallet.WalletModel
         * @static
         * @param {pbwallet.IWalletModel=} [properties] Properties to set
         * @returns {pbwallet.WalletModel} WalletModel instance
         */
        WalletModel.create = function create(properties) {
            return new WalletModel(properties);
        };

        /**
         * Encodes the specified WalletModel message. Does not implicitly {@link pbwallet.WalletModel.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.WalletModel
         * @static
         * @param {pbwallet.IWalletModel} message WalletModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalletModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.userId);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.balance);
            if (message.totalRecharge != null && Object.hasOwnProperty.call(message, "totalRecharge"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.totalRecharge);
            if (message.totalWin != null && Object.hasOwnProperty.call(message, "totalWin"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.totalWin);
            if (message.totalCost != null && Object.hasOwnProperty.call(message, "totalCost"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.totalCost);
            return writer;
        };

        /**
         * Encodes the specified WalletModel message, length delimited. Does not implicitly {@link pbwallet.WalletModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.WalletModel
         * @static
         * @param {pbwallet.IWalletModel} message WalletModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalletModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WalletModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.WalletModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.WalletModel} WalletModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalletModel.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.WalletModel();
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
                        message.userId = reader.int64();
                        break;
                    }
                case 11: {
                        message.balance = reader.int64();
                        break;
                    }
                case 12: {
                        message.totalRecharge = reader.int64();
                        break;
                    }
                case 13: {
                        message.totalWin = reader.int64();
                        break;
                    }
                case 14: {
                        message.totalCost = reader.int64();
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
         * Decodes a WalletModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.WalletModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.WalletModel} WalletModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalletModel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WalletModel message.
         * @function verify
         * @memberof pbwallet.WalletModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WalletModel.verify = function verify(message) {
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
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            if (message.totalRecharge != null && message.hasOwnProperty("totalRecharge"))
                if (!$util.isInteger(message.totalRecharge) && !(message.totalRecharge && $util.isInteger(message.totalRecharge.low) && $util.isInteger(message.totalRecharge.high)))
                    return "totalRecharge: integer|Long expected";
            if (message.totalWin != null && message.hasOwnProperty("totalWin"))
                if (!$util.isInteger(message.totalWin) && !(message.totalWin && $util.isInteger(message.totalWin.low) && $util.isInteger(message.totalWin.high)))
                    return "totalWin: integer|Long expected";
            if (message.totalCost != null && message.hasOwnProperty("totalCost"))
                if (!$util.isInteger(message.totalCost) && !(message.totalCost && $util.isInteger(message.totalCost.low) && $util.isInteger(message.totalCost.high)))
                    return "totalCost: integer|Long expected";
            return null;
        };

        /**
         * Creates a WalletModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.WalletModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.WalletModel} WalletModel
         */
        WalletModel.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.WalletModel)
                return object;
            var message = new $root.pbwallet.WalletModel();
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
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = false;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber();
            if (object.totalRecharge != null)
                if ($util.Long)
                    (message.totalRecharge = $util.Long.fromValue(object.totalRecharge)).unsigned = false;
                else if (typeof object.totalRecharge === "string")
                    message.totalRecharge = parseInt(object.totalRecharge, 10);
                else if (typeof object.totalRecharge === "number")
                    message.totalRecharge = object.totalRecharge;
                else if (typeof object.totalRecharge === "object")
                    message.totalRecharge = new $util.LongBits(object.totalRecharge.low >>> 0, object.totalRecharge.high >>> 0).toNumber();
            if (object.totalWin != null)
                if ($util.Long)
                    (message.totalWin = $util.Long.fromValue(object.totalWin)).unsigned = false;
                else if (typeof object.totalWin === "string")
                    message.totalWin = parseInt(object.totalWin, 10);
                else if (typeof object.totalWin === "number")
                    message.totalWin = object.totalWin;
                else if (typeof object.totalWin === "object")
                    message.totalWin = new $util.LongBits(object.totalWin.low >>> 0, object.totalWin.high >>> 0).toNumber();
            if (object.totalCost != null)
                if ($util.Long)
                    (message.totalCost = $util.Long.fromValue(object.totalCost)).unsigned = false;
                else if (typeof object.totalCost === "string")
                    message.totalCost = parseInt(object.totalCost, 10);
                else if (typeof object.totalCost === "number")
                    message.totalCost = object.totalCost;
                else if (typeof object.totalCost === "object")
                    message.totalCost = new $util.LongBits(object.totalCost.low >>> 0, object.totalCost.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a WalletModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.WalletModel
         * @static
         * @param {pbwallet.WalletModel} message WalletModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WalletModel.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalRecharge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalRecharge = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalWin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalCost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalCost = options.longs === String ? "0" : 0;
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
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber() : message.balance;
            if (message.totalRecharge != null && message.hasOwnProperty("totalRecharge"))
                if (typeof message.totalRecharge === "number")
                    object.totalRecharge = options.longs === String ? String(message.totalRecharge) : message.totalRecharge;
                else
                    object.totalRecharge = options.longs === String ? $util.Long.prototype.toString.call(message.totalRecharge) : options.longs === Number ? new $util.LongBits(message.totalRecharge.low >>> 0, message.totalRecharge.high >>> 0).toNumber() : message.totalRecharge;
            if (message.totalWin != null && message.hasOwnProperty("totalWin"))
                if (typeof message.totalWin === "number")
                    object.totalWin = options.longs === String ? String(message.totalWin) : message.totalWin;
                else
                    object.totalWin = options.longs === String ? $util.Long.prototype.toString.call(message.totalWin) : options.longs === Number ? new $util.LongBits(message.totalWin.low >>> 0, message.totalWin.high >>> 0).toNumber() : message.totalWin;
            if (message.totalCost != null && message.hasOwnProperty("totalCost"))
                if (typeof message.totalCost === "number")
                    object.totalCost = options.longs === String ? String(message.totalCost) : message.totalCost;
                else
                    object.totalCost = options.longs === String ? $util.Long.prototype.toString.call(message.totalCost) : options.longs === Number ? new $util.LongBits(message.totalCost.low >>> 0, message.totalCost.high >>> 0).toNumber() : message.totalCost;
            return object;
        };

        /**
         * Converts this WalletModel to JSON.
         * @function toJSON
         * @memberof pbwallet.WalletModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WalletModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WalletModel
         * @function getTypeUrl
         * @memberof pbwallet.WalletModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WalletModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.WalletModel";
        };

        return WalletModel;
    })();

    pbwallet.WalletLogModel = (function() {

        /**
         * Properties of a WalletLogModel.
         * @memberof pbwallet
         * @interface IWalletLogModel
         * @property {number|Long|null} [id] WalletLogModel id
         * @property {string|null} [createdAt] WalletLogModel createdAt
         * @property {string|null} [updatedAt] WalletLogModel updatedAt
         * @property {number|Long|null} [userId] WalletLogModel userId
         * @property {number|Long|null} [amount] WalletLogModel amount
         * @property {number|Long|null} [balanceAfter] WalletLogModel balanceAfter
         * @property {string|null} [bizType] WalletLogModel bizType
         * @property {number|Long|null} [bizId] WalletLogModel bizId
         * @property {string|null} [description] WalletLogModel description
         */

        /**
         * Constructs a new WalletLogModel.
         * @memberof pbwallet
         * @classdesc Represents a WalletLogModel.
         * @implements IWalletLogModel
         * @constructor
         * @param {pbwallet.IWalletLogModel=} [properties] Properties to set
         */
        function WalletLogModel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WalletLogModel id.
         * @member {number|Long} id
         * @memberof pbwallet.WalletLogModel
         * @instance
         */
        WalletLogModel.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletLogModel createdAt.
         * @member {string} createdAt
         * @memberof pbwallet.WalletLogModel
         * @instance
         */
        WalletLogModel.prototype.createdAt = "";

        /**
         * WalletLogModel updatedAt.
         * @member {string} updatedAt
         * @memberof pbwallet.WalletLogModel
         * @instance
         */
        WalletLogModel.prototype.updatedAt = "";

        /**
         * WalletLogModel userId.
         * @member {number|Long} userId
         * @memberof pbwallet.WalletLogModel
         * @instance
         */
        WalletLogModel.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletLogModel amount.
         * @member {number|Long} amount
         * @memberof pbwallet.WalletLogModel
         * @instance
         */
        WalletLogModel.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletLogModel balanceAfter.
         * @member {number|Long} balanceAfter
         * @memberof pbwallet.WalletLogModel
         * @instance
         */
        WalletLogModel.prototype.balanceAfter = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletLogModel bizType.
         * @member {string} bizType
         * @memberof pbwallet.WalletLogModel
         * @instance
         */
        WalletLogModel.prototype.bizType = "";

        /**
         * WalletLogModel bizId.
         * @member {number|Long} bizId
         * @memberof pbwallet.WalletLogModel
         * @instance
         */
        WalletLogModel.prototype.bizId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletLogModel description.
         * @member {string} description
         * @memberof pbwallet.WalletLogModel
         * @instance
         */
        WalletLogModel.prototype.description = "";

        /**
         * Creates a new WalletLogModel instance using the specified properties.
         * @function create
         * @memberof pbwallet.WalletLogModel
         * @static
         * @param {pbwallet.IWalletLogModel=} [properties] Properties to set
         * @returns {pbwallet.WalletLogModel} WalletLogModel instance
         */
        WalletLogModel.create = function create(properties) {
            return new WalletLogModel(properties);
        };

        /**
         * Encodes the specified WalletLogModel message. Does not implicitly {@link pbwallet.WalletLogModel.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.WalletLogModel
         * @static
         * @param {pbwallet.IWalletLogModel} message WalletLogModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalletLogModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.userId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.amount);
            if (message.balanceAfter != null && Object.hasOwnProperty.call(message, "balanceAfter"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.balanceAfter);
            if (message.bizType != null && Object.hasOwnProperty.call(message, "bizType"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.bizType);
            if (message.bizId != null && Object.hasOwnProperty.call(message, "bizId"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.bizId);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified WalletLogModel message, length delimited. Does not implicitly {@link pbwallet.WalletLogModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.WalletLogModel
         * @static
         * @param {pbwallet.IWalletLogModel} message WalletLogModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalletLogModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WalletLogModel message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.WalletLogModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.WalletLogModel} WalletLogModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalletLogModel.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.WalletLogModel();
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
                        message.userId = reader.int64();
                        break;
                    }
                case 11: {
                        message.amount = reader.int64();
                        break;
                    }
                case 12: {
                        message.balanceAfter = reader.int64();
                        break;
                    }
                case 13: {
                        message.bizType = reader.string();
                        break;
                    }
                case 14: {
                        message.bizId = reader.int64();
                        break;
                    }
                case 15: {
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
         * Decodes a WalletLogModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.WalletLogModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.WalletLogModel} WalletLogModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalletLogModel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WalletLogModel message.
         * @function verify
         * @memberof pbwallet.WalletLogModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WalletLogModel.verify = function verify(message) {
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
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.balanceAfter != null && message.hasOwnProperty("balanceAfter"))
                if (!$util.isInteger(message.balanceAfter) && !(message.balanceAfter && $util.isInteger(message.balanceAfter.low) && $util.isInteger(message.balanceAfter.high)))
                    return "balanceAfter: integer|Long expected";
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                if (!$util.isString(message.bizType))
                    return "bizType: string expected";
            if (message.bizId != null && message.hasOwnProperty("bizId"))
                if (!$util.isInteger(message.bizId) && !(message.bizId && $util.isInteger(message.bizId.low) && $util.isInteger(message.bizId.high)))
                    return "bizId: integer|Long expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a WalletLogModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.WalletLogModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.WalletLogModel} WalletLogModel
         */
        WalletLogModel.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.WalletLogModel)
                return object;
            var message = new $root.pbwallet.WalletLogModel();
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
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.balanceAfter != null)
                if ($util.Long)
                    (message.balanceAfter = $util.Long.fromValue(object.balanceAfter)).unsigned = false;
                else if (typeof object.balanceAfter === "string")
                    message.balanceAfter = parseInt(object.balanceAfter, 10);
                else if (typeof object.balanceAfter === "number")
                    message.balanceAfter = object.balanceAfter;
                else if (typeof object.balanceAfter === "object")
                    message.balanceAfter = new $util.LongBits(object.balanceAfter.low >>> 0, object.balanceAfter.high >>> 0).toNumber();
            if (object.bizType != null)
                message.bizType = String(object.bizType);
            if (object.bizId != null)
                if ($util.Long)
                    (message.bizId = $util.Long.fromValue(object.bizId)).unsigned = false;
                else if (typeof object.bizId === "string")
                    message.bizId = parseInt(object.bizId, 10);
                else if (typeof object.bizId === "number")
                    message.bizId = object.bizId;
                else if (typeof object.bizId === "object")
                    message.bizId = new $util.LongBits(object.bizId.low >>> 0, object.bizId.high >>> 0).toNumber();
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a WalletLogModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.WalletLogModel
         * @static
         * @param {pbwallet.WalletLogModel} message WalletLogModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WalletLogModel.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.balanceAfter = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balanceAfter = options.longs === String ? "0" : 0;
                object.bizType = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.bizId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bizId = options.longs === String ? "0" : 0;
                object.description = "";
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
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.balanceAfter != null && message.hasOwnProperty("balanceAfter"))
                if (typeof message.balanceAfter === "number")
                    object.balanceAfter = options.longs === String ? String(message.balanceAfter) : message.balanceAfter;
                else
                    object.balanceAfter = options.longs === String ? $util.Long.prototype.toString.call(message.balanceAfter) : options.longs === Number ? new $util.LongBits(message.balanceAfter.low >>> 0, message.balanceAfter.high >>> 0).toNumber() : message.balanceAfter;
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                object.bizType = message.bizType;
            if (message.bizId != null && message.hasOwnProperty("bizId"))
                if (typeof message.bizId === "number")
                    object.bizId = options.longs === String ? String(message.bizId) : message.bizId;
                else
                    object.bizId = options.longs === String ? $util.Long.prototype.toString.call(message.bizId) : options.longs === Number ? new $util.LongBits(message.bizId.low >>> 0, message.bizId.high >>> 0).toNumber() : message.bizId;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this WalletLogModel to JSON.
         * @function toJSON
         * @memberof pbwallet.WalletLogModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WalletLogModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WalletLogModel
         * @function getTypeUrl
         * @memberof pbwallet.WalletLogModel
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WalletLogModel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.WalletLogModel";
        };

        return WalletLogModel;
    })();

    pbwallet.WalletStatistics = (function() {

        /**
         * Properties of a WalletStatistics.
         * @memberof pbwallet
         * @interface IWalletStatistics
         * @property {number|Long|null} [totalWallets] WalletStatistics totalWallets
         * @property {number|Long|null} [totalBalance] WalletStatistics totalBalance
         * @property {number|Long|null} [totalRecharge] WalletStatistics totalRecharge
         * @property {number|Long|null} [totalWin] WalletStatistics totalWin
         * @property {number|Long|null} [totalCost] WalletStatistics totalCost
         * @property {number|Long|null} [todayLogs] WalletStatistics todayLogs
         * @property {number|Long|null} [todayRecharge] WalletStatistics todayRecharge
         * @property {number|Long|null} [todayWin] WalletStatistics todayWin
         * @property {number|Long|null} [todayCost] WalletStatistics todayCost
         */

        /**
         * Constructs a new WalletStatistics.
         * @memberof pbwallet
         * @classdesc Represents a WalletStatistics.
         * @implements IWalletStatistics
         * @constructor
         * @param {pbwallet.IWalletStatistics=} [properties] Properties to set
         */
        function WalletStatistics(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WalletStatistics totalWallets.
         * @member {number|Long} totalWallets
         * @memberof pbwallet.WalletStatistics
         * @instance
         */
        WalletStatistics.prototype.totalWallets = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletStatistics totalBalance.
         * @member {number|Long} totalBalance
         * @memberof pbwallet.WalletStatistics
         * @instance
         */
        WalletStatistics.prototype.totalBalance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletStatistics totalRecharge.
         * @member {number|Long} totalRecharge
         * @memberof pbwallet.WalletStatistics
         * @instance
         */
        WalletStatistics.prototype.totalRecharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletStatistics totalWin.
         * @member {number|Long} totalWin
         * @memberof pbwallet.WalletStatistics
         * @instance
         */
        WalletStatistics.prototype.totalWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletStatistics totalCost.
         * @member {number|Long} totalCost
         * @memberof pbwallet.WalletStatistics
         * @instance
         */
        WalletStatistics.prototype.totalCost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletStatistics todayLogs.
         * @member {number|Long} todayLogs
         * @memberof pbwallet.WalletStatistics
         * @instance
         */
        WalletStatistics.prototype.todayLogs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletStatistics todayRecharge.
         * @member {number|Long} todayRecharge
         * @memberof pbwallet.WalletStatistics
         * @instance
         */
        WalletStatistics.prototype.todayRecharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletStatistics todayWin.
         * @member {number|Long} todayWin
         * @memberof pbwallet.WalletStatistics
         * @instance
         */
        WalletStatistics.prototype.todayWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WalletStatistics todayCost.
         * @member {number|Long} todayCost
         * @memberof pbwallet.WalletStatistics
         * @instance
         */
        WalletStatistics.prototype.todayCost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new WalletStatistics instance using the specified properties.
         * @function create
         * @memberof pbwallet.WalletStatistics
         * @static
         * @param {pbwallet.IWalletStatistics=} [properties] Properties to set
         * @returns {pbwallet.WalletStatistics} WalletStatistics instance
         */
        WalletStatistics.create = function create(properties) {
            return new WalletStatistics(properties);
        };

        /**
         * Encodes the specified WalletStatistics message. Does not implicitly {@link pbwallet.WalletStatistics.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.WalletStatistics
         * @static
         * @param {pbwallet.IWalletStatistics} message WalletStatistics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalletStatistics.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.totalWallets != null && Object.hasOwnProperty.call(message, "totalWallets"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.totalWallets);
            if (message.totalBalance != null && Object.hasOwnProperty.call(message, "totalBalance"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.totalBalance);
            if (message.totalRecharge != null && Object.hasOwnProperty.call(message, "totalRecharge"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.totalRecharge);
            if (message.totalWin != null && Object.hasOwnProperty.call(message, "totalWin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.totalWin);
            if (message.totalCost != null && Object.hasOwnProperty.call(message, "totalCost"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.totalCost);
            if (message.todayLogs != null && Object.hasOwnProperty.call(message, "todayLogs"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.todayLogs);
            if (message.todayRecharge != null && Object.hasOwnProperty.call(message, "todayRecharge"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.todayRecharge);
            if (message.todayWin != null && Object.hasOwnProperty.call(message, "todayWin"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.todayWin);
            if (message.todayCost != null && Object.hasOwnProperty.call(message, "todayCost"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.todayCost);
            return writer;
        };

        /**
         * Encodes the specified WalletStatistics message, length delimited. Does not implicitly {@link pbwallet.WalletStatistics.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.WalletStatistics
         * @static
         * @param {pbwallet.IWalletStatistics} message WalletStatistics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WalletStatistics.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WalletStatistics message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.WalletStatistics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.WalletStatistics} WalletStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalletStatistics.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.WalletStatistics();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.totalWallets = reader.int64();
                        break;
                    }
                case 2: {
                        message.totalBalance = reader.int64();
                        break;
                    }
                case 3: {
                        message.totalRecharge = reader.int64();
                        break;
                    }
                case 4: {
                        message.totalWin = reader.int64();
                        break;
                    }
                case 5: {
                        message.totalCost = reader.int64();
                        break;
                    }
                case 6: {
                        message.todayLogs = reader.int64();
                        break;
                    }
                case 7: {
                        message.todayRecharge = reader.int64();
                        break;
                    }
                case 8: {
                        message.todayWin = reader.int64();
                        break;
                    }
                case 9: {
                        message.todayCost = reader.int64();
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
         * Decodes a WalletStatistics message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.WalletStatistics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.WalletStatistics} WalletStatistics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WalletStatistics.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WalletStatistics message.
         * @function verify
         * @memberof pbwallet.WalletStatistics
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WalletStatistics.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.totalWallets != null && message.hasOwnProperty("totalWallets"))
                if (!$util.isInteger(message.totalWallets) && !(message.totalWallets && $util.isInteger(message.totalWallets.low) && $util.isInteger(message.totalWallets.high)))
                    return "totalWallets: integer|Long expected";
            if (message.totalBalance != null && message.hasOwnProperty("totalBalance"))
                if (!$util.isInteger(message.totalBalance) && !(message.totalBalance && $util.isInteger(message.totalBalance.low) && $util.isInteger(message.totalBalance.high)))
                    return "totalBalance: integer|Long expected";
            if (message.totalRecharge != null && message.hasOwnProperty("totalRecharge"))
                if (!$util.isInteger(message.totalRecharge) && !(message.totalRecharge && $util.isInteger(message.totalRecharge.low) && $util.isInteger(message.totalRecharge.high)))
                    return "totalRecharge: integer|Long expected";
            if (message.totalWin != null && message.hasOwnProperty("totalWin"))
                if (!$util.isInteger(message.totalWin) && !(message.totalWin && $util.isInteger(message.totalWin.low) && $util.isInteger(message.totalWin.high)))
                    return "totalWin: integer|Long expected";
            if (message.totalCost != null && message.hasOwnProperty("totalCost"))
                if (!$util.isInteger(message.totalCost) && !(message.totalCost && $util.isInteger(message.totalCost.low) && $util.isInteger(message.totalCost.high)))
                    return "totalCost: integer|Long expected";
            if (message.todayLogs != null && message.hasOwnProperty("todayLogs"))
                if (!$util.isInteger(message.todayLogs) && !(message.todayLogs && $util.isInteger(message.todayLogs.low) && $util.isInteger(message.todayLogs.high)))
                    return "todayLogs: integer|Long expected";
            if (message.todayRecharge != null && message.hasOwnProperty("todayRecharge"))
                if (!$util.isInteger(message.todayRecharge) && !(message.todayRecharge && $util.isInteger(message.todayRecharge.low) && $util.isInteger(message.todayRecharge.high)))
                    return "todayRecharge: integer|Long expected";
            if (message.todayWin != null && message.hasOwnProperty("todayWin"))
                if (!$util.isInteger(message.todayWin) && !(message.todayWin && $util.isInteger(message.todayWin.low) && $util.isInteger(message.todayWin.high)))
                    return "todayWin: integer|Long expected";
            if (message.todayCost != null && message.hasOwnProperty("todayCost"))
                if (!$util.isInteger(message.todayCost) && !(message.todayCost && $util.isInteger(message.todayCost.low) && $util.isInteger(message.todayCost.high)))
                    return "todayCost: integer|Long expected";
            return null;
        };

        /**
         * Creates a WalletStatistics message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.WalletStatistics
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.WalletStatistics} WalletStatistics
         */
        WalletStatistics.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.WalletStatistics)
                return object;
            var message = new $root.pbwallet.WalletStatistics();
            if (object.totalWallets != null)
                if ($util.Long)
                    (message.totalWallets = $util.Long.fromValue(object.totalWallets)).unsigned = false;
                else if (typeof object.totalWallets === "string")
                    message.totalWallets = parseInt(object.totalWallets, 10);
                else if (typeof object.totalWallets === "number")
                    message.totalWallets = object.totalWallets;
                else if (typeof object.totalWallets === "object")
                    message.totalWallets = new $util.LongBits(object.totalWallets.low >>> 0, object.totalWallets.high >>> 0).toNumber();
            if (object.totalBalance != null)
                if ($util.Long)
                    (message.totalBalance = $util.Long.fromValue(object.totalBalance)).unsigned = false;
                else if (typeof object.totalBalance === "string")
                    message.totalBalance = parseInt(object.totalBalance, 10);
                else if (typeof object.totalBalance === "number")
                    message.totalBalance = object.totalBalance;
                else if (typeof object.totalBalance === "object")
                    message.totalBalance = new $util.LongBits(object.totalBalance.low >>> 0, object.totalBalance.high >>> 0).toNumber();
            if (object.totalRecharge != null)
                if ($util.Long)
                    (message.totalRecharge = $util.Long.fromValue(object.totalRecharge)).unsigned = false;
                else if (typeof object.totalRecharge === "string")
                    message.totalRecharge = parseInt(object.totalRecharge, 10);
                else if (typeof object.totalRecharge === "number")
                    message.totalRecharge = object.totalRecharge;
                else if (typeof object.totalRecharge === "object")
                    message.totalRecharge = new $util.LongBits(object.totalRecharge.low >>> 0, object.totalRecharge.high >>> 0).toNumber();
            if (object.totalWin != null)
                if ($util.Long)
                    (message.totalWin = $util.Long.fromValue(object.totalWin)).unsigned = false;
                else if (typeof object.totalWin === "string")
                    message.totalWin = parseInt(object.totalWin, 10);
                else if (typeof object.totalWin === "number")
                    message.totalWin = object.totalWin;
                else if (typeof object.totalWin === "object")
                    message.totalWin = new $util.LongBits(object.totalWin.low >>> 0, object.totalWin.high >>> 0).toNumber();
            if (object.totalCost != null)
                if ($util.Long)
                    (message.totalCost = $util.Long.fromValue(object.totalCost)).unsigned = false;
                else if (typeof object.totalCost === "string")
                    message.totalCost = parseInt(object.totalCost, 10);
                else if (typeof object.totalCost === "number")
                    message.totalCost = object.totalCost;
                else if (typeof object.totalCost === "object")
                    message.totalCost = new $util.LongBits(object.totalCost.low >>> 0, object.totalCost.high >>> 0).toNumber();
            if (object.todayLogs != null)
                if ($util.Long)
                    (message.todayLogs = $util.Long.fromValue(object.todayLogs)).unsigned = false;
                else if (typeof object.todayLogs === "string")
                    message.todayLogs = parseInt(object.todayLogs, 10);
                else if (typeof object.todayLogs === "number")
                    message.todayLogs = object.todayLogs;
                else if (typeof object.todayLogs === "object")
                    message.todayLogs = new $util.LongBits(object.todayLogs.low >>> 0, object.todayLogs.high >>> 0).toNumber();
            if (object.todayRecharge != null)
                if ($util.Long)
                    (message.todayRecharge = $util.Long.fromValue(object.todayRecharge)).unsigned = false;
                else if (typeof object.todayRecharge === "string")
                    message.todayRecharge = parseInt(object.todayRecharge, 10);
                else if (typeof object.todayRecharge === "number")
                    message.todayRecharge = object.todayRecharge;
                else if (typeof object.todayRecharge === "object")
                    message.todayRecharge = new $util.LongBits(object.todayRecharge.low >>> 0, object.todayRecharge.high >>> 0).toNumber();
            if (object.todayWin != null)
                if ($util.Long)
                    (message.todayWin = $util.Long.fromValue(object.todayWin)).unsigned = false;
                else if (typeof object.todayWin === "string")
                    message.todayWin = parseInt(object.todayWin, 10);
                else if (typeof object.todayWin === "number")
                    message.todayWin = object.todayWin;
                else if (typeof object.todayWin === "object")
                    message.todayWin = new $util.LongBits(object.todayWin.low >>> 0, object.todayWin.high >>> 0).toNumber();
            if (object.todayCost != null)
                if ($util.Long)
                    (message.todayCost = $util.Long.fromValue(object.todayCost)).unsigned = false;
                else if (typeof object.todayCost === "string")
                    message.todayCost = parseInt(object.todayCost, 10);
                else if (typeof object.todayCost === "number")
                    message.todayCost = object.todayCost;
                else if (typeof object.todayCost === "object")
                    message.todayCost = new $util.LongBits(object.todayCost.low >>> 0, object.todayCost.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a WalletStatistics message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.WalletStatistics
         * @static
         * @param {pbwallet.WalletStatistics} message WalletStatistics
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WalletStatistics.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalWallets = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalWallets = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalBalance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalBalance = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalRecharge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalRecharge = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalWin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.totalCost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.totalCost = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.todayLogs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.todayLogs = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.todayRecharge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.todayRecharge = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.todayWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.todayWin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.todayCost = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.todayCost = options.longs === String ? "0" : 0;
            }
            if (message.totalWallets != null && message.hasOwnProperty("totalWallets"))
                if (typeof message.totalWallets === "number")
                    object.totalWallets = options.longs === String ? String(message.totalWallets) : message.totalWallets;
                else
                    object.totalWallets = options.longs === String ? $util.Long.prototype.toString.call(message.totalWallets) : options.longs === Number ? new $util.LongBits(message.totalWallets.low >>> 0, message.totalWallets.high >>> 0).toNumber() : message.totalWallets;
            if (message.totalBalance != null && message.hasOwnProperty("totalBalance"))
                if (typeof message.totalBalance === "number")
                    object.totalBalance = options.longs === String ? String(message.totalBalance) : message.totalBalance;
                else
                    object.totalBalance = options.longs === String ? $util.Long.prototype.toString.call(message.totalBalance) : options.longs === Number ? new $util.LongBits(message.totalBalance.low >>> 0, message.totalBalance.high >>> 0).toNumber() : message.totalBalance;
            if (message.totalRecharge != null && message.hasOwnProperty("totalRecharge"))
                if (typeof message.totalRecharge === "number")
                    object.totalRecharge = options.longs === String ? String(message.totalRecharge) : message.totalRecharge;
                else
                    object.totalRecharge = options.longs === String ? $util.Long.prototype.toString.call(message.totalRecharge) : options.longs === Number ? new $util.LongBits(message.totalRecharge.low >>> 0, message.totalRecharge.high >>> 0).toNumber() : message.totalRecharge;
            if (message.totalWin != null && message.hasOwnProperty("totalWin"))
                if (typeof message.totalWin === "number")
                    object.totalWin = options.longs === String ? String(message.totalWin) : message.totalWin;
                else
                    object.totalWin = options.longs === String ? $util.Long.prototype.toString.call(message.totalWin) : options.longs === Number ? new $util.LongBits(message.totalWin.low >>> 0, message.totalWin.high >>> 0).toNumber() : message.totalWin;
            if (message.totalCost != null && message.hasOwnProperty("totalCost"))
                if (typeof message.totalCost === "number")
                    object.totalCost = options.longs === String ? String(message.totalCost) : message.totalCost;
                else
                    object.totalCost = options.longs === String ? $util.Long.prototype.toString.call(message.totalCost) : options.longs === Number ? new $util.LongBits(message.totalCost.low >>> 0, message.totalCost.high >>> 0).toNumber() : message.totalCost;
            if (message.todayLogs != null && message.hasOwnProperty("todayLogs"))
                if (typeof message.todayLogs === "number")
                    object.todayLogs = options.longs === String ? String(message.todayLogs) : message.todayLogs;
                else
                    object.todayLogs = options.longs === String ? $util.Long.prototype.toString.call(message.todayLogs) : options.longs === Number ? new $util.LongBits(message.todayLogs.low >>> 0, message.todayLogs.high >>> 0).toNumber() : message.todayLogs;
            if (message.todayRecharge != null && message.hasOwnProperty("todayRecharge"))
                if (typeof message.todayRecharge === "number")
                    object.todayRecharge = options.longs === String ? String(message.todayRecharge) : message.todayRecharge;
                else
                    object.todayRecharge = options.longs === String ? $util.Long.prototype.toString.call(message.todayRecharge) : options.longs === Number ? new $util.LongBits(message.todayRecharge.low >>> 0, message.todayRecharge.high >>> 0).toNumber() : message.todayRecharge;
            if (message.todayWin != null && message.hasOwnProperty("todayWin"))
                if (typeof message.todayWin === "number")
                    object.todayWin = options.longs === String ? String(message.todayWin) : message.todayWin;
                else
                    object.todayWin = options.longs === String ? $util.Long.prototype.toString.call(message.todayWin) : options.longs === Number ? new $util.LongBits(message.todayWin.low >>> 0, message.todayWin.high >>> 0).toNumber() : message.todayWin;
            if (message.todayCost != null && message.hasOwnProperty("todayCost"))
                if (typeof message.todayCost === "number")
                    object.todayCost = options.longs === String ? String(message.todayCost) : message.todayCost;
                else
                    object.todayCost = options.longs === String ? $util.Long.prototype.toString.call(message.todayCost) : options.longs === Number ? new $util.LongBits(message.todayCost.low >>> 0, message.todayCost.high >>> 0).toNumber() : message.todayCost;
            return object;
        };

        /**
         * Converts this WalletStatistics to JSON.
         * @function toJSON
         * @memberof pbwallet.WalletStatistics
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WalletStatistics.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WalletStatistics
         * @function getTypeUrl
         * @memberof pbwallet.WalletStatistics
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WalletStatistics.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.WalletStatistics";
        };

        return WalletStatistics;
    })();

    pbwallet.GetWalletInfoArgs = (function() {

        /**
         * Properties of a GetWalletInfoArgs.
         * @memberof pbwallet
         * @interface IGetWalletInfoArgs
         * @property {number|Long|null} [userId] GetWalletInfoArgs userId
         */

        /**
         * Constructs a new GetWalletInfoArgs.
         * @memberof pbwallet
         * @classdesc Represents a GetWalletInfoArgs.
         * @implements IGetWalletInfoArgs
         * @constructor
         * @param {pbwallet.IGetWalletInfoArgs=} [properties] Properties to set
         */
        function GetWalletInfoArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetWalletInfoArgs userId.
         * @member {number|Long} userId
         * @memberof pbwallet.GetWalletInfoArgs
         * @instance
         */
        GetWalletInfoArgs.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetWalletInfoArgs instance using the specified properties.
         * @function create
         * @memberof pbwallet.GetWalletInfoArgs
         * @static
         * @param {pbwallet.IGetWalletInfoArgs=} [properties] Properties to set
         * @returns {pbwallet.GetWalletInfoArgs} GetWalletInfoArgs instance
         */
        GetWalletInfoArgs.create = function create(properties) {
            return new GetWalletInfoArgs(properties);
        };

        /**
         * Encodes the specified GetWalletInfoArgs message. Does not implicitly {@link pbwallet.GetWalletInfoArgs.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.GetWalletInfoArgs
         * @static
         * @param {pbwallet.IGetWalletInfoArgs} message GetWalletInfoArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWalletInfoArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            return writer;
        };

        /**
         * Encodes the specified GetWalletInfoArgs message, length delimited. Does not implicitly {@link pbwallet.GetWalletInfoArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.GetWalletInfoArgs
         * @static
         * @param {pbwallet.IGetWalletInfoArgs} message GetWalletInfoArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWalletInfoArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetWalletInfoArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.GetWalletInfoArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.GetWalletInfoArgs} GetWalletInfoArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWalletInfoArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.GetWalletInfoArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
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
         * Decodes a GetWalletInfoArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.GetWalletInfoArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.GetWalletInfoArgs} GetWalletInfoArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWalletInfoArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetWalletInfoArgs message.
         * @function verify
         * @memberof pbwallet.GetWalletInfoArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetWalletInfoArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            return null;
        };

        /**
         * Creates a GetWalletInfoArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.GetWalletInfoArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.GetWalletInfoArgs} GetWalletInfoArgs
         */
        GetWalletInfoArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.GetWalletInfoArgs)
                return object;
            var message = new $root.pbwallet.GetWalletInfoArgs();
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
         * Creates a plain object from a GetWalletInfoArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.GetWalletInfoArgs
         * @static
         * @param {pbwallet.GetWalletInfoArgs} message GetWalletInfoArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetWalletInfoArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
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
            return object;
        };

        /**
         * Converts this GetWalletInfoArgs to JSON.
         * @function toJSON
         * @memberof pbwallet.GetWalletInfoArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetWalletInfoArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetWalletInfoArgs
         * @function getTypeUrl
         * @memberof pbwallet.GetWalletInfoArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetWalletInfoArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.GetWalletInfoArgs";
        };

        return GetWalletInfoArgs;
    })();

    pbwallet.GetWalletInfoReply = (function() {

        /**
         * Properties of a GetWalletInfoReply.
         * @memberof pbwallet
         * @interface IGetWalletInfoReply
         * @property {pbcommon.EnumCode|null} [code] GetWalletInfoReply code
         * @property {string|null} [msg] GetWalletInfoReply msg
         * @property {pbwallet.IWalletModel|null} [wallet] GetWalletInfoReply wallet
         */

        /**
         * Constructs a new GetWalletInfoReply.
         * @memberof pbwallet
         * @classdesc Represents a GetWalletInfoReply.
         * @implements IGetWalletInfoReply
         * @constructor
         * @param {pbwallet.IGetWalletInfoReply=} [properties] Properties to set
         */
        function GetWalletInfoReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetWalletInfoReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbwallet.GetWalletInfoReply
         * @instance
         */
        GetWalletInfoReply.prototype.code = 0;

        /**
         * GetWalletInfoReply msg.
         * @member {string} msg
         * @memberof pbwallet.GetWalletInfoReply
         * @instance
         */
        GetWalletInfoReply.prototype.msg = "";

        /**
         * GetWalletInfoReply wallet.
         * @member {pbwallet.IWalletModel|null|undefined} wallet
         * @memberof pbwallet.GetWalletInfoReply
         * @instance
         */
        GetWalletInfoReply.prototype.wallet = null;

        /**
         * Creates a new GetWalletInfoReply instance using the specified properties.
         * @function create
         * @memberof pbwallet.GetWalletInfoReply
         * @static
         * @param {pbwallet.IGetWalletInfoReply=} [properties] Properties to set
         * @returns {pbwallet.GetWalletInfoReply} GetWalletInfoReply instance
         */
        GetWalletInfoReply.create = function create(properties) {
            return new GetWalletInfoReply(properties);
        };

        /**
         * Encodes the specified GetWalletInfoReply message. Does not implicitly {@link pbwallet.GetWalletInfoReply.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.GetWalletInfoReply
         * @static
         * @param {pbwallet.IGetWalletInfoReply} message GetWalletInfoReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWalletInfoReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.wallet != null && Object.hasOwnProperty.call(message, "wallet"))
                $root.pbwallet.WalletModel.encode(message.wallet, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetWalletInfoReply message, length delimited. Does not implicitly {@link pbwallet.GetWalletInfoReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.GetWalletInfoReply
         * @static
         * @param {pbwallet.IGetWalletInfoReply} message GetWalletInfoReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWalletInfoReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetWalletInfoReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.GetWalletInfoReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.GetWalletInfoReply} GetWalletInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWalletInfoReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.GetWalletInfoReply();
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
                        message.wallet = $root.pbwallet.WalletModel.decode(reader, reader.uint32());
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
         * Decodes a GetWalletInfoReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.GetWalletInfoReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.GetWalletInfoReply} GetWalletInfoReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWalletInfoReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetWalletInfoReply message.
         * @function verify
         * @memberof pbwallet.GetWalletInfoReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetWalletInfoReply.verify = function verify(message) {
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
            if (message.wallet != null && message.hasOwnProperty("wallet")) {
                var error = $root.pbwallet.WalletModel.verify(message.wallet);
                if (error)
                    return "wallet." + error;
            }
            return null;
        };

        /**
         * Creates a GetWalletInfoReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.GetWalletInfoReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.GetWalletInfoReply} GetWalletInfoReply
         */
        GetWalletInfoReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.GetWalletInfoReply)
                return object;
            var message = new $root.pbwallet.GetWalletInfoReply();
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
            if (object.wallet != null) {
                if (typeof object.wallet !== "object")
                    throw TypeError(".pbwallet.GetWalletInfoReply.wallet: object expected");
                message.wallet = $root.pbwallet.WalletModel.fromObject(object.wallet);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetWalletInfoReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.GetWalletInfoReply
         * @static
         * @param {pbwallet.GetWalletInfoReply} message GetWalletInfoReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetWalletInfoReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.msg = "";
                object.wallet = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.wallet != null && message.hasOwnProperty("wallet"))
                object.wallet = $root.pbwallet.WalletModel.toObject(message.wallet, options);
            return object;
        };

        /**
         * Converts this GetWalletInfoReply to JSON.
         * @function toJSON
         * @memberof pbwallet.GetWalletInfoReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetWalletInfoReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetWalletInfoReply
         * @function getTypeUrl
         * @memberof pbwallet.GetWalletInfoReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetWalletInfoReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.GetWalletInfoReply";
        };

        return GetWalletInfoReply;
    })();

    pbwallet.FindWalletListArgs = (function() {

        /**
         * Properties of a FindWalletListArgs.
         * @memberof pbwallet
         * @interface IFindWalletListArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindWalletListArgs pageInfo
         * @property {pbwallet.IWalletLogModel|null} [query] FindWalletListArgs query
         * @property {string|null} [keyword] FindWalletListArgs keyword
         * @property {number|Long|null} [userId] FindWalletListArgs userId
         * @property {string|null} [bizType] FindWalletListArgs bizType
         * @property {string|null} [startDate] FindWalletListArgs startDate
         * @property {string|null} [endDate] FindWalletListArgs endDate
         */

        /**
         * Constructs a new FindWalletListArgs.
         * @memberof pbwallet
         * @classdesc Represents a FindWalletListArgs.
         * @implements IFindWalletListArgs
         * @constructor
         * @param {pbwallet.IFindWalletListArgs=} [properties] Properties to set
         */
        function FindWalletListArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindWalletListArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbwallet.FindWalletListArgs
         * @instance
         */
        FindWalletListArgs.prototype.pageInfo = null;

        /**
         * FindWalletListArgs query.
         * @member {pbwallet.IWalletLogModel|null|undefined} query
         * @memberof pbwallet.FindWalletListArgs
         * @instance
         */
        FindWalletListArgs.prototype.query = null;

        /**
         * FindWalletListArgs keyword.
         * @member {string} keyword
         * @memberof pbwallet.FindWalletListArgs
         * @instance
         */
        FindWalletListArgs.prototype.keyword = "";

        /**
         * FindWalletListArgs userId.
         * @member {number|Long} userId
         * @memberof pbwallet.FindWalletListArgs
         * @instance
         */
        FindWalletListArgs.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FindWalletListArgs bizType.
         * @member {string} bizType
         * @memberof pbwallet.FindWalletListArgs
         * @instance
         */
        FindWalletListArgs.prototype.bizType = "";

        /**
         * FindWalletListArgs startDate.
         * @member {string} startDate
         * @memberof pbwallet.FindWalletListArgs
         * @instance
         */
        FindWalletListArgs.prototype.startDate = "";

        /**
         * FindWalletListArgs endDate.
         * @member {string} endDate
         * @memberof pbwallet.FindWalletListArgs
         * @instance
         */
        FindWalletListArgs.prototype.endDate = "";

        /**
         * Creates a new FindWalletListArgs instance using the specified properties.
         * @function create
         * @memberof pbwallet.FindWalletListArgs
         * @static
         * @param {pbwallet.IFindWalletListArgs=} [properties] Properties to set
         * @returns {pbwallet.FindWalletListArgs} FindWalletListArgs instance
         */
        FindWalletListArgs.create = function create(properties) {
            return new FindWalletListArgs(properties);
        };

        /**
         * Encodes the specified FindWalletListArgs message. Does not implicitly {@link pbwallet.FindWalletListArgs.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.FindWalletListArgs
         * @static
         * @param {pbwallet.IFindWalletListArgs} message FindWalletListArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWalletListArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.pbwallet.WalletLogModel.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.keyword != null && Object.hasOwnProperty.call(message, "keyword"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.keyword);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.userId);
            if (message.bizType != null && Object.hasOwnProperty.call(message, "bizType"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.bizType);
            if (message.startDate != null && Object.hasOwnProperty.call(message, "startDate"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.startDate);
            if (message.endDate != null && Object.hasOwnProperty.call(message, "endDate"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.endDate);
            return writer;
        };

        /**
         * Encodes the specified FindWalletListArgs message, length delimited. Does not implicitly {@link pbwallet.FindWalletListArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.FindWalletListArgs
         * @static
         * @param {pbwallet.IFindWalletListArgs} message FindWalletListArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWalletListArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindWalletListArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.FindWalletListArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.FindWalletListArgs} FindWalletListArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWalletListArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.FindWalletListArgs();
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
                        message.query = $root.pbwallet.WalletLogModel.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.keyword = reader.string();
                        break;
                    }
                case 4: {
                        message.userId = reader.int64();
                        break;
                    }
                case 5: {
                        message.bizType = reader.string();
                        break;
                    }
                case 6: {
                        message.startDate = reader.string();
                        break;
                    }
                case 7: {
                        message.endDate = reader.string();
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
         * Decodes a FindWalletListArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.FindWalletListArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.FindWalletListArgs} FindWalletListArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWalletListArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindWalletListArgs message.
         * @function verify
         * @memberof pbwallet.FindWalletListArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindWalletListArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                var error = $root.pbwallet.WalletLogModel.verify(message.query);
                if (error)
                    return "query." + error;
            }
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                if (!$util.isString(message.keyword))
                    return "keyword: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                if (!$util.isString(message.bizType))
                    return "bizType: string expected";
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                if (!$util.isString(message.startDate))
                    return "startDate: string expected";
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                if (!$util.isString(message.endDate))
                    return "endDate: string expected";
            return null;
        };

        /**
         * Creates a FindWalletListArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.FindWalletListArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.FindWalletListArgs} FindWalletListArgs
         */
        FindWalletListArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.FindWalletListArgs)
                return object;
            var message = new $root.pbwallet.FindWalletListArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbwallet.FindWalletListArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".pbwallet.FindWalletListArgs.query: object expected");
                message.query = $root.pbwallet.WalletLogModel.fromObject(object.query);
            }
            if (object.keyword != null)
                message.keyword = String(object.keyword);
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.bizType != null)
                message.bizType = String(object.bizType);
            if (object.startDate != null)
                message.startDate = String(object.startDate);
            if (object.endDate != null)
                message.endDate = String(object.endDate);
            return message;
        };

        /**
         * Creates a plain object from a FindWalletListArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.FindWalletListArgs
         * @static
         * @param {pbwallet.FindWalletListArgs} message FindWalletListArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindWalletListArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pageInfo = null;
                object.query = null;
                object.keyword = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.bizType = "";
                object.startDate = "";
                object.endDate = "";
            }
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options);
            if (message.query != null && message.hasOwnProperty("query"))
                object.query = $root.pbwallet.WalletLogModel.toObject(message.query, options);
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                object.keyword = message.keyword;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                object.bizType = message.bizType;
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                object.startDate = message.startDate;
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                object.endDate = message.endDate;
            return object;
        };

        /**
         * Converts this FindWalletListArgs to JSON.
         * @function toJSON
         * @memberof pbwallet.FindWalletListArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindWalletListArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindWalletListArgs
         * @function getTypeUrl
         * @memberof pbwallet.FindWalletListArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindWalletListArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.FindWalletListArgs";
        };

        return FindWalletListArgs;
    })();

    pbwallet.FindWalletListReply = (function() {

        /**
         * Properties of a FindWalletListReply.
         * @memberof pbwallet
         * @interface IFindWalletListReply
         * @property {pbcommon.EnumCode|null} [code] FindWalletListReply code
         * @property {string|null} [msg] FindWalletListReply msg
         * @property {pbwallet.IWalletLogModel|null} [data] FindWalletListReply data
         * @property {Array.<pbwallet.IWalletLogModel>|null} [list] FindWalletListReply list
         * @property {number|Long|null} [total] FindWalletListReply total
         */

        /**
         * Constructs a new FindWalletListReply.
         * @memberof pbwallet
         * @classdesc Represents a FindWalletListReply.
         * @implements IFindWalletListReply
         * @constructor
         * @param {pbwallet.IFindWalletListReply=} [properties] Properties to set
         */
        function FindWalletListReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindWalletListReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbwallet.FindWalletListReply
         * @instance
         */
        FindWalletListReply.prototype.code = 0;

        /**
         * FindWalletListReply msg.
         * @member {string} msg
         * @memberof pbwallet.FindWalletListReply
         * @instance
         */
        FindWalletListReply.prototype.msg = "";

        /**
         * FindWalletListReply data.
         * @member {pbwallet.IWalletLogModel|null|undefined} data
         * @memberof pbwallet.FindWalletListReply
         * @instance
         */
        FindWalletListReply.prototype.data = null;

        /**
         * FindWalletListReply list.
         * @member {Array.<pbwallet.IWalletLogModel>} list
         * @memberof pbwallet.FindWalletListReply
         * @instance
         */
        FindWalletListReply.prototype.list = $util.emptyArray;

        /**
         * FindWalletListReply total.
         * @member {number|Long} total
         * @memberof pbwallet.FindWalletListReply
         * @instance
         */
        FindWalletListReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindWalletListReply instance using the specified properties.
         * @function create
         * @memberof pbwallet.FindWalletListReply
         * @static
         * @param {pbwallet.IFindWalletListReply=} [properties] Properties to set
         * @returns {pbwallet.FindWalletListReply} FindWalletListReply instance
         */
        FindWalletListReply.create = function create(properties) {
            return new FindWalletListReply(properties);
        };

        /**
         * Encodes the specified FindWalletListReply message. Does not implicitly {@link pbwallet.FindWalletListReply.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.FindWalletListReply
         * @static
         * @param {pbwallet.IFindWalletListReply} message FindWalletListReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWalletListReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbwallet.WalletLogModel.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbwallet.WalletLogModel.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindWalletListReply message, length delimited. Does not implicitly {@link pbwallet.FindWalletListReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.FindWalletListReply
         * @static
         * @param {pbwallet.IFindWalletListReply} message FindWalletListReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWalletListReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindWalletListReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.FindWalletListReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.FindWalletListReply} FindWalletListReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWalletListReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.FindWalletListReply();
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
                        message.data = $root.pbwallet.WalletLogModel.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbwallet.WalletLogModel.decode(reader, reader.uint32()));
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
         * Decodes a FindWalletListReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.FindWalletListReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.FindWalletListReply} FindWalletListReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWalletListReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindWalletListReply message.
         * @function verify
         * @memberof pbwallet.FindWalletListReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindWalletListReply.verify = function verify(message) {
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
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbwallet.WalletLogModel.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbwallet.WalletLogModel.verify(message.list[i]);
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
         * Creates a FindWalletListReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.FindWalletListReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.FindWalletListReply} FindWalletListReply
         */
        FindWalletListReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.FindWalletListReply)
                return object;
            var message = new $root.pbwallet.FindWalletListReply();
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
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbwallet.FindWalletListReply.data: object expected");
                message.data = $root.pbwallet.WalletLogModel.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbwallet.FindWalletListReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbwallet.FindWalletListReply.list: object expected");
                    message.list[i] = $root.pbwallet.WalletLogModel.fromObject(object.list[i]);
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
         * Creates a plain object from a FindWalletListReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.FindWalletListReply
         * @static
         * @param {pbwallet.FindWalletListReply} message FindWalletListReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindWalletListReply.toObject = function toObject(message, options) {
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
                object.data = $root.pbwallet.WalletLogModel.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbwallet.WalletLogModel.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindWalletListReply to JSON.
         * @function toJSON
         * @memberof pbwallet.FindWalletListReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindWalletListReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindWalletListReply
         * @function getTypeUrl
         * @memberof pbwallet.FindWalletListReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindWalletListReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.FindWalletListReply";
        };

        return FindWalletListReply;
    })();

    pbwallet.AddBalanceArgs = (function() {

        /**
         * Properties of an AddBalanceArgs.
         * @memberof pbwallet
         * @interface IAddBalanceArgs
         * @property {number|Long|null} [userId] AddBalanceArgs userId
         * @property {number|Long|null} [amount] AddBalanceArgs amount
         * @property {string|null} [description] AddBalanceArgs description
         */

        /**
         * Constructs a new AddBalanceArgs.
         * @memberof pbwallet
         * @classdesc Represents an AddBalanceArgs.
         * @implements IAddBalanceArgs
         * @constructor
         * @param {pbwallet.IAddBalanceArgs=} [properties] Properties to set
         */
        function AddBalanceArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddBalanceArgs userId.
         * @member {number|Long} userId
         * @memberof pbwallet.AddBalanceArgs
         * @instance
         */
        AddBalanceArgs.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AddBalanceArgs amount.
         * @member {number|Long} amount
         * @memberof pbwallet.AddBalanceArgs
         * @instance
         */
        AddBalanceArgs.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AddBalanceArgs description.
         * @member {string} description
         * @memberof pbwallet.AddBalanceArgs
         * @instance
         */
        AddBalanceArgs.prototype.description = "";

        /**
         * Creates a new AddBalanceArgs instance using the specified properties.
         * @function create
         * @memberof pbwallet.AddBalanceArgs
         * @static
         * @param {pbwallet.IAddBalanceArgs=} [properties] Properties to set
         * @returns {pbwallet.AddBalanceArgs} AddBalanceArgs instance
         */
        AddBalanceArgs.create = function create(properties) {
            return new AddBalanceArgs(properties);
        };

        /**
         * Encodes the specified AddBalanceArgs message. Does not implicitly {@link pbwallet.AddBalanceArgs.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.AddBalanceArgs
         * @static
         * @param {pbwallet.IAddBalanceArgs} message AddBalanceArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddBalanceArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.amount);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified AddBalanceArgs message, length delimited. Does not implicitly {@link pbwallet.AddBalanceArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.AddBalanceArgs
         * @static
         * @param {pbwallet.IAddBalanceArgs} message AddBalanceArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddBalanceArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddBalanceArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.AddBalanceArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.AddBalanceArgs} AddBalanceArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddBalanceArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.AddBalanceArgs();
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
                        message.amount = reader.int64();
                        break;
                    }
                case 3: {
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
         * Decodes an AddBalanceArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.AddBalanceArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.AddBalanceArgs} AddBalanceArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddBalanceArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddBalanceArgs message.
         * @function verify
         * @memberof pbwallet.AddBalanceArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddBalanceArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates an AddBalanceArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.AddBalanceArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.AddBalanceArgs} AddBalanceArgs
         */
        AddBalanceArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.AddBalanceArgs)
                return object;
            var message = new $root.pbwallet.AddBalanceArgs();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from an AddBalanceArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.AddBalanceArgs
         * @static
         * @param {pbwallet.AddBalanceArgs} message AddBalanceArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddBalanceArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                object.description = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this AddBalanceArgs to JSON.
         * @function toJSON
         * @memberof pbwallet.AddBalanceArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddBalanceArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddBalanceArgs
         * @function getTypeUrl
         * @memberof pbwallet.AddBalanceArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddBalanceArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.AddBalanceArgs";
        };

        return AddBalanceArgs;
    })();

    pbwallet.AddBalanceReply = (function() {

        /**
         * Properties of an AddBalanceReply.
         * @memberof pbwallet
         * @interface IAddBalanceReply
         * @property {pbcommon.EnumCode|null} [code] AddBalanceReply code
         * @property {string|null} [msg] AddBalanceReply msg
         * @property {pbwallet.IWalletModel|null} [wallet] AddBalanceReply wallet
         */

        /**
         * Constructs a new AddBalanceReply.
         * @memberof pbwallet
         * @classdesc Represents an AddBalanceReply.
         * @implements IAddBalanceReply
         * @constructor
         * @param {pbwallet.IAddBalanceReply=} [properties] Properties to set
         */
        function AddBalanceReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddBalanceReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbwallet.AddBalanceReply
         * @instance
         */
        AddBalanceReply.prototype.code = 0;

        /**
         * AddBalanceReply msg.
         * @member {string} msg
         * @memberof pbwallet.AddBalanceReply
         * @instance
         */
        AddBalanceReply.prototype.msg = "";

        /**
         * AddBalanceReply wallet.
         * @member {pbwallet.IWalletModel|null|undefined} wallet
         * @memberof pbwallet.AddBalanceReply
         * @instance
         */
        AddBalanceReply.prototype.wallet = null;

        /**
         * Creates a new AddBalanceReply instance using the specified properties.
         * @function create
         * @memberof pbwallet.AddBalanceReply
         * @static
         * @param {pbwallet.IAddBalanceReply=} [properties] Properties to set
         * @returns {pbwallet.AddBalanceReply} AddBalanceReply instance
         */
        AddBalanceReply.create = function create(properties) {
            return new AddBalanceReply(properties);
        };

        /**
         * Encodes the specified AddBalanceReply message. Does not implicitly {@link pbwallet.AddBalanceReply.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.AddBalanceReply
         * @static
         * @param {pbwallet.IAddBalanceReply} message AddBalanceReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddBalanceReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.wallet != null && Object.hasOwnProperty.call(message, "wallet"))
                $root.pbwallet.WalletModel.encode(message.wallet, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AddBalanceReply message, length delimited. Does not implicitly {@link pbwallet.AddBalanceReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.AddBalanceReply
         * @static
         * @param {pbwallet.IAddBalanceReply} message AddBalanceReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddBalanceReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddBalanceReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.AddBalanceReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.AddBalanceReply} AddBalanceReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddBalanceReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.AddBalanceReply();
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
                        message.wallet = $root.pbwallet.WalletModel.decode(reader, reader.uint32());
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
         * Decodes an AddBalanceReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.AddBalanceReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.AddBalanceReply} AddBalanceReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddBalanceReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddBalanceReply message.
         * @function verify
         * @memberof pbwallet.AddBalanceReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddBalanceReply.verify = function verify(message) {
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
            if (message.wallet != null && message.hasOwnProperty("wallet")) {
                var error = $root.pbwallet.WalletModel.verify(message.wallet);
                if (error)
                    return "wallet." + error;
            }
            return null;
        };

        /**
         * Creates an AddBalanceReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.AddBalanceReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.AddBalanceReply} AddBalanceReply
         */
        AddBalanceReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.AddBalanceReply)
                return object;
            var message = new $root.pbwallet.AddBalanceReply();
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
            if (object.wallet != null) {
                if (typeof object.wallet !== "object")
                    throw TypeError(".pbwallet.AddBalanceReply.wallet: object expected");
                message.wallet = $root.pbwallet.WalletModel.fromObject(object.wallet);
            }
            return message;
        };

        /**
         * Creates a plain object from an AddBalanceReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.AddBalanceReply
         * @static
         * @param {pbwallet.AddBalanceReply} message AddBalanceReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddBalanceReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.msg = "";
                object.wallet = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.wallet != null && message.hasOwnProperty("wallet"))
                object.wallet = $root.pbwallet.WalletModel.toObject(message.wallet, options);
            return object;
        };

        /**
         * Converts this AddBalanceReply to JSON.
         * @function toJSON
         * @memberof pbwallet.AddBalanceReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddBalanceReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AddBalanceReply
         * @function getTypeUrl
         * @memberof pbwallet.AddBalanceReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AddBalanceReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.AddBalanceReply";
        };

        return AddBalanceReply;
    })();

    pbwallet.DeductBalanceArgs = (function() {

        /**
         * Properties of a DeductBalanceArgs.
         * @memberof pbwallet
         * @interface IDeductBalanceArgs
         * @property {number|Long|null} [userId] DeductBalanceArgs userId
         * @property {number|Long|null} [amount] DeductBalanceArgs amount
         * @property {string|null} [description] DeductBalanceArgs description
         */

        /**
         * Constructs a new DeductBalanceArgs.
         * @memberof pbwallet
         * @classdesc Represents a DeductBalanceArgs.
         * @implements IDeductBalanceArgs
         * @constructor
         * @param {pbwallet.IDeductBalanceArgs=} [properties] Properties to set
         */
        function DeductBalanceArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeductBalanceArgs userId.
         * @member {number|Long} userId
         * @memberof pbwallet.DeductBalanceArgs
         * @instance
         */
        DeductBalanceArgs.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DeductBalanceArgs amount.
         * @member {number|Long} amount
         * @memberof pbwallet.DeductBalanceArgs
         * @instance
         */
        DeductBalanceArgs.prototype.amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * DeductBalanceArgs description.
         * @member {string} description
         * @memberof pbwallet.DeductBalanceArgs
         * @instance
         */
        DeductBalanceArgs.prototype.description = "";

        /**
         * Creates a new DeductBalanceArgs instance using the specified properties.
         * @function create
         * @memberof pbwallet.DeductBalanceArgs
         * @static
         * @param {pbwallet.IDeductBalanceArgs=} [properties] Properties to set
         * @returns {pbwallet.DeductBalanceArgs} DeductBalanceArgs instance
         */
        DeductBalanceArgs.create = function create(properties) {
            return new DeductBalanceArgs(properties);
        };

        /**
         * Encodes the specified DeductBalanceArgs message. Does not implicitly {@link pbwallet.DeductBalanceArgs.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.DeductBalanceArgs
         * @static
         * @param {pbwallet.IDeductBalanceArgs} message DeductBalanceArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeductBalanceArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.amount);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
            return writer;
        };

        /**
         * Encodes the specified DeductBalanceArgs message, length delimited. Does not implicitly {@link pbwallet.DeductBalanceArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.DeductBalanceArgs
         * @static
         * @param {pbwallet.IDeductBalanceArgs} message DeductBalanceArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeductBalanceArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeductBalanceArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.DeductBalanceArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.DeductBalanceArgs} DeductBalanceArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeductBalanceArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.DeductBalanceArgs();
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
                        message.amount = reader.int64();
                        break;
                    }
                case 3: {
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
         * Decodes a DeductBalanceArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.DeductBalanceArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.DeductBalanceArgs} DeductBalanceArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeductBalanceArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeductBalanceArgs message.
         * @function verify
         * @memberof pbwallet.DeductBalanceArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeductBalanceArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (!$util.isInteger(message.amount) && !(message.amount && $util.isInteger(message.amount.low) && $util.isInteger(message.amount.high)))
                    return "amount: integer|Long expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            return null;
        };

        /**
         * Creates a DeductBalanceArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.DeductBalanceArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.DeductBalanceArgs} DeductBalanceArgs
         */
        DeductBalanceArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.DeductBalanceArgs)
                return object;
            var message = new $root.pbwallet.DeductBalanceArgs();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.amount != null)
                if ($util.Long)
                    (message.amount = $util.Long.fromValue(object.amount)).unsigned = false;
                else if (typeof object.amount === "string")
                    message.amount = parseInt(object.amount, 10);
                else if (typeof object.amount === "number")
                    message.amount = object.amount;
                else if (typeof object.amount === "object")
                    message.amount = new $util.LongBits(object.amount.low >>> 0, object.amount.high >>> 0).toNumber();
            if (object.description != null)
                message.description = String(object.description);
            return message;
        };

        /**
         * Creates a plain object from a DeductBalanceArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.DeductBalanceArgs
         * @static
         * @param {pbwallet.DeductBalanceArgs} message DeductBalanceArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeductBalanceArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.amount = options.longs === String ? "0" : 0;
                object.description = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount === "number")
                    object.amount = options.longs === String ? String(message.amount) : message.amount;
                else
                    object.amount = options.longs === String ? $util.Long.prototype.toString.call(message.amount) : options.longs === Number ? new $util.LongBits(message.amount.low >>> 0, message.amount.high >>> 0).toNumber() : message.amount;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            return object;
        };

        /**
         * Converts this DeductBalanceArgs to JSON.
         * @function toJSON
         * @memberof pbwallet.DeductBalanceArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeductBalanceArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeductBalanceArgs
         * @function getTypeUrl
         * @memberof pbwallet.DeductBalanceArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeductBalanceArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.DeductBalanceArgs";
        };

        return DeductBalanceArgs;
    })();

    pbwallet.DeductBalanceReply = (function() {

        /**
         * Properties of a DeductBalanceReply.
         * @memberof pbwallet
         * @interface IDeductBalanceReply
         * @property {pbcommon.EnumCode|null} [code] DeductBalanceReply code
         * @property {string|null} [msg] DeductBalanceReply msg
         * @property {pbwallet.IWalletModel|null} [wallet] DeductBalanceReply wallet
         */

        /**
         * Constructs a new DeductBalanceReply.
         * @memberof pbwallet
         * @classdesc Represents a DeductBalanceReply.
         * @implements IDeductBalanceReply
         * @constructor
         * @param {pbwallet.IDeductBalanceReply=} [properties] Properties to set
         */
        function DeductBalanceReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeductBalanceReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbwallet.DeductBalanceReply
         * @instance
         */
        DeductBalanceReply.prototype.code = 0;

        /**
         * DeductBalanceReply msg.
         * @member {string} msg
         * @memberof pbwallet.DeductBalanceReply
         * @instance
         */
        DeductBalanceReply.prototype.msg = "";

        /**
         * DeductBalanceReply wallet.
         * @member {pbwallet.IWalletModel|null|undefined} wallet
         * @memberof pbwallet.DeductBalanceReply
         * @instance
         */
        DeductBalanceReply.prototype.wallet = null;

        /**
         * Creates a new DeductBalanceReply instance using the specified properties.
         * @function create
         * @memberof pbwallet.DeductBalanceReply
         * @static
         * @param {pbwallet.IDeductBalanceReply=} [properties] Properties to set
         * @returns {pbwallet.DeductBalanceReply} DeductBalanceReply instance
         */
        DeductBalanceReply.create = function create(properties) {
            return new DeductBalanceReply(properties);
        };

        /**
         * Encodes the specified DeductBalanceReply message. Does not implicitly {@link pbwallet.DeductBalanceReply.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.DeductBalanceReply
         * @static
         * @param {pbwallet.IDeductBalanceReply} message DeductBalanceReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeductBalanceReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.wallet != null && Object.hasOwnProperty.call(message, "wallet"))
                $root.pbwallet.WalletModel.encode(message.wallet, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DeductBalanceReply message, length delimited. Does not implicitly {@link pbwallet.DeductBalanceReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.DeductBalanceReply
         * @static
         * @param {pbwallet.IDeductBalanceReply} message DeductBalanceReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeductBalanceReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeductBalanceReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.DeductBalanceReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.DeductBalanceReply} DeductBalanceReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeductBalanceReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.DeductBalanceReply();
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
                        message.wallet = $root.pbwallet.WalletModel.decode(reader, reader.uint32());
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
         * Decodes a DeductBalanceReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.DeductBalanceReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.DeductBalanceReply} DeductBalanceReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeductBalanceReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeductBalanceReply message.
         * @function verify
         * @memberof pbwallet.DeductBalanceReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeductBalanceReply.verify = function verify(message) {
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
            if (message.wallet != null && message.hasOwnProperty("wallet")) {
                var error = $root.pbwallet.WalletModel.verify(message.wallet);
                if (error)
                    return "wallet." + error;
            }
            return null;
        };

        /**
         * Creates a DeductBalanceReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.DeductBalanceReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.DeductBalanceReply} DeductBalanceReply
         */
        DeductBalanceReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.DeductBalanceReply)
                return object;
            var message = new $root.pbwallet.DeductBalanceReply();
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
            if (object.wallet != null) {
                if (typeof object.wallet !== "object")
                    throw TypeError(".pbwallet.DeductBalanceReply.wallet: object expected");
                message.wallet = $root.pbwallet.WalletModel.fromObject(object.wallet);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeductBalanceReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.DeductBalanceReply
         * @static
         * @param {pbwallet.DeductBalanceReply} message DeductBalanceReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeductBalanceReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.msg = "";
                object.wallet = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.wallet != null && message.hasOwnProperty("wallet"))
                object.wallet = $root.pbwallet.WalletModel.toObject(message.wallet, options);
            return object;
        };

        /**
         * Converts this DeductBalanceReply to JSON.
         * @function toJSON
         * @memberof pbwallet.DeductBalanceReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeductBalanceReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeductBalanceReply
         * @function getTypeUrl
         * @memberof pbwallet.DeductBalanceReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeductBalanceReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.DeductBalanceReply";
        };

        return DeductBalanceReply;
    })();

    pbwallet.GetWalletStatisticsArgs = (function() {

        /**
         * Properties of a GetWalletStatisticsArgs.
         * @memberof pbwallet
         * @interface IGetWalletStatisticsArgs
         * @property {string|null} [startDate] GetWalletStatisticsArgs startDate
         * @property {string|null} [endDate] GetWalletStatisticsArgs endDate
         */

        /**
         * Constructs a new GetWalletStatisticsArgs.
         * @memberof pbwallet
         * @classdesc Represents a GetWalletStatisticsArgs.
         * @implements IGetWalletStatisticsArgs
         * @constructor
         * @param {pbwallet.IGetWalletStatisticsArgs=} [properties] Properties to set
         */
        function GetWalletStatisticsArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetWalletStatisticsArgs startDate.
         * @member {string} startDate
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @instance
         */
        GetWalletStatisticsArgs.prototype.startDate = "";

        /**
         * GetWalletStatisticsArgs endDate.
         * @member {string} endDate
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @instance
         */
        GetWalletStatisticsArgs.prototype.endDate = "";

        /**
         * Creates a new GetWalletStatisticsArgs instance using the specified properties.
         * @function create
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @static
         * @param {pbwallet.IGetWalletStatisticsArgs=} [properties] Properties to set
         * @returns {pbwallet.GetWalletStatisticsArgs} GetWalletStatisticsArgs instance
         */
        GetWalletStatisticsArgs.create = function create(properties) {
            return new GetWalletStatisticsArgs(properties);
        };

        /**
         * Encodes the specified GetWalletStatisticsArgs message. Does not implicitly {@link pbwallet.GetWalletStatisticsArgs.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @static
         * @param {pbwallet.IGetWalletStatisticsArgs} message GetWalletStatisticsArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWalletStatisticsArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.startDate != null && Object.hasOwnProperty.call(message, "startDate"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.startDate);
            if (message.endDate != null && Object.hasOwnProperty.call(message, "endDate"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.endDate);
            return writer;
        };

        /**
         * Encodes the specified GetWalletStatisticsArgs message, length delimited. Does not implicitly {@link pbwallet.GetWalletStatisticsArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @static
         * @param {pbwallet.IGetWalletStatisticsArgs} message GetWalletStatisticsArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWalletStatisticsArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetWalletStatisticsArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.GetWalletStatisticsArgs} GetWalletStatisticsArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWalletStatisticsArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.GetWalletStatisticsArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.startDate = reader.string();
                        break;
                    }
                case 2: {
                        message.endDate = reader.string();
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
         * Decodes a GetWalletStatisticsArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.GetWalletStatisticsArgs} GetWalletStatisticsArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWalletStatisticsArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetWalletStatisticsArgs message.
         * @function verify
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetWalletStatisticsArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                if (!$util.isString(message.startDate))
                    return "startDate: string expected";
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                if (!$util.isString(message.endDate))
                    return "endDate: string expected";
            return null;
        };

        /**
         * Creates a GetWalletStatisticsArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.GetWalletStatisticsArgs} GetWalletStatisticsArgs
         */
        GetWalletStatisticsArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.GetWalletStatisticsArgs)
                return object;
            var message = new $root.pbwallet.GetWalletStatisticsArgs();
            if (object.startDate != null)
                message.startDate = String(object.startDate);
            if (object.endDate != null)
                message.endDate = String(object.endDate);
            return message;
        };

        /**
         * Creates a plain object from a GetWalletStatisticsArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @static
         * @param {pbwallet.GetWalletStatisticsArgs} message GetWalletStatisticsArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetWalletStatisticsArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.startDate = "";
                object.endDate = "";
            }
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                object.startDate = message.startDate;
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                object.endDate = message.endDate;
            return object;
        };

        /**
         * Converts this GetWalletStatisticsArgs to JSON.
         * @function toJSON
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetWalletStatisticsArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetWalletStatisticsArgs
         * @function getTypeUrl
         * @memberof pbwallet.GetWalletStatisticsArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetWalletStatisticsArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.GetWalletStatisticsArgs";
        };

        return GetWalletStatisticsArgs;
    })();

    pbwallet.GetWalletStatisticsReply = (function() {

        /**
         * Properties of a GetWalletStatisticsReply.
         * @memberof pbwallet
         * @interface IGetWalletStatisticsReply
         * @property {pbcommon.EnumCode|null} [code] GetWalletStatisticsReply code
         * @property {string|null} [msg] GetWalletStatisticsReply msg
         * @property {pbwallet.IWalletStatistics|null} [statistics] GetWalletStatisticsReply statistics
         */

        /**
         * Constructs a new GetWalletStatisticsReply.
         * @memberof pbwallet
         * @classdesc Represents a GetWalletStatisticsReply.
         * @implements IGetWalletStatisticsReply
         * @constructor
         * @param {pbwallet.IGetWalletStatisticsReply=} [properties] Properties to set
         */
        function GetWalletStatisticsReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetWalletStatisticsReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbwallet.GetWalletStatisticsReply
         * @instance
         */
        GetWalletStatisticsReply.prototype.code = 0;

        /**
         * GetWalletStatisticsReply msg.
         * @member {string} msg
         * @memberof pbwallet.GetWalletStatisticsReply
         * @instance
         */
        GetWalletStatisticsReply.prototype.msg = "";

        /**
         * GetWalletStatisticsReply statistics.
         * @member {pbwallet.IWalletStatistics|null|undefined} statistics
         * @memberof pbwallet.GetWalletStatisticsReply
         * @instance
         */
        GetWalletStatisticsReply.prototype.statistics = null;

        /**
         * Creates a new GetWalletStatisticsReply instance using the specified properties.
         * @function create
         * @memberof pbwallet.GetWalletStatisticsReply
         * @static
         * @param {pbwallet.IGetWalletStatisticsReply=} [properties] Properties to set
         * @returns {pbwallet.GetWalletStatisticsReply} GetWalletStatisticsReply instance
         */
        GetWalletStatisticsReply.create = function create(properties) {
            return new GetWalletStatisticsReply(properties);
        };

        /**
         * Encodes the specified GetWalletStatisticsReply message. Does not implicitly {@link pbwallet.GetWalletStatisticsReply.verify|verify} messages.
         * @function encode
         * @memberof pbwallet.GetWalletStatisticsReply
         * @static
         * @param {pbwallet.IGetWalletStatisticsReply} message GetWalletStatisticsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWalletStatisticsReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.statistics != null && Object.hasOwnProperty.call(message, "statistics"))
                $root.pbwallet.WalletStatistics.encode(message.statistics, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetWalletStatisticsReply message, length delimited. Does not implicitly {@link pbwallet.GetWalletStatisticsReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbwallet.GetWalletStatisticsReply
         * @static
         * @param {pbwallet.IGetWalletStatisticsReply} message GetWalletStatisticsReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetWalletStatisticsReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetWalletStatisticsReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbwallet.GetWalletStatisticsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbwallet.GetWalletStatisticsReply} GetWalletStatisticsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWalletStatisticsReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbwallet.GetWalletStatisticsReply();
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
                        message.statistics = $root.pbwallet.WalletStatistics.decode(reader, reader.uint32());
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
         * Decodes a GetWalletStatisticsReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbwallet.GetWalletStatisticsReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbwallet.GetWalletStatisticsReply} GetWalletStatisticsReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetWalletStatisticsReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetWalletStatisticsReply message.
         * @function verify
         * @memberof pbwallet.GetWalletStatisticsReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetWalletStatisticsReply.verify = function verify(message) {
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
            if (message.statistics != null && message.hasOwnProperty("statistics")) {
                var error = $root.pbwallet.WalletStatistics.verify(message.statistics);
                if (error)
                    return "statistics." + error;
            }
            return null;
        };

        /**
         * Creates a GetWalletStatisticsReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbwallet.GetWalletStatisticsReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbwallet.GetWalletStatisticsReply} GetWalletStatisticsReply
         */
        GetWalletStatisticsReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbwallet.GetWalletStatisticsReply)
                return object;
            var message = new $root.pbwallet.GetWalletStatisticsReply();
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
            if (object.statistics != null) {
                if (typeof object.statistics !== "object")
                    throw TypeError(".pbwallet.GetWalletStatisticsReply.statistics: object expected");
                message.statistics = $root.pbwallet.WalletStatistics.fromObject(object.statistics);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetWalletStatisticsReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbwallet.GetWalletStatisticsReply
         * @static
         * @param {pbwallet.GetWalletStatisticsReply} message GetWalletStatisticsReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetWalletStatisticsReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.msg = "";
                object.statistics = null;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.statistics != null && message.hasOwnProperty("statistics"))
                object.statistics = $root.pbwallet.WalletStatistics.toObject(message.statistics, options);
            return object;
        };

        /**
         * Converts this GetWalletStatisticsReply to JSON.
         * @function toJSON
         * @memberof pbwallet.GetWalletStatisticsReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetWalletStatisticsReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetWalletStatisticsReply
         * @function getTypeUrl
         * @memberof pbwallet.GetWalletStatisticsReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetWalletStatisticsReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbwallet.GetWalletStatisticsReply";
        };

        return GetWalletStatisticsReply;
    })();

    pbwallet.WalletAdmin = (function() {

        /**
         * Constructs a new WalletAdmin service.
         * @memberof pbwallet
         * @classdesc Represents a WalletAdmin
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function WalletAdmin(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (WalletAdmin.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = WalletAdmin;

        /**
         * Creates new WalletAdmin service using the specified rpc implementation.
         * @function create
         * @memberof pbwallet.WalletAdmin
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {WalletAdmin} RPC service. Useful where requests and/or responses are streamed.
         */
        WalletAdmin.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbwallet.WalletAdmin#getWalletInfo}.
         * @memberof pbwallet.WalletAdmin
         * @typedef GetWalletInfoCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbwallet.GetWalletInfoReply} [response] GetWalletInfoReply
         */

        /**
         * Calls GetWalletInfo.
         * @function getWalletInfo
         * @memberof pbwallet.WalletAdmin
         * @instance
         * @param {pbwallet.IGetWalletInfoArgs} request GetWalletInfoArgs message or plain object
         * @param {pbwallet.WalletAdmin.GetWalletInfoCallback} callback Node-style callback called with the error, if any, and GetWalletInfoReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalletAdmin.prototype.getWalletInfo = function getWalletInfo(request, callback) {
            return this.rpcCall(getWalletInfo, $root.pbwallet.GetWalletInfoArgs, $root.pbwallet.GetWalletInfoReply, request, callback);
        }, "name", { value: "GetWalletInfo" });

        /**
         * Calls GetWalletInfo.
         * @function getWalletInfo
         * @memberof pbwallet.WalletAdmin
         * @instance
         * @param {pbwallet.IGetWalletInfoArgs} request GetWalletInfoArgs message or plain object
         * @returns {Promise<pbwallet.GetWalletInfoReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbwallet.WalletAdmin#findWalletList}.
         * @memberof pbwallet.WalletAdmin
         * @typedef FindWalletListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbwallet.FindWalletListReply} [response] FindWalletListReply
         */

        /**
         * Calls FindWalletList.
         * @function findWalletList
         * @memberof pbwallet.WalletAdmin
         * @instance
         * @param {pbwallet.IFindWalletListArgs} request FindWalletListArgs message or plain object
         * @param {pbwallet.WalletAdmin.FindWalletListCallback} callback Node-style callback called with the error, if any, and FindWalletListReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalletAdmin.prototype.findWalletList = function findWalletList(request, callback) {
            return this.rpcCall(findWalletList, $root.pbwallet.FindWalletListArgs, $root.pbwallet.FindWalletListReply, request, callback);
        }, "name", { value: "FindWalletList" });

        /**
         * Calls FindWalletList.
         * @function findWalletList
         * @memberof pbwallet.WalletAdmin
         * @instance
         * @param {pbwallet.IFindWalletListArgs} request FindWalletListArgs message or plain object
         * @returns {Promise<pbwallet.FindWalletListReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbwallet.WalletAdmin#addBalance}.
         * @memberof pbwallet.WalletAdmin
         * @typedef AddBalanceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbwallet.AddBalanceReply} [response] AddBalanceReply
         */

        /**
         * Calls AddBalance.
         * @function addBalance
         * @memberof pbwallet.WalletAdmin
         * @instance
         * @param {pbwallet.IAddBalanceArgs} request AddBalanceArgs message or plain object
         * @param {pbwallet.WalletAdmin.AddBalanceCallback} callback Node-style callback called with the error, if any, and AddBalanceReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalletAdmin.prototype.addBalance = function addBalance(request, callback) {
            return this.rpcCall(addBalance, $root.pbwallet.AddBalanceArgs, $root.pbwallet.AddBalanceReply, request, callback);
        }, "name", { value: "AddBalance" });

        /**
         * Calls AddBalance.
         * @function addBalance
         * @memberof pbwallet.WalletAdmin
         * @instance
         * @param {pbwallet.IAddBalanceArgs} request AddBalanceArgs message or plain object
         * @returns {Promise<pbwallet.AddBalanceReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbwallet.WalletAdmin#deductBalance}.
         * @memberof pbwallet.WalletAdmin
         * @typedef DeductBalanceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbwallet.DeductBalanceReply} [response] DeductBalanceReply
         */

        /**
         * Calls DeductBalance.
         * @function deductBalance
         * @memberof pbwallet.WalletAdmin
         * @instance
         * @param {pbwallet.IDeductBalanceArgs} request DeductBalanceArgs message or plain object
         * @param {pbwallet.WalletAdmin.DeductBalanceCallback} callback Node-style callback called with the error, if any, and DeductBalanceReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalletAdmin.prototype.deductBalance = function deductBalance(request, callback) {
            return this.rpcCall(deductBalance, $root.pbwallet.DeductBalanceArgs, $root.pbwallet.DeductBalanceReply, request, callback);
        }, "name", { value: "DeductBalance" });

        /**
         * Calls DeductBalance.
         * @function deductBalance
         * @memberof pbwallet.WalletAdmin
         * @instance
         * @param {pbwallet.IDeductBalanceArgs} request DeductBalanceArgs message or plain object
         * @returns {Promise<pbwallet.DeductBalanceReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbwallet.WalletAdmin#getWalletStatistics}.
         * @memberof pbwallet.WalletAdmin
         * @typedef GetWalletStatisticsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbwallet.GetWalletStatisticsReply} [response] GetWalletStatisticsReply
         */

        /**
         * Calls GetWalletStatistics.
         * @function getWalletStatistics
         * @memberof pbwallet.WalletAdmin
         * @instance
         * @param {pbwallet.IGetWalletStatisticsArgs} request GetWalletStatisticsArgs message or plain object
         * @param {pbwallet.WalletAdmin.GetWalletStatisticsCallback} callback Node-style callback called with the error, if any, and GetWalletStatisticsReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WalletAdmin.prototype.getWalletStatistics = function getWalletStatistics(request, callback) {
            return this.rpcCall(getWalletStatistics, $root.pbwallet.GetWalletStatisticsArgs, $root.pbwallet.GetWalletStatisticsReply, request, callback);
        }, "name", { value: "GetWalletStatistics" });

        /**
         * Calls GetWalletStatistics.
         * @function getWalletStatistics
         * @memberof pbwallet.WalletAdmin
         * @instance
         * @param {pbwallet.IGetWalletStatisticsArgs} request GetWalletStatisticsArgs message or plain object
         * @returns {Promise<pbwallet.GetWalletStatisticsReply>} Promise
         * @variation 2
         */

        return WalletAdmin;
    })();

    return pbwallet;
})();

module.exports = $root;
