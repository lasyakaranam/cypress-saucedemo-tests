import './commands'

// prevent uncaught exceptions in the AUT from failing tests (optional)
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
