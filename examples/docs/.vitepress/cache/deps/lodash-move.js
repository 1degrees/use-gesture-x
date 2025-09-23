import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// ../../node_modules/lodash-move/lib/index.js
var require_lib = __commonJS({
  "../../node_modules/lodash-move/lib/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = move;
    function _toConsumableArray(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      } else {
        return Array.from(arr);
      }
    }
    function move(array, moveIndex, toIndex) {
      var item = array[moveIndex];
      var length = array.length;
      var diff = moveIndex - toIndex;
      if (diff > 0) {
        return [].concat(_toConsumableArray(array.slice(0, toIndex)), [item], _toConsumableArray(array.slice(toIndex, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, length)));
      } else if (diff < 0) {
        return [].concat(_toConsumableArray(array.slice(0, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, toIndex + 1)), [item], _toConsumableArray(array.slice(toIndex + 1, length)));
      }
      return array;
    }
  }
});
export default require_lib();
//# sourceMappingURL=lodash-move.js.map
