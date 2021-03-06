import React, { Component } from 'react'
import StarVoteList from '../components/StarVoteList'

export default class StarVoteListContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
		      userVotes: [
			{
			  name: 'bla bla',
			  stars: '5',
			  time: '123154345',
			  avatar: 'https://unsplash.it/80/80/?image=45'
			},
			{
			  name: 'bla bla',
			  stars: '4',
			  time: '123154345',
			  avatar: 'https://unsplash.it/80/80/?image=130'
			},{
			  name: 'bla bla',
			  stars: '3',
			  time: '123154345',
			  avatar: 'https://unsplash.it/80/80/?image=23'
			},{
			  name: 'bla bla',
			  stars: '2',
			  time: '123154345',
			  avatar: 'https://unsplash.it/80/80/?image=17'
			}
		      ],
			resultShow: 1,
			current: 10
		}
	}

	render() {
		var current = this.state.current;
		var showResult = this.state.showResult;
		return (
	     		 <div>
			    <StarVoteList userVotes={this.state.userVotes} handleClick={this.handleClick} current={current} showResult={showResult} />
      			</div>
		)
	}

 handleClick = (e) => {

    this.setState({
      current: this.state.current + this.state.resultShow
    })
  }
}
