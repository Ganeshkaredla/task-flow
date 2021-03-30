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

export function validateAndReturnCustomError(
   validationString: string,
   errorMessage: string
): ErrorObject {
   if (isEmpty(validationString)) {
      return {
         shouldShowError: true,
         errorMessage: errorMessage
      }
   }
   return { shouldShowError: false, errorMessage: '' }
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

export function isEmptyObject(obj): boolean {
   return Object.keys(obj).length === 0
}
