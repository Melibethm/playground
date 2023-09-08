describe('template spec', () => {
  it('valid login', () => {
    //nagivating to website
    cy.visit('https://www.saucedemo.com/')
    //locating username field and typing username
    cy.get('#user-name').type ('standard_user')
    //locating password field and typing password
    cy.get('#password').type ('secret_sauce')
    //locating login button and clicking it
    cy.get('login-button').click();
    //confirming login was succesfull
    cy.get('body')
   })

  it('invalid login', () => { 
    //nagivating to website
    cy.visit('https://www.saucedemo.com/')
    //locating username field and typing username
    cy.get('#user-name').type ('standard_user')
    //locating password and typing password
    cy.get('#password').type ('secret_sauce1')
    //locating login buttong and clicking it
    cy.get('login-button').click()
    //error message should show up because wrong password was entered
    cy.get('#error-message-container error')
  })
  
   it('inventory page', () => {
    //nagivating to website
    cy.visit('https://www.saucedemo.com/')
    //locating username field and typing username
    cy.get('#user-name').type ('standard_user')
    //locating password and typing password
    cy.get('#password').type ('secret_sauce')
     //locating login buttong and clicking it
    cy.get('login-button').click();
    //should nagivate to inventory page
    cy.url().should ('eq', 'https://www.saucedemo.com/inventory.html')

  })

  it ('add to cart', () => {
    //nagivating to website
    cy.visit('https://www.saucedemo.com/')
    //locating username field and typing username
    cy.get('#user-name').type ('standard_user')
    //locating password and typing password
    cy.get('#password').type ('secret_sauce')
     //locating login buttong and clicking it
    cy.get('login-button').click();
    //locating add to cart button and clicking it 
    cy.get('#add-to-cart-sauce-labs-backpack').click();
  })
    
  it('go to cart')
    //nagivating to website
    cy.visit('https://www.saucedemo.com/')
    //locating username field and typing username
    cy.get('#user-name').type ('standard_user')
    //locating password and typing password
    cy.get('#password').type ('secret_sauce')
    //locating login buttong and clicking it
    cy.get('login-button').click();
    //locating cart button and clicking it 
    cy.get ('#shopping_cart_link').click();
  
  

  

   })
