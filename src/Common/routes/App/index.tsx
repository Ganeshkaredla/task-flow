import React from 'react'
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

interface Props extends WithTranslation {
   children?: any
}

@observer
class App extends React.Component<Props> {
   render(): React.ReactNode {
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
