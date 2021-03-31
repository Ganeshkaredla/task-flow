import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import './Common/i18n'
import * as serviceWorker from './serviceWorker'
import App from './Common/routes/App'
import './index.css'
import LoadingView from './Common/components/LoadingWrapperWithFailure/LoadingView'

ReactDOM.render(
   <Suspense
      fallback={<div className='suspense-loading-view'>{<LoadingView />}</div>}
   >
      <App />
   </Suspense>,
   document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
