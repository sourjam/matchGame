import React from 'react';
import ReactDOM from 'react-dom';

export default class LobbyView extends React.Component {
  constructor(props) {
    super(props);
  }
  // LobbyView maps over the possible game board set ups from the Config file
  render() {
    return (
      <div className="lobbyView--container">
        <div className="lobbyView--header">{this.props.gameTitle}</div>
        <div className="lobbyView--buttonContainer">
          { this.props.gameOptions.map((choice, index) =>
            <button
              key={'lobby-' + index}
              className="lobbyView--button"
              onClick={ () => { this.props.setGameOptions(choice) }}>
                {choice[0]}x{choice[1]}
            </button>
          ) }
        </div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-buddha" title="Pixel Buddha">Pixel Buddha</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      </div>
    )
  }
}
