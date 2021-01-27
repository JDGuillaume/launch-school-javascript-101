// Understand the Problem
// Input: Template
// Output: Strings

// The function should:
//  - Accept a template variable containing several strings
//  - Insert a random word type into specific places within the template
//    - Word types include adjectives, nouns, verbs, adverbs
//  - Log the completed statement to the console

// Implicit: Inserted words may occur more than once.
//  - aka we don't have to remove them on use.

// Examples / Test Cases
// function madlibs(template) {
//    ...
// }

// These examples use the following list of replacement texts:
// adjectives: quick lazy sleepy noisy hungry
// nouns: fox dog head leg tail cat
// verbs: jumps lifts bites licks pats
// adverbs: easily lazily noisily excitedly
// ------

// madlibs(template1);
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

// madlibs(template1);
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

// madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

// madlibs(template2);      // The "cat" "pats" the "cat"'s "head".

// Data Structure
// Object, Array

// Algorithm
// Templates should be created like the following:
/* `The adjective brown noun adverb
    verb the adjective yellow noun, who
    adverb verb his noun and looks around.`
*/

// Create a function (randomIndex) that accepts one number (end)
//  - This function should generate a random number between 0 and end

// Create a function that accepts a string as an argument.
// Split the string on the ' ' into an array. (templateArray)
// Split the array elements further to deal with commas.

// Initialize an array to the the wordTypes

// Create an object that hold multiple instances of each word type.
//  - adjectives
//  - nouns
//  - verbs
//  - adverbs

/* Iterate over any subarrays, replacing every word that's in word types
   with a random word from the object key. Join the subarrays on ','.

   Repeat this step for the outer array.
*/

// Return the outer array joined on ' '

// Code
function randomIndex(end) {
  return Math.floor(Math.random() * end);
}

// eslint-disable-next-line max-lines-per-function
function madlibs(template) {
  const templateArray = template.split(' ').map(word => word.split(','));

  const wordTypes = ['adjective', 'noun', 'verb', 'adverb'];

  const wordBank = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  return templateArray
    .map(subarray =>
      subarray
        .map(word => {
          if (wordTypes.includes(word)) {
            return wordBank[word][randomIndex(wordBank[word].length)];
          } else {
            return word;
          }
        })
        .join(',')
    )
    .join(' ');
}

let template =
  'The adjective brown noun adverb verb the adjective yellow noun, who adverb verb his noun and looks around.';

console.log(madlibs(template));
