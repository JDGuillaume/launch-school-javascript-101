let arr = [{a: 1}, {b: 2, c: 3}, {d: 4, e: 5, f: 6}];

function incrementValuesByOne(arrayOfObjects) {
  return arrayOfObjects.map(object => {
    let copyOfObject = Object.assign({}, object);

    for (let key in copyOfObject) {
      copyOfObject[key] += 1;
    }

    return copyOfObject;
  });
}

console.log(arr);
console.log(incrementValuesByOne(arr));
