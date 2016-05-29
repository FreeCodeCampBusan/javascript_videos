// YouTube Video: https://youtu.be/mQ6ZB24DInc

// uses recursion
function palindrome(str) {
  if (str.length <= 1) {
    return true;
  } else if (str[0] === str.slice(-1)) {
    return palindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

console.log(palindrome("radar"));
console.log(palindrome("hello"));

// uses RegEx (regular expressions)
function palindromeRegex(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(palindromeRegex("A man. A plan. A canal. Panama."));
console.log(palindromeRegex("Hello world!"));
