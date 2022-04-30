const { NotImplementedError } = require('../extensions/index.js');


 function calculateHanoi(disksNumber, turnsSpeed) {
  turnsNumber = Math.pow(2, disksNumber) - 1;
  
  secondsNumber = Math.floor(3600*turnsNumber/turnsSpeed);
  const resultObj = {};
  resultObj.turns = turnsNumber;
  resultObj.seconds = secondsNumber;

  return resultObj;
  
  
}

module.exports = {
  calculateHanoi
};
