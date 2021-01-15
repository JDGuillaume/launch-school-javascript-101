// Understand the Problem
// Input: Array(s)
// Output: Array

// The function should:
//  - Accept two arrays as arguments
//  - Return a new array, with the two original arrays elements alternated in.

// Assumptions:
//  - Both arrays are non-empty.
//  - The arrays are equal in length.

// Implicit: The return array begins with element 0 of the 1st array.

// Examples / Test Cases
console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]

// Data Structure
// Array

// Algorithm
// Create a function that accepts two arrays.
// initialize a variable called combinedLength
//  - and set it array1 length + array 2 length.
// initialize a variable called resultArray to an empty array.
// initialize a count variable to 0;

// While Loop
// - While the result array's length is not equal to the combinedLength variable
//  - push the array1[count] element to the result array
//  - push the array2[count] element to the result array
// increment count

// return the result array

// Code
function interleave(arrayOne, arrayTwo) {
  const combinedLength = arrayOne.length + arrayTwo.length;
  const result = [];
  let count = 0;

  while (result.length !== combinedLength) {
    result.push(arrayOne[count], arrayTwo[count]);
    count++;
  }

  return result;
}
