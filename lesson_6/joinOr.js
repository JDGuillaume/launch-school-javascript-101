// Understand the Problem
// Input: Array, String(s)
// Output: String

// The function should:
//  - Accept three arguments
//    - Array
//    - A delimiter to be used to join all but the last array element
//    - A conjunction used to join the last array element to all other elements

// Implicit
//  - Default array value is []
//  - Default delimiter is ', '
//  - Default separator for last index should be 'or'
//  - The conjunction should be used if the array length > 2

// Examples / Test Cases
console.log(joinOr([1, 2, 3])); // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; ')); // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and')); // => "1, 2, and 3"
console.log(joinOr([])); // => ""
console.log(joinOr([5])); // => "5"
console.log(joinOr([1, 2])); // => "1 or 2"

// Data Structure
// Array

// Algorithm
// Create a function that accepts three arguments (joinOr)
//  - array
//  - delimiter
//  - conjunction

// Initialize a variable to the string made by joining the array on delimiter

// If the array has a length === 2
// join on the word

// If the array has a length > 2
//  - Search the string from back to front
//  - Once you find the first delimiter, replace it with the conjunction
//  - Update the string variable

// Return the string variable.

// Code
function joinOr(array = [], delimiter = ', ', conjunction = 'or') {
  let arrayString = array.join(delimiter);
  conjunction = ' ' + conjunction + ' ';

  if (array.length === 2) {
    return array.join(conjunction);
  }

  if (array.length > 2) {
    let lastDelimiterIndex = arrayString.lastIndexOf(delimiter);

    return (
      arrayString.slice(0, lastDelimiterIndex + 1) +
      conjunction +
      arrayString.slice(-1)
    );
  }

  return arrayString;
}
