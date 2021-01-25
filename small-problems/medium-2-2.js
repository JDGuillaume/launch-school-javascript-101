// Understand the Problem
// Input: Numbers
// Output: String

// The function should:
// - Accept three numbers (sides of a triangle) as arguments
// - Return a string that indicates the classification of the triangle

// What are the different classifications of a triangle?
// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// Invalid: Not a valid triangle.

// What does it mean for a triangle to be valid?
/*
  To be a valid triangle, the sum of the lengths of
  the two shortest sides must be greater than the
  length of the longest side, and every side must have a
  length greater than 0.
*/

// Implicit: Numbers can be floating point or integers.

// Examples / Test Cases
console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"

// Data Structure
// Array

// Algorithm
// Create a function that accepts three lengths of a triangle.
// Store each of the integers in an array, and sort the array numerically
// Set up conditionals for each case
// Invalid: If any of the sides are 0 or !(array[0] + array[1] > array[2]).
// Equilateral: If every side is the same as array[0].
// Isosceles: If either array[1] or array[2] === array[0] or array[1]
// Scalene: If array[0] !== array[1] && array[0] !== array[2]

// Code
function triangle(sideOne, sideTwo, sideThree) {
  const triangleArray = [sideOne, sideTwo, sideThree].sort((a, b) => a - b);

  if (
    triangleArray.some(element => element === 0) ||
    !(triangleArray[0] + triangleArray[1] > triangleArray[2])
  ) {
    return 'Invalid';
  } else if (triangleArray.every(element => element === triangleArray[0])) {
    return 'Equilateral';
  } else if (
    triangleArray[0] === triangleArray[1] ||
    triangleArray[0] === triangleArray[2] ||
    triangleArray[1] === triangleArray[2]
  ) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
}
