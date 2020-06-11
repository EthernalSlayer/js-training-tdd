'use strict';

/*
 * Create a `words` function that takes a string
 * and return an array of each words using space as a delimiter
 *
 */

// Your code:
const words = (str) => {
    let arr = [''];
    let a = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            a++;
            arr[a] = '';
        } else {
            arr[a] += str[i];
        }
    }
    return arr;
};
//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof words, 'function');
assert.strictEqual(words.length, 1);
assert.deepStrictEqual(words('a b c'), [ 'a', 'b', 'c' ]);
assert.deepStrictEqual(words('a 1 c'), [ 'a', '1', 'c' ]);
assert.deepStrictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ]);
assert.deepStrictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol' ]);
// End of tests */
