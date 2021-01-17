// Understand the Problem
// Input: Array
// Output: Array

// The function should:
// - Accept an array of strings as an argument
// - Return the array of strings with all vowels removed.

// What are vowels? a,e,i,o,u && A,E,I,O,U

// Examples / Test Cases
console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz'])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white'])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ'])); // ["BC", "", "XYZ"]

// Data Structure
// Array, Regular Expressions

// Algorithm
// Create a function that accepts an array of string as an input.
// Iterate over the array
// For each string, replace all vowels with '' using regex
//  - Make sure to make it case insensitive and global

// Code
function removeVowels(stringArray) {
  return stringArray.map(item => item.replace(/[aeiou]/gi, ''));
}
