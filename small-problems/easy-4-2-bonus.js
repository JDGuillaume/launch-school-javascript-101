// Further Exploration
/* In order to figure out if a value meets a certain
   criteria, we'll need to use the .some() method. */

// Code
const readline = require('readline-sync');

function getUserInput() {
  const array = [];
  console.log('Enter the 1st number');
  const first = Number(readline.question());

  console.log('Enter the 2nd number');
  const second = Number(readline.question());

  console.log('Enter the 3rd number');
  const third = Number(readline.question());

  console.log('Enter the 4th number');
  const fourth = Number(readline.question());

  console.log('Enter the 5th number');
  const fifth = Number(readline.question());

  console.log('Enter the 6th number');
  const sixth = Number(readline.question());

  array.push(first, second, third, fourth, fifth, sixth);
  return array;
}

function evaluateNumbers() {
  const numbersArray = getUserInput();
  const sixthNumber = numbersArray.pop();
  const isGreater = numbersArray.some(element => element > sixthNumber);

  if (isGreater) {
    return `At least one number in ${numbersArray.join(
      ', '
    )} is greater than ${sixthNumber}.`;
  } else {
    return `None of the numbers in ${numbersArray.join(
      ', '
    )} is greater than ${sixthNumber}.`;
  }
}

console.log(evaluateNumbers());
