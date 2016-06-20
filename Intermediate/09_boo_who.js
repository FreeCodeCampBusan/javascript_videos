// YouTube: https://youtu.be/QCFSd-JpZgg


// First soultion. Recommended!
function booWho1(bool) {
  return typeof bool === 'boolean';
}

// Second solution. Also good, but nothing new if you've been following this series.
function booWho2(bool) {
  return bool === true || bool === false;
}

console.log(booWho1(null));
console.log(booWho2(null));
