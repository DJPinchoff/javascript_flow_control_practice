/*
Write a function that takes a number of rows as the argument n and logs a square of numbers and asterisks.
Assume a number greater than 1 and less than 10.
generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567
*/

function generatePattern(n) {
  var i;
  var count = 1;
  var row = '';

  while (count <= n) {
    i = 1;
    row = '';
    while (i <= count) {
      row += String(i);
      i++;
    }

    while (i <= n) {
      row += '*';
      i++;
    }

    console.log(row);
    count++;
  }
}

generatePattern(10);
