describe('SauceDemo End-to-End Suite with Add & Remove', () => {

  beforeEach(() => {
    // Visit login page
    cy.visit('https://www.saucedemo.com/')
    cy.wait(2000)

    // Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.wait(500)
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.wait(500)
    cy.get('[data-test="login-button"]').click()
    cy.wait(2000)
  })

  it('Add product to cart and remove it', () => {
    // Add backpack
    cy.log('Adding backpack to cart')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.wait(1000)
    cy.get('.shopping_cart_badge').should('contain', '1')
    cy.wait(1000)

    // Add bike light
    cy.log('Adding bike light to cart')
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.wait(1000)
    cy.get('.shopping_cart_badge').should('contain', '2')
    cy.wait(1000)

    // Open cart
    cy.get('.shopping_cart_link').click()
    cy.wait(2000)
    cy.url().should('include', '/cart')

    // Remove backpack
    cy.log('Removing backpack from cart')
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.wait(1000)
    cy.get('.shopping_cart_badge').should('contain', '1')
    cy.wait(1000)

    // Remove bike light
    cy.log('Removing bike light from cart')
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
    cy.wait(1000)
    cy.get('.shopping_cart_badge').should('not.exist')
    cy.wait(1000)
  })

  it('Checkout flow after adding products', () => {
    // Add backpack to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.wait(1000)
    cy.get('.shopping_cart_badge').should('contain', '1')
    cy.wait(500)

    // Open cart and start checkout
    cy.get('.shopping_cart_link').click()
    cy.wait(2000)
    cy.get('[data-test="checkout"]').click()
    cy.wait(2000)

    // Fill checkout information
    cy.get('[data-test="firstName"]').type('John')
    cy.wait(500)
    cy.get('[data-test="lastName"]').type('Doe')
    cy.wait(500)
    cy.get('[data-test="postalCode"]').type('12345')
    cy.wait(500)
    cy.get('[data-test="continue"]').click()
    cy.wait(2000)

    // Finish checkout
    cy.get('[data-test="finish"]').click()
    cy.wait(2000)
    cy.contains('Thank you for your order!').should('be.visible')
    cy.wait(2000)
  })

  it('Logout after actions', () => {
    // Open menu and logout
    cy.get('#react-burger-menu-btn').click()
    cy.wait(1000)
    cy.get('#logout_sidebar_link').click()
    cy.wait(2000)

    // Verify back on login page
    cy.url().should('include', 'saucedemo.com/')
    cy.get('[data-test="login-button"]').should('be.visible')
    cy.wait(2000)
  })

})
