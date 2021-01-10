// Further Exploration

function evens(numberArray) {
  return numberArray.filter((_, index) => index % 2 === 1);
}

console.log(evens([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens(['abc', 'def'])); // logs ['def']
console.log(evens([123])); // logs []
console.log(evens([])); // logs []
