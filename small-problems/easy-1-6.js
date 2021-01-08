// Understand the Problem
// Input: Integer (Positive only)
// Output: String

// The program will take two inputs from the user:
// - A positive integer (i.e., > 0).
// - A string containing either s or p.

// The program will sum or multiply a given range based on user input.
//  - The range should be inclusive of the user's integer.
// The program will output a string with the selected action, input, and total.
// External Code: readline-sync

// Examples / Test Cases
// 5, 's' --> The sum of the integers between 1 and 5 is 15.
// 6, 'p' --> The product of the integers between 1 and 6 is 720.

// Data Structures
// The program should use a loop to iterate over the calculated range.

// Algorithm

// Obtain a positive integer from the user.
//  - Validate their input.
//    - If the input provided does not meet the criteria, ask for input (loop).
// Convert the input to a number and store it in a variable.

// Obtain either the string 's' or the string 'p' from the user.
//  - Validate their input.
//    - If the input provided does not meet the criteria, ask for input (loop).

// Initialize a variable to store the sum/product of your operation.

// (Condition) Based on the user's choice, execute one of two loops.
// Sum
//  - Set total to 0.
//  - Initialize a for loop.
//    - Initialize a counter variable to 1.
//    - Set the exit criteria as count <= user input.
//    - On each iteration:
//      - Add the count to the total.
//      - Increment count by 1.
// Product
//  - Set total to 1.
//  - Initialize a for loop.
//    - Initialize a counter variable to 1.
//    - Set the exit criteria as count <= user input.
//    - On each iteration:
//      - Multiply the count by the total.
//      - Increment count by 1.

// Output the desired string with the values interpolated in.

// Code
const readline = require('readline-sync');

function getInteger() {
  console.log('Please enter an integer greater than 0:');
  let integer = Number(readline.question());

  while (Number.isNaN(integer) || integer <= 0) {
    console.log('Please provide a valid, positive integer greater than 0.');
    integer = Number(readline.question());
  }

  return integer;
}

function getOperation() {
  console.log('Enter "s" to compute the sum, or "p" to compute the product.');
  let operation = readline.question().toLowerCase();

  while (operation !== 's' && operation !== 'p') {
    console.log('Please choose either "s" for sum or "p" for product.');
    operation = readline.question();
  }

  return operation;
}

function performOperation(integer, operation) {
  let total;

  if (operation === 's') {
    total = 0;
    for (let count = 1; count <= integer; count++) {
      total += count;
    }
  } else {
    total = 1;
    for (let count = 1; count <= integer; count++) {
      total *= count;
    }
  }

  return total;
}

function displayTotal(integer, operation, total) {
  console.log(
    `The ${
      operation === 's' ? 'sum' : 'product'
    } of the integers between 1 and ${integer} is ${total}.`
  );
}

function operateOnRange() {
  let integer = getInteger();
  let operation = getOperation();
  let total = performOperation(integer, operation);

  displayTotal(integer, operation, total);
}

operateOnRange();
