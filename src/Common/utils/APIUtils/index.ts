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
            } else {
               throw new Error(response.statusText)
            }
         })
         .then(function(jsonData) {
            onSuccess(jsonData)
         })
         .catch(error => {
            onFailure(error)
         })
   } else {
      setTimeout(() => {
         return onSuccess(fixturesData)
      }, 2000)
   }
}
