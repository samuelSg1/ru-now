import React, { Component } from 'react';
import StarRating from 'react-star-rating-component';

export default class Stars extends Component {
  render() {
    const { handleClick, rating, userVote } = this.props;
    return (
      <div>
        <StarRating
          name="rate1"
          starCount={5}
          value={rating}
          renderStarIcon={() => <span style={{fontSize: '2em'}}>★</span>}
          onStarClick={this.handleClick.bind(this)} />
      </div>
    )
  }

  handleClick = (e) => {
    console.log(e);
  }
}
