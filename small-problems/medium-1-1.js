// Understand the Problem
// Input: Array
// Output: Array

// The function should:
//  - Take an array as an argument.
//    - If the argument is not an array, it should return undefined.
//    - If it's an empty array, it should return an empty array.
//  - Rotate the array by moving the 1st (index-0) to last (length - 1).
//  - Return the modified version of the array
//    - Without mutating the original

// Examples / Test Cases
// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// rotateArray([]);                       // []

// return `undefined` if the argument is not an array
// rotateArray();                         // undefined
// rotateArray(1);                        // undefined

// the input array is not mutated
// let array = [1, 2, 3, 4];
// rotateArray(array);                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]

// Data Structure
// Array

// Algorithm
// - Create a function that accepts an array as an argument.
// - Create a guard clause that ensures the argument is an array
// - Create a guard clause that ensures the array has length
// - Grab a deep copy of the array and store it in a variable.
// - On the copy, remove the first element and add it to the end
// - Return the mutated copy

// Code
function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (!array.length) {
    return [];
  }

  const copyOfArray = JSON.parse(JSON.stringify(array));
  copyOfArray.push(copyOfArray.shift());

  return copyOfArray;
}
console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c'])); // ["b", "c", "a"]
console.log(rotateArray(['a'])); // ["a"]
console.log(rotateArray([1, 'a', 3, 'c'])); // ["a", 3, "c", 1]
console.log(rotateArray([{a: 2}, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array)); // [2, 3, 4, 1]
console.log(array); // [1, 2, 3, 4]
