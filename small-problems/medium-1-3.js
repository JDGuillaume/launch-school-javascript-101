// Understand the Problem
// Input: Number
// Output: Number

// The function should:
// - Accept an integer as an argument.
// - Rotate the entire number
//  - First, rotate the first digit to the last
//  - Lock the first digit in place
//  - Rotate the remaining digits
//  - Lock the first two digits in place
//  - Repeat this procedure until all digits are locked in place

// Return the final number
//  - The final number indicates the maximum number of rotations

// External Code: Medium-1-2.js

// Examples / Test Cases
console.log(maxRotation(735291), maxRotation(735291) === 321579); // 321579
console.log(maxRotation(3), maxRotation(3) === 3); // 3
console.log(maxRotation(35), maxRotation(35) === 53); // 53
console.log(maxRotation(105), maxRotation(105) === 15); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146), maxRotation(8703529146) === 7321609845); // 7321609845

// Data Structure
// Array

// Algorithm
// - Create a function that accepts an integer as an argument
// - Convert the number to a string, get its length and store it (numberLength).
// - Initialize a count variable to numberLength

// While Loop
// While count > 1 // Rotating the last digit does nothing
// number = rotateRightmostDigits(number, count);
// decrement count

// return number;

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

function maxRotation(number) {
  const numberLength = String(number).length;
  let count = numberLength;

  while (count > 1) {
    number = rotateRightmostDigits(number, count);
    count--;
  }

  return number;
}
