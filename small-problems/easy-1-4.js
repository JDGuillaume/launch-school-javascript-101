// Understand the Problem
// Input: Integer(s)
// Output: String
// The program will take two inputs from the user:
//  - Room Length (Integer)
//  - Room Width (Integer)
// The program will return a string, containing the product of the two numbers
//  - The initial answer will be in square meters.
//  - The string will include the area in square feet in parentheses.
//    - Conversion: 1 square meter == 10.7639 squre feet.
//  Implicit:
//   - Measuremets will be reported as floating point numbers fixed to 2 places.
// Assumptions: The input will be a valid integer.
// External Code: readline-sync

// Examples / Test Cases
// length - 10, width - 7
// The area of the room is 70.00 square meters (753.47 square feet).

// Data Structure
// The programs functionality should be stored in a function.
// The output should be a template literal with the variables interpolated.

// Algorithm
// Declare a constant for the conversion from square meters to square feet.
// Prompt the user the length of the room in meters.
// Convert the users response to a number and store in a variable.

// Prompt the user the width of the room in meters.
// Convert the users response to a number and store in a variable.

// Multiply the values obtained from the user.
// Convert the answer to a floating point number, limiting decimal places to 2.
// Store that value in a variable.
// Use the global constant for conversion to convert the number to square feet.
// Store that in a variable.

// Output the desired string in a template literal, interpolating the values.

// Code
const SQMETERS_TO_SQFEET = 10.7639;
const readline = require('readline-sync');

function calculateRoomArea() {
  console.log('Enter the length of the room in meters:');
  const length = Number(readline.question());

  console.log('Enter the width of the room in meters:');
  const width = Number(readline.question());

  const areaInSquareMeters = Number((length * width).toFixed(2));
  const areaInSquareFeet = Number(
    (areaInSquareMeters * SQMETERS_TO_SQFEET).toFixed(2)
  );

  return `The area of the room is ${areaInSquareMeters} square meters (${areaInSquareFeet} square feet).`;
}

console.log(calculateRoomArea());
