// A1:
let advice =
  'Few things in life are as important as house training your pet dinosaur.';

console.log(advice.replaceAll('important', 'urgent'));

// ----------------------------------------------------------------------

// A2:
[...numbers].reverse();
[...numbers].sort((num1, num2) => num2 - num1);

// Bonus
numbers = [1, 2, 3, 4, 5];
let reversedArray = [];
[...numbers].forEach(number => {
  reversedArray.unshift(number);
});

console.log();
console.log(reversedArray);
console.log();

// ----------------------------------------------------------------------

// A3:

let numbersArray = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; // false
let number2 = 95; // true

console.log(numbersArray.includes(number1));
console.log(numbersArray.includes(number2));

console.log();

// ----------------------------------------------------------------------

// A4:
let famousWords = 'seven years ago...';

// Option 1:
console.log(`Four score and ${famousWords}`);

// Option 2:
let fourScore = 'Four score and ';
console.log(fourScore.concat(famousWords));

console.log();

// ----------------------------------------------------------------------

// A5:
let arrayToMutate = [1, 2, 3, 4, 5];
arrayToMutate.splice(2, 1);

console.log(arrayToMutate);

console.log();

// ----------------------------------------------------------------------

// A6:
let flintstones = ['Fred', 'Wilma'];
flintstones.push(['Barney', 'Betty']);
flintstones.push(['Bambam', 'Pebbles']);
console.log(flintstones.flat(1));

console.log();

// ----------------------------------------------------------------------

// A7:
let newFlintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

let barneyArray = Object.entries(newFlintstones)[2];
console.log(barneyArray);

console.log();

// ----------------------------------------------------------------------

// A8:

let newNumbers = [1, 2, 3, 4]; // true
let table = {field1: 1, field2: 2, field3: 3, field4: 4}; // false

console.log(Array.isArray(newNumbers));
console.log(Array.isArray(table));

console.log();

// ----------------------------------------------------------------------

// A9:

let title = 'Flintstone Family Members';

function calculatePadding(string) {
  let lineLength = 40;
  let totalPadding = lineLength - string.length;
  let padding = Math.floor(totalPadding / 2);

  if (padding > 0) {
    return padding;
  } else {
    return 0;
  }
}

let desiredLength = title.length + calculatePadding(title);

console.log(title.padStart(desiredLength, ' '));

console.log();

// ----------------------------------------------------------------------

// A10:

let statement1 = 'The Flintstones Rock!';
let statement2 = 'Easy come, easy go.';

function countTinyTs(string) {
  return [...string.matchAll('t')].length;
}

console.log(countTinyTs(statement1));
console.log(countTinyTs(statement2));
