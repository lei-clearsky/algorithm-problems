// 1. find the length of the number where the nth digit is from
// 2. find the actual number where the nth digit is from
// 3. find the nth digit and return

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    var lengthOfNDigit = 1;
    var count = 9;
    var start = 1;
    
    while (n > lengthOfNDigit * count) {
        n -= lengthOfNDigit * count;
        lengthOfNDigit += 1;
        count *= 10;
        start *= 10;
    }

    start += (n-1) / lengthOfNDigit;
	
    var str = start.toString();
    var char = str.charAt((n-1) % lengthOfNDigit);
    
    return parseInt(char);
};