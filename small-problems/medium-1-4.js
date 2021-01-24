/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */

// Understand the Problem
// Input: String
// Output: Dynamic

// Goal: Replicate a stack-and-register-based programming language

// The function should be able to take the following commands:
// n : Place a value, n, in the register. Do not modify the stack.
// PUSH : Push the register value onto the stack. Leave the value in the register.
// ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
// SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
// MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
// DIV : Pop a value from the stack and divide it into the register value, storing the integer result in the register.
// MOD : Pop a value from the stack and divide it into the register value, storing the integer remainder of the division in the register.
// POP : Remove the topmost item from the stack and place it in the register.
// PRINT : Print the register value.

// Rules:
//  - All operations are integer operations (only important for DIV/MOD)
//  - The stack and register should be initialized to [] and 0, respectively.

// Implicit: All commands are given in uppercase.

// Examples / Test Cases
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

// Data Structure
// Array, Switch Statement

// Algorithm
// Create a function that accepts a string as an argument (minilang(statement)).
// Initialize an empty array (stack).
// Initialize the variable register to 0.

// Split the statement string on the ' ' character and store that array in an array (commands).

// Implement each command - switch statement?
// n - If converting the command to a number isn't NaN, convert it a number and add it to the register (make default)
// PUSH - Add the register value onto the stack as a new element.
// ADD - Reassign register to register + popped element of stack
// SUB - Reassign register to register - popped element of stack
// MULT - Reassign register to register * popped element of stack
// DIV - Reassign register to register / popped element of stack
// MOD - Reassign register to register % popped element of stack
// POP - Reassign register to pop?
// PRINT - Console log the current value of register

// For each of the elements in the command array, execute each command.

// Code
function minilang(statement) {
  const stack = [];
  let register = 0;

  const commands = statement.split(' ');

  commands.forEach(command => {
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
  });
}
