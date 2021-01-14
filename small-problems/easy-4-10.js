// Understand the Problem
// Input: String
// Output: String

// The function should:
//  - Accept a string
//  - Returns a string where the start and end of each word is swapped.

// Assumptions:
//  - Every word is at least letter.
//  - Every string is at least word.
//  - Strings contain only words and spaces.
//  - There are no leading, trailing, or repeated spaces.

// Examples / Test Cases
console.log(swap('Oh what a wonderful day it is')); // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde')); // "ebcdA"
console.log(swap('a')); // "a"

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string as input.
// Split the string into an array based on spaces.
// For each element in the array,
// - store the first element in a temp variable
// - set string[0] to string[string.length-1]
// - set string[string.length - 1]
// - return string
// return array joined together as a string.

// Code
function swap(string) {
  const stringArray = string.split(' ');
  return stringArray
    .map(item => {
      if (item.length > 1) {
        let start = item[item.length - 1];
        let end = item[0];

        item = start + item.slice(1);
        item = item.slice(0, item.length - 1) + end;

        return item;
      } else {
        return item;
      }
    })
    .join(' ');
}
