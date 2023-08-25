describe("Data-Driven API Testing with Cypress", () => {

    const testFirstNames = ["John", "Sally", "Micheal"];
  
    testFirstNames.forEach((firstName) => {
  
      it.only(`Retrieves booking IDs for ${firstName}`, () => {
        console.log(firstName);
        cy.request(`GET`, `https://restful-booker.herokuapp.com/booking?firstname=${firstName}`).then((response) => {
  
          expect(response.status).to.eq(200);

          expect(response.body).to.have.length.greaterThan(0);
          //all three names run succesfully but there are no bookings with the name
          //Micheal so test fails when it reaches Michael.
      });
  
      });
  
    });
  
  });