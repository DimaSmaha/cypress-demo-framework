//Other way to declare custom commands and dont forget to import it to support/e2e.ts

/// <reference types="cypress" />

function typeLogin2(username: string, password: string): void {
  cy.get('[data-test="username"]').type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
}

declare namespace Cypress {
  interface Chainable {
    typeLogin2: typeof typeLogin2;
  }
}

Cypress.Commands.add("typeLogin2", typeLogin2);
