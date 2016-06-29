// YouTube: https://youtu.be/0Ke8KQSOFms

// First Solution
function steamrollArray1(arr) {
  return arr.reduce(function(acc, next) {
    return acc.concat(Array.isArray(next) ? steamrollArray(next) : next);
  },[]);
}

// Second Solution
function steamrollArray2(arr) {
  return arr.reduce(function(acc, next) {
    if (Array.isArray(next)) {
      return steamrollArray(acc.concat(next));
    } else {
      return acc.concat(next);
    }
  }, []);
}


console.log(steamrollArray1([1, [2], [3, [[4]]]]));
console.log(steamrollArray2([1, [2], [3, [[4]]]]));
