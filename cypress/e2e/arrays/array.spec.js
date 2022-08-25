// Working with multiple elements
// The way to work with arrays, or tab btns in cypress
// Firstly u write values into arrays and then u can write a different assertions
// [role="tab"] multuple element have 4 tab bts

describe("Array Demo", () => {
  beforeEach(() => {
    cy.visit("https://demoqa.com/tabs");
  });

  it("Arrays assertion", () => {
    const arrayList = ["What", "Origin", "Use", "More"];

    cy.get('[role="tab"]').should("have.length", 4);
    cy.get('[role="tab"]').each((item, index, list) => {
      expect(list).to.have.length(4); // //two ways to check length of an  array
      cy.wrap(item).should("contain.text", arrayList[index]);
      expect(Cypress.$(item).text()).to.eq(arrayList[index]); // two ways to check what exact text is in array
    });
  });
});
