let arr = [
  [1, 6, 7],
  [1, 5, 3],
  [1, 8, 3],
];

function sortOnSumOfOddNumber(arrayOfArrays) {
  let copyOfArray = JSON.parse(JSON.stringify(arrayOfArrays));

  return copyOfArray.sort((a, b) => {
    return (
      a.filter(item => item % 2 === 1).reduce((sum, value) => sum + value) -
      b.filter(item => item % 2 === 1).reduce((sum, value) => sum + value)
    );
  });
}

console.log(arr);
console.log(sortOnSumOfOddNumber(arr));
