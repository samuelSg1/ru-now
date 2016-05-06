import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import AppContainer from './containers/AppContainer'
import MealContainer from './containers/MealContainer'
import AboutPage from './components/AboutPage'
import FailPage from './components/FailPage'
import FeedbackPageContainer from './containers/FeedbackPageContainer'

import NotFound from './components/NotFound'

export default (
	<Route component={AppContainer}>
		<Redirect from="/" to="/ru/1"  />
		<Route path="/ru(/:meal)" component={MealContainer} />
		<Route path="/mu(/:meal)" component={MealContainer} />
		<Route path="/about" component={AboutPage} />
		<Route path="/feedback" component={FeedbackPageContainer} />
		<Route path="/fail" component={FailPage} />
		<Route path="*" component={NotFound} />
	</Route>
)
