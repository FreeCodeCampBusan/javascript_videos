// YouTube: https://youtu.be/t4ETMI5m26g

/*
I made a mistake in the video (but I eventually caught myself!). I said that
could replace .concat() with .push() and the function would work the same. That's
not the case and it will return a TypeError. Why? Because .push() adds an element
to the end of the array and RETURNS THE LENGTH of the new array. Which is an Integer,
and we cannot call .sort() on Intergers. Hence the TypeError.

On the other hand, .concat() RETURNS a NEW ARRAY, and we can call the .sort() method on it.
*/

// Using .concat()
function getIndexToIns(arr, num) {
  return arr.concat(num).sort(function(a, b) {
    return a - b;
  }).indexOf(num);
}

console.log(getIndexToIns([40, 60], 50));

// Using .push(). Works the same, just longer.
function getIndexToIns2(arr, num) {
  var newArray = arr;
  newArray.push(num);
  return arr.sort(function(a, b) {
    return a - b;
  }).indexOf(num);
}

console.log(getIndexToIns2([40, 60], 50));
