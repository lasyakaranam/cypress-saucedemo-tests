describe('Login Test on SauceDemo', () => {
  it('Logs in with valid credentials', () => {
    // Visit the login page
    cy.visit('https://www.saucedemo.com/')

    // Enter username
    cy.get('[data-test="username"]').type('standard_user')

    // Enter password
    cy.get('[data-test="password"]').type('secret_sauce')

    // Click Login button
    cy.get('[data-test="login-button"]').click()

    // Assert that inventory page loaded
    cy.url().should('include', '/inventory')
    cy.contains('Products').should('be.visible')

    // Take screenshot after login
    cy.screenshot('saucedemo-login-success')
  })
})
