import React from 'react';
import ReactDOM from 'react-dom';

const GameplayCard = (props) => {
  let id = '' + props.rowIndex + props.cardIndex;
  return (
    <div className="gameplayCard--container">
      <div id={ 'gameplayCard-' + id } className="gameplayCard">
        <div
          style={{backgroundImage: 'url("./views/gameplay/assets/info.png")'}}
          id={'gameplayCard-' + id}
          className="gameplayCard--back"
          onClick={ () => { props.pickCard(props.cardData, id) } }></div>
        <div
          style={{backgroundImage: 'url("./views/gameplay/assets/' + props.cardData[0] + '")'}}
          id={'gameplayCard-' + id}
          className="gameplayCard--front"
          onClick={ () => { props.pickCard(props.cardData, id) } }></div>
        </div>
    </div>
  )
}

export default class GameplayRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gameplayRow">
        { this.props.rowData.map((card, index) =>
          <GameplayCard
            key={'gamecard-' + index}
            rowIndex={this.props.rowIndex}
            cardIndex={index}
            cardData={card}
            pickCard={this.props.pickCard}/>
        )}
      </div>
    )
  }
}
