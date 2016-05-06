import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
  },
}

const FeedbackPage = ({}) => {
  return (
    <div style={styles.wrapper}>
      <h1>Sua opnião é essencial para tornar esse aplicativo melhor :)</h1>
      <form>
        <input />
        <input />
        <input />
        <input />
      </form>
    </div>
  )
}

export default Radium(FeedbackPage)
