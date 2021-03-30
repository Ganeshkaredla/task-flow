import { observable } from 'mobx'
import { observer } from 'mobx-react'
import React, { Component } from 'react'
import ButtonWithLoader from '../../../Common/components/ButtonWithLoader'
import TextInput from '../../../Common/components/TextInput'
import { validateEmpty } from '../../../Common/utils/ValidationUtils'
import { Container, HeadingText } from './styledComponents'

interface Props {
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

   handleLoginButton = (): void => {
      this.idElementRef.current.onBlur()
      this.nameElementRef.current.onBlur()
      if (this.isReadyToLogin()) {
         const { handleLogin } = this.props
         handleLogin(this.userId, this.userName)
      }
   }

   render() {
      const { apiStatus } = this.props
      return (
         <Container>
            <HeadingText>Login</HeadingText>
            <TextInput
               ref={this.idElementRef}
               shouldValidateOnBlur={true}
               placeholder={'Id'}
               onChange={this.handleIDChange}
               validate={this.validateIdField}
            />
            <TextInput
               ref={this.nameElementRef}
               shouldValidateOnBlur={true}
               placeholder={'Name'}
               onChange={this.handleNameChange}
               validate={this.validateNameField}
            />
            <ButtonWithLoader
               text='Login'
               onClick={this.handleLoginButton}
               apiStatus={apiStatus}
            />
         </Container>
      )
   }
}

export default LoginPage
