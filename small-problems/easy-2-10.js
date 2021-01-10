// Understand the Problem
// The function should:
//  - Extend 2-9 to deal with signed (i.e., +, -) integers.

// Examples / Test Cases
// console.log(stringToSignedInteger('4321') === 4321); // logs true
// console.log(stringToSignedInteger('-570') === -570); // logs true
// console.log(stringToSignedInteger('+100') === 100); // logs true

// Data Structure
// This program will make use of arrays and built-in array methods.

// Algorithm
// Create an object that corresponds the string to the number version for #0-9

// Create a function that takes a string as an argument.
// Initialize a variable to store the number with the value 0.
// Initialize a variable to store the sign, if it exists.
// Spread the string into an array and store it in a variable.

// (Conditional)
// - If the first item in the array is + or -, remove it
// - Store the removed element in a variable

// Create a new array variable with the object values mapped to each character.

// (For Loop)
// Initialize the count to 0
// On each iteration, add the value to the value * 10 + array [ count ]
// After each iteration, increment count by 1.

// If the sign was '-', multiply the value by -1.

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

function stringToSignedInteger(string) {
  let value = 0;
  let sign;
  const stringArray = [...string];

  if (stringArray[0] === '+' || stringArray[0] === '-') {
    sign = stringArray.shift();
  }

  const numbersArray = stringArray.map(character => NUMBERS[character]);

  for (let count = 0; count < numbersArray.length; count++) {
    value = value * 10 + numbersArray[count];
  }

  if (sign === '-') {
    value *= -1;
  }

  return value;
}

console.log(stringToSignedInteger('4321')); // logs 4321
console.log(stringToSignedInteger('-570')); // logs -570
console.log(stringToSignedInteger('+100')); // logs 100

console.log(stringToSignedInteger('4321') === 4321); // logs true
console.log(stringToSignedInteger('-570') === -570); // logs true
console.log(stringToSignedInteger('+100') === 100); // logs true
