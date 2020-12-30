/* A1: The functions will not return the same output due to the JavaScript
       Engine's semi-colon placement. */

// ----------------------------------------------------------------------

// A2: The original object will be mutated: (first: [1, 2]).

// ----------------------------------------------------------------------

// A3:

// A: `one is: one`
//    `two is: two`
//    `three is: three`

// B: `one is: one`
//    `two is: two`
//    `three is: three`

// C: `one is: two`
//    `two is: three`
//    `three is: one`

// This occurs because when passed as l
// Example C is different, because the method used mutates the original array.

// ----------------------------------------------------------------------

// A4:

function isAnIpNumber(number) {
  if (number >= 0 && number <= 255) {
    return true;
  } else {
    return false;
  }
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split('.');
  let isValidIp = false;

  if (dotSeparatedWords.length === 4) {
    isValidIp =
      isAnIpNumber(dotSeparatedWords[0]) &&
      isAnIpNumber(dotSeparatedWords[1]) &&
      isAnIpNumber(dotSeparatedWords[2]) &&
      isAnIpNumber(dotSeparatedWords[3]);
  }

  return isValidIp;
}

console.log(isDotSeparatedIpAddress('10.4.5.11'));
console.log(isDotSeparatedIpAddress('4.5.5'));
console.log(isDotSeparatedIpAddress('1.2.3.4.5'));
