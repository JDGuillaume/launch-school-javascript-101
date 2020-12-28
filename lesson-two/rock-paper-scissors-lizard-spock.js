const readline = require('readline-sync');

const WIN_CONDITIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};
const VALID_CHOICES = Object.keys(WIN_CONDITIONS);
const GAMES_TO_WIN = 5;

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

function welcomePlayer() {
  prompt(
    `Welcome to ${VALID_CHOICES.map(
      item => item[0].toUpperCase() + item.slice(1)
    ).join(', ')}! We're playing best of ${GAMES_TO_WIN}!`
  );
}

function displayChoices(abbreviatedChoices) {
  prompt(
    `Choose one: ${Object.entries(abbreviatedChoices)
      .join(' | ')
      .replaceAll(',', '-')}`
  );
}

function setComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

function displaySelected(choice, computerChoice) {
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
  if (playerWinCount === GAMES_TO_WIN) {
    prompt(`You won best of ${GAMES_TO_WIN}!`);
  } else {
    prompt(`The computer won best of ${GAMES_TO_WIN}!`);
  }
}

function clearScore() {
  playerWinCount = 0;
  computerWinCount = 0;
}

function playAgain() {
  prompt(`Would you like to play again? (y/n)`);
  let continuePlaying = readline.question();

  while (continuePlaying[0] !== 'n' && continuePlaying[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    continuePlaying = readline.question().toLowerCase();
  }

  if (continuePlaying === 'y') {
    clearScore();
    playGame();
  }
}

function playGame() {
  while (playerWinCount !== GAMES_TO_WIN && computerWinCount !== GAMES_TO_WIN) {
    displayChoices(abbreviatedChoices);
    let abbreviatedChoice = readline.question();

    while (!abbreviatedChoices[abbreviatedChoice]) {
      prompt("That's not a valid choice.");
      abbreviatedChoice = readline.question();
    }

    let choice = abbreviatedChoices[abbreviatedChoice];

    let computerChoice = setComputerChoice();

    displaySelected(choice, computerChoice);

    let winner = findWinner(choice, computerChoice);

    displayWinner(winner);
    updateWinCount(winner);
    console.log(`Player: ${playerWinCount}, Computer: ${computerWinCount}\n`);
  }

  displayOverallWinner(playerWinCount);
  playAgain();
}

welcomePlayer();
playGame();
