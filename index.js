var SaferText = (function (exports) {
  'use strict';

  /*! (c) Andrea Giammarchi - ISC */
  var call = Function.call;
  var bind = call.bind(call.bind);
  var apply = bind(call, call.apply);
  call = bind(call, call);

  /*! (c) Andrea Giammarchi - ISC */

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

  exports.decode = decode;
  exports.encode = encode;

  return exports;

}({}));
