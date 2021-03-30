import { observer } from 'mobx-react'
import React, { Component } from 'react'
import UserProfile from '../../../Authentication/stores/models/UserProfile'

import {
   Container,
   ProfileImage,
   UserName,
   UserDetailsWrapper,
   LogoutButton
} from './styledComponents'

interface Props {
   userProfile: UserProfile
   handleLogout: Function
}

@observer
class Header extends Component<Props> {
   handleLogout = () => {
      const { handleLogout } = this.props
      handleLogout()
   }

   renderLogoutButton = (): React.ReactNode => {
      const { handleLogout } = this.props
      return <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
   }

   renderProfileImageAndName = (): React.ReactNode => {
      const { userProfile } = this.props
      const { profilePicUrl, name } = userProfile
      return (
         <UserDetailsWrapper>
            <ProfileImage src={profilePicUrl} alt={'img'} />
            <UserName>{name}</UserName>
         </UserDetailsWrapper>
      )
   }

   render() {
      return (
         <Container>
            {this.renderProfileImageAndName()}
            {this.renderLogoutButton()}
         </Container>
      )
   }
}

export default Header
