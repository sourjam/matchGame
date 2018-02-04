import React from 'react';
import ReactDOM from 'react-dom';
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
  pickCard(card, domId) {
    let picked = document.getElementById('gameplayCard-' + domId);
    if (picked.classList.contains('flipped')) {
      picked.classList.remove('flipped')
    } else {
      picked.classList.add('flipped')
    }
    if (this.state.selectedCard.length === 0) {
      // new card
    } else {
      // check match
    }
  }
  render() {
    return (
      <div className="gameplayView--container">
        <div className="gameplayView--header">
          { this.state.gameBoard.map((row, index) =>
            <GameplayRow rowIndex={index} rowData={row} key={'gamerow-' + index} pickCard={this.pickCard} />
          )}
          <div style={{backgroundImage: 'url("./views/gameplay/assets/play-button.png")'}} onClick={this.props.clearGameOptions} className="gameplayView--backButton"></div>
        </div>
      </div>
    )
  }
}
