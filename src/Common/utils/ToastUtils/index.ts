import { toast, cssTransition } from 'react-toastify'
import { css } from 'glamor'
import 'react-toastify/dist/ReactToastify.css'

import './styles.css'

const Slide = cssTransition({
   enter: 'slideInUp',
   exit: 'slideDown',
   // default to 750ms, can be omitted
   duration: 300
})

let toastId: string | number

function dismissToast(): void {
   if (toast.isActive(toastId)) {
      toast.dismiss(toastId)
   }
}

export function showBottomCenterToast(message: string, props): void {
   dismissToast()
   toastId = toast(message, {
      bodyClassName: css({
         fontFamily: 'Montserrat',
         color: 'white',
         fontWeight: 500
      }),
      transition: Slide,
      position: 'bottom-center',
      autoClose: 2000,
      ...props
   })
}

export function showFailureBottomCenterToast(
   message: string,
   props = {}
): void {
   showBottomCenterToast(message, { className: 'toast-failure', ...props })
}

export function showSuccessBottomCenterToast(
   message: string,
   props = {}
): void {
   showBottomCenterToast(message, { className: 'toast-success', ...props })
}
