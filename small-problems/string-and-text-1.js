// Understand the Problem
// Input: String
// Output: Boolean

// The function should:
//  - Accept a string as an argument.
//  - Return a boolean based on whether all the letters inside are uppercase.

// Examples / Test Cases
console.log(isUppercase('t')); // false
console.log(isUppercase('T')); // true
console.log(isUppercase('Four Score')); // false
console.log(isUppercase('FOUR SCORE')); // true
console.log(isUppercase('4SCORE!')); // true
console.log(isUppercase('')); // true

// Data Structure
// Regular Expression, String

// Algorithm
// Create a function that accepts a string as an argument.
// Return the opposite of the regular expression test [a-z] on the string

// Code
function isUppercase(phrase) {
  return !/[a-z]/.test(phrase);
}
