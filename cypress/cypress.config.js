const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // When testing your local app, set baseUrl to e.g. "http://localhost:3000"
    // baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    video: true,
    screenshotOnRunFailure: true,
  },
})
