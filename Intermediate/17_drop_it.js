// YouTube: https://youtu.be/T3Q5Pffp6EM

function dropElements(arr, func) {
  while(!func(arr[0])) {
    arr.shift();
  }
  return arr;
}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
