// Understand the Problem
// Input: String
// Output: String
// Assumption: The output will always fit on your screen.

// Examples / Test Cases
logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// Data Structure
// The program will likely benefit from the use of built-in string methods.

// Algorithm
// Create a function that accepts a string as an argument.
// Initialize a variable that contains the length of the string passed in.
// Create each line of the box using concatenation and repetition.
// - Top/Bottom
// - Middle Top/Bottom
// - Text Line
// Console.log the box!

// Code
function logInBox(string) {
  const length = string.length;

  let boxTopOrBottom = '+-' + '-'.repeat(length) + '-+';
  let boxMiddle = '| ' + ' '.repeat(length) + ' |';
  let textLine = '| ' + string + ' |';

  console.log(boxTopOrBottom);
  console.log(boxMiddle);
  console.log(textLine);
  console.log(boxMiddle);
  console.log(boxTopOrBottom);
}
