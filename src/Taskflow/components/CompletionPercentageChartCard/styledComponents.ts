import styled from 'styled-components'

import { Typo10CornflowerBlueMontserratSemiBoldText } from '../../../Common/styleGuide/Typos'
import Colors from '../../../Common/themes/Colors'
import { minDeviceWidth } from '../../../Common/utils/MixinUtils'

export const CardContainer = styled.div`
   display: flex;
   box-sizing: border-box;
   padding: 24px;
   width: 100%;
   height: 158px;
   justify-content: center;
   background-color: ${Colors.white};
   box-shadow: 0px 3px 6px ${Colors.lightShadow};
   margin-top: 8px;
   ${minDeviceWidth(1024)} {
      width: 30%;
      border-radius: 12px;
   }
`

export const DiagonalLine = styled.span`
   font-weight: 400;
   color: ${props =>
      props.isPercentageNotZero ? Colors.cornflowerBlue : Colors.submarine};
   font-size: 34px;
   margin-left: -25px;
   margin-top: -10px;
   transform: rotate(30deg);
`

export const CompletedTasksText = styled(
   Typo10CornflowerBlueMontserratSemiBoldText
)`
   position: relative;
   top: -10px;
   width: 70px;
   margin-left: 30px;
   z-index: 1000;
   color: ${props =>
      props.isPercentageNotZero ? Colors.cornflowerBlue : Colors.submarine};
`
