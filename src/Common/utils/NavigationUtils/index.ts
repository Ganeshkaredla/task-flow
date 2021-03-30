import { History } from 'history'
import { LOGIN_SCREEN_PATH } from '../../../Authentication/constants/NavigationConstants'
import { HOME_SCREEN_PATH } from '../../constants/NavigationConstants'

export function navigateToHomePage(history: History): void {
   history.replace(HOME_SCREEN_PATH)
}

export function navigateToLoginPage(history: History): void {
   history.replace(LOGIN_SCREEN_PATH)
}
