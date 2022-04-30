const { NotImplementedError } = require('../extensions/index.js');


class DepthCalculator {
    calculateDepth(arr){
      if(!Array.isArray(arr))  return 0;

      return arr.reduce((currLevel, el) =>  Math.max(currLevel, this.calculateDepth(el)), 0) + 1;
  } 
}


module.exports = {
  DepthCalculator
};
