// Further Exploration
/* Modify the wordSizes function from the previous exercise to
   exclude non-letters when determining word size.
   For instance, the word size of "it's" is 3, not 4. */

// Code
function wordSizes(string) {
  const wordCount = {};
  const wordArray = string
    .split(' ')
    .map(item => item.replace(/[^a-zA-z]/, ''));
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

console.log(wordSizes('Four score and seven.')); // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!')); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes('')); // {}
