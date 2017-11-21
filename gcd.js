/*
Create a function that computes the Greatest Common Divisor of two positive integers.

Further exploration: if the argument is an array of unknown length, determine the gcd.
*/


function gcd(numbers) {
  var smallest = Math.min(...numbers);
  var isFound = true;

  while (smallest !== 0) {
    for (index in numbers) {
      if (numbers[index] % smallest !== 0) {
        isFound = false;
      }
    }

    if (isFound === false) {
      smallest--;
      isFound = true;
      continue;
    }

    return smallest;
  }

  return "Error" // Should never reach this line
}

console.log(gcd([12, 4]));   // 4
console.log(gcd([4, 12]));   // 4
console.log(gcd([15, 10]));  // 5
console.log(gcd([9, 2]));    // 1
console.log(gcd([8, 16, 20])) // 4
