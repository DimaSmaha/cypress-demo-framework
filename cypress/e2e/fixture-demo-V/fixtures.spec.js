const loginPage = require("../../pages/saucedemo/loginPage");

describe("Fixtures Demo", function () {
  beforeEach(function () {
    cy.visit("https://www.saucedemo.com/");

    cy.fixture("fixtures-demo/sauceCredentials").then((credentials) => {
      this.credentials = credentials;
    });
  });

  it("Standard User", function () {
    loginPage.userInput.type(this.credentials.standardUsername);
    loginPage.passInput.type(this.credentials.systemPassword);
    loginPage.loginBtn.click();
    cy.get(".title").should("contain.text", "Products");
  });

  it("Incorrect Username", function () {
    loginPage.userInput.type(this.credentials.dummyUsername);
    loginPage.passInput.type(this.credentials.systemPassword);
    loginPage.loginBtn.click();
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Incorrect Password", function () {
    loginPage.userInput.type(this.credentials.standardUsername);
    loginPage.passInput.type(this.credentials.dummyPassword);
    loginPage.loginBtn.click();
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Incorrect Password", function () {
    loginPage.userInput.type(this.credentials.lockedUsername);
    loginPage.passInput.type(this.credentials.systemPassword);
    loginPage.loginBtn.click();
    cy.get('[data-test="error"]').should(
      "contain.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("Correct pass", function () {
    loginPage.userInput.type(this.credentials.standardUsername);
    loginPage.passInput.type(this.credentials.systemPassword);
    loginPage.loginBtn.click();
    cy.get(".title").should("contain.text", "Products");
  });
});
