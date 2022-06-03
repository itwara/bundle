(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.bundle = {}));
})(this, (function (exports) { 'use strict';

  /**
   * Adds all the values in an array.
   * @param  {Array} arr an array of numbers
   * @return {Number}    the sum of all the array values
   */
  function addA(arr) {
    if (arr === void 0) {
      arr = [];
    }

    var result = arr.reduce(function (a, b) {
      return a + b;
    }, 0);
    return result;
  }

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

  addArray([1, 2, 3, 4]); // console.log(res1);
  // console.log(res2);

  console.log(addA([1, 2]));

  exports.addA = addA;
  exports.addArray = addArray;
  exports.hello = hello;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=main.umd.js.map
