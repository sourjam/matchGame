import React from 'react';
import ReactDOM from 'react-dom';

export default class GameplayView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="gameplayView--container">
        <div className="gameplayView--header">Gameplay</div>
      </div>
    )
  }
}
