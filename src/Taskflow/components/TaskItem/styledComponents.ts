import styled from 'styled-components'
import TextInput from '../../../Common/components/TextInput'
import Colors from '../../../Common/themes/Colors'

export const Container = styled.div`
   display: flex;
   width: 100%;
   min-height: 72px;
   align-items: center;
   box-sizing: border-box;
   padding-left: 24px;
`

export const CheckBox = styled.input`
   height: 19px;
   width: 19px;
`

export const TaskNameText = styled(TextInput)`
   background-color: ${Colors.white};
   font-size: 20px;
   flex-wrap: wrap;
   word-wrap: break-word;
   word-break: break-all;

   outline: none;
   border: none;
   margin-top: 0px;
`
