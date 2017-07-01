function printArr(arr) {
  var result = [];
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i + j]) {
         result.push([arr[i] + '-' + arr[i + j]])
      }
    }
  }
  
  return result;
}