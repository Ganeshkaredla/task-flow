import styled from 'styled-components'
import { desktop } from '../../../Common/utils/MixinUtils'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: auto;
   ${desktop} {
      flex-direction: row;
      justify-content: space-between;
   }
`
