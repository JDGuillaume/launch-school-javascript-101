/* Q1: Given a string, return a new string that replaces
       every occurrence of the word "important" with "urgent": */

let advice =
  'Few things in life are as important as house training your pet dinosaur.';

// A1:
console.log(advice.replaceAll('important', 'urgent'));

// ----------------------------------------------------------------------

/* Q2:
  The Array.prototype.reverse method reverses the order of elements in an array,
  and Array.prototype.sort can rearrange the elements in a variety of ways,
  including descending. Both of these methods mutate the original array as shown
  below. Write two distinct ways of reversing the array without mutating the
  original array. Use reverse for the first solution, and sort for the second.

*/

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// Q2 Bonus: Can you do it using the Array.prototype.forEach() method?

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

/*
  Q3: Given a number and an array,
  determine whether the number is included in the array.
*/

let numbersArray = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8; // false
let number2 = 95; // true

// A3:
console.log(numbersArray.includes(number1));
console.log(numbersArray.includes(number2));

console.log();

// ----------------------------------------------------------------------

// Q4: Starting with the string:

let famousWords = 'seven years ago...';

// show two different ways to put the expected "Four score and " in front of it.

// A4:

// Option 1:
console.log(`Four score and ${famousWords}`);

// Option 2:
let fourScore = 'Four score and ';
console.log(fourScore.concat(famousWords));

console.log();

// ----------------------------------------------------------------------

/*
  Q5: Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing
  the number at index 2, so that the array becomes [1, 2, 4, 5].
*/

// A5:
let arrayToMutate = [1, 2, 3, 4, 5];
arrayToMutate.splice(2, 1);

console.log(arrayToMutate);

console.log();

// ----------------------------------------------------------------------

// Q6: Suppose we build an array like this:

let flintstones = ['Fred', 'Wilma'];
flintstones.push(['Barney', 'Betty']);
flintstones.push(['Bambam', 'Pebbles']);

// This code will create a nested array that looks like this:
// ['Fred', 'Wilma', ['Barney', 'Betty'], ['Bambam', 'Pebbles']];

/* Create a new array that contains all of the above values,
   but in an un-nested format: */

// A6:
console.log(flintstones.flat(1));

console.log();

// ----------------------------------------------------------------------

// Q7: Consider the following object:
let newFlintstones = {
  Fred: 0,
  Wilma: 1,
  Barney: 2,
  Betty: 3,
  Bambam: 4,
  Pebbles: 5,
};

/* Create an array from this object that contains only two elements:
   Barney's name and Barney's number: */

// A7:
let barneyArray = Object.entries(newFlintstones)[2];
console.log(barneyArray);

console.log();

// ----------------------------------------------------------------------

/* Q8: How would you check whether the objects assigned to
   variables numbers and table below are arrays? */

let newNumbers = [1, 2, 3, 4]; // true
let table = {field1: 1, field2: 2, field3: 3, field4: 4}; // false

console.log(Array.isArray(newNumbers));
console.log(Array.isArray(table));

console.log();

// ----------------------------------------------------------------------

/* Q9: Back in the stone age (before CSS), we used spaces to align things
       on the screen. If we have a 40-character wide table of Flintstone
       family members, how can we center the following title above
       the table with spaces? */

let title = 'Flintstone Family Members';

// A9:

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

/* Q10: Write two one-line expressions to count the number of
   lower-case t characters in each of the following strings: */

let statement1 = 'The Flintstones Rock!';
let statement2 = 'Easy come, easy go.';

// A10:
function countTinyTs(string) {
  return [...string.matchAll('t')].length;
}

console.log(countTinyTs(statement1));
console.log(countTinyTs(statement2));
