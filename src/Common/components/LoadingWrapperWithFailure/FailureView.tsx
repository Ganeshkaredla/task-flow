import React from 'react'
import { observer } from 'mobx-react'

import {
   FailureViewContainer,
   FailureViewMessage,
   RetryButton
} from './styledComponents'

interface Props {
   onRetryClick: any
   errorMessage: string
}

@observer
class FailureView extends React.Component<Props> {
   render() {
      const { onRetryClick, errorMessage } = this.props

      return (
         <FailureViewContainer>
            <FailureViewMessage>{errorMessage}</FailureViewMessage>
            <RetryButton onClick={onRetryClick}>Retry</RetryButton>
         </FailureViewContainer>
      )
   }
}

export default FailureView
