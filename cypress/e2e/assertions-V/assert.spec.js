//Assertions are the validation steps that determine whether the specified step of the automated test case succeeded or not.
// In actual, Assertions validates the desired state of your elements, objects, or application under test

// Cypress bundles the popular Chai assertion library,
// as well as helpful extensions for Sinon and jQuery, bringing you dozens of powerful assertions for free.
// --- BDD & TDD Assertions

describe("Assertion Demo", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/radio-button");
  });

  it("TDD Assertions", () => {
    cy.log("-- Length Check");
    cy.get('input[type="radio"]').should("have.length", 3);

    cy.log("-- Class Check");
    cy.get('input[type="radio"]').eq(2).should("have.class", "disabled");

    //Negative Assertions
    // We recommend using negative assertions to verify that a specific condition
    // is no longer present after the application performs an action. For example,
    // when a previously completed item is unchecked, we might verify that a CSS class is removed.
    cy.log("-- Exist Check");
    cy.get(".mt-3").should("not.exist");

    //Multiple Assertions
    cy.log("-- Text Check");
    cy.get('input[type="radio"]').eq(0).click({ force: true });
    cy.get(".mt-3")
      .should("have.text", "You have selected Yes")
      .and("include.text", "Yes")
      .and("not.contain", "Test Word");

    cy.log("-- CSS check");
    cy.get(".text-success").should("have.css", "color", "rgb(40, 167, 69)");
  });

  it("BDD Assertions", () => {
    //Should call back & Multiple assertions
    cy.log("-- Length & Class Check");
    cy.get('input[type="radio"]').should(($element) => {
      expect($element).to.have.lengthOf(3);
      expect($element).to.have.class("disabled");
    });

    cy.log("-- Text Check");
    cy.get('input[type="radio"]').eq(0).click({ force: true });
    cy.get(".mt-3").should(($element) => {
      expect($element).to.have.text("You have selected Yes");
      expect($element).to.include.text("Yes");
      expect($element).to.not.include.text("No");
    });
  });

  it("TDD Assertions 2", () => {
    cy.log("-- Text Check");
    cy.get("#item-0").should("contain.text", "Box");

    cy.log("-- Visibility Check");
    cy.get(".main-header").should("exist").should("be.visible");

    //Negative Assertions
    // We recommend using negative assertions to verify that a specific condition
    // is no longer present after the application performs an action. For example,
    // when a previously completed item is unchecked, we might verify that a CSS class is removed.
    cy.log("-- Exist Check");
    cy.get(".mt-3").should("not.exist");

    //Multiple Assertions
    cy.log("-- Text Check");
    cy.get('input[type="radio"]').eq(0).click({ force: true });
    cy.get(".mt-3")
      .should("have.text", "You have selected Yes")
      .and("include.text", "Yes")
      .and("not.contain", "Test Word");

    cy.log("-- CSS check");
    cy.get(".text-success").should("have.css", "color", "rgb(40, 167, 69)");
  });

  it("BDD Assertions 2", () => {
    //Should call back & Multiple assertions
    cy.log("-- Length & Class Check");
    cy.get('input[type="radio"]').should(($radiobtn) => {
      expect($radiobtn).to.have.class("disabled"),
        expect($radiobtn).to.have.lengthOf(3);
    });

    /// DIRECT EXPECTS WONT WORK
    // expect(homeSaucePage.radioExprs).to.have.class("disabled"); // Dont work throught getter from pages
    // const radio = 'input[type="radio"]';
    // expect(radio).to.have.class("disabled");    // Dont work throught consts
    // expect('input[type="radio"]').to.have.class("disabled"); // Dont work throught locator
    // expect(cy.get('input[type="radio"]')).to.have.class("disabled"); // Dont work throught get

    cy.log("-- Text Check");
    cy.get('input[type="radio"]').eq(0).click({ force: true });
    cy.get(".mt-3").should(($radiobtn) => {
      expect($radiobtn).to.contain.text("You have selected ");
      expect($radiobtn).to.have.text("You have selected Yes");
      expect($radiobtn).to.include.text("Yes");
      expect($radiobtn).to.not.include.text("No");
    });
  });
});
