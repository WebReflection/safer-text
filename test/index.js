const {encode, decode} = require('../cjs');

const str = 'some text';
const encoded = encode(str);

console.assert(decode(encoded) === str);
console.assert(decode(encoded, 'utf-8') === str);
console.assert(decode(encoded, 'utf-8', {fatal: true}) === str);

try {
  decode(str, 'utf-8', {fatal: true});
  console.assert(false, 'this should not happen');
} catch(e) {
  console.log('OK: ' + e.message);
}
