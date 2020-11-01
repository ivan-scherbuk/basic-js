const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    this.counter = 0;
  	for (this.i = 0; this.i < arr.length; this.i++) {
      if (Array.isArray(arr[this.i]) === false) {
        arr.splice(this.i, 1); 
        this.i--;
      } else {
        arr[this.i] = JSON.stringify(arr[this.i]);
        if (arr[this.i].match(/\[/g).length > this.counter) this.counter = arr[this.i].match(/\[/g).length;
      }
    }
    return ++this.counter;
  }
};