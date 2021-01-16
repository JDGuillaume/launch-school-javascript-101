// Understand the Problem
// Input: Number
// Output: Number

// The function should:
//  - Accept a number as an argument
//  - If the number is positive or zero:
//    - Return that number as a negative
//  - If the number is negative, return that number as is.

// Examples / Test Cases
console.log(negative(5)); // -5
console.log(negative(-3)); // -3
console.log(negative(0)); // -0

// Data Structure
// Number

// Algorithm
// Create a function that takes a number as an argument
// (Conditional)
//  - If the number is less than 0, return number
//  - Else, return -number

// Code
function negative(number) {
  return number < 0 ? number : -number;
}

// The existence of 0 and -0 is required by IEEE 754 (Floating Point Standard).
/* It allows us to determine whether we dealing with -Infinity or + Infinity
   when dividing by 0. 1/−0 = −∞ and 1/+0 = +∞ */
// We can use this to identify whether zero is positive or negative

// Stack Overflow (https://bit.ly/3nPZTWL)
function isMinusZero(value) {
  return 1 / value === -Infinity;
}

isMinusZero(0); // false
isMinusZero(-0); // true
