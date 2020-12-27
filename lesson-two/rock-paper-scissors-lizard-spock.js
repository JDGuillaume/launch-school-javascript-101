const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WIN_CONDITIONS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock'],
};

let continuePlaying = true;

function prompt(message) {
  console.log(`=> ${message}`);
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

function displayChoices(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
}

function displayWinner(winner) {
  switch (winner) {
    case 'tie':
      prompt("It's a tie!");
      break;
    case 'player':
      prompt('You win!');
      break;
    case 'computer':
      prompt('Computer wins!');
      break;
  }
}

while (continuePlaying) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let winner = findWinner(choice, computerChoice);
  displayChoices(choice, computerChoice);
  displayWinner(winner);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer !== 'y') {
    continuePlaying = false;
  }
}
