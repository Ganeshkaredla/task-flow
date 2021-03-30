import styled from 'styled-components'
import { Typo16LynchMontserratMedium } from '../../styleGuide/Typos'
import Colors from '../../themes/Colors'

export const Container = styled.div`
   display: flex;
   width: 100%;
   height: 72px;
   background-color: ${Colors.white};
   justify-content: space-between;
   align-items: center;
   box-sizing: border-box;
   padding-left: 24px;
   padding-right: 24px;
   box-shadow: 0px 3px 6px ${Colors.lightBlack};
`
export const ProfileImage = styled.img`
   height: 48px;
   width: 48px;
   border-radius: 100%;
`
export const UserName = styled(Typo16LynchMontserratMedium)`
   margin-left: 16px;
   text-transform: capitalize;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
`
export const UserDetailsWrapper = styled.div`
   display: flex;
   width: auto;
   height: 100%;
   align-items: center;
   overflow: hidden;
   margin-right: 16px;
`
export const LogoutButton = styled(Typo16LynchMontserratMedium)``
