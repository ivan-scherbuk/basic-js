const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let dreamTeam = '';
  let arr = [];
  if (Array.isArray(members) === false) return false;
  for (let i = 0; i < members.length; i++) {
  	if (typeof(members[i]) === 'string') {
  		arr.push(members[i].trim().toLowerCase());
  	}
  }
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
  	dreamTeam += arr[i].slice(0, 1);
  }
  if (dreamTeam === '') return false;
  return dreamTeam.toUpperCase();
};