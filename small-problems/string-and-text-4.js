// Understand the Problem
// Input: String
// Output: String

// The function should:
// - Accept a string as an argument
// - Return a string that contains the original string with
//   each of the first letters of each word capitalized.

// Assumptions: A word is any sequence of non-whitespace characters.

// Examples / Test Cases
console.log(wordCap('four score and seven')); // "Four Score And Seven"
console.log(wordCap('the javaScript language')); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string as an argument.
// Split the string into an array of words based on the ' ' character.
// Iterate over the array
//  - For each item, return the first index uppercased + the rest of the word.
// Join the array on ' ' and return the array.

// Code
function wordCap(phrase) {
  return phrase
    .split(' ')
    .map(item => item[0].toUpperCase() + item.slice(1).toLowerCase())
    .join(' ');
}
