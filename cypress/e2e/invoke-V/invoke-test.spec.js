//https://api.jquery.com/category/manipulation/general-attributes/

describe("Invoke Test Scripts", function () {
  beforeEach(function () {
    cy.visit("https://demoqa.com/links");
  });

  it("Invoke to remove target attribute", () => {
    cy.get("#simpleLink").invoke("removeAttr", "target");
    cy.get("#simpleLink").click();
    cy.location().then((yieldedObject) => cy.log(yieldedObject.href));
  });

  it("Invoke to get an attribute", () => {
    cy.get("#simpleLink")
      .invoke("attr", "target")
      .then((target) => cy.log(target));

    //There is a direct way to validate this with an assertion
    cy.get("#simpleLink").should("have.attr", "target", "_blank");
  });

  it("Invoke to get text from an element", () => {
    cy.get(".main-header")
      .invoke("text")
      .then((text) => cy.log(text));
  });

  it("Invoke to get info from body array", () => {
    cy.request("")
      .its("body")
      .invoke("slice", 0, 5) // invoke some part, first one part, and 5 parts from this part
      .its("length")
      .should("eq", 5);
  });

  it("Invoke to check visibility", () => {
    cy.get("").invoke("attr", "aria-expanded").should("eq", "false");

    cy.get("").click().invoke("attr", "aria-expanded").should("eq", "true");
  });
});
