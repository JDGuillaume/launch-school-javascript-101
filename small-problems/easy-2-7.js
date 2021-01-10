// Understand the Problem
// The function should:
//  - Accept two arguments
//  - Evaluate whether the arguments meet the criteria for exclusive or.
//  - Return a boolean value based on the evaluation.

// What is an exclusive or?
/*  - An exclusive or indicates that when
    one of the values in an or statement is true, the other must be false. */

// Examples / Test Cases
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

// Data Structure
// The function should limit itself to conditionals and logical operators.

// Algorithm
// Create a function that takes two arguments.
// (Conditional)
//  - If argument1 is falsy and argument2 is truthy, return true.
//  - Else If argument1 is truthy and argument2 is falsy, return true.
//  - Else return false

// Code
function xor(argument1, argument2) {
  if (!argument1 && argument2) {
    return true;
  } else if (argument1 && !argument2) {
    return true;
  } else {
    return false;
  }
}
