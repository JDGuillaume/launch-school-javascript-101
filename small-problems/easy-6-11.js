// Understand the Problem
// Input: Array
// Output: Array

// The function should:
//  - Accept an array as an argument.
//  - Return the array in reverse order.

// Constraints
// - You cannot use Array.prototype.reverse().

// Examples / Test Cases
let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ['a', 'b', 'c', 'd', 'e'];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ['abc'];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

// Data Structure
// Array

// Algorithm
// Create a function that accepts an array as an argument.
// Initialize a count variable to 0.
// while count < array.length
// Remove the last element in the array
// Insert it at array[count] without replacing an element.
// increment count by 1
// return original array

// Code
function reverse(array) {
  let count = 0;

  while (count < array.length) {
    array.splice(count, 0, array.pop());
    count++;
  }

  return array;
}
