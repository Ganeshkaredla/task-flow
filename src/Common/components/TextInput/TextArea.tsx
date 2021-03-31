import React, { Component } from 'react'
import { observer } from 'mobx-react'

import BaseInput from './BaseInput'

import { textAreaStyles } from './styledComponents'

import { InputProps } from './types'

@observer
class TextArea extends Component<InputProps> {
   inputRef

   constructor(props) {
      super(props)
      this.inputRef = React.createRef()
   }

   validateInput = (): void => {
      this.inputRef.current.validateInput()
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

   render(): React.ReactNode {
      return (
         <BaseInput
            style={textAreaStyles}
            rows='3'
            ref={this.inputRef}
            {...this.props}
            tagName='textarea'
         />
      )
   }
}

export default TextArea
