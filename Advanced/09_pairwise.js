// YouTube: https://youtu.be/yu6C1YLIdQA

function pairwise(arr, arg) {
  return arr.reduce(function(acc, num, index, array) {
    for (var x = index + 1; x < array.length; x++) {
      if (array[index] + array[x] === arg) {
        acc += index + x;
        array[index] = array[x] = NaN;
      }
    }
    return acc;
  }, 0);
}

pairwise([1,4,2,3,0,5], 7);
