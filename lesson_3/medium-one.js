// A1:

let cyclesToRun = 10;
let count = 0;
let phrase = `The Flintstones Rock!`;

while (count < cyclesToRun) {
  phrase = ' ' + phrase;
  console.log(phrase);
  count += 1;
}

// ----------------------------------------------------------------------

// A2:

let munstersDescription = 'The Munsters are creepy and spooky.';
let isLowerCase = RegExp('[a-z]');

function reverseCase(string) {
  return [...string]
    .map(item => {
      if (isLowerCase.test(item)) {
        return (item = item.toUpperCase());
      } else {
        return (item = item.toLowerCase());
      }
    })
    .join('');
}

console.log(reverseCase(munstersDescription));

// ----------------------------------------------------------------------

// A3:

function factors(number) {
  let divisor = number;
  let factors = [];

  if (number <= 0) {
    return `This function is intended only for use with positive numbers.`;
  }

  for (let remainingCycles = divisor; remainingCycles > 0; remainingCycles--) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }

  return factors;
}

console.log(factors(100));
console.log(factors(2));
console.log(factors(0));
console.log(factors(-1));

/* The purpose of the number % divisor === 0 line is
   to verify that the number is indeed a factor because it has no remainder. */

// ----------------------------------------------------------------------

// A4:

/* The push function is ideal, because it is accomplishing what
   is asked and mutating the original array. The concat function is
   returning a new array each time. */

// ----------------------------------------------------------------------

// A5:

console.log(0.3 + 0.6); // 0.899999999999
console.log(0.3 + 0.6 === 0.9); // false

// ----------------------------------------------------------------------

// A6:

// The console.log will output false!
// You can reliably check if a value is NaN by using Number.isNaN();

// ----------------------------------------------------------------------

// A7:

// The function will output the number 34.

// ----------------------------------------------------------------------

// A8:

// Yes, the data will be ruined! The object is passed-by-reference!

// ----------------------------------------------------------------------

// A9:

// The code will output: 'paper'.

// ----------------------------------------------------------------------

// A10:

// The function will return 'no'.
