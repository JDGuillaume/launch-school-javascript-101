// Understand the Problem
// Input: Integer, Array of Objects
// Output: Boolean

// The function should:
//  - Accept an integer and an array of objects as arguments
//  - Use the previous exercise (list-processing 9) to get narrow the array
//  - Return a boolean based on whether there is available stock (quantity > 0).
//    - Movement In: Adds stock
//    - Movement Out: Removes stock

// Examples / Test Cases
// let transactions = [
//   {id: 101, movement: 'in', quantity: 5},
//   {id: 105, movement: 'in', quantity: 10},
//   {id: 102, movement: 'out', quantity: 17},
//   {id: 101, movement: 'in', quantity: 12},
//   {id: 103, movement: 'out', quantity: 20},
//   {id: 102, movement: 'out', quantity: 15},
//   {id: 105, movement: 'in', quantity: 25},
//   {id: 101, movement: 'out', quantity: 18},
//   {id: 102, movement: 'in', quantity: 22},
//   {id: 103, movement: 'out', quantity: 15},
// ];

// isItemAvailable(101, transactions); // false
// isItemAvailable(103, transactions); // false
// isItemAvailable(105, transactions); // true

// Data Structure
// Array

// Algorithm
// Create a function that accepts an integer and array of objects as arguments.
// Initialize a variable to 0 (stockAvailable)
// Call transactionsFor(integer, array).
// For each element of the return array:
//  - if object.movement = out, quantity = -quantity.
// Reduce the array to the sum of quantities

// If stockAvailable > 0 return true, else false

// Code
function transactionsFor(inventoryItem, objectArray) {
  return objectArray.filter(item => item.id === inventoryItem);
}

function isItemAvailable(inventoryItem, objectArray) {
  let stockAvailable = transactionsFor(inventoryItem, objectArray)
    .map(item => (item.movement === 'out' ? -item.quantity : item.quantity))
    .reduce((sum, value) => sum + value);

  return stockAvailable > 0;
}

let transactions = [
  {id: 101, movement: 'in', quantity: 5},
  {id: 105, movement: 'in', quantity: 10},
  {id: 102, movement: 'out', quantity: 17},
  {id: 101, movement: 'in', quantity: 12},
  {id: 103, movement: 'out', quantity: 20},
  {id: 102, movement: 'out', quantity: 15},
  {id: 105, movement: 'in', quantity: 25},
  {id: 101, movement: 'out', quantity: 18},
  {id: 102, movement: 'in', quantity: 22},
  {id: 103, movement: 'out', quantity: 15},
];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
