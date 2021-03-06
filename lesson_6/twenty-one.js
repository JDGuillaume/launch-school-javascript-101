/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

const CARD_SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

const POINTS_TO_WIN = 21;
const GAMES_TO_WIN = 5;
const DEALER_THRESHOLD = 17;

function prompt(message) {
  return console.log(`=> ${message}`);
}

function joinAnd(array) {
  switch (array.length) {
    case 0:
      return '';
    case 1:
      return `${array[0]}`;
    case 2:
      return array.join(` and `);
    default:
      return (
        array.slice(0, array.length - 1).join(', ') +
        `, and ${array[array.length - 1]}`
      );
  }
}

function shuffleDeck(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
}

function initializeDeck() {
  let deck = [];

  for (let count = CARD_SUITS.length; count > 0; count--) {
    deck = deck.concat(CARDS);
  }

  shuffleDeck(deck);

  return deck;
}

function dealCard(deck, hand) {
  hand.push(deck.pop());
}

function firstDeal(deck, playerHand, dealerHand) {
  dealCard(deck, playerHand);
  dealCard(deck, dealerHand);
  dealCard(deck, playerHand);
  dealCard(deck, dealerHand);
}

function printHands(playerHand, dealerHand, playerWins, dealerWins) {
  console.log('------------------------------------');
  prompt(`Player: ${playerWins} Dealer: ${dealerWins}\n`);
  prompt(`Dealer has: ${dealerHand[0]} and an unknown card.`);
  prompt(`You have: ${joinAnd(playerHand)}.`);
  console.log('------------------------------------');
}

function hitOrStay() {
  let choice;
  prompt(`Would you like to hit or stay? (hit/stay)`);
  while (true) {
    choice = readline.question().toLowerCase();
    if (choice[0] === 'h' || choice[0] === 's') break;
    prompt('Please choose an appropriate option! (h)it/(s)tay.');
  }
  return choice;
}

function calculateScore(hand) {
  let score = 0;
  let aceCount = 0;

  score = hand
    .map(item => {
      if (['Jack', 'Queen', 'King'].includes(item)) {
        return 10;
      } else if (item === 'Ace') {
        aceCount++;
        return 11;
      } else {
        return item;
      }
    })
    .reduce((sum, value) => sum + value);

  while (score > POINTS_TO_WIN && aceCount > 0) {
    score -= 10;
    aceCount--;
  }

  return score;
}

function busted(handScore) {
  return handScore > POINTS_TO_WIN;
}

// eslint-disable-next-line max-statements
function playerTurn(
  deck,
  playerHand,
  dealerHand,
  playerScore,
  playerWins,
  dealerWins
) {
  while (true) {
    printHands(playerHand, dealerHand, playerWins, dealerWins);

    let choice = hitOrStay();

    if (choice[0] === 'h') {
      dealCard(deck, playerHand);
      console.clear();
      playerScore = calculateScore(playerHand);

      if (busted(playerScore)) return playerScore;
    } else {
      prompt(`You chose to stay!\n`);
      playerScore = calculateScore(playerHand);
      return playerScore;
    }
  }
}

function dealerTurn(deck, dealerHand, dealerScore) {
  while (calculateScore(dealerHand) < DEALER_THRESHOLD && !busted(dealerHand)) {
    dealCard(deck, dealerHand);
  }
  dealerScore = calculateScore(dealerHand);
  return dealerScore;
}

function detectWinner(playerScore, dealerScore) {
  if (playerScore === POINTS_TO_WIN || playerScore > dealerScore) {
    return 'player';
  } else if (dealerScore === POINTS_TO_WIN || dealerScore > playerScore) {
    return 'dealer';
  } else {
    return 'tie';
  }
}

function displayWinner(winner, playerScore, dealerScore) {
  if (winner === 'player') {
    prompt(`Player Wins! (${playerScore}).\n`);
  } else if (winner === 'dealer') {
    prompt(`Dealer Wins! (${dealerScore}).\n`);
  } else {
    prompt(`It's a tie!`);
  }
}

while (true) {
  let playerWins = 0;
  let dealerWins = 0;

  console.clear();
  prompt('Welcome to Twenty-One!');
  prompt('The player closest to 21 without going over wins!');
  prompt(`You'll be playing best of ${GAMES_TO_WIN}.`);

  while (playerWins !== GAMES_TO_WIN && dealerWins !== GAMES_TO_WIN) {
    const deck = initializeDeck();
    const playerHand = [];
    const dealerHand = [];
    let playerScore = 0;
    let dealerScore = 0;

    firstDeal(deck, playerHand, dealerHand);
    playerScore = playerTurn(
      deck,
      playerHand,
      dealerHand,
      playerScore,
      playerWins,
      dealerWins
    );

    if (busted(playerScore)) {
      console.clear();
      prompt(`You busted! (${playerScore}).`);
      prompt(`The Dealer wins! (${calculateScore(dealerHand)}).\n`);
      dealerWins++;
      continue;
    }

    dealerScore = dealerTurn(deck, dealerHand, dealerScore);
    if (busted(dealerScore)) {
      console.clear();
      prompt(`The Dealer busted! (${dealerScore}).`);
      prompt(`The Player wins! (${playerScore}).\n`);
      playerWins++;
      continue;
    }

    console.clear();
    const winner = detectWinner(playerScore, dealerScore);
    displayWinner(winner, playerScore, dealerScore);

    switch (winner) {
      case 'player':
        playerWins++;
        break;
      case 'dealer':
        dealerWins++;
        break;
    }
  }

  if (playerWins === GAMES_TO_WIN) {
    prompt('Congratulations! You won best of 5!');
  } else {
    prompt('The Dealer won best of 5!');
  }

  prompt('Play again? (y/n)');
  let answer;
  let acceptableAnswer = ['y', 'n', 'Y', 'N'];
  while (true) {
    answer = readline.question()[0];
    if (acceptableAnswer.includes(answer)) break;
    prompt('Please choose an appropriate option! (y/n)');
  }

  if (answer.toLowerCase()[0] === 'n') break;
}

prompt('Thanks for playing Twenty-One!');
