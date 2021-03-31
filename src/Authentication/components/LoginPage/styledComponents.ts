import styled from 'styled-components'

import { Typo20DarkGreenMontserratBoldText } from '../../../Common/styleGuide/Typos'
import Colors from '../../../Common/themes/Colors'

export const Container = styled.form`
   display: flex;
   flex-direction: column;
   min-height: 249px;
   width: 296px;
   background-color: ${Colors.white};
   box-shadow: 0px 3px 6px ${Colors.prussianBlue};
   border-radius: 12px;
   box-sizing: border-box;
   padding: 28px;
`

export const HeadingText = styled(Typo20DarkGreenMontserratBoldText)`
   display: flex;
   width: 100%;
   justify-content: flex-start;
   text-transform: capitalize;
`
