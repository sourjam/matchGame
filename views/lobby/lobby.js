import React from 'react';
import ReactDOM from 'react-dom';

export default class LobbyView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="lobbyView--container">
        <div className="lobbyView--header">Memory Game</div>
        <div className="lobbyView--buttonContainer">
          <button className="lobbyView--button" onClick={ () => { this.props.setGameOptions([3, 4]) }}>3x4</button>
          <button className="lobbyView--button" onClick={ () => { this.props.setGameOptions([5, 2]) }}>5x2</button>
          <button className="lobbyView--button" onClick={ () => { this.props.setGameOptions([4, 4]) }}>4x4</button>
          <button className="lobbyView--button" onClick={ () => { this.props.setGameOptions([4, 5]) }}>4x5</button>
        </div>
      </div>
    )
  }
}
