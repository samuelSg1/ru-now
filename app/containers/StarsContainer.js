import React, { Component } from 'react'
import Stars from '../components/Stars'

export default class StarsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			rating: 4,
			userVote: ''
		}
	}

	render() {
		return	(
			<Stars {...this.state} handleClick={this.handleClick}></Stars>
		)
	}

	handleClick = (e) => {
		console.log(e);
	}

}
