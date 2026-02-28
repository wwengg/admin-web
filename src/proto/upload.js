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

$root.pbupload = (function() {

    /**
     * Namespace pbupload.
     * @exports pbupload
     * @namespace
     */
    var pbupload = {};

    pbupload.GetPreSignUploadUrlArgs = (function() {

        /**
         * Properties of a GetPreSignUploadUrlArgs.
         * @memberof pbupload
         * @interface IGetPreSignUploadUrlArgs
         * @property {string|null} [fileName] GetPreSignUploadUrlArgs fileName
         */

        /**
         * Constructs a new GetPreSignUploadUrlArgs.
         * @memberof pbupload
         * @classdesc Represents a GetPreSignUploadUrlArgs.
         * @implements IGetPreSignUploadUrlArgs
         * @constructor
         * @param {pbupload.IGetPreSignUploadUrlArgs=} [properties] Properties to set
         */
        function GetPreSignUploadUrlArgs(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPreSignUploadUrlArgs fileName.
         * @member {string} fileName
         * @memberof pbupload.GetPreSignUploadUrlArgs
         * @instance
         */
        GetPreSignUploadUrlArgs.prototype.fileName = "";

        /**
         * Creates a new GetPreSignUploadUrlArgs instance using the specified properties.
         * @function create
         * @memberof pbupload.GetPreSignUploadUrlArgs
         * @static
         * @param {pbupload.IGetPreSignUploadUrlArgs=} [properties] Properties to set
         * @returns {pbupload.GetPreSignUploadUrlArgs} GetPreSignUploadUrlArgs instance
         */
        GetPreSignUploadUrlArgs.create = function create(properties) {
            return new GetPreSignUploadUrlArgs(properties);
        };

        /**
         * Encodes the specified GetPreSignUploadUrlArgs message. Does not implicitly {@link pbupload.GetPreSignUploadUrlArgs.verify|verify} messages.
         * @function encode
         * @memberof pbupload.GetPreSignUploadUrlArgs
         * @static
         * @param {pbupload.IGetPreSignUploadUrlArgs} message GetPreSignUploadUrlArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPreSignUploadUrlArgs.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fileName != null && Object.hasOwnProperty.call(message, "fileName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fileName);
            return writer;
        };

        /**
         * Encodes the specified GetPreSignUploadUrlArgs message, length delimited. Does not implicitly {@link pbupload.GetPreSignUploadUrlArgs.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbupload.GetPreSignUploadUrlArgs
         * @static
         * @param {pbupload.IGetPreSignUploadUrlArgs} message GetPreSignUploadUrlArgs message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPreSignUploadUrlArgs.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPreSignUploadUrlArgs message from the specified reader or buffer.
         * @function decode
         * @memberof pbupload.GetPreSignUploadUrlArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbupload.GetPreSignUploadUrlArgs} GetPreSignUploadUrlArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPreSignUploadUrlArgs.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbupload.GetPreSignUploadUrlArgs();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.fileName = reader.string();
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
         * Decodes a GetPreSignUploadUrlArgs message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbupload.GetPreSignUploadUrlArgs
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbupload.GetPreSignUploadUrlArgs} GetPreSignUploadUrlArgs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPreSignUploadUrlArgs.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPreSignUploadUrlArgs message.
         * @function verify
         * @memberof pbupload.GetPreSignUploadUrlArgs
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPreSignUploadUrlArgs.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fileName != null && message.hasOwnProperty("fileName"))
                if (!$util.isString(message.fileName))
                    return "fileName: string expected";
            return null;
        };

        /**
         * Creates a GetPreSignUploadUrlArgs message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbupload.GetPreSignUploadUrlArgs
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbupload.GetPreSignUploadUrlArgs} GetPreSignUploadUrlArgs
         */
        GetPreSignUploadUrlArgs.fromObject = function fromObject(object) {
            if (object instanceof $root.pbupload.GetPreSignUploadUrlArgs)
                return object;
            var message = new $root.pbupload.GetPreSignUploadUrlArgs();
            if (object.fileName != null)
                message.fileName = String(object.fileName);
            return message;
        };

        /**
         * Creates a plain object from a GetPreSignUploadUrlArgs message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbupload.GetPreSignUploadUrlArgs
         * @static
         * @param {pbupload.GetPreSignUploadUrlArgs} message GetPreSignUploadUrlArgs
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPreSignUploadUrlArgs.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.fileName = "";
            if (message.fileName != null && message.hasOwnProperty("fileName"))
                object.fileName = message.fileName;
            return object;
        };

        /**
         * Converts this GetPreSignUploadUrlArgs to JSON.
         * @function toJSON
         * @memberof pbupload.GetPreSignUploadUrlArgs
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPreSignUploadUrlArgs.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetPreSignUploadUrlArgs
         * @function getTypeUrl
         * @memberof pbupload.GetPreSignUploadUrlArgs
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetPreSignUploadUrlArgs.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbupload.GetPreSignUploadUrlArgs";
        };

        return GetPreSignUploadUrlArgs;
    })();

    pbupload.GetPreSignUploadUrlReply = (function() {

        /**
         * Properties of a GetPreSignUploadUrlReply.
         * @memberof pbupload
         * @interface IGetPreSignUploadUrlReply
         * @property {pbcommon.EnumCode|null} [code] GetPreSignUploadUrlReply code
         * @property {string|null} [msg] GetPreSignUploadUrlReply msg
         * @property {string|null} [url] GetPreSignUploadUrlReply url
         * @property {string|null} [baseUrl] GetPreSignUploadUrlReply baseUrl
         */

        /**
         * Constructs a new GetPreSignUploadUrlReply.
         * @memberof pbupload
         * @classdesc Represents a GetPreSignUploadUrlReply.
         * @implements IGetPreSignUploadUrlReply
         * @constructor
         * @param {pbupload.IGetPreSignUploadUrlReply=} [properties] Properties to set
         */
        function GetPreSignUploadUrlReply(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetPreSignUploadUrlReply code.
         * @member {pbcommon.EnumCode} code
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @instance
         */
        GetPreSignUploadUrlReply.prototype.code = 0;

        /**
         * GetPreSignUploadUrlReply msg.
         * @member {string} msg
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @instance
         */
        GetPreSignUploadUrlReply.prototype.msg = "";

        /**
         * GetPreSignUploadUrlReply url.
         * @member {string} url
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @instance
         */
        GetPreSignUploadUrlReply.prototype.url = "";

        /**
         * GetPreSignUploadUrlReply baseUrl.
         * @member {string} baseUrl
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @instance
         */
        GetPreSignUploadUrlReply.prototype.baseUrl = "";

        /**
         * Creates a new GetPreSignUploadUrlReply instance using the specified properties.
         * @function create
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @static
         * @param {pbupload.IGetPreSignUploadUrlReply=} [properties] Properties to set
         * @returns {pbupload.GetPreSignUploadUrlReply} GetPreSignUploadUrlReply instance
         */
        GetPreSignUploadUrlReply.create = function create(properties) {
            return new GetPreSignUploadUrlReply(properties);
        };

        /**
         * Encodes the specified GetPreSignUploadUrlReply message. Does not implicitly {@link pbupload.GetPreSignUploadUrlReply.verify|verify} messages.
         * @function encode
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @static
         * @param {pbupload.IGetPreSignUploadUrlReply} message GetPreSignUploadUrlReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPreSignUploadUrlReply.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
            if (message.baseUrl != null && Object.hasOwnProperty.call(message, "baseUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.baseUrl);
            return writer;
        };

        /**
         * Encodes the specified GetPreSignUploadUrlReply message, length delimited. Does not implicitly {@link pbupload.GetPreSignUploadUrlReply.verify|verify} messages.
         * @function encodeDelimited
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @static
         * @param {pbupload.IGetPreSignUploadUrlReply} message GetPreSignUploadUrlReply message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetPreSignUploadUrlReply.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetPreSignUploadUrlReply message from the specified reader or buffer.
         * @function decode
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pbupload.GetPreSignUploadUrlReply} GetPreSignUploadUrlReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPreSignUploadUrlReply.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pbupload.GetPreSignUploadUrlReply();
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
                        message.url = reader.string();
                        break;
                    }
                case 4: {
                        message.baseUrl = reader.string();
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
         * Decodes a GetPreSignUploadUrlReply message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {pbupload.GetPreSignUploadUrlReply} GetPreSignUploadUrlReply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetPreSignUploadUrlReply.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetPreSignUploadUrlReply message.
         * @function verify
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetPreSignUploadUrlReply.verify = function verify(message) {
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
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            if (message.baseUrl != null && message.hasOwnProperty("baseUrl"))
                if (!$util.isString(message.baseUrl))
                    return "baseUrl: string expected";
            return null;
        };

        /**
         * Creates a GetPreSignUploadUrlReply message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {pbupload.GetPreSignUploadUrlReply} GetPreSignUploadUrlReply
         */
        GetPreSignUploadUrlReply.fromObject = function fromObject(object) {
            if (object instanceof $root.pbupload.GetPreSignUploadUrlReply)
                return object;
            var message = new $root.pbupload.GetPreSignUploadUrlReply();
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
            if (object.url != null)
                message.url = String(object.url);
            if (object.baseUrl != null)
                message.baseUrl = String(object.baseUrl);
            return message;
        };

        /**
         * Creates a plain object from a GetPreSignUploadUrlReply message. Also converts values to other types if specified.
         * @function toObject
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @static
         * @param {pbupload.GetPreSignUploadUrlReply} message GetPreSignUploadUrlReply
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetPreSignUploadUrlReply.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "None" : 0;
                object.msg = "";
                object.url = "";
                object.baseUrl = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.pbcommon.EnumCode[message.code] === undefined ? message.code : $root.pbcommon.EnumCode[message.code] : message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            if (message.baseUrl != null && message.hasOwnProperty("baseUrl"))
                object.baseUrl = message.baseUrl;
            return object;
        };

        /**
         * Converts this GetPreSignUploadUrlReply to JSON.
         * @function toJSON
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetPreSignUploadUrlReply.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetPreSignUploadUrlReply
         * @function getTypeUrl
         * @memberof pbupload.GetPreSignUploadUrlReply
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetPreSignUploadUrlReply.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pbupload.GetPreSignUploadUrlReply";
        };

        return GetPreSignUploadUrlReply;
    })();

    pbupload.Upload = (function() {

        /**
         * Constructs a new Upload service.
         * @memberof pbupload
         * @classdesc Represents an Upload
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Upload(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Upload.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Upload;

        /**
         * Creates new Upload service using the specified rpc implementation.
         * @function create
         * @memberof pbupload.Upload
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Upload} RPC service. Useful where requests and/or responses are streamed.
         */
        Upload.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link pbupload.Upload#getPreSignUploadUrl}.
         * @memberof pbupload.Upload
         * @typedef GetPreSignUploadUrlCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {pbupload.GetPreSignUploadUrlReply} [response] GetPreSignUploadUrlReply
         */

        /**
         * Calls GetPreSignUploadUrl.
         * @function getPreSignUploadUrl
         * @memberof pbupload.Upload
         * @instance
         * @param {pbupload.IGetPreSignUploadUrlArgs} request GetPreSignUploadUrlArgs message or plain object
         * @param {pbupload.Upload.GetPreSignUploadUrlCallback} callback Node-style callback called with the error, if any, and GetPreSignUploadUrlReply
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Upload.prototype.getPreSignUploadUrl = function getPreSignUploadUrl(request, callback) {
            return this.rpcCall(getPreSignUploadUrl, $root.pbupload.GetPreSignUploadUrlArgs, $root.pbupload.GetPreSignUploadUrlReply, request, callback);
        }, "name", { value: "GetPreSignUploadUrl" });

        /**
         * Calls GetPreSignUploadUrl.
         * @function getPreSignUploadUrl
         * @memberof pbupload.Upload
         * @instance
         * @param {pbupload.IGetPreSignUploadUrlArgs} request GetPreSignUploadUrlArgs message or plain object
         * @returns {Promise<pbupload.GetPreSignUploadUrlReply>} Promise
         * @variation 2
         */

        return Upload;
    })();

    return pbupload;
})();

module.exports = $root;
