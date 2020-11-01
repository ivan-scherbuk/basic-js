const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date !== 'object') return 'Unable to determine the time of year!';
  let checkFake = Date.now() - date;
  let result = new Date(date);
  let month = result.getMonth();
  if (month === 11 || month === 0 || month === 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'fall';
  throw new Error ('THROWN');
};