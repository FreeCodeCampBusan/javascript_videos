// YouTube: https://youtu.be/v04Bmbfa4Jk

// Our main function that reduces the sub arrays into a single array
function sym(args) {
  args = Array.prototype.slice.call(arguments);

  return args.reduce(function(acc, next) {
    return diffArray(removeDupes(acc), removeDupes(next));
  });
}

// Look familiar? We used this same exact function for Intermediate/02_diff_array.js
// You didn't know it at the time, but we were finding the symmetric difference between 2 arrays
function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.filter(function(value, index, array) {
    if (array.slice(index+1).indexOf(value) === -1 && array.slice(0, index).indexOf(value) === -1) {
      return value;
    }
  });
}

// diffArray() only works if an array has unique values. If there are duplicates, we have to remove them.
function removeDupes(arr) {
  var result = [];
  arr.forEach(function(value) {
    if (result.indexOf(value) < 0) {
      result.push(value);
    }
  });
  return result;
}


sym([1, 2, 3], [5, 2, 1, 4]);
