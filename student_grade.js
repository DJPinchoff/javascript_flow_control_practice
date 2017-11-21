/*
Write a program to determine a student’s grade based on the average of three scores you get from the user. Use these rules to compute the grade:

If the average score is greater than or equal to 90 then the grade is 'A'
If the average score is greater than or equal to 70 and less than 90 then the grade is 'B'
If the average score is greater than or equal to 50 and less than 70 then the grade is 'C'
If the average score is less than 50 then the grade is 'F'
You may assume that all input values are valid positive integers.
*/

var i = 1;
var sum = 0;
var grade;
var average;

while (i <= 3) {
  sum += Number(prompt('Enter score ' + String(i)));
  i++;
}

average = sum / 3;
if (average >= 90) {
  grade = '"A"';
} else if (average >= 70) {
  grade = '"B"';
} else if (average >= 50) {
  grade = '"C"';
} else {
  grade = '"F"';
}

console.log('Based on the average of your 3 scores, your letter grade is ' + grade + '.');
