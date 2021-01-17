// Understand the Problem
// Input: Array of Arrays
// Output: Array

// The function should:
// - Accept an array of arrays where in each subarray:
//  - The first element is a string containing a fruit.
//  - The second element is the quantity of fruit to obtain.
//  - Return an array of strings, where each fruit appears (quantity) times.

// Examples / Test Cases
console.log(
  buyFruit([
    ['apple', 3],
    ['orange', 1],
    ['banana', 2],
  ])
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

// Data Structure
// Array

// Algorithm
// Create a function that accepts an array of arrays as an argument.
// For each subarray:
// - Remove the end of the array and store it in a variable called count
// - Remove the other item in the array and store in a variable called fruit.
// - Push the fruit into the array (count) # of times
// - Return the edited array
// Flatten the outer array
// Return the outer array

// Code
function buyFruit(groceryArray) {
  return groceryArray
    .map(item => {
      let count = item.pop();
      let fruit = item.pop();

      for (count; count > 0; count--) {
        item.push(fruit);
      }

      return item;
    })
    .flat();
}
