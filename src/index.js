import { hello, addA } from './js/moduleA.js';
import addArray from './js/moduleB.js';

const res1 = hello('kongzhi');
const res2 = addArray([1, 2, 3, 4]);

// console.log(res1);
// console.log(res2);
console.log(addA([1,2]))

export  {
    hello,
    addArray,
    addA
}