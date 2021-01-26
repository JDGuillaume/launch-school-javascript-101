// Understand the Problem
// Input: Integer
// Output: Integer

// The function should:
//  - Accept an integer as an argument.
//  - Return the difference of the sum of squares - the sum of squares
//    - of all integers between the provided number and 1

// What is the square of the sum?
// 3 => (1 + 2 + 3)**2

// What is the sum of the squares?
// 3 => (1**2 + 2**2 + 3**2)

// Examples / Test Cases
console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150

// Data Structure
// Array

// Algorithm
// Create a function that accepts an integer as an argument. (integer)
// initialize an empty array to the variable integers

// Loop
// Initialize count to 1
// Exit Criteria <= integer
// Push the count onto the array

// Create two copies of the integers array
//  - Store one in the variable sumSquare
//  - Store the other in squareSum

// - Iterate over each array and perform the desired operation
//    - sumSquare - Sum all elements then square the sum
//    - squareSum - Square all elements and add their sum

// Return sumSquare - squareSum

// Code
function sumSquareDifference(integer) {
  const integers = [];

  for (let count = 1; count <= integer; count++) {
    integers.push(count);
  }

  const sumSquare = integers.slice().reduce((sum, value) => sum + value) ** 2;
  const squareSum = integers
    .slice()
    .map(item => item ** 2)
    .reduce((sum, value) => sum + value);

  return sumSquare - squareSum;
}
