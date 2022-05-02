const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
 function getSumOfDigits(n) {
  const nToString = n + '';
  const nToArr = (nToString.split('')).map(el => parseInt(el, 10));
  const SumOfDigits = nToArr.reduce((acc, curr) => {
      return acc + curr;
  }, 0)

  if (SumOfDigits < 10) {
      return SumOfDigits;
  } else if (SumOfDigits >=10) {
      return getSumOfDigits(SumOfDigits);
  }


}

module.exports = {
  getSumOfDigits
};
