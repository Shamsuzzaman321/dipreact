import React from 'react';
import Chldmthdasprops from './Chldmthdasprops';
class Prntmthdasprops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	varname: 'Faisal Azad jointo',
    }

  }
  prntfunctioname =() => {
  	this.state = {
        funcname1: 'Gaibandha',
        funcname2: 'Rangpur',
        funcname3: 'Bogra'
  	}
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