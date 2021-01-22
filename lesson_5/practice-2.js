// Understand the Problem
// Input: Array of Objects
// Output: Sorted Array of Objects

// The program should:
//  - Order the objects in the array by year of publication
//    - Earliest to Latest

// Implicit: Each of the years is stored in a string.

// Examples / Test Cases
// let books = [
//   {
//     title: 'One Hundred Years of Solitude',
//     author: 'Gabriel Garcia Marquez',
//     published: '1967',
//   },
//   {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'},
//   {title: 'War and Peace', author: 'Leo Tolstoy', published: '1869'},
//   {title: 'Ulysses', author: 'James Joyce', published: '1922'},
//   {title: 'The Book of Kells', author: 'Multiple Authors', published: '800'},
// ];

// Books should be ordered as follows:
//  - The Book of Kells
//  - War and Peace
//  - Ulysses
//  - The Great Gatsby
//  - One Hundred Years of Solitude

// Data Structure
// Object, Array

// Algorithm
// Iterate over the array, making comparisons between two elements at a time.
// When making comparisons, convert object.published to a number
// If the number is smaller, the object should move left.
// If the number is larger, the object should move right.

// Code
let books = [
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel Garcia Marquez',
    published: '1967',
  },
  {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925'},
  {title: 'War and Peace', author: 'Leo Tolstoy', published: '1869'},
  {title: 'Ulysses', author: 'James Joyce', published: '1922'},
  {title: 'The Book of Kells', author: 'Multiple Authors', published: '800'},
];

books.sort((a, b) => Number(a.published) - Number(b.published));

console.log(books);
