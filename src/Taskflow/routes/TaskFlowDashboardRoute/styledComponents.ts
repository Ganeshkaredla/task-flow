import styled from 'styled-components'
import Colors from '../../../Common/themes/Colors'
import { desktop } from '../../../Common/utils/MixinUtils'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   width: 100%;
   background-color: ${Colors.solitude};
   ${desktop} {
      align-items: center;
   }
`
export const NoTasksCardWrapper = styled.div`
   ${desktop} {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
   }
`
export const TasksDetailsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   ${desktop} {
      margin-top: 14px;
      width: 80%;
   }
`
