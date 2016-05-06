import React, { Component } from 'react';
import Radium from 'radium';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/device/access-alarm';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import {red500, orange500} from 'material-ui/styles/colors';

const styles = {
  wrapper: {
    width: '100%',
  },
  header: {
    backgroundColor: red500,
    backgroundImage: 'url("http://lorempixel.com/480/300/food/")',
    backgroundSize: 'cover',
    width: '100%',
    height: 300,
    '@media (min-width: 992px)': {
       backgroundImage: 'url("http://lorempixel.com/1200/400/food/")',
       height: 500
     },
  },
  container: {
    '@media (min-width: 992px)': {
       display: 'flex',
     },
  },
  time: {
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  info: {
    width: '100%',
    '@media (min-width: 992px)': {
       width: '50%'
     },
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-around'

  },
  title: {

  },
  day: {

  },
  date: {

  }
}

const Meal = ({}) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.header} />
        <div style={styles.container}>
          <div style={styles.time}>
            <Badge
              badgeContent={10}
              secondary={true}
              badgeStyle={{top: 50, left: 60}}
            >
              <IconButton
                touch={true}
                tooltipPosition="bottom-right"
                tooltip="Tempo para encerrar"
                style={{position: 'relative', bottom: 14}}
                iconStyle={styles.mediumIcon}>
                <NotificationsIcon />
              </IconButton>
            </Badge>
          </div>
          <div style={styles.info}>
            <div>
              <h1 style={styles.title}>Almoço</h1>
              <h3 style={styles.day}>Terça-feira</h3>
              <h4 style={styles.date}>13/05/2016</h4>
            </div>
            <FloatingActionButton
              iconStyle={styles.mediumIcon}
              style={{boxShadow: 'none'}}>
              <ArrowRight
              color={red500}
              hoverColor={orange500} />
            </FloatingActionButton>
          </div>
        </div>
    </div>
  )
}

export default Radium(Meal)
