//Data Driven Testing using data from a JSON file.

describe("Data Driven Test reading data from a JSON file", function () {
  beforeEach(function () {
    cy.visit("https://www.saucedemo.com/");
    cy.fixture("data-driven/json-fixtures.json").then(function (data) {
      this.data = data;
    });
  });

  it("somethings", function () {
    cy.get('[data-test="username"]').type(this.data.user2.username);
    cy.get('[data-test="password"]').type(this.data.user2.password);
    cy.get('[data-test="login-button"]').click();

    if (this.data.user1.username === "Standard User") {
      cy.get(".title").should("contain.text", this.data.user1.expected);
    } else {
      cy.get('[data-test="error"]').should(
        "contain.text",
        this.data.user2.expected
      );
    }
  });
});
