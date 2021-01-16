// Further Exploration
/* There are a few other characters that should be matching as well.
   Square brackets and curly brackets normally come in pairs.
  Quotation marks(single and double) also typically come in pairs
  and should be balanced. Can you expand this function
  to take into account those characters? */

// Code
function isBalanced(sentence, left, right) {
  let balanceCount = 0;

  for (let count = 0; count < sentence.length; count++) {
    if (sentence[count] === `${left}`) {
      balanceCount += 1;
    } else if (sentence[count] === `${right}`) {
      balanceCount -= 1;
    }

    if (balanceCount < 0) {
      return false;
    }
  }

  return balanceCount === 0;
}

console.log(isBalanced('What (is) this?', '(', ')') === true);
console.log(isBalanced('What is) this?', '(', ')') === false);
console.log(isBalanced('What (is this?', '(', ')') === false);
console.log(isBalanced('((What) (is this))?', '(', ')') === true);
console.log(isBalanced('((What)) (is this))?', '(', ')') === false);
console.log(isBalanced('Hey!', '(', ')') === true);
console.log(isBalanced(')Hey!(', '(', ')') === false);
console.log(isBalanced('What ((is))) up(', '(', ')') === false);
console.log(isBalanced('What ()))is(( up)', '(', ')') === false);
