// Solution 1
// This solution times out when the string is long.
// 
function isPalindrome(str) {  
  for (var i = 0; i < Math.floor(str.length/2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  
  return true;
}

function longestPalStr(str) {
  var longestStr = '';

  while (str.length > 0) {
    if (isPalindrome(str) && str.length > longestStr.length) {
      longestStr = str;
      break;
    }
    
    str = str.slice(0, str.length - 1)
  }
  
  return longestStr;
}

/**
 * @param {string} str
 * @return {string}
 */
function longestPalindrome(str) {
  if (str.length === 0) return '';
  if (str.length === 1) return str;
    
  var longestPal = '';
  
  for (var i = 0; i < str.length; i++) {
    if (str.length < longestPal.length) {
      return longestPal;
    }
      
    let tempStr = longestPalStr(str.slice(i, str.length));

    if (tempStr.length > longestPal.length) {
      longestPal = tempStr;
    }
  }
  
  return longestPal;
}


// Solution 2
// Works with long strings
function longestPalindrome(s) {
  var result = '';
  var currLen = 0;
  
  for (var i = 0; i < s.length; i++) {
    if (isPalindrome(s, i - currLen - 1, i)) {
      result = s.substring(i - currLen - 1, i + 1);
      currLen = currLen + 2;
    } else if (isPalindrome(s, i - currLen, i)) {
      result = s.substring(i - currLen, i + 1);
      currLen = currLen + 1;
    }
  }
  
  return result;
}

function isPalindrome(str, beginIndex, endIndex) {
  if (beginIndex < 0) return false;
  
  while (beginIndex < endIndex) {
    if (str.charAt(beginIndex++) !== str.charAt(endIndex--)) return false;
  }
  
  return true;
}