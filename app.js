import React from 'react';
import ReactDOM from 'react-dom';
import Config from './config';

import LobbyView from './views/lobby/lobby';
import GameplayView from './views/gameplay/gameplay';

export default class MatchGame extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.gameOptions = [];
    this.setGameOptions = this.setGameOptions.bind(this);
    this.clearGameOptions = this.clearGameOptions.bind(this);
  }
  setGameOptions(options) {
    this.setState({
      gameOptions: options
    })
  }
  clearGameOptions() {
    this.setState({
      gameOptions: []
    })
  }
  render() {
    return (
      <div id="matchGameApp">
        { this.state.gameOptions.length > 0 ?
          <GameplayView
            clearGameOptions={this.clearGameOptions} gameOptions={this.state.gameOptions}/>
          :
          <LobbyView
            gameTitle={Config.gameTitle}
            gameOptions={Config.gameOptions}
            setGameOptions={this.setGameOptions} />
        }
      </div>
    )
  }
}

ReactDOM.render(
  <MatchGame />,
  document.getElementById('matchGameRoot')
)
