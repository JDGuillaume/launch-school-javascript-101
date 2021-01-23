let obj = {
  grape: {type: 'fruit', colors: ['red', 'green'], size: 'small'},
  carrot: {type: 'vegetable', colors: ['orange'], size: 'medium'},
  apple: {type: 'fruit', colors: ['red', 'green'], size: 'medium'},
  apricot: {type: 'fruit', colors: ['orange'], size: 'medium'},
  marrow: {type: 'vegetable', colors: ['green'], size: 'large'},
};

function fruitsAndVeggies(foodObject) {
  const results = [];

  for (let item in foodObject) {
    if (foodObject[item]['type'] === 'fruit') {
      const fruitArray = foodObject[item]['colors'].slice().map(fruit => {
        return fruit[0].toUpperCase() + fruit.slice(1);
      });
      results.push(fruitArray);
    } else {
      results.push(foodObject[item].size.toUpperCase());
    }
  }

  return results;
}

console.log(obj);
console.log(fruitsAndVeggies(obj));
