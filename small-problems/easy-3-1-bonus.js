// Further Exploration
/* It iterates beyond the last character in the
   string to ensure that the last character is added to the string.
   If it didn't, the last character would be left off, even if it was different.
*/

// Code
function crunch(text) {
  let index = 0;
  let crunchText = '';
  let regex;

  while (index <= text.length - 1) {
    regex = new RegExp(`${text[index + 1]}`);

    if (!regex.test(text[index])) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"
console.log(crunch('4444abcabccba')); // "4abcabcba"
console.log(crunch('ggggggggggggggg')); // "g"
console.log(crunch('a')); // "a"
console.log(crunch('')); // ""
