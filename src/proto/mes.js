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

$root.pbMes = (function() {

    /**
     * Namespace pbMes.
     * @exports pbMes
     * @namespace
     */
    var pbMes = {};

    pbMes.ProductionOrder = (function() {

        /**
         * Properties of a ProductionOrder.
         * @memberof pbMes
         * @interface IProductionOrder
         * @property {number|Long|null} [id] ProductionOrder id
         * @property {string|null} [createdAt] ProductionOrder createdAt
         * @property {string|null} [updatedAt] ProductionOrder updatedAt
         * @property {string|null} [bomId] ProductionOrder bomId
         * @property {string|null} [productSkuId] ProductionOrder productSkuId
         * @property {string|null} [productName] ProductionOrder productName
         * @property {number|null} [quantity] ProductionOrder quantity
         * @property {number|null} [status] ProductionOrder status
         * @property {string|null} [materials] ProductionOrder materials
         * @property {string|null} [workflowInstanceId] ProductionOrder workflowInstanceId
         * @property {string|null} [remark] ProductionOrder remark
         * @property {string|null} [finishedAt] ProductionOrder finishedAt
         */

        /**
         * Constructs a new ProductionOrder.
         * @memberof pbMes
         * @classdesc Represents a ProductionOrder.
         * @implements IProductionOrder
         * @constructor
         * @param {pbMes.IProductionOrder=} [properties] Properties to set
         */
        function ProductionOrder(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProductionOrder id.
         * @member {number|Long} id
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ProductionOrder createdAt.
         * @member {string} createdAt
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.createdAt = "";

        /**
         * ProductionOrder updatedAt.
         * @member {string} updatedAt
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.updatedAt = "";

        /**
         * ProductionOrder bomId.
         * @member {string} bomId
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.bomId = "";

        /**
         * ProductionOrder productSkuId.
         * @member {string} productSkuId
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.productSkuId = "";

        /**
         * ProductionOrder productName.
         * @member {string} productName
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.productName = "";

        /**
         * ProductionOrder quantity.
         * @member {number} quantity
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.quantity = 0;

        /**
         * ProductionOrder status.
         * @member {number} status
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.status = 0;

        /**
         * ProductionOrder materials.
         * @member {string} materials
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.materials = "";

        /**
         * ProductionOrder workflowInstanceId.
         * @member {string} workflowInstanceId
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.workflowInstanceId = "";

        /**
         * ProductionOrder remark.
         * @member {string} remark
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.remark = "";

        /**
         * ProductionOrder finishedAt.
         * @member {string} finishedAt
         * @memberof pbMes.ProductionOrder
         * @instance
         */
        ProductionOrder.prototype.finishedAt = "";

        /**
         * Creates a new ProductionOrder instance using the specified properties.
         * @function create
         * @memberof pbMes.ProductionOrder
         * @static
         * @param {pbMes.IProductionOrder=} [properties] Properties to set
         * @returns {pbMes.ProductionOrder} ProductionOrder instance
         */
        ProductionOrder.create = function create(properties) {
            return new ProductionOrder(properties);
        };

        /**
         * Encodes the specified ProductionOrder message. Does not implicitly {@link pbMes.ProductionOrder.verify|verify} messages.
         * @function encode
         * @memberof pbMes.ProductionOrder
         * @static
         * @param {pbMes.IProductionOrder} message ProductionOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductionOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.bomId != null && Object.hasOwnProperty.call(message, "bomId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.bomId);
            if (message.productSkuId != null && Object.hasOwnProperty.call(message, "productSkuId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.productSkuId);
            if (message.productName != null && Object.hasOwnProperty.call(message, "productName"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.productName);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.quantity);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.status);
            if (message.materials != null && Object.hasOwnProperty.call(message, "materials"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.materials);
            if (message.workflowInstanceId != null && Object.hasOwnProperty.call(message, "workflowInstanceId"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.workflowInstanceId);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.remark);
            if (message.finishedAt != null && Object.hasOwnProperty.call(message, "finishedAt"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.finishedAt);
            return writer;
        };

        /**
         * Encodes the specified ProductionOrder message, length delimited. Does not implicitly {@link pbMes.ProductionOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbMes.ProductionOrder
         * @static
         * @param {pbMes.IProductionOrder} message ProductionOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductionOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProductionOrder message from the specified reader or buffer.
         * @function decode
         * @memberof pbMes.ProductionOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbMes.ProductionOrder} ProductionOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductionOrder.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbMes.ProductionOrder();
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
                        message.bomId = reader.string();
                        break;
                    }
                case 11: {
                        message.productSkuId = reader.string();
                        break;
                    }
                case 12: {
                        message.productName = reader.string();
                        break;
                    }
                case 13: {
                        message.quantity = reader.int32();
                        break;
                    }
                case 14: {
                        message.status = reader.int32();
                        break;
                    }
                case 15: {
                        message.materials = reader.string();
                        break;
                    }
                case 16: {
                        message.workflowInstanceId = reader.string();
                        break;
                    }
                case 17: {
                        message.remark = reader.string();
                        break;
                    }
                case 18: {
                        message.finishedAt = reader.string();
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
         * Decodes a ProductionOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbMes.ProductionOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbMes.ProductionOrder} ProductionOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductionOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProductionOrder message.
         * @function verify
         * @memberof pbMes.ProductionOrder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProductionOrder.verify = function verify(message) {
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
            if (message.bomId != null && message.hasOwnProperty("bomId"))
                if (!$util.isString(message.bomId))
                    return "bomId: string expected";
            if (message.productSkuId != null && message.hasOwnProperty("productSkuId"))
                if (!$util.isString(message.productSkuId))
                    return "productSkuId: string expected";
            if (message.productName != null && message.hasOwnProperty("productName"))
                if (!$util.isString(message.productName))
                    return "productName: string expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.materials != null && message.hasOwnProperty("materials"))
                if (!$util.isString(message.materials))
                    return "materials: string expected";
            if (message.workflowInstanceId != null && message.hasOwnProperty("workflowInstanceId"))
                if (!$util.isString(message.workflowInstanceId))
                    return "workflowInstanceId: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            if (message.finishedAt != null && message.hasOwnProperty("finishedAt"))
                if (!$util.isString(message.finishedAt))
                    return "finishedAt: string expected";
            return null;
        };

        /**
         * Creates a ProductionOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbMes.ProductionOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbMes.ProductionOrder} ProductionOrder
         */
        ProductionOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.pbMes.ProductionOrder)
                return object;
            var message = new $root.pbMes.ProductionOrder();
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
            if (object.bomId != null)
                message.bomId = String(object.bomId);
            if (object.productSkuId != null)
                message.productSkuId = String(object.productSkuId);
            if (object.productName != null)
                message.productName = String(object.productName);
            if (object.quantity != null)
                message.quantity = object.quantity | 0;
            if (object.status != null)
                message.status = object.status | 0;
            if (object.materials != null)
                message.materials = String(object.materials);
            if (object.workflowInstanceId != null)
                message.workflowInstanceId = String(object.workflowInstanceId);
            if (object.remark != null)
                message.remark = String(object.remark);
            if (object.finishedAt != null)
                message.finishedAt = String(object.finishedAt);
            return message;
        };

        /**
         * Creates a plain object from a ProductionOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbMes.ProductionOrder
         * @static
         * @param {pbMes.ProductionOrder} message ProductionOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProductionOrder.toObject = function toObject(message, options) {
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
                object.bomId = "";
                object.productSkuId = "";
                object.productName = "";
                object.quantity = 0;
                object.status = 0;
                object.materials = "";
                object.workflowInstanceId = "";
                object.remark = "";
                object.finishedAt = "";
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
            if (message.bomId != null && message.hasOwnProperty("bomId"))
                object.bomId = message.bomId;
            if (message.productSkuId != null && message.hasOwnProperty("productSkuId"))
                object.productSkuId = message.productSkuId;
            if (message.productName != null && message.hasOwnProperty("productName"))
                object.productName = message.productName;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.materials != null && message.hasOwnProperty("materials"))
                object.materials = message.materials;
            if (message.workflowInstanceId != null && message.hasOwnProperty("workflowInstanceId"))
                object.workflowInstanceId = message.workflowInstanceId;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            if (message.finishedAt != null && message.hasOwnProperty("finishedAt"))
                object.finishedAt = message.finishedAt;
            return object;
        };

        /**
         * Converts this ProductionOrder to JSON.
         * @function toJSON
         * @memberof pbMes.ProductionOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProductionOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProductionOrder
         * @function getTypeUrl
         * @memberof pbMes.ProductionOrder
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProductionOrder.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbMes.ProductionOrder";
        };

        return ProductionOrder;
    })();

    pbMes.BomFormula = (function() {

        /**
         * Properties of a BomFormula.
         * @memberof pbMes
         * @interface IBomFormula
         * @property {number|Long|null} [id] BomFormula id
         * @property {string|null} [createdAt] BomFormula createdAt
         * @property {string|null} [updatedAt] BomFormula updatedAt
         * @property {string|null} [code] BomFormula code
         * @property {string|null} [name] BomFormula name
         * @property {string|null} [productSkuId] BomFormula productSkuId
         * @property {string|null} [productName] BomFormula productName
         * @property {number|null} [outputQty] BomFormula outputQty
         * @property {string|null} [materials] BomFormula materials
         * @property {number|null} [version] BomFormula version
         * @property {number|null} [status] BomFormula status
         * @property {string|null} [remark] BomFormula remark
         */

        /**
         * Constructs a new BomFormula.
         * @memberof pbMes
         * @classdesc Represents a BomFormula.
         * @implements IBomFormula
         * @constructor
         * @param {pbMes.IBomFormula=} [properties] Properties to set
         */
        function BomFormula(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BomFormula id.
         * @member {number|Long} id
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BomFormula createdAt.
         * @member {string} createdAt
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.createdAt = "";

        /**
         * BomFormula updatedAt.
         * @member {string} updatedAt
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.updatedAt = "";

        /**
         * BomFormula code.
         * @member {string} code
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.code = "";

        /**
         * BomFormula name.
         * @member {string} name
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.name = "";

        /**
         * BomFormula productSkuId.
         * @member {string} productSkuId
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.productSkuId = "";

        /**
         * BomFormula productName.
         * @member {string} productName
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.productName = "";

        /**
         * BomFormula outputQty.
         * @member {number} outputQty
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.outputQty = 0;

        /**
         * BomFormula materials.
         * @member {string} materials
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.materials = "";

        /**
         * BomFormula version.
         * @member {number} version
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.version = 0;

        /**
         * BomFormula status.
         * @member {number} status
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.status = 0;

        /**
         * BomFormula remark.
         * @member {string} remark
         * @memberof pbMes.BomFormula
         * @instance
         */
        BomFormula.prototype.remark = "";

        /**
         * Creates a new BomFormula instance using the specified properties.
         * @function create
         * @memberof pbMes.BomFormula
         * @static
         * @param {pbMes.IBomFormula=} [properties] Properties to set
         * @returns {pbMes.BomFormula} BomFormula instance
         */
        BomFormula.create = function create(properties) {
            return new BomFormula(properties);
        };

        /**
         * Encodes the specified BomFormula message. Does not implicitly {@link pbMes.BomFormula.verify|verify} messages.
         * @function encode
         * @memberof pbMes.BomFormula
         * @static
         * @param {pbMes.IBomFormula} message BomFormula message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BomFormula.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.code);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.name);
            if (message.productSkuId != null && Object.hasOwnProperty.call(message, "productSkuId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.productSkuId);
            if (message.productName != null && Object.hasOwnProperty.call(message, "productName"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.productName);
            if (message.outputQty != null && Object.hasOwnProperty.call(message, "outputQty"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.outputQty);
            if (message.materials != null && Object.hasOwnProperty.call(message, "materials"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.materials);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.version);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.status);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified BomFormula message, length delimited. Does not implicitly {@link pbMes.BomFormula.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbMes.BomFormula
         * @static
         * @param {pbMes.IBomFormula} message BomFormula message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BomFormula.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BomFormula message from the specified reader or buffer.
         * @function decode
         * @memberof pbMes.BomFormula
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbMes.BomFormula} BomFormula
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BomFormula.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbMes.BomFormula();
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
                        message.code = reader.string();
                        break;
                    }
                case 11: {
                        message.name = reader.string();
                        break;
                    }
                case 12: {
                        message.productSkuId = reader.string();
                        break;
                    }
                case 13: {
                        message.productName = reader.string();
                        break;
                    }
                case 14: {
                        message.outputQty = reader.int32();
                        break;
                    }
                case 15: {
                        message.materials = reader.string();
                        break;
                    }
                case 16: {
                        message.version = reader.int32();
                        break;
                    }
                case 17: {
                        message.status = reader.int32();
                        break;
                    }
                case 18: {
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
         * Decodes a BomFormula message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbMes.BomFormula
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbMes.BomFormula} BomFormula
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BomFormula.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BomFormula message.
         * @function verify
         * @memberof pbMes.BomFormula
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BomFormula.verify = function verify(message) {
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
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isString(message.code))
                    return "code: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.productSkuId != null && message.hasOwnProperty("productSkuId"))
                if (!$util.isString(message.productSkuId))
                    return "productSkuId: string expected";
            if (message.productName != null && message.hasOwnProperty("productName"))
                if (!$util.isString(message.productName))
                    return "productName: string expected";
            if (message.outputQty != null && message.hasOwnProperty("outputQty"))
                if (!$util.isInteger(message.outputQty))
                    return "outputQty: integer expected";
            if (message.materials != null && message.hasOwnProperty("materials"))
                if (!$util.isString(message.materials))
                    return "materials: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a BomFormula message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbMes.BomFormula
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbMes.BomFormula} BomFormula
         */
        BomFormula.fromObject = function fromObject(object) {
            if (object instanceof $root.pbMes.BomFormula)
                return object;
            var message = new $root.pbMes.BomFormula();
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
            if (object.code != null)
                message.code = String(object.code);
            if (object.name != null)
                message.name = String(object.name);
            if (object.productSkuId != null)
                message.productSkuId = String(object.productSkuId);
            if (object.productName != null)
                message.productName = String(object.productName);
            if (object.outputQty != null)
                message.outputQty = object.outputQty | 0;
            if (object.materials != null)
                message.materials = String(object.materials);
            if (object.version != null)
                message.version = object.version | 0;
            if (object.status != null)
                message.status = object.status | 0;
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a BomFormula message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbMes.BomFormula
         * @static
         * @param {pbMes.BomFormula} message BomFormula
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BomFormula.toObject = function toObject(message, options) {
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
                object.code = "";
                object.name = "";
                object.productSkuId = "";
                object.productName = "";
                object.outputQty = 0;
                object.materials = "";
                object.version = 0;
                object.status = 0;
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
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.productSkuId != null && message.hasOwnProperty("productSkuId"))
                object.productSkuId = message.productSkuId;
            if (message.productName != null && message.hasOwnProperty("productName"))
                object.productName = message.productName;
            if (message.outputQty != null && message.hasOwnProperty("outputQty"))
                object.outputQty = message.outputQty;
            if (message.materials != null && message.hasOwnProperty("materials"))
                object.materials = message.materials;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this BomFormula to JSON.
         * @function toJSON
         * @memberof pbMes.BomFormula
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BomFormula.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BomFormula
         * @function getTypeUrl
         * @memberof pbMes.BomFormula
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BomFormula.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbMes.BomFormula";
        };

        return BomFormula;
    })();

    pbMes.BomMaterial = (function() {

        /**
         * Properties of a BomMaterial.
         * @memberof pbMes
         * @interface IBomMaterial
         * @property {string|null} [materialSkuId] BomMaterial materialSkuId
         * @property {string|null} [materialName] BomMaterial materialName
         * @property {number|null} [requiredQty] BomMaterial requiredQty
         * @property {string|null} [unit] BomMaterial unit
         */

        /**
         * Constructs a new BomMaterial.
         * @memberof pbMes
         * @classdesc Represents a BomMaterial.
         * @implements IBomMaterial
         * @constructor
         * @param {pbMes.IBomMaterial=} [properties] Properties to set
         */
        function BomMaterial(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BomMaterial materialSkuId.
         * @member {string} materialSkuId
         * @memberof pbMes.BomMaterial
         * @instance
         */
        BomMaterial.prototype.materialSkuId = "";

        /**
         * BomMaterial materialName.
         * @member {string} materialName
         * @memberof pbMes.BomMaterial
         * @instance
         */
        BomMaterial.prototype.materialName = "";

        /**
         * BomMaterial requiredQty.
         * @member {number} requiredQty
         * @memberof pbMes.BomMaterial
         * @instance
         */
        BomMaterial.prototype.requiredQty = 0;

        /**
         * BomMaterial unit.
         * @member {string} unit
         * @memberof pbMes.BomMaterial
         * @instance
         */
        BomMaterial.prototype.unit = "";

        /**
         * Creates a new BomMaterial instance using the specified properties.
         * @function create
         * @memberof pbMes.BomMaterial
         * @static
         * @param {pbMes.IBomMaterial=} [properties] Properties to set
         * @returns {pbMes.BomMaterial} BomMaterial instance
         */
        BomMaterial.create = function create(properties) {
            return new BomMaterial(properties);
        };

        /**
         * Encodes the specified BomMaterial message. Does not implicitly {@link pbMes.BomMaterial.verify|verify} messages.
         * @function encode
         * @memberof pbMes.BomMaterial
         * @static
         * @param {pbMes.IBomMaterial} message BomMaterial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BomMaterial.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.materialSkuId != null && Object.hasOwnProperty.call(message, "materialSkuId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.materialSkuId);
            if (message.materialName != null && Object.hasOwnProperty.call(message, "materialName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.materialName);
            if (message.requiredQty != null && Object.hasOwnProperty.call(message, "requiredQty"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.requiredQty);
            if (message.unit != null && Object.hasOwnProperty.call(message, "unit"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.unit);
            return writer;
        };

        /**
         * Encodes the specified BomMaterial message, length delimited. Does not implicitly {@link pbMes.BomMaterial.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbMes.BomMaterial
         * @static
         * @param {pbMes.IBomMaterial} message BomMaterial message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BomMaterial.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BomMaterial message from the specified reader or buffer.
         * @function decode
         * @memberof pbMes.BomMaterial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbMes.BomMaterial} BomMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BomMaterial.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbMes.BomMaterial();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.materialSkuId = reader.string();
                        break;
                    }
                case 2: {
                        message.materialName = reader.string();
                        break;
                    }
                case 3: {
                        message.requiredQty = reader.int32();
                        break;
                    }
                case 4: {
                        message.unit = reader.string();
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
         * Decodes a BomMaterial message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbMes.BomMaterial
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbMes.BomMaterial} BomMaterial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BomMaterial.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BomMaterial message.
         * @function verify
         * @memberof pbMes.BomMaterial
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BomMaterial.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.materialSkuId != null && message.hasOwnProperty("materialSkuId"))
                if (!$util.isString(message.materialSkuId))
                    return "materialSkuId: string expected";
            if (message.materialName != null && message.hasOwnProperty("materialName"))
                if (!$util.isString(message.materialName))
                    return "materialName: string expected";
            if (message.requiredQty != null && message.hasOwnProperty("requiredQty"))
                if (!$util.isInteger(message.requiredQty))
                    return "requiredQty: integer expected";
            if (message.unit != null && message.hasOwnProperty("unit"))
                if (!$util.isString(message.unit))
                    return "unit: string expected";
            return null;
        };

        /**
         * Creates a BomMaterial message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbMes.BomMaterial
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbMes.BomMaterial} BomMaterial
         */
        BomMaterial.fromObject = function fromObject(object) {
            if (object instanceof $root.pbMes.BomMaterial)
                return object;
            var message = new $root.pbMes.BomMaterial();
            if (object.materialSkuId != null)
                message.materialSkuId = String(object.materialSkuId);
            if (object.materialName != null)
                message.materialName = String(object.materialName);
            if (object.requiredQty != null)
                message.requiredQty = object.requiredQty | 0;
            if (object.unit != null)
                message.unit = String(object.unit);
            return message;
        };

        /**
         * Creates a plain object from a BomMaterial message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbMes.BomMaterial
         * @static
         * @param {pbMes.BomMaterial} message BomMaterial
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BomMaterial.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.materialSkuId = "";
                object.materialName = "";
                object.requiredQty = 0;
                object.unit = "";
            }
            if (message.materialSkuId != null && message.hasOwnProperty("materialSkuId"))
                object.materialSkuId = message.materialSkuId;
            if (message.materialName != null && message.hasOwnProperty("materialName"))
                object.materialName = message.materialName;
            if (message.requiredQty != null && message.hasOwnProperty("requiredQty"))
                object.requiredQty = message.requiredQty;
            if (message.unit != null && message.hasOwnProperty("unit"))
                object.unit = message.unit;
            return object;
        };

        /**
         * Converts this BomMaterial to JSON.
         * @function toJSON
         * @memberof pbMes.BomMaterial
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BomMaterial.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BomMaterial
         * @function getTypeUrl
         * @memberof pbMes.BomMaterial
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BomMaterial.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbMes.BomMaterial";
        };

        return BomMaterial;
    })();

    pbMes.ProductionProgress = (function() {

        /**
         * Properties of a ProductionProgress.
         * @memberof pbMes
         * @interface IProductionProgress
         * @property {string|null} [materialSkuId] ProductionProgress materialSkuId
         * @property {string|null} [materialName] ProductionProgress materialName
         * @property {number|null} [requiredQty] ProductionProgress requiredQty
         * @property {number|null} [allocatedQty] ProductionProgress allocatedQty
         * @property {number|null} [consumedQty] ProductionProgress consumedQty
         */

        /**
         * Constructs a new ProductionProgress.
         * @memberof pbMes
         * @classdesc Represents a ProductionProgress.
         * @implements IProductionProgress
         * @constructor
         * @param {pbMes.IProductionProgress=} [properties] Properties to set
         */
        function ProductionProgress(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProductionProgress materialSkuId.
         * @member {string} materialSkuId
         * @memberof pbMes.ProductionProgress
         * @instance
         */
        ProductionProgress.prototype.materialSkuId = "";

        /**
         * ProductionProgress materialName.
         * @member {string} materialName
         * @memberof pbMes.ProductionProgress
         * @instance
         */
        ProductionProgress.prototype.materialName = "";

        /**
         * ProductionProgress requiredQty.
         * @member {number} requiredQty
         * @memberof pbMes.ProductionProgress
         * @instance
         */
        ProductionProgress.prototype.requiredQty = 0;

        /**
         * ProductionProgress allocatedQty.
         * @member {number} allocatedQty
         * @memberof pbMes.ProductionProgress
         * @instance
         */
        ProductionProgress.prototype.allocatedQty = 0;

        /**
         * ProductionProgress consumedQty.
         * @member {number} consumedQty
         * @memberof pbMes.ProductionProgress
         * @instance
         */
        ProductionProgress.prototype.consumedQty = 0;

        /**
         * Creates a new ProductionProgress instance using the specified properties.
         * @function create
         * @memberof pbMes.ProductionProgress
         * @static
         * @param {pbMes.IProductionProgress=} [properties] Properties to set
         * @returns {pbMes.ProductionProgress} ProductionProgress instance
         */
        ProductionProgress.create = function create(properties) {
            return new ProductionProgress(properties);
        };

        /**
         * Encodes the specified ProductionProgress message. Does not implicitly {@link pbMes.ProductionProgress.verify|verify} messages.
         * @function encode
         * @memberof pbMes.ProductionProgress
         * @static
         * @param {pbMes.IProductionProgress} message ProductionProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductionProgress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.materialSkuId != null && Object.hasOwnProperty.call(message, "materialSkuId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.materialSkuId);
            if (message.materialName != null && Object.hasOwnProperty.call(message, "materialName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.materialName);
            if (message.requiredQty != null && Object.hasOwnProperty.call(message, "requiredQty"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.requiredQty);
            if (message.allocatedQty != null && Object.hasOwnProperty.call(message, "allocatedQty"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.allocatedQty);
            if (message.consumedQty != null && Object.hasOwnProperty.call(message, "consumedQty"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.consumedQty);
            return writer;
        };

        /**
         * Encodes the specified ProductionProgress message, length delimited. Does not implicitly {@link pbMes.ProductionProgress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbMes.ProductionProgress
         * @static
         * @param {pbMes.IProductionProgress} message ProductionProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductionProgress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProductionProgress message from the specified reader or buffer.
         * @function decode
         * @memberof pbMes.ProductionProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbMes.ProductionProgress} ProductionProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductionProgress.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbMes.ProductionProgress();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.materialSkuId = reader.string();
                        break;
                    }
                case 2: {
                        message.materialName = reader.string();
                        break;
                    }
                case 3: {
                        message.requiredQty = reader.int32();
                        break;
                    }
                case 4: {
                        message.allocatedQty = reader.int32();
                        break;
                    }
                case 5: {
                        message.consumedQty = reader.int32();
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
         * Decodes a ProductionProgress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbMes.ProductionProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbMes.ProductionProgress} ProductionProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductionProgress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProductionProgress message.
         * @function verify
         * @memberof pbMes.ProductionProgress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProductionProgress.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.materialSkuId != null && message.hasOwnProperty("materialSkuId"))
                if (!$util.isString(message.materialSkuId))
                    return "materialSkuId: string expected";
            if (message.materialName != null && message.hasOwnProperty("materialName"))
                if (!$util.isString(message.materialName))
                    return "materialName: string expected";
            if (message.requiredQty != null && message.hasOwnProperty("requiredQty"))
                if (!$util.isInteger(message.requiredQty))
                    return "requiredQty: integer expected";
            if (message.allocatedQty != null && message.hasOwnProperty("allocatedQty"))
                if (!$util.isInteger(message.allocatedQty))
                    return "allocatedQty: integer expected";
            if (message.consumedQty != null && message.hasOwnProperty("consumedQty"))
                if (!$util.isInteger(message.consumedQty))
                    return "consumedQty: integer expected";
            return null;
        };

        /**
         * Creates a ProductionProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbMes.ProductionProgress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbMes.ProductionProgress} ProductionProgress
         */
        ProductionProgress.fromObject = function fromObject(object) {
            if (object instanceof $root.pbMes.ProductionProgress)
                return object;
            var message = new $root.pbMes.ProductionProgress();
            if (object.materialSkuId != null)
                message.materialSkuId = String(object.materialSkuId);
            if (object.materialName != null)
                message.materialName = String(object.materialName);
            if (object.requiredQty != null)
                message.requiredQty = object.requiredQty | 0;
            if (object.allocatedQty != null)
                message.allocatedQty = object.allocatedQty | 0;
            if (object.consumedQty != null)
                message.consumedQty = object.consumedQty | 0;
            return message;
        };

        /**
         * Creates a plain object from a ProductionProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbMes.ProductionProgress
         * @static
         * @param {pbMes.ProductionProgress} message ProductionProgress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProductionProgress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.materialSkuId = "";
                object.materialName = "";
                object.requiredQty = 0;
                object.allocatedQty = 0;
                object.consumedQty = 0;
            }
            if (message.materialSkuId != null && message.hasOwnProperty("materialSkuId"))
                object.materialSkuId = message.materialSkuId;
            if (message.materialName != null && message.hasOwnProperty("materialName"))
                object.materialName = message.materialName;
            if (message.requiredQty != null && message.hasOwnProperty("requiredQty"))
                object.requiredQty = message.requiredQty;
            if (message.allocatedQty != null && message.hasOwnProperty("allocatedQty"))
                object.allocatedQty = message.allocatedQty;
            if (message.consumedQty != null && message.hasOwnProperty("consumedQty"))
                object.consumedQty = message.consumedQty;
            return object;
        };

        /**
         * Converts this ProductionProgress to JSON.
         * @function toJSON
         * @memberof pbMes.ProductionProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProductionProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProductionProgress
         * @function getTypeUrl
         * @memberof pbMes.ProductionProgress
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProductionProgress.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbMes.ProductionProgress";
        };

        return ProductionProgress;
    })();

    pbMes.ProductionRecord = (function() {

        /**
         * Properties of a ProductionRecord.
         * @memberof pbMes
         * @interface IProductionRecord
         * @property {number|Long|null} [id] ProductionRecord id
         * @property {string|null} [createdAt] ProductionRecord createdAt
         * @property {number|Long|null} [orderId] ProductionRecord orderId
         * @property {string|null} [materialSkuId] ProductionRecord materialSkuId
         * @property {number|null} [quantity] ProductionRecord quantity
         * @property {number|null} [recordType] ProductionRecord recordType
         * @property {string|null} [operatorId] ProductionRecord operatorId
         * @property {string|null} [operatorName] ProductionRecord operatorName
         * @property {string|null} [remark] ProductionRecord remark
         */

        /**
         * Constructs a new ProductionRecord.
         * @memberof pbMes
         * @classdesc Represents a ProductionRecord.
         * @implements IProductionRecord
         * @constructor
         * @param {pbMes.IProductionRecord=} [properties] Properties to set
         */
        function ProductionRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ProductionRecord id.
         * @member {number|Long} id
         * @memberof pbMes.ProductionRecord
         * @instance
         */
        ProductionRecord.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ProductionRecord createdAt.
         * @member {string} createdAt
         * @memberof pbMes.ProductionRecord
         * @instance
         */
        ProductionRecord.prototype.createdAt = "";

        /**
         * ProductionRecord orderId.
         * @member {number|Long} orderId
         * @memberof pbMes.ProductionRecord
         * @instance
         */
        ProductionRecord.prototype.orderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ProductionRecord materialSkuId.
         * @member {string} materialSkuId
         * @memberof pbMes.ProductionRecord
         * @instance
         */
        ProductionRecord.prototype.materialSkuId = "";

        /**
         * ProductionRecord quantity.
         * @member {number} quantity
         * @memberof pbMes.ProductionRecord
         * @instance
         */
        ProductionRecord.prototype.quantity = 0;

        /**
         * ProductionRecord recordType.
         * @member {number} recordType
         * @memberof pbMes.ProductionRecord
         * @instance
         */
        ProductionRecord.prototype.recordType = 0;

        /**
         * ProductionRecord operatorId.
         * @member {string} operatorId
         * @memberof pbMes.ProductionRecord
         * @instance
         */
        ProductionRecord.prototype.operatorId = "";

        /**
         * ProductionRecord operatorName.
         * @member {string} operatorName
         * @memberof pbMes.ProductionRecord
         * @instance
         */
        ProductionRecord.prototype.operatorName = "";

        /**
         * ProductionRecord remark.
         * @member {string} remark
         * @memberof pbMes.ProductionRecord
         * @instance
         */
        ProductionRecord.prototype.remark = "";

        /**
         * Creates a new ProductionRecord instance using the specified properties.
         * @function create
         * @memberof pbMes.ProductionRecord
         * @static
         * @param {pbMes.IProductionRecord=} [properties] Properties to set
         * @returns {pbMes.ProductionRecord} ProductionRecord instance
         */
        ProductionRecord.create = function create(properties) {
            return new ProductionRecord(properties);
        };

        /**
         * Encodes the specified ProductionRecord message. Does not implicitly {@link pbMes.ProductionRecord.verify|verify} messages.
         * @function encode
         * @memberof pbMes.ProductionRecord
         * @static
         * @param {pbMes.IProductionRecord} message ProductionRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductionRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.orderId != null && Object.hasOwnProperty.call(message, "orderId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.orderId);
            if (message.materialSkuId != null && Object.hasOwnProperty.call(message, "materialSkuId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.materialSkuId);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.quantity);
            if (message.recordType != null && Object.hasOwnProperty.call(message, "recordType"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.recordType);
            if (message.operatorId != null && Object.hasOwnProperty.call(message, "operatorId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.operatorId);
            if (message.operatorName != null && Object.hasOwnProperty.call(message, "operatorName"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.operatorName);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified ProductionRecord message, length delimited. Does not implicitly {@link pbMes.ProductionRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbMes.ProductionRecord
         * @static
         * @param {pbMes.IProductionRecord} message ProductionRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProductionRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ProductionRecord message from the specified reader or buffer.
         * @function decode
         * @memberof pbMes.ProductionRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbMes.ProductionRecord} ProductionRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductionRecord.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbMes.ProductionRecord();
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
                        message.orderId = reader.int64();
                        break;
                    }
                case 11: {
                        message.materialSkuId = reader.string();
                        break;
                    }
                case 12: {
                        message.quantity = reader.int32();
                        break;
                    }
                case 13: {
                        message.recordType = reader.int32();
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
         * Decodes a ProductionRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbMes.ProductionRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbMes.ProductionRecord} ProductionRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProductionRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProductionRecord message.
         * @function verify
         * @memberof pbMes.ProductionRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProductionRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                if (!$util.isInteger(message.orderId) && !(message.orderId && $util.isInteger(message.orderId.low) && $util.isInteger(message.orderId.high)))
                    return "orderId: integer|Long expected";
            if (message.materialSkuId != null && message.hasOwnProperty("materialSkuId"))
                if (!$util.isString(message.materialSkuId))
                    return "materialSkuId: string expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            if (message.recordType != null && message.hasOwnProperty("recordType"))
                if (!$util.isInteger(message.recordType))
                    return "recordType: integer expected";
            if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                if (!$util.isString(message.operatorId))
                    return "operatorId: string expected";
            if (message.operatorName != null && message.hasOwnProperty("operatorName"))
                if (!$util.isString(message.operatorName))
                    return "operatorName: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a ProductionRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbMes.ProductionRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbMes.ProductionRecord} ProductionRecord
         */
        ProductionRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.pbMes.ProductionRecord)
                return object;
            var message = new $root.pbMes.ProductionRecord();
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
            if (object.orderId != null)
                if ($util.Long)
                    (message.orderId = $util.Long.fromValue(object.orderId)).unsigned = false;
                else if (typeof object.orderId === "string")
                    message.orderId = parseInt(object.orderId, 10);
                else if (typeof object.orderId === "number")
                    message.orderId = object.orderId;
                else if (typeof object.orderId === "object")
                    message.orderId = new $util.LongBits(object.orderId.low >>> 0, object.orderId.high >>> 0).toNumber();
            if (object.materialSkuId != null)
                message.materialSkuId = String(object.materialSkuId);
            if (object.quantity != null)
                message.quantity = object.quantity | 0;
            if (object.recordType != null)
                message.recordType = object.recordType | 0;
            if (object.operatorId != null)
                message.operatorId = String(object.operatorId);
            if (object.operatorName != null)
                message.operatorName = String(object.operatorName);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a ProductionRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbMes.ProductionRecord
         * @static
         * @param {pbMes.ProductionRecord} message ProductionRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProductionRecord.toObject = function toObject(message, options) {
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
                    object.orderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orderId = options.longs === String ? "0" : 0;
                object.materialSkuId = "";
                object.quantity = 0;
                object.recordType = 0;
                object.operatorId = "";
                object.operatorName = "";
                object.remark = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                if (typeof message.orderId === "number")
                    object.orderId = options.longs === String ? String(message.orderId) : message.orderId;
                else
                    object.orderId = options.longs === String ? $util.Long.prototype.toString.call(message.orderId) : options.longs === Number ? new $util.LongBits(message.orderId.low >>> 0, message.orderId.high >>> 0).toNumber() : message.orderId;
            if (message.materialSkuId != null && message.hasOwnProperty("materialSkuId"))
                object.materialSkuId = message.materialSkuId;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            if (message.recordType != null && message.hasOwnProperty("recordType"))
                object.recordType = message.recordType;
            if (message.operatorId != null && message.hasOwnProperty("operatorId"))
                object.operatorId = message.operatorId;
            if (message.operatorName != null && message.hasOwnProperty("operatorName"))
                object.operatorName = message.operatorName;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this ProductionRecord to JSON.
         * @function toJSON
         * @memberof pbMes.ProductionRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProductionRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ProductionRecord
         * @function getTypeUrl
         * @memberof pbMes.ProductionRecord
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ProductionRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbMes.ProductionRecord";
        };

        return ProductionRecord;
    })();

    pbMes.MesService = (function() {

        /**
         * Constructs a new MesService service.
         * @memberof pbMes
         * @classdesc Represents a MesService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function MesService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (MesService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = MesService;

        /**
         * Creates new MesService service using the specified rpc implementation.
         * @function create
         * @memberof pbMes.MesService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {MesService} RPC service. Useful where requests and/or responses are streamed.
         */
        MesService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbMes.MesService#createProductionOrder}.
         * @memberof pbMes.MesService
         * @typedef CreateProductionOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CreateProductionOrder.
         * @function createProductionOrder
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IProductionOrder} request ProductionOrder message or plain object
         * @param {pbMes.MesService.CreateProductionOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.createProductionOrder = function createProductionOrder(request, callback) {
            return this.rpcCall(createProductionOrder, $root.pbMes.ProductionOrder, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateProductionOrder" });

        /**
         * Calls CreateProductionOrder.
         * @function createProductionOrder
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IProductionOrder} request ProductionOrder message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#updateProductionOrder}.
         * @memberof pbMes.MesService
         * @typedef UpdateProductionOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls UpdateProductionOrder.
         * @function updateProductionOrder
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IProductionOrder} request ProductionOrder message or plain object
         * @param {pbMes.MesService.UpdateProductionOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.updateProductionOrder = function updateProductionOrder(request, callback) {
            return this.rpcCall(updateProductionOrder, $root.pbMes.ProductionOrder, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateProductionOrder" });

        /**
         * Calls UpdateProductionOrder.
         * @function updateProductionOrder
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IProductionOrder} request ProductionOrder message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#deleteProductionOrder}.
         * @memberof pbMes.MesService
         * @typedef DeleteProductionOrderCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls DeleteProductionOrder.
         * @function deleteProductionOrder
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbMes.MesService.DeleteProductionOrderCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.deleteProductionOrder = function deleteProductionOrder(request, callback) {
            return this.rpcCall(deleteProductionOrder, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteProductionOrder" });

        /**
         * Calls DeleteProductionOrder.
         * @function deleteProductionOrder
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#findProductionOrderById}.
         * @memberof pbMes.MesService
         * @typedef FindProductionOrderByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbMes.FindProductionOrderReply} [response] FindProductionOrderReply
         */

        /**
         * Calls FindProductionOrderById.
         * @function findProductionOrderById
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbMes.MesService.FindProductionOrderByIdCallback} callback Node-style callback called with the error, if any, and FindProductionOrderReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.findProductionOrderById = function findProductionOrderById(request, callback) {
            return this.rpcCall(findProductionOrderById, $root.pbcommon.IdArgs, $root.pbMes.FindProductionOrderReply, request, callback);
        }, "name", { value: "FindProductionOrderById" });

        /**
         * Calls FindProductionOrderById.
         * @function findProductionOrderById
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbMes.FindProductionOrderReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#findProductionOrderList}.
         * @memberof pbMes.MesService
         * @typedef FindProductionOrderListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbMes.FindProductionOrderReply} [response] FindProductionOrderReply
         */

        /**
         * Calls FindProductionOrderList.
         * @function findProductionOrderList
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IFindProductionOrderArgs} request FindProductionOrderArgs message or plain object
         * @param {pbMes.MesService.FindProductionOrderListCallback} callback Node-style callback called with the error, if any, and FindProductionOrderReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.findProductionOrderList = function findProductionOrderList(request, callback) {
            return this.rpcCall(findProductionOrderList, $root.pbMes.FindProductionOrderArgs, $root.pbMes.FindProductionOrderReply, request, callback);
        }, "name", { value: "FindProductionOrderList" });

        /**
         * Calls FindProductionOrderList.
         * @function findProductionOrderList
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IFindProductionOrderArgs} request FindProductionOrderArgs message or plain object
         * @returns {Promise<pbMes.FindProductionOrderReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#startProduction}.
         * @memberof pbMes.MesService
         * @typedef StartProductionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls StartProduction.
         * @function startProduction
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbMes.MesService.StartProductionCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.startProduction = function startProduction(request, callback) {
            return this.rpcCall(startProduction, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "StartProduction" });

        /**
         * Calls StartProduction.
         * @function startProduction
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#recordMaterialConsumption}.
         * @memberof pbMes.MesService
         * @typedef RecordMaterialConsumptionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls RecordMaterialConsumption.
         * @function recordMaterialConsumption
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IRecordMaterialArgs} request RecordMaterialArgs message or plain object
         * @param {pbMes.MesService.RecordMaterialConsumptionCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.recordMaterialConsumption = function recordMaterialConsumption(request, callback) {
            return this.rpcCall(recordMaterialConsumption, $root.pbMes.RecordMaterialArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "RecordMaterialConsumption" });

        /**
         * Calls RecordMaterialConsumption.
         * @function recordMaterialConsumption
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IRecordMaterialArgs} request RecordMaterialArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#completeProduction}.
         * @memberof pbMes.MesService
         * @typedef CompleteProductionCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CompleteProduction.
         * @function completeProduction
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbMes.MesService.CompleteProductionCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.completeProduction = function completeProduction(request, callback) {
            return this.rpcCall(completeProduction, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CompleteProduction" });

        /**
         * Calls CompleteProduction.
         * @function completeProduction
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#createBomFormula}.
         * @memberof pbMes.MesService
         * @typedef CreateBomFormulaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CreateBomFormula.
         * @function createBomFormula
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IBomFormula} request BomFormula message or plain object
         * @param {pbMes.MesService.CreateBomFormulaCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.createBomFormula = function createBomFormula(request, callback) {
            return this.rpcCall(createBomFormula, $root.pbMes.BomFormula, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateBomFormula" });

        /**
         * Calls CreateBomFormula.
         * @function createBomFormula
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IBomFormula} request BomFormula message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#updateBomFormula}.
         * @memberof pbMes.MesService
         * @typedef UpdateBomFormulaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls UpdateBomFormula.
         * @function updateBomFormula
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IBomFormula} request BomFormula message or plain object
         * @param {pbMes.MesService.UpdateBomFormulaCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.updateBomFormula = function updateBomFormula(request, callback) {
            return this.rpcCall(updateBomFormula, $root.pbMes.BomFormula, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateBomFormula" });

        /**
         * Calls UpdateBomFormula.
         * @function updateBomFormula
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IBomFormula} request BomFormula message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#deleteBomFormula}.
         * @memberof pbMes.MesService
         * @typedef DeleteBomFormulaCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls DeleteBomFormula.
         * @function deleteBomFormula
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbMes.MesService.DeleteBomFormulaCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.deleteBomFormula = function deleteBomFormula(request, callback) {
            return this.rpcCall(deleteBomFormula, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteBomFormula" });

        /**
         * Calls DeleteBomFormula.
         * @function deleteBomFormula
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#findBomFormulaById}.
         * @memberof pbMes.MesService
         * @typedef FindBomFormulaByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbMes.FindBomFormulaReply} [response] FindBomFormulaReply
         */

        /**
         * Calls FindBomFormulaById.
         * @function findBomFormulaById
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbMes.MesService.FindBomFormulaByIdCallback} callback Node-style callback called with the error, if any, and FindBomFormulaReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.findBomFormulaById = function findBomFormulaById(request, callback) {
            return this.rpcCall(findBomFormulaById, $root.pbcommon.IdArgs, $root.pbMes.FindBomFormulaReply, request, callback);
        }, "name", { value: "FindBomFormulaById" });

        /**
         * Calls FindBomFormulaById.
         * @function findBomFormulaById
         * @memberof pbMes.MesService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbMes.FindBomFormulaReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbMes.MesService#findBomFormulaList}.
         * @memberof pbMes.MesService
         * @typedef FindBomFormulaListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbMes.FindBomFormulaReply} [response] FindBomFormulaReply
         */

        /**
         * Calls FindBomFormulaList.
         * @function findBomFormulaList
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IFindBomFormulaArgs} request FindBomFormulaArgs message or plain object
         * @param {pbMes.MesService.FindBomFormulaListCallback} callback Node-style callback called with the error, if any, and FindBomFormulaReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(MesService.prototype.findBomFormulaList = function findBomFormulaList(request, callback) {
            return this.rpcCall(findBomFormulaList, $root.pbMes.FindBomFormulaArgs, $root.pbMes.FindBomFormulaReply, request, callback);
        }, "name", { value: "FindBomFormulaList" });

        /**
         * Calls FindBomFormulaList.
         * @function findBomFormulaList
         * @memberof pbMes.MesService
         * @instance
         * @param {pbMes.IFindBomFormulaArgs} request FindBomFormulaArgs message or plain object
         * @returns {Promise<pbMes.FindBomFormulaReply>} Promise
         * @variation 2
         */

        return MesService;
    })();

    pbMes.FindProductionOrderArgs = (function() {

        /**
         * Properties of a FindProductionOrderArgs.
         * @memberof pbMes
         * @interface IFindProductionOrderArgs
         * @property {number|null} [page] FindProductionOrderArgs page
         * @property {number|null} [pageSize] FindProductionOrderArgs pageSize
         * @property {string|null} [productSkuId] FindProductionOrderArgs productSkuId
         * @property {number|null} [status] FindProductionOrderArgs status
         * @property {string|null} [keyword] FindProductionOrderArgs keyword
         */

        /**
         * Constructs a new FindProductionOrderArgs.
         * @memberof pbMes
         * @classdesc Represents a FindProductionOrderArgs.
         * @implements IFindProductionOrderArgs
         * @constructor
         * @param {pbMes.IFindProductionOrderArgs=} [properties] Properties to set
         */
        function FindProductionOrderArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindProductionOrderArgs page.
         * @member {number} page
         * @memberof pbMes.FindProductionOrderArgs
         * @instance
         */
        FindProductionOrderArgs.prototype.page = 0;

        /**
         * FindProductionOrderArgs pageSize.
         * @member {number} pageSize
         * @memberof pbMes.FindProductionOrderArgs
         * @instance
         */
        FindProductionOrderArgs.prototype.pageSize = 0;

        /**
         * FindProductionOrderArgs productSkuId.
         * @member {string} productSkuId
         * @memberof pbMes.FindProductionOrderArgs
         * @instance
         */
        FindProductionOrderArgs.prototype.productSkuId = "";

        /**
         * FindProductionOrderArgs status.
         * @member {number} status
         * @memberof pbMes.FindProductionOrderArgs
         * @instance
         */
        FindProductionOrderArgs.prototype.status = 0;

        /**
         * FindProductionOrderArgs keyword.
         * @member {string} keyword
         * @memberof pbMes.FindProductionOrderArgs
         * @instance
         */
        FindProductionOrderArgs.prototype.keyword = "";

        /**
         * Creates a new FindProductionOrderArgs instance using the specified properties.
         * @function create
         * @memberof pbMes.FindProductionOrderArgs
         * @static
         * @param {pbMes.IFindProductionOrderArgs=} [properties] Properties to set
         * @returns {pbMes.FindProductionOrderArgs} FindProductionOrderArgs instance
         */
        FindProductionOrderArgs.create = function create(properties) {
            return new FindProductionOrderArgs(properties);
        };

        /**
         * Encodes the specified FindProductionOrderArgs message. Does not implicitly {@link pbMes.FindProductionOrderArgs.verify|verify} messages.
         * @function encode
         * @memberof pbMes.FindProductionOrderArgs
         * @static
         * @param {pbMes.IFindProductionOrderArgs} message FindProductionOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindProductionOrderArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
            if (message.productSkuId != null && Object.hasOwnProperty.call(message, "productSkuId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.productSkuId);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            if (message.keyword != null && Object.hasOwnProperty.call(message, "keyword"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.keyword);
            return writer;
        };

        /**
         * Encodes the specified FindProductionOrderArgs message, length delimited. Does not implicitly {@link pbMes.FindProductionOrderArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbMes.FindProductionOrderArgs
         * @static
         * @param {pbMes.IFindProductionOrderArgs} message FindProductionOrderArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindProductionOrderArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindProductionOrderArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbMes.FindProductionOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbMes.FindProductionOrderArgs} FindProductionOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindProductionOrderArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbMes.FindProductionOrderArgs();
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
                        message.productSkuId = reader.string();
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
         * Decodes a FindProductionOrderArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbMes.FindProductionOrderArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbMes.FindProductionOrderArgs} FindProductionOrderArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindProductionOrderArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindProductionOrderArgs message.
         * @function verify
         * @memberof pbMes.FindProductionOrderArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindProductionOrderArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.productSkuId != null && message.hasOwnProperty("productSkuId"))
                if (!$util.isString(message.productSkuId))
                    return "productSkuId: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                if (!$util.isString(message.keyword))
                    return "keyword: string expected";
            return null;
        };

        /**
         * Creates a FindProductionOrderArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbMes.FindProductionOrderArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbMes.FindProductionOrderArgs} FindProductionOrderArgs
         */
        FindProductionOrderArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbMes.FindProductionOrderArgs)
                return object;
            var message = new $root.pbMes.FindProductionOrderArgs();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            if (object.productSkuId != null)
                message.productSkuId = String(object.productSkuId);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.keyword != null)
                message.keyword = String(object.keyword);
            return message;
        };

        /**
         * Creates a plain object from a FindProductionOrderArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbMes.FindProductionOrderArgs
         * @static
         * @param {pbMes.FindProductionOrderArgs} message FindProductionOrderArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindProductionOrderArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.page = 0;
                object.pageSize = 0;
                object.productSkuId = "";
                object.status = 0;
                object.keyword = "";
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.productSkuId != null && message.hasOwnProperty("productSkuId"))
                object.productSkuId = message.productSkuId;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                object.keyword = message.keyword;
            return object;
        };

        /**
         * Converts this FindProductionOrderArgs to JSON.
         * @function toJSON
         * @memberof pbMes.FindProductionOrderArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindProductionOrderArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindProductionOrderArgs
         * @function getTypeUrl
         * @memberof pbMes.FindProductionOrderArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindProductionOrderArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbMes.FindProductionOrderArgs";
        };

        return FindProductionOrderArgs;
    })();

    pbMes.FindProductionOrderReply = (function() {

        /**
         * Properties of a FindProductionOrderReply.
         * @memberof pbMes
         * @interface IFindProductionOrderReply
         * @property {number|null} [code] FindProductionOrderReply code
         * @property {string|null} [msg] FindProductionOrderReply msg
         * @property {Array.<pbMes.IProductionOrder>|null} [data] FindProductionOrderReply data
         * @property {number|null} [total] FindProductionOrderReply total
         */

        /**
         * Constructs a new FindProductionOrderReply.
         * @memberof pbMes
         * @classdesc Represents a FindProductionOrderReply.
         * @implements IFindProductionOrderReply
         * @constructor
         * @param {pbMes.IFindProductionOrderReply=} [properties] Properties to set
         */
        function FindProductionOrderReply(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindProductionOrderReply code.
         * @member {number} code
         * @memberof pbMes.FindProductionOrderReply
         * @instance
         */
        FindProductionOrderReply.prototype.code = 0;

        /**
         * FindProductionOrderReply msg.
         * @member {string} msg
         * @memberof pbMes.FindProductionOrderReply
         * @instance
         */
        FindProductionOrderReply.prototype.msg = "";

        /**
         * FindProductionOrderReply data.
         * @member {Array.<pbMes.IProductionOrder>} data
         * @memberof pbMes.FindProductionOrderReply
         * @instance
         */
        FindProductionOrderReply.prototype.data = $util.emptyArray;

        /**
         * FindProductionOrderReply total.
         * @member {number} total
         * @memberof pbMes.FindProductionOrderReply
         * @instance
         */
        FindProductionOrderReply.prototype.total = 0;

        /**
         * Creates a new FindProductionOrderReply instance using the specified properties.
         * @function create
         * @memberof pbMes.FindProductionOrderReply
         * @static
         * @param {pbMes.IFindProductionOrderReply=} [properties] Properties to set
         * @returns {pbMes.FindProductionOrderReply} FindProductionOrderReply instance
         */
        FindProductionOrderReply.create = function create(properties) {
            return new FindProductionOrderReply(properties);
        };

        /**
         * Encodes the specified FindProductionOrderReply message. Does not implicitly {@link pbMes.FindProductionOrderReply.verify|verify} messages.
         * @function encode
         * @memberof pbMes.FindProductionOrderReply
         * @static
         * @param {pbMes.IFindProductionOrderReply} message FindProductionOrderReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindProductionOrderReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.pbMes.ProductionOrder.encode(message.data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindProductionOrderReply message, length delimited. Does not implicitly {@link pbMes.FindProductionOrderReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbMes.FindProductionOrderReply
         * @static
         * @param {pbMes.IFindProductionOrderReply} message FindProductionOrderReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindProductionOrderReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindProductionOrderReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbMes.FindProductionOrderReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbMes.FindProductionOrderReply} FindProductionOrderReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindProductionOrderReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbMes.FindProductionOrderReply();
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
                        message.data.push($root.pbMes.ProductionOrder.decode(reader, reader.uint32()));
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
         * Decodes a FindProductionOrderReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbMes.FindProductionOrderReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbMes.FindProductionOrderReply} FindProductionOrderReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindProductionOrderReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindProductionOrderReply message.
         * @function verify
         * @memberof pbMes.FindProductionOrderReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindProductionOrderReply.verify = function verify(message) {
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
                    var error = $root.pbMes.ProductionOrder.verify(message.data[i]);
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
         * Creates a FindProductionOrderReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbMes.FindProductionOrderReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbMes.FindProductionOrderReply} FindProductionOrderReply
         */
        FindProductionOrderReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbMes.FindProductionOrderReply)
                return object;
            var message = new $root.pbMes.FindProductionOrderReply();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".pbMes.FindProductionOrderReply.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".pbMes.FindProductionOrderReply.data: object expected");
                    message.data[i] = $root.pbMes.ProductionOrder.fromObject(object.data[i]);
                }
            }
            if (object.total != null)
                message.total = object.total | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindProductionOrderReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbMes.FindProductionOrderReply
         * @static
         * @param {pbMes.FindProductionOrderReply} message FindProductionOrderReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindProductionOrderReply.toObject = function toObject(message, options) {
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
                    object.data[j] = $root.pbMes.ProductionOrder.toObject(message.data[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            return object;
        };

        /**
         * Converts this FindProductionOrderReply to JSON.
         * @function toJSON
         * @memberof pbMes.FindProductionOrderReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindProductionOrderReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindProductionOrderReply
         * @function getTypeUrl
         * @memberof pbMes.FindProductionOrderReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindProductionOrderReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbMes.FindProductionOrderReply";
        };

        return FindProductionOrderReply;
    })();

    pbMes.RecordMaterialArgs = (function() {

        /**
         * Properties of a RecordMaterialArgs.
         * @memberof pbMes
         * @interface IRecordMaterialArgs
         * @property {number|Long|null} [orderId] RecordMaterialArgs orderId
         * @property {string|null} [materialSkuId] RecordMaterialArgs materialSkuId
         * @property {number|null} [quantity] RecordMaterialArgs quantity
         * @property {number|null} [recordType] RecordMaterialArgs recordType
         * @property {string|null} [remark] RecordMaterialArgs remark
         */

        /**
         * Constructs a new RecordMaterialArgs.
         * @memberof pbMes
         * @classdesc Represents a RecordMaterialArgs.
         * @implements IRecordMaterialArgs
         * @constructor
         * @param {pbMes.IRecordMaterialArgs=} [properties] Properties to set
         */
        function RecordMaterialArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RecordMaterialArgs orderId.
         * @member {number|Long} orderId
         * @memberof pbMes.RecordMaterialArgs
         * @instance
         */
        RecordMaterialArgs.prototype.orderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RecordMaterialArgs materialSkuId.
         * @member {string} materialSkuId
         * @memberof pbMes.RecordMaterialArgs
         * @instance
         */
        RecordMaterialArgs.prototype.materialSkuId = "";

        /**
         * RecordMaterialArgs quantity.
         * @member {number} quantity
         * @memberof pbMes.RecordMaterialArgs
         * @instance
         */
        RecordMaterialArgs.prototype.quantity = 0;

        /**
         * RecordMaterialArgs recordType.
         * @member {number} recordType
         * @memberof pbMes.RecordMaterialArgs
         * @instance
         */
        RecordMaterialArgs.prototype.recordType = 0;

        /**
         * RecordMaterialArgs remark.
         * @member {string} remark
         * @memberof pbMes.RecordMaterialArgs
         * @instance
         */
        RecordMaterialArgs.prototype.remark = "";

        /**
         * Creates a new RecordMaterialArgs instance using the specified properties.
         * @function create
         * @memberof pbMes.RecordMaterialArgs
         * @static
         * @param {pbMes.IRecordMaterialArgs=} [properties] Properties to set
         * @returns {pbMes.RecordMaterialArgs} RecordMaterialArgs instance
         */
        RecordMaterialArgs.create = function create(properties) {
            return new RecordMaterialArgs(properties);
        };

        /**
         * Encodes the specified RecordMaterialArgs message. Does not implicitly {@link pbMes.RecordMaterialArgs.verify|verify} messages.
         * @function encode
         * @memberof pbMes.RecordMaterialArgs
         * @static
         * @param {pbMes.IRecordMaterialArgs} message RecordMaterialArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordMaterialArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orderId != null && Object.hasOwnProperty.call(message, "orderId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.orderId);
            if (message.materialSkuId != null && Object.hasOwnProperty.call(message, "materialSkuId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.materialSkuId);
            if (message.quantity != null && Object.hasOwnProperty.call(message, "quantity"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.quantity);
            if (message.recordType != null && Object.hasOwnProperty.call(message, "recordType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.recordType);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified RecordMaterialArgs message, length delimited. Does not implicitly {@link pbMes.RecordMaterialArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbMes.RecordMaterialArgs
         * @static
         * @param {pbMes.IRecordMaterialArgs} message RecordMaterialArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordMaterialArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RecordMaterialArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbMes.RecordMaterialArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbMes.RecordMaterialArgs} RecordMaterialArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordMaterialArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbMes.RecordMaterialArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.orderId = reader.int64();
                        break;
                    }
                case 2: {
                        message.materialSkuId = reader.string();
                        break;
                    }
                case 3: {
                        message.quantity = reader.int32();
                        break;
                    }
                case 4: {
                        message.recordType = reader.int32();
                        break;
                    }
                case 5: {
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
         * Decodes a RecordMaterialArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbMes.RecordMaterialArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbMes.RecordMaterialArgs} RecordMaterialArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordMaterialArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RecordMaterialArgs message.
         * @function verify
         * @memberof pbMes.RecordMaterialArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RecordMaterialArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                if (!$util.isInteger(message.orderId) && !(message.orderId && $util.isInteger(message.orderId.low) && $util.isInteger(message.orderId.high)))
                    return "orderId: integer|Long expected";
            if (message.materialSkuId != null && message.hasOwnProperty("materialSkuId"))
                if (!$util.isString(message.materialSkuId))
                    return "materialSkuId: string expected";
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                if (!$util.isInteger(message.quantity))
                    return "quantity: integer expected";
            if (message.recordType != null && message.hasOwnProperty("recordType"))
                if (!$util.isInteger(message.recordType))
                    return "recordType: integer expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a RecordMaterialArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbMes.RecordMaterialArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbMes.RecordMaterialArgs} RecordMaterialArgs
         */
        RecordMaterialArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbMes.RecordMaterialArgs)
                return object;
            var message = new $root.pbMes.RecordMaterialArgs();
            if (object.orderId != null)
                if ($util.Long)
                    (message.orderId = $util.Long.fromValue(object.orderId)).unsigned = false;
                else if (typeof object.orderId === "string")
                    message.orderId = parseInt(object.orderId, 10);
                else if (typeof object.orderId === "number")
                    message.orderId = object.orderId;
                else if (typeof object.orderId === "object")
                    message.orderId = new $util.LongBits(object.orderId.low >>> 0, object.orderId.high >>> 0).toNumber();
            if (object.materialSkuId != null)
                message.materialSkuId = String(object.materialSkuId);
            if (object.quantity != null)
                message.quantity = object.quantity | 0;
            if (object.recordType != null)
                message.recordType = object.recordType | 0;
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a RecordMaterialArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbMes.RecordMaterialArgs
         * @static
         * @param {pbMes.RecordMaterialArgs} message RecordMaterialArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RecordMaterialArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.orderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orderId = options.longs === String ? "0" : 0;
                object.materialSkuId = "";
                object.quantity = 0;
                object.recordType = 0;
                object.remark = "";
            }
            if (message.orderId != null && message.hasOwnProperty("orderId"))
                if (typeof message.orderId === "number")
                    object.orderId = options.longs === String ? String(message.orderId) : message.orderId;
                else
                    object.orderId = options.longs === String ? $util.Long.prototype.toString.call(message.orderId) : options.longs === Number ? new $util.LongBits(message.orderId.low >>> 0, message.orderId.high >>> 0).toNumber() : message.orderId;
            if (message.materialSkuId != null && message.hasOwnProperty("materialSkuId"))
                object.materialSkuId = message.materialSkuId;
            if (message.quantity != null && message.hasOwnProperty("quantity"))
                object.quantity = message.quantity;
            if (message.recordType != null && message.hasOwnProperty("recordType"))
                object.recordType = message.recordType;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this RecordMaterialArgs to JSON.
         * @function toJSON
         * @memberof pbMes.RecordMaterialArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RecordMaterialArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RecordMaterialArgs
         * @function getTypeUrl
         * @memberof pbMes.RecordMaterialArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RecordMaterialArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbMes.RecordMaterialArgs";
        };

        return RecordMaterialArgs;
    })();

    pbMes.FindBomFormulaArgs = (function() {

        /**
         * Properties of a FindBomFormulaArgs.
         * @memberof pbMes
         * @interface IFindBomFormulaArgs
         * @property {number|null} [page] FindBomFormulaArgs page
         * @property {number|null} [pageSize] FindBomFormulaArgs pageSize
         * @property {string|null} [productSkuId] FindBomFormulaArgs productSkuId
         * @property {number|null} [status] FindBomFormulaArgs status
         * @property {string|null} [keyword] FindBomFormulaArgs keyword
         */

        /**
         * Constructs a new FindBomFormulaArgs.
         * @memberof pbMes
         * @classdesc Represents a FindBomFormulaArgs.
         * @implements IFindBomFormulaArgs
         * @constructor
         * @param {pbMes.IFindBomFormulaArgs=} [properties] Properties to set
         */
        function FindBomFormulaArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindBomFormulaArgs page.
         * @member {number} page
         * @memberof pbMes.FindBomFormulaArgs
         * @instance
         */
        FindBomFormulaArgs.prototype.page = 0;

        /**
         * FindBomFormulaArgs pageSize.
         * @member {number} pageSize
         * @memberof pbMes.FindBomFormulaArgs
         * @instance
         */
        FindBomFormulaArgs.prototype.pageSize = 0;

        /**
         * FindBomFormulaArgs productSkuId.
         * @member {string} productSkuId
         * @memberof pbMes.FindBomFormulaArgs
         * @instance
         */
        FindBomFormulaArgs.prototype.productSkuId = "";

        /**
         * FindBomFormulaArgs status.
         * @member {number} status
         * @memberof pbMes.FindBomFormulaArgs
         * @instance
         */
        FindBomFormulaArgs.prototype.status = 0;

        /**
         * FindBomFormulaArgs keyword.
         * @member {string} keyword
         * @memberof pbMes.FindBomFormulaArgs
         * @instance
         */
        FindBomFormulaArgs.prototype.keyword = "";

        /**
         * Creates a new FindBomFormulaArgs instance using the specified properties.
         * @function create
         * @memberof pbMes.FindBomFormulaArgs
         * @static
         * @param {pbMes.IFindBomFormulaArgs=} [properties] Properties to set
         * @returns {pbMes.FindBomFormulaArgs} FindBomFormulaArgs instance
         */
        FindBomFormulaArgs.create = function create(properties) {
            return new FindBomFormulaArgs(properties);
        };

        /**
         * Encodes the specified FindBomFormulaArgs message. Does not implicitly {@link pbMes.FindBomFormulaArgs.verify|verify} messages.
         * @function encode
         * @memberof pbMes.FindBomFormulaArgs
         * @static
         * @param {pbMes.IFindBomFormulaArgs} message FindBomFormulaArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindBomFormulaArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageSize);
            if (message.productSkuId != null && Object.hasOwnProperty.call(message, "productSkuId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.productSkuId);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            if (message.keyword != null && Object.hasOwnProperty.call(message, "keyword"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.keyword);
            return writer;
        };

        /**
         * Encodes the specified FindBomFormulaArgs message, length delimited. Does not implicitly {@link pbMes.FindBomFormulaArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbMes.FindBomFormulaArgs
         * @static
         * @param {pbMes.IFindBomFormulaArgs} message FindBomFormulaArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindBomFormulaArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindBomFormulaArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbMes.FindBomFormulaArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbMes.FindBomFormulaArgs} FindBomFormulaArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindBomFormulaArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbMes.FindBomFormulaArgs();
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
                        message.productSkuId = reader.string();
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
         * Decodes a FindBomFormulaArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbMes.FindBomFormulaArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbMes.FindBomFormulaArgs} FindBomFormulaArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindBomFormulaArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindBomFormulaArgs message.
         * @function verify
         * @memberof pbMes.FindBomFormulaArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindBomFormulaArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.page != null && message.hasOwnProperty("page"))
                if (!$util.isInteger(message.page))
                    return "page: integer expected";
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                if (!$util.isInteger(message.pageSize))
                    return "pageSize: integer expected";
            if (message.productSkuId != null && message.hasOwnProperty("productSkuId"))
                if (!$util.isString(message.productSkuId))
                    return "productSkuId: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                if (!$util.isString(message.keyword))
                    return "keyword: string expected";
            return null;
        };

        /**
         * Creates a FindBomFormulaArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbMes.FindBomFormulaArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbMes.FindBomFormulaArgs} FindBomFormulaArgs
         */
        FindBomFormulaArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbMes.FindBomFormulaArgs)
                return object;
            var message = new $root.pbMes.FindBomFormulaArgs();
            if (object.page != null)
                message.page = object.page | 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize | 0;
            if (object.productSkuId != null)
                message.productSkuId = String(object.productSkuId);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.keyword != null)
                message.keyword = String(object.keyword);
            return message;
        };

        /**
         * Creates a plain object from a FindBomFormulaArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbMes.FindBomFormulaArgs
         * @static
         * @param {pbMes.FindBomFormulaArgs} message FindBomFormulaArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindBomFormulaArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.page = 0;
                object.pageSize = 0;
                object.productSkuId = "";
                object.status = 0;
                object.keyword = "";
            }
            if (message.page != null && message.hasOwnProperty("page"))
                object.page = message.page;
            if (message.pageSize != null && message.hasOwnProperty("pageSize"))
                object.pageSize = message.pageSize;
            if (message.productSkuId != null && message.hasOwnProperty("productSkuId"))
                object.productSkuId = message.productSkuId;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                object.keyword = message.keyword;
            return object;
        };

        /**
         * Converts this FindBomFormulaArgs to JSON.
         * @function toJSON
         * @memberof pbMes.FindBomFormulaArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindBomFormulaArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindBomFormulaArgs
         * @function getTypeUrl
         * @memberof pbMes.FindBomFormulaArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindBomFormulaArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbMes.FindBomFormulaArgs";
        };

        return FindBomFormulaArgs;
    })();

    pbMes.FindBomFormulaReply = (function() {

        /**
         * Properties of a FindBomFormulaReply.
         * @memberof pbMes
         * @interface IFindBomFormulaReply
         * @property {number|null} [code] FindBomFormulaReply code
         * @property {string|null} [msg] FindBomFormulaReply msg
         * @property {Array.<pbMes.IBomFormula>|null} [data] FindBomFormulaReply data
         * @property {number|null} [total] FindBomFormulaReply total
         */

        /**
         * Constructs a new FindBomFormulaReply.
         * @memberof pbMes
         * @classdesc Represents a FindBomFormulaReply.
         * @implements IFindBomFormulaReply
         * @constructor
         * @param {pbMes.IFindBomFormulaReply=} [properties] Properties to set
         */
        function FindBomFormulaReply(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindBomFormulaReply code.
         * @member {number} code
         * @memberof pbMes.FindBomFormulaReply
         * @instance
         */
        FindBomFormulaReply.prototype.code = 0;

        /**
         * FindBomFormulaReply msg.
         * @member {string} msg
         * @memberof pbMes.FindBomFormulaReply
         * @instance
         */
        FindBomFormulaReply.prototype.msg = "";

        /**
         * FindBomFormulaReply data.
         * @member {Array.<pbMes.IBomFormula>} data
         * @memberof pbMes.FindBomFormulaReply
         * @instance
         */
        FindBomFormulaReply.prototype.data = $util.emptyArray;

        /**
         * FindBomFormulaReply total.
         * @member {number} total
         * @memberof pbMes.FindBomFormulaReply
         * @instance
         */
        FindBomFormulaReply.prototype.total = 0;

        /**
         * Creates a new FindBomFormulaReply instance using the specified properties.
         * @function create
         * @memberof pbMes.FindBomFormulaReply
         * @static
         * @param {pbMes.IFindBomFormulaReply=} [properties] Properties to set
         * @returns {pbMes.FindBomFormulaReply} FindBomFormulaReply instance
         */
        FindBomFormulaReply.create = function create(properties) {
            return new FindBomFormulaReply(properties);
        };

        /**
         * Encodes the specified FindBomFormulaReply message. Does not implicitly {@link pbMes.FindBomFormulaReply.verify|verify} messages.
         * @function encode
         * @memberof pbMes.FindBomFormulaReply
         * @static
         * @param {pbMes.IFindBomFormulaReply} message FindBomFormulaReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindBomFormulaReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.pbMes.BomFormula.encode(message.data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindBomFormulaReply message, length delimited. Does not implicitly {@link pbMes.FindBomFormulaReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbMes.FindBomFormulaReply
         * @static
         * @param {pbMes.IFindBomFormulaReply} message FindBomFormulaReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindBomFormulaReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindBomFormulaReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbMes.FindBomFormulaReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbMes.FindBomFormulaReply} FindBomFormulaReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindBomFormulaReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbMes.FindBomFormulaReply();
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
                        message.data.push($root.pbMes.BomFormula.decode(reader, reader.uint32()));
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
         * Decodes a FindBomFormulaReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbMes.FindBomFormulaReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbMes.FindBomFormulaReply} FindBomFormulaReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindBomFormulaReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindBomFormulaReply message.
         * @function verify
         * @memberof pbMes.FindBomFormulaReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindBomFormulaReply.verify = function verify(message) {
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
                    var error = $root.pbMes.BomFormula.verify(message.data[i]);
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
         * Creates a FindBomFormulaReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbMes.FindBomFormulaReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbMes.FindBomFormulaReply} FindBomFormulaReply
         */
        FindBomFormulaReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbMes.FindBomFormulaReply)
                return object;
            var message = new $root.pbMes.FindBomFormulaReply();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".pbMes.FindBomFormulaReply.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".pbMes.FindBomFormulaReply.data: object expected");
                    message.data[i] = $root.pbMes.BomFormula.fromObject(object.data[i]);
                }
            }
            if (object.total != null)
                message.total = object.total | 0;
            return message;
        };

        /**
         * Creates a plain object from a FindBomFormulaReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbMes.FindBomFormulaReply
         * @static
         * @param {pbMes.FindBomFormulaReply} message FindBomFormulaReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindBomFormulaReply.toObject = function toObject(message, options) {
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
                    object.data[j] = $root.pbMes.BomFormula.toObject(message.data[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                object.total = message.total;
            return object;
        };

        /**
         * Converts this FindBomFormulaReply to JSON.
         * @function toJSON
         * @memberof pbMes.FindBomFormulaReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindBomFormulaReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindBomFormulaReply
         * @function getTypeUrl
         * @memberof pbMes.FindBomFormulaReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindBomFormulaReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbMes.FindBomFormulaReply";
        };

        return FindBomFormulaReply;
    })();

    return pbMes;
})();

module.exports = $root;
