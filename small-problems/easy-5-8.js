// Understand the Problem
// Input: Integer
// Output: Array

// The function should:
//  - Accept a positive integer as an argument.
//  - Return an array of the digits in that number.

// Implicit: The elements in the returned array should be numbers.

// Examples / Test Cases
console.log(digitList(12345)); // [1, 2, 3, 4, 5]
console.log(digitList(7)); // [7]
console.log(digitList(375290)); // [3, 7, 5, 2, 9, 0]
console.log(digitList(444)); // [4, 4, 4]

// Data Structure
// Array

// Algorithm
// Create a function that accepts an array as an argument
// Convert the number to a string and spread it into an array.
// For each element in the array, convert the element to a number
// Return that array.

// Code
function digitList(number) {
  return [...String(number)].map(item => Number(item));
}
