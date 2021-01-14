// Understand the Problem
// Input: Integer
// Output: Boolean

// The function should:
// - Accept a number
// - Return a boolean
//   - If the number is palindromic, return true
//   - Else, false

// A A palindromic number reads the same forwards and backwards.

// Examples / Test Cases
console.log(isPalindromicNumber(34543)); // true
console.log(isPalindromicNumber(123210)); // false
console.log(isPalindromicNumber(22)); // true
console.log(isPalindromicNumber(5)); // true

// Data Structure
// The function will make use of an array and explicit type coercion.

// Algorithm
// Create a function that accepts a number.
// Initialize a variable with the number converted to a string.
// return string === [...string].reverse.join('')

// Code
function isPalindromicNumber(number) {
  const stringNumber = String(number);
  return stringNumber === [...stringNumber].reverse().join('');
}

// Further Exploration
/* If the string begins with one or more 0s, the solution would not work.
   In order to fix this, we could use a regular expression such as ^0+
   and replace all the 0s with ''. */
