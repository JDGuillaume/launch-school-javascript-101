// Understand the Problem
// Input: Array
// Output: Array

// The function should:
//  - Take an array as an argument
//  - Return an array with the elements at odd positions (1st, 3rd, 5th, etc.)

// Implicit: If the array is empty, it should return an empty array.

// Examples / Test Cases
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(['abc', 'def'])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// Data Structure
// The program should rely on an array and the use of built-in methods.

// Algorithm
// Create a function that accepts an array as an argument.
// Return a filtered array that contains all odd items.

// Code
function oddities(numberArray) {
  return numberArray.filter((_, index) => index % 2 === 0);
}
