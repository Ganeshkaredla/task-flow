import React, { Component } from 'react'
import { History } from 'history'
import { withTranslation, WithTranslation } from 'react-i18next'
import ButtonWithLoader from '../../components/ButtonWithLoader'

import { Container, PageNotFoundText } from './styledComponents'
import { navigateToHomePage } from '../../utils/NavigationUtils'

interface Props extends WithTranslation {
   history: History
}

class PageNotFound extends Component<Props> {
   handleGoBackClick = (): void => {
      const { history } = this.props
      navigateToHomePage(history)
   }

   render() {
      const { t } = this.props
      return (
         <Container>
            <PageNotFoundText>
               {t('pageNotFound.pageNotFoundText')}
            </PageNotFoundText>
            <ButtonWithLoader
               text={t('pageNotFound.goHome')}
               onClick={this.handleGoBackClick}
            />
         </Container>
      )
   }
}

export default withTranslation()(PageNotFound)
