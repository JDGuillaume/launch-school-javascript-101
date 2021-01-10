// Further Exploration

const HEX_TO_INT = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

function hexadecimalToInteger(string) {
  return [...string.toLowerCase()]
    .map(element => HEX_TO_INT[element])
    .reduce((sum, currentValue) => sum * 16 + currentValue);
}
console.log(hexadecimalToInteger('4D9f'));
console.log(hexadecimalToInteger('4D9f') === 19871);
