const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (bool) {
    if (bool === false) this.machine = 'reverse';
    else this.machine = 'direct';
  }
  encrypt(str, key) {
  	if (str === undefined || key === undefined) throw new Error('Undefined parameter');
  	str = str.toUpperCase();
  	key = key.toUpperCase();
  	this.arr = [];
  	this.j = 0;
  	for (this.i = 0; this.i < str.length; this.i++) {
  		if (this.j === key.length) key += key;
  		if (str.charCodeAt(this.i) < 65 || str.charCodeAt(this.i) > 90) this.arr.push(str[this.i]);
  		else {
  			this.arr.push(key[this.j]);
  			this.j++;
  		}
  		if (this.arr[this.i].charCodeAt(0) >= 65 && this.arr[this.i].charCodeAt(0) <= 90) {
  			this.arr[this.i] = String.fromCharCode(this.arr[this.i].charCodeAt(0) - 65 + str.charCodeAt(this.i));
  			if (this.arr[this.i].charCodeAt(0) > 90) this.arr[this.i] = String.fromCharCode(this.arr[this.i].charCodeAt(0) - 26);
  		}
  	}
    if (this.machine === 'reverse') return this.arr.reverse().join('');
  	else return this.arr.join('');
  }    
  decrypt(str, key) {
  	if (str === undefined || key === undefined) throw new Error('Undefined parameter');
  	str = str.toUpperCase();
  	key = key.toUpperCase();
  	this.arr = [];
  	this.j = 0;
  	for (this.i = 0; this.i < str.length; this.i++) {
  		if (this.j === key.length) key += key;
  		if (str.charCodeAt(this.i) < 65 || str.charCodeAt(this.i) > 90) this.arr.push(str[this.i]);
  		else {
  			this.arr.push(key[this.j]);
  			this.j++;
  		}
  		if (this.arr[this.i].charCodeAt(0) >= 65 && this.arr[this.i].charCodeAt(0) <= 90) {
  			this.arr[this.i] = String.fromCharCode(str.charCodeAt(this.i) - this.arr[this.i].charCodeAt(0) + 65);
  			if (this.arr[this.i].charCodeAt(0) < 65) this.arr[this.i] = String.fromCharCode(this.arr[this.i].charCodeAt(0) + 26);
  		}
  	}
    if (this.machine === 'reverse') return this.arr.reverse().join('');
  	return this.arr.join('');
  }
}

module.exports = VigenereCipheringMachine;