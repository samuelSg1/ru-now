import React, { Component } from 'react';
import Radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
  },
}

const FailePage = ({}) => {
  return (
    <div style={styles.wrapper}>
      <h1>Falha na autenticação!!!</h1>
    </div>
  )
}

export default Radium(FailePage)
