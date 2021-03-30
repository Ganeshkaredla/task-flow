import { observable, action } from 'mobx'
import {
   apiMethods,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
   API_SUCCESS
} from '../../../Common/constants/APIConstants'
import Config from '../../../Common/constants/EnvironmentConstants'
import { fetchData } from '../../../Common/utils/APIUtils'
import loginCredentials from '../../fixtures/loginCredentials.json'
import { setAccessToken } from '../../utils/StorageUtils'
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
   }

   @action.bound
   setLoginAPIStatus(apiStatus: number): void {
      this.loginAPIStatus = apiStatus
      console.log(apiStatus)
   }

   @action.bound
   setLoginAPIError(error): void {
      this.loginAPIError = error
   }

   @action.bound
   setLoginAPIResponse(response: LoginResponseType): void {
      setAccessToken(response.token.token)
      this.userProfile = new UserProfile(response)
      console.log(response)
   }

   @action.bound
   async loginAPI(userId, userName, onSuccess, onFailure) {
      const requestObject = {
         apiKey: userId,
         name: userName
      }
      const options = {
         method: apiMethods.post,
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
         },
         body: JSON.stringify(requestObject)
      }
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
   clearStore() {
      this.init()
   }
}

export default AuthStore
