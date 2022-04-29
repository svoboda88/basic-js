const { NotImplementedError } = require('../extensions/index.js');

function createDreamTeam(members) {
  if(!members || !members.length) return false;
  
  const arrOfStrings = members.filter((el) => {
    return typeof el === 'string';
  }).map(el => el.replaceAll(' ', ''));

  const firstLettersArr = arrOfStrings.map((el) => el[0].toUpperCase()).sort();
  if(!firstLettersArr.length) return false

  return firstLettersArr.join('');
}

module.exports = {
  createDreamTeam
};
