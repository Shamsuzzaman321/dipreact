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
  	alert(`hello world!  user name: ${this.state.varname} + and function er argument method as props: ${argdatavarname}`);

  }

  render() {
    return (
      <div>
      <h1>==Method as props,send data(child=mother) as argument value passing==</h1>
      <h2>======We will pass data via method/function(declare function) ======</h2>
      <Chldmthdasprops childvarname={this.state.varname}/>
      <Chldmthdasprops childfuncname={this.prntfunctioname}/> 
      {/* components(childcomponent) ke jokhn amra html ending tag akare prokash */}
      {/*  korbo  mother root components e tokhn this {this.varname/functionname} tai simple way te likhbo */}
      {/*   */}
      {/*  bind event handler arrorfunction shudhumatro event handler ei use hoye  */}
      {/* thake syntex onClick={()=>this.func/var/class object/method name()} */}

      </div>
    );
  }
}

export default Prntmthdasprops