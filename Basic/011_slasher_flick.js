// YouTube: https://youtu.be/OhOOyVrERkI

function slasher1(arr, howMany) {
  if (howMany >= arr.length) {
    return [];
  } else {
    for (var i = 1; i <= howMany; i++) {
      arr.shift();
    }
    return arr;
  }
}

function slasher2(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

console.log(slasher1([1, 2, 3], 2));
console.log(slasher2([1, 2, 3], 2));
