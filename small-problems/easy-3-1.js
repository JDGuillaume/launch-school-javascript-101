// Understand the Problem
// Input: String
// Output: String

// The function should:
//  - Accept a string
//  - Return the string with all consecutive duplicate characters removed.

// Implicit:
//  - You'll need to handle empty strings and strings with 1 character.
//  - We were not instructed nor given any evidence of handling Upper vs Lower
//    - As a result, we will assume that they're different.

// Examples / Test Cases
console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""

// Data Structure
// The function will likely benefit from an array and built-in string methods.

// Algorithm
// Create a function that accepts a string as an argument.
// Initialize a result variable to an empty string ('').
// (Conditional)
//  - If the length of the string is less than or equal to 1, return the string.

// (Loop) Iterate over the string
// Add the first character to the result string.
//  - (Conditional)
/*    - For every subsequent string[index]:
        -if string[index] !== string[index-1]
          - Add it to the result string
*/

// Return the result string.

// Code
function crunch(string) {
  let result = '';

  if (string.length <= 1) {
    return string;
  }

  for (let count = 0; count < string.length; count++) {
    if (count === 0) {
      result = string[count];
      continue;
    }

    if (string[count] !== string[count - 1]) {
      result += string[count];
    }
  }
  return result;
}
