// Understand the Problem
// Input: String
// Output: Array

// The function should:
// - Accept a string as an argument
// - Return an array of every substring in the string
//    - The array should be ordered by where in the string the substring begins.
//      - Meaning substrings that start at index 0 are first, index 1 are next
//        - Within this, substrings should be ordered from shortest to longest

// Examples / Test Cases
// console.log(substrings('abcde'));

// returns
// [
//   'a',
//   'ab',
//   'abc',
//   'abcd',
//   'abcde',
//   'b',
//   'bc',
//   'bcd',
//   'bcde',
//   'c',
//   'cd',
//   'cde',
//   'd',
//   'de',
//   'e',
// ];

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string as an argument
// Initialize an empty array (substrings)

// (For Loop) | Count = 0, Count < string.length, count++
// On each iteration:
// - Grab a portion of the string array from count to end
// - Run that subarray through leadingSubstrings
// - Concatenate results and leadingSubstrings output.

// return result.

// Code
function leadingSubstrings(phrase) {
  const phraseArray = [...phrase];

  return phraseArray.map((_, index) =>
    phraseArray.slice(0, index + 1).join('')
  );
}

function substrings(word) {
  const results = [];

  [...word].forEach((_, index) => {
    leadingSubstrings(word.slice(index)).forEach(item => results.push(item));
  });

  return results;
}

console.log(substrings('abcde'));
