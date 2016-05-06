import React, { Component } from 'react';
import Radium from 'radium';
import {List, ListItem} from 'material-ui/List';
import {red300, orange300} from 'material-ui/styles/colors';

const styles = {
  container: {
    minWidth: '100%',
    background: red300,
    '@media (min-width: 992px)': {
      minWidth: 300,
    },
  },
  title: {
    color: 'white',
    height: 100,
    background: orange300,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '2em',
    padding: '50px 0 95px 0',
    display: 'none',
    '@media (min-width: 992px)': {
      display: 'block'
    }
  }
}

const MealList = ({mealList}) => {
  return (
    <div style={styles.container}>
      <div style={styles.title}>
        <h1>Cárdapio</h1>
      </div>
      <List>
      {mealList.map((meal, key) =>
      {return <ListItem key={key} primaryText={meal.item} />})}
      </List>
    </div>
  )
}

export default Radium(MealList);
