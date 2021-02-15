// Given the string of chars alphabetic characters limited to a-z, do as in the sample cases.
// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its original position in the string argument.
// (index 0 being position 1, index 1 being position 2...)
// The repeated sequences of a character should be separated by a hyphen in the returned string.
// In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.

// Test Cases
console.log(accum('abcd')); // "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt')); // "C-Ww-Aaa-Tttt"
console.log(accum(''));
// Understand the Problem
// Examples / Test Cases
// Data Structure
// Algorithm
// Code
function accum(string) {
  return [...string.toLowerCase()]
    .map((character, index) => {
      return character.toUpperCase() + character.repeat(index);
    })
    .join('-');
}
