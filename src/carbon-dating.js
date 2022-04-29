const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(param) {
  if (isNaN(Number(param)) || param === '' || param >15 || param <=0 || typeof(param) !== 'string') {
    return false;
  }
  const numberParam = Number(param);
  const logarifm = Math.log(MODERN_ACTIVITY/numberParam);
  return Math.ceil(logarifm/(0.693/HALF_LIFE_PERIOD));
}


module.exports = {
  dateSample
};
