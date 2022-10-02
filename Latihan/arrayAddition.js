function ArrayAdditionI(arr) {
  var sum = 0;
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  if (sum === max) {
    return true;
  }
  return false;
}