// Further Exploration
//Can you use forEach or map in your solution? Why or why not?
// While you can, it's not really the intended use case.

// Code
function sequence(integer) {
  const result = [integer];
  let count = 1;

  result.forEach(_ => {
    result.shift();

    while (count <= integer) {
      result.push(count);
      count++;
    }
  });

  return result;
}
console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]
