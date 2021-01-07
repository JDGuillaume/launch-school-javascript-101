// Understand the Problem
// Create a function that logs all even numbers, from 1 to 99 inclusively.
// Each number should be on a separate line.

// Examples / Test Cases
// All even numbers should be output to the console.

// Data Structure
// The function should focus on using a loop with integers.

// Algorithm
// Utilize a for loop to iterate over the numbers 1 to 99.
// - Initalize the loop
// - Set counter to 2.
// - Limit loop cycles to <= 99.
// - On each iteration:
//  - Log the number to the command line.
//  - Increment the count by 2.

// Code
function logEven() {
  for (let count = 2; count <= 99; count += 2) {
    console.log(count);
  }
}

logEven();
