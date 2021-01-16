// Understand the Problem
// Input: Number
// Output: Number

// The function should:
//  - Accept a positive integer as an argument
//  - Return that number with its digits reversed

// Implicit:
//  - The number should be returned as a number.
//  - Leading zeros should be deleted.

// Examples / Test Cases
console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456)); // 654
console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)); // 1

// Data Structure
// Array

// Algorithm
// Create a function that accepts a number as an argument.
// Convert that number to a string and spread it into an array.
// Reverse the array, join the elements together, and convert to a number.
// Return that number.

// Code
function reverseNumber(number) {
  return Number([...String(number)].reverse().join(''));
}
