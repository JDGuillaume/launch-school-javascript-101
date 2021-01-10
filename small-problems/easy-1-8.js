// Understand the Problem
// Input: Integer greater than 0.
// Output: Boolean

// Explicit
// A year is a leap year, if:
//  - It is evenly divisible by 4, but not divisible by 100.
//    - Exception: When the year is divisible by 400.
// The rule is valid for any year greater than 0.
// The function should only accept integers greater than 0.
// If the year is a leap year, the function should return true.
// If the year is not a leap year, the function should return false.

// Examples / Test Cases
console.log(isLeapYear(2016)); // true
console.log(isLeapYear(2015)); // false
console.log(isLeapYear(2100)); // false
console.log(isLeapYear(2400)); // true
console.log(isLeapYear(240000)); // true
console.log(isLeapYear(240001)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(1752)); // true
console.log(isLeapYear(1700)); // false
console.log(isLeapYear(1)); // false
console.log(isLeapYear(100)); // false
console.log(isLeapYear(400)); // true
console.log(isLeapYear(-1)); // false

// Data Structure
// The program should use conditionals, integers, and a boolean.

// Algorithm
// Validate that the year is greater than 0.
//  - If it is not, return false.

// (Conditional)
// If the year is evenly divisible by 400, return true.
// Else/If the year is evenly divisible by 4 and not 100, return true.
// Else return false

// Code
function isLeapYear(year) {
  if (year <= 0) {
    return false;
  }

  if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}
