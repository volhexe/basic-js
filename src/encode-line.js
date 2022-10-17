const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
 str1 = ""; num = 0; 
  for(i=0;i<str.length;i++){
    if(str[i]!=str[i+1])
      if(num)
      {str1 = str1 + (num + 1) + str[i]; num = 0}
      else str1 = str1 + str[i]
    else num++;  
  }
   return str1;
}

module.exports = {
  encodeLine
};
