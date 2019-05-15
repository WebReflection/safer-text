/*! (c) Andrea Giammarchi - ISC */

import {call} from 'safer-function';

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

export {encode, decode};
