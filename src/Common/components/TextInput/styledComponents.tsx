import styled from 'styled-components'

import { mobile } from '../../utils/MixinUtils'
import Colors from '../../themes/Colors'
import { Typo12PinkishOrangeMontserrat } from '../../styleGuide/Typos'

import CustomTag from './CustomTag'
import { InputProps } from './types'

export const ErrorView = styled.div`
   flex-direction: row;
   margin-top: 3px;
   margin-left: 3px;
`

export const ErrorMessage = styled(Typo12PinkishOrangeMontserrat)`
   line-height: 2.03;
   letter-spacing: 0.11px;
   pointer-events: none;
`

interface Props extends InputProps {
   isValid: boolean
}

export const Input = styled(CustomTag)<Props>`
   width: 100%;
   box-sizing: border-box;
   color: ${Colors.irisBlue};
   font-family: Montserrat;
   font-size: 14px;
   font-weight: 600;
   height: 40px;
   line-height: 1.71;
   padding-left: 16px;
   margin-top: 12px;
   border-radius: 8px;
   border: none;
   outline: none;

   background-color: ${Colors.hawkesBlue};
   &:focus {
      outline: none;
      font-weight: bold;
   }
   &:active {
      outline: none;
      font-weight: bold;
   }
   &:disabled {
      border: solid 1px;
      border-color: ${Colors.lightBlueGrey};
      color: ${Colors.darkGreyBlueTwoSix};
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.2px;
   }
   ${mobile} {
      margin-top: 8px;
   }
`

export const InputContainer = styled.div`
   width: 100%;
`

export const textAreaStyles = {
   resize: 'none',
   lineHeight: 1.5
}
