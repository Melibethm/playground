describe('login test', () => {
    it ('should sign in succesfully', () => {
    launchApplication
    enterUsername('username');
    enterPassword('password');
    clickLoginButton('log-in');

    function launchApplication() {
        cy.visit ('https://demo.applitools.com/')}
    function enterUsername() {
        cy.visit ('https://demo.applitools.com/')
        cy.get('#username').type('username').should('have.value', 'username');}
    function enterPassword() {
        cy.visit ('https://demo.applitools.com/')
        cy.get ("#password").type("password");}
    function clickLoginButton(){
        cy.visit ('https://demo.applitools.com/')
        cy.get('#log-in').click();}
    function verifyLoginSuccess() {
        cy.get ('body')
        }
})  
})      