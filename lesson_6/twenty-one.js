/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

const CARD_SUITS = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const CARDS = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];

const POINTS_TO_WIN = 21;

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

function printHands(playerHand, dealerHand) {
  console.clear();
  prompt(`Dealer has: ${dealerHand[0]} and an unknown card.`);
  prompt(`You have: ${joinAnd(playerHand)}.`);
  console.log('------------------------------------');
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

function busted(hand) {
  let score = calculateScore(hand);

  if (score > POINTS_TO_WIN) {
    return true;
  } else {
    return false;
  }
}

function playerTurn(deck, playerHand, dealerHand) {
  while (true) {
    let choice;

    printHands(playerHand, dealerHand);

    prompt(`Would you like to hit or stay? (hit/stay)`);
    while (true) {
      choice = readline.question().toLowerCase();
      if (choice[0] === 'h' || choice[0] === 's') break;
    }

    if (choice[0] === 'h') {
      dealCard(deck, playerHand);

      if (busted(playerHand)) break;
    }

    if (choice[0] === 's') {
      prompt(`You chose to stay!\n`);
      break;
    }
  }
}

function dealerTurn(deck, dealerHand) {
  while (calculateScore(dealerHand) <= 17 && !busted(dealerHand)) {
    dealCard(deck, dealerHand);
  }
}

function detectWinner(playerHand, dealerHand) {
  const playerScore = calculateScore(playerHand);
  const dealerScore = calculateScore(dealerHand);

  if (playerScore === 21 || playerScore > dealerScore) {
    prompt(`Player Wins! (${playerScore})`);
  } else {
    prompt(`Dealer Wins! (${dealerScore})`);
  }
}

while (true) {
  const deck = initializeDeck();
  const playerHand = [];
  const dealerHand = [];

  firstDeal(deck, playerHand, dealerHand);

  playerTurn(deck, playerHand, dealerHand);
  if (busted(playerHand)) {
    prompt(`You busted! (${calculateScore(playerHand)})`);
    prompt(`The Dealer wins! (${calculateScore(dealerHand)})`);
    break;
  }

  dealerTurn(deck, dealerHand);

  if (busted(dealerHand)) {
    prompt(`The Dealer busted! (${calculateScore(dealerHand)})`);
    prompt(`The Player wins! (${calculateScore(playerHand)})`);
    break;
  }

  detectWinner(playerHand, dealerHand);

  break;
}
