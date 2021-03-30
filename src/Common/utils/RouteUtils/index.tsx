import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { LOGIN_SCREEN_PATH } from '../../../Authentication/constants/NavigationConstants'
import { getAccessToken } from '../../../Authentication/utils/StorageUtils'

import { HOME_SCREEN_PATH } from '../../constants/NavigationConstants'

interface RouteParams {
   component: any
   [x: string]: any
}

export const ProtectedRoute = ({
   component: Component,
   ...other
}: RouteParams) => {
   const renderComponent = (props: any) => {
      const accessToken = getAccessToken()
      if (accessToken) {
         return <Component {...props} {...other} />
      }
      return (
         <Redirect
            to={{
               pathname: LOGIN_SCREEN_PATH,
               state: { from: props.location }
            }}
         />
      )
   }
   return <Route {...other} render={renderComponent} />
}

export const ReactRoute = ({ component: Component, ...other }: RouteParams) => {
   const renderComponent = (props: any) => {
      const accessToken = getAccessToken()
      if (accessToken) {
         return (
            <Redirect
               to={{
                  pathname: HOME_SCREEN_PATH,
                  state: { from: props.location }
               }}
            />
         )
      }
      return <Component {...props} {...other} />
   }
   return <Route {...other} render={renderComponent} />
}
