// Understand the Problem
// Input: Array
// Output: Array of Arrays

// The function should:
//  - Accept an array as an argument.
//  - Split the array into two arrays
//    - Odd lengths will add the middle to 1st array.
//  - Return an array of two arrays

// Examples / Test Cases
console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]

// Data Structure
// Array

// Algorithm
// Create a function that accepts an array as an argument.
// Initialize a variable to [[], []] and name it result.
// Determine the length of the array and save it into a variable.

// if the length of the array is 0, return the result immediately.

// Determine the length of the first array, by using Math.round(length / 2).
//  - Save it to a variable. (midpoint)
// set result[0] = array arguments 0 to midpoint
// set result[1] = array arguments midpoint to end

// return result

// Code
function halvsies(numbers) {
  const result = [[], []];
  const numbersLength = numbers.length;

  if (numbersLength === 0) {
    return result;
  }

  const midpoint = Math.ceil(numbersLength / 2);

  result[0] = numbers.slice(0, midpoint);
  result[1] = numbers.slice(midpoint);

  return result;
}
