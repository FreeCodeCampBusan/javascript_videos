// YouTube: https://youtu.be/zFYkDRnKdLw

function whereAreYou(collection, src) {
  var srcKeys = Object.keys(src);

  return collection.filter(function(obj) {
    return srcKeys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === src[key];
    });
  });
}

console.log(whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
