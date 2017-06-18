function balancedParentheses(chars) {
	var charsArr = chars.split('');

	return check(charsArr, 0) === 0;
}

function check(charsArr, count) {
	if (charsArr.length === 0 || count < 0) {
		return count;
	} else if (charsArr[0] === ')') {
		return check(charsArr.slice(1), count - 1);
	} else if (charsArr[0] === '(') {
		return check(charsArr.slice(1), count + 1);
	} else {
		return check(charsArr.slice(1), count);
	}
}

balancedParentheses('(())'); // false
balancedParentheses('(()))'); // true
balancedParentheses('(()()'); // false
balancedParentheses('we will go to this restaurant (link)'); // true