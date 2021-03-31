import { inject, observer } from 'mobx-react'
import React, { Component } from 'react'
import { History } from 'history'

import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line
import { navigateToHomePage } from '../../../Common/utils/NavigationUtils'

import LoginPage from '../../components/LoginPage'
import AuthStore from '../../stores/AuthStore'
import { getAccessToken } from '../../utils/StorageUtils'

import { showFailureBottomCenterToast } from '../../../Common/utils/ToastUtils'
import { Container } from './styledComponents'
interface Props extends WithTranslation {
   history: History
}

interface InjectedProps extends Props {
   authStore: AuthStore
}

@inject('authStore')
@observer
class LoginScreenRoute extends Component<Props> {
   componentDidMount(): void {
      if (getAccessToken()) {
         this.navigateToDashboardPage()
      }
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAuthStore = (): AuthStore => this.getInjectedProps().authStore

   navigateToDashboardPage = (): void => {
      const { history } = this.props
      navigateToHomePage(history)
   }

   onLoginSuccess = (): void => {
      this.navigateToDashboardPage()
   }

   onLoginFailure = (): void => {
      const { t } = this.props
      showFailureBottomCenterToast(t('errorViewTitle'))
   }

   handleLogin = (userId, userName): void => {
      const { loginAPI } = this.getAuthStore()
      loginAPI(userId, userName, this.onLoginSuccess, this.onLoginFailure)
   }

   render(): React.ReactNode {
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

export default withTranslation()(LoginScreenRoute)
