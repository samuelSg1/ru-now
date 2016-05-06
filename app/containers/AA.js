import React, { Component, cloneElement } from 'react'
import { browserHistory } from 'react-router';
import AA from '../components/AA'

class AAContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		return	(
			<AA {...this.state} />
		)
	}

}

export default AAContainer
