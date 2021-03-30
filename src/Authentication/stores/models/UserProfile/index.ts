import { action, observable } from 'mobx'
import { LoginResponseType } from '../../types'

class UserProfile {
   @observable name!: string
   @observable profilePicUrl!: string

   constructor(userDetails: LoginResponseType) {
      this.init()
      if (userDetails.token) {
         this.name = userDetails.token.name
      }
      if (userDetails.image) {
         this.profilePicUrl = userDetails.image
      }
   }

   @action.bound
   init() {
      this.name = ''
      this.profilePicUrl = ''
   }
}
export default UserProfile
