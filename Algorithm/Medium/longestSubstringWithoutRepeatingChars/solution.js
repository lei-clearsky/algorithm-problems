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


// Tests
lengthOfLongestSubstring("aaabbccnmopqqbbbb") // 3
lengthOfLongestSubstring("bbbbbbb") // 1