const shuffleCards = (array) => {
  // Fisher Yates Shuffle
  let copy = [];
  let n = array.length;
  let i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    copy.push(array.splice(i, 1)[0]);
  }
  return copy;
}

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

const makeGameBoard = (shuffledCards, gameOptions) => {
  let uniquesNeeded = (gameOptions[0] * gameOptions[1]) / 2;
  let sessionCards = [];
  for (let i = 0; i < uniquesNeeded; i++) {
    sessionCards.push([shuffledCards[i], 0]);
    sessionCards.push([shuffledCards[i], 0]);
  }
  sessionCards = shuffleCards(sessionCards);
  return generateRows(sessionCards, gameOptions[0]);
}

module.exports = {
  shuffleCards: shuffleCards,
  generateRows: generateRows,
  makeGameBoard: makeGameBoard
}
