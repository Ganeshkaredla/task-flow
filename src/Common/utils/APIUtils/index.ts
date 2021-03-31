import { getAccessToken } from '../../../Authentication/utils/StorageUtils'
import { apiMethods } from '../../constants/APIConstants'
import { isFixtures } from '../../stores'

export function fetchData(
   url: string,
   options: any,
   fixturesData: any,
   onSuccess: Function = () => {},
   onFailure: Function = () => {}
) {
   if (!isFixtures) {
      fetch(url, options)
         .then(function(response) {
            if (response.ok) {
               return response.json()
            }
            throw new Error(response.statusText)
         })
         .then(function(jsonData) {
            onSuccess(jsonData)
         })
         .catch(error => {
            onFailure(error)
         })
   } else {
      setTimeout(() => onSuccess(fixturesData), 500)
   }
}

export function getFetchOptionsWithoutAuth(
   requestObject: any = {},
   methodType: string = apiMethods.post
) {
   const options = {
      body: JSON.stringify(requestObject),
      method: methodType,
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json'
      }
   }
   return options
}

export function getFetchOptionsWithAuth(
   requestObject: any = {},
   methodType: string = apiMethods.post
) {
   const options = {
      body: JSON.stringify(requestObject),
      method: methodType,
      headers: {
         'Content-Type': 'application/json',
         Accept: 'application/json',
         Authorization: `Bearer ${getAccessToken()}`
      }
   }
   return options
}
