// Fisher Yates Shuffle from Mike Bostock
const shuffleCards = (array) => {
  let copy = [];
  let n = array.length;
  let i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(array.splice(i, 1)[0]);
  }
  return copy;
}

// generates rows of cards by keeping track of how many cards go in each row
const generateRows = (array, cardsPerRow) => {
  let cardsArray = array.slice(0);
  let gameBoard = [];
  let cardCounter = 0;
  let gameRow = [];
  for (let i = 0; i < cardsArray.length; i++) {
    gameRow.push(cardsArray[i]);
    cardCounter++;
    if (cardCounter === cardsPerRow) {
      gameBoard.push(gameRow);
      cardCounter = 0;
      gameRow = [];
    }
  }
  return gameBoard;
}

// generates gameboard by checking how many unique cards are needed in total
// then creates list of all cards for gameplay session, shuffles and returns the board
const makeGameBoard = (shuffledCards, gameOptions) => {
  let uniquesNeeded = (gameOptions[0] * gameOptions[1]) / 2;
  let sessionCards = [];
  for (let i = 0; i < uniquesNeeded; i++) {
    sessionCards.push(shuffledCards[i]);
    sessionCards.push(shuffledCards[i]);
  }
  sessionCards = shuffleCards(sessionCards);
  return generateRows(sessionCards, gameOptions[0]);
}

module.exports = {
  shuffleCards: shuffleCards,
  generateRows: generateRows,
  makeGameBoard: makeGameBoard
}
