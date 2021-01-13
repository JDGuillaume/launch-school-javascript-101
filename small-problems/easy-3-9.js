// Understand the Problem
// Input: String
// Output: String

// The function should:
// - Take a string as an argument
// - Replace non-alphabetic characters with spaces
// - Limit consecutive space characters to 1.
// - Return the cleaned string

// Examples / Test Cases
console.log(cleanUp("---what's my +*& line?")); // " what s my line "

// Data Structure
// The function would likely benefit from the use of regex.

// Algorithm
// Create a function that accepts a string as an argument.
// Initialize a regex variable to [^a-zA-z]
// Initialize a regex variable to '\s{2}'
// Initialize a variable to the string with non-alphabetic characters replaced.
// Update the cleanStatement variable to replace all consecutive spaces with ''.
// Return the cleaned statement.

// Code
function cleanUp(statement) {
  const regex = /[^a-z]/gi;
  const spaceRegex = /\s{2}/g;
  let cleanedStatement = statement.replace(regex, ' ').replace(spaceRegex, '');
  return cleanedStatement;
}
