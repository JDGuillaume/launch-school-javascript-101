// Understand the Problem
// Input: String
// Output: Array

// The function should:
// - Accept a string as an argument
// - Return an array of all substrings that are palindromes

// Rules:
// - Palindromes should be ordered by order of appearance in the input string.
// - Duplicate substrings should be included multiple times.
// - Palindromes will be case sensitive.
// - Single characters are not palindromes

// What is a palindrome?
// A palindrome is a string that is the same forward and backward.

// External Code:
//  - You should use the function created in the previous exercise (5, 5-bonus).

// Examples / Test Cases
console.log(palindromes('abcd')); // []
console.log(palindromes('madam')); // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

// Data Structure
// Array

// Algorithm
// Import/Copy external code
// Create a function that accepts a string as an argument.
// Call the substring function from exercise 5 on the string.
// - store the array in a variable (substrings)
// Filter the array to items based on two conditions:
//  - Length is greater than 1
//  - Is Palindrome:
//    - Spread the each substring array element in to an array:
//      - reverse it, and join it.
//    - Set equal to original item
// Return filtered array

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

function palindromes(phrase) {
  const phraseSubstrings = substrings(phrase);
  return phraseSubstrings.filter(item => {
    return item.length > 1 && item === [...item].reverse().join('');
  });
}
