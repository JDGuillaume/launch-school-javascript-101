// Q1: Will the code below raise an error?
let numbers = [1, 2, 3];
numbers[6] = 5;

// Q1 -- Bonus

let bonusNumbers = [1, 2, 3];
bonusNumbers[6] = 5;
bonusNumbers[4]; // what will this line return?

/* A1: No, the above code will not raise an error.
       JavaScript will place the value 5 at index 6.
       If you attempt to access index 4 or 5, you will get undefined.
*/

// ----------------------------------------------------------------------

/* Q2: How can you determine whether a given string
       ends with an exclamation mark (!)? */
let str1 = 'Come over here!'; // true
let str2 = "What's up, Doc?"; // false

/* A2: We can use a regular expression
       to check if the string ends with an exclamation mark! */

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

/* Q3: Determine whether the following object of people
       and their age contains an entry for 'Spot': */

let ages = {Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10};

// A3:
console.log(
  `ages contains an entry for 'Spot' -- ${Object.keys(ages).includes('Spot')}\n`
);

// ----------------------------------------------------------------------

/* Q4: Using the following string, create a new string that contains all
       lowercase letters except for the first character,
       which should be capitalized. */

let munstersDescription = 'the Munsters are CREEPY and Spooky.';

// A4:
function sentenceCase(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

console.log(sentenceCase(munstersDescription));
console.log();

// ----------------------------------------------------------------------

// Q5: What will the following code output?
console.log(false == '0');
console.log(false === '0');

// A5: true, false

// ----------------------------------------------------------------------

// Q6: We have most of the Munster family in our ages object:
// Add entries for Marilyn and Spot to the object:

let munsterAges = {Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10};
let additionalAges = {Marilyn: 22, Spot: 237};

// A6:
console.log();
Object.assign(munsterAges, additionalAges);
console.log(munsterAges);
console.log();

// ----------------------------------------------------------------------

// Q7: Determine whether the name Dino appears in the strings below.
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

// Q8: How can we add the family pet, "Dino", to the following array?
let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];

// A8:
flintstones.push('Dino');
console.log(flintstones);
console.log();

// ----------------------------------------------------------------------

// Q9: How can we add multiple items to our array? ('Dino' and 'Hoppy')
let flinstones2 = ['Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles'];

// A9:
flinstones2.push('Dino', 'Happy');
console.log(flinstones2);
console.log();

// ----------------------------------------------------------------------

/* Q10: Return a new version of this sentence that ends
        just before the word house. Don't worry about spaces or punctuation:
        remove everything starting from the beginning of house to the end of
        the sentence. */
let advice =
  'Few things in life are as important as house training your pet dinosaur.';

console.log(advice.slice(0, 38));
