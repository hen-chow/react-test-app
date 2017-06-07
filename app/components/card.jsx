import React from 'react';

const fontStyle = {
  fontFamily: 'Helvetica'
}

export default class Card extends React.Component {
  render(){
    return(
      <div style={{margin: '1em'}}>
        <img width='75' src={this.props.avatar_url} />
        <div style={{display: "inline-block", marginLeft: 10}}>
          <div style={{fontFamily: 'Helvetica', fontSize: '1.25em', fontWeight: "bold"}}>{this.props.name}</div>
          <div style={fontStyle}>{this.props.company}</div>
        </div>
      </div>
    );
  };
}
