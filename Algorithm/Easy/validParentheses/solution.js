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

// Tests
isValid('[')  // false
isValid('{}[]()') // true