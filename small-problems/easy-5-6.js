// Understand the Problem
// Input: Array
// Output: String

// The function should:
// - Multiply all the elements together.
// - Divide the product by the # of elements.
// - Return the answer in a string with precision to 3 decimal places.

// Examples / Test Cases
console.log(multiplicativeAverage([3, 5])); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"

// Data Structure
// Array

// Algorithm
// Create a function that accepts an array of numbers.
// Multiply all of the elements in the array
// Divide that product by the # of elements
// Truncate the number to 3 decimal places
// Return the number as a string.

// Code
function multiplicativeAverage(numbers) {
  return (
    numbers.reduce((product, currentValue) => product * currentValue) /
    numbers.length
  ).toFixed(3);
}
