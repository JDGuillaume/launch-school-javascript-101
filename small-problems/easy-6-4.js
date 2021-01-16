// Understand the Problem
// Input: String
// Output: String

// The function should:
//  - Accept a string as an argument
//  - Return the middle of the string
//    - If the length of the string is odd, return the index at length / 2.
//    - If the length of the string is even, return:
//      - index at length / 2 + and length / 2 + 1

// Assumption: String argument will never be empty.

// Examples / Test Cases
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School')); // " "
console.log(centerOf('Launch')); // "un"
console.log(centerOf('Launchschool')); // "hs"
console.log(centerOf('x')); // "x"

// Data Structure
// String

// Algorithm
// Create a function that accepts a string
// Initialize a variable called length to the length of the string.
// (Conditional)
//  If the length is odd, return string element at length / 2.
//  Else, return indices length / 2 + and length / 2 + 1

// Code
function centerOf(string) {
  const length = string.length;
  const midpoint = Math.floor(length / 2);

  if (length % 2 === 1) {
    return string.slice(midpoint, midpoint + 1);
  } else {
    return string.slice(midpoint - 1, midpoint + 1);
  }
}
