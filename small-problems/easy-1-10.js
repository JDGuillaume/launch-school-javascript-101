// Understand the Problem
// Input: Integer
// Output: Integer

// The function should:
//  - Take one integer
//  - Operate on the range 1 - Input
//  - Sum all numbers within the range that are multiples of 3 and 5.
// Assumption: Input is a valid number greater than 1.

// Examples / Test Cases
console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168

// Data Structure
// The program should rely on a loop to iterate over the given range.

// Algorithm
// Write a function that accepts one integer.
// Initialize a sum variable and set it to 0.
// (For Loop)
// Initialize
//  - Initialize count to 1.
//  - Set exit criteria to <= Input
//  - Increment count by 1
// Operate
//  (Conditional)
//  - If the count is evenly divided by 3 or 5, add the count to the sum.
//
// Return sum

// Code
function multisum(integer) {
  let sum = 0;

  for (let count = 1; count <= integer; count++) {
    if (count % 3 === 0 || count % 5 === 0) {
      sum += count;
    }
  }
  return sum;
}
