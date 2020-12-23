// Attach the readline library to the readline variable for ease of use.
const readline = require('readline-sync');

// Create a reusable function that prepends log statements with the => marker.
function prompt(message) {
  console.log(`=> ${message}`);
}

// Create a function to determine whether the users input is valid.
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Welcome the user to the program.
prompt('Welcome to Calculator!');

// Boolean flag for enabling multiple operations.
let continueOperations = true;

while (continueOperations) {
  // Ask the user for the first number and validate their input.
  prompt("What's the first number?");
  let firstNumber = readline.question();

  while (invalidNumber(firstNumber)) {
    prompt("Hmm... that doesn't look like a valid number.");
    firstNumber = readline.question();
  }

  // Ask the user for the second number and validate their input.
  prompt("What's the second number?");
  let secondNumber = readline.question();

  while (invalidNumber(secondNumber)) {
    prompt("Hmm... that doesn't look like a valid number.");
    secondNumber = readline.question();
  }

  // Ask the user for an operation to perform and validate their input.
  prompt(
    'What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide'
  );

  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readline.question();
  }

  // Perform the operation on the two numbers.
  let output;

  switch (operation) {
    case '1':
      output = Number(firstNumber) + Number(secondNumber);
      break;
    case '2':
      output = Number(firstNumber) - Number(secondNumber);
      break;
    case '3':
      output = Number(firstNumber) * Number(secondNumber);
      break;
    case '4':
      output = Number(firstNumber) / Number(secondNumber);
      break;
  }

  // Print the result to the terminal.
  prompt(`The result is: ${output}`);

  // Determine if the user would to like to perform another operation.
  prompt('Would you like to perform another operation? (y/n)');
  let operationChoice = readline.question('');

  if (operationChoice[0].toLowerCase() === 'y') {
    continueOperations = true;
  } else {
    continueOperations = false;
  }
}
