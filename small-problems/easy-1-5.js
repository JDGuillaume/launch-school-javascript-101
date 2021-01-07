// Understand the Problem
// Input: Integer(s)
// Output: Strings.

// The program will take two inputs from the user:
//  - The amount of the bill.
//  - The percentage of the tip as an integer.

// The program will log the tip and total amount on separate lines.
//  - The amounts will be formatted as currency (i.e., USD).

// Assumptions: The input will be a valid integer.
// External Code: readline-sync

// Examples / Test Cases
// Bill - 200, Tip - 15
//  The tip is $30.00
//  The total is $230.00

// Data Structure
// The program should rely on built-in operators and explicit type coercion.

// Algorithm
// Obtain input from the user.
// Convert user input to a Number and store each value in its own variable.

// Convert the tip integer to a decimal by dividing it by 100.
// Multiply the bill amount by the decimal tip rate.

// Combine the two amounts to get the total.

// Output the selected strings.

// Code
const readline = require('readline-sync');

function calculateTip() {
  console.log('What is the bill?');
  const bill = Number(readline.question());

  console.log('What is the tip percentage?');
  const tipRateInt = Number(readline.question());

  const tipRateDec = tipRateInt / 100;

  const tipAmount = Number((bill * tipRateDec).toFixed(2));
  const total = bill + tipAmount;

  const formattedTip = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(tipAmount);

  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(total);

  console.log(`The tip is ${formattedTip}.`);
  console.log(`The total is ${formattedTotal}.`);
}

calculateTip();
