describe('Alerts', () => {
    //Alert with close button
   it.skip('Alert', () => {
   cy.visit('https://demoqa.com/alerts')
   cy.get('#alertButton').click();
   cy.on('window:alert',(t)=> {
        expect(t).to.contains('You clicked a button');
    // alert window automatically closed by cypress
   })
   })
   
   
   it.skip('Confirm Alert - cancel button', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    cy.visit('https://demoqa.com/alerts', { timeout: 120000 }); 
    cy.get('#confirmButton').click();
    cy.on('window:confirm',(t)=> {
        expect(t).to.contains('Do you confirm action?');})
    cy.on('window:confirm',()=> false);
    cy.get('#confirmResult').should('have.text', 'You selected Cancel')
    })
    
    
    it('Confirm Alert - wait time', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        cy.visit('https://demoqa.com/alerts', { timeout: 120000 }); 
        cy.get('#timerAlertButton').click();
        // Wait for 5 seconds
        cy.wait(5000); 
        cy.on('window:alert',(t)=> {
            expect(t).to.contains('This alert appeared after 5 seconds');})
        
        })









})