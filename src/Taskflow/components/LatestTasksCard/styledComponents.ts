import styled from 'styled-components'
import { Typo20BreakerBayMontserratMediumText } from '../../../Common/styleGuide/Typos'
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
export const LatestCreatedTasksText = styled(
   Typo20BreakerBayMontserratMediumText
)``

export const LatestCreatedTasksList = styled.ul`
   font-family: 'Montserrat';
   font-size: 14px;
   color: ${Colors.submarine};
   padding-left: 1.2em;
`

export const TaskItem = styled.li`
   text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
   text-decoration-thickness: 2px;
`
