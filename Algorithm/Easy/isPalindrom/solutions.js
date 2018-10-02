// Solution 1:
// loop half of the string, if first half and last half
// if all the same then is trusy, else is falsy
function isPalindrom(words) {
	var str = words.replace(/[\W_]/g, '').toLowerCase();
	var length = str.length;

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
function isPalindromRecursion(words) {
	var str = words.replace(/[\W_]/g, '').toLowerCase();
	var length = str.length;

	if (length < 2) {
		return true;
	}

	if (str[0] === str[length - 1]) {
		return isPalindromRecursion(str.slice(1, length - 1));
	}

	return false;
}

/*
A simpler solution that I have seen proposed is to
1. remove all non-word characters from the string (such as spaces and punctuation) and lower-case all characters
2. make a copy of the revised string
3. convert it to an array w/split('')
4. reverse it
5. convert it back into a string w/join()
6. then compare it to the original

I had forgotten before seeing this that a palindrome is not just a word or phrase which is mirrored down the middle,
but also a word or phrase that when reversed has all the same characters in the same order!
*/

function isPalindromeViaReversal(str) {
    str = str.replace(/[\W_]/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}

/**
 * Solution 1: Convert numbers to string
 * @param {number} x
 * @return {boolean}
 */
var isPalindromNum = function(x) {
    var str = x.toString();
    if (str.length < 2) return true;

    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }

    return true;
};

/**
 * Solution 2: Without Converting numbers to string
 * @param {number} x
 * @return {boolean}
 */
function numDigits(x) {
  return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}

var isPalindromNum = function(x) {
    if (x < 0) return false;

    var num = numDigits(x);

    if (num < 2) return true;

    while (num > 1) {
      var last = x % 10;
      var first = Math.floor(x / Math.pow(10, num - 1));

      if (last !== first) return false;

      x = x - first * (Math.pow(10, num - 1));
      x = Math.floor(x / 10);
      num = num - 2;
    }

    return true;
};

module.exports = {
	isPalindrom: isPalindrom,
	isPalindromRecursion: isPalindromRecursion,
	isPalindromeViaReversal: isPalindromeViaReversal
};
