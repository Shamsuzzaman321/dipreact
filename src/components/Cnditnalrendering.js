import React from 'react';

class Cnditnalrendering extends React.Component {
  constructor(props) {
  	super(props)
  
  	this.state = {
  		 user:true
  	}
  }

  

  render() {
    if (this.state.user) {
    	// statement
    	return(
    		<div>
    			The User is present (means) true
    		</div>
    		)
    } else {
    	// statement
    	return(
    		<div>
    			The User is not Present (means) false
    		</div>
    		)
    }
  }
}

export default Cnditnalrendering;
