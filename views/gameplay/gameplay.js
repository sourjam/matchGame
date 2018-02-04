import React from 'react';
import ReactDOM from 'react-dom';

// Helpers are used to generate the game board itself
// shuffleCards, generateRows and makeGameBoard
import Helpers from './helpers';

import GameplayRow from './gameplayRow';

export default class GameplayView extends React.Component {
  constructor(props) {
    super(props);
    let shuffledCards = Helpers.shuffleCards(this.props.gameCards.slice(0));

    this.state = {};
    this.state.gameBoard = Helpers.makeGameBoard(shuffledCards, props.gameOptions);
    this.state.pristineBoard = this.state.gameBoard.slice(0);
    this.state.selectedCard = [];

    this.pickCard = this.pickCard.bind(this);
  }
  // pickCard will store user's choice if none exists and will compare with 2nd
  // if matching the animation classes will not be removed
  // else they will both be removed after a timeout of 1 second
  pickCard(card, domId) {
    let picked = document.getElementById('gameplayCard-' + domId);
    if (this.state.selectedCard.length === 0) {
      picked.classList.add('flipped')
      this.setState({ selectedCard: [card, domId] });
    } else {
      picked.classList.add('flipped')
      if (this.state.selectedCard[0] === card) {
        this.setState({ selectedCard: [] })
      } else {
        let previousCard = document.getElementById('gameplayCard-' + this.state.selectedCard[1]);
        this.setState({ selectedCard: [] }, () => {
          setTimeout(() => {
            picked.classList.remove('flipped');
            previousCard.classList.remove('flipped');
          }, 1000);
        })
      }
    }
  }
  render() {
    return (
      <div className="gameplayView--container">
        <div className="gameplayView--header">
          { this.state.gameBoard.map((row, index) =>
            <GameplayRow
              rowIndex={index}
              rowData={row}
              key={'gamerow-' + index}
              pickCard={this.pickCard} />
          )}
          <div style={{backgroundImage: 'url("./views/gameplay/assets/play-button.png")'}} onClick={this.props.clearGameOptions} className="gameplayView--backButton"></div>
        </div>
      </div>
    )
  }
}
