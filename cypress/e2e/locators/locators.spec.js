let username = "standard_user";
let password = "secret_sauce";

describe("Locators in Cypress", function () {
  beforeEach(function () {
    cy.visit("https://www.saucedemo.com/");
  });

  it("GET Method", function () {
    cy.get("form").children().eq(3).should("have.value", "Login");
    cy.get("form")
      .children()
      .not(".form_group")
      .eq(1)
      .should("have.value", "Login");
    cy.get('[class="form_group"]').should("have.length", 2); // here in div we have only 2 el with this class, but overally 4 siblings
    cy.get('[class="form_group"]').siblings().should("have.length", 4); // gets all siblings in div with atleast one el with this class

    cy.get("#user-name").type(username);
    cy.get("input#password").type(password);
    cy.get('[data-test="login-button"]').click();
  });

  it("EQ|FIRST|LAST Method", function () {
    cy.get("input").first().type(username);
    cy.get("input").eq(1).type(password);
    cy.get("input").last().click();
  });

  it("FILTER Method", function () {
    cy.get("input").filter('[type="text"]').type(username);
    cy.get("input").filter('[type="password"]').type(password);
    cy.get("input").filter('[type="submit"]').click();
  });

  it("FIND Method", function () {
    cy.get("form").find("input").eq(0).type(username);
    cy.get("form").find("input").eq(1).type(password);
    cy.get("form").find("input").eq(2).click();
  });

  it("PARENT Method", function () {
    cy.get("form").parent().should("have.class", "login-box");
  });
});
