import React, { Component, cloneElement } from 'react'
import { browserHistory } from 'react-router';
import FeedbackPage from '../components/FeedbackPage'

class FeedbackPageContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	render() {
		return	(
			<FeedbackPage {...this.state} />
		)
	}

}

export default FeedbackPageContainer
