// Understand the Problem
// Input: Floating Point Number
// Output: String

// The function should:
// - Accept a floating point number of degrees between (0-360)
// - Convert that number to:
//    - Degrees
//    - Minutes (60 minutes in one degree)
//    - Seconds (60 seconds in a minute)
// - Print a string with degrees˚, minutes', and seconds"

// Implicit:
//  - The minutes and seconds are coming from the decimal portion.
//    - Not the whole number!
//  - Minutes and Seconds should be left-padded with 0s

// Examples / Test Cases
// console.log(dms(30)); // 30°00'00"
// console.log(dms(76.73)); // 76°43'48"
// console.log(dms(254.6)); // 254°35'59"
// console.log(dms(93.034773)); // 93°02'05"
// console.log(dms(0)); // 0°00'00"
// console.log(dms(360)); // 360°00'00" or 0°00'00"

// Data Structure
// Number, String, and String Interpolation

// Algorithm
// Create a function that accepts a number as an argument
// Initialize a variable to degrees and set it equal to the floor of degrees.
// Get the decimal portion of the floating point degrees passed in.
//  - We can do this by performing floatingPointDegrees % 1
// Find floatingPointMinutes by multiplying this floatingPointDegrees % 1 * 60.
//  - Store this in a variable.
// Initialize a variable to minutes and set it equal to the floor of prev. step.
// Calculate seconds by performing a similar action on seconds
// Math.floor((floatingPointMinutes % 1) * 60)
// Interpolate those values into the desired string and return it.

// Code
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(floatingPointDegrees) {
  const degrees = Math.floor(floatingPointDegrees);
  const floatingPointMinutes = (floatingPointDegrees % 1) * MINUTES_PER_DEGREE;
  const minutes = Math.floor(floatingPointMinutes);
  const seconds = Math.floor((floatingPointMinutes % 1) * SECONDS_PER_MINUTE);

  const minutesPadded = String(minutes).padStart(2, '0');
  const secondsPadded = String(seconds).padStart(2, '0');

  return `${degrees}˚${minutesPadded}'${secondsPadded}"`;
}

console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0)); // 0°00'00"
console.log(dms(360)); // 360°00'00" or 0°00'00"
