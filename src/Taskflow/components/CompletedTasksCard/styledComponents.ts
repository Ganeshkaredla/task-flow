import styled from 'styled-components'
import {
   Typo20BreakerBayMontserratMediumText,
   Typo20SubmarineMontserratMediumText,
   Typo64CornflowerBlueMontserratMediumText
} from '../../../Common/styleGuide/Typos'
import Colors from '../../../Common/themes/Colors'
import { desktop } from '../../../Common/utils/MixinUtils'

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
   padding: 24px;
   width: 100%;
   height: 158px;
   background-color: ${Colors.white};
   box-shadow: 0px 3px 6px ${Colors.lightShadow};
   margin-top: 8px;
   ${desktop} {
      width: 30%;
      border-radius: 12px;
   }
`
export const TasksCompletedText = styled(Typo20BreakerBayMontserratMediumText)``

export const TasksStatusWrapper = styled.div`
   display: flex;
   width: 100%;
`

export const CompletedTasksNumber = styled(
   Typo64CornflowerBlueMontserratMediumText
)``

export const TotalTasksNumber = styled(Typo20SubmarineMontserratMediumText)`
   display: flex;
   flex-direction: column-reverse;
`
