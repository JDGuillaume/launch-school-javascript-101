let arr = [
  ['b', 'c', 'a'],
  [2, 1, 3],
  ['blue', 'black', 'green'],
];

function sortAlphabeticallyOrNumericallyDescending(array) {
  return array.map(subarray => {
    if (subarray.every(element => typeof element === 'number')) {
      return subarray.slice().sort((a, b) => b - a);
    } else {
      return subarray
        .slice()
        .sort()
        .reverse();
    }
  });
}

console.log(sortAlphabeticallyOrNumericallyDescending(arr));
console.log(arr);
