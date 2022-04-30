 function transform(arr) {
  if (!Array.isArray(arr)) {
      throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  return arr.reduce((acc, curr, index, arr) => {
      const newArr = [...acc, curr];
      if(arr[index - 1] === '--discard-next' && arr[index + 1] === '--double-prev') {
        newArr.pop();
        return newArr;
      };

      if(arr[index - 1] === '--discard-next' || arr[index + 1] === '--discard-prev') newArr.pop();

      if(arr[index - 1] === '--double-next') newArr.push(curr);

      if(arr[index + 1] === '--double-prev') newArr.push(curr);

      return newArr;
  }, []).filter((element) => !['--discard-prev', '--discard-next', '--double-next', '--double-prev' ].some((val) => val === element ));

}

module.exports = {
  transform
};
