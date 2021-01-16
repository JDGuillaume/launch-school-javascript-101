// Understand the Problem
// Input: Array(s)
// Output: Array

// The function should:
// - Accept two arrays as arguments
// - Return an array of all the possible products

// Assumptions:
//  - Provided arrays will never be empty.

// Examples / Test Cases
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]

// Data Structure
// Array

// Algorithm
// Create a function that accepts two arrays as arguments (arrayOne, arrayTwo)
// Initialize an empty array [] to results.

// For each element in arrayOne:
//  For each element in arrayTwo:
//    - multiply arrayOne * ArrayTwo
//      - Add the result to the results array

// Sort the results array

// Return results

// Code
function multiplyAllPairs(arrayOne, arrayTwo) {
  const results = [];

  for (let countOne = 0; countOne < arrayOne.length; countOne++) {
    for (let countTwo = 0; countTwo < arrayTwo.length; countTwo++) {
      results.push(arrayOne[countOne] * arrayTwo[countTwo]);
    }
  }

  return results.sort((a, b) => a - b);
}
