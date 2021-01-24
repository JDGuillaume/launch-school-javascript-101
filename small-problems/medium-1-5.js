// Understand the Problem
// Input: String
// Output: String

// The function should:
// - Accept a string
// - Convert each instance of a number word (i.e., one, two, etc.) to a number.
// - Return a copy of the original string with the number replacements.

// Implicit: Need to deal with the period on the word 'four.'

// Examples / Test Cases
// wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// Data Structure
// Object, Array

// Algorithm
// Create an object with mapping for 0-9 to words (numberMap)
// Create a function that accepts a string as an argument. (statement)
// Split the string into an array on the ' ' character. (stringArray)
// Iterate over the array, split elements on the '.' character.
// Convert each word to its number counterpart
// Join the inner array on '.'
// Join the outer array on ' '
// Return the subsequent string.

// Code
const numberMap = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

function wordToDigit(statement) {
  let stringArray = statement.split(' ').map(item => item.split('.'));

  stringArray = stringArray.map(subarray =>
    subarray.map(item => {
      if (numberMap.hasOwnProperty(item)) {
        return numberMap[item];
      } else {
        return item;
      }
    })
  );

  stringArray = stringArray.map(subarray => subarray.join('.'));
  return stringArray.join(' ');
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.')
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
