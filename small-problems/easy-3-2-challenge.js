// Challenge
/* For a challenging but fun exercise, try word wrapping messages that
   are too long to fit, so that they appear on multiple lines but are
   still contained within the box. This isn't an easy problem, but
   it's doable with basic JavaScript.
 */

// Understand the Problem
// Input: String
// Output: String

// The program should:
// - Take a string and a maximum width.
// - Console.log the string in a box.
//    - The string should be wrapped on multiple lines if its above max width.
// - Print the box.

// Data Structure
// The program will likely benefit from the use of built-in string methods.

// Algorithm
// Create a function that accepts a string and a maximum width as arguments.
// Initialize a variable that contains the length of the string passed in.
// Check to see if the string length is greater than the maximumWidth.
//  - If it's not, call the original function.

// Initialize a variable that contains Math.ceil(length / maximumWidth)
//  - This will tell us how many lines we will need for our string.

// Log the Top Line
// Log a Middle Line

// Separate Function
// Initialize a variable to hold the initial start position to 0.
// Initialize a variable to hold the initial end position to maximumWidth.

// (For Loop)
// Initialize a counter to 0
// Exit Criteria counter < Math.ceil(length / maximumWidth)
// Increment counter by 1
// On each iteration:
//  - log a section of the string that meets maximumWidth
//    - Make sure to pad if necessary.
// - set stringStart to stringEnd
// - set StringEnd to stringStart + maximumWidth

// Log a Middle Line
// Log the Bottom Line

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

function logSplitText(string, numberOfStrings, maximumWidth) {
  let stringStart = 0;
  let stringEnd = maximumWidth;

  for (let count = 0; count < numberOfStrings; count++) {
    console.log(
      `| ${string.slice(stringStart, stringEnd).padEnd(maximumWidth, ' ')} |`
    );

    stringStart = stringEnd;
    stringEnd = stringStart + maximumWidth;
  }
}

// Code
function logInBoxWrapped(string, maximumWidth = 80) {
  let length = string.length;

  if (length < maximumWidth) {
    return logInBox(string);
  }

  let stringSplit = Math.ceil(length / maximumWidth);
  let boxBoundary = '+' + '-'.repeat(maximumWidth + 2) + '+';
  let emptyLine = '|' + ' '.repeat(maximumWidth + 2) + '|';

  console.log(boxBoundary);
  console.log(emptyLine);
  logSplitText(string, stringSplit, maximumWidth);
  console.log(emptyLine);
  console.log(boxBoundary);
}

logInBoxWrapped('To boldly go where no one has gone before.');
logInBoxWrapped(
  `Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself).You may assume no maximum if the second argument is omitted.`,
  80
);
