function sumArray(arr) {
	return arr.reduce((acc, item) => acc += item);
}

function findSubArray(arr, num) {
	var startIndex = 0;
	var endIndex = 1;
	var tempSum;

	while (startIndex < endIndex) {
		tempSum = sumArray(arr.slice(startIndex, endIndex));

		if (tempSum === num) {
			break;
		} else if (tempSum < num) {
			endIndex++;
		} else {
			startIndex++
		}

		if (startIndex === endIndex) return -1;
	}

	return arr.slice(startIndex, endIndex);
}

// Tests

var arr1 = [3, 5, 7, 9, 10, 90, 100, 130, 140, 161, 170]

findSubArray(arr1, 3) // [ 3 ]
findSubArray(arr1, 19) // [9, 10]
findSubArray(arr1, 200) // [10, 90, 100 ]
findSubArray(arr1, 170) // [ 170 ]
findSubArray(arr1, 331) // [ 161, 170 ]
findSubArray(arr1, 11) // -1