import styled from 'styled-components'
import ButtonWithLoader from '../../../Common/components/ButtonWithLoader'
import TextInput from '../../../Common/components/TextInput'
import { Typo20BreakerBayMontserratMediumText } from '../../../Common/styleGuide/Typos'
import Colors from '../../../Common/themes/Colors'
import { desktop } from '../../../Common/utils/MixinUtils'

export const TasksListContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`

export const TasksListHeader = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   margin-top: 29px;
   ${desktop} {
      margin-top: 34px;
      flex-direction: row;
      justify-content: space-between;
   }
`
export const TasksHeading = styled(Typo20BreakerBayMontserratMediumText)``

export const TasksHeadingItemsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   ${desktop} {
      width: auto;
      align-items: center;
      flex-direction: row;
   }
`

export const SearchBoxWrapper = styled.div``

export const SearchBoxField = styled(TextInput)`
   width: 100%;
   margin-top: 0px;
   background-color: ${Colors.darkSolitude};
   ${desktop} {
      width: 244px;
      margin-right: 12px;
   }
`

export const AddNewTaskButton = styled(ButtonWithLoader)`
   width: 100%;
   ${desktop} {
      margin-top: 0px;
      width: 124px;
   }
`

export const TasksListWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 300px;
   background-color: ${Colors.white};
   ${desktop} {
      margin-top: 10px;
      border-radius: 12px;
   }
`
