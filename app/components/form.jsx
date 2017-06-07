import React from 'react';
import Axios from 'axios';

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      userName: ''
    };
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.userName);
    Axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then((response) => {
        this.props.onSubmit(response.data);
        this.setState({userName: ''});
      })

  };

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input style={{lineHeight: '2em', fontSize: '1em'}} type="text" value={this.state.userName} onChange={(event) => this.setState({userName: event.target.value })} placeholder="Github username"/>
        <button style={{padding: '0.5em', margin: '1em', borderRadius: '5px', fontSize: '1em'}}type="submit">Add card</button>
      </form>
    );
  };

}
