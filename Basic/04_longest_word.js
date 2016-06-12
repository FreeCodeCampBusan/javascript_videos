// YouTube: https://youtu.be/U5-jiTDgmR8 

// iterating with a for loop
function longestWord(str) {
  var words = str.split(" ");
  var biggest = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > biggest) {
      biggest = words[i].length;
    }
  }
  return biggest;
}

// using forEach() -- much nicer!
function longestWord2(str) {
  var biggest = 0;
  str.split(" ").forEach(function(word) {
    if (word.length > biggest) {
      biggest = word.length;
    }
  });
  return biggest;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));
console.log(longestWord2("The quick brown fox jumped over the lazy dog"));
