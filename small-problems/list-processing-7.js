// Understand the Problem
// Input: Array
// Output: Integer

// The function should:
// - Accept an array of numbers as an argument.
// - Return the sum of the sums of each leading subsequence in the array.

// Assumption
// - The array will always contain at least one number.

// Examples / Test Cases
console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

// Data Structure
// Array

// Algorithm
// Create a function that accepts an array of numbers.
// Iterate over the array
//  - Change each element to be the sum of all the elements up to and before it.
// Reduce the array to a sum which is obtained by adding up all the elements.

// Code
function sumOfSums(numberArray) {
  return numberArray
    .map((_, index) =>
      numberArray
        .slice(0, index + 1)
        .reduce((sum, currentValue) => sum + currentValue)
    )
    .reduce((sum, currentValue) => sum + currentValue);
}
