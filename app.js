import React from 'react';
import ReactDOM from 'react-dom';

export default class MatchGame extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>Hello React World</div>
    )
  }
}

ReactDOM.render(
  <MatchGame />,
  document.getElementById('matchGameApp')
)
