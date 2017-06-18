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
function fib(n) {
	if (n < 2) {
		return n;
	}

	return fib(n - 1) + fib(n - 2);
}