/*! (c) Andrea Giammarchi - ISC */
var SaferText=function(e){"use strict";var o=Function.call,n=o.bind(o.bind);n(o,o.apply);o=n(o,o);const{encode:c,decode:d}=((e,n)=>{const{encode:c}=e.prototype,{decode:d}=n.prototype;return{encode:n=>o(c,new e,n),decode:(e,c,t)=>o(d,new n(c||"utf-8",t||{}),e)}})(TextEncoder,TextDecoder);return e.decode=d,e.encode=c,e}({});
