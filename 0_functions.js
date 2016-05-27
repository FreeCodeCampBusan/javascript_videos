// Video lesson at https://youtu.be/Zg6ESLIasic

function sayGreeting(greeting) {
  console.log(greeting +  " Free Code Camp!");
}

sayGreeting("Hello");
sayGreeting("Hola");

function addTwoNumbers(a, b) {
  console.log("This will run");
  return a + b;
  console.log("This will not run!");
}

var sum = addTwoNumbers(5,3);
console.log(sum);
