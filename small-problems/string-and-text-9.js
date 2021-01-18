// Understand the Problem
// Input: String(s)
// Output: Integer

// The function should:
// - Accept a word and a string of text as arguments.
// - Return the number of times the word appears in the text.

// Assumptions:
//  - word and text inputs will never be empty.
//  - all words are separated by spaces
//    - Thus, some words will include punctuation such as periods and commas.

// Implicit: Matches are case insensitive.

// Examples / Test Cases
const text =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

console.log(searchWord('sed', text)); // 4
console.log(searchWord('est', text)); // 0
console.log(searchWord('est,', text)); // 2

// Data Structure
// Array

// Algorithm
// Create a function that accepts a word and a string as arguments.
// Split the string on ' '
// Filter each element based on:
//  - lower case element being equal to lowercase version of word
// Return the length of the filtered array

// Code
function searchWord(word, text) {
  return text
    .split(' ')
    .filter(item => item.toLowerCase() === word.toLowerCase()).length;
}
