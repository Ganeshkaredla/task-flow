import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { History } from 'history'

import LoginPage from '../../components/LoginPage'
import AuthStore from '../../stores/AuthStore'
import { Container } from './styledComponents'
import { navigateToHomePage } from '../../../Common/utils/NavigationUtils'
import { getAccessToken } from '../../utils/StorageUtils'

interface Props {
   history: History
}

interface InjectedProps extends Props {
   authStore: AuthStore
}

@inject('authStore')
@observer
class LoginScreenRoute extends Component<Props> {
   componentDidMount() {
      if (getAccessToken()) {
         this.navigateToDashboardPage()
      }
   }

   getInjectedProps = () => this.props as InjectedProps

   getAuthStore = () => this.getInjectedProps().authStore

   navigateToDashboardPage = () => {
      const { history } = this.props
      navigateToHomePage(history)
   }

   onLoginSuccess = error => {
      this.navigateToDashboardPage()
   }

   onLoginFailure = () => {}

   handleLogin = (userId, userName) => {
      const { loginAPI } = this.getAuthStore()
      loginAPI(userId, userName, this.onLoginSuccess, this.onLoginFailure)
   }

   render() {
      const { loginAPIStatus } = this.getAuthStore()
      return (
         <Container>
            <LoginPage
               handleLogin={this.handleLogin}
               apiStatus={loginAPIStatus}
            />
         </Container>
      )
   }
}

export default LoginScreenRoute
