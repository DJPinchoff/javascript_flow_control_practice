/*
Implement a function that determines whether a string begins with another string. If it does, the function should return true, or false otherwise.

You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.
*/

function startsWith(string, searchString) {
  var i;
  var searchLength = searchString.length;

  for (i = 0; i < searchLength; i++) {
    if (string[i] !== searchString[i]) {
      return false;
    }
  }

  return true;
}

var str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

var longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false
