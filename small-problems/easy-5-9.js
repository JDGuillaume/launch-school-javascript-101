// Understand the Problem
// Input: Array
// Output: Console.log statements

// The function should:
//  - Accept an array as an argument.
//    - The array will contain strings.
//  - Log the # of times each word occurs.
//  - Return a console.log statement for each word and its # of occurrences.

// Rules:
//  - Items are case-sensitive.

// Examples / Test Cases
let vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4;
// truck => 3;
// SUV => 1;
// motorcycle => 2;

// Data Structure
// Object

// Algorithm
// Create a function that accepts an array as argument.
// Initialize an empty object to a variable called wordCount.
// For each element in the passed in array:
//  Check to see if it exists in the object.
//  If it doesn't, add it to the object with the value 1.
//  If it does, increment its value by 1.

// for each key, value pair in the object,
// log the key => value

// Code
function countOccurrences(stringArray) {
  const wordCount = {};
  stringArray.forEach(item => {
    if (wordCount[item] === undefined) {
      wordCount[item] = 1;
    } else {
      wordCount[item] += 1;
    }
  });

  for (let word in wordCount) {
    console.log(`${word} => ${wordCount[word]}`);
  }
}
