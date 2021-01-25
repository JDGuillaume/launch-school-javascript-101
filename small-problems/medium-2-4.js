// Understand the Problem
// Input: Integer
// Output: Integer

// The function should:
//  - Accept an integer (Year) as an argument
//  - Return the number of Fridays whose date is the 13th within the given year

// Assumption: Year > 1752 (Acceptance of Gregorian Calendar).

// Examples / Test Cases
console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2

// Data Structure
// Date Object

// Algorithm
// Create a function that accepts a year as an argument.
// Initialize a variable to 0 (FridayCount)
// Loop
// Beginning with 1/13/${year} to 12/13/${year}
//  - If day === Friday, increment FridayCount
// return FridayCount

// Code
function fridayThe13ths(year) {
  let fridayCount = 0;
  const monthsInYear = 12;
  const friday = 5;

  for (let count = 1; count <= monthsInYear; count++) {
    let thirteenth = new Date(`${count} 13, ${year}`);
    if (thirteenth.getDay() === friday) {
      fridayCount++;
    }
  }

  return fridayCount;
}

/* Storing the thirteenths in an array and using reduce seems like an
   over-engineered solution, when a simple count will suffice. */
