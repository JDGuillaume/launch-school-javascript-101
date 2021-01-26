/* eslint-disable max-len */
// Understand the Problem
// Input: String(s)
// Output: String(s)

// The function should:
//  - Accept a string as an argument.
//  - Find the longest sentence
//  - Log the sentence to the console
//  - Return a string with the number of words in the sentence interpolated in.

// Rules:
//  - Sentences may end with:
//    - periods (.)
//    - exclamation points (!)
//    - question marks (?)

/*
     Any sequence of characters that are not spaces or
     sentence ending characters should be classified as
     word. Thus -- is a word.
*/

// Implicit: Length is measured based on the number of words!

// Examples / Test Cases
// See below

// Data Structure
// Array, Regex

// Algorithm
// Create a function that accepts a string as an argument.
// Initialize an empty array to sentences
// Initialize a variable (start) to 0.

// # Get the sentences
// Loop over the provided paragraph
// If you hit a [.!?] then slice the string from start to count + 1
//  - push the result to the sentences array
//  - set start to count + 1

// Create a separate function to count the words in a given sentence.
// Match all consecutive non-space characters that occur at least once.
// Return the number of matches

// Sort the sentences by their word count.
// console log the last item in the sorted array and return a string with its length interpolated in.

// Code
function countWords(string) {
  return [...string.matchAll(/\S+/g)].length;
}

function longestSentence(paragraph) {
  const sentences = [];
  let start = 0;

  for (let count = 0; count < paragraph.length; count++) {
    if (/[.?!]/.test(paragraph[count])) {
      sentences.push(paragraph.slice(start, count + 1).trim());
      start = count + 1;
    }
  }

  sentences.sort((a, b) => countWords(a) - countWords(b));

  console.log(sentences[sentences.length - 1]);

  const numberOfWords = countWords(sentences[sentences.length - 1]);
  return `The longest sentence has ${numberOfWords} words.`;
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText =
  longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

console.log(longestSentence(longText));
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

console.log(longestSentence(longerText));
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

console.log(
  longestSentence("Where do you think you're going? What's up, Doc?")
);
// Where do you think you're going?
//
// The longest sentence has 6 words.

console.log(longestSentence('To be or not to be! Is that the question?'));
// To be or not to be!
//
// The longest sentence has 6 words.
