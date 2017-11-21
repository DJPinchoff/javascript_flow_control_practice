/*
Write a function that takes a string as an argument, and returns the string stripped of spaces from both ends. Do not remove or alter internal spaces.

Example

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
You may use the square brackets ([]) to access a character by index (as shown below), and the length property to find the string length. However, you may not use any other properties or methods from JavaScript's built-in String class.
*/


function trim(string) {
  var result = '';
  var i;
  var start;
  var end;
  var foundChar = false;

  for (i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      continue;
    } else {
      foundChar = true;
      break;
    }
  }

  start = i;
  for (i = string.length - 1; i >= 0; i--) {
    if (string[i] === ' ') {
      continue;
    } else {
      break;
    }
  }

  end = i;
  if (foundChar === false) {
    console.log('');
    return '';
  } else {
    for (i = start; i <= end; i++) {
      result += string[i];
    }
  }

  console.log(result);
  return result;
}

trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""
