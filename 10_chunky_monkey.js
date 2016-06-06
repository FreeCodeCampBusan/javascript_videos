// YouTube: https://youtu.be/4MR5N0_KINM

function chunkArrayInGroups(arr, size) {
  var newArray = [];
  var counter = 0;

  while (counter < arr.length) {
    newArray.push(arr.slice(counter, counter+size));
    counter += size;
  }
  return newArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
