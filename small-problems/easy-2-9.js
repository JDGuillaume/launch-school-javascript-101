// Understand the Problem
// Input: String
// Output: Integer

// The function should:
//  - Take a string
//  - Convert the to a number.

// The function must:
// - Analyze each individual character in the string.

// Assumption: The string will contain valid, numeric characters.
// Constraints:
//  - You cannot use:
//    - parseInt();
//    - Number();
//    - String();

// Examples / Test Cases
// console.log(stringToInteger('4321') === 4321); // logs true
// console.log(stringToInteger('570') === 570); // logs true

// Data Structure
// The function will likely make use an object.

// Algorithm
// Create an object that corresponds the string to the number version for #0-9

// Create a function that takes a string as an argument.
// Initialize a variable store the number with the value 0.
// Spread the string into an array
// Map each value to its corresponding value in the object.
// (For Loop)
// Initialize the count to 0
// Initialize a second variable to the length of the array. (Exponent)
// On each iteration value = array[count] * 10 ** Exponent - 1
// After each iteration:
//  - Increment count by 1.
//  - Decrement count by 1.
// Return value.

// Code
const NUMBERS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

function stringToInteger(string) {
  let value = 0;
  let numbersArray = [...string].map(character => NUMBERS[character]);

  for (let count = 0; count < numbersArray.length; count++) {
    value = value * 10 + numbersArray[count];
  }

  return value;
}

console.log(stringToInteger('4321') === 4321); // logs true
console.log(stringToInteger('570') === 570); // logs true
