/*
Write a function named checkGoldbach() that uses Goldbach's Conjecture to log every pair of primes that sum to the number supplied as an argument. The conjecture states that "you can express every even integer greater than 2 as the sum of two primes". The function takes as its only parameter, an integer n, and logs all combinations of two prime numbers whose sum is n. Log the prime pairs with the smaller number first. If n is odd or less than 4, your function should log null.

Your checkGoldbach() function may call the isPrime() function you wrote for a previous practice problem.
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

function checkGoldbach(n) {
  var num1;
  var num2;

  if (n < 4 || n % 2 !== 0) {
    console.log(null);
  }

  num2 = n - 1;
  while (num2 >= (n / 2)) {
    num1 = n - num2;

    if ((isPrime(num1) && isPrime(num2)) &&
         num1 + num2 === n) {
           console.log(num1, num2);
         }

    num2--;
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53
