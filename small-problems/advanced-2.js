// Understand the Problem
// Input: 3x3 Matrix (Array)
// Output: 3x3 Matrix (Array)

// The function should:
// - Accept a 3x3 Matrix as an argument.
// - Return a copy of the 3x3 Matrix, transposed!

// What is a 3x3 Matrix?
/* A 3x3 matrix can be represented by an array of arrays: an outer array
   containing three subarrays that each contain three elements. */

// What does it mean to transpose a matrix?
/* The transpose of a 3x3 matrix is the matrix that results from
   exchanging the rows and columns of the original matrix. */

// Rules:
// - Do not modify the original matrix.

// Constraints
// - No outside libraries!

// Examples / Test Cases
// const matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// let newMatrix = transpose(matrix);

// console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// Data Structure
// Array

// Algorithm
// Create a function that accepts an array of arrays.
// Map over the matrix
// For each item, reverse the indices
// Return the new array of arrays

// Code

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

function transpose(matrix) {
  return matrix.map((subarray, index) =>
    subarray.map((_, secondIndex) => {
      return matrix[secondIndex][index];
    })
  );
}

let newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
