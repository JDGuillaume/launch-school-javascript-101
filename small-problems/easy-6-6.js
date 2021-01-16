// Understand the Problem
// Input: Integer
// Output: Array

// The function should:
//  - Accept an integer as an argument
//  - Return an array of the integers between 1 and n, inclusive.

// Assumption: Provided integer will always be positive.

// Examples / Test Cases
console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]

// Data Structure
// Array

// Algorithm
// Create a function that accepts an integer as an argument
// Initialize a an empty array to result.
// Initialize a count variable to 1.

// Loop
// While the length of the array does not equal the number passed in.
// Push the current count to the array
// increment the count

// Code
function sequence(integer) {
  const result = [];
  let count = 1;

  while (result.length !== integer) {
    result.push(count);
    count++;
  }

  return result;
}
