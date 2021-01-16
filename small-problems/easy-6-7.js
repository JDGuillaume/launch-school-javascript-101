// Understand the Problem
// Input: String
// Output: String

// The function should:
//  - Accept a string as an argument
//  - Return the original string in a different format
//    - Original String: First Last
//    - Return String: Last, First

// Examples / Test Cases
console.log(swapName('Joe Roberts')); // "Roberts, Joe"

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string as an argument.
// Split the string into an array based on the delimiter: " ".
// Reverse the array
// Join the array using ", "
// Return the string

// Code
function swapName(name) {
  return name
    .split(' ')
    .reverse()
    .join(', ');
}
