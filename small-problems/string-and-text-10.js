// Understand the Problem
// Input: String(s)
// Output: Integer

// The function should:
// - Accept a word and a string of text as arguments.
// - Return the original string:
//    - with each occurrence of the word uppercased and highlighted.

// Highlighting in markdown is done by enclosing the word in double asterisks:
//  - **WORD**

// Assumptions:
//  - word and text inputs will never be empty.
//  - all words are separated by spaces
//    - Thus, some words will include punctuation such as periods and commas.

// Implicit: Matches are case insensitive.

// Examples / Test Cases
const text =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

console.log(searchWord('sed', text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"

// Data Structure
// Array

// Algorithm
// Create a function that accepts a word and a string as arguments.
// Split the string on ' '
// Iterate over the array
// If the lowercase element is equal to the lowercase word
//  - return the element uppercased and interpolated between double asterisks.
// Else, return the item
// return the array joined on ' '

// Code
function searchWord(word, text) {
  return text
    .split(' ')
    .map(item => {
      return item.toLowerCase() === word.toLowerCase()
        ? `**${item.toUpperCase()}**`
        : item;
    })
    .join(' ');
}
