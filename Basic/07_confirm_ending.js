// YouTube: https://youtu.be/AsLtWDncqeQ

function confirmEnding(str, target) {
 str = str.toLowerCase().replace(/\W_/g, "");
 return target === str.slice(-Math.abs(target.length));
}

/* You can replace str.slice() with str.subtr()
   and the result will be exactly the same.
   What is the difference?

   Both .slice() and .substr() take one required argument, which is the starting index.
   If you don't include the second optional argument, it selects everything
   from the start position to the end of the string.

   They also take an optional second argument, and this is where they differ.

   For .slice(start, end), the second argument is the end index number.
   It will select everything up to the end index, but it won't actually include
   the character at the end index.

   For .substr(start, length), the second arugument is the length of your selection.
   So if you write str.substr(2,4), it will select 4 characters beginning at index 2.

*/

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("He has to give me a new name", "me"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
