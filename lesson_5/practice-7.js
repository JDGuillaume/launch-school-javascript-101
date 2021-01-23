let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

// The final value of a will be 2.
// The final value of b will be [3, 8].
