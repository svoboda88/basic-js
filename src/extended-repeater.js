
function repeater(str, options) {

  const additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
  
  const subArr= new Array(options.additionRepeatTimes);
  const subStr = subArr.fill(options.addition === null ? 'null': options.addition, 0, options.additionRepeatTimes).join(`${additionSeparator}`);
  const resultSubStr = str + subStr;
  
  const lastArr = new Array(options.repeatTimes);

  const separator = options.separator ? options.separator : '+'

  const lastStr = lastArr.fill(resultSubStr, 0, options.repeatTimes).join(`${separator}`);
  return lastStr;
}


module.exports = {
  repeater
};

