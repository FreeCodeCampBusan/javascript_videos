// YouTube: https://youtu.be/itPtMtdEPis

// This is less of a JavaScript task and more of a math task!
// Before you attempt this, be sure to get a good understanding of
// Euclid's algorithm. Start here: http://www.wikihow.com/Find-the-Least-Common-Multiple-of-Two-Numbers#Use_Euclid.27s_Algorithm_sub

function smallestCommons(arr) {
  var min = Math.min(arr[0], arr[1]);
  var max = Math.max(arr[0], arr[1]);
  var range = [];

  for (var x = min; x <= max; x++) {
    range.push(x);
  }

  var a = Math.abs(range[0]);

  for (var i = 1; i < range.length; i++) {
    var b = Math.abs(range[i]);
    var c = a;

    while (a && b) {
      if (a > b) {
        a %= b;
      } else {
        b %= a;
      }
    }
    a = Math.abs(c * range[i] / (a + b));
  }
  return a;
}

console.log(smallestCommons([1,5]));
