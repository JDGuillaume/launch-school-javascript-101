// Understand the Problem
// Input: Array
// Output: Integer

// The function should:
//  - Accept an array of integers.
//  - Return the average of all elements, rounded down.

// Assumptions:
//  - Array will never be empty.
//  - Numbers will always be positive.

// Examples / Test Cases
console.log(average([9, 47, 23, 95, 16, 52])); // 40
console.log(average([1, 5, 87, 45, 8, 8])); // 25

// Data Structure
// Array

// Algorithm
// Create a function that accepts an array as an argument.
// Calculate the average of the array.
//  - Sum of all elements / n
// Round that answer down
// Return the answer

// Code
function average(numbers) {
  return Math.floor(
    numbers.reduce((sum, currentValue) => sum + currentValue) / numbers.length
  );
}
