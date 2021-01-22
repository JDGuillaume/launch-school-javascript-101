// Understand the Problem
// Input: Array
// Output: Sorted Array

// The program should:
//  - Sort the presented array in descending order
//    - Descending means largest to smallest.

// Implicit: The elements in the provided array need to be converted to numbers.

// Examples / Test Cases
// let arr = ['10', '11', '9', '7', '8'];
// ['11', '10', '9', '8', '7']

// Data Structure
// Array

// Algorithm
// Iterate through the array, making comparisons between two elements at a time.
// When making comparisons between two elements, convert the items to numbers.
// If the number is bigger, it should move left.
// If the number is smaller, it should move right.

// Code
let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => Number(b) - Number(a));
console.log(arr);
