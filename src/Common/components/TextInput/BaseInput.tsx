import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

import { InputProps } from './types'

import {
   Input,
   ErrorView,
   ErrorMessage,
   InputContainer
} from './styledComponents'

@observer
class BaseInput extends Component<InputProps> {
   inputRef

   constructor(props) {
      super(props)
      this.inputRef = React.createRef()
   }

   static defaultProps = {
      validate: () => ({ shouldShowError: false, errorMessage: '' }),
      shouldValidateOnBlur: true
   }

   @observable error = ''

   @action setError(errorText: string): void {
      this.error = errorText
   }

   validateInput = (): void => {
      const { validate } = this.props
      if (validate) {
         const result = validate()
         if (result.shouldShowError) {
            this.setError(result.errorMessage)
         } else {
            this.setError('')
         }
      }
   }

   onBlur = (): void => {
      const { shouldValidateOnBlur } = this.props
      if (shouldValidateOnBlur) {
         this.validateInput()
      }
   }

   onFocus = (): void => {
      this.setError('')
   }

   focus = (): void => {
      this.inputRef.current.focus()
   }

   isError = (): boolean => this.error !== ''

   render(): React.ReactNode {
      const isValid = !this.isError()
      const { containerClassName, errorId, ...otherProps } = this.props
      return (
         <InputContainer className={containerClassName}>
            <Input
               ref={this.inputRef}
               data-testid='input'
               isValid={isValid}
               onFocus={this.onFocus}
               onBlur={this.onBlur}
               {...otherProps}
            />
            {this.isError() ? (
               <ErrorView id={errorId}>
                  <ErrorMessage>{`* ${this.error}`}</ErrorMessage>
               </ErrorView>
            ) : null}
         </InputContainer>
      )
   }
}

export default BaseInput
