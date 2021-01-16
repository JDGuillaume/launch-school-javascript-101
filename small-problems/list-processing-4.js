// Understand the Problem
// Input: String
// Output: Array

// The function should:
//  - Accept a string as an argument
//  - Return an array of all substrings that start from string[0].
//    - Strings should be ordered from shortest to longest.

// Examples / Test Cases
console.log(leadingSubstrings('abc')); // ["a", "ab", "abc"]
console.log(leadingSubstrings('a')); // ["a"]
console.log(leadingSubstrings('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string as an argument
// Initialize an empty array (substrings)
// Initialize a variable to the length of the string (length)
// (For Loop) | count = 1; count <= length; count👍
// On each iteration, continually slice the string and extend the end point
//  - Add string to array

// Return substring array

// Code
function leadingSubstrings(phrase) {
  const substrings = [];
  const length = phrase.length;

  for (let count = 1; count <= length; count++) {
    substrings.push(phrase.slice(0, count));
  }

  return substrings;
}
