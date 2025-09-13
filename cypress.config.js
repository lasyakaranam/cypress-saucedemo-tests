const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Change to your app URL
    specPattern: 'cypress/e2e/**/*.cy.js', // Test files location
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // Node event listeners can go here
    }
  }
})
