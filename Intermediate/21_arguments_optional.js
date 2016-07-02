// YouTube: https://youtu.be/wA45ErxhRao

function addTogether() {

  function checkIfNumber(num) {
    return typeof num === 'number' ? num : undefined;
  }

  var a = checkIfNumber(arguments[0]);
  var b = checkIfNumber(arguments[1]);

  if (arguments.length > 1) {
    return a && b ? a + b : undefined;
  } else {
    if (a) {
      return function(y) {
        if (checkIfNumber(y)) {
          return a + y;
        } else {
          return undefined;
        }
      };
    } else {
      return undefined;
    }
  }
}

console.log(addTogether(2)([3]));
