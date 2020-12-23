// Import the readline library and attach it to the readline variable.
const readline = require('readline-sync');

// Import our configuration file and attach it to the message variable.
const message = require('./calculator-config.json');

// Create a reusable function that prepends log statements with the => marker.
function prompt(message) {
  console.log(`=> ${message}`);
}

// Create a function to determine whether the users input is valid.
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Welcome the user to the program.
prompt(message.welcome);

// Boolean flag for enabling multiple operations.
let continueOperations = true;

while (continueOperations) {
  // Ask the user for the first number and validate their input.
  prompt(message.firstNumber);
  let firstNumber = readline.question();

  while (invalidNumber(firstNumber)) {
    prompt(message.invalidNumber);
    firstNumber = readline.question();
  }

  // Ask the user for the second number and validate their input.
  prompt(message.secondNumber);
  let secondNumber = readline.question();

  while (invalidNumber(secondNumber)) {
    prompt(message.invalidNumber);
    secondNumber = readline.question();
  }

  // Ask the user for an operation to perform and validate their input.
  prompt(message.operations);

  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message.invalidOperation);
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
  prompt(message.result + `${output}.`);

  // Determine if the user would to like to perform another operation.
  prompt(message.anotherOperation);
  let operationChoice = readline.question('');

  if (operationChoice[0].toLowerCase() === 'y') {
    continueOperations = true;
  } else {
    continueOperations = false;
  }
}
