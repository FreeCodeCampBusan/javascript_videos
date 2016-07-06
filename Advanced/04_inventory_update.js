// YouTube: https://youtu.be/5FoMIM5IChw

function updateInventory(arr1, arr2) {
  var inventory = arr1.concat(arr2).reduce(function(acc, next) {
    if (acc[next[1]]) {
      acc[next[1]] += next[0];
    } else {
      acc[next[1]] = next[0];
    }
    return acc;
  }, {});

  return Object.keys(inventory).map(function(value) {
    return [inventory[value], value];
  }).sort(function(a,b) {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return (a[1] < b[1]) ? -1 : 1;
    }
  });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
