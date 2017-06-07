import React from 'react';
import Card from './card.jsx';

export default class CardList extends React.Component {
  render(){
    return(
      <div>
        {
          this.props.cards.map(card =>
            <Card key={card.id} {...card} />)
        }
      </div>
    );
  };
}
