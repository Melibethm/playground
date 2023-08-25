describe('API Testing with Cypress', () => {

    it('should return successful response', () => {
  
      cy.request('GET', 'https://restful-booker.herokuapp.com/ping')
  
        .should((response) => {
  
          expect(response.status).to.eq(201);
  
          expect(response.body).to.have.length.greaterThan(0);
  
        });
  
    });
  
  });
  describe("Data-Driven API Testing with Cypress", () => {

    const testFirstNames = ["John", "Sally"];
  
    testFirstNames.forEach((firstName) => {
  
      it(`Retrieves booking IDs for ${firstName}`, () => {
        console.log(firstName);
        cy.request(`GET`, `https://restful-booker.herokuapp.com/booking?firstname=${firstName}`).then((response) => {
  
          expect(response.status).to.eq(200);
      });
  
      });
  
    });
  
  });
  // cypress/e2e/api-tests.cy.js

describe('API Testing with Cypress', () => {

    it('should retrieve all booking IDs', () => {
  
      cy.request('GET', 'https://restful-booker.herokuapp.com/booking')
  
        .should((response) => {
  
          expect(response.status).to.eq(200);

  
        });
  
    });
  
  });
  function getBookingById(bookingId) {

    return cy.request(`GET`, `https://restful-booker.herokuapp.com/booking`);
  
  }
  
  describe("Custom Functions for API Testing with Cypress", () => {
  
    it("Retrieves booking details for a specific ID", () => {
  
      getBookingById(1).then((response) => {
  
        expect(response.status).to.eq(200);

  
      });
  
    });
  
  });
  
  