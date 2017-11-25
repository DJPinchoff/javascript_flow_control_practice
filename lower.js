/*
Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, get its ASCII numeric representation from the ASCII table, add 32 to that number, then convert the number back to a character using the same ASCII table. You can use the String.fromCharCode and the String.charCodeAt methods for these operations. For example:

var string = 'A';
asciiNumeric = string.charCodeAt(0);         // 65
asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.
*/

function toLowerCase(string) {
  var asciiNumeric;
  var i;
  var result = '';

  for (i = 0; i < string.length; i++) {
    asciiNumeric = string.charCodeAt(i);

    if (asciiNumeric >= 65 && asciiNumeric <= 90) {
      asciiNumeric += 32;
    }

    result += String.fromCharCode(asciiNumeric);
  }

  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"
