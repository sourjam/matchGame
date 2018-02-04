import React from 'react';
import ReactDOM from 'react-dom';

export default class GameplayView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.boardWidth = props.gameOptions[0]; // cards in each row
    this.state.boardHeight = props.gameOptions[1]; // rows to create
    this.state.totalCards = props.gameOptions[0] * props.gameOptions[1];
  }
  componentDidMount() {
    // generate random order of total cards and divide into buckets for each row
  }
  render() {
    return (
      <div className="gameplayView--container">
        <div className="gameplayView--header">
          Gameplay
          <button onClick={this.props.clearGameOptions} className="gameplayView--backButton">Back</button>
        </div>
      </div>
    )
  }
}
