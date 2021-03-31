import React from 'react'
import Loader from '../Loader'

import { LoadingViewContainer } from './styledComponents'

class LoadingView extends React.Component {
   render(): React.ReactNode {
      return (
         <LoadingViewContainer>
            <Loader />
         </LoadingViewContainer>
      )
   }
}

export default LoadingView
