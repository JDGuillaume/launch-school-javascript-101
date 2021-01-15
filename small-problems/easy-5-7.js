// Understand the Problem
// Input: Array(s)
// Output: Array

// The function should:
//  - Accept two arrays as arguments
//  - Return a new array
//    - Where each element is the product of the two elements at that index.

// Assumptions:
//  - Array lengths are equal.

// Examples / Test Cases
console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]

// Data Structure
// Array

// Algorithm
// Create a function that accepts two arrays as arguments.
// Initialize a result variable to an empty array.
// Iterate over the elements in each array, multiplying their elements
//  - Append the result to the result array.
// Return the result array.

// Code
function multiplyList(arrayOne, arrayTwo) {
  const result = [];

  arrayOne.forEach((item, index) => {
    result.push(item * arrayTwo[index]);
  });

  return result;
}
