import React from 'react';

class Statecomp extends React.Component {
  constructor(props) {
  	super(props)
  
  	this.state = {
  		 name: "Bangladesh",
  	}
  }

  function changestatrevariables () {
	this.setState({
  		 name: "updated Statevariable"

	})
  }

  render() {
    return (
    <div>
      <h1>========================State======================</h1>
      <h2>In Here we will learn details about State</h2>
      <h2>In Here we will learn details about setState</h2>
      <h1>{this.state.name}</h1>
      <h2>In Here we will see the {this.state.name}</h2>
      <h2>In Here we will see the {this.state.name}</h2>
    </div>
    );
  }
}

export default Statecomp;