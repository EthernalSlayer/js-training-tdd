'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
const keepFirst = (str) => {
    let newStr = '';
    for (let i = 0; i < 2; i++) {
        newStr += str[i];
    }
    return newStr;
};

const keepFirstLast = (str) => {
    let newStr = '';
    for (let i = 2; i < 4; i++) {
        if (str[i] !== undefined)
        newStr += str[i];
    }
    return newStr;
};

const keepLast = (str) => {
    let newStr = '';
    for (let i = str.length - 2; i < str.length; i++) {
        newStr += str[i];
    }
    return newStr;
};

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof keepFirst, 'function');
assert.strictEqual(keepFirst.length, 1);
assert.strictEqual(keepFirst('lol'), 'lo');
assert.strictEqual(keepFirst('1234'), '12');

assert.strictEqual(typeof keepLast, 'function');
assert.strictEqual(keepLast.length, 1);
assert.strictEqual(keepLast('lol'), 'ol');
assert.strictEqual(keepLast('1234'), '34');

assert.strictEqual(typeof keepFirstLast, 'function');
assert.strictEqual(keepFirstLast.length, 1);
assert.strictEqual(keepFirstLast('lol'), 'l');
assert.strictEqual(keepFirstLast('1234'), '34');

//assert.fail('You must write your own tests');
// End of tests */
