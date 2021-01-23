let munsters = {
  Herman: {age: 32, gender: 'male'},
  Lily: {age: 30, gender: 'female'},
  Grandpa: {age: 402, gender: 'male'},
  Eddie: {age: 10, gender: 'male'},
  Marilyn: {age: 23, gender: 'female'},
};

function computeTotalAge(familyObject) {
  let sum = 0;

  for (let person in familyObject) {
    if (familyObject[person]['gender'] === 'male') {
      sum += familyObject[person]['age'];
    }
  }
  return sum;
}

console.log(computeTotalAge(munsters));
