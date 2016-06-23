// YouTube: https://youtu.be/o66bwArtShw

function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
  return str.replace(/\s|_/g, '-');
}

console.log(spinalCase('thisIsSpinalTap'));
