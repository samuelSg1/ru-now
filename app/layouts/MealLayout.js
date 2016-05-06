import React from 'react'
import Radium from 'radium'
import MealInfo from '../components/MealInfo'
import MealList from '../components/MealList'
import Meat from '../components/Meat'
import Stars from '../components/Stars'
import Tabs from '../components/Tabs'
import { red200 } from 'material-ui/styles/colors'

const styles = {
  meal: {
    '@media (min-width: 992px)': {
      display: 'flex'
    }
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    padding: '20px 0',
    background: red200
  }
}

const MealLayout = ({isLogged, userData, time, mealList, handleOpen, handleTouchTap,setSnackbarMessage }) =>  {

    return (
      <div>
        <div style={styles.meal}>
          <MealInfo />
          <MealList mealList={mealList} />
        </div>
        <div style={styles.actions}>
          <Meat isLogged={isLogged} handleOpen={handleOpen} handleTouchTap={handleTouchTap} setSnackbarMessage={setSnackbarMessage} />
          <Stars isLogged={isLogged} />
        </div>
        <Tabs />
      </div>
    )
}

export default Radium(MealLayout)
