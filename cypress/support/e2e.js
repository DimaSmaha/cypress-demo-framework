// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import "@applitools/eyes-cypress/commands";

import "./commands";
import "./commands-2";
import "cypress-mochawesome-reporter/register";
import "@cypress-audit/lighthouse/commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')
require("cypress-grep")();
require("cypress-xpath");

//Added uncaught:exception for specific error
Cypress.on("uncaught:exception", (err) => {
  // we expect a 3rd party library error with message
  // '> e(...).setup is not a function'
  // and don't want to fail the test so we return false
  if (err.message.includes("is not a function")) {
    return false;
  }
  // we still want to ensure there are no other unexpected
  // errors, so we let them fail the test
});
