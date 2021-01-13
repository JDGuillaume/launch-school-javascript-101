// Understand the Problem
// Input: None
// Output: String

// The function should:
// - Generate a random number between 20 and 120 (inclusive).
// - Return that number interpolated into the string
//    - "Teddy is n years old."

// Examples / Test Cases
// Teddy is 69 years old!

// Data Structure
// This function will benefit from JavaScript's built-in Math Object and methods

// Algorithm
// Create a function
// Initialize a variable to the minimum age (20)
// Initialize a variable to the maximum age (120).
// Within that function, generate a random number and store it in a variable.
// Return a string with the variable interpolated in.

// Call that function

// Code
function displayTeddyAge() {
  let min = 20;
  let max = 120;
  let randomAge = Math.floor(Math.random() * (max - min + 1) + min);

  return `Teddy is ${randomAge} years old.`;
}

console.log(displayTeddyAge());
