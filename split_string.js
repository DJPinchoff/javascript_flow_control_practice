/*
Write a function that takes two arguments:

a string to be split
a delimiter character
The function logs the split strings to the console.

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.
*/

function splitString(string, delimiter) {
  var i;
  var word = '';

  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  for (i = 0; i < string.length; i++) {
    if (delimiter === '') {
      console.log(string[i]);
    } else if (string[i] === delimiter) {
      console.log(word);
      word = '';
    } else if (i === string.length - 1) {
      word += string[i];
      console.log(word);
    } else {
      word += string[i];
    }
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
