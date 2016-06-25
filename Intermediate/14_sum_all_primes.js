// YouTube:

function sumPrimes(num) {
  var range = [];

  for (var i = 2; i <= num; i++) {
    if (isPrimeNumber(i)) {
      range.push(i);
    }
  }

  return range.reduce(function(a, b) {
    return a + b;
  });
}

// No need to put this logic in our for loop above.
// Break it out into a seperate function.
// Makes our code more modular and resuable (good!)
// And also make it more readable (very good!!)
function isPrimeNumber(num) {
  for (var x = 2; x < num; x++) {
    if (num % x === 0) {
      return false;
    }
  }
  return true;
}

console.log(sumPrimes(10));
