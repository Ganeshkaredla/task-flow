import {HOME_PAGE_PATH} from '../constants/RouteConstants'

import {
    goToTasksDashboard,
    clickUsingDataTestID,
    fillElementByDataTestID,
    checkCurrentRoute,
    setViewPortSize
} from '../reusableActions'

describe('Login screen tests', () => {
   beforeEach(() => {
      cy.server()
      setViewPortSize(1200,768)

      goToTasksDashboard()
   })
   it('should test error message should visible when click on login button',()=>{
        clickUsingDataTestID('login-button')
        cy.contains('* This field is required')
   })

   it('should test show error message when enter id and click login button ',()=>{
        fillElementByDataTestID('user-id','tdcx-user-123')
        clickUsingDataTestID('login-button')
        cy.contains('* This field is required')
    })
    it('should test loader after entering username and userid ',()=>{
        fillElementByDataTestID('user-id','tdcx-user-123')
        fillElementByDataTestID('user-name','John Doe')

        clickUsingDataTestID('login-button')
        checkCurrentRoute(HOME_PAGE_PATH)
    })
})
