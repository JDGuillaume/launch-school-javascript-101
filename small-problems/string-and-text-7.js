// Understand the Problem
// Input: String
// Output: String

// The function should:
//  - Accept a string as an argument
//  - Return the string with every other character changed to the opposite case.

// Rules:
//  - Non-alphabetic characters should not be changed and should be ignored.
//  - First letter is capitalized.

// Examples / Test Cases
console.log(staggeredCase('I Love Launch School!') === 'I lOvE lAuNcH sChOoL!');
console.log(staggeredCase('ALL CAPS') === 'AlL cApS');
console.log(
  staggeredCase('ignore 77 the 444 numbers') === 'IgNoRe 77 ThE 444 nUmBeRs'
);

// Data Structure
// Array, Regex

// Algorithm
// Create a function that accepts a string as an argument.
// Initialize a variable to case and set it equal to 'upper'.
// Spread the string into an array.
// Iterate over the array
// if the current element is a letter
//  - if case === upper
//    - make the letter upper case
//    - set case to lower
//  - else
//    - make the letter lower case
//    - set case to lower
// else, return the element

// Join the array ''
// Return the array

// Code
function staggeredCase(phrase) {
  let currentCase = 'upper';

  return [...phrase]
    .map(item => {
      if (/[a-z]/i.test(item)) {
        if (currentCase === 'upper') {
          currentCase = 'lower';
          return item.toUpperCase();
        } else {
          currentCase = 'upper';
          return item.toLowerCase();
        }
      } else {
        return item;
      }
    })
    .join('');
}
