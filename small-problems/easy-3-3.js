// Understand the Problem
// Input: Positive Integer
// Output: String

// The function should:
// - Take a positive integer as an argument
// - Return a string of alternating 1s and 0s
//    - The string must begin with 1
//    - The string.length must be === positive integer.

// Examples / Test Cases
console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"

// Data Structure
// The program will likely benefit from a loop and a conditional.

// Algorithm
// Create a function that accepts a positive integer as an argument.
// Initialize a result variable to an empty string.
// Initialize a variable to 1 (numberToAdd)

// While Loop | while (result.length !== integer)
// - Add the integer to the end of the result string.
// - (Conditional)
//  - If the integer = 1, set it 0,
//  - If not, set it to 1.
// Loop around

// Return result string.

// Code
function stringy(number) {
  let result = '';
  let numberToAdd = 1;

  while (result.length !== number) {
    result += numberToAdd;
    numberToAdd = numberToAdd === 1 ? 0 : 1;
  }

  return result;
}
