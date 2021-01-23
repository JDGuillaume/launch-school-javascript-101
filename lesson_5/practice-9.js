let arr = [
  ['b', 'c', 'a'],
  [2, 1, 3],
  ['blue', 'black', 'green'],
];

function sortAlphabeticallyOrNumerically(array) {
  return array.map(subarray => {
    if (subarray.every(element => typeof element === 'number')) {
      return subarray.slice().sort((a, b) => a - b);
    } else {
      return subarray.slice().sort();
    }
  });
}

console.log(sortAlphabeticallyOrNumerically(arr));
console.log(arr);
