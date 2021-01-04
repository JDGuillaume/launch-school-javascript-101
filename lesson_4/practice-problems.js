/* A1: The method will return a copy of the original array, since the callback
   is always true. */

// ----------------------------------------------------------------------

/* A2: The code will return [undefined, undefined, undefined], because
   no explicit return was provided. */

// ----------------------------------------------------------------------

// A3: The code will return a new array with the values [1, 4, 9].

// ----------------------------------------------------------------------

/* A4: The code will return 11 because the return value of pop is
   the removed item. */

// ----------------------------------------------------------------------

// A5: The code will return: 2, 4, 6, true.

// ----------------------------------------------------------------------

// A6: We can find out by reading the documentation on MDN.
//     .fill(value, start, end) is destructive, and it takes three arguments.
//        value: The value that will replace the value in the original array.
//        start: Where to begin filling.
//        end: Where to stop filling.

// ----------------------------------------------------------------------

// A7: The code will return [undefined, 'bear'].

// ----------------------------------------------------------------------

// A8:
let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];
const flintstonesObject = {};

function convertToFlinstonesObject(array) {
  array.forEach((item, index) => {
    flintstonesObject[item] = index;
  });
}

convertToFlinstonesObject(flintstones);
console.log(flintstonesObject);

// ----------------------------------------------------------------------

// A9:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

function sumAges(array) {
  return array.reduce((sum, currentValue) => sum + currentValue);
}

console.log(sumAges(Object.values(ages)));

// ----------------------------------------------------------------------

// A10:

let munsterAges = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237,
};

function findLowestAge(array) {
  array.sort((a, b) => a - b);
  return array[0];
}

console.log(findLowestAge(Object.values(munsterAges)));

// ----------------------------------------------------------------------

// A11:

let statement = 'The Flintstones Rock';

function logLetters(sentence) {
  const letterFrequency = {};
  const sentenceWithoutSpaces = [...sentence].filter(item => item !== ' ');
  sentenceWithoutSpaces.map(item => {
    if (letterFrequency[item] === undefined) {
      return (letterFrequency[item] = 1);
    } else {
      return (letterFrequency[item] += 1);
    }
  });
  return letterFrequency;
}

console.log(logLetters(statement));
