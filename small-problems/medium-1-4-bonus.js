/* eslint-disable max-lines-per-function */

// Further Exploration
/*
  Refactor the minilang function to include some error handling. In particular,
  the function should detect and report empty stack conditions (trying to use
  a value from the stack when there are no values), and invalid tokens in
  the program. Ideally, the function should return an error message if an
  error occurs, or undefined if the program runs successfully.
*/

// Code
function isValidCommand(command) {
  const acceptableCommands = [
    'PUSH',
    'ADD',
    'SUB',
    'MULT',
    'DIV',
    'MOD',
    'POP',
    'PRINT',
  ];

  if (!acceptableCommands.includes(command) && Number.isNaN(Number(command))) {
    return false;
  } else {
    return true;
  }
}

function isStackEmpty(command, stack) {
  const operationalCommands = ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'];
  if (operationalCommands.includes(command) && stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

function performOperation(command, stack, register) {
  switch (command) {
    case 'PUSH':
      stack.push(register);
      break;
    case 'ADD':
      register += stack.pop();
      break;
    case 'SUB':
      register -= stack.pop();
      break;
    case 'MULT':
      register *= stack.pop();
      break;
    case 'DIV':
      register = Math.floor(register / stack.pop());
      break;
    case 'MOD':
      register = Math.floor(register % stack.pop());
      break;
    case 'POP':
      register = stack.pop();
      break;
    case 'PRINT':
      console.log(register);
      break;
    default:
      register = Number(command);
  }
  return register;
}

function minilang(statement) {
  const stack = [];
  let register = 0;

  const commands = statement.split(' ');
  const registerCommands = ['ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP'];

  commands.forEach(command => {
    if (!isValidCommand(command)) {
      return console.log("You've entered an invalid command");
    }

    if (isStackEmpty(command, stack)) {
      return console.log(`The stack is empty!`);
    }

    if (
      registerCommands.includes(command) ||
      Number.isInteger(Number(command))
    ) {
      register = performOperation(command, stack, register);
    } else {
      performOperation(command, stack, register);
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)

minilang('WAFFLES PRINT');
minilang('4 ADD PRINT');
