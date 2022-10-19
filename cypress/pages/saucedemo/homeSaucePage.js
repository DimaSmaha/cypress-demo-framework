class homeSaucePage {
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  get usernameInput() {
    cy.get("#user-name");
  }

  get passwordInput() {
    cy.get("#password");
  }

  typeLoginAndInput(username, password) {
    this.usernameInput.type(username);
    this.passwordInput.type(password);
  }
}

module.exports = new homeSaucePage();
