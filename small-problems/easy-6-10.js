// Understand the Problem
// Input: String
// Output: String

// The function should:
// - Accept a string as an argument
// - Reverse the order of the character of all words with 5 or more characters.
// - Return the string with reversals.

// Assumptions:
//  - Input string will consist of only letters and spaces.
//  - Words will be separated by a space.

// Examples / Test Cases
console.log(reverseWords('Professional')); // "lanoisseforP"
console.log(reverseWords('Walk around the block')); // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School')); // "hcnuaL loohcS"

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string as an argument.
// Split the string into an array on the " " character
// Iterate over the array.
// - If the length of the current element is >= 5:
//    - Spread it into an array, reverse it's order, and join on ""
// - Else return the item
// Return the array joined on ' ' as a string.

// Code
function reverseWords(phrase) {
  return phrase
    .split(' ')
    .map(item => {
      if (item.length >= 5) {
        return [...item].reverse().join('');
      } else {
        return item;
      }
    })
    .join(' ');
}
