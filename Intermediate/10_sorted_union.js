// YouTube: https://youtu.be/73IeA87eXUk

// Notice how I placed filter() inside of concat()?
// This is possible in JavaScript because filter() return an array,
// and the concat() method takes an array as an argument!
function uniteUnique1(arr) {
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(arr1, arr2) {
    return arr1.concat(arr2.filter(function(item) {
      return arr1.indexOf(item) < 0;
    }));
  });
}

// Works just as good, just not as sexy.
function uniteUnique2(arr) {
  var args = Array.prototype.slice.call(arguments);
  var result = [];
  args.reduce(function(a, b) {
    return a.concat(b);
  }).forEach(function(item) {
    if (result.indexOf(item) < 0) {
      result.push(item);
    }
  });
  return result;
}

console.log(uniteUnique1([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique2([1, 3, 2], [5, 2, 1, 4], [2, 1]));
