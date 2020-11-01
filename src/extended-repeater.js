const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	if (options.separator === undefined) options.separator = '+';
	if (options.additionSeparator === undefined) options.additionSeparator = '|';
	if (options.repeatTimes === undefined) options.repeatTimes = 1;
	if (options.additionRepeatTimes === undefined) options.additionRepeatTimes = 1;
	str = String(str);
	if (options.addition !== undefined) options.addition = String(options.addition);
	let arrAddition = [];
	for (let i = 0; i < options.additionRepeatTimes; i++) {
		arrAddition.push(options.addition);
	}
	let strAddition = arrAddition.join(options.additionSeparator);
	strAddition = str + strAddition;
	let arr = [];
	for (let i = 0; i < options.repeatTimes; i++) {
		arr.push(strAddition);
	}
	return arr.join(options.separator);
};