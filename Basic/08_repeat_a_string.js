// YouTube: https://youtu.be/stGujQgT9EM

function repeatStringNumTimes(str, num) {
  if (num > 0) {
    return str.repeat(num);
  } else {
    return "";
  }
}

// Exactly the same as above, rewritten using a ternary operator
function repeatStringNumTimes2(str, num) {
  return num > 0 ? str.repeat(num) : "";
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 0));
console.log(repeatStringNumTimes("abc", -2));

console.log(repeatStringNumTimes2("abc", 3));
console.log(repeatStringNumTimes2("abc", 0));
console.log(repeatStringNumTimes2("abc", -2));
