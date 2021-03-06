import * as React from 'react'

import Colors from '../../themes/Colors'

import Loader from '../Loader'

import { StyledButton, StyledText } from './styledComponents'
import './styles.scss'

export interface ButtonWithLoaderProps {
   text: string
   onClick: Function
   apiStatus: any
   className: string
   textTypo: React.ElementType
   textClassName?: string
   disabled: boolean
   renderLoader: Function
   id?: string
   renderRightIcon?: Function
}

class ButtonWithLoader extends React.Component<ButtonWithLoaderProps> {
   static defaultProps = {
      apiStatus: 0,
      disabled: false,
      renderLoader: () => (
         <Loader
            color={Colors.paleGrey}
            height={25}
            width={25}
            className='loaderStyles'
         />
      ),
      textTypo: StyledText,
      textClassName: '',
      className: ''
   }

   isFetching = () => {
      const { apiStatus } = this.props
      return apiStatus === 100
   }

   renderContentBasedOnStatus = () => {
      const {
         text,
         textTypo: ButtonText,
         textClassName,
         renderLoader,
         renderRightIcon
      } = this.props

      if (this.isFetching()) {
         return renderLoader()
      }
      return (
         <ButtonText className={textClassName}>
            {text}
            {renderRightIcon && renderRightIcon()}
         </ButtonText>
      )
   }

   render(): React.ReactNode {
      const { onClick, disabled, className, id, ...otherProps } = this.props
      return (
         <StyledButton
            onClick={onClick}
            disabled={disabled || this.isFetching()}
            className={className}
            id={id}
            {...otherProps}
         >
            {this.renderContentBasedOnStatus()}
         </StyledButton>
      )
   }
}

export default ButtonWithLoader
