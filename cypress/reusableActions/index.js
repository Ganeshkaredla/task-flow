
import {HOME_PAGE_PATH,LOGIN_PAGE_PATH} from '../constants/RouteConstants'


export function initCypress() {
    Cypress.on('uncaught:exception', (err, runnable) => {
       return false
    })
 }

 export function loginUser() {
    initCypress()
    cy.setCookie('ZIN59IabAewDM9p9xsM', 'accesstoken')
    setLocalStorage('user_name', 'John Doe')
    setLocalStorage('profile_pic', 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY')
 }

 export function setViewPortSize(width, height) {
    cy.viewport(width, height)
 }
 


 export function goToTasksDashboard() {
    // initCypress()
    cy.visit(HOME_PAGE_PATH)
 }
 
 export function goToLoginPage(){
     cy.visit(LOGIN_PAGE_PATH)
 }


 export function clickUsingDataTestID(dataTestID) {
    return cy.get(`[data-testid=${dataTestID}]`).click()
 }

 export function fillElementByDataTestID(dataTestID, text) {
    cy.get(`[data-testid=${dataTestID}]`).type(text)
 }

 export function checkCurrentRoute(route) {
    cy.url().should('include', route)
 }

 export function setLocalStorage(key,value){
     window.localStorage.setItem(key,value)
 }