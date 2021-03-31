import styled from 'styled-components'
import ButtonWithLoader from '../../../Common/components/ButtonWithLoader'
import { Typo20BreakerBayMontserratMediumText } from '../../../Common/styleGuide/Typos'
import Colors from '../../../Common/themes/Colors'
import { minDeviceWidth } from '../../../Common/utils/MixinUtils'

export const CardContainer = styled.form`
   display: flex;
   flex-direction: column;
   box-sizing: border-box;
   padding: 24px;
   width: 100%;
   min-height: 193px;
   background-color: ${Colors.white};
   box-shadow: 0px 3px 6px ${Colors.lightShadow};
   ${minDeviceWidth(1024)} {
      width: 304px;
      border-radius: 12px;
   }
`
export const AddNewTaskButton = styled(ButtonWithLoader)`
   width: 100%;
`
export const AddNewTaskText = styled(Typo20BreakerBayMontserratMediumText)`
   margin-bottom: 14px;
`
