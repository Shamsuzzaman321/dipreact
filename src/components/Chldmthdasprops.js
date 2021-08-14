import React from 'react'

const Chldmthdasprops = (props) => {
	return (
		<div>
		<h1>Chldmthdasprops</h1>
		<h1>this datas value comes from mother to child=={props.childvarname}</h1>
		<button onClick={() => props.childfuncname('Passing data from chld to mother via method as props ')}>methodasprops</button>
			
		</div>
	)
}

export default Chldmthdasprops