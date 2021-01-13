// Understand the Problem
// Input: String(s)
// Output: String(s)

// The program should:
// - Collect four different strings from the user:
//  - Noun
//  - Verb
//  - Adjective
//  - Adverb

// Next, the program should:
// - Console.log several statements with the provided words interpolated in.

// External Code: readline-sync

// Examples / Test Cases
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.

// Data Structure
// The program would benefit from the use of variables and string interpolation.

// Algorithm
// Import necessary code.
// Create a function
// Request four variables from the user and store each in its own variable.
// Interpolate the values provided into statements logged to the console.

// Code
const readline = require('readline-sync');

function madLibs() {
  console.log('Enter a noun:');
  const noun = readline.question();

  console.log('Enter a verb:');
  const verb = readline.question();

  console.log('Enter an adjective:');
  const adjective = readline.question();

  console.log('Enter an adverb:');
  const adverb = readline.question();

  console.log(
    `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`
  );
  console.log(
    `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`
  );
  console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
}

madLibs();
