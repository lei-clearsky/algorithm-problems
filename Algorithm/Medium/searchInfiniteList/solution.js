function binarySearch(arr, low, high, searchNum) {
  var mid;

  if (high >= low) {
    mid = Math.floor((high+low)/2)

    if (arr[mid] === searchNum) {
      return mid;
    } else if (arr[mid] > searchNum) {
      return binarySearch(arr, low, mid-1, searchNum);
    } else {
      return binarySearch(arr, mid+1, high, searchNum);
    }
  }
  
  return -1;
}

function findPos(arr, searchNum) {
  var startIndex = 0;
  var endIndex = 1;
  var val = arr[0];
  
  while (val < searchNum) {
    startIndex = endIndex;
    endIndex = 2 * endIndex;
    val = arr[endIndex];
  }
  
  return binarySearch(arr, startIndex, endIndex, searchNum);
}


// Tests
var arr = [3, 5, 7, 9, 10, 90, 100, 130, 140, 160, 170]
findPos(arr, 130) // 7