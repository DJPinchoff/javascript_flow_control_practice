/*
Write a password guessing program that tracks how many times the user enters the wrong password. If the user enters the password wrong three times, log 'You have been denied access.' and terminate the program. If the password is correct, log 'You have successfully logged in.' and end the program.
*/

var password = 'password';
var chances;
var input;
var message;

for (chances = 1; chances <= 3; chances++) {
  input = prompt('What is the password?');
  if (input === password) {
    message = 'You have successfully logged in.';
    break;
  } else if (chances === 3) {
    message = 'You have been deniced access.'
  }
}

console.log(message);
