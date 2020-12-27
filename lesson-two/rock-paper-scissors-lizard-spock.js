const readline = require('readline-sync');

const WIN_CONDITIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};
const VALID_CHOICES = Object.keys(WIN_CONDITIONS);

const abbreviatedChoices = {};

let playerWinCount = 0;
let computerWinCount = 0;

function shortenChoices(VALID_CHOICES) {
  VALID_CHOICES.forEach(choice => {
    if (abbreviatedChoices[choice[0]] === undefined) {
      abbreviatedChoices[choice[0]] = choice;
    } else {
      abbreviatedChoices[choice[0].toUpperCase()] = choice;
    }
  });
}
shortenChoices(VALID_CHOICES);

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayChoices(choice, computerChoice) {
  console.log('');
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
}

function findWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return 'tie';
  } else if (WIN_CONDITIONS[choice].includes(computerChoice)) {
    return 'player';
  } else {
    return 'computer';
  }
}

function displayWinner(winner) {
  switch (winner) {
    case 'tie':
      prompt("It's a tie!\n");
      break;
    case 'player':
      prompt('You win!\n');
      break;
    case 'computer':
      prompt('Computer wins!\n');
      break;
  }
}

function updateWinCount(winner) {
  switch (winner) {
    case 'player':
      playerWinCount += 1;
      break;
    case 'computer':
      computerWinCount += 1;
      break;
  }
}

function displayOverallWinner(playerWinCount) {
  if (playerWinCount === 5) {
    prompt('You won best of 5!');
  } else {
    prompt('The computer won best of 5!');
  }
}

while (playerWinCount !== 5 && computerWinCount !== 5) {
  prompt(
    `Choose one: ${Object.entries(abbreviatedChoices)
      .join(' | ')
      .replaceAll(',', '-')}`
  );
  let abbreviatedChoice = readline.question();

  while (!abbreviatedChoices[abbreviatedChoice]) {
    prompt("That's not a valid choice.");
    abbreviatedChoice = readline.question();
  }

  let choice = abbreviatedChoices[abbreviatedChoice];

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayChoices(choice, computerChoice);
  let winner = findWinner(choice, computerChoice);
  displayWinner(winner);
  updateWinCount(winner);
  console.log(`Player: ${playerWinCount}, Computer: ${computerWinCount}\n`);
}

displayOverallWinner(playerWinCount);
