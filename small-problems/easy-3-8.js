// Understand the Problem
// Input: Integer(s)
// Output: String

// The function should
//  - Accept three numbers as arguments
//  - Calculate the average of the three numbers
//  - Return the letter grade associated with that average.

// Assumption: Arguments will be between 0 and 100.

// Examples / Test Cases
console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"

// Data Structure
// The function will benefit from built-in Math functions and a switch statement

// Algorithm
// Create a function that accepts 3 numbers as arguments
// Calculate the average of the three numbers.
// (If/Else-if/Else)
// - Based on the average obtained, map the average to the correct grade.

// Code
function getGrade(gradeOne, gradeTwo, gradeThree) {
  const average = (gradeOne + gradeTwo + gradeThree) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}
