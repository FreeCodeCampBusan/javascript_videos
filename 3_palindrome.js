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

// shorter way to write palindromeRegex()
function palindromeRegex2(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  return str === str.split("").reverse().join("");

  // a double or tripple equals will return a boolean (true/false)
  // the first version works, but is repetitive.
  // thanks to @revisualize for pointing that outgit 
}


console.log(palindromeRegex("A man. A plan. A canal. Panama."));
console.log(palindromeRegex("Hello world!"));
