import React from 'react'

const Dstrctprpsfunccomp = (props) => {
	const {name,age}=props; //variablename De-Structing
	return (
		<div>
      		<h1>======De-Structing props for Functionalcomponent======</h1>
			<h1>In Here we will learn about De-Structing Props for Functionalcomponent</h1>
			<h1>De-Structing Props  by using first and second method <br/> name= {name} and for age={age}</h1>
		</div>
	)
}

export default Dstrctprpsfunccomp

/* import React from 'react'
import fruit from './samefoldername'

const fruits=[rahim,karim,jadhu,madhu]

const Dstrctprpsfunccomp = () => {
	return (
		<div>
		fruits.map((fruit) => {<Fruit fruit={fruit}/>})

		</div>
	)
}

export default Dstrctprpsfunccomp
map((item) => return (
		<div>
			
		</div>
	){})

map((item) => {
	return(
		<Item key={item.id/>index} item={item} />
		) 
   	})

map((item) => {
	
		return (
			<div>
				
			</div>
		)
	
})
map((item,index) => {
	render() {
	return (
		<div key={item.id/>index}> //jodi div tag use kori tahole nestedarray+index div tag e likhe hobe 
		<Item  item={item} />	
		</div>
	)
}}) */

