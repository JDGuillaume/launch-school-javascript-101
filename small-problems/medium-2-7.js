// Understand the Problem
// Input: Array
// Output: Sorted Array

// The function should:
//  - Accept an array as an argument
//  - Use bubble sort to sort the array
//  - Return the sorted array.

// What is bubble sort?
/*
   A bubble sort works by making multiple passes (iterations) through an array.
   On each pass, the two values of each pair of consecutive elements are
   compared. If the first value is greater than the second, the two elements
   are swapped. This process is repeated until a complete pass is made
   without performing any swaps. At that point, the array is
   completely sorted.
*/

// Examples / Test Cases
// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1); // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2); // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// eslint-disable-next-line max-len
// console.log(array3); ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// Data Structure
// Array

// Algorithm
// Create a function that accepts an array (bubbleSort, array)
// Initialize a variable to the length of the array
// Initialize a variable (swap) to 0.

// Do While Loop (while swap > 0)
// swap = 0;
// For Loop | count = 0, count < length - 2; count++
// if the count element in the array is greater than the next element:
//  - swap them
//  - increment swap

// return array

// Code
function bubbleSort(array) {
  const length = array.length;
  let swap = 0;

  do {
    swap = 0;

    for (let count = 0; count < length - 1; count++) {
      if (array[count] > array[count + 1]) {
        [array[count], array[count + 1]] = [array[count + 1], array[count]];
        swap++;
      }
    }
  } while (swap > 0);

  return array;
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
