/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanObj = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  var arr = s.split('');

  let result = 0,
      tempResult = 0;

  for (var i = 0; i < arr.length; i++) {
    var currentValue = romanObj[arr[i]];
    var nextValue = romanObj[arr[i+1]] || 0;

    if (currentValue >= nextValue) {
      if (tempResult > 0) {
        currentValue -= tempResult;
        tempResult = 0;
      }

      result += currentValue;
    } else {
      tempResult = currentValue;
    }
  }

  return result;
};

// Solution 2
var romanToInt = function(s) {
    var result = 0;
    var index = 0;

    while (index < s.length) {
        var current = s.charAt(index);
        // check two chars (move to check combo function)
        var next = s.charAt(index + 1);
        // if satisfy add to result
        if (next && (romanMap[current] < romanMap[next])) {
            result = result + (romanMap[next] - romanMap[current]);
            // move two chars
            index = index + 2;
        } else {
            // else check one char
            // add to result
            result = result + romanMap[current];
            // move one char
            index++;
        }
    }
    // return result
    return result;
};

// create map
var romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

// Tests
romanToInt('VII') // 7
romanToInt('XLIX') // 49
romanToInt('XCVIII') // 98
romanToInt('DCXXI') // 621
romanToInt('MCMXCVI') // 1966
