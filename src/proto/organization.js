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

$root.pbOrganization = (function() {

    /**
     * Namespace pbOrganization.
     * @exports pbOrganization
     * @namespace
     */
    var pbOrganization = {};

    /**
     * OrgType enum.
     * @name pbOrganization.OrgType
     * @enum {number}
     * @property {number} OrgTypeNone=0 OrgTypeNone value
     * @property {number} OrgTypeCompany=1 OrgTypeCompany value
     * @property {number} OrgTypeDepartment=2 OrgTypeDepartment value
     * @property {number} OrgTypeGroup=3 OrgTypeGroup value
     */
    pbOrganization.OrgType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OrgTypeNone"] = 0;
        values[valuesById[1] = "OrgTypeCompany"] = 1;
        values[valuesById[2] = "OrgTypeDepartment"] = 2;
        values[valuesById[3] = "OrgTypeGroup"] = 3;
        return values;
    })();

    pbOrganization.Organization = (function() {

        /**
         * Properties of an Organization.
         * @memberof pbOrganization
         * @interface IOrganization
         * @property {number|Long|null} [id] Organization id
         * @property {number|Long|null} [parentId] Organization parentId
         * @property {string|null} [orgName] Organization orgName
         * @property {string|null} [orgCode] Organization orgCode
         * @property {pbOrganization.OrgType|null} [orgType] Organization orgType
         * @property {number|Long|null} [leaderId] Organization leaderId
         * @property {number|null} [sort] Organization sort
         * @property {number|null} [status] Organization status
         * @property {string|null} [remark] Organization remark
         * @property {string|null} [appId] Organization appId
         * @property {string|null} [createdAt] Organization createdAt
         * @property {string|null} [updatedAt] Organization updatedAt
         */

        /**
         * Constructs a new Organization.
         * @memberof pbOrganization
         * @classdesc Represents an Organization.
         * @implements IOrganization
         * @constructor
         * @param {pbOrganization.IOrganization=} [properties] Properties to set
         */
        function Organization(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Organization id.
         * @member {number|Long} id
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Organization parentId.
         * @member {number|Long} parentId
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.parentId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Organization orgName.
         * @member {string} orgName
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.orgName = "";

        /**
         * Organization orgCode.
         * @member {string} orgCode
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.orgCode = "";

        /**
         * Organization orgType.
         * @member {pbOrganization.OrgType} orgType
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.orgType = 0;

        /**
         * Organization leaderId.
         * @member {number|Long} leaderId
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.leaderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Organization sort.
         * @member {number} sort
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.sort = 0;

        /**
         * Organization status.
         * @member {number} status
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.status = 0;

        /**
         * Organization remark.
         * @member {string} remark
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.remark = "";

        /**
         * Organization appId.
         * @member {string} appId
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.appId = "";

        /**
         * Organization createdAt.
         * @member {string} createdAt
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.createdAt = "";

        /**
         * Organization updatedAt.
         * @member {string} updatedAt
         * @memberof pbOrganization.Organization
         * @instance
         */
        Organization.prototype.updatedAt = "";

        /**
         * Creates a new Organization instance using the specified properties.
         * @function create
         * @memberof pbOrganization.Organization
         * @static
         * @param {pbOrganization.IOrganization=} [properties] Properties to set
         * @returns {pbOrganization.Organization} Organization instance
         */
        Organization.create = function create(properties) {
            return new Organization(properties);
        };

        /**
         * Encodes the specified Organization message. Does not implicitly {@link pbOrganization.Organization.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.Organization
         * @static
         * @param {pbOrganization.IOrganization} message Organization message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Organization.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.parentId);
            if (message.orgName != null && Object.hasOwnProperty.call(message, "orgName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.orgName);
            if (message.orgCode != null && Object.hasOwnProperty.call(message, "orgCode"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.orgCode);
            if (message.orgType != null && Object.hasOwnProperty.call(message, "orgType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.orgType);
            if (message.leaderId != null && Object.hasOwnProperty.call(message, "leaderId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.leaderId);
            if (message.sort != null && Object.hasOwnProperty.call(message, "sort"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.sort);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.status);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.remark);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.appId);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.updatedAt);
            return writer;
        };

        /**
         * Encodes the specified Organization message, length delimited. Does not implicitly {@link pbOrganization.Organization.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.Organization
         * @static
         * @param {pbOrganization.IOrganization} message Organization message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Organization.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Organization message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.Organization
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.Organization} Organization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Organization.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.Organization();
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
                        message.parentId = reader.int64();
                        break;
                    }
                case 3: {
                        message.orgName = reader.string();
                        break;
                    }
                case 4: {
                        message.orgCode = reader.string();
                        break;
                    }
                case 5: {
                        message.orgType = reader.int32();
                        break;
                    }
                case 6: {
                        message.leaderId = reader.int64();
                        break;
                    }
                case 7: {
                        message.sort = reader.int32();
                        break;
                    }
                case 8: {
                        message.status = reader.int32();
                        break;
                    }
                case 9: {
                        message.remark = reader.string();
                        break;
                    }
                case 10: {
                        message.appId = reader.string();
                        break;
                    }
                case 11: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 12: {
                        message.updatedAt = reader.string();
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
         * Decodes an Organization message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.Organization
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.Organization} Organization
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Organization.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Organization message.
         * @function verify
         * @memberof pbOrganization.Organization
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Organization.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isInteger(message.parentId) && !(message.parentId && $util.isInteger(message.parentId.low) && $util.isInteger(message.parentId.high)))
                    return "parentId: integer|Long expected";
            if (message.orgName != null && message.hasOwnProperty("orgName"))
                if (!$util.isString(message.orgName))
                    return "orgName: string expected";
            if (message.orgCode != null && message.hasOwnProperty("orgCode"))
                if (!$util.isString(message.orgCode))
                    return "orgCode: string expected";
            if (message.orgType != null && message.hasOwnProperty("orgType"))
                switch (message.orgType) {
                default:
                    return "orgType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.leaderId != null && message.hasOwnProperty("leaderId"))
                if (!$util.isInteger(message.leaderId) && !(message.leaderId && $util.isInteger(message.leaderId.low) && $util.isInteger(message.leaderId.high)))
                    return "leaderId: integer|Long expected";
            if (message.sort != null && message.hasOwnProperty("sort"))
                if (!$util.isInteger(message.sort))
                    return "sort: integer expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                if (!$util.isString(message.updatedAt))
                    return "updatedAt: string expected";
            return null;
        };

        /**
         * Creates an Organization message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.Organization
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.Organization} Organization
         */
        Organization.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.Organization)
                return object;
            var message = new $root.pbOrganization.Organization();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.parentId != null)
                if ($util.Long)
                    (message.parentId = $util.Long.fromValue(object.parentId)).unsigned = false;
                else if (typeof object.parentId === "string")
                    message.parentId = parseInt(object.parentId, 10);
                else if (typeof object.parentId === "number")
                    message.parentId = object.parentId;
                else if (typeof object.parentId === "object")
                    message.parentId = new $util.LongBits(object.parentId.low >>> 0, object.parentId.high >>> 0).toNumber();
            if (object.orgName != null)
                message.orgName = String(object.orgName);
            if (object.orgCode != null)
                message.orgCode = String(object.orgCode);
            switch (object.orgType) {
            default:
                if (typeof object.orgType === "number") {
                    message.orgType = object.orgType;
                    break;
                }
                break;
            case "OrgTypeNone":
            case 0:
                message.orgType = 0;
                break;
            case "OrgTypeCompany":
            case 1:
                message.orgType = 1;
                break;
            case "OrgTypeDepartment":
            case 2:
                message.orgType = 2;
                break;
            case "OrgTypeGroup":
            case 3:
                message.orgType = 3;
                break;
            }
            if (object.leaderId != null)
                if ($util.Long)
                    (message.leaderId = $util.Long.fromValue(object.leaderId)).unsigned = false;
                else if (typeof object.leaderId === "string")
                    message.leaderId = parseInt(object.leaderId, 10);
                else if (typeof object.leaderId === "number")
                    message.leaderId = object.leaderId;
                else if (typeof object.leaderId === "object")
                    message.leaderId = new $util.LongBits(object.leaderId.low >>> 0, object.leaderId.high >>> 0).toNumber();
            if (object.sort != null)
                message.sort = object.sort | 0;
            if (object.status != null)
                message.status = object.status | 0;
            if (object.remark != null)
                message.remark = String(object.remark);
            if (object.appId != null)
                message.appId = String(object.appId);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.updatedAt != null)
                message.updatedAt = String(object.updatedAt);
            return message;
        };

        /**
         * Creates a plain object from an Organization message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.Organization
         * @static
         * @param {pbOrganization.Organization} message Organization
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Organization.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.parentId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.parentId = options.longs === String ? "0" : 0;
                object.orgName = "";
                object.orgCode = "";
                object.orgType = options.enums === String ? "OrgTypeNone" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.leaderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.leaderId = options.longs === String ? "0" : 0;
                object.sort = 0;
                object.status = 0;
                object.remark = "";
                object.appId = "";
                object.createdAt = "";
                object.updatedAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (typeof message.parentId === "number")
                    object.parentId = options.longs === String ? String(message.parentId) : message.parentId;
                else
                    object.parentId = options.longs === String ? $util.Long.prototype.toString.call(message.parentId) : options.longs === Number ? new $util.LongBits(message.parentId.low >>> 0, message.parentId.high >>> 0).toNumber() : message.parentId;
            if (message.orgName != null && message.hasOwnProperty("orgName"))
                object.orgName = message.orgName;
            if (message.orgCode != null && message.hasOwnProperty("orgCode"))
                object.orgCode = message.orgCode;
            if (message.orgType != null && message.hasOwnProperty("orgType"))
                object.orgType = options.enums === String ? $root.pbOrganization.OrgType[message.orgType] === undefined ? message.orgType : $root.pbOrganization.OrgType[message.orgType] : message.orgType;
            if (message.leaderId != null && message.hasOwnProperty("leaderId"))
                if (typeof message.leaderId === "number")
                    object.leaderId = options.longs === String ? String(message.leaderId) : message.leaderId;
                else
                    object.leaderId = options.longs === String ? $util.Long.prototype.toString.call(message.leaderId) : options.longs === Number ? new $util.LongBits(message.leaderId.low >>> 0, message.leaderId.high >>> 0).toNumber() : message.leaderId;
            if (message.sort != null && message.hasOwnProperty("sort"))
                object.sort = message.sort;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.updatedAt != null && message.hasOwnProperty("updatedAt"))
                object.updatedAt = message.updatedAt;
            return object;
        };

        /**
         * Converts this Organization to JSON.
         * @function toJSON
         * @memberof pbOrganization.Organization
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Organization.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Organization
         * @function getTypeUrl
         * @memberof pbOrganization.Organization
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Organization.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.Organization";
        };

        return Organization;
    })();

    pbOrganization.UserOrg = (function() {

        /**
         * Properties of a UserOrg.
         * @memberof pbOrganization
         * @interface IUserOrg
         * @property {number|Long|null} [id] UserOrg id
         * @property {number|Long|null} [userId] UserOrg userId
         * @property {number|Long|null} [orgId] UserOrg orgId
         * @property {boolean|null} [isLeader] UserOrg isLeader
         * @property {string|null} [position] UserOrg position
         * @property {string|null} [createdAt] UserOrg createdAt
         */

        /**
         * Constructs a new UserOrg.
         * @memberof pbOrganization
         * @classdesc Represents a UserOrg.
         * @implements IUserOrg
         * @constructor
         * @param {pbOrganization.IUserOrg=} [properties] Properties to set
         */
        function UserOrg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserOrg id.
         * @member {number|Long} id
         * @memberof pbOrganization.UserOrg
         * @instance
         */
        UserOrg.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserOrg userId.
         * @member {number|Long} userId
         * @memberof pbOrganization.UserOrg
         * @instance
         */
        UserOrg.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserOrg orgId.
         * @member {number|Long} orgId
         * @memberof pbOrganization.UserOrg
         * @instance
         */
        UserOrg.prototype.orgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserOrg isLeader.
         * @member {boolean} isLeader
         * @memberof pbOrganization.UserOrg
         * @instance
         */
        UserOrg.prototype.isLeader = false;

        /**
         * UserOrg position.
         * @member {string} position
         * @memberof pbOrganization.UserOrg
         * @instance
         */
        UserOrg.prototype.position = "";

        /**
         * UserOrg createdAt.
         * @member {string} createdAt
         * @memberof pbOrganization.UserOrg
         * @instance
         */
        UserOrg.prototype.createdAt = "";

        /**
         * Creates a new UserOrg instance using the specified properties.
         * @function create
         * @memberof pbOrganization.UserOrg
         * @static
         * @param {pbOrganization.IUserOrg=} [properties] Properties to set
         * @returns {pbOrganization.UserOrg} UserOrg instance
         */
        UserOrg.create = function create(properties) {
            return new UserOrg(properties);
        };

        /**
         * Encodes the specified UserOrg message. Does not implicitly {@link pbOrganization.UserOrg.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.UserOrg
         * @static
         * @param {pbOrganization.IUserOrg} message UserOrg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOrg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.orgId != null && Object.hasOwnProperty.call(message, "orgId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.orgId);
            if (message.isLeader != null && Object.hasOwnProperty.call(message, "isLeader"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isLeader);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.position);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.createdAt);
            return writer;
        };

        /**
         * Encodes the specified UserOrg message, length delimited. Does not implicitly {@link pbOrganization.UserOrg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.UserOrg
         * @static
         * @param {pbOrganization.IUserOrg} message UserOrg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOrg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserOrg message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.UserOrg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.UserOrg} UserOrg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOrg.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.UserOrg();
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
                        message.userId = reader.int64();
                        break;
                    }
                case 3: {
                        message.orgId = reader.int64();
                        break;
                    }
                case 4: {
                        message.isLeader = reader.bool();
                        break;
                    }
                case 5: {
                        message.position = reader.string();
                        break;
                    }
                case 6: {
                        message.createdAt = reader.string();
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
         * Decodes a UserOrg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.UserOrg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.UserOrg} UserOrg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOrg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserOrg message.
         * @function verify
         * @memberof pbOrganization.UserOrg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserOrg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (!$util.isInteger(message.orgId) && !(message.orgId && $util.isInteger(message.orgId.low) && $util.isInteger(message.orgId.high)))
                    return "orgId: integer|Long expected";
            if (message.isLeader != null && message.hasOwnProperty("isLeader"))
                if (typeof message.isLeader !== "boolean")
                    return "isLeader: boolean expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isString(message.position))
                    return "position: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            return null;
        };

        /**
         * Creates a UserOrg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.UserOrg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.UserOrg} UserOrg
         */
        UserOrg.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.UserOrg)
                return object;
            var message = new $root.pbOrganization.UserOrg();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.orgId != null)
                if ($util.Long)
                    (message.orgId = $util.Long.fromValue(object.orgId)).unsigned = false;
                else if (typeof object.orgId === "string")
                    message.orgId = parseInt(object.orgId, 10);
                else if (typeof object.orgId === "number")
                    message.orgId = object.orgId;
                else if (typeof object.orgId === "object")
                    message.orgId = new $util.LongBits(object.orgId.low >>> 0, object.orgId.high >>> 0).toNumber();
            if (object.isLeader != null)
                message.isLeader = Boolean(object.isLeader);
            if (object.position != null)
                message.position = String(object.position);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            return message;
        };

        /**
         * Creates a plain object from a UserOrg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.UserOrg
         * @static
         * @param {pbOrganization.UserOrg} message UserOrg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserOrg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.orgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orgId = options.longs === String ? "0" : 0;
                object.isLeader = false;
                object.position = "";
                object.createdAt = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (typeof message.orgId === "number")
                    object.orgId = options.longs === String ? String(message.orgId) : message.orgId;
                else
                    object.orgId = options.longs === String ? $util.Long.prototype.toString.call(message.orgId) : options.longs === Number ? new $util.LongBits(message.orgId.low >>> 0, message.orgId.high >>> 0).toNumber() : message.orgId;
            if (message.isLeader != null && message.hasOwnProperty("isLeader"))
                object.isLeader = message.isLeader;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            return object;
        };

        /**
         * Converts this UserOrg to JSON.
         * @function toJSON
         * @memberof pbOrganization.UserOrg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserOrg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserOrg
         * @function getTypeUrl
         * @memberof pbOrganization.UserOrg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserOrg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.UserOrg";
        };

        return UserOrg;
    })();

    pbOrganization.FindOrganizationArgs = (function() {

        /**
         * Properties of a FindOrganizationArgs.
         * @memberof pbOrganization
         * @interface IFindOrganizationArgs
         * @property {string|null} [orgName] FindOrganizationArgs orgName
         * @property {string|null} [orgCode] FindOrganizationArgs orgCode
         * @property {pbOrganization.OrgType|null} [orgType] FindOrganizationArgs orgType
         * @property {number|null} [status] FindOrganizationArgs status
         * @property {string|null} [appId] FindOrganizationArgs appId
         */

        /**
         * Constructs a new FindOrganizationArgs.
         * @memberof pbOrganization
         * @classdesc Represents a FindOrganizationArgs.
         * @implements IFindOrganizationArgs
         * @constructor
         * @param {pbOrganization.IFindOrganizationArgs=} [properties] Properties to set
         */
        function FindOrganizationArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindOrganizationArgs orgName.
         * @member {string} orgName
         * @memberof pbOrganization.FindOrganizationArgs
         * @instance
         */
        FindOrganizationArgs.prototype.orgName = "";

        /**
         * FindOrganizationArgs orgCode.
         * @member {string} orgCode
         * @memberof pbOrganization.FindOrganizationArgs
         * @instance
         */
        FindOrganizationArgs.prototype.orgCode = "";

        /**
         * FindOrganizationArgs orgType.
         * @member {pbOrganization.OrgType} orgType
         * @memberof pbOrganization.FindOrganizationArgs
         * @instance
         */
        FindOrganizationArgs.prototype.orgType = 0;

        /**
         * FindOrganizationArgs status.
         * @member {number} status
         * @memberof pbOrganization.FindOrganizationArgs
         * @instance
         */
        FindOrganizationArgs.prototype.status = 0;

        /**
         * FindOrganizationArgs appId.
         * @member {string} appId
         * @memberof pbOrganization.FindOrganizationArgs
         * @instance
         */
        FindOrganizationArgs.prototype.appId = "";

        /**
         * Creates a new FindOrganizationArgs instance using the specified properties.
         * @function create
         * @memberof pbOrganization.FindOrganizationArgs
         * @static
         * @param {pbOrganization.IFindOrganizationArgs=} [properties] Properties to set
         * @returns {pbOrganization.FindOrganizationArgs} FindOrganizationArgs instance
         */
        FindOrganizationArgs.create = function create(properties) {
            return new FindOrganizationArgs(properties);
        };

        /**
         * Encodes the specified FindOrganizationArgs message. Does not implicitly {@link pbOrganization.FindOrganizationArgs.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.FindOrganizationArgs
         * @static
         * @param {pbOrganization.IFindOrganizationArgs} message FindOrganizationArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindOrganizationArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orgName != null && Object.hasOwnProperty.call(message, "orgName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.orgName);
            if (message.orgCode != null && Object.hasOwnProperty.call(message, "orgCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.orgCode);
            if (message.orgType != null && Object.hasOwnProperty.call(message, "orgType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.orgType);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.appId);
            return writer;
        };

        /**
         * Encodes the specified FindOrganizationArgs message, length delimited. Does not implicitly {@link pbOrganization.FindOrganizationArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.FindOrganizationArgs
         * @static
         * @param {pbOrganization.IFindOrganizationArgs} message FindOrganizationArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindOrganizationArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindOrganizationArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.FindOrganizationArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.FindOrganizationArgs} FindOrganizationArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindOrganizationArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.FindOrganizationArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.orgName = reader.string();
                        break;
                    }
                case 2: {
                        message.orgCode = reader.string();
                        break;
                    }
                case 3: {
                        message.orgType = reader.int32();
                        break;
                    }
                case 4: {
                        message.status = reader.int32();
                        break;
                    }
                case 5: {
                        message.appId = reader.string();
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
         * Decodes a FindOrganizationArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.FindOrganizationArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.FindOrganizationArgs} FindOrganizationArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindOrganizationArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindOrganizationArgs message.
         * @function verify
         * @memberof pbOrganization.FindOrganizationArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindOrganizationArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orgName != null && message.hasOwnProperty("orgName"))
                if (!$util.isString(message.orgName))
                    return "orgName: string expected";
            if (message.orgCode != null && message.hasOwnProperty("orgCode"))
                if (!$util.isString(message.orgCode))
                    return "orgCode: string expected";
            if (message.orgType != null && message.hasOwnProperty("orgType"))
                switch (message.orgType) {
                default:
                    return "orgType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            return null;
        };

        /**
         * Creates a FindOrganizationArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.FindOrganizationArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.FindOrganizationArgs} FindOrganizationArgs
         */
        FindOrganizationArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.FindOrganizationArgs)
                return object;
            var message = new $root.pbOrganization.FindOrganizationArgs();
            if (object.orgName != null)
                message.orgName = String(object.orgName);
            if (object.orgCode != null)
                message.orgCode = String(object.orgCode);
            switch (object.orgType) {
            default:
                if (typeof object.orgType === "number") {
                    message.orgType = object.orgType;
                    break;
                }
                break;
            case "OrgTypeNone":
            case 0:
                message.orgType = 0;
                break;
            case "OrgTypeCompany":
            case 1:
                message.orgType = 1;
                break;
            case "OrgTypeDepartment":
            case 2:
                message.orgType = 2;
                break;
            case "OrgTypeGroup":
            case 3:
                message.orgType = 3;
                break;
            }
            if (object.status != null)
                message.status = object.status | 0;
            if (object.appId != null)
                message.appId = String(object.appId);
            return message;
        };

        /**
         * Creates a plain object from a FindOrganizationArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.FindOrganizationArgs
         * @static
         * @param {pbOrganization.FindOrganizationArgs} message FindOrganizationArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindOrganizationArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.orgName = "";
                object.orgCode = "";
                object.orgType = options.enums === String ? "OrgTypeNone" : 0;
                object.status = 0;
                object.appId = "";
            }
            if (message.orgName != null && message.hasOwnProperty("orgName"))
                object.orgName = message.orgName;
            if (message.orgCode != null && message.hasOwnProperty("orgCode"))
                object.orgCode = message.orgCode;
            if (message.orgType != null && message.hasOwnProperty("orgType"))
                object.orgType = options.enums === String ? $root.pbOrganization.OrgType[message.orgType] === undefined ? message.orgType : $root.pbOrganization.OrgType[message.orgType] : message.orgType;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            return object;
        };

        /**
         * Converts this FindOrganizationArgs to JSON.
         * @function toJSON
         * @memberof pbOrganization.FindOrganizationArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindOrganizationArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindOrganizationArgs
         * @function getTypeUrl
         * @memberof pbOrganization.FindOrganizationArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindOrganizationArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.FindOrganizationArgs";
        };

        return FindOrganizationArgs;
    })();

    pbOrganization.PageInfo = (function() {

        /**
         * Properties of a PageInfo.
         * @memberof pbOrganization
         * @interface IPageInfo
         * @property {number|null} [page] PageInfo page
         * @property {number|null} [pageSize] PageInfo pageSize
         */

        /**
         * Constructs a new PageInfo.
         * @memberof pbOrganization
         * @classdesc Represents a PageInfo.
         * @implements IPageInfo
         * @constructor
         * @param {pbOrganization.IPageInfo=} [properties] Properties to set
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
         * @memberof pbOrganization.PageInfo
         * @instance
         */
        PageInfo.prototype.page = 0;

        /**
         * PageInfo pageSize.
         * @member {number} pageSize
         * @memberof pbOrganization.PageInfo
         * @instance
         */
        PageInfo.prototype.pageSize = 0;

        /**
         * Creates a new PageInfo instance using the specified properties.
         * @function create
         * @memberof pbOrganization.PageInfo
         * @static
         * @param {pbOrganization.IPageInfo=} [properties] Properties to set
         * @returns {pbOrganization.PageInfo} PageInfo instance
         */
        PageInfo.create = function create(properties) {
            return new PageInfo(properties);
        };

        /**
         * Encodes the specified PageInfo message. Does not implicitly {@link pbOrganization.PageInfo.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.PageInfo
         * @static
         * @param {pbOrganization.IPageInfo} message PageInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PageInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.page != null && Object.hasOwnProperty.call(message, "page"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.page);
            if (message.pageSize != null && Object.hasOwnProperty.call(message, "pageSize"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.pageSize);
            return writer;
        };

        /**
         * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link pbOrganization.PageInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.PageInfo
         * @static
         * @param {pbOrganization.IPageInfo} message PageInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PageInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PageInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.PageInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.PageInfo} PageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PageInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.PageInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.page = reader.uint32();
                        break;
                    }
                case 2: {
                        message.pageSize = reader.uint32();
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
         * @memberof pbOrganization.PageInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.PageInfo} PageInfo
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
         * @memberof pbOrganization.PageInfo
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
         * @memberof pbOrganization.PageInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.PageInfo} PageInfo
         */
        PageInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.PageInfo)
                return object;
            var message = new $root.pbOrganization.PageInfo();
            if (object.page != null)
                message.page = object.page >>> 0;
            if (object.pageSize != null)
                message.pageSize = object.pageSize >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.PageInfo
         * @static
         * @param {pbOrganization.PageInfo} message PageInfo
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
         * @memberof pbOrganization.PageInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PageInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PageInfo
         * @function getTypeUrl
         * @memberof pbOrganization.PageInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PageInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.PageInfo";
        };

        return PageInfo;
    })();

    pbOrganization.FindOrganizationReply = (function() {

        /**
         * Properties of a FindOrganizationReply.
         * @memberof pbOrganization
         * @interface IFindOrganizationReply
         * @property {pbcommon.EnumCode|null} [code] FindOrganizationReply code
         * @property {string|null} [msg] FindOrganizationReply msg
         * @property {Array.<pbOrganization.IOrganization>|null} [list] FindOrganizationReply list
         * @property {number|Long|null} [total] FindOrganizationReply total
         */

        /**
         * Constructs a new FindOrganizationReply.
         * @memberof pbOrganization
         * @classdesc Represents a FindOrganizationReply.
         * @implements IFindOrganizationReply
         * @constructor
         * @param {pbOrganization.IFindOrganizationReply=} [properties] Properties to set
         */
        function FindOrganizationReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindOrganizationReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbOrganization.FindOrganizationReply
         * @instance
         */
        FindOrganizationReply.prototype.code = 0;

        /**
         * FindOrganizationReply msg.
         * @member {string} msg
         * @memberof pbOrganization.FindOrganizationReply
         * @instance
         */
        FindOrganizationReply.prototype.msg = "";

        /**
         * FindOrganizationReply list.
         * @member {Array.<pbOrganization.IOrganization>} list
         * @memberof pbOrganization.FindOrganizationReply
         * @instance
         */
        FindOrganizationReply.prototype.list = $util.emptyArray;

        /**
         * FindOrganizationReply total.
         * @member {number|Long} total
         * @memberof pbOrganization.FindOrganizationReply
         * @instance
         */
        FindOrganizationReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindOrganizationReply instance using the specified properties.
         * @function create
         * @memberof pbOrganization.FindOrganizationReply
         * @static
         * @param {pbOrganization.IFindOrganizationReply=} [properties] Properties to set
         * @returns {pbOrganization.FindOrganizationReply} FindOrganizationReply instance
         */
        FindOrganizationReply.create = function create(properties) {
            return new FindOrganizationReply(properties);
        };

        /**
         * Encodes the specified FindOrganizationReply message. Does not implicitly {@link pbOrganization.FindOrganizationReply.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.FindOrganizationReply
         * @static
         * @param {pbOrganization.IFindOrganizationReply} message FindOrganizationReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindOrganizationReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbOrganization.Organization.encode(message.list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindOrganizationReply message, length delimited. Does not implicitly {@link pbOrganization.FindOrganizationReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.FindOrganizationReply
         * @static
         * @param {pbOrganization.IFindOrganizationReply} message FindOrganizationReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindOrganizationReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindOrganizationReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.FindOrganizationReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.FindOrganizationReply} FindOrganizationReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindOrganizationReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.FindOrganizationReply();
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
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbOrganization.Organization.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
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
         * Decodes a FindOrganizationReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.FindOrganizationReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.FindOrganizationReply} FindOrganizationReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindOrganizationReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindOrganizationReply message.
         * @function verify
         * @memberof pbOrganization.FindOrganizationReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindOrganizationReply.verify = function verify(message) {
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
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbOrganization.Organization.verify(message.list[i]);
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
         * Creates a FindOrganizationReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.FindOrganizationReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.FindOrganizationReply} FindOrganizationReply
         */
        FindOrganizationReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.FindOrganizationReply)
                return object;
            var message = new $root.pbOrganization.FindOrganizationReply();
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
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbOrganization.FindOrganizationReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbOrganization.FindOrganizationReply.list: object expected");
                    message.list[i] = $root.pbOrganization.Organization.fromObject(object.list[i]);
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
         * Creates a plain object from a FindOrganizationReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.FindOrganizationReply
         * @static
         * @param {pbOrganization.FindOrganizationReply} message FindOrganizationReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindOrganizationReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.msg = "";
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
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbOrganization.Organization.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindOrganizationReply to JSON.
         * @function toJSON
         * @memberof pbOrganization.FindOrganizationReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindOrganizationReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindOrganizationReply
         * @function getTypeUrl
         * @memberof pbOrganization.FindOrganizationReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindOrganizationReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.FindOrganizationReply";
        };

        return FindOrganizationReply;
    })();

    pbOrganization.GetOrgTreeArgs = (function() {

        /**
         * Properties of a GetOrgTreeArgs.
         * @memberof pbOrganization
         * @interface IGetOrgTreeArgs
         * @property {number|Long|null} [parentId] GetOrgTreeArgs parentId
         * @property {number|null} [status] GetOrgTreeArgs status
         * @property {string|null} [appId] GetOrgTreeArgs appId
         */

        /**
         * Constructs a new GetOrgTreeArgs.
         * @memberof pbOrganization
         * @classdesc Represents a GetOrgTreeArgs.
         * @implements IGetOrgTreeArgs
         * @constructor
         * @param {pbOrganization.IGetOrgTreeArgs=} [properties] Properties to set
         */
        function GetOrgTreeArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetOrgTreeArgs parentId.
         * @member {number|Long} parentId
         * @memberof pbOrganization.GetOrgTreeArgs
         * @instance
         */
        GetOrgTreeArgs.prototype.parentId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetOrgTreeArgs status.
         * @member {number} status
         * @memberof pbOrganization.GetOrgTreeArgs
         * @instance
         */
        GetOrgTreeArgs.prototype.status = 0;

        /**
         * GetOrgTreeArgs appId.
         * @member {string} appId
         * @memberof pbOrganization.GetOrgTreeArgs
         * @instance
         */
        GetOrgTreeArgs.prototype.appId = "";

        /**
         * Creates a new GetOrgTreeArgs instance using the specified properties.
         * @function create
         * @memberof pbOrganization.GetOrgTreeArgs
         * @static
         * @param {pbOrganization.IGetOrgTreeArgs=} [properties] Properties to set
         * @returns {pbOrganization.GetOrgTreeArgs} GetOrgTreeArgs instance
         */
        GetOrgTreeArgs.create = function create(properties) {
            return new GetOrgTreeArgs(properties);
        };

        /**
         * Encodes the specified GetOrgTreeArgs message. Does not implicitly {@link pbOrganization.GetOrgTreeArgs.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.GetOrgTreeArgs
         * @static
         * @param {pbOrganization.IGetOrgTreeArgs} message GetOrgTreeArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOrgTreeArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.parentId != null && Object.hasOwnProperty.call(message, "parentId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.parentId);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
            if (message.appId != null && Object.hasOwnProperty.call(message, "appId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.appId);
            return writer;
        };

        /**
         * Encodes the specified GetOrgTreeArgs message, length delimited. Does not implicitly {@link pbOrganization.GetOrgTreeArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.GetOrgTreeArgs
         * @static
         * @param {pbOrganization.IGetOrgTreeArgs} message GetOrgTreeArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOrgTreeArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetOrgTreeArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.GetOrgTreeArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.GetOrgTreeArgs} GetOrgTreeArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOrgTreeArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.GetOrgTreeArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.parentId = reader.int64();
                        break;
                    }
                case 2: {
                        message.status = reader.int32();
                        break;
                    }
                case 3: {
                        message.appId = reader.string();
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
         * Decodes a GetOrgTreeArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.GetOrgTreeArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.GetOrgTreeArgs} GetOrgTreeArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOrgTreeArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetOrgTreeArgs message.
         * @function verify
         * @memberof pbOrganization.GetOrgTreeArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetOrgTreeArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (!$util.isInteger(message.parentId) && !(message.parentId && $util.isInteger(message.parentId.low) && $util.isInteger(message.parentId.high)))
                    return "parentId: integer|Long expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.appId != null && message.hasOwnProperty("appId"))
                if (!$util.isString(message.appId))
                    return "appId: string expected";
            return null;
        };

        /**
         * Creates a GetOrgTreeArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.GetOrgTreeArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.GetOrgTreeArgs} GetOrgTreeArgs
         */
        GetOrgTreeArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.GetOrgTreeArgs)
                return object;
            var message = new $root.pbOrganization.GetOrgTreeArgs();
            if (object.parentId != null)
                if ($util.Long)
                    (message.parentId = $util.Long.fromValue(object.parentId)).unsigned = false;
                else if (typeof object.parentId === "string")
                    message.parentId = parseInt(object.parentId, 10);
                else if (typeof object.parentId === "number")
                    message.parentId = object.parentId;
                else if (typeof object.parentId === "object")
                    message.parentId = new $util.LongBits(object.parentId.low >>> 0, object.parentId.high >>> 0).toNumber();
            if (object.status != null)
                message.status = object.status | 0;
            if (object.appId != null)
                message.appId = String(object.appId);
            return message;
        };

        /**
         * Creates a plain object from a GetOrgTreeArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.GetOrgTreeArgs
         * @static
         * @param {pbOrganization.GetOrgTreeArgs} message GetOrgTreeArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetOrgTreeArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.parentId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.parentId = options.longs === String ? "0" : 0;
                object.status = 0;
                object.appId = "";
            }
            if (message.parentId != null && message.hasOwnProperty("parentId"))
                if (typeof message.parentId === "number")
                    object.parentId = options.longs === String ? String(message.parentId) : message.parentId;
                else
                    object.parentId = options.longs === String ? $util.Long.prototype.toString.call(message.parentId) : options.longs === Number ? new $util.LongBits(message.parentId.low >>> 0, message.parentId.high >>> 0).toNumber() : message.parentId;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.appId != null && message.hasOwnProperty("appId"))
                object.appId = message.appId;
            return object;
        };

        /**
         * Converts this GetOrgTreeArgs to JSON.
         * @function toJSON
         * @memberof pbOrganization.GetOrgTreeArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetOrgTreeArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetOrgTreeArgs
         * @function getTypeUrl
         * @memberof pbOrganization.GetOrgTreeArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetOrgTreeArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.GetOrgTreeArgs";
        };

        return GetOrgTreeArgs;
    })();

    pbOrganization.GetOrgTreeReply = (function() {

        /**
         * Properties of a GetOrgTreeReply.
         * @memberof pbOrganization
         * @interface IGetOrgTreeReply
         * @property {pbcommon.EnumCode|null} [code] GetOrgTreeReply code
         * @property {string|null} [msg] GetOrgTreeReply msg
         * @property {Array.<pbOrganization.IOrganizationTree>|null} [trees] GetOrgTreeReply trees
         */

        /**
         * Constructs a new GetOrgTreeReply.
         * @memberof pbOrganization
         * @classdesc Represents a GetOrgTreeReply.
         * @implements IGetOrgTreeReply
         * @constructor
         * @param {pbOrganization.IGetOrgTreeReply=} [properties] Properties to set
         */
        function GetOrgTreeReply(properties) {
            this.trees = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetOrgTreeReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbOrganization.GetOrgTreeReply
         * @instance
         */
        GetOrgTreeReply.prototype.code = 0;

        /**
         * GetOrgTreeReply msg.
         * @member {string} msg
         * @memberof pbOrganization.GetOrgTreeReply
         * @instance
         */
        GetOrgTreeReply.prototype.msg = "";

        /**
         * GetOrgTreeReply trees.
         * @member {Array.<pbOrganization.IOrganizationTree>} trees
         * @memberof pbOrganization.GetOrgTreeReply
         * @instance
         */
        GetOrgTreeReply.prototype.trees = $util.emptyArray;

        /**
         * Creates a new GetOrgTreeReply instance using the specified properties.
         * @function create
         * @memberof pbOrganization.GetOrgTreeReply
         * @static
         * @param {pbOrganization.IGetOrgTreeReply=} [properties] Properties to set
         * @returns {pbOrganization.GetOrgTreeReply} GetOrgTreeReply instance
         */
        GetOrgTreeReply.create = function create(properties) {
            return new GetOrgTreeReply(properties);
        };

        /**
         * Encodes the specified GetOrgTreeReply message. Does not implicitly {@link pbOrganization.GetOrgTreeReply.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.GetOrgTreeReply
         * @static
         * @param {pbOrganization.IGetOrgTreeReply} message GetOrgTreeReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOrgTreeReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.trees != null && message.trees.length)
                for (var i = 0; i < message.trees.length; ++i)
                    $root.pbOrganization.OrganizationTree.encode(message.trees[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetOrgTreeReply message, length delimited. Does not implicitly {@link pbOrganization.GetOrgTreeReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.GetOrgTreeReply
         * @static
         * @param {pbOrganization.IGetOrgTreeReply} message GetOrgTreeReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOrgTreeReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetOrgTreeReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.GetOrgTreeReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.GetOrgTreeReply} GetOrgTreeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOrgTreeReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.GetOrgTreeReply();
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
                        if (!(message.trees && message.trees.length))
                            message.trees = [];
                        message.trees.push($root.pbOrganization.OrganizationTree.decode(reader, reader.uint32()));
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
         * Decodes a GetOrgTreeReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.GetOrgTreeReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.GetOrgTreeReply} GetOrgTreeReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOrgTreeReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetOrgTreeReply message.
         * @function verify
         * @memberof pbOrganization.GetOrgTreeReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetOrgTreeReply.verify = function verify(message) {
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
            if (message.trees != null && message.hasOwnProperty("trees")) {
                if (!Array.isArray(message.trees))
                    return "trees: array expected";
                for (var i = 0; i < message.trees.length; ++i) {
                    var error = $root.pbOrganization.OrganizationTree.verify(message.trees[i]);
                    if (error)
                        return "trees." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GetOrgTreeReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.GetOrgTreeReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.GetOrgTreeReply} GetOrgTreeReply
         */
        GetOrgTreeReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.GetOrgTreeReply)
                return object;
            var message = new $root.pbOrganization.GetOrgTreeReply();
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
            if (object.trees) {
                if (!Array.isArray(object.trees))
                    throw TypeError(".pbOrganization.GetOrgTreeReply.trees: array expected");
                message.trees = [];
                for (var i = 0; i < object.trees.length; ++i) {
                    if (typeof object.trees[i] !== "object")
                        throw TypeError(".pbOrganization.GetOrgTreeReply.trees: object expected");
                    message.trees[i] = $root.pbOrganization.OrganizationTree.fromObject(object.trees[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GetOrgTreeReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.GetOrgTreeReply
         * @static
         * @param {pbOrganization.GetOrgTreeReply} message GetOrgTreeReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetOrgTreeReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.trees = [];
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.trees && message.trees.length) {
                object.trees = [];
                for (var j = 0; j < message.trees.length; ++j)
                    object.trees[j] = $root.pbOrganization.OrganizationTree.toObject(message.trees[j], options);
            }
            return object;
        };

        /**
         * Converts this GetOrgTreeReply to JSON.
         * @function toJSON
         * @memberof pbOrganization.GetOrgTreeReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetOrgTreeReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetOrgTreeReply
         * @function getTypeUrl
         * @memberof pbOrganization.GetOrgTreeReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetOrgTreeReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.GetOrgTreeReply";
        };

        return GetOrgTreeReply;
    })();

    pbOrganization.OrganizationTree = (function() {

        /**
         * Properties of an OrganizationTree.
         * @memberof pbOrganization
         * @interface IOrganizationTree
         * @property {pbOrganization.IOrganization|null} [org] OrganizationTree org
         * @property {Array.<pbOrganization.IOrganizationTree>|null} [children] OrganizationTree children
         */

        /**
         * Constructs a new OrganizationTree.
         * @memberof pbOrganization
         * @classdesc Represents an OrganizationTree.
         * @implements IOrganizationTree
         * @constructor
         * @param {pbOrganization.IOrganizationTree=} [properties] Properties to set
         */
        function OrganizationTree(properties) {
            this.children = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrganizationTree org.
         * @member {pbOrganization.IOrganization|null|undefined} org
         * @memberof pbOrganization.OrganizationTree
         * @instance
         */
        OrganizationTree.prototype.org = null;

        /**
         * OrganizationTree children.
         * @member {Array.<pbOrganization.IOrganizationTree>} children
         * @memberof pbOrganization.OrganizationTree
         * @instance
         */
        OrganizationTree.prototype.children = $util.emptyArray;

        /**
         * Creates a new OrganizationTree instance using the specified properties.
         * @function create
         * @memberof pbOrganization.OrganizationTree
         * @static
         * @param {pbOrganization.IOrganizationTree=} [properties] Properties to set
         * @returns {pbOrganization.OrganizationTree} OrganizationTree instance
         */
        OrganizationTree.create = function create(properties) {
            return new OrganizationTree(properties);
        };

        /**
         * Encodes the specified OrganizationTree message. Does not implicitly {@link pbOrganization.OrganizationTree.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.OrganizationTree
         * @static
         * @param {pbOrganization.IOrganizationTree} message OrganizationTree message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrganizationTree.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.org != null && Object.hasOwnProperty.call(message, "org"))
                $root.pbOrganization.Organization.encode(message.org, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.children != null && message.children.length)
                for (var i = 0; i < message.children.length; ++i)
                    $root.pbOrganization.OrganizationTree.encode(message.children[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OrganizationTree message, length delimited. Does not implicitly {@link pbOrganization.OrganizationTree.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.OrganizationTree
         * @static
         * @param {pbOrganization.IOrganizationTree} message OrganizationTree message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrganizationTree.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrganizationTree message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.OrganizationTree
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.OrganizationTree} OrganizationTree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrganizationTree.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.OrganizationTree();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.org = $root.pbOrganization.Organization.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.children && message.children.length))
                            message.children = [];
                        message.children.push($root.pbOrganization.OrganizationTree.decode(reader, reader.uint32()));
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
         * Decodes an OrganizationTree message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.OrganizationTree
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.OrganizationTree} OrganizationTree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrganizationTree.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrganizationTree message.
         * @function verify
         * @memberof pbOrganization.OrganizationTree
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrganizationTree.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.org != null && message.hasOwnProperty("org")) {
                var error = $root.pbOrganization.Organization.verify(message.org);
                if (error)
                    return "org." + error;
            }
            if (message.children != null && message.hasOwnProperty("children")) {
                if (!Array.isArray(message.children))
                    return "children: array expected";
                for (var i = 0; i < message.children.length; ++i) {
                    var error = $root.pbOrganization.OrganizationTree.verify(message.children[i]);
                    if (error)
                        return "children." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OrganizationTree message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.OrganizationTree
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.OrganizationTree} OrganizationTree
         */
        OrganizationTree.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.OrganizationTree)
                return object;
            var message = new $root.pbOrganization.OrganizationTree();
            if (object.org != null) {
                if (typeof object.org !== "object")
                    throw TypeError(".pbOrganization.OrganizationTree.org: object expected");
                message.org = $root.pbOrganization.Organization.fromObject(object.org);
            }
            if (object.children) {
                if (!Array.isArray(object.children))
                    throw TypeError(".pbOrganization.OrganizationTree.children: array expected");
                message.children = [];
                for (var i = 0; i < object.children.length; ++i) {
                    if (typeof object.children[i] !== "object")
                        throw TypeError(".pbOrganization.OrganizationTree.children: object expected");
                    message.children[i] = $root.pbOrganization.OrganizationTree.fromObject(object.children[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an OrganizationTree message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.OrganizationTree
         * @static
         * @param {pbOrganization.OrganizationTree} message OrganizationTree
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrganizationTree.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.children = [];
            if (options.defaults)
                object.org = null;
            if (message.org != null && message.hasOwnProperty("org"))
                object.org = $root.pbOrganization.Organization.toObject(message.org, options);
            if (message.children && message.children.length) {
                object.children = [];
                for (var j = 0; j < message.children.length; ++j)
                    object.children[j] = $root.pbOrganization.OrganizationTree.toObject(message.children[j], options);
            }
            return object;
        };

        /**
         * Converts this OrganizationTree to JSON.
         * @function toJSON
         * @memberof pbOrganization.OrganizationTree
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrganizationTree.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OrganizationTree
         * @function getTypeUrl
         * @memberof pbOrganization.OrganizationTree
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OrganizationTree.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.OrganizationTree";
        };

        return OrganizationTree;
    })();

    pbOrganization.GetOrgUsersArgs = (function() {

        /**
         * Properties of a GetOrgUsersArgs.
         * @memberof pbOrganization
         * @interface IGetOrgUsersArgs
         * @property {number|Long|null} [orgId] GetOrgUsersArgs orgId
         * @property {pbOrganization.IPageInfo|null} [pageInfo] GetOrgUsersArgs pageInfo
         */

        /**
         * Constructs a new GetOrgUsersArgs.
         * @memberof pbOrganization
         * @classdesc Represents a GetOrgUsersArgs.
         * @implements IGetOrgUsersArgs
         * @constructor
         * @param {pbOrganization.IGetOrgUsersArgs=} [properties] Properties to set
         */
        function GetOrgUsersArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetOrgUsersArgs orgId.
         * @member {number|Long} orgId
         * @memberof pbOrganization.GetOrgUsersArgs
         * @instance
         */
        GetOrgUsersArgs.prototype.orgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetOrgUsersArgs pageInfo.
         * @member {pbOrganization.IPageInfo|null|undefined} pageInfo
         * @memberof pbOrganization.GetOrgUsersArgs
         * @instance
         */
        GetOrgUsersArgs.prototype.pageInfo = null;

        /**
         * Creates a new GetOrgUsersArgs instance using the specified properties.
         * @function create
         * @memberof pbOrganization.GetOrgUsersArgs
         * @static
         * @param {pbOrganization.IGetOrgUsersArgs=} [properties] Properties to set
         * @returns {pbOrganization.GetOrgUsersArgs} GetOrgUsersArgs instance
         */
        GetOrgUsersArgs.create = function create(properties) {
            return new GetOrgUsersArgs(properties);
        };

        /**
         * Encodes the specified GetOrgUsersArgs message. Does not implicitly {@link pbOrganization.GetOrgUsersArgs.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.GetOrgUsersArgs
         * @static
         * @param {pbOrganization.IGetOrgUsersArgs} message GetOrgUsersArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOrgUsersArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orgId != null && Object.hasOwnProperty.call(message, "orgId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.orgId);
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbOrganization.PageInfo.encode(message.pageInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetOrgUsersArgs message, length delimited. Does not implicitly {@link pbOrganization.GetOrgUsersArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.GetOrgUsersArgs
         * @static
         * @param {pbOrganization.IGetOrgUsersArgs} message GetOrgUsersArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOrgUsersArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetOrgUsersArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.GetOrgUsersArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.GetOrgUsersArgs} GetOrgUsersArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOrgUsersArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.GetOrgUsersArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.orgId = reader.int64();
                        break;
                    }
                case 2: {
                        message.pageInfo = $root.pbOrganization.PageInfo.decode(reader, reader.uint32());
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
         * Decodes a GetOrgUsersArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.GetOrgUsersArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.GetOrgUsersArgs} GetOrgUsersArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOrgUsersArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetOrgUsersArgs message.
         * @function verify
         * @memberof pbOrganization.GetOrgUsersArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetOrgUsersArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (!$util.isInteger(message.orgId) && !(message.orgId && $util.isInteger(message.orgId.low) && $util.isInteger(message.orgId.high)))
                    return "orgId: integer|Long expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbOrganization.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            return null;
        };

        /**
         * Creates a GetOrgUsersArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.GetOrgUsersArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.GetOrgUsersArgs} GetOrgUsersArgs
         */
        GetOrgUsersArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.GetOrgUsersArgs)
                return object;
            var message = new $root.pbOrganization.GetOrgUsersArgs();
            if (object.orgId != null)
                if ($util.Long)
                    (message.orgId = $util.Long.fromValue(object.orgId)).unsigned = false;
                else if (typeof object.orgId === "string")
                    message.orgId = parseInt(object.orgId, 10);
                else if (typeof object.orgId === "number")
                    message.orgId = object.orgId;
                else if (typeof object.orgId === "object")
                    message.orgId = new $util.LongBits(object.orgId.low >>> 0, object.orgId.high >>> 0).toNumber();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbOrganization.GetOrgUsersArgs.pageInfo: object expected");
                message.pageInfo = $root.pbOrganization.PageInfo.fromObject(object.pageInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetOrgUsersArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.GetOrgUsersArgs
         * @static
         * @param {pbOrganization.GetOrgUsersArgs} message GetOrgUsersArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetOrgUsersArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.orgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orgId = options.longs === String ? "0" : 0;
                object.pageInfo = null;
            }
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (typeof message.orgId === "number")
                    object.orgId = options.longs === String ? String(message.orgId) : message.orgId;
                else
                    object.orgId = options.longs === String ? $util.Long.prototype.toString.call(message.orgId) : options.longs === Number ? new $util.LongBits(message.orgId.low >>> 0, message.orgId.high >>> 0).toNumber() : message.orgId;
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                object.pageInfo = $root.pbOrganization.PageInfo.toObject(message.pageInfo, options);
            return object;
        };

        /**
         * Converts this GetOrgUsersArgs to JSON.
         * @function toJSON
         * @memberof pbOrganization.GetOrgUsersArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetOrgUsersArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetOrgUsersArgs
         * @function getTypeUrl
         * @memberof pbOrganization.GetOrgUsersArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetOrgUsersArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.GetOrgUsersArgs";
        };

        return GetOrgUsersArgs;
    })();

    pbOrganization.GetOrgUsersReply = (function() {

        /**
         * Properties of a GetOrgUsersReply.
         * @memberof pbOrganization
         * @interface IGetOrgUsersReply
         * @property {pbcommon.EnumCode|null} [code] GetOrgUsersReply code
         * @property {string|null} [msg] GetOrgUsersReply msg
         * @property {Array.<pbOrganization.IUserOrgUser>|null} [list] GetOrgUsersReply list
         * @property {number|Long|null} [total] GetOrgUsersReply total
         */

        /**
         * Constructs a new GetOrgUsersReply.
         * @memberof pbOrganization
         * @classdesc Represents a GetOrgUsersReply.
         * @implements IGetOrgUsersReply
         * @constructor
         * @param {pbOrganization.IGetOrgUsersReply=} [properties] Properties to set
         */
        function GetOrgUsersReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetOrgUsersReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbOrganization.GetOrgUsersReply
         * @instance
         */
        GetOrgUsersReply.prototype.code = 0;

        /**
         * GetOrgUsersReply msg.
         * @member {string} msg
         * @memberof pbOrganization.GetOrgUsersReply
         * @instance
         */
        GetOrgUsersReply.prototype.msg = "";

        /**
         * GetOrgUsersReply list.
         * @member {Array.<pbOrganization.IUserOrgUser>} list
         * @memberof pbOrganization.GetOrgUsersReply
         * @instance
         */
        GetOrgUsersReply.prototype.list = $util.emptyArray;

        /**
         * GetOrgUsersReply total.
         * @member {number|Long} total
         * @memberof pbOrganization.GetOrgUsersReply
         * @instance
         */
        GetOrgUsersReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new GetOrgUsersReply instance using the specified properties.
         * @function create
         * @memberof pbOrganization.GetOrgUsersReply
         * @static
         * @param {pbOrganization.IGetOrgUsersReply=} [properties] Properties to set
         * @returns {pbOrganization.GetOrgUsersReply} GetOrgUsersReply instance
         */
        GetOrgUsersReply.create = function create(properties) {
            return new GetOrgUsersReply(properties);
        };

        /**
         * Encodes the specified GetOrgUsersReply message. Does not implicitly {@link pbOrganization.GetOrgUsersReply.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.GetOrgUsersReply
         * @static
         * @param {pbOrganization.IGetOrgUsersReply} message GetOrgUsersReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOrgUsersReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbOrganization.UserOrgUser.encode(message.list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.total);
            return writer;
        };

        /**
         * Encodes the specified GetOrgUsersReply message, length delimited. Does not implicitly {@link pbOrganization.GetOrgUsersReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.GetOrgUsersReply
         * @static
         * @param {pbOrganization.IGetOrgUsersReply} message GetOrgUsersReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetOrgUsersReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetOrgUsersReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.GetOrgUsersReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.GetOrgUsersReply} GetOrgUsersReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOrgUsersReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.GetOrgUsersReply();
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
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbOrganization.UserOrgUser.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
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
         * Decodes a GetOrgUsersReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.GetOrgUsersReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.GetOrgUsersReply} GetOrgUsersReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetOrgUsersReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetOrgUsersReply message.
         * @function verify
         * @memberof pbOrganization.GetOrgUsersReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetOrgUsersReply.verify = function verify(message) {
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
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbOrganization.UserOrgUser.verify(message.list[i]);
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
         * Creates a GetOrgUsersReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.GetOrgUsersReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.GetOrgUsersReply} GetOrgUsersReply
         */
        GetOrgUsersReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.GetOrgUsersReply)
                return object;
            var message = new $root.pbOrganization.GetOrgUsersReply();
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
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbOrganization.GetOrgUsersReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbOrganization.GetOrgUsersReply.list: object expected");
                    message.list[i] = $root.pbOrganization.UserOrgUser.fromObject(object.list[i]);
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
         * Creates a plain object from a GetOrgUsersReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.GetOrgUsersReply
         * @static
         * @param {pbOrganization.GetOrgUsersReply} message GetOrgUsersReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetOrgUsersReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.msg = "";
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
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbOrganization.UserOrgUser.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this GetOrgUsersReply to JSON.
         * @function toJSON
         * @memberof pbOrganization.GetOrgUsersReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetOrgUsersReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetOrgUsersReply
         * @function getTypeUrl
         * @memberof pbOrganization.GetOrgUsersReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetOrgUsersReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.GetOrgUsersReply";
        };

        return GetOrgUsersReply;
    })();

    pbOrganization.UserOrgUser = (function() {

        /**
         * Properties of a UserOrgUser.
         * @memberof pbOrganization
         * @interface IUserOrgUser
         * @property {number|Long|null} [id] UserOrgUser id
         * @property {number|Long|null} [userId] UserOrgUser userId
         * @property {number|Long|null} [orgId] UserOrgUser orgId
         * @property {boolean|null} [isLeader] UserOrgUser isLeader
         * @property {string|null} [position] UserOrgUser position
         * @property {string|null} [createdAt] UserOrgUser createdAt
         * @property {string|null} [userName] UserOrgUser userName
         * @property {string|null} [userPhone] UserOrgUser userPhone
         * @property {string|null} [userNickName] UserOrgUser userNickName
         */

        /**
         * Constructs a new UserOrgUser.
         * @memberof pbOrganization
         * @classdesc Represents a UserOrgUser.
         * @implements IUserOrgUser
         * @constructor
         * @param {pbOrganization.IUserOrgUser=} [properties] Properties to set
         */
        function UserOrgUser(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserOrgUser id.
         * @member {number|Long} id
         * @memberof pbOrganization.UserOrgUser
         * @instance
         */
        UserOrgUser.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserOrgUser userId.
         * @member {number|Long} userId
         * @memberof pbOrganization.UserOrgUser
         * @instance
         */
        UserOrgUser.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserOrgUser orgId.
         * @member {number|Long} orgId
         * @memberof pbOrganization.UserOrgUser
         * @instance
         */
        UserOrgUser.prototype.orgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserOrgUser isLeader.
         * @member {boolean} isLeader
         * @memberof pbOrganization.UserOrgUser
         * @instance
         */
        UserOrgUser.prototype.isLeader = false;

        /**
         * UserOrgUser position.
         * @member {string} position
         * @memberof pbOrganization.UserOrgUser
         * @instance
         */
        UserOrgUser.prototype.position = "";

        /**
         * UserOrgUser createdAt.
         * @member {string} createdAt
         * @memberof pbOrganization.UserOrgUser
         * @instance
         */
        UserOrgUser.prototype.createdAt = "";

        /**
         * UserOrgUser userName.
         * @member {string} userName
         * @memberof pbOrganization.UserOrgUser
         * @instance
         */
        UserOrgUser.prototype.userName = "";

        /**
         * UserOrgUser userPhone.
         * @member {string} userPhone
         * @memberof pbOrganization.UserOrgUser
         * @instance
         */
        UserOrgUser.prototype.userPhone = "";

        /**
         * UserOrgUser userNickName.
         * @member {string} userNickName
         * @memberof pbOrganization.UserOrgUser
         * @instance
         */
        UserOrgUser.prototype.userNickName = "";

        /**
         * Creates a new UserOrgUser instance using the specified properties.
         * @function create
         * @memberof pbOrganization.UserOrgUser
         * @static
         * @param {pbOrganization.IUserOrgUser=} [properties] Properties to set
         * @returns {pbOrganization.UserOrgUser} UserOrgUser instance
         */
        UserOrgUser.create = function create(properties) {
            return new UserOrgUser(properties);
        };

        /**
         * Encodes the specified UserOrgUser message. Does not implicitly {@link pbOrganization.UserOrgUser.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.UserOrgUser
         * @static
         * @param {pbOrganization.IUserOrgUser} message UserOrgUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOrgUser.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.userId);
            if (message.orgId != null && Object.hasOwnProperty.call(message, "orgId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.orgId);
            if (message.isLeader != null && Object.hasOwnProperty.call(message, "isLeader"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isLeader);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.position);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.createdAt);
            if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.userName);
            if (message.userPhone != null && Object.hasOwnProperty.call(message, "userPhone"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.userPhone);
            if (message.userNickName != null && Object.hasOwnProperty.call(message, "userNickName"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.userNickName);
            return writer;
        };

        /**
         * Encodes the specified UserOrgUser message, length delimited. Does not implicitly {@link pbOrganization.UserOrgUser.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.UserOrgUser
         * @static
         * @param {pbOrganization.IUserOrgUser} message UserOrgUser message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserOrgUser.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserOrgUser message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.UserOrgUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.UserOrgUser} UserOrgUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOrgUser.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.UserOrgUser();
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
                        message.userId = reader.int64();
                        break;
                    }
                case 3: {
                        message.orgId = reader.int64();
                        break;
                    }
                case 4: {
                        message.isLeader = reader.bool();
                        break;
                    }
                case 5: {
                        message.position = reader.string();
                        break;
                    }
                case 6: {
                        message.createdAt = reader.string();
                        break;
                    }
                case 7: {
                        message.userName = reader.string();
                        break;
                    }
                case 8: {
                        message.userPhone = reader.string();
                        break;
                    }
                case 9: {
                        message.userNickName = reader.string();
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
         * Decodes a UserOrgUser message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.UserOrgUser
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.UserOrgUser} UserOrgUser
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserOrgUser.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserOrgUser message.
         * @function verify
         * @memberof pbOrganization.UserOrgUser
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserOrgUser.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (!$util.isInteger(message.orgId) && !(message.orgId && $util.isInteger(message.orgId.low) && $util.isInteger(message.orgId.high)))
                    return "orgId: integer|Long expected";
            if (message.isLeader != null && message.hasOwnProperty("isLeader"))
                if (typeof message.isLeader !== "boolean")
                    return "isLeader: boolean expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isString(message.position))
                    return "position: string expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.userPhone != null && message.hasOwnProperty("userPhone"))
                if (!$util.isString(message.userPhone))
                    return "userPhone: string expected";
            if (message.userNickName != null && message.hasOwnProperty("userNickName"))
                if (!$util.isString(message.userNickName))
                    return "userNickName: string expected";
            return null;
        };

        /**
         * Creates a UserOrgUser message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.UserOrgUser
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.UserOrgUser} UserOrgUser
         */
        UserOrgUser.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.UserOrgUser)
                return object;
            var message = new $root.pbOrganization.UserOrgUser();
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.orgId != null)
                if ($util.Long)
                    (message.orgId = $util.Long.fromValue(object.orgId)).unsigned = false;
                else if (typeof object.orgId === "string")
                    message.orgId = parseInt(object.orgId, 10);
                else if (typeof object.orgId === "number")
                    message.orgId = object.orgId;
                else if (typeof object.orgId === "object")
                    message.orgId = new $util.LongBits(object.orgId.low >>> 0, object.orgId.high >>> 0).toNumber();
            if (object.isLeader != null)
                message.isLeader = Boolean(object.isLeader);
            if (object.position != null)
                message.position = String(object.position);
            if (object.createdAt != null)
                message.createdAt = String(object.createdAt);
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.userPhone != null)
                message.userPhone = String(object.userPhone);
            if (object.userNickName != null)
                message.userNickName = String(object.userNickName);
            return message;
        };

        /**
         * Creates a plain object from a UserOrgUser message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.UserOrgUser
         * @static
         * @param {pbOrganization.UserOrgUser} message UserOrgUser
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserOrgUser.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.orgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orgId = options.longs === String ? "0" : 0;
                object.isLeader = false;
                object.position = "";
                object.createdAt = "";
                object.userName = "";
                object.userPhone = "";
                object.userNickName = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (typeof message.orgId === "number")
                    object.orgId = options.longs === String ? String(message.orgId) : message.orgId;
                else
                    object.orgId = options.longs === String ? $util.Long.prototype.toString.call(message.orgId) : options.longs === Number ? new $util.LongBits(message.orgId.low >>> 0, message.orgId.high >>> 0).toNumber() : message.orgId;
            if (message.isLeader != null && message.hasOwnProperty("isLeader"))
                object.isLeader = message.isLeader;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.userPhone != null && message.hasOwnProperty("userPhone"))
                object.userPhone = message.userPhone;
            if (message.userNickName != null && message.hasOwnProperty("userNickName"))
                object.userNickName = message.userNickName;
            return object;
        };

        /**
         * Converts this UserOrgUser to JSON.
         * @function toJSON
         * @memberof pbOrganization.UserOrgUser
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserOrgUser.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserOrgUser
         * @function getTypeUrl
         * @memberof pbOrganization.UserOrgUser
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserOrgUser.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.UserOrgUser";
        };

        return UserOrgUser;
    })();

    pbOrganization.GetUserOrgsArgs = (function() {

        /**
         * Properties of a GetUserOrgsArgs.
         * @memberof pbOrganization
         * @interface IGetUserOrgsArgs
         * @property {number|Long|null} [userId] GetUserOrgsArgs userId
         * @property {pbOrganization.IPageInfo|null} [pageInfo] GetUserOrgsArgs pageInfo
         */

        /**
         * Constructs a new GetUserOrgsArgs.
         * @memberof pbOrganization
         * @classdesc Represents a GetUserOrgsArgs.
         * @implements IGetUserOrgsArgs
         * @constructor
         * @param {pbOrganization.IGetUserOrgsArgs=} [properties] Properties to set
         */
        function GetUserOrgsArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserOrgsArgs userId.
         * @member {number|Long} userId
         * @memberof pbOrganization.GetUserOrgsArgs
         * @instance
         */
        GetUserOrgsArgs.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * GetUserOrgsArgs pageInfo.
         * @member {pbOrganization.IPageInfo|null|undefined} pageInfo
         * @memberof pbOrganization.GetUserOrgsArgs
         * @instance
         */
        GetUserOrgsArgs.prototype.pageInfo = null;

        /**
         * Creates a new GetUserOrgsArgs instance using the specified properties.
         * @function create
         * @memberof pbOrganization.GetUserOrgsArgs
         * @static
         * @param {pbOrganization.IGetUserOrgsArgs=} [properties] Properties to set
         * @returns {pbOrganization.GetUserOrgsArgs} GetUserOrgsArgs instance
         */
        GetUserOrgsArgs.create = function create(properties) {
            return new GetUserOrgsArgs(properties);
        };

        /**
         * Encodes the specified GetUserOrgsArgs message. Does not implicitly {@link pbOrganization.GetUserOrgsArgs.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.GetUserOrgsArgs
         * @static
         * @param {pbOrganization.IGetUserOrgsArgs} message GetUserOrgsArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserOrgsArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbOrganization.PageInfo.encode(message.pageInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GetUserOrgsArgs message, length delimited. Does not implicitly {@link pbOrganization.GetUserOrgsArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.GetUserOrgsArgs
         * @static
         * @param {pbOrganization.IGetUserOrgsArgs} message GetUserOrgsArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserOrgsArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserOrgsArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.GetUserOrgsArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.GetUserOrgsArgs} GetUserOrgsArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserOrgsArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.GetUserOrgsArgs();
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
                        message.pageInfo = $root.pbOrganization.PageInfo.decode(reader, reader.uint32());
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
         * Decodes a GetUserOrgsArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.GetUserOrgsArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.GetUserOrgsArgs} GetUserOrgsArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserOrgsArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserOrgsArgs message.
         * @function verify
         * @memberof pbOrganization.GetUserOrgsArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserOrgsArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbOrganization.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            return null;
        };

        /**
         * Creates a GetUserOrgsArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.GetUserOrgsArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.GetUserOrgsArgs} GetUserOrgsArgs
         */
        GetUserOrgsArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.GetUserOrgsArgs)
                return object;
            var message = new $root.pbOrganization.GetUserOrgsArgs();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbOrganization.GetUserOrgsArgs.pageInfo: object expected");
                message.pageInfo = $root.pbOrganization.PageInfo.fromObject(object.pageInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a GetUserOrgsArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.GetUserOrgsArgs
         * @static
         * @param {pbOrganization.GetUserOrgsArgs} message GetUserOrgsArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserOrgsArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.userId = options.longs === String ? "0" : 0;
                object.pageInfo = null;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                object.pageInfo = $root.pbOrganization.PageInfo.toObject(message.pageInfo, options);
            return object;
        };

        /**
         * Converts this GetUserOrgsArgs to JSON.
         * @function toJSON
         * @memberof pbOrganization.GetUserOrgsArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserOrgsArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetUserOrgsArgs
         * @function getTypeUrl
         * @memberof pbOrganization.GetUserOrgsArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetUserOrgsArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.GetUserOrgsArgs";
        };

        return GetUserOrgsArgs;
    })();

    pbOrganization.AssignUserToOrgArgs = (function() {

        /**
         * Properties of an AssignUserToOrgArgs.
         * @memberof pbOrganization
         * @interface IAssignUserToOrgArgs
         * @property {number|Long|null} [userId] AssignUserToOrgArgs userId
         * @property {number|Long|null} [orgId] AssignUserToOrgArgs orgId
         * @property {boolean|null} [isLeader] AssignUserToOrgArgs isLeader
         * @property {string|null} [position] AssignUserToOrgArgs position
         */

        /**
         * Constructs a new AssignUserToOrgArgs.
         * @memberof pbOrganization
         * @classdesc Represents an AssignUserToOrgArgs.
         * @implements IAssignUserToOrgArgs
         * @constructor
         * @param {pbOrganization.IAssignUserToOrgArgs=} [properties] Properties to set
         */
        function AssignUserToOrgArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssignUserToOrgArgs userId.
         * @member {number|Long} userId
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @instance
         */
        AssignUserToOrgArgs.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AssignUserToOrgArgs orgId.
         * @member {number|Long} orgId
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @instance
         */
        AssignUserToOrgArgs.prototype.orgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AssignUserToOrgArgs isLeader.
         * @member {boolean} isLeader
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @instance
         */
        AssignUserToOrgArgs.prototype.isLeader = false;

        /**
         * AssignUserToOrgArgs position.
         * @member {string} position
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @instance
         */
        AssignUserToOrgArgs.prototype.position = "";

        /**
         * Creates a new AssignUserToOrgArgs instance using the specified properties.
         * @function create
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @static
         * @param {pbOrganization.IAssignUserToOrgArgs=} [properties] Properties to set
         * @returns {pbOrganization.AssignUserToOrgArgs} AssignUserToOrgArgs instance
         */
        AssignUserToOrgArgs.create = function create(properties) {
            return new AssignUserToOrgArgs(properties);
        };

        /**
         * Encodes the specified AssignUserToOrgArgs message. Does not implicitly {@link pbOrganization.AssignUserToOrgArgs.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @static
         * @param {pbOrganization.IAssignUserToOrgArgs} message AssignUserToOrgArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssignUserToOrgArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.orgId != null && Object.hasOwnProperty.call(message, "orgId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.orgId);
            if (message.isLeader != null && Object.hasOwnProperty.call(message, "isLeader"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isLeader);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.position);
            return writer;
        };

        /**
         * Encodes the specified AssignUserToOrgArgs message, length delimited. Does not implicitly {@link pbOrganization.AssignUserToOrgArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @static
         * @param {pbOrganization.IAssignUserToOrgArgs} message AssignUserToOrgArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssignUserToOrgArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssignUserToOrgArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.AssignUserToOrgArgs} AssignUserToOrgArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssignUserToOrgArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.AssignUserToOrgArgs();
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
                        message.orgId = reader.int64();
                        break;
                    }
                case 3: {
                        message.isLeader = reader.bool();
                        break;
                    }
                case 4: {
                        message.position = reader.string();
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
         * Decodes an AssignUserToOrgArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.AssignUserToOrgArgs} AssignUserToOrgArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssignUserToOrgArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssignUserToOrgArgs message.
         * @function verify
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssignUserToOrgArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (!$util.isInteger(message.orgId) && !(message.orgId && $util.isInteger(message.orgId.low) && $util.isInteger(message.orgId.high)))
                    return "orgId: integer|Long expected";
            if (message.isLeader != null && message.hasOwnProperty("isLeader"))
                if (typeof message.isLeader !== "boolean")
                    return "isLeader: boolean expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isString(message.position))
                    return "position: string expected";
            return null;
        };

        /**
         * Creates an AssignUserToOrgArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.AssignUserToOrgArgs} AssignUserToOrgArgs
         */
        AssignUserToOrgArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.AssignUserToOrgArgs)
                return object;
            var message = new $root.pbOrganization.AssignUserToOrgArgs();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.orgId != null)
                if ($util.Long)
                    (message.orgId = $util.Long.fromValue(object.orgId)).unsigned = false;
                else if (typeof object.orgId === "string")
                    message.orgId = parseInt(object.orgId, 10);
                else if (typeof object.orgId === "number")
                    message.orgId = object.orgId;
                else if (typeof object.orgId === "object")
                    message.orgId = new $util.LongBits(object.orgId.low >>> 0, object.orgId.high >>> 0).toNumber();
            if (object.isLeader != null)
                message.isLeader = Boolean(object.isLeader);
            if (object.position != null)
                message.position = String(object.position);
            return message;
        };

        /**
         * Creates a plain object from an AssignUserToOrgArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @static
         * @param {pbOrganization.AssignUserToOrgArgs} message AssignUserToOrgArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssignUserToOrgArgs.toObject = function toObject(message, options) {
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
                    object.orgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orgId = options.longs === String ? "0" : 0;
                object.isLeader = false;
                object.position = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (typeof message.orgId === "number")
                    object.orgId = options.longs === String ? String(message.orgId) : message.orgId;
                else
                    object.orgId = options.longs === String ? $util.Long.prototype.toString.call(message.orgId) : options.longs === Number ? new $util.LongBits(message.orgId.low >>> 0, message.orgId.high >>> 0).toNumber() : message.orgId;
            if (message.isLeader != null && message.hasOwnProperty("isLeader"))
                object.isLeader = message.isLeader;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            return object;
        };

        /**
         * Converts this AssignUserToOrgArgs to JSON.
         * @function toJSON
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssignUserToOrgArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AssignUserToOrgArgs
         * @function getTypeUrl
         * @memberof pbOrganization.AssignUserToOrgArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AssignUserToOrgArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.AssignUserToOrgArgs";
        };

        return AssignUserToOrgArgs;
    })();

    pbOrganization.BatchAssignUsersArgs = (function() {

        /**
         * Properties of a BatchAssignUsersArgs.
         * @memberof pbOrganization
         * @interface IBatchAssignUsersArgs
         * @property {Array.<number|Long>|null} [userIds] BatchAssignUsersArgs userIds
         * @property {number|Long|null} [orgId] BatchAssignUsersArgs orgId
         * @property {string|null} [position] BatchAssignUsersArgs position
         */

        /**
         * Constructs a new BatchAssignUsersArgs.
         * @memberof pbOrganization
         * @classdesc Represents a BatchAssignUsersArgs.
         * @implements IBatchAssignUsersArgs
         * @constructor
         * @param {pbOrganization.IBatchAssignUsersArgs=} [properties] Properties to set
         */
        function BatchAssignUsersArgs(properties) {
            this.userIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BatchAssignUsersArgs userIds.
         * @member {Array.<number|Long>} userIds
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @instance
         */
        BatchAssignUsersArgs.prototype.userIds = $util.emptyArray;

        /**
         * BatchAssignUsersArgs orgId.
         * @member {number|Long} orgId
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @instance
         */
        BatchAssignUsersArgs.prototype.orgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * BatchAssignUsersArgs position.
         * @member {string} position
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @instance
         */
        BatchAssignUsersArgs.prototype.position = "";

        /**
         * Creates a new BatchAssignUsersArgs instance using the specified properties.
         * @function create
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @static
         * @param {pbOrganization.IBatchAssignUsersArgs=} [properties] Properties to set
         * @returns {pbOrganization.BatchAssignUsersArgs} BatchAssignUsersArgs instance
         */
        BatchAssignUsersArgs.create = function create(properties) {
            return new BatchAssignUsersArgs(properties);
        };

        /**
         * Encodes the specified BatchAssignUsersArgs message. Does not implicitly {@link pbOrganization.BatchAssignUsersArgs.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @static
         * @param {pbOrganization.IBatchAssignUsersArgs} message BatchAssignUsersArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchAssignUsersArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userIds != null && message.userIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.userIds.length; ++i)
                    writer.int64(message.userIds[i]);
                writer.ldelim();
            }
            if (message.orgId != null && Object.hasOwnProperty.call(message, "orgId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.orgId);
            if (message.position != null && Object.hasOwnProperty.call(message, "position"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.position);
            return writer;
        };

        /**
         * Encodes the specified BatchAssignUsersArgs message, length delimited. Does not implicitly {@link pbOrganization.BatchAssignUsersArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @static
         * @param {pbOrganization.IBatchAssignUsersArgs} message BatchAssignUsersArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BatchAssignUsersArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BatchAssignUsersArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.BatchAssignUsersArgs} BatchAssignUsersArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchAssignUsersArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.BatchAssignUsersArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.userIds && message.userIds.length))
                            message.userIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.userIds.push(reader.int64());
                        } else
                            message.userIds.push(reader.int64());
                        break;
                    }
                case 2: {
                        message.orgId = reader.int64();
                        break;
                    }
                case 3: {
                        message.position = reader.string();
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
         * Decodes a BatchAssignUsersArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.BatchAssignUsersArgs} BatchAssignUsersArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BatchAssignUsersArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BatchAssignUsersArgs message.
         * @function verify
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BatchAssignUsersArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userIds != null && message.hasOwnProperty("userIds")) {
                if (!Array.isArray(message.userIds))
                    return "userIds: array expected";
                for (var i = 0; i < message.userIds.length; ++i)
                    if (!$util.isInteger(message.userIds[i]) && !(message.userIds[i] && $util.isInteger(message.userIds[i].low) && $util.isInteger(message.userIds[i].high)))
                        return "userIds: integer|Long[] expected";
            }
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (!$util.isInteger(message.orgId) && !(message.orgId && $util.isInteger(message.orgId.low) && $util.isInteger(message.orgId.high)))
                    return "orgId: integer|Long expected";
            if (message.position != null && message.hasOwnProperty("position"))
                if (!$util.isString(message.position))
                    return "position: string expected";
            return null;
        };

        /**
         * Creates a BatchAssignUsersArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.BatchAssignUsersArgs} BatchAssignUsersArgs
         */
        BatchAssignUsersArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.BatchAssignUsersArgs)
                return object;
            var message = new $root.pbOrganization.BatchAssignUsersArgs();
            if (object.userIds) {
                if (!Array.isArray(object.userIds))
                    throw TypeError(".pbOrganization.BatchAssignUsersArgs.userIds: array expected");
                message.userIds = [];
                for (var i = 0; i < object.userIds.length; ++i)
                    if ($util.Long)
                        (message.userIds[i] = $util.Long.fromValue(object.userIds[i])).unsigned = false;
                    else if (typeof object.userIds[i] === "string")
                        message.userIds[i] = parseInt(object.userIds[i], 10);
                    else if (typeof object.userIds[i] === "number")
                        message.userIds[i] = object.userIds[i];
                    else if (typeof object.userIds[i] === "object")
                        message.userIds[i] = new $util.LongBits(object.userIds[i].low >>> 0, object.userIds[i].high >>> 0).toNumber();
            }
            if (object.orgId != null)
                if ($util.Long)
                    (message.orgId = $util.Long.fromValue(object.orgId)).unsigned = false;
                else if (typeof object.orgId === "string")
                    message.orgId = parseInt(object.orgId, 10);
                else if (typeof object.orgId === "number")
                    message.orgId = object.orgId;
                else if (typeof object.orgId === "object")
                    message.orgId = new $util.LongBits(object.orgId.low >>> 0, object.orgId.high >>> 0).toNumber();
            if (object.position != null)
                message.position = String(object.position);
            return message;
        };

        /**
         * Creates a plain object from a BatchAssignUsersArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @static
         * @param {pbOrganization.BatchAssignUsersArgs} message BatchAssignUsersArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BatchAssignUsersArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.userIds = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.orgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orgId = options.longs === String ? "0" : 0;
                object.position = "";
            }
            if (message.userIds && message.userIds.length) {
                object.userIds = [];
                for (var j = 0; j < message.userIds.length; ++j)
                    if (typeof message.userIds[j] === "number")
                        object.userIds[j] = options.longs === String ? String(message.userIds[j]) : message.userIds[j];
                    else
                        object.userIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.userIds[j]) : options.longs === Number ? new $util.LongBits(message.userIds[j].low >>> 0, message.userIds[j].high >>> 0).toNumber() : message.userIds[j];
            }
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (typeof message.orgId === "number")
                    object.orgId = options.longs === String ? String(message.orgId) : message.orgId;
                else
                    object.orgId = options.longs === String ? $util.Long.prototype.toString.call(message.orgId) : options.longs === Number ? new $util.LongBits(message.orgId.low >>> 0, message.orgId.high >>> 0).toNumber() : message.orgId;
            if (message.position != null && message.hasOwnProperty("position"))
                object.position = message.position;
            return object;
        };

        /**
         * Converts this BatchAssignUsersArgs to JSON.
         * @function toJSON
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BatchAssignUsersArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BatchAssignUsersArgs
         * @function getTypeUrl
         * @memberof pbOrganization.BatchAssignUsersArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BatchAssignUsersArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.BatchAssignUsersArgs";
        };

        return BatchAssignUsersArgs;
    })();

    pbOrganization.RemoveUserFromOrgArgs = (function() {

        /**
         * Properties of a RemoveUserFromOrgArgs.
         * @memberof pbOrganization
         * @interface IRemoveUserFromOrgArgs
         * @property {number|Long|null} [userId] RemoveUserFromOrgArgs userId
         * @property {number|Long|null} [orgId] RemoveUserFromOrgArgs orgId
         */

        /**
         * Constructs a new RemoveUserFromOrgArgs.
         * @memberof pbOrganization
         * @classdesc Represents a RemoveUserFromOrgArgs.
         * @implements IRemoveUserFromOrgArgs
         * @constructor
         * @param {pbOrganization.IRemoveUserFromOrgArgs=} [properties] Properties to set
         */
        function RemoveUserFromOrgArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RemoveUserFromOrgArgs userId.
         * @member {number|Long} userId
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @instance
         */
        RemoveUserFromOrgArgs.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RemoveUserFromOrgArgs orgId.
         * @member {number|Long} orgId
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @instance
         */
        RemoveUserFromOrgArgs.prototype.orgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new RemoveUserFromOrgArgs instance using the specified properties.
         * @function create
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @static
         * @param {pbOrganization.IRemoveUserFromOrgArgs=} [properties] Properties to set
         * @returns {pbOrganization.RemoveUserFromOrgArgs} RemoveUserFromOrgArgs instance
         */
        RemoveUserFromOrgArgs.create = function create(properties) {
            return new RemoveUserFromOrgArgs(properties);
        };

        /**
         * Encodes the specified RemoveUserFromOrgArgs message. Does not implicitly {@link pbOrganization.RemoveUserFromOrgArgs.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @static
         * @param {pbOrganization.IRemoveUserFromOrgArgs} message RemoveUserFromOrgArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveUserFromOrgArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.userId);
            if (message.orgId != null && Object.hasOwnProperty.call(message, "orgId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.orgId);
            return writer;
        };

        /**
         * Encodes the specified RemoveUserFromOrgArgs message, length delimited. Does not implicitly {@link pbOrganization.RemoveUserFromOrgArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @static
         * @param {pbOrganization.IRemoveUserFromOrgArgs} message RemoveUserFromOrgArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RemoveUserFromOrgArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RemoveUserFromOrgArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.RemoveUserFromOrgArgs} RemoveUserFromOrgArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveUserFromOrgArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.RemoveUserFromOrgArgs();
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
                        message.orgId = reader.int64();
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
         * Decodes a RemoveUserFromOrgArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.RemoveUserFromOrgArgs} RemoveUserFromOrgArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RemoveUserFromOrgArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RemoveUserFromOrgArgs message.
         * @function verify
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RemoveUserFromOrgArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                    return "userId: integer|Long expected";
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (!$util.isInteger(message.orgId) && !(message.orgId && $util.isInteger(message.orgId.low) && $util.isInteger(message.orgId.high)))
                    return "orgId: integer|Long expected";
            return null;
        };

        /**
         * Creates a RemoveUserFromOrgArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.RemoveUserFromOrgArgs} RemoveUserFromOrgArgs
         */
        RemoveUserFromOrgArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.RemoveUserFromOrgArgs)
                return object;
            var message = new $root.pbOrganization.RemoveUserFromOrgArgs();
            if (object.userId != null)
                if ($util.Long)
                    (message.userId = $util.Long.fromValue(object.userId)).unsigned = false;
                else if (typeof object.userId === "string")
                    message.userId = parseInt(object.userId, 10);
                else if (typeof object.userId === "number")
                    message.userId = object.userId;
                else if (typeof object.userId === "object")
                    message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber();
            if (object.orgId != null)
                if ($util.Long)
                    (message.orgId = $util.Long.fromValue(object.orgId)).unsigned = false;
                else if (typeof object.orgId === "string")
                    message.orgId = parseInt(object.orgId, 10);
                else if (typeof object.orgId === "number")
                    message.orgId = object.orgId;
                else if (typeof object.orgId === "object")
                    message.orgId = new $util.LongBits(object.orgId.low >>> 0, object.orgId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a RemoveUserFromOrgArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @static
         * @param {pbOrganization.RemoveUserFromOrgArgs} message RemoveUserFromOrgArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RemoveUserFromOrgArgs.toObject = function toObject(message, options) {
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
                    object.orgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orgId = options.longs === String ? "0" : 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (typeof message.userId === "number")
                    object.userId = options.longs === String ? String(message.userId) : message.userId;
                else
                    object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber() : message.userId;
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (typeof message.orgId === "number")
                    object.orgId = options.longs === String ? String(message.orgId) : message.orgId;
                else
                    object.orgId = options.longs === String ? $util.Long.prototype.toString.call(message.orgId) : options.longs === Number ? new $util.LongBits(message.orgId.low >>> 0, message.orgId.high >>> 0).toNumber() : message.orgId;
            return object;
        };

        /**
         * Converts this RemoveUserFromOrgArgs to JSON.
         * @function toJSON
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RemoveUserFromOrgArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RemoveUserFromOrgArgs
         * @function getTypeUrl
         * @memberof pbOrganization.RemoveUserFromOrgArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RemoveUserFromOrgArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.RemoveUserFromOrgArgs";
        };

        return RemoveUserFromOrgArgs;
    })();

    pbOrganization.MoveOrgArgs = (function() {

        /**
         * Properties of a MoveOrgArgs.
         * @memberof pbOrganization
         * @interface IMoveOrgArgs
         * @property {number|Long|null} [orgId] MoveOrgArgs orgId
         * @property {number|Long|null} [newParentId] MoveOrgArgs newParentId
         * @property {number|null} [newSort] MoveOrgArgs newSort
         */

        /**
         * Constructs a new MoveOrgArgs.
         * @memberof pbOrganization
         * @classdesc Represents a MoveOrgArgs.
         * @implements IMoveOrgArgs
         * @constructor
         * @param {pbOrganization.IMoveOrgArgs=} [properties] Properties to set
         */
        function MoveOrgArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MoveOrgArgs orgId.
         * @member {number|Long} orgId
         * @memberof pbOrganization.MoveOrgArgs
         * @instance
         */
        MoveOrgArgs.prototype.orgId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MoveOrgArgs newParentId.
         * @member {number|Long} newParentId
         * @memberof pbOrganization.MoveOrgArgs
         * @instance
         */
        MoveOrgArgs.prototype.newParentId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MoveOrgArgs newSort.
         * @member {number} newSort
         * @memberof pbOrganization.MoveOrgArgs
         * @instance
         */
        MoveOrgArgs.prototype.newSort = 0;

        /**
         * Creates a new MoveOrgArgs instance using the specified properties.
         * @function create
         * @memberof pbOrganization.MoveOrgArgs
         * @static
         * @param {pbOrganization.IMoveOrgArgs=} [properties] Properties to set
         * @returns {pbOrganization.MoveOrgArgs} MoveOrgArgs instance
         */
        MoveOrgArgs.create = function create(properties) {
            return new MoveOrgArgs(properties);
        };

        /**
         * Encodes the specified MoveOrgArgs message. Does not implicitly {@link pbOrganization.MoveOrgArgs.verify|verify} messages.
         * @function encode
         * @memberof pbOrganization.MoveOrgArgs
         * @static
         * @param {pbOrganization.IMoveOrgArgs} message MoveOrgArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MoveOrgArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orgId != null && Object.hasOwnProperty.call(message, "orgId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.orgId);
            if (message.newParentId != null && Object.hasOwnProperty.call(message, "newParentId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.newParentId);
            if (message.newSort != null && Object.hasOwnProperty.call(message, "newSort"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.newSort);
            return writer;
        };

        /**
         * Encodes the specified MoveOrgArgs message, length delimited. Does not implicitly {@link pbOrganization.MoveOrgArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbOrganization.MoveOrgArgs
         * @static
         * @param {pbOrganization.IMoveOrgArgs} message MoveOrgArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MoveOrgArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MoveOrgArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbOrganization.MoveOrgArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbOrganization.MoveOrgArgs} MoveOrgArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MoveOrgArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbOrganization.MoveOrgArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.orgId = reader.int64();
                        break;
                    }
                case 2: {
                        message.newParentId = reader.int64();
                        break;
                    }
                case 3: {
                        message.newSort = reader.int32();
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
         * Decodes a MoveOrgArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbOrganization.MoveOrgArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbOrganization.MoveOrgArgs} MoveOrgArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MoveOrgArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MoveOrgArgs message.
         * @function verify
         * @memberof pbOrganization.MoveOrgArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MoveOrgArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (!$util.isInteger(message.orgId) && !(message.orgId && $util.isInteger(message.orgId.low) && $util.isInteger(message.orgId.high)))
                    return "orgId: integer|Long expected";
            if (message.newParentId != null && message.hasOwnProperty("newParentId"))
                if (!$util.isInteger(message.newParentId) && !(message.newParentId && $util.isInteger(message.newParentId.low) && $util.isInteger(message.newParentId.high)))
                    return "newParentId: integer|Long expected";
            if (message.newSort != null && message.hasOwnProperty("newSort"))
                if (!$util.isInteger(message.newSort))
                    return "newSort: integer expected";
            return null;
        };

        /**
         * Creates a MoveOrgArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbOrganization.MoveOrgArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbOrganization.MoveOrgArgs} MoveOrgArgs
         */
        MoveOrgArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbOrganization.MoveOrgArgs)
                return object;
            var message = new $root.pbOrganization.MoveOrgArgs();
            if (object.orgId != null)
                if ($util.Long)
                    (message.orgId = $util.Long.fromValue(object.orgId)).unsigned = false;
                else if (typeof object.orgId === "string")
                    message.orgId = parseInt(object.orgId, 10);
                else if (typeof object.orgId === "number")
                    message.orgId = object.orgId;
                else if (typeof object.orgId === "object")
                    message.orgId = new $util.LongBits(object.orgId.low >>> 0, object.orgId.high >>> 0).toNumber();
            if (object.newParentId != null)
                if ($util.Long)
                    (message.newParentId = $util.Long.fromValue(object.newParentId)).unsigned = false;
                else if (typeof object.newParentId === "string")
                    message.newParentId = parseInt(object.newParentId, 10);
                else if (typeof object.newParentId === "number")
                    message.newParentId = object.newParentId;
                else if (typeof object.newParentId === "object")
                    message.newParentId = new $util.LongBits(object.newParentId.low >>> 0, object.newParentId.high >>> 0).toNumber();
            if (object.newSort != null)
                message.newSort = object.newSort | 0;
            return message;
        };

        /**
         * Creates a plain object from a MoveOrgArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbOrganization.MoveOrgArgs
         * @static
         * @param {pbOrganization.MoveOrgArgs} message MoveOrgArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MoveOrgArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.orgId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.orgId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.newParentId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.newParentId = options.longs === String ? "0" : 0;
                object.newSort = 0;
            }
            if (message.orgId != null && message.hasOwnProperty("orgId"))
                if (typeof message.orgId === "number")
                    object.orgId = options.longs === String ? String(message.orgId) : message.orgId;
                else
                    object.orgId = options.longs === String ? $util.Long.prototype.toString.call(message.orgId) : options.longs === Number ? new $util.LongBits(message.orgId.low >>> 0, message.orgId.high >>> 0).toNumber() : message.orgId;
            if (message.newParentId != null && message.hasOwnProperty("newParentId"))
                if (typeof message.newParentId === "number")
                    object.newParentId = options.longs === String ? String(message.newParentId) : message.newParentId;
                else
                    object.newParentId = options.longs === String ? $util.Long.prototype.toString.call(message.newParentId) : options.longs === Number ? new $util.LongBits(message.newParentId.low >>> 0, message.newParentId.high >>> 0).toNumber() : message.newParentId;
            if (message.newSort != null && message.hasOwnProperty("newSort"))
                object.newSort = message.newSort;
            return object;
        };

        /**
         * Converts this MoveOrgArgs to JSON.
         * @function toJSON
         * @memberof pbOrganization.MoveOrgArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MoveOrgArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MoveOrgArgs
         * @function getTypeUrl
         * @memberof pbOrganization.MoveOrgArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MoveOrgArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbOrganization.MoveOrgArgs";
        };

        return MoveOrgArgs;
    })();

    pbOrganization.OrganizationService = (function() {

        /**
         * Constructs a new OrganizationService service.
         * @memberof pbOrganization
         * @classdesc Represents an OrganizationService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function OrganizationService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (OrganizationService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = OrganizationService;

        /**
         * Creates new OrganizationService service using the specified rpc implementation.
         * @function create
         * @memberof pbOrganization.OrganizationService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {OrganizationService} RPC service. Useful where requests and/or responses are streamed.
         */
        OrganizationService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#createOrganization}.
         * @memberof pbOrganization.OrganizationService
         * @typedef CreateOrganizationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CreateOrganization.
         * @function createOrganization
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IOrganization} request Organization message or plain object
         * @param {pbOrganization.OrganizationService.CreateOrganizationCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.createOrganization = function createOrganization(request, callback) {
            return this.rpcCall(createOrganization, $root.pbOrganization.Organization, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateOrganization" });

        /**
         * Calls CreateOrganization.
         * @function createOrganization
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IOrganization} request Organization message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#updateOrganization}.
         * @memberof pbOrganization.OrganizationService
         * @typedef UpdateOrganizationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls UpdateOrganization.
         * @function updateOrganization
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IOrganization} request Organization message or plain object
         * @param {pbOrganization.OrganizationService.UpdateOrganizationCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.updateOrganization = function updateOrganization(request, callback) {
            return this.rpcCall(updateOrganization, $root.pbOrganization.Organization, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateOrganization" });

        /**
         * Calls UpdateOrganization.
         * @function updateOrganization
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IOrganization} request Organization message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#deleteOrganization}.
         * @memberof pbOrganization.OrganizationService
         * @typedef DeleteOrganizationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls DeleteOrganization.
         * @function deleteOrganization
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbOrganization.OrganizationService.DeleteOrganizationCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.deleteOrganization = function deleteOrganization(request, callback) {
            return this.rpcCall(deleteOrganization, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteOrganization" });

        /**
         * Calls DeleteOrganization.
         * @function deleteOrganization
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#findOrganizationById}.
         * @memberof pbOrganization.OrganizationService
         * @typedef FindOrganizationByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbOrganization.FindOrganizationReply} [response] FindOrganizationReply
         */

        /**
         * Calls FindOrganizationById.
         * @function findOrganizationById
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbOrganization.OrganizationService.FindOrganizationByIdCallback} callback Node-style callback called with the error, if any, and FindOrganizationReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.findOrganizationById = function findOrganizationById(request, callback) {
            return this.rpcCall(findOrganizationById, $root.pbcommon.IdArgs, $root.pbOrganization.FindOrganizationReply, request, callback);
        }, "name", { value: "FindOrganizationById" });

        /**
         * Calls FindOrganizationById.
         * @function findOrganizationById
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbOrganization.FindOrganizationReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#findOrganizationList}.
         * @memberof pbOrganization.OrganizationService
         * @typedef FindOrganizationListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbOrganization.FindOrganizationReply} [response] FindOrganizationReply
         */

        /**
         * Calls FindOrganizationList.
         * @function findOrganizationList
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IFindOrganizationArgs} request FindOrganizationArgs message or plain object
         * @param {pbOrganization.OrganizationService.FindOrganizationListCallback} callback Node-style callback called with the error, if any, and FindOrganizationReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.findOrganizationList = function findOrganizationList(request, callback) {
            return this.rpcCall(findOrganizationList, $root.pbOrganization.FindOrganizationArgs, $root.pbOrganization.FindOrganizationReply, request, callback);
        }, "name", { value: "FindOrganizationList" });

        /**
         * Calls FindOrganizationList.
         * @function findOrganizationList
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IFindOrganizationArgs} request FindOrganizationArgs message or plain object
         * @returns {Promise<pbOrganization.FindOrganizationReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#getOrgTree}.
         * @memberof pbOrganization.OrganizationService
         * @typedef GetOrgTreeCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbOrganization.GetOrgTreeReply} [response] GetOrgTreeReply
         */

        /**
         * Calls GetOrgTree.
         * @function getOrgTree
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IGetOrgTreeArgs} request GetOrgTreeArgs message or plain object
         * @param {pbOrganization.OrganizationService.GetOrgTreeCallback} callback Node-style callback called with the error, if any, and GetOrgTreeReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.getOrgTree = function getOrgTree(request, callback) {
            return this.rpcCall(getOrgTree, $root.pbOrganization.GetOrgTreeArgs, $root.pbOrganization.GetOrgTreeReply, request, callback);
        }, "name", { value: "GetOrgTree" });

        /**
         * Calls GetOrgTree.
         * @function getOrgTree
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IGetOrgTreeArgs} request GetOrgTreeArgs message or plain object
         * @returns {Promise<pbOrganization.GetOrgTreeReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#getOrgUsers}.
         * @memberof pbOrganization.OrganizationService
         * @typedef GetOrgUsersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbOrganization.GetOrgUsersReply} [response] GetOrgUsersReply
         */

        /**
         * Calls GetOrgUsers.
         * @function getOrgUsers
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IGetOrgUsersArgs} request GetOrgUsersArgs message or plain object
         * @param {pbOrganization.OrganizationService.GetOrgUsersCallback} callback Node-style callback called with the error, if any, and GetOrgUsersReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.getOrgUsers = function getOrgUsers(request, callback) {
            return this.rpcCall(getOrgUsers, $root.pbOrganization.GetOrgUsersArgs, $root.pbOrganization.GetOrgUsersReply, request, callback);
        }, "name", { value: "GetOrgUsers" });

        /**
         * Calls GetOrgUsers.
         * @function getOrgUsers
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IGetOrgUsersArgs} request GetOrgUsersArgs message or plain object
         * @returns {Promise<pbOrganization.GetOrgUsersReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#getUserOrgs}.
         * @memberof pbOrganization.OrganizationService
         * @typedef GetUserOrgsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbOrganization.GetOrgUsersReply} [response] GetOrgUsersReply
         */

        /**
         * Calls GetUserOrgs.
         * @function getUserOrgs
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IGetUserOrgsArgs} request GetUserOrgsArgs message or plain object
         * @param {pbOrganization.OrganizationService.GetUserOrgsCallback} callback Node-style callback called with the error, if any, and GetOrgUsersReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.getUserOrgs = function getUserOrgs(request, callback) {
            return this.rpcCall(getUserOrgs, $root.pbOrganization.GetUserOrgsArgs, $root.pbOrganization.GetOrgUsersReply, request, callback);
        }, "name", { value: "GetUserOrgs" });

        /**
         * Calls GetUserOrgs.
         * @function getUserOrgs
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IGetUserOrgsArgs} request GetUserOrgsArgs message or plain object
         * @returns {Promise<pbOrganization.GetOrgUsersReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#assignUserToOrg}.
         * @memberof pbOrganization.OrganizationService
         * @typedef AssignUserToOrgCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls AssignUserToOrg.
         * @function assignUserToOrg
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IAssignUserToOrgArgs} request AssignUserToOrgArgs message or plain object
         * @param {pbOrganization.OrganizationService.AssignUserToOrgCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.assignUserToOrg = function assignUserToOrg(request, callback) {
            return this.rpcCall(assignUserToOrg, $root.pbOrganization.AssignUserToOrgArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "AssignUserToOrg" });

        /**
         * Calls AssignUserToOrg.
         * @function assignUserToOrg
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IAssignUserToOrgArgs} request AssignUserToOrgArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#batchAssignUsers}.
         * @memberof pbOrganization.OrganizationService
         * @typedef BatchAssignUsersCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls BatchAssignUsers.
         * @function batchAssignUsers
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IBatchAssignUsersArgs} request BatchAssignUsersArgs message or plain object
         * @param {pbOrganization.OrganizationService.BatchAssignUsersCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.batchAssignUsers = function batchAssignUsers(request, callback) {
            return this.rpcCall(batchAssignUsers, $root.pbOrganization.BatchAssignUsersArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "BatchAssignUsers" });

        /**
         * Calls BatchAssignUsers.
         * @function batchAssignUsers
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IBatchAssignUsersArgs} request BatchAssignUsersArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#removeUserFromOrg}.
         * @memberof pbOrganization.OrganizationService
         * @typedef RemoveUserFromOrgCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls RemoveUserFromOrg.
         * @function removeUserFromOrg
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IRemoveUserFromOrgArgs} request RemoveUserFromOrgArgs message or plain object
         * @param {pbOrganization.OrganizationService.RemoveUserFromOrgCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.removeUserFromOrg = function removeUserFromOrg(request, callback) {
            return this.rpcCall(removeUserFromOrg, $root.pbOrganization.RemoveUserFromOrgArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "RemoveUserFromOrg" });

        /**
         * Calls RemoveUserFromOrg.
         * @function removeUserFromOrg
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IRemoveUserFromOrgArgs} request RemoveUserFromOrgArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbOrganization.OrganizationService#moveOrganization}.
         * @memberof pbOrganization.OrganizationService
         * @typedef MoveOrganizationCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls MoveOrganization.
         * @function moveOrganization
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IMoveOrgArgs} request MoveOrgArgs message or plain object
         * @param {pbOrganization.OrganizationService.MoveOrganizationCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(OrganizationService.prototype.moveOrganization = function moveOrganization(request, callback) {
            return this.rpcCall(moveOrganization, $root.pbOrganization.MoveOrgArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "MoveOrganization" });

        /**
         * Calls MoveOrganization.
         * @function moveOrganization
         * @memberof pbOrganization.OrganizationService
         * @instance
         * @param {pbOrganization.IMoveOrgArgs} request MoveOrgArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        return OrganizationService;
    })();

    return pbOrganization;
})();

module.exports = $root;
