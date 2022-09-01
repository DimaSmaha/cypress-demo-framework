class loginPage {
  get userInput() {
    return cy.get('[data-test="username"]');
  }

  get passInput() {
    return cy.get('[data-test="password"]');
  }

  get loginBtn() {
    return cy.get('[data-test="login-button"]');
  }
}

module.exports = new loginPage();
