'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (str) => {
    let newStr = '';
    for (let i = 2; i < str.length; i++) {
        newStr += str[i];
    }
    return newStr;
};

const cutLast = (str) => {
    let newStr = '';
    for (let i = 0; i < str.length - 2; i++) {
        newStr += str[i];
    }
    return newStr;
};

const cutFirstLast = (str) => {
    let newStr = '';
    for (let i = 2; i < str.length - 2; i++) {
        newStr += str[i];
    }
    return newStr;
};

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.strictEqual(cutFirst('toto'), 'to');
assert.strictEqual(cutFirst('hahaha'), 'haha');
assert.strictEqual(cutFirst('123'), '3');

assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(cutLast.length, 1);
assert.strictEqual(cutLast('toto'), 'to');
assert.strictEqual(cutLast('saturn'), 'satu');
assert.strictEqual(cutLast('123'), '1');

assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirstLast.length, 1);
assert.strictEqual(cutFirstLast('toto'), '');
assert.strictEqual(cutFirstLast('saturn'), 'tu');
assert.strictEqual(cutFirstLast('123'), '');
assert.strictEqual(cutFirstLast('history'), 'sto');

//assert.fail('You must write your own tests');
// End of tests */
