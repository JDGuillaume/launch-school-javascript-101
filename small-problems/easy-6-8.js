// Understand the Problem
// Input: Integer(s)
// Output: Array

// The function should:
//  - Accept two arguments
//    - An integer indicating count
//    - An integer indicating the start of a sequence
//  - Return a sequence of numbers
//    - The # of elemennts is equal to count
//    - Each element should be a multiple of the original sequence int.
//      - [int, int*2, int*3...]

// Rules:
// - The count integer will be >= 0.

// Implicit:
// Count = 0 should return an empty array.

// Examples / Test Cases
console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(3, 0)); // [0, 0, 0]
console.log(sequence(0, 1000000)); // []

// Data Structure
// Array

// Algorithm
// Create a function that accepts two arguments.
// Initialize an empty array to the variable result.
// Initialize a count variable to 1.
// (Loop)
// While the length of the result array does not equal the count variable:
// - Push the int * count to the result array
// - Increment count by 1.

// Return result.

// Code
function sequence(count, start) {
  const result = [];
  let counter = 1;

  while (result.length !== count) {
    result.push(start * counter);
    counter++;
  }

  return result;
}
