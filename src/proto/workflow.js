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

$root.pbWorkflow = (function() {

    /**
     * Namespace pbWorkflow.
     * @exports pbWorkflow
     * @namespace
     */
    var pbWorkflow = {};

    pbWorkflow.WorkflowDef = (function() {

        /**
         * Properties of a WorkflowDef.
         * @memberof pbWorkflow
         * @interface IWorkflowDef
         * @property {number|Long|null} [id] WorkflowDef id
         * @property {string|null} [createdAt] WorkflowDef createdAt
         * @property {string|null} [updatedAt] WorkflowDef updatedAt
         * @property {string|null} [code] WorkflowDef code
         * @property {string|null} [name] WorkflowDef name
         * @property {string|null} [category] WorkflowDef category
         * @property {string|null} [version] WorkflowDef version
         * @property {string|null} [description] WorkflowDef description
         * @property {string|null} [flowGraph] WorkflowDef flowGraph
         * @property {string|null} [formFields] WorkflowDef formFields
         * @property {number|null} [status] WorkflowDef status
         * @property {string|null} [remark] WorkflowDef remark
         */

        /**
         * Constructs a new WorkflowDef.
         * @memberof pbWorkflow
         * @classdesc Represents a WorkflowDef.
         * @implements IWorkflowDef
         * @constructor
         * @param {pbWorkflow.IWorkflowDef=} [properties] Properties to set
         */
        function WorkflowDef(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorkflowDef id.
         * @member {number|Long} id
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WorkflowDef createdAt.
         * @member {string} createdAt
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.createdAt = "";

        /**
         * WorkflowDef updatedAt.
         * @member {string} updatedAt
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.updatedAt = "";

        /**
         * WorkflowDef code.
         * @member {string} code
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.code = "";

        /**
         * WorkflowDef name.
         * @member {string} name
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.name = "";

        /**
         * WorkflowDef category.
         * @member {string} category
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.category = "";

        /**
         * WorkflowDef version.
         * @member {string} version
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.version = "";

        /**
         * WorkflowDef description.
         * @member {string} description
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.description = "";

        /**
         * WorkflowDef flowGraph.
         * @member {string} flowGraph
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.flowGraph = "";

        /**
         * WorkflowDef formFields.
         * @member {string} formFields
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.formFields = "";

        /**
         * WorkflowDef status.
         * @member {number} status
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.status = 0;

        /**
         * WorkflowDef remark.
         * @member {string} remark
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         */
        WorkflowDef.prototype.remark = "";

        /**
         * Creates a new WorkflowDef instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.WorkflowDef
         * @static
         * @param {pbWorkflow.IWorkflowDef=} [properties] Properties to set
         * @returns {pbWorkflow.WorkflowDef} WorkflowDef instance
         */
        WorkflowDef.create = function create(properties) {
            return new WorkflowDef(properties);
        };

        /**
         * Encodes the specified WorkflowDef message. Does not implicitly {@link pbWorkflow.WorkflowDef.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.WorkflowDef
         * @static
         * @param {pbWorkflow.IWorkflowDef} message WorkflowDef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkflowDef.encode = function encode(message, writer) {
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
            if (message.category != null && Object.hasOwnProperty.call(message, "category"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.category);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.version);
            if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.description);
            if (message.flowGraph != null && Object.hasOwnProperty.call(message, "flowGraph"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.flowGraph);
            if (message.formFields != null && Object.hasOwnProperty.call(message, "formFields"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.formFields);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.status);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified WorkflowDef message, length delimited. Does not implicitly {@link pbWorkflow.WorkflowDef.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.WorkflowDef
         * @static
         * @param {pbWorkflow.IWorkflowDef} message WorkflowDef message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkflowDef.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorkflowDef message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.WorkflowDef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.WorkflowDef} WorkflowDef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkflowDef.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.WorkflowDef();
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
                        message.category = reader.string();
                        break;
                    }
                case 13: {
                        message.version = reader.string();
                        break;
                    }
                case 14: {
                        message.description = reader.string();
                        break;
                    }
                case 15: {
                        message.flowGraph = reader.string();
                        break;
                    }
                case 16: {
                        message.formFields = reader.string();
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
         * Decodes a WorkflowDef message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.WorkflowDef
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.WorkflowDef} WorkflowDef
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkflowDef.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorkflowDef message.
         * @function verify
         * @memberof pbWorkflow.WorkflowDef
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorkflowDef.verify = function verify(message) {
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
            if (message.category != null && message.hasOwnProperty("category"))
                if (!$util.isString(message.category))
                    return "category: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.description != null && message.hasOwnProperty("description"))
                if (!$util.isString(message.description))
                    return "description: string expected";
            if (message.flowGraph != null && message.hasOwnProperty("flowGraph"))
                if (!$util.isString(message.flowGraph))
                    return "flowGraph: string expected";
            if (message.formFields != null && message.hasOwnProperty("formFields"))
                if (!$util.isString(message.formFields))
                    return "formFields: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a WorkflowDef message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.WorkflowDef
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.WorkflowDef} WorkflowDef
         */
        WorkflowDef.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.WorkflowDef)
                return object;
            var message = new $root.pbWorkflow.WorkflowDef();
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
            if (object.category != null)
                message.category = String(object.category);
            if (object.version != null)
                message.version = String(object.version);
            if (object.description != null)
                message.description = String(object.description);
            if (object.flowGraph != null)
                message.flowGraph = String(object.flowGraph);
            if (object.formFields != null)
                message.formFields = String(object.formFields);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a WorkflowDef message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.WorkflowDef
         * @static
         * @param {pbWorkflow.WorkflowDef} message WorkflowDef
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorkflowDef.toObject = function toObject(message, options) {
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
                object.category = "";
                object.version = "";
                object.description = "";
                object.flowGraph = "";
                object.formFields = "";
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
            if (message.category != null && message.hasOwnProperty("category"))
                object.category = message.category;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.description != null && message.hasOwnProperty("description"))
                object.description = message.description;
            if (message.flowGraph != null && message.hasOwnProperty("flowGraph"))
                object.flowGraph = message.flowGraph;
            if (message.formFields != null && message.hasOwnProperty("formFields"))
                object.formFields = message.formFields;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this WorkflowDef to JSON.
         * @function toJSON
         * @memberof pbWorkflow.WorkflowDef
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorkflowDef.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WorkflowDef
         * @function getTypeUrl
         * @memberof pbWorkflow.WorkflowDef
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WorkflowDef.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.WorkflowDef";
        };

        return WorkflowDef;
    })();

    /**
     * NodeType enum.
     * @name pbWorkflow.NodeType
     * @enum {number}
     * @property {number} START=0 START value
     * @property {number} APPROVAL=1 APPROVAL value
     * @property {number} CONDITION=2 CONDITION value
     * @property {number} NOTIFY=3 NOTIFY value
     * @property {number} END=4 END value
     * @property {number} PARALLEL=5 PARALLEL value
     * @property {number} MERGE=6 MERGE value
     */
    pbWorkflow.NodeType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "START"] = 0;
        values[valuesById[1] = "APPROVAL"] = 1;
        values[valuesById[2] = "CONDITION"] = 2;
        values[valuesById[3] = "NOTIFY"] = 3;
        values[valuesById[4] = "END"] = 4;
        values[valuesById[5] = "PARALLEL"] = 5;
        values[valuesById[6] = "MERGE"] = 6;
        return values;
    })();

    pbWorkflow.WorkflowInstance = (function() {

        /**
         * Properties of a WorkflowInstance.
         * @memberof pbWorkflow
         * @interface IWorkflowInstance
         * @property {number|Long|null} [id] WorkflowInstance id
         * @property {string|null} [createdAt] WorkflowInstance createdAt
         * @property {string|null} [updatedAt] WorkflowInstance updatedAt
         * @property {number|Long|null} [workflowDefId] WorkflowInstance workflowDefId
         * @property {string|null} [bizType] WorkflowInstance bizType
         * @property {string|null} [bizId] WorkflowInstance bizId
         * @property {string|null} [bizNo] WorkflowInstance bizNo
         * @property {string|null} [currentNode] WorkflowInstance currentNode
         * @property {number|null} [status] WorkflowInstance status
         * @property {string|null} [context] WorkflowInstance context
         * @property {string|null} [starterId] WorkflowInstance starterId
         * @property {string|null} [starterName] WorkflowInstance starterName
         * @property {number|Long|null} [finishedAt] WorkflowInstance finishedAt
         * @property {string|null} [remark] WorkflowInstance remark
         */

        /**
         * Constructs a new WorkflowInstance.
         * @memberof pbWorkflow
         * @classdesc Represents a WorkflowInstance.
         * @implements IWorkflowInstance
         * @constructor
         * @param {pbWorkflow.IWorkflowInstance=} [properties] Properties to set
         */
        function WorkflowInstance(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorkflowInstance id.
         * @member {number|Long} id
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WorkflowInstance createdAt.
         * @member {string} createdAt
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.createdAt = "";

        /**
         * WorkflowInstance updatedAt.
         * @member {string} updatedAt
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.updatedAt = "";

        /**
         * WorkflowInstance workflowDefId.
         * @member {number|Long} workflowDefId
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.workflowDefId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WorkflowInstance bizType.
         * @member {string} bizType
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.bizType = "";

        /**
         * WorkflowInstance bizId.
         * @member {string} bizId
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.bizId = "";

        /**
         * WorkflowInstance bizNo.
         * @member {string} bizNo
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.bizNo = "";

        /**
         * WorkflowInstance currentNode.
         * @member {string} currentNode
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.currentNode = "";

        /**
         * WorkflowInstance status.
         * @member {number} status
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.status = 0;

        /**
         * WorkflowInstance context.
         * @member {string} context
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.context = "";

        /**
         * WorkflowInstance starterId.
         * @member {string} starterId
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.starterId = "";

        /**
         * WorkflowInstance starterName.
         * @member {string} starterName
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.starterName = "";

        /**
         * WorkflowInstance finishedAt.
         * @member {number|Long} finishedAt
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.finishedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WorkflowInstance remark.
         * @member {string} remark
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         */
        WorkflowInstance.prototype.remark = "";

        /**
         * Creates a new WorkflowInstance instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.WorkflowInstance
         * @static
         * @param {pbWorkflow.IWorkflowInstance=} [properties] Properties to set
         * @returns {pbWorkflow.WorkflowInstance} WorkflowInstance instance
         */
        WorkflowInstance.create = function create(properties) {
            return new WorkflowInstance(properties);
        };

        /**
         * Encodes the specified WorkflowInstance message. Does not implicitly {@link pbWorkflow.WorkflowInstance.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.WorkflowInstance
         * @static
         * @param {pbWorkflow.IWorkflowInstance} message WorkflowInstance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkflowInstance.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.workflowDefId != null && Object.hasOwnProperty.call(message, "workflowDefId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.workflowDefId);
            if (message.bizType != null && Object.hasOwnProperty.call(message, "bizType"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.bizType);
            if (message.bizId != null && Object.hasOwnProperty.call(message, "bizId"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.bizId);
            if (message.bizNo != null && Object.hasOwnProperty.call(message, "bizNo"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.bizNo);
            if (message.currentNode != null && Object.hasOwnProperty.call(message, "currentNode"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.currentNode);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.status);
            if (message.context != null && Object.hasOwnProperty.call(message, "context"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.context);
            if (message.starterId != null && Object.hasOwnProperty.call(message, "starterId"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.starterId);
            if (message.starterName != null && Object.hasOwnProperty.call(message, "starterName"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.starterName);
            if (message.finishedAt != null && Object.hasOwnProperty.call(message, "finishedAt"))
                writer.uint32(/* id 19, wireType 0 =*/152).int64(message.finishedAt);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified WorkflowInstance message, length delimited. Does not implicitly {@link pbWorkflow.WorkflowInstance.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.WorkflowInstance
         * @static
         * @param {pbWorkflow.IWorkflowInstance} message WorkflowInstance message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkflowInstance.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorkflowInstance message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.WorkflowInstance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.WorkflowInstance} WorkflowInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkflowInstance.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.WorkflowInstance();
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
                        message.workflowDefId = reader.int64();
                        break;
                    }
                case 11: {
                        message.bizType = reader.string();
                        break;
                    }
                case 12: {
                        message.bizId = reader.string();
                        break;
                    }
                case 13: {
                        message.bizNo = reader.string();
                        break;
                    }
                case 14: {
                        message.currentNode = reader.string();
                        break;
                    }
                case 15: {
                        message.status = reader.int32();
                        break;
                    }
                case 16: {
                        message.context = reader.string();
                        break;
                    }
                case 17: {
                        message.starterId = reader.string();
                        break;
                    }
                case 18: {
                        message.starterName = reader.string();
                        break;
                    }
                case 19: {
                        message.finishedAt = reader.int64();
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
         * Decodes a WorkflowInstance message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.WorkflowInstance
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.WorkflowInstance} WorkflowInstance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkflowInstance.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorkflowInstance message.
         * @function verify
         * @memberof pbWorkflow.WorkflowInstance
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorkflowInstance.verify = function verify(message) {
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
            if (message.workflowDefId != null && message.hasOwnProperty("workflowDefId"))
                if (!$util.isInteger(message.workflowDefId) && !(message.workflowDefId && $util.isInteger(message.workflowDefId.low) && $util.isInteger(message.workflowDefId.high)))
                    return "workflowDefId: integer|Long expected";
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                if (!$util.isString(message.bizType))
                    return "bizType: string expected";
            if (message.bizId != null && message.hasOwnProperty("bizId"))
                if (!$util.isString(message.bizId))
                    return "bizId: string expected";
            if (message.bizNo != null && message.hasOwnProperty("bizNo"))
                if (!$util.isString(message.bizNo))
                    return "bizNo: string expected";
            if (message.currentNode != null && message.hasOwnProperty("currentNode"))
                if (!$util.isString(message.currentNode))
                    return "currentNode: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.context != null && message.hasOwnProperty("context"))
                if (!$util.isString(message.context))
                    return "context: string expected";
            if (message.starterId != null && message.hasOwnProperty("starterId"))
                if (!$util.isString(message.starterId))
                    return "starterId: string expected";
            if (message.starterName != null && message.hasOwnProperty("starterName"))
                if (!$util.isString(message.starterName))
                    return "starterName: string expected";
            if (message.finishedAt != null && message.hasOwnProperty("finishedAt"))
                if (!$util.isInteger(message.finishedAt) && !(message.finishedAt && $util.isInteger(message.finishedAt.low) && $util.isInteger(message.finishedAt.high)))
                    return "finishedAt: integer|Long expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a WorkflowInstance message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.WorkflowInstance
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.WorkflowInstance} WorkflowInstance
         */
        WorkflowInstance.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.WorkflowInstance)
                return object;
            var message = new $root.pbWorkflow.WorkflowInstance();
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
            if (object.workflowDefId != null)
                if ($util.Long)
                    (message.workflowDefId = $util.Long.fromValue(object.workflowDefId)).unsigned = false;
                else if (typeof object.workflowDefId === "string")
                    message.workflowDefId = parseInt(object.workflowDefId, 10);
                else if (typeof object.workflowDefId === "number")
                    message.workflowDefId = object.workflowDefId;
                else if (typeof object.workflowDefId === "object")
                    message.workflowDefId = new $util.LongBits(object.workflowDefId.low >>> 0, object.workflowDefId.high >>> 0).toNumber();
            if (object.bizType != null)
                message.bizType = String(object.bizType);
            if (object.bizId != null)
                message.bizId = String(object.bizId);
            if (object.bizNo != null)
                message.bizNo = String(object.bizNo);
            if (object.currentNode != null)
                message.currentNode = String(object.currentNode);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.context != null)
                message.context = String(object.context);
            if (object.starterId != null)
                message.starterId = String(object.starterId);
            if (object.starterName != null)
                message.starterName = String(object.starterName);
            if (object.finishedAt != null)
                if ($util.Long)
                    (message.finishedAt = $util.Long.fromValue(object.finishedAt)).unsigned = false;
                else if (typeof object.finishedAt === "string")
                    message.finishedAt = parseInt(object.finishedAt, 10);
                else if (typeof object.finishedAt === "number")
                    message.finishedAt = object.finishedAt;
                else if (typeof object.finishedAt === "object")
                    message.finishedAt = new $util.LongBits(object.finishedAt.low >>> 0, object.finishedAt.high >>> 0).toNumber();
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a WorkflowInstance message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.WorkflowInstance
         * @static
         * @param {pbWorkflow.WorkflowInstance} message WorkflowInstance
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorkflowInstance.toObject = function toObject(message, options) {
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
                    object.workflowDefId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.workflowDefId = options.longs === String ? "0" : 0;
                object.bizType = "";
                object.bizId = "";
                object.bizNo = "";
                object.currentNode = "";
                object.status = 0;
                object.context = "";
                object.starterId = "";
                object.starterName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.finishedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.finishedAt = options.longs === String ? "0" : 0;
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
            if (message.workflowDefId != null && message.hasOwnProperty("workflowDefId"))
                if (typeof message.workflowDefId === "number")
                    object.workflowDefId = options.longs === String ? String(message.workflowDefId) : message.workflowDefId;
                else
                    object.workflowDefId = options.longs === String ? $util.Long.prototype.toString.call(message.workflowDefId) : options.longs === Number ? new $util.LongBits(message.workflowDefId.low >>> 0, message.workflowDefId.high >>> 0).toNumber() : message.workflowDefId;
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                object.bizType = message.bizType;
            if (message.bizId != null && message.hasOwnProperty("bizId"))
                object.bizId = message.bizId;
            if (message.bizNo != null && message.hasOwnProperty("bizNo"))
                object.bizNo = message.bizNo;
            if (message.currentNode != null && message.hasOwnProperty("currentNode"))
                object.currentNode = message.currentNode;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.context != null && message.hasOwnProperty("context"))
                object.context = message.context;
            if (message.starterId != null && message.hasOwnProperty("starterId"))
                object.starterId = message.starterId;
            if (message.starterName != null && message.hasOwnProperty("starterName"))
                object.starterName = message.starterName;
            if (message.finishedAt != null && message.hasOwnProperty("finishedAt"))
                if (typeof message.finishedAt === "number")
                    object.finishedAt = options.longs === String ? String(message.finishedAt) : message.finishedAt;
                else
                    object.finishedAt = options.longs === String ? $util.Long.prototype.toString.call(message.finishedAt) : options.longs === Number ? new $util.LongBits(message.finishedAt.low >>> 0, message.finishedAt.high >>> 0).toNumber() : message.finishedAt;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this WorkflowInstance to JSON.
         * @function toJSON
         * @memberof pbWorkflow.WorkflowInstance
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorkflowInstance.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WorkflowInstance
         * @function getTypeUrl
         * @memberof pbWorkflow.WorkflowInstance
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WorkflowInstance.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.WorkflowInstance";
        };

        return WorkflowInstance;
    })();

    pbWorkflow.WorkflowTask = (function() {

        /**
         * Properties of a WorkflowTask.
         * @memberof pbWorkflow
         * @interface IWorkflowTask
         * @property {number|Long|null} [id] WorkflowTask id
         * @property {string|null} [createdAt] WorkflowTask createdAt
         * @property {string|null} [updatedAt] WorkflowTask updatedAt
         * @property {number|Long|null} [instanceId] WorkflowTask instanceId
         * @property {string|null} [nodeId] WorkflowTask nodeId
         * @property {string|null} [nodeName] WorkflowTask nodeName
         * @property {pbWorkflow.NodeType|null} [nodeType] WorkflowTask nodeType
         * @property {string|null} [assigneeId] WorkflowTask assigneeId
         * @property {string|null} [assigneeName] WorkflowTask assigneeName
         * @property {string|null} [assigneeType] WorkflowTask assigneeType
         * @property {number|null} [status] WorkflowTask status
         * @property {string|null} [contextSnapshot] WorkflowTask contextSnapshot
         * @property {number|Long|null} [dueAt] WorkflowTask dueAt
         * @property {number|Long|null} [finishedAt] WorkflowTask finishedAt
         * @property {string|null} [remark] WorkflowTask remark
         */

        /**
         * Constructs a new WorkflowTask.
         * @memberof pbWorkflow
         * @classdesc Represents a WorkflowTask.
         * @implements IWorkflowTask
         * @constructor
         * @param {pbWorkflow.IWorkflowTask=} [properties] Properties to set
         */
        function WorkflowTask(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorkflowTask id.
         * @member {number|Long} id
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WorkflowTask createdAt.
         * @member {string} createdAt
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.createdAt = "";

        /**
         * WorkflowTask updatedAt.
         * @member {string} updatedAt
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.updatedAt = "";

        /**
         * WorkflowTask instanceId.
         * @member {number|Long} instanceId
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.instanceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WorkflowTask nodeId.
         * @member {string} nodeId
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.nodeId = "";

        /**
         * WorkflowTask nodeName.
         * @member {string} nodeName
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.nodeName = "";

        /**
         * WorkflowTask nodeType.
         * @member {pbWorkflow.NodeType} nodeType
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.nodeType = 0;

        /**
         * WorkflowTask assigneeId.
         * @member {string} assigneeId
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.assigneeId = "";

        /**
         * WorkflowTask assigneeName.
         * @member {string} assigneeName
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.assigneeName = "";

        /**
         * WorkflowTask assigneeType.
         * @member {string} assigneeType
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.assigneeType = "";

        /**
         * WorkflowTask status.
         * @member {number} status
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.status = 0;

        /**
         * WorkflowTask contextSnapshot.
         * @member {string} contextSnapshot
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.contextSnapshot = "";

        /**
         * WorkflowTask dueAt.
         * @member {number|Long} dueAt
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.dueAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WorkflowTask finishedAt.
         * @member {number|Long} finishedAt
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.finishedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WorkflowTask remark.
         * @member {string} remark
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         */
        WorkflowTask.prototype.remark = "";

        /**
         * Creates a new WorkflowTask instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.WorkflowTask
         * @static
         * @param {pbWorkflow.IWorkflowTask=} [properties] Properties to set
         * @returns {pbWorkflow.WorkflowTask} WorkflowTask instance
         */
        WorkflowTask.create = function create(properties) {
            return new WorkflowTask(properties);
        };

        /**
         * Encodes the specified WorkflowTask message. Does not implicitly {@link pbWorkflow.WorkflowTask.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.WorkflowTask
         * @static
         * @param {pbWorkflow.IWorkflowTask} message WorkflowTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkflowTask.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.updatedAt != null && Object.hasOwnProperty.call(message, "updatedAt"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.updatedAt);
            if (message.instanceId != null && Object.hasOwnProperty.call(message, "instanceId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.instanceId);
            if (message.nodeId != null && Object.hasOwnProperty.call(message, "nodeId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.nodeId);
            if (message.nodeName != null && Object.hasOwnProperty.call(message, "nodeName"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.nodeName);
            if (message.nodeType != null && Object.hasOwnProperty.call(message, "nodeType"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.nodeType);
            if (message.assigneeId != null && Object.hasOwnProperty.call(message, "assigneeId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.assigneeId);
            if (message.assigneeName != null && Object.hasOwnProperty.call(message, "assigneeName"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.assigneeName);
            if (message.assigneeType != null && Object.hasOwnProperty.call(message, "assigneeType"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.assigneeType);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.status);
            if (message.contextSnapshot != null && Object.hasOwnProperty.call(message, "contextSnapshot"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.contextSnapshot);
            if (message.dueAt != null && Object.hasOwnProperty.call(message, "dueAt"))
                writer.uint32(/* id 19, wireType 0 =*/152).int64(message.dueAt);
            if (message.finishedAt != null && Object.hasOwnProperty.call(message, "finishedAt"))
                writer.uint32(/* id 20, wireType 0 =*/160).int64(message.finishedAt);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified WorkflowTask message, length delimited. Does not implicitly {@link pbWorkflow.WorkflowTask.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.WorkflowTask
         * @static
         * @param {pbWorkflow.IWorkflowTask} message WorkflowTask message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkflowTask.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorkflowTask message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.WorkflowTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.WorkflowTask} WorkflowTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkflowTask.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.WorkflowTask();
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
                        message.instanceId = reader.int64();
                        break;
                    }
                case 11: {
                        message.nodeId = reader.string();
                        break;
                    }
                case 12: {
                        message.nodeName = reader.string();
                        break;
                    }
                case 13: {
                        message.nodeType = reader.int32();
                        break;
                    }
                case 14: {
                        message.assigneeId = reader.string();
                        break;
                    }
                case 15: {
                        message.assigneeName = reader.string();
                        break;
                    }
                case 16: {
                        message.assigneeType = reader.string();
                        break;
                    }
                case 17: {
                        message.status = reader.int32();
                        break;
                    }
                case 18: {
                        message.contextSnapshot = reader.string();
                        break;
                    }
                case 19: {
                        message.dueAt = reader.int64();
                        break;
                    }
                case 20: {
                        message.finishedAt = reader.int64();
                        break;
                    }
                case 21: {
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
         * Decodes a WorkflowTask message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.WorkflowTask
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.WorkflowTask} WorkflowTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkflowTask.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorkflowTask message.
         * @function verify
         * @memberof pbWorkflow.WorkflowTask
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorkflowTask.verify = function verify(message) {
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
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (!$util.isInteger(message.instanceId) && !(message.instanceId && $util.isInteger(message.instanceId.low) && $util.isInteger(message.instanceId.high)))
                    return "instanceId: integer|Long expected";
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                if (!$util.isString(message.nodeId))
                    return "nodeId: string expected";
            if (message.nodeName != null && message.hasOwnProperty("nodeName"))
                if (!$util.isString(message.nodeName))
                    return "nodeName: string expected";
            if (message.nodeType != null && message.hasOwnProperty("nodeType"))
                switch (message.nodeType) {
                default:
                    return "nodeType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            if (message.assigneeId != null && message.hasOwnProperty("assigneeId"))
                if (!$util.isString(message.assigneeId))
                    return "assigneeId: string expected";
            if (message.assigneeName != null && message.hasOwnProperty("assigneeName"))
                if (!$util.isString(message.assigneeName))
                    return "assigneeName: string expected";
            if (message.assigneeType != null && message.hasOwnProperty("assigneeType"))
                if (!$util.isString(message.assigneeType))
                    return "assigneeType: string expected";
            if (message.status != null && message.hasOwnProperty("status"))
                if (!$util.isInteger(message.status))
                    return "status: integer expected";
            if (message.contextSnapshot != null && message.hasOwnProperty("contextSnapshot"))
                if (!$util.isString(message.contextSnapshot))
                    return "contextSnapshot: string expected";
            if (message.dueAt != null && message.hasOwnProperty("dueAt"))
                if (!$util.isInteger(message.dueAt) && !(message.dueAt && $util.isInteger(message.dueAt.low) && $util.isInteger(message.dueAt.high)))
                    return "dueAt: integer|Long expected";
            if (message.finishedAt != null && message.hasOwnProperty("finishedAt"))
                if (!$util.isInteger(message.finishedAt) && !(message.finishedAt && $util.isInteger(message.finishedAt.low) && $util.isInteger(message.finishedAt.high)))
                    return "finishedAt: integer|Long expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a WorkflowTask message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.WorkflowTask
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.WorkflowTask} WorkflowTask
         */
        WorkflowTask.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.WorkflowTask)
                return object;
            var message = new $root.pbWorkflow.WorkflowTask();
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
            if (object.instanceId != null)
                if ($util.Long)
                    (message.instanceId = $util.Long.fromValue(object.instanceId)).unsigned = false;
                else if (typeof object.instanceId === "string")
                    message.instanceId = parseInt(object.instanceId, 10);
                else if (typeof object.instanceId === "number")
                    message.instanceId = object.instanceId;
                else if (typeof object.instanceId === "object")
                    message.instanceId = new $util.LongBits(object.instanceId.low >>> 0, object.instanceId.high >>> 0).toNumber();
            if (object.nodeId != null)
                message.nodeId = String(object.nodeId);
            if (object.nodeName != null)
                message.nodeName = String(object.nodeName);
            switch (object.nodeType) {
            default:
                if (typeof object.nodeType === "number") {
                    message.nodeType = object.nodeType;
                    break;
                }
                break;
            case "START":
            case 0:
                message.nodeType = 0;
                break;
            case "APPROVAL":
            case 1:
                message.nodeType = 1;
                break;
            case "CONDITION":
            case 2:
                message.nodeType = 2;
                break;
            case "NOTIFY":
            case 3:
                message.nodeType = 3;
                break;
            case "END":
            case 4:
                message.nodeType = 4;
                break;
            case "PARALLEL":
            case 5:
                message.nodeType = 5;
                break;
            case "MERGE":
            case 6:
                message.nodeType = 6;
                break;
            }
            if (object.assigneeId != null)
                message.assigneeId = String(object.assigneeId);
            if (object.assigneeName != null)
                message.assigneeName = String(object.assigneeName);
            if (object.assigneeType != null)
                message.assigneeType = String(object.assigneeType);
            if (object.status != null)
                message.status = object.status | 0;
            if (object.contextSnapshot != null)
                message.contextSnapshot = String(object.contextSnapshot);
            if (object.dueAt != null)
                if ($util.Long)
                    (message.dueAt = $util.Long.fromValue(object.dueAt)).unsigned = false;
                else if (typeof object.dueAt === "string")
                    message.dueAt = parseInt(object.dueAt, 10);
                else if (typeof object.dueAt === "number")
                    message.dueAt = object.dueAt;
                else if (typeof object.dueAt === "object")
                    message.dueAt = new $util.LongBits(object.dueAt.low >>> 0, object.dueAt.high >>> 0).toNumber();
            if (object.finishedAt != null)
                if ($util.Long)
                    (message.finishedAt = $util.Long.fromValue(object.finishedAt)).unsigned = false;
                else if (typeof object.finishedAt === "string")
                    message.finishedAt = parseInt(object.finishedAt, 10);
                else if (typeof object.finishedAt === "number")
                    message.finishedAt = object.finishedAt;
                else if (typeof object.finishedAt === "object")
                    message.finishedAt = new $util.LongBits(object.finishedAt.low >>> 0, object.finishedAt.high >>> 0).toNumber();
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a WorkflowTask message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.WorkflowTask
         * @static
         * @param {pbWorkflow.WorkflowTask} message WorkflowTask
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorkflowTask.toObject = function toObject(message, options) {
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
                    object.instanceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instanceId = options.longs === String ? "0" : 0;
                object.nodeId = "";
                object.nodeName = "";
                object.nodeType = options.enums === String ? "START" : 0;
                object.assigneeId = "";
                object.assigneeName = "";
                object.assigneeType = "";
                object.status = 0;
                object.contextSnapshot = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.dueAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.dueAt = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.finishedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.finishedAt = options.longs === String ? "0" : 0;
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
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (typeof message.instanceId === "number")
                    object.instanceId = options.longs === String ? String(message.instanceId) : message.instanceId;
                else
                    object.instanceId = options.longs === String ? $util.Long.prototype.toString.call(message.instanceId) : options.longs === Number ? new $util.LongBits(message.instanceId.low >>> 0, message.instanceId.high >>> 0).toNumber() : message.instanceId;
            if (message.nodeId != null && message.hasOwnProperty("nodeId"))
                object.nodeId = message.nodeId;
            if (message.nodeName != null && message.hasOwnProperty("nodeName"))
                object.nodeName = message.nodeName;
            if (message.nodeType != null && message.hasOwnProperty("nodeType"))
                object.nodeType = options.enums === String ? $root.pbWorkflow.NodeType[message.nodeType] === undefined ? message.nodeType : $root.pbWorkflow.NodeType[message.nodeType] : message.nodeType;
            if (message.assigneeId != null && message.hasOwnProperty("assigneeId"))
                object.assigneeId = message.assigneeId;
            if (message.assigneeName != null && message.hasOwnProperty("assigneeName"))
                object.assigneeName = message.assigneeName;
            if (message.assigneeType != null && message.hasOwnProperty("assigneeType"))
                object.assigneeType = message.assigneeType;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = message.status;
            if (message.contextSnapshot != null && message.hasOwnProperty("contextSnapshot"))
                object.contextSnapshot = message.contextSnapshot;
            if (message.dueAt != null && message.hasOwnProperty("dueAt"))
                if (typeof message.dueAt === "number")
                    object.dueAt = options.longs === String ? String(message.dueAt) : message.dueAt;
                else
                    object.dueAt = options.longs === String ? $util.Long.prototype.toString.call(message.dueAt) : options.longs === Number ? new $util.LongBits(message.dueAt.low >>> 0, message.dueAt.high >>> 0).toNumber() : message.dueAt;
            if (message.finishedAt != null && message.hasOwnProperty("finishedAt"))
                if (typeof message.finishedAt === "number")
                    object.finishedAt = options.longs === String ? String(message.finishedAt) : message.finishedAt;
                else
                    object.finishedAt = options.longs === String ? $util.Long.prototype.toString.call(message.finishedAt) : options.longs === Number ? new $util.LongBits(message.finishedAt.low >>> 0, message.finishedAt.high >>> 0).toNumber() : message.finishedAt;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this WorkflowTask to JSON.
         * @function toJSON
         * @memberof pbWorkflow.WorkflowTask
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorkflowTask.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WorkflowTask
         * @function getTypeUrl
         * @memberof pbWorkflow.WorkflowTask
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WorkflowTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.WorkflowTask";
        };

        return WorkflowTask;
    })();

    /**
     * TaskStatus enum.
     * @name pbWorkflow.TaskStatus
     * @enum {number}
     * @property {number} PENDING=0 PENDING value
     * @property {number} APPROVED=1 APPROVED value
     * @property {number} REJECTED=2 REJECTED value
     * @property {number} DELEGATED=3 DELEGATED value
     * @property {number} CANCELLED=4 CANCELLED value
     */
    pbWorkflow.TaskStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PENDING"] = 0;
        values[valuesById[1] = "APPROVED"] = 1;
        values[valuesById[2] = "REJECTED"] = 2;
        values[valuesById[3] = "DELEGATED"] = 3;
        values[valuesById[4] = "CANCELLED"] = 4;
        return values;
    })();

    pbWorkflow.WorkflowTransition = (function() {

        /**
         * Properties of a WorkflowTransition.
         * @memberof pbWorkflow
         * @interface IWorkflowTransition
         * @property {number|Long|null} [id] WorkflowTransition id
         * @property {string|null} [createdAt] WorkflowTransition createdAt
         * @property {number|Long|null} [instanceId] WorkflowTransition instanceId
         * @property {string|null} [fromNode] WorkflowTransition fromNode
         * @property {string|null} [toNode] WorkflowTransition toNode
         * @property {string|null} [action] WorkflowTransition action
         * @property {string|null} [actorId] WorkflowTransition actorId
         * @property {string|null} [actorName] WorkflowTransition actorName
         * @property {string|null} [comment] WorkflowTransition comment
         * @property {string|null} [contextSnapshot] WorkflowTransition contextSnapshot
         */

        /**
         * Constructs a new WorkflowTransition.
         * @memberof pbWorkflow
         * @classdesc Represents a WorkflowTransition.
         * @implements IWorkflowTransition
         * @constructor
         * @param {pbWorkflow.IWorkflowTransition=} [properties] Properties to set
         */
        function WorkflowTransition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WorkflowTransition id.
         * @member {number|Long} id
         * @memberof pbWorkflow.WorkflowTransition
         * @instance
         */
        WorkflowTransition.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WorkflowTransition createdAt.
         * @member {string} createdAt
         * @memberof pbWorkflow.WorkflowTransition
         * @instance
         */
        WorkflowTransition.prototype.createdAt = "";

        /**
         * WorkflowTransition instanceId.
         * @member {number|Long} instanceId
         * @memberof pbWorkflow.WorkflowTransition
         * @instance
         */
        WorkflowTransition.prototype.instanceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WorkflowTransition fromNode.
         * @member {string} fromNode
         * @memberof pbWorkflow.WorkflowTransition
         * @instance
         */
        WorkflowTransition.prototype.fromNode = "";

        /**
         * WorkflowTransition toNode.
         * @member {string} toNode
         * @memberof pbWorkflow.WorkflowTransition
         * @instance
         */
        WorkflowTransition.prototype.toNode = "";

        /**
         * WorkflowTransition action.
         * @member {string} action
         * @memberof pbWorkflow.WorkflowTransition
         * @instance
         */
        WorkflowTransition.prototype.action = "";

        /**
         * WorkflowTransition actorId.
         * @member {string} actorId
         * @memberof pbWorkflow.WorkflowTransition
         * @instance
         */
        WorkflowTransition.prototype.actorId = "";

        /**
         * WorkflowTransition actorName.
         * @member {string} actorName
         * @memberof pbWorkflow.WorkflowTransition
         * @instance
         */
        WorkflowTransition.prototype.actorName = "";

        /**
         * WorkflowTransition comment.
         * @member {string} comment
         * @memberof pbWorkflow.WorkflowTransition
         * @instance
         */
        WorkflowTransition.prototype.comment = "";

        /**
         * WorkflowTransition contextSnapshot.
         * @member {string} contextSnapshot
         * @memberof pbWorkflow.WorkflowTransition
         * @instance
         */
        WorkflowTransition.prototype.contextSnapshot = "";

        /**
         * Creates a new WorkflowTransition instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.WorkflowTransition
         * @static
         * @param {pbWorkflow.IWorkflowTransition=} [properties] Properties to set
         * @returns {pbWorkflow.WorkflowTransition} WorkflowTransition instance
         */
        WorkflowTransition.create = function create(properties) {
            return new WorkflowTransition(properties);
        };

        /**
         * Encodes the specified WorkflowTransition message. Does not implicitly {@link pbWorkflow.WorkflowTransition.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.WorkflowTransition
         * @static
         * @param {pbWorkflow.IWorkflowTransition} message WorkflowTransition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkflowTransition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.createdAt != null && Object.hasOwnProperty.call(message, "createdAt"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.createdAt);
            if (message.instanceId != null && Object.hasOwnProperty.call(message, "instanceId"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.instanceId);
            if (message.fromNode != null && Object.hasOwnProperty.call(message, "fromNode"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.fromNode);
            if (message.toNode != null && Object.hasOwnProperty.call(message, "toNode"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.toNode);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.action);
            if (message.actorId != null && Object.hasOwnProperty.call(message, "actorId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.actorId);
            if (message.actorName != null && Object.hasOwnProperty.call(message, "actorName"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.actorName);
            if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.comment);
            if (message.contextSnapshot != null && Object.hasOwnProperty.call(message, "contextSnapshot"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.contextSnapshot);
            return writer;
        };

        /**
         * Encodes the specified WorkflowTransition message, length delimited. Does not implicitly {@link pbWorkflow.WorkflowTransition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.WorkflowTransition
         * @static
         * @param {pbWorkflow.IWorkflowTransition} message WorkflowTransition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WorkflowTransition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WorkflowTransition message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.WorkflowTransition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.WorkflowTransition} WorkflowTransition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkflowTransition.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.WorkflowTransition();
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
                        message.instanceId = reader.int64();
                        break;
                    }
                case 11: {
                        message.fromNode = reader.string();
                        break;
                    }
                case 12: {
                        message.toNode = reader.string();
                        break;
                    }
                case 13: {
                        message.action = reader.string();
                        break;
                    }
                case 14: {
                        message.actorId = reader.string();
                        break;
                    }
                case 15: {
                        message.actorName = reader.string();
                        break;
                    }
                case 16: {
                        message.comment = reader.string();
                        break;
                    }
                case 17: {
                        message.contextSnapshot = reader.string();
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
         * Decodes a WorkflowTransition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.WorkflowTransition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.WorkflowTransition} WorkflowTransition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WorkflowTransition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WorkflowTransition message.
         * @function verify
         * @memberof pbWorkflow.WorkflowTransition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WorkflowTransition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                if (!$util.isString(message.createdAt))
                    return "createdAt: string expected";
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (!$util.isInteger(message.instanceId) && !(message.instanceId && $util.isInteger(message.instanceId.low) && $util.isInteger(message.instanceId.high)))
                    return "instanceId: integer|Long expected";
            if (message.fromNode != null && message.hasOwnProperty("fromNode"))
                if (!$util.isString(message.fromNode))
                    return "fromNode: string expected";
            if (message.toNode != null && message.hasOwnProperty("toNode"))
                if (!$util.isString(message.toNode))
                    return "toNode: string expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.actorId != null && message.hasOwnProperty("actorId"))
                if (!$util.isString(message.actorId))
                    return "actorId: string expected";
            if (message.actorName != null && message.hasOwnProperty("actorName"))
                if (!$util.isString(message.actorName))
                    return "actorName: string expected";
            if (message.comment != null && message.hasOwnProperty("comment"))
                if (!$util.isString(message.comment))
                    return "comment: string expected";
            if (message.contextSnapshot != null && message.hasOwnProperty("contextSnapshot"))
                if (!$util.isString(message.contextSnapshot))
                    return "contextSnapshot: string expected";
            return null;
        };

        /**
         * Creates a WorkflowTransition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.WorkflowTransition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.WorkflowTransition} WorkflowTransition
         */
        WorkflowTransition.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.WorkflowTransition)
                return object;
            var message = new $root.pbWorkflow.WorkflowTransition();
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
            if (object.instanceId != null)
                if ($util.Long)
                    (message.instanceId = $util.Long.fromValue(object.instanceId)).unsigned = false;
                else if (typeof object.instanceId === "string")
                    message.instanceId = parseInt(object.instanceId, 10);
                else if (typeof object.instanceId === "number")
                    message.instanceId = object.instanceId;
                else if (typeof object.instanceId === "object")
                    message.instanceId = new $util.LongBits(object.instanceId.low >>> 0, object.instanceId.high >>> 0).toNumber();
            if (object.fromNode != null)
                message.fromNode = String(object.fromNode);
            if (object.toNode != null)
                message.toNode = String(object.toNode);
            if (object.action != null)
                message.action = String(object.action);
            if (object.actorId != null)
                message.actorId = String(object.actorId);
            if (object.actorName != null)
                message.actorName = String(object.actorName);
            if (object.comment != null)
                message.comment = String(object.comment);
            if (object.contextSnapshot != null)
                message.contextSnapshot = String(object.contextSnapshot);
            return message;
        };

        /**
         * Creates a plain object from a WorkflowTransition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.WorkflowTransition
         * @static
         * @param {pbWorkflow.WorkflowTransition} message WorkflowTransition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WorkflowTransition.toObject = function toObject(message, options) {
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
                    object.instanceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instanceId = options.longs === String ? "0" : 0;
                object.fromNode = "";
                object.toNode = "";
                object.action = "";
                object.actorId = "";
                object.actorName = "";
                object.comment = "";
                object.contextSnapshot = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.createdAt != null && message.hasOwnProperty("createdAt"))
                object.createdAt = message.createdAt;
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (typeof message.instanceId === "number")
                    object.instanceId = options.longs === String ? String(message.instanceId) : message.instanceId;
                else
                    object.instanceId = options.longs === String ? $util.Long.prototype.toString.call(message.instanceId) : options.longs === Number ? new $util.LongBits(message.instanceId.low >>> 0, message.instanceId.high >>> 0).toNumber() : message.instanceId;
            if (message.fromNode != null && message.hasOwnProperty("fromNode"))
                object.fromNode = message.fromNode;
            if (message.toNode != null && message.hasOwnProperty("toNode"))
                object.toNode = message.toNode;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.actorId != null && message.hasOwnProperty("actorId"))
                object.actorId = message.actorId;
            if (message.actorName != null && message.hasOwnProperty("actorName"))
                object.actorName = message.actorName;
            if (message.comment != null && message.hasOwnProperty("comment"))
                object.comment = message.comment;
            if (message.contextSnapshot != null && message.hasOwnProperty("contextSnapshot"))
                object.contextSnapshot = message.contextSnapshot;
            return object;
        };

        /**
         * Converts this WorkflowTransition to JSON.
         * @function toJSON
         * @memberof pbWorkflow.WorkflowTransition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WorkflowTransition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WorkflowTransition
         * @function getTypeUrl
         * @memberof pbWorkflow.WorkflowTransition
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WorkflowTransition.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.WorkflowTransition";
        };

        return WorkflowTransition;
    })();

    pbWorkflow.FindWorkflowDefArgs = (function() {

        /**
         * Properties of a FindWorkflowDefArgs.
         * @memberof pbWorkflow
         * @interface IFindWorkflowDefArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindWorkflowDefArgs pageInfo
         * @property {pbWorkflow.IWorkflowDef|null} [query] FindWorkflowDefArgs query
         * @property {string|null} [keyword] FindWorkflowDefArgs keyword
         * @property {Array.<string>|null} [categories] FindWorkflowDefArgs categories
         */

        /**
         * Constructs a new FindWorkflowDefArgs.
         * @memberof pbWorkflow
         * @classdesc Represents a FindWorkflowDefArgs.
         * @implements IFindWorkflowDefArgs
         * @constructor
         * @param {pbWorkflow.IFindWorkflowDefArgs=} [properties] Properties to set
         */
        function FindWorkflowDefArgs(properties) {
            this.categories = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindWorkflowDefArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @instance
         */
        FindWorkflowDefArgs.prototype.pageInfo = null;

        /**
         * FindWorkflowDefArgs query.
         * @member {pbWorkflow.IWorkflowDef|null|undefined} query
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @instance
         */
        FindWorkflowDefArgs.prototype.query = null;

        /**
         * FindWorkflowDefArgs keyword.
         * @member {string} keyword
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @instance
         */
        FindWorkflowDefArgs.prototype.keyword = "";

        /**
         * FindWorkflowDefArgs categories.
         * @member {Array.<string>} categories
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @instance
         */
        FindWorkflowDefArgs.prototype.categories = $util.emptyArray;

        /**
         * Creates a new FindWorkflowDefArgs instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowDefArgs=} [properties] Properties to set
         * @returns {pbWorkflow.FindWorkflowDefArgs} FindWorkflowDefArgs instance
         */
        FindWorkflowDefArgs.create = function create(properties) {
            return new FindWorkflowDefArgs(properties);
        };

        /**
         * Encodes the specified FindWorkflowDefArgs message. Does not implicitly {@link pbWorkflow.FindWorkflowDefArgs.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowDefArgs} message FindWorkflowDefArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowDefArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.pbWorkflow.WorkflowDef.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.keyword != null && Object.hasOwnProperty.call(message, "keyword"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.keyword);
            if (message.categories != null && message.categories.length)
                for (var i = 0; i < message.categories.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.categories[i]);
            return writer;
        };

        /**
         * Encodes the specified FindWorkflowDefArgs message, length delimited. Does not implicitly {@link pbWorkflow.FindWorkflowDefArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowDefArgs} message FindWorkflowDefArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowDefArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindWorkflowDefArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.FindWorkflowDefArgs} FindWorkflowDefArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowDefArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.FindWorkflowDefArgs();
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
                        message.query = $root.pbWorkflow.WorkflowDef.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.keyword = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.categories && message.categories.length))
                            message.categories = [];
                        message.categories.push(reader.string());
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
         * Decodes a FindWorkflowDefArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.FindWorkflowDefArgs} FindWorkflowDefArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowDefArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindWorkflowDefArgs message.
         * @function verify
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindWorkflowDefArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                var error = $root.pbWorkflow.WorkflowDef.verify(message.query);
                if (error)
                    return "query." + error;
            }
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                if (!$util.isString(message.keyword))
                    return "keyword: string expected";
            if (message.categories != null && message.hasOwnProperty("categories")) {
                if (!Array.isArray(message.categories))
                    return "categories: array expected";
                for (var i = 0; i < message.categories.length; ++i)
                    if (!$util.isString(message.categories[i]))
                        return "categories: string[] expected";
            }
            return null;
        };

        /**
         * Creates a FindWorkflowDefArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.FindWorkflowDefArgs} FindWorkflowDefArgs
         */
        FindWorkflowDefArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.FindWorkflowDefArgs)
                return object;
            var message = new $root.pbWorkflow.FindWorkflowDefArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbWorkflow.FindWorkflowDefArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".pbWorkflow.FindWorkflowDefArgs.query: object expected");
                message.query = $root.pbWorkflow.WorkflowDef.fromObject(object.query);
            }
            if (object.keyword != null)
                message.keyword = String(object.keyword);
            if (object.categories) {
                if (!Array.isArray(object.categories))
                    throw TypeError(".pbWorkflow.FindWorkflowDefArgs.categories: array expected");
                message.categories = [];
                for (var i = 0; i < object.categories.length; ++i)
                    message.categories[i] = String(object.categories[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a FindWorkflowDefArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @static
         * @param {pbWorkflow.FindWorkflowDefArgs} message FindWorkflowDefArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindWorkflowDefArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.categories = [];
            if (options.defaults) {
                object.pageInfo = null;
                object.query = null;
                object.keyword = "";
            }
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options);
            if (message.query != null && message.hasOwnProperty("query"))
                object.query = $root.pbWorkflow.WorkflowDef.toObject(message.query, options);
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                object.keyword = message.keyword;
            if (message.categories && message.categories.length) {
                object.categories = [];
                for (var j = 0; j < message.categories.length; ++j)
                    object.categories[j] = message.categories[j];
            }
            return object;
        };

        /**
         * Converts this FindWorkflowDefArgs to JSON.
         * @function toJSON
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindWorkflowDefArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindWorkflowDefArgs
         * @function getTypeUrl
         * @memberof pbWorkflow.FindWorkflowDefArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindWorkflowDefArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.FindWorkflowDefArgs";
        };

        return FindWorkflowDefArgs;
    })();

    pbWorkflow.FindWorkflowDefReply = (function() {

        /**
         * Properties of a FindWorkflowDefReply.
         * @memberof pbWorkflow
         * @interface IFindWorkflowDefReply
         * @property {pbcommon.EnumCode|null} [code] FindWorkflowDefReply code
         * @property {string|null} [msg] FindWorkflowDefReply msg
         * @property {pbWorkflow.IWorkflowDef|null} [data] FindWorkflowDefReply data
         * @property {Array.<pbWorkflow.IWorkflowDef>|null} [list] FindWorkflowDefReply list
         * @property {number|Long|null} [total] FindWorkflowDefReply total
         */

        /**
         * Constructs a new FindWorkflowDefReply.
         * @memberof pbWorkflow
         * @classdesc Represents a FindWorkflowDefReply.
         * @implements IFindWorkflowDefReply
         * @constructor
         * @param {pbWorkflow.IFindWorkflowDefReply=} [properties] Properties to set
         */
        function FindWorkflowDefReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindWorkflowDefReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @instance
         */
        FindWorkflowDefReply.prototype.code = 0;

        /**
         * FindWorkflowDefReply msg.
         * @member {string} msg
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @instance
         */
        FindWorkflowDefReply.prototype.msg = "";

        /**
         * FindWorkflowDefReply data.
         * @member {pbWorkflow.IWorkflowDef|null|undefined} data
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @instance
         */
        FindWorkflowDefReply.prototype.data = null;

        /**
         * FindWorkflowDefReply list.
         * @member {Array.<pbWorkflow.IWorkflowDef>} list
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @instance
         */
        FindWorkflowDefReply.prototype.list = $util.emptyArray;

        /**
         * FindWorkflowDefReply total.
         * @member {number|Long} total
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @instance
         */
        FindWorkflowDefReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindWorkflowDefReply instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @static
         * @param {pbWorkflow.IFindWorkflowDefReply=} [properties] Properties to set
         * @returns {pbWorkflow.FindWorkflowDefReply} FindWorkflowDefReply instance
         */
        FindWorkflowDefReply.create = function create(properties) {
            return new FindWorkflowDefReply(properties);
        };

        /**
         * Encodes the specified FindWorkflowDefReply message. Does not implicitly {@link pbWorkflow.FindWorkflowDefReply.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @static
         * @param {pbWorkflow.IFindWorkflowDefReply} message FindWorkflowDefReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowDefReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbWorkflow.WorkflowDef.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbWorkflow.WorkflowDef.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindWorkflowDefReply message, length delimited. Does not implicitly {@link pbWorkflow.FindWorkflowDefReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @static
         * @param {pbWorkflow.IFindWorkflowDefReply} message FindWorkflowDefReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowDefReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindWorkflowDefReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.FindWorkflowDefReply} FindWorkflowDefReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowDefReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.FindWorkflowDefReply();
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
                        message.data = $root.pbWorkflow.WorkflowDef.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbWorkflow.WorkflowDef.decode(reader, reader.uint32()));
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
         * Decodes a FindWorkflowDefReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.FindWorkflowDefReply} FindWorkflowDefReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowDefReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindWorkflowDefReply message.
         * @function verify
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindWorkflowDefReply.verify = function verify(message) {
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
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbWorkflow.WorkflowDef.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbWorkflow.WorkflowDef.verify(message.list[i]);
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
         * Creates a FindWorkflowDefReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.FindWorkflowDefReply} FindWorkflowDefReply
         */
        FindWorkflowDefReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.FindWorkflowDefReply)
                return object;
            var message = new $root.pbWorkflow.FindWorkflowDefReply();
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
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbWorkflow.FindWorkflowDefReply.data: object expected");
                message.data = $root.pbWorkflow.WorkflowDef.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbWorkflow.FindWorkflowDefReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbWorkflow.FindWorkflowDefReply.list: object expected");
                    message.list[i] = $root.pbWorkflow.WorkflowDef.fromObject(object.list[i]);
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
         * Creates a plain object from a FindWorkflowDefReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @static
         * @param {pbWorkflow.FindWorkflowDefReply} message FindWorkflowDefReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindWorkflowDefReply.toObject = function toObject(message, options) {
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
                object.data = $root.pbWorkflow.WorkflowDef.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbWorkflow.WorkflowDef.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindWorkflowDefReply to JSON.
         * @function toJSON
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindWorkflowDefReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindWorkflowDefReply
         * @function getTypeUrl
         * @memberof pbWorkflow.FindWorkflowDefReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindWorkflowDefReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.FindWorkflowDefReply";
        };

        return FindWorkflowDefReply;
    })();

    pbWorkflow.FindWorkflowInstanceArgs = (function() {

        /**
         * Properties of a FindWorkflowInstanceArgs.
         * @memberof pbWorkflow
         * @interface IFindWorkflowInstanceArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindWorkflowInstanceArgs pageInfo
         * @property {pbWorkflow.IWorkflowInstance|null} [query] FindWorkflowInstanceArgs query
         * @property {string|null} [keyword] FindWorkflowInstanceArgs keyword
         * @property {Array.<number>|null} [statuses] FindWorkflowInstanceArgs statuses
         * @property {string|null} [startDate] FindWorkflowInstanceArgs startDate
         * @property {string|null} [endDate] FindWorkflowInstanceArgs endDate
         */

        /**
         * Constructs a new FindWorkflowInstanceArgs.
         * @memberof pbWorkflow
         * @classdesc Represents a FindWorkflowInstanceArgs.
         * @implements IFindWorkflowInstanceArgs
         * @constructor
         * @param {pbWorkflow.IFindWorkflowInstanceArgs=} [properties] Properties to set
         */
        function FindWorkflowInstanceArgs(properties) {
            this.statuses = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindWorkflowInstanceArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @instance
         */
        FindWorkflowInstanceArgs.prototype.pageInfo = null;

        /**
         * FindWorkflowInstanceArgs query.
         * @member {pbWorkflow.IWorkflowInstance|null|undefined} query
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @instance
         */
        FindWorkflowInstanceArgs.prototype.query = null;

        /**
         * FindWorkflowInstanceArgs keyword.
         * @member {string} keyword
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @instance
         */
        FindWorkflowInstanceArgs.prototype.keyword = "";

        /**
         * FindWorkflowInstanceArgs statuses.
         * @member {Array.<number>} statuses
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @instance
         */
        FindWorkflowInstanceArgs.prototype.statuses = $util.emptyArray;

        /**
         * FindWorkflowInstanceArgs startDate.
         * @member {string} startDate
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @instance
         */
        FindWorkflowInstanceArgs.prototype.startDate = "";

        /**
         * FindWorkflowInstanceArgs endDate.
         * @member {string} endDate
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @instance
         */
        FindWorkflowInstanceArgs.prototype.endDate = "";

        /**
         * Creates a new FindWorkflowInstanceArgs instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowInstanceArgs=} [properties] Properties to set
         * @returns {pbWorkflow.FindWorkflowInstanceArgs} FindWorkflowInstanceArgs instance
         */
        FindWorkflowInstanceArgs.create = function create(properties) {
            return new FindWorkflowInstanceArgs(properties);
        };

        /**
         * Encodes the specified FindWorkflowInstanceArgs message. Does not implicitly {@link pbWorkflow.FindWorkflowInstanceArgs.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowInstanceArgs} message FindWorkflowInstanceArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowInstanceArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.pbWorkflow.WorkflowInstance.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.keyword != null && Object.hasOwnProperty.call(message, "keyword"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.keyword);
            if (message.statuses != null && message.statuses.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.statuses.length; ++i)
                    writer.int32(message.statuses[i]);
                writer.ldelim();
            }
            if (message.startDate != null && Object.hasOwnProperty.call(message, "startDate"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.startDate);
            if (message.endDate != null && Object.hasOwnProperty.call(message, "endDate"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.endDate);
            return writer;
        };

        /**
         * Encodes the specified FindWorkflowInstanceArgs message, length delimited. Does not implicitly {@link pbWorkflow.FindWorkflowInstanceArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowInstanceArgs} message FindWorkflowInstanceArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowInstanceArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindWorkflowInstanceArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.FindWorkflowInstanceArgs} FindWorkflowInstanceArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowInstanceArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.FindWorkflowInstanceArgs();
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
                        message.query = $root.pbWorkflow.WorkflowInstance.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.keyword = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.statuses && message.statuses.length))
                            message.statuses = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.statuses.push(reader.int32());
                        } else
                            message.statuses.push(reader.int32());
                        break;
                    }
                case 5: {
                        message.startDate = reader.string();
                        break;
                    }
                case 6: {
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
         * Decodes a FindWorkflowInstanceArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.FindWorkflowInstanceArgs} FindWorkflowInstanceArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowInstanceArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindWorkflowInstanceArgs message.
         * @function verify
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindWorkflowInstanceArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                var error = $root.pbWorkflow.WorkflowInstance.verify(message.query);
                if (error)
                    return "query." + error;
            }
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                if (!$util.isString(message.keyword))
                    return "keyword: string expected";
            if (message.statuses != null && message.hasOwnProperty("statuses")) {
                if (!Array.isArray(message.statuses))
                    return "statuses: array expected";
                for (var i = 0; i < message.statuses.length; ++i)
                    if (!$util.isInteger(message.statuses[i]))
                        return "statuses: integer[] expected";
            }
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                if (!$util.isString(message.startDate))
                    return "startDate: string expected";
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                if (!$util.isString(message.endDate))
                    return "endDate: string expected";
            return null;
        };

        /**
         * Creates a FindWorkflowInstanceArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.FindWorkflowInstanceArgs} FindWorkflowInstanceArgs
         */
        FindWorkflowInstanceArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.FindWorkflowInstanceArgs)
                return object;
            var message = new $root.pbWorkflow.FindWorkflowInstanceArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbWorkflow.FindWorkflowInstanceArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".pbWorkflow.FindWorkflowInstanceArgs.query: object expected");
                message.query = $root.pbWorkflow.WorkflowInstance.fromObject(object.query);
            }
            if (object.keyword != null)
                message.keyword = String(object.keyword);
            if (object.statuses) {
                if (!Array.isArray(object.statuses))
                    throw TypeError(".pbWorkflow.FindWorkflowInstanceArgs.statuses: array expected");
                message.statuses = [];
                for (var i = 0; i < object.statuses.length; ++i)
                    message.statuses[i] = object.statuses[i] | 0;
            }
            if (object.startDate != null)
                message.startDate = String(object.startDate);
            if (object.endDate != null)
                message.endDate = String(object.endDate);
            return message;
        };

        /**
         * Creates a plain object from a FindWorkflowInstanceArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @static
         * @param {pbWorkflow.FindWorkflowInstanceArgs} message FindWorkflowInstanceArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindWorkflowInstanceArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.statuses = [];
            if (options.defaults) {
                object.pageInfo = null;
                object.query = null;
                object.keyword = "";
                object.startDate = "";
                object.endDate = "";
            }
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options);
            if (message.query != null && message.hasOwnProperty("query"))
                object.query = $root.pbWorkflow.WorkflowInstance.toObject(message.query, options);
            if (message.keyword != null && message.hasOwnProperty("keyword"))
                object.keyword = message.keyword;
            if (message.statuses && message.statuses.length) {
                object.statuses = [];
                for (var j = 0; j < message.statuses.length; ++j)
                    object.statuses[j] = message.statuses[j];
            }
            if (message.startDate != null && message.hasOwnProperty("startDate"))
                object.startDate = message.startDate;
            if (message.endDate != null && message.hasOwnProperty("endDate"))
                object.endDate = message.endDate;
            return object;
        };

        /**
         * Converts this FindWorkflowInstanceArgs to JSON.
         * @function toJSON
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindWorkflowInstanceArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindWorkflowInstanceArgs
         * @function getTypeUrl
         * @memberof pbWorkflow.FindWorkflowInstanceArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindWorkflowInstanceArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.FindWorkflowInstanceArgs";
        };

        return FindWorkflowInstanceArgs;
    })();

    pbWorkflow.FindWorkflowInstanceReply = (function() {

        /**
         * Properties of a FindWorkflowInstanceReply.
         * @memberof pbWorkflow
         * @interface IFindWorkflowInstanceReply
         * @property {pbcommon.EnumCode|null} [code] FindWorkflowInstanceReply code
         * @property {string|null} [msg] FindWorkflowInstanceReply msg
         * @property {pbWorkflow.IWorkflowInstance|null} [data] FindWorkflowInstanceReply data
         * @property {Array.<pbWorkflow.IWorkflowInstance>|null} [list] FindWorkflowInstanceReply list
         * @property {number|Long|null} [total] FindWorkflowInstanceReply total
         */

        /**
         * Constructs a new FindWorkflowInstanceReply.
         * @memberof pbWorkflow
         * @classdesc Represents a FindWorkflowInstanceReply.
         * @implements IFindWorkflowInstanceReply
         * @constructor
         * @param {pbWorkflow.IFindWorkflowInstanceReply=} [properties] Properties to set
         */
        function FindWorkflowInstanceReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindWorkflowInstanceReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @instance
         */
        FindWorkflowInstanceReply.prototype.code = 0;

        /**
         * FindWorkflowInstanceReply msg.
         * @member {string} msg
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @instance
         */
        FindWorkflowInstanceReply.prototype.msg = "";

        /**
         * FindWorkflowInstanceReply data.
         * @member {pbWorkflow.IWorkflowInstance|null|undefined} data
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @instance
         */
        FindWorkflowInstanceReply.prototype.data = null;

        /**
         * FindWorkflowInstanceReply list.
         * @member {Array.<pbWorkflow.IWorkflowInstance>} list
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @instance
         */
        FindWorkflowInstanceReply.prototype.list = $util.emptyArray;

        /**
         * FindWorkflowInstanceReply total.
         * @member {number|Long} total
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @instance
         */
        FindWorkflowInstanceReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindWorkflowInstanceReply instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @static
         * @param {pbWorkflow.IFindWorkflowInstanceReply=} [properties] Properties to set
         * @returns {pbWorkflow.FindWorkflowInstanceReply} FindWorkflowInstanceReply instance
         */
        FindWorkflowInstanceReply.create = function create(properties) {
            return new FindWorkflowInstanceReply(properties);
        };

        /**
         * Encodes the specified FindWorkflowInstanceReply message. Does not implicitly {@link pbWorkflow.FindWorkflowInstanceReply.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @static
         * @param {pbWorkflow.IFindWorkflowInstanceReply} message FindWorkflowInstanceReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowInstanceReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbWorkflow.WorkflowInstance.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbWorkflow.WorkflowInstance.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindWorkflowInstanceReply message, length delimited. Does not implicitly {@link pbWorkflow.FindWorkflowInstanceReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @static
         * @param {pbWorkflow.IFindWorkflowInstanceReply} message FindWorkflowInstanceReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowInstanceReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindWorkflowInstanceReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.FindWorkflowInstanceReply} FindWorkflowInstanceReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowInstanceReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.FindWorkflowInstanceReply();
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
                        message.data = $root.pbWorkflow.WorkflowInstance.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbWorkflow.WorkflowInstance.decode(reader, reader.uint32()));
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
         * Decodes a FindWorkflowInstanceReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.FindWorkflowInstanceReply} FindWorkflowInstanceReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowInstanceReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindWorkflowInstanceReply message.
         * @function verify
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindWorkflowInstanceReply.verify = function verify(message) {
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
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbWorkflow.WorkflowInstance.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbWorkflow.WorkflowInstance.verify(message.list[i]);
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
         * Creates a FindWorkflowInstanceReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.FindWorkflowInstanceReply} FindWorkflowInstanceReply
         */
        FindWorkflowInstanceReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.FindWorkflowInstanceReply)
                return object;
            var message = new $root.pbWorkflow.FindWorkflowInstanceReply();
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
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbWorkflow.FindWorkflowInstanceReply.data: object expected");
                message.data = $root.pbWorkflow.WorkflowInstance.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbWorkflow.FindWorkflowInstanceReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbWorkflow.FindWorkflowInstanceReply.list: object expected");
                    message.list[i] = $root.pbWorkflow.WorkflowInstance.fromObject(object.list[i]);
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
         * Creates a plain object from a FindWorkflowInstanceReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @static
         * @param {pbWorkflow.FindWorkflowInstanceReply} message FindWorkflowInstanceReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindWorkflowInstanceReply.toObject = function toObject(message, options) {
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
                object.data = $root.pbWorkflow.WorkflowInstance.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbWorkflow.WorkflowInstance.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindWorkflowInstanceReply to JSON.
         * @function toJSON
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindWorkflowInstanceReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindWorkflowInstanceReply
         * @function getTypeUrl
         * @memberof pbWorkflow.FindWorkflowInstanceReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindWorkflowInstanceReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.FindWorkflowInstanceReply";
        };

        return FindWorkflowInstanceReply;
    })();

    pbWorkflow.FindWorkflowTaskArgs = (function() {

        /**
         * Properties of a FindWorkflowTaskArgs.
         * @memberof pbWorkflow
         * @interface IFindWorkflowTaskArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindWorkflowTaskArgs pageInfo
         * @property {pbWorkflow.IWorkflowTask|null} [query] FindWorkflowTaskArgs query
         * @property {Array.<number>|null} [statuses] FindWorkflowTaskArgs statuses
         * @property {string|null} [assigneeId] FindWorkflowTaskArgs assigneeId
         */

        /**
         * Constructs a new FindWorkflowTaskArgs.
         * @memberof pbWorkflow
         * @classdesc Represents a FindWorkflowTaskArgs.
         * @implements IFindWorkflowTaskArgs
         * @constructor
         * @param {pbWorkflow.IFindWorkflowTaskArgs=} [properties] Properties to set
         */
        function FindWorkflowTaskArgs(properties) {
            this.statuses = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindWorkflowTaskArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @instance
         */
        FindWorkflowTaskArgs.prototype.pageInfo = null;

        /**
         * FindWorkflowTaskArgs query.
         * @member {pbWorkflow.IWorkflowTask|null|undefined} query
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @instance
         */
        FindWorkflowTaskArgs.prototype.query = null;

        /**
         * FindWorkflowTaskArgs statuses.
         * @member {Array.<number>} statuses
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @instance
         */
        FindWorkflowTaskArgs.prototype.statuses = $util.emptyArray;

        /**
         * FindWorkflowTaskArgs assigneeId.
         * @member {string} assigneeId
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @instance
         */
        FindWorkflowTaskArgs.prototype.assigneeId = "";

        /**
         * Creates a new FindWorkflowTaskArgs instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowTaskArgs=} [properties] Properties to set
         * @returns {pbWorkflow.FindWorkflowTaskArgs} FindWorkflowTaskArgs instance
         */
        FindWorkflowTaskArgs.create = function create(properties) {
            return new FindWorkflowTaskArgs(properties);
        };

        /**
         * Encodes the specified FindWorkflowTaskArgs message. Does not implicitly {@link pbWorkflow.FindWorkflowTaskArgs.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowTaskArgs} message FindWorkflowTaskArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowTaskArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.query != null && Object.hasOwnProperty.call(message, "query"))
                $root.pbWorkflow.WorkflowTask.encode(message.query, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.statuses != null && message.statuses.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (var i = 0; i < message.statuses.length; ++i)
                    writer.int32(message.statuses[i]);
                writer.ldelim();
            }
            if (message.assigneeId != null && Object.hasOwnProperty.call(message, "assigneeId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.assigneeId);
            return writer;
        };

        /**
         * Encodes the specified FindWorkflowTaskArgs message, length delimited. Does not implicitly {@link pbWorkflow.FindWorkflowTaskArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowTaskArgs} message FindWorkflowTaskArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowTaskArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindWorkflowTaskArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.FindWorkflowTaskArgs} FindWorkflowTaskArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowTaskArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.FindWorkflowTaskArgs();
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
                        message.query = $root.pbWorkflow.WorkflowTask.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        if (!(message.statuses && message.statuses.length))
                            message.statuses = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.statuses.push(reader.int32());
                        } else
                            message.statuses.push(reader.int32());
                        break;
                    }
                case 4: {
                        message.assigneeId = reader.string();
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
         * Decodes a FindWorkflowTaskArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.FindWorkflowTaskArgs} FindWorkflowTaskArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowTaskArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindWorkflowTaskArgs message.
         * @function verify
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindWorkflowTaskArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.query != null && message.hasOwnProperty("query")) {
                var error = $root.pbWorkflow.WorkflowTask.verify(message.query);
                if (error)
                    return "query." + error;
            }
            if (message.statuses != null && message.hasOwnProperty("statuses")) {
                if (!Array.isArray(message.statuses))
                    return "statuses: array expected";
                for (var i = 0; i < message.statuses.length; ++i)
                    if (!$util.isInteger(message.statuses[i]))
                        return "statuses: integer[] expected";
            }
            if (message.assigneeId != null && message.hasOwnProperty("assigneeId"))
                if (!$util.isString(message.assigneeId))
                    return "assigneeId: string expected";
            return null;
        };

        /**
         * Creates a FindWorkflowTaskArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.FindWorkflowTaskArgs} FindWorkflowTaskArgs
         */
        FindWorkflowTaskArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.FindWorkflowTaskArgs)
                return object;
            var message = new $root.pbWorkflow.FindWorkflowTaskArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbWorkflow.FindWorkflowTaskArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.query != null) {
                if (typeof object.query !== "object")
                    throw TypeError(".pbWorkflow.FindWorkflowTaskArgs.query: object expected");
                message.query = $root.pbWorkflow.WorkflowTask.fromObject(object.query);
            }
            if (object.statuses) {
                if (!Array.isArray(object.statuses))
                    throw TypeError(".pbWorkflow.FindWorkflowTaskArgs.statuses: array expected");
                message.statuses = [];
                for (var i = 0; i < object.statuses.length; ++i)
                    message.statuses[i] = object.statuses[i] | 0;
            }
            if (object.assigneeId != null)
                message.assigneeId = String(object.assigneeId);
            return message;
        };

        /**
         * Creates a plain object from a FindWorkflowTaskArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @static
         * @param {pbWorkflow.FindWorkflowTaskArgs} message FindWorkflowTaskArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindWorkflowTaskArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.statuses = [];
            if (options.defaults) {
                object.pageInfo = null;
                object.query = null;
                object.assigneeId = "";
            }
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options);
            if (message.query != null && message.hasOwnProperty("query"))
                object.query = $root.pbWorkflow.WorkflowTask.toObject(message.query, options);
            if (message.statuses && message.statuses.length) {
                object.statuses = [];
                for (var j = 0; j < message.statuses.length; ++j)
                    object.statuses[j] = message.statuses[j];
            }
            if (message.assigneeId != null && message.hasOwnProperty("assigneeId"))
                object.assigneeId = message.assigneeId;
            return object;
        };

        /**
         * Converts this FindWorkflowTaskArgs to JSON.
         * @function toJSON
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindWorkflowTaskArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindWorkflowTaskArgs
         * @function getTypeUrl
         * @memberof pbWorkflow.FindWorkflowTaskArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindWorkflowTaskArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.FindWorkflowTaskArgs";
        };

        return FindWorkflowTaskArgs;
    })();

    pbWorkflow.FindWorkflowTaskReply = (function() {

        /**
         * Properties of a FindWorkflowTaskReply.
         * @memberof pbWorkflow
         * @interface IFindWorkflowTaskReply
         * @property {pbcommon.EnumCode|null} [code] FindWorkflowTaskReply code
         * @property {string|null} [msg] FindWorkflowTaskReply msg
         * @property {pbWorkflow.IWorkflowTask|null} [data] FindWorkflowTaskReply data
         * @property {Array.<pbWorkflow.IWorkflowTask>|null} [list] FindWorkflowTaskReply list
         * @property {number|Long|null} [total] FindWorkflowTaskReply total
         */

        /**
         * Constructs a new FindWorkflowTaskReply.
         * @memberof pbWorkflow
         * @classdesc Represents a FindWorkflowTaskReply.
         * @implements IFindWorkflowTaskReply
         * @constructor
         * @param {pbWorkflow.IFindWorkflowTaskReply=} [properties] Properties to set
         */
        function FindWorkflowTaskReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindWorkflowTaskReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @instance
         */
        FindWorkflowTaskReply.prototype.code = 0;

        /**
         * FindWorkflowTaskReply msg.
         * @member {string} msg
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @instance
         */
        FindWorkflowTaskReply.prototype.msg = "";

        /**
         * FindWorkflowTaskReply data.
         * @member {pbWorkflow.IWorkflowTask|null|undefined} data
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @instance
         */
        FindWorkflowTaskReply.prototype.data = null;

        /**
         * FindWorkflowTaskReply list.
         * @member {Array.<pbWorkflow.IWorkflowTask>} list
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @instance
         */
        FindWorkflowTaskReply.prototype.list = $util.emptyArray;

        /**
         * FindWorkflowTaskReply total.
         * @member {number|Long} total
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @instance
         */
        FindWorkflowTaskReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindWorkflowTaskReply instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @static
         * @param {pbWorkflow.IFindWorkflowTaskReply=} [properties] Properties to set
         * @returns {pbWorkflow.FindWorkflowTaskReply} FindWorkflowTaskReply instance
         */
        FindWorkflowTaskReply.create = function create(properties) {
            return new FindWorkflowTaskReply(properties);
        };

        /**
         * Encodes the specified FindWorkflowTaskReply message. Does not implicitly {@link pbWorkflow.FindWorkflowTaskReply.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @static
         * @param {pbWorkflow.IFindWorkflowTaskReply} message FindWorkflowTaskReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowTaskReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                $root.pbWorkflow.WorkflowTask.encode(message.data, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbWorkflow.WorkflowTask.encode(message.list[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindWorkflowTaskReply message, length delimited. Does not implicitly {@link pbWorkflow.FindWorkflowTaskReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @static
         * @param {pbWorkflow.IFindWorkflowTaskReply} message FindWorkflowTaskReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowTaskReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindWorkflowTaskReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.FindWorkflowTaskReply} FindWorkflowTaskReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowTaskReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.FindWorkflowTaskReply();
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
                        message.data = $root.pbWorkflow.WorkflowTask.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        if (!(message.list && message.list.length))
                            message.list = [];
                        message.list.push($root.pbWorkflow.WorkflowTask.decode(reader, reader.uint32()));
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
         * Decodes a FindWorkflowTaskReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.FindWorkflowTaskReply} FindWorkflowTaskReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowTaskReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindWorkflowTaskReply message.
         * @function verify
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindWorkflowTaskReply.verify = function verify(message) {
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
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.pbWorkflow.WorkflowTask.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.pbWorkflow.WorkflowTask.verify(message.list[i]);
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
         * Creates a FindWorkflowTaskReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.FindWorkflowTaskReply} FindWorkflowTaskReply
         */
        FindWorkflowTaskReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.FindWorkflowTaskReply)
                return object;
            var message = new $root.pbWorkflow.FindWorkflowTaskReply();
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
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".pbWorkflow.FindWorkflowTaskReply.data: object expected");
                message.data = $root.pbWorkflow.WorkflowTask.fromObject(object.data);
            }
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".pbWorkflow.FindWorkflowTaskReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbWorkflow.FindWorkflowTaskReply.list: object expected");
                    message.list[i] = $root.pbWorkflow.WorkflowTask.fromObject(object.list[i]);
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
         * Creates a plain object from a FindWorkflowTaskReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @static
         * @param {pbWorkflow.FindWorkflowTaskReply} message FindWorkflowTaskReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindWorkflowTaskReply.toObject = function toObject(message, options) {
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
                object.data = $root.pbWorkflow.WorkflowTask.toObject(message.data, options);
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.pbWorkflow.WorkflowTask.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindWorkflowTaskReply to JSON.
         * @function toJSON
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindWorkflowTaskReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindWorkflowTaskReply
         * @function getTypeUrl
         * @memberof pbWorkflow.FindWorkflowTaskReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindWorkflowTaskReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.FindWorkflowTaskReply";
        };

        return FindWorkflowTaskReply;
    })();

    pbWorkflow.FindWorkflowTransitionArgs = (function() {

        /**
         * Properties of a FindWorkflowTransitionArgs.
         * @memberof pbWorkflow
         * @interface IFindWorkflowTransitionArgs
         * @property {pbcommon.IPageInfo|null} [pageInfo] FindWorkflowTransitionArgs pageInfo
         * @property {number|Long|null} [instanceId] FindWorkflowTransitionArgs instanceId
         */

        /**
         * Constructs a new FindWorkflowTransitionArgs.
         * @memberof pbWorkflow
         * @classdesc Represents a FindWorkflowTransitionArgs.
         * @implements IFindWorkflowTransitionArgs
         * @constructor
         * @param {pbWorkflow.IFindWorkflowTransitionArgs=} [properties] Properties to set
         */
        function FindWorkflowTransitionArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindWorkflowTransitionArgs pageInfo.
         * @member {pbcommon.IPageInfo|null|undefined} pageInfo
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @instance
         */
        FindWorkflowTransitionArgs.prototype.pageInfo = null;

        /**
         * FindWorkflowTransitionArgs instanceId.
         * @member {number|Long} instanceId
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @instance
         */
        FindWorkflowTransitionArgs.prototype.instanceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindWorkflowTransitionArgs instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowTransitionArgs=} [properties] Properties to set
         * @returns {pbWorkflow.FindWorkflowTransitionArgs} FindWorkflowTransitionArgs instance
         */
        FindWorkflowTransitionArgs.create = function create(properties) {
            return new FindWorkflowTransitionArgs(properties);
        };

        /**
         * Encodes the specified FindWorkflowTransitionArgs message. Does not implicitly {@link pbWorkflow.FindWorkflowTransitionArgs.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowTransitionArgs} message FindWorkflowTransitionArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowTransitionArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pageInfo != null && Object.hasOwnProperty.call(message, "pageInfo"))
                $root.pbcommon.PageInfo.encode(message.pageInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.instanceId != null && Object.hasOwnProperty.call(message, "instanceId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.instanceId);
            return writer;
        };

        /**
         * Encodes the specified FindWorkflowTransitionArgs message, length delimited. Does not implicitly {@link pbWorkflow.FindWorkflowTransitionArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @static
         * @param {pbWorkflow.IFindWorkflowTransitionArgs} message FindWorkflowTransitionArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowTransitionArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindWorkflowTransitionArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.FindWorkflowTransitionArgs} FindWorkflowTransitionArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowTransitionArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.FindWorkflowTransitionArgs();
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
                        message.instanceId = reader.int64();
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
         * Decodes a FindWorkflowTransitionArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.FindWorkflowTransitionArgs} FindWorkflowTransitionArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowTransitionArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindWorkflowTransitionArgs message.
         * @function verify
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindWorkflowTransitionArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo")) {
                var error = $root.pbcommon.PageInfo.verify(message.pageInfo);
                if (error)
                    return "pageInfo." + error;
            }
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (!$util.isInteger(message.instanceId) && !(message.instanceId && $util.isInteger(message.instanceId.low) && $util.isInteger(message.instanceId.high)))
                    return "instanceId: integer|Long expected";
            return null;
        };

        /**
         * Creates a FindWorkflowTransitionArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.FindWorkflowTransitionArgs} FindWorkflowTransitionArgs
         */
        FindWorkflowTransitionArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.FindWorkflowTransitionArgs)
                return object;
            var message = new $root.pbWorkflow.FindWorkflowTransitionArgs();
            if (object.pageInfo != null) {
                if (typeof object.pageInfo !== "object")
                    throw TypeError(".pbWorkflow.FindWorkflowTransitionArgs.pageInfo: object expected");
                message.pageInfo = $root.pbcommon.PageInfo.fromObject(object.pageInfo);
            }
            if (object.instanceId != null)
                if ($util.Long)
                    (message.instanceId = $util.Long.fromValue(object.instanceId)).unsigned = false;
                else if (typeof object.instanceId === "string")
                    message.instanceId = parseInt(object.instanceId, 10);
                else if (typeof object.instanceId === "number")
                    message.instanceId = object.instanceId;
                else if (typeof object.instanceId === "object")
                    message.instanceId = new $util.LongBits(object.instanceId.low >>> 0, object.instanceId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FindWorkflowTransitionArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @static
         * @param {pbWorkflow.FindWorkflowTransitionArgs} message FindWorkflowTransitionArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindWorkflowTransitionArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.pageInfo = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instanceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instanceId = options.longs === String ? "0" : 0;
            }
            if (message.pageInfo != null && message.hasOwnProperty("pageInfo"))
                object.pageInfo = $root.pbcommon.PageInfo.toObject(message.pageInfo, options);
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (typeof message.instanceId === "number")
                    object.instanceId = options.longs === String ? String(message.instanceId) : message.instanceId;
                else
                    object.instanceId = options.longs === String ? $util.Long.prototype.toString.call(message.instanceId) : options.longs === Number ? new $util.LongBits(message.instanceId.low >>> 0, message.instanceId.high >>> 0).toNumber() : message.instanceId;
            return object;
        };

        /**
         * Converts this FindWorkflowTransitionArgs to JSON.
         * @function toJSON
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindWorkflowTransitionArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindWorkflowTransitionArgs
         * @function getTypeUrl
         * @memberof pbWorkflow.FindWorkflowTransitionArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindWorkflowTransitionArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.FindWorkflowTransitionArgs";
        };

        return FindWorkflowTransitionArgs;
    })();

    pbWorkflow.FindWorkflowTransitionReply = (function() {

        /**
         * Properties of a FindWorkflowTransitionReply.
         * @memberof pbWorkflow
         * @interface IFindWorkflowTransitionReply
         * @property {pbcommon.EnumCode|null} [code] FindWorkflowTransitionReply code
         * @property {string|null} [msg] FindWorkflowTransitionReply msg
         * @property {Array.<pbWorkflow.IWorkflowTransition>|null} [list] FindWorkflowTransitionReply list
         * @property {number|Long|null} [total] FindWorkflowTransitionReply total
         */

        /**
         * Constructs a new FindWorkflowTransitionReply.
         * @memberof pbWorkflow
         * @classdesc Represents a FindWorkflowTransitionReply.
         * @implements IFindWorkflowTransitionReply
         * @constructor
         * @param {pbWorkflow.IFindWorkflowTransitionReply=} [properties] Properties to set
         */
        function FindWorkflowTransitionReply(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindWorkflowTransitionReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @instance
         */
        FindWorkflowTransitionReply.prototype.code = 0;

        /**
         * FindWorkflowTransitionReply msg.
         * @member {string} msg
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @instance
         */
        FindWorkflowTransitionReply.prototype.msg = "";

        /**
         * FindWorkflowTransitionReply list.
         * @member {Array.<pbWorkflow.IWorkflowTransition>} list
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @instance
         */
        FindWorkflowTransitionReply.prototype.list = $util.emptyArray;

        /**
         * FindWorkflowTransitionReply total.
         * @member {number|Long} total
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @instance
         */
        FindWorkflowTransitionReply.prototype.total = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FindWorkflowTransitionReply instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @static
         * @param {pbWorkflow.IFindWorkflowTransitionReply=} [properties] Properties to set
         * @returns {pbWorkflow.FindWorkflowTransitionReply} FindWorkflowTransitionReply instance
         */
        FindWorkflowTransitionReply.create = function create(properties) {
            return new FindWorkflowTransitionReply(properties);
        };

        /**
         * Encodes the specified FindWorkflowTransitionReply message. Does not implicitly {@link pbWorkflow.FindWorkflowTransitionReply.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @static
         * @param {pbWorkflow.IFindWorkflowTransitionReply} message FindWorkflowTransitionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowTransitionReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.pbWorkflow.WorkflowTransition.encode(message.list[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.total != null && Object.hasOwnProperty.call(message, "total"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.total);
            return writer;
        };

        /**
         * Encodes the specified FindWorkflowTransitionReply message, length delimited. Does not implicitly {@link pbWorkflow.FindWorkflowTransitionReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @static
         * @param {pbWorkflow.IFindWorkflowTransitionReply} message FindWorkflowTransitionReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindWorkflowTransitionReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindWorkflowTransitionReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.FindWorkflowTransitionReply} FindWorkflowTransitionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowTransitionReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.FindWorkflowTransitionReply();
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
                        message.list.push($root.pbWorkflow.WorkflowTransition.decode(reader, reader.uint32()));
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
         * Decodes a FindWorkflowTransitionReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.FindWorkflowTransitionReply} FindWorkflowTransitionReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindWorkflowTransitionReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindWorkflowTransitionReply message.
         * @function verify
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindWorkflowTransitionReply.verify = function verify(message) {
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
                    var error = $root.pbWorkflow.WorkflowTransition.verify(message.list[i]);
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
         * Creates a FindWorkflowTransitionReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.FindWorkflowTransitionReply} FindWorkflowTransitionReply
         */
        FindWorkflowTransitionReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.FindWorkflowTransitionReply)
                return object;
            var message = new $root.pbWorkflow.FindWorkflowTransitionReply();
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
                    throw TypeError(".pbWorkflow.FindWorkflowTransitionReply.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".pbWorkflow.FindWorkflowTransitionReply.list: object expected");
                    message.list[i] = $root.pbWorkflow.WorkflowTransition.fromObject(object.list[i]);
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
         * Creates a plain object from a FindWorkflowTransitionReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @static
         * @param {pbWorkflow.FindWorkflowTransitionReply} message FindWorkflowTransitionReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindWorkflowTransitionReply.toObject = function toObject(message, options) {
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
                    object.list[j] = $root.pbWorkflow.WorkflowTransition.toObject(message.list[j], options);
            }
            if (message.total != null && message.hasOwnProperty("total"))
                if (typeof message.total === "number")
                    object.total = options.longs === String ? String(message.total) : message.total;
                else
                    object.total = options.longs === String ? $util.Long.prototype.toString.call(message.total) : options.longs === Number ? new $util.LongBits(message.total.low >>> 0, message.total.high >>> 0).toNumber() : message.total;
            return object;
        };

        /**
         * Converts this FindWorkflowTransitionReply to JSON.
         * @function toJSON
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindWorkflowTransitionReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FindWorkflowTransitionReply
         * @function getTypeUrl
         * @memberof pbWorkflow.FindWorkflowTransitionReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FindWorkflowTransitionReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.FindWorkflowTransitionReply";
        };

        return FindWorkflowTransitionReply;
    })();

    pbWorkflow.StartProcessArgs = (function() {

        /**
         * Properties of a StartProcessArgs.
         * @memberof pbWorkflow
         * @interface IStartProcessArgs
         * @property {number|Long|null} [workflowDefId] StartProcessArgs workflowDefId
         * @property {string|null} [bizType] StartProcessArgs bizType
         * @property {string|null} [bizId] StartProcessArgs bizId
         * @property {string|null} [bizNo] StartProcessArgs bizNo
         * @property {string|null} [context] StartProcessArgs context
         * @property {string|null} [starterId] StartProcessArgs starterId
         * @property {string|null} [starterName] StartProcessArgs starterName
         * @property {string|null} [remark] StartProcessArgs remark
         */

        /**
         * Constructs a new StartProcessArgs.
         * @memberof pbWorkflow
         * @classdesc Represents a StartProcessArgs.
         * @implements IStartProcessArgs
         * @constructor
         * @param {pbWorkflow.IStartProcessArgs=} [properties] Properties to set
         */
        function StartProcessArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StartProcessArgs workflowDefId.
         * @member {number|Long} workflowDefId
         * @memberof pbWorkflow.StartProcessArgs
         * @instance
         */
        StartProcessArgs.prototype.workflowDefId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * StartProcessArgs bizType.
         * @member {string} bizType
         * @memberof pbWorkflow.StartProcessArgs
         * @instance
         */
        StartProcessArgs.prototype.bizType = "";

        /**
         * StartProcessArgs bizId.
         * @member {string} bizId
         * @memberof pbWorkflow.StartProcessArgs
         * @instance
         */
        StartProcessArgs.prototype.bizId = "";

        /**
         * StartProcessArgs bizNo.
         * @member {string} bizNo
         * @memberof pbWorkflow.StartProcessArgs
         * @instance
         */
        StartProcessArgs.prototype.bizNo = "";

        /**
         * StartProcessArgs context.
         * @member {string} context
         * @memberof pbWorkflow.StartProcessArgs
         * @instance
         */
        StartProcessArgs.prototype.context = "";

        /**
         * StartProcessArgs starterId.
         * @member {string} starterId
         * @memberof pbWorkflow.StartProcessArgs
         * @instance
         */
        StartProcessArgs.prototype.starterId = "";

        /**
         * StartProcessArgs starterName.
         * @member {string} starterName
         * @memberof pbWorkflow.StartProcessArgs
         * @instance
         */
        StartProcessArgs.prototype.starterName = "";

        /**
         * StartProcessArgs remark.
         * @member {string} remark
         * @memberof pbWorkflow.StartProcessArgs
         * @instance
         */
        StartProcessArgs.prototype.remark = "";

        /**
         * Creates a new StartProcessArgs instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.StartProcessArgs
         * @static
         * @param {pbWorkflow.IStartProcessArgs=} [properties] Properties to set
         * @returns {pbWorkflow.StartProcessArgs} StartProcessArgs instance
         */
        StartProcessArgs.create = function create(properties) {
            return new StartProcessArgs(properties);
        };

        /**
         * Encodes the specified StartProcessArgs message. Does not implicitly {@link pbWorkflow.StartProcessArgs.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.StartProcessArgs
         * @static
         * @param {pbWorkflow.IStartProcessArgs} message StartProcessArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartProcessArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.workflowDefId != null && Object.hasOwnProperty.call(message, "workflowDefId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.workflowDefId);
            if (message.bizType != null && Object.hasOwnProperty.call(message, "bizType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.bizType);
            if (message.bizId != null && Object.hasOwnProperty.call(message, "bizId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.bizId);
            if (message.bizNo != null && Object.hasOwnProperty.call(message, "bizNo"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.bizNo);
            if (message.context != null && Object.hasOwnProperty.call(message, "context"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.context);
            if (message.starterId != null && Object.hasOwnProperty.call(message, "starterId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.starterId);
            if (message.starterName != null && Object.hasOwnProperty.call(message, "starterName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.starterName);
            if (message.remark != null && Object.hasOwnProperty.call(message, "remark"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.remark);
            return writer;
        };

        /**
         * Encodes the specified StartProcessArgs message, length delimited. Does not implicitly {@link pbWorkflow.StartProcessArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.StartProcessArgs
         * @static
         * @param {pbWorkflow.IStartProcessArgs} message StartProcessArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StartProcessArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StartProcessArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.StartProcessArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.StartProcessArgs} StartProcessArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartProcessArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.StartProcessArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.workflowDefId = reader.int64();
                        break;
                    }
                case 2: {
                        message.bizType = reader.string();
                        break;
                    }
                case 3: {
                        message.bizId = reader.string();
                        break;
                    }
                case 4: {
                        message.bizNo = reader.string();
                        break;
                    }
                case 5: {
                        message.context = reader.string();
                        break;
                    }
                case 6: {
                        message.starterId = reader.string();
                        break;
                    }
                case 7: {
                        message.starterName = reader.string();
                        break;
                    }
                case 8: {
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
         * Decodes a StartProcessArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.StartProcessArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.StartProcessArgs} StartProcessArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StartProcessArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StartProcessArgs message.
         * @function verify
         * @memberof pbWorkflow.StartProcessArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StartProcessArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.workflowDefId != null && message.hasOwnProperty("workflowDefId"))
                if (!$util.isInteger(message.workflowDefId) && !(message.workflowDefId && $util.isInteger(message.workflowDefId.low) && $util.isInteger(message.workflowDefId.high)))
                    return "workflowDefId: integer|Long expected";
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                if (!$util.isString(message.bizType))
                    return "bizType: string expected";
            if (message.bizId != null && message.hasOwnProperty("bizId"))
                if (!$util.isString(message.bizId))
                    return "bizId: string expected";
            if (message.bizNo != null && message.hasOwnProperty("bizNo"))
                if (!$util.isString(message.bizNo))
                    return "bizNo: string expected";
            if (message.context != null && message.hasOwnProperty("context"))
                if (!$util.isString(message.context))
                    return "context: string expected";
            if (message.starterId != null && message.hasOwnProperty("starterId"))
                if (!$util.isString(message.starterId))
                    return "starterId: string expected";
            if (message.starterName != null && message.hasOwnProperty("starterName"))
                if (!$util.isString(message.starterName))
                    return "starterName: string expected";
            if (message.remark != null && message.hasOwnProperty("remark"))
                if (!$util.isString(message.remark))
                    return "remark: string expected";
            return null;
        };

        /**
         * Creates a StartProcessArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.StartProcessArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.StartProcessArgs} StartProcessArgs
         */
        StartProcessArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.StartProcessArgs)
                return object;
            var message = new $root.pbWorkflow.StartProcessArgs();
            if (object.workflowDefId != null)
                if ($util.Long)
                    (message.workflowDefId = $util.Long.fromValue(object.workflowDefId)).unsigned = false;
                else if (typeof object.workflowDefId === "string")
                    message.workflowDefId = parseInt(object.workflowDefId, 10);
                else if (typeof object.workflowDefId === "number")
                    message.workflowDefId = object.workflowDefId;
                else if (typeof object.workflowDefId === "object")
                    message.workflowDefId = new $util.LongBits(object.workflowDefId.low >>> 0, object.workflowDefId.high >>> 0).toNumber();
            if (object.bizType != null)
                message.bizType = String(object.bizType);
            if (object.bizId != null)
                message.bizId = String(object.bizId);
            if (object.bizNo != null)
                message.bizNo = String(object.bizNo);
            if (object.context != null)
                message.context = String(object.context);
            if (object.starterId != null)
                message.starterId = String(object.starterId);
            if (object.starterName != null)
                message.starterName = String(object.starterName);
            if (object.remark != null)
                message.remark = String(object.remark);
            return message;
        };

        /**
         * Creates a plain object from a StartProcessArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.StartProcessArgs
         * @static
         * @param {pbWorkflow.StartProcessArgs} message StartProcessArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StartProcessArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.workflowDefId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.workflowDefId = options.longs === String ? "0" : 0;
                object.bizType = "";
                object.bizId = "";
                object.bizNo = "";
                object.context = "";
                object.starterId = "";
                object.starterName = "";
                object.remark = "";
            }
            if (message.workflowDefId != null && message.hasOwnProperty("workflowDefId"))
                if (typeof message.workflowDefId === "number")
                    object.workflowDefId = options.longs === String ? String(message.workflowDefId) : message.workflowDefId;
                else
                    object.workflowDefId = options.longs === String ? $util.Long.prototype.toString.call(message.workflowDefId) : options.longs === Number ? new $util.LongBits(message.workflowDefId.low >>> 0, message.workflowDefId.high >>> 0).toNumber() : message.workflowDefId;
            if (message.bizType != null && message.hasOwnProperty("bizType"))
                object.bizType = message.bizType;
            if (message.bizId != null && message.hasOwnProperty("bizId"))
                object.bizId = message.bizId;
            if (message.bizNo != null && message.hasOwnProperty("bizNo"))
                object.bizNo = message.bizNo;
            if (message.context != null && message.hasOwnProperty("context"))
                object.context = message.context;
            if (message.starterId != null && message.hasOwnProperty("starterId"))
                object.starterId = message.starterId;
            if (message.starterName != null && message.hasOwnProperty("starterName"))
                object.starterName = message.starterName;
            if (message.remark != null && message.hasOwnProperty("remark"))
                object.remark = message.remark;
            return object;
        };

        /**
         * Converts this StartProcessArgs to JSON.
         * @function toJSON
         * @memberof pbWorkflow.StartProcessArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StartProcessArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StartProcessArgs
         * @function getTypeUrl
         * @memberof pbWorkflow.StartProcessArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StartProcessArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.StartProcessArgs";
        };

        return StartProcessArgs;
    })();

    pbWorkflow.CompleteTaskArgs = (function() {

        /**
         * Properties of a CompleteTaskArgs.
         * @memberof pbWorkflow
         * @interface ICompleteTaskArgs
         * @property {number|Long|null} [taskId] CompleteTaskArgs taskId
         * @property {string|null} [action] CompleteTaskArgs action
         * @property {string|null} [comment] CompleteTaskArgs comment
         * @property {string|null} [actorId] CompleteTaskArgs actorId
         * @property {string|null} [actorName] CompleteTaskArgs actorName
         * @property {string|null} [delegateToId] CompleteTaskArgs delegateToId
         * @property {string|null} [delegateToName] CompleteTaskArgs delegateToName
         */

        /**
         * Constructs a new CompleteTaskArgs.
         * @memberof pbWorkflow
         * @classdesc Represents a CompleteTaskArgs.
         * @implements ICompleteTaskArgs
         * @constructor
         * @param {pbWorkflow.ICompleteTaskArgs=} [properties] Properties to set
         */
        function CompleteTaskArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CompleteTaskArgs taskId.
         * @member {number|Long} taskId
         * @memberof pbWorkflow.CompleteTaskArgs
         * @instance
         */
        CompleteTaskArgs.prototype.taskId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * CompleteTaskArgs action.
         * @member {string} action
         * @memberof pbWorkflow.CompleteTaskArgs
         * @instance
         */
        CompleteTaskArgs.prototype.action = "";

        /**
         * CompleteTaskArgs comment.
         * @member {string} comment
         * @memberof pbWorkflow.CompleteTaskArgs
         * @instance
         */
        CompleteTaskArgs.prototype.comment = "";

        /**
         * CompleteTaskArgs actorId.
         * @member {string} actorId
         * @memberof pbWorkflow.CompleteTaskArgs
         * @instance
         */
        CompleteTaskArgs.prototype.actorId = "";

        /**
         * CompleteTaskArgs actorName.
         * @member {string} actorName
         * @memberof pbWorkflow.CompleteTaskArgs
         * @instance
         */
        CompleteTaskArgs.prototype.actorName = "";

        /**
         * CompleteTaskArgs delegateToId.
         * @member {string} delegateToId
         * @memberof pbWorkflow.CompleteTaskArgs
         * @instance
         */
        CompleteTaskArgs.prototype.delegateToId = "";

        /**
         * CompleteTaskArgs delegateToName.
         * @member {string} delegateToName
         * @memberof pbWorkflow.CompleteTaskArgs
         * @instance
         */
        CompleteTaskArgs.prototype.delegateToName = "";

        /**
         * Creates a new CompleteTaskArgs instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.CompleteTaskArgs
         * @static
         * @param {pbWorkflow.ICompleteTaskArgs=} [properties] Properties to set
         * @returns {pbWorkflow.CompleteTaskArgs} CompleteTaskArgs instance
         */
        CompleteTaskArgs.create = function create(properties) {
            return new CompleteTaskArgs(properties);
        };

        /**
         * Encodes the specified CompleteTaskArgs message. Does not implicitly {@link pbWorkflow.CompleteTaskArgs.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.CompleteTaskArgs
         * @static
         * @param {pbWorkflow.ICompleteTaskArgs} message CompleteTaskArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompleteTaskArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.taskId != null && Object.hasOwnProperty.call(message, "taskId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.taskId);
            if (message.action != null && Object.hasOwnProperty.call(message, "action"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.action);
            if (message.comment != null && Object.hasOwnProperty.call(message, "comment"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.comment);
            if (message.actorId != null && Object.hasOwnProperty.call(message, "actorId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.actorId);
            if (message.actorName != null && Object.hasOwnProperty.call(message, "actorName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.actorName);
            if (message.delegateToId != null && Object.hasOwnProperty.call(message, "delegateToId"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.delegateToId);
            if (message.delegateToName != null && Object.hasOwnProperty.call(message, "delegateToName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.delegateToName);
            return writer;
        };

        /**
         * Encodes the specified CompleteTaskArgs message, length delimited. Does not implicitly {@link pbWorkflow.CompleteTaskArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.CompleteTaskArgs
         * @static
         * @param {pbWorkflow.ICompleteTaskArgs} message CompleteTaskArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompleteTaskArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CompleteTaskArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.CompleteTaskArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.CompleteTaskArgs} CompleteTaskArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompleteTaskArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.CompleteTaskArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.taskId = reader.int64();
                        break;
                    }
                case 2: {
                        message.action = reader.string();
                        break;
                    }
                case 3: {
                        message.comment = reader.string();
                        break;
                    }
                case 4: {
                        message.actorId = reader.string();
                        break;
                    }
                case 5: {
                        message.actorName = reader.string();
                        break;
                    }
                case 6: {
                        message.delegateToId = reader.string();
                        break;
                    }
                case 7: {
                        message.delegateToName = reader.string();
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
         * Decodes a CompleteTaskArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.CompleteTaskArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.CompleteTaskArgs} CompleteTaskArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompleteTaskArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CompleteTaskArgs message.
         * @function verify
         * @memberof pbWorkflow.CompleteTaskArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CompleteTaskArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (!$util.isInteger(message.taskId) && !(message.taskId && $util.isInteger(message.taskId.low) && $util.isInteger(message.taskId.high)))
                    return "taskId: integer|Long expected";
            if (message.action != null && message.hasOwnProperty("action"))
                if (!$util.isString(message.action))
                    return "action: string expected";
            if (message.comment != null && message.hasOwnProperty("comment"))
                if (!$util.isString(message.comment))
                    return "comment: string expected";
            if (message.actorId != null && message.hasOwnProperty("actorId"))
                if (!$util.isString(message.actorId))
                    return "actorId: string expected";
            if (message.actorName != null && message.hasOwnProperty("actorName"))
                if (!$util.isString(message.actorName))
                    return "actorName: string expected";
            if (message.delegateToId != null && message.hasOwnProperty("delegateToId"))
                if (!$util.isString(message.delegateToId))
                    return "delegateToId: string expected";
            if (message.delegateToName != null && message.hasOwnProperty("delegateToName"))
                if (!$util.isString(message.delegateToName))
                    return "delegateToName: string expected";
            return null;
        };

        /**
         * Creates a CompleteTaskArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.CompleteTaskArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.CompleteTaskArgs} CompleteTaskArgs
         */
        CompleteTaskArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.CompleteTaskArgs)
                return object;
            var message = new $root.pbWorkflow.CompleteTaskArgs();
            if (object.taskId != null)
                if ($util.Long)
                    (message.taskId = $util.Long.fromValue(object.taskId)).unsigned = false;
                else if (typeof object.taskId === "string")
                    message.taskId = parseInt(object.taskId, 10);
                else if (typeof object.taskId === "number")
                    message.taskId = object.taskId;
                else if (typeof object.taskId === "object")
                    message.taskId = new $util.LongBits(object.taskId.low >>> 0, object.taskId.high >>> 0).toNumber();
            if (object.action != null)
                message.action = String(object.action);
            if (object.comment != null)
                message.comment = String(object.comment);
            if (object.actorId != null)
                message.actorId = String(object.actorId);
            if (object.actorName != null)
                message.actorName = String(object.actorName);
            if (object.delegateToId != null)
                message.delegateToId = String(object.delegateToId);
            if (object.delegateToName != null)
                message.delegateToName = String(object.delegateToName);
            return message;
        };

        /**
         * Creates a plain object from a CompleteTaskArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.CompleteTaskArgs
         * @static
         * @param {pbWorkflow.CompleteTaskArgs} message CompleteTaskArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompleteTaskArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.taskId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.taskId = options.longs === String ? "0" : 0;
                object.action = "";
                object.comment = "";
                object.actorId = "";
                object.actorName = "";
                object.delegateToId = "";
                object.delegateToName = "";
            }
            if (message.taskId != null && message.hasOwnProperty("taskId"))
                if (typeof message.taskId === "number")
                    object.taskId = options.longs === String ? String(message.taskId) : message.taskId;
                else
                    object.taskId = options.longs === String ? $util.Long.prototype.toString.call(message.taskId) : options.longs === Number ? new $util.LongBits(message.taskId.low >>> 0, message.taskId.high >>> 0).toNumber() : message.taskId;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            if (message.comment != null && message.hasOwnProperty("comment"))
                object.comment = message.comment;
            if (message.actorId != null && message.hasOwnProperty("actorId"))
                object.actorId = message.actorId;
            if (message.actorName != null && message.hasOwnProperty("actorName"))
                object.actorName = message.actorName;
            if (message.delegateToId != null && message.hasOwnProperty("delegateToId"))
                object.delegateToId = message.delegateToId;
            if (message.delegateToName != null && message.hasOwnProperty("delegateToName"))
                object.delegateToName = message.delegateToName;
            return object;
        };

        /**
         * Converts this CompleteTaskArgs to JSON.
         * @function toJSON
         * @memberof pbWorkflow.CompleteTaskArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompleteTaskArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CompleteTaskArgs
         * @function getTypeUrl
         * @memberof pbWorkflow.CompleteTaskArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CompleteTaskArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.CompleteTaskArgs";
        };

        return CompleteTaskArgs;
    })();

    pbWorkflow.WithdrawProcessArgs = (function() {

        /**
         * Properties of a WithdrawProcessArgs.
         * @memberof pbWorkflow
         * @interface IWithdrawProcessArgs
         * @property {number|Long|null} [instanceId] WithdrawProcessArgs instanceId
         * @property {string|null} [userId] WithdrawProcessArgs userId
         * @property {string|null} [reason] WithdrawProcessArgs reason
         */

        /**
         * Constructs a new WithdrawProcessArgs.
         * @memberof pbWorkflow
         * @classdesc Represents a WithdrawProcessArgs.
         * @implements IWithdrawProcessArgs
         * @constructor
         * @param {pbWorkflow.IWithdrawProcessArgs=} [properties] Properties to set
         */
        function WithdrawProcessArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WithdrawProcessArgs instanceId.
         * @member {number|Long} instanceId
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @instance
         */
        WithdrawProcessArgs.prototype.instanceId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * WithdrawProcessArgs userId.
         * @member {string} userId
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @instance
         */
        WithdrawProcessArgs.prototype.userId = "";

        /**
         * WithdrawProcessArgs reason.
         * @member {string} reason
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @instance
         */
        WithdrawProcessArgs.prototype.reason = "";

        /**
         * Creates a new WithdrawProcessArgs instance using the specified properties.
         * @function create
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @static
         * @param {pbWorkflow.IWithdrawProcessArgs=} [properties] Properties to set
         * @returns {pbWorkflow.WithdrawProcessArgs} WithdrawProcessArgs instance
         */
        WithdrawProcessArgs.create = function create(properties) {
            return new WithdrawProcessArgs(properties);
        };

        /**
         * Encodes the specified WithdrawProcessArgs message. Does not implicitly {@link pbWorkflow.WithdrawProcessArgs.verify|verify} messages.
         * @function encode
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @static
         * @param {pbWorkflow.IWithdrawProcessArgs} message WithdrawProcessArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WithdrawProcessArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instanceId != null && Object.hasOwnProperty.call(message, "instanceId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.instanceId);
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
            if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.reason);
            return writer;
        };

        /**
         * Encodes the specified WithdrawProcessArgs message, length delimited. Does not implicitly {@link pbWorkflow.WithdrawProcessArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @static
         * @param {pbWorkflow.IWithdrawProcessArgs} message WithdrawProcessArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WithdrawProcessArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WithdrawProcessArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbWorkflow.WithdrawProcessArgs} WithdrawProcessArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WithdrawProcessArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbWorkflow.WithdrawProcessArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.instanceId = reader.int64();
                        break;
                    }
                case 2: {
                        message.userId = reader.string();
                        break;
                    }
                case 3: {
                        message.reason = reader.string();
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
         * Decodes a WithdrawProcessArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbWorkflow.WithdrawProcessArgs} WithdrawProcessArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WithdrawProcessArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WithdrawProcessArgs message.
         * @function verify
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WithdrawProcessArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (!$util.isInteger(message.instanceId) && !(message.instanceId && $util.isInteger(message.instanceId.low) && $util.isInteger(message.instanceId.high)))
                    return "instanceId: integer|Long expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.reason != null && message.hasOwnProperty("reason"))
                if (!$util.isString(message.reason))
                    return "reason: string expected";
            return null;
        };

        /**
         * Creates a WithdrawProcessArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbWorkflow.WithdrawProcessArgs} WithdrawProcessArgs
         */
        WithdrawProcessArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbWorkflow.WithdrawProcessArgs)
                return object;
            var message = new $root.pbWorkflow.WithdrawProcessArgs();
            if (object.instanceId != null)
                if ($util.Long)
                    (message.instanceId = $util.Long.fromValue(object.instanceId)).unsigned = false;
                else if (typeof object.instanceId === "string")
                    message.instanceId = parseInt(object.instanceId, 10);
                else if (typeof object.instanceId === "number")
                    message.instanceId = object.instanceId;
                else if (typeof object.instanceId === "object")
                    message.instanceId = new $util.LongBits(object.instanceId.low >>> 0, object.instanceId.high >>> 0).toNumber();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.reason != null)
                message.reason = String(object.reason);
            return message;
        };

        /**
         * Creates a plain object from a WithdrawProcessArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @static
         * @param {pbWorkflow.WithdrawProcessArgs} message WithdrawProcessArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WithdrawProcessArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.instanceId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.instanceId = options.longs === String ? "0" : 0;
                object.userId = "";
                object.reason = "";
            }
            if (message.instanceId != null && message.hasOwnProperty("instanceId"))
                if (typeof message.instanceId === "number")
                    object.instanceId = options.longs === String ? String(message.instanceId) : message.instanceId;
                else
                    object.instanceId = options.longs === String ? $util.Long.prototype.toString.call(message.instanceId) : options.longs === Number ? new $util.LongBits(message.instanceId.low >>> 0, message.instanceId.high >>> 0).toNumber() : message.instanceId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.reason != null && message.hasOwnProperty("reason"))
                object.reason = message.reason;
            return object;
        };

        /**
         * Converts this WithdrawProcessArgs to JSON.
         * @function toJSON
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WithdrawProcessArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WithdrawProcessArgs
         * @function getTypeUrl
         * @memberof pbWorkflow.WithdrawProcessArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WithdrawProcessArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbWorkflow.WithdrawProcessArgs";
        };

        return WithdrawProcessArgs;
    })();

    pbWorkflow.WorkflowService = (function() {

        /**
         * Constructs a new WorkflowService service.
         * @memberof pbWorkflow
         * @classdesc Represents a WorkflowService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function WorkflowService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (WorkflowService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = WorkflowService;

        /**
         * Creates new WorkflowService service using the specified rpc implementation.
         * @function create
         * @memberof pbWorkflow.WorkflowService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {WorkflowService} RPC service. Useful where requests and/or responses are streamed.
         */
        WorkflowService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#createWorkflowDef}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef CreateWorkflowDefCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CreateWorkflowDef.
         * @function createWorkflowDef
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IWorkflowDef} request WorkflowDef message or plain object
         * @param {pbWorkflow.WorkflowService.CreateWorkflowDefCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.createWorkflowDef = function createWorkflowDef(request, callback) {
            return this.rpcCall(createWorkflowDef, $root.pbWorkflow.WorkflowDef, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CreateWorkflowDef" });

        /**
         * Calls CreateWorkflowDef.
         * @function createWorkflowDef
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IWorkflowDef} request WorkflowDef message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#updateWorkflowDef}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef UpdateWorkflowDefCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls UpdateWorkflowDef.
         * @function updateWorkflowDef
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IWorkflowDef} request WorkflowDef message or plain object
         * @param {pbWorkflow.WorkflowService.UpdateWorkflowDefCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.updateWorkflowDef = function updateWorkflowDef(request, callback) {
            return this.rpcCall(updateWorkflowDef, $root.pbWorkflow.WorkflowDef, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "UpdateWorkflowDef" });

        /**
         * Calls UpdateWorkflowDef.
         * @function updateWorkflowDef
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IWorkflowDef} request WorkflowDef message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#deleteWorkflowDef}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef DeleteWorkflowDefCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls DeleteWorkflowDef.
         * @function deleteWorkflowDef
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbWorkflow.WorkflowService.DeleteWorkflowDefCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.deleteWorkflowDef = function deleteWorkflowDef(request, callback) {
            return this.rpcCall(deleteWorkflowDef, $root.pbcommon.IdArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "DeleteWorkflowDef" });

        /**
         * Calls DeleteWorkflowDef.
         * @function deleteWorkflowDef
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#findWorkflowDefById}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef FindWorkflowDefByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbWorkflow.FindWorkflowDefReply} [response] FindWorkflowDefReply
         */

        /**
         * Calls FindWorkflowDefById.
         * @function findWorkflowDefById
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbWorkflow.WorkflowService.FindWorkflowDefByIdCallback} callback Node-style callback called with the error, if any, and FindWorkflowDefReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.findWorkflowDefById = function findWorkflowDefById(request, callback) {
            return this.rpcCall(findWorkflowDefById, $root.pbcommon.IdArgs, $root.pbWorkflow.FindWorkflowDefReply, request, callback);
        }, "name", { value: "FindWorkflowDefById" });

        /**
         * Calls FindWorkflowDefById.
         * @function findWorkflowDefById
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbWorkflow.FindWorkflowDefReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#findWorkflowDefList}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef FindWorkflowDefListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbWorkflow.FindWorkflowDefReply} [response] FindWorkflowDefReply
         */

        /**
         * Calls FindWorkflowDefList.
         * @function findWorkflowDefList
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IFindWorkflowDefArgs} request FindWorkflowDefArgs message or plain object
         * @param {pbWorkflow.WorkflowService.FindWorkflowDefListCallback} callback Node-style callback called with the error, if any, and FindWorkflowDefReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.findWorkflowDefList = function findWorkflowDefList(request, callback) {
            return this.rpcCall(findWorkflowDefList, $root.pbWorkflow.FindWorkflowDefArgs, $root.pbWorkflow.FindWorkflowDefReply, request, callback);
        }, "name", { value: "FindWorkflowDefList" });

        /**
         * Calls FindWorkflowDefList.
         * @function findWorkflowDefList
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IFindWorkflowDefArgs} request FindWorkflowDefArgs message or plain object
         * @returns {Promise<pbWorkflow.FindWorkflowDefReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#startProcess}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef StartProcessCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls StartProcess.
         * @function startProcess
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IStartProcessArgs} request StartProcessArgs message or plain object
         * @param {pbWorkflow.WorkflowService.StartProcessCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.startProcess = function startProcess(request, callback) {
            return this.rpcCall(startProcess, $root.pbWorkflow.StartProcessArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "StartProcess" });

        /**
         * Calls StartProcess.
         * @function startProcess
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IStartProcessArgs} request StartProcessArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#findWorkflowInstanceById}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef FindWorkflowInstanceByIdCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbWorkflow.FindWorkflowInstanceReply} [response] FindWorkflowInstanceReply
         */

        /**
         * Calls FindWorkflowInstanceById.
         * @function findWorkflowInstanceById
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbWorkflow.WorkflowService.FindWorkflowInstanceByIdCallback} callback Node-style callback called with the error, if any, and FindWorkflowInstanceReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.findWorkflowInstanceById = function findWorkflowInstanceById(request, callback) {
            return this.rpcCall(findWorkflowInstanceById, $root.pbcommon.IdArgs, $root.pbWorkflow.FindWorkflowInstanceReply, request, callback);
        }, "name", { value: "FindWorkflowInstanceById" });

        /**
         * Calls FindWorkflowInstanceById.
         * @function findWorkflowInstanceById
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbWorkflow.FindWorkflowInstanceReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#findWorkflowInstanceList}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef FindWorkflowInstanceListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbWorkflow.FindWorkflowInstanceReply} [response] FindWorkflowInstanceReply
         */

        /**
         * Calls FindWorkflowInstanceList.
         * @function findWorkflowInstanceList
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IFindWorkflowInstanceArgs} request FindWorkflowInstanceArgs message or plain object
         * @param {pbWorkflow.WorkflowService.FindWorkflowInstanceListCallback} callback Node-style callback called with the error, if any, and FindWorkflowInstanceReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.findWorkflowInstanceList = function findWorkflowInstanceList(request, callback) {
            return this.rpcCall(findWorkflowInstanceList, $root.pbWorkflow.FindWorkflowInstanceArgs, $root.pbWorkflow.FindWorkflowInstanceReply, request, callback);
        }, "name", { value: "FindWorkflowInstanceList" });

        /**
         * Calls FindWorkflowInstanceList.
         * @function findWorkflowInstanceList
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IFindWorkflowInstanceArgs} request FindWorkflowInstanceArgs message or plain object
         * @returns {Promise<pbWorkflow.FindWorkflowInstanceReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#getProcessProgress}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef GetProcessProgressCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbWorkflow.FindWorkflowInstanceReply} [response] FindWorkflowInstanceReply
         */

        /**
         * Calls GetProcessProgress.
         * @function getProcessProgress
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @param {pbWorkflow.WorkflowService.GetProcessProgressCallback} callback Node-style callback called with the error, if any, and FindWorkflowInstanceReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.getProcessProgress = function getProcessProgress(request, callback) {
            return this.rpcCall(getProcessProgress, $root.pbcommon.IdArgs, $root.pbWorkflow.FindWorkflowInstanceReply, request, callback);
        }, "name", { value: "GetProcessProgress" });

        /**
         * Calls GetProcessProgress.
         * @function getProcessProgress
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbcommon.IIdArgs} request IdArgs message or plain object
         * @returns {Promise<pbWorkflow.FindWorkflowInstanceReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#findMyTodoTasks}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef FindMyTodoTasksCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbWorkflow.FindWorkflowTaskReply} [response] FindWorkflowTaskReply
         */

        /**
         * Calls FindMyTodoTasks.
         * @function findMyTodoTasks
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IFindWorkflowTaskArgs} request FindWorkflowTaskArgs message or plain object
         * @param {pbWorkflow.WorkflowService.FindMyTodoTasksCallback} callback Node-style callback called with the error, if any, and FindWorkflowTaskReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.findMyTodoTasks = function findMyTodoTasks(request, callback) {
            return this.rpcCall(findMyTodoTasks, $root.pbWorkflow.FindWorkflowTaskArgs, $root.pbWorkflow.FindWorkflowTaskReply, request, callback);
        }, "name", { value: "FindMyTodoTasks" });

        /**
         * Calls FindMyTodoTasks.
         * @function findMyTodoTasks
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IFindWorkflowTaskArgs} request FindWorkflowTaskArgs message or plain object
         * @returns {Promise<pbWorkflow.FindWorkflowTaskReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#findMyDoneTasks}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef FindMyDoneTasksCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbWorkflow.FindWorkflowTaskReply} [response] FindWorkflowTaskReply
         */

        /**
         * Calls FindMyDoneTasks.
         * @function findMyDoneTasks
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IFindWorkflowTaskArgs} request FindWorkflowTaskArgs message or plain object
         * @param {pbWorkflow.WorkflowService.FindMyDoneTasksCallback} callback Node-style callback called with the error, if any, and FindWorkflowTaskReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.findMyDoneTasks = function findMyDoneTasks(request, callback) {
            return this.rpcCall(findMyDoneTasks, $root.pbWorkflow.FindWorkflowTaskArgs, $root.pbWorkflow.FindWorkflowTaskReply, request, callback);
        }, "name", { value: "FindMyDoneTasks" });

        /**
         * Calls FindMyDoneTasks.
         * @function findMyDoneTasks
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IFindWorkflowTaskArgs} request FindWorkflowTaskArgs message or plain object
         * @returns {Promise<pbWorkflow.FindWorkflowTaskReply>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#completeTask}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef CompleteTaskCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls CompleteTask.
         * @function completeTask
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.ICompleteTaskArgs} request CompleteTaskArgs message or plain object
         * @param {pbWorkflow.WorkflowService.CompleteTaskCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.completeTask = function completeTask(request, callback) {
            return this.rpcCall(completeTask, $root.pbWorkflow.CompleteTaskArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "CompleteTask" });

        /**
         * Calls CompleteTask.
         * @function completeTask
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.ICompleteTaskArgs} request CompleteTaskArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#withdrawProcess}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef WithdrawProcessCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbcommon.CommonResult} [response] CommonResult
         */

        /**
         * Calls WithdrawProcess.
         * @function withdrawProcess
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IWithdrawProcessArgs} request WithdrawProcessArgs message or plain object
         * @param {pbWorkflow.WorkflowService.WithdrawProcessCallback} callback Node-style callback called with the error, if any, and CommonResult
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.withdrawProcess = function withdrawProcess(request, callback) {
            return this.rpcCall(withdrawProcess, $root.pbWorkflow.WithdrawProcessArgs, $root.pbcommon.CommonResult, request, callback);
        }, "name", { value: "WithdrawProcess" });

        /**
         * Calls WithdrawProcess.
         * @function withdrawProcess
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IWithdrawProcessArgs} request WithdrawProcessArgs message or plain object
         * @returns {Promise<pbcommon.CommonResult>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link pbWorkflow.WorkflowService#findTransitionHistory}.
         * @memberof pbWorkflow.WorkflowService
         * @typedef FindTransitionHistoryCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbWorkflow.FindWorkflowTransitionReply} [response] FindWorkflowTransitionReply
         */

        /**
         * Calls FindTransitionHistory.
         * @function findTransitionHistory
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IFindWorkflowTransitionArgs} request FindWorkflowTransitionArgs message or plain object
         * @param {pbWorkflow.WorkflowService.FindTransitionHistoryCallback} callback Node-style callback called with the error, if any, and FindWorkflowTransitionReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(WorkflowService.prototype.findTransitionHistory = function findTransitionHistory(request, callback) {
            return this.rpcCall(findTransitionHistory, $root.pbWorkflow.FindWorkflowTransitionArgs, $root.pbWorkflow.FindWorkflowTransitionReply, request, callback);
        }, "name", { value: "FindTransitionHistory" });

        /**
         * Calls FindTransitionHistory.
         * @function findTransitionHistory
         * @memberof pbWorkflow.WorkflowService
         * @instance
         * @param {pbWorkflow.IFindWorkflowTransitionArgs} request FindWorkflowTransitionArgs message or plain object
         * @returns {Promise<pbWorkflow.FindWorkflowTransitionReply>} Promise
         * @variation 2
         */

        return WorkflowService;
    })();

    return pbWorkflow;
})();

module.exports = $root;
