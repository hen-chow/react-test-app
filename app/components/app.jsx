import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form.jsx';
import CardList from './cardList.jsx';

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			cards: []
		};
	}

	addNewCard(cardInfo){
		this.setState((prevState) => {
			cards: prevState.cards.push(cardInfo)
			console.log(this.state.cards);
		});
	};

	render(){
  	return (
    	<div>
				<Form onSubmit={ this.addNewCard.bind(this) }/>
				<CardList cards={ this.state.cards }/>
      </div>
    );
  };
}
