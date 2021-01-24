// Understand the Problem
// Input: Integer
// Output: Integer

// The function should:
//  - Accept an integer as an argument
//  - Return the nth Fibonacci number (where n is the integer passed in).

// What is a Fibonacci number?
/* The Fibonacci series is a sequence of numbers in which each
   number is the sum of the previous two numbers.
*/

// Rules:
// The first two Fibonacci numbers are 1 and 1.
// The third number is 1 + 1 = 2,
// The fourth is 1 + 2 = 3.
// The fifth is 2 + 3 = 5

// Constraints: Operation must be performed using recursion.
//  - What is recursion?
//    - Recursion occurs when a function calls itself.

// Examples / Test Cases
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765

// Data Structure
// Recursive function calls.

// Algorithm
// Create a function that accepts an integer as an argument.
// Identify the base case n <= 2
//  - In this case, return 1
// Else:
//  - return fibonacci(n - 1) + fibonacci (n - 2)

// Code
function fibonacci(integer) {
  if (integer <= 2) {
    return 1;
  } else {
    return fibonacci(integer - 1) + fibonacci(integer - 2);
  }
}
