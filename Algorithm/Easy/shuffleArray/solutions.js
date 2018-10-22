function shuffle(arr) {
  var random, temp, i;
  var len = arr.length;

  for (i = 0; i < len; i++) {
    random = Math.floor(Math.random() * (len - i) + i);
    temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }

  return arr;
}

function shuffle2(arr) {
  var i = arr.length, random, temp;

  while(i !== 0) {
    random = Math.floor(Math.random() * i);
    i--;
    temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }
  return arr;
}

//ES6
const shuffle3 = arr => {
  let len = arr.length - 1, random, i;

  for (i = len; i > 0; i--) {
    random = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[random]] = [arr[random], arr[i]];
  }

  return arr;
};

shuffle3([1, 2, 3, 4, 5]);
