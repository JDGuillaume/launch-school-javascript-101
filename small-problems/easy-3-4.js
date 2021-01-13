// Understand the Problem
// Input: Integer >= 2
// Output: Integer

// The function should:
// - Take an integer as an argument
// - Return the index in the Fibonacci series where the number x digits.

// The Fibonacci Sequence
// The first two numbers are always 1
// Every subsequent number is always the sum of the two prior numbers.
// 1, 1, 2, 3, 5, 8, 13, 21
// n = n - 1 + n - 2

// Examples / Test Cases
// findFibonacciIndexByLength(2); // 7
// findFibonacciIndexByLength(10); // 45
// findFibonacciIndexByLength(16); // 74

// Data Structure
// This function will likely benefit from the use of a loop and an array.

// Algorithm
// Create a function that accepts a number as an argument.
// Initialize an array to contain the values 1, 1
// Initialize a count variable to 2;

// While Loop
// Set the current element in the array to array[count-1], [count-2].
// if the current element has the correct length, break;
// increment count
// End Loop

// return the length of the array

// Code
function findFibonacciIndexByLength(desiredNumberLength) {
  const resultsArray = [1, 1];
  let count = 2;

  while (true) {
    resultsArray[count] = resultsArray[count - 1] + resultsArray[count - 2];

    if (resultsArray[count] > Number.MAX_SAFE_INTEGER) {
      return `You've requested a number higher than JavaScript can handle. Try a lower number of digits!`;
    }

    if (String(resultsArray[count]).length === desiredNumberLength) {
      break;
    }

    count++;
  }

  return resultsArray.length;
}

console.log(findFibonacciIndexByLength(2)); // 7
console.log(findFibonacciIndexByLength(10)); // 45
console.log(findFibonacciIndexByLength(16)); // 74
console.log(findFibonacciIndexByLength(17));
