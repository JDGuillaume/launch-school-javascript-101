// Understand the Problem
// Input: Array, Object
// Output: String

// The function should:
//  - Accept two arguments.
//    - An array with two or more elements that when joined with ' ' is a name.
//    - An object with two keys: title, occupation which contain strings.
//  - Return
//    - A greeting that uses the persons name and title.

// Examples / Test Cases
console.log(
  greetings(['John', 'Q', 'Doe'], {title: 'Master', occupation: 'Plumber'})
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

// Data Structure
/* The function should extract and interpolate the data from
   the array and object using built-in methods. */

// Algorithm
// Create a function that accepts two arguments (array, object).
// Return a template literal with the data interpolated in.

// Code
function greetings(name, employment) {
  return `Hello, ${name.join(' ')}! Nice to have a ${employment.title} ${
    employment.occupation
  } around.`;
}
