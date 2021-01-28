// Further Exploration
// Write a transposeInPlace method that transposes a 3x3 matrix in place.

// Constraints:
/* Write your method from scratch without
   creating a new matrix or any new arrays. */

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

function transpose(matrix) {
  for (let outer = 0; outer < 3; outer++) {
    for (let inner = 0; inner < 3; inner++) {
      matrix[inner].push(matrix[outer].shift());
    }
  }

  return matrix;
}

console.log(transpose(matrix)); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
