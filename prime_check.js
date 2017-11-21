/*
Write a function that takes a number argument, and returns true if the number is prime, or false if it is not.

You may assume that the input is always a non-negative integer.
*/

function isPrime(num) {
  var i;
  var primeCheck;
  primeCheck = true;

  if (num < 2) {
    primeCheck = false;
  } else {
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        primeCheck = false;
      }
    }
  }

  return primeCheck;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false
