// Understand the Problem
// Input: Array(s)
// Output: Array

// The function should:
//  - Concatenate two arrays
//  - Remove any duplicates

// Assumption: Both arguments will be arrays.

// Examples / Test Cases
console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]

// Data Structure
// Array

// Algorithm
// Create a function that accepts two arrays.
// Filter the second array based on whether the element exists in the 1st array
// Return the array's concatenated.

// Code
function union(arrayOne, arrayTwo) {
  const arrayTwoFiltered = arrayTwo.filter(item => !arrayOne.includes(item));
  return arrayOne.concat(arrayTwoFiltered);
}
