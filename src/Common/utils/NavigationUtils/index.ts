import { History } from 'history'
import { HOME_SCREEN_PATH } from '../../constants/NavigationConstants'

export function navigateToHomePage(history: History): void {
   history.replace(HOME_SCREEN_PATH)
}
