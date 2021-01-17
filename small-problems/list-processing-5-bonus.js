// Further Exploration

/* Rewrite substrings using list processing functions.
   That is, convert the string into an array of some sort
   and use functions like map, filter, or reduce to get the
   desired substrings. (You will also need to use join.)
   Try not to use forEach as that is too similar to the for loop approach. */

// Code
function leadingSubstrings(phrase) {
  const phraseArray = [...phrase];

  return phraseArray.map((_, index) =>
    phraseArray.slice(0, index + 1).join('')
  );
}

function substrings(word) {
  let results = [];
  results = results.concat(
    [...word].map((_, index) => leadingSubstrings(word.slice(index)))
  );

  return results.flat();
}

console.log(substrings('abcde'));
