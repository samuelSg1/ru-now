import React, { Component } from 'react'
import Line from '../components/Line'
import TimeAgo from 'react-timeago'

export default class LineContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      line: {
        lineSize: 0,
        lastUpdate: 0
      }
    }
  }


  render() {
    const { line } = this.state
    return (
        <Line {...line} handleLineUpdate={this.handleLineUpdate} />
    );
  }

  handleLineUpdate = (e, value) => {
    this.setState({
      line: {
        lineSize: value,
        lastUpdate: Date.now()
      }
    })
  }

}
