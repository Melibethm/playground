function getBookingById(bookingId) {

    return cy.request(`GET`, `https://restful-booker.herokuapp.com/booking`);
  
  }
  
  describe("Custom Functions for API Testing with Cypress", () => {
  
    it("Retrieves booking details for a specific ID", () => {
  
      getBookingById(1).then((response) => {
  
        expect(response.status).to.eq(200);
            //test failing at this point because booking id information is not pulling up. 
            //the property does not have include booking id number but adding "firstname"
            //as a property isnt working either to pull information.
        expect(response.body).to.have.property('"fistname"', 1);
      });
  
    });
  
  });