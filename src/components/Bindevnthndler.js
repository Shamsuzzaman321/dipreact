import React from 'react';

class Bindevnthndler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	name:"Uttorbonggo"
    }
    this.eventhandlerfunction=this.eventhandlerfunction.bind(this)
  }
  eventhandlerfunction=() =>{
  	this.setState({
  		name:"modernUttorbonggo"
  	})
  }
  render() {
    return (
      <div>
      <h1>======Bindeventhandler(related with setstate updated (variablevalues))======</h1>
      <h2>{this.state.name}</h2>
      <button onClick={this.eventhandlerfunction}>clckevent</button>
      </div>
    );
  }
}

export default Bindevnthndler;
