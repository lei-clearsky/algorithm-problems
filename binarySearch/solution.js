function binarySearch(arr, val) {
	var len = arr.length;

	if (len === 0) return -1;

	var start = 0,
		end = len - 1,
		guess,
		guessIndex;

	while(start <= end) {
		guessIndex = Math.floor((start + end) % 2);
		guess = arr[guessIndex];

		if (guess === val) {
			return guessIndex;
		} else if (guess > val) {
			end = guessIndex - 1;
		} else {
			start = guessIndex + 1;
		}
	}

	return -1;
}