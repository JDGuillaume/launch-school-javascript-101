// Understand the Problem

// The program should:
//  - Request input from the user (name).
//  - Return a greeting using that name. ("Hello ${name}").
//  - If the user's name ends in '!', the program should return:
//      -"HELLO ${name.toUpperCase()}, WHY ARE WE SCREAMING?"

// External Code: readline-sync

// Examples / Test Cases
// Bob --> Hello, Bob
// Bob! --> HELLO BOB. WHY ARE WE SCREAMING?

// Data Structure
// The program should rely on the use of string manipulation and regex.

// Algorithm
// Store the readline-sync library in a variable for use latter.
// Obtain input from the user and store it in a variable.
// (Conditional)
// Use a regex condition to determine if the string ends in an exclamation point
//  - If it does, return "HELLO ${name.toUpperCase(), WHY ARE WE SCREAMING?"
//  - If it does not, return "Hello ${name}"

// Code
const readline = require('readline-sync');

function whatsMyName() {
  console.log('What is your name?');
  const name = readline.question();

  let regex = new RegExp(/!$/);

  if (regex.test(name)) {
    console.log(`HELLO ${name.toUpperCase()}, WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

whatsMyName();
