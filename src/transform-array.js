const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	let currentArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i-1] !== '--discard-next') currentArr.push(arr[i]);
		switch (arr[i]) {
			case '--discard-next':
				currentArr.pop();
			break;
			case '--discard-prev':
				currentArr.pop();
			if (arr[i-1] !== undefined && arr[i-2] !== '--discard-next') {
				currentArr.pop();
			}
			break;
			case '--double-next':
				currentArr.pop();
			if (arr[i+1] !== undefined) {
				currentArr.push(arr[i+1]);
			}
			break;
			case '--double-prev':
				currentArr.pop();
			if (arr[i-1] !== undefined && arr[i-2] !== '--discard-next') {
				currentArr.push(arr[i-1]);
			}
		}
	}
	return currentArr;
};