// Understand the Problem
// Create a function that logs all odd numbers, from 1 to 99 inclusively.
// Each number should be on a separate line.

// Examples / Test Cases
// All odd numbers should be output to the console.

// Data Structure
// The function should focus on using a loop with integers.

// Algorithm
// Utilize a for loop to iterate over the numbers 1 to 99.
// - Initalize the loop
// - Set counter to 1.
// - Limit loop cycles to <= 99.
// - On each iteration:
//  - Log the number to the command line.
//  - Increment the count by 2.

// Code
function logOdd() {
  for (let count = 1; count <= 99; count += 2) {
    console.log(count);
  }
}

logOdd();
