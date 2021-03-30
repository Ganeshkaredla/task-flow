import i18n from '../../i18n/'

export interface ErrorObject {
   shouldShowError: boolean
   errorMessage: string
}

export const isEmpty = (validationString: string): boolean => {
   if (validationString) {
      return validationString.toString().replace(/\s/g, '') === ''
   }
   return true
}

export function validateEmpty(validationString: string): ErrorObject {
   if (isEmpty(validationString)) {
      return {
         shouldShowError: true,
         errorMessage: i18n.t('common.validationErrorMessages.fieldRequired')
      }
   }
   return { shouldShowError: false, errorMessage: '' }
}
