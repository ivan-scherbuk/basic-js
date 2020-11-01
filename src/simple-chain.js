const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  str: '',
  getLength() {
    return this.arr.join('~~').length;
  },
  addLink(value) {
    if (value === undefined) this.arr.push('()');
    else this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position < 0 || position > this.arr.length) {
      this.arr = [];
      throw new Error;
    }
    else this.arr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    this.str = this.arr.join('~~');
    this.arr = [];
    return this.str;
  }
};

module.exports = chainMaker;