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

/**
|--------------------------------------------------
| this is multiline comment section where we can write
 anything we want
##Mount 
constructor
static GetDerivedStateFrom
render
componentdidMount() {}

##update
static GetDerivedStateFrom
shouldComponentUpdate
snapshotfragmentDidUpdate
render
componentDidUpdate

##unmount
componentDidunmount

##errors
GetDerivedStateFromError
componentDidCatch


|--------------------------------------------------
*/
