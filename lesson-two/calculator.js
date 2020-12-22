const readline = require('readline-sync');

// Welcome the user to the program.
console.log('Welcome to Calculator!');

// Ask the user for the first number.
console.log("What's the first number?");
const firstNumber = Number(readline.question());

// Ask the user for the second number.
console.log("What's the second number?");
const secondNumber = Number(readline.question());

// Ask the user for an operation to perform.
console.log(
  'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'
);
const operation = readline.question();

// Perform the operation on the two numbers.
let output;
if (operation === '1') {
  output = firstNumber + secondNumber;
} else if (operation === '2') {
  output = firstNumber - secondNumber;
} else if (operation === '3') {
  output = firstNumber * secondNumber;
} else {
  output = firstNumber / secondNumber;
}

// Print the result to the terminal.
console.log(`The result is: ${output}`);
