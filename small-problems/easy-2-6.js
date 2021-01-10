// Understand the Problem
// Input: String
// Output: String

// The function should:
//  - Accept a string as input.
//  - Return the second to last word in the string.
//  - What is a word?
//    - Words are any sequence of non-blank characters.

// Examples / Test Cases
console.log(penultimate('last word') === 'last'); // logs true
console.log(penultimate('Launch School is great!') === 'is'); // logs true

// Data Structure
// The function should make use of an array to easily manipulate the data.

// Algorithm
// Create a function that accepts a string.
// Split the string based on a space character.
// Return the second to last item in the array.

// Code
function penultimate(string) {
  const stringArray = string.split(' ');
  return stringArray[stringArray.length - 2];
}
