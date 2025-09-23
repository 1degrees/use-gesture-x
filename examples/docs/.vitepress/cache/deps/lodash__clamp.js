import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// ../../node_modules/lodash.clamp/index.js
var require_lodash = __commonJS({
  "../../node_modules/lodash.clamp/index.js"(exports, module) {
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== void 0) {
          number = number <= upper ? number : upper;
        }
        if (lower !== void 0) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    function clamp(number, lower, upper) {
      if (upper === void 0) {
        upper = lower;
        lower = void 0;
      }
      if (upper !== void 0) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== void 0) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }
    module.exports = clamp;
  }
});
export default require_lodash();
//# sourceMappingURL=lodash__clamp.js.map
