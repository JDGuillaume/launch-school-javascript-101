// Understand the Problem
// Input: String
// Output: String

// The function should:
// - Accept a string as an argument.
// - Return the string with the case reversed for every letter

// Examples / Test Cases
console.log(swapCase('CamelCase')); // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string as an argument
// Spread the string into an array
// Iterate over the array:
//  (Conditional)
//    - If the character is equal to its uppercase character, lowercase it.
//    - Else, uppercase it
// Join the array on ''
// Return the string

// Code
function swapCase(phrase) {
  return [...phrase]
    .map(item => {
      return item === item.toUpperCase()
        ? item.toLowerCase()
        : item.toUpperCase();
    })
    .join('');
}
