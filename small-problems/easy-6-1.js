// Understand the Problem
// Input: String
// Output: String

// The function should:
//  - Take a string as an argument
//  - Return a new string with all letters doubled.

// Implicit
//  - If the argument is an empty string, an empty string should be returned.

// Examples / Test Cases
console.log(repeater('Hello')); // "HHeelllloo"
console.log(repeater('Good job!')); // "GGoooodd  jjoobb!!"
console.log(repeater('')); // ""

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string as an argument.
// Initialize an empty array to result.
// Spread the string into an array.
// For each element, append the current element to the result array twice.

// Code
function repeater(phrase) {
  const result = [];
  const phraseArray = [...phrase];

  phraseArray.forEach(item => result.push(item, item));

  return result.join('');
}
