// Import the readline library and attach it to the readline variable.
const readline = require('readline-sync');

// Import our configuration file and attach it to the message variable.
const MESSAGES = require('./calculator-config.json');

// Create a reusable function that prepends log statements with the => marker.
function prompt(message) {
  console.log(`=> ${message}`);
}

// Create a function to determine whether the user's number input is valid.
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Create a function to determine whether the user's language choice is valid.
function invalidLanguage(choice) {
  return !(choice === '1' || choice === '2');
}

prompt(MESSAGES.Language);
let language = readline.question('');

while (invalidLanguage(language)) {
  prompt(MESSAGES.Language);
  language = readline.question('');
}

// Convert language variable to correct language
switch (language) {
  case '1':
    language = 'English';
    break;
  case '2':
    language = 'Spanish';
    break;
}

function messages(message, language = 'English') {
  return MESSAGES[language][message];
}

// Welcome the user to the program.
prompt(messages('welcome', language));

// Boolean flag for enabling multiple operations.
let continueOperations = true;

while (continueOperations) {
  // Ask the user for the first number and validate their input.
  prompt(messages('firstNumber', language));
  let firstNumber = readline.question();

  while (invalidNumber(firstNumber)) {
    prompt(messages('invalidNumber', language));
    firstNumber = readline.question();
  }

  // Ask the user for the second number and validate their input.
  prompt(messages('secondNumber', language));
  let secondNumber = readline.question();

  while (invalidNumber(secondNumber)) {
    prompt(messages('invalidNumber', language));
    secondNumber = readline.question();
  }

  // Ask the user for an operation to perform and validate their input.
  prompt(messages('operations', language));

  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages('invalidOperation', language));
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
  prompt(messages('result', language) + `${output}.`);

  // Determine if the user would to like to perform another operation.
  prompt(messages('anotherOperation', language));
  let operationChoice = readline.question('');

  // Included s for 'Si' in Spanish.
  if (
    operationChoice[0].toLowerCase() === 'y' ||
    operationChoice[0].toLowerCase() === 's'
  ) {
    continueOperations = true;
  } else {
    continueOperations = false;
  }
}
