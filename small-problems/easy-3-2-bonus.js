// Further Exploration
/* Modify this function so that it truncates the
   message if it doesn't fit inside a maximum
   width provided as a second argument (the width is the
   width of the box itself).You may assume no maximum
   if the second argument is omitted.
*/
// Code
function logInBoxTruncated(string, maximumWidth) {
  let length = string.length;

  if (maximumWidth) {
    if (string.length > maximumWidth) {
      string = string.slice(0, maximumWidth + 1);
      length = string.length;
    }
  }

  let boxTopOrBottom = '+' + '-'.repeat(length + 2) + '+';
  let boxMiddle = '|' + ' '.repeat(length + 2) + '|';
  let textLine = '| ' + string + ' |';

  console.log(boxTopOrBottom);
  console.log(boxMiddle);
  console.log(textLine);
  console.log(boxMiddle);
  console.log(boxTopOrBottom);
}

logInBoxTruncated('To boldly go where no one has gone before.');
logInBoxTruncated(
  `Modify this function so that it truncates the message if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself).You may assume no maximum if the second argument is omitted.`,
  80
);
