// Solution 1 - Recursive
//
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

balancedParentheses('(())'); // true
balancedParentheses('(()))'); // false
balancedParentheses('(()()'); // false
balancedParentheses('we will go to this restaurant (link)'); // true


// Solution 2
//
function balancedParentheses(string) {
  const count = string.split('').reduce((acc, val) => {
    if (val === ')') {
      acc = acc + 1;
    } else if (val === '(') {
      acc = acc - 1
    } 
    
    return acc
  }, 0)
  
  return count === 0;
}
