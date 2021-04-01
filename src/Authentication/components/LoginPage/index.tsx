import React, { Component } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line

import ButtonWithLoader from '../../../Common/components/ButtonWithLoader'
import TextInput from '../../../Common/components/TextInput'
import { validateEmpty } from '../../../Common/utils/ValidationUtils'

import { Container, HeadingText } from './styledComponents'

interface Props extends WithTranslation {
   handleLogin: Function
   apiStatus: number
}

@observer
class LoginPage extends Component<Props> {
   @observable userId
   @observable userName
   @observable idElementRef
   @observable nameElementRef

   constructor(props) {
      super(props)
      this.userId = ''
      this.userName = ''
      this.idElementRef = React.createRef()
      this.nameElementRef = React.createRef()
   }

   componentDidMount(): void {
      this.idElementRef?.current?.focus()
   }

   validateIdField = () => validateEmpty(this.userId)

   validateNameField = () => validateEmpty(this.userName)

   handleIDChange = (event): void => {
      const value = event.target.value
      this.userId = value
   }

   handleNameChange = (event): void => {
      const value = event.target.value
      this.userName = value
   }

   isReadyToLogin = (): boolean =>
      !this.idElementRef.current.isError && !this.nameElementRef.current.isError

   handleLoginButton = (event): void => {
      event.preventDefault()
      this.idElementRef.current.onBlur()
      this.nameElementRef.current.onBlur()
      if (this.isReadyToLogin()) {
         const { handleLogin } = this.props
         handleLogin(this.userId, this.userName)
      }
   }

   render(): React.ReactNode {
      const { apiStatus, t } = this.props
      return (
         <Container>
            <HeadingText>{t('loginForm.login')}</HeadingText>
            <TextInput
               data-testid={'user-id'}
               ref={this.idElementRef}
               shouldValidateOnBlur={true}
               placeholder={t('loginForm.id')}
               onChange={this.handleIDChange}
               validate={this.validateIdField}
            />
            <TextInput
               data-testid={'user-name'}
               ref={this.nameElementRef}
               shouldValidateOnBlur={true}
               placeholder={t('loginForm.name')}
               onChange={this.handleNameChange}
               validate={this.validateNameField}
            />
            <ButtonWithLoader
               data-testid={'login-button'}
               text={t('loginForm.login')}
               onClick={this.handleLoginButton}
               apiStatus={apiStatus}
            />
         </Container>
      )
   }
}

export default withTranslation()(LoginPage)
