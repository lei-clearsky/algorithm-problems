/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var map = {};
  var start = 0;
  
  return s.split('').reduce((acc, letter, i) => {
    start = map[letter] >= start ? map[letter] + 1 : start;
    map[letter] = i;

    return Math.max(acc, i - start + 1)
  }, 0);
};

function lengthOfLongestSubstring(str) {
  var max = 0;
  var start = 0;

  for (var i = 1; i <= str.length; i++) {
    var subStr = str.substring(start, i);
    if (subStr.indexOf(str.charAt(i)) !== -1) {
      if (max <= subStr.length) {
        max = subStr.length;
      }
      start = i;
    }
  }
  return max;
}

function lengthOfLongestSubstring(str) {
  var map = {};
  var start = 0;
  var max = 0;
  
  for (var i = 0; i < str.length; i++) {
    if (start <= map[str[i]]) {
      max = max > i - start ? max : i - start;
      start = i;
    }
    map[str[i]] = i;
  }
  return max;
}

// Tests
lengthOfLongestSubstring("aaabbccnmopqqbbbb") // 3
lengthOfLongestSubstring("bbbbbbb") // 1