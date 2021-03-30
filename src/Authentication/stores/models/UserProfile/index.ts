import { action, observable } from 'mobx'
import { getProfileImageUrl, getUserName } from '../../../utils/StorageUtils'

class UserProfile {
   @observable name!: string
   @observable profilePicUrl!: string

   constructor(userDetails) {
      this.init()
      if (userDetails && userDetails.token) {
         this.name = userDetails.token.name
      }
      if (userDetails && userDetails.image) {
         this.profilePicUrl = userDetails.image
      }
   }

   @action.bound
   init() {
      this.name = getUserName() ?? ''
      this.profilePicUrl = getProfileImageUrl() ?? ''
   }
}
export default UserProfile
