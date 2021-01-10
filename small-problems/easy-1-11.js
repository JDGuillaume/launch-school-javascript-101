// Understand the Problem
// Input: String
// Output: Integer

// The program should:
//  - Take in a string.
//  - Convert each character in the string to its ASCII Value
//  - Sum all values.
//  - Return the sum

// Examples / Test Cases
console.log(asciiValue('Four score')); // 984
console.log(asciiValue('Launch School')); // 1251
console.log(asciiValue('a')); // 97
console.log(asciiValue('')); // 0

// Data Structure
// The program will likely benefit from the use of an array.

// Algorithm
// Create a function that takes in a string.
// Split the string into an array.
// Convert each character within the array to its corresponding ASCII value.
// Sum all elements within the array.
// Return the sum.

// Code
function asciiValue(string) {
  const initialValue = 0;

  return [...string]
    .map(item => item.charCodeAt())
    .reduce((sum, currentValue) => sum + currentValue, initialValue);
}
