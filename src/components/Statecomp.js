import React from 'react';

class Statecomp extends React.Component {
  constructor(props) {
  	super(props)
  
  	this.state = {
  		 statevariables: "hello world this is my Statevariable"
  	}
  }

  function changestatrevariables () {
	this.setState({
  		 statevariables: "updated Statevariable"

	})
  }

  render() {
    return (
    <div>
      <h1>========================State======================</h1>
      <h2>In Here we will learn details about State</h2>
      <h2>In Here we will see the {this.state.statevariables}</h2>
      <h2>In Here we will see the {this.state.statevariables}</h2>
    </div>
    );
  }
}

export default Statecomp;