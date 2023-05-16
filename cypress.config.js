const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
  screenshotOnRunFailure = true; //FOR HTML REPORTS
  require("cypress-mochawesome-reporter/plugin")(on); //FOR HTML REPORTS
  // implement node event listeners here
  //This is required for the preprocessor to be generate json, where my test files are, if it  want to run file, plugins
  return config;
}
module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", //FOR GENERATING HTML REPORT
  e2e: {
    setupNodeEvents,
    //you have to prpvide the path of the test script// will be  stored as specPattern
    specPattern: "cypress/integration/example/*.js",
  },
});
