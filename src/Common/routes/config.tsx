import React, { lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LOGIN_SCREEN_PATH } from '../../Authentication/constants/NavigationConstants'

import { HOME_SCREEN_PATH } from '../constants/NavigationConstants'
import { ProtectedRoute } from '../utils/RouteUtils'
// import PageNotFound404 from '../../Common/components/PageNotFound404'
// import userProfileRoutes from '../../UserProfile/routes'

const LoginPage = lazy(() =>
   import('../../Authentication/routes/LoginScreenRoute')
)
const TaskFlowDashboardRoute = lazy(() =>
   import('../../Taskflow/routes/TaskFlowDashboardRoute')
)

export const routes = () => (
   <Router>
      <Switch>
         <Route exact path={LOGIN_SCREEN_PATH} component={LoginPage} />
         <ProtectedRoute
            path={HOME_SCREEN_PATH}
            component={TaskFlowDashboardRoute}
         />
         {/* <Route
            path={NOT_FOUND_PAGE_PATH}
            key={NOT_FOUND_PAGE}
            component={PageNotFound404}
         /> */}
      </Switch>
   </Router>
)
