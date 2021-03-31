import React from 'react'
import { observer } from 'mobx-react'

import {
   API_INITIAL,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
} from '../../constants/APIConstants'

import LoadingView from './LoadingView'
import FailureView from './FailureView'

interface Props {
   apiStatus: number
   apiError: any
   renderSuccessUI: Function
   onRetryClick: Function
}

@observer
class LoadingWrapperWithFailure extends React.Component<Props> {
   render(): React.ReactNode {
      const {
         apiStatus,
         renderSuccessUI: RenderSuccessUI,
         onRetryClick,
         apiError
      } = this.props
      const errorMessage = apiError

      switch (apiStatus) {
         case API_INITIAL:
         case API_FETCHING:
            return <LoadingView />
         case API_SUCCESS:
            return <RenderSuccessUI />
         case API_FAILED:
            return (
               <FailureView
                  onRetryClick={onRetryClick}
                  errorMessage={errorMessage}
               />
            )
         default:
            return null
      }
   }
}

export default LoadingWrapperWithFailure
