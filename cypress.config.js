const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    allure: true,
  },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },
    experimentalStudio : true, 
  },
})
