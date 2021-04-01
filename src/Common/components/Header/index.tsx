import { observer } from 'mobx-react'
import React, { Component } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line

import UserProfile from '../../../Authentication/stores/models/UserProfile'

import {
   Container,
   ProfileImage,
   UserName,
   UserDetailsWrapper,
   LogoutButton
} from './styledComponents'

interface Props extends WithTranslation {
   userProfile: UserProfile
   handleLogout: Function
}

@observer
class Header extends Component<Props> {
   handleLogout = (): void => {
      const { handleLogout } = this.props
      handleLogout()
   }

   renderLogoutButton = (): React.ReactNode => {
      const { handleLogout, t } = this.props
      return (
         <LogoutButton data-testid={'logout'} onClick={handleLogout}>
            {t('loginForm.logout')}
         </LogoutButton>
      )
   }

   renderProfileImageAndName = (): React.ReactNode => {
      const { userProfile } = this.props
      const { profilePicUrl, name } = userProfile
      return (
         <UserDetailsWrapper>
            <ProfileImage src={profilePicUrl} alt={'profile-pic'} />
            <UserName>{name}</UserName>
         </UserDetailsWrapper>
      )
   }

   render(): React.ReactNode {
      return (
         <Container>
            {this.renderProfileImageAndName()}
            {this.renderLogoutButton()}
         </Container>
      )
   }
}

export default withTranslation()(Header)
