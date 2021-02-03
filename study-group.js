// Understand the Problem
// Input: Array
// Output: Boolean

// The function should:
// - Accept an array as an argument
// - Convert each element in the array to the sum of its digits.
// - Return true if 3 or more of the sum elements are evenly divisible by 3.

// Examples / Test Cases
console.log(threeByThree(['01112', '0111', '00030', '2043', '12043'])); // true
console.log(threeByThree(['01112', '2043', '12043'])); // false
console.log(threeByThree(['01112', '2043'])); // false
console.log(threeByThree(['93', '9', '1', '25', '1212'])); // true

// Data Structure
// Array

// Algorithm
// Create a function that accepts an array as an argument.
// if the array's length is less than 3, return false.
// For each element in the array:
// -  Split the element into a subarray for each character
// -  Convert each subarray's elements to numbers
// -  For each element in the subarray, sum up the elements of the subarray
// Initialize the variable sumArray to be equivalent to this operation
// Filter the sum array based on each elements divisibility by 3.
// if the length of the filtered array is 3 or greater return true, else false.

// Code
function threeByThree(arrayOfStrings) {
  if (arrayOfStrings.length < 3) {
    return false;
  }

  const sumArray = arrayOfStrings.map(element =>
    element
      .split('')
      .map(subelement => Number(subelement))
      .reduce((sum, value) => sum + value)
  );

  return sumArray.filter(element => element % 3 === 0).length >= 3;
}
