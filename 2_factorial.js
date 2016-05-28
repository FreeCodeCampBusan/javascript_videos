// YouTube Video: https://youtu.be/43XF7GBY05E

// Using iteration and functional programming
function factorial_i(num) {

  // create a range of numbers 1 through num
  var array = [];
  for (var i = 1; i <= 5; i++) {
    array.push(i);
  }

  // reduce the array of integers to one value
  return array.reduce(function(a, b) {
    return a * b;
  });
}

// Using recursion
function factorial_r(num) {

  // This is the base case.
  // Without it, you will have an infinite loop!
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num-1);
  }
}

console.log(factorial(5));
