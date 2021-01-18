// Understand the Problem
// Input: String
// Output: String

// The function should:
// - Accept a string as an argument.
// - Return an array where each element is a word and its length
//    - i.e., // ["cow 3", "sheep 5", "chicken 7"]

/* Assumption: You may assume that every pair of words in the
   string will be separated by a single space. */

// Rules:
/* - If the argument is an empty string or if no argument is passed,
     the function should return an empty array.*/

// Examples / Test Cases
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths('')); // []
console.log(wordLengths()); // []

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string
// Split the string into an array based on ' '
// Iterate over the array and return each element + ' ' + the elements length
// Return the array

// Code
function wordLengths(phrase = '') {
  return phrase.length
    ? phrase.split(' ').map(item => item + ' ' + item.length)
    : [];
}
