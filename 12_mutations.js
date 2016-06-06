// YouTube: https://youtu.be/cz6JbsG4A-Y

function mutation(arr) {
  var target = arr[0].toLowerCase();
  var word = arr[1].toLowerCase();

  for (var i = 0; i < word.length; i++) {
    if (target.indexOf(word[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["alieN", "LinE"]));
