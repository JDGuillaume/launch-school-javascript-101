// Understand the Problem
// Input: String
// Output: String

// The function should:
//  - Accept a string as an argument
//  - Return the words oof the string in reverse order.

// Examples / Test Cases
console.log(reverseSentence('')); // ""
console.log(reverseSentence('Hello World')); // "World Hello"
console.log(reverseSentence('Reverse these words')); // "words these Reverse"

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string as an argument.
// Split the string into an array using " " as a delimiter.
// Reverse array
// Join the array on " "
// Return the string.

// Code
function reverseSentence(sentence) {
  return sentence
    .split(' ')
    .reverse()
    .join(' ');
}
