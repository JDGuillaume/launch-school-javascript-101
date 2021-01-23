// Understand the Problem
// Input: None
// Output: String

// The function should:
//  - Not take any arguments
//  - Generate a 32 hexadecimal character UUID
//    - The UUID should be presented in string form in an 8-4-4-4-12 pattern
//      - 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

// Examples / Test Cases
// - Random string such as 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'

// Data Structure
// Array, Object

// Algorithm
// Initialize an object that has mappings for hexadecimal numbers.

// Create a function that generates a random number between 0 and 15.

// Create a separate function (randomHex) that accepts a number
//  - Initialize an empty array (stringArray)
//  - This function will generate a random string based on a provided length.
// Generate a number between 0 and 15, (randomIntInclusive)
//  - if that number is above 9, map it to it's hexadecimal letter
//    - then append it to the array
//  - if that number is 9 or below, convert it to a string and
//      - append it to the array
// Join the array on ''
// Return the joined string

// Create a function
// Initialize an empty array to the variable results.
// For each of the following function calls, append them to the results array:
//  - randomHex(8)
//  - randomHex(4)
//  - randomHex(4)
//  - randomHex(4)
//  - randomHex(12)
// Join these elements together on '-'
// Return the string

// Code
const hexadecimal = {
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f',
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomHex(length) {
  let stringArray = [];

  for (let count = length; count > 0; count--) {
    let randomNumber = getRandomIntInclusive(0, 15);
    if (randomNumber > 9) {
      randomNumber = hexadecimal[randomNumber];
    } else {
      randomNumber = String(randomNumber);
    }

    stringArray.push(randomNumber);
  }

  return stringArray.join('');
}

function generateUUID() {
  const results = [];
  results.push(
    randomHex(8),
    randomHex(4),
    randomHex(4),
    randomHex(4),
    randomHex(12)
  );

  return results.join('-');
}

console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());
