import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
   LOGIN_SCREEN_KEY,
   LOGIN_SCREEN_PATH
} from '../../Authentication/constants/NavigationConstants'

import {
   HOME_SCREEN_PATH,
   HOME_SCREEN_PATH_KEY,
   NOT_FOUND_PAGE,
   NOT_FOUND_PAGE_PATH
} from '../constants/NavigationConstants'
import { ProtectedRoute } from '../utils/RouteUtils'
import PageNotFound404 from './PageNotFound'

const LoginPage = lazy(() =>
   import('../../Authentication/routes/LoginScreenRoute')
)
const TaskFlowDashboardRoute = lazy(() =>
   import('../../Taskflow/routes/TaskFlowDashboardRoute')
)

export const routes = () => (
   <Router>
      <Switch>
         <Route
            exact
            path={LOGIN_SCREEN_PATH}
            key={LOGIN_SCREEN_KEY}
            component={LoginPage}
         />
         <ProtectedRoute
            exact
            path={HOME_SCREEN_PATH}
            key={HOME_SCREEN_PATH_KEY}
            component={TaskFlowDashboardRoute}
         />
         <Route
            path={NOT_FOUND_PAGE_PATH}
            key={NOT_FOUND_PAGE}
            component={PageNotFound404}
         />
      </Switch>
   </Router>
)
