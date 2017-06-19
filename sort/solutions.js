// selection sort
// loop over the positions in the array
// for each position, finds the index of
// the minimum value in the subarray and swap

function swap(arr, firstIndex, secondIndex) {
	var temp = arr[firstIndex];
	arr[firstIndex] = arr[secondIndex];
	arr[secondIndex] = temp;
}

function findMinimum(arr, startIndex) {
	var minValue = arr[startIndex]
		minIndex = startIndex;

	for (var i = startIndex + 1; i < arr.length; i++) {
		if (minValue > arr[i]) {
			minIndex = i;
			minValue = arr[i];
		}
	}

	return minIndex;
}

function selectionSort(arr) {
	for (var j = 0; j < arr.length; j++) {
		var min = findMinimum(arr, j);
		swap(arr, j, min);
	}

	return arr;
}

selectionSort([15, 3, -1, -39, 88, 0, 28]);
