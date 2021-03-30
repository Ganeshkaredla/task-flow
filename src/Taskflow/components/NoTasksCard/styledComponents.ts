import styled from 'styled-components'
import ButtonWithLoader from '../../../Common/components/ButtonWithLoader'
import { Typo20BreakerBayMontserratMediumText } from '../../../Common/styleGuide/Typos'
import Colors from '../../../Common/themes/Colors'
import { desktop } from '../../../Common/utils/MixinUtils'

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   box-sizing: border-box;
   width: 100%;
   height: 158px;
   background-color: ${Colors.white};
   box-shadow: 0px 3px 6px ${Colors.lightShadow};
   margin-top: 8px;
   ${desktop} {
      width: 304px;
      border-radius: 12px;
   }
`
export const NoTasksText = styled(Typo20BreakerBayMontserratMediumText)``

export const AddNewTaskButton = styled(ButtonWithLoader)`
   width: 124px;
   margin-top: 20px;
`
