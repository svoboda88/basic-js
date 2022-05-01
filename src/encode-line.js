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
  const gayArr = str.split('');

  let result = ''
  let count = 0;
  gayArr.forEach((el, i, arr) => {
      count++;
      if(arr[i + 1] !== el) {
          result += `${count === 1 ? '' : count}${el}`;
          count = 0;
      }
  });
  
  return result
}

module.exports = {
  encodeLine
};
