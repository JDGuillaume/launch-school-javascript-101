// Understand the Problem
// Input: Array [Numbers]
// Output: Array [Numbers]

// The function should:
// - Accept an array as an argument.
// - Return a new array where each element's value is:
//   - the sum of the preceding numbers.
//  - Return the array

// Edge Case: Make sure an empty array argument returns an empty array.

// Examples / Test Cases
console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []

// Data Structure
// Array

// Algorithm)
// Create a function that accepts an array as an argument.
// Initialize a variable to 0 (sum).
// Iterate over each of the element:
//  - updating sum and assigning each element to element + sum.
// Return the new array

// Code
function runningTotal(numberArray) {
  let sum = 0;
  return numberArray.map(item => {
    sum = item + sum;
    return sum;
  });
}

// Further Exploration
/* Map is well suited to situations where you have to perform the
   same function on each element and return the same number of elements. */
