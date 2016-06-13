// YouTube: https://youtu.be/ylbjD5fHytI

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr.filter(function(value, index, array) {
    if (array.slice(index+1).indexOf(value) === -1 && array.slice(0, index).indexOf(value) === -1) {
      return value;
    }
  });
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
