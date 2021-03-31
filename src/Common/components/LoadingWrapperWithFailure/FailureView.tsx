import React from 'react'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line

import {
   FailureViewContainer,
   FailureViewMessage,
   RetryButton
} from './styledComponents'

interface Props extends WithTranslation {
   onRetryClick: any
   errorMessage: string
}

@observer
class FailureView extends React.Component<Props> {
   render(): React.ReactNode {
      const { t, onRetryClick, errorMessage } = this.props

      return (
         <FailureViewContainer>
            <FailureViewMessage>{errorMessage}</FailureViewMessage>
            <RetryButton text={t('failureView.retry')} onClick={onRetryClick} />
         </FailureViewContainer>
      )
   }
}

export default withTranslation()(FailureView)
