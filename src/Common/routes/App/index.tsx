import React from 'react'
import { observable } from 'mobx'
import { Provider, observer } from 'mobx-react'
import {
   I18nextProvider,
   withTranslation,
   WithTranslation
} from 'react-i18next'
import { ToastContainer } from 'react-toastify'

import i18n from '../../i18n'
import stores from '../../stores'

import Routes from '../index'
import FailureView from '../../components/LoadingWrapperWithFailure/FailureView'

import { CrashViewContainer } from './styledComponents'
interface Props extends WithTranslation {
   children?: any
}

@observer
class App extends React.Component<Props> {
   @observable error
   constructor(props) {
      super(props)
      this.error = null
   }
   componentDidCatch(error): void {
      this.setError(error)
   }

   setError = (error): void => {
      this.error = error
   }

   onClickRetry = (): void => {
      window.location.reload()
   }

   render(): React.ReactNode {
      const { t } = this.props
      if (this.error) {
         return (
            <CrashViewContainer>
               <FailureView
                  errorMessage={t('common.fallbackUI.failureText')}
                  onRetryClick={this.onClickRetry}
               />
            </CrashViewContainer>
         )
      }
      return (
         <Provider {...stores}>
            <I18nextProvider i18n={i18n}>
               <Routes />
               <ToastContainer
                  position='top-right'
                  autoClose={1000}
                  hideProgressBar={true}
                  newestOnTop={true}
                  closeOnClick
                  rtl={false}
                  draggable
                  pauseOnHover
               />
            </I18nextProvider>
         </Provider>
      )
   }
}

export default withTranslation()(App)
