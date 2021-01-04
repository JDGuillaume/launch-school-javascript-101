function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;

  for (
    let currentRowNumber = 1;
    currentRowNumber <= rowNumber;
    currentRowNumber += 1
  ) {
    let row = createRow(startInteger, currentRowNumber);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
  }

  return rows[rows.length - 1].reduce(
    (sum, currentValue) => sum + currentValue
  );
}

function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;

  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}

// Test Cases
console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

console.log(createRow(2, 1)); // [2]
console.log(createRow(4, 2)); // [4, 6]
console.log(createRow(8, 3)); // [8, 10, 12]
