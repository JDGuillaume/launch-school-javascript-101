// Understand the Problem
// Input: Integer
// Output: Integer

// The function should:
// - Accept two integers as arguments.
//    - The first integer is a number
//    - The second integer is the number of digits to rotate from the right.
/*     - To perform the rotation, move the first of the digits that you want
         to rotate to the end and shift the remaining digits to the left. */
//  -Return the rotated number.

// Examples / Test Cases
console.log(rotateRightmostDigits(735291, 1) === 735291); // 735291
console.log(rotateRightmostDigits(735291, 2) === 735219); // 735219
console.log(rotateRightmostDigits(735291, 3) === 735912); // 735912
console.log(rotateRightmostDigits(735291, 4) === 732915); // 732915
console.log(rotateRightmostDigits(735291, 5) === 752913); // 752913
console.log(rotateRightmostDigits(735291, 6) === 352917); // 352917

// Data Structure
// Array

// Algorithm
// Create a function that accepts two integers as arguments
// Create an empty array to hold the removed digits (numberCollection)
// Convert the number to a string and spread it into an array
// (For Loop) counter = count, count > 0, count --
// Remove the end of the array and append it to the numberCollection array
// End Loop

// Remove the last element of the numberCollection and put it in a variable.
// Concatenate original array, numberCollection (reversed), and the variable.
// Join the array together on ''
// Convert the string to a number
// Return the number

// Code
function rotateRightmostDigits(number, count) {
  const numberCollection = [];
  const numberArray = [...String(number)];

  for (let counter = count; counter > 0; counter--) {
    numberCollection.push(numberArray.pop());
  }

  let firstRotation = numberCollection.pop();

  return Number(
    numberArray.concat(numberCollection.reverse(), firstRotation).join('')
  );
}
