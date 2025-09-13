describe('Cypress Example Site Test', () => {
  it('Visits the Cypress example site and checks features', () => {
    cy.visit('https://example.cypress.io')

    // Verify page has loaded correctly
    cy.contains('Kitchen Sink').should('be.visible')

    // Navigate to Querying page
    cy.contains('Querying').click()

    // Assert elements exist on Querying page
    cy.get('#query-btn').should('exist').and('be.visible')

    // Take a screenshot
    cy.screenshot('querying-page')
  })
})
