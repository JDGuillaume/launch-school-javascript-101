// Understand the Problem
// Input: String(s)
// Output: String(s)

// Explicit:
//  - The function should accept two strings
//  - The function should compare two strings and identify which one is longer
//  - The function must concatenate the two strings in the following way:
//    - Shorter + Longer + Shorter
//  - Assumptions: Strings are never equal.

// Examples/Test Cases
console.log(shortLongShort('abc', 'defgh')); // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh')); // "fghabcdefgh"
console.log(shortLongShort('', 'xyz')); // "xyz"

// Data Structure
// The function should rely on strings and built in string methods.

// Algorithm
// Create a function that accepts two strings (i.e., string1, string2).
// (Conditional)
//  - If string1.length > string2.length:
//    - return string2 + string1 + string2
//  - Else
//    - return string1 + string2+ string1

// Code
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2.concat(string1, string2);
  } else {
    return string1.concat(string2, string1);
  }
}
