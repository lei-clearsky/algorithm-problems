// Solution 1: Find each prime number, slow
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var count = 0;

  for (var i = 2; i < n; i++) {
    if (checkPrime(i)) {
      count++;
    }
  }

  return count;
};

var checkPrime = function(n) {

  if (n === 2 || n === 3) {
    return true;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  var i = 5;
  var j = 2;
  while (i * i <= n) {
    if (n % i === 0) {
      return false;
    } else {
      i += j;
      j = 6 - j;
    }
  }

  return true;
}

// Solution 2: Cache all multiples, fast
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes2 = function(n) {
  var isPrime = Array(n).fill(true);
  var count = 0;
  for (var i = 2; i < n; i++) {
    console.log('loop-------------');
    if (isPrime[i]) {
      for (var j = 2; j * i < n; j++) {
        console.log('check!!! ', j, i, j*i);
        isPrime[j*i] = false;
      }
      count++;
    }
  }
  return count;
}
