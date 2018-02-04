import React from 'react';
import ReactDOM from 'react-dom';

// 3D flipping animation is done via CSS
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
          style={{backgroundImage: 'url("./views/gameplay/assets/' + props.cardData + '")'}}
          id={'gameplayCard-' + id}
          className="gameplayCard--front"
          ></div>
        </div>
    </div>
  )
}

export default class GameplayRow extends React.Component {
  constructor(props) {
    super(props);
  }
  // GameplayView renders GameplayRows which render GameplayCards
  // rowIndex and cardIndex are used to generate a unique id for DOM selection
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
