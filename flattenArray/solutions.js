// solution 1
function flatten(arr, flattenedArr) {
	if (flattenedArr === undefined) {
		flattenedArr = [];
	}

	for (var i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			flatten(arr[i], flattenedArr);
		} else {
			flattenedArr.push(arr[i]);
		}
	}

	return flattenedArr;
}

// solution 2
function flatten(arr) {
	return arr.reduce(function(acc, val) {
		return acc.concat(Array.isArray(val) ? flatten(val) : val);
	}, []);
}

flatten([1, 2, 3, [4, 5, [6, 7]]]);
