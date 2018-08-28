function reverse(x) {
  	return x < 0 ? -1 * reverseJustNum(x, 1) : reverseJustNum(x, 0)
}

function reverseJustNum(num, x) {
  	const result = +num.toString().slice(x).split('').reverse().join('');
  
  	return isLessThan32bit(result) ? result : 0;
}

function isLessThan32bit(num) {
	return num < 2147483647 ? true : false;
}

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {  
    var totalDigits = Math.abs(x).toString().length;
    var output = 0;
    while(totalDigits > 0) {
      var temp = x % 10;
      output += temp * Math.pow(10, totalDigits - 1);
      x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
      totalDigits--;
    }
    if (Math.abs(output) > Math.pow(2,31) - 1) return 0;
    return output;
};

reverse(123) // 321
reverse(-123) // -321
reverse(12345667899) // 0