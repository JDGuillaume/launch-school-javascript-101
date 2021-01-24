// Understand the Problem
// Input: String
// Output: Object

// The function should:
//  - Accept a string
//  - Calculate the percentage of lowercase, uppercase, and other characters
//  - Return those percentages in an object.

// Implicit: Percentages will be strings in object.

// Assumptions: The string will always contain at least one character.

// Examples / Test Cases
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

// Data Structure
// Object, Regex

// Algorithm
// Create a function that accepts a string as an argument (letterPercentages())
// Initialize an empty object to the variable (percentages)
// Initialize a variable to the length of the statement passed in (length).
// For each desired calculation:
//  Uppercase - Create an array of all matching uppercase letters
//  - Assign a variable to the length oof the array (uppercaseCount)
//  Lowercase - Create an array of all matching lowercase letters
//  - Assign a variable to the length of the array (lowerCaseCount)
//  Neither - Create an array of all non-alphabetic characters
//  - Assign a variable to the length  of the array (neitherCount)

// percentages[lowercase] = (lowercaseCount / length) * 100
// percentages[uppercase] = (uppercase / length) * 100
// percentages[neither] = (neither / length) * 100

// If needed, make the numbers fixed to two decimals
// return percentages

// Code
function letterPercentages(statement) {
  const percentages = {};
  const length = statement.length;

  const lowercaseCount = [...statement.matchAll(/[a-z]/g)].length;
  const uppercaseCount = [...statement.matchAll(/[A-Z]/g)].length;
  const neitherCount = [...statement.matchAll(/[^a-z]/gi)].length;

  percentages['lowercase'] = ((lowercaseCount / length) * 100).toFixed(2);
  percentages['uppercase'] = ((uppercaseCount / length) * 100).toFixed(2);
  percentages['neither'] = ((neitherCount / length) * 100).toFixed(2);

  return percentages;
}
