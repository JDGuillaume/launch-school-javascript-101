// Understand the Problem
// Input: Integer(s)
// Output: String (s)

// The program should:
// - Gather data from the user (age, age of retirement)
// - Log the following statements
// - It's ${current year}. You will retire in ${year + (retirement - age)}.
// - You have only ${retirement - age} years to go!

// External Code: readline-sync

// Examples / Test Cases
// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

// Data Structure
// we'll use a date object, explicit type coercion, and string interpolation.

// Algorithm
// Import any necessary code.

// Create a function
// Initialize a date object
// Gather data from the user (age, age of retirement) and save in variables.
// Print requested strings and interpolate data into them.

// Code
const readline = require('readline-sync');

function retire() {
  const year = new Date().getFullYear();

  console.log('What is your age?');
  const age = Number(readline.question());

  console.log(`At what age would you like to retire?`);
  const retirement = Number(readline.question());

  console.log(`It's ${year}. You will retire in ${year + (retirement - age)}.`);
  console.log(`You have only ${retirement - age} years to go!`);
}

retire();

// Further Exploration
/* When called without the new keyword, Date() will not instantiate a new Date
   object and will instead print out the current date/time as a string. */
