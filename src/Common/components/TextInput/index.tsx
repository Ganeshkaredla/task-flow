import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { computed, observable } from 'mobx'

import BaseInput from './BaseInput'

import { InputProps } from './types'

@observer
class TextInput extends Component<InputProps> {
   @observable inputRef

   constructor(props) {
      super(props)
      this.inputRef = React.createRef()
   }

   validateInput = (): void => {
      this.inputRef.current.validateInput()
   }

   resetErrorMessage = (): void => {
      this.inputRef.current.setError('')
   }

   onBlur = (): void => {
      this.inputRef.current.onBlur()
   }

   onFocus = (): void => {
      this.inputRef.current.onFocus()
   }

   focus = (): void => {
      this.inputRef.current.focus()
   }

   @computed get isError(): boolean {
      return this.inputRef.current.isError()
   }

   render(): React.ReactNode {
      return <BaseInput ref={this.inputRef} {...this.props} />
   }
}

export default TextInput
