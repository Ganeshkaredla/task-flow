import styled from 'styled-components'
import { minDeviceWidth } from '../../../Common/utils/MixinUtils'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: auto;
   ${minDeviceWidth(1024)} {
      flex-direction: row;
      justify-content: space-between;
   }
`
