// YouTube: https://youtu.be/vhqkRKkeyVo

// First solution using all public properties
var Person = function(firstAndLast) {
  // can access these with dot or bracket notation
  this.first = firstAndLast.split(' ')[0];
  this.last = firstAndLast.split(' ')[1];

  this.getFirstName = function() {
    return this.first;
  };

  this.getLastName = function() {
    return this.last;
  };

  this.getFullName = function() {
    return this.first + ' ' + this.last;
  };

  this.setFirstName = function(str) {
    this.first = str;
  };

  this.setLastName = function(str) {
    this.last = str;
  };

  this.setFullName = function(str) {
    this.first = str.split(' ')[0];
    this.last = str.split(' ')[1];
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

// make it so this.first and this.last cannot be detected by Object.keys() and for...in loops
Object.defineProperty(bob, 'first', {
  enumerable: false,
});

Object.defineProperty(bob, 'last', {
  enumerable: false
});

// Second solution with private properties
var Person = function(firstAndLast) {
  // private properties. cannot access them with dot or bracket notation
  var first = firstAndLast.split(' ')[0];
  var last = firstAndLast.split(' ')[1];

  this.getFirstName = function() {
    return first;
  };

  this.getLastName = function() {
    return last;
  };

  this.getFullName = function() {
    return first + ' ' + last;
  };

  this.setFirstName = function(str) {
    first = str;
  };

  this.setLastName = function(str) {
    last = str;
  };

  this.setFullName = function(str) {
    first = str.split(' ')[0];
    last = str.split(' ')[1];
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
