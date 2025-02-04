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
//  function deleteDigit(n) {
//   let arrOfNumbers = Array.from(n.toString(), String);
//   const l= arrOfNumbers.length;
//   let newArr = [];
//   for (let i=0; i<l; i++) {
//       arrOfNumbers = Array.from(n.toString(), String);
//       arrOfNumbers.splice(i, 1);    
//       newArr.push(arrOfNumbers.join(''));
//   }
//   console.log(newArr);
//   return Math.max(...newArr);
// }

function deleteDigit(n) {
  const numberStr = n + '';
  const arr = numberStr.split('');

  const kekArr = arr.map((el, index) => {
    return Number(numberStr.slice(0, index) + numberStr.slice(index + 1, numberStr.length));
  });

  return Math.max(...kekArr)
}

module.exports = {
  deleteDigit
};
