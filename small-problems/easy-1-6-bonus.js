/*
  Further Exploration
  What if the input was an array of integers instead of just
  a single integer? How would your computeSum and computeProduct
  functions change? Given that the input is an array, how
  might you make use of the Array.prototype.reduce() method?
*/
const readline = require('readline-sync');

function getArray() {
  console.log(
    'Please provide an array of positive numbers separated by commas and a space (i.e., 1, 2, 3, 4).'
  );
  let array = readline
    .question()
    .split(', ')
    .map(item => Number(item))
    .filter(item => item > 0);

  while (!Array.isArray(array) || array.length === 0 || array.includes(NaN)) {
    console.log('Please provide an array of only positive numbers.');
    array = readline
      .question()
      .split(', ')
      .map(item => Number(item))
      .filter(item => item > 0);
  }

  return array;
}

function getOperation() {
  console.log('Enter "s" to compute the sum, or "p" to compute the product.');
  let operation = readline.question().toLowerCase();

  while (operation !== 's' && operation !== 'p') {
    console.log('Please choose either "s" for sum or "p" for product.');
    operation = readline.question();
  }

  return operation;
}

function performOperation(array, operation) {
  let total;

  if (operation === 's') {
    total = array.reduce((sum, currentValue) => sum + currentValue);
  } else {
    total = array.reduce((product, currentValue) => product * currentValue);
  }

  return total;
}

function displayTotal(array, operation, total) {
  console.log(
    `The ${operation === 's' ? 'sum' : 'product'} of the array [${array.join(
      ', '
    )}] is ${total}.`
  );
}

function operateOnRange() {
  let array = getArray();
  let operation = getOperation();
  let total = performOperation(array, operation);

  displayTotal(array, operation, total);
}

operateOnRange();
