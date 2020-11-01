const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
	let turnsNumber = Math.pow(2, disksNumber) - 1;
	let secondsNumber = Math.floor(3600 / turnsSpeed * turnsNumber);
	return {
		turns: turnsNumber,
		seconds: secondsNumber
	};
};