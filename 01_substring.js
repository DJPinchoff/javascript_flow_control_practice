function substr(string, start, length) {
  var i;
  var result = '';

  if (start < 0) {
    start = string.length + start;
  }

  for (i = start; i < start + length; i++) {
    if (i >= string.length) {
      break;
    }

    result += string[i];
  }

  return result;
}

var string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
