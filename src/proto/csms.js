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

$root.pbCsms = (function() {

    /**
     * Namespace pbCsms.
     * @exports pbCsms
     * @namespace
     */
    var pbCsms = {};

    pbCsms.RepairOrder = (function() {

        /**
         * Properties of a RepairOrder.
         * @memberof pbCsms
         * @interface IRepairOrder
         * @property {number|Long|null} [id] RepairOrder id
         * @property {string|null} [createdAt] RepairOrder createdAt
         * @property {string|null} [updatedAt] RepairOrder updatedAt
         * @property {string|null} [orderNo] RepairOrder orderNo
         * @property {string|null} [deviceName] RepairOrder deviceName
         * @property {string|null} [deviceCode] RepairOrder deviceCode
         * @property {string|null} [location] RepairOrder location
         * @property {string|null} [reporter] RepairOrder reporter
         * @property {string|null} [reporterPhone] RepairOrder reporterPhone
         * @property {string|null} [problem] RepairOrder problem
         * @property {string|null} [images] RepairOrder images
         * @property {number|null} [urgency] RepairOrder urgency
         * @property {number|null} [status] RepairOrder status
         * @property {string|null} [technician] RepairOrder technician
         * @property {string|null} [technicianPhone] RepairOrder technicianPhone
         * @property {string|null} [acceptedAt] RepairOrder acceptedAt
         * @property {string|null} [completedAt] RepairOrder completedAt
         * @property {string|null} [remark] RepairOrder remark
         */

        /**
         * Constructs a new RepairOrder.
         * @memberof pbCsms
         * @classdesc Represents a RepairOrder.
         * @implements IRepairOrder
         * @constructor
         * @param {pbCsms.IRepairOrder=} [properties] Properties to set
         */
        function RepairOrder(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RepairOrder id.
         * @member {number|Long} id
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RepairOrder createdAt.
         * @member {string} createdAt
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.createdAt = "";

        /**
         * RepairOrder updatedAt.
         * @member {string} updatedAt
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.updatedAt = "";

        /**
         * RepairOrder orderNo.
         * @member {string} orderNo
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.orderNo = "";

        /**
         * RepairOrder deviceName.
         * @member {string} deviceName
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.deviceName = "";

        /**
         * RepairOrder deviceCode.
         * @member {string} deviceCode
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.deviceCode = "";

        /**
         * RepairOrder location.
         * @member {string} location
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.location = "";

        /**
         * RepairOrder reporter.
         * @member {string} reporter
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.reporter = "";

        /**
         * RepairOrder reporterPhone.
         * @member {string} reporterPhone
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.reporterPhone = "";

        /**
         * RepairOrder problem.
         * @member {string} problem
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.problem = "";

        /**
         * RepairOrder images.
         * @member {string} images
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.images = "";

        /**
         * RepairOrder urgency.
         * @member {number} urgency
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.urgency = 0;

        /**
         * RepairOrder status.
         * @member {number} status
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.status = 0;

        /**
         * RepairOrder technician.
         * @member {string} technician
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.technician = "";

        /**
         * RepairOrder technicianPhone.
         * @member {string} technicianPhone
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.technicianPhone = "";

        /**
         * RepairOrder acceptedAt.
         * @member {string} acceptedAt
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.acceptedAt = "";

        /**
         * RepairOrder completedAt.
         * @member {string} completedAt
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.completedAt = "";

        /**
         * RepairOrder remark.
         * @member {string} remark
         * @memberof pbCsms.RepairOrder
         * @instance
         */
        RepairOrder.prototype.remark = "";

        /**
         * Creates a new RepairOrder instance using the specified properties.
         * @function create
         * @memberof pbCsms.RepairOrder
         * @static
         * @param {pbCsms.IRepairOrder=} [properties] Properties to set
         * @returns {pbCsms.RepairOrder} RepairOrder instance
         */
        RepairOrder.create = function create(properties) {
            return new RepairOrder(properties);
        };

        /**
         * Encodes the specified RepairOrder message. Does not implicitly {@link pbCsms.RepairOrder.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.RepairOrder
         * @static
         * @param {pbCsms.IRepairOrder} message RepairOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepairOrder.encode = function encode(message, writer) {
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
            if (message.deviceName != null && Object.hasOwnProperty.call(message, "deviceName"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.deviceName);
            if (message.deviceCode != null && Object.hasOwnProperty.call(message, "deviceCode"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.deviceCode);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.location);
            if (message.reporter != null && Object.hasOwnProperty.call(message, "reporter"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.reporter);
            if (message.reporterPhone != null && Object.hasOwnProperty.call(message, "reporterPhone"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.reporterPhone);
            if (message.problem != null && Object.hasOwnProperty.call(message, "problem"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.problem);
            if (message.images != null && Object.hasOwnProperty.call(message, "images"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.images);
            if (message.urgency != null && Object.hasOwnProperty.call(message, "urgency"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.urgency);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.status);
            if (message.technician != null && Object.hasOwnProperty.call(message, "technician"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.technician);
            if (message.technicianPhone != null && Object.hasOwnProperty.call(message, "technicianPhone"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.technicianPhone);
            if (message.acceptedAt != null && Object.hasOwnProperty.call(message, "acceptedAt"))
                writer.uint32(/* id 22, wireType 2 =*/178).string(message.acceptedAt);
            if (message.completedAt != null && Object.hasOwnProperty.call(message, "completedAt"))
                writer.uint32(/* id 23, wireType 2 =*/186).string(message.completedAt);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified RepairOrder message, length delimited. Does not implicitly {@link pbCsms.RepairOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.RepairOrder
         * @static
         * @param {pbCsms.IRepairOrder} message RepairOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepairOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RepairOrder message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.RepairOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.RepairOrder} RepairOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepairOrder.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.RepairOrder();
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
                        message.deviceName = reader.string();
                        break;
                    }
                case 12: {
                        message.deviceCode = reader.string();
                        break;
                    }
                case 13: {
                        message.location = reader.string();
                        break;
                    }
                case 14: {
                        message.reporter = reader.string();
                        break;
                    }
                case 15: {
                        message.reporterPhone = reader.string();
                        break;
                    }
                case 16: {
                        message.problem = reader.string();
                        break;
                    }
                case 17: {
                        message.images = reader.string();
                        break;
                    }
                case 18: {
                        message.urgency = reader.int32();
                        break;
                    }
                case 19: {
                        message.status = reader.int32();
                        break;
                    }
                case 20: {
                        message.technician = reader.string();
                        break;
                    }
                case 21: {
                        message.technicianPhone = reader.string();
                        break;
                    }
                case 22: {
                        message.acceptedAt = reader.string();
                        break;
                    }
                case 23: {
                        message.completedAt = reader.string();
                        break;
                    }
                case 24: {
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
         * Decodes a RepairOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.RepairOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.RepairOrder} RepairOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepairOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RepairOrder message.
         * @function verify
         * @memberof pbCsms.RepairOrder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RepairOrder.verify = function verify(message) {
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
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                if (!$util.isString(message.deviceName))
                    return "deviceName: string expected";
            if (message.deviceCode != null && message.hasOwnProperty("deviceCode"))
                if (!$util.isString(message.deviceCode))
                    return "deviceCode: string expected";
            if (message.location != null && message.hasOwnProperty("location"))
                if (!$util.isString(message.location))
                    return "location: string expected";
            if (message.reporter != null && message.hasOwnProperty("reporter"))
                if (!$util.isString(message.reporter))
                    return "reporter: string expected";
            if (message.reporterPhone != null && message.hasOwnProperty("reporterPhone"))
                if (!$util.isString(message.reporterPhone))
                    return "reporterPhone: string expected";
            if (message.problem != null && message.hasOwnProperty("problem"))
                if (!$util.isString(message.problem))
                    return "problem: string expected";
            if (message.images != null && message.hasOwnProperty("images"))
                if (!$util.isString(message.images))
                    return "images: string expected";
            if (message.urgency != null && message.hasOwnProperty("urgency"))
                if (!$util.isInteger(message.urgency))
                    return "urgency: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.technician != null && message.hasOwnProperty("technician"))
                if (!$util.isString(message.technician))
                    return "technician: string expected";
            if (message.technicianPhone != null && message.hasOwnProperty("technicianPhone"))
                if (!$util.isString(message.technicianPhone))
                    return "technicianPhone: string expected";
            if (message.acceptedAt != null && message.hasOwnProperty("acceptedAt"))
                if (!$util.isString(message.acceptedAt))
                    return "acceptedAt: string expected";
            if (message.completedAt != null && message.hasOwnProperty("completedAt"))
                if (!$util.isString(message.completedAt))
                    return "completedAt: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a RepairOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.RepairOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.RepairOrder} RepairOrder
         */
        RepairOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.RepairOrder)
                return object;
            var message = new $root.pbCsms.RepairOrder();
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
            if (object.deviceName != null)
                message.deviceName = String(object.deviceName);
            if (object.deviceCode != null)
                message.deviceCode = String(object.deviceCode);
            if (object.location != null)
                message.location = String(object.location);
            if (object.reporter != null)
                message.reporter = String(object.reporter);
            if (object.reporterPhone != null)
                message.reporterPhone = String(object.reporterPhone);
            if (object.problem != null)
                message.problem = String(object.problem);
            if (object.images != null)
                message.images = String(object.images);
            if (object.urgency != null)
                message.urgency = object.urgency | 0;
            if (object.status != null)
                message.status = object.status | 0;
            if (object.technician != null)
                message.technician = String(object.technician);
            if (object.technicianPhone != null)
                message.technicianPhone = String(object.technicianPhone);
            if (object.acceptedAt != null)
                message.acceptedAt = String(object.acceptedAt);
            if (object.completedAt != null)
                message.completedAt = String(object.completedAt);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a RepairOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.RepairOrder
         * @static
         * @param {pbCsms.RepairOrder} message RepairOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RepairOrder.toObject = function toObject(message, options) {
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
                object.deviceName = "";
                object.deviceCode = "";
                object.location = "";
                object.reporter = "";
                object.reporterPhone = "";
                object.problem = "";
                object.images = "";
                object.urgency = 0;
                object.status = 0;
                object.technician = "";
                object.technicianPhone = "";
                object.acceptedAt = "";
                object.completedAt = "";
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
            if (message.orderNo != null && message.hasOwnProperty("orderNo"))
                object.orderNo = message.orderNo;
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                object.deviceName = message.deviceName;
            if (message.deviceCode != null && message.hasOwnProperty("deviceCode"))
                object.deviceCode = message.deviceCode;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = message.location;
            if (message.reporter != null && message.hasOwnProperty("reporter"))
                object.reporter = message.reporter;
            if (message.reporterPhone != null && message.hasOwnProperty("reporterPhone"))
                object.reporterPhone = message.reporterPhone;
            if (message.problem != null && message.hasOwnProperty("problem"))
                object.problem = message.problem;
            if (message.images != null && message.hasOwnProperty("images"))
                object.images = message.images;
            if (message.urgency != null && message.hasOwnProperty("urgency"))
                object.urgency = message.urgency;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.technician != null && message.hasOwnProperty("technician"))
                object.technician = message.technician;
            if (message.technicianPhone != null && message.hasOwnProperty("technicianPhone"))
                object.technicianPhone = message.technicianPhone;
            if (message.acceptedAt != null && message.hasOwnProperty("acceptedAt"))
                object.acceptedAt = message.acceptedAt;
            if (message.completedAt != null && message.hasOwnProperty("completedAt"))
                object.completedAt = message.completedAt;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this RepairOrder to JSON.
         * @function toJSON
         * @memberof pbCsms.RepairOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RepairOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RepairOrder
         * @function getTypeUrl
         * @memberof pbCsms.RepairOrder
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RepairOrder.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.RepairOrder";
        };

        return RepairOrder;
    })();

    pbCsms.RepairRecord = (function() {

        /**
         * Properties of a RepairRecord.
         * @memberof pbCsms
         * @interface IRepairRecord
         * @property {number|Long|null} [id] RepairRecord id
         * @property {string|null} [createdAt] RepairRecord createdAt
         * @property {number|Long|null} [repairOrderId] RepairRecord repairOrderId
         * @property {string|null} [operatorId] RepairRecord operatorId
         * @property {string|null} [operatorName] RepairRecord operatorName
         * @property {number|null} [action] RepairRecord action
         * @property {string|null} [content] RepairRecord content
         * @property {string|null} [images] RepairRecord images
         * @property {string|null} [remark] RepairRecord remark
         */

        /**
         * Constructs a new RepairRecord.
         * @memberof pbCsms
         * @classdesc Represents a RepairRecord.
         * @implements IRepairRecord
         * @constructor
         * @param {pbCsms.IRepairRecord=} [properties] Properties to set
         */
        function RepairRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RepairRecord id.
         * @member {number|Long} id
         * @memberof pbCsms.RepairRecord
         * @instance
         */
        RepairRecord.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RepairRecord createdAt.
         * @member {string} createdAt
         * @memberof pbCsms.RepairRecord
         * @instance
         */
        RepairRecord.prototype.createdAt = "";

        /**
         * RepairRecord repairOrderId.
         * @member {number|Long} repairOrderId
         * @memberof pbCsms.RepairRecord
         * @instance
         */
        RepairRecord.prototype.repairOrderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RepairRecord operatorId.
         * @member {string} operatorId
         * @memberof pbCsms.RepairRecord
         * @instance
         */
        RepairRecord.prototype.operatorId = "";

        /**
         * RepairRecord operatorName.
         * @member {string} operatorName
         * @memberof pbCsms.RepairRecord
         * @instance
         */
        RepairRecord.prototype.operatorName = "";

        /**
         * RepairRecord action.
         * @member {number} action
         * @memberof pbCsms.RepairRecord
         * @instance
         */
        RepairRecord.prototype.action = 0;

        /**
         * RepairRecord content.
         * @member {string} content
         * @memberof pbCsms.RepairRecord
         * @instance
         */
        RepairRecord.prototype.content = "";

        /**
         * RepairRecord images.
         * @member {string} images
         * @memberof pbCsms.RepairRecord
         * @instance
         */
        RepairRecord.prototype.images = "";

        /**
         * RepairRecord remark.
         * @member {string} remark
         * @memberof pbCsms.RepairRecord
         * @instance
         */
        RepairRecord.prototype.remark = "";

        /**
         * Creates a new RepairRecord instance using the specified properties.
         * @function create
         * @memberof pbCsms.RepairRecord
         * @static
         * @param {pbCsms.IRepairRecord=} [properties] Properties to set
         * @returns {pbCsms.RepairRecord} RepairRecord instance
         */
        RepairRecord.create = function create(properties) {
            return new RepairRecord(properties);
        };

        /**
         * Encodes the specified RepairRecord message. Does not implicitly {@link pbCsms.RepairRecord.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.RepairRecord
         * @static
         * @param {pbCsms.IRepairRecord} message RepairRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepairRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.repairOrderId != null && Object.hasOwnProperty.call(message, "repairOrderId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.repairOrderId);
            if (message.operatorId != null && Object.hasOwnProperty.call(message, "operatorId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.operatorId);
            if (message.operatorName != null && Object.hasOwnProperty.call(message, "operatorName"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.operatorName);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.action);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.content);
            if (message.images != null && Object.hasOwnProperty.call(message, "images"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.images);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified RepairRecord message, length delimited. Does not implicitly {@link pbCsms.RepairRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.RepairRecord
         * @static
         * @param {pbCsms.IRepairRecord} message RepairRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RepairRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RepairRecord message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.RepairRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.RepairRecord} RepairRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepairRecord.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.RepairRecord();
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
                        message.repairOrderId = reader.int64();
                        break;
                    }
                case 11: {
                        message.operatorId = reader.string();
                        break;
                    }
                case 12: {
                        message.operatorName = reader.string();
                        break;
                    }
                case 13: {
                        message.action = reader.int32();
                        break;
                    }
                case 14: {
                        message.content = reader.string();
                        break;
                    }
                case 15: {
                        message.images = reader.string();
                        break;
                    }
                case 16: {
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
         * Decodes a RepairRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.RepairRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.RepairRecord} RepairRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RepairRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RepairRecord message.
         * @function verify
         * @memberof pbCsms.RepairRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RepairRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.repairOrderId != null && message.hasOwnProperty("repairOrderId"))
                if (!$util.isInteger(message.repairOrderId) && !(message.repairOrderId && $util.isInteger(message.repairOrderId.low) && $util.isInteger(message.repairOrderId.high)))
                    return "repairOrderId: integer|Long expected";
            if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                if (!$util.isString(message.operatorId))
                    return "operatorId: string expected";
            if (message.operatorName != null && message.hasOwnProperty("operatorName"))
                if (!$util.isString(message.operatorName))
                    return "operatorName: string expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isInteger(message.action))
                    return "action: integer expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            if (message.images != null && message.hasOwnProperty("images"))
                if (!$util.isString(message.images))
                    return "images: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a RepairRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.RepairRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.RepairRecord} RepairRecord
         */
        RepairRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.RepairRecord)
                return object;
            var message = new $root.pbCsms.RepairRecord();
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
            if (object.repairOrderId != null)
                if ($util.Long)
                    (message.repairOrderId = $util.Long.fromValue(object.repairOrderId)).unsigned = false;
                else if (typeof object.repairOrderId === "string")
                    message.repairOrderId = parseInt(object.repairOrderId, 10);
                else if (typeof object.repairOrderId === "number")
                    message.repairOrderId = object.repairOrderId;
                else if (typeof object.repairOrderId === "object")
                    message.repairOrderId = new $util.LongBits(object.repairOrderId.low >>> 0, object.repairOrderId.high >>> 0).toNumber();
            if (object.operatorId != null)
                message.operatorId = String(object.operatorId);
            if (object.operatorName != null)
                message.operatorName = String(object.operatorName);
            if (object.action != null)
                message.action = object.action | 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.images != null)
                message.images = String(object.images);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a RepairRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.RepairRecord
         * @static
         * @param {pbCsms.RepairRecord} message RepairRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RepairRecord.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.repairOrderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.repairOrderId = options.longs === String ? "0" : 0;
                object.operatorId = "";
                object.operatorName = "";
                object.action = 0;
                object.content = "";
                object.images = "";
                object.remark = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.repairOrderId != null && message.hasOwnProperty("repairOrderId"))
                if (typeof message.repairOrderId === "number")
                    object.repairOrderId = options.longs === String ? String(message.repairOrderId) : message.repairOrderId;
                else
                    object.repairOrderId = options.longs === String ? $util.Long.prototype.toString.call(message.repairOrderId) : options.longs === Number ? new $util.LongBits(message.repairOrderId.low >>> 0, message.repairOrderId.high >>> 0).toNumber() : message.repairOrderId;
            if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                object.operatorId = message.operatorId;
            if (message.operatorName != null && message.hasOwnProperty("operatorName"))
                object.operatorName = message.operatorName;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.images != null && message.hasOwnProperty("images"))
                object.images = message.images;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this RepairRecord to JSON.
         * @function toJSON
         * @memberof pbCsms.RepairRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RepairRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RepairRecord
         * @function getTypeUrl
         * @memberof pbCsms.RepairRecord
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RepairRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.RepairRecord";
        };

        return RepairRecord;
    })();

    pbCsms.SparePartUsage = (function() {

        /**
         * Properties of a SparePartUsage.
         * @memberof pbCsms
         * @interface ISparePartUsage
         * @property {number|Long|null} [id] SparePartUsage id
         * @property {string|null} [createdAt] SparePartUsage createdAt
         * @property {number|Long|null} [repairOrderId] SparePartUsage repairOrderId
         * @property {string|null} [partSkuId] SparePartUsage partSkuId
         * @property {string|null} [partName] SparePartUsage partName
         * @property {number|null} [quantity] SparePartUsage quantity
         * @property {string|null} [operatorId] SparePartUsage operatorId
         * @property {string|null} [operatorName] SparePartUsage operatorName
         */

        /**
         * Constructs a new SparePartUsage.
         * @memberof pbCsms
         * @classdesc Represents a SparePartUsage.
         * @implements ISparePartUsage
         * @constructor
         * @param {pbCsms.ISparePartUsage=} [properties] Properties to set
         */
        function SparePartUsage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SparePartUsage id.
         * @member {number|Long} id
         * @memberof pbCsms.SparePartUsage
         * @instance
         */
        SparePartUsage.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SparePartUsage createdAt.
         * @member {string} createdAt
         * @memberof pbCsms.SparePartUsage
         * @instance
         */
        SparePartUsage.prototype.createdAt = "";

        /**
         * SparePartUsage repairOrderId.
         * @member {number|Long} repairOrderId
         * @memberof pbCsms.SparePartUsage
         * @instance
         */
        SparePartUsage.prototype.repairOrderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SparePartUsage partSkuId.
         * @member {string} partSkuId
         * @memberof pbCsms.SparePartUsage
         * @instance
         */
        SparePartUsage.prototype.partSkuId = "";

        /**
         * SparePartUsage partName.
         * @member {string} partName
         * @memberof pbCsms.SparePartUsage
         * @instance
         */
        SparePartUsage.prototype.partName = "";

        /**
         * SparePartUsage quantity.
         * @member {number} quantity
         * @memberof pbCsms.SparePartUsage
         * @instance
         */
        SparePartUsage.prototype.quantity = 0;

        /**
         * SparePartUsage operatorId.
         * @member {string} operatorId
         * @memberof pbCsms.SparePartUsage
         * @instance
         */
        SparePartUsage.prototype.operatorId = "";

        /**
         * SparePartUsage operatorName.
         * @member {string} operatorName
         * @memberof pbCsms.SparePartUsage
         * @instance
         */
        SparePartUsage.prototype.operatorName = "";

        /**
         * Creates a new SparePartUsage instance using the specified properties.
         * @function create
         * @memberof pbCsms.SparePartUsage
         * @static
         * @param {pbCsms.ISparePartUsage=} [properties] Properties to set
         * @returns {pbCsms.SparePartUsage} SparePartUsage instance
         */
        SparePartUsage.create = function create(properties) {
            return new SparePartUsage(properties);
        };

        /**
         * Encodes the specified SparePartUsage message. Does not implicitly {@link pbCsms.SparePartUsage.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.SparePartUsage
         * @static
         * @param {pbCsms.ISparePartUsage} message SparePartUsage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SparePartUsage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.repairOrderId != null && Object.hasOwnProperty.call(message, "repairOrderId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.repairOrderId);
            if (message.partSkuId != null && Object.hasOwnProperty.call(message, "partSkuId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.partSkuId);
            if (message.partName != null && Object.hasOwnProperty.call(message, "partName"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.partName);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.quantity);
            if (message.operatorId != null && Object.hasOwnProperty.call(message, "operatorId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.operatorId);
            if (message.operatorName != null && Object.hasOwnProperty.call(message, "operatorName"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.operatorName);
            return writer;
        };

        /**
         * Encodes the specified SparePartUsage message, length delimited. Does not implicitly {@link pbCsms.SparePartUsage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.SparePartUsage
         * @static
         * @param {pbCsms.ISparePartUsage} message SparePartUsage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SparePartUsage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SparePartUsage message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.SparePartUsage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.SparePartUsage} SparePartUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SparePartUsage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.SparePartUsage();
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
                        message.repairOrderId = reader.int64();
                        break;
                    }
                case 11: {
                        message.partSkuId = reader.string();
                        break;
                    }
                case 12: {
                        message.partName = reader.string();
                        break;
                    }
                case 13: {
                        message.quantity = reader.int32();
                        break;
                    }
                case 14: {
                        message.operatorId = reader.string();
                        break;
                    }
                case 15: {
                        message.operatorName = reader.string();
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
         * Decodes a SparePartUsage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.SparePartUsage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.SparePartUsage} SparePartUsage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SparePartUsage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SparePartUsage message.
         * @function verify
         * @memberof pbCsms.SparePartUsage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SparePartUsage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.repairOrderId != null && message.hasOwnProperty("repairOrderId"))
                if (!$util.isInteger(message.repairOrderId) && !(message.repairOrderId && $util.isInteger(message.repairOrderId.low) && $util.isInteger(message.repairOrderId.high)))
                    return "repairOrderId: integer|Long expected";
            if (message.partSkuId != null && message.hasOwnProperty("partSkuId"))
                if (!$util.isString(message.partSkuId))
                    return "partSkuId: string expected";
            if (message.partName != null && message.hasOwnProperty("partName"))
                if (!$util.isString(message.partName))
                    return "partName: string expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                if (!$util.isString(message.operatorId))
                    return "operatorId: string expected";
            if (message.operatorName != null && message.hasOwnProperty("operatorName"))
                if (!$util.isString(message.operatorName))
                    return "operatorName: string expected";
            return null;
        };

        /**
         * Creates a SparePartUsage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.SparePartUsage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.SparePartUsage} SparePartUsage
         */
        SparePartUsage.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.SparePartUsage)
                return object;
            var message = new $root.pbCsms.SparePartUsage();
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
            if (object.repairOrderId != null)
                if ($util.Long)
                    (message.repairOrderId = $util.Long.fromValue(object.repairOrderId)).unsigned = false;
                else if (typeof object.repairOrderId === "string")
                    message.repairOrderId = parseInt(object.repairOrderId, 10);
                else if (typeof object.repairOrderId === "number")
                    message.repairOrderId = object.repairOrderId;
                else if (typeof object.repairOrderId === "object")
                    message.repairOrderId = new $util.LongBits(object.repairOrderId.low >>> 0, object.repairOrderId.high >>> 0).toNumber();
            if (object.partSkuId != null)
                message.partSkuId = String(object.partSkuId);
            if (object.partName != null)
                message.partName = String(object.partName);
            if (object.quantity != null)
                message.quantity = object.quantity | 0;
            if (object.operatorId != null)
                message.operatorId = String(object.operatorId);
            if (object.operatorName != null)
                message.operatorName = String(object.operatorName);
            return message;
        };

        /**
         * Creates a plain object from a SparePartUsage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.SparePartUsage
         * @static
         * @param {pbCsms.SparePartUsage} message SparePartUsage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SparePartUsage.toObject = function toObject(message, options) {
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
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.repairOrderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.repairOrderId = options.longs === String ? "0" : 0;
                object.partSkuId = "";
                object.partName = "";
                object.quantity = 0;
                object.operatorId = "";
                object.operatorName = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.repairOrderId != null && message.hasOwnProperty("repairOrderId"))
                if (typeof message.repairOrderId === "number")
                    object.repairOrderId = options.longs === String ? String(message.repairOrderId) : message.repairOrderId;
                else
                    object.repairOrderId = options.longs === String ? $util.Long.prototype.toString.call(message.repairOrderId) : options.longs === Number ? new $util.LongBits(message.repairOrderId.low >>> 0, message.repairOrderId.high >>> 0).toNumber() : message.repairOrderId;
            if (message.partSkuId != null && message.hasOwnProperty("partSkuId"))
                object.partSkuId = message.partSkuId;
            if (message.partName != null && message.hasOwnProperty("partName"))
                object.partName = message.partName;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                object.operatorId = message.operatorId;
            if (message.operatorName != null && message.hasOwnProperty("operatorName"))
                object.operatorName = message.operatorName;
            return object;
        };

        /**
         * Converts this SparePartUsage to JSON.
         * @function toJSON
         * @memberof pbCsms.SparePartUsage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SparePartUsage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SparePartUsage
         * @function getTypeUrl
         * @memberof pbCsms.SparePartUsage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SparePartUsage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.SparePartUsage";
        };

        return SparePartUsage;
    })();

    pbCsms.CsmsService = (function() {

        /**
         * Constructs a new CsmsService service.
         * @memberof pbCsms
         * @classdesc Represents a CsmsService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function CsmsService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (CsmsService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = CsmsService;

        /**
         * Creates new CsmsService service using the specified rpc implementation.
         * @function create
         * @memberof pbCsms.CsmsService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {CsmsService} RPC service. Useful where requests and/or responses are streamed.
         */
        CsmsService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbCsms.CsmsService#createRepairOrder}.
         * @memberof pbCsms.CsmsService
         * @typedef CreateRepairOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CreateRepairOrder.
         * @function createRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.ICreateRepairOrderArgs} request CreateRepairOrderArgs message or plain object
         * @param {pbCsms.CsmsService.CreateRepairOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.createRepairOrder = function createRepairOrder(request, callback) {
            return this.rpcCall(createRepairOrder, $root.pbCsms.CreateRepairOrderArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateRepairOrder" });

        /**
         * Calls CreateRepairOrder.
         * @function createRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.ICreateRepairOrderArgs} request CreateRepairOrderArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#updateRepairOrder}.
         * @memberof pbCsms.CsmsService
         * @typedef UpdateRepairOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls UpdateRepairOrder.
         * @function updateRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IRepairOrder} request RepairOrder message or plain object
         * @param {pbCsms.CsmsService.UpdateRepairOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.updateRepairOrder = function updateRepairOrder(request, callback) {
            return this.rpcCall(updateRepairOrder, $root.pbCsms.RepairOrder, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateRepairOrder" });

        /**
         * Calls UpdateRepairOrder.
         * @function updateRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IRepairOrder} request RepairOrder message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#deleteRepairOrder}.
         * @memberof pbCsms.CsmsService
         * @typedef DeleteRepairOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls DeleteRepairOrder.
         * @function deleteRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbCsms.CsmsService.DeleteRepairOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.deleteRepairOrder = function deleteRepairOrder(request, callback) {
            return this.rpcCall(deleteRepairOrder, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteRepairOrder" });

        /**
         * Calls DeleteRepairOrder.
         * @function deleteRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#findRepairOrderById}.
         * @memberof pbCsms.CsmsService
         * @typedef FindRepairOrderByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbCsms.FindRepairOrderReply} [response] FindRepairOrderReply
         */

        /**
         * Calls FindRepairOrderById.
         * @function findRepairOrderById
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbCsms.CsmsService.FindRepairOrderByIdCallback} callback Node-style callback called with the error, if any, and FindRepairOrderReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.findRepairOrderById = function findRepairOrderById(request, callback) {
            return this.rpcCall(findRepairOrderById, $root.pbcommon.IdArgs, $root.pbCsms.FindRepairOrderReply, request, callback);
        }, "name", { value: "FindRepairOrderById" });

        /**
         * Calls FindRepairOrderById.
         * @function findRepairOrderById
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbCsms.FindRepairOrderReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#findRepairOrderList}.
         * @memberof pbCsms.CsmsService
         * @typedef FindRepairOrderListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbCsms.FindRepairOrderReply} [response] FindRepairOrderReply
         */

        /**
         * Calls FindRepairOrderList.
         * @function findRepairOrderList
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IFindRepairOrderArgs} request FindRepairOrderArgs message or plain object
         * @param {pbCsms.CsmsService.FindRepairOrderListCallback} callback Node-style callback called with the error, if any, and FindRepairOrderReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.findRepairOrderList = function findRepairOrderList(request, callback) {
            return this.rpcCall(findRepairOrderList, $root.pbCsms.FindRepairOrderArgs, $root.pbCsms.FindRepairOrderReply, request, callback);
        }, "name", { value: "FindRepairOrderList" });

        /**
         * Calls FindRepairOrderList.
         * @function findRepairOrderList
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IFindRepairOrderArgs} request FindRepairOrderArgs message or plain object
         * @returns {Promise<pbCsms.FindRepairOrderReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#acceptRepairOrder}.
         * @memberof pbCsms.CsmsService
         * @typedef AcceptRepairOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls AcceptRepairOrder.
         * @function acceptRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IAcceptRepairOrderArgs} request AcceptRepairOrderArgs message or plain object
         * @param {pbCsms.CsmsService.AcceptRepairOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.acceptRepairOrder = function acceptRepairOrder(request, callback) {
            return this.rpcCall(acceptRepairOrder, $root.pbCsms.AcceptRepairOrderArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "AcceptRepairOrder" });

        /**
         * Calls AcceptRepairOrder.
         * @function acceptRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IAcceptRepairOrderArgs} request AcceptRepairOrderArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#assignRepairOrder}.
         * @memberof pbCsms.CsmsService
         * @typedef AssignRepairOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls AssignRepairOrder.
         * @function assignRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IAssignRepairOrderArgs} request AssignRepairOrderArgs message or plain object
         * @param {pbCsms.CsmsService.AssignRepairOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.assignRepairOrder = function assignRepairOrder(request, callback) {
            return this.rpcCall(assignRepairOrder, $root.pbCsms.AssignRepairOrderArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "AssignRepairOrder" });

        /**
         * Calls AssignRepairOrder.
         * @function assignRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IAssignRepairOrderArgs} request AssignRepairOrderArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#startRepair}.
         * @memberof pbCsms.CsmsService
         * @typedef StartRepairCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls StartRepair.
         * @function startRepair
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbCsms.CsmsService.StartRepairCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.startRepair = function startRepair(request, callback) {
            return this.rpcCall(startRepair, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "StartRepair" });

        /**
         * Calls StartRepair.
         * @function startRepair
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#completeRepair}.
         * @memberof pbCsms.CsmsService
         * @typedef CompleteRepairCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CompleteRepair.
         * @function completeRepair
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.ICompleteRepairOrderArgs} request CompleteRepairOrderArgs message or plain object
         * @param {pbCsms.CsmsService.CompleteRepairCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.completeRepair = function completeRepair(request, callback) {
            return this.rpcCall(completeRepair, $root.pbCsms.CompleteRepairOrderArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CompleteRepair" });

        /**
         * Calls CompleteRepair.
         * @function completeRepair
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.ICompleteRepairOrderArgs} request CompleteRepairOrderArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#cancelRepairOrder}.
         * @memberof pbCsms.CsmsService
         * @typedef CancelRepairOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CancelRepairOrder.
         * @function cancelRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbCsms.CsmsService.CancelRepairOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.cancelRepairOrder = function cancelRepairOrder(request, callback) {
            return this.rpcCall(cancelRepairOrder, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CancelRepairOrder" });

        /**
         * Calls CancelRepairOrder.
         * @function cancelRepairOrder
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#findRepairRecordList}.
         * @memberof pbCsms.CsmsService
         * @typedef FindRepairRecordListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbCsms.FindRepairRecordReply} [response] FindRepairRecordReply
         */

        /**
         * Calls FindRepairRecordList.
         * @function findRepairRecordList
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IFindRepairRecordArgs} request FindRepairRecordArgs message or plain object
         * @param {pbCsms.CsmsService.FindRepairRecordListCallback} callback Node-style callback called with the error, if any, and FindRepairRecordReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.findRepairRecordList = function findRepairRecordList(request, callback) {
            return this.rpcCall(findRepairRecordList, $root.pbCsms.FindRepairRecordArgs, $root.pbCsms.FindRepairRecordReply, request, callback);
        }, "name", { value: "FindRepairRecordList" });

        /**
         * Calls FindRepairRecordList.
         * @function findRepairRecordList
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IFindRepairRecordArgs} request FindRepairRecordArgs message or plain object
         * @returns {Promise<pbCsms.FindRepairRecordReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#useSparePart}.
         * @memberof pbCsms.CsmsService
         * @typedef UseSparePartCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls UseSparePart.
         * @function useSparePart
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IUseSparePartArgs} request UseSparePartArgs message or plain object
         * @param {pbCsms.CsmsService.UseSparePartCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.useSparePart = function useSparePart(request, callback) {
            return this.rpcCall(useSparePart, $root.pbCsms.UseSparePartArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UseSparePart" });

        /**
         * Calls UseSparePart.
         * @function useSparePart
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IUseSparePartArgs} request UseSparePartArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbCsms.CsmsService#findSparePartUsageList}.
         * @memberof pbCsms.CsmsService
         * @typedef FindSparePartUsageListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbCsms.FindSparePartUsageReply} [response] FindSparePartUsageReply
         */

        /**
         * Calls FindSparePartUsageList.
         * @function findSparePartUsageList
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IFindSparePartUsageArgs} request FindSparePartUsageArgs message or plain object
         * @param {pbCsms.CsmsService.FindSparePartUsageListCallback} callback Node-style callback called with the error, if any, and FindSparePartUsageReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(CsmsService.prototype.findSparePartUsageList = function findSparePartUsageList(request, callback) {
            return this.rpcCall(findSparePartUsageList, $root.pbCsms.FindSparePartUsageArgs, $root.pbCsms.FindSparePartUsageReply, request, callback);
        }, "name", { value: "FindSparePartUsageList" });

        /**
         * Calls FindSparePartUsageList.
         * @function findSparePartUsageList
         * @memberof pbCsms.CsmsService
         * @instance
         * @param {pbCsms.IFindSparePartUsageArgs} request FindSparePartUsageArgs message or plain object
         * @returns {Promise<pbCsms.FindSparePartUsageReply>} Promise
         * @variation 2
         */

        return CsmsService;
    })();

    pbCsms.CreateRepairOrderArgs = (function() {

        /**
         * Properties of a CreateRepairOrderArgs.
         * @memberof pbCsms
         * @interface ICreateRepairOrderArgs
         * @property {string|null} [deviceName] CreateRepairOrderArgs deviceName
         * @property {string|null} [deviceCode] CreateRepairOrderArgs deviceCode
         * @property {string|null} [location] CreateRepairOrderArgs location
         * @property {string|null} [reporter] CreateRepairOrderArgs reporter
         * @property {string|null} [reporterPhone] CreateRepairOrderArgs reporterPhone
         * @property {string|null} [problem] CreateRepairOrderArgs problem
         * @property {string|null} [images] CreateRepairOrderArgs images
         * @property {number|null} [urgency] CreateRepairOrderArgs urgency
         */

        /**
         * Constructs a new CreateRepairOrderArgs.
         * @memberof pbCsms
         * @classdesc Represents a CreateRepairOrderArgs.
         * @implements ICreateRepairOrderArgs
         * @constructor
         * @param {pbCsms.ICreateRepairOrderArgs=} [properties] Properties to set
         */
        function CreateRepairOrderArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRepairOrderArgs deviceName.
         * @member {string} deviceName
         * @memberof pbCsms.CreateRepairOrderArgs
         * @instance
         */
        CreateRepairOrderArgs.prototype.deviceName = "";

        /**
         * CreateRepairOrderArgs deviceCode.
         * @member {string} deviceCode
         * @memberof pbCsms.CreateRepairOrderArgs
         * @instance
         */
        CreateRepairOrderArgs.prototype.deviceCode = "";

        /**
         * CreateRepairOrderArgs location.
         * @member {string} location
         * @memberof pbCsms.CreateRepairOrderArgs
         * @instance
         */
        CreateRepairOrderArgs.prototype.location = "";

        /**
         * CreateRepairOrderArgs reporter.
         * @member {string} reporter
         * @memberof pbCsms.CreateRepairOrderArgs
         * @instance
         */
        CreateRepairOrderArgs.prototype.reporter = "";

        /**
         * CreateRepairOrderArgs reporterPhone.
         * @member {string} reporterPhone
         * @memberof pbCsms.CreateRepairOrderArgs
         * @instance
         */
        CreateRepairOrderArgs.prototype.reporterPhone = "";

        /**
         * CreateRepairOrderArgs problem.
         * @member {string} problem
         * @memberof pbCsms.CreateRepairOrderArgs
         * @instance
         */
        CreateRepairOrderArgs.prototype.problem = "";

        /**
         * CreateRepairOrderArgs images.
         * @member {string} images
         * @memberof pbCsms.CreateRepairOrderArgs
         * @instance
         */
        CreateRepairOrderArgs.prototype.images = "";

        /**
         * CreateRepairOrderArgs urgency.
         * @member {number} urgency
         * @memberof pbCsms.CreateRepairOrderArgs
         * @instance
         */
        CreateRepairOrderArgs.prototype.urgency = 0;

        /**
         * Creates a new CreateRepairOrderArgs instance using the specified properties.
         * @function create
         * @memberof pbCsms.CreateRepairOrderArgs
         * @static
         * @param {pbCsms.ICreateRepairOrderArgs=} [properties] Properties to set
         * @returns {pbCsms.CreateRepairOrderArgs} CreateRepairOrderArgs instance
         */
        CreateRepairOrderArgs.create = function create(properties) {
            return new CreateRepairOrderArgs(properties);
        };

        /**
         * Encodes the specified CreateRepairOrderArgs message. Does not implicitly {@link pbCsms.CreateRepairOrderArgs.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.CreateRepairOrderArgs
         * @static
         * @param {pbCsms.ICreateRepairOrderArgs} message CreateRepairOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRepairOrderArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.deviceName != null && Object.hasOwnProperty.call(message, "deviceName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.deviceName);
            if (message.deviceCode != null && Object.hasOwnProperty.call(message, "deviceCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.deviceCode);
            if (message.location != null && Object.hasOwnProperty.call(message, "location"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.location);
            if (message.reporter != null && Object.hasOwnProperty.call(message, "reporter"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.reporter);
            if (message.reporterPhone != null && Object.hasOwnProperty.call(message, "reporterPhone"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.reporterPhone);
            if (message.problem != null && Object.hasOwnProperty.call(message, "problem"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.problem);
            if (message.images != null && Object.hasOwnProperty.call(message, "images"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.images);
            if (message.urgency != null && Object.hasOwnProperty.call(message, "urgency"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.urgency);
            return writer;
        };

        /**
         * Encodes the specified CreateRepairOrderArgs message, length delimited. Does not implicitly {@link pbCsms.CreateRepairOrderArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.CreateRepairOrderArgs
         * @static
         * @param {pbCsms.ICreateRepairOrderArgs} message CreateRepairOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRepairOrderArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRepairOrderArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.CreateRepairOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.CreateRepairOrderArgs} CreateRepairOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRepairOrderArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.CreateRepairOrderArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.deviceName = reader.string();
                        break;
                    }
                case 2: {
                        message.deviceCode = reader.string();
                        break;
                    }
                case 3: {
                        message.location = reader.string();
                        break;
                    }
                case 4: {
                        message.reporter = reader.string();
                        break;
                    }
                case 5: {
                        message.reporterPhone = reader.string();
                        break;
                    }
                case 6: {
                        message.problem = reader.string();
                        break;
                    }
                case 7: {
                        message.images = reader.string();
                        break;
                    }
                case 8: {
                        message.urgency = reader.int32();
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
         * Decodes a CreateRepairOrderArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.CreateRepairOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.CreateRepairOrderArgs} CreateRepairOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRepairOrderArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRepairOrderArgs message.
         * @function verify
         * @memberof pbCsms.CreateRepairOrderArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRepairOrderArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                if (!$util.isString(message.deviceName))
                    return "deviceName: string expected";
            if (message.deviceCode != null && message.hasOwnProperty("deviceCode"))
                if (!$util.isString(message.deviceCode))
                    return "deviceCode: string expected";
            if (message.location != null && message.hasOwnProperty("location"))
                if (!$util.isString(message.location))
                    return "location: string expected";
            if (message.reporter != null && message.hasOwnProperty("reporter"))
                if (!$util.isString(message.reporter))
                    return "reporter: string expected";
            if (message.reporterPhone != null && message.hasOwnProperty("reporterPhone"))
                if (!$util.isString(message.reporterPhone))
                    return "reporterPhone: string expected";
            if (message.problem != null && message.hasOwnProperty("problem"))
                if (!$util.isString(message.problem))
                    return "problem: string expected";
            if (message.images != null && message.hasOwnProperty("images"))
                if (!$util.isString(message.images))
                    return "images: string expected";
            if (message.urgency != null && message.hasOwnProperty("urgency"))
                if (!$util.isInteger(message.urgency))
                    return "urgency: integer expected";
            return null;
        };

        /**
         * Creates a CreateRepairOrderArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.CreateRepairOrderArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.CreateRepairOrderArgs} CreateRepairOrderArgs
         */
        CreateRepairOrderArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.CreateRepairOrderArgs)
                return object;
            var message = new $root.pbCsms.CreateRepairOrderArgs();
            if (object.deviceName != null)
                message.deviceName = String(object.deviceName);
            if (object.deviceCode != null)
                message.deviceCode = String(object.deviceCode);
            if (object.location != null)
                message.location = String(object.location);
            if (object.reporter != null)
                message.reporter = String(object.reporter);
            if (object.reporterPhone != null)
                message.reporterPhone = String(object.reporterPhone);
            if (object.problem != null)
                message.problem = String(object.problem);
            if (object.images != null)
                message.images = String(object.images);
            if (object.urgency != null)
                message.urgency = object.urgency | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateRepairOrderArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.CreateRepairOrderArgs
         * @static
         * @param {pbCsms.CreateRepairOrderArgs} message CreateRepairOrderArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRepairOrderArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.deviceName = "";
                object.deviceCode = "";
                object.location = "";
                object.reporter = "";
                object.reporterPhone = "";
                object.problem = "";
                object.images = "";
                object.urgency = 0;
            }
            if (message.deviceName != null && message.hasOwnProperty("deviceName"))
                object.deviceName = message.deviceName;
            if (message.deviceCode != null && message.hasOwnProperty("deviceCode"))
                object.deviceCode = message.deviceCode;
            if (message.location != null && message.hasOwnProperty("location"))
                object.location = message.location;
            if (message.reporter != null && message.hasOwnProperty("reporter"))
                object.reporter = message.reporter;
            if (message.reporterPhone != null && message.hasOwnProperty("reporterPhone"))
                object.reporterPhone = message.reporterPhone;
            if (message.problem != null && message.hasOwnProperty("problem"))
                object.problem = message.problem;
            if (message.images != null && message.hasOwnProperty("images"))
                object.images = message.images;
            if (message.urgency != null && message.hasOwnProperty("urgency"))
                object.urgency = message.urgency;
            return object;
        };

        /**
         * Converts this CreateRepairOrderArgs to JSON.
         * @function toJSON
         * @memberof pbCsms.CreateRepairOrderArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRepairOrderArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateRepairOrderArgs
         * @function getTypeUrl
         * @memberof pbCsms.CreateRepairOrderArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateRepairOrderArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.CreateRepairOrderArgs";
        };

        return CreateRepairOrderArgs;
    })();

    pbCsms.FindRepairOrderArgs = (function() {

        /**
         * Properties of a FindRepairOrderArgs.
         * @memberof pbCsms
         * @interface IFindRepairOrderArgs
         * @property {number|null} [page] FindRepairOrderArgs page
         * @property {number|null} [pageSize] FindRepairOrderArgs pageSize
         * @property {string|null} [keyword] FindRepairOrderArgs keyword
         * @property {number|null} [status] FindRepairOrderArgs status
         * @property {number|null} [urgency] FindRepairOrderArgs urgency
         * @property {string|null} [technician] FindRepairOrderArgs technician
         */

        /**
         * Constructs a new FindRepairOrderArgs.
         * @memberof pbCsms
         * @classdesc Represents a FindRepairOrderArgs.
         * @implements IFindRepairOrderArgs
         * @constructor
         * @param {pbCsms.IFindRepairOrderArgs=} [properties] Properties to set
         */
        function FindRepairOrderArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindRepairOrderArgs page.
         * @member {number} page
         * @memberof pbCsms.FindRepairOrderArgs
         * @instance
         */
        FindRepairOrderArgs.prototype.page = 0;

        /**
         * FindRepairOrderArgs pageSize.
         * @member {number} pageSize
         * @memberof pbCsms.FindRepairOrderArgs
         * @instance
         */
        FindRepairOrderArgs.prototype.pageSize = 0;

        /**
         * FindRepairOrderArgs keyword.
         * @member {string} keyword
         * @memberof pbCsms.FindRepairOrderArgs
         * @instance
         */
        FindRepairOrderArgs.prototype.keyword = "";

        /**
         * FindRepairOrderArgs status.
         * @member {number} status
         * @memberof pbCsms.FindRepairOrderArgs
         * @instance
         */
        FindRepairOrderArgs.prototype.status = 0;

        /**
         * FindRepairOrderArgs urgency.
         * @member {number} urgency
         * @memberof pbCsms.FindRepairOrderArgs
         * @instance
         */
        FindRepairOrderArgs.prototype.urgency = 0;

        /**
         * FindRepairOrderArgs technician.
         * @member {string} technician
         * @memberof pbCsms.FindRepairOrderArgs
         * @instance
         */
        FindRepairOrderArgs.prototype.technician = "";

        /**
         * Creates a new FindRepairOrderArgs instance using the specified properties.
         * @function create
         * @memberof pbCsms.FindRepairOrderArgs
         * @static
         * @param {pbCsms.IFindRepairOrderArgs=} [properties] Properties to set
         * @returns {pbCsms.FindRepairOrderArgs} FindRepairOrderArgs instance
         */
        FindRepairOrderArgs.create = function create(properties) {
            return new FindRepairOrderArgs(properties);
        };

        /**
         * Encodes the specified FindRepairOrderArgs message. Does not implicitly {@link pbCsms.FindRepairOrderArgs.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.FindRepairOrderArgs
         * @static
         * @param {pbCsms.IFindRepairOrderArgs} message FindRepairOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRepairOrderArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
            if (message.keyword != null && Object.hasOwnProperty.call(message, "keyword"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.keyword);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            if (message.urgency != null && Object.hasOwnProperty.call(message, "urgency"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.urgency);
            if (message.technician != null && Object.hasOwnProperty.call(message, "technician"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.technician);
            return writer;
        };

        /**
         * Encodes the specified FindRepairOrderArgs message, length delimited. Does not implicitly {@link pbCsms.FindRepairOrderArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.FindRepairOrderArgs
         * @static
         * @param {pbCsms.IFindRepairOrderArgs} message FindRepairOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRepairOrderArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindRepairOrderArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.FindRepairOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.FindRepairOrderArgs} FindRepairOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRepairOrderArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.FindRepairOrderArgs();
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
                        message.keyword = reader.string();
                        break;
                    }
                case 4: {
                        message.status = reader.int32();
                        break;
                    }
                case 5: {
                        message.urgency = reader.int32();
                        break;
                    }
                case 6: {
                        message.technician = reader.string();
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
         * Decodes a FindRepairOrderArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.FindRepairOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.FindRepairOrderArgs} FindRepairOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRepairOrderArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindRepairOrderArgs message.
         * @function verify
         * @memberof pbCsms.FindRepairOrderArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindRepairOrderArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                if (!$util.isString(message.keyword))
                    return "keyword: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.urgency != null && message.hasOwnProperty("urgency"))
                if (!$util.isInteger(message.urgency))
                    return "urgency: integer expected";
            if (message.technician != null && message.hasOwnProperty("technician"))
                if (!$util.isString(message.technician))
                    return "technician: string expected";
            return null;
        };

        /**
         * Creates a FindRepairOrderArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.FindRepairOrderArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.FindRepairOrderArgs} FindRepairOrderArgs
         */
        FindRepairOrderArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.FindRepairOrderArgs)
                return object;
            var message = new $root.pbCsms.FindRepairOrderArgs();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            if (object.keyword != null)
                message.keyword = String(object.keyword);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.urgency != null)
                message.urgency = object.urgency | 0;
            if (object.technician != null)
                message.technician = String(object.technician);
            return message;
        };

        /**
         * Creates a plain object from a FindRepairOrderArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.FindRepairOrderArgs
         * @static
         * @param {pbCsms.FindRepairOrderArgs} message FindRepairOrderArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindRepairOrderArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.page = 0;
                object.pageSize = 0;
                object.keyword = "";
                object.status = 0;
                object.urgency = 0;
                object.technician = "";
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                object.keyword = message.keyword;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.urgency != null && message.hasOwnProperty("urgency"))
                object.urgency = message.urgency;
            if (message.technician != null && message.hasOwnProperty("technician"))
                object.technician = message.technician;
            return object;
        };

        /**
         * Converts this FindRepairOrderArgs to JSON.
         * @function toJSON
         * @memberof pbCsms.FindRepairOrderArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindRepairOrderArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindRepairOrderArgs
         * @function getTypeUrl
         * @memberof pbCsms.FindRepairOrderArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindRepairOrderArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.FindRepairOrderArgs";
        };

        return FindRepairOrderArgs;
    })();

    pbCsms.FindRepairOrderReply = (function() {

        /**
         * Properties of a FindRepairOrderReply.
         * @memberof pbCsms
         * @interface IFindRepairOrderReply
         * @property {number|null} [code] FindRepairOrderReply code
         * @property {string|null} [msg] FindRepairOrderReply msg
         * @property {Array.<pbCsms.IRepairOrder>|null} [data] FindRepairOrderReply data
         * @property {number|null} [total] FindRepairOrderReply total
         */

        /**
         * Constructs a new FindRepairOrderReply.
         * @memberof pbCsms
         * @classdesc Represents a FindRepairOrderReply.
         * @implements IFindRepairOrderReply
         * @constructor
         * @param {pbCsms.IFindRepairOrderReply=} [properties] Properties to set
         */
        function FindRepairOrderReply(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindRepairOrderReply code.
         * @member {number} code
         * @memberof pbCsms.FindRepairOrderReply
         * @instance
         */
        FindRepairOrderReply.prototype.code = 0;

        /**
         * FindRepairOrderReply msg.
         * @member {string} msg
         * @memberof pbCsms.FindRepairOrderReply
         * @instance
         */
        FindRepairOrderReply.prototype.msg = "";

        /**
         * FindRepairOrderReply data.
         * @member {Array.<pbCsms.IRepairOrder>} data
         * @memberof pbCsms.FindRepairOrderReply
         * @instance
         */
        FindRepairOrderReply.prototype.data = $util.emptyArray;

        /**
         * FindRepairOrderReply total.
         * @member {number} total
         * @memberof pbCsms.FindRepairOrderReply
         * @instance
         */
        FindRepairOrderReply.prototype.total = 0;

        /**
         * Creates a new FindRepairOrderReply instance using the specified properties.
         * @function create
         * @memberof pbCsms.FindRepairOrderReply
         * @static
         * @param {pbCsms.IFindRepairOrderReply=} [properties] Properties to set
         * @returns {pbCsms.FindRepairOrderReply} FindRepairOrderReply instance
         */
        FindRepairOrderReply.create = function create(properties) {
            return new FindRepairOrderReply(properties);
        };

        /**
         * Encodes the specified FindRepairOrderReply message. Does not implicitly {@link pbCsms.FindRepairOrderReply.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.FindRepairOrderReply
         * @static
         * @param {pbCsms.IFindRepairOrderReply} message FindRepairOrderReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRepairOrderReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.pbCsms.RepairOrder.encode(message.data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindRepairOrderReply message, length delimited. Does not implicitly {@link pbCsms.FindRepairOrderReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.FindRepairOrderReply
         * @static
         * @param {pbCsms.IFindRepairOrderReply} message FindRepairOrderReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRepairOrderReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindRepairOrderReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.FindRepairOrderReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.FindRepairOrderReply} FindRepairOrderReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRepairOrderReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.FindRepairOrderReply();
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
                        message.data.push($root.pbCsms.RepairOrder.decode(reader, reader.uint32()));
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
         * Decodes a FindRepairOrderReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.FindRepairOrderReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.FindRepairOrderReply} FindRepairOrderReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRepairOrderReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindRepairOrderReply message.
         * @function verify
         * @memberof pbCsms.FindRepairOrderReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindRepairOrderReply.verify = function verify(message) {
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
                    var error = $root.pbCsms.RepairOrder.verify(message.data[i]);
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
         * Creates a FindRepairOrderReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.FindRepairOrderReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.FindRepairOrderReply} FindRepairOrderReply
         */
        FindRepairOrderReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.FindRepairOrderReply)
                return object;
            var message = new $root.pbCsms.FindRepairOrderReply();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".pbCsms.FindRepairOrderReply.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".pbCsms.FindRepairOrderReply.data: object expected");
                    message.data[i] = $root.pbCsms.RepairOrder.fromObject(object.data[i]);
                }
            }
            if (object.total != null)
                message.total = object.total | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindRepairOrderReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.FindRepairOrderReply
         * @static
         * @param {pbCsms.FindRepairOrderReply} message FindRepairOrderReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindRepairOrderReply.toObject = function toObject(message, options) {
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
                    object.data[j] = $root.pbCsms.RepairOrder.toObject(message.data[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            return object;
        };

        /**
         * Converts this FindRepairOrderReply to JSON.
         * @function toJSON
         * @memberof pbCsms.FindRepairOrderReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindRepairOrderReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindRepairOrderReply
         * @function getTypeUrl
         * @memberof pbCsms.FindRepairOrderReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindRepairOrderReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.FindRepairOrderReply";
        };

        return FindRepairOrderReply;
    })();

    pbCsms.AcceptRepairOrderArgs = (function() {

        /**
         * Properties of an AcceptRepairOrderArgs.
         * @memberof pbCsms
         * @interface IAcceptRepairOrderArgs
         * @property {number|Long|null} [id] AcceptRepairOrderArgs id
         * @property {string|null} [technician] AcceptRepairOrderArgs technician
         * @property {string|null} [technicianPhone] AcceptRepairOrderArgs technicianPhone
         * @property {string|null} [remark] AcceptRepairOrderArgs remark
         */

        /**
         * Constructs a new AcceptRepairOrderArgs.
         * @memberof pbCsms
         * @classdesc Represents an AcceptRepairOrderArgs.
         * @implements IAcceptRepairOrderArgs
         * @constructor
         * @param {pbCsms.IAcceptRepairOrderArgs=} [properties] Properties to set
         */
        function AcceptRepairOrderArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AcceptRepairOrderArgs id.
         * @member {number|Long} id
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @instance
         */
        AcceptRepairOrderArgs.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AcceptRepairOrderArgs technician.
         * @member {string} technician
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @instance
         */
        AcceptRepairOrderArgs.prototype.technician = "";

        /**
         * AcceptRepairOrderArgs technicianPhone.
         * @member {string} technicianPhone
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @instance
         */
        AcceptRepairOrderArgs.prototype.technicianPhone = "";

        /**
         * AcceptRepairOrderArgs remark.
         * @member {string} remark
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @instance
         */
        AcceptRepairOrderArgs.prototype.remark = "";

        /**
         * Creates a new AcceptRepairOrderArgs instance using the specified properties.
         * @function create
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @static
         * @param {pbCsms.IAcceptRepairOrderArgs=} [properties] Properties to set
         * @returns {pbCsms.AcceptRepairOrderArgs} AcceptRepairOrderArgs instance
         */
        AcceptRepairOrderArgs.create = function create(properties) {
            return new AcceptRepairOrderArgs(properties);
        };

        /**
         * Encodes the specified AcceptRepairOrderArgs message. Does not implicitly {@link pbCsms.AcceptRepairOrderArgs.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @static
         * @param {pbCsms.IAcceptRepairOrderArgs} message AcceptRepairOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptRepairOrderArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.technician != null && Object.hasOwnProperty.call(message, "technician"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.technician);
            if (message.technicianPhone != null && Object.hasOwnProperty.call(message, "technicianPhone"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.technicianPhone);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified AcceptRepairOrderArgs message, length delimited. Does not implicitly {@link pbCsms.AcceptRepairOrderArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @static
         * @param {pbCsms.IAcceptRepairOrderArgs} message AcceptRepairOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptRepairOrderArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AcceptRepairOrderArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.AcceptRepairOrderArgs} AcceptRepairOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptRepairOrderArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.AcceptRepairOrderArgs();
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
                        message.technician = reader.string();
                        break;
                    }
                case 3: {
                        message.technicianPhone = reader.string();
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
         * Decodes an AcceptRepairOrderArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.AcceptRepairOrderArgs} AcceptRepairOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptRepairOrderArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AcceptRepairOrderArgs message.
         * @function verify
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AcceptRepairOrderArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.technician != null && message.hasOwnProperty("technician"))
                if (!$util.isString(message.technician))
                    return "technician: string expected";
            if (message.technicianPhone != null && message.hasOwnProperty("technicianPhone"))
                if (!$util.isString(message.technicianPhone))
                    return "technicianPhone: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates an AcceptRepairOrderArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.AcceptRepairOrderArgs} AcceptRepairOrderArgs
         */
        AcceptRepairOrderArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.AcceptRepairOrderArgs)
                return object;
            var message = new $root.pbCsms.AcceptRepairOrderArgs();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.technician != null)
                message.technician = String(object.technician);
            if (object.technicianPhone != null)
                message.technicianPhone = String(object.technicianPhone);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from an AcceptRepairOrderArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @static
         * @param {pbCsms.AcceptRepairOrderArgs} message AcceptRepairOrderArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcceptRepairOrderArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.technician = "";
                object.technicianPhone = "";
                object.remark = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.technician != null && message.hasOwnProperty("technician"))
                object.technician = message.technician;
            if (message.technicianPhone != null && message.hasOwnProperty("technicianPhone"))
                object.technicianPhone = message.technicianPhone;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this AcceptRepairOrderArgs to JSON.
         * @function toJSON
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcceptRepairOrderArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AcceptRepairOrderArgs
         * @function getTypeUrl
         * @memberof pbCsms.AcceptRepairOrderArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AcceptRepairOrderArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.AcceptRepairOrderArgs";
        };

        return AcceptRepairOrderArgs;
    })();

    pbCsms.AssignRepairOrderArgs = (function() {

        /**
         * Properties of an AssignRepairOrderArgs.
         * @memberof pbCsms
         * @interface IAssignRepairOrderArgs
         * @property {number|Long|null} [id] AssignRepairOrderArgs id
         * @property {string|null} [technician] AssignRepairOrderArgs technician
         * @property {string|null} [remark] AssignRepairOrderArgs remark
         */

        /**
         * Constructs a new AssignRepairOrderArgs.
         * @memberof pbCsms
         * @classdesc Represents an AssignRepairOrderArgs.
         * @implements IAssignRepairOrderArgs
         * @constructor
         * @param {pbCsms.IAssignRepairOrderArgs=} [properties] Properties to set
         */
        function AssignRepairOrderArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssignRepairOrderArgs id.
         * @member {number|Long} id
         * @memberof pbCsms.AssignRepairOrderArgs
         * @instance
         */
        AssignRepairOrderArgs.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AssignRepairOrderArgs technician.
         * @member {string} technician
         * @memberof pbCsms.AssignRepairOrderArgs
         * @instance
         */
        AssignRepairOrderArgs.prototype.technician = "";

        /**
         * AssignRepairOrderArgs remark.
         * @member {string} remark
         * @memberof pbCsms.AssignRepairOrderArgs
         * @instance
         */
        AssignRepairOrderArgs.prototype.remark = "";

        /**
         * Creates a new AssignRepairOrderArgs instance using the specified properties.
         * @function create
         * @memberof pbCsms.AssignRepairOrderArgs
         * @static
         * @param {pbCsms.IAssignRepairOrderArgs=} [properties] Properties to set
         * @returns {pbCsms.AssignRepairOrderArgs} AssignRepairOrderArgs instance
         */
        AssignRepairOrderArgs.create = function create(properties) {
            return new AssignRepairOrderArgs(properties);
        };

        /**
         * Encodes the specified AssignRepairOrderArgs message. Does not implicitly {@link pbCsms.AssignRepairOrderArgs.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.AssignRepairOrderArgs
         * @static
         * @param {pbCsms.IAssignRepairOrderArgs} message AssignRepairOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssignRepairOrderArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.technician != null && Object.hasOwnProperty.call(message, "technician"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.technician);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified AssignRepairOrderArgs message, length delimited. Does not implicitly {@link pbCsms.AssignRepairOrderArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.AssignRepairOrderArgs
         * @static
         * @param {pbCsms.IAssignRepairOrderArgs} message AssignRepairOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssignRepairOrderArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssignRepairOrderArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.AssignRepairOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.AssignRepairOrderArgs} AssignRepairOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssignRepairOrderArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.AssignRepairOrderArgs();
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
                        message.technician = reader.string();
                        break;
                    }
                case 3: {
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
         * Decodes an AssignRepairOrderArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.AssignRepairOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.AssignRepairOrderArgs} AssignRepairOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssignRepairOrderArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssignRepairOrderArgs message.
         * @function verify
         * @memberof pbCsms.AssignRepairOrderArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssignRepairOrderArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.technician != null && message.hasOwnProperty("technician"))
                if (!$util.isString(message.technician))
                    return "technician: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates an AssignRepairOrderArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.AssignRepairOrderArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.AssignRepairOrderArgs} AssignRepairOrderArgs
         */
        AssignRepairOrderArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.AssignRepairOrderArgs)
                return object;
            var message = new $root.pbCsms.AssignRepairOrderArgs();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.technician != null)
                message.technician = String(object.technician);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from an AssignRepairOrderArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.AssignRepairOrderArgs
         * @static
         * @param {pbCsms.AssignRepairOrderArgs} message AssignRepairOrderArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssignRepairOrderArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.technician = "";
                object.remark = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.technician != null && message.hasOwnProperty("technician"))
                object.technician = message.technician;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this AssignRepairOrderArgs to JSON.
         * @function toJSON
         * @memberof pbCsms.AssignRepairOrderArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssignRepairOrderArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AssignRepairOrderArgs
         * @function getTypeUrl
         * @memberof pbCsms.AssignRepairOrderArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AssignRepairOrderArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.AssignRepairOrderArgs";
        };

        return AssignRepairOrderArgs;
    })();

    pbCsms.CompleteRepairOrderArgs = (function() {

        /**
         * Properties of a CompleteRepairOrderArgs.
         * @memberof pbCsms
         * @interface ICompleteRepairOrderArgs
         * @property {number|Long|null} [id] CompleteRepairOrderArgs id
         * @property {string|null} [solution] CompleteRepairOrderArgs solution
         * @property {string|null} [images] CompleteRepairOrderArgs images
         * @property {string|null} [remark] CompleteRepairOrderArgs remark
         */

        /**
         * Constructs a new CompleteRepairOrderArgs.
         * @memberof pbCsms
         * @classdesc Represents a CompleteRepairOrderArgs.
         * @implements ICompleteRepairOrderArgs
         * @constructor
         * @param {pbCsms.ICompleteRepairOrderArgs=} [properties] Properties to set
         */
        function CompleteRepairOrderArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CompleteRepairOrderArgs id.
         * @member {number|Long} id
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @instance
         */
        CompleteRepairOrderArgs.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CompleteRepairOrderArgs solution.
         * @member {string} solution
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @instance
         */
        CompleteRepairOrderArgs.prototype.solution = "";

        /**
         * CompleteRepairOrderArgs images.
         * @member {string} images
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @instance
         */
        CompleteRepairOrderArgs.prototype.images = "";

        /**
         * CompleteRepairOrderArgs remark.
         * @member {string} remark
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @instance
         */
        CompleteRepairOrderArgs.prototype.remark = "";

        /**
         * Creates a new CompleteRepairOrderArgs instance using the specified properties.
         * @function create
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @static
         * @param {pbCsms.ICompleteRepairOrderArgs=} [properties] Properties to set
         * @returns {pbCsms.CompleteRepairOrderArgs} CompleteRepairOrderArgs instance
         */
        CompleteRepairOrderArgs.create = function create(properties) {
            return new CompleteRepairOrderArgs(properties);
        };

        /**
         * Encodes the specified CompleteRepairOrderArgs message. Does not implicitly {@link pbCsms.CompleteRepairOrderArgs.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @static
         * @param {pbCsms.ICompleteRepairOrderArgs} message CompleteRepairOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompleteRepairOrderArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.solution != null && Object.hasOwnProperty.call(message, "solution"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.solution);
            if (message.images != null && Object.hasOwnProperty.call(message, "images"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.images);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified CompleteRepairOrderArgs message, length delimited. Does not implicitly {@link pbCsms.CompleteRepairOrderArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @static
         * @param {pbCsms.ICompleteRepairOrderArgs} message CompleteRepairOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompleteRepairOrderArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CompleteRepairOrderArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.CompleteRepairOrderArgs} CompleteRepairOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompleteRepairOrderArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.CompleteRepairOrderArgs();
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
                        message.solution = reader.string();
                        break;
                    }
                case 3: {
                        message.images = reader.string();
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
         * Decodes a CompleteRepairOrderArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.CompleteRepairOrderArgs} CompleteRepairOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompleteRepairOrderArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CompleteRepairOrderArgs message.
         * @function verify
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CompleteRepairOrderArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.solution != null && message.hasOwnProperty("solution"))
                if (!$util.isString(message.solution))
                    return "solution: string expected";
            if (message.images != null && message.hasOwnProperty("images"))
                if (!$util.isString(message.images))
                    return "images: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a CompleteRepairOrderArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.CompleteRepairOrderArgs} CompleteRepairOrderArgs
         */
        CompleteRepairOrderArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.CompleteRepairOrderArgs)
                return object;
            var message = new $root.pbCsms.CompleteRepairOrderArgs();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.solution != null)
                message.solution = String(object.solution);
            if (object.images != null)
                message.images = String(object.images);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a CompleteRepairOrderArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @static
         * @param {pbCsms.CompleteRepairOrderArgs} message CompleteRepairOrderArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompleteRepairOrderArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                object.solution = "";
                object.images = "";
                object.remark = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.solution != null && message.hasOwnProperty("solution"))
                object.solution = message.solution;
            if (message.images != null && message.hasOwnProperty("images"))
                object.images = message.images;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this CompleteRepairOrderArgs to JSON.
         * @function toJSON
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompleteRepairOrderArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CompleteRepairOrderArgs
         * @function getTypeUrl
         * @memberof pbCsms.CompleteRepairOrderArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CompleteRepairOrderArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.CompleteRepairOrderArgs";
        };

        return CompleteRepairOrderArgs;
    })();

    pbCsms.FindRepairRecordArgs = (function() {

        /**
         * Properties of a FindRepairRecordArgs.
         * @memberof pbCsms
         * @interface IFindRepairRecordArgs
         * @property {number|Long|null} [repairOrderId] FindRepairRecordArgs repairOrderId
         * @property {number|null} [page] FindRepairRecordArgs page
         * @property {number|null} [pageSize] FindRepairRecordArgs pageSize
         */

        /**
         * Constructs a new FindRepairRecordArgs.
         * @memberof pbCsms
         * @classdesc Represents a FindRepairRecordArgs.
         * @implements IFindRepairRecordArgs
         * @constructor
         * @param {pbCsms.IFindRepairRecordArgs=} [properties] Properties to set
         */
        function FindRepairRecordArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindRepairRecordArgs repairOrderId.
         * @member {number|Long} repairOrderId
         * @memberof pbCsms.FindRepairRecordArgs
         * @instance
         */
        FindRepairRecordArgs.prototype.repairOrderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FindRepairRecordArgs page.
         * @member {number} page
         * @memberof pbCsms.FindRepairRecordArgs
         * @instance
         */
        FindRepairRecordArgs.prototype.page = 0;

        /**
         * FindRepairRecordArgs pageSize.
         * @member {number} pageSize
         * @memberof pbCsms.FindRepairRecordArgs
         * @instance
         */
        FindRepairRecordArgs.prototype.pageSize = 0;

        /**
         * Creates a new FindRepairRecordArgs instance using the specified properties.
         * @function create
         * @memberof pbCsms.FindRepairRecordArgs
         * @static
         * @param {pbCsms.IFindRepairRecordArgs=} [properties] Properties to set
         * @returns {pbCsms.FindRepairRecordArgs} FindRepairRecordArgs instance
         */
        FindRepairRecordArgs.create = function create(properties) {
            return new FindRepairRecordArgs(properties);
        };

        /**
         * Encodes the specified FindRepairRecordArgs message. Does not implicitly {@link pbCsms.FindRepairRecordArgs.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.FindRepairRecordArgs
         * @static
         * @param {pbCsms.IFindRepairRecordArgs} message FindRepairRecordArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRepairRecordArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.repairOrderId != null && Object.hasOwnProperty.call(message, "repairOrderId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.repairOrderId);
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageSize);
            return writer;
        };

        /**
         * Encodes the specified FindRepairRecordArgs message, length delimited. Does not implicitly {@link pbCsms.FindRepairRecordArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.FindRepairRecordArgs
         * @static
         * @param {pbCsms.IFindRepairRecordArgs} message FindRepairRecordArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRepairRecordArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindRepairRecordArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.FindRepairRecordArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.FindRepairRecordArgs} FindRepairRecordArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRepairRecordArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.FindRepairRecordArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.repairOrderId = reader.int64();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FindRepairRecordArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.FindRepairRecordArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.FindRepairRecordArgs} FindRepairRecordArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRepairRecordArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindRepairRecordArgs message.
         * @function verify
         * @memberof pbCsms.FindRepairRecordArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindRepairRecordArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.repairOrderId != null && message.hasOwnProperty("repairOrderId"))
                if (!$util.isInteger(message.repairOrderId) && !(message.repairOrderId && $util.isInteger(message.repairOrderId.low) && $util.isInteger(message.repairOrderId.high)))
                    return "repairOrderId: integer|Long expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            return null;
        };

        /**
         * Creates a FindRepairRecordArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.FindRepairRecordArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.FindRepairRecordArgs} FindRepairRecordArgs
         */
        FindRepairRecordArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.FindRepairRecordArgs)
                return object;
            var message = new $root.pbCsms.FindRepairRecordArgs();
            if (object.repairOrderId != null)
                if ($util.Long)
                    (message.repairOrderId = $util.Long.fromValue(object.repairOrderId)).unsigned = false;
                else if (typeof object.repairOrderId === "string")
                    message.repairOrderId = parseInt(object.repairOrderId, 10);
                else if (typeof object.repairOrderId === "number")
                    message.repairOrderId = object.repairOrderId;
                else if (typeof object.repairOrderId === "object")
                    message.repairOrderId = new $util.LongBits(object.repairOrderId.low >>> 0, object.repairOrderId.high >>> 0).toNumber();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindRepairRecordArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.FindRepairRecordArgs
         * @static
         * @param {pbCsms.FindRepairRecordArgs} message FindRepairRecordArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindRepairRecordArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.repairOrderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.repairOrderId = options.longs === String ? "0" : 0;
                object.page = 0;
                object.pageSize = 0;
            }
            if (message.repairOrderId != null && message.hasOwnProperty("repairOrderId"))
                if (typeof message.repairOrderId === "number")
                    object.repairOrderId = options.longs === String ? String(message.repairOrderId) : message.repairOrderId;
                else
                    object.repairOrderId = options.longs === String ? $util.Long.prototype.toString.call(message.repairOrderId) : options.longs === Number ? new $util.LongBits(message.repairOrderId.low >>> 0, message.repairOrderId.high >>> 0).toNumber() : message.repairOrderId;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            return object;
        };

        /**
         * Converts this FindRepairRecordArgs to JSON.
         * @function toJSON
         * @memberof pbCsms.FindRepairRecordArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindRepairRecordArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindRepairRecordArgs
         * @function getTypeUrl
         * @memberof pbCsms.FindRepairRecordArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindRepairRecordArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.FindRepairRecordArgs";
        };

        return FindRepairRecordArgs;
    })();

    pbCsms.FindRepairRecordReply = (function() {

        /**
         * Properties of a FindRepairRecordReply.
         * @memberof pbCsms
         * @interface IFindRepairRecordReply
         * @property {number|null} [code] FindRepairRecordReply code
         * @property {string|null} [msg] FindRepairRecordReply msg
         * @property {Array.<pbCsms.IRepairRecord>|null} [data] FindRepairRecordReply data
         * @property {number|null} [total] FindRepairRecordReply total
         */

        /**
         * Constructs a new FindRepairRecordReply.
         * @memberof pbCsms
         * @classdesc Represents a FindRepairRecordReply.
         * @implements IFindRepairRecordReply
         * @constructor
         * @param {pbCsms.IFindRepairRecordReply=} [properties] Properties to set
         */
        function FindRepairRecordReply(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindRepairRecordReply code.
         * @member {number} code
         * @memberof pbCsms.FindRepairRecordReply
         * @instance
         */
        FindRepairRecordReply.prototype.code = 0;

        /**
         * FindRepairRecordReply msg.
         * @member {string} msg
         * @memberof pbCsms.FindRepairRecordReply
         * @instance
         */
        FindRepairRecordReply.prototype.msg = "";

        /**
         * FindRepairRecordReply data.
         * @member {Array.<pbCsms.IRepairRecord>} data
         * @memberof pbCsms.FindRepairRecordReply
         * @instance
         */
        FindRepairRecordReply.prototype.data = $util.emptyArray;

        /**
         * FindRepairRecordReply total.
         * @member {number} total
         * @memberof pbCsms.FindRepairRecordReply
         * @instance
         */
        FindRepairRecordReply.prototype.total = 0;

        /**
         * Creates a new FindRepairRecordReply instance using the specified properties.
         * @function create
         * @memberof pbCsms.FindRepairRecordReply
         * @static
         * @param {pbCsms.IFindRepairRecordReply=} [properties] Properties to set
         * @returns {pbCsms.FindRepairRecordReply} FindRepairRecordReply instance
         */
        FindRepairRecordReply.create = function create(properties) {
            return new FindRepairRecordReply(properties);
        };

        /**
         * Encodes the specified FindRepairRecordReply message. Does not implicitly {@link pbCsms.FindRepairRecordReply.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.FindRepairRecordReply
         * @static
         * @param {pbCsms.IFindRepairRecordReply} message FindRepairRecordReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRepairRecordReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.pbCsms.RepairRecord.encode(message.data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindRepairRecordReply message, length delimited. Does not implicitly {@link pbCsms.FindRepairRecordReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.FindRepairRecordReply
         * @static
         * @param {pbCsms.IFindRepairRecordReply} message FindRepairRecordReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindRepairRecordReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindRepairRecordReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.FindRepairRecordReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.FindRepairRecordReply} FindRepairRecordReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRepairRecordReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.FindRepairRecordReply();
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
                        message.data.push($root.pbCsms.RepairRecord.decode(reader, reader.uint32()));
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
         * Decodes a FindRepairRecordReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.FindRepairRecordReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.FindRepairRecordReply} FindRepairRecordReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindRepairRecordReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindRepairRecordReply message.
         * @function verify
         * @memberof pbCsms.FindRepairRecordReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindRepairRecordReply.verify = function verify(message) {
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
                    var error = $root.pbCsms.RepairRecord.verify(message.data[i]);
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
         * Creates a FindRepairRecordReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.FindRepairRecordReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.FindRepairRecordReply} FindRepairRecordReply
         */
        FindRepairRecordReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.FindRepairRecordReply)
                return object;
            var message = new $root.pbCsms.FindRepairRecordReply();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".pbCsms.FindRepairRecordReply.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".pbCsms.FindRepairRecordReply.data: object expected");
                    message.data[i] = $root.pbCsms.RepairRecord.fromObject(object.data[i]);
                }
            }
            if (object.total != null)
                message.total = object.total | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindRepairRecordReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.FindRepairRecordReply
         * @static
         * @param {pbCsms.FindRepairRecordReply} message FindRepairRecordReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindRepairRecordReply.toObject = function toObject(message, options) {
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
                    object.data[j] = $root.pbCsms.RepairRecord.toObject(message.data[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            return object;
        };

        /**
         * Converts this FindRepairRecordReply to JSON.
         * @function toJSON
         * @memberof pbCsms.FindRepairRecordReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindRepairRecordReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindRepairRecordReply
         * @function getTypeUrl
         * @memberof pbCsms.FindRepairRecordReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindRepairRecordReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.FindRepairRecordReply";
        };

        return FindRepairRecordReply;
    })();

    pbCsms.UseSparePartArgs = (function() {

        /**
         * Properties of a UseSparePartArgs.
         * @memberof pbCsms
         * @interface IUseSparePartArgs
         * @property {number|Long|null} [repairOrderId] UseSparePartArgs repairOrderId
         * @property {string|null} [partSkuId] UseSparePartArgs partSkuId
         * @property {string|null} [partName] UseSparePartArgs partName
         * @property {number|null} [quantity] UseSparePartArgs quantity
         */

        /**
         * Constructs a new UseSparePartArgs.
         * @memberof pbCsms
         * @classdesc Represents a UseSparePartArgs.
         * @implements IUseSparePartArgs
         * @constructor
         * @param {pbCsms.IUseSparePartArgs=} [properties] Properties to set
         */
        function UseSparePartArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UseSparePartArgs repairOrderId.
         * @member {number|Long} repairOrderId
         * @memberof pbCsms.UseSparePartArgs
         * @instance
         */
        UseSparePartArgs.prototype.repairOrderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UseSparePartArgs partSkuId.
         * @member {string} partSkuId
         * @memberof pbCsms.UseSparePartArgs
         * @instance
         */
        UseSparePartArgs.prototype.partSkuId = "";

        /**
         * UseSparePartArgs partName.
         * @member {string} partName
         * @memberof pbCsms.UseSparePartArgs
         * @instance
         */
        UseSparePartArgs.prototype.partName = "";

        /**
         * UseSparePartArgs quantity.
         * @member {number} quantity
         * @memberof pbCsms.UseSparePartArgs
         * @instance
         */
        UseSparePartArgs.prototype.quantity = 0;

        /**
         * Creates a new UseSparePartArgs instance using the specified properties.
         * @function create
         * @memberof pbCsms.UseSparePartArgs
         * @static
         * @param {pbCsms.IUseSparePartArgs=} [properties] Properties to set
         * @returns {pbCsms.UseSparePartArgs} UseSparePartArgs instance
         */
        UseSparePartArgs.create = function create(properties) {
            return new UseSparePartArgs(properties);
        };

        /**
         * Encodes the specified UseSparePartArgs message. Does not implicitly {@link pbCsms.UseSparePartArgs.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.UseSparePartArgs
         * @static
         * @param {pbCsms.IUseSparePartArgs} message UseSparePartArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseSparePartArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.repairOrderId != null && Object.hasOwnProperty.call(message, "repairOrderId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.repairOrderId);
            if (message.partSkuId != null && Object.hasOwnProperty.call(message, "partSkuId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.partSkuId);
            if (message.partName != null && Object.hasOwnProperty.call(message, "partName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.partName);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.quantity);
            return writer;
        };

        /**
         * Encodes the specified UseSparePartArgs message, length delimited. Does not implicitly {@link pbCsms.UseSparePartArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.UseSparePartArgs
         * @static
         * @param {pbCsms.IUseSparePartArgs} message UseSparePartArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UseSparePartArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UseSparePartArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.UseSparePartArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.UseSparePartArgs} UseSparePartArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseSparePartArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.UseSparePartArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.repairOrderId = reader.int64();
                        break;
                    }
                case 2: {
                        message.partSkuId = reader.string();
                        break;
                    }
                case 3: {
                        message.partName = reader.string();
                        break;
                    }
                case 4: {
                        message.quantity = reader.int32();
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
         * Decodes a UseSparePartArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.UseSparePartArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.UseSparePartArgs} UseSparePartArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UseSparePartArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UseSparePartArgs message.
         * @function verify
         * @memberof pbCsms.UseSparePartArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UseSparePartArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.repairOrderId != null && message.hasOwnProperty("repairOrderId"))
                if (!$util.isInteger(message.repairOrderId) && !(message.repairOrderId && $util.isInteger(message.repairOrderId.low) && $util.isInteger(message.repairOrderId.high)))
                    return "repairOrderId: integer|Long expected";
            if (message.partSkuId != null && message.hasOwnProperty("partSkuId"))
                if (!$util.isString(message.partSkuId))
                    return "partSkuId: string expected";
            if (message.partName != null && message.hasOwnProperty("partName"))
                if (!$util.isString(message.partName))
                    return "partName: string expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            return null;
        };

        /**
         * Creates a UseSparePartArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.UseSparePartArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.UseSparePartArgs} UseSparePartArgs
         */
        UseSparePartArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.UseSparePartArgs)
                return object;
            var message = new $root.pbCsms.UseSparePartArgs();
            if (object.repairOrderId != null)
                if ($util.Long)
                    (message.repairOrderId = $util.Long.fromValue(object.repairOrderId)).unsigned = false;
                else if (typeof object.repairOrderId === "string")
                    message.repairOrderId = parseInt(object.repairOrderId, 10);
                else if (typeof object.repairOrderId === "number")
                    message.repairOrderId = object.repairOrderId;
                else if (typeof object.repairOrderId === "object")
                    message.repairOrderId = new $util.LongBits(object.repairOrderId.low >>> 0, object.repairOrderId.high >>> 0).toNumber();
            if (object.partSkuId != null)
                message.partSkuId = String(object.partSkuId);
            if (object.partName != null)
                message.partName = String(object.partName);
            if (object.quantity != null)
                message.quantity = object.quantity | 0;
            return message;
        };

        /**
         * Creates a plain object from a UseSparePartArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.UseSparePartArgs
         * @static
         * @param {pbCsms.UseSparePartArgs} message UseSparePartArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UseSparePartArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.repairOrderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.repairOrderId = options.longs === String ? "0" : 0;
                object.partSkuId = "";
                object.partName = "";
                object.quantity = 0;
            }
            if (message.repairOrderId != null && message.hasOwnProperty("repairOrderId"))
                if (typeof message.repairOrderId === "number")
                    object.repairOrderId = options.longs === String ? String(message.repairOrderId) : message.repairOrderId;
                else
                    object.repairOrderId = options.longs === String ? $util.Long.prototype.toString.call(message.repairOrderId) : options.longs === Number ? new $util.LongBits(message.repairOrderId.low >>> 0, message.repairOrderId.high >>> 0).toNumber() : message.repairOrderId;
            if (message.partSkuId != null && message.hasOwnProperty("partSkuId"))
                object.partSkuId = message.partSkuId;
            if (message.partName != null && message.hasOwnProperty("partName"))
                object.partName = message.partName;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            return object;
        };

        /**
         * Converts this UseSparePartArgs to JSON.
         * @function toJSON
         * @memberof pbCsms.UseSparePartArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UseSparePartArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UseSparePartArgs
         * @function getTypeUrl
         * @memberof pbCsms.UseSparePartArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UseSparePartArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.UseSparePartArgs";
        };

        return UseSparePartArgs;
    })();

    pbCsms.FindSparePartUsageArgs = (function() {

        /**
         * Properties of a FindSparePartUsageArgs.
         * @memberof pbCsms
         * @interface IFindSparePartUsageArgs
         * @property {number|Long|null} [repairOrderId] FindSparePartUsageArgs repairOrderId
         * @property {number|null} [page] FindSparePartUsageArgs page
         * @property {number|null} [pageSize] FindSparePartUsageArgs pageSize
         */

        /**
         * Constructs a new FindSparePartUsageArgs.
         * @memberof pbCsms
         * @classdesc Represents a FindSparePartUsageArgs.
         * @implements IFindSparePartUsageArgs
         * @constructor
         * @param {pbCsms.IFindSparePartUsageArgs=} [properties] Properties to set
         */
        function FindSparePartUsageArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindSparePartUsageArgs repairOrderId.
         * @member {number|Long} repairOrderId
         * @memberof pbCsms.FindSparePartUsageArgs
         * @instance
         */
        FindSparePartUsageArgs.prototype.repairOrderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * FindSparePartUsageArgs page.
         * @member {number} page
         * @memberof pbCsms.FindSparePartUsageArgs
         * @instance
         */
        FindSparePartUsageArgs.prototype.page = 0;

        /**
         * FindSparePartUsageArgs pageSize.
         * @member {number} pageSize
         * @memberof pbCsms.FindSparePartUsageArgs
         * @instance
         */
        FindSparePartUsageArgs.prototype.pageSize = 0;

        /**
         * Creates a new FindSparePartUsageArgs instance using the specified properties.
         * @function create
         * @memberof pbCsms.FindSparePartUsageArgs
         * @static
         * @param {pbCsms.IFindSparePartUsageArgs=} [properties] Properties to set
         * @returns {pbCsms.FindSparePartUsageArgs} FindSparePartUsageArgs instance
         */
        FindSparePartUsageArgs.create = function create(properties) {
            return new FindSparePartUsageArgs(properties);
        };

        /**
         * Encodes the specified FindSparePartUsageArgs message. Does not implicitly {@link pbCsms.FindSparePartUsageArgs.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.FindSparePartUsageArgs
         * @static
         * @param {pbCsms.IFindSparePartUsageArgs} message FindSparePartUsageArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindSparePartUsageArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.repairOrderId != null && Object.hasOwnProperty.call(message, "repairOrderId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.repairOrderId);
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.pageSize);
            return writer;
        };

        /**
         * Encodes the specified FindSparePartUsageArgs message, length delimited. Does not implicitly {@link pbCsms.FindSparePartUsageArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.FindSparePartUsageArgs
         * @static
         * @param {pbCsms.IFindSparePartUsageArgs} message FindSparePartUsageArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindSparePartUsageArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindSparePartUsageArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.FindSparePartUsageArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.FindSparePartUsageArgs} FindSparePartUsageArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindSparePartUsageArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.FindSparePartUsageArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.repairOrderId = reader.int64();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FindSparePartUsageArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.FindSparePartUsageArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.FindSparePartUsageArgs} FindSparePartUsageArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindSparePartUsageArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindSparePartUsageArgs message.
         * @function verify
         * @memberof pbCsms.FindSparePartUsageArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindSparePartUsageArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.repairOrderId != null && message.hasOwnProperty("repairOrderId"))
                if (!$util.isInteger(message.repairOrderId) && !(message.repairOrderId && $util.isInteger(message.repairOrderId.low) && $util.isInteger(message.repairOrderId.high)))
                    return "repairOrderId: integer|Long expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            return null;
        };

        /**
         * Creates a FindSparePartUsageArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.FindSparePartUsageArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.FindSparePartUsageArgs} FindSparePartUsageArgs
         */
        FindSparePartUsageArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.FindSparePartUsageArgs)
                return object;
            var message = new $root.pbCsms.FindSparePartUsageArgs();
            if (object.repairOrderId != null)
                if ($util.Long)
                    (message.repairOrderId = $util.Long.fromValue(object.repairOrderId)).unsigned = false;
                else if (typeof object.repairOrderId === "string")
                    message.repairOrderId = parseInt(object.repairOrderId, 10);
                else if (typeof object.repairOrderId === "number")
                    message.repairOrderId = object.repairOrderId;
                else if (typeof object.repairOrderId === "object")
                    message.repairOrderId = new $util.LongBits(object.repairOrderId.low >>> 0, object.repairOrderId.high >>> 0).toNumber();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindSparePartUsageArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.FindSparePartUsageArgs
         * @static
         * @param {pbCsms.FindSparePartUsageArgs} message FindSparePartUsageArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindSparePartUsageArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.repairOrderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.repairOrderId = options.longs === String ? "0" : 0;
                object.page = 0;
                object.pageSize = 0;
            }
            if (message.repairOrderId != null && message.hasOwnProperty("repairOrderId"))
                if (typeof message.repairOrderId === "number")
                    object.repairOrderId = options.longs === String ? String(message.repairOrderId) : message.repairOrderId;
                else
                    object.repairOrderId = options.longs === String ? $util.Long.prototype.toString.call(message.repairOrderId) : options.longs === Number ? new $util.LongBits(message.repairOrderId.low >>> 0, message.repairOrderId.high >>> 0).toNumber() : message.repairOrderId;
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            return object;
        };

        /**
         * Converts this FindSparePartUsageArgs to JSON.
         * @function toJSON
         * @memberof pbCsms.FindSparePartUsageArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindSparePartUsageArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindSparePartUsageArgs
         * @function getTypeUrl
         * @memberof pbCsms.FindSparePartUsageArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindSparePartUsageArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.FindSparePartUsageArgs";
        };

        return FindSparePartUsageArgs;
    })();

    pbCsms.FindSparePartUsageReply = (function() {

        /**
         * Properties of a FindSparePartUsageReply.
         * @memberof pbCsms
         * @interface IFindSparePartUsageReply
         * @property {number|null} [code] FindSparePartUsageReply code
         * @property {string|null} [msg] FindSparePartUsageReply msg
         * @property {Array.<pbCsms.ISparePartUsage>|null} [data] FindSparePartUsageReply data
         * @property {number|null} [total] FindSparePartUsageReply total
         */

        /**
         * Constructs a new FindSparePartUsageReply.
         * @memberof pbCsms
         * @classdesc Represents a FindSparePartUsageReply.
         * @implements IFindSparePartUsageReply
         * @constructor
         * @param {pbCsms.IFindSparePartUsageReply=} [properties] Properties to set
         */
        function FindSparePartUsageReply(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindSparePartUsageReply code.
         * @member {number} code
         * @memberof pbCsms.FindSparePartUsageReply
         * @instance
         */
        FindSparePartUsageReply.prototype.code = 0;

        /**
         * FindSparePartUsageReply msg.
         * @member {string} msg
         * @memberof pbCsms.FindSparePartUsageReply
         * @instance
         */
        FindSparePartUsageReply.prototype.msg = "";

        /**
         * FindSparePartUsageReply data.
         * @member {Array.<pbCsms.ISparePartUsage>} data
         * @memberof pbCsms.FindSparePartUsageReply
         * @instance
         */
        FindSparePartUsageReply.prototype.data = $util.emptyArray;

        /**
         * FindSparePartUsageReply total.
         * @member {number} total
         * @memberof pbCsms.FindSparePartUsageReply
         * @instance
         */
        FindSparePartUsageReply.prototype.total = 0;

        /**
         * Creates a new FindSparePartUsageReply instance using the specified properties.
         * @function create
         * @memberof pbCsms.FindSparePartUsageReply
         * @static
         * @param {pbCsms.IFindSparePartUsageReply=} [properties] Properties to set
         * @returns {pbCsms.FindSparePartUsageReply} FindSparePartUsageReply instance
         */
        FindSparePartUsageReply.create = function create(properties) {
            return new FindSparePartUsageReply(properties);
        };

        /**
         * Encodes the specified FindSparePartUsageReply message. Does not implicitly {@link pbCsms.FindSparePartUsageReply.verify|verify} messages.
         * @function encode
         * @memberof pbCsms.FindSparePartUsageReply
         * @static
         * @param {pbCsms.IFindSparePartUsageReply} message FindSparePartUsageReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindSparePartUsageReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.pbCsms.SparePartUsage.encode(message.data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindSparePartUsageReply message, length delimited. Does not implicitly {@link pbCsms.FindSparePartUsageReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbCsms.FindSparePartUsageReply
         * @static
         * @param {pbCsms.IFindSparePartUsageReply} message FindSparePartUsageReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindSparePartUsageReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindSparePartUsageReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbCsms.FindSparePartUsageReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbCsms.FindSparePartUsageReply} FindSparePartUsageReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindSparePartUsageReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbCsms.FindSparePartUsageReply();
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
                        message.data.push($root.pbCsms.SparePartUsage.decode(reader, reader.uint32()));
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
         * Decodes a FindSparePartUsageReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbCsms.FindSparePartUsageReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbCsms.FindSparePartUsageReply} FindSparePartUsageReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindSparePartUsageReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindSparePartUsageReply message.
         * @function verify
         * @memberof pbCsms.FindSparePartUsageReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindSparePartUsageReply.verify = function verify(message) {
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
                    var error = $root.pbCsms.SparePartUsage.verify(message.data[i]);
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
         * Creates a FindSparePartUsageReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbCsms.FindSparePartUsageReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbCsms.FindSparePartUsageReply} FindSparePartUsageReply
         */
        FindSparePartUsageReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbCsms.FindSparePartUsageReply)
                return object;
            var message = new $root.pbCsms.FindSparePartUsageReply();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".pbCsms.FindSparePartUsageReply.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".pbCsms.FindSparePartUsageReply.data: object expected");
                    message.data[i] = $root.pbCsms.SparePartUsage.fromObject(object.data[i]);
                }
            }
            if (object.total != null)
                message.total = object.total | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindSparePartUsageReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbCsms.FindSparePartUsageReply
         * @static
         * @param {pbCsms.FindSparePartUsageReply} message FindSparePartUsageReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindSparePartUsageReply.toObject = function toObject(message, options) {
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
                    object.data[j] = $root.pbCsms.SparePartUsage.toObject(message.data[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            return object;
        };

        /**
         * Converts this FindSparePartUsageReply to JSON.
         * @function toJSON
         * @memberof pbCsms.FindSparePartUsageReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindSparePartUsageReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindSparePartUsageReply
         * @function getTypeUrl
         * @memberof pbCsms.FindSparePartUsageReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindSparePartUsageReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbCsms.FindSparePartUsageReply";
        };

        return FindSparePartUsageReply;
    })();

    return pbCsms;
})();

module.exports = $root;
