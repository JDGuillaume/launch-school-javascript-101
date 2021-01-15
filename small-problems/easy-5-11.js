// Understand the Problem
// Input: Integer
// Output: String

// The function should:
//  - Accept an integer as an argument
//  - Calculate the number of minutes before or after midnight.

// Constraints:
//  - We may not use the Date object.

// Rules:
//  - Integers can be positive, zero, or negative.

// Examples / Test Cases
// console.log(timeOfDay(0) === '00:00');
// console.log(timeOfDay(-3) === '23:57');
// console.log(timeOfDay(35) === '00:35');
// console.log(timeOfDay(-1437) === '00:03');
// console.log(timeOfDay(3000) === '02:00');
// console.log(timeOfDay(800) === '13:20');
// console.log(timeOfDay(-4231) === '01:29');

// Data Structure
// String, Number

// Algorithm
// Initialize a constant to 60 and name it MINUTES_PER_HOUR
// Initialize a constant to 24 and name it HOURS_PER_DAY

// Create a function that takes an integer as an argument.
// Initialize hours variable.
// - hours is equal to Math.floor(Math.abs(Integer / MINUTES_PER_HOUR)).
// Initialize minutes variable
// - minutes is equal to Math.abs(Integer % MINUTES_PER_HOUR)

// While Loop
// while hours > HOURS_PER_DAY
// subtract HOURS_PER_DAY from hours.

// Conditional
// if the integer passed in is negative,
// hours = HOURS_PER_DAY - hours
// minutes = MINUTES_PER_HOUR - minutes

// Pad the left side of hours and minutes with 0s if needed

// Return a template literal with the padded values interpolated in.

// Code
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;

// It's never going to be 24 a clock.
const NEGATIVE_OFFSET = 1;

function timeOfDay(integer) {
  let hours = Math.floor(Math.abs(integer / MINUTES_PER_HOUR));
  let minutes = Math.abs(integer % MINUTES_PER_HOUR);

  while (hours > HOURS_PER_DAY) {
    hours -= HOURS_PER_DAY;
  }

  if (integer < 0) {
    hours = HOURS_PER_DAY - hours - NEGATIVE_OFFSET;
    minutes = MINUTES_PER_HOUR - minutes;
  }

  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');

  return `${paddedHours}:${paddedMinutes}`;
}

console.log(timeOfDay(0) === '00:00');
console.log(timeOfDay(-3) === '23:57');
console.log(timeOfDay(35) === '00:35');
console.log(timeOfDay(-1437) === '00:03');
console.log(timeOfDay(3000) === '02:00');
console.log(timeOfDay(800) === '13:20');
console.log(timeOfDay(-4231) === '01:29');
