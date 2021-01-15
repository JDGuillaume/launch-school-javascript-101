// Further Exploration
// Try to solve the problem when words are case insensitive.

// Code
function countOccurrences(stringArray) {
  const wordCount = {};
  stringArray.forEach(item => {
    item = item.toLowerCase();
    if (wordCount[item] === undefined) {
      wordCount[item] = 1;
    } else {
      wordCount[item] += 1;
    }
  });

  for (let word in wordCount) {
    console.log(`${word} => ${wordCount[word]}`);
  }
}

let vehicles = [
  'car',
  'car',
  'truck',
  'car',
  'SUV',
  'truck',
  'motorcycle',
  'motorcycle',
  'car',
  'truck',
  'suv',
];

countOccurrences(vehicles);
