// YouTube: https://youtu.be/B5lUyJDkWzE

function permAlone(str) {
  var arr = str.split('');
  var result = 0;

  function swap(a, b) {
    var tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  function generate(n) {
    var regex = /([a-z])\1+/;

    if (n === 1 && !regex.test(arr.join(''))) {
      result++;
    } else {
      for (var i = 0; i !== n; i++) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
      }
    }
  }
  generate(arr.length);
  return result;
}

permAlone('aab');
