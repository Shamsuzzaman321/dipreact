import React from 'react';

class Cnditnalrendering extends React.Component {
  constructor(props) {
  	super(props)
  
  	this.state = {
  		 user:false
  	}
  }

  

  render() {
    if (this.state.user) {
    	// statement
    	return(
    		<div>
    			The User is present
    		</div>
    		)
    } else {
    	// statement
    	return(
    		<div>
    			The User is not Present
    		</div>
    		)
    }
  }
}

export default Cnditnalrendering;