// Understand the Problem
// Input: String
// Output: String

// The function should:
//  - Accept a string as an argument
//  - Return the string with every other character changed to the opposite case.

// Rules:
//  - Non-alphabetic characters should not be changed, but should be counted.
//  - First letter is capitalized.

// Examples / Test Cases
console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string as an argument
// Spread the string into an array
// Iterate over the array
// If the index of the current element is even, capitalize the number
// Else, lowercase the element

// Join the array ''
// Return the array

// Code
function staggeredCase(phrase) {
  return [...phrase]
    .map((item, index) => {
      return index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
    })
    .join('');
}
