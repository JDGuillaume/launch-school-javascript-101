// Further Exploration
// Can you solve this problem using .forEach()?
// What about map or reduce?

// Code
// .forEach()
function interleaveForEach(arrayOne, arrayTwo) {
  const result = [];

  arrayOne.forEach((item, index) => {
    result.push(item, arrayTwo[index]);
  });

  return result;
}

console.log(interleaveForEach([1, 2, 3], ['a', 'b', 'c']));

// While you can solve it with .map() or .reduce(), it would not be ideal.
// .map() is used to return the same number of elements as were passed in.
// .reduce() is meant to return a singular output.
