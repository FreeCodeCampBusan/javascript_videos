// YouTube: https://youtu.be/YD4M77uB3lo

// Using inner and outer loops
function largestOfFour1(arr) {
  var largestNumbers = [];
  var currentLargest;

  for (var x = 0; x < arr.length; x++) {
    currentLargest = 0;
    for (var y = 0; y < arr[x].length; y++) {
      if (arr[x][y] > currentLargest) {
        currentLargest = arr[x][y];
      }
    }
    largestNumbers.push(currentLargest);
  }
  return largestNumbers;
}

// using sort method
function largestOfFour2(arr) {
  var largestNumbers = [];
  arr.forEach(function(subArray) {
    largestNumbers.push(subArray.sort(function(a, b) {
      return b - a;
    })[0]);
  });
  return largestNumbers;
}

console.log(largestOfFour1([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour2([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
