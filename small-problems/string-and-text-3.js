// Understand the Problem
// Input: String
// Output: Object

// The function should:
//  - Accept a string as an argument
//  - Return an object containing the count for:
//    - Lowercase letters
//    - Uppercase letters
//    - Neither (Any other characters)

// Examples / Test Cases
// console.log(letterCaseCount('abCdef 123'));
// { lowercase: 5, uppercase: 1, neither: 4 }
// console.log(letterCaseCount('AbCd +Ef'));
// { lowercase: 3, uppercase: 3, neither: 2 }
// console.log(letterCaseCount('123'));
// { lowercase: 0, uppercase: 0, neither: 3 }
// console.log(letterCaseCount(''));
// { lowercase: 0, uppercase: 0, neither: 0 }

// Data Structure
// Object, Array

// Algorithm

// Create a function that accepts a string as an argument
// Create an object that contains three keys with values of 0
//  - lowercase, uppercase, neither
// Spread the string in to an array
// Iterate over the array,
// Use regex to count characters
//  - If uppercase, object[uppercase]++
//  - If lowercase, object[lowercase]++
//  - If neither, object[neither]++

// Return object

// Code

function letterCaseCount(phrase) {
  const characterCount = {lowercase: 0, uppercase: 0, neither: 0};

  [...phrase].forEach(item => {
    if (/[a-z]/.test(item)) {
      characterCount.lowercase++;
    } else if (/[A-Z]/.test(item)) {
      characterCount.uppercase++;
    } else {
      characterCount.neither++;
    }
  });

  return characterCount;
}

console.log(letterCaseCount('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123')); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount('')); // { lowercase: 0, uppercase: 0, neither: 0 }
