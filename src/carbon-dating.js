const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
	return false;
	return Math.ceil(Math.log(MODERN_ACTIVITY/+str)*HALF_LIFE_PERIOD/0.693);
};