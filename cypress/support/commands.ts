//dont forget to import it to support/e2e.ts
/// <reference types="cypress" />

Cypress.Commands.add("typeLogin", (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
});

declare namespace Cypress {
  interface Chainable {
    typeLogin: (username: string, password: string) => void;
  }
}
