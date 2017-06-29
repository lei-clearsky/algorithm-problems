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

// Tests
romanToInt('VII') // 7
romanToInt('XLIX') // 49 
romanToInt('XCVIII') // 98
romanToInt('DCXXI') // 621
romanToInt('MCMXCVI') // 1966