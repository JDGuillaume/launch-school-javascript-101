// Understand the Problem
// Input: Integer(s)
// Output: String(s)

// The function should:
// - Request two numbers from the user
// - Compute the following operations using each number as an operand
//   - +, -, *, /, %, **
// - For each operation, the function should return a new line.

// External Code: readline-sync

// Examples / Test Cases

// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 141050039560662968926103

// Data Structure
// The function should utilize string interpolation to remain concise.

// Algorithm
// Assign the readline-sync library to a readline variable.
// Create a prompt function to keep code DRY.
/* Request two numbers from the user, explicit coerce
   them to numbers, and store them in variables. */
// For each operation, return a statement with the variables interpolated in.
// For division, the answer should be rounded.

// Code
const readline = require('readline-sync');

function prompt(string) {
  return console.log(`=> ${string}`);
}

function operate() {
  prompt('Enter the first number:');
  const number1 = Number(readline.question());

  prompt('Enter the second number:');
  const number2 = Number(readline.question());

  prompt(`${number1} + ${number2} = ${number1 + number2}`);
  prompt(`${number1} - ${number2} = ${number1 - number2}`);
  prompt(`${number1} * ${number2} = ${number1 * number2}`);
  prompt(`${number1} / ${number2} = ${Math.round(number1 / number2)}`);
  prompt(`${number1} % ${number2} = ${number1 % number2}`);
  prompt(`${number1} ** ${number2} = ${number1 ** number2}`);
}

operate();
