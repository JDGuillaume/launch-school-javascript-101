// Understand the Problem
// Input: String
// Output: Boolean

// The function should:
//  - Accept a string as an argument
//  - Return a boolean
//    - If the string passed in is a palindrome, return true.
//    - Else, false.

// Rules:
//  - Case sensitive
//  - All characters matter

// Examples / Test Cases
console.log(isPalindrome('madam')); // true
console.log(isPalindrome('Madam')); // false (case matters)
console.log(isPalindrome("madam i'm adam")); // false (all characters matter)
console.log(isPalindrome('356653')); // true

// Data Structure
// This function will benefit from the use of arrays and built-in array methods.

// Algorithm
// Create a function that accepts a string. (isPalindrome)
// Initialize a boolean variable to true; (isSame)

// Spread the string into an array
// Reverse the elements of the array.
// Convert the array to a string and save it as a new variable (stringReversed).

// (For Loop)
// Count = 0
// Exit Criteria: count < string.length
// Count++
// On each iteration,
//  - Check to see if stringForward[count] !== stringReversed[count]
//    - if it's true, isSame = false.

// return isSame

// Code
function isPalindrome(stringForward) {
  let isSame = true;
  let length = stringForward.length;
  const stringReversed = [...stringForward].reverse().join('');

  for (let count = 0; count < length; count++) {
    if (stringForward[count] !== stringReversed[count]) {
      isSame = false;
    }
  }
  return isSame;
}
