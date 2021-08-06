import React from 'react'

export default class Classcomp extends React.Component {
	render() {
		return (
			<div>
			<h1>Hello world this is my Class components</h1>
			<h2>This a child component which is put into mother component named App.js</h2>
	      	<h2>by using props(classcomponent)===>নাম={this.props.name} বয়স={this.props.age} জন্মস্থান={this.props.birthplace}</h2>

			</div>
		)
	}
}

