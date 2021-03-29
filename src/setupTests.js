import common from '../public/i18n/translations/en/common.json'
import contentManagement from '../public/i18n/translations/en/contentManagement.json'
import userProfile from '../public/i18n/translations/en/userProfile.json'

import i18n from './Common/i18n'

i18n.options.react.useSuspense = false

i18n.t = (translationString, countObject = { count: 1 }) => {
   const colonSplittedStrings = translationString.split(':')
   let dotSplittedStrings = []
   let resolvedStrings
   let result = ''
   if (colonSplittedStrings.length === 1) {
      dotSplittedStrings = colonSplittedStrings[0].split('.')
      resolvedStrings = common
   } else if (colonSplittedStrings.length === 2) {
      dotSplittedStrings = colonSplittedStrings[1].split('.')
      switch (colonSplittedStrings[0]) {
         case 'common':
            resolvedStrings = common
            break
         case 'contentManagement':
            resolvedStrings = contentManagement
            break
         case 'userProfile':
            resolvedStrings = userProfile
            break
      }
   }
   for (let index = 0; index < dotSplittedStrings.length; index++) {
      result = dotSplittedStrings[index]
      if (Math.abs(countObject.count) !== 1) {
         if (resolvedStrings[`${result}_plural`]) {
            result = `${result}_plural`
         }
      }
      resolvedStrings = resolvedStrings[result]
   }
   return resolvedStrings
}
