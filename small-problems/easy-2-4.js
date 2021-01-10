// Understand the Problem
// Input: Integer
// Output: Integer

// The function should:
//  - Accept one integer
//  - Return the square of the provided integer

// Examples / Test Cases
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

// Data Structure
// The function should use a return statement and the function from 2.3.

// Algorithm
// Create a function that accepts an integer
// Return multiply(number, number)

// Code
function multiply(number1, number2) {
  return number1 * number2;
}

function square(number) {
  return multiply(number, number);
}
