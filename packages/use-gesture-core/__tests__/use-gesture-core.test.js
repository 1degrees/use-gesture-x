'use strict';

const useGestureCore = require('..');
const assert = require('assert').strict;

assert.strictEqual(useGestureCore(), 'Hello from useGestureCore');
console.info('useGestureCore tests passed');
