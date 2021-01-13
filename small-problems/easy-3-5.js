// Understand the Problem
// Input: Integer
// Output: String

// The function should:
// - Accept a positive integer as an argument
// - Print a right triangle whose sides each have n stars.

// Examples / Test Cases
// triangle(5);

//     *
//    **
//   ***
//  ****
// *****

// triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

// Data Structure
// The function will likely benefit from a loop and built-in string methods.

// Algorithm
// Create a function that accepts an integer as an argument
// (For Loop) | Count to 0 | Count < n | Count ++
// On each iteration, log asterisks * count and pad the left side of the string
// End Loop

// Code
function triangle(stars) {
  for (let count = 0; count <= stars; count++) {
    console.log('*'.repeat(count).padStart(stars));
  }
}

triangle(5);
triangle(9);
