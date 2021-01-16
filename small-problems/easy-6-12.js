// Understand the Problem
// Input: String
// Output: Boolean

// The function should:
//  - Accept a string.
//  - Return a boolean:
//    - indicating whether the parentheses in the string are balanced.
//      - Parentheses are balanced when # of ( === # of ).

// Implicit: The parentheses must actually close. We can't strictly count the #.

// Examples / Test Cases
console.log(isBalanced('What (is) this?') === true);
console.log(isBalanced('What is) this?') === false);
console.log(isBalanced('What (is this?') === false);
console.log(isBalanced('((What) (is this))?') === true);
console.log(isBalanced('((What)) (is this))?') === false);
console.log(isBalanced('Hey!') === true);
console.log(isBalanced(')Hey!(') === false);
console.log(isBalanced('What ((is))) up(') === false);

// Data Structure
// Array

// Algorithm
// Create a function that accepts a string
// Initialize a variable called balanceCount to 0.
// For Loop
// For each element,
//  - If element === '(', balanceCount ++;
//  - If element === ')', balanceCount --;
//  -- If balanceCount < 0, return false
// return balanceCount === 0;

// Code
function isBalanced(sentence) {
  let balanceCount = 0;

  for (let count = 0; count < sentence.length; count++) {
    if (sentence[count] === '(') {
      balanceCount += 1;
    } else if (sentence[count] === ')') {
      balanceCount -= 1;
    }

    if (balanceCount < 0) {
      return false;
    }
  }

  return balanceCount === 0;
}
