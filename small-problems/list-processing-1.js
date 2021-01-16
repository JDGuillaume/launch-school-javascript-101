// Understand the Problem
// Input: Number
// Output: Number

// The function should:
//  - Accept a number as an argument
//  - Return the sum of the digits in the number.

// Assumptions:
//  - Argument will be a positive integer

// Constraints
// - You may not typical loops: for, while, do...while
// - You must use a series of method calls.

// Examples / Test Cases
console.log(sum(23) === 5); // 5
console.log(sum(496) === 19); // 19
console.log(sum(123456789) === 45); // 45

// Data Structure
// Array

// Algorithm
// Create a function that accepts a number as an argument
// Convert the number to a string
// Spread the string into an array
// Convert each element in the array to a number
// Reduce the array to the sum of its elements
// Return that sum

// Code
function sum(number) {
  return [...String(number)].reduce(
    (sum, currentValue) => sum + Number(currentValue),
    0
  );
}
