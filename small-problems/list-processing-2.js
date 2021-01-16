// Understand the Problem
// Input: Array
// Output: Array

// The function should:
// - Accept an array of numbers.
// - Return an array of those numbers reordered based on word for each #.

// Rules:
//  - Numbers in array will be between 0 and 19.

// Implicit: All word counterparts are lowercase.

// Examples / Test Cases
// alphabeticNumberSort([
//   0,
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
// ]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// Data Structure
// Array, Object

// Algorithm
// Initialize an object that contains the english spelling for each #0-19
// Create a function that accepts an array as an argument
// Initialize an object to reverse of the previous object
// Create a new array based on the array passed where element = object[element]
// Sort the array alphabetically
// Replace the elements with their numbers element = object2[element]
// Return the array

// Code
const numberWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
};

function alphabeticNumberSort(numberArray) {
  const wordNumbers = Object.fromEntries(
    Object.entries(numberWords).map(item => [item[1], item[0]])
  );
  return numberArray
    .map(item => numberWords[item])
    .sort()
    .map(item => wordNumbers[item]);
}

console.log(
  alphabeticNumberSort([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
  ])
);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
