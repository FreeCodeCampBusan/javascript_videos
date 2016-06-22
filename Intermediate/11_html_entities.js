// YouTube: https://youtu.be/p0SN049ikj8

function convertHTML(str) {

  var entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '\"': '&quot;',
    '\'': '&apos;'
  };

  return str.split('').map(function(char) {
    return entities[char] || char;
  }).join('');

}

console.log(convertHTML("Dolce & Gabbana"));
