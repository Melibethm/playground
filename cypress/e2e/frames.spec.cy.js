describe('iframes', () => {
 it('frames', () => { 
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    cy.visit('https://demoqa.com/frames')
    cy.get('#frame1').then(($iframe) => {
        const iframecontent=$iframe.contents().find('This is a sample page')
        })

    cy.get('#frame2').then(($iframe) => {
        const iframecontent=$iframe.contents().find('This is a sample page')
        })
    });

 it ('nested frames', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        cy.visit('https://demoqa.com/nestedframes')
        cy.get('#frame1').should('have.nested.property', 'Child iframe')

      })


     })
  })

