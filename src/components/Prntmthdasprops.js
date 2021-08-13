import React from 'react';
import Chldmthdasprops from './Chldmthdasprops';
class Prntmthdasprops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	varname: 'Faisal Azad jointo',
    }

  }
  prntfunctioname =(argdatavarname) => {
  	alert(`hello world! in here we will show the user name: ${this.state.varname} + ${argdatavarname}`);
  	
  }

  render() {
    return (
      <div>
      <h1>======We will pass data via method/function(declare function) ======</h1>
      <Chldmthdasprops childvarname={this.state.varname}/>
      <Chldmthdasprops childfuncname={()=> this.prntfunctioname()}/>

      </div>
    );
  }
}

export default Prntmthdasprops