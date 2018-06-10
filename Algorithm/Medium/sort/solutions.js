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

// insertion sort
// loop over items in the array
// inserting each new item to subarray before the new item

function insert(arr, rightIndex, value) {
	for (var j = rightIndex; j >= 0 && arr[j] > value; j--) {
		arr[j + 1] = arr[j];
	}
	arr[j + 1] = value;
}

function insertionSort(arr) {
	for (var i = 1; i < arr.length; i++) {
		insert(arr, i - 1, arr[i]);
	}
	return arr;
}

insertionSort([22, 11, -1, 99, 88, 9, 7, 42]);






