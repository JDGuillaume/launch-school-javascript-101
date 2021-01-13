// Understand the Problem
// Input: Integer
// Output: String

// The function should:
//  - Take an integer as an argument
//  - Should return the century with the correct suffix.

// Rules:
// - New centuries begin in years that end in 01.

// Examples / Test Cases
// century(2000); // "20th"
// century(2001); // "21st"
// century(1965); // "20th"
// century(256); // "3rd"
// century(5); // "1st"
// century(10103); // "102nd"
// century(1052); // "11th"
// century(1127); // "12th"
// century(11201); // "113th"

// Data Structure
// The function would benefit from the use of an object.

// Algorithm
// Create an object with mapping for each suffix [0-9].

// If the second to last digit is a 1, the suffix is automatically th.

// Create a function that accepts an integer as an argument.
// Initialize a regex to /^\d0+$/g.
// Initialize a variable to the number as a string (stringYear).
// Initialize a variable to the length of stringYear. (YearLength).
// Initialize a variable to the ceiling of YearLength / 2 (Century Length).
// Initialize a century variable. (century)

// (Conditional)
// If YearLength is 1, century = '1st'.
// Else Calculate Century
// - century = string[yearLength - Century Length]

// Return century

// Code
const centurySuffix = {
  0: 'th',
  1: 'st',
  2: 'nd',
  3: 'rd',
  4: 'th',
  5: 'th',
  6: 'th',
  7: 'th',
  8: 'th',
  9: 'th',
};

function calculateCenturyLength(yearLength) {
  if (yearLength < 4) {
    return Math.floor(yearLength / 2);
  } else {
    return Math.ceil(yearLength / 2);
  }
}

function extractCentury(yearLength, stringYear, centuryLength) {
  const regex = RegExp(/^\d0+$/);
  let century;

  if (yearLength === 1) {
    century = '1';
  } else {
    century = stringYear.slice(0, centuryLength);

    if (!regex.test(stringYear)) {
      century = String(Number(century) + 1);
    }
  }

  return century;
}

function chooseSuffix(century) {
  if (century[century.length - 2] === '1') {
    return 'th';
  } else {
    return centurySuffix[century[century.length - 1]];
  }
}

function century(year) {
  const stringYear = String(year);
  const yearLength = stringYear.length;
  let centuryLength = calculateCenturyLength(yearLength);
  let century = extractCentury(yearLength, stringYear, centuryLength);
  let suffix = chooseSuffix(century);

  return century + suffix;
}

console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
console.log(century(20));
console.log(century(21));
