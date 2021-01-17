// Understand the Problem
// Input: Integer, Array of Objects
// Output: Array of Objects

// The function should:
//  - Accept an integer and an array of objects as arguments.
//  - Return a subset of the array, where the object[id] = integer

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

// transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// Data Structure
// Array

// Algorithm
// Create a function that accepts an integer and array of Objects as arguments.
// Filter the array based on whether the object[id] === integer
// Return the filtered array

// Code

function transactionsFor(inventoryItem, objectArray) {
  return objectArray.filter(item => item.id === inventoryItem);
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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
