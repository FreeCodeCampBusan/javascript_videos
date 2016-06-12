// YouTube: https://youtu.be/37yPWD-g-Ik

// With the map method
function rot13v1(str) { // LBH QVQ VG!
  var characters = str.split('');
  return characters.map(function(letter) {
    letter = letter.charCodeAt();
    if (letter >= 65 && letter <= 77) {
      letter += 13;
    } else if (letter >= 78 && letter <= 90) {
      letter -= 13;
    }
    return String.fromCharCode(letter);
  }).join('');
}

// With the for loop
function rot13v2(str) { // LBH QVQ VG!
  var results = [];
  for (var i = 0; i < str.length; i++) {
    var num = str.charCodeAt(i);
    if (num >= 65 && num <= 77) {
      num += 13;
    } else if (num >= 78 && num <= 90) {
      num -= 13;
    }
    results.push(String.fromCharCode(num));
  }
  return results.join('');
}

console.log(rot13v1("SERR PBQR PNZC"));
console.log(rot13v2("SERR PBQR PNZC"));
