import styled from 'styled-components'
import ButtonWithLoader from '../../../Common/components/ButtonWithLoader'
import TextInput from '../../../Common/components/TextInput'
import { Typo20BreakerBayMontserratMediumText } from '../../../Common/styleGuide/Typos'
import Colors from '../../../Common/themes/Colors'
import { customDevice, desktop } from '../../../Common/utils/MixinUtils'

export const TasksListContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   margin-bottom: 30px;
`

export const TasksListHeader = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   box-sizing: border-box;
   padding: 24px;
   ${desktop} {
      margin-top: 34px;
      padding: 0px;
      flex-direction: row;
      justify-content: space-between;
   }
`
export const TasksHeading = styled(Typo20BreakerBayMontserratMediumText)`
   ${customDevice(320, 1023)} {
      margin-bottom: 8px;
   }
`

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

export const SearchIcon = styled.img`
   height: 16px;
   width: 16px;
   position: absolute;
   padding: 12px;
`

export const SearchBoxField = styled(TextInput)`
   width: 100%;
   margin-top: 0px;
   background-color: ${Colors.darkSolitude};
   box-sizing: border-box;
   padding-left: 40px;
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

export const TasksListWrapper = styled.ul`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: auto;
   list-style-type: none;
   background-color: ${Colors.white};
   padding-left: 0;
   ${desktop} {
      margin-top: 10px;
      border-radius: 12px;
   }
   &::last-child {
      border: 1px solid red;
   }
`

export const TaskListItemWrapper = styled.li``
