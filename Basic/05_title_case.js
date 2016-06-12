// YouTube: https://youtu.be/fsvBwqOrkKs

// unlike the forEach() method,
// map() returns a new array to us
function titleCase(str) {
  return str.split(' ').map(function(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

console.log(titleCase("I'm a little tea pot"));
