const { defineConfig } = require("cypress");
const preprocessor = require("cypress-cucumber-preprocessor"); // Importa o módulo

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
