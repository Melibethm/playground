cypress.commands.add("clickbutton", (label) => {
    cy.get('a').contains(label).click();
    })