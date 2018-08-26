/**
 * @param {string} s
 * @return {string}
*/
var reverseStr = function(s) {
  if (s === '') return s;

  return s.split('').reverse().join('');
}

/**
 * @param {string} s
 * @return {string}
*/
var reverseStrV2 = function(s) {
  if (s === '') return s;

  var reversedStr = '';
  var i = s.length - 1;
  while (i >= 0) {
    reversedStr += s[i];
    i--;
  }
  return reversedStr;
}

/**
 * @param {string} s
 * @return {string}
*/
var reverseStrV3 = function(s) {
  if (s === '') return s;

  return s.split('').reverse().reduce(function(acc, current){
    return acc += current;
  }, '');
}
