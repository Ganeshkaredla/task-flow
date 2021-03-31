import styled from 'styled-components'
import ButtonWithLoader from '../ButtonWithLoader'

export const LoadingViewContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
`

export const FailureViewContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
`

export const FailureViewMessage = styled.p``

export const RetryButton = styled(ButtonWithLoader)``
