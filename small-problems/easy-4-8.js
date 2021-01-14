// Understand the Problem
// Input: String
// Output: Object

// The function should:
// - Accept a string as an argument
// - Return an object that:
//  - displays a total of the number of words for each length found.

// Implicit: An empty string should return an empty object.

// Examples / Test Cases
console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')); // {}

// Data Structure
// Array, Object

// Algorithm
// Create a function that accepts a string
// Initialize an object to hold the counts (wordCount)
// Split the array based on the space character.
// Convert each of the elements to their length.
// Loop over teach of the elements.
//  - if the word length doesn't exist in the object, add it with value 1.
//  - if it does, increment its count by 1.

// Code
function wordSizes(string) {
  const wordCount = {};
  const wordArray = string.split(' ');
  const lengthArray = wordArray.map(item => item.length);

  if (string.length === 0) {
    return wordCount;
  }

  lengthArray.forEach(length => {
    if (wordCount[length] === undefined) {
      wordCount[length] = 1;
    } else {
      wordCount[length] += 1;
    }
  });

  return wordCount;
}
