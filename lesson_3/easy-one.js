/* A1: No, the above code will not raise an error.
       JavaScript will place the value 5 at index 6.
       If you attempt to access index 4 or 5, you will get undefined.
*/

// ----------------------------------------------------------------------

/* A2: We can use a regular expression
       to check if the string ends with an exclamation mark! */

let str1 = 'Come over here!'; // true
let str2 = "What's up, Doc?";

function endsWithExclamation(string) {
  let regex = RegExp(/!$/);
  return regex.test(string);
}

console.log();

console.log(
  `Does "${str1}" end with an exclamation mark? -- ${endsWithExclamation(str1)}`
);
console.log(
  `Does "${str2}" end with an exclamation mark? -- ${endsWithExclamation(
    str2
  )}\n`
);

// ----------------------------------------------------------------------

// A3:
let ages = {Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10};

console.log(
  `ages contains an entry for 'Spot' -- ${Object.keys(ages).includes('Spot')}\n`
);

// ----------------------------------------------------------------------

// A4:

let munstersDescription = 'the Munsters are CREEPY and Spooky.';

function sentenceCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

console.log(sentenceCase(munstersDescription));
console.log();

// ----------------------------------------------------------------------

// A5:
console.log(false == '0'); // true
console.log(false === '0'); // false

// ----------------------------------------------------------------------

// A6:
let munsterAges = {Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10};
let additionalAges = {Marilyn: 22, Spot: 237};

console.log();
Object.assign(munsterAges, additionalAges);
console.log(munsterAges);
console.log();

// ----------------------------------------------------------------------

// A7:
let dinoStr1 =
  'Few things in life are as important as house training your pet dinosaur.';
let dinoStr2 = 'Fred and Wilma have a pet dinosaur named Dino.';

function doesDinoAppear(string) {
  let regex = /Dino/;
  return regex.test(string);
}

console.log(
  `Does Dino appear in "${dinoStr1}" -- ${doesDinoAppear(dinoStr1)}.`
);
console.log(
  `Does Dino appear in "${dinoStr2}" -- ${doesDinoAppear(dinoStr2)}.`
);
console.log();

// ----------------------------------------------------------------------

// A8:
let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];

flintstones.push('Dino');
console.log(flintstones);
console.log();

// ----------------------------------------------------------------------

// A9:
let flinstones2 = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];
flinstones2.push('Dino', 'Happy');
console.log(flinstones2);
console.log();

// ----------------------------------------------------------------------

// A10:

let advice =
  'Few things in life are as important as house training your pet dinosaur.';

console.log(advice.slice(0, 38));
