// Understand the Problem
// The function should:
//  - Take a string as an argument
//  - Return the middle word of the phrase or sentence
//  Edge Case:
//    - Strings with less than three words
//    - Strings with an even amount of words.
//      - The function should do this deterministically.

// Examples / Test Cases
console.log(penultimate('')); // 'Please provide a string that contains at least three words.'
console.log(penultimate('one')); // 'Please provide a string that contains at least three words.'
console.log(penultimate('one two')); // 'Please provide a string that contains at least three words.'
console.log(penultimate('The quick brown fox')); // quick
console.log(penultimate('The quick brown fox jumps over the lazy dog')); // jumps

// Data Structure
// The function should rely on the use of arrays.

// Algorithm

// Create a function that accepts a string.
// Create a variable to store the index of the middle word.
// Split the string into an array using the space character as a delimiter.
//  - Store this array in a variable.
// (Conditional) Make sure the string has at least three words.
// Calculate the midpoint of the sentence:
//  - (Length of the array divided by 2) - 1 to get the index
//  - Round up!
// Store this value in your variable.
// Return the array[variable]

// Code
function penultimate(string) {
  let middleIndex;
  let stringArray = string.split(' ');

  if (stringArray.length < 3) {
    return 'Please provide a string that contains at least three words.';
  } else {
    middleIndex = Math.round(stringArray.length / 2) - 1;
    return stringArray[middleIndex];
  }
}
