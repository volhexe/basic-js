const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2) {
  num = 0;
  l = s2.length;
  for(i=0;i<l;i++){

    if(s2.indexOf(s1[i])!=-1){      
      n = s2.indexOf(s1[i]);
      s2 = s2.slice(0,n)+s2.slice(n+1, s2.length);
      num++;      
  }
}
  return num;
}

module.exports = {
  getCommonCharacterCount
};
