const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mocha-junit-reporter',
  reporterOptions: {
    mochaFile: 'results/test-results-[hash].xml',
    toConsole: true,
  },
  e2e: {
   
  },
});
