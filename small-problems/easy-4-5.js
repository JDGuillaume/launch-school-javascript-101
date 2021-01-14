// Understand the Problem
// Input: String
// Output: Boolean

// The function should:
//  - Accept a string
//  - Determine if the string is a palindrome
//    - A palindrome is a string that is the same forwards as backwards

// Rules:
//  - Case insensitive
//  - Non-Alphameric numbers don't matter (only a-z or 0-9).

// Examples / Test Cases
console.log(isRealPalindrome('madam')); // true
console.log(isRealPalindrome('Madam')); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome('356653')); // true
console.log(isRealPalindrome('356a653')); // true
console.log(isRealPalindrome('123ab321')); // false

// Data Structure
// This function will make use of an array and array methods.

// Algorithm
// Create a function that accepts a string.
// Initialize a regex /[a-z0-9]/
// Initialize a variable - String passed in, but lowercase and filtered
// Initialize a variable - Reverse of previous string variable.
// return filteredString === reverseFilteredString

// Code
function isRealPalindrome(unfilteredString) {
  const regex = RegExp(/[a-z0-9]/);

  const filteredString = [...unfilteredString.toLowerCase()]
    .filter(item => regex.test(item))
    .join('');
  const reverseFilteredString = [...filteredString].reverse().join('');

  return filteredString === reverseFilteredString;
}
