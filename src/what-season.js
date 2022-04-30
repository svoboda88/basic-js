function getSeason(date) {
  if (!date) { 
      return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length !== 0) {
      throw new Error(`Invalid date!`);
  }

  let monthNumber;
  if (date.getMonth() === 0) {
       monthNumber = 11;
  } else  monthNumber = date.getMonth();

  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  if (monthNumber === 0 || monthNumber === 1 || monthNumber === 11) {
      return seasons[0];
  } else if (monthNumber >=2 && monthNumber <=4) {
      return seasons[1];
  } else if (monthNumber >=5 && monthNumber <=7) {
      return seasons[2];
  } else if (monthNumber >=8 && monthNumber <11) {
      return seasons[3];
}
} 
module.exports = {
  getSeason
};
