describe('API Testing with Cypress', () => {

    it('should return successful response', () => {
  
      cy.request('GET', 'https://restful-booker.herokuapp.com/ping')
  
        .should((response) => {
  
          expect(response.status).to.eq(201);
  
          expect(response.body).to.have.length.greaterThan(0);
  
        });
  
    });
  
  });