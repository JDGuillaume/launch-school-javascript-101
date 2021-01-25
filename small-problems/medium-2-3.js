// Understand the Problem
// Input: Integer(s)
// Output: String

// The function should:
// - Accept three integers (angle degrees in a triangle) as arguments.
// - Return the classification of that triangle

// What are the classifications of a triangle based on degrees?
// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// Invalid: Not a valid triangle

// What does it mean to be a valid triangle (in degrees)?
/*
   To be a valid triangle, the sum of the angles must be exactly
   180 degrees, and every angle must be greater than 0. If either
   of these conditions is not satisfied, the triangle is invalid.
*/

// Assumptions:
//  All provided values will be integers.
//  All provided arguments will be in degrees.

// Examples / Test Cases
console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"

// Data Structure
// Array

// Algorithm
// Create a function that accepts three integers as arguments.
// Store these integers in an array.
// Create a conditional statement for each case, beginning with invalid.
// Invalid: array[0] + array[1] + array[2] !== 180 or one of the integers is 0.
// Right: if one of the elements is 90.
// Obtuse: if one of the elements is > 90
// Acute: if all of the elements are < 90

// Code
function triangle(sideOne, sideTwo, sideThree) {
  const triArray = [sideOne, sideTwo, sideThree];

  if (
    triArray[0] + triArray[1] + triArray[2] !== 180 ||
    triArray.some(element => element === 0)
  ) {
    return 'Invalid';
  } else if (triArray.some(element => element === 90)) {
    return `Right`;
  } else if (triArray.some(element => element > 90)) {
    return 'Obtuse';
  } else {
    return 'Acute';
  }
}
