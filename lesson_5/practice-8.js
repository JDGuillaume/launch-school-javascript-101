let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

function justVowels(object) {
  const valueArray = Object.values(object);

  valueArray.forEach(array => {
    array.forEach(element => {
      element.split('').forEach(character => {
        if (/[aeiou]/i.test(character)) {
          console.log(character);
        }
      });
    });
  });
}

justVowels(obj);
