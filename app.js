import React from 'react';
import ReactDOM from 'react-dom';

import LobbyView from './views/lobby/lobby';
import GameplayView from './views/gameplay/gameplay';

export default class MatchGame extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.gameOptions = [];
    this.setGameOptions = this.setGameOptions.bind(this);
  }
  setGameOptions(options) {
    this.setState({
      gameOptions: options
    })
  }
  render() {
    return (
      <div id="matchGameApp">
        { this.state.gameOptions.length > 0 ?
          <GameplayView gameOptions={this.state.gameOptions}/>
          :
          <LobbyView setGameOptions={this.setGameOptions} />
        }
      </div>
    )
  }
}

ReactDOM.render(
  <MatchGame />,
  document.getElementById('matchGameRoot')
)
