// Understand the Problem
// Input: Integer
// Output: Integer

// The function should:
//  - Accept an integer as an argument
//  - Validate whether the provided number is a "double number".
/*    - A "double number" is an even-length number whose left-side
        digits are exactly the same as its right-side digits. */

// - If the number is a double number, return that.
// - If the number is not a double number, return the number * 2.

// Implicit:
// - If the length of the number is odd, you can immediately return a double.

// Examples / Test Cases
console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676

// Data Structure
// The function will benefit from the user of variables and type coercion.

// Algorithm
// Create a function that accepts a number as an argument.
// Initialize a variable to store the number * 2; (doubledNumber)
// Initialize a variable to store the number as a String (numberString)
// Initialize a variable to store the numberString's length. (numberLength)
// Initialize a variable to numberLength / 2 (partLength);

// (Conditional)
// Make sure the string is an even number of digits.
// If not, return doubledNumber

// (Conditional)
// Using the partLength, cut the string in half.
// If the first half = second half, return the number
// Else return doubledNumber.

// Code
function twice(number) {
  const doubledNumber = number * 2;
  const numberString = String(number);
  const numberLength = numberString.length;
  const partLength = numberLength / 2;

  if (numberLength % 2 !== 0) {
    return doubledNumber;
  }

  if (numberString.slice(0, partLength) === numberString.slice(partLength)) {
    return number;
  } else {
    return doubledNumber;
  }
}
