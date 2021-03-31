import styled from 'styled-components'

import TextInput from '../../../Common/components/TextInput'
import { Typo20CornflowerBlueMontserratMediumText } from '../../../Common/styleGuide/Typos'
import Colors from '../../../Common/themes/Colors'
import { minDeviceWidth } from '../../../Common/utils/MixinUtils'

export const Container = styled.div`
   display: flex;
   width: 100%;
   min-height: 72px;
   overflow: auto;
   align-items: center;
   justify-content: space-between;
   box-sizing: border-box;
   padding: 0px 16px 0px 16px;
   ${minDeviceWidth(1024)} {
      padding: 0px 24px 0px 24px;
   }
`

export const TaskDetailsWrapper = styled.div`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   width: 80%;
   ${minDeviceWidth(1024)} {
      width: 90%;
   }
`

export const CheckBoxWrapper = styled.div`
   width: 30px;
`

export const CheckBox = styled.input`
   height: 19px;
   width: 19px;
`

export const TextNameWrapper = styled.div`
   width: 100%;
   padding-left: 16px;
   overflow: auto;
`

export const TaskNameText = styled(Typo20CornflowerBlueMontserratMediumText)`
   display: ${props => (props.isHidden ? 'none' : 'flex')};
   flex-wrap: wrap;
   color: ${props =>
      props.isCompleted ? Colors.submarine : Colors.cornflowerBlue};
   text-decoration: ${props => (props.isCompleted ? 'line-through' : 'none')};
   text-decoration-thickness: 2px;
   padding: 24px 0px 24px 0px;
`

export const EditableTaskName = styled(TextInput)`
   display: ${props => (props.isHidden ? 'flex' : 'none')};
   background-color: ${Colors.white};
   font-size: 20px;
   font-weight: 500;
   color: ${props =>
      props.isCompleted ? Colors.submarine : Colors.cornflowerBlue};
   outline: none;
   border: none;
   margin-top: 0px;
   padding-left: 0px;
`
export const TaskButtonsWrapper = styled.div`
   width: 48px;
`
export const DeleteIcon = styled.img`
   height: 18px;
   width: 16px;
   cursor: pointer;
`
export const EditIcon = styled.img`
   height: 16px;
   width: 16px;
   margin-right: 16px;
   cursor: pointer;
`
