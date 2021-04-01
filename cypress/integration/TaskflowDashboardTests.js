import { LOGIN_PAGE_PATH } from '../constants/RouteConstants'

import {
    loginUser,
    goToTasksDashboard,
    clickUsingDataTestID,
    checkCurrentRoute,
    fillElementByDataTestID,
    setViewPortSize
} from '../reusableActions'


describe('Taskflow dashboard tests',()=>{
    beforeEach(()=>{
      cy.server()
      setViewPortSize(1200,768)
      loginUser()
      goToTasksDashboard()
    })
    function createNewTask(){
        clickUsingDataTestID('create-new-task')
        fillElementByDataTestID('create-task','This is test task 1')
        clickUsingDataTestID('add-task')
    }

    it('should test no task card should be in the dom',()=>{
        cy.contains('You have no task.')
    })
    it('should test create a new task modal should open and check empty validation',()=>{
        clickUsingDataTestID('create-new-task')
        clickUsingDataTestID('add-task')
        cy.contains('* This field is required')
    })
    it('should test create a new task and check task overview cards should visible',()=>{
        createNewTask()
        cy.contains('Tasks Completed')
        cy.contains('0')
        cy.contains('1')
        cy.contains('Latest Created tasks'),
        cy.contains('This is test task 1'),
        cy.contains('Not Completed Tasks')
    })
    it('should test search bar',()=>{
        createNewTask()
        fillElementByDataTestID('search-box','random task name')
        cy.contains('Oops! No tasks found.')
    })

    it('should edit a task name',()=>{
        createNewTask()
        clickUsingDataTestID('edit-task')
        fillElementByDataTestID('editable-taskname',' Created by John Doe')
        clickUsingDataTestID('edit-task')
        cy.contains('This is test task 1 Created by John Doe')


    })

    it('should test complete task functionality',()=>{
        createNewTask()
        clickUsingDataTestID('checkbox')
        cy.contains('Completed Tasks')
        cy.contains('1')
        cy.contains('0').should('not.exist')
    })

    it('should check delete task functionality',()=>{
        createNewTask()
        clickUsingDataTestID('delete-task')
        cy.contains('You have no task.')
    })

    it('should test logout functionality',()=>{
        clickUsingDataTestID('logout')
        checkCurrentRoute(LOGIN_PAGE_PATH)
    })
})