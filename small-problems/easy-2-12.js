// Understand the Problem
// Input: Number
// Output: String

// Using the integerToString function from 2-11:
// - Extend the function to handle signed integers.

// Constraints:
// - You cannot use any of the standard conversion functions.

// Recommendations: Math.sign()

// Examples / Test Cases
// console.log(signedIntegerToString(4321) === '+4321');
// console.log(signedIntegerToString(-123) === '-123');
// console.log(signedIntegerToString(0) === '0');

// Data Structure
// This function will make use built-in methods and conditionals, such as:
//  - Math.sign()

// Algorithm
// Create a function that accepts a number as an argument.
// Initialize a sign variable to an empty string. ''

// (Conditional)
// If the number is positive, set sign equal to '+'.
// If the number is negative, set sign equal to '-'.

// Pass the absolute value of the number to the integerToString equation.
// Return sign + result of the function call.

// Code

const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    result = NUMBERS[number % 10] + result;
    number = Math.floor(number / 10);
  } while (number > 0);

  return result;
}

function signedIntegerToString(signedInteger) {
  let sign = '';

  if (Math.sign(signedInteger) === 1) {
    sign = '+';
  } else if (Math.sign(signedInteger) === -1) {
    sign = '-';
  }

  return sign + integerToString(Math.abs(signedInteger));
}

console.log(signedIntegerToString(4321) === '+4321');
console.log(signedIntegerToString(-123) === '-123');
console.log(signedIntegerToString(0) === '0');
