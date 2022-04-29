const { NotImplementedError } = require('../extensions/index.js');


function countCats(param) {
  newArr = param.flat(1);
  const resultArr = newArr.filter(element => element === '^^');
  return resultArr.length;

  
}

module.exports = {
  countCats
};
