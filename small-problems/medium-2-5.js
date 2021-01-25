// Understand the Problem
// Input: Integer
// Output: Integer

// The function should:
// - Accept an integer (number)
// - Return the next highest featured number

// What is a featured number?
/*  - A featured number is an odd number that is a multiple of 7,
      with all of its digits occurring exactly once each. */

// Rules:
//  - Issue an error if there is no next featured number.
//  - 9876543201 is the largest possible, featured number.

// Examples / Test Cases
console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."

// Data Structure
// Array

// Algorithm
// Create a function that accepts an integer (number) as an argument (featured)
// - First, check to see if the calculation is even possible:
//  - If the number passed in is => 9876543201, return an error.

// - Initialize a variable to remainder and set it equal to number % 7.
//  - If the remainder is 0:
//    - Add 7 and store the number in a variable called nextMultiple.
//  - Else:
//    -  subtract it from 7, add it to the number, and store it in nextMultiple.

// Create a separate function that determines if the number is odd. (isOdd)
// - If number % 2 === 1, return true, else false.

// Create a separate function that determines if all digits are different.
//  - Convert the number to a string
//  - Spread the string into an array.
//  - Initialize an array called duplicateArray and set it equal to:
//    - filter the stringArray by seeing if any of the subsequent elements match
//      the current element.
//  - if the duplicateArray has any length return false
//  - else, return true.

// if the number is not odd or the number does not contain all different digits
//  - add 7 to the nextMultiple

// return nextMultiple

// Code
function isOdd(number) {
  return number % 2 === 1;
}

function allDifferentDigits(number) {
  const stringArray = [...String(number)];
  const duplicateArray = stringArray.filter((element, index) =>
    stringArray.slice(index + 1).some(item => item === element)
  );

  if (duplicateArray.length) {
    return false;
  } else {
    return true;
  }
}

function featured(number) {
  const maximumPossibleValue = 9876543201;

  if (number >= maximumPossibleValue) {
    return 'There is no possible number that fulfills those requirements.';
  }

  const remainder = number % 7;

  let nextMultiple = remainder === 0 ? number + 7 : number + (7 - remainder);

  while (!isOdd(nextMultiple) || !allDifferentDigits(nextMultiple)) {
    nextMultiple += 7;
  }

  return nextMultiple;
}
