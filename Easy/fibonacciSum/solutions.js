// Solution 1:
// non recursive
// 1, 1, 2, 3, 5, 8, 13, 21
function fib(n) {
	if (n < 2) {
		return n;
	}

	var sum = 1;
	var prev1 = 1, prev2 = 0; 
	
	for (var i = 1; i < n; i++) {
		sum = prev1 + prev2;
		prev2 = prev1;
		prev1 = sum;
	}

	return sum;
}

// Solution 2:
// recursive
function fibR(n) {
	if (n < 2) {
		return n;
	}

	return fib(n - 1) + fib(n - 2);
}

// Solution 3.1:
// memorization solution 1
var fibM = (function(){
  var m = [0, 1];

  var fib = function(n) {
    var result = m[n];

    if(typeof result !== 'number') {
      result = fib(n-1) + fib(n-2);
      m[n] = result;
    }
    
    return result;
  }

  return fib;
})();

// Solution 3.2:
// memorization solution 2
function fibMem(num, mem) {
  mem = mem || {}
  
  if (mem[num]) return mem[num];
  
  if (num <= 1) return num;
  
  return fibMem(num-1, mem) + fibMem(num-2, mem);
}

module.exports = {
  fibonacciSum: fib,
  fibonacciSumRecursion: fibR,
  fibonacciSumMemorization: fibMem
}
