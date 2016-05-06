import React, { Component, cloneElement } from 'react'
import 'whatwg-fetch';
import { browserHistory } from 'react-router'
import Dialog from 'material-ui/Dialog'
import Snackbar from 'material-ui/Snackbar'
import AppLayout from '../layouts/AppLayout'
import FlatButton from 'material-ui/FlatButton';

export default class AppContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginOpen: false,
			snackbarOpen: false,
			snackbarMessage: '',
			isLogged: false,
			userData: {},
			time: Date.now()
		}
	}

	componentWillMount() {
		const q = this.props.location.query;
		const token = q.access_token || localStorage.getItem('token');
		if(token) {
			localStorage.setItem('token', token);
			const userData = localStorage.getItem('userData');
			if( userData ) {
				browserHistory.push('/ru/1');
				this.setState({
					isLogged: true,
					userData: JSON.parse(userData)
				});
			} else if( !userData ) {
				console.log(q.url_pic);
				const dataFromQuery = {
					avatar: q.url_pic,
					profileUrl: q.profileUrl,
					first_name: q.name,
					id: q.id
				}
				localStorage.setItem('userData', JSON.stringify(dataFromQuery));
				// const userData = localStorage.getItem('userData');
				this.setState({
					isLogged: true,
					userData: dataFromQuery
					// userData: JSON.parse(userData)
				});
				browserHistory.push('/ru')
			}
		}
	}


	componentDidMount() {
		setInterval(this.tick, 5000);
	}

	handleOpen = () => {
    this.setState({loginOpen: true});
  };

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  setSnackbarMessage = (message) => {
  	this.setState({ snackbarMessage: message })
  }

  handleClose = () => {
    this.setState({loginOpen: false});
  };

	handleLogin = () => {
		const { isLogged } = this.state;
		if(!isLogged) {
			location.assign('/api/auth/facebook');
		} else {
			this.setState({
				isLogged: false,
				userData: {}
			})
			localStorage.removeItem('token');
			localStorage.removeItem('userData');
			location.assign('/api/auth/logout');
		}
	}

	render() {
		const { isLogged, userData } = this.state;
		const loginText = isLogged ? "Logout" : "Login"
		const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label={loginText}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleLogin}
      />,
    ];
		return	(
			<AppLayout {...this.state} handleClose={this.handleClose} handleOpen={this.handleOpen} handleLogin={this.handleLogin} handleTouchTap={this.handleTouchTap} >
				{ cloneElement(this.props.children, Object.assign({},{...this.state}, {handleOpen : this.handleOpen, handleClose : this.handleClose, handleRequestClose : this.handleRequestClose, handleTouchTap: this.handleTouchTap, setSnackbarMessage : this.setSnackbarMessage }))}
				<Dialog
		          title="Facebook Login"
		          actions={actions}
		          modal={false}
		          open={this.state.loginOpen}
		          onRequestClose={this.handleClose}
		        >
          			É necessário fazer o login com o Facebook.
        		</Dialog>

        		<Snackbar
			      open={this.state.open}
			      message={this.state.snackbarMessage}
			      autoHideDuration={4000}
			      onRequestClose={this.handleRequestClose}
			    />

			</AppLayout>
		)
	}

	tick = () => {
    	this.setState({
    		time: Date.now()
    	})
  	}
}
