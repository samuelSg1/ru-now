import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionGrade from 'material-ui/svg-icons/action/grade';

export default ({userVotes, showResult, current, handleClick}) => {
  return (
    <div>
      <List>
        <Subheader>Star Votes</Subheader>
        {userVotes.slice(0,current).map((vote, key)=>{
          return(
            <ListItem
              key={key}
              primaryText={vote.name}
              leftAvatar={<Avatar src={vote.avatar} />}
              rightIcon={<div>
                {(vote.stars > 0)?
                  <span style={{fontSize: '2em', marginLeft:'-7.5rem',color:'yellow'}}>★</span>
                :<span style={{fontSize: '2em', marginLeft:'-7.5rem'}}>★</span>}
                 {[...Array(vote.stars-1)].map((x, i) =>
                <span style={{fontSize: '2em', color:'yellow'}}>★</span>
                )}
                  {[...Array(5-vote.stars)].map((x, i) =>
                 <span style={{fontSize: '2em'}}>★</span>
                  )}
                </div>
              }
            />
          )
        })}
	<ListItem primaryText={<a href="#">Show more</a>} onTouchTap={handleClick.bind(this)} />
      </List>
    </div>
  )
}
