// Import the readline library and attach it to the readline variable.
const readline = require('readline-sync');

// Add a marker to differentiate prompts for input.
function prompt(message) {
  return console.log(`=> ${message}`);
}

// Create a function to determine whether the user's number input is valid.
function invalidNumber(number) {
  return (
    number.trimStart() === '' ||
    Number.isNaN(Number(number) || Number(number) < 0)
  );
}

/* Obtain the loan amount from the user, validate their input,
   and explicitly coerce the amount to a number. */
prompt(
  'Please provide the desired amount of the loan (i.e., $100,000 would be 100000).'
);
let loanAmountInDollars = readline.question('');

while (invalidNumber(loanAmountInDollars)) {
  prompt('Please provide a valid dollar amount.');
  loanAmountInDollars = readline.question('');
}

loanAmountInDollars = Number(loanAmountInDollars);

// Obtain the APR amount from the user and validate their input.
prompt(
  'Please provide the Annual Percentage Rate (APR) (i.e., 5.6% would be 5.6).'
);
let annualPercentageRate = readline.question('');

while (invalidNumber(annualPercentageRate)) {
  prompt('Please provide a valid Annual Percentage Rate (APR)');
  annualPercentageRate = readline.question('');
}

// Explicity coerce the provided value to a number and convert it to a decimal.
let annualPercentageRateAsDecimal = Number(annualPercentageRate) / 100;

/* Obtain the number of years in the loan duration
   from the user and validate their input. */
prompt(
  'Please indicate the duration of the loan in years, excluding additional months (i.e., 6.8 years would be 6).'
);
let loanDurationYears = readline.question('');

while (invalidNumber(loanDurationYears)) {
  prompt('Please provide a valid number of years.');
  loanDurationYears = readline.question('');
}

/* Explicitly coerce the number of years to a number
   and convert the number of years to months. */
let yearsOfLoanInMonths = Number(loanDurationYears) * 12;

/* Obtain the loan duration (in months) from the user, validate their input,
   and explicitly coerce the amount to a number. */
prompt(
  'Please indicate the number of additional months in the term of the loan, excluding years (i.e., 6 years, 10 months would be 10).'
);
let additionalMonthsInLoan = readline.question('');

while (invalidNumber(additionalMonthsInLoan)) {
  prompt(
    'Please provide the duration of the loan in months (i.e., 1 year is 12 months).'
  );
  additionalMonthsInLoan = readline.question('');
}

additionalMonthsInLoan = Number(additionalMonthsInLoan);

// Combine the years and months to figure out the total number of months.
let loanDurationInMonths = yearsOfLoanInMonths + additionalMonthsInLoan;

// Convert the Annual Percentage Rate (APR) into the monthly interest rate.
const monthlyInterestRate = annualPercentageRateAsDecimal / 12;

// Calculate the monthly interest payment using the provided formula.
let monthlyPayment;

// Handle no-interest loans!
if (monthlyInterestRate === 0) {
  monthlyPayment = loanAmountInDollars / loanDurationInMonths;
} else {
  monthlyPayment =
    loanAmountInDollars *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)));
}

// Format the number correctly.
let formattedMonthlyPayment = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
}).format(monthlyPayment);

// Return the result:
prompt(`Your estimated monthly payment is: ${formattedMonthlyPayment}.`);
