import React from 'react';

class Dstrctprpsfunccomp extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
  	const {naam,boyosh}=this.props;
    return (
      <div>
      <h1>======De-Structing props for Classcomponent======</h1>
      <h1>In here we are using De-Structing for class components</h1>
      <h1>name={naam} and boyosh={boyosh}</h1>
      </div>
    );
  }
}

export default Dstrctprpsfunccomp;