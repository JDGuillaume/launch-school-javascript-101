// Understand the Problem
//  Input: Integer
//  Output: Boolean
//  - Create a function thatt takes an integer as an argument.
//    - The integer can be positive, negative, or zero.
//    - The purpose of the function is to determine if the integer is odd.
//      - If it is odd, the function should return true.
//      - If it is false, the function should return false.
//  - Provided assumption: The argument will always be a valid integer value.
//  - Implicit: The function needs be able to handle negative numbers.

// Example/Test Cases
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

// Data Structure
/* The function should take the absolute value of the integer
   and then input into an algebraic expression and return a boolean. */

// Algorithm
// The function should divide the number by 2 and extract the remainder.
// If the remainder is 1, the number is odd.
// If not, the number is even.

// Code
function isOdd(integer) {
  return Math.abs(integer) % 2 === 1;
}
