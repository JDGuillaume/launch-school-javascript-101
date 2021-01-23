let arr = [
  ['a', 1],
  ['b', 'two'],
  ['sea', {c: 3}],
  ['D', ['a', 'b', 'c']],
];

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

function makeObject(arrayOfArrays) {
  const object = {};

  arrayOfArrays.forEach(subarray => {
    object[subarray[0]] = subarray[1];
  });

  return object;
}

console.log(arr);
console.log(makeObject(arr));
