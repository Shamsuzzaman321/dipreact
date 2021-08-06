import React from 'react'

const Props = (props) => {
	return (
		<div>
		<h1>Hello world this is my props,we will discuss details about properties</h1>	
		<h2>Here we will discuss details about properties of a component</h2>
		<br />
		<p>এখানে আমরা mother/root কম্পোনেন্ট এর মাধ্যমে child কম্পোনেন্ট এর ডাটা/বৈশিষ্ট/properties access করতেছি একটি মাত্র কম্পোনেন্ট use করে </p>
		<h2>নাম={props.name} বয়স={props.age} জন্মস্থান={props.birthplace}</h2>
		<h3>{props.children}</h3>
		</div>
	)
}

export default Props