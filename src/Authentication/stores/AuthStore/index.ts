import { observable, action } from 'mobx'
import {
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
   API_SUCCESS
} from '../../../Common/constants/APIConstants'
import Config from '../../../Common/constants/EnvironmentConstants'
import {
   fetchData,
   getFetchOptionsWithoutAuth
} from '../../../Common/utils/APIUtils'

import loginCredentials from '../../fixtures/loginCredentials.json'
import {
   clearUserSession,
   setAccessToken,
   setProfileImage,
   setUserName
} from '../../utils/StorageUtils'

import { endPoints } from '../endPoints'
import UserProfile from '../models/UserProfile'
import { LoginResponseType } from '../types'

class AuthStore {
   @observable loginAPIStatus!: number
   @observable loginAPIError!: Error | null
   @observable userProfile!: UserProfile

   constructor() {
      this.init()
   }
   @action.bound
   init(): void {
      this.loginAPIStatus = API_INITIAL
      this.loginAPIError = null
      this.userProfile = new UserProfile({})
   }

   @action.bound
   setLoginAPIStatus(apiStatus: number): void {
      this.loginAPIStatus = apiStatus
   }

   @action.bound
   setLoginAPIError(error): void {
      this.loginAPIError = error
   }

   @action.bound
   setLoginAPIResponse(response: LoginResponseType): void {
      setAccessToken(response.token.token)
      setUserName(response.token.name)
      setProfileImage(response.image)
      this.userProfile = new UserProfile(response)
   }

   @action.bound
   async loginAPI(userId, userName, onSuccess, onFailure) {
      const requestObject = {
         apiKey: userId,
         name: userName
      }
      const options = getFetchOptionsWithoutAuth(requestObject)

      const url = `${Config.BASE_URL}${endPoints.login}`
      this.setLoginAPIStatus(API_FETCHING)
      await fetchData(
         url,
         options,
         loginCredentials,
         response => {
            this.setLoginAPIStatus(API_SUCCESS)
            this.setLoginAPIResponse(response)
            onSuccess()
         },
         error => {
            this.setLoginAPIStatus(API_FAILED)
            this.setLoginAPIError(error)
            onFailure(error)
         }
      )
   }

   @action.bound
   clearStore(): void {
      this.init()
      clearUserSession()
   }
}

export default AuthStore
