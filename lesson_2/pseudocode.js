// Write a function that returns the sum of two numbers
// Define a function that takes two numbers
function sumOfTwo(firstNumber, secondNumber) {
  // Perform the operation on the given numbers. Additionally, make sure to return the value of the operation.
  return firstNumber + secondNumber;
}

console.log(sumOfTwo(2, 3));

// Write a function that takes an array of strings and returns a string that is all those strings concatenated together.
// Write a function that takes an array of strings.
function joinStrings(arrayOfStrings) {
  // Join in the array into one string and return the value.
  return arrayOfStrings.join(' ');
}
console.log(joinStrings(['Merry', 'Christmas!']));

// Write a function takes an array of integers, and returns a new array with every other element
// Write a function that takes an array of integers
function everyOtherElement(arrayOfIntegers) {
  // Create a new array to store the values we want to return.
  const filteredArray = [];

  // Use a for loop to append every other element of the original array to the new array.
  for (let i = 0; i < arrayOfIntegers.length; i = i + 2) {
    filteredArray.push(arrayOfIntegers[i]);
  }
  return filteredArray;
}

console.log(everyOtherElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
