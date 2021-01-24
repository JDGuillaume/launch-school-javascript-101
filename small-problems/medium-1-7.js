function fibonacci(integer) {
  const results = [];

  for (let count = 0; count <= integer; count++) {
    if (count <= 2) {
      results.push(1);
    } else {
      results.push(results[count - 2] + results[count - 1]);
    }
  }

  return results[integer];
}

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
