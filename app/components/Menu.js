import React, { Component } from 'react';
import Radium from 'radium';
import DropDownMenu from 'material-ui/DropDownMenu';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import { browserHistory } from 'react-router'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import LineContainer from '../containers/LineContainer'
import { brown200, brown500 } from 'material-ui/styles/colors'

const styles = {
  container: {
    '@media (min-width: 992px)': {
       display: 'flex',
       width: '100%'
     },
  },
  lineBar: {
    width: '100%',
    background: brown200,
    position: 'fixed',
    zIndex: 99,
    '@media (min-width: 992px)': {
       background: brown500,
       width: '65%',
       position: 'static'
     },
  },
  dropBar: {
    paddingTop: 54,
    '@media (min-width: 992px)': {
       width: '35%',
       paddingTop: 0
     },
  },
  dropToolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  avatar: {
    display: 'none',
    '@media (min-width: 375px)': {
      display: 'block'
    }
  }
}

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '/ru'};
  }

  handleChange = (event, index, value) => {
    if(value === 'login') {
      this.props.handleLogin();
    } else {
      browserHistory.push(value)
    }

  }

  render() {
    const { userData, isLogged } = this.props;
    const loginText = isLogged ? "Logout" : "Facebook Login"
    const userInfo = (
      <div>
        <a href={userData.profileUrl}>
          <span style={styles.avatar}>
            <Avatar src={userData.avatar} />
          </span>
        </a>
      </div>
    )
    return (
      <div style={styles.container}>
        <div style={styles.lineBar}>
          <Toolbar>
            <LineContainer />
          </Toolbar>
        </div>
        <div style={styles.dropBar}>
          <Toolbar style={styles.dropToolbar}>
            {isLogged ? userInfo : <span></span>}
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={'/ru'} primaryText="Restaurante Universitário"/>
              <MenuItem value={'/mu'} primaryText="Restaurante Espaço Multiuso"/>
              <Divider />
              <MenuItem value={'login'} primaryText={loginText}/>
              <MenuItem value={'/about'} primaryText="Sobre o app" />
              <Divider />
              <MenuItem value={'/feedback'} primaryText="Dê seu feedback" />
            </DropDownMenu>
          </Toolbar>
        </div>
      </div>
    );
  }
}

export default Radium(Menu)
