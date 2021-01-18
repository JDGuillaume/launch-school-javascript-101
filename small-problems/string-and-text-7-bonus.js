// Further Exploration

// Code
function staggeredCaseCount(phrase) {
  return [...phrase]
    .map((item, index) => {
      return index % 2 === 0 ? item.toUpperCase() : item.toLowerCase();
    })
    .join('');
}

function staggeredCaseIgnore(phrase) {
  let currentCase = 'upper';

  return [...phrase]
    .map(item => {
      if (/[a-z]/i.test(item)) {
        if (currentCase === 'upper') {
          currentCase = 'lower';
          return item.toUpperCase();
        } else {
          currentCase = 'upper';
          return item.toLowerCase();
        }
      } else {
        return item;
      }
    })
    .join('');
}

function staggeredCase(phrase, countNonAlphabetic = true) {
  if (countNonAlphabetic === true) {
    return staggeredCaseCount(phrase);
  } else {
    return staggeredCaseIgnore(phrase);
  }
}

// Non-Alphabetic Count
console.log(staggeredCase('I Love Launch School!')); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS')); // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers')); // "IgNoRe 77 ThE 4444 nUmBeRs"

// Ignore Non-Alphabetic
console.log(
  staggeredCase('I Love Launch School!', false) === 'I lOvE lAuNcH sChOoL!'
);
console.log(staggeredCase('ALL CAPS', false) === 'AlL cApS');
console.log(
  staggeredCase('ignore 77 the 444 numbers', false) ===
    'IgNoRe 77 ThE 444 nUmBeRs'
);
