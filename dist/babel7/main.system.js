System.register('bundle', [], (function (exports) {
  'use strict';
  return {
    execute: (function () {

      exports({
        addA: addA,
        hello: hello
      });

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
      var addArray = exports('addArray', function addArray(arr) {
        if (arr === void 0) {
          arr = [];
        }

        var result = arr.reduce(function (a, b) {
          return a + b;
        }, 0);
        return result;
      });

      addArray([1, 2, 3, 4]); // console.log(res1);
      // console.log(res2);

      console.log(addA([1, 2]));

    })
  };
}));
//# sourceMappingURL=main.system.js.map
