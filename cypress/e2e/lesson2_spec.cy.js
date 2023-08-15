describe('template spec', () => {
  it('The h1 header is visible', () => {
    cy.visit('https://example.cypress.io')
    cy.get ("h1").contains ("Kitchen Sink")
    cy.get('ul.home-list>li>a').contains('Querying').click()
      cy.url().should('include', '/commands/querying')
      cy.visit('https://example.cypress.io')
      cy.get('ul.home-list>li>a').contains ('Actions').click()
      cy.url().should('include', '/commands/actions')
      cy.get('.action-email')
      .type('fake@email.com').should('have.value', 'fake@email.com')
      
  }) 
})
  

