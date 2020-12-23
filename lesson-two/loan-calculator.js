// Import the readline library and attach it to the readline variable.
const readline = require('readline-sync');

// Add a marker to differentiate prompts for input.
function prompt(message) {
  return console.log(`=> ${message}`);
}

// Create a function to determine whether the user's number input is valid.
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Obtain the loan amount from the user and validate their input.
prompt(
  'Please provide the dollar amount for which you would like to request a loan (i.e., $100,000 would be 100000).'
);
let loanAmountInDollars = readline.question('');

while (invalidNumber(loanAmountInDollars)) {
  prompt('Please provide a valid dollar amount.');
  loanAmountInDollars = readline.question('');
}

// Obtain the APR amount from the user and validate their input.
prompt(
  'Please provide the Annual Percentage Rate (APR) as a decimal (i.e., 5% would be represented as .05).'
);
let annualPercentageRateAsDecimal = readline.question('');

while (invalidNumber(annualPercentageRateAsDecimal)) {
  prompt(
    'Please provide the Annual Percentage Rate (APR) as a decimal (i.e., 5% would be represented as .05).'
  );
  annualPercentageRateAsDecimal = readline.question('');
}

// Obtain the loan duration (in months) from the user and validate their input.
prompt(
  'Please provide the duration of the loan in months (i.e., 1 year is 12 months).'
);
let loanDurationInMonths = readline.question('');

while (invalidNumber(loanDurationInMonths)) {
  prompt(
    'Please provide the duration of the loan in months (i.e., 1 year is 12 months).'
  );
  loanDurationInMonths = readline.question('');
}

// Convert the Annual Percentage Rate (APR) into the monthly interest rate.
const monthlyInterestRate = annualPercentageRateAsDecimal / 12;

// Calculate the monthly interest payment using the provided formula.
let monthlyPayment =
  loanAmountInDollars *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)));

// Format the number correctly.
let formattedMonthlyPayment = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(monthlyPayment);

// Return the result:
prompt(`Your estimated monthly payment is: ${formattedMonthlyPayment}.`);

// BONUS: Handle no-interest loans
