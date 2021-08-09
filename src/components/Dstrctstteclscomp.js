import React from 'react';

class Dstrctstteclscomp extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    	city:"Gaibandha",
    	division:"Rangpur"
    }

  }

  render() {
  	const {city,division} = this.state;
    return (
      <div>
      <h1>======De-Structing State for Classcomponent======</h1>
      <h1>In here we are using De-Structing State for Classcomponent</h1>
      <h1>jayga={city} and bivag={division}</h1>
      <p>De-Structing props/state মানে হলো props.varname /this.props.varname/this.state.varname 
      <br />এর পরিবর্তে const (varname)=props/this.props/this.state লিখে jsx এ শুধুমাত্র (varname) লেখা </p>
      </div>
    );
  }
}

export default Dstrctstteclscomp;