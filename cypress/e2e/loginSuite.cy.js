describe('SauceDemo Login Suite', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.wait(2000)  // wait 2 seconds after visiting
  })

  it('Valid Login', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.wait(1000)
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.wait(1000)
    cy.get('[data-test="login-button"]').click()
    cy.wait(2000)

    cy.url().should('include', '/inventory')
    cy.contains('Products').should('be.visible')
  })

  it('Invalid Login - wrong password', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.wait(1000)
    cy.get('[data-test="password"]').type('wrong_password')
    cy.wait(1000)
    cy.get('[data-test="login-button"]').click()
    cy.wait(2000)

    cy.get('[data-test="error"]').should('contain', 'Username and password do not match')
  })

  it('Logout after login', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.wait(1000)
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.wait(1000)
    cy.get('[data-test="login-button"]').click()
    cy.wait(2000)

    cy.get('#react-burger-menu-btn').click()
    cy.wait(1000)
    cy.get('#logout_sidebar_link').click()
    cy.wait(2000)

    cy.url().should('include', 'saucedemo.com/')
    cy.get('[data-test="login-button"]').should('be.visible')
  })

})
