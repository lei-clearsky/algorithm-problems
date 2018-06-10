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


// Same implementation, but used different variable names which helped me better understand the function logic
//
function binaryIndexOf(arr, searchElement) {
  
  var minIndex = 0;
  var maxIndex = arr.length - 1;
  var currentIndex;
  var currentElement;
   
  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = arr[currentIndex];
    
    if (currentElement > searchElement) {
      maxIndex = currentIndex - 1 
    } else if (currentElement < searchElement) {
      minIndex = currentIndex + 1
    } else {
      return currentIndex
    }
  }
  
  return -1
}
