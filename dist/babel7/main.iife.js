var bundle = (function (exports) {
    'use strict';

    function hello(name) {
      var temp = "Hello, " + name + "!";
      return temp;
    }

    /**
     * Adds all the values in an array.
     * @param  {Array} arr an array of numbers
     * @return {Number}    the sum of all the array values
     */
    var addArray = function addArray(arr) {
      if (arr === void 0) {
        arr = [];
      }

      var result = arr.reduce(function (a, b) {
        return a + b;
      }, 0);
      return result;
    };

    var res1 = hello('kongzhi');
    var res2 = addArray([1, 2, 3, 4]);
    console.log(res1);
    console.log(res2);

    exports.addArray = addArray;
    exports.hello = hello;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
//# sourceMappingURL=main.iife.js.map
