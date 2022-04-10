import { hello } from './js/a';
import addArray from './js/b';

const res1 = hello('kongzhi');
const res2 = addArray([1, 2, 3, 4]);

console.log(res1);
console.log(res2);

export  {
    hello,
    addArray
}