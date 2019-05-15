'use strict';
/*! (c) Andrea Giammarchi - ISC */

const {call} = require('safer-function');

const {encode, decode} = ((TE, TD) => {
  const {encode} = TE.prototype;
  const {decode} = TD.prototype;
  return {
    encode: value => call(encode, new TE, value),
    decode: (value, label, options) => call(
      decode,
      new TD(label || 'utf-8', options || {}),
      value
    ),
  };
})(TextEncoder, TextDecoder);

exports.encode = encode;
exports.decode = decode;
