let munsters = {
  herman: {age: 32, gender: 'male'},
  lily: {age: 30, gender: 'female'},
  grandpa: {age: 402, gender: 'male'},
  eddie: {age: 10, gender: 'male'},
  marilyn: {age: 23, gender: 'female'},
};

function printFamilyDetails(familyObject) {
  for (let member in familyObject) {
    console.log(
      `${[member]} is a ${familyObject[member]['age']}-year-old ${
        familyObject[member]['gender']
      }.`
    );
  }
}

printFamilyDetails(munsters);
