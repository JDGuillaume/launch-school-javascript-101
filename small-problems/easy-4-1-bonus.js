// Further Exploration
// If the Math.round() method was used, you have the potential to exceed the max

/* We can make the function more robust by
   comparing min and max prior to execution. */

// Code
function displayTeddyAge() {
  let min = 120;
  let max = 20;

  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }

  let randomAge = Math.floor(Math.random() * (max - min + 1) + min);

  return `Teddy is ${randomAge} years old.`;
}

console.log(displayTeddyAge());
