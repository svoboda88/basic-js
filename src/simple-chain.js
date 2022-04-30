const { NotImplementedError } = require('../extensions/index.js');


const chainMaker = {
  arrOfChains: [],
  getLength() {
      return chainMaker.arrOfChains.length;
  },
  addLink(value) {
    chainMaker.arrOfChains.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position-1 < 0 || position-1 >= chainMaker.getLength()) {
      this.arrOfChains = [];
        throw new Error(`You can't remove incorrect link!`);
    }
    chainMaker.arrOfChains.splice(position-1, 1);
        return chainMaker;
  },
  reverseChain() {
    chainMaker.arrOfChains.reverse();
     return chainMaker;

  },
  finishChain() {
      let chainString = chainMaker.arrOfChains.join('~~');
      chainMaker.arrOfChains = [];
      return chainString;
  }
};

module.exports = {
  chainMaker
};
