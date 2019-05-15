# safer-text

[![Build Status](https://travis-ci.com/WebReflection/safer-text.svg?branch=master)](https://travis-ci.com/WebReflection/safer-text) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/safer-text/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/safer-text?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)


A safer `encode` and `decode` from `TextEncoder` and `TextDecoder`.

```js
// once imported
import {encode, decode} from 'safer-text';

const encoded = encode('something');

console.log(decode(encoded)); // something
console.log(decode(encoded, 'utf-8')); // something
console.log(decode(encoded, 'utf-8', {fatal: true})); // something

```
