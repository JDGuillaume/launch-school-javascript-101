// Understand the Problem
// Input: Number
// Output: Number

// The function should:
//  - Take in a number
//  - Convert that number to string
//  - Return said string

// You must analyze the number character by character.

// Assumption: Input will be a valid, non-negative integer.

// Constraints:
// - You cannot use:
//  - String
//  - Number.prototype.string()
//  - An expression '' + number.

// Examples / Test Cases
// integerToString(4321); // "4321"
// integerToString(0); // "0"
// integerToString(5000); // "5000"
// integerToString(1234567890); // "1234567890"

// Data Structure
// This program will make use of built-in array methods.

// Algorithm
// Create an array that contains the numbers 0 - 9
// Create a function that accepts a number as an argument
// Initialize a variable to store the conversion result to an empty string '';

// (Do/While Loop)
// Do
//  - Add the array[remainder of the expression number % 10] + the result.
//  - Reduce the number by a numbers place using number / 10 and using floor.
// While the number is greater than 0.

// Return the result.

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

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"
