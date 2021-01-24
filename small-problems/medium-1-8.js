function fibonacci(integer) {
  const savedComputation = {};

  if (integer <= 2) {
    if (!savedComputation.hasOwnProperty(integer)) {
      savedComputation[integer] = 1;
    }
    return savedComputation[integer];
  } else {
    if (!savedComputation.hasOwnProperty(integer)) {
      savedComputation[integer] =
        fibonacci(integer - 1) + fibonacci(integer - 2);
    }
    return savedComputation[integer];
  }
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
