// YouTube: https://youtu.be/4Zx0OFWVj-w

function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
