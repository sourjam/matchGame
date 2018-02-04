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
  pickCard(card) {

  }
  render() {
    return (
      <div className="gameplayView--container">
        <div className="gameplayView--header">
          { this.state.gameBoard.map((row) => {

          })}
          <button onClick={this.props.clearGameOptions} className="gameplayView--backButton">Back</button>
        </div>
      </div>
    )
  }
}
