import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';

import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbsDown from 'material-ui/svg-icons/action/thumb-down';

import 'whatwg-fetch';

class Meat extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	checkUserLogged  = () => {
		const { isLogged, handleOpen} = this.props;
		if( !isLogged )
		{
			handleOpen();
			return false;
		}
		return true;
	}

	vote(vote) {
		const userData = JSON.parse(localStorage.getItem('userData'));
		console.log(localStorage.getItem('userData'));

		const url = 'http://localhost:8000/api/meat/vote';

		console.log(JSON.stringify({
					vote: vote,
					userId: userData.id
				}));

			fetch(url, {
				method: 'POST',
		/*		 headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },  */
				headers: {
				    'Accept': 'application/json',
				    'Content-Type': 'application/json'
				},
				body: /*"vote="+vote+"&userId="+userData.id*/ JSON.stringify({
					vote: vote,
					userId: userData.id
				})
			}).then((res) => res.json()).then((j) => {
				if( j.res )
					alert("Seu voto foi efetuado com sucesso!");
				else
					alert("Ocorreu um problema ao votar!");
			}).catch((err) => {console.log(err)});
	}

	voteYes = () => {
		if( this.checkUserLogged() )
			this.vote(true);
	}

	voteNo = () => {
		if( this.checkUserLogged() )
			this.vote(false);
	}

	render() {
		const date = new Date()
		return	(
			<div id="meatLike">
				Tem carne
				<IconButton onTouchTap={this.voteYes} >
					<ThumbsUp />
				</IconButton>
				, ou não
				<IconButton onTouchTap={this.voteNo} >
					<ThumbsDown />
				</IconButton>
				?
		    </div>
		)
	}

}

export default Meat
