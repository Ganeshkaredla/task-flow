import styled from 'styled-components'
import ButtonWithLoader from '../../../Common/components/ButtonWithLoader'
import { Typo20BreakerBayMontserratMediumText } from '../../../Common/styleGuide/Typos'
import Colors from '../../../Common/themes/Colors'
import { desktop } from '../../../Common/utils/MixinUtils'

export const CardContainer = styled.div`
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
   padding: 24px;
   width: 100%;
   min-height: 193px;
   background-color: ${Colors.white};
   box-shadow: 0px 3px 6px ${Colors.lightShadow};
   margin-top: 8px;
   ${desktop} {
      width: 304px;
      border-radius: 12px;
   }
`
export const AddNewTaskButton = styled(ButtonWithLoader)`
   width: 100%;
`
export const AddNewTaskText = styled(Typo20BreakerBayMontserratMediumText)``
