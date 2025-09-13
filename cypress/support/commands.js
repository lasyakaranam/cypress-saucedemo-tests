// Highlight helper command
Cypress.Commands.add('highlight', { prevSubject: 'element' }, (subject) => {
  const el = subject[0]
  // Add red border and subtle background to visualize element
  el.style.border = '3px solid red'
  el.style.backgroundColor = 'rgba(255,0,0,0.1)'
  el.style.transition = 'all 0.3s ease'
  return subject
})

// Updated searchGoogle command with highlighting
Cypress.Commands.add('searchGoogle', (query) => {
  // Visit Google homepage
  cy.visit('https://www.google.com')
  cy.wait(2000) // wait to visualize page load

  // Find search input, highlight, and type query
  cy.get('input[name="q"]', { timeout: 10000 })
    .highlight()
    .type(`${query}{enter}`)

  cy.wait(2000) // pause to see results
})
