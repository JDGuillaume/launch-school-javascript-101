// Understand the Problem
// Input: String
// Output: String

// The function should:
//  - Accept a string as an argument
//  - Double every letter that is not a vowel
//  - Non-alphabetic character should not be doubled.
//  - Return a new string with the correct characters modified.

// Implicit: An empty string argument should return an empty string.

// Examples / Test Cases
console.log(doubleConsonants('String')); // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!')); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th')); // "JJullyy 4tthh"
console.log(doubleConsonants('')); // ""

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string as a parameter
// Spread the string into an array.
// Iterate over the string
//  - If the current element matches [a-zA-z], duplicate it
//  - If not, do nothing and return the original element
// Join the array together and return the modified string

// Code
function doubleConsonants(phrase) {
  const letter = RegExp(/[a-z]/i);
  const consonant = RegExp(/[^aeiou]/i);

  return [...phrase]
    .map(item => {
      if (letter.test(item) && consonant.test(item)) {
        return item + item;
      } else {
        return item;
      }
    })
    .join('');
}
