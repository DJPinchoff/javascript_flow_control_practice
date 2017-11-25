function firstHalf(char) {
  return (char >= "A" && char <= "M") || (char >= "a" && char <= "m");
}

function secondHalf(char) {
  return (char >= "N" && char <= "Z") || (char >= "n" && char <= "z");
}

function rot13(string) {
  var charCodes = [];
  var index = 0;


  while (index < string.length) {
    if (firstHalf(string[index])) {
      charCodes[index] = string.charCodeAt(index) + 13;
    } else if (secondHalf(string[index])) {
      charCodes[index] = string.charCodeAt(index) - 13;
    } else {
      charCodes[index] = string.charCodeAt(index);
    }

    index++;
  }

  return String.fromCharCode(...charCodes);
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
// It's worth noting that rot13 applied twice results in the original string:

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.
