import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
  },
}

const SomePage = ({}) => {
  return (
    <div style={styles.wrapper}>
    </div>
  )
}

export default Radium(SomePage)
