import React from 'react';

class Statecomp extends React.Component {
  constructor(props) {
  	super(props)
  
  	this.state = {
  		 name: "Bangladesh",
       age: 100
  	}
  }

  setStatefunction =()=> {

    this.setState({
      name: "America",
       age: 70
    })

 }

  

  render() {
    return (
    <div>
      <h1>========================State======================</h1>
      <h2>In Here we will learn details about State(general variable declarations with value)</h2>
      <h2>In Here we will learn details about setState(update variable's value)</h2>
      <h1>in here we are showing the output of the declared variables={this.state.name}</h1>
      <h1>in here we are showing the output of the declared variables={this.state.age}</h1>
      <button onClick={() => this.setStatefunction()}>click me</button>

      
    </div>
    );
  }
}

export default Statecomp;