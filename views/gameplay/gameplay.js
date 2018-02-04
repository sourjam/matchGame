import React from 'react';
import ReactDOM from 'react-dom';

export default class GameplayView extends React.Component {
  constructor(props) {
    super(props);
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
