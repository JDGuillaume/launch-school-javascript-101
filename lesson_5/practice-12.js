let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

function factorOfThree(arrayOfArrays) {
  return arrayOfArrays.map(subarray => {
    return subarray.filter(element => element % 3 === 0);
  });
}

console.log(arr);
console.log(factorOfThree(arr));
