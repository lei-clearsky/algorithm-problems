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

reverse(123) // 321
reverse(-123) // -321
reverse(12345667899) // 0