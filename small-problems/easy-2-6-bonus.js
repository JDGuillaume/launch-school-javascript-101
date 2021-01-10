// Further Exploration
// - Handle edge cases
//  - Strings that contain one word.
//  - Strings that are empty.

// Test Cases
console.log(penultimate('')); // 'Please provide a string that contains at least two words.'
console.log(penultimate('one')); // 'Please provide a string that contains at least two words.'
console.log(penultimate('one two')); // one

// Code
function penultimate(string) {
  const stringArray = string.split(' ');

  if (stringArray.length > 1) {
    return stringArray[stringArray.length - 2];
  } else {
    return 'Please provide a string that contains at least two words.';
  }
}
