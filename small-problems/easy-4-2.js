// Understand the Problem
// Input: Integer(s)
// Output: String

// The function should:
// - Gather six numbers from the user
// - Tell whether the sixth number occurs in the previous 5.
// - Output a string dependent on whether sixth number is included.

// External Code: readline-sync

// Examples / Test Cases
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

// Data Structure
// This function will benefit from the use of an array and array methods.

// Algorithm
// Import necessary code (i.e., readline-sync).

// Create a function
// Initialize an array. (userNumbers)
// Get each of the numbers from the user and add the first five to userNumbers.
/* Initialize a variable equal to a boolean value (isIncluded)
   that indicates whether the sixth number is the array. */
// (Conditional)
// If isIncluded is true, print 'The number ${x} appears in ${array}'.
// If isIncluded is false, print 'The number ${x} does not appear in ${array}'.

// Code
const readline = require('readline-sync');

function getUserInput() {
  const array = [];
  console.log('Enter the 1st number');
  const first = Number(readline.question());

  console.log('Enter the 2nd number');
  const second = Number(readline.question());

  console.log('Enter the 3rd number');
  const third = Number(readline.question());

  console.log('Enter the 4th number');
  const fourth = Number(readline.question());

  console.log('Enter the 5th number');
  const fifth = Number(readline.question());

  console.log('Enter the 6th number');
  const sixth = Number(readline.question());

  array.push(first, second, third, fourth, fifth, sixth);
  return array;
}

function evaluateNumbers() {
  const numbersArray = getUserInput();
  const sixthNumber = numbersArray.pop();
  const isIncluded = numbersArray.includes(sixthNumber);

  if (isIncluded) {
    return `The number ${sixthNumber} appears in ${numbersArray.join(', ')}.`;
  } else {
    return `The number ${sixthNumber} does not appear in ${numbersArray.join(
      ', '
    )}.`;
  }
}

console.log(evaluateNumbers());
