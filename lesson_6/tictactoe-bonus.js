/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const winningLines = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // rows
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // columns
  [1, 5, 9],
  [3, 5, 7], // diagonals
];

function prompt(message) {
  return console.log(`=> ${message}`);
}

function joinOr(array = [], delimiter = ', ', conjunction = 'or') {
  let arrayString = array.join(delimiter);
  conjunction = ' ' + conjunction + ' ';

  if (array.length === 2) {
    return array.join(conjunction);
  }

  if (array.length > 2) {
    let lastDelimiterIndex = arrayString.lastIndexOf(delimiter);

    return (
      arrayString.slice(0, lastDelimiterIndex + 1) +
      conjunction +
      arrayString.slice(-1)
    );
  }

  return arrayString;
}

function displayBoard(board, playerWins, computerWins) {
  console.clear();

  prompt(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);
  prompt(`Player: ${playerWins} Computer: ${computerWins}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function detectWinningMove(board) {
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === INITIAL_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return sq1;
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === INITIAL_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return sq2;
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === INITIAL_MARKER
    ) {
      return sq3;
    }
  }

  return null;
}

function detectThreat(board) {
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === INITIAL_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return sq1;
    } else if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === INITIAL_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return sq2;
    } else if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === INITIAL_MARKER
    ) {
      return sq3;
    }
  }

  return null;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))})`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt("Sorry, that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  if (detectWinningMove(board)) {
    board[detectWinningMove(board)] = COMPUTER_MARKER;
  } else if (detectThreat(board)) {
    board[detectThreat(board)] = COMPUTER_MARKER;
  } else if (emptySquares(board).includes(5)) {
    board[5] = COMPUTER_MARKER;
  } else {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    let square = emptySquares(board)[randomIndex];

    board[square] = COMPUTER_MARKER;
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

while (true) {
  let playerWins = 0;
  let computerWins = 0;

  while (playerWins !== 5 && computerWins !== 5) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board, playerWins, computerWins);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);

      if (detectWinner(board) === 'Player') {
        playerWins += 1;
      } else {
        computerWins += 1;
      }
    } else {
      prompt(`It's a tie!`);
    }
  }

  if (playerWins === GAMES_TO_WIN) {
    prompt(`The Player won best of 5!`);
  } else if (computerWins === GAMES_TO_WIN) {
    prompt(`The Computer won best of 5!`);
  }

  prompt('Play again? (y/n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer !== 'y') break;
}

prompt('Thanks  for playing Tic Tac Toe!');
