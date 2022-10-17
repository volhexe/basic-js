const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  s = String(n);
  arr = [];
  for(i=0;i<s.length;i++){
    n = s.indexOf(s[i]);
    s2 = s.slice(0,n)+s.slice(n+1, s.length);
    arr.push(Number(s2));
  }
  numb = Math.max.apply(null, arr);
  return numb;

}

module.exports = {
  deleteDigit
};
