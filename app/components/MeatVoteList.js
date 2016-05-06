import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import {blue500, red500, lightBlack} from 'material-ui/styles/colors';
import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbsDown from 'material-ui/svg-icons/action/thumb-down';


import TimeAgo from 'react-timeago';

const iconStyles = {
  marginRight: 24,
};

export default ({list, showResult, current, handleClick }) => {
  return (
    <List>
      {

        list.slice(0,current).map(function(result) {
          return <ListItem
                    key={result.userName}
                    primaryText={<text>{result.userName} <span style={{color: lightBlack}}><TimeAgo date={result.userDate} /></span></text>}
                    leftAvatar={<Avatar src={result.userImage} />}
                    rightIcon={ result.userMeatVote ? <ThumbsUp /> : <ThumbsDown /> }
                    />
        })
      }
      <ListItem primaryText={<a href="#">Show more</a>} onTouchTap={handleClick.bind(this)} />
    </List>
  )
}
