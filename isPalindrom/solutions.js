// Solution 1:
// loop half of the string, if first half and last half
// if all the same then is trusy, else is falsy
function isPalindrom(str) {
	var length = str.length();

	if (length === 1) {
		return true;
	}

	for (var i = 0; i < length / 2; i++) {
		if (str[i] !== str[length - 1 - i]) {
			return false;
		}
	}	

	return true;
}

// Solution 2:
// recursion
function isPalindromRecursion(str) {
	var length = str.length();

	if (length < 2) {
		return true;
	}

	if (str[0] === str[length - 1]) {
		return isPalindromRecursion(str.slice(1, length - 1));
	}

	return false;
}