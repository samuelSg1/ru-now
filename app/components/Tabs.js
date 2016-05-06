import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Comment from 'material-ui/svg-icons/communication/comment';
import Stars from 'material-ui/svg-icons/action/stars';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';
import MeatVoteListContainer from '../containers/MeatVoteListContainer';
import StarVoteListContainer from '../containers/StarVoteListContainer';
import CommentBox from './CommentBox'

export default ({}) => {
  return (
    <Tabs>
    	<Tab icon={<Comment />} >
        <CommentBox />
    	</Tab>
    	<Tab icon={<Restaurant />} >
        <MeatVoteListContainer />
    	</Tab>
    	<Tab icon={<Stars />} >
        <StarVoteListContainer />
    	</Tab>
    </Tabs>
  )
}
