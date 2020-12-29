// A1:
let numbers1 = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];
let numbers3 = [1, 2, 3, 4];

// Option 1:
numbers1.splice(0, 4);
console.log(numbers1);

// Option 2:
while (numbers2.length > 0) {
  numbers2.pop();
}
console.log(numbers2);

// Option 3:
while (numbers3.length > 0) {
  numbers3.shift();
}
console.log(numbers3);

// ----------------------------------------------------------------------

/* A2: JavaScript will attempt to convert the arrays to
       strings and concatenate them. */

// ----------------------------------------------------------------------

// A3: The code will output 'hello there' because strings are primitive values!

// ----------------------------------------------------------------------

/* A4: My initial thought was that the 1st array would be untouched.
       However, after reading about shallow vs. deep copy, I
       understand that a shallow copy will not duplicate nested objects. */

// ----------------------------------------------------------------------

// A5:

// Option 1:
function isValidColor1(color) {
  return color === 'blue' || color === 'green';
}

console.log(isValidColor1('blue'));
console.log(isValidColor1('purple'));

// Option 2:
function isValidColor2(color) {
  return ['green', 'blue'].includes(color);
}

console.log(isValidColor2('blue'));
console.log(isValidColor2('purple'));
