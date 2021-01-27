function isNegative(word) {
  return ['dull', 'boring', 'annoying', 'chaotic'].includes(word);
}

function neutralize(sentence) {
  let words = sentence.split(' ');

  return words.filter(word => !isNegative(word)).join(' ');
}

console.log(
  neutralize('These dull boring cards are part of a chaotic board game.')
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.

// Classic case of editing an array while your iterating over it.
// Filter is a better use case here!
// Additionally, filter returns a copy of the array so we need either:
//  - move it to our return statement and tack on join
//  - or update the pointer in words.
