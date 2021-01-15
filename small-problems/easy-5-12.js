// Understand the Problem
// Input: String
// Output: Integer

// The program should have two functions:
//  - Before Midnight
//  - After Midnight

// Before Midnight
//  - Should return the number of minutes BEFORE midnight

// After Midnight
//  - Should return the number of minutes AFTER midnight

// Assumptions:
// - Disregard Daylight Savings and Standard Time and other irregularities.

// Constraints
// - You may not use the JavaScript Date Object.

// Examples / Test Cases
// console.log(afterMidnight('00:00') === 0);
// console.log(beforeMidnight('00:00') === 0);
// console.log(afterMidnight('12:34') === 754);
// console.log(beforeMidnight('12:34') === 686);
// console.log(afterMidnight('24:00') === 0);
// console.log(beforeMidnight('24:00') === 0);

// Data Structure
// Array

// Algorithm
// Initialize a constant HOURS_PER_DAY = 24;
// Initialize a constant MINUTES_PER_HOUR = 60;

// Both functions
// Create a function that accepts a string.
// Split the string into an array based on the ':' as a delimiter
// initialize a variable called hours to array[0] and convert it to a number.
// initialize a variable called minutes to array[1] and convert it to a number.

// Before midnight
// Set hours = to HOURS_PER_DAY  - hours
// return the result of (hours * MINUTES_PER_HOUR) * minutes

// After Midnight
// return the result of (hours * MINUTES_PER_HOUR) * minutes

// Code
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;

// It will never be 24 o clock
const NEGATIVE_OFFSET = 1;

function beforeMidnight(time) {
  const timeArray = time.split(':');
  let hours = Number(timeArray[0]);
  let minutes = Number(timeArray[1]);

  if (hours === 24) {
    hours = 0;
  }

  if (!(hours === 0)) {
    hours = HOURS_PER_DAY - hours - NEGATIVE_OFFSET;
  }

  if (!(minutes === 0)) {
    minutes = MINUTES_PER_HOUR - minutes;
  }

  return hours * MINUTES_PER_HOUR + minutes;
}

function afterMidnight(time) {
  const timeArray = time.split(':');
  let hours = Number(timeArray[0]);
  let minutes = Number(timeArray[1]);

  if (hours === 24) {
    hours = 0;
  }

  return hours * MINUTES_PER_HOUR + minutes;
}

console.log(afterMidnight('00:00') === 0);
console.log(beforeMidnight('00:00') === 0);
console.log(afterMidnight('12:34') === 754);
console.log(beforeMidnight('12:34') === 686);
console.log(afterMidnight('24:00') === 0);
console.log(beforeMidnight('24:00') === 0);
