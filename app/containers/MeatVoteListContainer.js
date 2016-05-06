import React, { Component } from 'react'
import MeatVoteList from '../components/MeatVoteList'

export default class MeatVoteListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:
      [
        {
          userName: "Higo",
          userImage: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p160x160/11207340_734681559965606_1042207229036727252_n.jpg?oh=9a84949b3da173e2d2e0a93c9b8432fa&oe=57B46B92&__gda__=1470927511_aceac39c247b9f702e6a904cbcdeb050",
          userDate: Date.now(),
          userMeatVote: false,
        },
        {
          userName: "Luandro",
          userImage: "https://avatars0.githubusercontent.com/u/693728?v=3&s=400",
          userDate: 1461955954016,
          userMeatVote: true,
        }
      ],
      resultShow: 1,
      current: 1
    }
  }

  render() {
    var list = this.state.list;
    var current = this.state.current;
    var showResult = this.state.showResult;
    return (
      <div>
        <MeatVoteList list={list} handleClick={this.handleClick} current={current} showResult={showResult} />
      </div>
    );
  }

  handleClick = (e) => {

    this.setState({
      current: this.state.current + this.state.resultShow
    })
  }
}
