import styled from 'styled-components'
import Colors from '../../../Common/themes/Colors'
import { minDeviceWidth } from '../../../Common/utils/MixinUtils'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   width: 100%;
   background-color: ${Colors.solitude};
   ${minDeviceWidth(1024)} {
      align-items: center;
   }
`
export const NoTasksCardWrapper = styled.div`
   ${minDeviceWidth(1024)} {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
      width: 100%;
   }
`
export const TasksDetailsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 100%;
   ${minDeviceWidth(1024)} {
      margin-top: 14px;
      width: 80%;
   }
`
