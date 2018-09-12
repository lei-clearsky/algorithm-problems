/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const paranthesesObj = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const symbolsArray = s.split('');
    const queue = [];

    for (var i = 0; i < symbolsArray.length; i++) {
      if (paranthesesObj[symbolsArray[i]] === undefined) {
        queue.push(symbolsArray[i])
      } else if (queue[queue.length-1] === paranthesesObj[symbolsArray[i]]) {
        queue.pop()
      } else {
        queue.push(symbolsArray[i])
      }
    }

    return queue.length === 0
};

// Solution 2
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];

    for (var i = 0; i < s.length; i++) {
        if (parenthesesMap[s[i]]) {
            stack.push(s[i]);
        } else if (parenthesesMap[stack.pop()] !== s[i]) {
            return false;
        }
    }

    return stack.length === 0;
};

var parenthesesMap = {
    '[': ']',
    '(': ')',
    '{': '}'
}

// Tests
isValid('[')  // false
isValid('{}[]()') // true
